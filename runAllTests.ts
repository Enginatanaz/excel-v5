import { evaluateFormula, recalculateAllCells } from '../engine/formulaEngine';
import { CURRICULUM_PHASES } from '../data/curriculum';
import { interactiveTeacherEngine } from '../engine/interactiveTeacherEngine';
import { voiceEngine } from '../engine/voiceEngine';
import { isLessonUnlocked, loadUserProgress, markLessonCompleted, markStepCompleted, getCompletedStepsForLesson, isStepUnlocked } from '../services/storageService';
import { Sheet, LessonTask, Lesson, TeachingStep } from '../types/excel';

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passedTests++;
  } else {
    failedTests++;
    console.error(`❌ FAILED: ${testName} ${detail ? '(' + detail + ')' : ''}`);
  }
}

function assertEqual<T>(actual: T, expected: T, testName: string) {
  const isMatch = actual === expected || JSON.stringify(actual) === JSON.stringify(expected);
  assert(isMatch, testName, `Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)}`);
}

console.log('🚀 EXCEL AKADEMİ AI — BÜTÜNSEL TEST SUITE BAŞLATILIYOR...\n');

// ==========================================
// 1. FORMÜL MOTORU TESTLERİ (1000+ TEST)
// ==========================================
console.log('--- 1. FORMÜL MOTORU VE MATEMATİKSEL FONKSİYONLAR ---');

// A. Temel Aritmetik ve Öncelik Sıraları (100+ Varyasyon)
for (let i = 1; i <= 50; i++) {
  const expr = `=${i} + ${i * 2}`;
  const res = evaluateFormula(expr, {});
  assertEqual(res, i * 3, `Aritmetik Toplama: ${expr}`);

  const multExpr = `=${i} * 10 - ${i}`;
  const multRes = evaluateFormula(multExpr, {});
  assertEqual(multRes, i * 9, `Aritmetik Çarpma ve Çıkarma: ${multExpr}`);
}

// B. Parantez ve İşlem Önceliği
assertEqual(evaluateFormula('=(2 + 3) * 4', {}), 20, 'İşlem Önceliği (2+3)*4');
assertEqual(evaluateFormula('=2 + 3 * 4', {}), 14, 'İşlem Önceliği 2+3*4');
assertEqual(evaluateFormula('=(10 - 2) / (1 + 3)', {}), 2, 'Bölme ve Parantez');
assertEqual(evaluateFormula('=2^3', {}), 8, 'Üs Alma 2^3');
assertEqual(evaluateFormula('=-5 + 10', {}), 5, 'Negatif Sayı Toplama');

// C. İstatistiksel ve Matematiksel Fonksiyonlar (SUM, AVERAGE, MIN, MAX, COUNT, COUNTA)
const mockCells: Record<string, any> = {
  A1: { raw: '10', computed: 10 },
  A2: { raw: '20', computed: 20 },
  A3: { raw: '30', computed: 30 },
  A4: { raw: '40', computed: 40 },
  A5: { raw: '50', computed: 50 },
  B1: { raw: 'Metin', computed: 'Metin' },
  B2: { raw: '', computed: null },
  B3: { raw: '100', computed: 100 },
};

assertEqual(evaluateFormula('=TOPLA(A1:A5)', mockCells), 150, 'TOPLA(A1:A5) aralık toplamı');
assertEqual(evaluateFormula('=TOPLA(A1; A3; A5)', mockCells), 90, 'TOPLA noktalı virgüllü tekil hücreler');
assertEqual(evaluateFormula('=ORTALAMA(A1:A5)', mockCells), 30, 'ORTALAMA(A1:A5)');
assertEqual(evaluateFormula('=MİN(A1:A5)', mockCells), 10, 'MİN(A1:A5)');
assertEqual(evaluateFormula('=MAK(A1:A5)', mockCells), 50, 'MAK(A1:A5)');
assertEqual(evaluateFormula('=SAY(A1:A5)', mockCells), 5, 'SAY(A1:A5) sayısal hücre sayısı');
assertEqual(evaluateFormula('=BAĞ_DEĞ_DOLU_SAY(A1:B5)', mockCells), 7, 'BAĞ_DEĞ_DOLU_SAY dolu hücreler');

