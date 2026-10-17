import { UserProgress, UserMistake } from '../types/excel';
import { CURRICULUM_PHASES } from '../data/curriculum';

const STORAGE_KEY = 'excel_akademi_progress_v4';

const DEFAULT_PROGRESS: UserProgress = {
  currentLessonId: 'sec1_l1',
  completedLessonIds: [],
  quizScores: {},
  mistakes: [],
  skillMastery: {
    'Temel Veri Girişi & Hücreler': 15,
    'Formül & Mantıksal Kararlar': 10,
    'Arama & Veri Modeli': 5,
    'İş Zekâsı & Dashboard': 0,
    'Veri Temizliği (Power Query)': 0,
    'Otomasyon (VBA & Scripts)': 0,
  },
  notes: {},
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return { ...DEFAULT_PROGRESS };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      quizScores: parsed.quizScores || {},
      completedLessonIds: parsed.completedLessonIds || [],
      mistakes: parsed.mistakes || [],
      skillMastery: { ...DEFAULT_PROGRESS.skillMastery, ...(parsed.skillMastery || {}) },
      notes: parsed.notes || {},
    };
  } catch (e) {
    console.warn('Could not load user progress from storage:', e);
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save user progress:', e);
  }
}

export function markLessonCompleted(lessonId: string): UserProgress {
  const current = loadUserProgress();
  const set = new Set(current.completedLessonIds);
  set.add(lessonId);

  // Recalculate skill mastery percentages based on completed count
  const allLessons = CURRICULUM_PHASES.flatMap((p) => p.lessons);
  const total = allLessons.length || 1;
  const ratio = Math.min(100, Math.round((set.size / total) * 100));

  const updated: UserProgress = {
    ...current,
    completedLessonIds: Array.from(set),
    skillMastery: {
      'Temel Veri Girişi & Hücreler': Math.min(100, 15 + Math.round(ratio * 1.2)),
      'Formül & Mantıksal Kararlar': Math.min(100, 10 + Math.round(ratio * 1.1)),
      'Arama & Veri Modeli': Math.min(100, 5 + Math.round(ratio * 1.0)),
      'İş Zekâsı & Dashboard': Math.min(100, Math.round(ratio * 0.95)),
      'Veri Temizliği (Power Query)': Math.min(100, Math.round(ratio * 0.9)),
      'Otomasyon (VBA & Scripts)': Math.min(100, Math.round(ratio * 0.85)),
    },
  };

  saveUserProgress(updated);
  return updated;
}

export function saveQuizResult(lessonId: string, score: number): UserProgress {
  const current = loadUserProgress();
  const updatedScores = { ...current.quizScores, [lessonId]: score };
  const updated: UserProgress = { ...current, quizScores: updatedScores };
  saveUserProgress(updated);
  return updated;
}

export function logMistake(mistake: UserMistake): void {
  const current = loadUserProgress();
  const list = [...current.mistakes, { ...mistake, timestamp: Date.now() }];
  // Retain the last 50 mistakes
  const trimmed = list.slice(-50);
  const updated: UserProgress = { ...current, mistakes: trimmed };
  saveUserProgress(updated);
}

/**
 * Sequential unlocking rule:
 * - First lesson (sec1_l1) is always unlocked.
 * - Any lesson is unlocked if the immediate predecessor lesson is completed.
 * - Or if it's already in completedLessonIds.
 */
export function isLessonUnlocked(lessonId: string, progress: UserProgress): boolean {
  if (lessonId === 'sec1_l1') return true;
  if (progress.completedLessonIds.includes(lessonId)) return true;

  // Flatten curriculum in linear order
  const flatLessons = CURRICULUM_PHASES.flatMap((p) => p.lessons);
  const index = flatLessons.findIndex((l) => l.id === lessonId);
  if (index <= 0) return true;

  const prevLesson = flatLessons[index - 1];
  return progress.completedLessonIds.includes(prevLesson.id);
}

/**
 * Mark a specific teaching chapter/step as completed for a lesson
 */
export function markStepCompleted(lessonId: string, stepNumber: number): UserProgress {
  const current = loadUserProgress();
  const existingSteps = current.completedSteps?.[lessonId] || [];
  const set = new Set(existingSteps);
  set.add(stepNumber);

  const updatedSteps = {
    ...(current.completedSteps || {}),
    [lessonId]: Array.from(set).sort((a, b) => a - b),
  };

  const updated: UserProgress = {
    ...current,
    completedSteps: updatedSteps,
  };
  saveUserProgress(updated);
  return updated;
}

/**
 * Get list of completed step numbers for a specific lesson
 */
export function getCompletedStepsForLesson(lessonId: string, progress?: UserProgress): number[] {
  const p = progress || loadUserProgress();
  return p.completedSteps?.[lessonId] || [];
}

/**
 * Check if a teaching chapter is unlocked:
 * - Step 0 (Bölüm 1) is always unlocked
 * - Step N is unlocked if Step N-1 was completed or if unlockAll is active
 */
export function isStepUnlocked(lessonId: string, stepIndex: number, progress: UserProgress): boolean {
  if (stepIndex === 0) return true;
  if (progress.unlockAllLessons) return true;
  const completed = progress.completedSteps?.[lessonId] || [];
  // stepIndex is 0-indexed, so stepIndex corresponds to preceding step number = stepIndex
  return completed.includes(stepIndex);
}

