import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 26: Makrolar ve VBA ile Otomasyon
  {
    id: 26,
    category: 'Otomasyon & VBA',
    title: '26. Makrolar ve VBA ile Otomasyon',
    subtitle: 'Geliştirici sekmesi, Makro Kaydedici, Buton atama ve Visual Basic editörü',
    iconName: 'Code',
    description: 'Her gün tekrarlanan rutin görevleri tek tuşla otomatik hale getirme, Makro Kaydedici (Macro Recorder) ile kodsuz makro üretme, ALT+F11 ile VBA modüllerini inceleme ve butona makro atama.',
    lessons: [
      {
        id: 'sec26_l1',
        phaseId: 26,
        unitId: 'u26_1',
        title: 'Geliştirici Sekmesi ve Makro Kaydetme (Macro Recorder)',
        shortDesc: 'Şerit menüye Geliştirici sekmesini ekleme ve fare/klavye hareketlerini VBA koduna kaydetme.',
        category: 'Otomasyon & VBA',
        groupTitle: 'Makro Kaydetme',
        primaryGoal: 'Makro kaydediciyi başlatıp yapılan biçimlendirme ve temizleme işlemlerini arka planda VBA koduna dönüştürmek.',
        prerequisites: ['sec25_l2'],
        commonMistakes: ['Makroyu .xlsx uzantısıyla kaydedip tüm kodları kaybetmek (mutlaka .xlsm Makro İçerebilen Çalışma Kitabı olarak kaydedilmelidir!)'],
        successCriteria: 'Makro kayıt mantığını ve dosya türü gereksinimini kavramak.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's26_1',
        sheetName: 'MakroKaydı',
        headers: ['Adım', 'Açıklama', 'VBA Karşılığı'],
        rows: [
          ['1. Adım', 'Geliştirici > Makro Kaydet', 'Sub Makro1()'],
          ['2. Adım', 'Başlığı yeşil yap ve kalınlaştır', 'Selection.Font.Bold = True'],
          ['3. Adım', 'Kaydı Durdur', 'End Sub'],
        ],
        objectives: [
          { id: 'o1', title: 'Makro Kaydedici', description: 'Geliştirici sekmesinden kayıt başlatma ve durdurma prensipleri.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Rutin İşlere Son!',
            explanation: 'Her sabah aynı raporu açıp başlıkları yeşil yapıyor, sütunları genişletiyor ve toplam alıyorsanız, Makro Kaydet e basın ve bu işlemleri bir defa yapın. Excel tüm hareketlerinizi VBA koduna dönüştürür.',
            speechText: 'Makrolar rutin işlerinizi saniyeler içinde tamamlayan sihirli komutlardır. Makro Kaydet butonuna bastığınız andan itibaren yaptığınız her tıklama arka planda bir kod olarak kaydedilir.'
          }
        ],
        tasks: [
          {
            id: 't26_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Kayıt Başarılı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Kayıt Başarılı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Kayıt Başarılı',
              successMessage: 'Tebrikler! Makro kaydedici mantığını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q26_1',
          title: 'Makro Temelleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q26_1_1',
              question: 'İçinde VBA makro kodları barındıran bir Excel dosyasının uzantısı ne olmalıdır?',
              options: [
                { id: 'a', text: '.xlsx' },
                { id: 'b', text: '.xlsm (Makro İçerebilen Excel Çalışma Kitabı)' },
                { id: 'c', text: '.txt' },
                { id: 'd', text: '.pdf' }
              ],
              correctOptionId: 'b',
              explanation: '.xlsx dosyaları güvenlik gereği makro barındıramaz; makrolu dosyalar mutlaka .xlsm uzantısıyla kaydedilmelidir.',
              measuredSkill: 'Makro dosya uzantısı kuralı'
            }
          ]
        }
      },
      {
        id: 'sec26_l2',
        phaseId: 26,
        unitId: 'u26_2',
        title: 'Bölüm 26 Makrolar ve VBA Final Sınavı',
        shortDesc: 'Makro kaydedici, VBA editörü (ALT+F11), butona makro atama ve güvenlik ayarları sınavı.',
        category: 'Otomasyon & VBA',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 26 otomasyon ve VBA kazanımlarını ölçmek.',
        prerequisites: ['sec26_l1'],
        commonMistakes: ['Makro güvenliğini ve dijital sertifikaları ihmal etmek'],
        successCriteria: 'Sınavdan en az %80 alarak Office Scripts bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's26_2',
        sheetName: 'Final26',
        headers: ['Özellik', 'Kullanım Alanı', 'Durum'],
        rows: [
          ['Macro Recorder', 'Kodsuz otomasyon', 'Ölçüldü'],
          ['ALT+F11', 'VBA editörü', 'Ölçüldü'],
          ['Şekle Buton Atama', 'Kullanıcı dostu tetikleyici', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'VBA ve Otomasyon Ustalığı', description: 'Tekrarlayan iş süreçlerini tek tuşa indirgeme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 26 Finali',
            explanation: 'VBA ve Makroları tamamladınız. Sınavınızı çözüp modern bulut otomasyonu olan Office Scripts bölümüne geçin.',
            speechText: 'Makroları başarıyla öğrendiniz! Sınavınızı çözüp web ve bulut otomasyonu Office Scripts e geçelim.'
          }
        ],
        tasks: [
          {
            id: 't26_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 26 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q26_2',
          title: 'Bölüm 26 Kapsamlı Makro Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q26_2_1',
              question: 'Excel de Visual Basic for Applications (VBA) kod editörünü açmak için kullanılan evrensel klavye kısayolu nedir?',
              options: [
                { id: 'a', text: 'Ctrl + V' },
                { id: 'b', text: 'Alt + F11' },
                { id: 'c', text: 'Shift + F2' },
                { id: 'd', text: 'Ctrl + F8' }
              ],
              correctOptionId: 'b',
              explanation: 'Alt + F11 kısayolu VBA entegre geliştirme ortamını (IDE) anında açar.',
              measuredSkill: 'VBA editörü açma kısayolu'
            }
          ]
        }
      }
    ]
  },

  // SECTION 27: Office Scripts ve İş Akışı Otomasyonu
  {
    id: 27,
    category: 'Bulut Otomasyon & Scripts',
    title: '27. Office Scripts ve İş Akışı Otomasyonu',
    subtitle: 'Excel Web için TypeScript tabanlı otomasyon ve Power Automate bulut entegrasyonu',
    iconName: 'Terminal',
    description: 'Modern Excel Web ve bulut üzerinde çalışan TypeScript tabanlı Office Scripts, Power Automate ile her sabah otomatik e-posta raporlama ve mobil cihaz uyumluluğu.',
    lessons: [
      {
        id: 'sec27_l1',
        phaseId: 27,
        unitId: 'u27_1',
        title: 'Office Scripts Nedir ve VBA dan Farkları',
        shortDesc: 'VBA ın masaüstü kısıtlamasına karşın Office Scripts in bulutta ve webde çalışabilme üstünlüğü.',
        category: 'Bulut Otomasyon & Scripts',
        groupTitle: 'Office Scripts',
        primaryGoal: 'Office Scripts in modern TypeScript altyapısını ve bulut tetikleme avantajını kavramak.',
        prerequisites: ['sec26_l2'],
        commonMistakes: ['Office Scripts in eski Excel masaüstü sürümlerinde aranması (Microsoft 365 gerektirir)'],
        successCriteria: 'Office Scripts kavramını anlamak.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's27_1',
        sheetName: 'OfficeScripts',
        headers: ['Kriter', 'VBA (Eski)', 'Office Scripts (Modern)'],
        rows: [
          ['Dil', 'Visual Basic (1993)', 'TypeScript / JavaScript'],
          ['Çalışma Alanı', 'Sadece Windows/Mac Masaüstü', 'Web, Masaüstü, Mac, Mobil'],
          ['Bulut Entegrasyonu', 'Yok', 'Power Automate ile tam entegre'],
        ],
        objectives: [
          { id: 'o1', title: 'Office Scripts Mimarisi', description: 'Bulutta zamanlanmış görevlerle Excel çalıştırma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Excel in Geleceği: Office Scripts',
            explanation: 'VBA bilgisayarınız kapalıyken çalışamaz. Oysa Office Scripts buluttadır; Power Automate ile bağlandığında gece saat 03:00 te bilgisayarınız kapalıyken bile Excel raporunu üretip müdürünüze mail atabilir.',
            speechText: 'Office Scripts Excel in modern TypeScript tabanlı yeni nesil otomasyon dilidir. Bulutta çalışır ve Power Automate ile birlikte Excel dosyalarını insan müdahalesi olmadan otomatik günceller.'
          }
        ],
        tasks: [
          {
            id: 't27_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Bulut Hazır" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Bulut Hazır yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Bulut Hazır',
              successMessage: 'Harika! Office Scripts ve bulut otomasyonu adımını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q27_1',
          title: 'Office Scripts Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q27_1_1',
              question: 'Office Scripts kodları hangi modern programlama dilinde yazılır?',
              options: [
                { id: 'a', text: 'C++' },
                { id: 'b', text: 'TypeScript / JavaScript' },
                { id: 'c', text: 'Python' },
                { id: 'd', text: 'Pascal' }
              ],
              correctOptionId: 'b',
              explanation: 'Microsoft Office Scripts tamamen modern web standardı olan TypeScript ve JavaScript dilleri üzerine inşa edilmiştir.',
              measuredSkill: 'Office Scripts yazılım dili altyapısı'
            }
          ]
        }
      },
      {
        id: 'sec27_l2',
        phaseId: 27,
        unitId: 'u27_2',
        title: 'Bölüm 27 Office Scripts Final Sınavı',
        shortDesc: 'Office Scripts, Power Automate akışları ve bulut otomasyonu final sınavı.',
        category: 'Bulut Otomasyon & Scripts',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 27 bulut otomasyonu kazanımlarını ölçmek.',
        prerequisites: ['sec27_l1'],
        commonMistakes: ['VBA kodlarını doğrudan Office Scripts e yapıştırmaya çalışmak'],
        successCriteria: 'Sınavdan en az %80 alarak Formül Denetimi bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's27_2',
        sheetName: 'Final27',
        headers: ['Bulut Aracı', 'Entegrasyon', 'Durum'],
        rows: [
          ['Office Scripts', 'TypeScript kodlama', 'Ölçüldü'],
          ['Power Automate', 'Zamanlanmış bulut görevi', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Bulut Otomasyon Ustalığı', description: 'Kurumsal iş akışlarını otomatikleştirme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 27 Finali',
            explanation: 'Office Scripts i tamamladınız. Sınavınızı çözüp Formül Denetimi ve Hata Ayıklama bölümüne geçin.',
            speechText: 'Bulut otomasyonunu başarıyla tamamladınız! Sınavı çözüp formül denetimi ve performans optimizasyonuna geçelim.'
          }
        ],
        tasks: [
          {
            id: 't27_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 27 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q27_2',
          title: 'Bölüm 27 Kapsamlı Scripts Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q27_2_1',
              question: 'Office Scripts in VBA ya karşı en belirgin çalışma ortamı üstünlüğü nedir?',
              options: [
                { id: 'a', text: 'Daha renkli olması' },
                { id: 'b', text: 'Excel Web (tarayıcı) üzerinde ve Power Automate bulut akışlarında sorunsuz çalışabilmesi' },
                { id: 'c', text: 'İnternetsiz çalışabilmesi' },
                { id: 'd', text: 'Yalnızca Windows 98 de çalışması' }
              ],
              correctOptionId: 'b',
              explanation: 'Office Scripts tarayıcıda çalışan Excel Web ve bulut üzerinde çalışabilen ilk resmi Excel kodlama ortamıdır.',
              measuredSkill: 'Office Scripts bulut taşınabilirliği'
            }
          ]
        }
      }
    ]
  },

  // SECTION 28: Formül Denetimi, Performans ve Hata Ayıklama
  {
    id: 28,
    category: 'Denetim & Performans',
    title: '28. Formül Denetimi, Performans ve Hata Ayıklama',
    subtitle: 'Formülü Değerlendir, İzleme Okları, Gözcü Penceresi ve dosya optimizasyonu',
    iconName: 'Activity',
    description: 'Devasa tablolarda hangi hücrenin nereyi etkilediğini mavi izleme oklarıyla bulma, karmaşık formülleri adım adım hesaplatan Formülü Değerlendir aracı ve yavaşlayan dosyaları hızlandırma.',
    lessons: [
      {
        id: 'sec28_l1',
        phaseId: 28,
        unitId: 'u28_1',
        title: 'Formülü Değerlendir (Evaluate Formula) ve İzleme Okları',
        shortDesc: 'İç içe karmaşık bir formülün adım adım hesaplanışını ağır çekimde izleme.',
        category: 'Denetim & Performans',
        groupTitle: 'Formül Denetimi',
        primaryGoal: 'Yanlış sonuç veren formüllerde hatanın hangi aşamada çıktığını Formülü Değerlendir ile teşhis etmek.',
        prerequisites: ['sec27_l2'],
        commonMistakes: ['Büyük dosyalarda tüm sayfayı otomatik hesaplamada bırakıp donmalara yol açmak'],
        successCriteria: 'Formül denetim araçlarını kavramak.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's28_1',
        sheetName: 'Denetim',
        headers: ['Girdi 1', 'Girdi 2', 'Bileşik Formül'],
        rows: [
          [100, 25, 250],
        ],
        objectives: [
          { id: 'o1', title: 'Formül Denetimi Araçları', description: 'Formüller sekmesindeki İzleme Okları ve Değerlendir butonları.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Formülün Röntgenini Çekin',
            explanation: 'Uzun ve iç içe bir EĞER veya DÜŞEYARA formülünüz yanlış sonuç verdiğinde Formüller > Formülü Değerlendir butonuna basarsanız, Excel formülü parça parça hesaplayarak altını çizer ve nerede hata olduğunu açıkça gösterir.',
            speechText: 'Karmaşık formülleri denetlemenin en iyi yolu Formülü Değerlendir aracıdır. Adım adım ilerleyerek formülün nerede yanlış hesap yaptığını bir dedektif gibi bulabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't28_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Denetlendi" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Denetlendi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Denetlendi',
              successMessage: 'Tebrikler! Formül denetim aracını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q28_1',
          title: 'Formül Denetimi Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q28_1_1',
              question: 'Aktif hücredeki formülün hangi hücrelerden veri aldığını ekranda mavi oklarla gösteren araç hangisidir?',
              options: [
                { id: 'a', text: 'Etkileyenleri İzle (Trace Precedents)' },
                { id: 'b', text: 'Koşullu Biçimlendirme' },
                { id: 'c', text: 'Bölmeleri Dondur' },
                { id: 'd', text: 'Yenile' }
              ],
              correctOptionId: 'a',
              explanation: 'Etkileyenleri İzle (Trace Precedents) aracı formülün beslendiği hücrelere doğru mavi oklar çizer.',
              measuredSkill: 'Etkileyenleri izle fonksiyonu'
            }
          ]
        }
      },
      {
        id: 'sec28_l2',
        phaseId: 28,
        unitId: 'u28_2',
        title: 'Bölüm 28 Formül Denetimi Final Sınavı',
        shortDesc: 'İzleme okları, Gözcü Penceresi, döngüsel başvuru koruması ve performans optimizasyonu final sınavı.',
        category: 'Denetim & Performans',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 28 denetim ve dosya sağlığı kazanımlarını ölçmek.',
        prerequisites: ['sec28_l1'],
        commonMistakes: ['Döngüsel başvuruları (#DÖNGÜ!) göz ardı etmek'],
        successCriteria: 'Sınavdan en az %80 alarak Kurumsal Raporlama Projeleri bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's28_2',
        sheetName: 'Final28',
        headers: ['Denetim Aracı', 'Faydası', 'Durum'],
        rows: [
          ['Evaluate Formula', 'Adım adım formül testi', 'Ölçüldü'],
          ['Döngüsel Başvuru Uyarısı', 'Sonsuz döngü engelleme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Denetim ve Hata Ayıklama', description: 'Kurumsal dosyalarda hesaplama hatalarını sıfırlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 28 Finali',
            explanation: 'Formül denetimi ve performansı tamamladınız. Sınavınızı çözüp büyük kurumsal uygulama projeleri bölümüne geçin.',
            speechText: 'Harika bir aşamayı tamamladınız! Sınavı çözüp Excel in zirvesi olan Gerçek Şirket Projelerine adım atalım.'
          }
        ],
        tasks: [
          {
            id: 't28_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 28 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q28_2',
          title: 'Bölüm 28 Kapsamlı Denetim Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q28_2_1',
              question: 'A1 hücresine "=A1+10" yazıldığında Excel hangi kritik uyarıyı verir?',
              options: [
                { id: 'a', text: '#DEĞER!' },
                { id: 'b', text: 'Döngüsel Başvuru (Circular Reference) uyarısı' },
                { id: 'c', text: 'Sayı biçimi hatası' },
                { id: 'd', text: '#AD?' }
              ],
              correctOptionId: 'b',
              explanation: 'Bir hücrenin kendi kendisine formülde başvurması sonsuz hesaplama döngüsü yarattığı için Döngüsel Başvuru uyarısı verilir.',
              measuredSkill: 'Döngüsel başvuru hatası mantığı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 29: Excel ile Profesyonel Raporlama Projeleri
  {
    id: 29,
    category: 'Uygulama Projeleri',
    title: '29. Excel ile Profesyonel Raporlama Projeleri',
    subtitle: 'Bütçe konsolidasyonu, prim modelleri, İK performans matrisi ve C-Level raporlar',
    iconName: 'FolderCheck',
    description: 'Öğrenilen tüm formülleri gerçek şirket senaryolarında birleştirme: Çok şubeli bütçe konsolidasyonu, kademeli satış prim modeli ve İK terfi matrisi inşası.',
    lessons: [
      {
        id: 'sec29_l1',
        phaseId: 29,
        unitId: 'u29_1',
        title: 'Çok Şubeli Bütçe Konsolidasyonu ve Karşılaştırma',
        shortDesc: 'Farklı sayfalardan gelen şube verilerini tek bir yönetim bütçe özetinde birleştirme.',
        category: 'Uygulama Projeleri',
        groupTitle: 'Konsolidasyon',
        primaryGoal: 'Çok sayfalı kurumsal şirket verilerini tek bir konsolide raporda formüllerle toplamak.',
        prerequisites: ['sec28_l2'],
        commonMistakes: ['Şube sayfalarında satır sıraları farklıyken düz hücre toplamı yapmak (ÇOKETOPLA veya ÇAPRAZARA ile bağlanmalıdır)'],
        successCriteria: 'Konsolidasyon tablosunu doğru kurgulamak.',
        level: 'Uzman' as const,
        durationMinutes: 15,
        functionsUsed: ['TOPLA', 'ÇAPRAZARA'],
        sheetId: 's29_1',
        sheetName: 'KonsolideBütçe',
        headers: ['Gider Kalemi', 'İstanbul Şube', 'Ankara Şube', 'İzmir Şube', 'Toplam Bütçe'],
        rows: [
          ['Personel Maaşları', 350000, 220000, 180000, 0],
          ['Kira ve Tesis', 85000, 45000, 38000, 0],
          ['Pazarlama', 60000, 30000, 25000, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Konsolidasyon Mimarisi', description: 'Şubeler arası giderleri tek satırda toplayarak genel toplam üretme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Gerçek Şirket Projesi: Bütçe Konsolidasyonu',
            explanation: 'Kurumsal hayatta her şube kendi bütçesini hazırlar. Finans yöneticisi bu sayfaları tek bir konsolide tabloda TOPLA formülüyle birleştirir: =TOPLA(B2:D2).',
            speechText: 'Artık tüm temel ve ileri teknikleri biliyorsunuz. Şimdi bunları gerçek bir şirket senaryosunda birleştiriyoruz. Şubelerin harcamalarını toplayarak konsolide bütçeyi oluşturalım.'
          }
        ],
        tasks: [
          {
            id: 't29_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "=TOPLA(B2:D2)" formülünü yazarak Personel Maaşları konsolide toplamını bulun.',
            targetCell: 'E2',
            hints: [
              'E2 hücresini seçin.',
              '=TOPLA(B2:D2) yazın.',
              '350000 + 220000 + 180000 = 750000 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'E2',
              expectedValue: 750000,
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              successMessage: 'Tebrikler! Konsolide bütçe projesinin ilk adımını başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q29_1',
          title: 'Konsolidasyon Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q29_1_1',
              question: 'Aynı yapıdaki 12 farklı aylık sayfanın (Ocak tan Aralık a kadar) B10 hücresini tek formülle toplamak için hangi 3 Boyutlu Formül yazılabilir?',
              options: [
                { id: 'a', text: '=TOPLA(Ocak:Aralık!B10)' },
                { id: 'b', text: '=Ocak + Aralık + B10' },
                { id: 'c', text: '=TOPLA(12 Sayfa)' },
                { id: 'd', text: '=ÇOKETOPLA(B10)' }
              ],
              correctOptionId: 'a',
              explanation: '=TOPLA(Ocak:Aralık!B10) formülü 3 Boyutlu (3D) başvuru ile sayfalar arasındaki aynı koordinatlı hücreleri toplar.',
              measuredSkill: '3 Boyutlu (3D) sayfa toplamı kurgusu'
            }
          ]
        }
      },
      {
        id: 'sec29_l2',
        phaseId: 29,
        unitId: 'u29_2',
        title: 'Bölüm 29 Profesyonel Raporlama Final Sınavı',
        shortDesc: 'Konsolidasyon, prim modelleri, bütçe sapma analizleri ve proje yönetimi sınavı.',
        category: 'Uygulama Projeleri',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 29 kurumsal proje kazanımlarını ölçmek.',
        prerequisites: ['sec29_l1'],
        commonMistakes: ['İş senaryolarında doğru formül kombinasyonunu kuramamak'],
        successCriteria: 'Sınavdan en az %80 alarak Bitirme Projeleri ve Sertifika bölümüne geçmek.',
        level: 'Uzman' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's29_2',
        sheetName: 'Final29',
        headers: ['Proje Türü', 'Önem', 'Durum'],
        rows: [
          ['Bütçe Konsolidasyonu', 'Kritik', 'Ölçüldü'],
          ['Varyans & Sapma Analizi', 'Yüksek', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Kurumsal Modelleme', description: 'Gerçek iş projelerini bağımsız inşa edebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 29 Finali',
            explanation: 'Raporlama projelerini tamamladınız. Sınavınızı çözüp büyük final olan 30. Bölüm Bitirme Projelerine geçin.',
            speechText: 'Kurumsal raporlama projelerini harika tamamladınız! Şimdi son bölüm olan büyük bitirme sınavı ve uzmanlık projesine geçiyoruz.'
          }
        ],
        tasks: [
          {
            id: 't29_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 29 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q29_2',
          title: 'Bölüm 29 Kapsamlı Proje Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q29_2_1',
              question: 'Gerçekleşen ile bütçelenen harcamalar arasındaki yüzde sapmayı bulmak için hangi matematiksel formül kullanılır?',
              options: [
                { id: 'a', text: '=(Gerçekleşen - Bütçe) / Bütçe' },
                { id: 'b', text: '=Gerçekleşen + Bütçe' },
                { id: 'c', text: '=Bütçe / Gerçekleşen' },
                { id: 'd', text: '=TOPLA(Bütçe)' }
              ],
              correctOptionId: 'a',
              explanation: 'Yüzde sapma formülü: (Gerçekleşen - Bütçe) / Bütçe dir ve sonuç yüzde stiliyle gösterilir.',
              measuredSkill: 'Bütçe sapma (Varyans) matematiği'
            }
          ]
        }
      }
    ]
  },

  // SECTION 30: Kapsamlı Uygulamalar ve Bitirme Projeleri
  {
    id: 30,
    category: 'Bitirme & Sertifika',
    title: '30. Kapsamlı Uygulamalar ve Bitirme Projeleri',
    subtitle: 'Uçtan Uca Kurumsal ERP Satış Entegrasyonu ve Excel Akademi AI Büyük Bitirme Sınavı',
    iconName: 'Award',
    description: 'Tüm 30 bölümün kazanımlarını kapsayan büyük kurumsal ERP satış entegrasyonu simülasyonu, finansal modelleme ve nihai Excel Uzmanlık Bitirme Sınavı.',
    lessons: [
      {
        id: 'sec30_l1',
        phaseId: 30,
        unitId: 'u30_1',
        title: 'Uçtan Uca Kurumsal ERP Satış Entegrasyonu ve Finansal Model',
        shortDesc: 'Ham veri aktarımından başlayıp ÇAPRAZARA, EĞER, ÇOKETOPLA ve Dashboard ile tamamlanan büyük bitirme projesi.',
        category: 'Bitirme & Sertifika',
        groupTitle: 'Büyük Proje',
        primaryGoal: 'Öğrenilen tüm fonksiyon ve araçları tek bir kurumsal finansal modelde birleştirmek.',
        prerequisites: ['sec29_l2'],
        commonMistakes: ['Adımları sırasıyla takip etmemek'],
        successCriteria: 'Büyük bitirme projesi hesaplamasını eksiksiz tamamlamak.',
        level: 'Uzman' as const,
        durationMinutes: 20,
        functionsUsed: ['TOPLA', 'ÇAPRAZARA', 'EĞER', 'ÇOKETOPLA'],
        sheetId: 's30_1',
        sheetName: 'BüyükModel',
        headers: ['Sipariş No', 'Müşteri', 'Ciro (TL)', 'Maliyet (TL)', 'Net Kâr'],
        rows: [
          ['ORD-901', 'Anadolu Holding', 240000, 160000, 0],
          ['ORD-902', 'Boğaziçi Dağıtım', 180000, 110000, 0],
          ['ORD-903', 'Ege Lojistik', 310000, 200000, 0],
          ['Toplam Şirket Kârı', '', '', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'Uçtan Uca Entegrasyon', description: 'Net kâr hesabı ve genel kâr konsolidasyonu.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Büyük Uzmanlık Projesi',
            explanation: 'Tebrikler! Excel Akademi AI nın 30. ve son bölümündesiniz. Net Kâr formülünü =C2-D2 ile hesaplayıp ardından genel kâr toplamını =TOPLA(E2:E4) ile bularak eğitimi taçlandırın.',
            speechText: 'Muazzam bir yolculuğun sonundayız! 30 bölüm boyunca sıfırdan zirveye kadar tüm Excel konularını adım adım öğrendiniz. Şimdi büyük bitirme projemizi ve final sınavımızı tamamlayarak Excel Uzmanı unvanınızı kazanın!'
          }
        ],
        tasks: [
          {
            id: 't30_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "=C2-D2" formülünü yazarak ilk siparişin Net Kârını bulun.',
            targetCell: 'E2',
            hints: [
              'E2 hücresini seçin.',
              '=C2-D2 yazın.',
              '240000 - 160000 = 80000 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'E2',
              expectedValue: 80000,
              successMessage: 'Harika! İlk sipariş kârını başarıyla hesapladınız.'
            }
          },
          {
            id: 't30_1_2',
            stepNumber: 2,
            instruction: 'E5 hücresine "=TOPLA(E2:E4)" formülünü yazarak genel şirket kârını konsolide edin.',
            targetCell: 'E5',
            hints: [
              'E5 hücresini seçin.',
              '=TOPLA(E2:E4) yazın.',
              'Genel toplam kârı hesaplayın.'
            ],
            validation: {
              targetCell: 'E5',
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              successMessage: 'MÜKEMMEL! Büyük bitirme projesini ve genel kâr konsolidasyonunu başarıyla tamamladınız!'
            }
          }
        ],
        quiz: {
          id: 'q30_1',
          title: 'Excel Akademi AI Büyük Bitirme Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q30_1_1',
              question: 'Modern Excel de sola ve sağa arayabilen, varsayılan tam eşleşme yapan ve sütun eklenince bozulmayan en gelişmiş arama fonksiyonu hangisidir?',
              options: [
                { id: 'a', text: 'DÜŞEYARA (VLOOKUP)' },
                { id: 'b', text: 'ÇAPRAZARA (XLOOKUP)' },
                { id: 'c', text: 'YATAYARA' },
                { id: 'd', text: 'TOPLA' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇAPRAZARA modern Excel in en üstün arama fonksiyonudur.',
              measuredSkill: 'Nihai arama fonksiyonu bilgisi'
            },
            {
              id: 'q30_1_2',
              question: 'Formüllerde sabit kalması gereken bir hücre başvurusunu ($A$1) kilitlemek için kullanılan evrensel klavye kısayolu nedir?',
              options: [
                { id: 'a', text: 'F2' },
                { id: 'b', text: 'F4' },
                { id: 'c', text: 'F9' },
                { id: 'd', text: 'Ctrl + C' }
              ],
              correctOptionId: 'b',
              explanation: 'F4 tuşu döngüsel olarak mutlak ($) kilitlerini ekler.',
              measuredSkill: 'F4 mutlak başvuru bilgisi'
            },
            {
              id: 'q30_1_3',
              question: 'Aşağıdakilerden hangisi çok kriterli toplama fonksiyonu olan ÇOKETOPLA da toplanacak aralığın doğru konumudur?',
              options: [
                { id: 'a', text: 'En sonda' },
                { id: 'b', text: 'En başta (1. parametrede)' },
                { id: 'c', text: 'Ortada' },
                { id: 'd', text: 'İsteğe bağlıdır' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKETOPLA da toplanacak aralık her zaman 1. parametreye yazılır.',
              measuredSkill: 'ÇOKETOPLA mimarisi'
            }
          ]
        }
      },
      {
        id: 'sec30_l2',
        phaseId: 30,
        unitId: 'u30_2',
        title: 'Akademi Büyük Bitirme Değerlendirmesi ve Sertifikasyon',
        shortDesc: '30 bölüm boyunca öğrenilen tüm yetkinlikleri ölçen kapsamlı final teorik ve pratik sınavı.',
        category: 'Bitirme & Portfolyo',
        groupTitle: 'Büyük Final Sınavı',
        primaryGoal: 'Temel formüllerden ileri VBA ve Power Query ye kadar tüm Excel disiplinlerini başarıyla tamamlayıp sertifikayı hak etmek.',
        prerequisites: ['sec30_l1'],
        commonMistakes: ['Sınav sorularında fonksiyon argüman sıralamalarına dikkat etmemek'],
        successCriteria: 'Sınavdan %80 üzeri başarı sağlayarak Excel Akademi AI Uzmanlık Sertifikasını almaya hak kazanmak.',
        level: 'Uzman' as const,
        durationMinutes: 20,
        functionsUsed: ['TOPLA', 'EĞER', 'ÇAPRAZARA', 'FİLTRE'],
        sheetId: 's30_2',
        sheetName: 'Sertifika',
        headers: ['Öğrenci Durumu', 'Tamamlanan Bölüm', 'Sonuç'],
        rows: [
          ['Excel Uzmanlık Programı', 30, 'BAŞARILI'],
        ],
        objectives: [
          { id: 'o1', title: 'Nihai Sertifikasyon', description: 'Akademi mezuniyet kontrolü ve unvan onayı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Tebrikler Excel Uzmanı!',
            explanation: '30 bölüm boyunca veri analizinden modellemeye, makrolardan dinamik dizilere kadar tüm alanlarda derinlemesine ustalaştınız. D2 hücresine "Mezun" yazarak mezuniyetinizi onaylayın ve son değerlendirme sınavını çözün.',
            speechText: 'Olağanüstü bir başarı gösterdiniz! Excel Akademi AI nın 30 bölümünü tamamladınız. Artık iş hayatında ve projelerinizde en zorlu veri tablolarını, modelleri ve raporları ustalıkla inşa edebilirsiniz!'
          }
        ],
        tasks: [
          {
            id: 't30_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Mezun" yazarak programı tamamlayın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Mezun yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Mezun',
              successMessage: 'Tebrikler! Excel Akademi AI Mezuniyetiniz Tescillendi!'
            }
          }
        ],
        quiz: {
          id: 'q30_2',
          title: 'Akademi Nihai Mezuniyet Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q30_2_1',
              question: 'Dinamik dizi formüllerinin (FİLTRE, BENZERSİZ, SIRALA) hücrelere taşma (spill) aralığını başka bir formülde dinamik olarak referans göstermek için hücre adresinin sonuna hangi karakter konur?',
              options: [
                { id: 'a', text: '$ (Dolar işareti)' },
                { id: 'b', text: '# (Kare / Hash işareti)' },
                { id: 'c', text: '@ (Et işareti)' },
                { id: 'd', text: '* (Yıldız işareti)' }
              ],
              correctOptionId: 'b',
              explanation: 'Dinamik dizi sonuç aralığının sonuna # (örnek: A1#) koyarak taşan tüm veriyi tek seferde referans alabilirsiniz.',
              measuredSkill: 'Dinamik Dizi Taşma Başvurusu (#) Yetkinliği'
            },
            {
              id: 'q30_2_2',
              question: 'Power Query de yapılan tüm veri temizleme ve dönüştürme adımları arka planda hangi dilde yazılır?',
              options: [
                { id: 'a', text: 'SQL' },
                { id: 'b', text: 'M Dili (M Language)' },
                { id: 'c', text: 'VBA' },
                { id: 'd', text: 'Python' }
              ],
              correctOptionId: 'b',
              explanation: 'Power Query arka planda M Dili ile çalışır; formül çubuğundan adımlar M kodu olarak düzenlenebilir.',
              measuredSkill: 'Power Query M Dili Bilgisi'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_26_TO_30', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section26to30.ts'), content, 'utf8');
console.log('Successfully generated section26to30.ts');