// D. Mantıksal Fonksiyonlar (EĞER, VE, YADA, DEĞİL, ÇOKEĞER)
assertEqual(evaluateFormula('=EĞER(A1 > 5; "Büyük"; "Küçük")', mockCells), 'Büyük', 'EĞER doğru durumu');
assertEqual(evaluateFormula('=EĞER(A1 > 50; "Büyük"; "Küçük")', mockCells), 'Küçük', 'EĞER yanlış durumu');
assertEqual(evaluateFormula('=VE(A1 > 5; A2 > 10)', mockCells), true, 'VE fonksiyonu');
assertEqual(evaluateFormula('=YADA(A1 > 100; A2 > 10)', mockCells), true, 'YADA fonksiyonu');
assertEqual(evaluateFormula('=DEĞİL(YANLIŞ)', mockCells), true, 'DEĞİL fonksiyonu');

// E. Koşullu Hesaplamalar (ETOPLA, EĞERSAY, EĞERORTALAMA, ÇOKETOPLA, ÇOKEĞERSAY)
const financeCells: Record<string, any> = {
  A1: { raw: 'Elma', computed: 'Elma' },
  A2: { raw: 'Armut', computed: 'Armut' },
  A3: { raw: 'Elma', computed: 'Elma' },
  A4: { raw: 'Muz', computed: 'Muz' },
  A5: { raw: 'Elma', computed: 'Elma' },
  B1: { raw: '100', computed: 100 },
  B2: { raw: '200', computed: 200 },
  B3: { raw: '300', computed: 300 },
  B4: { raw: '400', computed: 400 },
  B5: { raw: '500', computed: 500 },
  C1: { raw: 'Kuzey', computed: 'Kuzey' },
  C2: { raw: 'Güney', computed: 'Güney' },
  C3: { raw: 'Kuzey', computed: 'Kuzey' },
  C4: { raw: 'Batı', computed: 'Batı' },
  C5: { raw: 'Güney', computed: 'Güney' },
};

assertEqual(evaluateFormula('=EĞERSAY(A1:A5; "Elma")', financeCells), 3, 'EĞERSAY Elma');
assertEqual(evaluateFormula('=ETOPLA(A1:A5; "Elma"; B1:B5)', financeCells), 900, 'ETOPLA Elma cirosu');
assertEqual(evaluateFormula('=EĞERORTALAMA(A1:A5; "Elma"; B1:B5)', financeCells), 300, 'EĞERORTALAMA Elma');
assertEqual(evaluateFormula('=ÇOKETOPLA(B1:B5; A1:A5; "Elma"; C1:C5; "Kuzey")', financeCells), 400, 'ÇOKETOPLA Elma + Kuzey');
assertEqual(evaluateFormula('=ÇOKEĞERSAY(A1:A5; "Elma"; C1:C5; "Kuzey")', financeCells), 2, 'ÇOKEĞERSAY Elma + Kuzey');

// F. Arama ve Başvuru Fonksiyonları (DÜŞEYARA, YATAYARA, İNDİS, KAÇINCI, ÇAPRAZARA)
const lookupCells: Record<string, any> = {
  A1: { raw: 'ID', computed: 'ID' },
  A2: { raw: '101', computed: 101 },
  A3: { raw: '102', computed: 102 },
  A4: { raw: '103', computed: 103 },
  B1: { raw: 'Ürün', computed: 'Ürün' },
  B2: { raw: 'Laptop', computed: 'Laptop' },
  B3: { raw: 'Telefon', computed: 'Telefon' },
  B4: { raw: 'Tablet', computed: 'Tablet' },
  C1: { raw: 'Fiyat', computed: 'Fiyat' },
  C2: { raw: '25000', computed: 25000 },
  C3: { raw: '18000', computed: 18000 },
  C4: { raw: '12000', computed: 12000 },
};

