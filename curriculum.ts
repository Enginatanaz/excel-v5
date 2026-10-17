import { CurriculumPhase } from '../types/excel';
import { SECTIONS_1_TO_5 } from './sections/section1to5';
import { SECTIONS_6_TO_10 } from './sections/section6to10';
import { SECTIONS_11_TO_15 } from './sections/section11to15';
import { SECTIONS_16_TO_20 } from './sections/section16to20';
import { SECTIONS_21_TO_25 } from './sections/section21to25';
import { SECTIONS_26_TO_30 } from './sections/section26to30';

import { buildLessonTeachingChapters } from './teachingChaptersBuilder';

// 30 Master Curriculum Sections (Udemy Course Structure)
const RAW_PHASES: CurriculumPhase[] = [
  ...SECTIONS_1_TO_5,
  ...SECTIONS_6_TO_10,
  ...SECTIONS_11_TO_15,
  ...SECTIONS_16_TO_20,
  ...SECTIONS_21_TO_25,
  ...SECTIONS_26_TO_30,
];

// Enrich every lesson with authentic, multi-part, numbered teaching chapters (Bölüm 1, Bölüm 2, ...)
export const CURRICULUM_PHASES: CurriculumPhase[] = RAW_PHASES.map((phase) => ({
  ...phase,
  lessons: phase.lessons.map((lesson) => ({
    ...lesson,
    teachingSteps: buildLessonTeachingChapters(lesson),
  })),
}));

// Helper to get total duration in minutes
export function getTotalCurriculumDurationMinutes(): number {
  return CURRICULUM_PHASES.reduce(
    (total, section) => total + section.lessons.reduce((secTotal, l) => secTotal + (l.durationMinutes || 10), 0),
    0
  );
}

// Helper to get total lessons count
export function getTotalCurriculumLessonsCount(): number {
  return CURRICULUM_PHASES.reduce((total, section) => total + section.lessons.length, 0);
}
