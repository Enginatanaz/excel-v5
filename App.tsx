import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Table,
  CheckCircle2,
  Volume2,
  Pause,
  Play,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Target,
  FileSpreadsheet,
} from 'lucide-react';
import { Navbar, ActiveTab } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { ExcelWorkspace } from './components/Spreadsheet/ExcelWorkspace';
import { AITeacherPanel } from './components/Teacher/AITeacherPanel';
import { TaskPanel } from './components/Exercise/TaskPanel';
import { QuizModal } from './components/Exercise/QuizModal';
import { DataChartModal } from './components/Charts/DataChartModal';
import { LessonHeaderBar } from './components/LessonHeaderBar';
import { CURRICULUM_PHASES } from './data/curriculum';
import { Lesson, Sheet, CellData, UserProgress } from './types/excel';
import {
  loadUserProgress,
  saveUserProgress,
  markLessonCompleted,
  saveQuizResult,
  isLessonUnlocked,
  markStepCompleted,
} from './services/storageService';
import { recalculateAllCells } from './engine/formulaEngine';
import { voiceEngine } from './engine/voiceEngine';

export type MobileWorkbenchTab = 'spreadsheet' | 'teacher' | 'task';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [currentLesson, setCurrentLesson] = useState<Lesson>(CURRICULUM_PHASES[0].lessons[0]);
  const [activeSheet, setActiveSheet] = useState<Sheet>(
    CURRICULUM_PHASES[0].lessons[0].initialWorkbook.sheets[0]
  );

  // Teaching and Task State
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const [selectedCellAddr, setSelectedCellAddr] = useState<string>('B2');
  const [selectedCellData, setSelectedCellData] = useState<CellData | null>(null);

  // Mobile & Focus State
  const [mobileTab, setMobileTab] = useState<MobileWorkbenchTab>('spreadsheet');
  const [isDesktopFocusMode, setIsDesktopFocusMode] = useState<boolean>(false);
  const [isVoicePlaying, setIsVoicePlaying] = useState<boolean>(false);

  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState<boolean>(false);

  // Track voice playback state for audio badge
  useEffect(() => {
    const unsubscribe = voiceEngine.subscribe((status) => {
      setIsVoicePlaying(status === 'playing' || status === 'preparing');
    });
    return () => unsubscribe();
  }, []);

  // Sync with persistent progress on mount
  useEffect(() => {
    const loaded = loadUserProgress();
    setProgress(loaded);

    for (const phase of CURRICULUM_PHASES) {
      const match = phase.lessons.find((l) => l.id === loaded.currentLessonId);
      if (match) {
        setCurrentLesson(match);
        setActiveSheet(match.initialWorkbook.sheets[0]);
        break;
      }
    }
  }, []);

  // When switching lessons
  const handleSelectLesson = (lesson: Lesson) => {
    // Enforce sequential locking: cannot open locked lesson
    if (!isLessonUnlocked(lesson.id, progress)) {
      return;
    }

    setCurrentLesson(lesson);
    const initialSheet = lesson.initialWorkbook.sheets[0];
    const computedSheet: Sheet = {
      ...initialSheet,
      cells: recalculateAllCells(initialSheet.cells),
    };
    setActiveSheet(computedSheet);
    setActiveStepIndex(0);
    setCurrentTaskIndex(0);

    const updatedProgress = { ...progress, currentLessonId: lesson.id };
    setProgress(updatedProgress);
    saveUserProgress(updatedProgress);
    setActiveTab('workspace');
  };

  const handleSheetChange = (updatedSheet: Sheet) => {
    setActiveSheet(updatedSheet);
    const cell = updatedSheet.cells[selectedCellAddr] || null;
    setSelectedCellData(cell);
  };

  const handleCellSelect = (addr: string, cell: CellData | null) => {
    setSelectedCellAddr(addr);
    setSelectedCellData(cell);
  };

  // Chapter completion
  const handleStepCompleted = (stepNum: number) => {
    const updated = markStepCompleted(currentLesson.id, stepNum);
    setProgress(updated);
  };

  // Task completion
  const handleTaskCompleted = (taskIdx: number) => {
    const updatedTasks = [...currentLesson.tasks];
    if (updatedTasks[taskIdx]) {
      updatedTasks[taskIdx] = { ...updatedTasks[taskIdx], isCompleted: true };
    }
    setCurrentLesson((prev) => ({ ...prev, tasks: updatedTasks }));

    // Recalculate sheet so any dependent formulas update immediately
    const computedCells = recalculateAllCells(activeSheet.cells);
    setActiveSheet((prev) => ({ ...prev, cells: computedCells }));

    // If all tasks done and no quiz exists, mark lesson complete
    const allDone = updatedTasks.every((t) => t.isCompleted);
    if (allDone && !currentLesson.quiz) {
      const updated = markLessonCompleted(currentLesson.id);
      setProgress(updated);
    }
  };

  // Quiz completion
  const handleQuizCompleted = (score: number) => {
    const updated = saveQuizResult(currentLesson.id, score);
    if (score >= (currentLesson.quiz?.passingScore || 80)) {
      const finished = markLessonCompleted(currentLesson.id);
      setProgress(finished);
    } else {
      setProgress(updated);
    }
  };

  // Move to next lesson in curriculum
  const handleNextLesson = () => {
    let foundNext = false;
    for (let p = 0; p < CURRICULUM_PHASES.length; p++) {
      const phase = CURRICULUM_PHASES[p];
      const lIdx = phase.lessons.findIndex((l) => l.id === currentLesson.id);
      if (lIdx !== -1) {
        if (lIdx < phase.lessons.length - 1) {
          handleSelectLesson(phase.lessons[lIdx + 1]);
          foundNext = true;
          break;
        } else if (p < CURRICULUM_PHASES.length - 1) {
          handleSelectLesson(CURRICULUM_PHASES[p + 1].lessons[0]);
          foundNext = true;
          break;
        }
      }
    }
    if (!foundNext) {
      setActiveTab('dashboard');
    }
  };

  const totalLessonsCount = CURRICULUM_PHASES.reduce((acc, p) => acc + p.lessons.length, 0);

  // Active step target cell
  const activeTeachingStep = currentLesson.teachingSteps[activeStepIndex];
  const activeTask = currentLesson.tasks[currentTaskIndex];
  const targetHighlightCell = activeTask?.targetCell || activeTeachingStep?.targetCell;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-neutral-100 font-sans text-neutral-900">
      {/* 1. Header Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentLessonTitle={currentLesson.title}
        completedCount={progress.completedLessonIds.length}
        totalLessons={totalLessonsCount}
      />

      {/* 2. Main Content Views */}
      <main className="flex-1 overflow-hidden relative">
        {activeTab === 'dashboard' && (
          <div className="h-full overflow-y-auto excel-scrollbar">
            <DashboardView
              progress={progress}
              onSelectLesson={handleSelectLesson}
              onContinueCurrent={() => setActiveTab('workspace')}
            />
          </div>
        )}

        {activeTab === 'workspace' && (
          <div className="h-full flex flex-col bg-neutral-200/50 overflow-hidden">
            {/* Top Lesson Header: Breadcrumb, Objectives, Status Badges, Next Lesson Gate */}
            <LessonHeaderBar
              lesson={currentLesson}
              progress={progress}
              onBackToCurriculum={() => setActiveTab('dashboard')}
              onNextLesson={handleNextLesson}
              onOpenQuiz={() => setIsQuizOpen(true)}
              allTasksCompleted={currentLesson.tasks.every((t) => t.isCompleted)}
            />

            {/* 3-Column Workbench */}
            <div className="flex-1 grid grid-cols-12 gap-2 p-2 overflow-hidden min-h-0">
              {/* Left Column: AI Teacher Panel */}
              <div className="col-span-12 lg:col-span-3 h-full overflow-hidden">
                <AITeacherPanel
                  lessonId={currentLesson.id}
                  lessonTitle={currentLesson.title}
                  lessonConcept={currentLesson.shortDesc}
                  steps={currentLesson.teachingSteps}
                  activeStepIndex={activeStepIndex}
                  onStepChange={setActiveStepIndex}
                  selectedCell={selectedCellAddr}
                  selectedCellData={selectedCellData}
                  taskInstruction={activeTask?.instruction}
                  mistakeHistory={progress.mistakes}
                  completedSteps={progress.completedSteps?.[currentLesson.id] || []}
                  onStepCompleted={handleStepCompleted}
                  onStartPractice={() => {
                    const targetCell = currentLesson.tasks[0]?.targetCell || 'A1';
                    setSelectedCellAddr(targetCell);
                    setSelectedCellData(activeSheet.cells[targetCell] || null);
                  }}
                />
              </div>

              {/* Middle Column: Interactive Spreadsheet Workspace */}
              <div className="col-span-12 lg:col-span-6 h-full overflow-hidden">
                <ExcelWorkspace
                  sheet={activeSheet}
                  onSheetChange={handleSheetChange}
                  targetCell={targetHighlightCell}
                  onCellSelect={handleCellSelect}
                  onOpenChartModal={() => setIsChartModalOpen(true)}
                />
              </div>

              {/* Right Column: Task & Exercise Panel */}
              <div className="col-span-12 lg:col-span-3 h-full overflow-hidden">
                <TaskPanel
                  tasks={currentLesson.tasks}
                  currentTaskIndex={currentTaskIndex}
                  onTaskChange={setCurrentTaskIndex}
                  sheet={activeSheet}
                  onTaskCompleted={handleTaskCompleted}
                  onOpenQuiz={() => setIsQuizOpen(true)}
                  hasQuiz={!!currentLesson.quiz}
                  lessonId={currentLesson.id}
                  lesson={currentLesson}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sandbox' && (
          <div className="h-full flex flex-col p-3 bg-neutral-100">
            <div className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-neutral-200 mb-2">
              <div>
                <h3 className="text-xs font-bold text-neutral-900">Serbest Excel Masası (Sandbox)</h3>
                <p className="text-[11px] text-neutral-500">
                  Dilediğiniz formülü deneyin, kendi tablolarınızı oluşturun veya grafik çizin.
                </p>
              </div>
              <button
                onClick={() => setIsChartModalOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 cursor-pointer"
              >
                Grafik Görünümü
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ExcelWorkspace
                sheet={activeSheet}
                onSheetChange={handleSheetChange}
                onCellSelect={handleCellSelect}
                onOpenChartModal={() => setIsChartModalOpen(true)}
                isSandbox={true}
              />
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="h-full overflow-y-auto excel-scrollbar p-6 max-w-5xl mx-auto space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-4">
              <h2 className="text-lg font-bold text-neutral-900">Öğrenci Gelişim & Yetkinlik Karnesi</h2>
              <p className="text-xs text-neutral-500">
                Excel Akademi AI yapay zekâ öğretmeninin analiz ettiği kazanım oranları
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {Object.entries(progress.skillMastery).map(([skill, pct]) => (
                  <div key={skill} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold text-neutral-800">
                      <span>{skill}</span>
                      <span className="font-mono text-emerald-700">%{pct}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div style={{ width: `${pct}%` }} className="h-full bg-emerald-600 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Cert readiness */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-800 to-neutral-900 text-white flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-bold">Excel Akademi İleri Düzey Sertifikası</h3>
                <p className="text-xs text-emerald-200">
                  Tüm 18 fazı tamamlayıp bitirme sınavından %80 ve üzeri aldığınızda sertifikanız hazırlanacaktır.
                </p>
              </div>
              <button
                onClick={() => {
                  const certLesson = CURRICULUM_PHASES[17].lessons[0];
                  handleSelectLesson(certLesson);
                }}
                className="px-4 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-xs cursor-pointer"
              >
                Bitirme Sınavına Git
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 3. Global Modals */}
      {currentLesson.quiz && (
        <QuizModal
          quiz={currentLesson.quiz}
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          onQuizCompleted={handleQuizCompleted}
          onNextLesson={handleNextLesson}
        />
      )}

      <DataChartModal
        sheet={activeSheet}
        isOpen={isChartModalOpen}
        onClose={() => setIsChartModalOpen(false)}
      />
    </div>
  );
}
