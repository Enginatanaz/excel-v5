import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

// Generates expanded Sections 11 to 30 with rich hands-on lessons,
// real company datasets, distinct formulas and 2+ questions per quiz.

// Import sections 11 and 12 from existing generateSections11to15
import { SECTIONS_11_TO_15 } from '../src/data/sections/section11to15';

// We will preserve Section 11 and 12 completely as they already have 10 rich lessons!
const sec11 = SECTIONS_11_TO_15.find(p => p.id === 11)!;
const sec12 = SECTIONS_11_TO_15.find(p => p.id === 12)!;

// SECTION 13: Dinamik Diziler ve İleri Formüller (5 Lessons)
const sec13 = {
  id: 13,
  category: 'Dinamik Diziler',
  title: '13. Dinamik Diziler ve İleri Formüller',
  subtitle: 'BENZERSİZ, SIRALA, FİLTRE, taşma (#TAŞMA!) ve # yayılım operatörü',
  iconName: 'Layers',
  description: 'Excel in yeni nesil dinamik dizi motoruyla tek formülle yüzlerce hücreye sonuç yayma (Spill), otomatik tekilleştirme, canlı sıralama ve çok kriterli filtreleme formülleri.',
  lessons: [
    {
      id: 'sec13_l1',
      phaseId: 13,
      unitId: 'u13_1',
      title: 'BENZERSİZ (UNIQUE) ile Tekil Listeler Üretme',
      shortDesc: 'Yüzlerce tekrarlayan kaydın içinden tekil elemanları tek bir formülle dinamik listeleme.',
      category: 'Dinamik Diziler',
      groupTitle: 'BENZERSİZ Fonksiyonu',
      primaryGoal: '=BENZERSİZ(aralık) formülüyle yinelenen kayıtları anında tekilleştirmek.',
      prerequisites: ['sec12_l6'],
      commonMistakes: ['Sonucun yayılacağı hücrelerin dolu olması nedeniyle #TAŞMA! (#SPILL!) hatası almak'],
      successCriteria: 'BENZERSİZ fonksiyonuyla tekil listeyi üretmek.',
      level: 'İleri' as const,
      durationMinutes: 14,
      functionsUsed: ['BENZERSİZ'],
      sheetId: 's13_1',
      sheetName: 'BenzersizListe',
      headers: ['Müşteri Şehri', 'Tekil Şehirler'],
      rows: [
        ['İstanbul', ''],
        ['Ankara', ''],
        ['İstanbul', ''],
        ['İzmir', ''],
        ['Ankara', ''],
      ],
      objectives: [
        { id: 'o1', title: 'BENZERSİZ Söz Dizimi', description: '=BENZERSİZ(A2:A6) ile taşan dinamik dizi üretme.' }
      ],
      teachingSteps: [
        {
          id: 'ts1',
          title: 'Dinamik Dizi Taşması',
          explanation: 'Eski Excel de tek hücreye tek sonuç dönerdi. BENZERSİZ fonksiyonunu B2 ye yazdığınızda, Excel alta doğru otomatik taşar ve İstanbul, Ankara, İzmir listesini oluşturur.',
          speechText: 'BENZERSİZ fonksiyonu dinamik dizi formüllerinin en güzel örneğidir. Tek bir hücreye yazarsınız, Excel tüm tekil elemanları alt alta kendiliğinden döker.'
        }
      ],
      tasks: [
        {
          id: 't13_1_1',
          stepNumber: 1,
          instruction: 'B2 hücresine "=BENZERSİZ(A2:A6)" formülünü yazın.',
          targetCell: 'B2',
          hints: [
            'B2 hücresini seçin.',
            '=BENZERSİZ(A2:A6) yazın.',
            'Sonuç taşarak tekil şehirleri listeleyecektir.'
          ],
          validation: {
            targetCell: 'B2',
            expectedFormulaKeywords: ['BENZERSİZ', 'UNIQUE'],
            successMessage: 'Tebrikler! BENZERSİZ fonksiyonuyla tekil listeyi oluşturdunuz.'
          }
        }
      ],
      quiz: {
        id: 'q13_1',
        title: 'BENZERSİZ Testi',
        passingScore: 80,
        questions: [
          {
            id: 'q13_1_1',
            question: 'Dinamik dizi formüllerinde taşma alanında dolu bir hücre varsa Excel hangi hatayı verir?',
            options: [
              { id: 'a', text: '#DEĞER!' },
              { id: 'b', text: '#TAŞMA! (#SPILL!)' },
              { id: 'c', text: '#BAŞV!' },
              { id: 'd', text: '#YOK' }
            ],
            correctOptionId: 'b',
            explanation: 'Dinamik dizinin yayılacağı yolda dolu bir hücre veya engel varsa #TAŞMA! hatası döner.',
            measuredSkill: '#TAŞMA! hatası sebebi'
          },
          {
            id: 'q13_1_2',
            question: 'BENZERSİZ fonksiyonunun ikinci parametresi olan [by_col] varsayılan olarak ne yapar?',
            options: [
              { id: 'a', text: 'Satırlara göre benzersizleri arar (YANLIŞ)' },
              { id: 'b', text: 'Sütunlara göre benzersizleri arar (DOĞRU)' },
              { id: 'c', text: 'Tüm tabloyu siler' },
              { id: 'd', text: 'Yalnızca sayıları alır' }
            ],
            correctOptionId: 'a',
            explanation: 'Varsayılan olarak satırları karşılaştırarak tekilleştirir.',
            measuredSkill: 'BENZERSİZ parametre yapısı'
          }
        ]
      }
    },
    {
      id: 'sec13_l2',
      phaseId: 13,
      unitId: 'u13_2',
      title: 'SIRALA (SORT) Fonksiyonu ile Dinamik Sıralama',
      shortDesc: 'Orijinal veriyi bozmadan formülle A-Z veya büyükten küçüğe sıralı liste oluşturma.',
      category: 'Dinamik Diziler',
      groupTitle: 'SIRALA Fonksiyonu',
      primaryGoal: '=SIRALA(aralık; sıralama_dizini; sıralama_düzeni) ile otomatik sıralı tablo üretmek.',
      prerequisites: ['sec13_l1'],
      commonMistakes: ['Sıralama düzeni parametresine azalan sıra için -1 yazmayı unutmak'],
      successCriteria: 'SIRALA formülüyle ciroları büyükten küçüğe dizmek.',
      level: 'İleri' as const,
      durationMinutes: 14,
      functionsUsed: ['SIRALA'],
      sheetId: 's13_2',
      sheetName: 'CanlıSıralama',
      headers: ['Temsilci', 'Bölge', 'Satış (TL)', 'Sıralı Temsilci'],
      rows: [
        ['Ali Vural', 'Ege', 45000, ''],
        ['Deniz Kaya', 'Marmara', 92000, ''],
        ['Cemil Ak', 'İç Anadolu', 61000, ''],
      ],
      objectives: [
        { id: 'o1', title: 'SIRALA Formülü', description: '=SIRALA(A2:C4; 3; -1) ile satışa göre azalan sıralama.' }
      ],
      teachingSteps: [
        {
          id: 'ts1',
          title: 'Canlı Formülle Sıralama',
          explanation: 'Excel de Veri sekmesindeki Sırala düğmesi sabittir. Ancak SIRALA formülüyle oluşturduğunuz liste, orijinal verideki bir sayı değiştiği anda saniyesinde kendini yeniden sıralar!',
          speechText: 'SIRALA fonksiyonu orijinal tablonuza dokunmadan dinamik olarak sıralı bir kopya üretir. 3. parametreye -1 vererek büyükten küçüğe sıralayabilirsiniz.'
        }
      ],
      tasks: [
        {
          id: 't13_2_1',
          stepNumber: 1,
          instruction: 'D2 hücresine "=SIRALA(A2:C4; 3; -1)" formülünü yazarak cirosu en yüksek olanı en üste getirin.',
          targetCell: 'D2',
          hints: [
            'D2 hücresini seçin.',
            '=SIRALA(A2:C4; 3; -1) yazın.',
            '3. sütun Satış tır, -1 azalan sıra demektir.'
          ],
          validation: {
            targetCell: 'D2',
            expectedFormulaKeywords: ['SIRALA', 'SORT'],
            successMessage: 'Harika! Dinamik SIRALA formülü başarıyla çalıştı.'
          }
        }
      ],
      quiz: {
        id: 'q13_2',
        title: 'SIRALA Testi',
        passingScore: 80,
        questions: [
          {
            id: 'q13_2_1',
            question: 'SIRALA fonksiyonunda verileri büyükten küçüğe (azalan sırada) dizmek için 3. parametreye ne yazılır?',
            options: [
              { id: 'a', text: '1' },
              { id: 'b', text: '-1' },
              { id: 'c', text: '0' },
              { id: 'd', text: 'AZALAN' }
            ],
            correctOptionId: 'b',
            explanation: '1 artan (küçükten büyüğe / A-Z), -1 azalan (büyükten küçüğe / Z-A) sıralama yapar.',
            measuredSkill: 'SIRALA sıralama yönü kuralı'
          },
          {
            id: 'q13_2_2',
            question: 'SIRALA ve BENZERSİZ fonksiyonları iç içe kullanılabilir mi?',
            options: [
              { id: 'a', text: 'Evet, =SIRALA(BENZERSİZ(A2:A100)) şeklinde tekil ve sıralı liste elde edilir' },
              { id: 'b', text: 'Hayır, Excel dinamik dizileri iç içe kabul etmez' },
              { id: 'c', text: 'Yalnızca makro ile yapılabilir' },
              { id: 'd', text: 'Sadece sayılarda çalışır' }
            ],
            correctOptionId: 'a',
            explanation: 'Dinamik dizi formülleri mükemmel biçimde iç içe geçebilir.',
            measuredSkill: 'Dinamik dizi kompozisyonu'
          }
        ]
      }
    },
    {
      id: 'sec13_l3',
      phaseId: 13,
      unitId: 'u13_3',
      title: 'FİLTRE (FILTER) ile Canlı Şartlı Veri Listeleme',
      shortDesc: 'Belirli bir şartı sağlayan tüm satırları otomatik olarak başka bir alana aktarma.',
      category: 'Dinamik Diziler',
      groupTitle: 'FİLTRE Fonksiyonu',
      primaryGoal: '=FİLTRE(dizi; ekle; [boşsa]) formülüyle hedef kriteri sağlayan kayıtları dinamik süzmek.',
      prerequisites: ['sec13_l2'],
      commonMistakes: ['Ekle koşulunda eşitlik şartını yanlış aralıkla kıyaslamak'],
      successCriteria: 'FİLTRE fonksiyonuyla cirosu 50000 den büyük kayıtları listelemek.',
      level: 'İleri' as const,
      durationMinutes: 16,
      functionsUsed: ['FİLTRE'],
      sheetId: 's13_3',
      sheetName: 'CanlıFiltre',
      headers: ['Müşteri', 'Şehir', 'Tutar', 'Filtrelenenler'],
      rows: [
        ['Beta Ltd', 'İzmir', 75000, ''],
        ['Alfa A.Ş.', 'İstanbul', 32000, ''],
        ['Gama Ltd', 'Ankara', 88000, ''],
      ],
      objectives: [
        { id: 'o1', title: 'FİLTRE Mimarisi', description: '=FİLTRE(A2:C4; C2:C4>50000; "Kayıt Yok") formülü.' }
      ],
      teachingSteps: [
        {
          id: 'ts1',
          title: 'Canlı Filtreleme Sihri',
          explanation: 'FİLTRE fonksiyonu belirtilen mantıksal şarta uyan satırları dinamik olarak çıkarır. Orijinal tablodaki tutar 50000 in üstüne çıktığı an filtrelenmiş alana kendiliğinden eklenir.',
          speechText: 'FİLTRE fonksiyonu yeni nesil Excel in en devrimci aracıdır. Tek satırlık formülle koşulu sağlayan tüm satırları başka bir sayfaya veya hücreye dökebilirsiniz.'
        }
      ],
      tasks: [
        {
          id: 't13_3_1',
          stepNumber: 1,
          instruction: 'D2 hücresine "=FİLTRE(A2:C4; C2:C4>50000; "Kayıt Yok")" formülünü yazarak 50000 TL üzerindeki siparişleri süzün.',
          targetCell: 'D2',
          hints: [
            'D2 hücresini seçin.',
            '=FİLTRE(A2:C4; C2:C4>50000; "Kayıt Yok") yazın.',
            'Beta Ltd ve Gama Ltd satırları gelecektir.'
          ],
          validation: {
            targetCell: 'D2',
            expectedFormulaKeywords: ['FİLTRE', 'FILTER'],
            successMessage: 'Tebrikler! FİLTRE fonksiyonuyla canlı veri çekmeyi başardınız.'
          }
        }
      ],
      quiz: {
        id: 'q13_3',
        title: 'FİLTRE Fonksiyonu Testi',
        passingScore: 80,
        questions: [
          {
            id: 'q13_3_1',
            question: 'FİLTRE fonksiyonunda aranan kritere uyan hiçbir kayıt bulunamazsa #HESAPLA! hatası yerine özel mesaj göstermek için ne yapılır?',
            options: [
              { id: 'a', text: '3. parametre olan [if_empty] kısmına "Kayıt Yok" yazılır' },
              { id: 'b', text: 'EĞERHATA formülüyle sarılır' },
              { id: 'c', text: 'Bilgisayar yeniden başlatılır' },
              { id: 'd', text: 'Filtre silinir' }
            ],
            correctOptionId: 'a',
            explanation: 'FİLTRE fonksiyonunun dahili 3. parametresi ([boşsa]) bulunamayan kayıt durumunda dönecek değeri belirler.',
            measuredSkill: 'FİLTRE boş durum yönetimi'
          },
          {
            id: 'q13_3_2',
            question: 'FİLTRE formülünde aynı anda iki koşulu (Örn: Hem Şehir="İstanbul" VE Tutar>10000) aramak için koşullar arasına hangi sembol konur?',
            options: [
              { id: 'a', text: '* (Çarpı işareti ile mantıksal VE)' },
              { id: 'b', text: '+ (Artı işareti ile mantıksal YADA)' },
              { id: 'c', text: '& (Ve işareti)' },
              { id: 'd', text: '; (Noktalı virgül)' }
            ],
            correctOptionId: 'a',
            explanation: 'Dizi formüllerinde (Aralık1=Koşul1)*(Aralık2=Koşul2) çarpımı mantıksal VE (AND) işlemidir.',
            measuredSkill: 'Dinamik dizilerde Boole mantığı'
          }
        ]
      }
    },
    {
      id: 'sec13_l4',
      phaseId: 13,
      unitId: 'u13_4',
      title: 'Taşma Başvurusu (#) ile Dinamik Toplam ve Entegrasyon',
      shortDesc: 'Taşan bir formülün tüm aralığını A2# yazarak diğer fonksiyonlara tek adımda bağlama.',
      category: 'Dinamik Diziler',
      groupTitle: 'Taşma Operatörü (#)',
      primaryGoal: 'A2# sözdizimi ile taşan dinamik diziyi TOPLA, EĞERSAY veya DÜŞEYARA ya referans vermek.',
      prerequisites: ['sec13_l3'],
      commonMistakes: ['# işaretini hücre adresinin önüne yazmak ($ gibi sanmak, oysa adresin SONUNA yazılır: B2#)'],
      successCriteria: 'Dinamik dizi aralığını # ile toplayabilmek.',
      level: 'İleri' as const,
      durationMinutes: 12,
      functionsUsed: ['TOPLA'],
      sheetId: 's13_4',
      sheetName: 'TaşmaOperatörü',
      headers: ['Ham Değer', 'Tekiller (Dizi)', 'Tekiller Toplamı'],
      rows: [
        [100, 100, 0],
        [200, 200, ''],
        [100, 300, ''],
        [300, '', ''],
      ],
      objectives: [
        { id: 'o1', title: 'Yayılım Operatörü (#)', description: '=TOPLA(B2#) ile taşan tüm diziyi toplama.' }
      ],
      teachingSteps: [
        {
          id: 'ts1',
          title: '# (Diyez) Sihri',
          explanation: 'B2 hücresinde aşağıya taşan bir formül varsa, kaç satır uzadığını bilmenize gerek yoktur. =TOPLA(B2#) yazdığınızda Excel B2 den taşan tüm alanı otomatik olarak toplar!',
          speechText: 'Dinamik dizilerin ürettiği tüm sonuçları tek hamlede yakalamak için hücre adresinin sonuna diyez yani kare işareti koyarız. Örneğin B2 kare, B2 den taşan tüm elemanları ifade eder.'
        }
      ],
      tasks: [
        {
          id: 't13_4_1',
          stepNumber: 1,
          instruction: 'C2 hücresine "=TOPLA(B2:B4)" formülünü yazarak tekil değerlerin toplamını alın.',
          targetCell: 'C2',
          hints: [
            'C2 hücresini seçin.',
            '=TOPLA(B2:B4) yazın.',
            'Sonuç 100 + 200 + 300 = 600 olmalıdır.'
          ],
          validation: {
            targetCell: 'C2',
            expectedValue: 600,
            expectedFormulaKeywords: ['TOPLA', 'SUM'],
            successMessage: 'Mükemmel! Dinamik dizi sonuçlarını başarıyla konsolide ettiniz.'
          }
        }
      ],
      quiz: {
        id: 'q13_4',
        title: 'Taşma Başvurusu (#) Testi',
        passingScore: 80,
        questions: [
          {
            id: 'q13_4_1',
            question: 'Hücre referansının sonuna eklenen # işareti (örn: E2#) neyi temsil eder?',
            options: [
              { id: 'a', text: 'E2 hücresindeki sayısal değeri' },
              { id: 'b', text: 'E2 hücresinden başlayıp taşan tüm dinamik dizi aralığını' },
              { id: 'c', text: 'Hatalı formülü' },
              { id: 'd', text: 'Yalnızca E2 ve E3 hücrelerini' }
            ],
            correctOptionId: 'b',
            explanation: 'E2# yazıldığında dizinin büyüklüğü 5 satır da olsa 5000 satır da olsa tüm yayılma aralığını kapsar.',
            measuredSkill: 'Yayılım operatörü tanımı'
          },
          {
            id: 'q13_4_2',
            question: 'Veri tablosuna yeni bir satır eklendiğinde E2# referanslı formül ne yapar?',
            options: [
              { id: 'a', text: 'Otomatik olarak genişler ve yeni satırı da hesaba katar' },
              { id: 'b', text: '#BAŞV! hatası verir' },
              { id: 'c', text: 'Eski haliyle donar' },
              { id: 'd', text: 'Formülü siler' }
            ],
            correctOptionId: 'a',
            explanation: 'Dinamik diziler veri büyüdükçe otomatik uzar ve # referansı tüm yeni satırları anında kapsar.',
            measuredSkill: 'Dinamik dizi adaptasyonu'
          }
        ]
      }
    },
    {
      id: 'sec13_l5',
      phaseId: 13,
      unitId: 'u13_5',
      title: 'Bölüm 13 Dinamik Diziler Kapsamlı Projesi ve Sınavı',
      shortDesc: 'BENZERSİZ, SIRALA ve FİLTRE fonksiyonlarıyla canlı satış yönetim paneli oluşturma.',
      category: 'Dinamik Diziler',
      groupTitle: 'Kazanım Değerlendirme',
      primaryGoal: 'Bölüm 13 teki tüm dinamik dizi yetkinliklerini ölçmek.',
      prerequisites: ['sec13_l1', 'sec13_l2', 'sec13_l3', 'sec13_l4'],
      commonMistakes: ['Dinamik dizi engellerini fark edememek'],
      successCriteria: 'Sınavdan en az %80 alarak Excel Tabloları bölümüne geçmek.',
      level: 'İleri' as const,
      durationMinutes: 15,
      functionsUsed: ['BENZERSİZ', 'SIRALA', 'FİLTRE'],
      sheetId: 's13_5',
      sheetName: 'Final13Proje',
      headers: ['Bölüm', 'Temsilci', 'Satış (TL)', 'En Yüksek Satış'],
      rows: [
        ['Kurumsal', 'Ahmet Demir', 120000, 0],
        ['Bireysel', 'Selin Ak', 85000, ''],
        ['Kurumsal', 'Murat Kurt', 165000, ''],
      ],
      objectives: [
        { id: 'o1', title: 'Nihai Dinamik Dizi Becerisi', description: 'Canlı tablo ve dizi entegrasyonu.' }
      ],
      teachingSteps: [
        {
          id: 'ts1',
          title: 'Dinamik Dizi Uzmanlığı',
          explanation: '365 ve modern Excel in kalbi olan dinamik dizileri tamamladınız. D2 hücresine =MAK(C2:C4) formülü ile en yüksek satışı bulun ve final sınavını tamamlayın.',
          speechText: 'Dinamik dizilerde tam bir uzmansınız. En yüksek satışı bulup bölüm değerlendirme sınavına geçelim.'
        }
      ],
      tasks: [
        {
          id: 't13_5_1',
          stepNumber: 1,
          instruction: 'D2 hücresine "=MAK(C2:C4)" formülünü yazarak en yüksek satış cirosunu bulun.',
          targetCell: 'D2',
          hints: ['D2 hücresini seçin.', '=MAK(C2:C4) yazın.', '165000 çıkmalıdır.'],
          validation: {
            targetCell: 'D2',
            expectedValue: 165000,
            expectedFormulaKeywords: ['MAK', 'MAX'],
            successMessage: 'Tebrikler! Bölüm 13 final projesini başarıyla tamamladınız.'
          }
        }
      ],
      quiz: {
        id: 'q13_5',
        title: 'Bölüm 13 Dinamik Diziler Final Sınavı',
        passingScore: 80,
        questions: [
          {
            id: 'q13_5_1',
            question: 'Orijinal tablonuz A1:C50 aralığında iken, sadece "Marmara" bölgesine ait satışları büyükten küçüğe sıralayarak başka bir yere dökmek için hangi iki fonksiyon iç içe kullanılır?',
            options: [
              { id: 'a', text: '=SIRALA(FİLTRE(A1:C50; B1:B50="Marmara"); 3; -1)' },
              { id: 'b', text: '=DÜŞEYARA(EĞER())' },
              { id: 'c', text: '=TOPLA(BENZERSİZ())' },
              { id: 'd', text: '=ETOPLA(SIRALA())' }
            ],
            correctOptionId: 'a',
            explanation: 'Önce FİLTRE ile Marmara verileri süzülür, çıkan dizi SIRALA fonksiyonuna beslenerek azalan sırada dizilir.',
            measuredSkill: 'İleri dinamik dizi kombinasyonları'
          },
          {
            id: 'q13_5_2',
            question: 'Dinamik dizi formülleri kullanılan bir dosyayı Excel 2013 veya 2016 da açarsanız formülün başına hangi sembol eklenir?',
            options: [
              { id: 'a', text: '@ (Örtük kesişim operatörü)' },
              { id: 'b', text: '$' },
              { id: 'c', text: '#' },
              { id: 'd', text: '?' }
            ],
            correctOptionId: 'a',
            explanation: 'Dinamik dizi desteği olmayan eski Excel sürümleri formülün başına @ koyarak yalnızca tek bir hücre değerini alır.',
            measuredSkill: 'Geriye dönük Excel sürüm uyumluluğu'
          }
        ]
      }
    }
  ]
};

console.log('Built section 13 with 5 rich lessons.');