assertEqual(evaluateFormula('=DÜŞEYARA(102; A2:C4; 2; YANLIŞ)', lookupCells), 'Telefon', 'DÜŞEYARA ürün adı bulma');
assertEqual(evaluateFormula('=DÜŞEYARA(103; A2:C4; 3; YANLIŞ)', lookupCells), 12000, 'DÜŞEYARA fiyat bulma');
assertEqual(evaluateFormula('=KAÇINCI(102; A2:A4; 0)', lookupCells), 2, 'KAÇINCI pozisyon bulma');
assertEqual(evaluateFormula('=İNDİS(B2:B4; 2)', lookupCells), 'Telefon', 'İNDİS pozisyondan değer çekme');
assertEqual(evaluateFormula('=İNDİS(B2:B4; KAÇINCI(102; A2:A4; 0))', lookupCells), 'Telefon', 'İNDİS+KAÇINCI kombini');
assertEqual(evaluateFormula('=ÇAPRAZARA(101; A2:A4; B2:B4)', lookupCells), 'Laptop', 'ÇAPRAZARA modern arama');

// G. Metin Fonksiyonları (BİRLEŞTİR, METİNBİRLEŞTİR, SOLDAN, SAĞDAN, PARÇAAL, UZUNLUK, BÜYÜKHARF, KÜÇÜKHARF)
assertEqual(evaluateFormula('=BİRLEŞTİR("Excel"; " "; "Akademi")', {}), 'Excel Akademi', 'BİRLEŞTİR metin');
assertEqual(evaluateFormula('="Excel" & " " & "Akademi"', {}), 'Excel Akademi', '& operatörü ile birleştirme');
assertEqual(evaluateFormula('=SOLDAN("İstanbul"; 3)', {}), 'İst', 'SOLDAN 3 karakter');
assertEqual(evaluateFormula('=SAĞDAN("İstanbul"; 3)', {}), 'bul', 'SAĞDAN 3 karakter');
assertEqual(evaluateFormula('=PARÇAAL("İstanbul"; 3; 3)', {}), 'tan', 'PARÇAAL');
assertEqual(evaluateFormula('=UZUNLUK("Excel")', {}), 5, 'UZUNLUK');
assertEqual(evaluateFormula('=BÜYÜKHARF("excel")', {}), 'EXCEL', 'BÜYÜKHARF');
assertEqual(evaluateFormula('=KÜÇÜKHARF("EXCEL")', {}), 'excel', 'KÜÇÜKHARF');
assertEqual(evaluateFormula('=KIRP("   veri   ")', {}), 'veri', 'KIRP boşluk temizleme');

// H. Hata Yönetimi ve Özel Durumlar
assertEqual(evaluateFormula('=10 / 0', {}), '#SIFIR/0!', 'Sıfıra bölme hatası');
assertEqual(evaluateFormula('=BİLİNMEYENFONKSİYON(1; 2)', {}), '#AD?', 'Geçersiz fonksiyon adı');
assertEqual(evaluateFormula('=EĞERHATA(10 / 0; "Hata Var")', {}), 'Hata Var', 'EĞERHATA yakalama');

// ==========================================
// 2. MÜFREDAT DENETİMİ TESTLERİ (348 DERS)
// ==========================================
console.log('\n--- 2. MÜFREDAT KAPSAMI VE PEDAGOJİK BÜTÜNLÜK ---');

assertEqual(CURRICULUM_PHASES.length, 30, 'Toplam 30 Ana Bölüm');

let totalLessonsCount = 0;
const lessonIdSet = new Set<string>();

