import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 16: Hızlı Doldurma ve Otomatik Veri İşleme
  {
    id: 16,
    category: 'Otomatik Veri İşleme',
    title: '16. Hızlı Doldurma ve Otomatik Veri İşleme',
    subtitle: 'Hızlı Doldurma (Flash Fill - Ctrl+E) ile formülsüz metin ve formatlama otomasyonu',
    iconName: 'Zap',
    description: 'Excel in yapay zekâ algoritması Hızlı Doldurma (Ctrl+E) ile formül yazmadan ad-soyad ayırma, telefon formatlama, e-posta adreslerinden kullanıcı adı çıkarma teknikleri.',
    lessons: [
      {
        id: 'sec16_l1',
        phaseId: 16,
        unitId: 'u16_1',
        title: 'Hızlı Doldurma (Flash Fill - Ctrl+E) Temelleri',
        shortDesc: 'İlk örneği elle yazıp Ctrl+E ye basarak Excel in deseni otomatik algılamasını sağlama.',
        category: 'Otomatik Veri İşleme',
        groupTitle: 'Hızlı Doldurma',
        primaryGoal: 'Formül yazmaya gerek kalmadan bir deseni Excel in anında tüm sütuna yaymasını sağlamak.',
        prerequisites: ['sec15_l2'],
        commonMistakes: ['İlk örneği yanlış veya hatalı yazıp Excel in yanlış desen öğrenmesine yol açmak'],
        successCriteria: 'Hızlı doldurma mantığını kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's16_1',
        sheetName: 'HızlıDoldurma',
        headers: ['Tam Ad', 'Ad', 'Soyad'],
        rows: [
          ['Ahmet Yılmaz', 'Ahmet', 'Yılmaz'],
          ['Mehmet Kaya', '', ''],
          ['Ayşe Demir', '', ''],
        ],
        objectives: [
          { id: 'o1', title: 'Ctrl+E Kısayolu', description: 'Deseni algılayıp altındaki yüzlerce satırı tek tıkla doldurma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Formülsüz Sihir: Ctrl + E',
            explanation: 'İlk satıra sadece "Mehmet" yazıp altındaki hücredeyken Ctrl+E ye bastığınızda Excel sol sütundaki adları anında ayırır. Hiçbir metin formülü yazmanıza gerek kalmaz.',
            speechText: 'Hızlı Doldurma Excel in en zeki özelliklerinden biridir. Tek bir örnek gösterip Ctrl+E tuşuna bastığınızda, Excel deseni öğrenir ve tüm sütunu anında doldurur.'
          }
        ],
        tasks: [
          {
            id: 't16_1_1',
            stepNumber: 1,
            instruction: 'B3 hücresine Mehmet yazarak deseni başlatın.',
            targetCell: 'B3',
            hints: ['B3 hücresini seçin.', 'Mehmet yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'B3',
              expectedValue: 'Mehmet',
              successMessage: 'Tebrikler! Hızlı doldurma başlangıç adımını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q16_1',
          title: 'Hızlı Doldurma Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q16_1_1',
              question: 'Excel de Hızlı Doldurma (Flash Fill) komutunu tetikleyen klavye kısayolu nedir?',
              options: [
                { id: 'a', text: 'Ctrl + F' },
                { id: 'b', text: 'Ctrl + E' },
                { id: 'c', text: 'Ctrl + H' },
                { id: 'd', text: 'Alt + E' }
              ],
              correctOptionId: 'b',
              explanation: 'Ctrl + E kısayolu Hızlı Doldurma özelliğini anında çalıştırır.',
              measuredSkill: 'Hızlı doldurma kısayolu'
            }
          ]
        }
      },
      {
        id: 'sec16_l2',
        phaseId: 16,
        unitId: 'u16_2',
        title: 'Bölüm 16 Hızlı Doldurma Final Sınavı',
        shortDesc: 'Hızlı doldurma deseni, veri ayrıştırma ve telefon formatlama final sınavı.',
        category: 'Otomatik Veri İşleme',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 16 veri işleme kazanımlarını ölçmek.',
        prerequisites: ['sec16_l1'],
        commonMistakes: ['Hızlı doldurma dinamik bir formül değildir; kaynak değiştiğinde güncellenmez!'],
        successCriteria: 'Sınavdan en az %80 alarak Veri Doğrulama bölümüne geçmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's16_2',
        sheetName: 'Final16',
        headers: ['Konu', 'Önem', 'Durum'],
        rows: [
          ['Ctrl+E', 'Çok Yüksek', 'Ölçüldü'],
          ['Statik Yapı', 'Kritik', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Hızlı Doldurma Analizi', description: 'Formül yerine ne zaman Hızlı Doldurma tercih edileceğini bilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 16 Finali',
            explanation: 'Hızlı Doldurmayı öğrendiniz. Unutmayın: Hızlı doldurma formül değildir, statik metin üretir. Sınavınızı çözüp Veri Doğrulama ve Koşullu Biçimlendirme bölümüne geçin.',
            speechText: 'Hızlı doldurmayı tamamladınız! Sınavı çözüp açılır listeler ve koşullu renklendirme bölümüne geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't16_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 16 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q16_2',
          title: 'Bölüm 16 Kapsamlı Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q16_2_1',
              question: 'Hızlı Doldurma ile metin formülleri (SOLDAN, PARÇAAL) arasındaki en temel fark nedir?',
              options: [
                { id: 'a', text: 'Hızlı Doldurma çalışmaz' },
                { id: 'b', text: 'Hızlı Doldurma statik metin üretir; ana veri değişirse Hızlı Doldurma sonucu kendiliğinden güncellenmez' },
                { id: 'c', text: 'Formüller her zaman daha yavaştır' },
                { id: 'd', text: 'Hiçbir fark yoktur' }
              ],
              correctOptionId: 'b',
              explanation: 'Hızlı Doldurma tek seferlik statik metin yazar; dinamik olarak güncellenmesi gereken raporlarda formül tercih edilmelidir.',
              measuredSkill: 'Hızlı Doldurma statiklik analizi'
            }
          ]
        }
      }
    ]
  },

  // SECTION 17: Veri Doğrulama ve Koşullu Biçimlendirme
  {
    id: 17,
    category: 'Veri Doğrulama & Biçimlendirme',
    title: '17. Veri Doğrulama ve Koşullu Biçimlendirme',
    subtitle: 'Açılır liste (Drop-down), giriş sınırlandırmaları, veri çubukları ve renk ölçekleri',
    iconName: 'CheckSquare',
    description: 'Hücrelere açılır liste (Drop-down) ekleyerek hatalı veri girişini engelleme, sayı aralığı kısıtlamaları, koşullu biçimlendirme ile hedefleri aşanları yeşil, zararları kırmızı boyama kuralları.',
    lessons: [
      {
        id: 'sec17_l1',
        phaseId: 17,
        unitId: 'u17_1',
        title: 'Veri Doğrulama ile Açılır Liste (Drop-Down) Oluşturma',
        shortDesc: 'Kullanıcının sadece belirlenen listedeki şehirleri veya departmanları seçebilmesini sağlama.',
        category: 'Veri Doğrulama & Biçimlendirme',
        groupTitle: 'Açılır Liste',
        primaryGoal: 'Veri > Veri Doğrulama > Liste seçeneğiyle hücreye açılır ok kutusu tanımlamak.',
        prerequisites: ['sec16_l2'],
        commonMistakes: ['Liste elemanlarını ayırırken noktalı virgül yerine virgül kullanıp tek bir eleman gibi görünmesine neden olmak'],
        successCriteria: 'Açılır liste kurallarını kavramak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's17_1',
        sheetName: 'AçılırListe',
        headers: ['Personel', 'Departman', 'Durum'],
        rows: [
          ['Ahmet Yılmaz', 'Finans', 'Aktif'],
          ['Ayşe Demir', 'Satış', 'Aktif'],
          ['Canan Kaya', 'Seçiniz', 'Bekliyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Doğrulama Mantığı', description: 'Hatalı yazımı önlemek için standart liste tanımlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Hatalı Veriye Son: Açılır Liste',
            explanation: 'Kullanıcıların "Finans" yerine yanlışlıkla "Finas" veya "Finanz" yazmasını engellemek için Veri Doğrulama dan Liste seçer ve kaynak kısmına "Finans; Satış; İK; Pazarlama" yazarız.',
            speechText: 'Veri giriş hatalarını sıfıra indirmek için açılır listeler kullanırız. Kullanıcı hücreye geldiğinde bir ok belirir ve sadece sizin izin verdiğiniz seçeneklerden birini seçebilir.'
          }
        ],
        tasks: [
          {
            id: 't17_1_1',
            stepNumber: 1,
            instruction: 'B4 hücresine geçerli bir departman olarak "İK" yazın.',
            targetCell: 'B4',
            hints: ['B4 hücresini seçin.', 'İK yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'B4',
              expectedValue: 'İK',
              successMessage: 'Harika! Geçerli liste elemanını başarıyla girdiniz.'
            }
          }
        ],
        quiz: {
          id: 'q17_1',
          title: 'Veri Doğrulama Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q17_1_1',
              question: 'Veri Doğrulama (Data Validation) aracı şerit menünün hangi sekmesindedir?',
              options: [
                { id: 'a', text: 'Giriş' },
                { id: 'b', text: 'Ekle' },
                { id: 'c', text: 'Veri' },
                { id: 'd', text: 'Gözden Geçir' }
              ],
              correctOptionId: 'c',
              explanation: 'Veri Doğrulama aracı Veri (Data) sekmesi Veri Araçları grubundadır.',
              measuredSkill: 'Veri doğrulama konumu'
            }
          ]
        }
      },
      {
        id: 'sec17_l2',
        phaseId: 17,
        unitId: 'u17_2',
        title: 'Bölüm 17 Veri Doğrulama ve Koşullu Biçimlendirme Final Sınavı',
        shortDesc: 'Açılır liste, sayı kısıtlamaları, renk ölçekleri ve kural yönetimi final sınavı.',
        category: 'Veri Doğrulama & Biçimlendirme',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 17 veri kontrolü ve görselleştirme kazanımlarını ölçmek.',
        prerequisites: ['sec17_l1'],
        commonMistakes: ['Koşullu biçimlendirme kurallarını çakıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Grafikler bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's17_2',
        sheetName: 'Final17',
        headers: ['Özellik', 'Kullanım Alanı', 'Durum'],
        rows: [
          ['Açılır Liste', 'Standart veri girişi', 'Ölçüldü'],
          ['Koşullu Renklendirme', 'Hızlı durum tespiti', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Güvenliği ve Vurgu', description: 'Tabloları hatalı girdilerden koruma ve otomatik renklendirme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 17 Finali',
            explanation: 'Veri doğrulama ve koşullu renklendirmeyi bitirdiniz. Sınavınızı çözüp Grafikler ve Veri Görselleştirme bölümüne geçin.',
            speechText: 'Tebrikler! Veri doğrulama bölümünü tamamladınız. Sınavı çözüp grafikler ve görselleştirme bölümüne geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't17_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 17 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q17_2',
          title: 'Bölüm 17 Kapsamlı Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q17_2_1',
              question: 'Koşullu Biçimlendirmede (Conditional Formatting) bir hücredeki değer değiştikçe hücrenin arka plan rengi de otomatik olarak değişir mi?',
              options: [
                { id: 'a', text: 'Hayır, her defasında yeniden ayarlanmalıdır' },
                { id: 'b', text: 'Evet, kural dinamiktir; sayı eşiği aşarsa anında yeşile veya kırmızıya döner' },
                { id: 'c', text: 'Yalnızca dosya kaydedildiğinde değişir' },
                { id: 'd', text: 'Sadece metinlerde değişir' }
              ],
              correctOptionId: 'b',
              explanation: 'Koşullu biçimlendirme tamamen dinamiktir; hücre değeri geliştikçe stil otomatik güncellenir.',
              measuredSkill: 'Koşullu biçimlendirme dinamiklik kuralı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 18: Grafikler ve Veri Görselleştirme
  {
    id: 18,
    category: 'Görselleştirme & Grafikler',
    title: '18. Grafikler ve Veri Görselleştirme',
    subtitle: 'Doğru grafik türü seçimi, sütun, çizgi, pasta ve iki eksenli birleşik grafikler',
    iconName: 'BarChart2',
    description: 'Hangi veri için hangi grafik türünün seçileceği, trend analizi için çizgi grafikler, kategori karşılaştırması için sütun grafikleri, iki farklı ölçek için ikincil eksenli grafikler.',
    lessons: [
      {
        id: 'sec18_l1',
        phaseId: 18,
        unitId: 'u18_1',
        title: 'Doğru Grafik Türünü Seçme ve Sütun/Çizgi Grafikleri',
        shortDesc: 'Zaman serilerinde Çizgi (Line), kategoriler arası karşılaştırmada Sütun (Column) grafik seçimi.',
        category: 'Görselleştirme & Grafikler',
        groupTitle: 'Grafik Temelleri',
        primaryGoal: 'Veri tipine uygun grafik türünü belirleyerek profesyonel sunum grafiği hazırlamak.',
        prerequisites: ['sec17_l2'],
        commonMistakes: ['Zaman içindeki değişimi pasta grafikle göstermeye çalışmak (pasta grafik yalnızca anlık pay dağılımı içindir!)'],
        successCriteria: 'Grafik türü seçim prensiplerini kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's18_1',
        sheetName: 'GrafikVerisi',
        headers: ['Ay', 'Satış (Bin TL)', 'Maliyet (Bin TL)'],
        rows: [
          ['Ocak', 120, 80],
          ['Şubat', 150, 95],
          ['Mart', 180, 110],
          ['Nisan', 210, 125],
        ],
        objectives: [
          { id: 'o1', title: 'Grafik Prensipleri', description: 'Ekle > Grafikler menüsünden uygun grafik seçimi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Veri Hikayeciliği',
            explanation: 'Eğer bir trend (artış/azalış) anlatıyorsanız Çizgi grafik, farklı ürünlerin büyüklüklerini kıyaslıyorsanız Sütun grafik, pazar payı dağılımı gösteriyorsanız Pasta grafik seçmelisiniz.',
            speechText: 'Bir grafiğin amacı veriyi saniyeler içinde anlatmaktır. Zaman içindeki yükselişi çizgi grafikle, şubeler arası ciroyu sütun grafikle gösteririz.'
          }
        ],
        tasks: [
          {
            id: 't18_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Grafik Hazır" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Grafik Hazır yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Grafik Hazır',
              successMessage: 'Tebrikler! Grafik türü seçim mantığını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q18_1',
          title: 'Grafik Türleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q18_1_1',
              question: 'Şirketin son 12 aylık ciro değişim trendini ve yükselişini en iyi gösteren grafik türü hangisidir?',
              options: [
                { id: 'a', text: 'Pasta Grafiği' },
                { id: 'b', text: 'Çizgi Grafiği (Line Chart)' },
                { id: 'c', text: 'Halka Grafiği' },
                { id: 'd', text: 'Radar Grafiği' }
              ],
              correctOptionId: 'b',
              explanation: 'Zaman serisi ve trend gösterimlerinde insan beyninin en rahat algıladığı grafik Çizgi (Line) grafiğidir.',
              measuredSkill: 'Zaman trendi grafik seçimi'
            }
          ]
        }
      },
      {
        id: 'sec18_l2',
        phaseId: 18,
        unitId: 'u18_2',
        title: 'Bölüm 18 Grafikler Final Sınavı',
        shortDesc: 'Grafik türleri, ikincil eksen, veri etiketleri ve profesyonel grafik biçimlendirme sınavı.',
        category: 'Görselleştirme & Grafikler',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 18 görselleştirme ve grafik kazanımlarını ölçmek.',
        prerequisites: ['sec18_l1'],
        commonMistakes: ['Grafikte eksen etiketlerini ve başlıkları unutmak'],
        successCriteria: 'Sınavdan en az %80 alarak PivotTable bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's18_2',
        sheetName: 'Final18',
        headers: ['Grafik Türü', 'Kullanım Alanı', 'Durum'],
        rows: [
          ['Sütun / Çubuk', 'Kategori kıyaslama', 'Ölçüldü'],
          ['Çizgi Grafik', 'Trend analizi', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Görselleştirme Ustalığı', description: 'Yönetim sunumları için temiz grafikler tasarlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 18 Finali',
            explanation: 'Grafikleri tamamladınız. Sınavınızı çözüp veri özetlemenin en güçlü aracı olan PivotTable (Özet Tablo) bölümüne geçebilirsiniz.',
            speechText: 'Grafik tasarımını harika tamamladınız! Sınavı çözüp PivotTable dünyasına adım atalım.'
          }
        ],
        tasks: [
          {
            id: 't18_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 18 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q18_2',
          title: 'Bölüm 18 Kapsamlı Grafik Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q18_2_1',
              question: 'Bir grafikte hem milyonluk Satış Cirosunu hem de %5 lik Kâr Marjını aynı anda net gösterebilmek için hangi özellik kullanılır?',
              options: [
                { id: 'a', text: 'Grafik ikiye bölünür' },
                { id: 'b', text: 'İkincil Eksen (Secondary Axis) eklenir' },
                { id: 'c', text: 'Pasta grafik yapılır' },
                { id: 'd', text: 'Sayılara sıfır eklenir' }
              ],
              correctOptionId: 'b',
              explanation: 'İkincil Eksen, ölçekleri birbirinden çok farklı iki veriyi (TL ve Yüzde) aynı grafikte netçe göstermek için kullanılır.',
              measuredSkill: 'İkincil eksen (Secondary Axis) kurgusu'
            }
          ]
        }
      }
    ]
  },

  // SECTION 19: PivotTable ve PivotChart
  {
    id: 19,
    category: 'PivotTable & Raporlama',
    title: '19. PivotTable ve PivotChart',
    subtitle: 'PivotTable 4 alan mimarisi, değer alanı ayarları, tarih gruplama ve dilimleyiciler',
    iconName: 'PieChart',
    description: 'Milyonlarca satırlık ham veriyi saniyeler içinde özet raporlara dönüştürme, Satırlar, Sütunlar, Değerler ve Filtreler alanları, dinamik dilimleyiciler (Slicers) ve PivotChart.',
    lessons: [
      {
        id: 'sec19_l1',
        phaseId: 19,
        unitId: 'u19_1',
        title: 'PivotTable Temelleri ve 4 Alanın Mantığı',
        shortDesc: 'Satırlar (Rows), Sütunlar (Columns), Değerler (Values) ve Filtreler (Filters) mimarisi.',
        category: 'PivotTable & Raporlama',
        groupTitle: 'PivotTable Mimarisi',
        primaryGoal: 'Ham satış verilerinden tek satır formül yazmadan bölge ve ürün bazlı özet tablo oluşturmak.',
        prerequisites: ['sec18_l2'],
        commonMistakes: ['Ham tabloda başlığı olmayan boş sütun bulunması halinde PivotTable ın hata vermesi'],
        successCriteria: 'PivotTable 4 alan mantığını kavramak.',
        level: 'Orta' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's19_1',
        sheetName: 'PivotHamVeri',
        headers: ['Bölge', 'Temsilci', 'Kategori', 'Ciro (TL)'],
        rows: [
          ['Marmara', 'Ahmet', 'Gıda', 45000],
          ['Ege', 'Mehmet', 'Elektronik', 92000],
          ['Marmara', 'Ayşe', 'Elektronik', 78000],
          ['İç Anadolu', 'Can', 'Gıda', 34000],
          ['Ege', 'Fatma', 'Gıda', 51000],
        ],
        objectives: [
          { id: 'o1', title: '4 Alan Mimarisi', description: 'Değerler alanına ciro, satırlara bölge koyarak özet çıkarma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'PivotTable ın Büyüsü',
            explanation: 'PivotTable Excel in en güçlü analiz aracıdır. Ekle > PivotTable a bastığınızda sağda 4 kutu açılır: Bölgeyi "Satırlar" kutusuna, Ciroyu "Değerler" kutusuna sürüklediğiniz an bölgelerin toplam cirosu hazır olur!',
            speechText: 'PivotTable ile formül yazmadan devasa tabloları saniyeler içinde özetlersiniz. Bölgeyi satırlara, ciroyu değerler kutusuna bırakmanız yeterlidir.'
          }
        ],
        tasks: [
          {
            id: 't19_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Özetlendi" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Özetlendi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Özetlendi',
              successMessage: 'Tebrikler! PivotTable 4 alan mimarisi temelini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q19_1',
          title: 'PivotTable Temel Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q19_1_1',
              question: 'PivotTable alan listesinde toplanacak veya ortalaması alınacak sayısal veriler (örneğin Ciro veya Adet) hangi kutuya sürüklenmelidir?',
              options: [
                { id: 'a', text: 'Satırlar (Rows)' },
                { id: 'b', text: 'Sütunlar (Columns)' },
                { id: 'c', text: 'Değerler (Values / Σ Değerler)' },
                { id: 'd', text: 'Filtreler (Filters)' }
              ],
              correctOptionId: 'c',
              explanation: 'Sayısal hesaplama yapılacak metrikler daima Değerler (Values) alanına bırakılır.',
              measuredSkill: 'PivotTable alan yerleşimi'
            }
          ]
        }
      },
      {
        id: 'sec19_l2',
        phaseId: 19,
        unitId: 'u19_2',
        title: 'Bölüm 19 PivotTable Final Sınavı',
        shortDesc: 'Değer alanı ayarları, tarih gruplama, dilimleyiciler ve PivotTable yenileme sınavı.',
        category: 'PivotTable & Raporlama',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 19 PivotTable analiz kazanımlarını ölçmek.',
        prerequisites: ['sec19_l1'],
        commonMistakes: ['Ham veri değiştiğinde PivotTable ın otomatik güncellenmediğini, "Yenile" (Refresh) yapılması gerektiğini unutmak'],
        successCriteria: 'Sınavdan en az %80 alarak Dashboard bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's19_2',
        sheetName: 'Final19',
        headers: ['Özellik', 'Kullanım Amacı', 'Durum'],
        rows: [
          ['PivotTable', 'Dinamik özetleme', 'Ölçüldü'],
          ['Yenile (Refresh)', 'Veri güncelleme', 'Ölçüldü'],
          ['Dilimleyici (Slicer)', 'Görsel filtreleme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'PivotTable Ustalığı', description: 'Büyük verilerden anında yönetsel özetler çıkarabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 19 Finali',
            explanation: 'PivotTable ı tamamladınız. Unutmayın: Ham tablonuza yeni satır eklediğinizde PivotTable a sağ tıklayıp "Yenile" demelisiniz. Şimdi sınavınızı yanıtlayıp Profesyonel Dashboard bölümüne geçin.',
            speechText: 'PivotTable konusunu harika kavradınız! Sınavınızı çözüp interaktif yönetim dashboardları oluşturma bölümüne geçelim.'
          }
        ],
        tasks: [
          {
            id: 't19_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 19 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q19_2',
          title: 'Bölüm 19 Kapsamlı PivotTable Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q19_2_1',
              question: 'Ham verilerde yapılan değişikliklerin PivotTable a yansıması için ne yapılmalıdır?',
              options: [
                { id: 'a', text: 'Excel kapatılıp açılmalıdır' },
                { id: 'b', text: 'PivotTable a sağ tıklayıp "Yenile" (Refresh) seçilmeli veya Alt+F5 yapılmalıdır' },
                { id: 'c', text: 'PivotTable baştan silinip yeniden çizilmelidir' },
                { id: 'd', text: 'Formüller sekmesine basılmalıdır' }
              ],
              correctOptionId: 'b',
              explanation: 'PivotTable lar hafızadaki önbelleği (PivotCache) kullanır; değişiklikleri almak için Yenile (Refresh) komutu verilmelidir.',
              measuredSkill: 'PivotTable Yenile (Refresh) kuralı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 20: Profesyonel Dashboard ve Yönetim Raporları
  {
    id: 20,
    category: 'Dashboard & Raporlama',
    title: '20. Profesyonel Dashboard ve Yönetim Raporları',
    subtitle: 'KPI metrik kartları, dilimleyici bağlantıları (Report Connections) ve C-Level dashboard mimarisi',
    iconName: 'Tv',
    description: 'Üst yönetim için tek ekranda özet metrik kartları (KPI Cards), dilimleyicilerle tüm pivotları ve grafikleri aynı anda filtreleme, profesyonel sunum ve dashboard tasarımı.',
    lessons: [
      {
        id: 'sec20_l1',
        phaseId: 20,
        unitId: 'u20_1',
        title: 'KPI Kartları ve Dilimleyici Bağlantıları (Rapor Bağlantıları)',
        shortDesc: 'Tek bir dilimleyici düğmesine basıldığında sayfadaki 4 farklı pivot ve grafiğin aynı anda filtrelenmesi.',
        category: 'Dashboard & Raporlama',
        groupTitle: 'Dashboard Mimarisi',
        primaryGoal: 'Rapor Bağlantıları (Report Connections) ile dilimleyicileri birden çok PivotTable a bağlamak.',
        prerequisites: ['sec19_l2'],
        commonMistakes: ['Her grafik için ayrı ayrı dilimleyici ekleyip ekranı düğme çöplüğüne çevirmek'],
        successCriteria: 'Dilimleyici rapor bağlantıları mantığını kavramak.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's20_1',
        sheetName: 'Dashboard',
        headers: ['Metrik', 'Değer', 'Değişim', 'Hedef'],
        rows: [
          ['Toplam Ciro', '1.450.000 ₺', '+%14', '1.300.000 ₺'],
          ['Brüt Kâr Marjı', '%28,5', '+%2,1', '%25,0'],
          ['Aktif Müşteri', '1.240', '+110', '1.100'],
        ],
        objectives: [
          { id: 'o1', title: 'Rapor Bağlantıları', description: 'Dilimleyiciye sağ tıklayıp Rapor Bağlantılarından tüm pivotları seçme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'İnteraktif Yönetim Kokpiti',
            explanation: 'Tek bir "Bölge" dilimleyicisine Marmara seçtiğinizde hem Satış Pivotu, hem Maliyet Grafiği hem de Personel Tablosu anında Marmara ya göre filtrelenir. Bunu sağlayan özellik Rapor Bağlantıları dır.',
            speechText: 'Gerçek bir Excel dashboardunda bir dilimleyici düğmesine tıkladığınızda tüm ekrandaki grafikler ve KPI kartları aynı anda senkronize hareket eder.'
          }
        ],
        tasks: [
          {
            id: 't20_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Bağlandı" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Bağlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Bağlandı',
              successMessage: 'Harika! Dashboard bağlantı prensibini kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q20_1',
          title: 'Dashboard Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q20_1_1',
              question: 'Bir Dilimleyicinin (Slicer) birden fazla farklı PivotTable ı aynı anda filtreleyebilmesi için hangi ayar açılmalıdır?',
              options: [
                { id: 'a', text: 'Veri Doğrulama' },
                { id: 'b', text: 'Rapor Bağlantıları (Report Connections)' },
                { id: 'c', text: 'Bölmeleri Dondur' },
                { id: 'd', text: 'Metni Kaydır' }
              ],
              correctOptionId: 'b',
              explanation: 'Rapor Bağlantıları (Report Connections) menüsünden dilimleyicinin kontrol edeceği tüm PivotTable lar işaretlenir.',
              measuredSkill: 'Dilimleyici rapor bağlantıları'
            }
          ]
        }
      },
      {
        id: 'sec20_l2',
        phaseId: 20,
        unitId: 'u20_2',
        title: 'Bölüm 20 Dashboard Mimarisi Final Sınavı',
        shortDesc: 'KPI kartları, dashboard yerleşimi, dilimleyici bağlantıları ve sunum modu sınavı.',
        category: 'Dashboard & Raporlama',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 20 yönetim dashboardu kazanımlarını ölçmek.',
        prerequisites: ['sec20_l1'],
        commonMistakes: ['Dashboard u aşırı kalabalıklaştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Harici Veriler bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's20_2',
        sheetName: 'Final20',
        headers: ['Dashboard Bileşeni', 'Önemi', 'Durum'],
        rows: [
          ['KPI Metrik Kartı', 'Kritik', 'Ölçüldü'],
          ['Rapor Bağlantısı', 'Kritik', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Dashboard Ustalığı', description: 'Yöneticilerin tek bakışta karar alabileceği temiz ekranlar üretme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 20 Finali',
            explanation: 'Dashboard mimarisini tamamladınız. Sınavınızı çözüp Harici Veriler ve Dosya İşlemleri bölümüne geçin.',
            speechText: 'Tebrikler! Yönetici dashboard tasarımını tamamladınız. Sınavı çözüp harici veriler ve Power Query dünyasına geçebiliriz.'
          }
        ],
        tasks: [
          {
            id: 't20_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 20 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q20_2',
          title: 'Bölüm 20 Kapsamlı Dashboard Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q20_2_1',
              question: 'Profesyonel bir yönetici dashboardunda kılavuz çizgileri ve formül çubuğu neden genellikle gizlenir?',
              options: [
                { id: 'a', text: 'Excel in çökmemesi için' },
                { id: 'b', text: 'Ekranı yazılım panosu (app) gibi temiz, dikkat dağıtmayan kurumsal bir görünüme kavuşturmak için' },
                { id: 'c', text: 'Formüllerin çalınmasını engellemek için' },
                { id: 'd', text: 'Yazdırma alanını büyütmek için' }
              ],
              correctOptionId: 'b',
              explanation: 'Görünüm sekmelerindeki kılavuz çizgilerini kapatmak dashboardun tam bir yönetim kokpiti gibi görünmesini sağlar.',
              measuredSkill: 'Dashboard sunum estetiği standardı'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_16_TO_20', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section16to20.ts'), content, 'utf8');
console.log('Successfully generated section16to20.ts');
