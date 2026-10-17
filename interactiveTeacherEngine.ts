import { LessonTask, Sheet, CellData, Lesson } from '../types/excel';
import { voiceEngine } from './voiceEngine';

export interface TaskEvaluationResult {
  isSuccess: boolean;
  errorType?: 'EMPTY_CELL' | 'WRONG_CELL' | 'MISSING_EQUALS' | 'ENGLISH_FUNCTION' | 'COMMA_SEPARATOR' | 'UNBALANCED_PARENS' | 'EXCEL_ERROR' | 'KEYWORD_MISSING' | 'VALUE_MISMATCH';
  statusMessage: string;
  teacherSpokenFeedback: string;
  expertTip?: string;
  suggestedAction?: string;
}

// Common English to Turkish function mappings
const EN_TO_TR_FUNCTIONS: Record<string, string> = {
  SUM: 'TOPLA',
  AVERAGE: 'ORTALAMA',
  IF: 'EĞER',
  IFS: 'ÇOKEĞER',
  COUNT: 'SAY',
  COUNTA: 'BAĞ_DEĞ_DOLU_SAY',
  COUNTIF: 'EĞERSAY',
  COUNTIFS: 'ÇOKEĞERSAY',
  SUMIF: 'ETOPLA',
  SUMIFS: 'ÇOKETOPLA',
  AVERAGEIF: 'EĞERORTALAMA',
  AVERAGEIFS: 'ÇOKEĞERORTALAMA',
  VLOOKUP: 'DÜŞEYARA',
  HLOOKUP: 'YATAYARA',
  XLOOKUP: 'ÇAPRAZARA',
  INDEX: 'İNDİS',
  MATCH: 'KAÇINCI',
  CONCATENATE: 'BİRLEŞTİR',
  TEXTJOIN: 'METİNBİRLEŞTİR',
  LEFT: 'SOLDAN',
  RIGHT: 'SAĞDAN',
  MID: 'PARÇAAL',
  LEN: 'UZUNLUK',
  TRIM: 'KIRP',
  UPPER: 'BÜYÜKHARF',
  LOWER: 'KÜÇÜKHARF',
  PROPER: 'YAZIM.DÜZENİ',
  TODAY: 'BUGÜN',
  NOW: 'ŞİMDİ',
  DATE: 'TARİH',
  YEAR: 'YIL',
  MONTH: 'AY',
  DAY: 'GÜN',
  NETWORKDAYS: 'TAMİŞGÜNÜ',
  WORKDAY: 'İŞGÜNÜ',
  SORT: 'SIRALA',
  SORTBY: 'ÖLÇÜTESIRALA',
  FILTER: 'FİLTRE',
  UNIQUE: 'BENZERSİZ',
  SEQUENCE: 'SIRALI',
};

