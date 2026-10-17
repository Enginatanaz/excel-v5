import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_16_TO_20: CurriculumPhase[] = [
  {
    id: 16,
    category: "Metin Dönüşümleri & Hızlı Doldurma",
    title: "16. Hızlı Doldurma ve Metin Dönüşümleri",
    subtitle: "Metinden Sütunlara, Flash Fill (Ctrl+E), Ayraçlar ve Kirli Veri Temizleme",
    iconName: "Zap",
    description: "Metinden sütunlara dönüştürme, sabit genişlik ve özel ayraçlar, Flash Fill ile formülsüz desen çıkarma, metin birleştirme ve kurumsal veri temizleme teknikleri.",
    lessons: [
      {
        id: "sec16_l1",
        phaseId: 16,
        unitId: "u16_1",
        title: "Metinden Sütunlara: Ayrılmış (Delimited) ile Veri Bölme",
        shortDesc: "Virgül, noktalı virgül veya boşlukla ayrılmış tek sütunluk metinleri ayrı sütunlara dağıtma.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Metinden Sütunlara",
        primaryGoal: "Birleşik verileri ayraç mantığıyla sütunlara ayırmayı öğrenmek.",
        prerequisites: ["sec15_l11"],
        commonMistakes: ["Ayraç türünü (virgül yerine noktalı virgül) yanlış seçmek"],
        successCriteria: "Ayrılmış metin mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Metinden Sütunlara"],
        initialWorkbook: createTableSheet("s16_1", "AyirmaSayfasi", ["Ham Veri", "Ad", "Soyad", "Şehir"], [["Ahmet,Yılmaz,İstanbul"], ["Mehmet,Kaya,Ankara"], ["Ayşe,Demir,İzmir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metinden Sütunlara: Ayrılmış (Delimited) ile Veri Bölme",
                    "description": "Birleşik verileri ayraç mantığıyla sütunlara ayırmayı öğrenmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_1",
                    "title": "Ayraçlı Metinleri Dağıtma",
                    "explanation": "Metinden Sütunlara aracı virgül veya noktalı virgül gibi karakterleri sınır kabul ederek veriyi ayrı sütunlara yerleştirir.",
                    "speechText": "Tek bir sütuna sıkışmış virgüllü verileri Metinden Sütunlara Sihirbazı ile kolayca Ad, Soyad ve Şehir sütunlarına bölebiliriz.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t16_1_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine ilk ayrıştırılmış ad olarak 'Ahmet' yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "İlk kaydın adını 'Ahmet' olarak yazın.",
                              "B2 hücresine tam olarak 'Ahmet' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Metinden Sütunlara: Ayrılmış (Delimited) ile Veri Bölme görevini başarıyla tamamladınız.",
                              "expectedValue": "Ahmet"
                    }
          }
],
        quiz: {
          "id": "q16_1",
          "title": "Metinden Sütunlara: Ayrılmış (Delimited) ile Veri Bölme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_1_1",
                              "question": "Virgülle ayrılmış bir metni bölerken hangi ayraç seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Virgül (Comma)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Boşluk"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sekme (Tab)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sabit Genişlik"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri virgülle ayrıldığı için ayraç olarak Virgül seçilmelidir.",
                              "measuredSkill": "Metinden Sütunlara Ayraç Seçimi"
                    }
          ]
}
      },
      {
        id: "sec16_l2",
        phaseId: 16,
        unitId: "u16_2",
        title: "Metinden Sütunlara: Sabit Genişlik (Fixed Width)",
        shortDesc: "Karakter sayısına göre belirlenmiş kolon sınırlarıyla sabit formatlı verileri bölme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Metinden Sütunlara",
        primaryGoal: "Karakter sınırlarına çizgi koyarak sabit genişlikli metinleri ayırmak.",
        prerequisites: ["sec16_l1"],
        commonMistakes: ["Karakter genişliği değişen alanlarda sabit genişlik kullanmak"],
        successCriteria: "Sabit genişlik ayırma yöntemini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Metinden Sütunlara"],
        initialWorkbook: createTableSheet("s16_2", "SabitGenislik", ["Banka Kodu", "Banka", "Şube"], [["BNK01001", "", ""], ["BNK01002", "", ""], ["BNK02001", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metinden Sütunlara: Sabit Genişlik (Fixed Width)",
                    "description": "Karakter sınırlarına çizgi koyarak sabit genişlikli metinleri ayırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_2",
                    "title": "Sabit Karakter Genişliği",
                    "explanation": "Her satırda ilk 5 karakter banka kodu, sonraki 3 karakter şube koduysa sabit genişlik sütun oku eklenerek veriler ayrıştırılır.",
                    "speechText": "Sabit genişlikte ayraç gerekmez; karakter pozisyonlarına cetvel çizgisi koyarak bölme yapılır.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t16_2_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine ilk 5 karakterlik banka kodu olarak 'BNK01' yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "'BNK01' değerini yazın.",
                              "B2 hücresine 'BNK01' yazarak doğrulayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Metinden Sütunlara: Sabit Genişlik (Fixed Width) görevini başarıyla tamamladınız.",
                              "expectedValue": "BNK01"
                    }
          }
],
        quiz: {
          "id": "q16_2",
          "title": "Metinden Sütunlara: Sabit Genişlik (Fixed Width) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_2_1",
                              "question": "Sabit genişlik yöntemi hangi veriler için uygundur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Her satırda karakter sayısı aynı olan standart veriler"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Virgülle ayrılmış dinamik metinler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Düzensiz web verileri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boşluklu serbest cümleler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sabit genişlik, her satırdaki alan uzunluğu kesin olarak bilinen verilerde kullanılır.",
                              "measuredSkill": "Sabit Genişlik Mantığı"
                    }
          ]
}
      },
      {
        id: "sec16_l3",
        phaseId: 16,
        unitId: "u16_3",
        title: "Metin Birleştirme: & Operatörü ve BİRLEŞTİR",
        shortDesc: "Farklı sütunlardaki ad ve soyadları araya boşluk koyarak tek hücrede birleştirme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Metin Birleştirme",
        primaryGoal: "& operatörüyle metin ve hücre başvurularını bağlamak.",
        prerequisites: ["sec16_l2"],
        commonMistakes: ["Araya boşluk koymayı unutup 'AhmetYılmaz' şeklinde birleştirmek"],
        successCriteria: "Hücreleri metinsel olarak bağlayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["&", "BİRLEŞTİR"],
        initialWorkbook: createTableSheet("s16_3", "BirlestirSayfasi", ["Ad", "Soyad", "Tam Ad"], [["Ali", "Koç", ""], ["Selin", "Vural", ""], ["Can", "Tekin", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metin Birleştirme: & Operatörü ve BİRLEŞTİR",
                    "description": "& operatörüyle metin ve hücre başvurularını bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_3",
                    "title": "& ile Hücreleri Bağlama",
                    "explanation": "=A2 & \" \" & B2 formülü A2 hücresindeki adı, araya boşluk karakteri ekleyerek B2'deki soyadla birleştirir.",
                    "speechText": "İki hücreyi araya bir boşluk bırakarak bağlamak için ve işareti ile çift tırnak içinde boşluk kullanırız.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t16_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine '=A2 & \" \" & B2' formülünü yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresine tıklayın.",
                              "=A2 & \" \" & B2 formülünü yazın.",
                              "Formülü tamamlayıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Metin Birleştirme: & Operatörü ve BİRLEŞTİR görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "A2",
                                        "B2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q16_3",
          "title": "Metin Birleştirme: & Operatörü ve BİRLEŞTİR Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_3_1",
                              "question": "Metinleri birleştirirken araya boşluk eklemek için hangi sözdizimi kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "& \" \" &"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "+ \" \" +"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "& SPACE &"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": ", \" \" ,"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de metin birleştirirken boşluk karakteri çift tırnak içinde & ile eklenir.",
                              "measuredSkill": "Metin Birleştirme Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec16_l4",
        phaseId: 16,
        unitId: "u16_4",
        title: "METİNBİRLEŞTİR (TEXTJOIN) ile Dinamik Liste Oluşturma",
        shortDesc: "Belirlenen bir ayraç ile geniş aralıkları ve boş hücreleri yok sayarak birleştirme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Metin Birleştirme",
        primaryGoal: "METİNBİRLEŞTİR fonksiyonunun ayraç ve boşları yoksay parametrelerini kullanmak.",
        prerequisites: ["sec16_l3"],
        commonMistakes: ["Boş hücreleri yoksay (DOĞRU) parametresini YANLIŞ yaparak gereksiz virgüller üretmek"],
        successCriteria: "METİNBİRLEŞTİR fonksiyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["METİNBİRLEŞTİR", "TEXTJOIN"],
        initialWorkbook: createTableSheet("s16_4", "MetinBirlestirTablosu", ["Yetki 1", "Yetki 2", "Yetki 3", "Toplu Yetkiler"], [["Yönetici", "Muhasebe", "Raporlama", ""], ["Satış", "", "Pazarlama", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "METİNBİRLEŞTİR (TEXTJOIN) ile Dinamik Liste Oluşturma",
                    "description": "METİNBİRLEŞTİR fonksiyonunun ayraç ve boşları yoksay parametrelerini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_4",
                    "title": "Modern Metin Birleştirme",
                    "explanation": "=METİNBİRLEŞTİR(\", \"; DOĞRU; A2:C2) formülü aralıktaki tüm değerleri araya virgül koyarak birleştirir ve boş olanları atlar.",
                    "speechText": "Eski BİRLEŞTİR yerine METİNBİRLEŞTİR kullanarak tek formülle onlarca hücreyi birleştirebilirsiniz.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t16_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine '=METİNBİRLEŞTİR(\", \"; DOĞRU; A2:C2)' formülünü yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=METİNBİRLEŞTİR formülünü açın.",
                              "D2'ye '=METİNBİRLEŞTİR(\", \"; DOĞRU; A2:C2)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! METİNBİRLEŞTİR (TEXTJOIN) ile Dinamik Liste Oluşturma görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "METİNBİRLEŞTİR",
                                        "A2:C2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q16_4",
          "title": "METİNBİRLEŞTİR (TEXTJOIN) ile Dinamik Liste Oluşturma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_4_1",
                              "question": "METİNBİRLEŞTİR fonksiyonunda 2. parametre olan DOĞRU ne anlama gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Boş hücreleri yoksay ve birleştirmeye dahil etme"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm metinleri büyük harfe çevir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayısal değerleri metne dönüştür"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca benzersizleri al"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "2. parametre olan DOĞRU/TRUE boş hücrelerin birleştirmede atlanmasını sağlar.",
                              "measuredSkill": "METİNBİRLEŞTİR Parametreleri"
                    }
          ]
}
      },
      {
        id: "sec16_l5",
        phaseId: 16,
        unitId: "u16_5",
        title: "Flash Fill (Hızlı Doldurma - Ctrl+E) ile Ad Soyad Ayırma",
        shortDesc: "İlk satıra elle yazılan örneği baz alarak tüm sütunun otomatik tamamlanması.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Flash Fill",
        primaryGoal: "Ctrl+E ile yapay zekâ destekli desen algılamayı kullanmak.",
        prerequisites: ["sec16_l4"],
        commonMistakes: ["İlk örneği yanlış yazıp Excel'in hatalı desen öğrenmesine neden olmak"],
        successCriteria: "Hızlı doldurma mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Ctrl+E", "Flash Fill"],
        initialWorkbook: createTableSheet("s16_5", "HizliDoldurmaAd", ["Tam İsim", "Ad", "Soyad"], [["Murat Güneş", "Murat", "Güneş"], ["Kemal Yıldız", "", ""], ["Zeynep Arslan", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Flash Fill (Hızlı Doldurma - Ctrl+E) ile Ad Soyad Ayırma",
                    "description": "Ctrl+E ile yapay zekâ destekli desen algılamayı kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_5",
                    "title": "Ctrl + E Zekası",
                    "explanation": "Excel sol sütundaki veriye bakar, sizin yazdığınız 'Murat' örneğini analiz eder ve ilk kelime olduğunu anlayıp alt satırları anında doldurur.",
                    "speechText": "Hızlı doldurma için ilk örneği doğru yazdıktan sonra alt satırda Ctrl+E tuşlarına basmanız yeterlidir.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t16_5_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine 'Kemal' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresine tıklayın.",
                              "'Kemal' yazın.",
                              "B3 hücresine 'Kemal' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Flash Fill (Hızlı Doldurma - Ctrl+E) ile Ad Soyad Ayırma görevini başarıyla tamamladınız.",
                              "expectedValue": "Kemal"
                    }
          }
],
        quiz: {
          "id": "q16_5",
          "title": "Flash Fill (Hızlı Doldurma - Ctrl+E) ile Ad Soyad Ayırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_5_1",
                              "question": "Hızlı Doldurma özelliğini tetikleyen klavye kısayolu hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + E"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + F"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + D"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + R"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de Flash Fill (Hızlı Doldurma) kısayolu Ctrl + E'dir.",
                              "measuredSkill": "Flash Fill Kısayolu"
                    }
          ]
}
      },
      {
        id: "sec16_l6",
        phaseId: 16,
        unitId: "u16_6",
        title: "Flash Fill ile Telefon Numaralarını Formatlama",
        shortDesc: "Düz rakam olarak girilen telefon numaralarını kurumsal formata dönüştürme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Flash Fill",
        primaryGoal: "Desene göre telefon numaralarına parantez ve boşluk eklemek.",
        prerequisites: ["sec16_l5"],
        commonMistakes: ["Eksik basamaklı numaralarda deseni kontrol etmemek"],
        successCriteria: "Metin formatlama desenini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Flash Fill"],
        initialWorkbook: createTableSheet("s16_6", "TelefonFormat", ["Ham Numara", "Formatlı Telefon"], [["5321112233", "0 (532) 111 22 33"], ["5429998877", ""], ["5554443322", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Flash Fill ile Telefon Numaralarını Formatlama",
                    "description": "Desene göre telefon numaralarına parantez ve boşluk eklemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_6",
                    "title": "Telefon Şablonu Çıkarma",
                    "explanation": "Ham rakamları parantez ve boşluklarla formatlayarak yazdığınızda Flash Fill tüm numaraları aynı kurumsal standarda uydurur.",
                    "speechText": "İlk numarayı doğru kurumsal düzende yazdıktan sonra Ctrl+E ile tüm rehberi saniyeler içinde biçimlendirebilirsiniz.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t16_6_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine formatlı numara olarak '0 (542) 999 88 77' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresine tıklayın.",
                              "'0 (542) 999 88 77' yazın.",
                              "Tam olarak '0 (542) 999 88 77' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Flash Fill ile Telefon Numaralarını Formatlama görevini başarıyla tamamladınız.",
                              "expectedValue": "0 (542) 999 88 77"
                    }
          }
],
        quiz: {
          "id": "q16_6",
          "title": "Flash Fill ile Telefon Numaralarını Formatlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_6_1",
                              "question": "Flash Fill ile telefon numarası biçimlendirirken en kritik adım nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İlk örneği istenen tam formatta eksiksiz yazmak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreyi para birimi yapmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sütunu gizlemek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metni formüle bağlamak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Flash Fill örneği referans alarak desen ürettiğinden ilk örnek kusursuz olmalıdır.",
                              "measuredSkill": "Flash Fill Örüntü Tanıma"
                    }
          ]
}
      },
      {
        id: "sec16_l7",
        phaseId: 16,
        unitId: "u16_7",
        title: "Flash Fill ile E-posta Adreslerinden Kullanıcı Adı ve Domain Ayıklama",
        shortDesc: "@ işaretinden önceki kullanıcı adını ve domain uzantısını formülsüz ayrıştırma.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Flash Fill",
        primaryGoal: "E-postalardan kullanıcı adı ve şirket domainini tek hamlede ayıklamak.",
        prerequisites: ["sec16_l6"],
        commonMistakes: ["Noktalı domainlerde (.com.tr) ikinci noktayı kaçırmak"],
        successCriteria: "E-posta verilerini ayrıştırabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Flash Fill"],
        initialWorkbook: createTableSheet("s16_7", "EpostaAyirma", ["E-Posta", "Kullanıcı Adı", "Domain"], [["ahmet.yilmaz@sirket.com", "ahmet.yilmaz", "sirket.com"], ["selin.kaya@holding.com", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Flash Fill ile E-posta Adreslerinden Kullanıcı Adı ve Domain Ayıklama",
                    "description": "E-postalardan kullanıcı adı ve şirket domainini tek hamlede ayıklamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_7",
                    "title": "E-Posta Ayrıştırma",
                    "explanation": "Kullanıcı adı sütununa ahmet.yilmaz, domain sütununa sirket.com yazdığınızda Excel @ işaretini sınır olarak kabul eder.",
                    "speechText": "Formül yazmadan yüzlerce çalışanın e-posta listesinden kullanıcı adlarını ve şirket alan adlarını Flash Fill ile çekebilirsiniz.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t16_7_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine kullanıcı adı olarak 'selin.kaya' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresine tıklayın.",
                              "'selin.kaya' yazın.",
                              "B3 hücresine 'selin.kaya' yazarak onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Flash Fill ile E-posta Adreslerinden Kullanıcı Adı ve Domain Ayıklama görevini başarıyla tamamladınız.",
                              "expectedValue": "selin.kaya"
                    }
          }
],
        quiz: {
          "id": "q16_7",
          "title": "Flash Fill ile E-posta Adreslerinden Kullanıcı Adı ve Domain Ayıklama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_7_1",
                              "question": "Flash Fill karmaşık bir e-postayı bölerken hangi mantığı kullanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sol hücredeki metin parçalarının göreceli konumunu analiz eder"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm kelimeleri harf sırasına dizer"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Veritabanından sorgu çeker"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayısal değerleri toplar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Flash Fill kaynak hücredeki metin parçalarını göreceli pozisyon ve ayıraçlara göre eşleştirir.",
                              "measuredSkill": "Flash Fill Mantıksal Ayrıştırma"
                    }
          ]
}
      },
      {
        id: "sec16_l8",
        phaseId: 16,
        unitId: "u16_8",
        title: "Flash Fill Hata Düzeltme ve İkinci Örnekle Deseni Eğitme",
        shortDesc: "İki isimli veya unvanlı satırlarda hatalı tahminleri ikinci örnek girerek düzeltme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Flash Fill",
        primaryGoal: "İstisnai satırlarda ikinci bir örnek vererek algoritmanın deseni düzeltmesini sağlamak.",
        prerequisites: ["sec16_l7"],
        commonMistakes: ["Hatalı satırı görünce özelliği tamamen kapatmak yerine ikinci örnekle eğitmeyi bilmemek"],
        successCriteria: "Gelişmiş hızlı doldurma düzeltmelerini yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Flash Fill"],
        initialWorkbook: createTableSheet("s16_8", "IkinciOrnek", ["İsim", "Soyad"], [["Ahmet Can Yılmaz", "Yılmaz"], ["Mehmet Ali Kaya", "Kaya"], ["Ayşe Demir", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Flash Fill Hata Düzeltme ve İkinci Örnekle Deseni Eğitme",
                    "description": "İstisnai satırlarda ikinci bir örnek vererek algoritmanın deseni düzeltmesini sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_8",
                    "title": "İki İsimli Kayıtlarda Desen Eğitme",
                    "explanation": "Bazı personellerin iki adı olduğunda Excel son kelimeyi mi yoksa ikinci kelimeyi mi soyad alacağını şaşırabilir. İkinci örneği girerek algoritmayı eğitiriz.",
                    "speechText": "Flash Fill ilk tahminde hata yaparsa vazgeçmeyin; ikinci satıra da doğru cevabı yazdığınızda sistem kuralı anında kavrar.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t16_8_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine soyad olarak 'Demir' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresine tıklayın.",
                              "'Demir' yazın.",
                              "B4 hücresine 'Demir' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Flash Fill Hata Düzeltme ve İkinci Örnekle Deseni Eğitme görevini başarıyla tamamladınız.",
                              "expectedValue": "Demir"
                    }
          }
],
        quiz: {
          "id": "q16_8",
          "title": "Flash Fill Hata Düzeltme ve İkinci Örnekle Deseni Eğitme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_8_1",
                              "question": "Flash Fill bazı satırlarda hatalı tahmin yaptığında ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hatalı tahmin yapılan hücreye doğru değer yazılarak desen eğitilmelidir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Çalışma kitabı kapatılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tüm formüller silinmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel yeniden yüklenmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Flash Fill'e ikinci veya üçüncü bir örnek verilerek doğru algoritma öğretilir.",
                              "measuredSkill": "Flash Fill Hata Düzeltme"
                    }
          ]
}
      },
      {
        id: "sec16_l9",
        phaseId: 16,
        unitId: "u16_9",
        title: "KIRP (TRIM) ve TEMİZLE (CLEAN) ile Görünmez Boşlukları Silme",
        shortDesc: "Metin başı ve sonundaki gereksiz boşlukları ve yazdırılamayan sistem karakterlerini yok etme.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Veri Temizleme",
        primaryGoal: "KIRP fonksiyonuyla DÜŞEYARA aramalarını bozan gizli boşlukları temizlemek.",
        prerequisites: ["sec16_l8"],
        commonMistakes: ["Kelime aralarındaki tek boşlukların silineceğini sanmak (KIRP sadece gereksiz çift ve kenar boşlukları siler)"],
        successCriteria: "KIRP fonksiyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["KIRP", "TRIM"],
        initialWorkbook: createTableSheet("s16_9", "KirpSayfasi", ["Ham Kod", "Temiz Kod"], [["  TR-1001  ", ""], ["  TR-1002", ""], ["TR-1003 ", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "KIRP (TRIM) ve TEMİZLE (CLEAN) ile Görünmez Boşlukları Silme",
                    "description": "KIRP fonksiyonuyla DÜŞEYARA aramalarını bozan gizli boşlukları temizlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_9",
                    "title": "Görünmez Hata Kaynağı: Boşluklar",
                    "explanation": "=KIRP(A2) formülü metnin başında ve sonunda bulunan tüm boşlukları siler. Kelimelerin arasındaki çift boşlukları da tek boşluğa indirir.",
                    "speechText": "ERP sistemlerinden çekilen verilerde arama formüllerinin çalışmamasının bir numaralı sebebi görünmeyen kenar boşluklarıdır. KIRP ile temizleyin.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t16_9_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine '=KIRP(A2)' formülünü yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=KIRP formülünü yazın.",
                              "B2 hücresine '=KIRP(A2)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! KIRP (TRIM) ve TEMİZLE (CLEAN) ile Görünmez Boşlukları Silme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "KIRP",
                                        "A2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q16_9",
          "title": "KIRP (TRIM) ve TEMİZLE (CLEAN) ile Görünmez Boşlukları Silme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_9_1",
                              "question": "KIRP (TRIM) fonksiyonu kelimeler arasındaki boşluklara ne yapar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çift veya çoklu boşlukları tek bir standart boşluğa indirir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm kelimeleri bitişik yazar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Araya tire işareti koyar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kelimeleri siler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "KIRP baş ve sondaki tüm boşlukları siler, aradaki fazla boşlukları ise tek boşluğa düşürür.",
                              "measuredSkill": "KIRP Fonksiyonu Mantığı"
                    }
          ]
}
      },
      {
        id: "sec16_l10",
        phaseId: 16,
        unitId: "u16_10",
        title: "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ Fonksiyonları",
        shortDesc: "Metinlerin harf büyüklüklerini kurumsal standartlara kavuşturma.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Harf Standartları",
        primaryGoal: "YAZIM.DÜZENİ ile her kelimenin ilk harfini büyük yapıp diğerlerini küçük harfe dönüştürmek.",
        prerequisites: ["sec16_l9"],
        commonMistakes: ["Türkçe karakterlerde (İ, I, ş, ç) karakter kümesi uyumsuzluğuna dikkat etmemek"],
        successCriteria: "Metin harf fonksiyonlarını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["YAZIM.DÜZENİ", "PROPER"],
        initialWorkbook: createTableSheet("s16_10", "HarfDuzenSayfasi", ["Ham İsim", "Düzgün Format"], [["ahmet can yılmaz", ""], ["SERKAN DEMİR", ""], ["zEYNEP aK", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ Fonksiyonları",
                    "description": "YAZIM.DÜZENİ ile her kelimenin ilk harfini büyük yapıp diğerlerini küçük harfe dönüştürmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_10",
                    "title": "YAZIM.DÜZENİ (PROPER)",
                    "explanation": "=YAZIM.DÜZENİ(A2) formülü metindeki her bir kelimenin ilk harfini büyük, kalan harflerini küçük harfe çevirerek mükemmel bir isim formatı oluşturur.",
                    "speechText": "Düzensiz girilmiş müşteri isimlerini tek tıkla kurumsal yazım standardına dönüştürmek için YAZIM.DÜZENİ fonksiyonunu kullanırız.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t16_10_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine '=YAZIM.DÜZENİ(A2)' formülünü yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=YAZIM.DÜZENİ formülünü açın.",
                              "B2'ye '=YAZIM.DÜZENİ(A2)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ Fonksiyonları görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "YAZIM.DÜZENİ",
                                        "A2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q16_10",
          "title": "BÜYÜKHARF, KÜÇÜKHARF ve YAZIM.DÜZENİ Fonksiyonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_10_1",
                              "question": "Her kelimenin ilk harfini büyük, diğer harflerini küçük yapan Excel fonksiyonu hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "YAZIM.DÜZENİ (PROPER)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "BÜYÜKHARF (UPPER)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "KÜÇÜKHARF (LOWER)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İLKHARF"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YAZIM.DÜZENİ fonksiyonu baş harfleri büyük, geri kalan harfleri küçük yapar.",
                              "measuredSkill": "Metin Kasa Fonksiyonları"
                    }
          ]
}
      },
      {
        id: "sec16_l11",
        phaseId: 16,
        unitId: "u16_11",
        title: "Gerçek Kurumsal Veri Temizleme ve Standardizasyon Projesi",
        shortDesc: "Tüm metin araçlarını birleştirerek ham veriyi analize hazır hale getirme bitirme görevi.",
        category: "Metin Dönüşümleri & Hızlı Doldurma",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "KIRP, YAZIM.DÜZENİ ve ayraçları bir arada kullanarak ham CRM verisini temizlemek.",
        prerequisites: ["sec16_l10"],
        commonMistakes: ["Temizlenen verileri Değer Olarak Yapıştırmadan kaynak sütunları silmek"],
        successCriteria: "Kurumsal veri temizleme sürecini yönetebilmek.",
        level: "Orta",
        durationMinutes: 15,
        functionsUsed: ["KIRP", "YAZIM.DÜZENİ"],
        initialWorkbook: createTableSheet("s16_11", "VeriTemizlemeProjesi", ["Ham Müşteri", "Temizlenmiş Müşteri"], [["  ahmet kaya  ", ""], ["  selin demir ", ""], ["can öztürk ", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Gerçek Kurumsal Veri Temizleme ve Standardizasyon Projesi",
                    "description": "KIRP, YAZIM.DÜZENİ ve ayraçları bir arada kullanarak ham CRM verisini temizlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts16_11",
                    "title": "Kurumsal Veri Temizliği Mimarisi",
                    "explanation": "=YAZIM.DÜZENİ(KIRP(A2)) formülü iç içe çalışarak önce kenardaki kirli boşlukları atar, ardından baş harfleri büyüterek mükemmel sonuç üretir.",
                    "speechText": "Bu projede iki fonksiyonu birleştirerek tek hamlede hem boşluk temizliği hem de harf standardizasyonu yapıyoruz.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t16_11_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine '=YAZIM.DÜZENİ(KIRP(A2))' formülünü yazın.",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "İç içe =YAZIM.DÜZENİ(KIRP(A2)) formülünü yazın.",
                              "B2 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Gerçek Kurumsal Veri Temizleme ve Standardizasyon Projesi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "YAZIM.DÜZENİ",
                                        "KIRP",
                                        "A2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q16_11",
          "title": "Gerçek Kurumsal Veri Temizleme ve Standardizasyon Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_16_11_1",
                              "question": "Temizlenen formüllü verileri kalıcı hale getirip kaynak sütunları güvenle silmek için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kopyala > Özel Yapıştır > Yalnızca Değerleri Yapıştır uygulanmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Çalışma kitabı kaydedilip kapatılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül çubuğuna çift tıklanmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreler kilitlenmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değerleri yapıştırmak formül bağımlılığını kaldırır ve statik temiz veri bırakır.",
                              "measuredSkill": "Veri Dondurma ve Temizleme"
                    }
          ]
}
      }
    ]
  },
  {
    id: 17,
    category: "Veri Doğrulama & Koşullu Biçimlendirme",
    title: "17. Veri Doğrulama ve Koşullu Biçimlendirme",
    subtitle: "Açılır Listeler, Kural Önceliği, Formüle Dayalı Renklendirme ve Giriş Sınırlamaları",
    iconName: "CheckCircle2",
    description: "Açılır menüler, dinamik liste kaynakları, sayı/tarih kısıtlamaları, özel formülle doğrulama, formüle dayalı koşullu biçimlendirme ve kural hiyerarşisi yönetimi.",
    lessons: [
      {
        id: "sec17_l1",
        phaseId: 17,
        unitId: "u17_1",
        title: "Veri Doğrulama: Liste ile Açılır Menü (Dropdown) Oluşturma",
        shortDesc: "Hücreye yalnızca belirlenen seçeneklerin girilmesini sağlayan açılır kutular oluşturma.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Açılır Listeler",
        primaryGoal: "Veri doğrulama liste aracı ile hatalı veri girişini engellemek.",
        prerequisites: ["sec16_l11"],
        commonMistakes: ["Liste elemanlarını ayırırken virgül yerine yanlış karakter kullanmak"],
        successCriteria: "Açılır liste kuralını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Doğrulama"],
        initialWorkbook: createTableSheet("s17_1", "AcilirListe", ["Personel", "Departman", "Durum"], [["Ahmet Yılmaz", "Finans", "Aktif"], ["Selin Kaya", "Pazarlama", "Aktif"], ["Can Tekin", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Doğrulama: Liste ile Açılır Menü (Dropdown) Oluşturma",
                    "description": "Veri doğrulama liste aracı ile hatalı veri girişini engellemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_1",
                    "title": "Açılır Liste Standartları",
                    "explanation": "Veri sekmesinden Veri Doğrulama > İzin Verilen: Liste seçip kaynak olarak 'Finans;Pazarlama;İK;Satış' yazdığınızda hücrede ok belirir.",
                    "speechText": "Kullanıcıların rastgele departman adı yazıp raporları bozmasını engellemek için açılır liste kullanırız.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t17_1_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine listeden geçerli bir departman olarak 'Finans' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "Departman olarak 'Finans' yazın.",
                              "B4 hücresine 'Finans' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Veri Doğrulama: Liste ile Açılır Menü (Dropdown) Oluşturma görevini başarıyla tamamladınız.",
                              "expectedValue": "Finans"
                    }
          }
],
        quiz: {
          "id": "q17_1",
          "title": "Veri Doğrulama: Liste ile Açılır Menü (Dropdown) Oluşturma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_1_1",
                              "question": "Veri Doğrulama iletişim kutusunda açılır menü oluşturmak için hangi izin türü seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Liste (List)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tam Sayı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin Uzunluğu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Özel"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Açılır menü dropdown oluşturmak için İzin Verilen kısmından Liste seçilir.",
                              "measuredSkill": "Veri Doğrulama Liste Tanımlama"
                    }
          ]
}
      },
      {
        id: "sec17_l2",
        phaseId: 17,
        unitId: "u17_2",
        title: "Dinamik Liste Kaynakları ve Başka Sayfadan Liste Çekme",
        shortDesc: "Çalışma kitabındaki başka bir sayfada yer alan dinamik tablo aralığını liste kaynağı yapma.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Açılır Listeler",
        primaryGoal: "=Sayfa2!A2:A10 referansıyla merkezi parametre listesi bağlamak.",
        prerequisites: ["sec17_l1"],
        commonMistakes: ["Başka sayfadaki listeyi aralık yerine elle tekrar yazmak"],
        successCriteria: "Merkezi referanslı liste bağlayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Veri Doğrulama"],
        initialWorkbook: createTableSheet("s17_2", "MerkeziListe", ["Proje Kodu", "Kategori"], [["PRJ-01", "Donanım"], ["PRJ-02", "Yazılım"], ["PRJ-03", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Liste Kaynakları ve Başka Sayfadan Liste Çekme",
                    "description": "=Sayfa2!A2:A10 referansıyla merkezi parametre listesi bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_2",
                    "title": "Merkezi Parametre Listesi",
                    "explanation": "Parametreler sayfasındaki verileri liste kaynağı yapmak için kaynak kutusuna '=Parametreler!$A$2:$A$5' formülü yazılır.",
                    "speechText": "Listeye yeni bir kategori eklendiğinde açılır kutunun otomatik güncellemesi için tablo sütunları referans gösterilir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t17_2_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine kategori olarak 'Donanım' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresine tıklayın.",
                              "'Donanım' yazın.",
                              "B4 hücresine 'Donanım' yazarak görevi tamamlayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Dinamik Liste Kaynakları ve Başka Sayfadan Liste Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "Donanım"
                    }
          }
],
        quiz: {
          "id": "q17_2",
          "title": "Dinamik Liste Kaynakları ve Başka Sayfadan Liste Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_2_1",
                              "question": "Başka bir sayfadaki aralığı liste kaynağı yaparken kaynağın başına ne konulmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Eşittir (=) işareti ve sayfa adı"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "# işareti"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "@ işareti"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tırnak işareti"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Aralık referansları daima = işaretiyle ve SayfaAdı!A1 biçiminde başlatılır.",
                              "measuredSkill": "Dinamik Liste Başvuruları"
                    }
          ]
}
      },
      {
        id: "sec17_l3",
        phaseId: 17,
        unitId: "u17_3",
        title: "Sayı, Ondalık ve Aralık Sınırlamaları",
        shortDesc: "Hücreye yalnızca 0 ile 100 arasında veya pozitif sayılar girilmesine izin verme.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Sayısal Kısıtlamalar",
        primaryGoal: "Tam sayı ve ondalık sınırlama kurallarını ayarlamak.",
        prerequisites: ["sec17_l2"],
        commonMistakes: ["Alt sınır ve üst sınır değerlerini ters girmek"],
        successCriteria: "Sayısal sınır kuralını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Doğrulama"],
        initialWorkbook: createTableSheet("s17_3", "SayiSinirlama", ["Öğrenci No", "Vize Notu (0-100)"], [["101", 85], ["102", 92], ["103", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayı, Ondalık ve Aralık Sınırlamaları",
                    "description": "Tam sayı ve ondalık sınırlama kurallarını ayarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_3",
                    "title": "Sayısal Güvenlik Bariyeri",
                    "explanation": "İzin Verilen: Tam Sayı, Veri: Arasında, En Az: 0, En Çok: 100 olarak ayarlandığında 105 veya negatif sayı girişi engellenir.",
                    "speechText": "Not, indirim oranı ve stok adetleri gibi alanlarda yanlış veri girişini baştan önlemek için sayı aralığı kısıtı koyarız.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t17_3_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine geçerli vize notu olarak 75 girin.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "75 sayısını yazın.",
                              "B4 hücresine 75 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Sayı, Ondalık ve Aralık Sınırlamaları görevini başarıyla tamamladınız.",
                              "expectedValue": 75
                    }
          }
],
        quiz: {
          "id": "q17_3",
          "title": "Sayı, Ondalık ve Aralık Sınırlamaları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_3_1",
                              "question": "0 ile 100 arası not sınırlaması için hangi kural seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tam Sayı > Arasında (En Az: 0, En Çok: 100)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin Uzunluğu > Eşit: 3"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tarih > Büyüktür"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tüm Değerler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Notlar tam sayı olduğundan Tam Sayı ve Arasında seçilerek 0-100 tanımlanır.",
                              "measuredSkill": "Sayısal Aralık Doğrulama"
                    }
          ]
}
      },
      {
        id: "sec17_l4",
        phaseId: 17,
        unitId: "u17_4",
        title: "Tarih ve Saat Sınırlamaları",
        shortDesc: "Yalnızca bugünden sonraki termin tarihlerinin veya mesai saatlerinin girilmesine izin verme.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Tarih Kısıtlamaları",
        primaryGoal: "Tarih sınırlamasında =BUGÜN() fonksiyonunu dinamik alt sınır olarak kullanmak.",
        prerequisites: ["sec17_l3"],
        commonMistakes: ["Tarih yerine metin biçimli gün yazıp doğrulamanın hata vermesine sebep olmak"],
        successCriteria: "Tarih doğrulama kurallarını kurabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Veri Doğrulama", "BUGÜN"],
        initialWorkbook: createTableSheet("s17_4", "TarihSinirlama", ["Görev", "Termin Tarihi"], [["Rapor Teslimi", "2026-12-01"], ["Sistem Güncellemesi", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tarih ve Saat Sınırlamaları",
                    "description": "Tarih sınırlamasında =BUGÜN() fonksiyonunu dinamik alt sınır olarak kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_4",
                    "title": "Dinamik Tarih Filtresi",
                    "explanation": "Tarih doğrulamada Başlangıç Tarihi kutusuna '=BUGÜN()' yazdığınızda geçmişe dönük hatalı sipariş ve termin girişi imkansız hale gelir.",
                    "speechText": "Termin ve randevu tablolarında geçmişe tarih girilmesini engellemek için =BUGÜN() formüllü kısıtlama uygularız.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t17_4_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine ileri bir tarih olarak '2026-12-15' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'2026-12-15' tarihini girin.",
                              "B3 hücresine '2026-12-15' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Tarih ve Saat Sınırlamaları görevini başarıyla tamamladınız.",
                              "expectedValue": "2026-12-15"
                    }
          }
],
        quiz: {
          "id": "q17_4",
          "title": "Tarih ve Saat Sınırlamaları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_4_1",
                              "question": "Geçmiş tarihlerin girilmesini engellemek için başlangıç tarihine hangi formül yazılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=BUGÜN()"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=ŞİMDİ()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=GÜN()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=TARİH()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "=BUGÜN() sistemi dinamik güncel tarihe bağlar ve geçmiş tarih girişini engeller.",
                              "measuredSkill": "Dinamik Tarih Doğrulama"
                    }
          ]
}
      },
      {
        id: "sec17_l5",
        phaseId: 17,
        unitId: "u17_5",
        title: "Özel Formülle Doğrulama (Custom Formula)",
        shortDesc: "TC Kimlik Numarasının 11 hane olması gibi özel iş kurallarını formülle denetleme.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Özel Formül",
        primaryGoal: "=UZUNLUK(A2)=11 kuralıyla özel giriş koşulu tanımlamak.",
        prerequisites: ["sec17_l4"],
        commonMistakes: ["Formül başına = koymayı unutmak"],
        successCriteria: "Özel formülle doğrulama yapabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Veri Doğrulama", "UZUNLUK"],
        initialWorkbook: createTableSheet("s17_5", "OzelFormulSayfasi", ["Personel", "TC Kimlik No"], [["Ali Kaya", "12345678901"], ["Zeynep Şen", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Formülle Doğrulama (Custom Formula)",
                    "description": "=UZUNLUK(A2)=11 kuralıyla özel giriş koşulu tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_5",
                    "title": "Formül Tabanlı Giriş Kuralı",
                    "explanation": "Özel (Custom) seçeneğinde =VE(UZUNLUK(B2)=11; E_SAYIYSA(B2)) yazılarak yalnızca 11 haneli ve tamamen sayılardan oluşan girişlere onay verilir.",
                    "speechText": "Hazır kuralların yetmediği durumlarda mantıksal Excel formülleriyle sınırsız doğrulama senaryosu kurabiliriz.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t17_5_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine geçerli 11 haneli örnek TC olarak '98765432109' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresine tıklayın.",
                              "'98765432109' yazın.",
                              "B3 hücresine '98765432109' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Özel Formülle Doğrulama (Custom Formula) görevini başarıyla tamamladınız.",
                              "expectedValue": "98765432109"
                    }
          }
],
        quiz: {
          "id": "q17_5",
          "title": "Özel Formülle Doğrulama (Custom Formula) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_5_1",
                              "question": "Hücreye girilen metnin tam 11 karakter olmasını zorunlu kılan formül hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=UZUNLUK(A1)=11"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=SAY(A1)=11"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=BASAMAK(A1)=11"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=KARAKTER(A1)=11"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "UZUNLUK (LEN) fonksiyonu karakter sayısını ölçer ve =11 eşitliği kuralı doğrular.",
                              "measuredSkill": "Özel Formül Doğrulama"
                    }
          ]
}
      },
      {
        id: "sec17_l6",
        phaseId: 17,
        unitId: "u17_6",
        title: "Girdi İletisi ve Hata Uyarıları (Durdur, Uyarı, Bilgi)",
        shortDesc: "Hücre seçildiğinde beliren yardım kutuları ve hatalı girişte gösterilen uyarı pencereleri.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Kullanıcı Geri Bildirimi",
        primaryGoal: "Durdur (Stop), Uyarı (Warning) ve Bilgi (Information) uyarı stillerinin farkını yönetmek.",
        prerequisites: ["sec17_l5"],
        commonMistakes: ["Kullanıcıyı bilgilendirmeden varsayılan genel hata mesajı bırakmak"],
        successCriteria: "Profesyonel kullanıcı deneyimi tasarlayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Hata İletileri"],
        initialWorkbook: createTableSheet("s17_6", "HataUyarilari", ["Veri Alanı", "Kullanıcı Notu"], [["İskonto Oranı", "Maksimum %20 girilebilir"], ["Vade", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Girdi İletisi ve Hata Uyarıları (Durdur, Uyarı, Bilgi)",
                    "description": "Durdur (Stop), Uyarı (Warning) ve Bilgi (Information) uyarı stillerinin farkını yönetmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_6",
                    "title": "Kullanıcıya Rehberlik Etme",
                    "explanation": "Hata Uyarısı sekmesinde 'Durdur' katı kural koyar ve yanlış veriyi asla kabul etmez. 'Uyarı' ise kullanıcıya sorarak devam etmesine izin verir.",
                    "speechText": "İyi bir Excel şablonu kullanıcının hata yapmasını beklemez; hücreye tıklandığı an açıklayıcı girdi iletisi gösterir.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t17_6_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine vade kuralı olarak 'Maksimum 90 gün' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'Maksimum 90 gün' yazın.",
                              "B3 hücresine 'Maksimum 90 gün' yazarak onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Girdi İletisi ve Hata Uyarıları (Durdur, Uyarı, Bilgi) görevini başarıyla tamamladınız.",
                              "expectedValue": "Maksimum 90 gün"
                    }
          }
],
        quiz: {
          "id": "q17_6",
          "title": "Girdi İletisi ve Hata Uyarıları (Durdur, Uyarı, Bilgi) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_6_1",
                              "question": "Hatalı verinin kesinlikle hücreye girilmesini engelleyen hata stili hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Durdur (Stop)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Uyarı (Warning)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bilgi (Information)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Soru (Question)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Durdur stili (kırmızı çarpı) geçerli değer girilene kadar işlemi bloke eder.",
                              "measuredSkill": "Hata Uyarısı Düzeyleri"
                    }
          ]
}
      },
      {
        id: "sec17_l7",
        phaseId: 17,
        unitId: "u17_7",
        title: "Koşullu Biçimlendirme: Büyüktür, Küçüktür ve Arasında",
        shortDesc: "Kritik değerlerin, bütçe aşımlarının ve düşük stokların otomatik kırmızı/yeşil renkle vurgulanması.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Koşullu Biçimlendirme",
        primaryGoal: "Hücre Kurallarını Vurgula aracı ile eşik değer renklendirmesi yapmak.",
        prerequisites: ["sec17_l6"],
        commonMistakes: ["Kuralları uyguladıktan sonra sayı biçimini bozmak"],
        successCriteria: "Eşik değer kurallarını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Koşullu Biçimlendirme"],
        initialWorkbook: createTableSheet("s17_7", "EsikBicimlendirme", ["Ürün", "Stok", "Durum"], [["Laptop", 12, "Normal"], ["Monitör", 4, "Kritik"], ["Klavye", 25, "Bol"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Koşullu Biçimlendirme: Büyüktür, Küçüktür ve Arasında",
                    "description": "Hücre Kurallarını Vurgula aracı ile eşik değer renklendirmesi yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_7",
                    "title": "Görsel Alarm Sistemi",
                    "explanation": "Stok 5'in altına düştüğünde hücreyi otomatik açık kırmızı dolgu ve koyu kırmızı metin ile boyayarak sipariş alarmı veririz.",
                    "speechText": "Koşullu biçimlendirme sayesinde yüzlerce satırlık tabloda kritik sapmaları tek bakışta görebilirsiniz.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t17_7_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine durum uyarısı olarak 'Kritik Stok' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresine tıklayın.",
                              "'Kritik Stok' yazın.",
                              "C3 hücresine 'Kritik Stok' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Koşullu Biçimlendirme: Büyüktür, Küçüktür ve Arasında görevini başarıyla tamamladınız.",
                              "expectedValue": "Kritik Stok"
                    }
          }
],
        quiz: {
          "id": "q17_7",
          "title": "Koşullu Biçimlendirme: Büyüktür, Küçüktür ve Arasında Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_7_1",
                              "question": "Koşullu biçimlendirmede 10.000 TL üzerindeki satışları vurgulamak için hangi kural tipi seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücre Kurallarını Vurgula > Büyüktür"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "İlk/Son Kuralları > Son 10"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Renk Ölçekleri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin Uzunluğu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Belli bir sayının üstündeki değerler için 'Büyüktür (Greater Than)' kuralı kullanılır.",
                              "measuredSkill": "Hücre Vurgulama Kuralları"
                    }
          ]
}
      },
      {
        id: "sec17_l8",
        phaseId: 17,
        unitId: "u17_8",
        title: "İlk/Son Kuralları ve Veri Çubukları (Data Bars)",
        shortDesc: "En yüksek ciro yapan ilk %10'u belirleme ve hücre içine minyatür yatay çubuk grafik yerleştirme.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Veri Çubukları",
        primaryGoal: "Veri Çubukları ile hücre değerine orantılı grafiksel dolgu uygulamak.",
        prerequisites: ["sec17_l7"],
        commonMistakes: ["Negatif değerlerde çubuk yönünün otomatik sola uzadığını bilmemek"],
        successCriteria: "Veri çubukları ve ilk/son kurallarını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Veri Çubukları"],
        initialWorkbook: createTableSheet("s17_8", "VeriCubuklariSayfasi", ["Temsilci", "Satış Tutarı", "Grafik"], [["Ahmet", 150000, "En Yüksek"], ["Mehmet", 95000, "Orta"], ["Ayşe", 120000, "Yüksek"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İlk/Son Kuralları ve Veri Çubukları (Data Bars)",
                    "description": "Veri Çubukları ile hücre değerine orantılı grafiksel dolgu uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_8",
                    "title": "Hücre İçi Bar Grafikler",
                    "explanation": "Veri Çubukları her sayının büyüklüğünü hücrenin içinde bir çubuk olarak çizer. En büyük değer hücreyi tam doldurur, diğerleri oranlanır.",
                    "speechText": "Ayrı bir grafik çizmeden doğrudan veri tablosunun içinde satış hacmini görselleştirmek için Veri Çubukları idealdir.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t17_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine performans etiketi olarak 'Lider' yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Lider' yazın.",
                              "C2 hücresine 'Lider' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! İlk/Son Kuralları ve Veri Çubukları (Data Bars) görevini başarıyla tamamladınız.",
                              "expectedValue": "Lider"
                    }
          }
],
        quiz: {
          "id": "q17_8",
          "title": "İlk/Son Kuralları ve Veri Çubukları (Data Bars) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_8_1",
                              "question": "Veri Çubukları (Data Bars) özelliğinin temel avantajı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ayrı bir grafik açmadan hücre içinde değerle orantılı çubuk göstermesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreyi silmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Verileri otomatik toplaması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formül çubuğunu gizlemesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri çubukları hücre içi görselleştirme sağlayarak hızlı karşılaştırma imkanı verir.",
                              "measuredSkill": "Veri Çubukları Görselleştirme"
                    }
          ]
}
      },
      {
        id: "sec17_l9",
        phaseId: 17,
        unitId: "u17_9",
        title: "Renk Ölçekleri (Heatmap) ve Simge Kümeleri (Icon Sets)",
        shortDesc: "Isı haritası renklendirmesi ve yeşil/sarı/kırmızı trafik ışığı simgeleriyle performans gösterimi.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Simge Kümeleri",
        primaryGoal: "Trafik ışıkları ve onay/çarpı simgeleriyle KPI durumunu göstermek.",
        prerequisites: ["sec17_l8"],
        commonMistakes: ["Simge kurallarında yüzde (%) yerine sayısal (Number) eşik seçmeyi unutmak"],
        successCriteria: "Isı haritası ve simge kurallarını yönetebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Simge Kümeleri"],
        initialWorkbook: createTableSheet("s17_9", "SimgeSayfasi", ["Şube", "Hedef Gerçekleşme %", "Sinyal"], [["Kadıköy", 1.15, "Yeşil"], ["Beşiktaş", 0.95, "Sarı"], ["Şişli", 0.65, "Kırmızı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Renk Ölçekleri (Heatmap) ve Simge Kümeleri (Icon Sets)",
                    "description": "Trafik ışıkları ve onay/çarpı simgeleriyle KPI durumunu göstermek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_9",
                    "title": "Trafik Işıklarıyla Hızlı Karar",
                    "explanation": "Simge Kümeleri (Icon Sets) ile %100 ve üzeri yeşil onay işareti, %80-100 arası sarı ünlem, altı ise kırmızı çarpı ile gösterilir.",
                    "speechText": "Yöneticiler tablolardaki rakamları tek tek okumak yerine simgelerin renklerine bakarak acil müdahale gereken şubeleri anında tespit eder.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t17_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine sinyal rengi olarak 'Yeşil Işık' yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresine tıklayın.",
                              "'Yeşil Işık' yazın.",
                              "C2 hücresine 'Yeşil Işık' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Renk Ölçekleri (Heatmap) ve Simge Kümeleri (Icon Sets) görevini başarıyla tamamladınız.",
                              "expectedValue": "Yeşil Işık"
                    }
          }
],
        quiz: {
          "id": "q17_9",
          "title": "Renk Ölçekleri (Heatmap) ve Simge Kümeleri (Icon Sets) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_9_1",
                              "question": "Simge kümelerinde hedefleri kesin değerlerle belirlemek için tür ne seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayı (Number)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yüzde (Percent)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kesin tutarlar (örn: 100.000 TL) için türün 'Sayı' olarak değiştirilmesi şarttır.",
                              "measuredSkill": "Simge Kümeleri Eşik Ayarı"
                    }
          ]
}
      },
      {
        id: "sec17_l10",
        phaseId: 17,
        unitId: "u17_10",
        title: "Formüle Dayalı Koşullu Biçimlendirme ile Tüm Satırı Boyama",
        shortDesc: "Hücre değerine bakarak tablodaki ilgili satırın tamamını renklendiren $ sabitleme tekniği.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Gelişmiş Formül Kuralları",
        primaryGoal: "=$C2=\"Tamamlandı\" formülüyle sütun sabitleyerek tüm satırı renklendirmek.",
        prerequisites: ["sec17_l9"],
        commonMistakes: ["Formülde $ işaretini koymayıp ($C2 yerine C2 yazıp) satır yerine çapraz hücreleri boyamak"],
        successCriteria: "Tüm satırı renklendirme tekniğini kavramak.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Koşullu Biçimlendirme", "Formül"],
        initialWorkbook: createTableSheet("s17_10", "SatirBoyamaSayfasi", ["Sipariş ID", "Müşteri", "Durum"], [["SP-101", "Demir Ltd", "İptal"], ["SP-102", "Kaya A.Ş.", "Teslim"], ["SP-103", "Yıldız Sanayi", "İptal"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formüle Dayalı Koşullu Biçimlendirme ile Tüm Satırı Boyama",
                    "description": "=$C2=\"Tamamlandı\" formülüyle sütun sabitleyerek tüm satırı renklendirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_10",
                    "title": "Satır Boyamanın Sırrı: $C2",
                    "explanation": "Formülü Kullan kuralında '=$C2=\"İptal\"' yazıldığında C sütunu sabitlenir. A2, B2 ve C2 hücrelerinin tümü C2'deki değere bakar ve satır komple boyanır.",
                    "speechText": "Excel'de tüm satırı renklendirmenin altın kuralı formüldeki sütun harfinin önüne dolar işareti koymaktır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t17_10_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine iptal satırını işaretlemek için '=$C4=\"İptal\"' formül kuralını not edin.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=$C4=\"İptal\" yazın.",
                              "C4 hücresine formül metnini yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Formüle Dayalı Koşullu Biçimlendirme ile Tüm Satırı Boyama görevini başarıyla tamamladınız.",
                              "expectedValue": "=$C4=\"İptal\""
                    }
          }
],
        quiz: {
          "id": "q17_10",
          "title": "Formüle Dayalı Koşullu Biçimlendirme ile Tüm Satırı Boyama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_10_1",
                              "question": "Formülle tüm satırı renklendirirken sütun harfinin önüne neden $ işareti konur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Satırdaki diğer sütunların da aynı hedef sütunu kontrol etmesini sağlamak için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreyi kilitlemek için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Para birimi yapmak için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formülü gizlemek için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dolar işareti ($C2) referansın sağa kaymasını önler, tüm satır C sütununa göre boyanır.",
                              "measuredSkill": "Formülle Satır Renklendirme"
                    }
          ]
}
      },
      {
        id: "sec17_l11",
        phaseId: 17,
        unitId: "u17_11",
        title: "Kural Yöneticisi, Kural Önceliği ve 'Doğruysa Durdur' (Stop If True)",
        shortDesc: "Çakışan birden fazla biçimlendirme kuralının çalışma sırasını ve hiyerarşisini yönetme.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Kural Yönetimi",
        primaryGoal: "Kural Yöneticisi penceresinde yukarı/aşağı oklarla öncelik belirlemek.",
        prerequisites: ["sec17_l10"],
        commonMistakes: ["Üstteki kuralın alttaki kuralı ezdiğini fark etmeyip biçimin neden değişmediğini anlayamamak"],
        successCriteria: "Kural önceliğini ve Stop If True seçeneğini yönetebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Kural Yöneticisi"],
        initialWorkbook: createTableSheet("s17_11", "KuralYonetimiSayfasi", ["Kural Adı", "Öncelik Sırası", "Durum"], [["Kırmızı İptal Satırı", "1. Öncelik", "Aktif"], ["Sarı Uyarı", "2. Öncelik", "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kural Yöneticisi, Kural Önceliği ve 'Doğruysa Durdur' (Stop If True)",
                    "description": "Kural Yöneticisi penceresinde yukarı/aşağı oklarla öncelik belirlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_11",
                    "title": "Kural Hiyerarşisi",
                    "explanation": "Kural Yöneticisinde en üstteki kural en yüksek önceliğe sahiptir. 'Doğruysa Durdur' işaretlenirse ilk kural sağlandığında alt kurallar çalıştırılmaz.",
                    "speechText": "Birden çok kural tanımlandığında renklerin birbirine karışmaması için kural öncelik sıralaması hayati önem taşır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t17_11_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine kural durumu olarak 'Doğruysa Durdur' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresine tıklayın.",
                              "'Doğruysa Durdur' yazın.",
                              "C3 hücresine 'Doğruysa Durdur' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Kural Yöneticisi, Kural Önceliği ve 'Doğruysa Durdur' (Stop If True) görevini başarıyla tamamladınız.",
                              "expectedValue": "Doğruysa Durdur"
                    }
          }
],
        quiz: {
          "id": "q17_11",
          "title": "Kural Yöneticisi, Kural Önceliği ve 'Doğruysa Durdur' (Stop If True) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_11_1",
                              "question": "'Doğruysa Durdur' (Stop If True) onay kutusunun görevi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Mevcut kural eşleştiğinde daha alttaki kuralların işlenmesini durdurur"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel'i kapatır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücreyi temizler"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Biçimlendirmeyi iptal eder"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Stop If True, koşul sağlandığında alt sıralardaki kuralları çalıştırmayı keser.",
                              "measuredSkill": "Kural Hiyerarşisi Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec17_l12",
        phaseId: 17,
        unitId: "u17_12",
        title: "Veri Doğrulama ve Koşullu Biçimlendirme Bütünleşik Vaka Sınavı",
        shortDesc: "Hatalı veri girişini engelleyen açılır kutular ve dinamik satır renklendirmesini bir arada uygulama projesi.",
        category: "Veri Doğrulama & Koşullu Biçimlendirme",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Doğrulama ve koşullu renklendirmeyi profesyonel form tasarımında birleştirmek.",
        prerequisites: ["sec17_l11"],
        commonMistakes: ["Doğrulama ile koşullu biçimlendirme kurallarının alan aralıklarını eşleştirmemek"],
        successCriteria: "Bütünleşik form tasarımı yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Veri Doğrulama", "Koşullu Biçimlendirme"],
        initialWorkbook: createTableSheet("s17_12", "ButunlesikProje", ["Sipariş No", "Durum", "Öncelik", "Onay"], [["ORD-501", "Tamamlandı", "Yüksek", "Onaylandı"], ["ORD-502", "Beklemede", "Kritik", "İncelemede"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Doğrulama ve Koşullu Biçimlendirme Bütünleşik Vaka Sınavı",
                    "description": "Doğrulama ve koşullu renklendirmeyi profesyonel form tasarımında birleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts17_12",
                    "title": "Profesyonel Form Mimarisi",
                    "explanation": "Bu projede Durum sütununa Veri Doğrulama ile açılır liste ekledik; Öncelik sütunu 'Kritik' olduğunda ise tüm satır otomatik kırmızıya boyanıyor.",
                    "speechText": "Kurumsal formlarda veri doğruluğunu garanti altına alıp kritik durumları görselleştiren eksiksiz bir sistem kurdunuz.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t17_12_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine onay durumu olarak 'Onaylandı' yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Onaylandı' yazın.",
                              "D2 hücresine 'Onaylandı' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Veri Doğrulama ve Koşullu Biçimlendirme Bütünleşik Vaka Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q17_12",
          "title": "Veri Doğrulama ve Koşullu Biçimlendirme Bütünleşik Vaka Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_17_12_1",
                              "question": "Kurumsal bir veri giriş şablonunda en yüksek veri güvenliği nasıl sağlanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri Doğrulama ile giriş sınırlandırılır, Koşullu Biçimlendirme ile hatalar görselleştirilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm hücreler gizlenir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca PDF olarak kaydedilir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formüller silinir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri Doğrulama ve Koşullu Biçimlendirme birlikte kullanıldığında kurumsal standart sağlanır.",
                              "measuredSkill": "Bütünleşik Form Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 18,
    category: "Grafikler & Veri Görselleştirme",
    title: "18. Grafikler ve Veri Görselleştirme",
    subtitle: "Grafik Seçimi, Birleşik Grafikler, İkincil Eksen, Sparklines ve İş Raporlaması",
    iconName: "BarChart3",
    description: "Grafik türü seçimi, seri ve eksen yönetimi, birleşik (combo) grafikler, ikincil eksen, hücre içi mini grafikler (sparklines), dinamik aralıklar ve yanıltıcı grafik tasarım hatalarını düzeltme.",
    lessons: [
      {
        id: "sec18_l1",
        phaseId: 18,
        unitId: "u18_1",
        title: "Doğru Grafik Türünü Seçme: Sütun, Çubuk, Çizgi ve Pasta",
        shortDesc: "Veri tipine göre en uygun görselleştirme türünü belirleme ilkeleri.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Grafik Seçimi",
        primaryGoal: "Zaman serileri için çizgi, kategorik karşılaştırma için sütun/çubuk grafiği seçmek.",
        prerequisites: ["sec17_l12"],
        commonMistakes: ["Zaman içindeki değişimi pasta grafikle göstermeye çalışmak"],
        successCriteria: "Doğru grafik türü seçimini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Grafikler"],
        initialWorkbook: createTableSheet("s18_1", "GrafikSecimi", ["Dönem", "Satış", "Önerilen Grafik"], [["Ocak", 120000, "Çizgi Grafiği"], ["Şubat", 145000, "Çizgi Grafiği"], ["Mart", 180000, "Çizgi Grafiği"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Doğru Grafik Türünü Seçme: Sütun, Çubuk, Çizgi ve Pasta",
                    "description": "Zaman serileri için çizgi, kategorik karşılaştırma için sütun/çubuk grafiği seçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_1",
                    "title": "Grafik Seçim Matrisi",
                    "explanation": "Zaman serileri ve trendler için Çizgi (Line), kategoriler ve departman karşılaştırmaları için Sütun (Column) grafiği tercih edilir.",
                    "speechText": "Yanlış grafik türü seçimi veriyi anlaşılmaz kılar; zaman serilerinde daima çizgi veya sütun grafiği kullanılır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t18_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine zaman serisi için önerilen grafik olarak 'Çizgi Grafiği' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Çizgi Grafiği' yazın.",
                              "C4 hücresine 'Çizgi Grafiği' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Doğru Grafik Türünü Seçme: Sütun, Çubuk, Çizgi ve Pasta görevini başarıyla tamamladınız.",
                              "expectedValue": "Çizgi Grafiği"
                    }
          }
],
        quiz: {
          "id": "q18_1",
          "title": "Doğru Grafik Türünü Seçme: Sütun, Çubuk, Çizgi ve Pasta Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_1_1",
                              "question": "Aylara göre satış trendini göstermek için en uygun grafik türü hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çizgi Grafiği (Line Chart)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Pasta Grafiği (Pie Chart)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Halka Grafiği"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Radar Grafiği"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Zaman içindeki artış/azalış trendlerini en temiz gösteren tür Çizgi grafiğidir.",
                              "measuredSkill": "Grafik Türü Seçimi"
                    }
          ]
}
      },
      {
        id: "sec18_l2",
        phaseId: 18,
        unitId: "u18_2",
        title: "Veri Serilerini Ekleme, Kaldırma ve Eksen Başlıklarını Düzenleme",
        shortDesc: "Grafiğe yeni ürün veya yıl serileri ekleme ve veri kaynağı aralığını güncelleme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Seri Yönetimi",
        primaryGoal: "Veri Seç (Select Data) arayüzü ile serileri ve yatay kategori etiketlerini düzenlemek.",
        prerequisites: ["sec18_l1"],
        commonMistakes: ["Başlıkları veri serisi olarak grafiğe dahil edip ekseni kaydırmak"],
        successCriteria: "Seri yönetimini gerçekleştirebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Veri Seç"],
        initialWorkbook: createTableSheet("s18_2", "SeriYonetimi", ["Kategori", "2025 Satış", "2026 Satış"], [["Marmara", 250000, 310000], ["Ege", 180000, 220000], ["İç Anadolu", 140000, 190000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Serilerini Ekleme, Kaldırma ve Eksen Başlıklarını Düzenleme",
                    "description": "Veri Seç (Select Data) arayüzü ile serileri ve yatay kategori etiketlerini düzenlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_2",
                    "title": "Çoklu Seri Yönetimi",
                    "explanation": "Grafik Tasarımı sekmesinden 'Veri Seç' tıklanarak yeni seri adı ve seri değerleri aralığı bağımsız olarak seçilebilir.",
                    "speechText": "Grafiğe ikinci bir yılı eklerken serileri ayırmak, karşılaştırmalı analizin temel taşıdır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t18_2_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine serinin toplam satış değerini '=TOPLA(C2:C4)' formülüyle hesaplayın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "C4'e '=TOPLA(C2:C4)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Veri Serilerini Ekleme, Kaldırma ve Eksen Başlıklarını Düzenleme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q18_2",
          "title": "Veri Serilerini Ekleme, Kaldırma ve Eksen Başlıklarını Düzenleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_2_1",
                              "question": "Mevcut bir grafiğe yeni bir veri sütunu eklemek için hangi buton kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri Seç (Select Data)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Stil Değiştir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafik Taşı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtreyi Temizle"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri Seç penceresi serilerin eklenmesi ve eksen aralıklarının güncellenmesini sağlar.",
                              "measuredSkill": "Veri Serisi Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec18_l3",
        phaseId: 18,
        unitId: "u18_3",
        title: "Grafik Eksenleri, Birim Aralıkları ve Logaritmik Ölçek Ayarları",
        shortDesc: "Dikey eksen minimum/maksimum sınırlarını sabitleme ve büyük farklarda logaritmik ölçekleme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Eksen Ayarları",
        primaryGoal: "Ekseni Biçimlendir penceresinde alt/üst sınırları ve ana birim aralıklarını ayarlamak.",
        prerequisites: ["sec18_l2"],
        commonMistakes: ["Eksen minimumunu sıfır yapmayıp küçük farkları devasa gibi göstererek yanıltmak"],
        successCriteria: "Eksen ölçeklendirmesini yönetebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Eksen Ayarları"],
        initialWorkbook: createTableSheet("s18_3", "EksenSayfasi", ["Dönem", "Kar Marjı %", "Eksen Alt Sınır"], [["Q1", 0.18, 0.0], ["Q2", 0.22, 0.0], ["Q3", 0.25, 0.0]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Grafik Eksenleri, Birim Aralıkları ve Logaritmik Ölçek Ayarları",
                    "description": "Ekseni Biçimlendir penceresinde alt/üst sınırları ve ana birim aralıklarını ayarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_3",
                    "title": "Dürüst ve Doğru Eksen Ölçekleme",
                    "explanation": "Sütun grafiklerinde dikey eksenin sıfırdan başlatılması dürüstlük kuralıdır; aksi halde %1'lik fark görsel olarak %50 gibi görünebilir.",
                    "speechText": "Yöneticilere sunum yaparken eksen aralıklarını ve birim ölçeklerini kontrol etmek grafik güvenilirliği sağlar.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t18_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine dikey eksen alt sınırı olarak 0 yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "0 değerini yazın.",
                              "C2 hücresine 0 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Grafik Eksenleri, Birim Aralıkları ve Logaritmik Ölçek Ayarları görevini başarıyla tamamladınız.",
                              "expectedValue": 0
                    }
          }
],
        quiz: {
          "id": "q18_3",
          "title": "Grafik Eksenleri, Birim Aralıkları ve Logaritmik Ölçek Ayarları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_3_1",
                              "question": "Sütun grafiklerinde dikey eksenin sıfırdan başlatılması neden standart kuraldır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görsel orantıların gerçeği yansıtması ve yanıltıcı algıyı önlemek için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosya boyutunu düşürmek için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formüllerin çalışması için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcıdan çıktı almak için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sıfırdan başlamayan sütun grafikleri algıyı çarpıtır ve yanıltıcı görsel illüzyon yaratır.",
                              "measuredSkill": "Grafik Etiği ve Eksen Ayarları"
                    }
          ]
}
      },
      {
        id: "sec18_l4",
        phaseId: 18,
        unitId: "u18_4",
        title: "Veri Etiketleri (Data Labels) ve Veri Tablosu (Data Table) Ekleme",
        shortDesc: "Çubukların üzerine doğrudan değerleri yazarak eksene göz kaydırma zorunluluğunu ortadan kaldırma.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Veri Etiketleri",
        primaryGoal: "Veri etiketlerinin konumunu (Dış Uç, İç Taban) ayarlamak ve kalabalık etiketleri sadeleştirmek.",
        prerequisites: ["sec18_l3"],
        commonMistakes: ["Tüm çubuklara etiket koyup grafiği okunamaz bir sayı yığınına çevirmek"],
        successCriteria: "Veri etiketi ekleyebilmek ve sadeleştirebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Etiketleri"],
        initialWorkbook: createTableSheet("s18_4", "VeriEtiketSayfasi", ["Ürün", "Adet", "Etiket Konumu"], [["Laptop", 85, "Dış Uç"], ["Tablet", 120, "Dış Uç"], ["Telefon", 210, "Dış Uç"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Etiketleri (Data Labels) ve Veri Tablosu (Data Table) Ekleme",
                    "description": "Veri etiketlerinin konumunu (Dış Uç, İç Taban) ayarlamak ve kalabalık etiketleri sadeleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_4",
                    "title": "Veri Etiketlerinin Gücü",
                    "explanation": "Grafik Öğesi Ekle > Veri Etiketleri > Dış Uç (Outside End) seçildiğinde her sütunun tepesinde net sayı görünür, eksene bakma ihtiyacı biter.",
                    "speechText": "Etiket eklediğinizde dikey ekseni kaldırarak grafiğinizi çok daha ferah ve profesyonel bir görünüme kavuşturabilirsiniz.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t18_4_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine önerilen konum olarak 'Dış Uç' yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Dış Uç' yazın.",
                              "C2 hücresine 'Dış Uç' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Veri Etiketleri (Data Labels) ve Veri Tablosu (Data Table) Ekleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Dış Uç"
                    }
          }
],
        quiz: {
          "id": "q18_4",
          "title": "Veri Etiketleri (Data Labels) ve Veri Tablosu (Data Table) Ekleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_4_1",
                              "question": "Sütunların üzerinde kesin değerlerin görünmesi için hangi grafik öğesi açılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri Etiketleri (Data Labels)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata Çubukları"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Eğilim Çizgisi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kılavuz Çizgileri"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri Etiketleri sütun veya noktaların üzerine doğrudan değerleri yazdırır.",
                              "measuredSkill": "Veri Etiketleri Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec18_l5",
        phaseId: 18,
        unitId: "u18_5",
        title: "Birleşik Grafik (Combo Chart) Tasarımı",
        shortDesc: "Ciro tutarını sütun, kâr marjı yüzdesini ise çizgi olarak aynı grafikte birleştirme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Birleşik Grafikler",
        primaryGoal: "Birleşik grafik türüyle iki farklı seriye farklı grafik tipleri atamak.",
        prerequisites: ["sec18_l4"],
        commonMistakes: ["Büyük ciro rakamı yanında yüzde değerinin çizgi olarak görünmeyip alta yapışması"],
        successCriteria: "Birleşik grafik yapısını kurabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Birleşik Grafik"],
        initialWorkbook: createTableSheet("s18_5", "BirlesikGrafik", ["Ay", "Ciro (TL)", "Kâr Marjı %"], [["Ocak", 500000, 0.18], ["Şubat", 620000, 0.22], ["Mart", 580000, 0.19]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Birleşik Grafik (Combo Chart) Tasarımı",
                    "description": "Birleşik grafik türüyle iki farklı seriye farklı grafik tipleri atamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_5",
                    "title": "Sütun ve Çizgi Birlikteliği",
                    "explanation": "Grafik Türünü Değiştir > Birleşik (Combo) seçilerek Ciro için 'Kümelenmiş Sütun', Kâr Marjı için 'Çizgi' seçilir.",
                    "speechText": "Hem satış hacmini hem de karlılık oranını tek ekranda görmek isteyen yöneticiler için birleşik grafik vazgeçilmezdir.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t18_5_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine 3 aylık toplam ciroyu '=TOPLA(B2:B4)' formülüyle yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA(B2:B4) formülünü yazın.",
                              "B5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Birleşik Grafik (Combo Chart) Tasarımı görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q18_5",
          "title": "Birleşik Grafik (Combo Chart) Tasarımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_5_1",
                              "question": "Birleşik grafiklerde hacim ve oran gibi iki farklı metrik nasıl gösterilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Biri Kümelenmiş Sütun, diğeri Çizgi olarak seçilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "İkisi de pasta grafiği yapılır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Veriler birbirine bölünür"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafik ikiye bölünür"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Birleşik grafik bir seriyi sütun, diğer seriyi çizgi yaparak tek alanda gösterir.",
                              "measuredSkill": "Birleşik Grafik Mantığı"
                    }
          ]
}
      },
      {
        id: "sec18_l6",
        phaseId: 18,
        unitId: "u18_6",
        title: "İkincil Eksen (Secondary Axis) ile Farklı Ölçekli Verileri Yönetme",
        shortDesc: "Yüzbinlerce liralık ciro ile %20 gibi küçük oranları aynı grafikte okunabilir kılma.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "İkincil Eksen",
        primaryGoal: "Seriyi ikincil eksene (Secondary Axis) atayarak sağ tarafta bağımsız yüzde ekseni oluşturmak.",
        prerequisites: ["sec18_l5"],
        commonMistakes: ["İkincil eksen ekledikten sonra sağ ve sol eksen etiketlerini belirtmemek"],
        successCriteria: "İkincil eksen ayarlarını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["İkincil Eksen"],
        initialWorkbook: createTableSheet("s18_6", "IkincilEksenSayfasi", ["Metrik", "Eksen Konumu", "Birim"], [["Ciro", "Birincil Eksen (Sol)", "TL"], ["Kâr Marjı", "İkincil Eksen (Sağ)", "%"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İkincil Eksen (Secondary Axis) ile Farklı Ölçekli Verileri Yönetme",
                    "description": "Seriyi ikincil eksene (Secondary Axis) atayarak sağ tarafta bağımsız yüzde ekseni oluşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_6",
                    "title": "İki Farklı Dünyayı Eşleme",
                    "explanation": "Kâr Marjı serisine sağ tıklayıp Veri Serisini Biçimlendir > İkincil Eksen seçtiğinizde sağ tarafta 0% - 100% ekseni açılır ve çizgi netleşir.",
                    "speechText": "Biri TL diğeri yüzde olan metrikleri ikincil eksen olmadan aynı grafikte göstermek imkansızdır.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t18_6_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine ikincil eksen konumu olarak 'İkincil Eksen (Sağ)' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'İkincil Eksen (Sağ)' yazın.",
                              "B3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! İkincil Eksen (Secondary Axis) ile Farklı Ölçekli Verileri Yönetme görevini başarıyla tamamladınız.",
                              "expectedValue": "İkincil Eksen (Sağ)"
                    }
          }
],
        quiz: {
          "id": "q18_6",
          "title": "İkincil Eksen (Secondary Axis) ile Farklı Ölçekli Verileri Yönetme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_6_1",
                              "question": "500.000 TL ciro ile %15 kâr marjı aynı grafikteyken kâr çizgisinin alta yapışmasını önlemek için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kâr marjı serisi İkincil Eksene (Secondary Axis) atanır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ciro verileri silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yüzdeler 1.000 ile çarpılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafik silinip yeniden çizilir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İkincil eksen sağ tarafta bağımsız bir yüzde ölçeği açarak çizginin görünmesini sağlar.",
                              "measuredSkill": "İkincil Eksen Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec18_l7",
        phaseId: 18,
        unitId: "u18_7",
        title: "Mini Grafikler (Sparklines) ile Hücre İçi Trendler",
        shortDesc: "Tablodaki her satırın yanına tek hücrelik minyatür çizgi ve sütun grafikleri yerleştirme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Sparklines",
        primaryGoal: "Ekle > Mini Grafikler (Çizgi veya Sütun) ile satır bazında trend üretmek.",
        prerequisites: ["sec18_l6"],
        commonMistakes: ["Mini grafiklerin eksen ölçeklerini her satırda bağımsız bırakıp satırları kıyaslayamamak"],
        successCriteria: "Mini grafik oluşturabilmek ve biçimlendirebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Mini Grafikler", "Sparklines"],
        initialWorkbook: createTableSheet("s18_7", "MiniGrafikSayfasi", ["Ürün", "Oca", "Şub", "Mar", "Trend"], [["Laptop", 10, 15, 22, "Yükselen"], ["Monitör", 30, 28, 24, "Düşen"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Mini Grafikler (Sparklines) ile Hücre İçi Trendler",
                    "description": "Ekle > Mini Grafikler (Çizgi veya Sütun) ile satır bazında trend üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_7",
                    "title": "Hücre İçinde Mini Çizgiler",
                    "explanation": "Sparklines hücrenin içine çizilen, hücreyle birlikte büyüyüp küçülen harika trend göstergeleridir. En yüksek noktayı yeşil noktayla işaretleyebilirsiniz.",
                    "speechText": "Yüz satırlık bir ürün tablosunda ayrı ayrı yüz grafik açmak yerine her satıra bir sparkline eklemek muazzam verimlilik sağlar.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t18_7_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine trend yönü olarak 'Yükselen' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "'Yükselen' yazın.",
                              "E2 hücresine 'Yükselen' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Mini Grafikler (Sparklines) ile Hücre İçi Trendler görevini başarıyla tamamladınız.",
                              "expectedValue": "Yükselen"
                    }
          }
],
        quiz: {
          "id": "q18_7",
          "title": "Mini Grafikler (Sparklines) ile Hücre İçi Trendler Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_7_1",
                              "question": "Excel'de tek bir hücre içine yerleşen minyatür grafiklere ne ad verilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Mini Grafikler (Sparklines)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "SmartArt"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "PivotChart"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Şekil"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hücre içi mini trend grafiklerine Sparklines (Mini Grafikler) denir.",
                              "measuredSkill": "Sparklines Temelleri"
                    }
          ]
}
      },
      {
        id: "sec18_l8",
        phaseId: 18,
        unitId: "u18_8",
        title: "Dinamik Grafik Aralıkları ve Otomatik Büyüyen Tablolar",
        shortDesc: "Grafiğin kaynak verisini Ctrl+T ile resmi Excel Tablosuna bağlayarak yeni satır eklendikçe grafiğin otomatik güncellenmesi.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Dinamik Grafikler",
        primaryGoal: "Tablo (Table) veri kaynağını grafiğe bağlayıp otomatik aralık genişletme sağlamak.",
        prerequisites: ["sec18_l7"],
        commonMistakes: ["Düz aralıkta grafik çizip yeni ay eklendiğinde grafiğin veri almadığını fark etmemek"],
        successCriteria: "Otomatik güncellenen grafik mimarisi kurabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Ctrl+T", "Dinamik Grafik"],
        initialWorkbook: createTableSheet("s18_8", "DinamikGrafikSayfasi", ["Hafta", "Ziyaretçi", "Durum"], [["Hafta 1", 12000, "Tablo Kaynağı"], ["Hafta 2", 14500, "Tablo Kaynağı"], ["Hafta 3", 16800, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Grafik Aralıkları ve Otomatik Büyüyen Tablolar",
                    "description": "Tablo (Table) veri kaynağını grafiğe bağlayıp otomatik aralık genişletme sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_8",
                    "title": "Kendi Kendini Büyüten Grafikler",
                    "explanation": "Kaynak verinizi önce Ctrl+T ile Tablo yapıp sonra grafik eklerseniz, tablonun altına Hafta 4'ü yazdığınız an grafik tek bir tıklama yapmadan kendiliğinden genişler.",
                    "speechText": "Raporlarınızı otomatikleştirmek istiyorsanız grafiklerinizin arkasındaki veri aralığını daima resmi Excel Tablosu yapmalısınız.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t18_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine durum olarak 'Dinamik Genişleme' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Dinamik Genişleme' yazın.",
                              "C4 hücresine metni yazarak onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Dinamik Grafik Aralıkları ve Otomatik Büyüyen Tablolar görevini başarıyla tamamladınız.",
                              "expectedValue": "Dinamik Genişleme"
                    }
          }
],
        quiz: {
          "id": "q18_8",
          "title": "Dinamik Grafik Aralıkları ve Otomatik Büyüyen Tablolar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_8_1",
                              "question": "Yeni veri eklendiğinde grafiğin aralığını el ile güncellememek için en pratik yöntem nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kaynak veriyi Ctrl+T ile resmi Excel Tablosu yapmak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Boş hücreleri seçmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı korumaya almak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafiği kilitlemek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel Tabloları (Ctrl+T) yeni veri eklendiğinde formülleri ve grafikleri otomatik genişletir.",
                              "measuredSkill": "Dinamik Grafik Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec18_l9",
        phaseId: 18,
        unitId: "u18_9",
        title: "Hedef-Gerçekleşen Analizi ve Hedef Çizgisi Eklenmiş Başarı Grafikleri",
        shortDesc: "Satış sütunlarının üzerine yatay bir hedef çizgisi ekleyerek hedefe ulaşılıp ulaşılmadığını görselleştirme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Hedef Analizi",
        primaryGoal: "Sabit hedef sütununu çizgi grafik olarak sütunların üzerine bindirmek.",
        prerequisites: ["sec18_l8"],
        commonMistakes: ["Hedef serisini yanlışlıkla sütun yaparak çift sütun kalabalığı yaratmak"],
        successCriteria: "Hedef-gerçekleşen grafiği kurabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Hedef Çizgisi"],
        initialWorkbook: createTableSheet("s18_9", "HedefGrafikSayfasi", ["Bölge", "Gerçekleşen Satış", "Hedef"], [["Kuzey", 120000, 100000], ["Güney", 85000, 100000], ["Doğu", 110000, 100000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hedef-Gerçekleşen Analizi ve Hedef Çizgisi Eklenmiş Başarı Grafikleri",
                    "description": "Sabit hedef sütununu çizgi grafik olarak sütunların üzerine bindirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_9",
                    "title": "Hedef Çizgisi Tekniği",
                    "explanation": "Her satıra '100000' hedefi yazıp birleşik grafikte bu seriyi Çizgi yaptığınızda, sütunların üzerinden geçen düz bir hedef çıtası elde edersiniz.",
                    "speechText": "Hedefin üstüne çıkan bölgeleri yeşil, altında kalanları kırmızı yaparak yönetim için anında anlaşılır bir gösterge oluştururuz.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t18_9_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine toplam gerçekleşen satışı '=TOPLA(B2:B4)' formülüyle yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B5 hücresine '=TOPLA(B2:B4)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Hedef-Gerçekleşen Analizi ve Hedef Çizgisi Eklenmiş Başarı Grafikleri görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q18_9",
          "title": "Hedef-Gerçekleşen Analizi ve Hedef Çizgisi Eklenmiş Başarı Grafikleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_9_1",
                              "question": "Satış sütunlarının üstünden geçen yatay hedef çıtası Excel'de nasıl üretilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tüm satırlarına hedef değeri yazılan seri Çizgi Grafik olarak birleşik grafiğe eklenir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Şekillerden elle çizgi çizilir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücre boyanır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Eksen kaldırılır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hedef sütununu çizgi olarak birleşik grafiğe bağlamak dinamik hedef çıtası üretir.",
                              "measuredSkill": "Hedef Çizgisi Modelleme"
                    }
          ]
}
      },
      {
        id: "sec18_l10",
        phaseId: 18,
        unitId: "u18_10",
        title: "Yanlış ve Yanıltıcı Grafik Tasarımlarını Düzeltme",
        shortDesc: "3 Boyutlu (3D) bozulmalar, 10 dilimli pasta grafikleri ve okunaksız arka planları temizleme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Tasarım İlkeleri",
        primaryGoal: "3D grafikleri düz 2D sütun grafiğine çevirmek ve pasta grafiğini çubuk grafiğe dönüştürmek.",
        prerequisites: ["sec18_l9"],
        commonMistakes: ["3D grafiklerin derinlik perspektifi nedeniyle öndeki dilimi büyük gösterme yanılgısını bilmemek"],
        successCriteria: "Profesyonel grafik tasarım ilkelerini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Tasarım Standartları"],
        initialWorkbook: createTableSheet("s18_10", "GrafikHatalari", ["Hatalı Tasarım", "Profesyonel Karşılığı"], [["3D Pasta Grafiği", "2D Çubuk veya Sütun Grafiği"], ["15 Dilimli Pasta", "İlk 5 + Diğerleri veya Çubuk"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yanlış ve Yanıltıcı Grafik Tasarımlarını Düzeltme",
                    "description": "3D grafikleri düz 2D sütun grafiğine çevirmek ve pasta grafiğini çubuk grafiğe dönüştürmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_10",
                    "title": "3D Grafikler Neden Yasaktır?",
                    "explanation": "3 Boyutlu grafikler perspektif bozulması yaratır; arkadaki büyük bir değer öndeki küçük değerden daha ufak görünebilir. Kurumsal dünyada daima düz 2D grafikler kullanılır.",
                    "speechText": "Pasta grafiğinde 5'ten fazla dilim varsa insan gözü açıları kıyaslayamaz; hemen yatay çubuk grafiğe geçilmelidir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t18_10_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine kurumsal standart olarak 'Düz 2D Çubuk Grafiği' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Düz 2D Çubuk Grafiği' yazın.",
                              "B4 hücresine 'Düz 2D Çubuk Grafiği' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Yanlış ve Yanıltıcı Grafik Tasarımlarını Düzeltme görevini başarıyla tamamladınız.",
                              "expectedValue": "Düz 2D Çubuk Grafiği"
                    }
          }
],
        quiz: {
          "id": "q18_10",
          "title": "Yanlış ve Yanıltıcı Grafik Tasarımlarını Düzeltme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_10_1",
                              "question": "Kurumsal raporlarda 3 Boyutlu (3D) grafiklerin önerilmeme sebebi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Perspektif ve açı bozulması nedeniyle sayıları yanıltıcı göstermesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel'in çökmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Rengin solması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıların silinmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "3D grafikler gözü yanıltır ve değerlerin doğru algılanmasını engeller.",
                              "measuredSkill": "Görsel Algı ve Grafik Etiği"
                    }
          ]
}
      },
      {
        id: "sec18_l11",
        phaseId: 18,
        unitId: "u18_11",
        title: "Yönetici Raporları İçin Minimalist Grafik Tasarım İlkeleri",
        shortDesc: "Gereksiz kılavuz çizgilerini, kalın kenarlıkları ve parlak renkleri kaldırıp sadeleştirme.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Minimalizm",
        primaryGoal: "Data-to-Ink oranını maksimize ederek görsel gürültüyü yok etmek.",
        prerequisites: ["sec18_l10"],
        commonMistakes: ["Her sütuna farklı gökkuşağı rengi verip dikkat dağıtmak"],
        successCriteria: "Minimalist grafik tasarımını yönetebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Tasarım İlkeleri"],
        initialWorkbook: createTableSheet("s18_11", "MinimalistSayfasi", ["Tasarım Unsuru", "Kural"], [["Kılavuz Çizgileri", "Mümkünse kaldır veya çok silik yap"], ["Renk Kullanımı", "Tek kurumsal ton, vurgu için kontrast renk"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yönetici Raporları İçin Minimalist Grafik Tasarım İlkeleri",
                    "description": "Data-to-Ink oranını maksimize ederek görsel gürültüyü yok etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_11",
                    "title": "Veri-Mürekkep Oranı (Data-Ink Ratio)",
                    "explanation": "Grafikte veri taşımayan her çizgi görsel kirliliktir. Ağır gri arka planları, parlak 3D gölgeleri ve kalın çizgileri temizleyerek sadece veriyi parlatırız.",
                    "speechText": "Tek bir ana renk kullanın ve sadece dikkat çekmek istediğiniz lider şubeyi koyu mavi veya altın sarısıyla vurgulayın.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t18_11_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine tasarım ilkesi olarak 'Sade ve Odaklı' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Sade ve Odaklı' yazın.",
                              "B4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Yönetici Raporları İçin Minimalist Grafik Tasarım İlkeleri görevini başarıyla tamamladınız.",
                              "expectedValue": "Sade ve Odaklı"
                    }
          }
],
        quiz: {
          "id": "q18_11",
          "title": "Yönetici Raporları İçin Minimalist Grafik Tasarım İlkeleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_11_1",
                              "question": "Bir grafikte belirli bir sütunu öne çıkarmanın en profesyonel yolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Diğer sütunları nötr gri yapıp hedef sütunu kurumsal bir renkle vurgulamak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm sütunları kırmızı yapmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı tipini büyütmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kenarlık eklemek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Nötr gri fon üzerinde tek renk vurgusu izleyicinin gözünü doğrudan kritik noktaya odaklar.",
                              "measuredSkill": "Minimalist Raporlama İlkeleri"
                    }
          ]
}
      },
      {
        id: "sec18_l12",
        phaseId: 18,
        unitId: "u18_12",
        title: "Farklı İş Senaryoları İçin Grafik Modelleme Uygulaması",
        shortDesc: "Bütçe, büyüme ve performans verilerini en uygun grafiklerle raporlama bitirme projesi.",
        category: "Grafikler & Veri Görselleştirme",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Çoklu senaryoları birleşik grafik ve dinamik etiketlerle eksiksiz sunmak.",
        prerequisites: ["sec18_l11"],
        commonMistakes: ["Eksen birimlerini yazmayıp binlik veya milyonluk ayrımı belirtmemek"],
        successCriteria: "Uçtan uca kurumsal grafik projesi hazırlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Grafik Modelleme"],
        initialWorkbook: createTableSheet("s18_12", "GrafikModelProje", ["Departman", "Bütçe (TL)", "Harcama (TL)", "Gerçekleşme %"], [["Yazılım", 400000, 360000, 0.9], ["Pazarlama", 300000, 320000, 1.07], ["İK", 150000, 140000, 0.93]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Farklı İş Senaryoları İçin Grafik Modelleme Uygulaması",
                    "description": "Çoklu senaryoları birleşik grafik ve dinamik etiketlerle eksiksiz sunmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts18_12",
                    "title": "Bütünleşik Grafik Dashboardu",
                    "explanation": "Bütçe ve Harcama sütun grafiğiyle yan yana konulur, Gerçekleşme yüzdesi ise sağdaki ikincil eksende çizgi olarak gösterilir.",
                    "speechText": "Tebrikler! Hem veri etiketlerini, hem ikincil ekseni, hem de kurumsal renk vurgusunu birleştiren mükemmel bir yönetim grafiği modellediniz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t18_12_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine proje durumu olarak 'Tamamlandı' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresine tıklayın.",
                              "'Tamamlandı' yazın.",
                              "E2 hücresine 'Tamamlandı' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Farklı İş Senaryoları İçin Grafik Modelleme Uygulaması görevini başarıyla tamamladınız.",
                              "expectedValue": "Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q18_12",
          "title": "Farklı İş Senaryoları İçin Grafik Modelleme Uygulaması Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_18_12_1",
                              "question": "Yönetim sunumu için hazırlanan nihai grafikte hangi özellikler mutlaka bulunmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Açık bir başlık, net birimler (TL, Adet), sade renkler ve vurgulanmış ana mesaj"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "3D efektler ve çok renkli dolgular"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Karmaşık formüller"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Animasyonlar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Başlık, birim, sade tasarım ve odaklanmış mesaj profesyonel grafiğin olmazsa olmazıdır.",
                              "measuredSkill": "Kurumsal Grafik Sunum Standardı"
                    }
          ]
}
      }
    ]
  },
  {
    id: 19,
    category: "PivotTable & Özet Raporlar",
    title: "19. PivotTable ve PivotChart",
    subtitle: "Kaynak Veri, Alan Listesi, Değer Gösterimi, Dilimleyiciler, Zaman Çizelgesi ve PivotChart",
    iconName: "Table",
    description: "Kaynak veri hazırlığı, satır/sütun/değer alanları, özetleme ve yüzde gösterimleri, tarih/sayı gruplama, hesaplanan alanlar, dilimleyiciler, zaman çizelgeleri ve dinamik PivotChart tasarımı.",
    lessons: [
      {
        id: "sec19_l1",
        phaseId: 19,
        unitId: "u19_1",
        title: "PivotTable İçin Kaynak Veri Hazırlığı ve 1NF Temizlik Kuralları",
        shortDesc: "Birleştirilmiş hücreleri çözme, boş satırları silme ve tekil başlık satırı oluşturma kuralları.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Veri Hazırlığı",
        primaryGoal: "Veriyi birinci normal form (1NF) tabular standartlara getirmek.",
        prerequisites: ["sec18_l12"],
        commonMistakes: ["Birleştirilmiş hücreler varken PivotTable oluşturmaya çalışıp alan kayıpları yaşamak"],
        successCriteria: "Kaynak veri temizliğini yapabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["PivotTable"],
        initialWorkbook: createTableSheet("s19_1", "PivotVeriHazirlik", ["Tarih", "Kategori", "Satış Temsilcisi", "Tutar"], [["2026-01-15", "Donanım", "Ahmet Yılmaz", 45000], ["2026-01-16", "Yazılım", "Selin Kaya", 62000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "PivotTable İçin Kaynak Veri Hazırlığı ve 1NF Temizlik Kuralları",
                    "description": "Veriyi birinci normal form (1NF) tabular standartlara getirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_1",
                    "title": "Kusursuz Kaynak Verinin 3 Altın Kuralı",
                    "explanation": "1: Her sütunun tek satırlık benzersiz başlığı olmalı. 2: Hiçbir hücre birleştirilmemeli. 3: Araya boş satır veya sütun girmemeli.",
                    "speechText": "PivotTable'ın doğru çalışmasının %90'ı kaynak verinin tabular yapıda temiz ve eksiksiz hazırlanmasına bağlıdır.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t19_1_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine toplam tutarı '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "D4'e '=TOPLA(D2:D3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! PivotTable İçin Kaynak Veri Hazırlığı ve 1NF Temizlik Kuralları görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_1",
          "title": "PivotTable İçin Kaynak Veri Hazırlığı ve 1NF Temizlik Kuralları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_1_1",
                              "question": "PivotTable oluşturulacak bir veri tablosunda kesinlikle bulunmaması gereken yapı hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Birleştirilmiş hücreler (Merged Cells)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayısal değerler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tarih sütunları"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin başlıkları"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Birleştirilmiş hücreler alan eşleştirmesini bozar ve PivotTable oluşturulmasını engeller.",
                              "measuredSkill": "PivotTable Veri Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec19_l2",
        phaseId: 19,
        unitId: "u19_2",
        title: "İlk PivotTable’ı Oluşturma ve Alan Listesi (Field List) Arayüzü",
        shortDesc: "Ekle > PivotTable ile boş özet tablo başlatma ve sağdaki dört bölmeli alan listesini anlama.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Arayüz",
        primaryGoal: "Alan Listesini açıp kapatabilmek ve panelleri yönetmek.",
        prerequisites: ["sec19_l1"],
        commonMistakes: ["Alan listesi kapandığında panikleyip nereden açılacağını bulamamak (Sağ tık > Alan Listesini Göster)"],
        successCriteria: "PivotTable oluşturabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["PivotTable"],
        initialWorkbook: createTableSheet("s19_2", "IlkPivot", ["Bölge", "Ürün", "Ciro"], [["Marmara", "Laptop", 150000], ["Ege", "Tablet", 85000], ["Marmara", "Telefon", 120000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İlk PivotTable’ı Oluşturma ve Alan Listesi (Field List) Arayüzü",
                    "description": "Alan Listesini açıp kapatabilmek ve panelleri yönetmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_2",
                    "title": "Dörtlü Alan Mantığı",
                    "explanation": "Sağdaki panelde: Filtreler (en üst), Sütunlar (üst başlıklar), Satırlar (yan başlıklar) ve Değerler (hesaplanan sayılar) yer alır.",
                    "speechText": "Bir alanı tutup Satırlar kutusuna bıraktığınız an Excel sol tarafta anında benzersiz özet listesi çıkarır.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t19_2_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine Marmara ve Ege toplam cirosunu '=TOPLA(C2:C4)' formülüyle yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresine tıklayın.",
                              "=TOPLA(C2:C4) yazın.",
                              "C5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! İlk PivotTable’ı Oluşturma ve Alan Listesi (Field List) Arayüzü görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_2",
          "title": "İlk PivotTable’ı Oluşturma ve Alan Listesi (Field List) Arayüzü Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_2_1",
                              "question": "Hesaplanacak, toplanacak veya ortalaması alınacak sayısal alanlar hangi kutuya sürüklenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Değerler (Values)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Satırlar (Rows)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sütunlar (Columns)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtreler (Filters)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sayısal hesaplama alanları Değerler (Values) kutusuna taşınır.",
                              "measuredSkill": "PivotTable Alan Kutuları"
                    }
          ]
}
      },
      {
        id: "sec19_l3",
        phaseId: 19,
        unitId: "u19_3",
        title: "Satırlar, Sütunlar, Değerler ve Filtreler Dörtlüsünü Yapılandırma",
        shortDesc: "Matris raporlar oluşturmak için satıra Bölge, sütuna Yıl ve değerlere Satış tutarını yerleştirme.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Matris Tasarımı",
        primaryGoal: "İki boyutlu matris çapraz tablo raporları tasarlamak.",
        prerequisites: ["sec19_l2"],
        commonMistakes: ["Sütunlar alanına yüzlerce farklı kayıt içeren detay alanları koyup tabloyu sağa doğru okunaksız uzatmak"],
        successCriteria: "Matris PivotTable kurabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["PivotTable"],
        initialWorkbook: createTableSheet("s19_3", "MatrisPivot", ["Bölge", "2025 Ciro", "2026 Ciro", "Toplam"], [["Marmara", 250000, 310000, 560000], ["İç Anadolu", 140000, 190000, 330000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satırlar, Sütunlar, Değerler ve Filtreler Dörtlüsünü Yapılandırma",
                    "description": "İki boyutlu matris çapraz tablo raporları tasarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_3",
                    "title": "Çapraz Tablo Gücü",
                    "explanation": "Bölgeyi Satırlar alanına, Yılı Sütunlar alanına koyduğunuzda tek bir formül yazmadan iki boyutlu çapraz matris raporu üretirsiniz.",
                    "speechText": "Satır ve sütunların kesişim noktalarında toplam ciro değerleri anında toplanır ve dipte genel toplamlar hesaplanır.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t19_3_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine 2 yıllık genel toplam ciroyu '=TOPLA(D2:D3)' formülüyle yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA(D2:D3) yazın.",
                              "D4 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Satırlar, Sütunlar, Değerler ve Filtreler Dörtlüsünü Yapılandırma görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_3",
          "title": "Satırlar, Sütunlar, Değerler ve Filtreler Dörtlüsünü Yapılandırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_3_1",
                              "question": "PivotTable'da matris (çapraz) tablo elde etmek için alanlar nerelere yerleştirilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Biri Satırlar kutusuna, diğeri Sütunlar kutusuna, sayısal alan ise Değerler kutusuna"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hepsi Filtrelere"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hepsi Sütunlara"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca Değerlere"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Satır ve Sütun kutularının birlikte kullanılması iki boyutlu matris oluşturur.",
                              "measuredSkill": "Matris Pivot Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec19_l4",
        phaseId: 19,
        unitId: "u19_4",
        title: "Değer Alanı Özetleme Türleri (Toplam, Sayı, Ortalama, Min, Max)",
        shortDesc: "Toplama yerine işlem adetlerini SAY (Count) veya ortalama sepet tutarını ORTALAMA ile hesaplama.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Özetleme Türleri",
        primaryGoal: "Değer Alanı Ayarları penceresinden özetleme fonksiyonunu değiştirmek.",
        prerequisites: ["sec19_l3"],
        commonMistakes: ["Metin içeren sütun Değerler alanına atıldığında otomatik Toplam yerine Sayı geldiğini fark etmemek"],
        successCriteria: "Özetleme türlerini yönetebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Değer Alanı Ayarları"],
        initialWorkbook: createTableSheet("s19_4", "OzetlemeSayfasi", ["Temsilci", "İşlem Sayısı", "Ortalama Satış"], [["Ahmet", 14, 18500], ["Selin", 22, 21200]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Değer Alanı Özetleme Türleri (Toplam, Sayı, Ortalama, Min, Max)",
                    "description": "Değer Alanı Ayarları penceresinden özetleme fonksiyonunu değiştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_4",
                    "title": "Toplamın Ötesinde Analiz",
                    "explanation": "Değer Alanı Ayarlarından 'Ortalama' seçildiğinde o temsilcinin fatura başına ortalama tutarı, 'Sayı' seçildiğinde ise kaç fatura kestiği görülür.",
                    "speechText": "Raporlama yalnızca toplam cirodan ibaret değildir; adet ve ortalama metrikleri performansın gerçek yüzünü gösterir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t19_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 2 temsilcinin genel ortalamasını '=ORTALAMA(C2:C3)' formülüyle yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=ORTALAMA formülünü yazın.",
                              "C4 hücresine '=ORTALAMA(C2:C3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Değer Alanı Özetleme Türleri (Toplam, Sayı, Ortalama, Min, Max) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "ORTALAMA",
                                        "C2:C3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_4",
          "title": "Değer Alanı Özetleme Türleri (Toplam, Sayı, Ortalama, Min, Max) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_4_1",
                              "question": "Değer alanındaki fonksiyonu Toplam'dan Ortalama'ya değiştirmek için hangi pencere açılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Değer Alanı Ayarları (Value Field Settings)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri Biçimlendir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Koşullu Biçimlendirme"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Veri Doğrulama"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değer Alanı Ayarları penceresinden Toplam, Sayı, Ortalama, En Büyük gibi hesap türleri seçilir.",
                              "measuredSkill": "Değer Alanı Ayarları"
                    }
          ]
}
      },
      {
        id: "sec19_l5",
        phaseId: 19,
        unitId: "u19_5",
        title: "Değerleri Gösterme Biçimi: Genel Toplam Yüzdesi ve Satır Yüzdesi",
        shortDesc: "Ham TL rakamlarını şirketin genel cirosundaki pazar payı yüzdesine (% of Grand Total) dönüştürme.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Değer Gösterme",
        primaryGoal: "Değer Gösterme sekmesinden Genel Toplam Yüzdesi seçeneğini uygulamak.",
        prerequisites: ["sec19_l4"],
        commonMistakes: ["Yüzde hesaplamak için PivotTable'ın yanına el ile formül yazıp dinamikliği bozmak"],
        successCriteria: "Dinamik yüzde hesaplamalarını uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Değerleri Göster"],
        initialWorkbook: createTableSheet("s19_5", "YuzdeSayfasi", ["Kategori", "Ciro", "Ciro Payı %"], [["Donanım", 600000, 0.6], ["Yazılım", 400000, 0.4]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Değerleri Gösterme Biçimi: Genel Toplam Yüzdesi ve Satır Yüzdesi",
                    "description": "Değer Gösterme sekmesinden Genel Toplam Yüzdesi seçeneğini uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_5",
                    "title": "Formülsüz Pay Analizi",
                    "explanation": "Değer Alanı Ayarları > Değer Gösterme > Genel Toplam Yüzdesi seçildiğinde Excel her satırın genel ciroya oranını otomatik hesaplar.",
                    "speechText": "PivotTable varken asla yanına elle '=B2/$B$4' formülü yazmayın; Pivot içindeki dahili yüzde özelliğini kullanın.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t19_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine genel toplam payı olarak 1.0 yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresine tıklayın.",
                              "1.0 veya 1 yazın.",
                              "C4 hücresine 1 yazarak onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Değerleri Gösterme Biçimi: Genel Toplam Yüzdesi ve Satır Yüzdesi görevini başarıyla tamamladınız.",
                              "expectedValue": 1
                    }
          }
],
        quiz: {
          "id": "q19_5",
          "title": "Değerleri Gösterme Biçimi: Genel Toplam Yüzdesi ve Satır Yüzdesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_5_1",
                              "question": "PivotTable'da bir ürünün toplam ciro içindeki payını formülsüz bulmak için ne seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Değer Gösterme > Genel Toplam Yüzdesi (% of Grand Total)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Toplam Fonksiyonu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayı Fonksiyonu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "DÜŞEYARA"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değer Gösterme sekmesindeki Genel Toplam Yüzdesi seçeneği otomatik pay hesaplar.",
                              "measuredSkill": "Değer Gösterme Biçimleri"
                    }
          ]
}
      },
      {
        id: "sec19_l6",
        phaseId: 19,
        unitId: "u19_6",
        title: "Değerleri Gösterme Biçimi: Fark ve Yüzde Fark Analizi",
        shortDesc: "Önceki aya veya geçen yıla göre artış/azalış yüzdelerini otomatik hesaplama.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Fark Analizi",
        primaryGoal: "Temel Öğe (Base Item) olarak (önceki) seçip dönemler arası değişim üretmek.",
        prerequisites: ["sec19_l5"],
        commonMistakes: ["Temel öğeyi sabit bir ay seçip her dönemin yalnızca tek aya göre farkını almak"],
        successCriteria: "Büyüme ve değişim analizini yönetebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Değer Gösterme"],
        initialWorkbook: createTableSheet("s19_6", "FarkAnalizi", ["Ay", "Ciro", "Büyüme %"], [["Ocak", 200000, 0.0], ["Şubat", 240000, 0.2], ["Mart", 276000, 0.15]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Değerleri Gösterme Biçimi: Fark ve Yüzde Fark Analizi",
                    "description": "Temel Öğe (Base Item) olarak (önceki) seçip dönemler arası değişim üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_6",
                    "title": "Dönemsel Büyüme Hızı",
                    "explanation": "Değer Gösterme > Yüzde Fark (Difference From) seçilip Temel Öğe: (önceki) yapıldığında her ayın bir önceki aya göre büyüme oranı otomatik çıkar.",
                    "speechText": "Finansal raporlarda büyüme trendini tek tıkla izlemenin en profesyonel yolu Yüzde Fark özelliğidir.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t19_6_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine Şubat ayı büyüme oranı olarak 0.20 yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "0.20 yazın.",
                              "C3 hücresine 0.20 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Değerleri Gösterme Biçimi: Fark ve Yüzde Fark Analizi görevini başarıyla tamamladınız.",
                              "expectedValue": 0.2
                    }
          }
],
        quiz: {
          "id": "q19_6",
          "title": "Değerleri Gösterme Biçimi: Fark ve Yüzde Fark Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_6_1",
                              "question": "PivotTable'da her satırın bir önceki satıra göre büyümesini bulmak için Temel Öğe ne seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "(önceki) / (previous)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "(sonraki)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İlk Satır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ortalama"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Temel Öğe olarak '(önceki)' seçilmesi dinamik periyot bazlı değişim oranı verir.",
                              "measuredSkill": "Dönemsel Değişim Analizi"
                    }
          ]
}
      },
      {
        id: "sec19_l7",
        phaseId: 19,
        unitId: "u19_7",
        title: "Tarih Alanlarını Yıl, Çeyrek ve Aya Göre Gruplama (Date Grouping)",
        shortDesc: "Günlük fatura tarihlerini tek tıkla Yıllar, Çeyrekler ve Aylar hiyerarşisine ayırma.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Gruplandırma",
        primaryGoal: "Tarih hücresine sağ tıklayıp Gruplandır (Group) penceresinden Aylar ve Yıllar seçmek.",
        prerequisites: ["sec19_l6"],
        commonMistakes: ["Kaynak veride metin formatında bozuk tarih olduğu için gruplandırma seçeneğinin aktif olmaması"],
        successCriteria: "Tarih alanlarını gruplayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Gruplandır"],
        initialWorkbook: createTableSheet("s19_7", "TarihGruplama", ["Dönem", "İşlem Tutarı"], [["2026 Q1", 450000], ["2026 Q2", 520000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tarih Alanlarını Yıl, Çeyrek ve Aya Göre Gruplama (Date Grouping)",
                    "description": "Tarih hücresine sağ tıklayıp Gruplandır (Group) penceresinden Aylar ve Yıllar seçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_7",
                    "title": "Tarihlerin Gücü: Otomatik Gruplama",
                    "explanation": "Tarih sütunundaki bir hücreye sağ tıklayıp Gruplandır dediğinizde; Yıllar, Çeyrekler ve Ayları seçerek hiyerarşik özet elde edebilirsiniz.",
                    "speechText": "Yıllık 100 bin satırlık günlük veriyi saniyeler içinde çeyreklik özet yönetim tablosuna dönüştürürüz.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t19_7_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine 2 çeyreğin toplamını '=TOPLA(B2:B3)' formülüyle yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B4 hücresine '=TOPLA(B2:B3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Tarih Alanlarını Yıl, Çeyrek ve Aya Göre Gruplama (Date Grouping) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_7",
          "title": "Tarih Alanlarını Yıl, Çeyrek ve Aya Göre Gruplama (Date Grouping) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_7_1",
                              "question": "PivotTable'da tarihleri aylara ve yıllara ayırmak için hangi komut kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağ Tık > Gruplandır (Group)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri Birleştir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sırala"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metinden Sütunlara"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Tarih alanına sağ tıklayıp Gruplandır seçildiğinde Yıl, Çeyrek ve Ay gruplaması yapılır.",
                              "measuredSkill": "Tarih Gruplandırma"
                    }
          ]
}
      },
      {
        id: "sec19_l8",
        phaseId: 19,
        unitId: "u19_8",
        title: "Sayısal Değerleri Aralıklar Halinde Gruplama (Yaş ve Maaş Bantları)",
        shortDesc: "Çalışan maaşlarını veya müşteri yaşlarını 10.000 TL veya 10 yaş aralıklarıyla özetleme.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Gruplandırma",
        primaryGoal: "Sayısal sütunu sağ tıklayıp Gruplandır ile başlangıç, bitiş ve artış aralığı belirlemek.",
        prerequisites: ["sec19_l7"],
        commonMistakes: ["Artış aralığını çok küçük veya çok büyük belirleyip okunaksız bantlar üretmek"],
        successCriteria: "Sayısal bant gruplaması yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Gruplandır"],
        initialWorkbook: createTableSheet("s19_8", "SayisalGruplama", ["Maaş Aralığı", "Personel Sayısı"], [["30000 - 45000", 18], ["45001 - 60000", 12], ["60001 - 75000", 5]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayısal Değerleri Aralıklar Halinde Gruplama (Yaş ve Maaş Bantları)",
                    "description": "Sayısal sütunu sağ tıklayıp Gruplandır ile başlangıç, bitiş ve artış aralığı belirlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_8",
                    "title": "Maaş ve Demografi Bantları",
                    "explanation": "Sayısal alanda Gruplandır seçildiğinde Başlangıç: 30000, Bitiş: 75000, Aralık: 15000 yazılarak otomatik demografik dağılım tablosu oluşturulur.",
                    "speechText": "İK ve müşteri analitiğinde çalışanların veya müşterilerin hangi gelir bandında yoğunlaştığını anında görürsünüz.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t19_8_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine toplam çalışan sayısını '=TOPLA(B2:B4)' formülüyle hesaplayın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA(B2:B4) yazın.",
                              "B5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Sayısal Değerleri Aralıklar Halinde Gruplama (Yaş ve Maaş Bantları) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_8",
          "title": "Sayısal Değerleri Aralıklar Halinde Gruplama (Yaş ve Maaş Bantları) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_8_1",
                              "question": "Personel maaşlarını 15.000 TL'lik bantlara ayırmak için Gruplandır penceresinde ne tanımlanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Başlangıç, Bitiş ve Artış Aralığı (By)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yüzde Değeri"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Filtre Kriteri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin Biçimi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Gruplandır penceresindeki Artış Aralığı (By) değeri her bir bandın genişliğini belirler.",
                              "measuredSkill": "Sayısal Aralık Gruplama"
                    }
          ]
}
      },
      {
        id: "sec19_l9",
        phaseId: 19,
        unitId: "u19_9",
        title: "Hesaplanan Alan (Calculated Field) ile Dinamik Formül Yazma",
        shortDesc: "Kaynak veriye sütun eklemeden PivotTable içinde KDV veya Net Kâr formülü hesaplama.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Hesaplanan Alan",
        primaryGoal: "PivotTable Analizi > Alanlar, Öğeler ve Kümeler > Hesaplanan Alan menüsünü kullanmak.",
        prerequisites: ["sec19_l8"],
        commonMistakes: ["Hesaplanan alanda hücre adresi (A2) yazmaya çalışmak (yalnızca alan adları kullanılabilir)"],
        successCriteria: "Hesaplanan alan tanımlayabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Hesaplanan Alan"],
        initialWorkbook: createTableSheet("s19_9", "HesaplananAlan", ["Kategori", "Ciro", "KDV (%20)"], [["Elektronik", 500000, 100000], ["Mobilya", 300000, 60000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hesaplanan Alan (Calculated Field) ile Dinamik Formül Yazma",
                    "description": "PivotTable Analizi > Alanlar, Öğeler ve Kümeler > Hesaplanan Alan menüsünü kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_9",
                    "title": "Kaynak Veriyi Şişirmeden Formül Üretme",
                    "explanation": "Hesaplanan Alan formülü kutusuna '=Ciro * 0.20' yazarak yeni bir 'KDV' alanı üretiriz. Kaynak dosyaya tek satır veri eklemeden dinamik hesaplama yapılır.",
                    "speechText": "Hesaplanan alanlar kaynak verinin dosya boyutunu artırmadan rapor üstünde dinamik türetilmiş metrikler kurmanın profesyonel yoludur.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t19_9_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine toplam KDV tutarını '=TOPLA(C2:C3)' formülüyle yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=TOPLA(C2:C3) yazın.",
                              "C4 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Hesaplanan Alan (Calculated Field) ile Dinamik Formül Yazma görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_9",
          "title": "Hesaplanan Alan (Calculated Field) ile Dinamik Formül Yazma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_9_1",
                              "question": "PivotTable'da Hesaplanan Alan (Calculated Field) formülünde hangisi kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca alan adları (örn: =Ciro * 0.20)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücre adresleri (örn: =B2 * 0.20)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfa isimleri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Makro kodları"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hesaplanan alan formüllerinde hücre adresi değil doğrudan alan başlıkları referans verilir.",
                              "measuredSkill": "Hesaplanan Alan Formülleri"
                    }
          ]
}
      },
      {
        id: "sec19_l10",
        phaseId: 19,
        unitId: "u19_10",
        title: "Dilimleyiciler (Slicers) ile Etkileşimli Filtreleme Butonları",
        shortDesc: "Geleneksel açılır filtre kutuları yerine modern, tıklanabilir dokunmatik buton panelleri ekleme.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Dilimleyiciler",
        primaryGoal: "PivotTable Analizi > Dilimleyici Ekle (Insert Slicer) ile interaktif paneller oluşturmak.",
        prerequisites: ["sec19_l9"],
        commonMistakes: ["Dilimleyicide çok fazla eleman varken tek sütun bırakıp dikey kaydırma çubuğu yaratmak"],
        successCriteria: "Dilimleyici ekleyebilmek ve sütun sayısını düzenleyebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Dilimleyici", "Slicer"],
        initialWorkbook: createTableSheet("s19_10", "DilimleyiciSayfasi", ["Seçili Bölge", "Rapor Tutarı"], [["Marmara", 750000], ["Ege", 420000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dilimleyiciler (Slicers) ile Etkileşimli Filtreleme Butonları",
                    "description": "PivotTable Analizi > Dilimleyici Ekle (Insert Slicer) ile interaktif paneller oluşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_10",
                    "title": "Tıklanabilir Filtre Düğmeleri",
                    "explanation": "Dilimleyiciler raporu kullanan yöneticilerin tek tıkla 'Marmara' veya 'Ege' butonuna basarak tüm tabloyu filtrelemesini sağlar. Çoklu seçim için Ctrl tuşu kullanılır.",
                    "speechText": "Modern ve etkileşimli dashboard tasarımının en görsel bileşeni dilimleyicilerdir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t19_10_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine filtrelenmiş genel toplamı '=TOPLA(B2:B3)' formülüyle yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=TOPLA(B2:B3) yazın.",
                              "B4 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Dilimleyiciler (Slicers) ile Etkileşimli Filtreleme Butonları görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_10",
          "title": "Dilimleyiciler (Slicers) ile Etkileşimli Filtreleme Butonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_10_1",
                              "question": "PivotTable'da filtrelemeyi görsel ve tıklanabilir butonlara dönüştüren araç hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dilimleyici (Slicer)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formül Çubuğu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ad Kutusu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Bölmeleri Dondur"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dilimleyiciler etkileşimli ve görsel filtre butonları oluşturur.",
                              "measuredSkill": "Dilimleyici Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec19_l11",
        phaseId: 19,
        unitId: "u19_11",
        title: "Zaman Çizelgesi (Timeline) ile Tarih Filtreleme",
        shortDesc: "Yıllar, çeyrekler ve aylar arasında kaydırma çubuğuyla sezgisel tarih filtrelemesi yapma.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Zaman Çizelgesi",
        primaryGoal: "Zaman Çizelgesi Ekle (Insert Timeline) ile tarih alanlarına özel görsel bant eklemek.",
        prerequisites: ["sec19_l10"],
        commonMistakes: ["Kaynak veride geçersiz tarih formatı olduğu için Zaman Çizelgesinin tarih alanını bulamaması"],
        successCriteria: "Zaman çizelgesini yapılandırabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Zaman Çizelgesi", "Timeline"],
        initialWorkbook: createTableSheet("s19_11", "ZamanCizelgesiSayfasi", ["Dönem Bandı", "Ciro"], [["2026 İlk Çeyrek", 850000], ["2026 İkinci Çeyrek", 920000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Zaman Çizelgesi (Timeline) ile Tarih Filtreleme",
                    "description": "Zaman Çizelgesi Ekle (Insert Timeline) ile tarih alanlarına özel görsel bant eklemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_11",
                    "title": "Görsel Tarih Cetveli",
                    "explanation": "Zaman Çizelgesi yalnızca tarih alanları için çalışan özel bir dilimleyicidir. Cetvel üzerindeki blokları sürükleyerek istediğiniz tarih aralığını anında seçersiniz.",
                    "speechText": "Yöneticilere dönemsel rapor sunarken zaman çizelgesi üzerinde parmağınızı kaydırarak raporu canlı güncellemek büyüleyicidir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t19_11_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine 2 çeyreğin toplam cirosunu '=TOPLA(B2:B3)' formülüyle yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresine tıklayın.",
                              "=TOPLA(B2:B3) yazın.",
                              "B4 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Zaman Çizelgesi (Timeline) ile Tarih Filtreleme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_11",
          "title": "Zaman Çizelgesi (Timeline) ile Tarih Filtreleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_11_1",
                              "question": "Zaman Çizelgesi (Timeline) hangi tür sütunlar için kullanılabilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca geçerli Tarih formatındaki alanlar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm metin sütunları"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Personel isimleri"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ürün kodları"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Zaman Çizelgesi yalnızca tarih veri tipine sahip alanlarla çalışır.",
                              "measuredSkill": "Zaman Çizelgesi Özellikleri"
                    }
          ]
}
      },
      {
        id: "sec19_l12",
        phaseId: 19,
        unitId: "u19_12",
        title: "Tek Bir Dilimleyiciyi Birden Çok PivotTable’a Bağlama (Report Connections)",
        shortDesc: "Sayfadaki 3 farklı PivotTable'ı ve grafiği aynı anda tek bir dilimleyici düğmesiyle kontrol etme.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Rapor Bağlantıları",
        primaryGoal: "Rapor Bağlantıları (Report Connections) penceresinden aynı veri kaynağını paylaşan tüm Pivot'ları işaretlemek.",
        prerequisites: ["sec19_l11"],
        commonMistakes: ["PivotTable'ların farklı kaynak aralıklara sahip olması sebebiyle aynı dilimleyiciye bağlanamaması"],
        successCriteria: "Çoklu rapor bağlantısı kurabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Rapor Bağlantıları"],
        initialWorkbook: createTableSheet("s19_12", "RaporBaglantiSayfasi", ["Pivot Adı", "Bağlantı Durumu"], [["Pivot_Bölge", "Bağlı"], ["Pivot_Kategori", "Bağlı"], ["Pivot_Zaman", "Bağlı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tek Bir Dilimleyiciyi Birden Çok PivotTable’a Bağlama (Report Connections)",
                    "description": "Rapor Bağlantıları (Report Connections) penceresinden aynı veri kaynağını paylaşan tüm Pivot'ları işaretlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_12",
                    "title": "Senkronize Raporlama",
                    "explanation": "Dilimleyiciye sağ tıklayıp Rapor Bağlantıları (Report Connections) seçtiğinizde sayfadaki tüm PivotTable'ları işaretleyerek tek tıkla senkronize edersiniz.",
                    "speechText": "Tek bir bölge butonuna bastığınızda hem satış tablosu, hem personel tablosu, hem de grafik aynı anda güncellenir.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t19_12_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine bağlı sistem durumu olarak 'Tam Senkronize' yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "'Tam Senkronize' yazın.",
                              "B5 hücresine 'Tam Senkronize' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Tek Bir Dilimleyiciyi Birden Çok PivotTable’a Bağlama (Report Connections) görevini başarıyla tamamladınız.",
                              "expectedValue": "Tam Senkronize"
                    }
          }
],
        quiz: {
          "id": "q19_12",
          "title": "Tek Bir Dilimleyiciyi Birden Çok PivotTable’a Bağlama (Report Connections) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_12_1",
                              "question": "Bir dilimleyicinin sayfadaki diğer PivotTable'ları da aynı anda filtrelemesi için hangi ayar açılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Rapor Bağlantıları (Report Connections)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri Kilitle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Stil Değiştir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Köprü Ekle"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Rapor Bağlantıları dilimleyiciyi birden fazla PivotTable'a bağlar.",
                              "measuredSkill": "Çoklu Rapor Senkronizasyonu"
                    }
          ]
}
      },
      {
        id: "sec19_l13",
        phaseId: 19,
        unitId: "u19_13",
        title: "PivotTable Veri Kaynağını Değiştirme, Yenileme ve PivotChart",
        shortDesc: "Veri tabanından yeni kayıtlar geldiğinde Yenile (Alt+F5) yapma ve dinamik PivotChart oluşturma.",
        category: "PivotTable & Özet Raporlar",
        groupTitle: "Yenileme & PivotChart",
        primaryGoal: "PivotTable Analizi > Yenile (Refresh) ve PivotChart entegrasyonunu sağlamak.",
        prerequisites: ["sec19_l12"],
        commonMistakes: ["Kaynak veride yapılan değişikliklerin PivotTable'a otomatik yansıyacağını sanıp Yenile (Refresh) yapmayı unutmak"],
        successCriteria: "Pivot yenileme ve PivotChart sürecini yönetebilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["PivotChart", "Yenile"],
        initialWorkbook: createTableSheet("s19_13", "PivotChartSayfasi", ["Bölge", "Satış", "Grafik Durumu"], [["Kuzey", 210000, "Aktif"], ["Güney", 180000, "Aktif"], ["Doğu", 195000, "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "PivotTable Veri Kaynağını Değiştirme, Yenileme ve PivotChart",
                    "description": "PivotTable Analizi > Yenile (Refresh) ve PivotChart entegrasyonunu sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts19_13",
                    "title": "Pivot Dünyasının Zirvesi",
                    "explanation": "PivotTable statik bir anlık görüntüdür; kaynak değiştiğinde 'Yenile' butonuna basılması şarttır. PivotChart ise filtrelere anında tepki veren canlı grafiktir.",
                    "speechText": "Tebrikler! Veri hazırlığından başlayıp dilimleyicilere ve canlı PivotChart'lara uzanan tam kapsamlı Pivot uzmanlığı kazandınız.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t19_13_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine toplam satış değerini '=TOPLA(B2:B4)' formülüyle hesaplayın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B5 hücresine '=TOPLA(B2:B4)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! PivotTable Veri Kaynağını Değiştirme, Yenileme ve PivotChart görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q19_13",
          "title": "PivotTable Veri Kaynağını Değiştirme, Yenileme ve PivotChart Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_19_13_1",
                              "question": "Kaynak verideki yeni satırların PivotTable'da görünmesi için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "PivotTable Analizi > Yenile (Refresh) tıklanmalı veya Alt+F5 yapılmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel kapatılıp açılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül çubuğu silinmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yeni sayfa açılmalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "PivotTable verileri otomatik değil, Yenile (Refresh) komutuyla hafızaya çeker.",
                              "measuredSkill": "PivotTable Yenileme ve PivotChart"
                    }
          ]
}
      }
    ]
  },
  {
    id: 20,
    category: "Profesyonel Dashboard Tasarımı",
    title: "20. Profesyonel Dashboard",
    subtitle: "KPI Kartları, Grid Yerleşimi, Dinamik Başlıklar, Dilimleyiciler ve Yönetim Raporları",
    iconName: "LayoutGrid",
    description: "KPI tasarımı, hedef-gerçekleşen analizi, dinamik grafikler, filtreleme ve dilimleyici bağlantıları, dashboard grid yerleşimi, beyaz boşluk kullanımı ve kurumsal yönetim raporları.",
    lessons: [
      {
        id: "sec20_l1",
        phaseId: 20,
        unitId: "u20_1",
        title: "Yönetim Dashboard Mimarisi ve Bilgi Hiyerarşisi İlkeleri",
        shortDesc: "F ve Z okuma kalıplarına göre ekranı bölme ve en kritik KPI'ları sol üste yerleştirme kuralları.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Dashboard Mimarisi",
        primaryGoal: "Görsel hiyerarşi kurarak ekranı mantıksal panellere ayırmak.",
        prerequisites: ["sec19_l13"],
        commonMistakes: ["Detaylı uzun tabloları en üste koyup özet KPI kartlarını sayfanın altına gizlemek"],
        successCriteria: "Bilgi hiyerarşisi oluşturabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dashboard Mimarisi"],
        initialWorkbook: createTableSheet("s20_1", "HiyerarsiSayfasi", ["Panel Konumu", "İçerik Türü", "Önem Derecesi"], [["Sol Üst", "Ana KPI Kartları (Ciro, Kâr, Büyüme)", "Kritik"], ["Orta Alan", "Trend ve Kategori Grafikleri", "Yüksek"], ["Alt Alan", "Detaylı Veri Tablosu", "Orta"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yönetim Dashboard Mimarisi ve Bilgi Hiyerarşisi İlkeleri",
                    "description": "Görsel hiyerarşi kurarak ekranı mantıksal panellere ayırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_1",
                    "title": "Dashboard'un 5 Saniye Kuralı",
                    "explanation": "Bir CEO dashboard'a baktığı ilk 5 saniyede şirketin genel durumunu anlayabilmelidir. Bu yüzden en kritik 3-4 KPI kartı daima ekranın sol üstüne konur.",
                    "speechText": "Dashboard bir veri çöplüğü değildir; odaklanmış, hikaye anlatan bir yönetim kontrol merkezidir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t20_1_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine tasarım ilkesi olarak 'Hızlı Karar Desteği' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Hızlı Karar Desteği' yazın.",
                              "C5 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Yönetim Dashboard Mimarisi ve Bilgi Hiyerarşisi İlkeleri görevini başarıyla tamamladınız.",
                              "expectedValue": "Hızlı Karar Desteği"
                    }
          }
],
        quiz: {
          "id": "q20_1",
          "title": "Yönetim Dashboard Mimarisi ve Bilgi Hiyerarşisi İlkeleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_1_1",
                              "question": "Bir dashboard tasarımında en kritik KPI metrikleri ekranın neresine yerleştirilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sol Üst Köşe"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sağ Alt Köşe"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ayrı bir gizli sayfaya"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dipnota"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İnsan gözü okumaya sol üstten başlar; en kritik göstergeler daima sol üstte yer alır.",
                              "measuredSkill": "Görsel Hiyerarşi İlkeleri"
                    }
          ]
}
      },
      {
        id: "sec20_l2",
        phaseId: 20,
        unitId: "u20_2",
        title: "KPI (Temel Performans Göstergesi) Özet Kartları Tasarımı",
        shortDesc: "Büyük puntoyla güncel değer, altında küçük yüzde değişim gösteren kart kutuları hazırlama.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "KPI Kartları",
        primaryGoal: "Hücre birleştirme, gölgelendirme ve formül bağlantısıyla profesyonel kartlar üretmek.",
        prerequisites: ["sec20_l1"],
        commonMistakes: ["Küçük yazı fontlarıyla okunaksız KPI kutuları tasarlamak"],
        successCriteria: "KPI kartı tasarımı yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["KPI Kartı"],
        initialWorkbook: createTableSheet("s20_2", "KpiKartSayfasi", ["Metrik", "Güncel Değer", "Hedefe Göre Sapma"], [["Toplam Ciro", "₺ 2.450.000", "+ %12"], ["Net Kâr", "₺ 480.000", "+ %8"], ["Müşteri Memnuniyeti", "%94", "+ %3"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "KPI (Temel Performans Göstergesi) Özet Kartları Tasarımı",
                    "description": "Hücre birleştirme, gölgelendirme ve formül bağlantısıyla profesyonel kartlar üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_2",
                    "title": "Modern KPI Kart Mimarisi",
                    "explanation": "Kartın üstünde soluk gri renkle metrik başlığı (örn: Toplam Ciro), ortada 24pt kalın puntoyla sayı (₺ 2.45M), altta ise yeşil renkli değişim yüzdesi yer alır.",
                    "speechText": "Kullanıcı rakamı anında okur ve altındaki renkten hedefin tutturulup tutturulmadığını saniyesinde kavrar.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t20_2_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine toplam net kârı temsil eden '₺ 480.000' yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresine tıklayın.",
                              "'₺ 480.000' yazın.",
                              "B5 hücresine '₺ 480.000' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! KPI (Temel Performans Göstergesi) Özet Kartları Tasarımı görevini başarıyla tamamladınız.",
                              "expectedValue": "₺ 480.000"
                    }
          }
],
        quiz: {
          "id": "q20_2",
          "title": "KPI (Temel Performans Göstergesi) Özet Kartları Tasarımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_2_1",
                              "question": "Profesyonel bir KPI kartında sayısal değer hangi tipografiyle gösterilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Büyük puntoyla (20-24pt) ve kalın (bold) olarak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Küçük ve italik"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Altı çizili ve soluk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca dipnotta"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "KPI rakamları ilk bakışta fark edilmek için belirgin büyük puntoyla yazılır.",
                              "measuredSkill": "KPI Tipografi ve Tasarımı"
                    }
          ]
}
      },
      {
        id: "sec20_l3",
        phaseId: 20,
        unitId: "u20_3",
        title: "Hedef-Gerçekleşen Göstergeleri ve Bullet Graph Uygulaması",
        shortDesc: "Klasik ağır ibreli göstergeler yerine modern, az yer kaplayan bullet graph tasarlama.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Performans Göstergeleri",
        primaryGoal: "Yatay çubuk grafikle hedef çıtasını birleştirerek kompakt hedef göstergesi oluşturmak.",
        prerequisites: ["sec20_l2"],
        commonMistakes: ["Ekranda devasa yer kaplayan ve az bilgi veren analog hız kadranı grafikleri kullanmak"],
        successCriteria: "Bullet graph göstergesi kurabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Bullet Graph"],
        initialWorkbook: createTableSheet("s20_3", "BulletGraphSayfasi", ["Kanal", "Gerçekleşen", "Hedef", "Başarı Durumu"], [["E-Ticaret", 850000, 800000, "Hedef Aşıldı"], ["Mağaza", 620000, 700000, "Hedef Altı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hedef-Gerçekleşen Göstergeleri ve Bullet Graph Uygulaması",
                    "description": "Yatay çubuk grafikle hedef çıtasını birleştirerek kompakt hedef göstergesi oluşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_3",
                    "title": "Bullet Graph: Göstergelerin Zirvesi",
                    "explanation": "Stephen Few tarafından tasarlanan bullet graph, analog hız göstergelerinin yerini alan en verimli kurumsal grafiktir. Tek bir ince bantta hem mevcut durumu, hem hedefi, hem de nitelik aralıklarını gösterir.",
                    "speechText": "Ekranda çok az yer kaplayarak birden çok departmanın performansını yan yana kıyaslama imkanı sunar.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t20_3_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine genel durum olarak 'Başarılı Çeyrek' yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "'Başarılı Çeyrek' yazın.",
                              "D4 hücresine 'Başarılı Çeyrek' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Hedef-Gerçekleşen Göstergeleri ve Bullet Graph Uygulaması görevini başarıyla tamamladınız.",
                              "expectedValue": "Başarılı Çeyrek"
                    }
          }
],
        quiz: {
          "id": "q20_3",
          "title": "Hedef-Gerçekleşen Göstergeleri ve Bullet Graph Uygulaması Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_3_1",
                              "question": "Dashboard tasarımında analog hız göstergesi yerine neden Bullet Graph tercih edilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çok daha az yer kaplayıp daha zengin hedef ve bağlam bilgisi sunduğu için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Renksiz olduğu için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül gerektirmediği için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Animasyonlu olduğu için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Bullet graph minimalist yapısıyla maksimum bilgi yoğunluğu ve net kıyaslama sağlar.",
                              "measuredSkill": "Bullet Graph Tasarımı"
                    }
          ]
}
      },
      {
        id: "sec20_l4",
        phaseId: 20,
        unitId: "u20_4",
        title: "Etkileşimli Dilimleyiciler ve Sayfalar Arası Bağlantı Mimarisi",
        shortDesc: "Dashboard'un sol veya üst paneline sabitlenmiş şık dilimleyicilerle tüm raporu canlı filtreleme.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Etkileşim",
        primaryGoal: "Dilimleyicileri grafiklerle ve özet tablolarla kusursuz senkronize etmek.",
        prerequisites: ["sec20_l3"],
        commonMistakes: ["Dilimleyicilerin butonlarını biçimlendirmeden varsayılan parlak mavi renkte bırakmak"],
        successCriteria: "Dashboard dilimleyici paneli tasarlayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Dilimleyici"],
        initialWorkbook: createTableSheet("s20_4", "DilimleyiciPanel", ["Filtre Alanı", "Seçenek Sayısı", "Stil"], [["Yıl", "2024, 2025, 2026", "Koyu Başlık"], ["Bölge", "Marmara, Ege, İç Anadolu", "Koyu Başlık"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Etkileşimli Dilimleyiciler ve Sayfalar Arası Bağlantı Mimarisi",
                    "description": "Dilimleyicileri grafiklerle ve özet tablolarla kusursuz senkronize etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_4",
                    "title": "Kontrol Paneli Düzeni",
                    "explanation": "Tüm dilimleyicileri sol tarafta dikey bir şeride veya sayfanın en üstünde yatay bir kontrol çubuğuna toplarız. Dilimleyici stillerini dashboard renk paletiyle uyumlu hale getiririz.",
                    "speechText": "Kullanıcı filtre panelindeki butonlara bastığı an sayfadaki tüm KPI kartları ve grafikler eşzamanlı olarak yeniden hesaplanır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t20_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine kontrol paneli durumu olarak 'Senkronize Panel' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Senkronize Panel' yazın.",
                              "C4 hücresine 'Senkronize Panel' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Etkileşimli Dilimleyiciler ve Sayfalar Arası Bağlantı Mimarisi görevini başarıyla tamamladınız.",
                              "expectedValue": "Senkronize Panel"
                    }
          }
],
        quiz: {
          "id": "q20_4",
          "title": "Etkileşimli Dilimleyiciler ve Sayfalar Arası Bağlantı Mimarisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_4_1",
                              "question": "Dilimleyicileri kurumsal bir dashboard tasarımına entegre ederken en iyi uygulama nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hepsini üst veya sol kontrol çubuğuna hizalayıp kurumsal renk teması uygulamak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayfanın rastgele köşelerine serpmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafiklerin üzerine kapatmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sütun aralarına gizlemek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Düzenli bir kontrol şeridinde toplanan dilimleyiciler sezgisel kullanıcı deneyimi sunar.",
                              "measuredSkill": "Dashboard Dilimleyici Düzeni"
                    }
          ]
}
      },
      {
        id: "sec20_l5",
        phaseId: 20,
        unitId: "u20_5",
        title: "Formül Tabanlı Dinamik Başlıklar ve Metin Kartları",
        shortDesc: "Seçilen bölgeye veya aya göre 'Marmara Bölgesi 2026 Satış Analizi' şeklinde otomatik değişen grafik başlıkları.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Dinamik Başlıklar",
        primaryGoal: "Grafik başlığına tıklayıp formül çubuğuna '=$A$1' yazarak dinamik metin bağlamak.",
        prerequisites: ["sec20_l4"],
        commonMistakes: ["Grafik başlığını elle yazıp filtre değiştiğinde başlığın eski kalmasına neden olmak"],
        successCriteria: "Dinamik başlık bağlayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Dinamik Başlık"],
        initialWorkbook: createTableSheet("s20_5", "DinamikBaslikSayfasi", ["Seçili Bölge", "Seçili Yıl", "Oluşan Başlık"], [["Marmara", 2026, "Marmara Bölgesi 2026 Satış Analizi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formül Tabanlı Dinamik Başlıklar ve Metin Kartları",
                    "description": "Grafik başlığına tıklayıp formül çubuğuna '=$A$1' yazarak dinamik metin bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_5",
                    "title": "Canlı Grafik Başlıkları",
                    "explanation": "C2 hücresine '=A2 & \" Bölgesi \" & B2 & \" Satış Analizi\"' yazarız. Ardından grafik başlığı seçiliyken formül çubuğuna '=$C$2' yazarız. Başlık filtrelere göre otomatik değişir.",
                    "speechText": "Dinamik başlıklar dashboardun profesyonellik düzeyini bir üst lige taşır; kullanıcı neyi incelediğini asla şaşırmaz.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t20_5_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine '=A2 & \" Bölgesi Raporu\"' formülünü yazarak başlığı bağlayın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "=A2 & \" Bölgesi Raporu\" yazın.",
                              "C3 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Formül Tabanlı Dinamik Başlıklar ve Metin Kartları görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "A2",
                                        "Bölgesi Raporu"
                              ]
                    }
          }
],
        quiz: {
          "id": "q20_5",
          "title": "Formül Tabanlı Dinamik Başlıklar ve Metin Kartları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_5_1",
                              "question": "Grafik başlığının bir hücredeki dinamik metni göstermesi için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Grafik başlığı seçilip formül çubuğuna '=$A$1' hücre referansı yazılır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin kopyalanıp yapıştırılır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafiğe çift tıklanır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Başlık silinir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formül çubuğundan hücre referansı bağlamak başlığın canlı olarak değişmesini sağlar.",
                              "measuredSkill": "Dinamik Grafik Başlığı Bağlama"
                    }
          ]
}
      },
      {
        id: "sec20_l6",
        phaseId: 20,
        unitId: "u20_6",
        title: "Dashboard Grid Düzeni, Beyaz Boşluk ve Kurumsal Renk Paleti",
        shortDesc: "12 sütunluk grid düzeni kurma, öğeler arasına nefes alacak boşluklar bırakma ve 3 renk kuralı.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Grid ve Tipografi",
        primaryGoal: "Görsel hizalama araçları ve kurumsal renk kodlarıyla tutarlı bir arayüz tasarlamak.",
        prerequisites: ["sec20_l5"],
        commonMistakes: ["Tüm ekranı kenardan kenara sıkışık tablolarla doldurup gözü yormak"],
        successCriteria: "Grid ve boşluk dengesini kurabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Grid Tasarımı"],
        initialWorkbook: createTableSheet("s20_6", "GridDuzenSayfasi", ["Bileşen", "Genişlik (Grid)", "Konum"], [["KPI Kartları 1-3", "4 Kolon", "Satır 1"], ["Büyük Trend Grafiği", "8 Kolon", "Satır 2"], ["Kategori Dağılımı", "4 Kolon", "Satır 2"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dashboard Grid Düzeni, Beyaz Boşluk ve Kurumsal Renk Paleti",
                    "description": "Görsel hizalama araçları ve kurumsal renk kodlarıyla tutarlı bir arayüz tasarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_6",
                    "title": "60-30-10 Renk Kuralı",
                    "explanation": "Dashboard'un %60'ı açık nötr arka plan (beyaz/açık gri), %30'u ana kurumsal renk (koyu lacivert/antrasit), %10'u ise dikkat çekici vurgu rengidir (yeşil/turuncu).",
                    "speechText": "Öğelerin arasında en az 10-15 piksellik beyaz boşluk (whitespace) bırakmak raporu birinci sınıf bir yönetim arayüzüne çevirir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t20_6_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine tasarım notu olarak '60-30-10 Kuralı' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'60-30-10 Kuralı' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Dashboard Grid Düzeni, Beyaz Boşluk ve Kurumsal Renk Paleti görevini başarıyla tamamladınız.",
                              "expectedValue": "60-30-10 Kuralı"
                    }
          }
],
        quiz: {
          "id": "q20_6",
          "title": "Dashboard Grid Düzeni, Beyaz Boşluk ve Kurumsal Renk Paleti Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_6_1",
                              "question": "Tasarımda 60-30-10 renk kuralında %10'luk kısım neyi temsil eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kritik uyarılar ve hedefler için kullanılan dikkat çekici vurgu rengini"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Arka plan rengini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin rengini"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kenarlıkları"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "%10'luk kısım gözü doğrudan başarı veya alarma yönlendiren vurgu (accent) rengidir.",
                              "measuredSkill": "Renk Teorisi ve Dashboard Tasarımı"
                    }
          ]
}
      },
      {
        id: "sec20_l7",
        phaseId: 20,
        unitId: "u20_7",
        title: "Form Denetimleri (Onay Kutusu, Seçenek Düğmesi) ile Etkileşim",
        shortDesc: "Geliştirici sekmesinden onay kutusu (Checkbox) ekleyerek grafikte geçen yılı açıp kapatma.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Form Denetimleri",
        primaryGoal: "Onay kutusunu bir hücreye (DOĞRU/YANLIŞ) bağlayarak formüllerle grafiği dinamikleştirmek.",
        prerequisites: ["sec20_l6"],
        commonMistakes: ["Hücre bağlantısı yapmadan denetim kutusunun tek başına çalışacağını sanmak"],
        successCriteria: "Form denetimi entegrasyonunu yapabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Form Denetimleri"],
        initialWorkbook: createTableSheet("s20_7", "FormDenetimSayfasi", ["Denetim Türü", "Bağlı Hücre", "Durum"], [["Onay Kutusu (Geçen Yıl)", "$Z$1", "DOĞRU"], ["Seçenek Düğmesi (TL / USD)", "$Z$2", 1]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Form Denetimleri (Onay Kutusu, Seçenek Düğmesi) ile Etkileşim",
                    "description": "Onay kutusunu bir hücreye (DOĞRU/YANLIŞ) bağlayarak formüllerle grafiği dinamikleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_7",
                    "title": "Hücre Bağlantılı Kontroller",
                    "explanation": "Onay kutusuna sağ tıklayıp Denetim Biçimlendir > Hücre Bağlantısı: Z1 seçilir. Kutu işaretlendiğinde Z1 hücresi DOĞRU olur, =EĞER(Z1; Veri; YOK()) ile seriyi açıp kapatırız.",
                    "speechText": "Kullanıcıya interaktif web uygulaması hissi veren form denetimleri Excel raporlarını interaktif yazılımlara dönüştürür.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t20_7_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine denetim durumu olarak 'Dinamik Seri Bağlantısı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Dinamik Seri Bağlantısı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Form Denetimleri (Onay Kutusu, Seçenek Düğmesi) ile Etkileşim görevini başarıyla tamamladınız.",
                              "expectedValue": "Dinamik Seri Bağlantısı"
                    }
          }
],
        quiz: {
          "id": "q20_7",
          "title": "Form Denetimleri (Onay Kutusu, Seçenek Düğmesi) ile Etkileşim Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_7_1",
                              "question": "Bir form onay kutusunun (Checkbox) işaretlenip işaretlenmediği formüllere nasıl aktarılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Denetim Biçimlendir'den bir 'Hücre Bağlantısı' tanımlanır (Hücreye DOĞRU/YANLIŞ yazar)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayfa şifrelenir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "VBA kodu yazılmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yeni tablo açılır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Form denetimi bağlı hücreye DOĞRU veya YANLIŞ yazarak formüllerle haberleşir.",
                              "measuredSkill": "Form Denetimleri Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec20_l8",
        phaseId: 20,
        unitId: "u20_8",
        title: "C-Level Yönetici Özeti ve Karar Destek Raporlama Sayfası",
        shortDesc: "Üst yönetim için tek sayfalık A4 veya 16:9 ekran formatında yazdırılabilir / PDF edilebilir raporlama.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Yönetici Sunumu",
        primaryGoal: "Sayfa Düzeni ve Yazdırma Alanı (Print Area) belirleyerek tek ekrana sığdırmak.",
        prerequisites: ["sec20_l7"],
        commonMistakes: ["Yazdırma alanını ayarlamayıp PDF alındığında grafiğin iki sayfaya bölünmesine neden olmak"],
        successCriteria: "Tek sayfalık yönetici özeti hazırlayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Yazdırma Alanı"],
        initialWorkbook: createTableSheet("s20_8", "YoneticiOzeti", ["Rapor Başlığı", "Hedef Kitle", "Sayfa Formatı"], [["Aylık İcra Kurulu Raporu", "CEO & Yönetim Kurulu", "Tek Sayfa 16:9"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "C-Level Yönetici Özeti ve Karar Destek Raporlama Sayfası",
                    "description": "Sayfa Düzeni ve Yazdırma Alanı (Print Area) belirleyerek tek ekrana sığdırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_8",
                    "title": "Tek Sayfa Disiplini",
                    "explanation": "Yöneticiler kaydırma çubuğuyla aşağı inmek istemez. Tüm karar destek metrikleri, trendler ve uyarılar tek bir 1920x1080 ekrana veya A4 yatay sayfaya sığdırılmalıdır.",
                    "speechText": "Görünüm > Kılavuz Çizgileri ve Başlıkları kapatarak Excel'i saf bir iş zekası yazılımı görünümüne kavuşturun.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t20_8_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine rapor onay durumu olarak 'Onaylandı' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Onaylandı' yazın.",
                              "C3 hücresine 'Onaylandı' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! C-Level Yönetici Özeti ve Karar Destek Raporlama Sayfası görevini başarıyla tamamladınız.",
                              "expectedValue": "Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q20_8",
          "title": "C-Level Yönetici Özeti ve Karar Destek Raporlama Sayfası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_8_1",
                              "question": "Dashboard'u bir Excel tablosu yerine kurumsal yazılım gibi göstermek için ne kapatılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görünüm sekmesinden Kılavuz Çizgileri, Başlıklar ve Formül Çubuğu"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosya kaydedilmelidir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı tipleri silinmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreler gizlenmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kılavuz çizgileri ve başlıklar kapatıldığında Excel saf bir dashboard tuvaline dönüşür.",
                              "measuredSkill": "Arayüz Sadeleştirme"
                    }
          ]
}
      },
      {
        id: "sec20_l9",
        phaseId: 20,
        unitId: "u20_9",
        title: "Dashboard Performansı: Dosya Boyutu ve Hesaplama Hızı Optimizasyonu",
        shortDesc: "Aşırı formül ve biçimlendirmenin yarattığı yavaşlamaları giderme ve dinamik hafifletme.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Performans",
        primaryGoal: "Gereksiz biçimlendirmeleri temizlemek ve hesaplama yükünü optimize etmek.",
        prerequisites: ["sec20_l8"],
        commonMistakes: ["Tüm sayfayı (1 milyon satır) renklendirip dosya boyutunu 50 megabayta çıkarmak"],
        successCriteria: "Dashboard performans optimizasyonu yapabilmek.",
        level: "Uzman",
        durationMinutes: 12,
        functionsUsed: ["Performans"],
        initialWorkbook: createTableSheet("s20_9", "PerformansSayfasi", ["Optimizasyon Adımı", "Fayda", "Durum"], [["Aşırı Biçimlendirmeyi Temizle", "Dosya Boyutu %70 Düşer", "Uygulandı"], ["Volatile Formülleri Azalt", "Anında Hesaplama Hızı", "Uygulandı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dashboard Performansı: Dosya Boyutu ve Hesaplama Hızı Optimizasyonu",
                    "description": "Gereksiz biçimlendirmeleri temizlemek ve hesaplama yükünü optimize etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_9",
                    "title": "Hafif ve Hızlı Dashboardlar",
                    "explanation": "Kullanılmayan boş satırlardaki kenarlıkları ve renkleri silin. Çok sayıda DOLAYLI ve OFSET formülü yerine indeks ve PivotTable kullanarak hesaplama hızını katlayın.",
                    "speechText": "Yavaş açılan ve tıklamalara geç yanıt veren bir dashboard yöneticiler tarafından terk edilir; hız bir tasarım zorunluluğudur.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t20_9_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine optimizasyon standardı olarak 'Hızlı Yanıt Süresi' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Hızlı Yanıt Süresi' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Dashboard Performansı: Dosya Boyutu ve Hesaplama Hızı Optimizasyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "Hızlı Yanıt Süresi"
                    }
          }
],
        quiz: {
          "id": "q20_9",
          "title": "Dashboard Performansı: Dosya Boyutu ve Hesaplama Hızı Optimizasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_9_1",
                              "question": "Excel dashboard dosya boyutunu ve yavaşlığını artıran en yaygın hata nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Boş hücrelere ve milyonlarca satıra gereksiz renk ve kenarlık uygulanması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "PivotTable kullanılması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dilimleyici eklenmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayı formatı verilmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Gereksiz hücre biçimlendirmeleri Excel dosyasının şişmesine ve yavaşlamasına yol açar.",
                              "measuredSkill": "Dashboard Performans Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec20_l10",
        phaseId: 20,
        unitId: "u20_10",
        title: "Uçtan Uca İnteraktif Satış ve Ciro Dashboard Projesi",
        shortDesc: "Ham veriden başlayıp KPI kartları, dinamik grafikler ve dilimleyicilerle komple dashboard inşa etme.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Tüm dashboard bileşenlerini tek bir profesyonel raporda birleştirmek.",
        prerequisites: ["sec20_l9"],
        commonMistakes: ["Bileşenleri hizalamayıp dağınık bir görünüm bırakmak"],
        successCriteria: "Komple dashboard projesini tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Dashboard Projesi"],
        initialWorkbook: createTableSheet("s20_10", "UctanUcaDashboard", ["Bölge", "Yıllık Ciro", "Hedef", "Başarı Oranı"], [["Marmara", 1250000, 1100000, 1.14], ["Ege", 850000, 900000, 0.94], ["Akdeniz", 720000, 700000, 1.03]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Uçtan Uca İnteraktif Satış ve Ciro Dashboard Projesi",
                    "description": "Tüm dashboard bileşenlerini tek bir profesyonel raporda birleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_10",
                    "title": "Gerçek Bir İş Zekası Şaheseri",
                    "explanation": "Tebrikler! Bu projede sol panelde dilimleyiciler, üstte 3 adet ciro ve kâr KPI kartı, ortada birleşik trend grafiği ve altta özet tablodan oluşan tam teşekküllü bir yönetim dashboardu kurdunuz.",
                    "speechText": "Artık herhangi bir şirketin ham verisini alıp yönetim kuruluna sunulacak seviyede interaktif bir kontrol paneline dönüştürebilirsiniz.",
                    "targetCell": "B6"
          }
],
        tasks: [
          {
                    "id": "t20_10_1",
                    "stepNumber": 1,
                    "instruction": "B6 hücresine toplam şirket cirosunu '=TOPLA(B2:B4)' formülüyle hesaplayın.",
                    "targetCell": "B6",
                    "hints": [
                              "B6 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B6 hücresine '=TOPLA(B2:B4)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B6",
                              "successMessage": "Tebrikler! Uçtan Uca İnteraktif Satış ve Ciro Dashboard Projesi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q20_10",
          "title": "Uçtan Uca İnteraktif Satış ve Ciro Dashboard Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_10_1",
                              "question": "Profesyonel bir dashboard'un başarısını belirleyen en temel kriter nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yöneticinin doğru kararları en az efor ve en yüksek hızla alabilmesini sağlaması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En çok grafiği tek sayfaya sıkıştırmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tüm renkleri kullanmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "En uzun formülleri yazmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dashboard'un nihai amacı veri gösterisi değil, hızlı ve doğru karar destek sağlamaktır.",
                              "measuredSkill": "Bütünleşik Dashboard Mimarlığı"
                    }
          ]
}
      },
      {
        id: "sec20_l11",
        phaseId: 20,
        unitId: "u20_11",
        title: "Dashboard Tasarım ve İletişim İlkeleri Final Değerlendirmesi",
        shortDesc: "Dashboard sunum teknikleri, paydaş geri bildirimi ve raporlama etiği uzmanlık sınavı.",
        category: "Profesyonel Dashboard Tasarımı",
        groupTitle: "Final Değerlendirme",
        primaryGoal: "Tasarım ilkeleri ve iş zekası standartlarını eksiksiz değerlendirmek.",
        prerequisites: ["sec20_l10"],
        commonMistakes: ["Raporu paylaştıktan sonra kullanıcıların nasıl kullandığını gözlemlememek"],
        successCriteria: "Dashboard uzmanlık sertifikasyonunu tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Final Değerlendirme"],
        initialWorkbook: createTableSheet("s20_11", "DashboardFinalSinav", ["Kriter", "Standart", "Durum"], [["Görsel Netlik", "5 Saniye Kuralı", "Geçti"], ["Etkileşim", "Senkron Dilimleyiciler", "Geçti"], ["Veri Doğruluğu", "%100 Mutabakat", "Geçti"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dashboard Tasarım ve İletişim İlkeleri Final Değerlendirmesi",
                    "description": "Tasarım ilkeleri ve iş zekası standartlarını eksiksiz değerlendirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts20_11",
                    "title": "Uzmanlık Seviyesi",
                    "explanation": "Bölüm 20'yi tamamlayarak modern veri görselleştirme, KPI tasarımı ve interaktif yönetim dashboardları alanında tam uzmanlık seviyesine ulaştınız.",
                    "speechText": "Kurumsal iş dünyasında en çok aranan ve en yüksek değer üreten yetkinliklerden birini başarıyla kazandınız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t20_11_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine final başarı derecesi olarak 'Üstün Başarı' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresine tıklayın.",
                              "'Üstün Başarı' yazın.",
                              "C5 hücresine 'Üstün Başarı' yazarak bitirin."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Dashboard Tasarım ve İletişim İlkeleri Final Değerlendirmesi görevini başarıyla tamamladınız.",
                              "expectedValue": "Üstün Başarı"
                    }
          }
],
        quiz: {
          "id": "q20_11",
          "title": "Dashboard Tasarım ve İletişim İlkeleri Final Değerlendirmesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_20_11_1",
                              "question": "Bir dashboard'un kurumsal ortamda sürdürülebilir olması için hangisi şarttır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri kaynağının dinamik olması ve tek tıkla yenilenebilir yapıda kurgulanması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Her ay sıfırdan elle çizilmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca kağıt çıktısı alınması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca tek bir bilgisayarda açılması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sürdürülebilir dashboardlar otomatik güncellenen ve yenilenebilir veri mimarisine sahiptir.",
                              "measuredSkill": "Sürdürülebilir Dashboard Yönetimi"
                    }
          ]
}
      }
    ]
  }
];