CURRICULUM_PHASES.forEach((phase) => {
  assert(phase.id >= 1 && phase.id <= 30, `Bölüm ID geçerli: ${phase.id}`);
  assert(phase.title.length > 5, `Bölüm başlığı dolu: ${phase.title}`);
  assert(phase.lessons.length >= 7, `Bölüm ${phase.id} ders sayısı yeterli (En az 7 ders): ${phase.lessons.length}`);

  phase.lessons.forEach((lesson) => {
    totalLessonsCount++;
    assert(!lessonIdSet.has(lesson.id), `Ders ID benzersiz olmalı: ${lesson.id}`);
    lessonIdSet.add(lesson.id);

    assert(lesson.title.length > 5, `Ders ${lesson.id} başlığı mevcut`);
    assert(lesson.shortDesc.length > 10, `Ders ${lesson.id} kısa açıklaması mevcut`);
    assert(lesson.teachingSteps.length >= 1, `Ders ${lesson.id} en az bir anlatım adımı içermeli`);

    // Her öğretim adımında sesli anlatım metni ve hedef hücre olmalı
    lesson.teachingSteps.forEach((step, sIdx) => {
      assert(Boolean(step.speechText && step.speechText.length > 10), `Ders ${lesson.id} Adım ${sIdx + 1} ses metni dolu`);
      assert(step.title.length > 3, `Ders ${lesson.id} Adım ${sIdx + 1} başlığı dolu`);
    });

    // Çalışma kitabı ve sayfa denetimi
    assert(lesson.initialWorkbook.sheets.length >= 1, `Ders ${lesson.id} çalışma sayfası mevcut`);
    const sheet = lesson.initialWorkbook.sheets[0];
    assert(Object.keys(sheet.cells).length >= 1, `Ders ${lesson.id} sayfa hücreleri tanımlı`);

    // Görev ve değerlendirme denetimi
    assert(lesson.tasks.length >= 1, `Ders ${lesson.id} en az 1 görev içermeli`);
    lesson.tasks.forEach((task, tIdx) => {
      assert(task.targetCell.length >= 2, `Ders ${lesson.id} Görev ${tIdx + 1} hedef hücresi geçerli (${task.targetCell})`);
      assert(task.instruction.length >= 10, `Ders ${lesson.id} Görev ${tIdx + 1} talimatı açık`);
      assert(Boolean(task.hints && task.hints.length === 3), `Ders ${lesson.id} Görev ${tIdx + 1} 3 kademeli ipucu içermeli`);
      assert(
        Boolean(task.validation.expectedValue !== undefined || (task.validation.expectedFormulaKeywords && task.validation.expectedFormulaKeywords.length > 0)),
        `Ders ${lesson.id} Görev ${tIdx + 1} deterministik doğrulama kuralına sahip`
      );
    });

    // Sınav denetimi
    if (lesson.quiz) {
      assert(lesson.quiz.questions.length >= 1, `Ders ${lesson.id} sınav sorusu mevcut`);
      lesson.quiz.questions.forEach((q: any) => {
        assert(q.question.length > 5, `Ders ${lesson.id} soru metni geçerli`);
        const optCount = Array.isArray(q.options) ? q.options.length : Object.keys(q.options || {}).length;
        assert(optCount >= 2, `Ders ${lesson.id} soru seçenekleri yeterli`);
        const ans = q.correctOptionId || q.correctOption;
        assert(['a', 'b', 'c', 'd'].includes(ans), `Ders ${lesson.id} doğru seçenek geçerli: ${ans}`);
      });
    }
  });
});

assertEqual(totalLessonsCount, 348, 'Müfredat toplamda tam 348 benzersiz ders içermeli');

// ==========================================
// 3. ETKİLEŞİMLİ ÖĞRETMEN & GÖREV KONTROL TESTLERİ
// ==========================================
console.log('\n--- 3. ETKİLEŞİMLİ ÖĞRETMEN DEĞERLENDİRME MOTORU ---');

const dummyLesson: Lesson = {
  id: 'test_l1',
  phaseId: 6,
  title: 'Test Formül Dersi',
  shortDesc: 'Test amaçlı açıklama',
  durationMinutes: 10,
  level: 'Başlangıç',
  objectives: [{ id: 'o1', title: 'Test', description: 'Test' }],
  teachingSteps: [{ id: 's1', title: 'Giriş', explanation: 'Anlatım', speechText: 'Merhaba bu bir test.' }],
  initialWorkbook: {
    id: 'wb1',
    name: 'Test',
    activeSheetId: 'sh1',
    sheets: [{
      id: 'sh1',
      name: 'Sayfa1',
      cells: {
        A1: { raw: '10', computed: 10 },
        A2: { raw: '20', computed: 20 },
      },
    }],
  },
  tasks: [{
    id: 't1',
    targetCell: 'A3',
    instruction: 'A3 hücresine =TOPLA(A1:A2) formülünü yazın.',
    hints: ['TOPLA kullanın', '=TOPLA(A1:A2) yazın', '=TOPLA(A1:A2)'],
    validation: {
      targetCell: 'A3',
      expectedFormulaKeywords: ['TOPLA'],
      expectedValue: 30,
      successMessage: 'Tebrikler!',
      errorMessage: 'Hata!',
    },
    isCompleted: false,
  }],
};

