import { CURRICULUM_PHASES, getTotalCurriculumDurationMinutes, getTotalCurriculumLessonsCount } from '../src/data/curriculum';
import { evaluateFormula } from '../src/engine/formulaEngine';

console.log('====================================================');
console.log('EXCEL AKADEMİ AI — MÜFREDAT KAPSAM VE KALİTE RAPORU');
console.log('====================================================');

const totalSections = CURRICULUM_PHASES.length;
const totalLessons = getTotalCurriculumLessonsCount();
const totalMinutes = getTotalCurriculumDurationMinutes();
const hours = (totalMinutes / 60).toFixed(1);

const subGroups = new Set<string>();
const allFunctionsUsed = new Set<string>();
let lessonsWithTeachingSteps = 0;
let lessonsWithWorkbook = 0;
let lessonsWithTasks = 0;
let lessonsWithVerifiableValidation = 0;
let lessonsWithQuiz = 0;
let lessonsWithQualityPassed = 0;
let superficialOrMissingLessons: { id: string; title: string; reason: string }[] = [];

CURRICULUM_PHASES.forEach((phase) => {
  phase.lessons.forEach((lesson) => {
    if (lesson.groupTitle) subGroups.add(lesson.groupTitle);
    lesson.functionsUsed?.forEach((f) => allFunctionsUsed.add(f));

    const hasSteps = lesson.teachingSteps && lesson.teachingSteps.length > 0 && lesson.teachingSteps.every((s) => s.explanation && s.speechText);
    if (hasSteps) lessonsWithTeachingSteps++;

    const hasWorkbook = lesson.initialWorkbook && lesson.initialWorkbook.sheets?.length > 0 && lesson.initialWorkbook.sheets[0].cells;
    if (hasWorkbook) lessonsWithWorkbook++;

    const hasTasks = lesson.tasks && lesson.tasks.length > 0;
    if (hasTasks) lessonsWithTasks++;

    const hasValidValidation = hasTasks && lesson.tasks.every((t) => t.validation && t.validation.targetCell && (t.validation.expectedValue !== undefined || t.validation.expectedFormulaKeywords?.length));
    if (hasValidValidation) lessonsWithVerifiableValidation++;

    const hasQuiz = lesson.quiz && lesson.quiz.questions && lesson.quiz.questions.length >= 1;
    if (hasQuiz) lessonsWithQuiz++;

    let isQuality = true;
    let reason = '';

    if (!hasSteps) {
      isQuality = false;
      reason += 'Eksik anlatım adımları; ';
    }
    if (!hasWorkbook) {
      isQuality = false;
      reason += 'Eksik çalışma kitabı; ';
    }
    if (!hasTasks) {
      isQuality = false;
      reason += 'Eksik uygulama görevi; ';
    }
    if (!hasValidValidation) {
      isQuality = false;
      reason += 'Eksik doğrulama kriteri; ';
    }
    if (!hasQuiz) {
      isQuality = false;
      reason += 'Eksik sınav; ';
    }
    if (lesson.tasks?.some((t) => !t.hints || t.hints.length < 3)) {
      isQuality = false;
      reason += 'Yetersiz ipucu (<3); ';
    }

    if (isQuality) {
      lessonsWithQualityPassed++;
    } else {
      superficialOrMissingLessons.push({ id: lesson.id, title: lesson.title, reason });
    }
  });
});

console.log(`1. Ana Uzmanlık Bölüm Sayısı    : ${totalSections}`);
console.log(`2. Alt Konu Grubu Sayısı         : ${subGroups.size}`);
console.log(`3. Toplam Benzersiz Ders Sayısı  : ${totalLessons}`);
console.log(`4. Toplam Eğitim Süresi          : ${totalMinutes} dk (~${hours} saat)`);
console.log(`5. Anlatım Bulunan Dersler       : ${lessonsWithTeachingSteps} / ${totalLessons}`);
console.log(`6. Çalışma Kitabı Bulunan Dersler: ${lessonsWithWorkbook} / ${totalLessons}`);
console.log(`7. Görev Bulunan Dersler         : ${lessonsWithTasks} / ${totalLessons}`);
console.log(`8. Doğrulanabilir Dersler        : ${lessonsWithVerifiableValidation} / ${totalLessons}`);
console.log(`9. Sınav Bulunan Dersler         : ${lessonsWithQuiz} / ${totalLessons}`);
console.log(`10. Tam Kalite Kriterini Geçen   : ${lessonsWithQualityPassed} / ${totalLessons}`);
console.log(`11. Kusurlu/Eksik Ders Sayısı    : ${superficialOrMissingLessons.length}`);
console.log(`12. Kapsanan Excel Fonksiyonları : ${allFunctionsUsed.size} farklı fonksiyon`);

console.log('\n--- BÖLÜM DAĞILIMI ---');
CURRICULUM_PHASES.forEach((p) => {
  const secMins = p.lessons.reduce((acc, l) => acc + (l.durationMinutes || 10), 0);
  console.log(`Bölüm ${p.id.toString().padStart(2, ' ')}: ${p.title} -> ${p.lessons.length} ders (${secMins} dk)`);
});

if (superficialOrMissingLessons.length > 0) {
  console.log('\nKusurlu Dersler:');
  console.log(JSON.stringify(superficialOrMissingLessons.slice(0, 10), null, 2));
}
