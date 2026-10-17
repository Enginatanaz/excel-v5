import { Lesson, TeachingStep } from '../types/excel';

/**
 * Builds authentic, multi-part, pedagogical teaching chapters (Bölüm 1, Bölüm 2, Bölüm 3, vb.)
 * tailored specifically for each Excel Akademi AI lesson.
 * 
 * Rules:
 * 1. Number of chapters is variable (2, 3, or 4) based on topic depth and complexity.
 * 2. Each chapter is self-contained with its own title, explanation, natural speechText,
 *    concrete example, and gold takeaway.
 * 3. Theoretical explanations are strictly separated from simulator tasks.
 */
export function buildLessonTeachingChapters(lesson: Lesson): TeachingStep[] {
  const {
    id,
    title,
    shortDesc,
    primaryGoal,
    commonMistakes,
    functionsUsed,
    level,
    initialWorkbook,
    tasks,
  } = lesson;

  const fnName = functionsUsed && functionsUsed.length > 0 ? functionsUsed[0] : '';
  const firstTask = tasks && tasks.length > 0 ? tasks[0] : null;
  const targetCell = firstTask?.targetCell || 'A1';

  // Sample table headers if available
  const sampleSheet = initialWorkbook?.sheets?.[0];
  const colHeaders: string[] = [];
  if (sampleSheet?.cells) {
    for (const key of ['A1', 'B1', 'C1', 'D1', 'E1']) {
      if (sampleSheet.cells[key]?.raw) {
        colHeaders.push(sampleSheet.cells[key].raw);
      }
    }
  }

  const primaryMistake = commonMistakes && commonMistakes.length > 0
    ? commonMistakes[0]
    : "Sözdiziminde noktalı virgül (;) yerine virgül kullanmak veya parantezleri eksik kapatmak.";

  // Determine chapter count:
  // - 2 chapters: Beginner interface orientation, simple navigation, pure text entry
  // - 4 chapters: Advanced lookup (VLOOKUP, XLOOKUP, INDEX/MATCH), nested conditionals, multi-criteria, macros, Power Query
  // - 3 chapters: Standard formulas, formatting, mathematical, statistical, date/text operations
  const isOrientation = id.startsWith('sec1_') && !title.includes('Formül');
  const isComplex = 
    level === 'İleri' ||
    level === 'Uzman' ||
    title.toLowerCase().includes('düşeyara') ||
    title.toLowerCase().includes('çaprazara') ||
    title.toLowerCase().includes('indis') ||
    title.toLowerCase().includes('çoketopla') ||
    title.toLowerCase().includes('çokeğer') ||
    title.toLowerCase().includes('pivot') ||
    title.toLowerCase().includes('makro') ||
    title.toLowerCase().includes('vba') ||
    title.toLowerCase().includes('power query') ||
    title.toLowerCase().includes('dinamik dizi');

  const chapterCount = isOrientation ? 2 : isComplex ? 4 : 3;
  const chapters: TeachingStep[] = [];

  // ============================================================
  // BÖLÜM 1: Temel Mantık, Kavram ve İş Hayatındaki Yeri
  // ============================================================
  const chap1Title = isOrientation
    ? `Bölüm 1: Genel Bakış ve Platform Mimarisi`
    : fnName && fnName !== '='
    ? `Bölüm 1: ${fnName} Fonksiyonunun Temel Mantığı ve Amacı`
    : `Bölüm 1: ${title} — Temel Kavram ve Mantık`;

  const chap1Explanation = isOrientation
    ? `${title} konusu, Excel Akademi AI platformunun interaktif çalışma düzenini kavramanın ilk adımıdır. ` +
      `${shortDesc} Bu sistemde pasif bir video izleyicisi değil, formülü ve işlemi bizzat gerçek çalışma tablosuna yazan aktif bir uygulayıcısınız.`
    : `${shortDesc} Günlük kurumsal iş hayatında binlerce satırlık veri setleriyle çalışırken, ` +
      `manuel kontroller hem zaman kaybına hem de kritik insan hatalarına yol açar. ` +
      `${primaryGoal || title + ' konusunu kavramak'}, veri analizini saniyeler içinde otomatikleştirmenizi sağlar.`;

  const chap1Speech = isOrientation
    ? `Merhaba! Bu ilk bölümde, ${title} konusunu ve platformun çalışma ortamını tanıyoruz. ` +
      `${shortDesc} Ekranınızın solunda yer alan bu panelde dersin kavramsal mantığını dinleyecek, ` +
      `orta paneldeki gerçek Excel simülatöründe formülleri bizzat uygulayacaksınız. Hazırsanız başlayalım!`
    : `Merhaba! Bu bölümde ${title} konusunu ele alıyoruz. ` +
      `${shortDesc} Günlük iş hayatında yüzlerce hatta binlerce satırlık tabloları yönetirken ` +
      `doğru yöntemi kullanmak size hem büyük bir hız kazandırır hem de hata yapma riskinizi sıfıra indirir. ` +
      `Şimdi bu konunun temel işleyiş mantığını adım adım inceleyelim.`;

  chapters.push({
    id: `${id}_ch1`,
    stepNumber: 1,
    title: chap1Title,
    subtitle: isOrientation ? 'Platform Etkileşimi' : 'Kavramsal Temel & Problem Çözümü',
    explanation: chap1Explanation,
    speechText: chap1Speech,
    exampleSnippet: colHeaders.length > 0 ? `Tablo Başlıkları: ${colHeaders.join(' | ')}` : undefined,
    exampleExplanation: colHeaders.length > 0
      ? `Çalışma sayfamızdaki "${colHeaders.join('", "')}" sütunları bu kavramın uygulanacağı gerçek veri tablosunu oluşturur.`
      : undefined,
    keyTakeaway: isOrientation
      ? 'Sol panel anlatımı dinletir, orta panel Excel motorudur, sağ panel ise kazanımları denetler.'
      : `${title} konusunun ana hedefi: ${primaryGoal || 'Veri işlemlerini hatasız ve dinamik yönetmek'}.`,
    targetCell,
  });

  // ============================================================
  // BÖLÜM 2: Sözdizimi, Kurallar ve Çalışma Mekanizması
  // ============================================================
  const chap2Title = isOrientation
    ? `Bölüm 2: Çalışma Alanı, Hücreler ve Etkileşim Kuralları`
    : fnName && fnName !== '='
    ? `Bölüm 2: ${fnName} Sözdizimi ve Argüman Kuralları`
    : `Bölüm 2: Sözdizimi, Biçim ve Çalışma Prensipleri`;

  let formulaSyntax = '';
  let formulaExpl = '';
  if (fnName && fnName !== '=') {
    if (fnName.includes('TOPLA')) {
      formulaSyntax = '=TOPLA(sayı1; sayı2; ...) veya =TOPLA(A1:A10)';
      formulaExpl = 'Parantez içine toplanacak hücre adresleri veya iki nokta (:) ile aralık yazılır. Argümanlar noktalı virgül (;) ile ayrılır.';
    } else if (fnName.includes('EĞER')) {
      formulaSyntax = '=EĞER(Mantıksal_Şart; Doğruysa_Değer; Yanlışsa_Değer)';
      formulaExpl = '3 temel argüman alır: 1. Denetlenecek şart, 2. Şart sağlanırsa üretilecek sonuç, 3. Sağlanmazsa üretilecek sonuç.';
    } else if (fnName.includes('DÜŞEYARA')) {
      formulaSyntax = '=DÜŞEYARA(Aranan_Değer; Tablo_Aralığı; Sütun_İndis_No; 0)';
      formulaExpl = 'Tablonun en sol sütununda arama yapar ve belirtilen sütundaki eşleşen değeri getirir. Son parametredeki 0 tam eşleşmeyi sağlar.';
    } else if (fnName.includes('ÇAPRAZARA')) {
      formulaSyntax = '=ÇAPRAZARA(Aranan_Değer; Arama_Dizisi; Döndürülen_Dizi; [Bulunamıyorsa])';
      formulaExpl = 'Hem sağa hem sola arama yapabilen modern arama fonksiyonudur. Varsayılan olarak tam eşleşme yapar.';
    } else {
      formulaSyntax = `=${fnName}(argüman1; argüman2; ...)`;
      formulaExpl = `${fnName} fonksiyonu Excel formül motorunda hesaplama yapar. Metinler çift tırnak içine alınmalı, argümanlar noktalı virgül ile ayrılmalıdır.`;
    }
  } else {
    formulaSyntax = `=A1 + B1 veya =HücreAdresi`;
    formulaExpl = `Excel'de hesaplama başlatmanın altın kuralı formülün başına eşittir (=) işareti koymaktır. Eşittir konulmadığında Excel ifadeyi düz metin olarak algılar.`;
  }

  const chap2Explanation = 
    `Excel'de kurallar son derece nettir ve tavizsiz çalışır. ` +
    `Formül veya işlem oluştururken dikkat edilmesi gereken en temel kural sözdizimi doğruluğudur. ` +
    `Türkçe Excel sürümlerinde fonksiyon parametreleri mutlaka noktalı virgül (;) karakteri ile ayrılmalıdır. ` +
    `Metin ifadeleri formül içinde çift tırnak (" ") arasına yazılmalı, sayısal değerler ise doğrudan girilmelidir. ` +
    `Hücre başvuruları formülün dinamik kalmasını sağlar; sabit değerler yerine hücre koordinatlarını kullanmak en iyi kurumsal uygulamadır.`;

  const chap2Speech = 
    `İkinci bölümde sözdizimi kurallarını ve çalışma prensibini öğreniyoruz. ` +
    `Excel'de fonksiyonların doğru çalışması için argümanların sırası ve ayracı hayati önem taşır. ` +
    `Türkçe Excel kullanırken parametreleri mutlaka noktalı virgül ile ayırmalıyız. ` +
    `Ayrıca formül içinde metin kullanıyorsanız, Excel'in bunu algılaması için çift tırnak içine yazmayı unutmamalısınız. ` +
    `Şimdi bu kuralları destekleyen örnek yapıyı inceleyelim.`;

  chapters.push({
    id: `${id}_ch2`,
    stepNumber: 2,
    title: chap2Title,
    subtitle: 'Sözdizimi, Parametreler ve Formül Anatomisi',
    explanation: chap2Explanation,
    speechText: chap2Speech,
    exampleSnippet: formulaSyntax,
    exampleExplanation: formulaExpl,
    keyTakeaway: 'Argümanları noktalı virgül (;) ile ayırın; metin çıktılarını mutlaka çift tırnak (" ") içine alın.',
    targetCell,
  });

  // ============================================================
  // BÖLÜM 3 (ve 4): Püf Noktaları, Hatalar ve Simülatör Rehberi
  // ============================================================
  if (chapterCount === 3) {
    // 3-Chapter flow: Chapter 3 combines Pitfalls & Practical Transition
    const chap3Title = `Bölüm 3: Püf Noktaları, Hata Önleme ve Uygulama Rehberi`;
    const chap3Explanation = 
      `Bu konuyu uygularken kullanıcıların en sık karşılaştığı durum: ${primaryMistake} ` +
      `Bu hatayı önlemek için formülü yazarken formül çubuğundaki renkli hücre vurgularını takip edin. ` +
      `Referansların kaymasını önlemek istediğinizde F4 tuşu ile dolar ($) sabitlemesi yapabilirsiniz. ` +
      `\n\nTeorik anlatımımız burada tamamlandı. Artık öğrendiğiniz bu kuralı orta paneldeki gerçek Excel çalışma alanında ` +
      `denemeye hazırsınız. Sağ paneldeki görev talimatını okuyup hedef hücrede uygulamanızı yapabilirsiniz.`;

    const chap3Speech = 
      `Üçüncü ve son teorik bölümümüzde sık yapılan hataları ve püf noktalarını inceliyoruz. ` +
      `Bu konuda en sık yapılan hata: ${primaryMistake}. ` +
      `Bunun önüne geçmek için formül çubuğundaki renk kodlarını dikkatle takip edin. ` +
      `Tebrikler! Dersin tüm teorik aşamalarını tamamladınız. ` +
      `Şimdi orta paneldeki Excel çalışma tablosuna geçerek sağ paneldeki görevi başarıyla uygulayabilirsiniz. Kolay gelsin!`;

    chapters.push({
      id: `${id}_ch3`,
      stepNumber: 3,
      title: chap3Title,
      subtitle: 'Püf Noktaları ve Simülatöre Geçiş',
      explanation: chap3Explanation,
      speechText: chap3Speech,
      exampleSnippet: firstTask?.instruction ? `Hedef Görev: ${firstTask.instruction}` : undefined,
      exampleExplanation: `Orta paneldeki Excel tablosunda bu formülü uygulayarak anlık otomatik doğrulama alacaksınız.`,
      keyTakeaway: `Hata yapmaktan korkmayın; formül çubuğundaki renkli hücre kutuları referanslarınızı görsel olarak denetlemenizi sağlar.`,
      targetCell,
      isPracticeIntro: true,
    });
  } else if (chapterCount === 4) {
    // 4-Chapter flow for complex/advanced topics
    // Chapter 3: Critical Pitfalls & Edge Cases
    const chap3Title = `Bölüm 3: Kritik İpuçları, Kilitler ($) ve Hata Kodları`;
    const chap3Explanation = 
      `İleri düzey Excel uygulamalarında en sık karşılaşılan tuzak: ${primaryMistake} ` +
      `Özellikle arama ve toplama fonksiyonlarında referans tablosunun formülü aşağı çekerken kaymasını önlemek için ` +
      `hücre adresleri mutlak başvuru ($A$1:$D$100) olarak kilitlenmelidir. ` +
      `Ayrıca veri tiplerinin uyumsuzluğu durumunda #YOK, #DEĞER! veya #BAŞV! hataları meydana gelebilir. ` +
      `Bu tür durumları önceden öngörmek ve gerekiyorsa EĞERHATA veya ÇAPRAZARA'nın dahili bulunamıyorsa parametresi ile maskelemek kurumsal bir standarttır.`;

    const chap3Speech = 
      `Üçüncü bölümde ileri düzey püf noktalarını ve hata kodlarını ele alıyoruz. ` +
      `İleri seviye tablolarda formülü aşağı kopyalarken arama alanının kayması en yaygın hatadır. ` +
      `Bunun önüne geçmek için F4 tuşunu kullanarak dolar işaretleriyle hücre sabitlemesi yapmalısınız. ` +
      `Ayrıca tablonuzda aranan değer bulunamadığında oluşan hata kodlarını nasıl yöneteceğinizi bilmek profesyonel bir raporda büyük fark yaratır.`;

    chapters.push({
      id: `${id}_ch3`,
      stepNumber: 3,
      title: chap3Title,
      subtitle: 'Mutlak Başvuru ($) ve Hata Yönetimi',
      explanation: chap3Explanation,
      speechText: chap3Speech,
      exampleSnippet: `=$A$1:$D$100 veya =EĞERHATA(Formül; "Kayıt Yok")`,
      exampleExplanation: `Dolar işareti ($) formül aşağı sürüklendiğinde satır ve sütunun sabit kalmasını garantiler.`,
      keyTakeaway: `Tablo referanslarınızı kitlemek için F4 tuşunu kullanın; formül kaymalarını engelleyin.`,
      targetCell,
    });

    // Chapter 4: Practical Simulation & Practice Guidance
    const chap4Title = `Bölüm 4: Kurumsal Örnek Senaryo ve Simülatör Rehberi`;
    const chap4Explanation = 
      `Artık ${title} konusunun tüm teorik altyapısına, formül anatomisine ve hata önleme tekniklerine hakimsiniz. ` +
      `Şimdi orta paneldeki gerçek Excel simülatöründe bu senaryoyu bizzat hayata geçireceksiniz. ` +
      `Sağ paneldeki görev talimatını dikkatlice okuyun, ${targetCell} hücresine tıklayın ve formülünüzü yazın. ` +
      `Yapay zekâ öğretmeniniz yazdığınız her karakteri ve parantezi gerçek zamanlı olarak izleyecek ve gerekirse anlık ipucu verecektir.`;

    const chap4Speech = 
      `Dördüncü ve son bölümümüzde öğrendiğimiz tüm kuralları pratiğe döküyoruz. ` +
      `Harika bir teorik hazırlık yaptınız. Şimdi orta paneldeki Excel çalışma tablonuza odaklanın. ` +
      `Sağ paneldeki pratik görevi inceleyerek hedef hücreye doğru formülü yazın ve enter tuşuna basın. ` +
      `Uygulama esnasında takılırsanız canlı öğretmen modundan her an destek isteyebilirsiniz. Başarılar dilerim!`;

    chapters.push({
      id: `${id}_ch4`,
      stepNumber: 4,
      title: chap4Title,
      subtitle: 'Excel Simülatöründe Göreve Hazırlık',
      explanation: chap4Explanation,
      speechText: chap4Speech,
      exampleSnippet: firstTask?.instruction ? `Uygulama Görevi: ${firstTask.instruction}` : undefined,
      exampleExplanation: `Sağ paneldeki interaktif görev alanından adım adım ipuçlarını da kullanabilirsiniz.`,
      keyTakeaway: `Formülünüzü yazdıktan sonra Enter tuşuna basarak formül motorunu tetikleyin ve anlık doğrulama sonucunuzu görün.`,
      targetCell,
      isPracticeIntro: true,
    });
  }

  return chapters;
}
