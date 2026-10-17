export type CellValue = string | number | boolean | null;

export interface CellFormat {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  bgColor?: string;
  textColor?: string;
  border?: 'none' | 'all' | 'bottom' | 'top' | 'box';
  numberFormat?: 'general' | 'currency' | 'percent' | 'number' | 'date';
}

export interface CellData {
  raw: string;
  computed: CellValue;
  format?: CellFormat;
  error?: string | null;
}

export interface Sheet {
  id: string;
  name: string;
  cells: Record<string, CellData>;
  columnWidths?: Record<string, number>;
}

export interface WorkbookData {
  id?: string;
  name?: string;
  activeSheetId: string;
  sheets: Sheet[];
  [key: string]: any;
}

export interface TeachingStep {
  id: string;
  stepNumber?: number;
  title: string;
  subtitle?: string;
  explanation: string;
  speechText: string;
  exampleSnippet?: string;
  exampleExplanation?: string;
  keyTakeaway?: string;
  targetCell?: string;
  suggestedFormula?: string;
  isPracticeIntro?: boolean;
  [key: string]: any;
}

export interface TaskValidation {
  targetCell: string;
  expectedValue?: any;
  expectedFormulaKeywords?: string[];
  errorMessage?: string;
  successMessage?: string;
}

export interface LessonTask {
  id: string;
  targetCell: string;
  instruction: string;
  hints: (string | { id?: string; text: string })[];
  validation: TaskValidation;
  isCompleted?: boolean;
  stepNumber?: number;
  [key: string]: any;
}

export interface QuizOptionItem {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOptionItem[] | Record<string, string> | any;
  correctOptionId?: string;
  correctOption?: string;
  codeSnippet?: string;
  explanation?: string;
  [key: string]: any;
}

export interface LessonQuiz {
  id: string;
  title: string;
  passingScore?: number;
  questions: QuizQuestion[];
}

export interface LearningObjective {
  id: string;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  phaseId: number;
  unitId?: string;
  title: string;
  shortDesc: string;
  durationMinutes: number;
  level: 'Başlangıç' | 'Orta' | 'İleri' | 'Uzman';
  objectives: LearningObjective[];
  teachingSteps: TeachingStep[];
  initialWorkbook: WorkbookData;
  tasks: LessonTask[];
  quiz?: LessonQuiz;
  primaryGoal?: string;
  prerequisites?: string[];
  successCriteria?: string;
  commonMistakes?: string[];
  [key: string]: any;
}

export interface CurriculumPhase {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  shortDesc?: string;
  description?: string;
  lessons: Lesson[];
  [key: string]: any;
}

export interface UserMistake {
  lessonId: string;
  cellAddress: string;
  userFormula: string;
  errorType: string;
  advice: string;
  timestamp?: number;
}

export interface UserProgress {
  currentLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  mistakes: UserMistake[];
  skillMastery: Record<string, number>;
  notes: Record<string, string>;
  unlockAllLessons?: boolean;
  totalTimeSpentMinutes?: number;
  completedSteps?: Record<string, number[]>;
  [key: string]: any;
}
