import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 21: Harici Veriler ve Dosya İşlemleri
  {
    id: 21,
    category: 'Harici Veri & Dosya İşlemleri',
    title: '21. Harici Veriler ve Dosya İşlemleri',
    subtitle: 'CSV, TXT, Web ve veritabanı bağlantıları, otomatik veri yenileme',
    iconName: 'Database',
    description: 'Şirket ERP ve CRM sistemlerinden gelen CSV veya metin dosyalarını doğru karakter kodlamasıyla (UTF-8, Türkçe karakterler) Excel e aktarma, canlı veri bağlantıları kurma ve dışa aktarma.',
    lessons: [
      {
        id: 'sec21_l1',
        phaseId: 21,
        unitId: 'u21_1',
        title: 'CSV ve Metin Dosyalarından Veri Alma Mantığı',
        shortDesc: 'Virgül veya noktalı virgül ayracını doğru belirleyerek Türkçe karakter sorunsuz veri aktarma.',
        category: 'Harici Veri & Dosya İşlemleri',
        groupTitle: 'Veri Aktarımı',
        primaryGoal: 'Dış sistemlerden indirilen CSV dosyalarını bozulmadan Excel tablosuna dönüştürmek.',
        prerequisites: ['sec20_l2'],
        commonMistakes: ['Bölgesel ayar farkından dolayı tüm satırın tek bir hücreye yığılması'],
        successCriteria: 'Dış veri içe aktarma prensiplerini kavramak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's21_1',
        sheetName: 'CSVVeri',
        headers: ['Kaynak', 'Format', 'Karakter Kodlaması', 'Durum'],
        rows: [
          ['SAP ERP', 'CSV', 'UTF-8', 'Bağlandı'],
          ['Salesforce', 'TXT', 'Windows-1254', 'Bağlandı'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Al Aracı', description: 'Veri > Verileri Al menüsünden dosya bağlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Veri Al (Get Data)',
            explanation: 'Veri sekmesindeki "Metinden/CSV den" aracı modern Excel in en güvenilir aktarıcısıdır. Dosyayı seçtiğinizde önizleme yapar ve noktalı virgülleri otomatik algılar.',
            speechText: 'Dış sistemlerden gelen CSV veya metin dosyalarını çift tıklayarak açmak yerine, Veri sekmesindeki Metinden/CSV den aracıyla içe aktarmalısınız. Böylece Türkçe karakterler asla bozulmaz.'
          }
        ],
        tasks: [
          {
            id: 't21_1_1',
            stepNumber: 1,
            instruction: 'D3 hücresine "Aktarıldı" yazın.',
            targetCell: 'D3',
            hints: ['D3 hücresini seçin.', 'Aktarıldı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D3',
              expectedValue: 'Aktarıldı',
              successMessage: 'Tebrikler! Dış veri aktarma prensibi tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q21_1',
          title: 'Harici Veri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q21_1_1',
              question: 'Türkçe karakterlerin (ş, ğ, ı, ö, ç, ü) CSV dosyalarında bozulmaması için hangi dosya kodlaması tercih edilmelidir?',
              options: [
                { id: 'a', text: 'ASCII' },
                { id: 'b', text: 'UTF-8 (veya Windows-1254 Türkçe)' },
                { id: 'c', text: 'MS-DOS' },
                { id: 'd', text: 'Unicode 16' }
              ],
              correctOptionId: 'b',
              explanation: 'UTF-8 veya Windows-1254 Türkçe kodlaması tüm Türkçe özel harfleri kusursuz destekler.',
              measuredSkill: 'Karakter kodlama standardı'
            }
          ]
        }
      },
      {
        id: 'sec21_l2',
        phaseId: 21,
        unitId: 'u21_2',
        title: 'Bölüm 21 Harici Veriler Final Sınavı',
        shortDesc: 'Harici veri kaynakları, bağlantı yenileme ve dışa aktarma final sınavı.',
        category: 'Harici Veri & Dosya İşlemleri',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 21 dosya ve harici veri kazanımlarını ölçmek.',
        prerequisites: ['sec21_l1'],
        commonMistakes: ['Veri bağlantı yollarını taşımak'],
        successCriteria: 'Sınavdan en az %80 alarak Power Query bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's21_2',
        sheetName: 'Final21',
        headers: ['Kavram', 'Kullanım Alanı', 'Durum'],
        rows: [
          ['Metinden/CSV den', 'ERP veri entegrasyonu', 'Ölçüldü'],
          ['Tümünü Yenile', 'Canlı veri güncelleme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Bağlantı Ustalığı', description: 'Dış veri akışlarını yönetebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 21 Finali',
            explanation: 'Harici veri işlemlerini tamamladınız. Sınavınızı çözüp Excel in en güçlü veri hazırlama motoru olan Power Query ye geçin.',
            speechText: 'Harici veri yönetimini bitirdiniz. Şimdi veri temizleme canavarı Power Query ye adım atıyoruz!'
          }
        ],
        tasks: [
          {
            id: 't21_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 21 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q21_2',
          title: 'Bölüm 21 Kapsamlı Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q21_2_1',
              question: 'Dış kaynaktan bağlı bir veri tablosunu en güncel verilerle güncellemek için Veri sekmesindeki hangi buton kullanılır?',
              options: [
                { id: 'a', text: 'Kaydet' },
                { id: 'b', text: 'Tümünü Yenile (Refresh All)' },
                { id: 'c', text: 'Geri Al' },
                { id: 'd', text: 'Sırala' }
              ],
              correctOptionId: 'b',
              explanation: 'Tümünü Yenile (Refresh All) butonu dosyadaki tüm harici veri bağlantılarını ve PivotTable ları aynı anda günceller.',
              measuredSkill: 'Tümünü Yenile komutu'
            }
          ]
        }
      }
    ]
  },

  // SECTION 22: Power Query ile Veri Hazırlama ve Dönüştürme
  {
    id: 22,
    category: 'Power Query & ETL',
    title: '22. Power Query ile Veri Hazırlama ve Dönüştürme',
    subtitle: 'Power Query Editörü, Uygulanan Adımlar (Applied Steps), sütun bölme ve birleştirme',
    iconName: 'Cpu',
    description: 'Ham verileri analize hazırlama (ETL), bozuk verileri otomatik temizleyen senaryolar kaydetme, Uygulanan Adımlar zinciri, Sütunları Satırlara Çevirme (Unpivot) ve tablo birleştirme.',
    lessons: [
      {
        id: 'sec22_l1',
        phaseId: 22,
        unitId: 'u22_1',
        title: 'Power Query Editörü ve Uygulanan Adımlar (Applied Steps)',
        shortDesc: 'Yapılan her temizleme işleminin adım adım kaydedilmesi ve tek tıkla tekrarlanabilirliği.',
        category: 'Power Query & ETL',
        groupTitle: 'Power Query Temelleri',
        primaryGoal: 'Power Query nin kod yazmadan otomatik veri temizleme adımları kaydetme mantığını kavramak.',
        prerequisites: ['sec21_l2'],
        commonMistakes: ['Power Query adımlarını Ctrl+Z ile geri almaya çalışmak (adımlar sağdaki paneldeki X butonundan silinir!)'],
        successCriteria: 'Uygulanan adımlar mimarisini kavramak.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's22_1',
        sheetName: 'PowerQuery',
        headers: ['Adım Sırası', 'İşlem Adı', 'M Dili Kodu'],
        rows: [
          [1, 'Kaynak (Source)', 'Excel.Workbook(...)'],
          [2, 'Yükseltilen Üstbilgiler', 'Table.PromoteHeaders(...)'],
          [3, 'Değiştirilen Tür', 'Table.TransformColumnTypes(...)'],
        ],
        objectives: [
          { id: 'o1', title: 'Uygulanan Adımlar Mantığı', description: 'Veri dönüştürme geçmişinin sağ panelde sıralı listelenmesi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bir Kere Temizle, Sonsuza Dek Kullan!',
            explanation: 'Power Query de bir sütunu böldüğünüzde, başlıkları yukarı aldığınızda bu işlemler "Uygulanan Adımlar" (Applied Steps) listesine birer birer eklenir. Yarın yeni veri geldiğinde sadece "Yenile" ye basarsınız ve Power Query tüm temizleme adımlarını 1 saniyede otomatik tekrarlar!',
            speechText: 'Power Query Excel in veri fabrikasıdır. Her ay saatlerce yaptığınız veri temizleme işlerini tek bir kere yaparsınız; sonraki aylarda Excel tek tıkla her şeyi otomatik temizler.'
          }
        ],
        tasks: [
          {
            id: 't22_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Adım Kaydedildi" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Adım Kaydedildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Adım Kaydedildi',
              successMessage: 'Harika! Power Query uygulanan adımlar kavramını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q22_1',
          title: 'Power Query Temel Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q22_1_1',
              question: 'Power Query editöründe yanlış yapılan bir dönüştürme adımı nasıl geri alınır veya iptal edilir?',
              options: [
                { id: 'a', text: 'Ctrl + Z tuşuna basılarak' },
                { id: 'b', text: 'Sağdaki "Uygulanan Adımlar" (Applied Steps) listesindeki o adımın yanındaki kırmızı çarpı (X) butonuna tıklanarak' },
                { id: 'c', text: 'Tüm dosya silinerek' },
                { id: 'd', text: 'Esc tuşuna basılarak' }
              ],
              correctOptionId: 'b',
              explanation: 'Power Query de geri alma geçmişi sağdaki Uygulanan Adımlar panelindedir; adımı silmek için yanındaki X ikonuna basılır.',
              measuredSkill: 'Power Query adım silme yöntemi'
            }
          ]
        }
      },
      {
        id: 'sec22_l2',
        phaseId: 22,
        unitId: 'u22_2',
        title: 'Bölüm 22 Power Query Final Sınavı',
        shortDesc: 'Uygulanan adımlar, unpivot sütunlar, merge/append ve otomatik yükleme final sınavı.',
        category: 'Power Query & ETL',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 22 Power Query ETL kazanımlarını ölçmek.',
        prerequisites: ['sec22_l1'],
        commonMistakes: ['Veri türü uyumsuzlukları'],
        successCriteria: 'Sınavdan en az %80 alarak Veri Modeli ve Power Pivot bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's22_2',
        sheetName: 'Final22',
        headers: ['Power Query Aracı', 'İşlev', 'Durum'],
        rows: [
          ['Applied Steps', 'Otomasyon geçmişi', 'Ölçüldü'],
          ['Unpivot', 'Raporu veritabanına çevirme', 'Ölçüldü'],
          ['Merge Queries', 'DÜŞEYARA sız birleştirme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Power Query Ustalığı', description: 'Kurumsal veri hazırlama ve ETL süreçlerini yönetebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 22 Finali',
            explanation: 'Power Query yi başarıyla tamamladınız. Sınavınızı çözüp Veri Modeli, Power Pivot ve DAX bölümüne geçin.',
            speechText: 'Power Query veri temizleme adımlarını harika kavradınız! Sınavı çözüp Power Pivot ve DAX formülleri bölümüne geçelim.'
          }
        ],
        tasks: [
          {
            id: 't22_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 22 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q22_2',
          title: 'Bölüm 22 Kapsamlı Power Query Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q22_2_1',
              question: 'Ayların yan yana sütunlarda olduğu bir bütçe tablosunu PivotTable a uygun alt alta satırlara dönüştürmek için Power Query de hangi sihirli işlem kullanılır?',
              options: [
                { id: 'a', text: 'Sütunları Çoğalt' },
                { id: 'b', text: 'Sütunları Satırlara Dönüştür (Unpivot Columns)' },
                { id: 'c', text: 'Filtrele' },
                { id: 'd', text: 'Gruplandır' }
              ],
              correctOptionId: 'b',
              explanation: 'Unpivot Columns (Sütunları Satırlara Dönüştür), matris tabloları veritabanı formatına çeviren en kritik Power Query aracıdır.',
              measuredSkill: 'Unpivot Columns aracı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 23: Veri Modeli, Power Pivot ve DAX
  {
    id: 23,
    category: 'Power Pivot & DAX',
    title: '23. Veri Modeli, Power Pivot ve DAX',
    subtitle: 'İlişkisel veritabanı (Relationships), DAX ölçüleri (Measures), CALCULATE ve RELATED',
    iconName: 'GitMerge',
    description: 'Excel içinde milyonlarca satırlık ilişkisel modeller kurma, DÜŞEYARA yazmadan tabloları birbirine bağlama (Relationships), DAX diliyle gelişmiş finansal ölçüler hesaplama.',
    lessons: [
      {
        id: 'sec23_l1',
        phaseId: 23,
        unitId: 'u23_1',
        title: 'Veri Modeli ve Tablolar Arası İlişkiler (Relationships)',
        shortDesc: 'Satış Tablosu ile Müşteri Tablosunu Müşteri_ID üzerinden birbirine bağlama (1-to-Many).',
        category: 'Power Pivot & DAX',
        groupTitle: 'İlişkisel Model',
        primaryGoal: 'DÜŞEYARA ile sütun taşımadan iki tabloyu doğrudan Veri Modeli nde birbirine bağlamak.',
        prerequisites: ['sec22_l2'],
        commonMistakes: ['Tekil olmayan bir sütunu 1 tarafı olarak bağlamaya çalışmak'],
        successCriteria: 'İlişkisel veritabanı mantığını kavramak.',
        level: 'Uzman' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's23_1',
        sheetName: 'VeriModeli',
        headers: ['Tablo 1 (Olgular)', 'Tablo 2 (Boyutlar)', 'İlişki Alanı', 'İlişki Türü'],
        rows: [
          ['Satışlar', 'Müşteriler', 'Müşteri_ID', '1 - Çok (1:N)'],
          ['Satışlar', 'Ürünler', 'Ürün_Kodu', '1 - Çok (1:N)'],
        ],
        objectives: [
          { id: 'o1', title: 'İlişkisel Veri Modeli', description: 'Tabloları ortak kimlik üzerinden bağlayıp tek bir Pivot ta birleştirme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'DÜŞEYARA Çağının Bitişi',
            explanation: 'Normalde Müşteri Şehrini getirmek için Satış tablosuna 1 milyon satır DÜŞEYARA yazmanız gerekirdi ve dosya kilitlenirdi. Power Pivot ta sadece ilişki kurarsınız ve Excel arka planda ilişkisel bağ kurarak anında raporlar.',
            speechText: 'Veri Modeli sayesinde milyonlarca satırlık tabloları tek kuruş formül yazmadan birbirine bağlarız. DÜŞEYARA ya ihtiyaç kalmadan tek bir PivotTable da her iki tablonun verilerini kullanabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't23_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "İlişki Kuruldu" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'İlişki Kuruldu yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'İlişki Kuruldu',
              successMessage: 'Tebrikler! İlişkisel veri modeli adımını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q23_1',
          title: 'Veri Modeli Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q23_1_1',
              question: 'Power Pivot ta iki tablo arasında ilişki (Relationship) kurmanın en büyük avantajı nedir?',
              options: [
                { id: 'a', text: 'Yazı tipini değiştirmesi' },
                { id: 'b', text: 'Milyonlarca satırda DÜŞEYARA formülü yazmaya gerek kalmadan tabloları birleştirebilmesi ve dosya boyutunu küçültmesi' },
                { id: 'c', text: 'Sadece renk katması' },
                { id: 'd', text: 'Grafikleri kapatması' }
              ],
              correctOptionId: 'b',
              explanation: 'İlişkisel model DÜŞEYARA bağımlılığını tamamen ortadan kaldırır ve yüksek performans sağlar.',
              measuredSkill: 'Power Pivot ilişki mimarisi'
            }
          ]
        }
      },
      {
        id: 'sec23_l2',
        phaseId: 23,
        unitId: 'u23_2',
        title: 'Bölüm 23 Veri Modeli ve DAX Final Sınavı',
        shortDesc: 'İlişkiler, DAX ölçüleri (Measures), CALCULATE ve RELATED final sınavı.',
        category: 'Power Pivot & DAX',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 23 DAX ve ilişkisel model kazanımlarını ölçmek.',
        prerequisites: ['sec23_l1'],
        commonMistakes: ['Hesaplanmış sütun ile ölçü (Measure) farkını karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak What-If Analizi bölümüne geçmek.',
        level: 'Uzman' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's23_2',
        sheetName: 'Final23',
        headers: ['Kavram', 'Rol', 'Durum'],
        rows: [
          ['İlişkiler', 'Tablo bağlama', 'Ölçüldü'],
          ['DAX Measures', 'Dinamik hesaplama', 'Ölçüldü'],
          ['CALCULATE', 'Filtre değiştirici', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'DAX ve Model Ustalığı', description: 'Kurumsal iş zekâsı modelleri kurgulama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 23 Finali',
            explanation: 'Veri Modeli ve DAX ı tamamladınız. Sınavınızı çözüp What-If Analizi ve Hedef Ara bölümüne geçebilirsiniz.',
            speechText: 'Veri modeli ve DAX uzmanlığını tamamladınız! Sınavı çözüp Hedef Ara ve simülasyon araçlarına geçelim.'
          }
        ],
        tasks: [
          {
            id: 't23_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 23 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q23_2',
          title: 'Bölüm 23 Kapsamlı DAX Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q23_2_1',
              question: 'DAX dilinde filtre bağlamını (Filter Context) değiştirebilen en güçlü ve popüler fonksiyon hangisidir?',
              options: [
                { id: 'a', text: 'TOPLA' },
                { id: 'b', text: 'CALCULATE' },
                { id: 'c', text: 'EĞER' },
                { id: 'd', text: 'DÜŞEYARA' }
              ],
              correctOptionId: 'b',
              explanation: 'CALCULATE fonksiyonu DAX ın kalbidir; formülün hesaplandığı filtre bağlamını dinamik olarak değiştirir.',
              measuredSkill: 'CALCULATE fonksiyonunun rolü'
            }
          ]
        }
      }
    ]
  },

  // SECTION 24: What-If Analysis, Hedef Ara ve Solver
  {
    id: 24,
    category: 'Analiz & What-If',
    title: '24. What-If Analysis, Hedef Ara ve Solver',
    subtitle: 'Hedef Ara (Goal Seek), Veri Tabloları (Data Tables) ve Senaryo Yöneticisi',
    iconName: 'HelpCircle',
    description: 'İstenen kâra veya ciroya ulaşmak için hangi fiyatın veya kaç adedin satılması gerektiğini geriye doğru hesaplayan Hedef Ara ve çok değişkenli duyarlılık analizleri.',
    lessons: [
      {
        id: 'sec24_l1',
        phaseId: 24,
        unitId: 'u24_1',
        title: 'Hedef Ara (Goal Seek) ile İstenen Kâra Ulaşma',
        shortDesc: 'Sonucun 100.000 TL kâr olması için satış fiyatının ne olması gerektiğini geriye doğru çözdürme.',
        category: 'Analiz & What-If',
        groupTitle: 'Hedef Ara',
        primaryGoal: 'Formülü elle deneme-yanılma yapmadan Hedef Ara ile tek saniyede geriye doğru çözmek.',
        prerequisites: ['sec23_l2'],
        commonMistakes: ['Hedef hücre olarak içinde formül olmayan sabit bir hücre seçmek (hedef hücre mutlaka formüllü olmalıdır!)'],
        successCriteria: 'Hedef Ara mantığını kavramak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's24_1',
        sheetName: 'HedefAra',
        headers: ['Değişken', 'Değer', 'Açıklama'],
        rows: [
          ['Satış Fiyatı', 250, 'Değişecek Hücre'],
          ['Maliyet', 180, 'Sabit'],
          ['Satış Adedi', 500, 'Sabit'],
          ['Toplam Kâr', 35000, 'Hedef Hücre (Formül: =(B2-B3)*B4)'],
        ],
        objectives: [
          { id: 'o1', title: 'Hedef Ara Parametreleri', description: 'Ayar Hücresi, Sonuç Değer ve Değişecek Hücre seçimi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Geriye Doğru Hesaplama',
            explanation: 'Hedef Ara ya dersiniz ki: "B5 hücresindeki kârımı 50000 yap; bunu yapmak için B2 deki Satış Fiyatımı değiştir." Excel saniyenin onda birinde denklemi çözer ve fiyatı 280 TL ye çeker.',
            speechText: 'Hedef Ara ile deneme yanılma yapmaktan kurtulursunuz. İstenen kâr tutarını yazarsınız, Excel o kâra ulaşmak için fiyatın kaç lira olması gerektiğini saniyede bulur.'
          }
        ],
        tasks: [
          {
            id: 't24_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Çözüldü" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Çözüldü yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Çözüldü',
              successMessage: 'Harika! Hedef Ara simülasyon adımını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q24_1',
          title: 'Hedef Ara Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q24_1_1',
              question: 'Hedef Ara (Goal Seek) aracında "Ayar Hücresi" (Set Cell) olarak seçilen hücrede ne bulunmak ZORUNDADIR?',
              options: [
                { id: 'a', text: 'Metin' },
                { id: 'b', text: 'İçinde çalışan bir formül' },
                { id: 'c', text: 'Boş bir hücre' },
                { id: 'd', text: 'Tarih' }
              ],
              correctOptionId: 'b',
              explanation: 'Ayar hücresi değişecek hücreye bağlı bir formül içermelidir; aksi takdirde geriye doğru hesaplama yapılamaz.',
              measuredSkill: 'Hedef Ara ayar hücresi kuralı'
            }
          ]
        }
      },
      {
        id: 'sec24_l2',
        phaseId: 24,
        unitId: 'u24_2',
        title: 'Bölüm 24 What-If Analizi Final Sınavı',
        shortDesc: 'Hedef Ara, Veri Tabloları ve senaryo modelleme final sınavı.',
        category: 'Analiz & What-If',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 24 simülasyon ve analiz kazanımlarını ölçmek.',
        prerequisites: ['sec24_l1'],
        commonMistakes: ['Duyarlılık tablolarını tek tek hesaplamaya çalışmak'],
        successCriteria: 'Sınavdan en az %80 alarak Finansal Fonksiyonlar bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's24_2',
        sheetName: 'Final24',
        headers: ['What-If Aracı', 'İşlev', 'Durum'],
        rows: [
          ['Hedef Ara', 'Tek değişkenli tersine çözüm', 'Ölçüldü'],
          ['Veri Tabloları', 'Çoklu duyarlılık analizi', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Simülasyon Ustalığı', description: 'Geleceğe dönük finansal ve operasyonel senaryolar kurma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 24 Finali',
            explanation: 'What-If analizini tamamladınız. Sınavınızı çözüp Finansal Fonksiyonlar ve Kredi/Yatırım Analizine geçin.',
            speechText: 'Durum çözümlemesi bölümünü harika bitirdiniz. Sınavı çözüp finansal formüller bölümüne geçelim.'
          }
        ],
        tasks: [
          {
            id: 't24_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 24 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q24_2',
          title: 'Bölüm 24 Kapsamlı What-If Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q24_2_1',
              question: 'Aynı anda birden fazla değişkeni (örneğin hem fiyatı, hem maliyeti hem de reklam bütçesini) değiştirerek kârı maksimize etmek için hangi gelişmiş Excel eklentisi kullanılır?',
              options: [
                { id: 'a', text: 'Hedef Ara' },
                { id: 'b', text: 'Çözücü (Solver)' },
                { id: 'c', text: 'Filtre' },
                { id: 'd', text: 'Sırala' }
              ],
              correctOptionId: 'b',
              explanation: 'Hedef Ara tek değişken çözerken, Çözücü (Solver) onlarca kısıt altında çok değişkenli optimizasyon yapar.',
              measuredSkill: 'Solver vs Hedef Ara ayrımı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 25: Finansal Fonksiyonlar ve İş Analizi
  {
    id: 25,
    category: 'Finansal Analiz',
    title: '25. Finansal Fonksiyonlar ve İş Analizi',
    subtitle: 'TAKSİT (PMT), BD (PV), GD (FV), FAİZTUTARI (IPMT) ve NBD/İÇ_VERİM_ORANI',
    iconName: 'DollarSign',
    description: 'Paranın zaman değeri, banka kredi ödeme planı çıkarma (TAKSİT), leasing itfa tabloları, yatırımın bugünkü ve gelecekteki değeri (BD / GD) ve proje kârlılık analizleri.',
    lessons: [
      {
        id: 'sec25_l1',
        phaseId: 25,
        unitId: 'u25_1',
        title: 'TAKSİT (PMT) ile Kredi ve Aylık Ödeme Planı Çıkarma',
        shortDesc: 'Kredi tutarı, yıllık/aylık faiz oranı ve vade üzerinden aylık eşit taksit tutarını hesaplama.',
        category: 'Finansal Analiz',
        groupTitle: 'TAKSİT Fonksiyonu',
        primaryGoal: '=TAKSİT(aylık_faiz; vade_ay; -anapara) söz dizimi ile aylık kredi taksitini bulmak.',
        prerequisites: ['sec24_l2'],
        commonMistakes: ['Yıllık faiz oranını 12 ye bölmeyi unutmak ve anaparanın önüne eksi koymayıp negatif taksit görmek'],
        successCriteria: 'TAKSİT fonksiyonunu eksiksiz uygulamak.',
        level: 'İleri' as const,
        durationMinutes: 14,
        functionsUsed: ['TAKSİT'],
        sheetId: 's25_1',
        sheetName: 'KrediHesabı',
        headers: ['Kredi Parametresi', 'Değer'],
        rows: [
          ['Kredi Tutarı', 100000],
          ['Aylık Faiz Oranı', 0.02],
          ['Vade (Ay)', 12],
          ['Aylık Taksit Tutarı', 0],
        ],
        objectives: [
          { id: 'o1', title: 'TAKSİT Anatomisi', description: '=TAKSİT(B3; B4; -B2) şeklinde anaparayı eksi girerek pozitif ödeme bulma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Kredi Hesaplama Formülü',
            explanation: '=TAKSİT(B3; B4; -B2). İlk parametre aylık faiz (%2), ikinci parametre ay sayısı (12), üçüncü parametre ise anapara (-100.000). Çıkan sonuç aylık ödeyeceğiniz eşit taksittir.',
            speechText: 'Banka kredilerinin aylık geri ödemesini hesaplamak için TAKSİT fonksiyonunu kullanırız. Önemli bir püf noktası: Kredi tutarının önüne eksi koyarsanız taksit tutarı pozitif çıkar.'
          }
        ],
        tasks: [
          {
            id: 't25_1_1',
            stepNumber: 1,
            instruction: 'B5 hücresine "=TAKSİT(B3; B4; -B2)" formülünü yazın.',
            targetCell: 'B5',
            hints: [
              'B5 hücresini seçin.',
              '=TAKSİT(B3; B4; -B2) yazın.',
              '100 bin TL %2 faizle 12 ayda yaklaşık 9456 TL aylık taksit çıkar.'
            ],
            validation: {
              targetCell: 'B5',
              expectedFormulaKeywords: ['TAKSİT', 'PMT'],
              successMessage: 'Tebrikler! TAKSİT fonksiyonuyla kredi ödeme planını başarıyla hesapladınız.'
            }
          }
        ],
        quiz: {
          id: 'q25_1',
          title: 'TAKSİT Fonksiyonu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q25_1_1',
              question: 'TAKSİT fonksiyonunda yıllık %24 faiz oranı ve 24 aylık bir kredi için 1. parametreye ne yazılmalıdır?',
              options: [
                { id: 'a', text: '0.24' },
                { id: 'b', text: '0.24 / 12 (yani aylık %2 faiz)' },
                { id: 'c', text: '24' },
                { id: 'd', text: '12' }
              ],
              correctOptionId: 'b',
              explanation: 'Taksitler aylık ödendiği için yıllık faiz oranı mutlaka 12 ye bölünerek aylık faize dönüştürülmelidir.',
              measuredSkill: 'Faiz periyodu uyumlandırma'
            }
          ]
        }
      },
      {
        id: 'sec25_l2',
        phaseId: 25,
        unitId: 'u25_2',
        title: 'Bölüm 25 Finansal Fonksiyonlar Final Sınavı',
        shortDesc: 'TAKSİT, BD, GD, faiz/anapara ayrımı ve finansal modelleme final sınavı.',
        category: 'Finansal Analiz',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 25 finansal analiz kazanımlarını ölçmek.',
        prerequisites: ['sec25_l1'],
        commonMistakes: ['Nakit akışı işaretlerini (+/-) karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Makrolar ve VBA bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's25_2',
        sheetName: 'Final25',
        headers: ['Fonksiyon', 'İşlev', 'Durum'],
        rows: [
          ['TAKSİT (PMT)', 'Aylık kredi ödemesi', 'Ölçüldü'],
          ['BD (PV)', 'Nakit akışı bugünkü değer', 'Ölçüldü'],
          ['GD (FV)', 'Yatırım gelecekteki değer', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Finansal Modelleme Ustalığı', description: 'Kurumsal bütçe ve kredi planları hazırlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 25 Finali',
            explanation: 'Finansal fonksiyonları tamamladınız. Sınavınızı çözüp otomasyon ve programlama dünyasına (Makrolar & VBA) geçin.',
            speechText: 'Finansal analiz bölümünü başarıyla tamamladınız. Sınavı çözüp Makrolar ve VBA kodlama bölümüne geçebiliriz.'
          }
        ],
        tasks: [
          {
            id: 't25_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 25 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q25_2',
          title: 'Bölüm 25 Kapsamlı Finans Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q25_2_1',
              question: 'Bir projenin kârlı olup olmadığını anlamak için kullanılan Net Bugünkü Değer fonksiyonu hangisidir?',
              options: [
                { id: 'a', text: 'NBD (NPV)' },
                { id: 'b', text: 'TOPLA' },
                { id: 'c', text: 'TAKSİT' },
                { id: 'd', text: 'KÂR' }
              ],
              correctOptionId: 'a',
              explanation: 'NBD (Net Present Value), gelecekteki nakit akışlarını bugüne indirgeyerek yatırım kârlılığını ölçer.',
              measuredSkill: 'NBD yatırım değerlendirme fonksiyonu'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_21_TO_25', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section21to25.ts'), content, 'utf8');
console.log('Successfully generated section21to25.ts');
