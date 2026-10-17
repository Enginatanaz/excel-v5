import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  Target,
  CheckCircle2,
  Lock,
  Sparkles,
  HelpCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { Lesson, UserProgress } from '../types/excel';
import { CURRICULUM_PHASES } from '../data/curriculum';
import { isLessonUnlocked } from '../services/storageService';

interface LessonHeaderBarProps {
  lesson: Lesson;
  progress: UserProgress;
  onBackToCurriculum: () => void;
  onNextLesson: () => void;
  onOpenQuiz: () => void;
  allTasksCompleted: boolean;
}

export const LessonHeaderBar: React.FC<LessonHeaderBarProps> = ({
  lesson,
  progress,
  onBackToCurriculum,
  onNextLesson,
  onOpenQuiz,
  allTasksCompleted,
}) => {
  const [showObjectives, setShowObjectives] = useState(false);

  const phase = CURRICULUM_PHASES.find((p) => p.id === lesson.phaseId) || CURRICULUM_PHASES[0];
  const isLessonDone = progress.completedLessonIds.includes(lesson.id);
  const quizScore = progress.quizScores[lesson.id];
  const hasPassedQuiz = quizScore !== undefined && quizScore >= (lesson.quiz?.passingScore || 80);

  // Can move to next lesson only if tasks are done and quiz is passed (or lesson has no quiz)
  const canProceedToNext = isLessonDone || (allTasksCompleted && (!lesson.quiz || hasPassedQuiz));

  return (
    <div className="bg-white border-b border-neutral-200 px-4 py-2.5 flex items-center justify-between gap-4 shrink-0 shadow-2xs">
      {/* Left: Breadcrumbs & Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onBackToCurriculum}
          className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md border border-neutral-200 transition-colors cursor-pointer shrink-0"
          title="Müfredat ve Ders Listesine Geri Dön"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Müfredat</span>
        </button>

        <div className="h-4 w-px bg-neutral-200 shrink-0" />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
              {phase.title.split(':')[0]}
            </span>
            <h1 className="text-xs lg:text-sm font-extrabold text-neutral-900 truncate">
              {lesson.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Middle: Objectives / Kazanımlar Dropdown */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setShowObjectives(!showObjectives)}
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
            showObjectives
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-2xs'
              : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-700'
          }`}
        >
          <Target className="w-3.5 h-3.5 text-emerald-600" />
          <span>Öğrenme Hedefleri ({lesson.objectives.length})</span>
        </button>

        {showObjectives && (
          <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 z-40 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
              <span className="text-xs font-bold text-neutral-900">Bu Dersteki Kazanımlarınız</span>
              <span className="text-[10px] text-neutral-400">Hedef Odaklı Eğitim</span>
            </div>
            <div className="space-y-2.5">
              {lesson.objectives.map((obj, i) => (
                <div key={obj.id} className="text-xs space-y-0.5">
                  <div className="flex items-center gap-1.5 font-semibold text-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{obj.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-5">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right: Status Badges & Next Lesson Control */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Status badges */}
        <div className="flex items-center gap-2">
          {isLessonDone ? (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ders Tamamlandı</span>
            </span>
          ) : allTasksCompleted ? (
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-[11px] font-bold animate-pulse cursor-pointer hover:bg-amber-100"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Mini Sınavı Başlat</span>
            </button>
          ) : (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 text-[11px] font-medium">
              <span>Uygulama Bekliyor</span>
            </span>
          )}

          {quizScore !== undefined && (
            <span
              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                quizScore >= (lesson.quiz?.passingScore || 80)
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-red-50 text-red-700 border-red-200'
              }`}
            >
              Sınav: %{quizScore}
            </span>
          )}
        </div>

        {/* Next Lesson Button */}
        <button
          onClick={onNextLesson}
          disabled={!canProceedToNext}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            canProceedToNext
              ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xs cursor-pointer'
              : 'bg-neutral-100 text-neutral-400 border border-neutral-200 cursor-not-allowed opacity-70'
          }`}
          title={
            canProceedToNext
              ? 'Sonraki derse ilerleyin'
              : 'Sonraki derse geçmek için önce uygulama görevini ve mini sınavı başarıyla tamamlamalısınız.'
          }
        >
          <span>Sonraki Ders</span>
          {canProceedToNext ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <Lock className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
};
