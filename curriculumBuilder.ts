import * as fs from 'fs';
import * as path from 'path';

export interface LessonTaskInput {
  id: string;
  stepNumber: number;
  instruction: string;
  targetCell: string;
  hints: [string, string, string]; // exactly 3 graduated hints
  expectedValue?: any;
  expectedFormulaKeywords?: string[];
  successMessage?: string;
}

export interface QuizQuestionInput {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  measuredSkill: string;
}

export interface LessonInput {
  id: string;
  phaseId: number;
  unitId: string;
  title: string;
  shortDesc: string;
  category: string;
  groupTitle: string;
  primaryGoal: string;
  prerequisites: string[];
  commonMistakes: string[];
  successCriteria: string;
  level: 'Başlangıç' | 'Orta' | 'İleri' | 'Uzman';
  durationMinutes: number;
  functionsUsed: string[];
  sheetId: string;
  sheetName: string;
  headers: string[];
  rows: (string | number)[][];
  objectives: { id: string; title: string; description: string }[];
  teachingSteps: {
    id: string;
    title: string;
    explanation: string;
    speechText: string;
    targetCell?: string;
  }[];
  tasks: LessonTaskInput[];
  quiz: {
    id: string;
    title: string;
    passingScore: number;
    questions: QuizQuestionInput[];
  };
}

export interface PhaseInput {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  lessons: LessonInput[];
}

export function serializePhase(phase: PhaseInput): string {
  const lessonsStr = phase.lessons
    .map((l) => {
      const rowsStr = JSON.stringify(l.rows);
      const headersStr = JSON.stringify(l.headers);
      const objStr = JSON.stringify(l.objectives, null, 10);
      const stepsStr = JSON.stringify(l.teachingSteps, null, 10);
      
      const tasksFormatted = l.tasks.map(t => ({
        id: t.id,
        stepNumber: t.stepNumber,
        instruction: t.instruction,
        targetCell: t.targetCell,
        hints: t.hints,
        validation: {
          targetCell: t.targetCell,
          ...(t.expectedValue !== undefined ? { expectedValue: t.expectedValue } : {}),
          ...(t.expectedFormulaKeywords ? { expectedFormulaKeywords: t.expectedFormulaKeywords } : {}),
          successMessage: t.successMessage || 'Harika! Görevi başarıyla tamamladınız.'
        }
      }));
      const tasksStr = JSON.stringify(tasksFormatted, null, 10);
      const quizStr = JSON.stringify(l.quiz, null, 10);
      const prereqsStr = JSON.stringify(l.prerequisites);
      const mistakesStr = JSON.stringify(l.commonMistakes);
      const functionsStr = JSON.stringify(l.functionsUsed);

      return `      {
        id: ${JSON.stringify(l.id)},
        phaseId: ${l.phaseId},
        unitId: ${JSON.stringify(l.unitId)},
        title: ${JSON.stringify(l.title)},
        shortDesc: ${JSON.stringify(l.shortDesc)},
        category: ${JSON.stringify(l.category)},
        groupTitle: ${JSON.stringify(l.groupTitle)},
        primaryGoal: ${JSON.stringify(l.primaryGoal)},
        prerequisites: ${prereqsStr},
        commonMistakes: ${mistakesStr},
        successCriteria: ${JSON.stringify(l.successCriteria)},
        level: ${JSON.stringify(l.level)},
        durationMinutes: ${l.durationMinutes},
        functionsUsed: ${functionsStr},
        initialWorkbook: createTableSheet(${JSON.stringify(l.sheetId)}, ${JSON.stringify(l.sheetName)}, ${headersStr}, ${rowsStr}),
        objectives: ${objStr},
        teachingSteps: ${stepsStr},
        tasks: ${tasksStr},
        quiz: ${quizStr}
      }`;
    })
    .join(',\n');

  return `  {
    id: ${phase.id},
    category: ${JSON.stringify(phase.category)},
    title: ${JSON.stringify(phase.title)},
    subtitle: ${JSON.stringify(phase.subtitle)},
    iconName: ${JSON.stringify(phase.iconName)},
    description: ${JSON.stringify(phase.description)},
    lessons: [\n${lessonsStr}\n    ]
  }`;
}

export function writeSectionFile(fileName: string, varName: string, phases: PhaseInput[]): void {
  const content = `import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const ${varName}: CurriculumPhase[] = [
${phases.map(serializePhase).join(',\n')}
];
`;
  const filePath = path.resolve(process.cwd(), 'src/data/sections', fileName);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${phases.reduce((acc, p) => acc + p.lessons.length, 0)} lessons to ${filePath}`);
}
