import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 6: Formül Mantığı ve Hücre Referansları
  {
    id: 6,
    category: 'Formüller ve Referanslar',
    title: '6. Formül Mantığı ve Hücre Referansları',
    subtitle: 'Formül anatomisi, operatörler, göreli ve mutlak ($) hücre başvuruları',
    iconName: 'Calculator',
    description: 'Excel de formül yazmanın temellerini, işlem önceliğini, formül kopyalarken göreli başvuruları ve $ işaretiyle hücre sabitleme (mutlak başvuru) mekanizmasını kavrayın.',
    lessons: [
      {
        id: 'sec6_l1',
        phaseId: 6,
        unitId: 'u6_1',
        title: 'Formül Anatomisi ve Eşittir (=) İşareti',
        shortDesc: 'Formüllerin mutlaka eşittir ile başlaması kuralı ve dinamik sonuç üretimi.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Formül Temelleri',
        primaryGoal: 'Hücreye eşittir işaretiyle başlayıp iki hücreyi çarparak dinamik formül yazmak.',
        prerequisites: ['sec5_l5'],
        commonMistakes: ['Eşittir işaretini unutup doğrudan hücre adreslerini yazmak (bu metin olarak kalır)'],
        successCriteria: 'Hedef hücrede formül yazarak doğru çarpımı elde etmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's6_1',
        sheetName: 'FormülGiriş',
        headers: ['Ürün', 'Birim Fiyat', 'Adet', 'Tutar'],
        rows: [
          ['Laptop Pro', 28000, 3, 0],
          ['Kablosuz Kulaklık', 1200, 15, 0],
          ['Taşınabilir SSD', 3400, 8, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Eşittir Mantığı', description: 'Excel in hesaplama moduna geçmesi için = işaretinin zorunluluğu.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Eşittir: Hesaplama Başlatıcı',
            explanation: 'Excel bir hücrenin başına "=" koymadığınız sürece onu normal bir yazı veya sayı kabul eder. "=B2*C2" yazdığınızda Excel B2 deki fiyat ile C2 deki adeti anında çarpar.',
            speechText: 'Excel de tüm formüller istisnasız eşittir işaretiyle başlar. Eşittir B2 çarpı C2 yazdığımızda, Excel iki hücreyi birbiriyle dinamik olarak çarpar.'
          }
        ],
        tasks: [
          {
            id: 't6_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=B2*C2" formülünü yazın ve Enter tuşuna basın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=B2*C2 yazın.',
              'Enter a basın. Sonuç 84000 olmalıdır.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 84000,
              successMessage: 'Tebrikler! İlk dinamik çarpım formülünüzü başarıyla yazdınız.'
            }
          }
        ],
        quiz: {
          id: 'q6_1',
          title: 'Formül Anatomisi Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_1_1',
              question: 'Bir hücreye "B2*C2" yazılırsa (başına = konulmazsa) Excel ne tepki verir?',
              options: [
                { id: 'a', text: 'Çarpımı hesaplar' },
                { id: 'b', text: 'Hücrede düz metin olarak "B2*C2" görünür, hesaplama yapmaz' },
                { id: 'c', text: '#DEĞER! hatası verir' },
                { id: 'd', text: 'Sıfır yazar' }
              ],
              correctOptionId: 'b',
              explanation: 'Eşittir işareti olmadan Excel girdiğiniz metni formül olarak algılamaz.',
              measuredSkill: 'Formül başlangıç kuralı'
            }
          ]
        }
      },
      {
        id: 'sec6_l2',
        phaseId: 6,
        unitId: 'u6_2',
        title: 'Aritmetik Operatörler (+, -, *, /, ^) ve İşlem Önceliği',
        shortDesc: 'Matematiksel işlem sırası (Parantez, Üs, Çarpma/Bölme, Toplama/Çıkarma).',
        category: 'Formüller ve Referanslar',
        groupTitle: 'İşlem Önceliği',
        primaryGoal: 'İşlem önceliğini yönetmek için parantez kullanarak doğru ortalama ve kâr marjı hesaplamak.',
        prerequisites: ['sec6_l1'],
        commonMistakes: ['Parantez kullanmayıp toplamanın çarpmadan sonra yapılacağını unutmak'],
        successCriteria: 'Parantezli işlemle doğru brüt kâr tutarını hesaplamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's6_2',
        sheetName: 'İşlemÖnceliği',
        headers: ['Satış Fiyatı', 'Maliyet', 'Adet', 'Toplam Kâr'],
        rows: [
          [500, 300, 20, 0],
          [1200, 800, 10, 0],
        ],
        objectives: [
          { id: 'o1', title: 'İşlem Sırası', description: 'Önce parantez içi, sonra çarpma kuralını formüle uygulama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Parantez Kullanımının Önemi',
            explanation: 'Eğer "=(A2-B2)*C2" yerine "=A2-B2*C2" yazarsanız, Excel önce B2 ile C2 yi çarpar, sonra A2 den çıkarır ve sonuç tamamen hatalı çıkar.',
            speechText: 'Matematiksel işlem sırası Excel de hayati önem taşır. Önce farkı alıp sonra adetle çarpmak istiyorsak çıkarma işlemini mutlaka parantez içine almalıyız.'
          }
        ],
        tasks: [
          {
            id: 't6_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=(A2-B2)*C2" formülünü yazarak toplam kârı hesaplayın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=(A2-B2)*C2 yazın.',
              'Sonuç 4000 olmalıdır. Enter tuşuna basıp denetleyin.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 4000,
              successMessage: 'Harika! İşlem önceliğini parantez ile başarıyla yönettiniz.'
            }
          }
        ],
        quiz: {
          id: 'q6_2',
          title: 'İşlem Önceliği Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_2_1',
              question: 'Excel de "=10+20*2" formülünün sonucu nedir?',
              options: [
                { id: 'a', text: '60' },
                { id: 'b', text: '50' },
                { id: 'c', text: '40' },
                { id: 'd', text: '20' }
              ],
              correctOptionId: 'b',
              explanation: 'Çarpma işleminin toplamaya göre önceliği vardır. Önce 20*2=40 hesaplanır, sonra 10 eklenerek 50 bulunur.',
              measuredSkill: 'Aritmetik işlem önceliği'
            }
          ]
        }
      },
      {
        id: 'sec6_l3',
        phaseId: 6,
        unitId: 'u6_3',
        title: 'Göreli Hücre Başvuruları (A1 Mantığı)',
        shortDesc: 'Formülü aşağı çektiğinizde satır numaralarının (B2 -> B3 -> B4) otomatik uyarlanması.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Göreli Başvurular',
        primaryGoal: 'Formülü doldurma tutamacıyla aşağı kopyalayarak tüm satırların otomatik hesaplanmasını sağlamak.',
        prerequisites: ['sec6_l2'],
        commonMistakes: ['Her satıra tek tek elle formül yazmaya çalışarak vakit kaybetmek'],
        successCriteria: 'Formülü kopyalayarak ardışık hesaplamayı tamamlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's6_3',
        sheetName: 'GöreliBaşvuru',
        headers: ['Hizmet', 'Saat', 'Saat Ücreti', 'Toplam Ücret'],
        rows: [
          ['Danışmanlık', 10, 1500, 15000],
          ['Yazılım Geliştirme', 25, 2000, 0],
          ['Eğitim', 8, 1200, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Göreli Kayma', description: 'Excel in formül kopyalandıkça mesafeyi koruyarak adresleri güncellemesi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Göreli Başvuru: Excel in Akıllı Hafızası',
            explanation: 'D2 hücresinde "=B2*C2" formülü varken bunu bir alt satıra (D3 e) kopyalarsanız, Excel formülü otomatik olarak "=B3*C3" e dönüştürür. Buna Göreli Hücre Başvurusu denir.',
            speechText: 'Göreli başvuru sayesinde tek bir satıra formül yazar, sonra binlerce satıra aşağı doğru kopyalarız. Excel satır numaralarını kendiliğinden birer artırır.'
          }
        ],
        tasks: [
          {
            id: 't6_3_1',
            stepNumber: 1,
            instruction: 'D3 hücresine "=B3*C3" yazarak Yazılım Geliştirme toplam ücretini hesaplayın.',
            targetCell: 'D3',
            hints: [
              'D3 hücresini seçin.',
              '=B3*C3 yazın.',
              'Sonuç 50000 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'D3',
              expectedValue: 50000,
              successMessage: 'Tebrikler! Göreli başvuru mantığıyla ikinci satırı hesapladınız.'
            }
          }
        ],
        quiz: {
          id: 'q6_3',
          title: 'Göreli Başvuru Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_3_1',
              question: 'C2 hücresindeki "=A2+B2" formülü C3 hücresine kopyalandığında formül neye dönüşür?',
              options: [
                { id: 'a', text: '=A2+B2' },
                { id: 'b', text: '=A3+B3' },
                { id: 'c', text: '=A3+B2' },
                { id: 'd', text: '=B3+C3' }
              ],
              correctOptionId: 'b',
              explanation: 'Bir alt satıra inildiğinde tüm göreli referansların satır numarası 1 artar: =A3+B3.',
              measuredSkill: 'Dikey formül kopyalama davranışı'
            }
          ]
        }
      },
      {
        id: 'sec6_l4',
        phaseId: 6,
        unitId: 'u6_4',
        title: 'Mutlak Hücre Başvurusu ($A$1 ile Sabitleme)',
        shortDesc: 'KDV oranı, kur veya sabit komisyon hücresini dolar ($) işaretiyle kilitleme.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Mutlak Başvuru',
        primaryGoal: 'Sabit bir hücreyi referans alan formüllerde $ işaretini (F4 tuşu) kullanarak kaymayı engellemek.',
        prerequisites: ['sec6_l3'],
        commonMistakes: ['Sabit katsayıyı kilitlenmediği için alt satırlarda formülün boş hücrelere kayıp 0 veya #DEĞER! üretmesi'],
        successCriteria: 'Mutlak başvuru formülü yazarak doğru KDV tutarını hesaplamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 14,
        functionsUsed: [],
        sheetId: 's6_4',
        sheetName: 'KDVHesaplama',
        headers: ['KDV Oranı:', '0.2', '', ''],
        rows: [
          ['Ürün Adı', 'Matrah (TL)', 'KDV Tutarı', 'Genel Toplam'],
          ['Monitör', 10000, 0, 0],
          ['Klavye', 2000, 0, 0],
          ['Hoparlör', 3500, 0, 0],
        ],
        objectives: [
          { id: 'o1', title: 'F4 ve Dolar ($) Kuralı', description: '$B$1 yazarak hem sütunu hem satırı kilitleme mekanizması.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Neden Dolar İşareti Kullanırız?',
            explanation: 'B1 hücresinde KDV oranı (%20) var. Formülü aşağı çektiğimizde Matrah (B2, B3..) aşağı inmeli, ama KDV oranı hep B1 de kalmalıdır. İşte B1 in önüne $B$1 koyarak onu kilitleriz.',
            speechText: 'Excel de en çok yapılan hata hücre sabitlemeyi unutmaktır. Formülü aşağı çekerken bir hücrenin hep aynı yerde sabit kalmasını istiyorsanız, klavyeden F4 tuşuna basarak dolar işaretleri eklemelisiniz.'
          }
        ],
        tasks: [
          {
            id: 't6_4_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=B2*$B$1" formülünü yazarak Monitörün KDV sini hesaplayın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=B2*$B$1 yazın.',
              'Sonuç 2000 olmalıdır. Enter tuşuna basın.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 2000,
              successMessage: 'Mükemmel! $B$1 mutlak başvurusu ile KDV oranını başarıyla kilitlediniz.'
            }
          }
        ],
        quiz: {
          id: 'q6_4',
          title: 'Mutlak Başvuru Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_4_1',
              question: 'Excel de bir hücre başvurusunu hızla mutlak başvuruya ($) dönüştürmek için hangi fonksiyon tuşu kullanılır?',
              options: [
                { id: 'a', text: 'F2' },
                { id: 'b', text: 'F4' },
                { id: 'c', text: 'F9' },
                { id: 'd', text: 'F12' }
              ],
              correctOptionId: 'b',
              explanation: 'F4 tuşu seçili hücre başvurusuna sırasıyla $A$1, A$1, $A1 ve A1 kilitlerini ekler.',
              measuredSkill: 'Hücre kilitleme kısayolu (F4)'
            }
          ]
        }
      },
      {
        id: 'sec6_l5',
        phaseId: 6,
        unitId: 'u6_5',
        title: 'Karma Hücre Başvuruları ($A1 ve A$1)',
        shortDesc: 'Sadece satırı (A$1) veya sadece sütunu ($A1) kilitleme ve çarpım tablosu mantığı.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Karma Başvurular',
        primaryGoal: 'İki yönlü tablolarda tek bir formül yazıp hem sağa hem aşağı çekerek tüm matrisi doldurmak.',
        prerequisites: ['sec6_l4'],
        commonMistakes: ['Dolar işaretinin harfin mi yoksa sayının mı önüne konulacağını karıştırmak'],
        successCriteria: 'Karma başvuru mantığını anlamak ve hedef hücrede formülü uygulamak.',
        level: 'Orta' as const,
        durationMinutes: 14,
        functionsUsed: [],
        sheetId: 's6_5',
        sheetName: 'ÇarpımTablosu',
        headers: ['X', '10', '20', '30'],
        rows: [
          [1, 0, 0, 0],
          [2, 0, 0, 0],
          [3, 0, 0, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Sütun veya Satır Kilitleme', description: '$A2 ile sütunu sabitleyip satırı serbest bırakma, B$1 ile satırı sabitleyip sütunu serbest bırakma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Karma Başvurunun Gücü',
            explanation: 'Dolar işareti neyin önündeyse o kilitlenir! $A2 de A sütunu kilitli, 2. satır serbesttir. B$1 de ise B sütunu serbest, 1. satır kilitlidir.',
            speechText: 'Dolar işareti kimin önündeyse onu kilitler! Harfin önüne koyarsanız sütun kilitlenir, sayının önüne koyarsanız satır kilitlenir.'
          }
        ],
        tasks: [
          {
            id: 't6_5_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=$A2*B$1" formülünü yazarak ilk çarpımı hesaplayın.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=$A2*B$1 yazın.',
              'Sonuç 10 çıkmalıdır. Enter a basıp denetleyin.'
            ],
            validation: {
              targetCell: 'B2',
              expectedValue: 10,
              successMessage: 'Tebrikler! Karma başvuru formülünü kusursuz yazdınız.'
            }
          }
        ],
        quiz: {
          id: 'q6_5',
          title: 'Karma Başvuru Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_5_1',
              question: '"$C5" başvurusunda sağa veya aşağı kopyalama yapıldığında ne kilitli kalır?',
              options: [
                { id: 'a', text: 'Hem C sütunu hem 5. satır' },
                { id: 'b', text: 'Yalnızca C sütunu kilitlidir, satır değişebilir' },
                { id: 'c', text: 'Yalnızca 5. satır kilitlidir' },
                { id: 'd', text: 'Hiçbiri kilitli değildir' }
              ],
              correctOptionId: 'b',
              explanation: 'Dolar işareti C nin önünde olduğu için C sütunu sabit kalır, 5 sayısının önünde dolar olmadığı için satır serbestçe değişir.',
              measuredSkill: 'Karma başvuru yön çözümleme'
            }
          ]
        }
      },
      {
        id: 'sec6_l6',
        phaseId: 6,
        unitId: 'u6_6',
        title: 'Formül Hata Türleri (#DEĞER!, #BAŞV!, #SIFIR/0!, #AD?)',
        shortDesc: 'Excel in ürettiği en yaygın hata kodlarının nedenleri ve düzeltme yolları.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Hata Ayıklama',
        primaryGoal: 'Formül hatalarını okuyup neden kaynaklandığını anında tespit edebilmek.',
        prerequisites: ['sec6_l5'],
        commonMistakes: ['Hata kodunu görünce tüm formülü baştan yazmak yerine spesifik nedeni incelememek'],
        successCriteria: 'Hata kodlarının anlamını kavramak ve doğru düzeltmeyi uygulamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's6_6',
        sheetName: 'HataKodları',
        headers: ['Hata Kodu', 'Oluşma Sebebi', 'Örnek Durum'],
        rows: [
          ['#SIFIR/0!', 'Bir sayıyı sıfıra veya boş hücreye bölmek', '=100/0'],
          ['#DEĞER!', 'Sayı ile metni çarpmaya veya toplamaya çalışmak', '=10*"Ahmet"'],
          ['#AD?', 'Fonksiyon adını yanlış yazmak', '=TOPLLAA(A1:A5)'],
          ['#BAŞV!', 'Formülde başvurulan hücre veya sütunun silinmiş olması', 'Silinen hücre'],
        ],
        objectives: [
          { id: 'o1', title: 'Hata Teşhisi', description: 'Dört ana hata kodunu ve çözüm yöntemlerini tanıma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Hatalarla Barışın',
            explanation: '#SIFIR/0! sıfıra bölmeyi, #DEĞER! metinle sayıyı matematiksel işleme sokmayı, #AD? fonksiyon adını yanlış yazmayı, #BAŞV! ise başvurduğunuz hücrenin sayfadan silindiğini anlatır.',
            speechText: 'Excel de hata mesajları korkulacak şeyler değildir, size formülün neresinde sorun olduğunu açıkça söyler. #AD hatası görüyorsanız formül ismini yanlış yazmışsınızdır.'
          }
        ],
        tasks: [
          {
            id: 't6_6_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Düzeltildi" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Düzeltildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Düzeltildi',
              successMessage: 'Harika! Hata kodları analiz adımını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q6_6',
          title: 'Hata Türleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q6_6_1',
              question: 'Excel de "=TOPLA(A1:A10)" yerine yanlışlıkla "=TOPLAM(A1:A10)" yazılırsa hangi hata kodu döner?',
              options: [
                { id: 'a', text: '#DEĞER!' },
                { id: 'b', text: '#AD? (#NAME?)' },
                { id: 'c', text: '#SIFIR/0!' },
                { id: 'd', text: '#BAŞV!' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel tanımlı olmayan bir fonksiyon ismiyle karşılaştığında #AD? hatası verir.',
              measuredSkill: 'Fonksiyon adı yazım hatası'
            }
          ]
        }
      },
      {
        id: 'sec6_l7',
        phaseId: 6,
        unitId: 'u6_7',
        title: 'Bölüm 6 Formül Mantığı ve Referanslar Değerlendirme Sınavı',
        shortDesc: 'Formül anatomisi, göreli, mutlak ($) ve karma başvuruların kapsamlı final sınavı.',
        category: 'Formüller ve Referanslar',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 6 daki tüm formül ve başvuru kazanımlarını ölçmek.',
        prerequisites: ['sec6_l1', 'sec6_l2', 'sec6_l3', 'sec6_l4', 'sec6_l5', 'sec6_l6'],
        commonMistakes: ['Başvuru türlerini karıştırmak'],
        successCriteria: 'Sınavdan en az %80 başarı elde ederek Fonksiyonlar bölümüne geçmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's6_7',
        sheetName: 'Final6',
        headers: ['Konu', 'Kazanım', 'Durum'],
        rows: [
          ['Operatörler', 'İşlem önceliği', 'Ölçüldü'],
          ['Mutlak ($)', 'F4 kilitleme', 'Ölçüldü'],
          ['Karma ($A1)', 'Matris çarpımı', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Formül Uzmanlığı', description: 'Referans türlerini eksiksiz uygulayabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 6 Finali',
            explanation: 'Formül mantığı ve hücre başvurularını tamamladınız. Artık Excel in yerleşik fonksiyonlarına geçmek için hazırsınız.',
            speechText: 'Formüller ve hücre sabitleme konularında harika bir başarı gösterdiniz. Sınavınızı tamamlayıp matematiksel fonksiyonlar bölümüne geçelim.'
          }
        ],
        tasks: [
          {
            id: 't6_7_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 6 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q6_7',
          title: 'Bölüm 6 Kapsamlı Formül Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q6_7_1',
              question: 'D2 hücresindeki "=$B$2*C2" formülü D5 hücresine kopyalandığında formül neye dönüşür?',
              options: [
                { id: 'a', text: '=$B$5*C5' },
                { id: 'b', text: '=$B$2*C5' },
                { id: 'c', text: '=B2*C2' },
                { id: 'd', text: '=$B$2*C2' }
              ],
              correctOptionId: 'b',
              explanation: '$B$2 mutlak olduğu için asla değişmez, C2 ise göreli olduğu için 3 satır aşağı inerek C5 olur.',
              measuredSkill: 'Mutlak ve göreli karma kopyalama analizi'
            }
          ]
        }
      }
    ]
  },

  // SECTION 7: Temel Matematiksel ve İstatistiksel Fonksiyonlar
  {
    id: 7,
    category: 'Matematik & İstatistik',
    title: '7. Temel Matematiksel ve İstatistiksel Fonksiyonlar',
    subtitle: 'TOPLA, ORTALAMA, MAK, MİN, SAY, BAĞ_DEĞ_DOLU_SAY ve YUVARLA',
    iconName: 'Percent',
    description: 'Excel in en sık kullanılan temel fonksiyonlarını, argüman yapılarını, aralık toplamlarını, ortalama hesaplarını, uç değer analizlerini ve yuvarlama yöntemlerini öğrenin.',
    lessons: [
      {
        id: 'sec7_l1',
        phaseId: 7,
        unitId: 'u7_1',
        title: 'TOPLA (SUM) Fonksiyonu ile Hızlı Toplamlar',
        shortDesc: 'Aralık toplamı alma, çoklu aralıkları toplama ve Otomatik Toplam (Alt+=) kısayolu.',
        category: 'Matematik & İstatistik',
        groupTitle: 'TOPLA Fonksiyonu',
        primaryGoal: 'Birden çok hücreyi tek tek + ile toplamak yerine =TOPLA(A1:A10) fonksiyonuyla toplamak.',
        prerequisites: ['sec6_l7'],
        commonMistakes: ['Aralık yerine tek tek + koymak: =TOPLA(B2+B3+B4) yazmak gereksiz ve yanlıştır; =TOPLA(B2:B4) yazılmalıdır'],
        successCriteria: 'TOPLA fonksiyonu ile doğru aralık toplamını hesaplamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: ['TOPLA'],
        sheetId: 's7_1',
        sheetName: 'SatışToplamı',
        headers: ['Bölge', 'Temsilci', 'Aylık Ciro (TL)'],
        rows: [
          ['Marmara', 'Ahmet Yılmaz', 85000],
          ['Ege', 'Mehmet Kaya', 62000],
          ['İç Anadolu', 'Ayşe Demir', 74000],
          ['Akdeniz', 'Fatma Şahin', 91000],
          ['Genel Toplam', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'TOPLA Söz Dizimi', description: '=TOPLA(başlangıç:bitiş) yapısıyla aralık toplamı alma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Neden TOPLA Fonksiyonu?',
            explanation: '100 satırı "+B2+B3+B4..." şeklinde toplamak imkansızdır. "=TOPLA(C2:C5)" yazdığınızda Excel iki nokta (:) arasındaki tüm hücreleri toplar.',
            speechText: 'Excel de toplam almanın en profesyonel yolu TOPLA fonksiyonudur. Parantez içine aralığın ilk ve son hücresini iki nokta ile yazmanız yeterlidir.'
          }
        ],
        tasks: [
          {
            id: 't7_1_1',
            stepNumber: 1,
            instruction: 'C6 hücresine "=TOPLA(C2:C5)" formülünü yazarak genel toplam ciroyu bulun.',
            targetCell: 'C6',
            hints: [
              'C6 hücresini seçin.',
              '=TOPLA(C2:C5) yazın.',
              'Sonuç 312000 olmalıdır. Enter tuşuna basın.'
            ],
            validation: {
              targetCell: 'C6',
              expectedValue: 312000,
              expectedFormulaKeywords: ['TOPLA', 'SUM'],
              successMessage: 'Tebrikler! TOPLA fonksiyonuyla genel ciroyu başarıyla hesapladınız.'
            }
          }
        ],
        quiz: {
          id: 'q7_1',
          title: 'TOPLA Fonksiyonu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q7_1_1',
              question: 'TOPLA fonksiyonunda iki ayrı aralığı (örneğin A1:A5 ve C1:C5) aynı formülde toplamak için hangi ayraç kullanılır?',
              options: [
                { id: 'a', text: 'Tire (-)' },
                { id: 'b', text: 'Noktalı virgül (;)' },
                { id: 'c', text: 'Artı (+)' },
                { id: 'd', text: 'İki nokta (:)' }
              ],
              correctOptionId: 'b',
              explanation: '=TOPLA(A1:A5; C1:C5) şeklinde noktalı virgül ile birden fazla bağımsız aralık toplanabilir.',
              measuredSkill: 'Çoklu aralık argüman ayracı'
            }
          ]
        }
      },
      {
        id: 'sec7_l2',
        phaseId: 7,
        unitId: 'u7_2',
        title: 'ORTALAMA (AVERAGE) Fonksiyonu ile Ortalama Hesaplama',
        shortDesc: 'Sayısal aralığın aritmetik ortalamasını alma ve boş hücrelerin ortalamaya etkisi.',
        category: 'Matematik & İstatistik',
        groupTitle: 'ORTALAMA Fonksiyonu',
        primaryGoal: 'Aritmetik ortalama için =ORTALAMA(Aralık) fonksiyonunu doğru uygulamak.',
        prerequisites: ['sec7_l1'],
        commonMistakes: ['Sıfır içeren hücre ile boş hücreyi karıştırmak (Excel boş hücreyi saymazken sıfırı ortalamaya katar)'],
        successCriteria: 'ORTALAMA fonksiyonunu uygulayarak doğru ortalama değerini bulmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: ['ORTALAMA'],
        sheetId: 's7_2',
        sheetName: 'SınavNotları',
        headers: ['Öğrenci Adı', 'Vize Notu', 'Final Notu'],
        rows: [
          ['Can Yıldız', 70, 85],
          ['Ece Aydın', 90, 95],
          ['Burak Özer', 60, 75],
          ['Sınıf Ortalaması', 0, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Aritmetik Ortalama', description: '=ORTALAMA(B2:B4) fonksiyonuyla otomatik pay ve payda hesaplama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'ORTALAMA Fonksiyonunun Mantığı',
            explanation: 'ORTALAMA fonksiyonu belirtilen aralıktaki tüm sayıları toplar ve sayı adedine böler. Metin içeren veya tamamen boş olan hücreleri otomatik olarak hesaba katmaz.',
            speechText: 'Ortalama bulmak için sayıları toplayıp adetine bölmekle uğraşmayın. ORTALAMA fonksiyonu aralıktaki tüm sayıların aritmetik ortalamasını anında verir.'
          }
        ],
        tasks: [
          {
            id: 't7_2_1',
            stepNumber: 1,
            instruction: 'B5 hücresine "=ORTALAMA(B2:B4)" formülünü yazarak Vize sınıf ortalamasını hesaplayın.',
            targetCell: 'B5',
            hints: [
              'B5 hücresini seçin.',
              '=ORTALAMA(B2:B4) yazın.',
              'Sonuç (70+90+60)/3 = 73,33.. olmalıdır.'
            ],
            validation: {
              targetCell: 'B5',
              expectedFormulaKeywords: ['ORTALAMA', 'AVERAGE'],
              successMessage: 'Harika! Sınıf ortalamasını başarıyla hesapladınız.'
            }
          }
        ],
        quiz: {
          id: 'q7_2',
          title: 'ORTALAMA Fonksiyonu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q7_2_1',
              question: 'A1=10, A2=20 ve A3 hücresi tamamen BOŞ ise "=ORTALAMA(A1:A3)" sonucu ne olur?',
              options: [
                { id: 'a', text: '10' },
                { id: 'b', text: '15' },
                { id: 'c', text: '30' },
                { id: 'd', text: '#DEĞER!' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel tamamen boş hücreleri ortalamaya dahil etmez. (10+20)/2 = 15 sonucunu verir.',
              measuredSkill: 'Boş hücrelerin ortalamaya etkisi'
            }
          ]
        }
      },
      {
        id: 'sec7_l3',
        phaseId: 7,
        unitId: 'u7_3',
        title: 'MAK (MAX) ve MİN (MIN) ile Uç Değerleri Bulma',
        shortDesc: 'Aralıktaki en büyük ve en küçük değerleri tespit etme.',
        category: 'Matematik & İstatistik',
        groupTitle: 'Uç Değer Fonksiyonları',
        primaryGoal: 'Satış veya maliyet tablolarında en yüksek ve en düşük değerleri saniyeler içinde bulmak.',
        prerequisites: ['sec7_l2'],
        commonMistakes: ['MAK ve MİN fonksiyonlarına metin aralığı verip sonuç alamamak'],
        successCriteria: 'MAK ve MİN fonksiyonlarıyla uç değerleri hesaplamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: ['MAK', 'MİN'],
        sheetId: 's7_3',
        sheetName: 'UçDeğerler',
        headers: ['Ay', 'Ciro (TL)'],
        rows: [
          ['Ocak', 145000],
          ['Şubat', 182000],
          ['Mart', 121000],
          ['Nisan', 215000],
          ['Mayıs', 198000],
          ['En Yüksek Satış', 0],
          ['En Düşük Satış', 0],
        ],
        objectives: [
          { id: 'o1', title: 'Uç Değer Tespiti', description: '=MAK(B2:B6) ve =MİN(B2:B6) fonksiyonlarının kullanımı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'En Yüksek ve En Düşüğü Bulma',
            explanation: 'Binlerce ürünün fiyat listesinde en pahalı veya en ucuz ürünü bulmak için MAK ve MİN fonksiyonlarını kullanırız.',
            speechText: 'En yüksek ciroyu bulmak için MAK, en düşük ciroyu bulmak için MİN fonksiyonunu kullanırız. Parantez içine aralığı yazmanız yeterlidir.'
          }
        ],
        tasks: [
          {
            id: 't7_3_1',
            stepNumber: 1,
            instruction: 'B7 hücresine "=MAK(B2:B6)" formülünü yazarak en yüksek satışı bulun.',
            targetCell: 'B7',
            hints: [
              'B7 hücresini seçin.',
              '=MAK(B2:B6) yazın.',
              'Sonuç 215000 olmalıdır.'
            ],
            validation: {
              targetCell: 'B7',
              expectedValue: 215000,
              expectedFormulaKeywords: ['MAK', 'MAX'],
              successMessage: 'Tebrikler! En yüksek satışı başarıyla tespit ettiniz.'
            }
          }
        ],
        quiz: {
          id: 'q7_3',
          title: 'MAK ve MİN Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q7_3_1',
              question: 'Aşağıdaki fonksiyonlardan hangisi bir sayı listesindeki en küçük değeri bulur?',
              options: [
                { id: 'a', text: 'KÜÇÜK' },
                { id: 'b', text: 'MİN' },
                { id: 'c', text: 'DÜŞÜK' },
                { id: 'd', text: 'AZ' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel de mutlak en küçük değeri veren fonksiyon MİN (MIN) dir.',
              measuredSkill: 'Minimum değer fonksiyonu'
            }
          ]
        }
      },
      {
        id: 'sec7_l4',
        phaseId: 7,
        unitId: 'u7_4',
        title: 'SAY (COUNT) ve BAĞ_DEĞ_DOLU_SAY (COUNTA) Farkı',
        shortDesc: 'Sadece sayıları sayan SAY ile metin/sayı tüm dolu hücreleri sayan BAĞ_DEĞ_DOLU_SAY farkı.',
        category: 'Matematik & İstatistik',
        groupTitle: 'Sayım Fonksiyonları',
        primaryGoal: 'İsim listelerinde veya sayı sütunlarında doğru sayım fonksiyonunu seçebilmek.',
        prerequisites: ['sec7_l3'],
        commonMistakes: ['Metin içeren bir isim sütununa SAY yazıp sonucun 0 çıkmasına şaşırmak (SAY yalnızca sayıları sayar!)'],
        successCriteria: 'SAY ve BAĞ_DEĞ_DOLU_SAY arasındaki temel farkı kavramak ve doğru fonksiyonu uygulamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: ['SAY', 'BAĞ_DEĞ_DOLU_SAY'],
        sheetId: 's7_4',
        sheetName: 'SayımAnalizi',
        headers: ['Müşteri No', 'Müşteri Adı', 'Sipariş Sayısı'],
        rows: [
          [101, 'Ahmet Yılmaz', 4],
          [102, 'Ayşe Kaya', 7],
          [103, 'Mehmet Demir', 2],
          [104, 'Fatma Çelik', 5],
          ['Kayıtlı Müşteri Sayısı', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'Sayım Türleri', description: 'SAY (sayı sayar) ile BAĞ_DEĞ_DOLU_SAY (boş olmayan her şeyi sayar) farkı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'SAY vs BAĞ_DEĞ_DOLU_SAY',
            explanation: 'SAY fonksiyonu (İngilizce COUNT) yalnızca sayı içeren hücreleri sayar. Eğer müşteri adlarını (metinleri) saymak istiyorsanız BAĞ_DEĞ_DOLU_SAY (COUNTA) fonksiyonunu kullanmalısınız.',
            speechText: 'En kritik ayrım: İsim veya metin sayıyorsanız BAĞ_DEĞ_DOLU_SAY, sadece rakam sayıyorsanız SAY fonksiyonunu seçmelisiniz.'
          }
        ],
        tasks: [
          {
            id: 't7_4_1',
            stepNumber: 1,
            instruction: 'C6 hücresine "=BAĞ_DEĞ_DOLU_SAY(B2:B5)" formülünü yazarak müşteri sayısını bulun.',
            targetCell: 'C6',
            hints: [
              'C6 hücresini seçin.',
              '=BAĞ_DEĞ_DOLU_SAY(B2:B5) yazın.',
              'Sonuç 4 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'C6',
              expectedValue: 4,
              expectedFormulaKeywords: ['BAĞ_DEĞ_DOLU_SAY', 'COUNTA'],
              successMessage: 'Harika! Metin listesini BAĞ_DEĞ_DOLU_SAY ile başarıyla saydınız.'
            }
          }
        ],
        quiz: {
          id: 'q7_4',
          title: 'Sayım Fonksiyonları Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q7_4_1',
              question: 'A1:A5 aralığında çalışanların isimleri (metin) yazılıysa, "=SAY(A1:A5)" formülü ne sonuç verir?',
              options: [
                { id: 'a', text: '5' },
                { id: 'b', text: '0' },
                { id: 'c', text: '#DEĞER!' },
                { id: 'd', text: '#AD?' }
              ],
              correctOptionId: 'b',
              explanation: 'SAY fonksiyonu sadece sayıları sayar; metin içeren hücrelerde sonuç 0 döner. İsimleri saymak için BAĞ_DEĞ_DOLU_SAY kullanılmalıdır.',
              measuredSkill: 'SAY fonksiyonunun metinleri saymama kuralı'
            }
          ]
        }
      },
      {
        id: 'sec7_l5',
        phaseId: 7,
        unitId: 'u7_5',
        title: 'YUVARLA, YUKARIYUVARLA ve AŞAĞIYUVARLA Fonksiyonları',
        shortDesc: 'Finansal küsuratları belirli ondalık basamağa matematiksel yuvarlama.',
        category: 'Matematik & İstatistik',
        groupTitle: 'Yuvarlama',
        primaryGoal: 'Kuruşlu veya ondalıklı hesaplamaları resmi muhasebe kurallarına göre yuvarlamak.',
        prerequisites: ['sec7_l4'],
        commonMistakes: ['Hücre biçiminden basamak azaltmak ile YUVARLA fonksiyonunu karıştırmak (biçim sadece görüntüyü değiştirir, arkadaki sayıyı değiştirmez!)'],
        successCriteria: 'YUVARLA fonksiyonu ile matematiksel basamak yuvarlama yapmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: ['YUVARLA'],
        sheetId: 's7_5',
        sheetName: 'Yuvarlama',
        headers: ['Kalem', 'Ham Değer', 'Yuvarlanmış Tutar (2 Basamak)'],
        rows: [
          ['Fatura Tutarı', 1450.456, 0],
          ['Gecikme Faizi', 87.892, 0],
        ],
        objectives: [
          { id: 'o1', title: 'YUVARLA Söz Dizimi', description: '=YUVARLA(sayı; basamak_sayısı) yapısının kavranması.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Görüntü mü Gerçek mi?',
            explanation: 'Giriş sekmesinden ondalık gizlediğinizde sayı hala 1450.456 olarak kalır. Oysa =YUVARLA(B2; 2) derseniz sayının gerçek matematiksel değeri 1450.46 ya yuvarlanır.',
            speechText: 'Muhasebe ve finans raporlarında kuruş farkı çıkmaması için YUVARLA fonksiyonunu kullanırız. İkinci parametreye kaç basamağa yuvarlanacağını yazarız.'
          }
        ],
        tasks: [
          {
            id: 't7_5_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=YUVARLA(B2; 2)" formülünü yazın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=YUVARLA(B2; 2) yazın.',
              'Sonuç 1450.46 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 1450.46,
              expectedFormulaKeywords: ['YUVARLA', 'ROUND'],
              successMessage: 'Tebrikler! YUVARLA fonksiyonuyla kuruş yuvarlamasını tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q7_5',
          title: 'Yuvarlama Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q7_5_1',
              question: '"=YUVARLA(124.678; 0)" formülünün sonucu nedir?',
              options: [
                { id: 'a', text: '124' },
                { id: 'b', text: '125' },
                { id: 'c', text: '124.7' },
                { id: 'd', text: '120' }
              ],
              correctOptionId: 'b',
              explanation: 'Basamak sayısı 0 olduğunda tam sayıya yuvarlanır; .678 değeri 0.5 ten büyük olduğu için yukarı yuvarlanarak 125 olur.',
              measuredSkill: 'Tam sayıya yuvarlama mantığı'
            }
          ]
        }
      },
      {
        id: 'sec7_l6',
        phaseId: 7,
        unitId: 'u7_6',
        title: 'Bölüm 7 Temel Fonksiyonlar Değerlendirme Sınavı',
        shortDesc: 'TOPLA, ORTALAMA, MAK, MİN, SAY ve YUVARLA fonksiyonlarının kapsamlı sınavı.',
        category: 'Matematik & İstatistik',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 7 deki tüm temel fonksiyon kazanımlarını doğrulamak.',
        prerequisites: ['sec7_l1', 'sec7_l2', 'sec7_l3', 'sec7_l4', 'sec7_l5'],
        commonMistakes: ['Fonksiyon isimlerini karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Mantıksal Fonksiyonlar bölümüne hak kazanmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's7_6',
        sheetName: 'Final7',
        headers: ['Fonksiyon', 'Görev', 'Durum'],
        rows: [
          ['TOPLA', 'Aralık toplamı', 'Ölçüldü'],
          ['ORTALAMA', 'Aritmetik ortalama', 'Ölçüldü'],
          ['MAK / MİN', 'Uç değerler', 'Ölçüldü'],
          ['SAY / COUNTA', 'Veri sayımı', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Temel Fonksiyon Ustalığı', description: 'Matematik ve istatistik fonksiyonlarını etkin kullanabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 7 Final Değerlendirmesi',
            explanation: 'Tebrikler! Excel in en kritik 6 matematiksel fonksiyonunu öğrendiniz. Şimdi değerlendirme testini yanıtlayarak karar mekanizmalarına (EĞER) geçin.',
            speechText: 'Temel fonksiyonları harika kavradınız! Sınavı tamamlayıp kararlar alacağımız EĞER fonksiyonları bölümüne geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't7_6_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 7 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q7_6',
          title: 'Bölüm 7 Kapsamlı Fonksiyon Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q7_6_1',
              question: 'Bir tablodaki hem metin içeren hem de sayı içeren dolu hücrelerin toplam sayısını bulmak için hangi fonksiyon kullanılır?',
              options: [
                { id: 'a', text: 'SAY' },
                { id: 'b', text: 'BAĞ_DEĞ_DOLU_SAY (COUNTA)' },
                { id: 'c', text: 'TOPLA' },
                { id: 'd', text: 'ORTALAMA' }
              ],
              correctOptionId: 'b',
              explanation: 'BAĞ_DEĞ_DOLU_SAY boş olmayan tüm hücreleri (metin, sayı, mantıksal) sayar.',
              measuredSkill: 'Dolu hücre sayımı seçimi'
            }
          ]
        }
      }
    ]
  },

  // SECTION 8: Mantıksal Fonksiyonlar ve Karar Mekanizmaları
  {
    id: 8,
    category: 'Mantıksal Fonksiyonlar',
    title: '8. Mantıksal Fonksiyonlar ve Karar Mekanizmaları',
    subtitle: 'EĞER, VE, YADA, ÇOKEĞER, EĞERHATA ve karar ağaçları',
    iconName: 'GitBranch',
    description: 'Koşula göre farklı sonuçlar üretme, karşılaştırma operatörleri, çoklu koşullar (VE / YADA), iç içe EĞER yapıları, modern ÇOKEĞER ve hata maskeleme fonksiyonlarını öğrenin.',
    lessons: [
      {
        id: 'sec8_l1',
        phaseId: 8,
        unitId: 'u8_1',
        title: 'Mantıksal Testlerin Temeli ve Karşılaştırma Operatörleri',
        shortDesc: 'DOĞRU ve YANLIŞ kavramları, karşılaştırma operatörleri (=, >, <, >=, <=, <>).',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Mantıksal Testler',
        primaryGoal: 'İki değeri karşılaştırıp DOĞRU ya da YANLIŞ boolean sonucunu üretebilmek.',
        prerequisites: ['sec7_l6'],
        commonMistakes: ['Eşit değildir operatörünü (!= yerine <>) yanlış yazmak'],
        successCriteria: 'Karşılaştırma formülü yazarak mantıksal sonuç elde etmek.',
        level: 'Orta' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's8_1',
        sheetName: 'MantıksalTest',
        headers: ['Gerçekleşen Satış', 'Hedef Satış', 'Hedef Aşıldı mı?'],
        rows: [
          [120000, 100000, 'Bekliyor'],
          [85000, 100000, 'Bekliyor'],
          [100000, 100000, 'Bekliyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Mantıksal Operatörler', description: '>= ile büyük eşittir testini formüle dönüştürme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Excel in Karar Mantığı',
            explanation: 'Excel de bir hücreye "=A2>=B2" yazarsanız, Excel A2 nin B2 den büyük veya eşit olup olmadığını test eder ve hücreye doğrudan DOĞRU ya da YANLIŞ yazar.',
            speechText: 'Mantıksal fonksiyonların kalbi DOĞRU ve YANLIŞ testleridir. Eşit değildir için küçüktür büyüktür (<>), büyük eşittir için (>=) işaretlerini kullanırız.'
          }
        ],
        tasks: [
          {
            id: 't8_1_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=A2>=B2" formülünü yazarak ilk hedef denetimini yapın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=A2>=B2 yazın.',
              '120000 >= 100000 olduğu için sonuç DOĞRU (TRUE) çıkmalıdır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: true,
              successMessage: 'Harika! Mantıksal test formülünü başarıyla yazdınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_1',
          title: 'Karşılaştırma Operatörleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_1_1',
              question: 'Excel de "Eşit Değildir" koşulunu ifade etmek için hangi operatör kullanılır?',
              options: [
                { id: 'a', text: '!=' },
                { id: 'b', text: '<>' },
                { id: 'c', text: '><' },
                { id: 'd', text: '==' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel de eşit değildir operatörü küçüktür ve büyüktür işaretlerinin yan yana yazılmasıyla oluşturulur: <>.',
              measuredSkill: 'Eşit değildir operatörü'
            }
          ]
        }
      },
      {
        id: 'sec8_l2',
        phaseId: 8,
        unitId: 'u8_2',
        title: 'EĞER (IF) Fonksiyonunun Söz Dizimi ve Mantığı',
        shortDesc: 'Üç parametreli EĞER anatomisi: Mantıksal Test, Doğruysa Değer, Yanlışsa Değer.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'EĞER Fonksiyonu',
        primaryGoal: '=EĞER(şart; doğruysa; yanlışsa) söz dizimini eksiksiz kavramak ve uygulamak.',
        prerequisites: ['sec8_l1'],
        commonMistakes: ['Metin sonuçlarını tırnak içine almayı unutmak: =EĞER(A1>50; Geçti; Kaldı) şeklinde tırnaksız yazıp #AD? hatası almak'],
        successCriteria: 'EĞER fonksiyonuyla koşullu metin üretmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['EĞER'],
        sheetId: 's8_2',
        sheetName: 'EĞERTemel',
        headers: ['Öğrenci', 'Puan', 'Durum'],
        rows: [
          ['Ahmet', 75, ''],
          ['Mehmet', 45, ''],
          ['Zeynep', 85, ''],
        ],
        objectives: [
          { id: 'o1', title: 'EĞER Anatomisi', description: 'Şart sağlanırsa ilk sonucu, sağlanmazsa ikinci sonucu döndürme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'EĞER in 3 Parçası',
            explanation: '=EĞER(B2>=50; "Geçti"; "Kaldı") formülünde: 1. Mantıksal Şart (B2>=50), 2. Şart Doğruysa çıkacak sonuç ("Geçti"), 3. Şart Yanlışsa çıkacak sonuç ("Kaldı"). Metinler mutlaka çift tırnak içine alınmalıdır!',
            speechText: 'EĞER formülü üç parçadan oluşur. Birinci parçada şartı sorarız. İkinci parçada doğruysa ne yazacağını, üçüncü parçada ise yanlışsa ne yazacağını belirtiriz.'
          }
        ],
        tasks: [
          {
            id: 't8_2_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=EĞER(B2>=50; "Geçti"; "Kaldı")" formülünü yazın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=EĞER(B2>=50; "Geçti"; "Kaldı") yazın.',
              'Puan 75 olduğu için sonuç "Geçti" olacaktır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 'Geçti',
              expectedFormulaKeywords: ['EĞER', 'IF'],
              successMessage: 'Tebrikler! İlk EĞER fonksiyonunuzu kusursuz yazdınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_2',
          title: 'EĞER Temelleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_2_1',
              question: 'EĞER formülünde metin çıktılarının (örneğin "Onaylandı") çift tırnak içine alınması neden zorunludur?',
              options: [
                { id: 'a', text: 'Zorunlu değildir, isteğe bağlıdır' },
                { id: 'b', text: 'Tırnak konulmazsa Excel metni bir fonksiyon veya hücre adı sanıp #AD? hatası verir' },
                { id: 'c', text: 'Yazı tipini kalın yapmak için' },
                { id: 'd', text: 'Sayıya dönüştürmek için' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel tırnak içinde olmayan harf dizilerini fonksiyon veya ad tanımlaması olarak yorumlamaya çalışır ve #AD? hatası üretir.',
              measuredSkill: 'EĞER metin argüman kuralı'
            }
          ]
        }
      },
      {
        id: 'sec8_l3',
        phaseId: 8,
        unitId: 'u8_3',
        title: 'EĞER ile Sayısal ve Finansal Hesaplama Yapma',
        shortDesc: 'Hedef aşıldığında %10 prim, aşılmadığında %2 prim hesaplama gibi dinamik matematik.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Sayısal Kararlar',
        primaryGoal: 'EĞER sonucunda doğrudan formül ve yüzde hesabı çalıştırabilmek.',
        prerequisites: ['sec8_l2'],
        commonMistakes: ['Sayısal sonuçları da tırnak içine alıp sayıyı metne dönüştürmek'],
        successCriteria: 'EĞER ile koşullu prim tutarını doğru hesaplamak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['EĞER'],
        sheetId: 's8_3',
        sheetName: 'PrimHesabı',
        headers: ['Temsilci', 'Ciro (TL)', 'Prim Tutarı'],
        rows: [
          ['Ali Vural', 150000, 0],
          ['Burcu Can', 80000, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Koşullu Prim', description: 'Ciro >= 100000 ise Ciro*0.10, değilse Ciro*0.02 hesaplama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Sayısal Sonuçlarda Tırnak Kullanmayın!',
            explanation: 'EĞER doğru olduğunda matematiksel bir işlem yapacaksa tırnak koymayın! "=EĞER(B2>=100000; B2*0.1; B2*0.02)" şeklinde yazılır.',
            speechText: 'Eğer bir prim veya para hesabı yapıyorsanız tırnak kullanmayın. Doğrudan hücreyi yüzdeyle çarpabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't8_3_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=EĞER(B2>=100000; B2*0.1; B2*0.02)" formülünü yazın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=EĞER(B2>=100000; B2*0.1; B2*0.02) yazın.',
              '150000 * 0.10 = 15000 çıkmalıdır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 15000,
              expectedFormulaKeywords: ['EĞER', 'IF'],
              successMessage: 'Harika! Dinamik prim hesabını başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_3',
          title: 'Sayısal EĞER Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_3_1',
              question: 'EĞER formülünde doğruysa kısmına "100" (tırnak içinde) yazmak ile 100 yazmak arasındaki fark nedir?',
              options: [
                { id: 'a', text: 'Hiçbir fark yoktur' },
                { id: 'b', text: '"100" metin olarak üretilir ve diğer formüllerle toplanamaz; 100 ise gerçek sayıdır' },
                { id: 'c', text: 'Tırnaklı olan daha hızlı hesaplanır' },
                { id: 'd', text: 'Tırnaklı olan hata verir' }
              ],
              correctOptionId: 'b',
              explanation: 'Tırnak içine alınan her şey metin (string) sayılır ve sayısal işlemlerden çıkarılır.',
              measuredSkill: 'Sayısal çıktı vs metin çıktısı'
            }
          ]
        }
      },
      {
        id: 'sec8_l4',
        phaseId: 8,
        unitId: 'u8_4',
        title: 'VE (AND) Fonksiyonu ile Çoklu Koşul Denetimi',
        shortDesc: 'Tüm şartların aynı anda sağlanmasını (Hem ciro > 100 bin VE hem müşteri memnuniyeti > 90) arama.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Çoklu Koşullar',
        primaryGoal: '=EĞER(VE(şart1; şart2); ...) yapısıyla birden fazla kriteri aynı anda sınamak.',
        prerequisites: ['sec8_l3'],
        commonMistakes: ['VE fonksiyonunu EĞER in dışına yazmaya çalışmak'],
        successCriteria: 'VE fonksiyonunu EĞER içinde başarıyla kurgulamak.',
        level: 'Orta' as const,
        durationMinutes: 14,
        functionsUsed: ['EĞER', 'VE'],
        sheetId: 's8_4',
        sheetName: 'ÇokluKoşul',
        headers: ['Temsilci', 'Ciro (TL)', 'Memnuniyet', 'Bonus Durumu'],
        rows: [
          ['Cemil Kaya', 120000, 95, ''],
          ['Derya Demir', 140000, 80, ''],
        ],
        objectives: [
          { id: 'o1', title: 'VE Fonksiyonu Mantığı', description: 'Parantez içindeki tüm koşullar DOĞRU olduğunda DOĞRU döndürme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'VE Fonksiyonu Nasıl Çalışır?',
            explanation: 'VE(B2>=100000; C2>=90) ifadesinde iki koşul da sağlanırsa sonuç DOĞRU olur. Biri bile sağlanmazsa YANLIŞ döner. Bunu EĞER in ilk argümanı olarak yerleştiririz.',
            speechText: 'Aynı anda birden fazla şartın gerçekleşmesini istiyorsak VE fonksiyonunu kullanırız. Ciro 100 binden büyük VE memnuniyet 90 dan büyükse bonus verilsin diyebiliriz.'
          }
        ],
        tasks: [
          {
            id: 't8_4_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=EĞER(VE(B2>=100000; C2>=90); "Hak Etti"; "Yok")" formülünü yazın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=EĞER(VE(B2>=100000; C2>=90); "Hak Etti"; "Yok") yazın.',
              '120000 >= 100000 ve 95 >= 90 olduğu için sonuç "Hak Etti" çıkmalıdır.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Hak Etti',
              expectedFormulaKeywords: ['EĞER', 'VE'],
              successMessage: 'Tebrikler! VE fonksiyonuyla çoklu şart denetimini başardınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_4',
          title: 'VE Fonksiyonu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_4_1',
              question: '"=VE(5>2; 10>20)" formülünün sonucu nedir?',
              options: [
                { id: 'a', text: 'DOĞRU' },
                { id: 'b', text: 'YANLIŞ' },
                { id: 'c', text: '5' },
                { id: 'd', text: '#DEĞER!' }
              ],
              correctOptionId: 'b',
              explanation: '5>2 doğrudur ancak 10>20 yanlıştır. VE fonksiyonunda şartlardan biri bile yanlışsa sonuç YANLIŞ olur.',
              measuredSkill: 'VE fonksiyonunun kesinlik kuralı'
            }
          ]
        }
      },
      {
        id: 'sec8_l5',
        phaseId: 8,
        unitId: 'u8_5',
        title: 'YADA (OR) Fonksiyonu ile Alternatif Koşullar',
        shortDesc: 'Şartlardan en az birinin sağlanması yeterli olduğunda kullanılan esnek mantıksal test.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Alternatif Koşullar',
        primaryGoal: 'Şartlardan biri bile sağlandığında onay üreten =EĞER(YADA(...)) kurgusunu oluşturmak.',
        prerequisites: ['sec8_l4'],
        commonMistakes: ['VE ile YADA nın mantıksal farkını karıştırmak'],
        successCriteria: 'YADA fonksiyonuyla alternatif koşulları test etmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['EĞER', 'YADA'],
        sheetId: 's8_5',
        sheetName: 'YADATesti',
        headers: ['Müşteri', 'Yıllık Ciro', 'VIP Kart', 'Özel İndirim'],
        rows: [
          ['Şirket A', 45000, 'Var', ''],
          ['Şirket B', 30000, 'Yok', ''],
        ],
        objectives: [
          { id: 'o1', title: 'YADA Mantığı', description: 'Koşullardan en az biri DOĞRU ise DOĞRU döndürme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'YADA: Esnek Karar Verici',
            explanation: 'Müşterinin cirosu 50 binden büyükse YADA VIP Kartı "Var" ise indirim verilsin. Biri bile varsa indirim onaylanır.',
            speechText: 'YADA fonksiyonu koşullardan bir tanesinin bile doğru olmasıyla yetinir. Her iki şart da yanlış olursa YANLIŞ üretir.'
          }
        ],
        tasks: [
          {
            id: 't8_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=EĞER(YADA(B2>=50000; C2="Var"); "İndirimli"; "Standart")" formülünü yazın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=EĞER(YADA(B2>=50000; C2="Var"); "İndirimli"; "Standart") yazın.',
              'C2 "Var" olduğu için şart sağlanır ve sonuç "İndirimli" olur.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 'İndirimli',
              expectedFormulaKeywords: ['EĞER', 'YADA'],
              successMessage: 'Tebrikler! YADA fonksiyonu kurgusu tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q8_6',
          title: 'YADA Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_6_1',
              question: '"=YADA(5>10; 20>15)" formülünün sonucu nedir?',
              options: [
                { id: 'a', text: 'DOĞRU' },
                { id: 'b', text: 'YANLIŞ' },
                { id: 'c', text: '5' },
                { id: 'd', text: '#DEĞER!' }
              ],
              correctOptionId: 'a',
              explanation: '5>10 yanlıştır ancak 20>15 doğrudur. YADA fonksiyonunda bir koşulun doğru olması tüm sonucun DOĞRU çıkması için yeterlidir.',
              measuredSkill: 'YADA tolerans kuralı'
            }
          ]
        }
      },
      {
        id: 'sec8_l6',
        phaseId: 8,
        unitId: 'u8_6',
        title: 'İç İçe (Nested) EĞER Fonksiyonları ile Kademeli Puanlama',
        shortDesc: 'İkiden fazla durum (Pekiyi, İyi, Orta, Zayıf) olduğunda EĞER içinde yeni EĞER açma.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'İç İçe EĞER',
        primaryGoal: 'Kademeli not veya komisyon skriptlerinde iç içe EĞER yazabilmek.',
        prerequisites: ['sec8_l5'],
        commonMistakes: ['Parantezleri sonda kapatmayı unutmak (kaç EĞER açıldıysa sonda o kadar parantez kapatılmalıdır)'],
        successCriteria: 'İç içe EĞER ile doğru harf notunu üretmek.',
        level: 'Orta' as const,
        durationMinutes: 14,
        functionsUsed: ['EĞER'],
        sheetId: 's8_6',
        sheetName: 'KademeliPuan',
        headers: ['Öğrenci', 'Puan', 'Derece'],
        rows: [
          ['Emre Can', 88, ''],
          ['Selin Koç', 72, ''],
          ['Tuna Ak', 48, ''],
        ],
        objectives: [
          { id: 'o1', title: 'İç İçe Mantık', description: 'EĞER in yanlışsa parametresine yeni bir EĞER yerleştirme zinciri.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Zincirleme Karar Verme',
            explanation: '=EĞER(B2>=85; "Pekiyi"; EĞER(B2>=70; "İyi"; "Orta")). İlk şart sağlanmazsa ikinci EĞER devreye girer.',
            speechText: 'İkiden fazla seçenek olduğunda ilk EĞER in yanlış kısmına ikinci bir EĞER yazarız. Böylece kademeli olarak not veya komisyon belirleyebiliriz.'
          }
        ],
        tasks: [
          {
            id: 't8_6_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=EĞER(B2>=85; "Pekiyi"; EĞER(B2>=70; "İyi"; "Orta"))" formülünü yazın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=EĞER(B2>=85; "Pekiyi"; EĞER(B2>=70; "İyi"; "Orta")) yazın.',
              'Puan 88 olduğu için sonuç "Pekiyi" çıkacaktır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 'Pekiyi',
              expectedFormulaKeywords: ['EĞER', 'IF'],
              successMessage: 'Tebrikler! İç içe EĞER zincirini başarıyla kurdunuz.'
            }
          }
        ],
        quiz: {
          id: 'q8_7',
          title: 'İç İçe EĞER Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_7_1',
              question: 'İç içe 3 adet EĞER fonksiyonu açılmış bir formülün en sonunda kaç tane kapatma parantezi ")" bulunmalıdır?',
              options: [
                { id: 'a', text: '1' },
                { id: 'b', text: '2' },
                { id: 'c', text: '3' },
                { id: 'd', text: '4' }
              ],
              correctOptionId: 'c',
              explanation: 'Açılan her parantez kapatılmalıdır. 3 EĞER açıldıysa sonda ))) şeklinde 3 parantez kapatılır.',
              measuredSkill: 'Parantez dengeleme kuralı'
            }
          ]
        }
      },
      {
        id: 'sec8_l7',
        phaseId: 8,
        unitId: 'u8_7',
        title: 'Modern ÇOKEĞER (IFS) Fonksiyonu ile Temiz Söz Dizimi',
        shortDesc: 'İç içe onlarca parantez kapatmak yerine şart1; sonuç1; şart2; sonuç2 söz dizimi.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'ÇOKEĞER Fonksiyonu',
        primaryGoal: 'İç içe EĞER karmaşasından kurtulup ÇOKEĞER fonksiyonunu etkin kullanmak.',
        prerequisites: ['sec8_l6'],
        commonMistakes: ['Varsayılan değer için en sona DOĞRU (TRUE) yazmayı unutmak'],
        successCriteria: 'ÇOKEĞER formülü ile çoklu koşulu temizce çözmek.',
        level: 'İleri' as const,
        durationMinutes: 14,
        functionsUsed: ['ÇOKEĞER'],
        sheetId: 's8_7',
        sheetName: 'ÇOKEĞERUygulama',
        headers: ['Müşteri Puanı', 'Segment'],
        rows: [
          [92, ''],
          [74, ''],
          [55, ''],
        ],
        objectives: [
          { id: 'o1', title: 'ÇOKEĞER Yapısı', description: '=ÇOKEĞER(test1; sonuç1; test2; sonuç2; DOĞRU; varsayılan_sonuç) akışı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Modern Excel in Hediyesi: ÇOKEĞER',
            explanation: 'İç içe 5 tane EĞER yazıp parantezleri kapatmakla uğraşmayın. =ÇOKEĞER(A2>=90; "VIP"; A2>=70; "Gold"; DOĞRU; "Standart") şeklinde sırayla yazabilirsiniz.',
            speechText: 'ÇOKEĞER fonksiyonu modern Excel in en sevilen araçlarındandır. Şartları ve sonuçları peş peşe yazarsınız, iç içe parantezlerle uğraşmazsınız.'
          }
        ],
        tasks: [
          {
            id: 't8_7_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=ÇOKEĞER(A2>=90; "VIP"; A2>=70; "Gold"; DOĞRU; "Standart")" formülünü yazın.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=ÇOKEĞER(A2>=90; "VIP"; A2>=70; "Gold"; DOĞRU; "Standart") yazın.',
              '92 >= 90 olduğu için sonuç "VIP" olacaktır.'
            ],
            validation: {
              targetCell: 'B2',
              expectedValue: 'VIP',
              expectedFormulaKeywords: ['ÇOKEĞER', 'IFS'],
              successMessage: 'Harika! ÇOKEĞER fonksiyonunu başarıyla kullandınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_8',
          title: 'ÇOKEĞER Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_8_1',
              question: 'ÇOKEĞER fonksiyonunda hiçbir şart sağlanmadığında devreye girecek varsayılan sonucu belirtmek için son şart parametresine ne yazılır?',
              options: [
                { id: 'a', text: 'YANLIŞ' },
                { id: 'b', text: 'DOĞRU (veya TRUE)' },
                { id: 'c', text: 'VARSAYILAN' },
                { id: 'd', text: 'EĞER' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKEĞER de son parametre olarak DOĞRU yazıldığında, önceki tüm şartlar yanlış çıksa bile bu son seçenek garanti olarak çalışır.',
              measuredSkill: 'ÇOKEĞER varsayılan koşul tetikleyicisi'
            }
          ]
        }
      },
      {
        id: 'sec8_l8',
        phaseId: 8,
        unitId: 'u8_8',
        title: 'EĞERHATA (IFERROR) ile Profesyonel Hata Maskeleme',
        shortDesc: 'Formül #DEĞER! veya #SIFIR/0! hatası verdiğinde ekranda çirkin hata yerine "Geçersiz Veri" veya 0 gösterme.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Hata Yönetimi',
        primaryGoal: 'Raporlarda çirkin hata kodlarını önlemek için formülleri =EĞERHATA(işlem; "Alternatif") ile sarmalamak.',
        prerequisites: ['sec8_l7'],
        commonMistakes: ['EĞERHATA yı çok erken koyup formülün nerede mantık hatası yaptığını görememek'],
        successCriteria: 'EĞERHATA ile sıfıra bölme hatasını maskelemek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['EĞERHATA'],
        sheetId: 's8_8',
        sheetName: 'EĞERHATA',
        headers: ['Toplam Ciro', 'Adet', 'Birim Fiyat'],
        rows: [
          [50000, 25, 0],
          [20000, 0, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Hata Koruyucu', description: '=EĞERHATA(A3/B3; 0) şeklinde sıfıra bölme durumunda 0 yazdırma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Yönetim Raporlarında Hata Gizleme',
            explanation: 'İkinci satırda Adet 0 olduğu için A3/B3 işlemi normalde #SIFIR/0! hatası verir. Formülü =EĞERHATA(A3/B3; 0) içine alırsanız hata oluştuğunda Excel sessizce 0 yazar.',
            speechText: 'Yönetim kurullarına sunulan raporlarda #DEĞER veya #SIFIR gibi çirkin hata kodları görünmemelidir. EĞERHATA fonksiyonuyla bu hataları temiz bir metne veya sıfıra dönüştürürüz.'
          }
        ],
        tasks: [
          {
            id: 't8_8_1',
            stepNumber: 1,
            instruction: 'C3 hücresine "=EĞERHATA(A3/B3; 0)" formülünü yazarak hatasız hesaplama yapın.',
            targetCell: 'C3',
            hints: [
              'C3 hücresini seçin.',
              '=EĞERHATA(A3/B3; 0) yazın.',
              'Adet 0 olduğu için hata yerine doğrudan 0 yazacaktır.'
            ],
            validation: {
              targetCell: 'C3',
              expectedValue: 0,
              expectedFormulaKeywords: ['EĞERHATA', 'IFERROR'],
              successMessage: 'Tebrikler! EĞERHATA ile sıfıra bölme hatasını profesyonelce maskelediniz.'
            }
          }
        ],
        quiz: {
          id: 'q8_9',
          title: 'EĞERHATA Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q8_9_1',
              question: '"=EĞERHATA(100/2; "Hata Var")" formülünün sonucu nedir?',
              options: [
                { id: 'a', text: '50' },
                { id: 'b', text: 'Hata Var' },
                { id: 'c', text: '#DEĞER!' },
                { id: 'd', text: '0' }
              ],
              correctOptionId: 'a',
              explanation: '100/2 işlemi hata üretmez (sonuç 50 dir). EĞERHATA yalnızca formülde bir hata çıkarsa ikinci parametreyi çalıştırır.',
              measuredSkill: 'EĞERHATA nın hatasız çalışma mantığı'
            }
          ]
        }
      },
      {
        id: 'sec8_l9',
        phaseId: 8,
        unitId: 'u8_9',
        title: 'Bölüm 8 Mantıksal Fonksiyonlar Final Sınavı',
        shortDesc: 'EĞER, VE, YADA, ÇOKEĞER ve EĞERHATA fonksiyonlarının kapsamlı bitirme sınavı.',
        category: 'Mantıksal Fonksiyonlar',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 8 deki tüm mantıksal karar mekanizmaları kazanımlarını ölçmek.',
        prerequisites: ['sec8_l1', 'sec8_l2', 'sec8_l3', 'sec8_l4', 'sec8_l5', 'sec8_l6', 'sec8_l7', 'sec8_l8'],
        commonMistakes: ['Parantez ve noktalı virgül kurallarını unutmak'],
        successCriteria: 'Sınavdan en az %80 alarak Koşullu Hesaplamalar bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 14,
        functionsUsed: [],
        sheetId: 's8_9',
        sheetName: 'Final8',
        headers: ['Konu', 'Kazanım', 'Durum'],
        rows: [
          ['EĞER', 'Tek koşul kararı', 'Ölçüldü'],
          ['VE / YADA', 'Çoklu koşul', 'Ölçüldü'],
          ['ÇOKEĞER', 'Temiz çoklu mantık', 'Ölçüldü'],
          ['EĞERHATA', 'Hata yönetimi', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Mantıksal Karar Ustalığı', description: 'Karmaşık iş kurallarını Excel formüllerine dönüştürebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 8 Final Değerlendirmesi',
            explanation: 'Tebrikler! Excel in en önemli bölümü olan Mantıksal Fonksiyonları tamamladınız. Şimdi değerlendirme testini yanıtlayarak Koşullu Hesaplamalar bölümüne geçin.',
            speechText: 'Mantıksal karar fonksiyonlarını başarıyla tamamladınız. Sınavınızı çözüp ETOPLA ve EĞERSAY gibi koşullu hesaplama araçlarına geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't8_9_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 8 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q8_10',
          title: 'Bölüm 8 Kapsamlı Mantıksal Fonksiyonlar Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q8_10_1',
              question: 'Bir çalışan hem 100 bin TL ciro yapmışsa VE hem de 5 yıldan fazla kıdeme sahipse "Müdür", aksi halde "Uzman" yapılacak formül hangisidir?',
              options: [
                { id: 'a', text: '=EĞER(VE(A1>=100000; B1>5); "Müdür"; "Uzman")' },
                { id: 'b', text: '=VE(EĞER(A1>=100000); EĞER(B1>5); "Müdür")' },
                { id: 'c', text: '=EĞER(YADA(A1>=100000; B1>5); "Müdür"; "Uzman")' },
                { id: 'd', text: '=ÇOKEĞER(A1>=100000; "Müdür"; B1>5; "Uzman")' }
              ],
              correctOptionId: 'a',
              explanation: 'İki koşulun aynı anda sağlanması gerektiği için VE fonksiyonu EĞER in ilk parametresine yazılır.',
              measuredSkill: 'İş kuralını doğru mantıksal formüle dökme'
            }
          ]
        }
      }
    ]
  },

  // SECTION 9: Koşullu Hesaplamalar ve Kriter Fonksiyonları
  {
    id: 9,
    category: 'Koşullu Hesaplamalar',
    title: '9. Koşullu Hesaplamalar ve Kriter Fonksiyonları',
    subtitle: 'ETOPLA, ÇOKETOPLA, EĞERSAY, ÇOKEĞERSAY ve joker karakterler',
    iconName: 'Filter',
    description: 'Belirli bir kritere uyan verileri toplama (ETOPLA), birden fazla kriteri denetleyerek toplama (ÇOKETOPLA), koşullu sayım yapma (EĞERSAY / ÇOKEĞERSAY) ve joker karakterlerle filtreleme.',
    lessons: [
      {
        id: 'sec9_l1',
        phaseId: 9,
        unitId: 'u9_1',
        title: 'ETOPLA (SUMIF) ile Tek Koşula Göre Toplam Alma',
        shortDesc: 'Aralık, Ölçüt ve Toplam_Aralığı parametreleri ile kategoriye göre toplam ciro bulma.',
        category: 'Koşullu Hesaplamalar',
        groupTitle: 'ETOPLA Fonksiyonu',
        primaryGoal: 'Belirli bir ürün kategorisine veya şehre ait satışları tek formülle filtreleyip toplamak.',
        prerequisites: ['sec8_l9'],
        commonMistakes: ['Toplanacak sütunu en başa yazmak (ETOPLA da ölçüt aralığı başta, toplam aralığı sondadır!)'],
        successCriteria: 'ETOPLA ile hedeflenen kategorinin toplam cirosunu doğru hesaplamak.',
        level: 'Orta' as const,
        durationMinutes: 14,
        functionsUsed: ['ETOPLA'],
        sheetId: 's9_1',
        sheetName: 'KategoriToplamı',
        headers: ['Kategori', 'Ürün Adı', 'Satış Tutarı'],
        rows: [
          ['Gıda', 'Zeytinyağı', 45000],
          ['Temizlik', 'Deterjan', 28000],
          ['Gıda', 'Peynir', 32000],
          ['Elektronik', 'Pil', 15000],
          ['Gıda', 'Bakliyat', 19000],
          ['Toplam Gıda Satışı', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'ETOPLA Söz Dizimi', description: '=ETOPLA(Aralık; Ölçüt; Toplam_Aralığı) yapısını kavrama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'ETOPLA Nasıl Çalışır?',
            explanation: '=ETOPLA(A2:A6; "Gıda"; C2:C6). Excel önce A2:A6 sütununa bakar, "Gıda" yazan satırları bulur ve onların C sütunundaki karşılıklarını (45000 + 32000 + 19000) toplayarak 96000 sonucunu verir.',
            speechText: 'ETOPLA fonksiyonu filtrelenmiş toplama yapar. İlk parametre kontrol edilecek sütun, ikinci parametre aranan şart, üçüncü parametre ise toplanacak tutar sütunudur.'
          }
        ],
        tasks: [
          {
            id: 't9_1_1',
            stepNumber: 1,
            instruction: 'C7 hücresine "=ETOPLA(A2:A6; "Gıda"; C2:C6)" formülünü yazın.',
            targetCell: 'C7',
            hints: [
              'C7 hücresini seçin.',
              '=ETOPLA(A2:A6; "Gıda"; C2:C6) yazın.',
              'Gıda toplamı 45000 + 32000 + 19000 = 96000 olmalıdır.'
            ],
            validation: {
              targetCell: 'C7',
              expectedValue: 96000,
              expectedFormulaKeywords: ['ETOPLA', 'SUMIF'],
              successMessage: 'Tebrikler! ETOPLA ile Gıda kategorisi toplamını başarıyla buldunuz.'
            }
          }
        ],
        quiz: {
          id: 'q9_1',
          title: 'ETOPLA Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q9_1_1',
              question: 'ETOPLA fonksiyonunun 3 parametresinin sırası nedir?',
              options: [
                { id: 'a', text: 'Toplam Aralığı ; Aralık ; Ölçüt' },
                { id: 'b', text: 'Aralık ; Ölçüt ; [Toplam Aralığı]' },
                { id: 'c', text: 'Ölçüt ; Aralık ; Toplam Aralığı' },
                { id: 'd', text: 'Aralık ; Toplam Aralığı ; Ölçüt' }
              ],
              correctOptionId: 'b',
              explanation: 'ETOPLA da önce taranacak ölçüt aralığı, sonra ölçüt, en sonda toplanacak aralık gelir.',
              measuredSkill: 'ETOPLA argüman sırası'
            }
          ]
        }
      },
      {
        id: 'sec9_l2',
        phaseId: 9,
        unitId: 'u9_2',
        title: 'ÇOKETOPLA (SUMIFS) ile Birden Fazla Kriteri Denetleme',
        shortDesc: 'Hem Bölge="Marmara" HEM DE Kategori="Elektronik" olan satışları toplama.',
        category: 'Koşullu Hesaplamalar',
        groupTitle: 'ÇOKETOPLA Fonksiyonu',
        primaryGoal: 'İki veya daha fazla şarta uyan kayıtların toplamını ÇOKETOPLA ile almak.',
        prerequisites: ['sec9_l1'],
        commonMistakes: ['ÇOKETOPLA da toplanacak aralığın en başa yazıldığını unutup ETOPLA gibi sona yazmak'],
        successCriteria: 'ÇOKETOPLA söz dizimini doğru kurgulamak.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: ['ÇOKETOPLA'],
        sheetId: 's9_2',
        sheetName: 'ÇokKriterToplam',
        headers: ['Bölge', 'Kategori', 'Tutar'],
        rows: [
          ['Marmara', 'Gıda', 50000],
          ['Marmara', 'Elektronik', 120000],
          ['Ege', 'Elektronik', 80000],
          ['Marmara', 'Elektronik', 70000],
          ['Marmara + Elektronik Toplam', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'ÇOKETOPLA Mimarisi', description: 'Toplanacak aralığın en başta tanımlanması kuralı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'EN ÖNEMLİ FARK: Toplam Aralığı En Başta!',
            explanation: 'ETOPLA da toplanacak aralık en sondaydı. Ancak ÇOKETOPLA da toplanacak aralık EN BAŞA yazılır: =ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik").',
            speechText: 'Buraya çok dikkat: ÇOKETOPLA da toplanacak ciro sütunu en başa yazılır! Sonrasında aralık ve kriter çiftleri sırayla eklenir.'
          }
        ],
        tasks: [
          {
            id: 't9_2_1',
            stepNumber: 1,
            instruction: 'C6 hücresine "=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik")" formülünü yazın.',
            targetCell: 'C6',
            hints: [
              'C6 hücresini seçin.',
              '=ÇOKETOPLA(C2:C5; A2:A5; "Marmara"; B2:B5; "Elektronik") yazın.',
              'Marmara ve Elektronik olan satırlar: 120000 + 70000 = 190000 olmalıdır.'
            ],
            validation: {
              targetCell: 'C6',
              expectedValue: 190000,
              expectedFormulaKeywords: ['ÇOKETOPLA', 'SUMIFS'],
              successMessage: 'Harika! ÇOKETOPLA fonksiyonunu kusursuz uyguladınız.'
            }
          }
        ],
        quiz: {
          id: 'q9_2',
          title: 'ÇOKETOPLA Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q9_2_1',
              question: 'ÇOKETOPLA fonksiyonunda toplanacak sayıların bulunduğu aralık nereye yazılır?',
              options: [
                { id: 'a', text: 'En sona' },
                { id: 'b', text: 'En başa (1. parametreye)' },
                { id: 'c', text: 'İkinci parametreye' },
                { id: 'd', text: 'Fark etmez' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKETOPLA da toplanacak aralık her zaman birinci parametredir.',
              measuredSkill: 'ÇOKETOPLA söz dizimi mimarisi'
            }
          ]
        }
      },
      {
        id: 'sec9_l3',
        phaseId: 9,
        unitId: 'u9_3',
        title: 'EĞERSAY (COUNTIF) ile Koşula Uyan Kayıtları Sayma',
        shortDesc: 'Belirli bir kritere uyan satır sayısını bulma (Örn: Kaç kişi İstanbul da çalışıyor?).',
        category: 'Koşullu Hesaplamalar',
        groupTitle: 'EĞERSAY Fonksiyonu',
        primaryGoal: 'Koşula uyan satırların adetini =EĞERSAY(aralık; ölçüt) ile bulmak.',
        prerequisites: ['sec9_l2'],
        commonMistakes: ['Ölçüt kısmına tırnaksız metin yazmak'],
        successCriteria: 'EĞERSAY ile koşullu adet sayımı yapmak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['EĞERSAY'],
        sheetId: 's9_3',
        sheetName: 'KoşulluSayım',
        headers: ['Personel', 'Şehir', 'Departman'],
        rows: [
          ['Ahmet Yılmaz', 'İstanbul', 'Satış'],
          ['Mehmet Kaya', 'Ankara', 'İK'],
          ['Ayşe Demir', 'İstanbul', 'Finans'],
          ['Can Özer', 'İzmir', 'Satış'],
          ['Zeynep Can', 'İstanbul', 'Satış'],
          ['İstanbul Personel Sayısı', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'EĞERSAY Kullanımı', description: 'Metin kriterine göre kaç adet eşleşme olduğunu sayma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Koşullu Adet Sayımı',
            explanation: '=EĞERSAY(B2:B6; "İstanbul") formülü B sütununu tarar ve kaç tane "İstanbul" olduğunu sayar.',
            speechText: 'Bir tabloda kaç tane İstanbul çalışanı veya kaç tane başarılı satış olduğunu bulmak için EĞERSAY fonksiyonunu kullanırız.'
          }
        ],
        tasks: [
          {
            id: 't9_3_1',
            stepNumber: 1,
            instruction: 'C7 hücresine "=EĞERSAY(B2:B6; "İstanbul")" formülünü yazın.',
            targetCell: 'C7',
            hints: [
              'C7 hücresini seçin.',
              '=EĞERSAY(B2:B6; "İstanbul") yazın.',
              '3 kişi İstanbul olduğu için sonuç 3 olmalıdır.'
            ],
            validation: {
              targetCell: 'C7',
              expectedValue: 3,
              expectedFormulaKeywords: ['EĞERSAY', 'COUNTIF'],
              successMessage: 'Tebrikler! EĞERSAY ile doğru sayımı gerçekleştirdiniz.'
            }
          }
        ],
        quiz: {
          id: 'q9_3',
          title: 'EĞERSAY Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q9_3_1',
              question: 'A1:A10 aralığında 50 den büyük kaç adet sayı olduğunu saymak için ölçüt parametresine ne yazılmalıdır?',
              options: [
                { id: 'a', text: '>50' },
                { id: 'b', text: '">50"' },
                { id: 'c', text: 'BÜYÜK(50)' },
                { id: 'd', text: '=50' }
              ],
              correctOptionId: 'b',
              explanation: 'EĞERSAY da mantıksal operatör içeren ölçütler çift tırnak içine alınmalıdır: ">50".',
              measuredSkill: 'EĞERSAY karşılaştırma ölçütü sentaksı'
            }
          ]
        }
      },
      {
        id: 'sec9_l4',
        phaseId: 9,
        unitId: 'u9_4',
        title: 'ÇOKEĞERSAY (COUNTIFS) ile Çok Kriterli Sayım',
        shortDesc: 'Hem Şehir="İstanbul" HEM DE Departman="Satış" olan kaç kişi olduğunu bulma.',
        category: 'Koşullu Hesaplamalar',
        groupTitle: 'ÇOKEĞERSAY Fonksiyonu',
        primaryGoal: 'Aynı anda birden fazla filtre şartına uyan satır adetini tespit etmek.',
        prerequisites: ['sec9_l3'],
        commonMistakes: ['Aralıkların satır sayılarının eşit olmaması (tüm aralıklar aynı uzunlukta olmalıdır)'],
        successCriteria: 'ÇOKEĞERSAY ile çoklu filtre sayımını doğru tamamlamak.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: ['ÇOKEĞERSAY'],
        sheetId: 's9_4',
        sheetName: 'ÇokluSayım',
        headers: ['Personel', 'Şehir', 'Departman'],
        rows: [
          ['Ahmet', 'İstanbul', 'Satış'],
          ['Mehmet', 'Ankara', 'Satış'],
          ['Ayşe', 'İstanbul', 'İK'],
          ['Fatma', 'İstanbul', 'Satış'],
          ['İstanbul + Satış Kişi Sayısı', '', 0],
        ],
        objectives: [
          { id: 'o1', title: 'ÇOKEĞERSAY Eşleşmesi', description: 'Birden çok aralık ve ölçüt çifti tanımlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Çok Boyutlu Sayım',
            explanation: '=ÇOKEĞERSAY(B2:B5; "İstanbul"; C2:C5; "Satış"). İki koşulun da aynı satırda sağlandığı kişileri sayar.',
            speechText: 'ÇOKEĞERSAY ile birden fazla koşulu denetleriz. Hem İstanbul da olan hem de Satış departmanında çalışanları anında bulur.'
          }
        ],
        tasks: [
          {
            id: 't9_4_1',
            stepNumber: 1,
            instruction: 'C6 hücresine "=ÇOKEĞERSAY(B2:B5; "İstanbul"; C2:C5; "Satış")" formülünü yazın.',
            targetCell: 'C6',
            hints: [
              'C6 hücresini seçin.',
              '=ÇOKEĞERSAY(B2:B5; "İstanbul"; C2:C5; "Satış") yazın.',
              'Ahmet ve Fatma sağladığı için sonuç 2 çıkacaktır.'
            ],
            validation: {
              targetCell: 'C6',
              expectedValue: 2,
              expectedFormulaKeywords: ['ÇOKEĞERSAY', 'COUNTIFS'],
              successMessage: 'Harika! ÇOKEĞERSAY ile çok kriterli sayım tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q9_4',
          title: 'ÇOKEĞERSAY Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q9_4_1',
              question: 'ÇOKEĞERSAY formülünde birinci aralık A1:A10 iken ikinci aralık B1:B20 olarak seçilirse ne olur?',
              options: [
                { id: 'a', text: 'Formül sorunsuz çalışır' },
                { id: 'b', text: '#DEĞER! hatası verir çünkü aralık boyutları eşit olmalıdır' },
                { id: 'c', text: 'Sıfır yazar' },
                { id: 'd', text: 'İlk 10 satırı baz alır' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKETOPLA ve ÇOKEĞERSAY da karşılaştırılan tüm aralıklar kesinlikle aynı satır ve sütun boyutuna sahip olmalıdır.',
              measuredSkill: 'Çok kriterli aralık boyutu eşitliği kuralı'
            }
          ]
        }
      },
      {
        id: 'sec9_l5',
        phaseId: 9,
        unitId: 'u9_5',
        title: 'Bölüm 9 Koşullu Hesaplamalar Final Sınavı',
        shortDesc: 'ETOPLA, ÇOKETOPLA, EĞERSAY ve ÇOKEĞERSAY fonksiyonlarının kapsamlı sınavı.',
        category: 'Koşullu Hesaplamalar',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 9 daki tüm koşullu toplama ve sayma kazanımlarını ölçmek.',
        prerequisites: ['sec9_l1', 'sec9_l2', 'sec9_l3', 'sec9_l4'],
        commonMistakes: ['ETOPLA ile ÇOKETOPLA nın parametre sıralarını karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Metin Fonksiyonları bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's9_5',
        sheetName: 'Final9',
        headers: ['Fonksiyon', 'İşlev', 'Durum'],
        rows: [
          ['ETOPLA', 'Tek kriter toplam', 'Ölçüldü'],
          ['ÇOKETOPLA', 'Çok kriter toplam', 'Ölçüldü'],
          ['EĞERSAY', 'Tek kriter sayım', 'Ölçüldü'],
          ['ÇOKEĞERSAY', 'Çok kriter sayım', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Koşullu Hesaplama Ustalığı', description: 'Veri analizinde koşullu özet tablolar çıkarabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 9 Finali',
            explanation: 'Koşullu hesaplama fonksiyonlarını bitirdiniz. Şimdi final sınavını yanıtlayarak Metin Fonksiyonları ve Veri Temizleme bölümüne geçin.',
            speechText: 'Koşullu hesaplama fonksiyonlarını harika tamamladınız! Sınavınızı çözüp metin fonksiyonlarına adım atalım.'
          }
        ],
        tasks: [
          {
            id: 't9_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 9 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q9_5',
          title: 'Bölüm 9 Kapsamlı Koşullu Hesaplamalar Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q9_5_1',
              question: 'Aşağıdaki formüllerden hangisi Ege bölgesindeki Gıda kategorisine ait satışları doğru toplar?',
              options: [
                { id: 'a', text: '=ETOPLA(A2:A10; "Ege"; B2:B10; "Gıda"; C2:C10)' },
                { id: 'b', text: '=ÇOKETOPLA(C2:C10; A2:A10; "Ege"; B2:B10; "Gıda")' },
                { id: 'c', text: '=ÇOKETOPLA(A2:A10; "Ege"; B2:B10; "Gıda"; C2:C10)' },
                { id: 'd', text: '=TOPLA(Ege + Gıda)' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇOKETOPLA da toplanacak C sütunu en başa yazılır, ardından ölçüt aralıkları ve kriterler sıralanır.',
              measuredSkill: 'ÇOKETOPLA doğru formül seçimi'
            }
          ]
        }
      }
    ]
  },

  // SECTION 10: Metin Fonksiyonları ve Veri Temizleme
  {
    id: 10,
    category: 'Metin Fonksiyonları',
    title: '10. Metin Fonksiyonları ve Veri Temizleme',
    subtitle: 'METİNBİRLEŞTİR, BİRLEŞTİR, SOLDAN, SAĞDAN, PARÇAAL, KIRP ve büyük/küçük harf',
    iconName: 'Type',
    description: 'Bozuk metin verilerini temizleme, ad soyad ayırma ve birleştirme, kod numaralarından parça alma, fazla boşlukları silme ve kurumsal metin standartlaştırma.',
    lessons: [
      {
        id: 'sec10_l1',
        phaseId: 10,
        unitId: 'u10_1',
        title: 'BİRLEŞTİR (& ve CONCATENATE) ile Metinleri Birleştirme',
        shortDesc: 'İki veya daha fazla hücredeki metni araya boşluk koyarak birleştirme.',
        category: 'Metin Fonksiyonları',
        groupTitle: 'Metin Birleştirme',
        primaryGoal: 'Ad ve Soyadı hücrelerini araya boşluk ekleyerek & operatörü ile tek hücrede toplamak.',
        prerequisites: ['sec9_l5'],
        commonMistakes: ['Araya boşluk koymayı unutup "AhmetYılmaz" şeklinde bitişik metin üretmek'],
        successCriteria: '& operatörü ile araya boşluklu tam isim oluşturmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's10_1',
        sheetName: 'İsimBirleştirme',
        headers: ['Ad', 'Soyad', 'Ad Soyad'],
        rows: [
          ['Ahmet', 'Yılmaz', ''],
          ['Zeynep', 'Kaya', ''],
        ],
        objectives: [
          { id: 'o1', title: '& Operatörü', description: '=A2 & " " & B2 yapısıyla metin bağlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: '& (Ve) Karakterinin Gücü',
            explanation: 'Metinleri birleştirmek için en pratik yöntem & işaretidir. =A2 & " " & B2 yazdığınızda tırnak içindeki boşluk iki kelimeyi birbirinden ayırır.',
            speechText: 'Ad ve soyadı ayrı sütunlardaysa onları birleştirmek için ve işaretini (&) kullanırız. Araya tırnak içinde bir boşluk koymayı asla unutmayın.'
          }
        ],
        tasks: [
          {
            id: 't10_1_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "=A2 & " " & B2" formülünü yazın.',
            targetCell: 'C2',
            hints: [
              'C2 hücresini seçin.',
              '=A2 & " " & B2 yazın.',
              'Sonuç "Ahmet Yılmaz" olmalıdır.'
            ],
            validation: {
              targetCell: 'C2',
              expectedValue: 'Ahmet Yılmaz',
              successMessage: 'Tebrikler! Metin birleştirme işlemini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q10_1',
          title: 'Metin Birleştirme Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q10_1_1',
              question: 'A1 hücresinde "Excel", B1 hücresinde "Akademi" varken "=A1 & B1" yazılırsa hücrede ne görünür?',
              options: [
                { id: 'a', text: 'Excel Akademi' },
                { id: 'b', text: 'ExcelAkademi' },
                { id: 'c', text: 'Excel' },
                { id: 'd', text: '#DEĞER!' }
              ],
              correctOptionId: 'b',
              explanation: 'Araya " " (boşluk) konulmadığı için iki kelime bitişik olarak "ExcelAkademi" şeklinde birleşir.',
              measuredSkill: 'Metin birleştirmede boşluk yönetimi'
            }
          ]
        }
      },
      {
        id: 'sec10_l2',
        phaseId: 10,
        unitId: 'u10_2',
        title: 'METİNBİRLEŞTİR (TEXTJOIN) ile Ayraçlı ve Akıllı Birleştirme',
        shortDesc: 'Modern TEXTJOIN fonksiyonu ile boşlukları otomatik atlayarak virgüllü veya tireli liste yapma.',
        category: 'Metin Fonksiyonları',
        groupTitle: 'METİNBİRLEŞTİR',
        primaryGoal: 'Onlarca hücreyi tek bir ayraç belirterek ve boş hücreleri yok sayarak birleştirmek.',
        prerequisites: ['sec10_l1'],
        commonMistakes: ['İkinci parametre olan boşlukları yoksayma (DOĞRU / TRUE) mantığını yanlış kullanmak'],
        successCriteria: 'METİNBİRLEŞTİR fonksiyonunu başarıyla uygulamak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['METİNBİRLEŞTİR'],
        sheetId: 's10_2',
        sheetName: 'AkıllıBirleştir',
        headers: ['Şehir 1', 'Şehir 2', 'Şehir 3', 'Şehirler Listesi'],
        rows: [
          ['İstanbul', 'Ankara', 'İzmir', ''],
          ['Bursa', '', 'Antalya', ''],
        ],
        objectives: [
          { id: 'o1', title: 'METİNBİRLEŞTİR Yapısı', description: '=METİNBİRLEŞTİR(ayraç; boşlukları_atla; aralık) fonksiyonunun gücü.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Modern Excel in En Sevilen Metin Aracı',
            explanation: '=METİNBİRLEŞTİR(", "; DOĞRU; A2:C2). Ayraç olarak virgül koyar ve arada boş hücre varsa fazladan virgül üretmeden temizce bağlar.',
            speechText: 'METİNBİRLEŞTİR fonksiyonu eski BİRLEŞTİR e göre devrim niteliğindedir. Tek bir formülle tüm satırı virgülle ayırarak listeye dönüştürür.'
          }
        ],
        tasks: [
          {
            id: 't10_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=METİNBİRLEŞTİR(", "; DOĞRU; A2:C2)" formülünü yazın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=METİNBİRLEŞTİR(", "; DOĞRU; A2:C2) yazın.',
              'Sonuç "İstanbul, Ankara, İzmir" olmalıdır.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 'İstanbul, Ankara, İzmir',
              expectedFormulaKeywords: ['METİNBİRLEŞTİR', 'TEXTJOIN'],
              successMessage: 'Harika! METİNBİRLEŞTİR ile akıllı şehir listesini oluşturdunuz.'
            }
          }
        ],
        quiz: {
          id: 'q10_2',
          title: 'METİNBİRLEŞTİR Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q10_2_1',
              question: 'METİNBİRLEŞTİR fonksiyonunun ikinci parametresine "DOĞRU" (TRUE) yazılmasının amacı nedir?',
              options: [
                { id: 'a', text: 'Büyük harfe dönüştürmek' },
                { id: 'b', text: 'Aralıktaki boş hücreleri atlayıp çift ayraç oluşmasını önlemek' },
                { id: 'c', text: 'Formülü kilitlemek' },
                { id: 'd', text: 'Alfabetik sıralamak' }
              ],
              correctOptionId: 'b',
              explanation: 'DOĞRU parametresi boş hücreleri yoksayar ve listenin temiz kalmasını sağlar.',
              measuredSkill: 'METİNBİRLEŞTİR boşluk atlama kuralı'
            }
          ]
        }
      },
      {
        id: 'sec10_l3',
        phaseId: 10,
        unitId: 'u10_3',
        title: 'SOLDAN (LEFT) ve SAĞDAN (RIGHT) ile Parça Alma',
        shortDesc: 'Metnin başından veya sonundan belirli sayıda karakteri çekme (Örn: Ülke kodu TR veya yıl 2026).',
        category: 'Metin Fonksiyonları',
        groupTitle: 'Parça Alma',
        primaryGoal: 'Standart kod yapılarından (Örn: TR-IST-01) baştaki veya sondaki karakterleri çekmek.',
        prerequisites: ['sec10_l2'],
        commonMistakes: ['Karakter sayısını yanlış sayıp eksik harf almak'],
        successCriteria: 'SOLDAN fonksiyonuyla ülke kodunu doğru çekmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: ['SOLDAN', 'SAĞDAN'],
        sheetId: 's10_3',
        sheetName: 'KodParçalama',
        headers: ['Sipariş Kodu', 'Ülke Kodu', 'Sıra No'],
        rows: [
          ['TR-98452', '', ''],
          ['DE-12450', '', ''],
        ],
        objectives: [
          { id: 'o1', title: 'SOLDAN ve SAĞDAN', description: '=SOLDAN(metin; karakter_sayısı) ile baştan n karakter alma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Baştan ve Sondan Ayıklama',
            explanation: '=SOLDAN(A2; 2) ifadesi A2 deki "TR-98452" metninin en solundaki ilk 2 karakter olan "TR" yi alır.',
            speechText: 'Kod numaralarından ülke veya departman kodunu ayırmak için SOLDAN ve SAĞDAN fonksiyonlarını kullanırız.'
          }
        ],
        tasks: [
          {
            id: 't10_3_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=SOLDAN(A2; 2)" formülünü yazarak ülke kodunu çekin.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=SOLDAN(A2; 2) yazın.',
              'Sonuç "TR" olmalıdır.'
            ],
            validation: {
              targetCell: 'B2',
              expectedValue: 'TR',
              expectedFormulaKeywords: ['SOLDAN', 'LEFT'],
              successMessage: 'Tebrikler! SOLDAN fonksiyonuyla ülke kodunu aldınız.'
            }
          }
        ],
        quiz: {
          id: 'q10_3',
          title: 'SOLDAN ve SAĞDAN Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q10_3_1',
              question: 'A1 hücresinde "2026-RAPOR" yazılıyken "=SAĞDAN(A1; 5)" sonucu ne olur?',
              options: [
                { id: 'a', text: '2026' },
                { id: 'b', text: 'RAPOR' },
                { id: 'c', text: '-RAPOR' },
                { id: 'd', text: '2026-' }
              ],
              correctOptionId: 'b',
              explanation: 'Sağdan ilk 5 karakter "R-A-P-O-R" yani "RAPOR" kelimesidir.',
              measuredSkill: 'SAĞDAN karakter çekme mantığı'
            }
          ]
        }
      },
      {
        id: 'sec10_l4',
        phaseId: 10,
        unitId: 'u10_4',
        title: 'PARÇAAL (MID) ve UZUNLUK (LEN) ile Metin Ortasından Veri Çekme',
        shortDesc: 'Metnin ortasındaki belirli bir konumdan başlayarak istenen sayıda karakteri alma.',
        category: 'Metin Fonksiyonları',
        groupTitle: 'PARÇAAL Fonksiyonu',
        primaryGoal: 'TC kimlik, IBAN veya ürün seri numaralarındaki orta bloğu ayıklayabilmek.',
        prerequisites: ['sec10_l3'],
        commonMistakes: ['Başlangıç karakter indeksini 0 dan başlatmak (Excel de indeksler 1 den başlar!)'],
        successCriteria: 'PARÇAAL ile seri numarasının ortasındaki yılı çekmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['PARÇAAL', 'UZUNLUK'],
        sheetId: 's10_4',
        sheetName: 'PARÇAAL',
        headers: ['Seri No', 'Yıl Kodu'],
        rows: [
          ['PRD-2026-IST', ''],
          ['PRD-2025-ANK', ''],
        ],
        objectives: [
          { id: 'o1', title: 'PARÇAAL Parametreleri', description: '=PARÇAAL(metin; başlangıç_numarası; karakter_sayısı) mantığı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Ortadan Veri Çekme',
            explanation: '"PRD-2026-IST" metninde 2026 yılı 5. karakterden başlar ve 4 karakter uzunluğundadır. Bu yüzden =PARÇAAL(A2; 5; 4) yazarız.',
            speechText: 'Metnin ne başında ne de sonunda olan orta kısımları çekmek için PARÇAAL fonksiyonunu kullanırız. Kaçıncı harften başlayacağını ve kaç harf alacağını söyleriz.'
          }
        ],
        tasks: [
          {
            id: 't10_4_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=PARÇAAL(A2; 5; 4)" formülünü yazın.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=PARÇAAL(A2; 5; 4) yazın.',
              'Sonuç "2026" olmalıdır.'
            ],
            validation: {
              targetCell: 'B2',
              expectedValue: '2026',
              expectedFormulaKeywords: ['PARÇAAL', 'MID'],
              successMessage: 'Harika! PARÇAAL fonksiyonuyla yıl kodunu çektiniz.'
            }
          }
        ],
        quiz: {
          id: 'q10_4',
          title: 'PARÇAAL Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q10_4_1',
              question: 'Excel de bir hücredeki toplam karakter sayısını (boşluklar dahil) sayan fonksiyon hangisidir?',
              options: [
                { id: 'a', text: 'SAY' },
                { id: 'b', text: 'UZUNLUK (LEN)' },
                { id: 'c', text: 'BOYUT' },
                { id: 'd', text: 'KARAKTER' }
              ],
              correctOptionId: 'b',
              explanation: 'UZUNLUK fonksiyonu bir hücre içindeki tüm harf, rakam ve boşluk karakterlerinin toplam sayısını verir.',
              measuredSkill: 'Karakter sayısı sayma fonksiyonu'
            }
          ]
        }
      },
      {
        id: 'sec10_l5',
        phaseId: 10,
        unitId: 'u10_5',
        title: 'KIRP (TRIM) ile Fazla Boşlukları Temizleme ve Büyük/Küçük Harf',
        shortDesc: 'ERP den gelen verilerdeki gereksiz boşlukları silme ve YAZIM.DÜZENİ ile baş harfleri büyütme.',
        category: 'Metin Fonksiyonları',
        groupTitle: 'Veri Temizleme',
        primaryGoal: 'Düşeyara nın bozulmasına yol açan baştaki ve sondaki görünmez boşlukları temizlemek.',
        prerequisites: ['sec10_l4'],
        commonMistakes: ['Kelimeler arasındaki tek boşluğun da silineceğini sanmak (KIRP kelime aralarındaki tek boşluğu korur, fazlalıkları siler)'],
        successCriteria: 'KIRP fonksiyonuyla temizlenmiş veri üretmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: ['KIRP', 'YAZIM.DÜZENİ'],
        sheetId: 's10_5',
        sheetName: 'VeriTemizleme',
        headers: ['Bozuk Veri', 'Temizlenmiş Veri'],
        rows: [
          ['   İstanbul   ', ''],
          ['  ahmet  yılmaz  ', ''],
        ],
        objectives: [
          { id: 'o1', title: 'KIRP Fonksiyonu', description: 'Metnin başındaki ve sonundaki tüm gereksiz boşlukları temizleme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Görünmez Hataların Katili: KIRP',
            explanation: 'Dış sistemlerden kopyalanan metinlerin başında veya sonunda boşluk kalır. Bu durum DÜŞEYARA nın eşleşememesine yol açar. =KIRP(A2) ile tüm gereksiz boşlukları temizleriz.',
            speechText: 'Excel de formülleriniz çalışmıyorsa suçlu çoğu zaman görünmeyen boşluklardır. KIRP fonksiyonu metnin başındaki ve sonundaki tüm gizli boşlukları anında yok eder.'
          }
        ],
        tasks: [
          {
            id: 't10_5_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=KIRP(A2)" formülünü yazın.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=KIRP(A2) yazın.',
              'Sonuç tertemiz "İstanbul" olmalıdır.'
            ],
            validation: {
              targetCell: 'B2',
              expectedValue: 'İstanbul',
              expectedFormulaKeywords: ['KIRP', 'TRIM'],
              successMessage: 'Tebrikler! KIRP fonksiyonuyla boşlukları başarıyla temizlediniz.'
            }
          }
        ],
        quiz: {
          id: 'q10_5',
          title: 'KIRP ve Harf Düzeni Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q10_5_1',
              question: 'Bir metindeki her kelimenin sadece İLK harfini büyük, diğerlerini küçük yapmak için hangi fonksiyon kullanılır?',
              options: [
                { id: 'a', text: 'BÜYÜKHARF' },
                { id: 'b', text: 'YAZIM.DÜZENİ (PROPER)' },
                { id: 'c', text: 'İLKHARF' },
                { id: 'd', text: 'KÜÇÜKHARF' }
              ],
              correctOptionId: 'b',
              explanation: 'YAZIM.DÜZENİ (PROPER) fonksiyonu isim ve soyadların baş harflerini büyük, kalanını küçük yapar.',
              measuredSkill: 'YAZIM.DÜZENİ fonksiyonu'
            }
          ]
        }
      },
      {
        id: 'sec10_l6',
        phaseId: 10,
        unitId: 'u10_6',
        title: 'Bölüm 10 Metin Fonksiyonları Final Sınavı',
        shortDesc: 'BİRLEŞTİR, METİNBİRLEŞTİR, SOLDAN, SAĞDAN, PARÇAAL ve KIRP final sınavı.',
        category: 'Metin Fonksiyonları',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 10 metin temizleme ve düzenleme kazanımlarını ölçmek.',
        prerequisites: ['sec10_l1', 'sec10_l2', 'sec10_l3', 'sec10_l4', 'sec10_l5'],
        commonMistakes: ['Metin fonksiyonlarının parametrelerini karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Tarih ve Saat bölümüne geçmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's10_6',
        sheetName: 'Final10',
        headers: ['Fonksiyon', 'Kullanım Alanı', 'Durum'],
        rows: [
          ['METİNBİRLEŞTİR', 'Ayraçlı birleştirme', 'Ölçüldü'],
          ['SOLDAN / SAĞDAN', 'Kod ayıklama', 'Ölçüldü'],
          ['PARÇAAL', 'Orta veri çekme', 'Ölçüldü'],
          ['KIRP', 'Boşluk temizleme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Metin Ustalığı', description: 'Metin verilerini kurumsal standartlara kavuşturma becerisi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 10 Finali',
            explanation: 'Metin fonksiyonlarını başarıyla tamamladınız. Şimdi final sınavını yanıtlayarak Tarih, Saat ve İş Günü Hesaplamaları bölümüne geçin.',
            speechText: 'Tebrikler! Metin temizleme araçlarını ustalıkla tamamladınız. Sınavınızı çözüp tarih ve saat hesaplamalarına geçelim.'
          }
        ],
        tasks: [
          {
            id: 't10_6_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 10 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q10_6',
          title: 'Bölüm 10 Kapsamlı Metin Fonksiyonları Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q10_6_1',
              question: 'A1 hücresindeki "  Mehmet Kaya  " metninin başındaki ve sonundaki boşlukları temizleyip ad soyadı olduğu gibi korumak için hangi formül yazılır?',
              options: [
                { id: 'a', text: '=SİL(A1)' },
                { id: 'b', text: '=KIRP(A1)' },
                { id: 'c', text: '=TEMİZLE(A1)' },
                { id: 'd', text: '=PARÇAAL(A1; 1; 10)' }
              ],
              correctOptionId: 'b',
              explanation: 'KIRP fonksiyonu metnin ön ve sonundaki tüm gereksiz boşlukları siler.',
              measuredSkill: 'Metin temizleme araç seçimi'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_6_TO_10', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section6to10.ts'), content, 'utf8');
console.log('Successfully generated section6to10.ts (30 rich lessons)');