export class InteractiveTeacherEngine {
  /**
   * Evaluates student's Excel action against the current task with deep pedagogical diagnosis.
   */
  public evaluateTask(
    task: LessonTask,
    sheet: Sheet,
    lesson: Lesson,
    mistakeCountForStep: number = 0
  ): TaskEvaluationResult {
    const { targetCell, expectedValue, expectedFormulaKeywords, errorMessage, successMessage } = task.validation;
    const targetCellUpper = targetCell.toUpperCase();
    const cell = sheet.cells[targetCellUpper];

    // 1. Check if target cell is empty
    if (!cell || (cell.raw === '' && (cell.computed === null || cell.computed === undefined))) {
      // Check if student mistakenly wrote the formula in an adjacent or other cell
      const misplacedCellEntry = Object.entries(sheet.cells).find(([addr, c]) => {
        if (addr.toUpperCase() === targetCellUpper) return false;
        if (!c.raw) return false;
        const rawUpper = c.raw.toUpperCase();
        return rawUpper.startsWith('=') && (
          (expectedFormulaKeywords && expectedFormulaKeywords.some(kw => rawUpper.includes(kw.toUpperCase()))) ||
          (expectedValue !== undefined && String(c.computed) === String(expectedValue))
        );
      });

      if (misplacedCellEntry) {
        const [wrongAddr] = misplacedCellEntry;
        const msg = `Formülü buldum ancak hedef hücre ${targetCellUpper} yerine ${wrongAddr} hücresine yazmışsınız.`;
        return {
          isSuccess: false,
          errorType: 'WRONG_CELL',
          statusMessage: msg,
          teacherSpokenFeedback: `${msg} Lütfen formülü ${targetCellUpper} hücresine yazalım.`,
          suggestedAction: `Formülü ${wrongAddr} hücresinden kesip ${targetCellUpper} hücresine yapıştırın.`,
        };
      }

      const msg = `${targetCellUpper} hücresi henüz boş. Lütfen talimattaki işlemi uygulayın.`;
      return {
        isSuccess: false,
        errorType: 'EMPTY_CELL',
        statusMessage: msg,
        teacherSpokenFeedback: `${targetCellUpper} hücresine henüz herhangi bir formül veya değer girmedin. Talimatı takip ederek başlayalım.`,
        suggestedAction: `${targetCellUpper} hücresini seçip formül çubuğuna formülünüzü yazın.`,
      };
    }

    const rawStr = String(cell.raw).trim();
    const rawUpper = rawStr.toUpperCase();

    // 2. Check if student typed formula without '='
    if (!rawStr.startsWith('=')) {
      // Check if they typed a known function like "TOPLA(" or "EĞER(" directly
      const knownFunctions = ['TOPLA', 'ORTALAMA', 'EĞER', 'DÜŞEYARA', 'ÇAPRAZARA', 'ETOPLA', 'EĞERSAY', 'ÇOKETOPLA', 'BİRLEŞTİR', 'SUM', 'IF', 'VLOOKUP'];
      const startsWithFn = knownFunctions.some(fn => rawUpper.startsWith(fn + '('));

      if (startsWithFn) {
        const msg = `Excel'de formüller her zaman '=' (eşittir) işareti ile başlamalıdır. Başına = eklemelisiniz.`;
        return {
          isSuccess: false,
          errorType: 'MISSING_EQUALS',
          statusMessage: msg,
          teacherSpokenFeedback: `Dikkat: Formülün başına eşittir koymayı unuttun. Doğru yazım için =${rawStr} şeklinde düzeltelim.`,
          suggestedAction: `Hücreye =${rawStr} şeklinde başına eşittir koyarak tekrar girin.`,
        };
      }
    }

    // 3. Check for English function usage
    for (const [enFn, trFn] of Object.entries(EN_TO_TR_FUNCTIONS)) {
      const enPattern = new RegExp(`(^|[=+\\-*/(,;\\s])${enFn}\\(`, 'i');
      if (enPattern.test(rawStr)) {
        const msg = `İngilizce ${enFn} yerine Türkçe Excel standardı olan ${trFn} fonksiyonunu kullanmalısınız.`;
        return {
          isSuccess: false,
          errorType: 'ENGLISH_FUNCTION',
          statusMessage: msg,
          teacherSpokenFeedback: `Burada İngilizce ${enFn} fonksiyonunu kullandın. Türkçe Excel standardımızda bu fonksiyon ${trFn} olarak adlandırılır. Lütfen ${trFn} ile deneyelim.`,
          suggestedAction: `${enFn} ifadesini ${trFn} olarak güncelleyin.`,
        };
      }
    }

    // 4. Check for comma as argument separator instead of semicolon in formula
    if (rawStr.startsWith('=')) {
      // If formula has commas inside function call (e.g. =EĞER(A1>5, "X", "Y"))
      // Simple heuristic: formula contains comma followed by spaces or quotes or letters
      if (/=[A-ZÇĞİÖŞÜ_]+\([^)]*,[^)]*\)/i.test(rawStr)) {
        const msg = `Türkçe Excel'de fonksiyon argümanları virgül (,) ile değil noktalı virgül (;) ile ayrılır.`;
        return {
          isSuccess: false,
          errorType: 'COMMA_SEPARATOR',
          statusMessage: msg,
          teacherSpokenFeedback: `Küçük bir sözdizimi detayı: Türkçe Excel'de argüman ayracı virgüldür değil, noktalı virgüldür. Virgülleri noktalı virgül ile değiştirelim.`,
          suggestedAction: `Formüldeki virgülleri (,) noktalı virgül (;) ile değiştirin.`,
        };
      }
    }

    // 5. Check for unbalanced parentheses
    if (rawStr.startsWith('=')) {
      const openParens = (rawStr.match(/\(/g) || []).length;
      const closeParens = (rawStr.match(/\)/g) || []).length;
      if (openParens !== closeParens) {
        const diff = openParens - closeParens;
        const msg = diff > 0
          ? `Formülde ${diff} adet kapatılmamış parantez var. Lütfen parantezleri kapatın.`
          : `Formülde fazladan parantez kapatma işareti var.`;
        return {
          isSuccess: false,
          errorType: 'UNBALANCED_PARENS',
          statusMessage: msg,
          teacherSpokenFeedback: `Formülündeki parantez sayıları eşleşmiyor. Açtığın her parantezin mutlaka kapatılması gerekir.`,
          suggestedAction: `Parantezlerin açılış ve kapanışlarını kontrol edin.`,
        };
      }
    }

    // 6. Check for Excel runtime error strings
    if (
      typeof cell.computed === 'string' &&
      cell.computed.startsWith('#') &&
      (!expectedValue || !String(expectedValue).startsWith('#'))
    ) {
      let errAdvice = `${cell.computed} hatası oluştu. Formülün sözdizimini kontrol edin.`;
      if (cell.computed === '#DEĞER!') {
        errAdvice = `#DEĞER! hatası aldın. Sayı beklenen bir formüle metin veya uyumsuz bir hücre referansı verilmiş olabilir.`;
      } else if (cell.computed === '#AD?') {
        errAdvice = `#AD? hatası: Excel yazdığın fonksiyon veya aralık adını tanıyamadı. Yazım hatasını kontrol et.`;
      } else if (cell.computed === '#SAYI/0!') {
        errAdvice = `#SAYI/0! hatası: Formül sıfıra veya boş bir hücreye bölme işlemi yapmaya çalışıyor.`;
      } else if (cell.computed === '#BAŞV!') {
        errAdvice = `#BAŞV! hatası: Formüldeki hücre başvurusu geçersiz.`;
      } else if (cell.computed === '#YOK') {
        errAdvice = `#YOK hatası: Aranan değer tabloda bulunamadı veya aralık eşleşmedi.`;
      }

      return {
        isSuccess: false,
        errorType: 'EXCEL_ERROR',
        statusMessage: `${targetCellUpper} hücresi ${cell.computed} hatası üretti.`,
        teacherSpokenFeedback: `${errAdvice} Formülünü ve seçtiğin hücre aralıklarını birlikte gözden geçirelim.`,
        suggestedAction: `Hücre aralıklarını ve argümanları gözden geçirin.`,
      };
    }

    // 7. Check expected formula keywords
    if (expectedFormulaKeywords && expectedFormulaKeywords.length > 0) {
      const hasKeywords = expectedFormulaKeywords.some((kw) => rawUpper.includes(kw.toUpperCase()));
      if (!hasKeywords) {
        const msg = errorMessage || `${targetCellUpper} hücresinde beklenen fonksiyon veya operatör (${expectedFormulaKeywords.join(', ')}) kullanılmadı.`;
        return {
          isSuccess: false,
          errorType: 'KEYWORD_MISSING',
          statusMessage: msg,
          teacherSpokenFeedback: `${targetCellUpper} hücresinde bu ders için hedeflenen ${expectedFormulaKeywords.join(' veya ')} yapısını kullanman gerekiyor. Sabit bir değer yazmak yerine formülle hesaplamalısın.`,
          suggestedAction: `Formülde ${expectedFormulaKeywords.join(', ')} fonksiyonunu kullanın.`,
        };
      }
    }

    // 8. Check expected value
    if (expectedValue !== undefined) {
      const computedStr = String(cell.computed ?? '').trim();
      const expectedStr = String(expectedValue).trim();

      const numComputed = Number(cell.computed);
      const numExpected = Number(expectedValue);
      const isNumericMatch = !isNaN(numComputed) && !isNaN(numExpected) && Math.abs(numComputed - numExpected) < 0.001;
      const isStringMatch = computedStr.toLowerCase() === expectedStr.toLowerCase();

      if (!isNumericMatch && !isStringMatch) {
        const msg = errorMessage || `Hesaplanan sonuç (${cell.computed}) beklenen değer (${expectedValue}) ile eşleşmiyor.`;
        return {
          isSuccess: false,
          errorType: 'VALUE_MISMATCH',
          statusMessage: msg,
          teacherSpokenFeedback: `Formülün çalıştı ancak sonuç ${cell.computed} çıktı; beklenen değer ise ${expectedValue}. Hücre aralığını ve formüldeki mantığı tekrar kontrol etmeni öneririm.`,
          suggestedAction: `Başvurduğunuz hücre aralığını (örn. A2:A10) ve şartları doğrulayın.`,
        };
      }
    }

    // SUCCESS! Generate rich pedagogical reinforcement
    const customSuccess = successMessage || 'Harika! Görevi başarıyla tamamladınız.';
    const variedPraises = [
      `Tebrikler! ${targetCellUpper} hücresindeki işlemi kusursuz tamamladın. ${customSuccess}`,
      `Harika bir uygulama! ${targetCellUpper} hücresindeki mantığı doğru kavradın ve doğru sonucu elde ettin.`,
      `Mükemmel iş! ${targetCellUpper} hücresindeki formül tam olarak standartlara uygun şekilde çalıştı.`,
    ];
    const praise = variedPraises[task.id.charCodeAt(task.id.length - 1) % variedPraises.length];

    let expertTip: string | undefined;
    if (lesson.primaryGoal) {
      expertTip = `Profesyonel İpucu: Bu adımda edindiğin "${lesson.primaryGoal}" yetkinliği, büyük tablolarda veri bütünlüğünü korur.`;
    }

    return {
      isSuccess: true,
      statusMessage: customSuccess,
      teacherSpokenFeedback: praise,
      expertTip,
      suggestedAction: 'Bir sonraki adıma veya sınava geçebilirsiniz.',
    };
  }

  /**
   * Reads teacher evaluation aloud using the configured voice engine.
   */
  public speakEvaluation(evaluation: TaskEvaluationResult) {
    if (evaluation.teacherSpokenFeedback) {
      voiceEngine.speak(evaluation.teacherSpokenFeedback);
    }
  }
}

export const interactiveTeacherEngine = new InteractiveTeacherEngine();
