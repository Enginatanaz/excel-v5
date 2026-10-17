import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_6_TO_10: CurriculumPhase[] = [
  {
    id: 6,
    category: "Formüller ve Referanslar",
    title: "6. Formül Mantığı ve Hücre Referansları",
    subtitle: "Formül Anatomisi, Operatörler, Göreli ve Mutlak ($) Hücre Başvuruları",
    iconName: "FunctionSquare",
    description: "Excel'in hesaplama motorunun temeli, eşittir (=) mantığı, işlem önceliği (PEMDAS), göreli başvurular, F4 ile $A$1 sabitleme, karma başvurular ($A1 / A$1) ve hata teşhisi.",
    lessons: [
      {
        id: "sec6_l1",
        phaseId: 6,
        unitId: "u6_1",
        title: "Formül Anatomisi ve Eşittir (=) İşareti",
        shortDesc: "Excel'de hesaplama başlatmanın evrensel kuralı olan eşittir işareti ve basit toplama mantığı.",
        category: "Formüller ve Referanslar",
        groupTitle: "Formül Temelleri",
        primaryGoal: "Formül çubuğunu ve eşittir işaretini hesaplamalarda hatasız kullanabilmek.",
        prerequisites: ["sec5_l12"],
        commonMistakes: ["Eşittir (=) koymadan hücreye 10+20 yazıp Excel'in bunu metin olarak bırakmasına şaşırmak"],
        successCriteria: "Formül başlatma kuralını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["="],
        initialWorkbook: createTableSheet("s6_1", "FormulGirisSayfasi", ["Sayı 1", "Sayı 2", "Toplam"], [[25, 45, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formül Anatomisi ve Eşittir (=) İşareti",
                    "description": "Formül çubuğunu ve eşittir işaretini hesaplamalarda hatasız kullanabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_1",
                    "title": "Hesaplamayı Başlatmak",
                    "explanation": "Excel'de bir hücreye doğrudan 25+45 yazarsanız ekranda sadece '25+45' metni kalır. Ancak başına = koyup =A2+B2 yazarsanız Excel işlem motorunu çalıştırır ve 70 sonucunu üretir.",
                    "speechText": "Excel'de bir hücreye doğrudan 25+45 yazarsanız ekranda sadece '25+45' metni kalır. Ancak başına = koyup =A2+B2 yazarsanız Excel işlem motorunu çalıştırır ve 70 sonucunu üretir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine A2 ile B2'yi toplayan formülü yazın: =A2+B2",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=A2+B2 formülünü yazın.",
                              "C2 hücresine =A2+B2 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Formül Anatomisi ve Eşittir (=) İşareti görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2+B2"
                    }
          }
],
        quiz: {
          "id": "q6_1",
          "title": "Formül Anatomisi ve Eşittir (=) İşareti Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_1_1",
                              "question": "Excel'de bir hücrenin metin değil hesaplama yapması için ilk karakter ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "= (Eşittir)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ": (İki Nokta)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "# (Kare)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "$ (Dolar)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Eşittir (=) Excel formül motorunu tetikleyen anahtar karakterdir.",
                              "measuredSkill": "Formül Başlatma ve Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec6_l2",
        phaseId: 6,
        unitId: "u6_2",
        title: "Aritmetik Operatörler ve İşlem Önceliği (PEMDAS)",
        shortDesc: "Toplama (+), Çıkarma (-), Çarpma (*), Bölme (/) ve Üs Alma (^) ile parantez önceliği kuralları.",
        category: "Formüller ve Referanslar",
        groupTitle: "İşlem Önceliği",
        primaryGoal: "Parantez kullanmayarak hatalı finansal sonuçlar üretmenin önüne geçmek.",
        prerequisites: ["sec6_l1"],
        commonMistakes: ["=10+20*2 işleminde Excel'in önce çarpmayı yapıp 50 bulacağını unutup 60 beklemek"],
        successCriteria: "İşlem önceliği ve parantez kullanımını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["İşlem Önceliği"],
        initialWorkbook: createTableSheet("s6_2", "OncelikSayfasi", ["Fiyat", "Adet", "KDV Oranı", "KDV Dahil Toplam"], [[100, 2, 0.2, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Aritmetik Operatörler ve İşlem Önceliği (PEMDAS)",
                    "description": "Parantez kullanmayarak hatalı finansal sonuçlar üretmenin önüne geçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_2",
                    "title": "Parantezin Hayati Rolü",
                    "explanation": "Matematikte ve Excel'de çarpma/bölme, toplama/çıkarmadan önce yapılır. (Fiyat * Adet) * (1 + KDV) işleminde 1+KDV paranteze alınmazsa işlem sırası bozulur.",
                    "speechText": "Matematikte ve Excel'de çarpma/bölme, toplama/çıkarmadan önce yapılır. (Fiyat * Adet) * (1 + KDV) işleminde 1+KDV paranteze alınmazsa işlem sırası bozulur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t6_2_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine KDV dahil toplamı bulan formülü yazın: =(A2*B2)*(1+C2)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=(A2*B2)*(1+C2) formülünü yazın.",
                              "D2 hücresine =(A2*B2)*(1+C2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Aritmetik Operatörler ve İşlem Önceliği (PEMDAS) görevini başarıyla tamamladınız.",
                              "expectedValue": "=(A2*B2)*(1+C2)"
                    }
          }
],
        quiz: {
          "id": "q6_2",
          "title": "Aritmetik Operatörler ve İşlem Önceliği (PEMDAS) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_2_1",
                              "question": "=5 + 2 * 10 işleminin Excel'deki sonucu kaçtır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "25 (Önce 2*10=20, sonra +5=25)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "70"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "50"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "17"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Çarpma işlemi toplamadan önceliklidir.",
                              "measuredSkill": "Matematiksel İşlem Önceliği"
                    }
          ]
}
      },
      {
        id: "sec6_l3",
        phaseId: 6,
        unitId: "u6_3",
        title: "Göreli Hücre Başvuruları (A1 Mantığı ve Sürükleme)",
        shortDesc: "Bir formül aşağı çekildiğinde satır numaralarının (A2 -> A3 -> A4) kendiliğinden artması mekanizması.",
        category: "Formüller ve Referanslar",
        groupTitle: "Göreli Başvuru",
        primaryGoal: "Formülü tek satıra yazıp binlerce satıra güvenle kopyalayabilmek.",
        prerequisites: ["sec6_l1"],
        commonMistakes: ["Formül kopyalanırken referansların göreli olarak kaydığını fark etmemek"],
        successCriteria: "Göreli hücre başvurusu davranışını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Göreli Başvuru"],
        initialWorkbook: createTableSheet("s6_3", "GoreliSayfasi", ["Birim Fiyat", "Adet", "Tutar"], [[10, 5, ""], [20, 3, ""], [30, 2, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Göreli Hücre Başvuruları (A1 Mantığı ve Sürükleme)",
                    "description": "Formülü tek satıra yazıp binlerce satıra güvenle kopyalayabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_3",
                    "title": "Doğal Adres Kayması",
                    "explanation": "C2 hücresine =A2*B2 yazıp aşağı çektiğinizde C3 hücresinde formül kendiliğinden =A3*B3 olur. Dolar simgesi ($) olmayan tüm adresler göreli başvurudur.",
                    "speechText": "C2 hücresine =A2*B2 yazıp aşağı çektiğinizde C3 hücresinde formül kendiliğinden =A3*B3 olur. Dolar simgesi ($) olmayan tüm adresler göreli başvurudur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine A2 ile B2'yi çarpan formülü yazın: =A2*B2",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=A2*B2 formülünü yazın.",
                              "C2 hücresine =A2*B2 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Göreli Hücre Başvuruları (A1 Mantığı ve Sürükleme) görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2*B2"
                    }
          }
],
        quiz: {
          "id": "q6_3",
          "title": "Göreli Hücre Başvuruları (A1 Mantığı ve Sürükleme) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_3_1",
                              "question": "B2 hücresindeki =A1*2 formülü B3 hücresine kopyalandığında formül neye dönüşür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=A2*2"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=A1*2"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=B1*2"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=A3*2"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "1 satır aşağı kaydırıldığı için A1 başvurusu da 1 satır artarak A2 olur.",
                              "measuredSkill": "Göreli Hücre Başvurusu Davranışı"
                    }
          ]
}
      },
      {
        id: "sec6_l4",
        phaseId: 6,
        unitId: "u6_4",
        title: "Mutlak Hücre Başvurusu ($A$1 ile Sabitleme ve F4 Tuşu)",
        shortDesc: "Formül aşağı veya sağa çekilse bile sabit bir katsayı hücresinin ($E$1) asla kaymamasını sağlama.",
        category: "Formüller ve Referanslar",
        groupTitle: "Mutlak Başvuru",
        primaryGoal: "KDV oranı veya döviz kurunu tek bir hücreden tüm tabloya hatasız çarptırabilmek.",
        prerequisites: ["sec6_l3"],
        commonMistakes: ["Sabitleme yapmadan formülü çekip alt satırlarda boş hücreyle çarpıp 0 sonucu almak"],
        successCriteria: "F4 tuşuyla $ işaretlerini doğru yerleştirebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["$A$1", "F4", "Mutlak Başvuru"],
        initialWorkbook: createTableSheet("s6_4", "MutlakSayfasi", ["Maaş", "Zam Oranı ($C$1)", "Yeni Maaş"], [[10000, 0.15, ""], [15000, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Mutlak Hücre Başvurusu ($A$1 ile Sabitleme ve F4 Tuşu)",
                    "description": "KDV oranı veya döviz kurunu tek bir hücreden tüm tabloya hatasız çarptırabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_4",
                    "title": "Dolar İşaretinin Büyüsü",
                    "explanation": "$A$1 ifadesindeki dolar işaretleri o hücreyi çiviler. Formülü nereye sürüklerseniz sürükleyin $C$1 hücresi hep sabit kalır. F4 tuşu adresin etrafına $ işaretlerini otomatik koyar.",
                    "speechText": "$A$1 ifadesindeki dolar işaretleri o hücreyi çiviler. Formülü nereye sürüklerseniz sürükleyin $C$1 hücresi hep sabit kalır. F4 tuşu adresin etrafına $ işaretlerini otomatik koyar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_4_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine maaşa C1'deki sabit zam oranını uygulayan formülü yazın: =A2*(1+$C$1)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=A2*(1+$C$1) formülünü yazın.",
                              "C2 hücresine =A2*(1+$C$1) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Mutlak Hücre Başvurusu ($A$1 ile Sabitleme ve F4 Tuşu) görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2*(1+$C$1)"
                    }
          }
],
        quiz: {
          "id": "q6_4",
          "title": "Mutlak Hücre Başvurusu ($A$1 ile Sabitleme ve F4 Tuşu) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_4_1",
                              "question": "Excel formülünde bir hücre adresini seçip klavyeden F4 tuşuna basıldığında ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Adres $A$1 şeklinde mutlak (sabit) başvuruya dönüşür"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücre silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel kapanır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Değer kopyalanır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "F4 tuşu döngüsel olarak Göreli -> Mutlak ($A$1) -> Karma ($A1 / A$1) modları arasında geçiş yaptırır.",
                              "measuredSkill": "F4 Kısayolu ve Mutlak Başvuru"
                    }
          ]
}
      },
      {
        id: "sec6_l5",
        phaseId: 6,
        unitId: "u6_5",
        title: "Karma Hücre Başvuruları: Sütun Sabitleme ($A1)",
        shortDesc: "Formül sağa doğru kopyalandığında sütun harfinin sabit kalması ancak aşağı çekildiğinde satırın serbestçe artması kuralı.",
        category: "Formüller ve Referanslar",
        groupTitle: "Karma Başvuru",
        primaryGoal: "Çok sütunlu raporlarda anahtar sütunu sabitleyip sağa doğru formül çoğaltabilmek.",
        prerequisites: ["sec6_l4"],
        commonMistakes: ["Hem satırı hem sütunu sabitleyip sağa çekince tüm kolonların aynı kalmasına yol açmak"],
        successCriteria: "$A1 karma başvuru kuralını doğru uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["$A1", "Karma Başvuru"],
        initialWorkbook: createTableSheet("s6_5", "SutunSabitSayfasi", ["Baz Fiyat", "Oran 1", "Oran 2"], [[100, 1.1, 1.2]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Karma Hücre Başvuruları: Sütun Sabitleme ($A1)",
                    "description": "Çok sütunlu raporlarda anahtar sütunu sabitleyip sağa doğru formül çoğaltabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_5",
                    "title": "Sütunu Kilitlemek",
                    "explanation": "$A2 ifadesinde dolar sadece A harfinin önündedir. Formülü sağa çekseniz bile A sütununa bakmaya devam eder; ama aşağı çekerseniz A3, A4 diye satır kayar.",
                    "speechText": "$A2 ifadesinde dolar sadece A harfinin önündedir. Formülü sağa çekseniz bile A sütununa bakmaya devam eder; ama aşağı çekerseniz A3, A4 diye satır kayar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t6_5_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine $A2 ile B1'i çarpan karma formülü yazın: =$A2*B1",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=$A2*B1 formülünü yazın.",
                              "B2 hücresine =$A2*B1 formülünü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Karma Hücre Başvuruları: Sütun Sabitleme ($A1) görevini başarıyla tamamladınız.",
                              "expectedValue": "=$A2*B1"
                    }
          }
],
        quiz: {
          "id": "q6_5",
          "title": "Karma Hücre Başvuruları: Sütun Sabitleme ($A1) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_5_1",
                              "question": "=$A1 ifadesinde dolar işareti ($) neyi kilitler?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca A sütununu (Sağa çekilse de A sütunu değişmez)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca 1. satırı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hem satır hem sütunu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hiçbirini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dolar hangi harf veya sayının önündeyse yalnızca onu kilitler.",
                              "measuredSkill": "Sütun Kilitli Karma Başvuru"
                    }
          ]
}
      },
      {
        id: "sec6_l6",
        phaseId: 6,
        unitId: "u6_6",
        title: "Karma Hücre Başvuruları: Satır Sabitleme (A$1) ve Çarpım Tablosu",
        shortDesc: "Formül aşağı çekildiğinde satır numarasının sabit kalması ancak sağa çekildiğinde sütunun serbest olması kuralı.",
        category: "Formüller ve Referanslar",
        groupTitle: "Karma Başvuru",
        primaryGoal: "Tek bir formül yazıp tüm matrise yayarak klasik Çarpım Tablosunu tek hamlede inşa etmek.",
        prerequisites: ["sec6_l5"],
        commonMistakes: ["Hangi eksenin $A1, hangi eksenin A$1 olması gerektiğini karıştırmak"],
        successCriteria: "İki boyutlu matris formülünü =$A2*B$1 şeklinde kurabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["A$1", "Matris Formülü"],
        initialWorkbook: createTableSheet("s6_6", "CarpimTablosuSayfasi", ["Sayı", "1", "2", "3"], [[1, "", "", ""], [2, "", "", ""], [3, "", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Karma Hücre Başvuruları: Satır Sabitleme (A$1) ve Çarpım Tablosu",
                    "description": "Tek bir formül yazıp tüm matrise yayarak klasik Çarpım Tablosunu tek hamlede inşa etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_6",
                    "title": "Matris Mimarisi",
                    "explanation": "B2 hücresine =$A2*B$1 yazdığınızda, sol sütundaki sayıların sütunu ($A), üst satırdaki sayıların ise satırı ($1) kilitlenir. Bu tek formülü tüm 3x3 alana kopyaladığınızda çarpım tablosu eksiksiz dolar.",
                    "speechText": "B2 hücresine =$A2*B$1 yazdığınızda, sol sütundaki sayıların sütunu ($A), üst satırdaki sayıların ise satırı ($1) kilitlenir. Bu tek formülü tüm 3x3 alana kopyaladığınızda çarpım tablosu eksiksiz dolar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t6_6_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine matris çarpım formülünü yazın: =$A2*B$1",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=$A2*B$1 formülünü yazın.",
                              "B2 hücresine =$A2*B$1 formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Karma Hücre Başvuruları: Satır Sabitleme (A$1) ve Çarpım Tablosu görevini başarıyla tamamladınız.",
                              "expectedValue": "=$A2*B$1"
                    }
          }
],
        quiz: {
          "id": "q6_6",
          "title": "Karma Hücre Başvuruları: Satır Sabitleme (A$1) ve Çarpım Tablosu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_6_1",
                              "question": "Çarpım tablosunda tek formülle tüm tabloyu doldurmak için kullanılan formül kalıbı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=$A2 * B$1"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=$A$2 * $B$1"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=A2 * B1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=A$2 * $B1"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "=$A2*B$1 sütunu A'da, satırı 1'de tutarak mükemmel iki boyutlu kesişim sağlar.",
                              "measuredSkill": "İki Boyutlu Karma Başvuru ve Matris Modellemesi"
                    }
          ]
}
      },
      {
        id: "sec6_l7",
        phaseId: 6,
        unitId: "u6_7",
        title: "Başka Çalışma Sayfalarındaki Hücrelere Başvuru (Sayfa2!A1)",
        shortDesc: "Sayfa adı ve ünlem işareti (!) sözdizimi ile farklı sayfalardaki verileri tek bir konsolide sayfada toplama.",
        category: "Formüller ve Referanslar",
        groupTitle: "Sayfalar Arası Başvuru",
        primaryGoal: "Aylık sayfaların toplamlarını 'Yıllık Özet' sayfasına dinamik bağlamak.",
        prerequisites: ["sec6_l1"],
        commonMistakes: ["Sayfa adında boşluk olduğunda tek tırnak ('Ocak Ayı'!A1) kuralını unutmak"],
        successCriteria: "Sayfalar arası formül sözdizimini hatasız uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Sayfa Başvurusu", "!"],
        initialWorkbook: createTableSheet("s6_7", "KonsolideOzet", ["Kaynak Sayfa", "Çekilen Değer"], [["Ocak!B10", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Başka Çalışma Sayfalarındaki Hücrelere Başvuru (Sayfa2!A1)",
                    "description": "Aylık sayfaların toplamlarını 'Yıllık Özet' sayfasına dinamik bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_7",
                    "title": "Sayfaları Konuşturmak",
                    "explanation": "Başka bir sayfadaki hücreyi formüle dahil etmek için sayfa adı yazılır ve ardına ünlem (!) konur: =Ocak!B10. Sayfa adında boşluk varsa ='Ocak Satışları'!B10 şeklinde tek tırnakla sarılır.",
                    "speechText": "Başka bir sayfadaki hücreyi formüle dahil etmek için sayfa adı yazılır ve ardına ünlem (!) konur: =Ocak!B10. Sayfa adında boşluk varsa ='Ocak Satışları'!B10 şeklinde tek tırnakla sarılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_7_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine Ocak sayfasındaki B1 hücresini çeken formülü yazın: =Ocak!B1",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=Ocak!B1 formülünü yazın.",
                              "C2 hücresine =Ocak!B1 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Başka Çalışma Sayfalarındaki Hücrelere Başvuru (Sayfa2!A1) görevini başarıyla tamamladınız.",
                              "expectedValue": "=Ocak!B1"
                    }
          }
],
        quiz: {
          "id": "q6_7",
          "title": "Başka Çalışma Sayfalarındaki Hücrelere Başvuru (Sayfa2!A1) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_7_1",
                              "question": "Excel'de başka bir çalışma sayfasındaki hücreye başvururken sayfa adı ile hücre adresi arasına hangi simge konur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "! (Ünlem işareti)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ": (İki nokta)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "$ (Dolar)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "@ (Et)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ünlem simgesi sayfa adı ile hücre koordinatını ayıran resmi sözdizimidir.",
                              "measuredSkill": "Sayfalar Arası Konsolidasyon ve Başvuru"
                    }
          ]
}
      },
      {
        id: "sec6_l8",
        phaseId: 6,
        unitId: "u6_8",
        title: "Başka Çalışma Kitaplarına (Harici Dosyalara) Bağlantılı Formüller",
        shortDesc: "Köşeli parantez [Dosya.xlsx]Sayfa!A1 sözdizimi ile kapalı veya açık harici dosyalardan veri çekme.",
        category: "Formüller ve Referanslar",
        groupTitle: "Harici Dosya Bağlantısı",
        primaryGoal: "Farklı departmanların bütçe dosyalarını tek bir ana dosyada toplamak.",
        prerequisites: ["sec6_l7"],
        commonMistakes: ["Harici dosyanın yeri değiştirildiğinde bağlantının kopacağını (bağlantı güncelleme) hesaba katmamak"],
        successCriteria: "Harici çalışma kitabı referans mimarisini kavramak.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Harici Bağlantı"],
        initialWorkbook: createTableSheet("s6_8", "HariciDosyaSayfasi", ["Bağlantı Türü", "Sözdizimi Formatı"], [["Harici Dosya", "='[Butce_2024.xlsx]Ozet'!$B$5"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Başka Çalışma Kitaplarına (Harici Dosyalara) Bağlantılı Formüller",
                    "description": "Farklı departmanların bütçe dosyalarını tek bir ana dosyada toplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_8",
                    "title": "Dosyalar Arası Köprü",
                    "explanation": "Excel başka bir çalışma kitabına bağlandığında dosya adını [ ] içine alır. Veri > Bağlantıları Düzenle (Edit Links) menüsünden bu harici yollar kontrol edilir ve güncellenir.",
                    "speechText": "Excel başka bir çalışma kitabına bağlandığında dosya adını [ ] içine alır. Veri > Bağlantıları Düzenle (Edit Links) menüsünden bu harici yollar kontrol edilir ve güncellenir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine harici dosya adını saran parantez tipini 'Köşeli Parantez' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Köşeli Parantez' yazın.",
                              "C2 hücresine 'Köşeli Parantez' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Başka Çalışma Kitaplarına (Harici Dosyalara) Bağlantılı Formüller görevini başarıyla tamamladınız.",
                              "expectedValue": "Köşeli Parantez"
                    }
          }
],
        quiz: {
          "id": "q6_8",
          "title": "Başka Çalışma Kitaplarına (Harici Dosyalara) Bağlantılı Formüller Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_8_1",
                              "question": "Formülde görülen ='[Satis.xlsx]Sayfa1'!A1 ifadesindeki köşeli parantez neyi belirtir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Harici bir çalışma kitabı (Excel dosyası) adını"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata kodunu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Gizli bir sayfayı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kilitli bir hücreyi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Köşeli parantezler dosya adını sayfa adından ayırır.",
                              "measuredSkill": "Harici Çalışma Kitabı Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec6_l9",
        phaseId: 6,
        unitId: "u6_9",
        title: "Formülleri Metin Olarak Gösterme (Ctrl + ` Formül Denetimi)",
        shortDesc: "Sonuçlar yerine tüm sayfadaki formülleri aynı anda ekrana dökerek formül denetimi yapma.",
        category: "Formüller ve Referanslar",
        groupTitle: "Formül Denetimi",
        primaryGoal: "Karmaşık tablolarda hangi hücrede formül, hangi hücrede elle girilmiş sabit olduğunu tek bakışta yakalamak.",
        prerequisites: ["sec6_l1"],
        commonMistakes: ["Hücrelere tek tek tıklayıp formül çubuğuna bakmaya saatler harcamak"],
        successCriteria: "Ctrl + ` (Kesme işareti) kısayolunu formül denetiminde kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Ctrl+`", "Formülleri Göster"],
        initialWorkbook: createTableSheet("s6_9", "FormulGosterSayfasi", ["İşlem", "Kısayol"], [["Formülleri Göster / Gizle", "Ctrl + ` (veya Formüller > Formülleri Göster)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formülleri Metin Olarak Gösterme (Ctrl + ` Formül Denetimi)",
                    "description": "Karmaşık tablolarda hangi hücrede formül, hangi hücrede elle girilmiş sabit olduğunu tek bakışta yakalamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_9",
                    "title": "Röntgen Çekmek",
                    "explanation": "Formüller > 'Formülleri Göster' butonuna (Ctrl + `) bastığınızda hücrelerdeki sonuçlar kaybolur ve gerçek formül metinleri açıkça görünür. Bu işlem bir şirketin mali modelini denetlerken ilk yapılan iştir.",
                    "speechText": "Formüller > 'Formülleri Göster' butonuna (Ctrl + `) bastığınızda hücrelerdeki sonuçlar kaybolur ve gerçek formül metinleri açıkça görünür. Bu işlem bir şirketin mali modelini denetlerken ilk yapılan iştir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine bu denetim aracının adını 'Formülleri Göster' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Formülleri Göster' yazın.",
                              "C2 hücresine 'Formülleri Göster' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Formülleri Metin Olarak Gösterme (Ctrl + ` Formül Denetimi) görevini başarıyla tamamladınız.",
                              "expectedValue": "Formülleri Göster"
                    }
          }
],
        quiz: {
          "id": "q6_9",
          "title": "Formülleri Metin Olarak Gösterme (Ctrl + ` Formül Denetimi) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_9_1",
                              "question": "Tüm sayfadaki sonuçlar yerine hücrelerde yazılı gerçek formülleri ekranda göstermek için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formüller sekmesinden 'Formülleri Göster' düğmesine basılır (Ctrl + `)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayfa silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül çubuğu kapatılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı rengi değiştirilir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formülleri Göster modu sayfa röntgenini çekerek tüm hesaplamaları metin olarak sergiler.",
                              "measuredSkill": "Formül Saydamlığı ve Hızlı Denetim"
                    }
          ]
}
      },
      {
        id: "sec6_l10",
        phaseId: 6,
        unitId: "u6_10",
        title: "Formül Hata Türleri (#DEĞER!, #BAŞV!, #SIFIR/0!, #AD?) Teşhisi",
        shortDesc: "Excel'in ürettiği temel hata kodlarının nedenleri ve düzeltilme stratejileri.",
        category: "Formüller ve Referanslar",
        groupTitle: "Hata Ayıklama",
        primaryGoal: "Hata koduyla karşılaşıldığında paniğe kapılmadan kaynağını tespit edip saniyeler içinde düzeltmek.",
        prerequisites: ["sec6_l1"],
        commonMistakes: ["#BAŞV! hatasını görünce formülü baştan yazmak yerine silinen hücreyi geri almayı düşünmemek"],
        successCriteria: "Excel hata kodlarının kök nedenlerini doğru teşhis edebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hata Türleri"],
        initialWorkbook: createTableSheet("s6_10", "HataTeshisSayfasi", ["Hata Kodu", "Kök Neden"], [["#DEĞER! (#VALUE!)", "Metin ile sayıyı matematiksel işleme sokmak"], ["#BAŞV! (#REF!)", "Formülün baktığı hücre veya sütunun silinmiş olması"], ["#SIFIR/0! (#DIV/0!)", "Bir sayıyı sıfıra veya boş hücreye bölmek"], ["#AD? (#NAME?)", "Fonksiyon adının yanlış yazılması (Örn: TOPL yerine TOPLA)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formül Hata Türleri (#DEĞER!, #BAŞV!, #SIFIR/0!, #AD?) Teşhisi",
                    "description": "Hata koduyla karşılaşıldığında paniğe kapılmadan kaynağını tespit edip saniyeler içinde düzeltmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_10",
                    "title": "Hataların Dili",
                    "explanation": "Excel rastgele hata vermez. Eğer =A1/0 yazarsanız #SIFIR/0!, fonksiyon adını yanlış yazarsanız #AD?, hücreyi silerseniz #BAŞV! uyarısı alırsınız.",
                    "speechText": "Excel rastgele hata vermez. Eğer =A1/0 yazarsanız #SIFIR/0!, fonksiyon adını yanlış yazarsanız #AD?, hücreyi silerseniz #BAŞV! uyarısı alırsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t6_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine bir sayıyı sıfıra böldüğümüzde çıkan hatayı '#SIFIR/0!' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'#SIFIR/0!' yazın.",
                              "C2 hücresine '#SIFIR/0!' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Formül Hata Türleri (#DEĞER!, #BAŞV!, #SIFIR/0!, #AD?) Teşhisi görevini başarıyla tamamladınız.",
                              "expectedValue": "#SIFIR/0!"
                    }
          }
],
        quiz: {
          "id": "q6_10",
          "title": "Formül Hata Türleri (#DEĞER!, #BAŞV!, #SIFIR/0!, #AD?) Teşhisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_10_1",
                              "question": "Bir formülün başvurduğu satır veya sütun tamamen silindiğinde hangi hata kodu oluşur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "#BAŞV! (#REF!)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "#DEĞER!"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "#AD?"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "#YOK"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "#BAŞV! (Reference) başvurulan hücre adresinin artık mevcut olmadığını bildirir.",
                              "measuredSkill": "Hata Teşhisi ve Kök Neden Analizi"
                    }
          ]
}
      },
      {
        id: "sec6_l11",
        phaseId: 6,
        unitId: "u6_11",
        title: "Döngüsel Başvuru (Circular Reference) Uyarısı ve Kurtarma",
        shortDesc: "Bir hücrenin formülünün kendi kendine başvurması (A1 hücresine =A1+10 yazılması) sonucu oluşan kilitlenme.",
        category: "Formüller ve Referanslar",
        groupTitle: "Döngüsel Başvuru",
        primaryGoal: "Excel'i sonsuz hesaplama döngüsüne sokan döngüsel başvuruları tespit edip düzeltmek.",
        prerequisites: ["sec6_l10"],
        commonMistakes: ["Döngüsel başvuru uyarısını 'Tamam' deyip geçiştirerek Excel hesaplama motorunun durmasına yol açmak"],
        successCriteria: "Döngüsel başvuruyu Formül Denetimi sekmesinden bulup temizleyebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Döngüsel Başvuru"],
        initialWorkbook: createTableSheet("s6_11", "DonguselSayfasi", ["Hücre", "Hatalı Formül", "Sorun"], [["A1", "=A1 + 10", "Hücre kendi kendini hesaplayamaz (Döngü)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Döngüsel Başvuru (Circular Reference) Uyarısı ve Kurtarma",
                    "description": "Excel'i sonsuz hesaplama döngüsüne sokan döngüsel başvuruları tespit edip düzeltmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_11",
                    "title": "Kendi Kuyruğunu Isıran Yılan",
                    "explanation": "A1 hücresine =A1+10 yazarsanız Excel A1'i bulmak için A1'e bakar ve sonsuz bir döngüye girer. Durum çubuğunda 'Döngüsel Başvuru: A1' uyarısı belirir. Kendi hücresini içeren referans derhal silinmelidir.",
                    "speechText": "A1 hücresine =A1+10 yazarsanız Excel A1'i bulmak için A1'e bakar ve sonsuz bir döngüye girer. Durum çubuğunda 'Döngüsel Başvuru: A1' uyarısı belirir. Kendi hücresini içeren referans derhal silinmelidir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t6_11_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu yapısal hatanın adını 'Döngüsel Başvuru' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Döngüsel Başvuru' yazın.",
                              "D2 hücresine 'Döngüsel Başvuru' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Döngüsel Başvuru (Circular Reference) Uyarısı ve Kurtarma görevini başarıyla tamamladınız.",
                              "expectedValue": "Döngüsel Başvuru"
                    }
          }
],
        quiz: {
          "id": "q6_11",
          "title": "Döngüsel Başvuru (Circular Reference) Uyarısı ve Kurtarma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_11_1",
                              "question": "Excel'de bir hücre formülünde kendi hücre adresini kullanırsa ne uyarısı verilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Döngüsel Başvuru (Circular Reference)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "#SAYI! Hatası"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosya Bozuk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcı Bulunamadı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formülün kendisini hesaplamada kullanması sonsuz döngüsel başvuru hatası doğurur.",
                              "measuredSkill": "Döngüsel Mantık Hatası Çözümü"
                    }
          ]
}
      },
      {
        id: "sec6_l12",
        phaseId: 6,
        unitId: "u6_12",
        title: "Bölüm 6 Formül Mantığı ve Referanslar Değerlendirme Sınavı",
        shortDesc: "Formül anatomisi, göreli, mutlak ($A$1), karma ($A1 / A$1), sayfalar arası başvuru ve hata teşhisi final sınavı.",
        category: "Formüller ve Referanslar",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "6. Bölümün tüm formül ve adresleme kazanımlarını eksiksiz sergilemek.",
        prerequisites: ["sec6_l1", "sec6_l4", "sec6_l6", "sec6_l10"],
        commonMistakes: ["Mutlak sabitleme ile göreli adresleme mantığını karıştırmak"],
        successCriteria: "Bölüm 6 değerlendirme testini tam başarıyla geçmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s6_12", "Bolum6Final", ["Yetkinlik", "Durum"], [["Formül Operatörleri ve PEMDAS", "Kazanıldı"], ["Mutlak ve Karma ($) Adresleme", "Kazanıldı"], ["Hata Kodları Analizi", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 6 Formül Mantığı ve Referanslar Değerlendirme Sınavı",
                    "description": "6. Bölümün tüm formül ve adresleme kazanımlarını eksiksiz sergilemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts6_12",
                    "title": "Formül Ustası",
                    "explanation": "Tebrikler! Excel formül motorunun en kritik ve temel kurallarını çözdünüz. Artık sabitleme mantığına ($) tam hakimsiniz. Şimdi matematiksel ve istatistiksel fonksiyonlar dünyasına geçiyoruz.",
                    "speechText": "Tebrikler! Excel formül motorunun en kritik ve temel kurallarını çözdünüz. Artık sabitleme mantığına ($) tam hakimsiniz. Şimdi matematiksel ve istatistiksel fonksiyonlar dünyasına geçiyoruz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t6_12_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 6 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 6 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 6 Formül Mantığı ve Referanslar Değerlendirme Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 6 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q6_12",
          "title": "Bölüm 6 Formül Mantığı ve Referanslar Değerlendirme Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_6_12_1",
                              "question": "Bir formülde $ simgesi satır ve sütun harfinin önüne neden konur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formül başka hücrelere kopyalandığında o hücre adresinin sabit kalması için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayının para birimi olması için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı rengini değiştirmek için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreyi gizlemek için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "$ simgesi hücre referansını mutlaklaştırarak adres kaymasını engeller.",
                              "measuredSkill": "Bölüm 6 Genel Formül ve Başvuru Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 7,
    category: "Temel Fonksiyonlar",
    title: "7. Temel Matematiksel ve İstatistiksel Fonksiyonlar",
    subtitle: "TOPLA, ORTALAMA, MAK, MİN, BÜYÜK, KÜÇÜK, SAY, BAĞ_DEĞ_DOLU_SAY ve YUVARLA",
    iconName: "Calculator",
    description: "Otomatik toplam (Alt+=), aritmetik ortalama, uç değerler (MAK/MİN), n. sıradaki değerler (BÜYÜK/KÜÇÜK), sayısal ve dolu hücre sayımları (SAY vs BAĞ_DEĞ_DOLU_SAY), yuvarlama matematik ailesi (YUVARLA/YUKARI/AŞAĞI).",
    lessons: [
      {
        id: "sec7_l1",
        phaseId: 7,
        unitId: "u7_1",
        title: "TOPLA (SUM) Fonksiyonu ve Hızlı Otomatik Toplam (Alt + =)",
        shortDesc: "Aralık toplama mantığı ve tek tuşla yukarıdaki veya soldaki sayıları toplayan Alt + = kısayolu.",
        category: "Temel Fonksiyonlar",
        groupTitle: "TOPLA",
        primaryGoal: "Aralıkları tek tek + ile toplamak yerine TOPLA fonksiyonu ve klavye kısayolu ile anında toplamak.",
        prerequisites: ["sec6_l12"],
        commonMistakes: ["=A1+A2+A3.. diye onlarca hücreyi elle artı ile toplamaya çalışmak"],
        successCriteria: "TOPLA fonksiyonunu ve Alt + = kısayolunu refleks haline getirmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["TOPLA", "Alt+="],
        initialWorkbook: createTableSheet("s7_1", "ToplaSayfasi", ["Şube", "Ciro"], [["Kadıköy", 150000], ["Beşiktaş", 220000], ["Bakırköy", 180000], ["Toplam", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TOPLA (SUM) Fonksiyonu ve Hızlı Otomatik Toplam (Alt + =)",
                    "description": "Aralıkları tek tek + ile toplamak yerine TOPLA fonksiyonu ve klavye kısayolu ile anında toplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_1",
                    "title": "Işık Hızında Toplam",
                    "explanation": "=TOPLA(B2:B4) formülü aradaki tüm hücreleri tek hamlede toplar. B5 hücresindeyken Alt + = tuşuna basarsanız Excel yukarıdaki tüm sayıları otomatik algılar ve formülü tek vuruşta yazar.",
                    "speechText": "=TOPLA(B2:B4) formülü aradaki tüm hücreleri tek hamlede toplar. B5 hücresindeyken Alt + = tuşuna basarsanız Excel yukarıdaki tüm sayıları otomatik algılar ve formülü tek vuruşta yazar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_1_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine B2:B4 aralığını toplayan formülü yazın: =TOPLA(B2:B4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA(B2:B4) formülünü yazın.",
                              "B5 hücresine =TOPLA(B2:B4) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! TOPLA (SUM) Fonksiyonu ve Hızlı Otomatik Toplam (Alt + =) görevini başarıyla tamamladınız.",
                              "expectedValue": "=TOPLA(B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q7_1",
          "title": "TOPLA (SUM) Fonksiyonu ve Hızlı Otomatik Toplam (Alt + =) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_1_1",
                              "question": "Excel'de Otomatik Toplam (AutoSum) ekleyen klavye kısayolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alt + = (veya Giriş sekmesindeki Otomatik Toplam simgesi)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + S"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + T"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Shift + Enter"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Alt + = tuşu aktif hücrenin üstündeki veya solundaki sayıları algılayıp TOPLA formülü üretir.",
                              "measuredSkill": "Hızlı Toplam ve Aralık İşlemleri"
                    }
          ]
}
      },
      {
        id: "sec7_l2",
        phaseId: 7,
        unitId: "u7_2",
        title: "ORTALAMA (AVERAGE) ile Aritmetik Ortalama",
        shortDesc: "Belirtilen aralıktaki sayıların toplamını sayı adedine bölerek aritmetik ortalamayı hesaplama.",
        category: "Temel Fonksiyonlar",
        groupTitle: "ORTALAMA",
        primaryGoal: "Satış hedeflerinin veya öğrenci notlarının ortalamasını tek fonksiyonla bulmak.",
        prerequisites: ["sec7_l1"],
        commonMistakes: ["Boş hücreler ile sıfır (0) yazan hücrelerin ortalamaya etkisini karıştırmak (Boş hücreler ortalamayı düşürmez, 0 düşürür)"],
        successCriteria: "ORTALAMA fonksiyonunu doğru aralıkla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["ORTALAMA"],
        initialWorkbook: createTableSheet("s7_2", "OrtalamaSayfasi", ["Öğrenci", "Not"], [["Ahmet", 70], ["Zeynep", 90], ["Can", 80], ["Ortalama", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ORTALAMA (AVERAGE) ile Aritmetik Ortalama",
                    "description": "Satış hedeflerinin veya öğrenci notlarının ortalamasını tek fonksiyonla bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_2",
                    "title": "Aritmetik Denge",
                    "explanation": "=ORTALAMA(B2:B4) formülü üç sayıyı toplar (240) ve 3'e bölerek 80 sonucunu döner. Boş hücreler hesaba katılmaz; ancak 0 yazılan hücreler bölen sayısını artırır.",
                    "speechText": "=ORTALAMA(B2:B4) formülü üç sayıyı toplar (240) ve 3'e bölerek 80 sonucunu döner. Boş hücreler hesaba katılmaz; ancak 0 yazılan hücreler bölen sayısını artırır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_2_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine notların ortalamasını alan formülü yazın: =ORTALAMA(B2:B4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=ORTALAMA(B2:B4) formülünü yazın.",
                              "B5 hücresine =ORTALAMA(B2:B4) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! ORTALAMA (AVERAGE) ile Aritmetik Ortalama görevini başarıyla tamamladınız.",
                              "expectedValue": "=ORTALAMA(B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q7_2",
          "title": "ORTALAMA (AVERAGE) ile Aritmetik Ortalama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_2_1",
                              "question": "ORTALAMA fonksiyonu aralıktaki tamamen boş bir hücreyi nasıl değerlendirir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yok sayar, ne toplama ne de adet bölenine dahil eder"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sıfır kabul edip ortalamayı düşürür"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sonucu sıfır yapar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'in ORTALAMA fonksiyonu boş hücreleri hesaplama dışında tutar.",
                              "measuredSkill": "Aritmetik Ortalama ve Boş Hücre Mantığı"
                    }
          ]
}
      },
      {
        id: "sec7_l3",
        phaseId: 7,
        unitId: "u7_3",
        title: "MAK (MAX) ve MİN (MIN) ile Uç Değerleri Bulma",
        shortDesc: "Bir listedeki en yüksek (maksimum) ve en düşük (minimum) sayısal değeri anında tespit etme.",
        category: "Temel Fonksiyonlar",
        groupTitle: "Uç Değerler",
        primaryGoal: "Şirketin satış rekorunu veya en düşük maliyet kalemini tek formülle tespit etmek.",
        prerequisites: ["sec7_l1"],
        commonMistakes: ["Listeyi sıralayıp en tepeye bakarak dinamik formül yazmaktan kaçınmak"],
        successCriteria: "MAK ve MİN fonksiyonlarını başarıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["MAK", "MİN"],
        initialWorkbook: createTableSheet("s7_3", "MakMinSayfasi", ["Temsilci", "Satış Tutarı"], [["Ali", 45000], ["Veli", 89000], ["Can", 62000], ["En Yüksek Satış", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "MAK (MAX) ve MİN (MIN) ile Uç Değerleri Bulma",
                    "description": "Şirketin satış rekorunu veya en düşük maliyet kalemini tek formülle tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_3",
                    "title": "Zirve ve Dip Tespiti",
                    "explanation": "=MAK(B2:B4) formülü aralıktaki en büyük sayı olan 89000'i bulur. =MİN(B2:B4) ise en küçük sayı olan 45000'i getirir.",
                    "speechText": "=MAK(B2:B4) formülü aralıktaki en büyük sayı olan 89000'i bulur. =MİN(B2:B4) ise en küçük sayı olan 45000'i getirir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_3_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine en yüksek satışı bulan formülü yazın: =MAK(B2:B4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=MAK(B2:B4) formülünü yazın.",
                              "B5 hücresine =MAK(B2:B4) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! MAK (MAX) ve MİN (MIN) ile Uç Değerleri Bulma görevini başarıyla tamamladınız.",
                              "expectedValue": "=MAK(B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q7_3",
          "title": "MAK (MAX) ve MİN (MIN) ile Uç Değerleri Bulma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_3_1",
                              "question": "Bir veri aralığındaki en küçük sayıyı bulmak için hangi Türkçe fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=MİN()"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=KÜÇÜK()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=TABAN()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=DÜŞÜK()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "MİN fonksiyonu seçili aralıktaki mutlak en küçük değeri verir.",
                              "measuredSkill": "Ekstrem Değer Analizi"
                    }
          ]
}
      },
      {
        id: "sec7_l4",
        phaseId: 7,
        unitId: "u7_4",
        title: "BÜYÜK (LARGE) ve KÜÇÜK (SMALL) ile n. Değerleri Bulma",
        shortDesc: "Yalnızca 1. değil; en yüksek 2. satış (k=2) veya en düşük 3. dereceyi bulma.",
        category: "Temel Fonksiyonlar",
        groupTitle: "Sıralı İstatistik",
        primaryGoal: "Şirkette en çok satan 2. ve 3. personelin cirosunu tespit etmek.",
        prerequisites: ["sec7_l3"],
        commonMistakes: ["MAK fonksiyonu ile 2. en büyük değeri bulmaya çalışmak"],
        successCriteria: "BÜYÜK ve KÜÇÜK fonksiyonlarının k parametresini doğru kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["BÜYÜK", "KÜÇÜK"],
        initialWorkbook: createTableSheet("s7_4", "BuyukKucukSayfasi", ["Aday", "Puan"], [["Ahmet", 85], ["Zeynep", 98], ["Mehmet", 92], ["2. En Yüksek Puan", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BÜYÜK (LARGE) ve KÜÇÜK (SMALL) ile n. Değerleri Bulma",
                    "description": "Şirkette en çok satan 2. ve 3. personelin cirosunu tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_4",
                    "title": "Podyum Analizi",
                    "explanation": "=BÜYÜK(Dizi; k) formülü çalışır. =BÜYÜK(B2:B4; 2) formülü k=2 olduğu için listedeki en büyük 2. puan olan 92'yi getirir.",
                    "speechText": "=BÜYÜK(Dizi; k) formülü çalışır. =BÜYÜK(B2:B4; 2) formülü k=2 olduğu için listedeki en büyük 2. puan olan 92'yi getirir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_4_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine en yüksek 2. puanı bulan formülü yazın: =BÜYÜK(B2:B4;2)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=BÜYÜK(B2:B4;2) formülünü yazın.",
                              "B5 hücresine =BÜYÜK(B2:B4;2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! BÜYÜK (LARGE) ve KÜÇÜK (SMALL) ile n. Değerleri Bulma görevini başarıyla tamamladınız.",
                              "expectedValue": "=BÜYÜK(B2:B4;2)"
                    }
          }
],
        quiz: {
          "id": "q7_4",
          "title": "BÜYÜK (LARGE) ve KÜÇÜK (SMALL) ile n. Değerleri Bulma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_4_1",
                              "question": "=BÜYÜK(A1:A10; 3) formülünün görevi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "A1:A10 aralığındaki en büyük 3. sayıyı bulmak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "İlk 3 sayıyı toplamak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayıları 3 ile çarpmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "En büyük sayıyı 3 kez yazmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "k parametresi kaçıncı sıradaki büyük veya küçük değerin arandığını belirler.",
                              "measuredSkill": "Sıralı Sıra İstatistiği (k-th Element)"
                    }
          ]
}
      },
      {
        id: "sec7_l5",
        phaseId: 7,
        unitId: "u7_5",
        title: "SAY (COUNT) ile Sayısal Hücreleri Sayma",
        shortDesc: "Bir aralıkta içinde yalnızca 'Sayı' (veya tarih) bulunan hücreleri sayma.",
        category: "Temel Fonksiyonlar",
        groupTitle: "SAY",
        primaryGoal: "Kaç müşterinin ödeme yaptığını ve kaç hücrenin sayısal olduğunu tespit etmek.",
        prerequisites: ["sec7_l1"],
        commonMistakes: ["SAY fonksiyonunun metinleri de sayacağını sanmak (Metinleri saymaz!)"],
        successCriteria: "SAY fonksiyonunun yalnızca sayı sayma kuralını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["SAY"],
        initialWorkbook: createTableSheet("s7_5", "SaySayfasi", ["Müşteri", "Tahsilat Tutarı"], [["Ali", 1000], ["Veli", "Ödemedi"], ["Can", 2500], ["Sayısal Ödeme Sayısı", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SAY (COUNT) ile Sayısal Hücreleri Sayma",
                    "description": "Kaç müşterinin ödeme yaptığını ve kaç hücrenin sayısal olduğunu tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_5",
                    "title": "Yalnızca Sayıları Say",
                    "explanation": "=SAY(B2:B4) formülü B2 ve B4'teki sayıları sayar ve 2 sonucunu verir. B3'teki 'Ödemedi' metnini saymaz.",
                    "speechText": "=SAY(B2:B4) formülü B2 ve B4'teki sayıları sayar ve 2 sonucunu verir. B3'teki 'Ödemedi' metnini saymaz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_5_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine sayısal ödeme sayısını bulan formülü yazın: =SAY(B2:B4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=SAY(B2:B4) formülünü yazın.",
                              "B5 hücresine =SAY(B2:B4) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! SAY (COUNT) ile Sayısal Hücreleri Sayma görevini başarıyla tamamladınız.",
                              "expectedValue": "=SAY(B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q7_5",
          "title": "SAY (COUNT) ile Sayısal Hücreleri Sayma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_5_1",
                              "question": "Excel'in SAY (COUNT) fonksiyonu hangilerini SAYAR?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca sayıları ve tarihleri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca metinleri"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş hücreleri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hatalı hücreleri"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "SAY fonksiyonu metinleri yok sayar, sadece sayısal değerleri sayar.",
                              "measuredSkill": "Sayısal Hücre Sayımı"
                    }
          ]
}
      },
      {
        id: "sec7_l6",
        phaseId: 7,
        unitId: "u7_6",
        title: "BAĞ_DEĞ_DOLU_SAY (COUNTA) ile Dolu Hücre Sayımı",
        shortDesc: "Hücrede metin, sayı, sembol veya formül olmasına bakılmaksızın tüm dolu hücreleri sayma.",
        category: "Temel Fonksiyonlar",
        groupTitle: "BAĞ_DEĞ_DOLU_SAY",
        primaryGoal: "Personel listesindeki toplam kişi sayısını isim sütunundan saydırmak.",
        prerequisites: ["sec7_l5"],
        commonMistakes: ["İsim listesini saymak için SAY() yazıp sonucun 0 çıkmasına şaşırmak"],
        successCriteria: "BAĞ_DEĞ_DOLU_SAY fonksiyonunu doğru veri türünde kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["BAĞ_DEĞ_DOLU_SAY", "COUNTA"],
        initialWorkbook: createTableSheet("s7_6", "BagDegSayfasi", ["Katılımcı Adı", "Kayıt Durumu"], [["Ahmet Yılmaz", "Onaylı"], ["Ayşe Kaya", "Onaylı"], ["Can Demir", "Bekliyor"], ["Toplam Katılımcı", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BAĞ_DEĞ_DOLU_SAY (COUNTA) ile Dolu Hücre Sayımı",
                    "description": "Personel listesindeki toplam kişi sayısını isim sütunundan saydırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_6",
                    "title": "Dolu Hücreleri Saymak",
                    "explanation": "A sütununda metinler olduğu için =SAY(A2:A4) yazarsanız 0 verir. Ancak =BAĞ_DEĞ_DOLU_SAY(A2:A4) yazarsanız dolu olan 3 hücreyi sayar ve 3 sonucunu üretir.",
                    "speechText": "A sütununda metinler olduğu için =SAY(A2:A4) yazarsanız 0 verir. Ancak =BAĞ_DEĞ_DOLU_SAY(A2:A4) yazarsanız dolu olan 3 hücreyi sayar ve 3 sonucunu üretir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_6_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine katılımcı sayısını bulan formülü yazın: =BAĞ_DEĞ_DOLU_SAY(A2:A4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=BAĞ_DEĞ_DOLU_SAY(A2:A4) formülünü yazın.",
                              "B5 hücresine =BAĞ_DEĞ_DOLU_SAY(A2:A4) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! BAĞ_DEĞ_DOLU_SAY (COUNTA) ile Dolu Hücre Sayımı görevini başarıyla tamamladınız.",
                              "expectedValue": "=BAĞ_DEĞ_DOLU_SAY(A2:A4)"
                    }
          }
],
        quiz: {
          "id": "q7_6",
          "title": "BAĞ_DEĞ_DOLU_SAY (COUNTA) ile Dolu Hücre Sayımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_6_1",
                              "question": "Metin içeren bir müşteri isim listesindeki kişi sayısını bulmak için hangi fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=BAĞ_DEĞ_DOLU_SAY() (COUNTA)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=SAY()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=TOPLA()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=METİNSAY()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "BAĞ_DEĞ_DOLU_SAY boş olmayan tüm hücreleri veri türüne bakmaksızın sayar.",
                              "measuredSkill": "Genel Dolu Hücre Sayımı ve Katılım Tespiti"
                    }
          ]
}
      },
      {
        id: "sec7_l7",
        phaseId: 7,
        unitId: "u7_7",
        title: "BOŞLUKSAY (COUNTBLANK) ile Eksik Veri Analizi",
        shortDesc: "Bir tabloda doldurulması unutulmuş veya eksik bırakılmış boş hücreleri tespit etme.",
        category: "Temel Fonksiyonlar",
        groupTitle: "BOŞLUKSAY",
        primaryGoal: "Form doldurmayan personeli veya eksik adres girilmiş müşteri kayıtlarını raporlamak.",
        prerequisites: ["sec7_l6"],
        commonMistakes: ["Eksik verileri tek tek gözle aramak"],
        successCriteria: "BOŞLUKSAY fonksiyonunu veri denetiminde kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["BOŞLUKSAY"],
        initialWorkbook: createTableSheet("s7_7", "BoslukSaySayfasi", ["Müşteri", "Telefon Numarası"], [["Ali", "555-1234"], ["Veli", ""], ["Can", "555-9876"], ["Eksik Telefon Sayısı", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BOŞLUKSAY (COUNTBLANK) ile Eksik Veri Analizi",
                    "description": "Form doldurmayan personeli veya eksik adres girilmiş müşteri kayıtlarını raporlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_7",
                    "title": "Eksik Veri Taraması",
                    "explanation": "=BOŞLUKSAY(B2:B4) formülü aralıktaki boş olan hücreleri sayar. Veli'nin telefonu boş olduğu için sonuç 1 çıkacaktır.",
                    "speechText": "=BOŞLUKSAY(B2:B4) formülü aralıktaki boş olan hücreleri sayar. Veli'nin telefonu boş olduğu için sonuç 1 çıkacaktır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t7_7_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine eksik telefon sayısını bulan formülü yazın: =BOŞLUKSAY(B2:B4)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=BOŞLUKSAY(B2:B4) formülünü yazın.",
                              "B5 hücresine =BOŞLUKSAY(B2:B4) formülünü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! BOŞLUKSAY (COUNTBLANK) ile Eksik Veri Analizi görevini başarıyla tamamladınız.",
                              "expectedValue": "=BOŞLUKSAY(B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q7_7",
          "title": "BOŞLUKSAY (COUNTBLANK) ile Eksik Veri Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_7_1",
                              "question": "BOŞLUKSAY (COUNTBLANK) fonksiyonunun ürettiği değer nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Aralıktaki tamamen boş hücrelerin toplam adedi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dolu hücrelerin sayısı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş hücrelerin toplamı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata kodu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Seçili alanda hiçbir veri içermeyen hücreleri sayar.",
                              "measuredSkill": "Veri Bütünlüğü ve Boşluk Denetimi"
                    }
          ]
}
      },
      {
        id: "sec7_l8",
        phaseId: 7,
        unitId: "u7_8",
        title: "YUVARLA (ROUND) ile Standart Matematiksel Yuvarlama",
        shortDesc: "Virgülden sonraki basamakları 5 ve üzerine göre yukarı, altına göre aşağı yuvarlama.",
        category: "Temel Fonksiyonlar",
        groupTitle: "YUVARLA",
        primaryGoal: "Ondalık kuruş küsuratlarını muhasebe kurallarına göre 2 basamağa bağlamak.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Hücre biçimlendirmeden ondalığı gizleyip arka planda küsuratın kalmasıyla oluşan kuruş farkı hataları"],
        successCriteria: "YUVARLA fonksiyonunu basamak parametresiyle hatasız uygulamak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["YUVARLA"],
        initialWorkbook: createTableSheet("s7_8", "YuvarlaSayfasi", ["Ham Tutar", "2 Basamağa Yuvarlanmış"], [[123.456, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "YUVARLA (ROUND) ile Standart Matematiksel Yuvarlama",
                    "description": "Ondalık kuruş küsuratlarını muhasebe kurallarına göre 2 basamağa bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_8",
                    "title": "Matematiksel Yuvarlama",
                    "explanation": "=YUVARLA(Sayı; BasamakSayısı) şeklinde çalışır. =YUVARLA(A2; 2) formülü 123.456 sayısını 3. basamak 6 olduğu için 123.46 yapar. Basamağa 0 yazılırsa tam sayıya yuvarlar.",
                    "speechText": "=YUVARLA(Sayı; BasamakSayısı) şeklinde çalışır. =YUVARLA(A2; 2) formülü 123.456 sayısını 3. basamak 6 olduğu için 123.46 yapar. Basamağa 0 yazılırsa tam sayıya yuvarlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t7_8_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine A2'yi 2 basamağa yuvarlayan formülü yazın: =YUVARLA(A2;2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YUVARLA(A2;2) formülünü yazın.",
                              "B2 hücresine =YUVARLA(A2;2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! YUVARLA (ROUND) ile Standart Matematiksel Yuvarlama görevini başarıyla tamamladınız.",
                              "expectedValue": "=YUVARLA(A2;2)"
                    }
          }
],
        quiz: {
          "id": "q7_8",
          "title": "YUVARLA (ROUND) ile Standart Matematiksel Yuvarlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_8_1",
                              "question": "=YUVARLA(14.85; 0) formülünün sonucu kaçtır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "15"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "14"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "14.8"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "14.9"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "0 basamak tam sayı demektir; 8 rakamı 5'ten büyük olduğu için 15'e yuvarlar.",
                              "measuredSkill": "Finansal Yuvarlama ve Kuruş Farkı Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec7_l9",
        phaseId: 7,
        unitId: "u7_9",
        title: "YUKARIYUVARLA ve AŞAĞIYUVARLA Fonksiyonları",
        shortDesc: "Küsurat ne olursa olsun daima tavana (YUKARI) veya tabana (AŞAĞI) yuvarlama kuralları.",
        category: "Temel Fonksiyonlar",
        groupTitle: "Yönlü Yuvarlama",
        primaryGoal: "Koli ve nakliye hesaplarında en ufak artık parça için yeni koli açma ihtiyacını formülleştirmek.",
        prerequisites: ["sec7_l8"],
        commonMistakes: ["10.1 koli ihtiyacını YUVARLA ile 10 koliye düşürüp 1 parçayı dışarıda bırakmak"],
        successCriteria: "YUKARIYUVARLA ve AŞAĞIYUVARLA fonksiyonlarını doğru lojistik kararlarda kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["YUKARIYUVARLA", "AŞAĞIYUVARLA"],
        initialWorkbook: createTableSheet("s7_9", "YonluYuvarlaSayfasi", ["Gereken Koli Sayısı", "Sipariş Edilecek Koli (Yukarı)"], [[10.15, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "YUKARIYUVARLA ve AŞAĞIYUVARLA Fonksiyonları",
                    "description": "Koli ve nakliye hesaplarında en ufak artık parça için yeni koli açma ihtiyacını formülleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_9",
                    "title": "Lojistikte Tavan Kuralı",
                    "explanation": "10.15 koli ihtiyacınız varsa 10 koli alamazsınız, mutlaka 11 koli gerekir. =YUKARIYUVARLA(A2; 0) formülü küsurat ne kadar küçük olursa olsun bir üst tam sayı olan 11'e tamamlar.",
                    "speechText": "10.15 koli ihtiyacınız varsa 10 koli alamazsınız, mutlaka 11 koli gerekir. =YUKARIYUVARLA(A2; 0) formülü küsurat ne kadar küçük olursa olsun bir üst tam sayı olan 11'e tamamlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t7_9_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine A2'yi yukarı tam sayıya yuvarlayan formülü yazın: =YUKARIYUVARLA(A2;0)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YUKARIYUVARLA(A2;0) formülünü yazın.",
                              "B2 hücresine =YUKARIYUVARLA(A2;0) yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! YUKARIYUVARLA ve AŞAĞIYUVARLA Fonksiyonları görevini başarıyla tamamladınız.",
                              "expectedValue": "=YUKARIYUVARLA(A2;0)"
                    }
          }
],
        quiz: {
          "id": "q7_9",
          "title": "YUKARIYUVARLA ve AŞAĞIYUVARLA Fonksiyonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_9_1",
                              "question": "=YUKARIYUVARLA(12.01; 0) işleminin sonucu kaçtır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "13"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "12"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "12.1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "14"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YUKARIYUVARLA en ufak pozitif küsuratta bile daima bir üst tam sayıya sıçrar.",
                              "measuredSkill": "Lojistik ve Tavan/Taban Matematik Modellemesi"
                    }
          ]
}
      },
      {
        id: "sec7_l10",
        phaseId: 7,
        unitId: "u7_10",
        title: "TAMSAYI (INT) ve KES (TRUNC) ile Ondalık Kısımları Atma",
        shortDesc: "Sayının virgülden sonraki kısmını yuvarlamadan doğrudan kesip atarak tam sayı kısmını alma.",
        category: "Temel Fonksiyonlar",
        groupTitle: "Tamsayı",
        primaryGoal: "Saat veya gün hesaplarında küsuratı kırparak net tam gün sayısına ulaşmak.",
        prerequisites: ["sec7_l8"],
        commonMistakes: ["Virgülü atmak için YUVARLA kullanıp sayının büyümesine yol açmak"],
        successCriteria: "TAMSAYI ve KES fonksiyonlarını başarıyla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["TAMSAYI", "KES"],
        initialWorkbook: createTableSheet("s7_10", "TamSayiSayfasi", ["Ham Sayı", "Tam Sayı Kısmı"], [[45.89, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TAMSAYI (INT) ve KES (TRUNC) ile Ondalık Kısımları Atma",
                    "description": "Saat veya gün hesaplarında küsuratı kırparak net tam gün sayısına ulaşmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_10",
                    "title": "Küsuratı Budama",
                    "explanation": "=TAMSAYI(A2) veya =KES(A2; 0) formülü 45.89 sayısındaki .89 kısmını tamamen kesip atar ve ekrana doğrudan 45 değerini verir. Yuvarlama yapmaz, direkt keser.",
                    "speechText": "=TAMSAYI(A2) veya =KES(A2; 0) formülü 45.89 sayısındaki .89 kısmını tamamen kesip atar ve ekrana doğrudan 45 değerini verir. Yuvarlama yapmaz, direkt keser. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t7_10_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine A2'nin tam sayı kısmını alan formülü yazın: =TAMSAYI(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=TAMSAYI(A2) formülünü yazın.",
                              "B2 hücresine =TAMSAYI(A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! TAMSAYI (INT) ve KES (TRUNC) ile Ondalık Kısımları Atma görevini başarıyla tamamladınız.",
                              "expectedValue": "=TAMSAYI(A2)"
                    }
          }
],
        quiz: {
          "id": "q7_10",
          "title": "TAMSAYI (INT) ve KES (TRUNC) ile Ondalık Kısımları Atma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_10_1",
                              "question": "=TAMSAYI(19.99) formülü hangi sonucu döndürür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "19"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "20"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "19.9"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "0"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "TAMSAYI yuvarlama yapmaz, ondalığı atıp tabandaki tam sayıyı (19) döner.",
                              "measuredSkill": "Ondalık Kesme ve Tam Sayı Dönüşümü"
                    }
          ]
}
      },
      {
        id: "sec7_l11",
        phaseId: 7,
        unitId: "u7_11",
        title: "ÇARPIM (PRODUCT) ve MUTLAK (ABS) Fonksiyonları",
        shortDesc: "Çoklu aralıkları tek formülle çarpma ve negatif sapmaları pozitif mutlak değere çevirme.",
        category: "Temel Fonksiyonlar",
        groupTitle: "ÇARPIM",
        primaryGoal: "Bütçe sapma analizlerinde eksi farkları mutlak büyüklük olarak değerlendirmek.",
        prerequisites: ["sec6_l2"],
        commonMistakes: ["Negatif varyansları toplarken birbirini sıfırlamasına engel olamamak"],
        successCriteria: "ÇARPIM ve MUTLAK fonksiyonlarını doğru senaryolarda kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["MUTLAK", "ÇARPIM"],
        initialWorkbook: createTableSheet("s7_11", "MutlakSayfasi", ["Sapma Tutarı", "Mutlak Sapma Büyüklüğü"], [[-15000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇARPIM (PRODUCT) ve MUTLAK (ABS) Fonksiyonları",
                    "description": "Bütçe sapma analizlerinde eksi farkları mutlak büyüklük olarak değerlendirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_11",
                    "title": "Pozitif Büyüklük",
                    "explanation": "=MUTLAK(A2) formülü -15000 sayısının işaretini kaldırarak +15000 yapar. Finansal risk analizlerinde zararın yönü değil mutlak büyüklüğü ölçülürken kritik rol oynar.",
                    "speechText": "=MUTLAK(A2) formülü -15000 sayısının işaretini kaldırarak +15000 yapar. Finansal risk analizlerinde zararın yönü değil mutlak büyüklüğü ölçülürken kritik rol oynar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t7_11_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine A2'nin mutlak değerini alan formülü yazın: =MUTLAK(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=MUTLAK(A2) formülünü yazın.",
                              "B2 hücresine =MUTLAK(A2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! ÇARPIM (PRODUCT) ve MUTLAK (ABS) Fonksiyonları görevini başarıyla tamamladınız.",
                              "expectedValue": "=MUTLAK(A2)"
                    }
          }
],
        quiz: {
          "id": "q7_11",
          "title": "ÇARPIM (PRODUCT) ve MUTLAK (ABS) Fonksiyonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_11_1",
                              "question": "=MUTLAK(-250) formülünün matematiksel sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "250"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "-250"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "0"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "MUTLAK (ABS) sayının sıfıra olan mesafesini daima pozitif olarak verir.",
                              "measuredSkill": "Mutlak Değer ve Finansal Sapma Analizi"
                    }
          ]
}
      },
      {
        id: "sec7_l12",
        phaseId: 7,
        unitId: "u7_12",
        title: "Bölüm 7 Temel Matematik ve İstatistik Değerlendirme Sınavı",
        shortDesc: "TOPLA, ORTALAMA, MAK, MİN, BÜYÜK, SAY, BAĞ_DEĞ_DOLU_SAY ve YUVARLA ailesi final değerlendirmesi.",
        category: "Temel Fonksiyonlar",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "7. Bölümün tüm matematiksel ve istatistiksel fonksiyon yetkinliklerini tam puanla kanıtlamak.",
        prerequisites: ["sec7_l1", "sec7_l2", "sec7_l4", "sec7_l6", "sec7_l8"],
        commonMistakes: ["SAY ile BAĞ_DEĞ_DOLU_SAY ayrımını karıştırmak"],
        successCriteria: "Bölüm 7 değerlendirme testini başarıyla tamamlamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s7_12", "Bolum7Final", ["Fonksiyon Ailesi", "Durum"], [["Temel İstatistikler (TOPLA, ORT, MAK, MİN)", "Kazanıldı"], ["Sayım Fonksiyonları (SAY, BAĞ_DEĞ)", "Kazanıldı"], ["Yuvarlama ve Matematik", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 7 Temel Matematik ve İstatistik Değerlendirme Sınavı",
                    "description": "7. Bölümün tüm matematiksel ve istatistiksel fonksiyon yetkinliklerini tam puanla kanıtlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts7_12",
                    "title": "Matematik ve İstatistik Uzmanı",
                    "explanation": "Tebrikler! Excel'in çekirdek matematik ve istatistik fonksiyonlarına tamamen hakim oldunuz. Artık karar mekanizmaları, mantıksal fonksiyonlar ve EĞER dünyasına hazırsınız.",
                    "speechText": "Tebrikler! Excel'in çekirdek matematik ve istatistik fonksiyonlarına tamamen hakim oldunuz. Artık karar mekanizmaları, mantıksal fonksiyonlar ve EĞER dünyasına hazırsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t7_12_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 7 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 7 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 7 Temel Matematik ve İstatistik Değerlendirme Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 7 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q7_12",
          "title": "Bölüm 7 Temel Matematik ve İstatistik Değerlendirme Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_7_12_1",
                              "question": "Aralıktaki metin ve sayılardan oluşan tüm dolu hücreleri saymak için hangi fonksiyon tercih edilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=BAĞ_DEĞ_DOLU_SAY() (COUNTA)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=SAY() (COUNT)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=TOPLA() (SUM)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=MAK() (MAX)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "BAĞ_DEĞ_DOLU_SAY tüm dolu hücreleri sayar; SAY ise yalnızca sayıları sayar.",
                              "measuredSkill": "Bölüm 7 Genel Fonksiyon Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 8,
    category: "Mantıksal Fonksiyonlar",
    title: "8. Mantıksal Fonksiyonlar ve Karar Mekanizmaları",
    subtitle: "EĞER, VE, YADA, İç İçe EĞER, ÇOKEĞER (IFS), EĞERHATA ve Karar Ağaçları",
    iconName: "GitBranch",
    description: "Mantıksal testler (=, <>, >, <, >=, <=), EĞER (IF) sözdizimi, sayısal prim/ceza formülleri, VE (AND), YADA (OR), iç içe hiyerarşik EĞER zincirleri, modern ÇOKEĞER (IFS) ve profesyonel EĞERHATA maskeleme.",
    lessons: [
      {
        id: "sec8_l1",
        phaseId: 8,
        unitId: "u8_1",
        title: "Mantıksal Testlerin Temeli ve Karşılaştırma Operatörleri",
        shortDesc: "Eşit (=), Eşit Değil (<>), Büyük (>), Küçük (<), Büyük Eşit (>=), Küçük Eşit (<=) ile DOĞRU/YANLIŞ üretme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Mantıksal Test",
        primaryGoal: "Excel'in bir koşulu nasıl sınayıp mantıksal boolean (DOĞRU veya YANLIŞ) ürettiğini kavramak.",
        prerequisites: ["sec7_l12"],
        commonMistakes: ["Eşit değil operatörünü (!= yerine <> olarak yazmayı unutmak)"],
        successCriteria: "Karşılaştırma operatörlerini doğru sözdizimiyle uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Mantıksal Test", "DOĞRU", "YANLIŞ"],
        initialWorkbook: createTableSheet("s8_1", "MantikTestSayfasi", ["Sayı 1", "Sayı 2", "Test (A2>B2)"], [[100, 50, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Mantıksal Testlerin Temeli ve Karşılaştırma Operatörleri",
                    "description": "Excel'in bir koşulu nasıl sınayıp mantıksal boolean (DOĞRU veya YANLIŞ) ürettiğini kavramak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_1",
                    "title": "Doğru mu Yanlış mı?",
                    "explanation": "Excel'e =A2>B2 yazdığınızda eğer A2 büyükse hücrede 'DOĞRU', değilse 'YANLIŞ' yazar. Eşit değil demek için <> simgeleri yan yana kullanılır.",
                    "speechText": "Excel'e =A2>B2 yazdığınızda eğer A2 büyükse hücrede 'DOĞRU', değilse 'YANLIŞ' yazar. Eşit değil demek için <> simgeleri yan yana kullanılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t8_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine A2'nin B2'den büyük olup olmadığını sınayan formülü yazın: =A2>B2",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=A2>B2 formülünü yazın.",
                              "C2 hücresine =A2>B2 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Mantıksal Testlerin Temeli ve Karşılaştırma Operatörleri görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2>B2"
                    }
          }
],
        quiz: {
          "id": "q8_1",
          "title": "Mantıksal Testlerin Temeli ve Karşılaştırma Operatörleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_1_1",
                              "question": "Excel formüllerinde 'Eşit Değildir' anlamına gelen karşılaştırma operatörü hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "<>"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "!="
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=/="
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "><"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de eşit değildir operatörü küçüktür ve büyüktür işaretlerinin birleşimi olan <> simgesidir.",
                              "measuredSkill": "Mantıksal Karşılaştırma Operatörleri"
                    }
          ]
}
      },
      {
        id: "sec8_l2",
        phaseId: 8,
        unitId: "u8_2",
        title: "EĞER (IF) Fonksiyonunun Söz Dizimi ve Metinsel Çıktı",
        shortDesc: "=EĞER(MantıksalSınama; [EğerDoğruysa]; [EğerYanlışsa]) sözdizimi ile 'Geçti' veya 'Kaldı' kararı üretme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "EĞER",
        primaryGoal: "Koşula bağlı olarak dinamik metin etiketleri basabilmek.",
        prerequisites: ["sec8_l1"],
        commonMistakes: ["Metin çıktılarını tırnak içine almayı unutup (#AD? hatası almak)"],
        successCriteria: "EĞER fonksiyonunu metinsel çıktı ile doğru sözdiziminde uygulamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["EĞER", "IF"],
        initialWorkbook: createTableSheet("s8_2", "EgerGirisSayfasi", ["Öğrenci", "Not", "Sonuç (Geçti / Kaldı)"], [["Ahmet", 65, ""], ["Mehmet", 45, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞER (IF) Fonksiyonunun Söz Dizimi ve Metinsel Çıktı",
                    "description": "Koşula bağlı olarak dinamik metin etiketleri basabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_2",
                    "title": "İki Yollu Kavşak",
                    "explanation": "=EĞER(B2>=50; 'Geçti'; 'Kaldı') formülü B2 hücresini test eder. Sayı 50 veya üzeriyse ekrana 'Geçti', değilse 'Kaldı' yazar. Metinler mutlaka çift tırnak içine alınmalıdır.",
                    "speechText": "=EĞER(B2>=50; 'Geçti'; 'Kaldı') formülü B2 hücresini test eder. Sayı 50 veya üzeriyse ekrana 'Geçti', değilse 'Kaldı' yazar. Metinler mutlaka çift tırnak içine alınmalıdır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t8_2_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine 50 ve üzeri için Geçti, altı için Kaldı yazan formülü kurun: =EĞER(B2>=50;\"Geçti\";\"Kaldı\")",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=EĞER(B2>=50;\"Geçti\";\"Kaldı\") formülünü yazın.",
                              "C2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! EĞER (IF) Fonksiyonunun Söz Dizimi ve Metinsel Çıktı görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞER(B2>=50;\"Geçti\";\"Kaldı\")"
                    }
          }
],
        quiz: {
          "id": "q8_2",
          "title": "EĞER (IF) Fonksiyonunun Söz Dizimi ve Metinsel Çıktı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_2_1",
                              "question": "EĞER fonksiyonunda formül sonucunda metin yazdırmak istiyorsak metin nasıl yazılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çift tırnak içinde (\"Metin\")"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tek tırnak içinde ('Metin')"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Parantez içinde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tırnaksız düz metin olarak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de metin dizeleri mutlaka çift tırnak (\"...\") içine alınmalıdır.",
                              "measuredSkill": "EĞER Mantığı ve Metinsel Çıktı"
                    }
          ]
}
      },
      {
        id: "sec8_l3",
        phaseId: 8,
        unitId: "u8_3",
        title: "EĞER ile Sayısal ve Finansal Hesaplama (Prim ve İskonto)",
        shortDesc: "Koşul sağlandığında ekrana yazı yazmak yerine matematiksel prim veya iskonto formülü çalıştırma.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Finansal EĞER",
        primaryGoal: "Satış kotasını aşan personele cironun %10'u kadar prim hesaplamak, aşamayana 0 vermek.",
        prerequisites: ["sec8_l2"],
        commonMistakes: ["Finansal hesaplamaları tırnak içine alıp sayıyı metne dönüştürmek (\"A2*0.10\" yazmak)"],
        successCriteria: "EĞER içinde formül ve hesaplama çalıştırabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["EĞER", "Prim Hesaplama"],
        initialWorkbook: createTableSheet("s8_3", "EgerFinansSayfasi", ["Temsilci", "Gerçekleşen Ciro", "Hedef Ciro", "Hak Edilen Prim"], [["Ali", 120000, 100000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞER ile Sayısal ve Finansal Hesaplama (Prim ve İskonto)",
                    "description": "Satış kotasını aşan personele cironun %10'u kadar prim hesaplamak, aşamayana 0 vermek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_3",
                    "title": "Şartlı Hesaplama Gücü",
                    "explanation": "=EĞER(B2>C2; B2*0.10; 0) formülü gerçekleşen satış hedeften büyükse cironun %10'unu anında hesaplar, değilse 0 üretir. Sayılar ve hesaplamalar tırnaksız yazılır.",
                    "speechText": "=EĞER(B2>C2; B2*0.10; 0) formülü gerçekleşen satış hedeften büyükse cironun %10'unu anında hesaplar, değilse 0 üretir. Sayılar ve hesaplamalar tırnaksız yazılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t8_3_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine kotayı aşana %10 prim veren formülü yazın: =EĞER(B2>C2;B2*0.10;0)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=EĞER(B2>C2;B2*0.10;0) formülünü yazın.",
                              "D2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! EĞER ile Sayısal ve Finansal Hesaplama (Prim ve İskonto) görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞER(B2>C2;B2*0.10;0)"
                    }
          }
],
        quiz: {
          "id": "q8_3",
          "title": "EĞER ile Sayısal ve Finansal Hesaplama (Prim ve İskonto) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_3_1",
                              "question": "=EĞER(A1>100; A1*2; A1) formülü A1 hücresinde 150 varken hangi sonucu verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "300"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "150"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "100"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "200"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "150 > 100 şartı DOĞRU olduğu için A1*2 çalışır: 150 * 2 = 300.",
                              "measuredSkill": "Koşullu Matematiksel Modelleme"
                    }
          ]
}
      },
      {
        id: "sec8_l4",
        phaseId: 8,
        unitId: "u8_4",
        title: "VE (AND) Fonksiyonu ile Çoklu Koşul Denetimi",
        shortDesc: "Tüm koşulların aynı anda DOĞRU olmasını zorunlu kılan mantıksal denetim fonksiyonu.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "VE",
        primaryGoal: "Hem yaş sınırı (>=18) hem sınav puanı (>=70) aynı anda sağlandığında onay vermek.",
        prerequisites: ["sec8_l1"],
        commonMistakes: ["Koşullardan biri sağlanmadığında bile sonucun DOĞRU çıkacağını sanmak"],
        successCriteria: "VE fonksiyonunun tüm koşulları denetleme kuralını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["VE", "AND"],
        initialWorkbook: createTableSheet("s8_4", "VeSayfasi", ["Aday", "Yaş", "Puan", "Kabul Testi"], [["Ahmet", 22, 85, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "VE (AND) Fonksiyonu ile Çoklu Koşul Denetimi",
                    "description": "Hem yaş sınırı (>=18) hem sınav puanı (>=70) aynı anda sağlandığında onay vermek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_4",
                    "title": "Tüm Şartlar Sağlanmalı",
                    "explanation": "=VE(B2>=18; C2>=70) formülü iki koşulu da inceler. İkisi de doğruysa 'DOĞRU', bir tanesi bile bozulursa 'YANLIŞ' sonucunu verir.",
                    "speechText": "=VE(B2>=18; C2>=70) formülü iki koşulu da inceler. İkisi de doğruysa 'DOĞRU', bir tanesi bile bozulursa 'YANLIŞ' sonucunu verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t8_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine iki şartı da test eden VE formülünü yazın: =VE(B2>=18;C2>=70)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=VE(B2>=18;C2>=70) formülünü yazın.",
                              "D2 hücresine =VE(B2>=18;C2>=70) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! VE (AND) Fonksiyonu ile Çoklu Koşul Denetimi görevini başarıyla tamamladınız.",
                              "expectedValue": "=VE(B2>=18;C2>=70)"
                    }
          }
],
        quiz: {
          "id": "q8_4",
          "title": "VE (AND) Fonksiyonu ile Çoklu Koşul Denetimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_4_1",
                              "question": "VE(DOĞRU; DOĞRU; YANLIŞ) formülünün nihai sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "YANLIŞ (Çünkü bir tane bile YANLIŞ olması sonucu bozar)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "DOĞRU"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boşluk"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "VE fonksiyonu içindeki tüm şartların eksiksiz DOĞRU olmasını zorunlu kılar.",
                              "measuredSkill": "VE Mantıksal Kesinlik"
                    }
          ]
}
      },
      {
        id: "sec8_l5",
        phaseId: 8,
        unitId: "u8_5",
        title: "YADA (OR) Fonksiyonu ile Alternatif Koşullar",
        shortDesc: "Belirtilen koşullardan en az bir tanesinin sağlanması durumunda DOĞRU üreten esnek fonksiyon.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "YADA",
        primaryGoal: "Müşterinin ya 'Gold Üye' olması ya da 'Harcama > 10.000 TL' olması durumunda kargo bedava yapmak.",
        prerequisites: ["sec8_l4"],
        commonMistakes: ["YADA fonksiyonunun çalışması için tüm koşulların doğru olması gerektiğini sanmak"],
        successCriteria: "YADA fonksiyonunun alternatif koşul mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["YADA", "OR"],
        initialWorkbook: createTableSheet("s8_5", "YadaSayfasi", ["Müşteri", "Üyelik Tipi", "Harcama", "Ayrıcalık Testi"], [["Mehmet", "Standart", 15000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "YADA (OR) Fonksiyonu ile Alternatif Koşullar",
                    "description": "Müşterinin ya 'Gold Üye' olması ya da 'Harcama > 10.000 TL' olması durumunda kargo bedava yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_5",
                    "title": "En Az Biri Yeterli",
                    "explanation": "=YADA(B2='Gold'; C2>10000) formülü çalışır. Üyelik Gold olmasa bile harcama 10.000'i geçtiği için şart sağlanır ve 'DOĞRU' sonucu döner.",
                    "speechText": "=YADA(B2='Gold'; C2>10000) formülü çalışır. Üyelik Gold olmasa bile harcama 10.000'i geçtiği için şart sağlanır ve 'DOĞRU' sonucu döner. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t8_5_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine alternatif koşulu test eden formülü yazın: =YADA(B2=\"Gold\";C2>10000)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=YADA(B2=\"Gold\";C2>10000) formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! YADA (OR) Fonksiyonu ile Alternatif Koşullar görevini başarıyla tamamladınız.",
                              "expectedValue": "=YADA(B2=\"Gold\";C2>10000)"
                    }
          }
],
        quiz: {
          "id": "q8_5",
          "title": "YADA (OR) Fonksiyonu ile Alternatif Koşullar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_5_1",
                              "question": "YADA(YANLIŞ; YANLIŞ; DOĞRU) formülünün sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "DOĞRU (Çünkü tek bir DOĞRU olması yeterlidir)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "YANLIŞ"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "0"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YADA fonksiyonunda tek bir koşulun bile sağlanması genel sonucu DOĞRU yapar.",
                              "measuredSkill": "Alternatif Mantıksal Esneklik"
                    }
          ]
}
      },
      {
        id: "sec8_l6",
        phaseId: 8,
        unitId: "u8_6",
        title: "EĞER ve VE Birlikteliği (Çift Kriterli Karar Matrisi)",
        shortDesc: "EĞER fonksiyonunun mantıksal test parametresine VE() fonksiyonunu gömerek çok şartlı karar üretme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Bileşik Mantık",
        primaryGoal: "Departmanı 'Satış' VE Satış Tutarı > 50.000 olanlara 'Başarılı' etiketi vermek.",
        prerequisites: ["sec8_l2", "sec8_l4"],
        commonMistakes: ["EĞER içine VE yazarken parantezleri birbirine karıştırmak"],
        successCriteria: "EĞER(VE(...)) formülünü hatasız kurabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["EĞER", "VE"],
        initialWorkbook: createTableSheet("s8_6", "EgerVeSayfasi", ["Personel", "Departman", "Satış Tutarı", "Değerlendirme"], [["Ahmet", "Satış", 60000, ""], ["Can", "Pazarlama", 75000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞER ve VE Birlikteliği (Çift Kriterli Karar Matrisi)",
                    "description": "Departmanı 'Satış' VE Satış Tutarı > 50.000 olanlara 'Başarılı' etiketi vermek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_6",
                    "title": "Kombine Karar Gücü",
                    "explanation": "=EĞER(VE(B2='Satış'; C2>50000); 'Başarılı'; 'Standart') formülü iki şart aynı anda sağlandığında 'Başarılı' yazar. Can Pazarlama departmanında olduğu için satışı yüksek olsa da 'Standart' kalır.",
                    "speechText": "=EĞER(VE(B2='Satış'; C2>50000); 'Başarılı'; 'Standart') formülü iki şart aynı anda sağlandığında 'Başarılı' yazar. Can Pazarlama departmanında olduğu için satışı yüksek olsa da 'Standart' kalır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t8_6_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine birleşik EĞER-VE formülünü yazın: =EĞER(VE(B2=\"Satış\";C2>50000);\"Başarılı\";\"Standart\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=EĞER(VE(B2=\"Satış\";C2>50000);\"Başarılı\";\"Standart\") formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! EĞER ve VE Birlikteliği (Çift Kriterli Karar Matrisi) görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞER(VE(B2=\"Satış\";C2>50000);\"Başarılı\";\"Standart\")"
                    }
          }
],
        quiz: {
          "id": "q8_6",
          "title": "EĞER ve VE Birlikteliği (Çift Kriterli Karar Matrisi) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_6_1",
                              "question": "=EĞER(VE(A1>10; B1<5); \"Onay\"; \"Red\") formülünde A1=15, B1=8 iken ekranda ne yazar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Red (Çünkü B1<5 şartı sağlanmamıştır)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Onay"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "DOĞRU"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "#DEĞER!"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "VE koşulunda B1<5 şartı YANLIŞ olduğu için EĞER fonksiyonunun yanlış parametresi (\"Red\") çalışır.",
                              "measuredSkill": "Bileşik Koşullu Karar Matrisi"
                    }
          ]
}
      },
      {
        id: "sec8_l7",
        phaseId: 8,
        unitId: "u8_7",
        title: "EĞER ve YADA Birlikteliği ile Esnek Şartlar",
        shortDesc: "EĞER'in testine YADA() fonksiyonunu gömerek koşullardan biri sağlandığında işlem yürütme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Bileşik Mantık",
        primaryGoal: "Müşteri ya 'İstanbul'da ise ya da 'Sipariş > 1.000 TL' ise 'Ücretsiz Kargo' tanımlamak.",
        prerequisites: ["sec8_l2", "sec8_l5"],
        commonMistakes: ["YADA parantezini EĞER bitmeden kapatmayı unutmak"],
        successCriteria: "EĞER(YADA(...)) formülünü hatasız uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["EĞER", "YADA"],
        initialWorkbook: createTableSheet("s8_7", "EgerYadaSayfasi", ["Müşteri", "Şehir", "Sipariş Tutarı", "Kargo Durumu"], [["Ali", "Ankara", 1500, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞER ve YADA Birlikteliği ile Esnek Şartlar",
                    "description": "Müşteri ya 'İstanbul'da ise ya da 'Sipariş > 1.000 TL' ise 'Ücretsiz Kargo' tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_7",
                    "title": "Esnek Avantaj Formülü",
                    "explanation": "=EĞER(YADA(B2='İstanbul'; C2>=1000); 'Ücretsiz Kargo'; 'Ücretli Kargo') formülü Ali Ankara'da olsa bile siparişi 1000 TL üzerinde olduğu için ücretsiz kargo kazanmasını sağlar.",
                    "speechText": "=EĞER(YADA(B2='İstanbul'; C2>=1000); 'Ücretsiz Kargo'; 'Ücretli Kargo') formülü Ali Ankara'da olsa bile siparişi 1000 TL üzerinde olduğu için ücretsiz kargo kazanmasını sağlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t8_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formülü yazın: =EĞER(YADA(B2=\"İstanbul\";C2>=1000);\"Ücretsiz Kargo\";\"Ücretli Kargo\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=EĞER(YADA(B2=\"İstanbul\";C2>=1000);\"Ücretsiz Kargo\";\"Ücretli Kargo\") formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! EĞER ve YADA Birlikteliği ile Esnek Şartlar görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞER(YADA(B2=\"İstanbul\";C2>=1000);\"Ücretsiz Kargo\";\"Ücretli Kargo\")"
                    }
          }
],
        quiz: {
          "id": "q8_7",
          "title": "EĞER ve YADA Birlikteliği ile Esnek Şartlar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_7_1",
                              "question": "=EĞER(YADA(A1=\"A\"; A1=\"B\"); 100; 0) formülünde A1=\"B\" ise sonuç ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "100"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "0"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "YANLIŞ"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YADA koşulu A1=\"B\" sayesinde DOĞRU olur ve 100 değeri üretilir.",
                              "measuredSkill": "Alternatifli Karar Ağacı Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec8_l8",
        phaseId: 8,
        unitId: "u8_8",
        title: "İç İçe (Nested) EĞER Fonksiyonları ile Kademeli Puanlama",
        shortDesc: "İkiden fazla sonuç ihtimali olduğunda EĞER'in yanlış kısmına yeni bir EĞER açarak kademe oluşturma.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "İç İçe EĞER",
        primaryGoal: "Not sisteminde 85 üzeri 'Pekiyi', 70 üzeri 'İyi', 50 üzeri 'Orta', altı 'Zayıf' skalasını kurmak.",
        prerequisites: ["sec8_l2"],
        commonMistakes: ["Büyükten küçüğe sıralamadan rastgele sırayla test yazıp kademelerin birbirini ezmesine yol açmak"],
        successCriteria: "Hiyerarşik iç içe EĞER mantığını kavramak.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["İç İçe EĞER", "Nested IF"],
        initialWorkbook: createTableSheet("s8_8", "IcicEgerSayfasi", ["Öğrenci", "Puan", "Harf Notu"], [["Zeynep", 88, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İç İçe (Nested) EĞER Fonksiyonları ile Kademeli Puanlama",
                    "description": "Not sisteminde 85 üzeri 'Pekiyi', 70 üzeri 'İyi', 50 üzeri 'Orta', altı 'Zayıf' skalasını kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_8",
                    "title": "Kademe Merdiveni",
                    "explanation": "=EĞER(B2>=85; 'A'; EĞER(B2>=70; 'B'; 'C')) formülü ilk test yanlış çıkarsa ikinci teste geçer. Sayı 88 olduğu için ilk kapıdan 'A' olarak çıkar.",
                    "speechText": "=EĞER(B2>=85; 'A'; EĞER(B2>=70; 'B'; 'C')) formülü ilk test yanlış çıkarsa ikinci teste geçer. Sayı 88 olduğu için ilk kapıdan 'A' olarak çıkar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t8_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine kademeli formülü yazın: =EĞER(B2>=85;\"A\";EĞER(B2>=70;\"B\";\"C\"))",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=EĞER(B2>=85;\"A\";EĞER(B2>=70;\"B\";\"C\")) formülünü yazın.",
                              "C2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! İç İçe (Nested) EĞER Fonksiyonları ile Kademeli Puanlama görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞER(B2>=85;\"A\";EĞER(B2>=70;\"B\";\"C\"))"
                    }
          }
],
        quiz: {
          "id": "q8_8",
          "title": "İç İçe (Nested) EĞER Fonksiyonları ile Kademeli Puanlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_8_1",
                              "question": "İç içe 3 adet EĞER fonksiyonu açıldığında formülün en sonunda kaç tane kapatma parantezi ')' olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "3 adet"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1 adet"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "2 adet"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Parantez gerekmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Her açılan parantez kapanmak zorundadır; 3 EĞER açıldıysa sonda 3 parantez kapatılır.",
                              "measuredSkill": "Hiyerarşik Çok Kademeli Mantık"
                    }
          ]
}
      },
      {
        id: "sec8_l9",
        phaseId: 8,
        unitId: "u8_9",
        title: "Modern ÇOKEĞER (IFS) ile Temiz ve Parantezsiz Sözdizimi",
        shortDesc: "İç içe onlarca EĞER ve parantez yığını yerine tek bir fonksiyonla çoklu şartları sırayla sınama.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "ÇOKEĞER",
        primaryGoal: "İç içe EĞER karmaşasını ortadan kaldırıp kurumsal standartta okunabilir kod yazmak.",
        prerequisites: ["sec8_l8"],
        commonMistakes: ["Eski Excel sürümlerinde ÇOKEĞER'in çalışmayacağını unutmak (Office 2019 / 365 gerektirir)"],
        successCriteria: "ÇOKEĞER fonksiyonunu doğru koşul-sonuç çiftleriyle uygulamak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ÇOKEĞER", "IFS"],
        initialWorkbook: createTableSheet("s8_9", "CokEgerSayfasi", ["Skor", "Seviye"], [[95, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Modern ÇOKEĞER (IFS) ile Temiz ve Parantezsiz Sözdizimi",
                    "description": "İç içe EĞER karmaşasını ortadan kaldırıp kurumsal standartta okunabilir kod yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_9",
                    "title": "Parantez Çilesine Son",
                    "explanation": "=ÇOKEĞER(Koşul1; Değer1; Koşul2; Değer2; Koşul3; Değer3..) şeklinde akar. =ÇOKEĞER(A2>=90; 'Uzman'; A2>=70; 'İleri'; DOĞRU; 'Temel') formülü tek hamlede sonucu üretir.",
                    "speechText": "=ÇOKEĞER(Koşul1; Değer1; Koşul2; Değer2; Koşul3; Değer3..) şeklinde akar. =ÇOKEĞER(A2>=90; 'Uzman'; A2>=70; 'İleri'; DOĞRU; 'Temel') formülü tek hamlede sonucu üretir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t8_9_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine ÇOKEĞER formülünü yazın: =ÇOKEĞER(A2>=90;\"Uzman\";A2>=70;\"İleri\";DOĞRU;\"Temel\")",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=ÇOKEĞER(A2>=90;\"Uzman\";A2>=70;\"İleri\";DOĞRU;\"Temel\") formülünü yazın.",
                              "B2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Modern ÇOKEĞER (IFS) ile Temiz ve Parantezsiz Sözdizimi görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKEĞER(A2>=90;\"Uzman\";A2>=70;\"İleri\";DOĞRU;\"Temel\")"
                    }
          }
],
        quiz: {
          "id": "q8_9",
          "title": "Modern ÇOKEĞER (IFS) ile Temiz ve Parantezsiz Sözdizimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_9_1",
                              "question": "ÇOKEĞER (IFS) fonksiyonunda hiçbir koşul sağlanmadığında çalışacak varsayılan (else) durum nasıl tanımlanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Son koşul yerine DOĞRU (TRUE) yazılarak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "YANLIŞ yazılarak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş bırakılarak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tanımlanamaz"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Son koşula DOĞRU yazıldığında önceki hiçbir şart tutmasa bile bu varsayılan değer devreye girer.",
                              "measuredSkill": "Modern ÇOKEĞER Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec8_l10",
        phaseId: 8,
        unitId: "u8_10",
        title: "EĞERHATA (IFERROR) ile Profesyonel Hata Maskeleme",
        shortDesc: "Formül #SIFIR/0!, #YOK veya #DEĞER! hatası ürettiğinde ekranda çirkin hata kodu yerine '0' veya 'Hesaplanamadı' gösterme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Hata Yönetimi",
        primaryGoal: "Yöneticiye sunulan tablolarda #DEĞER! gibi hataların görünmesini engelleyip temiz dashboard sunmak.",
        prerequisites: ["sec6_l10"],
        commonMistakes: ["EĞERHATA'yı formülün sonuna yazmaya çalışmak (EĞERHATA en dışa yazılır)"],
        successCriteria: "EĞERHATA fonksiyonunu mevcut formüllerin dışına sarabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["EĞERHATA", "IFERROR"],
        initialWorkbook: createTableSheet("s8_10", "EgerHataSayfasi", ["Toplam Maliyet", "Üretim Adedi", "Birim Maliyet"], [[50000, 0, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞERHATA (IFERROR) ile Profesyonel Hata Maskeleme",
                    "description": "Yöneticiye sunulan tablolarda #DEĞER! gibi hataların görünmesini engelleyip temiz dashboard sunmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_10",
                    "title": "Hata Savar Zırh",
                    "explanation": "50.000 / 0 işlemi normalde #SIFIR/0! hatası verir. =EĞERHATA(A2/B2; 0) yazıldığında işlem hata verirse formül çökmez, ekrana zarifçe 0 sayısını yazar.",
                    "speechText": "50.000 / 0 işlemi normalde #SIFIR/0! hatası verir. =EĞERHATA(A2/B2; 0) yazıldığında işlem hata verirse formül çökmez, ekrana zarifçe 0 sayısını yazar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t8_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine hatasız birim maliyet formülünü yazın: =EĞERHATA(A2/B2;0)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=EĞERHATA(A2/B2;0) formülünü yazın.",
                              "C2 hücresine =EĞERHATA(A2/B2;0) yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! EĞERHATA (IFERROR) ile Profesyonel Hata Maskeleme görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞERHATA(A2/B2;0)"
                    }
          }
],
        quiz: {
          "id": "q8_10",
          "title": "EĞERHATA (IFERROR) ile Profesyonel Hata Maskeleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_10_1",
                              "question": "EĞERHATA(İşlem; HataDurumundaDeğer) fonksiyonunda birinci parametredeki işlem hatasız çalışırsa ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İşlemin kendi normal doğru sonucu görüntülenir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata durumundaki değer görüntülenir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sıfır yazar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata verir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hata yoksa EĞERHATA devreye girmez, işlemin kendi doğal sonucu ekrana gelir.",
                              "measuredSkill": "Hata Maskeleme ve Kurumsal Rapor Temizliği"
                    }
          ]
}
      },
      {
        id: "sec8_l11",
        phaseId: 8,
        unitId: "u8_11",
        title: "EĞERYOK (IFNA) ile Yalnızca #YOK Hatalarını Yakalama",
        shortDesc: "Matematiksel hataları gizlemeden, yalnızca DÜŞEYARA ve ÇAPRAZARA'da aranan değer bulunamadığında (#YOK) devreye girme.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Hedefli Hata Yönetimi",
        primaryGoal: "Formüldeki gerçek yazım hatalarını kaçırmadan sadece bulunamayan kayıtları yönetmek.",
        prerequisites: ["sec8_l10"],
        commonMistakes: ["EĞERHATA kullanıp formüldeki gerçek yazım hatalarını (#AD?) da maskeleyerek hatayı gözden kaçırmak"],
        successCriteria: "EĞERYOK fonksiyonunun hedefli hata yönetimi prensibini kavramak.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["EĞERYOK", "IFNA"],
        initialWorkbook: createTableSheet("s8_11", "EgerYokSayfasi", ["Aranan Değer", "Arama Durumu"], [["Kayıt999", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞERYOK (IFNA) ile Yalnızca #YOK Hatalarını Yakalama",
                    "description": "Formüldeki gerçek yazım hatalarını kaçırmadan sadece bulunamayan kayıtları yönetmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_11",
                    "title": "Hassas Hata Filtresi",
                    "explanation": "EĞERHATA tüm hataları (formül yanlış yazılsa bile) yutar. =EĞERYOK(İşlem; 'Kayıt Yok') ise sadece ve sadece #YOK hatasında devreye girer; böylece diğer teknik hataları gizlemez.",
                    "speechText": "EĞERHATA tüm hataları (formül yanlış yazılsa bile) yutar. =EĞERYOK(İşlem; 'Kayıt Yok') ise sadece ve sadece #YOK hatasında devreye girer; böylece diğer teknik hataları gizlemez. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t8_11_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine aranan durum için 'Bulunamadı' mesajı veren EĞERYOK mantığını onaylayan metni 'EĞERYOK' olarak yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "'EĞERYOK' yazın.",
                              "B2 hücresine 'EĞERYOK' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! EĞERYOK (IFNA) ile Yalnızca #YOK Hatalarını Yakalama görevini başarıyla tamamladınız.",
                              "expectedValue": "EĞERYOK"
                    }
          }
],
        quiz: {
          "id": "q8_11",
          "title": "EĞERYOK (IFNA) ile Yalnızca #YOK Hatalarını Yakalama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_11_1",
                              "question": "EĞERYOK (IFNA) fonksiyonunun EĞERHATA'dan farkı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca #YOK (#N/A) hatasını maskeler, #DEĞER! veya #SIFIR/0! gibi diğer hatalara dokunmaz"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm hataları siler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hiçbir hatayı yakalayamaz"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca sayıları toplar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "EĞERYOK sadece eşleşme bulunamadı hatasını hedefler, teknik formül hatalarını gizlemez.",
                              "measuredSkill": "Hassas Hata Tespiti ve Arama Güvenliği"
                    }
          ]
}
      },
      {
        id: "sec8_l12",
        phaseId: 8,
        unitId: "u8_12",
        title: "DOĞRU ve YANLIŞ'ın 1 ve 0 Karşılığı (Boole Cebri)",
        shortDesc: "Excel'de DOĞRU mantıksal değerinin 1, YANLIŞ değerinin 0 sayısına eşit olması ve formülsüz koşullu toplama gücü.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Boole Cebri",
        primaryGoal: "EĞER fonksiyonuna ihtiyaç duymadan (A1>50)*100 şeklinde tek satırda formül üretmek.",
        prerequisites: ["sec8_l1"],
        commonMistakes: ["DOĞRU ve YANLIŞ'ın matematiksel bir işlemde doğrudan 1 ve 0 olduğunu bilmemek"],
        successCriteria: "Boole cebri mantığını Excel formüllerinde uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Boole Cebri", "1 ve 0"],
        initialWorkbook: createTableSheet("s8_12", "BooleSayfasi", ["Koşul", "Boole Sonucu", "Matematiksel Karşılığı"], [["5 > 2", "DOĞRU", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DOĞRU ve YANLIŞ'ın 1 ve 0 Karşılığı (Boole Cebri)",
                    "description": "EĞER fonksiyonuna ihtiyaç duymadan (A1>50)*100 şeklinde tek satırda formül üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_12",
                    "title": "Matematiksel Mantık",
                    "explanation": "Excel'de =(5>2)*1 işlemi yaparsanız sonuç doğrudan 1 çıkar. Çünkü DOĞRU = 1 ve YANLIŞ = 0'dır. Bu mantık ileri Excel'de ve Dinamik Dizilerde (FİLTRE/TOPLA.ÇARPIM) temel oluşturur.",
                    "speechText": "Excel'de =(5>2)*1 işlemi yaparsanız sonuç doğrudan 1 çıkar. Çünkü DOĞRU = 1 ve YANLIŞ = 0'dır. Bu mantık ileri Excel'de ve Dinamik Dizilerde (FİLTRE/TOPLA.ÇARPIM) temel oluşturur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t8_12_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine DOĞRU değerinin 1 ile çarpımını alan formülü yazın: =(A2=\"DOĞRU\")*1 veya doğrudan 1 yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "1 sayısını yazın.",
                              "C2 hücresine 1 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! DOĞRU ve YANLIŞ'ın 1 ve 0 Karşılığı (Boole Cebri) görevini başarıyla tamamladınız.",
                              "expectedValue": 1
                    }
          }
],
        quiz: {
          "id": "q8_12",
          "title": "DOĞRU ve YANLIŞ'ın 1 ve 0 Karşılığı (Boole Cebri) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_12_1",
                              "question": "Excel'de bir mantıksal testin ürettiği DOĞRU değeri bir matematiksel işleme (+ veya *) girdiğinde hangi sayıya dönüşür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "0"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "-1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata verir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de DOĞRU = 1, YANLIŞ = 0 sayısal değerine otomatik dönüşür.",
                              "measuredSkill": "Boole Cebri ve Mantıksal Dönüşüm"
                    }
          ]
}
      },
      {
        id: "sec8_l13",
        phaseId: 8,
        unitId: "u8_13",
        title: "Bölüm 8 Mantıksal Fonksiyonlar Final Sınavı",
        shortDesc: "Operatörler, EĞER, VE, YADA, iç içe EĞER, ÇOKEĞER ve EĞERHATA kapsamlı yetkinlik sınavı.",
        category: "Mantıksal Fonksiyonlar",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "8. Bölümün tüm karar mekanizmaları ve mantıksal ağaç kazanımlarını tam başarıyla kanıtlamak.",
        prerequisites: ["sec8_l2", "sec8_l6", "sec8_l9", "sec8_l10"],
        commonMistakes: ["Koşul operatörlerini karıştırmak"],
        successCriteria: "Bölüm 8 değerlendirme testini tam puanla geçmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s8_13", "Bolum8Final", ["Karar Mekanizması", "Durum"], [["Temel ve Finansal EĞER", "Kazanıldı"], ["VE / YADA / ÇOKEĞER", "Kazanıldı"], ["EĞERHATA ve Hata Savunması", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 8 Mantıksal Fonksiyonlar Final Sınavı",
                    "description": "8. Bölümün tüm karar mekanizmaları ve mantıksal ağaç kazanımlarını tam başarıyla kanıtlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts8_13",
                    "title": "Karar Mimarisi Büyük Ustası",
                    "explanation": "Tebrikler! Excel'in en kritik karar motoru olan mantıksal fonksiyonları ve hata yönetimini eksiksiz öğrendiniz. Artık koşullu hesaplamalar ve kriter fonksiyonları (ETOPLA, ÇOKETOPLA, EĞERSAY) dünyasına geçiyoruz.",
                    "speechText": "Tebrikler! Excel'in en kritik karar motoru olan mantıksal fonksiyonları ve hata yönetimini eksiksiz öğrendiniz. Artık koşullu hesaplamalar ve kriter fonksiyonları (ETOPLA, ÇOKETOPLA, EĞERSAY) dünyasına geçiyoruz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t8_13_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 8 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 8 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 8 Mantıksal Fonksiyonlar Final Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 8 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q8_13",
          "title": "Bölüm 8 Mantıksal Fonksiyonlar Final Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_8_13_1",
                              "question": "Birden fazla koşulun hepsinin aynı anda sağlanmasını zorunlu kılan mantıksal fonksiyon hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "VE (AND)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "YADA (OR)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "EĞERHATA (IFERROR)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "DEĞİL (NOT)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "VE fonksiyonu tüm koşulların DOĞRU olmasını şart koşar.",
                              "measuredSkill": "Bölüm 8 Genel Mantıksal Karar Yetkinliği"
                    }
          ]
}
      }
    ]
  },
  {
    id: 9,
    category: "Koşullu Hesaplamalar",
    title: "9. Koşullu Hesaplamalar ve Kriter Fonksiyonları",
    subtitle: "ETOPLA, ÇOKETOPLA, EĞERSAY, ÇOKEĞERSAY, ORTALAMAETOPLA ve Joker Kriterler",
    iconName: "Sigma",
    description: "Tek ve çok kriterli toplamlar (ETOPLA vs ÇOKETOPLA), kriter koşullu sayımlar (EĞERSAY vs ÇOKEĞERSAY), koşullu ortalamalar (ÇOKORTALAMAETOPLA), joker karakterli (*, ?) süzgeçler ve dinamik hücre bağlantıları.",
    lessons: [
      {
        id: "sec9_l1",
        phaseId: 9,
        unitId: "u9_1",
        title: "ETOPLA (SUMIF) ile Tek Koşula Göre Toplam Alma",
        shortDesc: "Belirli bir kategoriye veya şehre ait satırların toplamını tek fonksiyonla hesaplama.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "ETOPLA",
        primaryGoal: "Filtreleme yapmadan tablodan yalnızca 'Elektronik' ürünlerinin cirosunu çekebilmek.",
        prerequisites: ["sec8_l13"],
        commonMistakes: ["ETOPLA ile ÇOKETOPLA'nın argüman sıralamasını karıştırmak (ETOPLA'da toplam aralığı sondadır)"],
        successCriteria: "ETOPLA fonksiyonunu doğru parametre sırasıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["ETOPLA", "SUMIF"],
        initialWorkbook: createTableSheet("s9_1", "EtoplaSayfasi", ["Kategori", "Satış Tutarı", "Hedef Kategori", "Toplamı"], [["Gıda", 100, "Gıda", ""], ["Elektronik", 250, "", ""], ["Gıda", 150, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ETOPLA (SUMIF) ile Tek Koşula Göre Toplam Alma",
                    "description": "Filtreleme yapmadan tablodan yalnızca 'Elektronik' ürünlerinin cirosunu çekebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_1",
                    "title": "Şartlı Toplama Mantığı",
                    "explanation": "=ETOPLA(Aralık; Ölçüt; [ToplamAralığı]) şeklinde çalışır. =ETOPLA(A2:A4; 'Gıda'; B2:B4) formülü A sütununda 'Gıda' yazanları bulur ve karşılık gelen B sütunundaki 100 ve 150'yi toplayıp 250 verir.",
                    "speechText": "=ETOPLA(Aralık; Ölçüt; [ToplamAralığı]) şeklinde çalışır. =ETOPLA(A2:A4; 'Gıda'; B2:B4) formülü A sütununda 'Gıda' yazanları bulur ve karşılık gelen B sütunundaki 100 ve 150'yi toplayıp 250 verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t9_1_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine Gıda kategorisinin toplamını alan formülü yazın: =ETOPLA(A2:A4;\"Gıda\";B2:B4)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=ETOPLA(A2:A4;\"Gıda\";B2:B4) formülünü yazın.",
                              "D2 hücresine =ETOPLA(A2:A4;\"Gıda\";B2:B4) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! ETOPLA (SUMIF) ile Tek Koşula Göre Toplam Alma görevini başarıyla tamamladınız.",
                              "expectedValue": "=ETOPLA(A2:A4;\"Gıda\";B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q9_1",
          "title": "ETOPLA (SUMIF) ile Tek Koşula Göre Toplam Alma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_1_1",
                              "question": "ETOPLA (SUMIF) fonksiyonunun 3. parametresi olan [toplam_aralığı] neyi ifade eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kriter sağlandığında fiilen toplanacak sayıların bulunduğu sütunu"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Kriterin arandığı sütunu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata mesajını"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih sütununu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "3. argüman şart tuttuğunda toplanacak sayısal hücre aralığıdır.",
                              "measuredSkill": "Tek Kriterli Koşullu Toplama Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec9_l2",
        phaseId: 9,
        unitId: "u9_2",
        title: "ETOPLA ile Büyüktür/Küçüktür Mantıksal Kriterli Toplama",
        shortDesc: "Yalnızca belirli bir tutarın üzerindeki (örneğin 10.000 TL'den büyük) faturaların toplamını alma.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "Mantıksal ETOPLA",
        primaryGoal: "Küçük perakende satışları dışlayıp büyük kurumsal satışları toplamak.",
        prerequisites: ["sec9_l1"],
        commonMistakes: ["\">10000\" kriterini tırnaksız yazıp formül hatası almak"],
        successCriteria: "ETOPLA'da mantıksal operatörlü kriterleri tırnak içinde doğru kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ETOPLA", "> Kriteri"],
        initialWorkbook: createTableSheet("s9_2", "MantikEtoplaSayfasi", ["Fatura Tutarı", "500 Üzeri Toplam"], [[200, ""], [600, ""], [800, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ETOPLA ile Büyüktür/Küçüktür Mantıksal Kriterli Toplama",
                    "description": "Küçük perakende satışları dışlayıp büyük kurumsal satışları toplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_2",
                    "title": "Sayısal Eşik Toplamı",
                    "explanation": "=ETOPLA(A2:A4; '>500') formülünde ölçüt aralığı ile toplam aralığı aynı olduğunda 3. parametre yazılmaz. Excel 500'den büyük olan 600 ve 800'ü toplayıp 1400 üretir.",
                    "speechText": "=ETOPLA(A2:A4; '>500') formülünde ölçüt aralığı ile toplam aralığı aynı olduğunda 3. parametre yazılmaz. Excel 500'den büyük olan 600 ve 800'ü toplayıp 1400 üretir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t9_2_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine 500'den büyük faturaları toplayan formülü yazın: =ETOPLA(A2:A4;\">500\")",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=ETOPLA(A2:A4;\">500\") formülünü yazın.",
                              "B2 hücresine =ETOPLA(A2:A4;\">500\") yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! ETOPLA ile Büyüktür/Küçüktür Mantıksal Kriterli Toplama görevini başarıyla tamamladınız.",
                              "expectedValue": "=ETOPLA(A2:A4;\">500\")"
                    }
          }
],
        quiz: {
          "id": "q9_2",
          "title": "ETOPLA ile Büyüktür/Küçüktür Mantıksal Kriterli Toplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_2_1",
                              "question": "ETOPLA fonksiyonunda 1000'den büyük değerleri kriter olarak vermek için nasıl yazılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "\">1000\" (Tırnak içinde büyüktür işaretiyle)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ">1000 (Tırnaksız)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "1000>"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "[>1000]"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel kriter fonksiyonlarında karşılaştırma operatörleri çift tırnak içine alınmalıdır.",
                              "measuredSkill": "Eşik Değerli Koşullu Toplama"
                    }
          ]
}
      },
      {
        id: "sec9_l3",
        phaseId: 9,
        unitId: "u9_3",
        title: "ÇOKETOPLA (SUMIFS) Sözdizimi: Toplam Aralığı Kuralı",
        shortDesc: "Birden fazla kriteri denetlerken ÇOKETOPLA'da toplanacak sütunun EN BAŞA yazılması zorunluluğu.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "ÇOKETOPLA Mimarisi",
        primaryGoal: "ETOPLA alışkanlığıyla toplam aralığını sona yazma hatasını tamamen bitirmek.",
        prerequisites: ["sec9_l1"],
        commonMistakes: ["ÇOKETOPLA yazarken toplam aralığını ETOPLA gibi en sona yazıp hatalı sonuç almak"],
        successCriteria: "ÇOKETOPLA parametre hiyerarşisini kavramak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ÇOKETOPLA", "SUMIFS"],
        initialWorkbook: createTableSheet("s9_3", "CokEtoplaMimarisi", ["Kriter Bölge", "Kriter Yıl", "Satış Tutarı", "Marmara & 2024 Toplamı"], [["Marmara", 2024, 50000, ""], ["Ege", 2024, 30000, ""], ["Marmara", 2023, 20000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇOKETOPLA (SUMIFS) Sözdizimi: Toplam Aralığı Kuralı",
                    "description": "ETOPLA alışkanlığıyla toplam aralığını sona yazma hatasını tamamen bitirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_3",
                    "title": "Toplam Aralığı Başa Gelir",
                    "explanation": "ÇOKETOPLA(ToplamAralığı; KriterAralığı1; Kriter1; KriterAralığı2; Kriter2..) şeklinde kurulur. En başa toplanacak sütun (C2:C4) konur; ardından sırasıyla Bölge ve Yıl kriterleri eklenir.",
                    "speechText": "ÇOKETOPLA(ToplamAralığı; KriterAralığı1; Kriter1; KriterAralığı2; Kriter2..) şeklinde kurulur. En başa toplanacak sütun (C2:C4) konur; ardından sırasıyla Bölge ve Yıl kriterleri eklenir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t9_3_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formülü kurun: =ÇOKETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;2024)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=ÇOKETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;2024) formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! ÇOKETOPLA (SUMIFS) Sözdizimi: Toplam Aralığı Kuralı görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;2024)"
                    }
          }
],
        quiz: {
          "id": "q9_3",
          "title": "ÇOKETOPLA (SUMIFS) Sözdizimi: Toplam Aralığı Kuralı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_3_1",
                              "question": "ÇOKETOPLA (SUMIFS) fonksiyonunun ilk parametresi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Toplanacak sayıların bulunduğu aralık (Toplam Aralığı)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1. Kriter"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tablo adı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "ÇOKETOPLA'da toplanacak sütun daima en başta yer alır.",
                              "measuredSkill": "Çok Kriterli Toplama Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec9_l4",
        phaseId: 9,
        unitId: "u9_4",
        title: "ÇOKETOPLA ile Çoklu Kriter: Bölge, Ürün ve Tarih Aralığı",
        shortDesc: "İki tarih arasındaki ve belirli bir bölgedeki satışları çoklu kriterle toplama.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "İleri ÇOKETOPLA",
        primaryGoal: "Finansal çeyrek ve dönem raporlarını dinamik ÇOKETOPLA formülleriyle bağlamak.",
        prerequisites: ["sec9_l3"],
        commonMistakes: ["Tarih aralığı verirken \">=01.01.2024\" ve \"<=31.01.2024\" şeklinde iki ayrı kriter olarak tanımlamayı unutmak"],
        successCriteria: "Dönemsel çok kriterli toplamları başarıyla alabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["ÇOKETOPLA"],
        initialWorkbook: createTableSheet("s9_4", "DonemToplaSayfasi", ["Tarih", "Şube", "Tutar", "Ocak Ayı Kadıköy Toplamı"], [["15.01.2024", "Kadıköy", 10000, ""], ["20.01.2024", "Beşiktaş", 15000, ""], ["05.02.2024", "Kadıköy", 20000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇOKETOPLA ile Çoklu Kriter: Bölge, Ürün ve Tarih Aralığı",
                    "description": "Finansal çeyrek ve dönem raporlarını dinamik ÇOKETOPLA formülleriyle bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_4",
                    "title": "Tarih ve Şube Filtresi",
                    "explanation": "ÇOKETOPLA(C2:C4; B2:B4; 'Kadıköy'; A2:A4; '<=31.01.2024') formülü hem şubesi Kadıköy olan hem de tarihi Ocak sonundan küçük olan 10.000 TL'yi süzer.",
                    "speechText": "ÇOKETOPLA(C2:C4; B2:B4; 'Kadıköy'; A2:A4; '<=31.01.2024') formülü hem şubesi Kadıköy olan hem de tarihi Ocak sonundan küçük olan 10.000 TL'yi süzer. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t9_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formülü yazın: =ÇOKETOPLA(C2:C4;B2:B4;\"Kadıköy\";A2:A4;\"<=31.01.2024\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=ÇOKETOPLA(C2:C4;B2:B4;\"Kadıköy\";A2:A4;\"<=31.01.2024\") formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! ÇOKETOPLA ile Çoklu Kriter: Bölge, Ürün ve Tarih Aralığı görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKETOPLA(C2:C4;B2:B4;\"Kadıköy\";A2:A4;\"<=31.01.2024\")"
                    }
          }
],
        quiz: {
          "id": "q9_4",
          "title": "ÇOKETOPLA ile Çoklu Kriter: Bölge, Ürün ve Tarih Aralığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_4_1",
                              "question": "Belirli bir ay aralığındaki verileri ÇOKETOPLA ile toplamak için tarih kriteri kaç kez yazılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "2 kez (biri başlangıçtan büyük eşit \">=\", diğeri bitişten küçük eşit \"<=\")"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1 kez"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "4 kez"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazılamaz"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Tarih aralığı iki sınır gerektirdiğinden iki ayrı kriter çifti olarak tanımlanır.",
                              "measuredSkill": "Zaman ve Lokasyon Odaklı Çoklu Toplama"
                    }
          ]
}
      },
      {
        id: "sec9_l5",
        phaseId: 9,
        unitId: "u9_5",
        title: "EĞERSAY (COUNTIF) ile Koşula Uyan Kayıtları Sayma",
        shortDesc: "Tabloda belirli bir kritere uyan (örneğin 'İstanbul' veya '>100') kaç satır olduğunu sayma.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "EĞERSAY",
        primaryGoal: "Ankara şubesine ait kaç adet işlem yapıldığını anında saydırmak.",
        prerequisites: ["sec9_l1"],
        commonMistakes: ["EĞERSAY yerine SAY yazıp koşul vermeyi unutmak"],
        successCriteria: "EĞERSAY fonksiyonunu doğru aralık ve ölçütle uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["EĞERSAY", "COUNTIF"],
        initialWorkbook: createTableSheet("s9_5", "EgersaySayfasi", ["Şehir", "Sipariş No", "İstanbul Sipariş Adedi"], [["İstanbul", 101, ""], ["Ankara", 102, ""], ["İstanbul", 103, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "EĞERSAY (COUNTIF) ile Koşula Uyan Kayıtları Sayma",
                    "description": "Ankara şubesine ait kaç adet işlem yapıldığını anında saydırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_5",
                    "title": "Koşullu Sayaç",
                    "explanation": "=EĞERSAY(Aralık; Ölçüt) şeklinde çalışır. =EĞERSAY(A2:A4; 'İstanbul') formülü A2:A4 sütununda kaç tane 'İstanbul' olduğunu sayar ve ekrana 2 yazar.",
                    "speechText": "=EĞERSAY(Aralık; Ölçüt) şeklinde çalışır. =EĞERSAY(A2:A4; 'İstanbul') formülü A2:A4 sütununda kaç tane 'İstanbul' olduğunu sayar ve ekrana 2 yazar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t9_5_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine İstanbul sipariş adedini sayan formülü yazın: =EĞERSAY(A2:A4;\"İstanbul\")",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=EĞERSAY(A2:A4;\"İstanbul\") formülünü yazın.",
                              "C2 hücresine =EĞERSAY(A2:A4;\"İstanbul\") formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! EĞERSAY (COUNTIF) ile Koşula Uyan Kayıtları Sayma görevini başarıyla tamamladınız.",
                              "expectedValue": "=EĞERSAY(A2:A4;\"İstanbul\")"
                    }
          }
],
        quiz: {
          "id": "q9_5",
          "title": "EĞERSAY (COUNTIF) ile Koşula Uyan Kayıtları Sayma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_5_1",
                              "question": "EĞERSAY fonksiyonunun döndürdüğü sonuç nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Belirtilen koşulu sağlayan hücrelerin toplam adedi (satır sayısı)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücrelerdeki sayıların toplamı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ortalama değer"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "EĞERSAY toplama yapmaz; şarta uyan hücrelerin frekansını/adedini sayar.",
                              "measuredSkill": "Tek Kriterli Frekans ve Adet Sayımı"
                    }
          ]
}
      },
      {
        id: "sec9_l6",
        phaseId: 9,
        unitId: "u9_6",
        title: "ÇOKEĞERSAY (COUNTIFS) ile Çok Kriterli Kayıt Sayımı",
        shortDesc: "Birden fazla koşulu aynı anda sağlayan satırların frekansını sayma.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "ÇOKEĞERSAY",
        primaryGoal: "Marmara bölgesinde cirosu 50.000 TL'nin üzerinde olan kaç temsilci olduğunu bulmak.",
        prerequisites: ["sec9_l5"],
        commonMistakes: ["ÇOKEĞERSAY'a toplam aralığı vermeye çalışmak (ÇOKEĞERSAY sadece aralık ve kriter çiftleri alır)"],
        successCriteria: "ÇOKEĞERSAY fonksiyonunu çoklu kriter çiftleriyle kurabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ÇOKEĞERSAY", "COUNTIFS"],
        initialWorkbook: createTableSheet("s9_6", "CokEgersaySayfasi", ["Bölge", "Ciro", "Marmara & >40bin Kişi Sayısı"], [["Marmara", 50000, ""], ["Ege", 60000, ""], ["Marmara", 30000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇOKEĞERSAY (COUNTIFS) ile Çok Kriterli Kayıt Sayımı",
                    "description": "Marmara bölgesinde cirosu 50.000 TL'nin üzerinde olan kaç temsilci olduğunu bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_6",
                    "title": "Çok Boyutlu Sayaç",
                    "explanation": "=ÇOKEĞERSAY(Aralık1; Kriter1; Aralık2; Kriter2..) formülü çalışır. =ÇOKEĞERSAY(A2:A4; 'Marmara'; B2:B4; '>40000') iki şartı da sağlayan tek satırı bulur ve 1 sonucunu verir.",
                    "speechText": "=ÇOKEĞERSAY(Aralık1; Kriter1; Aralık2; Kriter2..) formülü çalışır. =ÇOKEĞERSAY(A2:A4; 'Marmara'; B2:B4; '>40000') iki şartı da sağlayan tek satırı bulur ve 1 sonucunu verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t9_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine formülü yazın: =ÇOKEĞERSAY(A2:A4;\"Marmara\";B2:B4;\">40000\")",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=ÇOKEĞERSAY(A2:A4;\"Marmara\";B2:B4;\">40000\") formülünü yazın.",
                              "C2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! ÇOKEĞERSAY (COUNTIFS) ile Çok Kriterli Kayıt Sayımı görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKEĞERSAY(A2:A4;\"Marmara\";B2:B4;\">40000\")"
                    }
          }
],
        quiz: {
          "id": "q9_6",
          "title": "ÇOKEĞERSAY (COUNTIFS) ile Çok Kriterli Kayıt Sayımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_6_1",
                              "question": "ÇOKEĞERSAY fonksiyonunda kaç adet kriter aralığı tanımlanabilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "127 çifte kadar çok sayıda kriter tanımlanabilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En fazla 2"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "En fazla 1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sınırsızdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'in modern çoklu fonksiyonları 127 aralık-kriter çiftine kadar destekler.",
                              "measuredSkill": "Çok Kriterli Sayım Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec9_l7",
        phaseId: 9,
        unitId: "u9_7",
        title: "ORTALAMAETOPLA (AVERAGEIF) ile Tek Koşula Göre Ortalama",
        shortDesc: "Belirli bir departmanın veya ürünün ortalama satış tutarını hesaplama.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "ORTALAMAETOPLA",
        primaryGoal: "Tüm şirketin değil, yalnızca 'Yazılım' departmanının maaş ortalamasını bulmak.",
        prerequisites: ["sec7_l2", "sec9_l1"],
        commonMistakes: ["ETOPLA ile toplayıp EĞERSAY ile bölmeye çalışarak formülü uzatmak"],
        successCriteria: "ORTALAMAETOPLA fonksiyonunu tek adımda uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ORTALAMAETOPLA"],
        initialWorkbook: createTableSheet("s9_7", "OrtalamaEtoplaSayfasi", ["Departman", "Maaş", "Yazılım Maaş Ortalaması"], [["Yazılım", 40000, ""], ["Satış", 30000, ""], ["Yazılım", 50000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ORTALAMAETOPLA (AVERAGEIF) ile Tek Koşula Göre Ortalama",
                    "description": "Tüm şirketin değil, yalnızca 'Yazılım' departmanının maaş ortalamasını bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_7",
                    "title": "Koşullu Ortalama",
                    "explanation": "=ORTALAMAETOPLA(A2:A4; 'Yazılım'; B2:B4) formülü Yazılım personelini bulur ve maaşlarının ortalamasını (45.000) tek adımda hesaplar.",
                    "speechText": "=ORTALAMAETOPLA(A2:A4; 'Yazılım'; B2:B4) formülü Yazılım personelini bulur ve maaşlarının ortalamasını (45.000) tek adımda hesaplar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t9_7_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine formülü yazın: =ORTALAMAETOPLA(A2:A4;\"Yazılım\";B2:B4)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=ORTALAMAETOPLA(A2:A4;\"Yazılım\";B2:B4) formülünü yazın.",
                              "C2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! ORTALAMAETOPLA (AVERAGEIF) ile Tek Koşula Göre Ortalama görevini başarıyla tamamladınız.",
                              "expectedValue": "=ORTALAMAETOPLA(A2:A4;\"Yazılım\";B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q9_7",
          "title": "ORTALAMAETOPLA (AVERAGEIF) ile Tek Koşula Göre Ortalama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_7_1",
                              "question": "ORTALAMAETOPLA fonksiyonunun yaptığı temel işlem nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Belirtilen koşula uyan hücrelerin aritmetik ortalamasını almak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm sütunu toplamak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "En büyük sayıyı bulmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kayıtları saymak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Koşulu sağlayan hücreleri tespit eder ve yalnızca onların ortalamasını üretir.",
                              "measuredSkill": "Koşullu Aritmetik Ortalama"
                    }
          ]
}
      },
      {
        id: "sec9_l8",
        phaseId: 9,
        unitId: "u9_8",
        title: "ÇOKORTALAMAETOPLA (AVERAGEIFS) ile Çok Kriterli Ortalama",
        shortDesc: "Birden fazla kriteri sağlayan kayıtların ortalamasını alma (Ortalama aralığı en baştadır).",
        category: "Koşullu Hesaplamalar",
        groupTitle: "ÇOKORTALAMAETOPLA",
        primaryGoal: "Marmara bölgesindeki kıdemli personelin ortalama primini tespit etmek.",
        prerequisites: ["sec9_l7", "sec9_l3"],
        commonMistakes: ["Ortalama aralığını en başa koymayı unutmak"],
        successCriteria: "ÇOKORTALAMAETOPLA fonksiyonunu başarıyla uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["ÇOKORTALAMAETOPLA"],
        initialWorkbook: createTableSheet("s9_8", "CokOrtalamaSayfasi", ["Bölge", "Unvan", "Prim", "Marmara & Uzman Prim Ort."], [["Marmara", "Uzman", 6000, ""], ["Ege", "Uzman", 5000, ""], ["Marmara", "Uzman", 8000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇOKORTALAMAETOPLA (AVERAGEIFS) ile Çok Kriterli Ortalama",
                    "description": "Marmara bölgesindeki kıdemli personelin ortalama primini tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_8",
                    "title": "Çok Kriterli Ortalama Hesabı",
                    "explanation": "=ÇOKORTALAMAETOPLA(PrimAralığı; BölgeAralığı; 'Marmara'; UnvanAralığı; 'Uzman') formülü iki Marmara Uzmanının primini (6000 ve 8000) ortalar ve 7000 sonucunu verir.",
                    "speechText": "=ÇOKORTALAMAETOPLA(PrimAralığı; BölgeAralığı; 'Marmara'; UnvanAralığı; 'Uzman') formülü iki Marmara Uzmanının primini (6000 ve 8000) ortalar ve 7000 sonucunu verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t9_8_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formülü yazın: =ÇOKORTALAMAETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;\"Uzman\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=ÇOKORTALAMAETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;\"Uzman\") formülünü yazın.",
                              "D2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! ÇOKORTALAMAETOPLA (AVERAGEIFS) ile Çok Kriterli Ortalama görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKORTALAMAETOPLA(C2:C4;A2:A4;\"Marmara\";B2:B4;\"Uzman\")"
                    }
          }
],
        quiz: {
          "id": "q9_8",
          "title": "ÇOKORTALAMAETOPLA (AVERAGEIFS) ile Çok Kriterli Ortalama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_8_1",
                              "question": "ÇOKORTALAMAETOPLA fonksiyonunda ortalaması alınacak sütun nerede yer alır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formülün en başında (1. parametre)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En sonunda"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ortasında"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Fark etmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Tıpkı ÇOKETOPLA gibi ÇOKORTALAMAETOPLA'da da hedef sayısal aralık ilk parametredir.",
                              "measuredSkill": "Çok Boyutlu Ortalama Modellemesi"
                    }
          ]
}
      },
      {
        id: "sec9_l9",
        phaseId: 9,
        unitId: "u9_9",
        title: "Kriter Fonksiyonlarında Joker Karakterler (* ve ?)",
        shortDesc: "İçinde 'Lojistik' geçen şirketleri veya 'A' ile başlayan ürünleri toplama/saydırma.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "Joker Kriter",
        primaryGoal: "Unvanında 'Ltd' geçen tüm müşterilerin toplam faturasını tek formülle toplamak.",
        prerequisites: ["sec9_l1"],
        commonMistakes: ["Joker karakterleri tırnak içinde (\"*Lojistik*\") yazmayı unutmak"],
        successCriteria: "Kriter fonksiyonlarında * ve ? joker karakterlerini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Joker Karakter", "*"],
        initialWorkbook: createTableSheet("s9_9", "JokerKriterSayfasi", ["Müşteri Adı", "Tutar", "İçinde 'Ltd' Geçenler Toplamı"], [["ABC Ltd Şti", 15000, ""], ["XYZ AŞ", 25000, ""], ["Kaya Ltd", 10000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kriter Fonksiyonlarında Joker Karakterler (* ve ?)",
                    "description": "Unvanında 'Ltd' geçen tüm müşterilerin toplam faturasını tek formülle toplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_9",
                    "title": "Esnek Kelime Eşleşmesi",
                    "explanation": "=ETOPLA(A2:A4; '*Ltd*'; B2:B4) formülü müşteri adının başında, ortasında veya sonunda 'Ltd' geçen satırları bulur ve 15000 + 10000 = 25000 TL'yi toplar.",
                    "speechText": "=ETOPLA(A2:A4; '*Ltd*'; B2:B4) formülü müşteri adının başında, ortasında veya sonunda 'Ltd' geçen satırları bulur ve 15000 + 10000 = 25000 TL'yi toplar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t9_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine jokerli ETOPLA formülünü yazın: =ETOPLA(A2:A4;\"*Ltd*\";B2:B4)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=ETOPLA(A2:A4;\"*Ltd*\";B2:B4) formülünü yazın.",
                              "C2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Kriter Fonksiyonlarında Joker Karakterler (* ve ?) görevini başarıyla tamamladınız.",
                              "expectedValue": "=ETOPLA(A2:A4;\"*Ltd*\";B2:B4)"
                    }
          }
],
        quiz: {
          "id": "q9_9",
          "title": "Kriter Fonksiyonlarında Joker Karakterler (* ve ?) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_9_1",
                              "question": "ETOPLA(A1:A10; \"A*\"; B1:B10) formülü hangi satırları toplar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "A sütunundaki metin 'A' harfi ile başlayan tüm satırları"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca 'A' yazan satırları"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tüm satırları"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hiçbirini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "'A*' kriteri A harfi ile başlayıp ardından herhangi bir karakter gelen kayıtları kapsar.",
                              "measuredSkill": "Joker Maskeli Dinamik Toplama"
                    }
          ]
}
      },
      {
        id: "sec9_l10",
        phaseId: 9,
        unitId: "u9_10",
        title: "Hücre Başvurusunu Kriter Olarak Bağlama (\">=\" & B1)",
        shortDesc: "Kriteri formülün içine statik yazmak yerine başka bir hücredeki değişkene '&' ampersand ile dinamik bağlama.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "Dinamik Kriter",
        primaryGoal: "Yönetici hücredeki hedef sayıyı değiştirdiğinde raporun anında kendini yeniden hesaplamasını sağlamak.",
        prerequisites: ["sec9_l2"],
        commonMistakes: ["Ampersand (&) kullanmadan \">=B1\" yazıp Excel'in B1 hücresini metin sanmasına yol açmak"],
        successCriteria: "\">=\" & Hücre dinamik birleştirme kuralını hatasız uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Dinamik Kriter", "&"],
        initialWorkbook: createTableSheet("s9_10", "DinamikKriterSayfasi", ["Hedef Eşik Değer (E1)", "500", ""], [["Satışlar", 300, ""], ["Satışlar", 700, ""], ["Satışlar", 900, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre Başvurusunu Kriter Olarak Bağlama (\">=\" & B1)",
                    "description": "Yönetici hücredeki hedef sayıyı değiştirdiğinde raporun anında kendini yeniden hesaplamasını sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_10",
                    "title": "Değişkene Bağlı Kriter",
                    "explanation": "Eğer \">=\" & B1 yazarsanız, Excel tırnak içindeki operatörle B1'deki 500 sayısını birleştirir ve dinamik olarak \">=500\" kriterini üretir. B1'i 800 yaparsanız formüle dokunmadan tüm rapor güncellenir.",
                    "speechText": "Eğer \">=\" & B1 yazarsanız, Excel tırnak içindeki operatörle B1'deki 500 sayısını birleştirir ve dinamik olarak \">=500\" kriterini üretir. B1'i 800 yaparsanız formüle dokunmadan tüm rapor güncellenir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t9_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine B2:B4 aralığında E1 hücresindeki değerden büyükleri toplayan formülü yazın: =ETOPLA(B2:B4;\">=\"&B1)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=ETOPLA(B2:B4;\">=\"&B1) formülünü yazın.",
                              "C2 hücresine =ETOPLA(B2:B4;\">=\"&B1) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Hücre Başvurusunu Kriter Olarak Bağlama (\">=\" & B1) görevini başarıyla tamamladınız.",
                              "expectedValue": "=ETOPLA(B2:B4;\">=\"&B1)"
                    }
          }
],
        quiz: {
          "id": "q9_10",
          "title": "Hücre Başvurusunu Kriter Olarak Bağlama (\">=\" & B1) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_10_1",
                              "question": "Excel kriter fonksiyonlarında bir hücreyi büyüktür işaretiyle dinamik birleştirmek için hangi sözdizimi doğrudur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "\">=\" & B1"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "\">=B1\""
                                        },
                                        {
                                                  "id": "c",
                                                  "text": ">=(B1)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "B1 >= 0"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Operatör çift tırnak içine alınır ve ampersand (&) ile hedef hücreye bağlanır.",
                              "measuredSkill": "Dinamik Parametrik Kriter Modellemesi"
                    }
          ]
}
      },
      {
        id: "sec9_l11",
        phaseId: 9,
        unitId: "u9_11",
        title: "Bölüm 9 Koşullu Hesaplamalar ve Kriter Analizi Final Projesi",
        shortDesc: "ETOPLA, ÇOKETOPLA, EĞERSAY, ÇOKEĞERSAY ve dinamik kriterlerle C-Level kurumsal departman özet tablosu oluşturma.",
        category: "Koşullu Hesaplamalar",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "9. Bölümün tüm koşullu hesaplama ve analiz kazanımlarını final projesinde birleştirmek.",
        prerequisites: ["sec9_l3", "sec9_l6", "sec9_l8", "sec9_l10"],
        commonMistakes: ["Argüman sıralamalarını karıştırmak"],
        successCriteria: "Bölüm 9 final projesini tam başarıyla tamamlamak.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["Kurumsal Kriter Raporu", "ÇOKETOPLA"],
        initialWorkbook: createTableSheet("s9_11", "KriterOzetPaneli", ["Departman", "Bölge", "Bütçe", "Satış", "Marmara Satış Departmanı Toplamı"], [["Satış", "Marmara", 100000, 120000, ""], ["IT", "Marmara", 50000, 45000, ""], ["Satış", "Ege", 80000, 95000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 9 Koşullu Hesaplamalar ve Kriter Analizi Final Projesi",
                    "description": "9. Bölümün tüm koşullu hesaplama ve analiz kazanımlarını final projesinde birleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts9_11",
                    "title": "Uçtan Uca Kriter Raporu",
                    "explanation": "Tebrikler! Hem tekil hem çoklu koşullu hesaplamaları, sayımları ve ortalamaları öğrendiniz. Bu final projesinde Departmanı 'Satış' ve Bölgesi 'Marmara' olan satırların satış toplamını tek formülle çekiyorsunuz.",
                    "speechText": "Tebrikler! Hem tekil hem çoklu koşullu hesaplamaları, sayımları ve ortalamaları öğrendiniz. Bu final projesinde Departmanı 'Satış' ve Bölgesi 'Marmara' olan satırların satış toplamını tek formülle çekiyorsunuz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t9_11_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine ilgili ÇOKETOPLA formülünü kurun: =ÇOKETOPLA(D2:D4;A2:A4;\"Satış\";B2:B4;\"Marmara\")",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=ÇOKETOPLA(D2:D4;A2:A4;\"Satış\";B2:B4;\"Marmara\") formülünü yazın.",
                              "E2 hücresine formülü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Bölüm 9 Koşullu Hesaplamalar ve Kriter Analizi Final Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇOKETOPLA(D2:D4;A2:A4;\"Satış\";B2:B4;\"Marmara\")"
                    }
          }
],
        quiz: {
          "id": "q9_11",
          "title": "Bölüm 9 Koşullu Hesaplamalar ve Kriter Analizi Final Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_9_11_1",
                              "question": "Büyük bir kurumsal veri tabanından 'Departmanı Satış' VE 'Bölgesi Marmara' olan ciroları toplamak için hangi fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "ÇOKETOPLA (SUMIFS)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "TOPLA (SUM)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "EĞERSAY (COUNTIF)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "MAK (MAX)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Çoklu kriterli toplamlar için ÇOKETOPLA endüstri standardıdır.",
                              "measuredSkill": "Bölüm 9 Genel Koşullu Hesaplama Uzmanlığı"
                    }
          ]
}
      }
    ]
  },
  {
    id: 10,
    category: "Metin Fonksiyonları",
    title: "10. Metin Fonksiyonları ve Veri Temizleme",
    subtitle: "METİNBİRLEŞTİR, BİRLEŞTİR, SOLDAN, SAĞDAN, PARÇAAL, KIRP, BUL ve YERİNEKOY",
    iconName: "Type",
    description: "Metin birleştirme operatörü (&), METİNBİRLEŞTİR (TEXTJOIN), metin parçalama (SOLDAN, SAĞDAN, PARÇAAL), karakter boyutu (UZUNLUK), dinamik konum tespiti (BUL/MBUL), görünmez boşluk temizliği (KIRP), büyük/küçük harf dönüşümleri ve YERİNEKOY.",
    lessons: [
      {
        id: "sec10_l1",
        phaseId: 10,
        unitId: "u10_1",
        title: "BİRLEŞTİR (& ve CONCATENATE) ile Metinleri Bağlama",
        shortDesc: "Ampersand (&) operatörü ile iki veya daha fazla hücredeki metni araya boşluk koyarak birleştirme.",
        category: "Metin Fonksiyonları",
        groupTitle: "Metin Birleştirme",
        primaryGoal: "Ad ve Soyadı ayrı olan sütunları 'Ad Soyad' tek sütununda birleştirebilmek.",
        prerequisites: ["sec9_l11"],
        commonMistakes: ["Araya boşluk koymayı unutup 'AhmetYılmaz' şeklinde bitişik isim üretmek"],
        successCriteria: "& operatörünü boşluk karakteri (\" \") ile birlikte uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["&", "BİRLEŞTİR"],
        initialWorkbook: createTableSheet("s10_1", "BirlestirSayfasi", ["Ad", "Soyad", "Tam Ad"], [["Ahmet", "Yılmaz", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BİRLEŞTİR (& ve CONCATENATE) ile Metinleri Bağlama",
                    "description": "Ad ve Soyadı ayrı olan sütunları 'Ad Soyad' tek sütununda birleştirebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_1",
                    "title": "Metinleri Birleştirmek",
                    "explanation": "=A2 & ' ' & B2 formülü A2 hücresindeki 'Ahmet' metnini alır, araya bir boşluk ekler ve B2'deki 'Yılmaz' ile bağlayarak 'Ahmet Yılmaz' üretir.",
                    "speechText": "=A2 & ' ' & B2 formülü A2 hücresindeki 'Ahmet' metnini alır, araya bir boşluk ekler ve B2'deki 'Yılmaz' ile bağlayarak 'Ahmet Yılmaz' üretir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t10_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine ad ve soyadı birleştiren formülü yazın: =A2&\" \"&B2",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=A2&\" \"&B2 formülünü yazın.",
                              "C2 hücresine =A2&\" \"&B2 formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! BİRLEŞTİR (& ve CONCATENATE) ile Metinleri Bağlama görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2&\" \"&B2"
                    }
          }
],
        quiz: {
          "id": "q10_1",
          "title": "BİRLEŞTİR (& ve CONCATENATE) ile Metinleri Bağlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_1_1",
                              "question": "Excel formüllerinde iki metin hücresini birbirine bağlayan temel karakter nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "& (Ampersand)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "+ (Artı)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "# (Kare)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "@ (Et)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "& operatörü Excel'de metin birleştirme (concatenation) işlevini görür.",
                              "measuredSkill": "Temel Metin Birleştirme"
                    }
          ]
}
      },
      {
        id: "sec10_l2",
        phaseId: 10,
        unitId: "u10_2",
        title: "METİNBİRLEŞTİR (TEXTJOIN) ile Ayraçlı ve Akıllı Birleştirme",
        shortDesc: "Belirtilen ayraçla (virgül, tire) onlarca hücreyi birleştiren ve boş hücreleri otomatik atlayan modern fonksiyon.",
        category: "Metin Fonksiyonları",
        groupTitle: "METİNBİRLEŞTİR",
        primaryGoal: "Satırdaki tüm illeri aralarına virgül koyarak tek bir hücrede özetlemek.",
        prerequisites: ["sec10_l1"],
        commonMistakes: ["Onlarca hücre arasına tek tek & \", \" & yazarak formülü uzatmak"],
        successCriteria: "METİNBİRLEŞTİR fonksiyonunu ayraç ve boşlukları atla parametresiyle kullanmak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["METİNBİRLEŞTİR", "TEXTJOIN"],
        initialWorkbook: createTableSheet("s10_2", "MetinBirlestirSayfasi", ["Şehir 1", "Şehir 2", "Şehir 3", "Birleşik Liste"], [["İstanbul", "Ankara", "İzmir", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "METİNBİRLEŞTİR (TEXTJOIN) ile Ayraçlı ve Akıllı Birleştirme",
                    "description": "Satırdaki tüm illeri aralarına virgül koyarak tek bir hücrede özetlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_2",
                    "title": "Yeni Nesil Birleştirici",
                    "explanation": "=METİNBİRLEŞTİR(Ayraç; BoşlarıAtla; Aralık) şeklinde çalışır. =METİNBİRLEŞTİR(', '; DOĞRU; A2:C2) formülü şehirleri virgülle bağlayarak 'İstanbul, Ankara, İzmir' yapar.",
                    "speechText": "=METİNBİRLEŞTİR(Ayraç; BoşlarıAtla; Aralık) şeklinde çalışır. =METİNBİRLEŞTİR(', '; DOĞRU; A2:C2) formülü şehirleri virgülle bağlayarak 'İstanbul, Ankara, İzmir' yapar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t10_2_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine virgülle birleştiren formülü yazın: =METİNBİRLEŞTİR(\", \";DOĞRU;A2:C2)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=METİNBİRLEŞTİR(\", \";DOĞRU;A2:C2) formülünü yazın.",
                              "D2 hücresine formülü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! METİNBİRLEŞTİR (TEXTJOIN) ile Ayraçlı ve Akıllı Birleştirme görevini başarıyla tamamladınız.",
                              "expectedValue": "=METİNBİRLEŞTİR(\", \";DOĞRU;A2:C2)"
                    }
          }
],
        quiz: {
          "id": "q10_2",
          "title": "METİNBİRLEŞTİR (TEXTJOIN) ile Ayraçlı ve Akıllı Birleştirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_2_1",
                              "question": "METİNBİRLEŞTİR fonksiyonunun 2. parametresine DOĞRU (TRUE) yazıldığında ne gerçekleşir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Aralıktaki boş hücreler yok sayılır, gereksiz çift virgül oluşması engellenir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm hücreler silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayılar toplanır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Boş hücreleri atlama seçeneği aradaki boşlukların temiz ve estetik bağlanmasını sağlar.",
                              "measuredSkill": "Akıllı Ayraçlı Metin Birleştirme"
                    }
          ]
}
      },
      {
        id: "sec10_l3",
        phaseId: 10,
        unitId: "u10_3",
        title: "SOLDAN (LEFT) ile Metnin Başından Karakter Alma",
        shortDesc: "Bir kodun veya metnin en solundaki N karakteri çekme.",
        category: "Metin Fonksiyonları",
        groupTitle: "Metin Parçalama",
        primaryGoal: "Ürün kodunun ilk 3 hanesindeki kategori kodunu çekebilmek.",
        prerequisites: ["sec10_l1"],
        commonMistakes: ["Karakter sayısını belirtmeyip varsayılan olarak yalnızca 1 karakter almak"],
        successCriteria: "SOLDAN fonksiyonunu doğru karakter sayısıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["SOLDAN", "LEFT"],
        initialWorkbook: createTableSheet("s10_3", "SoldanSayfasi", ["Stok Kodu", "Kategori Kodu (İlk 3 Hane)"], [["ELK1059", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SOLDAN (LEFT) ile Metnin Başından Karakter Alma",
                    "description": "Ürün kodunun ilk 3 hanesindeki kategori kodunu çekebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_3",
                    "title": "Soldan Parça Çekmek",
                    "explanation": "=SOLDAN(Metin; [KarakterSayısı]) fonksiyonu soldan başlar. =SOLDAN(A2; 3) formülü 'ELK1059' kodundan 'ELK' kısmını çekip ekrana basar.",
                    "speechText": "=SOLDAN(Metin; [KarakterSayısı]) fonksiyonu soldan başlar. =SOLDAN(A2; 3) formülü 'ELK1059' kodundan 'ELK' kısmını çekip ekrana basar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_3_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine ilk 3 karakteri çeken formülü yazın: =SOLDAN(A2;3)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=SOLDAN(A2;3) formülünü yazın.",
                              "B2 hücresine =SOLDAN(A2;3) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! SOLDAN (LEFT) ile Metnin Başından Karakter Alma görevini başarıyla tamamladınız.",
                              "expectedValue": "=SOLDAN(A2;3)"
                    }
          }
],
        quiz: {
          "id": "q10_3",
          "title": "SOLDAN (LEFT) ile Metnin Başından Karakter Alma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_3_1",
                              "question": "=SOLDAN('TÜRKİYE'; 4) formülünün sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "TÜRK"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "TÜRKİ"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İYE"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "TÜR"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Soldan ilk 4 karakter 'T-Ü-R-K' harfleridir.",
                              "measuredSkill": "Soldan Karakter Parçalama"
                    }
          ]
}
      },
      {
        id: "sec10_l4",
        phaseId: 10,
        unitId: "u10_4",
        title: "SAĞDAN (RIGHT) ile Metnin Sonundan Karakter Çekme",
        shortDesc: "Bir metnin veya barkodun en sağındaki N karakteri alma.",
        category: "Metin Fonksiyonları",
        groupTitle: "Metin Parçalama",
        primaryGoal: "Dosya adlarının uzantısını veya IBAN'ın son 4 hanesini çekmek.",
        prerequisites: ["sec10_l3"],
        commonMistakes: ["Metnin sonundaki görünmez boşluklar nedeniyle eksik harf çekmek"],
        successCriteria: "SAĞDAN fonksiyonunu doğru karakter sayısıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["SAĞDAN", "RIGHT"],
        initialWorkbook: createTableSheet("s10_4", "SagdanSayfasi", ["Hesap No", "Son 4 Hane"], [["TR12345678", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SAĞDAN (RIGHT) ile Metnin Sonundan Karakter Çekme",
                    "description": "Dosya adlarının uzantısını veya IBAN'ın son 4 hanesini çekmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_4",
                    "title": "Sağdan Parça Çekmek",
                    "explanation": "=SAĞDAN(A2; 4) formülü metnin en sonundan geriye doğru 4 karakter sayar ve '5678' çıktısını verir.",
                    "speechText": "=SAĞDAN(A2; 4) formülü metnin en sonundan geriye doğru 4 karakter sayar ve '5678' çıktısını verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_4_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine son 4 haneyi çeken formülü yazın: =SAĞDAN(A2;4)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=SAĞDAN(A2;4) formülünü yazın.",
                              "B2 hücresine =SAĞDAN(A2;4) yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! SAĞDAN (RIGHT) ile Metnin Sonundan Karakter Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "=SAĞDAN(A2;4)"
                    }
          }
],
        quiz: {
          "id": "q10_4",
          "title": "SAĞDAN (RIGHT) ile Metnin Sonundan Karakter Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_4_1",
                              "question": "=SAĞDAN('EXCEL2024'; 4) formülü hangi değeri döndürür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "2024"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "EXCE"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "CEL"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "L2024"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sağdaki son 4 karakter 2024 yılıdır.",
                              "measuredSkill": "Sağdan Karakter Parçalama"
                    }
          ]
}
      },
      {
        id: "sec10_l5",
        phaseId: 10,
        unitId: "u10_5",
        title: "PARÇAAL (MID) ile Metnin Ortasından Veri Çekme",
        shortDesc: "Metnin başlangıç pozisyonu ve alınacak karakter sayısı verilerek ortadaki bilgiyi çekme.",
        category: "Metin Fonksiyonları",
        groupTitle: "PARÇAAL",
        primaryGoal: "TC Kimlik veya karmaşık şasi numarasının tam ortasındaki doğrulama kodunu almak.",
        prerequisites: ["sec10_l3", "sec10_l4"],
        commonMistakes: ["Başlangıç pozisyonunu 0 kabul etmek (Excel'de ilk harf 1. pozisyondur)"],
        successCriteria: "PARÇAAL fonksiyonunu başlangıç sayısı ve uzunlukla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["PARÇAAL", "MID"],
        initialWorkbook: createTableSheet("s10_5", "ParcaalSayfasi", ["Sipariş Kodu", "Ortadaki Şube Kodu"], [["SIP-IST-999", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "PARÇAAL (MID) ile Metnin Ortasından Veri Çekme",
                    "description": "TC Kimlik veya karmaşık şasi numarasının tam ortasındaki doğrulama kodunu almak."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_5",
                    "title": "Metnin Kalbine Ulaşmak",
                    "explanation": "=PARÇAAL(Metin; BaşlangıçSayısı; KarakterSayısı) kuralıyla çalışır. 'SIP-IST-999' metninde 'IST' 5. karakterden başlar ve 3 karakter uzunluğundadır: =PARÇAAL(A2; 5; 3).",
                    "speechText": "=PARÇAAL(Metin; BaşlangıçSayısı; KarakterSayısı) kuralıyla çalışır. 'SIP-IST-999' metninde 'IST' 5. karakterden başlar ve 3 karakter uzunluğundadır: =PARÇAAL(A2; 5; 3). Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_5_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine ortadaki 'IST' kodunu çeken formülü yazın: =PARÇAAL(A2;5;3)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=PARÇAAL(A2;5;3) formülünü yazın.",
                              "B2 hücresine =PARÇAAL(A2;5;3) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! PARÇAAL (MID) ile Metnin Ortasından Veri Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "=PARÇAAL(A2;5;3)"
                    }
          }
],
        quiz: {
          "id": "q10_5",
          "title": "PARÇAAL (MID) ile Metnin Ortasından Veri Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_5_1",
                              "question": "=PARÇAAL('AKADEMİ'; 4; 4) formülü hangi sonucu verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "DEMİ"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "AKAD"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "KADE"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "EMİ"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "4. harf 'D'dir, oradan itibaren 4 harf alındığında 'D-E-M-İ' elde edilir.",
                              "measuredSkill": "Ortadan Metin Parçalama"
                    }
          ]
}
      },
      {
        id: "sec10_l6",
        phaseId: 10,
        unitId: "u10_6",
        title: "UZUNLUK (LEN) ile Karakter Sayısı Hesaplama",
        shortDesc: "Bir hücredeki toplam karakter sayısını (harf, rakam ve boşluklar dahil) sayma.",
        category: "Metin Fonksiyonları",
        groupTitle: "UZUNLUK",
        primaryGoal: "TC Kimlik numaralarının tam 11 hane veya IBAN'ın 26 hane olup olmadığını denetlemek.",
        prerequisites: ["sec10_l1"],
        commonMistakes: ["Boşlukların da bir karakter olarak sayıldığını hesaba katmamak"],
        successCriteria: "UZUNLUK fonksiyonunu karakter denetiminde kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["UZUNLUK", "LEN"],
        initialWorkbook: createTableSheet("s10_6", "UzunlukSayfasi", ["TC Kimlik No", "Karakter Sayısı"], [["12345678901", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "UZUNLUK (LEN) ile Karakter Sayısı Hesaplama",
                    "description": "TC Kimlik numaralarının tam 11 hane veya IBAN'ın 26 hane olup olmadığını denetlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_6",
                    "title": "Karakter Ölçer",
                    "explanation": "=UZUNLUK(A2) formülü A2 hücresindeki karakterlerin sayısını döner. 11 haneli bir TC kimlik için sonuç 11 olacaktır.",
                    "speechText": "=UZUNLUK(A2) formülü A2 hücresindeki karakterlerin sayısını döner. 11 haneli bir TC kimlik için sonuç 11 olacaktır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_6_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine karakter sayısını hesaplayan formülü yazın: =UZUNLUK(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=UZUNLUK(A2) formülünü yazın.",
                              "B2 hücresine =UZUNLUK(A2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! UZUNLUK (LEN) ile Karakter Sayısı Hesaplama görevini başarıyla tamamladınız.",
                              "expectedValue": "=UZUNLUK(A2)"
                    }
          }
],
        quiz: {
          "id": "q10_6",
          "title": "UZUNLUK (LEN) ile Karakter Sayısı Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_6_1",
                              "question": "=UZUNLUK('A B C') formülü hangi sonucu verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "5 (3 harf ve 2 boşluk)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "3"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "1"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de aradaki boşluklar da tam bir karakter olarak sayılır.",
                              "measuredSkill": "Karakter Sayımı ve Uzunluk Doğrulama"
                    }
          ]
}
      },
      {
        id: "sec10_l7",
        phaseId: 10,
        unitId: "u10_7",
        title: "BUL (FIND) ve MBUL (SEARCH) ile Karakter Pozisyonu",
        shortDesc: "Bir metnin içinde belirli bir harf, boşluk veya sembolün kaçıncı karakterde olduğunu bulma.",
        category: "Metin Fonksiyonları",
        groupTitle: "Metin Konumu",
        primaryGoal: "Ad ile Soyad arasındaki boşluğun kaçıncı sırada olduğunu tespit etmek.",
        prerequisites: ["sec10_l6"],
        commonMistakes: ["BUL'un büyük/küçük harf duyarlı olduğunu, MBUL'un ise duyarsız olduğunu bilmemek"],
        successCriteria: "BUL fonksiyonu ile ayraç ve boşluk pozisyonunu saptayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["BUL", "FIND"],
        initialWorkbook: createTableSheet("s10_7", "BulSayfasi", ["Tam İsim", "Boşluğun Pozisyonu"], [["Ahmet Yılmaz", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BUL (FIND) ve MBUL (SEARCH) ile Karakter Pozisyonu",
                    "description": "Ad ile Soyad arasındaki boşluğun kaçıncı sırada olduğunu tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_7",
                    "title": "Konum Dedektifi",
                    "explanation": "=BUL(ArananMetin; Metin) şeklinde çalışır. =BUL(' '; A2) formülü 'Ahmet Yılmaz' içindeki boşluğun 6. sırada olduğunu bulur.",
                    "speechText": "=BUL(ArananMetin; Metin) şeklinde çalışır. =BUL(' '; A2) formülü 'Ahmet Yılmaz' içindeki boşluğun 6. sırada olduğunu bulur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_7_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine boşluk karakterinin pozisyonunu bulan formülü yazın: =BUL(\" \";A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=BUL(\" \";A2) formülünü yazın.",
                              "B2 hücresine =BUL(\" \";A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BUL (FIND) ve MBUL (SEARCH) ile Karakter Pozisyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "=BUL(\" \";A2)"
                    }
          }
],
        quiz: {
          "id": "q10_7",
          "title": "BUL (FIND) ve MBUL (SEARCH) ile Karakter Pozisyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_7_1",
                              "question": "BUL (FIND) fonksiyonu aranan karakter bulunamadığında ne hatası verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "#DEĞER! (#VALUE!)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "0"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "YANLIŞ"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "#YOK"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "BUL aranan karakter dizide yoksa #DEĞER! hatası döndürür.",
                              "measuredSkill": "Karakter Konumu Tespiti"
                    }
          ]
}
      },
      {
        id: "sec10_l8",
        phaseId: 10,
        unitId: "u10_8",
        title: "Dinamik Metin Ayırma: SOLDAN ve BUL Kombinasyonu",
        shortDesc: "Adların uzunluğu kaç harf olursa olsun dinamik olarak sadece ilk adı çekme.",
        category: "Metin Fonksiyonları",
        groupTitle: "İleri Metin",
        primaryGoal: "Hem 3 harfli Ali'nin hem 9 harfli Abdurrahman'ın adını tek formülle çekebilmek.",
        prerequisites: ["sec10_l3", "sec10_l7"],
        commonMistakes: ["Karakter sayısını sabit (5) yazıp uzun isimlerin harflerini kesmek"],
        successCriteria: "SOLDAN ve BUL fonksiyonlarını iç içe birleştirebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["SOLDAN", "BUL"],
        initialWorkbook: createTableSheet("s10_8", "DinamikAyirSayfasi", ["Tam İsim", "Dinamik Ad"], [["Mehmet Kaya", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Metin Ayırma: SOLDAN ve BUL Kombinasyonu",
                    "description": "Hem 3 harfli Ali'nin hem 9 harfli Abdurrahman'ın adını tek formülle çekebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_8",
                    "title": "Efsane İsim Ayırıcı",
                    "explanation": "=SOLDAN(A2; BUL(' '; A2) - 1) formülü önce boşluğun yerini (7) bulur, 1 çıkarır (6) ve SOLDAN 6 karakter alarak tam 'Mehmet' adını çeker.",
                    "speechText": "=SOLDAN(A2; BUL(' '; A2) - 1) formülü önce boşluğun yerini (7) bulur, 1 çıkarır (6) ve SOLDAN 6 karakter alarak tam 'Mehmet' adını çeker. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_8_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine dinamik ad ayırıcı formülü yazın: =SOLDAN(A2;BUL(\" \";A2)-1)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=SOLDAN(A2;BUL(\" \";A2)-1) formülünü yazın.",
                              "B2 hücresine formülü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Dinamik Metin Ayırma: SOLDAN ve BUL Kombinasyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "=SOLDAN(A2;BUL(\" \";A2)-1)"
                    }
          }
],
        quiz: {
          "id": "q10_8",
          "title": "Dinamik Metin Ayırma: SOLDAN ve BUL Kombinasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_8_1",
                              "question": "=SOLDAN(A2; BUL(\" \"; A2) - 1) formülündeki '- 1' ifadesinin amacı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Boşluk karakterinin adın sonuna dahil edilmesini engellemek"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Soyadı silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formülü kısaltmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata önlemek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "-1 yapılmazsa boşluğun kendisi de adın sonuna eklenir.",
                              "measuredSkill": "Dinamik Formüllü Metin Ayrıştırma"
                    }
          ]
}
      },
      {
        id: "sec10_l9",
        phaseId: 10,
        unitId: "u10_9",
        title: "KIRP (TRIM) ile Fazla Boşlukları Temizleme",
        shortDesc: "Metinlerin başındaki, sonundaki veya kelime arasındaki çift boşlukları tek hamlede silme.",
        category: "Metin Fonksiyonları",
        groupTitle: "Veri Temizleme",
        primaryGoal: "DÜŞEYARA'nın 'Ahmet ' ile 'Ahmet'i eşleştiremeyip #YOK vermesini önlemek.",
        prerequisites: ["sec10_l6"],
        commonMistakes: ["Görünmez boşlukları fark etmeyip DÜŞEYARA'nın bozulduğunu düşünmek"],
        successCriteria: "KIRP fonksiyonunu veri temizliğinde standart ilk adım haline getirmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["KIRP", "TRIM"],
        initialWorkbook: createTableSheet("s10_9", "KirpSayfasi", ["Kirli Metin (Gereksiz Boşluklu)", "Temiz Metin"], [["   İstanbul   ", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "KIRP (TRIM) ile Fazla Boşlukları Temizleme",
                    "description": "DÜŞEYARA'nın 'Ahmet ' ile 'Ahmet'i eşleştiremeyip #YOK vermesini önlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_9",
                    "title": "Görünmez Boşluk Tuzağı",
                    "explanation": "Web'den veya ERP'den kopyalanan metinlerin başında sonunda boşluklar kalabilir. =KIRP(A2) formülü kelimeler arasındaki normal tek boşluğu korur, diğer tüm gereksiz boşlukları yok eder.",
                    "speechText": "Web'den veya ERP'den kopyalanan metinlerin başında sonunda boşluklar kalabilir. =KIRP(A2) formülü kelimeler arasındaki normal tek boşluğu korur, diğer tüm gereksiz boşlukları yok eder. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_9_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine metni temizleyen formülü yazın: =KIRP(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=KIRP(A2) formülünü yazın.",
                              "B2 hücresine =KIRP(A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! KIRP (TRIM) ile Fazla Boşlukları Temizleme görevini başarıyla tamamladınız.",
                              "expectedValue": "=KIRP(A2)"
                    }
          }
],
        quiz: {
          "id": "q10_9",
          "title": "KIRP (TRIM) ile Fazla Boşlukları Temizleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_9_1",
                              "question": "KIRP (TRIM) fonksiyonu kelimeler arasındaki normal tek boşlukları siler mi?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hayır, kelime aralarındaki tek boşluğu korur; yalnızca baş, son ve çoklu boşlukları temizler"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Evet, tüm boşlukları silip kelimeleri yapıştırır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca sayıları temizler"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metni siler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "KIRP kelimeler arasındaki doğal tek boşluğu bırakır, fazlalıkları atar.",
                              "measuredSkill": "Metin Hijyeni ve Boşluk Temizliği"
                    }
          ]
}
      },
      {
        id: "sec10_l10",
        phaseId: 10,
        unitId: "u10_10",
        title: "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ (PROPER)",
        shortDesc: "Tüm harfleri BÜYÜK yapma, küçük yapma veya her kelimenin Baş Harfini Büyütme (YAZIM.DÜZENİ).",
        category: "Metin Fonksiyonları",
        groupTitle: "Harf Dönüşümü",
        primaryGoal: "Gelişigüzel yazılmış ad-soyad listelerini kurumsal 'Ahmet Yılmaz' standardına sokmak.",
        prerequisites: ["sec10_l1"],
        commonMistakes: ["Her kelimenin ilk harfini büyütmek için hücreleri tek tek elle düzeltmek"],
        successCriteria: "YAZIM.DÜZENİ fonksiyonunu kurumsal veri standardizasyonunda uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["YAZIM.DÜZENİ", "BÜYÜKHARF"],
        initialWorkbook: createTableSheet("s10_10", "HarfDuzenSayfasi", ["Düzensiz İsim", "Kurumsal Standart"], [["ahmet yılmaz", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ (PROPER)",
                    "description": "Gelişigüzel yazılmış ad-soyad listelerini kurumsal 'Ahmet Yılmaz' standardına sokmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_10",
                    "title": "Kurumsal Baş Harf Standardı",
                    "explanation": "=YAZIM.DÜZENİ(A2) formülü 'ahmet yılmaz' metnini tek hamlede 'Ahmet Yılmaz' yapar. =BÜYÜKHARF(A2) ise tüm harfleri 'AHMET YILMAZ' yapar.",
                    "speechText": "=YAZIM.DÜZENİ(A2) formülü 'ahmet yılmaz' metnini tek hamlede 'Ahmet Yılmaz' yapar. =BÜYÜKHARF(A2) ise tüm harfleri 'AHMET YILMAZ' yapar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_10_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine baş harfleri büyüten formülü yazın: =YAZIM.DÜZENİ(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YAZIM.DÜZENİ(A2) formülünü yazın.",
                              "B2 hücresine =YAZIM.DÜZENİ(A2) yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ (PROPER) görevini başarıyla tamamladınız.",
                              "expectedValue": "=YAZIM.DÜZENİ(A2)"
                    }
          }
],
        quiz: {
          "id": "q10_10",
          "title": "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ (PROPER) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_10_1",
                              "question": "Bir hücredeki metnin her kelimesinin yalnızca İLK harfini büyük yapmak için hangi fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=YAZIM.DÜZENİ() (PROPER)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=BÜYÜKHARF()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=İLKHARF()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=KÜÇÜKHARF()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YAZIM.DÜZENİ her kelimenin baş harfini büyük, diğerlerini küçük yapar.",
                              "measuredSkill": "Tipografik Standardizasyon"
                    }
          ]
}
      },
      {
        id: "sec10_l11",
        phaseId: 10,
        unitId: "u10_11",
        title: "YERİNEKOY (SUBSTITUTE) ile Metin İçi Karakter Değiştirme",
        shortDesc: "Metnin içindeki belirli bir karakteri (noktayı virgüle, tireyi boşluğa) formülle değiştirme.",
        category: "Metin Fonksiyonları",
        groupTitle: "YERİNEKOY",
        primaryGoal: "Telefon numaralarındaki parantez ve tireleri formülle silip saf rakam bırakmak.",
        prerequisites: ["sec10_l1"],
        commonMistakes: ["Bul ve Değiştir ile orijinal veriyi ezmek yerine formülle dinamik dönüştürmeyi seçmemek"],
        successCriteria: "YERİNEKOY fonksiyonunu eski ve yeni metin parametreleriyle uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["YERİNEKOY", "SUBSTITUTE"],
        initialWorkbook: createTableSheet("s10_11", "YerinekoySayfasi", ["Ham Kod", "Temizlenmiş Kod"], [["TR-100-XYZ", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "YERİNEKOY (SUBSTITUTE) ile Metin İçi Karakter Değiştirme",
                    "description": "Telefon numaralarındaki parantez ve tireleri formülle silip saf rakam bırakmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_11",
                    "title": "Formülle Karakter Değişimi",
                    "explanation": "=YERİNEKOY(Metin; EskiMetin; YeniMetin) kuralıyla çalışır. =YERİNEKOY(A2; '-'; '/') formülü aradaki tireleri taksim işaretiyle değiştirir. Yeni metne \"\" yazılırsa eski karakter tamamen silinir.",
                    "speechText": "=YERİNEKOY(Metin; EskiMetin; YeniMetin) kuralıyla çalışır. =YERİNEKOY(A2; '-'; '/') formülü aradaki tireleri taksim işaretiyle değiştirir. Yeni metne \"\" yazılırsa eski karakter tamamen silinir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_11_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine tireleri eğik çizgiye çeviren formülü yazın: =YERİNEKOY(A2;\"-\";\"/\")",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YERİNEKOY(A2;\"-\";\"/\") formülünü yazın.",
                              "B2 hücresine =YERİNEKOY(A2;\"-\";\"/\") formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! YERİNEKOY (SUBSTITUTE) ile Metin İçi Karakter Değiştirme görevini başarıyla tamamladınız.",
                              "expectedValue": "=YERİNEKOY(A2;\"-\";\"/\")"
                    }
          }
],
        quiz: {
          "id": "q10_11",
          "title": "YERİNEKOY (SUBSTITUTE) ile Metin İçi Karakter Değiştirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_11_1",
                              "question": "=YERİNEKOY(\"2024.10.15\"; \".\"; \"/\") formülünün sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "2024/10/15"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "2024.10.15"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "20241015"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Nokta işaretlerinin tümü '/' karakteriyle yer değiştirir.",
                              "measuredSkill": "Metin Karakter Değişimi ve Normalizasyon"
                    }
          ]
}
      },
      {
        id: "sec10_l12",
        phaseId: 10,
        unitId: "u10_12",
        title: "Bölüm 10 Metin Fonksiyonları ve Veri Temizleme Final Projesi",
        shortDesc: "KIRP, YAZIM.DÜZENİ, METİNBİRLEŞTİR ve PARÇAAL fonksiyonlarını birleştirerek kurumsal ERP müşteri veri setini temizleme.",
        category: "Metin Fonksiyonları",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "10. Bölümün tüm metin işleme ve temizleme tekniklerini uçtan uca uygulamak.",
        prerequisites: ["sec10_l2", "sec10_l8", "sec10_l9", "sec10_l10"],
        commonMistakes: ["Formül sıralamasını karıştırmak"],
        successCriteria: "Bölüm 10 final projesini başarıyla tamamlamak.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["Veri Temizleme", "YAZIM.DÜZENİ", "KIRP"],
        initialWorkbook: createTableSheet("s10_12", "MetinFinalPaneli", ["Kirli Müşteri Kaydı", "Temiz Kurumsal Ad Soyad"], [["   mehmet   kaya   ", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 10 Metin Fonksiyonları ve Veri Temizleme Final Projesi",
                    "description": "10. Bölümün tüm metin işleme ve temizleme tekniklerini uçtan uca uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts10_12",
                    "title": "Büyük Temizlik Sanatı",
                    "explanation": "İç içe =YAZIM.DÜZENİ(KIRP(A2)) formülü hem baş ve sondaki gereksiz boşlukları siler hem de harfleri 'Mehmet Kaya' standardına kavuşturur.",
                    "speechText": "İç içe =YAZIM.DÜZENİ(KIRP(A2)) formülü hem baş ve sondaki gereksiz boşlukları siler hem de harfleri 'Mehmet Kaya' standardına kavuşturur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t10_12_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine hem kırpan hem baş harfleri büyüten iç içe formülü yazın: =YAZIM.DÜZENİ(KIRP(A2))",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YAZIM.DÜZENİ(KIRP(A2)) formülünü yazın.",
                              "B2 hücresine =YAZIM.DÜZENİ(KIRP(A2)) yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Bölüm 10 Metin Fonksiyonları ve Veri Temizleme Final Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "=YAZIM.DÜZENİ(KIRP(A2))"
                    }
          }
],
        quiz: {
          "id": "q10_12",
          "title": "Bölüm 10 Metin Fonksiyonları ve Veri Temizleme Final Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_10_12_1",
                              "question": "=YAZIM.DÜZENİ(KIRP(A1)) bileşik formülü ne işe yarar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Fazla boşlukları temizler ve her kelimenin baş harfini büyük yapar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm harfleri siler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayıları toplar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metni ters çevirir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İki fonksiyon birleşerek kurumsal metin standardizasyonunu tek adımda gerçekleştirir.",
                              "measuredSkill": "Bölüm 10 Genel Metin ve Veri Temizleme Mimarisi"
                    }
          ]
}
      }
    ]
  }
];
