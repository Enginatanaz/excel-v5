import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  Volume2,
  VolumeX,
  RotateCcw,
  Lightbulb,
} from 'lucide-react';
import { LessonTask, Sheet, Lesson } from '../../types/excel';
import { logMistake } from '../../services/storageService';
import { interactiveTeacherEngine, TaskEvaluationResult } from '../../engine/interactiveTeacherEngine';
import { voiceEngine } from '../../engine/voiceEngine';

interface TaskPanelProps {
  tasks: LessonTask[];
  currentTaskIndex: number;
  onTaskChange: (index: number) => void;
  sheet: Sheet;
  onTaskCompleted: (taskIndex: number) => void;
  onOpenQuiz: () => void;
  hasQuiz: boolean;
  lessonId: string;
  lesson?: Lesson;
  autoVoiceEnabled?: boolean;
}

export const TaskPanel: React.FC<TaskPanelProps> = ({
  tasks,
  currentTaskIndex,
  onTaskChange,
  sheet,
  onTaskCompleted,
  onOpenQuiz,
  hasQuiz,
  lessonId,
  lesson,
  autoVoiceEnabled = true,
}) => {
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [showPedagogicalDetails, setShowPedagogicalDetails] = useState<boolean>(false);
  const [validationStatus, setValidationStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [evaluationResult, setEvaluationResult] = useState<TaskEvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(autoVoiceEnabled);

  const currentTask = tasks[currentTaskIndex] || tasks[0];
  const allTasksCompleted = tasks.every((t) => t.isCompleted);

  // Validate student action in current task
  const handleCheckAction = async () => {
    if (!currentTask || !lesson) return;
    setIsEvaluating(true);

    try {
      // 1. Run rigorous local diagnostic inspection
      const localResult = interactiveTeacherEngine.evaluateTask(currentTask, sheet, lesson);

      const targetCellUpper = currentTask.validation.targetCell.toUpperCase();
      const cell = sheet.cells[targetCellUpper];

      // If failed, log mistake to learner progress history
      if (!localResult.isSuccess) {
        logMistake({
          lessonId,
          cellAddress: targetCellUpper,
          userFormula: cell?.raw || '',
          errorType: localResult.errorType || 'Hatalı İşlem',
          advice: localResult.statusMessage,
        });
      }

      let finalResult = localResult;

      // 2. Try fetching personalized AI feedback from Gemini endpoint if available
      try {
        const response = await fetch('/api/gemini/evaluate-task', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            taskTitle: currentTask.id,
            instruction: currentTask.instruction,
            targetCell: targetCellUpper,
            expectedValue: currentTask.validation.expectedValue,
            expectedFormulaKeywords: currentTask.validation.expectedFormulaKeywords,
            userFormula: cell?.raw || '',
            userComputedValue: cell?.computed ?? '',
            lessonTitle: lesson.title,
            lessonConcept: lesson.shortDesc,
            isSuccess: localResult.isSuccess,
            errorType: localResult.errorType,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.feedback) {
            finalResult = {
              ...localResult,
              teacherSpokenFeedback: data.feedback,
            };
          }
        }
      } catch (netErr) {
        // Network or offline fallback already handled cleanly by localResult
      }

      setEvaluationResult(finalResult);
      setValidationStatus(finalResult.isSuccess ? 'success' : 'error');

      // 3. Audio pedagogical feedback: Teacher speaks out the evaluation!
      if (isVoiceActive && finalResult.teacherSpokenFeedback) {
        voiceEngine.speak(finalResult.teacherSpokenFeedback, lessonId);
      }

      // If successful, notify parent
      if (finalResult.isSuccess) {
        onTaskCompleted(currentTaskIndex);
      }
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNextStep = () => {
    setValidationStatus('idle');
    setEvaluationResult(null);
    setHintLevel(0);
    if (currentTaskIndex < tasks.length - 1) {
      onTaskChange(currentTaskIndex + 1);
    }
  };

  const handleReplaySpokenFeedback = () => {
    if (evaluationResult?.teacherSpokenFeedback) {
      voiceEngine.speak(evaluationResult.teacherSpokenFeedback, lessonId);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-neutral-200 rounded-lg shadow-xs overflow-hidden">
      {/* 1. Header with Task Counter & Voice Toggle */}
      <div className="p-3.5 border-b border-neutral-200 bg-neutral-50/70">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-emerald-700 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-neutral-900 leading-tight">
                Uygulama & Görev Kontrolü
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                <span>Görev {currentTaskIndex + 1} / {tasks.length}</span>
                <span aria-hidden="true">·</span>
                <span>{allTasksCompleted ? 'Tamamlandı' : 'Uygulanıyor'}</span>
              </div>
            </div>
          </div>

          {/* Teacher Voice Feedback Toggle */}
          <button
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            title={isVoiceActive ? 'Sesli Öğretmen Geri Bildirimi Açık' : 'Ses Kapalı'}
            className={`p-1.5 rounded-md border transition-colors cursor-pointer ${
              isVoiceActive
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-700'
            }`}
          >
            {isVoiceActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 2. Task Checklist Overview */}
      <div className="p-2.5 border-b border-neutral-200 bg-neutral-50/40">
        <div className="space-y-1">
          {tasks.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => {
                setValidationStatus('idle');
                setEvaluationResult(null);
                onTaskChange(idx);
              }}
              className={`flex items-center justify-between p-2 rounded-md text-xs cursor-pointer transition-colors ${
                currentTaskIndex === idx
                  ? 'bg-emerald-50 border border-emerald-300 font-semibold text-emerald-900'
                  : t.isCompleted
                  ? 'bg-white text-neutral-700 hover:bg-neutral-100 border border-transparent'
                  : 'text-neutral-500 hover:bg-neutral-100 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {t.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <div
                    className={`w-4 h-4 rounded-full border text-[10px] flex items-center justify-center shrink-0 ${
                      currentTaskIndex === idx
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-neutral-300 text-neutral-500'
                    }`}
                  >
                    {idx + 1}
                  </div>
                )}
                <span className="truncate">Görev {idx + 1}: {t.targetCell}</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 font-normal shrink-0">
                {t.isCompleted ? 'Tamam' : 'Bekliyor'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Active Task Details & Real Feedback */}
      <div className="flex-1 p-3.5 overflow-y-auto excel-scrollbar space-y-3.5">
        {currentTask && (
          <>
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <span className="font-bold text-neutral-900">
                  Uygulama Yönergesi
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 font-mono text-[11px] font-semibold text-neutral-800">
                  Hedef: {currentTask.targetCell}
                </span>
              </div>
              <div className="text-xs text-neutral-800 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-200">
                <p>{currentTask.instruction}</p>
              </div>
            </div>

            {/* Dynamic Teacher Feedback Banner */}
            {evaluationResult && (
              <div
                className={`p-3 rounded-lg border text-xs space-y-1.5 transition-all ${
                  evaluationResult.isSuccess
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50/90 border-amber-300 text-amber-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold">
                    {evaluationResult.isSuccess ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Öğretmen Değerlendirmesi: Başarılı</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Öğretmen Gözlemi: Düzeltme Önerisi</span>
                      </>
                    )}
                  </div>

                  {evaluationResult.teacherSpokenFeedback && (
                    <button
                      onClick={handleReplaySpokenFeedback}
                      className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 hover:text-emerald-900 cursor-pointer"
                      title="Öğretmenin sesli yorumunu tekrar dinle"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Seslendir</span>
                    </button>
                  )}
                </div>

                <p className="text-[11px] leading-relaxed">
                  {evaluationResult.teacherSpokenFeedback || evaluationResult.statusMessage}
                </p>

                {evaluationResult.suggestedAction && !evaluationResult.isSuccess && (
                  <div className="pt-1 border-t border-amber-200/60 text-[10px] text-amber-800 font-medium">
                    Çözüm Yolu: {evaluationResult.suggestedAction}
                  </div>
                )}

                {evaluationResult.expertTip && evaluationResult.isSuccess && (
                  <div className="pt-1 border-t border-emerald-200/60 text-[10px] text-emerald-800 font-medium">
                    {evaluationResult.expertTip}
                  </div>
                )}
              </div>
            )}

            {/* 3-Tier Progressive Hints */}
            <div className="border border-neutral-200 rounded-lg p-3 bg-neutral-50/60">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Kademeli İpuçları</span>
                </div>
                {hintLevel < 3 && (
                  <button
                    onClick={() => setHintLevel((prev) => Math.min(3, prev + 1))}
                    className="text-[11px] text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer"
                  >
                    + {hintLevel === 0 ? 'İpucu Al' : 'Detayı Gör'}
                  </button>
                )}
              </div>

              {hintLevel === 0 ? (
                <p className="text-[11px] text-neutral-500">
                  Takıldığınızda tıklayarak kavramsal yönlendirme, formül şablonu veya tam çözümü açabilirsiniz.
                </p>
              ) : (
                <div className="space-y-2 text-xs">
                  {hintLevel >= 1 && currentTask.hints[0] && (
                    <div className="p-2 rounded bg-white border border-neutral-200 text-neutral-700 text-[11px]">
                      <span className="font-bold text-neutral-900">Seviye 1 (Kavram):</span>{' '}
                      {typeof currentTask.hints[0] === 'string' ? currentTask.hints[0] : (currentTask.hints[0] as any)?.text}
                    </div>
                  )}
                  {hintLevel >= 2 && currentTask.hints[1] && (
                    <div className="p-2 rounded bg-white border border-neutral-200 text-neutral-700 text-[11px]">
                      <span className="font-bold text-neutral-900">Seviye 2 (Sözdizimi):</span>{' '}
                      {typeof currentTask.hints[1] === 'string' ? currentTask.hints[1] : (currentTask.hints[1] as any)?.text}
                    </div>
                  )}
                  {hintLevel >= 3 && currentTask.hints[2] && (
                    <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-mono">
                      <span className="font-sans font-bold text-neutral-900">Seviye 3 (Doğrudan Çözüm):</span>{' '}
                      {typeof currentTask.hints[2] === 'string' ? currentTask.hints[2] : (currentTask.hints[2] as any)?.text}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Pedagogical Details: Goals, Criteria, Common Pitfalls */}
            {lesson && (
              <div className="border border-neutral-200 rounded-lg p-2.5 bg-neutral-50/70 space-y-2">
                <div
                  onClick={() => setShowPedagogicalDetails(!showPedagogicalDetails)}
                  className="flex items-center justify-between text-xs font-semibold text-neutral-800 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Öğrenme Hedefi & Yaygın Hatalar</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-normal">
                    {showPedagogicalDetails ? 'Kapat' : 'Göster'}
                  </span>
                </div>

                {showPedagogicalDetails && (
                  <div className="pt-2 border-t border-neutral-200 space-y-2 text-[11px]">
                    {lesson.primaryGoal && (
                      <div className="p-2 rounded bg-white border border-neutral-200 text-neutral-700">
                        <span className="font-bold text-emerald-800">Ana Amaç: </span>
                        <span>{lesson.primaryGoal}</span>
                      </div>
                    )}
                    {lesson.successCriteria && (
                      <div className="p-2 rounded bg-emerald-50/60 border border-emerald-200 text-emerald-950">
                        <span className="font-bold text-emerald-900">Başarı Ölçütü: </span>
                        <span>{lesson.successCriteria}</span>
                      </div>
                    )}
                    {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
                      <div className="p-2 rounded bg-amber-50/70 border border-amber-200 text-amber-950">
                        <span className="font-bold text-amber-900">Yaygın Hatalar:</span>
                        <ul className="list-disc pl-4 space-y-0.5 text-neutral-700 mt-1">
                          {lesson.commonMistakes.map((mistake, idx) => (
                            <li key={idx}>{mistake}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* 4. Bottom Action Deck: "Görevi Yaptım (Sonucu Kontrol Et)" */}
      <div className="p-3.5 border-t border-neutral-200 bg-neutral-50 space-y-2">
        <button
          onClick={handleCheckAction}
          disabled={isEvaluating}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs cursor-pointer disabled:opacity-50"
        >
          {isEvaluating ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Öğretmen İnceliyor...</span>
            </>
          ) : (
            <>
              <Check className="w-4 h-4" />
              <span>Görevi Yaptım (Sonucu Kontrol Et)</span>
            </>
          )}
        </button>

        {currentTask?.isCompleted && currentTaskIndex < tasks.length - 1 && (
          <button
            onClick={handleNextStep}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <span>Sonraki Göreve Geç</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}

        {allTasksCompleted && hasQuiz && (
          <button
            onClick={onOpenQuiz}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs cursor-pointer animate-pulse"
          >
            <Sparkles className="w-4 h-4" />
            <span>Mini Sınava Başla (%80 Geçme Eşiği)</span>
          </button>
        )}
      </div>
    </div>
  );
};