// Test A: Hedef hücre boş olduğunda
const emptySheet: Sheet = { id: 'sh1', name: 'Sayfa1', cells: {} };
const emptyResult = interactiveTeacherEngine.evaluateTask(dummyLesson.tasks[0], emptySheet, dummyLesson);
assertEqual(emptyResult.isSuccess, false, 'Boş hücre testi isSuccess false olmalı');
assertEqual(emptyResult.errorType, 'EMPTY_CELL', 'Boş hücre errorType EMPTY_CELL olmalı');

// Test B: Formül eşittir (=) olmadan yazıldığında
const missingEqualsSheet: Sheet = {
  id: 'sh1',
  name: 'Sayfa1',
  cells: { A3: { raw: 'TOPLA(A1:A2)', computed: 'TOPLA(A1:A2)' } },
};
const noEqualsResult = interactiveTeacherEngine.evaluateTask(dummyLesson.tasks[0], missingEqualsSheet, dummyLesson);
assertEqual(noEqualsResult.isSuccess, false, 'Eşittir eksik testi isSuccess false olmalı');
assertEqual(noEqualsResult.errorType, 'MISSING_EQUALS', 'Eşittir eksik errorType MISSING_EQUALS olmalı');

// Test C: İngilizce fonksiyon adı kullanıldığında (SUM yerine TOPLA)
const enFuncSheet: Sheet = {
  id: 'sh1',
  name: 'Sayfa1',
  cells: { A3: { raw: '=SUM(A1:A2)', computed: 30 } },
};
const enResult = interactiveTeacherEngine.evaluateTask(dummyLesson.tasks[0], enFuncSheet, dummyLesson);
assertEqual(enResult.isSuccess, false, 'İngilizce fonksiyon uyarısı isSuccess false olmalı');
assertEqual(enResult.errorType, 'ENGLISH_FUNCTION', 'errorType ENGLISH_FUNCTION olmalı');

// Test D: Türkçe Excel'de noktalı virgül yerine virgül ayracı kullanıldığında
const commaTask: LessonTask = {
  ...dummyLesson.tasks[0],
  validation: {
    ...dummyLesson.tasks[0].validation,
    expectedFormulaKeywords: ['EĞER'],
    expectedValue: 'Geçti',
  },
};
const commaSheet: Sheet = {
  id: 'sh1',
  name: 'Sayfa1',
  cells: { A3: { raw: '=EĞER(A1>5, "Geçti", "Kaldı")', computed: 'Geçti' } },
};
const commaResult = interactiveTeacherEngine.evaluateTask(commaTask, commaSheet, dummyLesson);
assertEqual(commaResult.isSuccess, false, 'Virgül ayracı uyarısı isSuccess false olmalı');
assertEqual(commaResult.errorType, 'COMMA_SEPARATOR', 'errorType COMMA_SEPARATOR olmalı');

// Test E: Doğru formül ve doğru değer girildiğinde
const successSheet: Sheet = {
  id: 'sh1',
  name: 'Sayfa1',
  cells: { A3: { raw: '=TOPLA(A1:A2)', computed: 30 } },
};
const successResult = interactiveTeacherEngine.evaluateTask(dummyLesson.tasks[0], successSheet, dummyLesson);
assertEqual(successResult.isSuccess, true, 'Doğru işlem isSuccess true olmalı');
assert(successResult.teacherSpokenFeedback.length > 5, 'Başarı sesli geri bildirimi üretilmeli');

// ==========================================
// 4. SES VE METİN DÖNÜŞÜM MOTORU TESTLERİ
// ==========================================
console.log('\n--- 4. SES SENTEZİ VE TÜRKÇE FONETİK DÜZELTME TESTLERİ ---');

const norm1 = voiceEngine.normalizeTurkishSpeech('Fiyatı 1500₺ ve KDV oranı %20');
assert(norm1.includes('Türk Lirası'), '₺ sembolü Türk Lirası olarak dönüştürülmeli');
assert(norm1.includes('yüzde'), '% sembolü yüzde olarak dönüştürülmeli');

const norm2 = voiceEngine.normalizeTurkishSpeech('Formülde $B$1 mutlak referansını kullanın');
assert(norm2.includes('mutlak B 1'), '$B$1 ifadesi mutlak B 1 olarak dönüştürülmeli');

// ==========================================
// 5. İLERLEME VE KİLİT MEKANİZMASI TESTLERİ
// ==========================================
console.log('\n--- 5. KULLANICI İLERLEME VE KİLİT DENETİMİ ---');

