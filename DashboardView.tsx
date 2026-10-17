import React, { useState, useMemo } from 'react';
import {
  Play,
  CheckCircle2,
  Lock,
  Award,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Search,
  Unlock,
  Layers,
  FileSpreadsheet,
  Check,
  Sparkles,
} from 'lucide-react';
import { CURRICULUM_PHASES } from '../data/curriculum';
import { Lesson, UserProgress } from '../types/excel';
import { isLessonUnlocked, saveUserProgress } from '../services/storageService';

interface DashboardViewProps {
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
  onContinueCurrent: () => void;
}

export function formatMinutes(mins: number): string {
  if (mins < 60) return `${mins} dk.`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return remainingMins > 0 ? `${hours} sa. ${remainingMins} dk.` : `${hours} saat`;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  onSelectLesson,
}) => {
  // State for expanded sections: set of phase IDs
  const [expandedSectionIds, setExpandedSectionIds] = useState<Set<number>>(new Set([1, 8, 12]));
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('Tümü');
  const [unlockAll, setUnlockAll] = useState<boolean>(!!progress.unlockAllLessons);

  // Dynamic calculations from the actual curriculum phases
  const totalSections = CURRICULUM_PHASES.length;
  const totalLessons = useMemo(
    () => CURRICULUM_PHASES.reduce((acc, p) => acc + p.lessons.length, 0),
    []
  );
  const totalCurriculumMinutes = useMemo(
    () =>
      CURRICULUM_PHASES.reduce(
        (acc, p) => acc + p.lessons.reduce((sAcc, l) => sAcc + (l.durationMinutes || 10), 0),
        0
      ),
    []
  );

  const completedCount = progress.completedLessonIds.length;
  const progressPercent = Math.round((completedCount / Math.max(1, totalLessons)) * 100);

  // Toggle unlock all lessons
  const handleToggleUnlockAll = () => {
    const nextVal = !unlockAll;
    setUnlockAll(nextVal);
    const updated = { ...progress, unlockAllLessons: nextVal };
    saveUserProgress(updated);
  };

  // Toggle section open/closed
  const toggleSection = (phaseId: number) => {
    setExpandedSectionIds((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) {
        next.delete(phaseId);
      } else {
        next.add(phaseId);
      }
      return next;
    });
  };

  // Expand all / Collapse all (Udemy feature)
  const isAllExpanded = expandedSectionIds.size >= totalSections;
  const handleToggleAllSections = () => {
    if (isAllExpanded) {
      setExpandedSectionIds(new Set());
    } else {
      setExpandedSectionIds(new Set(CURRICULUM_PHASES.map((p) => p.id)));
    }
  };

  // Category filters
  const categoryFilters = [
    'Tümü',
    'Giriş ve Çalışma Ortamı',
    'Biçimlendirme & Tasarım',
    'Formüller ve Referanslar',
    'Matematik & İstatistik',
    'Mantıksal Fonksiyonlar',
    'Koşullu Hesaplamalar',
    'Metin Fonksiyonları',
    'Tarih ve Saat',
    'Arama ve Başvuru',
    'Dinamik Diziler',
    'Tablolar & Yapılandırılmış Veri',
    'Veri Yönetimi',
    'Görselleştirme & Grafikler',
    'PivotTable & Raporlama',
    'Dashboard & Raporlama',
    'Power Query & ETL',
    'Power Pivot & DAX',
    'Otomasyon & VBA',
    'Bitirme & Sertifika',
  ];

  // Filtered phases and lessons
  const filteredPhases = useMemo(() => {
    return CURRICULUM_PHASES.map((phase) => {
      // Category filter match
      const categoryMatches =
        selectedCategoryTab === 'Tümü' ||
        phase.category?.toLowerCase() === selectedCategoryTab.toLowerCase();

      // Search match inside phase title or its lessons
      const searchLower = searchQuery.trim().toLowerCase();
      const matchingLessons = phase.lessons.filter((l) => {
        if (!searchLower) return true;
        return (
          l.title.toLowerCase().includes(searchLower) ||
          l.shortDesc?.toLowerCase().includes(searchLower) ||
          l.functionsUsed?.some((f: string) => f.toLowerCase().includes(searchLower)) ||
          l.groupTitle?.toLowerCase().includes(searchLower) ||
          l.primaryGoal?.toLowerCase().includes(searchLower)
        );
      });

      return {
        ...phase,
        lessons: matchingLessons,
        hasVisibleLessons: matchingLessons.length > 0 && categoryMatches,
      };
    }).filter((p) => p.hasVisibleLessons);
  }, [selectedCategoryTab, searchQuery]);

  // Current active lesson object
  let currentLesson: Lesson = CURRICULUM_PHASES[0].lessons[0];
  for (const phase of CURRICULUM_PHASES) {
    const match = phase.lessons.find((l) => l.id === progress.currentLessonId);
    if (match) {
      currentLesson = match;
      break;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8 select-none">
      {/* 1. Hero Continue Learning Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-neutral-900 text-white p-7 lg:p-9 shadow-sm overflow-hidden border border-emerald-700/30">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Kaldığınız Yerden Devam Edin • Bölüm {currentLesson.phaseId}</span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            {currentLesson.title}
          </h1>

          <p className="text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
            {currentLesson.shortDesc || currentLesson.primaryGoal}
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-emerald-400" />
              {currentLesson.durationMinutes} Dakika
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Award className="w-4 h-4 text-emerald-400" />
              Seviye: {currentLesson.level}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              {currentLesson.functionsUsed.length > 0
                ? currentLesson.functionsUsed.join(', ')
                : currentLesson.groupTitle || 'Etkileşimli Excel Pratiği'}
            </span>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => onSelectLesson(currentLesson)}
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md cursor-pointer active:scale-98"
            >
              <Play className="w-4 h-4 fill-emerald-950" />
              <span>Öğretmenle Derse Başla</span>
            </button>

            <button
              onClick={handleToggleUnlockAll}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                unlockAll
                  ? 'bg-amber-500/20 text-amber-200 border-amber-400/40'
                  : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/20'
              }`}
              title="Dilediğiniz derse serbestçe tıklamak için tüm derslerin kilidini açabilirsiniz."
            >
              {unlockAll ? <Unlock className="w-3.5 h-3.5 text-amber-300" /> : <Lock className="w-3.5 h-3.5" />}
              <span>{unlockAll ? 'Tüm Kilitler Açık' : 'Kilitleri Aç (Serbest Mod)'}</span>
            </button>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute -right-6 -bottom-8 opacity-10 font-mono text-[160px] font-black select-none pointer-events-none text-white leading-none">
          FX
        </div>
      </div>

      {/* 2. Key Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Genel İlerleme</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            %{progressPercent}
          </div>
          <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-3 overflow-hidden">
            <div
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-emerald-600 rounded-full transition-all"
            />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Müfredat Kapsamı</span>
            <BookOpen className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            {completedCount} <span className="text-sm font-normal text-neutral-500">/ {totalLessons} Ders</span>
          </div>
          <p className="text-[11px] text-neutral-500 mt-2 font-medium">
            {totalSections} Bölüm • {formatMinutes(totalCurriculumMinutes)} İçerik
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Sınav Başarısı</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            %{(() => {
              const scores = Object.values(progress.quizScores);
              if (scores.length === 0) return 92;
              const sum = scores.reduce((a, b) => a + b, 0);
              return Math.round(sum / scores.length);
            })()}
          </div>
          <p className="text-[11px] text-neutral-500 mt-2 font-medium">
            {Object.keys(progress.quizScores).length} Tamamlanan Sınav
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-2xs">
          <div className="flex items-center justify-between text-neutral-500 mb-2">
            <span className="text-xs font-semibold uppercase">Toplam Çalışma</span>
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-extrabold text-neutral-900 tabular-nums">
            {progress.totalTimeSpentMinutes ?? 0} <span className="text-sm font-normal text-neutral-500">dakika</span>
          </div>
          <p className="text-[11px] text-neutral-500 mt-2 font-medium">Canlı Formül Motoru & Sesli Öğretmen</p>
        </div>
      </div>

      {/* 3. Udemy Course Content Section */}
      <div className="space-y-4 pt-2">
        {/* Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-1 border-b border-neutral-200">
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">Kurs İçeriği</h2>
            <p className="text-xs text-neutral-500 mt-0.5 font-medium">
              {totalSections} bölüm • {totalLessons} ders • {formatMinutes(totalCurriculumMinutes)} toplam süre
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ders, formül veya konu ara..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Expand / Collapse All Button */}
            <button
              onClick={handleToggleAllSections}
              className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer shrink-0"
            >
              {isAllExpanded ? 'Tüm bölümleri daralt' : 'Tüm bölümleri genişlet'}
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none text-xs">
          {categoryFilters.slice(0, 10).map((cat) => {
            const isSelected = selectedCategoryTab.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategoryTab(cat)}
                className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 text-xs ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-2xs font-semibold'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion Sections List */}
        <div className="space-y-3">
          {filteredPhases.length === 0 ? (
            <div className="p-12 text-center bg-white border border-neutral-200 rounded-xl space-y-2">
              <Search className="w-8 h-8 text-neutral-400 mx-auto opacity-60" />
              <p className="text-sm font-semibold text-neutral-800">Aramanıza uygun ders bulunamadı</p>
              <p className="text-xs text-neutral-500">
                Farklı bir arama terimi deneyin veya filtreyi "Tümü" olarak seçin.
              </p>
            </div>
          ) : (
            filteredPhases.map((phase) => {
              const isExpanded = expandedSectionIds.has(phase.id);
              const phaseDurationMins = phase.lessons.reduce(
                (acc, l) => acc + (l.durationMinutes || 10),
                0
              );
              const phaseCompletedCount = phase.lessons.filter((l) =>
                progress.completedLessonIds.includes(l.id)
              ).length;
              const isPhaseFinished =
                phase.lessons.length > 0 && phaseCompletedCount === phase.lessons.length;

              return (
                <div
                  key={phase.id}
                  className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-2xs transition-all"
                >
                  {/* Udemy-Style Section Header Row */}
                  <div
                    onClick={() => toggleSection(phase.id)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-50/80 transition-colors select-none"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-4">
                      {/* Chevron */}
                      <div className="text-neutral-400 shrink-0">
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-neutral-700" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-neutral-500" />
                        )}
                      </div>

                      {/* Number badge & Title */}
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-neutral-900 text-sm">
                            {phase.title}
                          </span>
                          {phase.category && (
                            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                              {phase.category}
                            </span>
                          )}
                          {isPhaseFinished && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                              <Check className="w-3 h-3 stroke-[3]" />
                              Tamamlandı
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1">{phase.subtitle || phase.shortDesc}</p>
                      </div>
                    </div>

                    {/* Section Meta Right */}
                    <div className="flex items-center gap-4 shrink-0 text-xs text-neutral-600">
                      <span className="font-medium tabular-nums hidden sm:inline">
                        {phaseCompletedCount} / {phase.lessons.length} tamamlandı
                      </span>
                      <span className="font-semibold text-neutral-800 tabular-nums">
                        {phase.lessons.length} ders • {formatMinutes(phaseDurationMins)}
                      </span>
                    </div>
                  </div>

                  {/* Section Expanded Lessons List */}
                  {isExpanded && (
                    <div className="border-t border-neutral-100 bg-neutral-50/40 p-4 space-y-2.5">
                      {(phase.description || phase.shortDesc) && (
                        <p className="text-xs text-neutral-600 pb-2 px-1 leading-relaxed">
                          {phase.description || phase.shortDesc}
                        </p>
                      )}

                      <div className="space-y-2">
                        {phase.lessons.map((lesson, idx) => {
                          const isDone = progress.completedLessonIds.includes(lesson.id);
                          const isCurrent = progress.currentLessonId === lesson.id;
                          const unlocked = unlockAll || isLessonUnlocked(lesson.id, progress);

                          return (
                            <div
                              key={lesson.id}
                              className={`p-3.5 rounded-lg border text-xs transition-all ${
                                !unlocked
                                  ? 'bg-neutral-100/60 border-neutral-200 opacity-75'
                                  : isCurrent
                                  ? 'bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/20'
                                  : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-2xs'
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                {/* Left: Status icon, Order, Title & Badges */}
                                <div className="flex items-start sm:items-center gap-3 min-w-0">
                                  {/* Icon state */}
                                  <div className="pt-0.5 sm:pt-0 shrink-0">
                                    {isDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    ) : !unlocked ? (
                                      <Lock className="w-4 h-4 text-neutral-400" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border-2 border-emerald-500" />
                                    )}
                                  </div>

                                  <div className="space-y-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="font-mono text-neutral-400 text-[11px] font-semibold">
                                        {idx + 1}.
                                      </span>
                                      <h4
                                        className={`font-bold ${
                                          unlocked ? 'text-neutral-900' : 'text-neutral-500'
                                        }`}
                                      >
                                        {lesson.title}
                                      </h4>

                                      {/* Type tag */}
                                      {lesson.quiz ? (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                                          Sınav
                                        </span>
                                      ) : lesson.tasks.length > 0 ? (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                                          Uygulama
                                        </span>
                                      ) : (
                                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 text-neutral-700">
                                          Teori
                                        </span>
                                      )}

                                      {/* Level badge */}
                                      <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[10px] font-medium">
                                        {lesson.level}
                                      </span>

                                      {/* Function pills */}
                                      {lesson.functionsUsed?.slice(0, 3).map((fn: string) => (
                                        <span
                                          key={fn}
                                          className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/60"
                                        >
                                          {fn}
                                        </span>
                                      ))}
                                    </div>

                                    {/* Primary Goal / Short Desc */}
                                    <p className="text-[11px] text-neutral-500 line-clamp-1">
                                      {lesson.primaryGoal || lesson.shortDesc}
                                    </p>
                                  </div>
                                </div>

                                {/* Right: Duration and Action Button */}
                                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center pl-7 sm:pl-0">
                                  <span className="text-xs text-neutral-500 font-medium tabular-nums">
                                    {lesson.durationMinutes} dk.
                                  </span>

                                  {unlocked ? (
                                    <button
                                      onClick={() => onSelectLesson(lesson)}
                                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors cursor-pointer active:scale-98 ${
                                        isCurrent
                                          ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-2xs'
                                          : isDone
                                          ? 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                                          : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                                      }`}
                                    >
                                      <Play className="w-3 h-3 fill-current" />
                                      <span>
                                        {isDone ? 'Tekrar Et' : isCurrent ? 'Devam Et' : 'Başla'}
                                      </span>
                                    </button>
                                  ) : (
                                    <button
                                      disabled
                                      title="Önceki dersi tamamlayarak bu dersin kilidini açabilirsiniz."
                                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200"
                                    >
                                      <Lock className="w-3 h-3" />
                                      <span>Kilitli</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