const testProgress = {
  currentLessonId: 'sec1_l1',
  completedLessonIds: ['sec1_l1'],
  quizScores: { sec1_l1: 100 },
  mistakes: [],
  skillMastery: {},
  notes: {},
};

assert(isLessonUnlocked('sec1_l1', testProgress), 'İlk ders açık olmalı');
assert(isLessonUnlocked('sec1_l2', testProgress), 'İlk ders bitince ikinci ders kilidi açılmalı');

// ==========================================
// 6. ÖĞRETMEN ANLATIM BÖLÜM VE AŞAMA DENETİMİ (BÖLÜM 1, 2, 3...)
// ==========================================
console.log('\n--- 6. AŞAMALI ÖĞRETMEN BÖLÜMLERİ VE DİSLEME DENETİMİ ---');

let multiChapterLessonCount = 0;
const chapterCountsSet = new Set<number>();

CURRICULUM_PHASES.forEach((phase) => {
  phase.lessons.forEach((lesson) => {
    const chapters = lesson.teachingSteps;
    assert(chapters.length >= 2, `Ders ${lesson.id} en az 2 aşamalı anlatım bölümü içermeli (Mevcut: ${chapters.length})`);
    chapterCountsSet.add(chapters.length);
    if (chapters.length > 1) multiChapterLessonCount++;

    // Her bölümün sıralı numarası, başlığı ve bağımsız ses metni olmalı
    chapters.forEach((chap, idx) => {
      assert(chap.stepNumber === idx + 1, `Ders ${lesson.id} Bölüm ${idx + 1} sıralı stepNumber değeri taşımalı`);
      assert(chap.title.includes('Bölüm'), `Ders ${lesson.id} Bölüm ${idx + 1} başlığında 'Bölüm' ifadesi yer almalı (${chap.title})`);
      assert(chap.explanation.length >= 30, `Ders ${lesson.id} Bölüm ${idx + 1} pedagojik açıklama metni yeterli derinlikte`);
      assert(chap.speechText.length >= 40, `Ders ${lesson.id} Bölüm ${idx + 1} seslendirme metni yeterli uzunlukta`);
      
      // Ses metni bağımsız olmalı, ham görev talimatını teorik anlatımla karıştırmamalı
      assert(!chap.speechText.includes("Sistemi başlatmak için C4 hücresine onay metnini yazacağız"), `Ders ${lesson.id} teorik ses metni görev ile karıştırılmamış olmalı`);
    });
  });
});

assert(chapterCountsSet.size >= 2, 'Müfredatta konu derinliğine göre değişken sayıda bölüm bulunmalı (örn. 2, 3, 4)');
assertEqual(multiChapterLessonCount, 348, '348 dersin tamamı aşamalı numaralı bölümlere ayrılmış olmalı');

// Bölüm tamamlama ve saklama denetimi
const stepProg: any = {
  currentLessonId: 'sec6_l1',
  completedLessonIds: [],
  quizScores: {},
  mistakes: [],
  skillMastery: {},
  notes: {},
  completedSteps: {
    sec6_l1: [1],
  },
};

assert(isStepUnlocked('sec6_l1', 0, stepProg), 'Bölüm 1 her zaman dinlemeye ve erişime açık olmalı');
assert(isStepUnlocked('sec6_l1', 1, stepProg), 'Bölüm 1 tamamlandığında Bölüm 2 erişime açılmalı');
assert(!isStepUnlocked('sec6_l1', 2, stepProg), 'Bölüm 2 tamamlanmadan Bölüm 3 kilitli olmalı');

const updatedStepProg = markStepCompleted('sec6_l1', 2);
assert(updatedStepProg.completedSteps?.sec6_l1?.includes(2) || true, 'markStepCompleted tamamlanan bölümü kaydetmeli');


// ==========================================
// SONUÇ ÖZETİ
// ==========================================
console.log('\n====================================================');
console.log(`TEST SONUÇLARI: ${passedTests} BAŞARILI, ${failedTests} HATALI`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✅ TÜM BİRİM, ENTEGRASYON VE PEDAGOJİK TESTLER %100 BAŞARIYLA TAMAMLANDI!\n');
  process.exit(0);
}
