import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_11_TO_15: CurriculumPhase[] = [
  {
    id: 11,
    category: "Tarih ve Saat",
    title: "11. Tarih, Saat ve İş Günü Hesaplamaları",
    subtitle: "BUGÜN, ŞİMDİ, GÜN, AY, YIL, SERİTARİH, TAMİŞGÜNÜ ve İŞGÜNÜ ile Termin Takibi",
    iconName: "Calendar",
    description: "Excel'in tarih seri numarası mimarisi, dinamik güncel tarih üretimi, vade ve termin analizleri, resmi tatilleri dışlayarak iş günü hesaplamaları ve kurumsal zaman zekası.",
    lessons: [
      {
        id: "sec11_l1",
        phaseId: 11,
        unitId: "u11_1",
        title: "BUGÜN ve ŞİMDİ Dinamik Fonksiyonları",
        shortDesc: "Çalışma kitabını her açtığınızda sistemin güncel tarihini ve saatini getirme.",
        category: "Tarih ve Saat",
        groupTitle: "Dinamik Tarih",
        primaryGoal: "Raporlarda bugünün tarihini dinamik olarak üretip fatura vade farklarını hesaplamak.",
        prerequisites: ["sec10_l6"],
        commonMistakes: ["BUGÜN fonksiyonunun parantezinin içine parametre yazmaya çalışmak"],
        successCriteria: "BUGÜN fonksiyonunu doğru sözdizimiyle uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["BUGÜN", "ŞİMDİ"],
        initialWorkbook: createTableSheet("s11_1", "DinamikTarih", ["Parametre", "Fonksiyon Değeri", "Açıklama"], [["Güncel Sistem Tarihi", "", "Her gün otomatik yenilenir"], ["Sistem Tarih ve Saati", "", "Anlık zaman damgası"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BUGÜN ve ŞİMDİ Dinamik Fonksiyonları",
                    "description": "Raporlarda bugünün tarihini dinamik olarak üretip fatura vade farklarını hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_1",
                    "title": "Dinamik Tarih Üretimi",
                    "explanation": "BUGÜN() fonksiyonu bilgisayarın sistem tarihini dinamik olarak çeker ve her hesaplamada güncellenir.",
                    "speechText": "Statik tarih yazmak yerine =BUGÜN() kullandığınızda yarın raporu açtığınızda tarih kendiliğinden yarının tarihi olur.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t11_1_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine dinamik güncel tarih formülünü yazın: =BUGÜN()",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=BUGÜN() formülünü girin.",
                              "B2 hücresine tam olarak =BUGÜN() yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BUGÜN ve ŞİMDİ Dinamik Fonksiyonları görevini başarıyla tamamladınız.",
                              "expectedValue": "=BUGÜN()"
                    }
          }
],
        quiz: {
          "id": "q11_1",
          "title": "BUGÜN ve ŞİMDİ Dinamik Fonksiyonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_1_1",
                              "question": "BUGÜN fonksiyonu hangi argümanları alır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hiçbir argüman almaz, boş parantezle kullanılır (=BUGÜN())"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücre adresi alır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yıl değeri alır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayı değeri alır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "BUGÜN fonksiyonu parametresiz çalışır ve sistem tarihini verir.",
                              "measuredSkill": "Dinamik Tarih Fonksiyonu Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec11_l2",
        phaseId: 11,
        unitId: "u11_2",
        title: "Excel'de Tarihlerin Seri Numarası Mantığı",
        shortDesc: "Excel'in tüm tarihleri 1 Ocak 1900'den başlayan ardışık tam sayılar olarak saklama kuralı.",
        category: "Tarih ve Saat",
        groupTitle: "Tarih Mimarisi",
        primaryGoal: "Tarihlerin arka planda aslında birer sayı olduğunu ve bu sayede matematiksel işlemler yapılabildiğini kavramak.",
        prerequisites: ["sec11_l1"],
        commonMistakes: ["Tarihlerin metin olduğunu sanıp üzerine sayı eklenemeyeceğini düşünmek"],
        successCriteria: "Tarih seri numarası mantığını ve tarih toplamayı kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Tarih Seri Numarası"],
        initialWorkbook: createTableSheet("s11_2", "TarihSeriNo", ["Açıklama", "Tarih Görünümü", "Seri Numarası"], [["Başlangıç Tarihi", "01.01.2024", 45292], ["30 Gün Sonrası Vade", "", "Seri no + 30"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Excel'de Tarihlerin Seri Numarası Mantığı",
                    "description": "Tarihlerin arka planda aslında birer sayı olduğunu ve bu sayede matematiksel işlemler yapılabildiğini kavramak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_2",
                    "title": "Tarih Matematiktir",
                    "explanation": "Excel'de 1 Ocak 1900 tarihi 1 sayısıdır. Bugün ise yaklaşık 45.000 civarında bir tam sayıdır. Bu nedenle bir tarihe 30 eklemek demek 30 gün sonrasını bulmak demektir.",
                    "speechText": "Tarih hücresini Genel (General) sayı biçimine çevirirseniz gerçek seri numarasını görürsünüz.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t11_2_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine 30 gün sonrasının vadesini hesaplayan formülü yazın: =B2+30",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "=B2+30 formülünü yazın.",
                              "B3 hücresine =B2+30 formülünü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Excel'de Tarihlerin Seri Numarası Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "=B2+30"
                    }
          }
],
        quiz: {
          "id": "q11_2",
          "title": "Excel'de Tarihlerin Seri Numarası Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_2_1",
                              "question": "Excel'de bir tarihe +7 eklediğinizde ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "O tarihten tam 7 gün sonrasının tarihi bulunur"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tarihe 7 ay eklenir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarihe 7 yıl eklenir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de tam sayılar gün birimine karşılık gelir.",
                              "measuredSkill": "Tarih Seri Numarası ve Aritmetik"
                    }
          ]
}
      },
      {
        id: "sec11_l3",
        phaseId: 11,
        unitId: "u11_3",
        title: "GÜN, AY ve YIL ile Tarih Bileşenlerini Ayrıştırma",
        shortDesc: "Bir tarih hücresinden gün, ay veya yıl bilgisini bağımsız bir sayı olarak çekme.",
        category: "Tarih ve Saat",
        groupTitle: "Tarih Parçalama",
        primaryGoal: "Tarihleri raporlama dilimlerine ayırmak için GÜN, AY ve YIL fonksiyonlarını kullanabilmek.",
        prerequisites: ["sec11_l2"],
        commonMistakes: ["AY fonksiyonu sonucunun ay adı (Ocak) olarak döneceğini sanmak (1-12 arası sayı döner)"],
        successCriteria: "GÜN, AY, YIL fonksiyonlarını başarıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["GÜN", "AY", "YIL"],
        initialWorkbook: createTableSheet("s11_3", "TarihParcala", ["İşlem Tarihi", "Yıl", "Ay No", "Gün No"], [["15.08.2024", "", "", ""], ["23.11.2024", "", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "GÜN, AY ve YIL ile Tarih Bileşenlerini Ayrıştırma",
                    "description": "Tarihleri raporlama dilimlerine ayırmak için GÜN, AY ve YIL fonksiyonlarını kullanabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_3",
                    "title": "Tarih Bileşenlerini Çıkarma",
                    "explanation": "YIL(A2) işlemi 2024, AY(A2) işlemi 8, GÜN(A2) işlemi ise 15 sayısını üretir. Bu sayılarla pivot tablolarda veya çoklu koşullarda kolayca gruplama yapılır.",
                    "speechText": "Ağustos ayını sayı olarak elde etmek için AY fonksiyonu kullanılır.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine A2'deki tarihin ay numarasını bulan formülü yazın: =AY(A2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=AY(A2) formülünü yazın.",
                              "C2 hücresine =AY(A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! GÜN, AY ve YIL ile Tarih Bileşenlerini Ayrıştırma görevini başarıyla tamamladınız.",
                              "expectedValue": "=AY(A2)"
                    }
          }
],
        quiz: {
          "id": "q11_3",
          "title": "GÜN, AY ve YIL ile Tarih Bileşenlerini Ayrıştırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_3_1",
                              "question": "AY('15.08.2024') formülü hangi sonucu döndürür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "8"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ağustos"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "15"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "2024"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "AY fonksiyonu 1 ile 12 arasında ay sıra numarasını verir.",
                              "measuredSkill": "Tarih Bileşenlerini Sayısal Olarak Ayrıştırma"
                    }
          ]
}
      },
      {
        id: "sec11_l4",
        phaseId: 11,
        unitId: "u11_4",
        title: "TARİH Fonksiyonu ile Yıl, Ay, Günden Tarih İnşa Etme",
        shortDesc: "Farklı hücrelerdeki veya formül çıktılarındaki yıl, ay ve gün değerlerini birleştirip geçerli bir Excel tarihi oluşturma.",
        category: "Tarih ve Saat",
        groupTitle: "Tarih Birleştirme",
        primaryGoal: "Ayrı sütunlardaki yıl, ay ve gün sayılarından resmi Excel tarihi üretmek.",
        prerequisites: ["sec11_l3"],
        commonMistakes: ["TARİH fonksiyonu parametre sırasını karıştırmak (Yıl, Ay, Gün sıralaması zorunludur)"],
        successCriteria: "TARİH fonksiyonunu doğru sıra ile uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["TARİH"],
        initialWorkbook: createTableSheet("s11_4", "TarihBirlestir", ["Yıl", "Ay", "Gün", "Oluşturulan Tarih"], [[2024, 10, 29, ""], [2025, 4, 23, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TARİH Fonksiyonu ile Yıl, Ay, Günden Tarih İnşa Etme",
                    "description": "Ayrı sütunlardaki yıl, ay ve gün sayılarından resmi Excel tarihi üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_4",
                    "title": "Güvenli Tarih İnşaatı",
                    "explanation": "Metin birleştirme ile yapılan tarihler bölgesel ayarlarda (TR/EN) bozulabilir. =TARİH(Yıl; Ay; Gün) fonksiyonu her işletim sisteminde kusursuz bir Excel tarih seri numarası üretir.",
                    "speechText": "A2 yıl, B2 ay, C2 ise gündür.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t11_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine geçerli tarihi oluşturan formülü yazın: =TARİH(A2;B2;C2)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=TARİH(A2;B2;C2) formülünü yazın.",
                              "D2 hücresine =TARİH(A2;B2;C2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! TARİH Fonksiyonu ile Yıl, Ay, Günden Tarih İnşa Etme görevini başarıyla tamamladınız.",
                              "expectedValue": "=TARİH(A2;B2;C2)"
                    }
          }
],
        quiz: {
          "id": "q11_4",
          "title": "TARİH Fonksiyonu ile Yıl, Ay, Günden Tarih İnşa Etme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_4_1",
                              "question": "TARİH(Yıl; Ay; Gün) fonksiyonunun ilk parametresi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yıl"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Gün"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ay"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Saat"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "TARİH fonksiyonu sırasıyla Yıl, Ay ve Gün parametrelerini kabul eder.",
                              "measuredSkill": "TARİH Fonksiyonu ile Tarih Üretimi"
                    }
          ]
}
      },
      {
        id: "sec11_l5",
        phaseId: 11,
        unitId: "u11_5",
        title: "TARİHSAYISI (DATEVALUE) ile Metinsel Tarihleri Çevirme",
        shortDesc: "ERP veya dış sistemlerden metin (string) olarak gelen tarihleri gerçek Excel tarih seri numarasına dönüştürme.",
        category: "Tarih ve Saat",
        groupTitle: "Veri Temizleme",
        primaryGoal: "Metin biçimindeki bozuk tarih kayıtlarını formülle gerçek tarihe çevirmek.",
        prerequisites: ["sec11_l4"],
        commonMistakes: ["Metinsel tarihler üzerinde toplama çıkarma yapmaya çalışıp #DEĞER! hatası almak"],
        successCriteria: "TARİHSAYISI fonksiyonunu başarıyla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["TARİHSAYISI"],
        initialWorkbook: createTableSheet("s11_5", "TarihSayisiSayfasi", ["Metin Olarak Gelen Tarih", "Gerçek Tarih Seri Değeri", "Durum"], [["2024-05-19", "", "Metin"], ["2024-10-29", "", "Metin"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TARİHSAYISI (DATEVALUE) ile Metinsel Tarihleri Çevirme",
                    "description": "Metin biçimindeki bozuk tarih kayıtlarını formülle gerçek tarihe çevirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_5",
                    "title": "Metinden Sayıya Dönüşüm",
                    "explanation": "Dış sistemlerden indirilen CSV dosyalarında tarihler sola hizalı ve metin formatında gelebilir. =TARİHSAYISI(A2) formülü metni Excel'in tanıyacağı seri numarasına çevirir.",
                    "speechText": "A2 hücresindeki metinsel tarihi çevireceğiz.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t11_5_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine formülü yazın: =TARİHSAYISI(A2)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=TARİHSAYISI(A2) formülünü yazın.",
                              "B2 hücresine =TARİHSAYISI(A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! TARİHSAYISI (DATEVALUE) ile Metinsel Tarihleri Çevirme görevini başarıyla tamamladınız.",
                              "expectedValue": "=TARİHSAYISI(A2)"
                    }
          }
],
        quiz: {
          "id": "q11_5",
          "title": "TARİHSAYISI (DATEVALUE) ile Metinsel Tarihleri Çevirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_5_1",
                              "question": "TARİHSAYISI fonksiyonunun temel görevi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Metin biçimindeki tarihi Excel seri numarasına çevirmek"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tarihi silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Günün tarihini bulmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarihten saat çıkarmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Metinsel tarihleri matematiksel işlenebilir sayıya çevirir.",
                              "measuredSkill": "Metinsel Tarih Dönüşümü"
                    }
          ]
}
      },
      {
        id: "sec11_l6",
        phaseId: 11,
        unitId: "u11_6",
        title: "SERİTARİH (EDATE) ile Ay Bazında Vade Hesaplama",
        shortDesc: "Belirli bir tarihin N ay öncesini veya sonrasını tam gününü koruyarak bulma.",
        category: "Tarih ve Saat",
        groupTitle: "Vade Planlama",
        primaryGoal: "Kredi taksitleri, abonelik yenilemeleri ve sözleşme bitiş tarihlerini ay bazında hesaplamak.",
        prerequisites: ["sec11_l2"],
        commonMistakes: ["Her ayı 30 gün kabul edip +30*N yaparak 31 çeken ve Şubat aylarında gün kayması yaşamak"],
        successCriteria: "SERİTARİH fonksiyonu ile hatasız ay ekleyebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["SERİTARİH"],
        initialWorkbook: createTableSheet("s11_6", "SeriTarihSayfasi", ["Başlangıç Tarihi", "Eklenecek Ay", "Vade / Bitiş Tarihi"], [["15.01.2024", 6, ""], ["31.03.2024", 3, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SERİTARİH (EDATE) ile Ay Bazında Vade Hesaplama",
                    "description": "Kredi taksitleri, abonelik yenilemeleri ve sözleşme bitiş tarihlerini ay bazında hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_6",
                    "title": "Ay Kaydırması",
                    "explanation": "=SERİTARİH(Tarih; AySayısı) fonksiyonu gün sayısını koruyarak takvim ayı bazında ilerler veya geriye gider. Örneğin 15 Ocak'a 6 ay eklendiğinde tam 15 Temmuz tarihini verir.",
                    "speechText": "A2 başlangıç tarihi, B2 ise 6 aylık süredir.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine 6 ay sonrasını bulan formülü yazın: =SERİTARİH(A2;B2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SERİTARİH(A2;B2) formülünü yazın.",
                              "C2 hücresine =SERİTARİH(A2;B2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! SERİTARİH (EDATE) ile Ay Bazında Vade Hesaplama görevini başarıyla tamamladınız.",
                              "expectedValue": "=SERİTARİH(A2;B2)"
                    }
          }
],
        quiz: {
          "id": "q11_6",
          "title": "SERİTARİH (EDATE) ile Ay Bazında Vade Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_6_1",
                              "question": "SERİTARİH('15.01.2024'; 3) formülünün sonucu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "15.04.2024"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "18.01.2024"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "15.01.2027"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "30.04.2024"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "SERİTARİH fonksiyona verilen ay sayısı kadar tam takvim ayı ilerletir.",
                              "measuredSkill": "Aylık Vade ve Termin Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec11_l7",
        phaseId: 11,
        unitId: "u11_7",
        title: "SERİAY (EOMONTH) ile Ayın Son Günü ve Dönem Kapanışı",
        shortDesc: "Belirtilen tarihin bulunduğu ayın veya N ay sonraki ayın son gününü otomatik bulma.",
        category: "Tarih ve Saat",
        groupTitle: "Finansal Dönem",
        primaryGoal: "Ay sonu faturalandırma ve muhasebe kapanış tarihlerini dinamik tespit etmek.",
        prerequisites: ["sec11_l6"],
        commonMistakes: ["Şubat ayının 28 mi 29 mu çektiğini elle kontrol etmeye çalışmak"],
        successCriteria: "SERİAY fonksiyonu ile dönem sonlarını otomatik bulabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["SERİAY"],
        initialWorkbook: createTableSheet("s11_7", "SeriAySayfasi", ["Fatura Tarihi", "Kapanış Tipi", "Ayın Son Günü"], [["12.02.2024", "Cari Ay Sonu (0)", ""], ["15.04.2024", "1 Ay Sonraki Ay Sonu (1)", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SERİAY (EOMONTH) ile Ayın Son Günü ve Dönem Kapanışı",
                    "description": "Ay sonu faturalandırma ve muhasebe kapanış tarihlerini dinamik tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_7",
                    "title": "Ay Sonu Otomasyonu",
                    "explanation": "=SERİAY(A2; 0) formülü A2 tarihindeki ayın son gününü verir. 2024 artık yıl olduğu için 12 Şubat 2024 için sonuç doğrudan 29 Şubat 2024 olacaktır.",
                    "speechText": "A2 hücresindeki tarihin cari ay sonunu bulacağız.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_7_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine cari ayın son gününü bulan formülü yazın: =SERİAY(A2;0)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SERİAY(A2;0) formülünü yazın.",
                              "C2 hücresine =SERİAY(A2;0) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! SERİAY (EOMONTH) ile Ayın Son Günü ve Dönem Kapanışı görevini başarıyla tamamladınız.",
                              "expectedValue": "=SERİAY(A2;0)"
                    }
          }
],
        quiz: {
          "id": "q11_7",
          "title": "SERİAY (EOMONTH) ile Ayın Son Günü ve Dönem Kapanışı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_7_1",
                              "question": "SERİAY fonksiyonunda ikinci parametreye 0 yazıldığında ne döner?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Belirtilen tarihin bulunduğu ayın son günü"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yılın ilk günü"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bir sonraki ayın ilk günü"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "0 sayısı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "0 parametresi bulunulan cari ayın son gününü işaret eder.",
                              "measuredSkill": "Dönem ve Ay Sonu Tarih Tespiti"
                    }
          ]
}
      },
      {
        id: "sec11_l8",
        phaseId: 11,
        unitId: "u11_8",
        title: "TAMİŞGÜNÜ (NETWORKDAYS) ile Net Çalışma Günleri",
        shortDesc: "İki tarih arasındaki hafta sonlarını (Cumartesi-Pazar) otomatik çıkararak net iş günü sayısını hesaplama.",
        category: "Tarih ve Saat",
        groupTitle: "İş Günü Analizi",
        primaryGoal: "Projelerde adam-gün sürelerini ve personel çalışma günlerini hesaplamak.",
        prerequisites: ["sec11_l2"],
        commonMistakes: ["İki tarihi birbirinden çıkarıp hafta sonlarını da çalışılmış gibi saymak"],
        successCriteria: "TAMİŞGÜNÜ fonksiyonunu başarıyla uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["TAMİŞGÜNÜ"],
        initialWorkbook: createTableSheet("s11_8", "TamIsGunuSayfasi", ["Proje Başlangıç", "Proje Bitiş", "Net Çalışma Günü"], [["01.07.2024", "31.07.2024", ""], ["01.08.2024", "15.08.2024", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TAMİŞGÜNÜ (NETWORKDAYS) ile Net Çalışma Günleri",
                    "description": "Projelerde adam-gün sürelerini ve personel çalışma günlerini hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_8",
                    "title": "Hafta Sonlarını Dışlama",
                    "explanation": "31 günlük bir ayda 8 veya 9 gün hafta sonu tatilidir. =TAMİŞGÜNÜ(Başlangıç; Bitiş; [Tatiller]) formülü Cumartesi ve Pazarları hesaptan düşerek net çalışma gününü verir.",
                    "speechText": "A2 başlangıç, B2 bitiş tarihidir.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine net iş günü sayısını hesaplayan formülü yazın: =TAMİŞGÜNÜ(A2;B2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=TAMİŞGÜNÜ(A2;B2) formülünü yazın.",
                              "C2 hücresine =TAMİŞGÜNÜ(A2;B2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! TAMİŞGÜNÜ (NETWORKDAYS) ile Net Çalışma Günleri görevini başarıyla tamamladınız.",
                              "expectedValue": "=TAMİŞGÜNÜ(A2;B2)"
                    }
          }
],
        quiz: {
          "id": "q11_8",
          "title": "TAMİŞGÜNÜ (NETWORKDAYS) ile Net Çalışma Günleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_8_1",
                              "question": "TAMİŞGÜNÜ fonksiyonu varsayılan olarak hangi günleri hafta sonu kabul eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Cumartesi ve Pazar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca Pazar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Cuma ve Cumartesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hiçbir günü"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Standart TAMİŞGÜNÜ Cumartesi ve Pazarı hafta sonu sayar.",
                              "measuredSkill": "Çalışma Günü Süre Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec11_l9",
        phaseId: 11,
        unitId: "u11_9",
        title: "TAMİŞGÜNÜ.ULUSL (NETWORKDAYS.INTL) ile Esnek Hafta Tatilleri",
        shortDesc: "Hafta tatili yalnızca Pazar olan veya vardiyalı çalışan işletmelerde özel hafta sonu koduyla iş günü hesaplama.",
        category: "Tarih ve Saat",
        groupTitle: "Esnek Vardiya",
        primaryGoal: "6 gün çalışan işletmelerde veya farklı hafta sonu modellerinde net iş gününü doğru belirlemek.",
        prerequisites: ["sec11_l8"],
        commonMistakes: ["Haftada 6 gün çalışan iş yerinde standart TAMİŞGÜNÜ kullanıp Cumartesiyi tatil saymak"],
        successCriteria: "TAMİŞGÜNÜ.ULUSL fonksiyonunda hafta sonu kodunu doğru kullanabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["TAMİŞGÜNÜ.ULUSL"],
        initialWorkbook: createTableSheet("s11_9", "IsGunuUluslSayfasi", ["Başlangıç", "Bitiş", "Hafta Tatili Kodu", "Net İş Günü"], [["01.07.2024", "31.07.2024", 11, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TAMİŞGÜNÜ.ULUSL (NETWORKDAYS.INTL) ile Esnek Hafta Tatilleri",
                    "description": "6 gün çalışan işletmelerde veya farklı hafta sonu modellerinde net iş gününü doğru belirlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_9",
                    "title": "Özel Hafta Tatili Tanımlama",
                    "explanation": "=TAMİŞGÜNÜ.ULUSL(Başlangıç; Bitiş; HaftaSonu; [Tatiller]) formülünde hafta sonu koduna 11 yazıldığında YALNIZCA PAZAR günleri tatil kabul edilir, Cumartesi iş günü sayılır.",
                    "speechText": "A2 başlangıç, B2 bitiş, C2 ise hafta sonu kodudur (11 = Sadece Pazar).",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t11_9_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine esnek iş günü formülünü yazın: =TAMİŞGÜNÜ.ULUSL(A2;B2;C2)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=TAMİŞGÜNÜ.ULUSL(A2;B2;C2) formülünü yazın.",
                              "D2 hücresine =TAMİŞGÜNÜ.ULUSL(A2;B2;C2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! TAMİŞGÜNÜ.ULUSL (NETWORKDAYS.INTL) ile Esnek Hafta Tatilleri görevini başarıyla tamamladınız.",
                              "expectedValue": "=TAMİŞGÜNÜ.ULUSL(A2;B2;C2)"
                    }
          }
],
        quiz: {
          "id": "q11_9",
          "title": "TAMİŞGÜNÜ.ULUSL (NETWORKDAYS.INTL) ile Esnek Hafta Tatilleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_9_1",
                              "question": "TAMİŞGÜNÜ.ULUSL fonksiyonunda 11 kodu hangi günün tek tatil olduğunu belirtir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca Pazar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca Pazartesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Cuma ve Cumartesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Cumartesi ve Pazar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "11 kodu yalnızca Pazar gününün tatil olduğu 6 günlük çalışma haftasını simgeler.",
                              "measuredSkill": "Özel Hafta Tatili ile İş Günü Analizi"
                    }
          ]
}
      },
      {
        id: "sec11_l10",
        phaseId: 11,
        unitId: "u11_10",
        title: "İŞGÜNÜ (WORKDAY) ve Proje Teslim Tarihi Planlama",
        shortDesc: "Başlangıç tarihi ve gereken iş günü verildiğinde, hafta sonlarını atlayarak teslim tarihini bulma.",
        category: "Tarih ve Saat",
        groupTitle: "Proje Planlama",
        primaryGoal: "15 iş günü sürecek bir yazılım görevinin biteceği takvim tarihini tespit etmek.",
        prerequisites: ["sec11_l8"],
        commonMistakes: ["15 iş gününü takvim gününe çevirirken doğrudan +15 eklemek"],
        successCriteria: "İŞGÜNÜ fonksiyonu ile teslim tarihini doğru hesaplayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["İŞGÜNÜ"],
        initialWorkbook: createTableSheet("s11_10", "ProjeTeslimSayfasi", ["Başlangıç Tarihi", "Gereken İş Günü", "Tahmini Bitiş Tarihi"], [["01.07.2024", 15, ""], ["15.08.2024", 10, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İŞGÜNÜ (WORKDAY) ve Proje Teslim Tarihi Planlama",
                    "description": "15 iş günü sürecek bir yazılım görevinin biteceği takvim tarihini tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_10",
                    "title": "Gelecek İş Günü Tespiti",
                    "explanation": "=İŞGÜNÜ(Başlangıç; GünSayısı; [Tatiller]) formülü takvimde ilerler, hafta sonlarına denk gelen günleri otomatik atlar ve tam 15. iş gününün tarihini üretir.",
                    "speechText": "A2 başlangıç tarihi, B2 gereken iş günüdür.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine tahmini teslim tarihini hesaplayan formülü yazın: =İŞGÜNÜ(A2;B2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=İŞGÜNÜ(A2;B2) formülünü yazın.",
                              "C2 hücresine =İŞGÜNÜ(A2;B2) formülünü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! İŞGÜNÜ (WORKDAY) ve Proje Teslim Tarihi Planlama görevini başarıyla tamamladınız.",
                              "expectedValue": "=İŞGÜNÜ(A2;B2)"
                    }
          }
],
        quiz: {
          "id": "q11_10",
          "title": "İŞGÜNÜ (WORKDAY) ve Proje Teslim Tarihi Planlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_10_1",
                              "question": "İŞGÜNÜ fonksiyonunun ürettiği çıktı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görevin tamamlanacağı takvim tarihi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Gün sayısı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tatil sayısı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ay adı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İŞGÜNÜ fonksiyonu N iş günü sonrasının takvim tarihini döndürür.",
                              "measuredSkill": "Proje Termin ve Bitiş Tarihi Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec11_l11",
        phaseId: 11,
        unitId: "u11_11",
        title: "DATEDIF (ETARİHLİ) ile Yaş, Kıdem ve Tam Süre Farkı",
        shortDesc: "İki tarih arasındaki tam geçen yıl ('Y'), tam ay ('M') veya tam gün ('D') farkını hesaplama.",
        category: "Tarih ve Saat",
        groupTitle: "İK & Kıdem",
        primaryGoal: "Personel kıdem yılı ve yaş hesaplamalarını gün kayması olmadan net bulmak.",
        prerequisites: ["sec11_l2"],
        commonMistakes: ["İki tarihi birbirinden çıkarıp 365'e bölerek artık yıllarda yanlış kıdem hesaplamak"],
        successCriteria: "ETARİHLİ fonksiyonunu doğru birim parametresi ile kullanabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["ETARİHLİ"],
        initialWorkbook: createTableSheet("s11_11", "KidemHesapSayfasi", ["İşe Giriş Tarihi", "Bugünün Tarihi", "Kıdem (Tam Yıl)"], [["15.03.2018", "15.03.2024", ""], ["01.09.2020", "15.03.2024", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DATEDIF (ETARİHLİ) ile Yaş, Kıdem ve Tam Süre Farkı",
                    "description": "Personel kıdem yılı ve yaş hesaplamalarını gün kayması olmadan net bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_11",
                    "title": "Tam Yıl Farkı",
                    "explanation": "=ETARİHLİ(Başlangıç; Bitiş; 'Y') formülü iki tarih arasındaki tam dolan yıl sayısını verir. 'M' yazılırsa ay, 'D' yazılırsa gün sayısını üretir.",
                    "speechText": "A2 işe giriş, B2 güncel tarihtir.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_11_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine tam kıdem yılını hesaplayan formülü yazın: =ETARİHLİ(A2;B2;\"Y\")",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=ETARİHLİ(A2;B2;\"Y\") formülünü yazın.",
                              "C2 hücresine tam olarak =ETARİHLİ(A2;B2;\"Y\") yazın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! DATEDIF (ETARİHLİ) ile Yaş, Kıdem ve Tam Süre Farkı görevini başarıyla tamamladınız.",
                              "expectedValue": "=ETARİHLİ(A2;B2;\"Y\")"
                    }
          }
],
        quiz: {
          "id": "q11_11",
          "title": "DATEDIF (ETARİHLİ) ile Yaş, Kıdem ve Tam Süre Farkı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_11_1",
                              "question": "ETARİHLİ fonksiyonunda tam yıl farkını bulmak için üçüncü parametre ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "\"Y\""
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "\"M\""
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "\"D\""
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "\"YEAR\""
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "\"Y\" birimi (Years) tam dolan yılları hesaplar.",
                              "measuredSkill": "Kıdem ve Yaş Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec11_l12",
        phaseId: 11,
        unitId: "u11_12",
        title: "Kurumsal İK ve Finans Tarih Takip Paneli",
        shortDesc: "BUGÜN, SERİTARİH ve TAMİŞGÜNÜ formüllerini birleştirerek gecikmiş fatura ve vade analiz tablosu oluşturma.",
        category: "Tarih ve Saat",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Fatura vadesi geçmiş alacakları tespit edip gecikme gününü otomatik raporlamak.",
        prerequisites: ["sec11_l1", "sec11_l6", "sec11_l8"],
        commonMistakes: ["Vade tarihini statik elle girip her gün kaç gün geciktiğini manuel hesaplamaya çalışmak"],
        successCriteria: "Dinamik tarih formülleriyle alacak takip tablosu inşa edebilmek.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["BUGÜN", "SERİTARİH", "TAMİŞGÜNÜ"],
        initialWorkbook: createTableSheet("s11_12", "VadeTakipPaneli", ["Müşteri", "Fatura Tarihi", "Vade Tarihi (2 Ay)", "Gecikme Durumu"], [["ABC Lojistik", "15.01.2024", "", ""], ["XYZ Teknoloji", "20.02.2024", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kurumsal İK ve Finans Tarih Takip Paneli",
                    "description": "Fatura vadesi geçmiş alacakları tespit edip gecikme gününü otomatik raporlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts11_12",
                    "title": "Uçtan Uca Vade Yönetimi",
                    "explanation": "Fatura tarihine 2 ay vade eklemek için SERİTARİH(B2; 2) kullanılır. Vade ile bugünün tarihi kıyaslanarak geciken gün sayısı ve risk seviyesi anlık izlenir.",
                    "speechText": "B2 hücresine 2 ay vade ekleyerek C2 hücresini dolduracağız.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t11_12_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine 2 ay sonraki vade tarihini hesaplayan formülü yazın: =SERİTARİH(B2;2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SERİTARİH(B2;2) formülünü yazın.",
                              "C2 hücresine =SERİTARİH(B2;2) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Kurumsal İK ve Finans Tarih Takip Paneli görevini başarıyla tamamladınız.",
                              "expectedValue": "=SERİTARİH(B2;2)"
                    }
          }
],
        quiz: {
          "id": "q11_12",
          "title": "Kurumsal İK ve Finans Tarih Takip Paneli Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_11_12_1",
                              "question": "Vade takip sisteminde bugünün tarihine göre kalan gün sayısı nasıl formüllenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "=VadeTarihi - BUGÜN()"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=BUGÜN() * VadeTarihi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "=TOPLA(VadeTarihi)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "=ŞİMDİ() + 10"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Vade tarihinden BUGÜN() çıkarıldığında kalan pozitif gün veya geçmiş negatif gün bulunur.",
                              "measuredSkill": "Kurumsal Vade ve Risk Modellemesi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 12,
    category: "Arama ve Başvuru",
    title: "12. Arama ve Başvuru Fonksiyonları",
    subtitle: "DÜŞEYARA, YATAYARA, İNDİS, KAÇINCI, ÇAPRAZARA (XLOOKUP) ve Çapraz Eşleşme",
    iconName: "Search",
    description: "Klasik DÜŞEYARA mantığından modern ÇAPRAZARA (XLOOKUP) devrimine, İNDİS-KAÇINCI iki boyutlu matris aramasından DOLAYLI dinamik alan başvurularına kadar tam başvuru uzmanlığı.",
    lessons: [
      {
        id: "sec12_l1",
        phaseId: 12,
        unitId: "u12_1",
        title: "DÜŞEYARA (VLOOKUP) Tam Eşleşme Temelleri",
        shortDesc: "Tablonun ilk sütununda anahtar değeri arayıp ilgili satırdaki sütun değerini çekme (Yanlış / 0 Mantığı).",
        category: "Arama ve Başvuru",
        groupTitle: "DÜŞEYARA Temelleri",
        primaryGoal: "Müşteri veya ürün kodundan ürün adını ve fiyatını hatasız getirebilmek.",
        prerequisites: ["sec11_l12"],
        commonMistakes: ["DÜŞEYARA'nın 4. parametresini (0 / YANLIŞ) boş bırakıp yanlış eşleşme almak"],
        successCriteria: "DÜŞEYARA fonksiyonunu tam eşleşme ile doğru uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["DÜŞEYARA"],
        initialWorkbook: createTableSheet("s12_1", "DuseyaraTemel", ["Ürün Kodu", "Ürün Adı", "Fiyat", "Aranan Kod", "Getirilen Fiyat"], [["U101", "Laptop", 25000, "U102", ""], ["U102", "Monitör", 6500, "", ""], ["U103", "Klavye", 850, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DÜŞEYARA (VLOOKUP) Tam Eşleşme Temelleri",
                    "description": "Müşteri veya ürün kodundan ürün adını ve fiyatını hatasız getirebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_1",
                    "title": "Dikey Arama Mimarisi",
                    "explanation": "=DÜŞEYARA(ArananDeğer; TabloAralığı; SütunİndisSayısı; [AralıkBak]) formülü soldan sağa çalışır. D2'deki 'U102' kodunu A2:C4 tablosunda arayıp 3. sütundaki fiyatı getireceğiz.",
                    "speechText": "Tam eşleşme için 4. parametre mutlaka 0 (veya YANLIŞ) olmalıdır.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_1_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine aranan ürünün fiyatını getiren DÜŞEYARA formülünü yazın: =DÜŞEYARA(D2;A2:C4;3;0)",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=DÜŞEYARA(D2;A2:C4;3;0) formülünü yazın.",
                              "E2 hücresine tam olarak =DÜŞEYARA(D2;A2:C4;3;0) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! DÜŞEYARA (VLOOKUP) Tam Eşleşme Temelleri görevini başarıyla tamamladınız.",
                              "expectedValue": "=DÜŞEYARA(D2;A2:C4;3;0)"
                    }
          }
],
        quiz: {
          "id": "q12_1",
          "title": "DÜŞEYARA (VLOOKUP) Tam Eşleşme Temelleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_1_1",
                              "question": "DÜŞEYARA fonksiyonunda tam eşleşme aramak için son parametre ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "0 veya YANLIŞ (FALSE)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1 veya DOĞRU (TRUE)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş bırakılmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "100"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "0 veya YANLIŞ birebir tam eşleşme sağlar.",
                              "measuredSkill": "DÜŞEYARA Tam Eşleşme Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec12_l2",
        phaseId: 12,
        unitId: "u12_2",
        title: "DÜŞEYARA Yaklaşık Eşleşme ile Prim ve Vergi Dilimleri",
        shortDesc: "Küçükten büyüğe sıralı aralık tablolarında değerin düştüğü dilimi otomatik bulma (Doğru / 1 Mantığı).",
        category: "Arama ve Başvuru",
        groupTitle: "Yaklaşık Eşleşme",
        primaryGoal: "Satış tutarına göre kademeli prim oranını veya gelir vergisi dilimini tespit etmek.",
        prerequisites: ["sec12_l1"],
        commonMistakes: ["Yaklaşık eşleşme kullanırken aralık tablosunu küçükten büyüğe sıralamayı unutmak"],
        successCriteria: "DÜŞEYARA yaklaşık eşleşme mantığını kavramak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["DÜŞEYARA", "Yaklaşık Eşleşme"],
        initialWorkbook: createTableSheet("s12_2", "PrimDilimleri", ["Minimum Satış", "Prim Oranı", "Gerçekleşen Satış", "Hak Edilen Prim"], [[0, "%0", 35000, ""], [10000, "%5", "", ""], [30000, "%10", "", ""], [50000, "%15", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DÜŞEYARA Yaklaşık Eşleşme ile Prim ve Vergi Dilimleri",
                    "description": "Satış tutarına göre kademeli prim oranını veya gelir vergisi dilimini tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_2",
                    "title": "Aralık Eşleşmesi",
                    "explanation": "35.000 TL satış yapan bir personel 30.000 ile 50.000 dilimi arasına düşer. DÜŞEYARA'nın son parametresi 1 (veya DOĞRU) olduğunda en yakın küçük değeri eşleştirip %10 prim oranını getirir.",
                    "speechText": "C2 gerçekleşen satış, A2:B5 ise prim cetvelidir.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t12_2_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine prim oranını getiren formülü yazın: =DÜŞEYARA(C2;A2:B5;2;1)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=DÜŞEYARA(C2;A2:B5;2;1) formülünü yazın.",
                              "D2 hücresine =DÜŞEYARA(C2;A2:B5;2;1) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! DÜŞEYARA Yaklaşık Eşleşme ile Prim ve Vergi Dilimleri görevini başarıyla tamamladınız.",
                              "expectedValue": "=DÜŞEYARA(C2;A2:B5;2;1)"
                    }
          }
],
        quiz: {
          "id": "q12_2",
          "title": "DÜŞEYARA Yaklaşık Eşleşme ile Prim ve Vergi Dilimleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_2_1",
                              "question": "DÜŞEYARA yaklaşık eşleşmenin (1 / DOĞRU) doğru çalışması için tablo ilk sütunu nasıl sıralanmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Küçükten büyüğe (artan sırada)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Büyükten küçüğe"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Karışık olabilir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sıralama gerekmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yaklaşık eşleşmede ilk sütunun artan sırada sıralı olması şarttır.",
                              "measuredSkill": "Kademeli Aralık ve Dilim Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec12_l3",
        phaseId: 12,
        unitId: "u12_3",
        title: "DÜŞEYARA Sınırlamaları ve Sola Arama Problemi",
        shortDesc: "DÜŞEYARA'nın yalnızca aranan sütunun sağındaki verileri getirebilmesi kuralı ve sütun silinmesindeki kırılganlık.",
        category: "Arama ve Başvuru",
        groupTitle: "Fonksiyon Analizi",
        primaryGoal: "DÜŞEYARA'nın yapısal zayıflıklarını ve modern alternatiflere duyulan ihtiyacı anlamak.",
        prerequisites: ["sec12_l1"],
        commonMistakes: ["Aranan değer 2. sütundayken 1. sütundaki bilgiyi DÜŞEYARA ile çekmeye çalışıp hata almak"],
        successCriteria: "Arama fonksiyonlarının yön kısıtlarını tespit edebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["DÜŞEYARA"],
        initialWorkbook: createTableSheet("s12_3", "DuseyaraKisit", ["Personel Adı", "Sicil No", "Departman"], [["Ahmet Yılmaz", "P101", "Finans"], ["Mehmet Kaya", "P102", "Pazarlama"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DÜŞEYARA Sınırlamaları ve Sola Arama Problemi",
                    "description": "DÜŞEYARA'nın yapısal zayıflıklarını ve modern alternatiflere duyulan ihtiyacı anlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_3",
                    "title": "Sola Arama Engeli",
                    "explanation": "Eğer elinizde 'P101' Sicil No varsa ve personelin Adını çekmek istiyorsanız DÜŞEYARA bunu yapamaz; çünkü aranan değer tablonun en sol sütununda olmak zorundadır. Bu kısıt İNDİS-KAÇINCI ve ÇAPRAZARA ile çözülür.",
                    "speechText": "Açıklama hücresine DÜŞEYARA'nın arama yönünü doğrulayacağız.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t12_3_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine DÜŞEYARA'nın yön kuralı olarak 'Soldan Sağa' yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Soldan Sağa' yazın.",
                              "D2 hücresine tam olarak 'Soldan Sağa' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! DÜŞEYARA Sınırlamaları ve Sola Arama Problemi görevini başarıyla tamamladınız.",
                              "expectedValue": "Soldan Sağa"
                    }
          }
],
        quiz: {
          "id": "q12_3",
          "title": "DÜŞEYARA Sınırlamaları ve Sola Arama Problemi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_3_1",
                              "question": "DÜŞEYARA tablosunda aranan anahtar sütun nerede yer almak zorundadır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Seçilen tablonun en solundaki ilk sütunda"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En sağdaki sütunda"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ortadaki sütunda"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Fark etmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "DÜŞEYARA yalnızca seçilen aralığın ilk sütununda arama yapabilir.",
                              "measuredSkill": "Arama Fonksiyonu Kısıt Analizi"
                    }
          ]
}
      },
      {
        id: "sec12_l4",
        phaseId: 12,
        unitId: "u12_4",
        title: "YATAYARA (HLOOKUP) ile Yatay Tablolarda Veri Çekme",
        shortDesc: "Verilerin dikey sütunlar yerine yatay satırlar halinde düzenlendiği tablolarda arama yapma.",
        category: "Arama ve Başvuru",
        groupTitle: "YATAYARA",
        primaryGoal: "Ayların veya çeyreklerin satır başlığı olduğu tablolardan veri çekmek.",
        prerequisites: ["sec12_l1"],
        commonMistakes: ["Satır indis numarası yerine sütun indis numarası düşünmek"],
        successCriteria: "YATAYARA fonksiyonunu doğru satır indisi ile uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["YATAYARA"],
        initialWorkbook: createTableSheet("s12_4", "YatayAraSayfasi", ["Gösterge", "Q1", "Q2", "Q3", "Q4"], [["Satış", 150000, 180000, 210000, 240000], ["Maliyet", 90000, 110000, 125000, 140000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "YATAYARA (HLOOKUP) ile Yatay Tablolarda Veri Çekme",
                    "description": "Ayların veya çeyreklerin satır başlığı olduğu tablolardan veri çekmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_4",
                    "title": "Yatay Satır Taraması",
                    "explanation": "=YATAYARA(ArananDeğer; TabloAralığı; SatırİndisSayısı; [AralıkBak]) formülü tablonun ilk satırında 'Q3' değerini arar ve belirtilen satırdaki değeri çeker.",
                    "speechText": "A1:E3 tablosunda 'Q3' arayıp Maliyet (3. satır) değerini çekeceğiz.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t12_4_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine Q3 maliyetini getiren formülü yazın: =YATAYARA(\"Q3\";A1:E3;3;0)",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=YATAYARA(\"Q3\";A1:E3;3;0) formülünü yazın.",
                              "B5 hücresine =YATAYARA(\"Q3\";A1:E3;3;0) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! YATAYARA (HLOOKUP) ile Yatay Tablolarda Veri Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "=YATAYARA(\"Q3\";A1:E3;3;0)"
                    }
          }
],
        quiz: {
          "id": "q12_4",
          "title": "YATAYARA (HLOOKUP) ile Yatay Tablolarda Veri Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_4_1",
                              "question": "YATAYARA fonksiyonunda 3. parametre neyi ifade eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Verinin getirileceği satır sıra numarası (Satır İndisi)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütun numarası"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata kodu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayfa numarası"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "YATAYARA dikey sütun yerine satır indis numarası kullanır.",
                              "measuredSkill": "Yatay Matris Başvuru Yetkinliği"
                    }
          ]
}
      },
      {
        id: "sec12_l5",
        phaseId: 12,
        unitId: "u12_5",
        title: "KAÇINCI (MATCH) Fonksiyonu ile Pozisyon Tespiti",
        shortDesc: "Bir listenin içinde aranan elemanın kaçıncı sırada olduğunu tam sayı olarak bulma.",
        category: "Arama ve Başvuru",
        groupTitle: "KAÇINCI",
        primaryGoal: "Dinamik aramalarda satır veya sütun numarasını otomatik üretmek.",
        prerequisites: ["sec12_l1"],
        commonMistakes: ["KAÇINCI fonksiyonunun verinin kendisini getireceğini sanmak (sıra numarasını verir)"],
        successCriteria: "KAÇINCI fonksiyonunu tam eşleşme (0) ile uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["KAÇINCI"],
        initialWorkbook: createTableSheet("s12_5", "KacinciSayfasi", ["Şehir Listesi", "Aranan Şehir", "Sıra Numarası (Pozisyon)"], [["İstanbul", "İzmir", ""], ["Ankara", "", ""], ["İzmir", "", ""], ["Bursa", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "KAÇINCI (MATCH) Fonksiyonu ile Pozisyon Tespiti",
                    "description": "Dinamik aramalarda satır veya sütun numarasını otomatik üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_5",
                    "title": "Pozisyon Dedektifi",
                    "explanation": "=KAÇINCI(ArananDeğer; ArananDizi; [EşleşmeTürü]) formülü liste içinde 'İzmir'i arar ve 3. sırada olduğunu tespit eder. Eşleşme türü tam eşleşme için 0 olmalıdır.",
                    "speechText": "B1'deki 'İzmir' değerini A1:A4 listesinde arayacağız.",
                    "targetCell": "C1"
          }
],
        tasks: [
          {
                    "id": "t12_5_1",
                    "stepNumber": 1,
                    "instruction": "C1 hücresine pozisyonu bulan formülü yazın: =KAÇINCI(B1;A1:A4;0)",
                    "targetCell": "C1",
                    "hints": [
                              "C1 hücresini seçin.",
                              "=KAÇINCI(B1;A1:A4;0) formülünü yazın.",
                              "C1 hücresine =KAÇINCI(B1;A1:A4;0) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C1",
                              "successMessage": "Tebrikler! KAÇINCI (MATCH) Fonksiyonu ile Pozisyon Tespiti görevini başarıyla tamamladınız.",
                              "expectedValue": "=KAÇINCI(B1;A1:A4;0)"
                    }
          }
],
        quiz: {
          "id": "q12_5",
          "title": "KAÇINCI (MATCH) Fonksiyonu ile Pozisyon Tespiti Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_5_1",
                              "question": "KAÇINCI('Ankara'; {'İstanbul';'Ankara';'İzmir'}; 0) formülü ne sonuç verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "2"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ankara"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Doğru"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ankara dizinin 2. elemanı olduğu için 2 sonucunu döndürür.",
                              "measuredSkill": "Dinamik Pozisyon ve İndeks Tespiti"
                    }
          ]
}
      },
      {
        id: "sec12_l6",
        phaseId: 12,
        unitId: "u12_6",
        title: "İNDİS (INDEX) Fonksiyonu ile Koordinattan Değer Çekme",
        shortDesc: "Bir veri tablosunda belirtilen satır ve sütun numarasının kesiştiği hücredeki değeri getirme.",
        category: "Arama ve Başvuru",
        groupTitle: "İNDİS",
        primaryGoal: "Koordinat mantığıyla aralıktaki herhangi bir hücreye doğrudan erişmek.",
        prerequisites: ["sec12_l5"],
        commonMistakes: ["Satır ve sütun parametre sırasını ters girmek (Önce Satır, Sonra Sütun)"],
        successCriteria: "İNDİS fonksiyonu ile hücre koordinatını çözebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["İNDİS"],
        initialWorkbook: createTableSheet("s12_6", "IndisSayfasi", ["Ürün", "Bölge", "Satış Tutarı"], [["Laptop", "Marmara", 85000], ["Tablet", "Ege", 42000], ["Telefon", "İç Anadolu", 63000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İNDİS (INDEX) Fonksiyonu ile Koordinattan Değer Çekme",
                    "description": "Koordinat mantığıyla aralıktaki herhangi bir hücreye doğrudan erişmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_6",
                    "title": "Hücre Koordinatçısı",
                    "explanation": "=İNDİS(Dizi; SatırNo; [SütunNo]) formülü verilen aralıkta 2. satır ve 3. sütundaki kesişim hücresini okur. A2:C4 tablosunda 2. satır, 3. sütun 42000 TL'dir.",
                    "speechText": "A2:C4 tablosunda 2. satır 3. sütun değerini çekeceğiz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_6_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine formülü yazın: =İNDİS(A2:C4;2;3)",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=İNDİS(A2:C4;2;3) formülünü yazın.",
                              "E2 hücresine =İNDİS(A2:C4;2;3) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! İNDİS (INDEX) Fonksiyonu ile Koordinattan Değer Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "=İNDİS(A2:C4;2;3)"
                    }
          }
],
        quiz: {
          "id": "q12_6",
          "title": "İNDİS (INDEX) Fonksiyonu ile Koordinattan Değer Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_6_1",
                              "question": "İNDİS(A1:C10; 4; 2) formülü tablonun neresini okur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "4. satır, 2. sütun kesişimini"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "2. satır, 4. sütun kesişimini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "42. hücreyi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca 4. satırı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İNDİS ilk olarak Satır numarasını, ardından Sütun numarasını alır.",
                              "measuredSkill": "İNDİS Koordinat Başvurusu"
                    }
          ]
}
      },
      {
        id: "sec12_l7",
        phaseId: 12,
        unitId: "u12_7",
        title: "İNDİS ve KAÇINCI Birlikteliği (Sola Arama Devrimi)",
        shortDesc: "KAÇINCI ile dinamik bulunan satır numarasını İNDİS'e besleyerek sola doğru ve sütun silinmelerine dayanıklı arama yapma.",
        category: "Arama ve Başvuru",
        groupTitle: "İleri Başvuru",
        primaryGoal: "DÜŞEYARA'nın tüm kısıtlarını ortadan kaldırarak kurumsal raporlarda güvenli arama yapmak.",
        prerequisites: ["sec12_l5", "sec12_l6"],
        commonMistakes: ["İNDİS aralığı ile KAÇINCI aralığının satır başlangıçlarını farklı seçip 1 satır kayma yaşamak"],
        successCriteria: "İNDİS-KAÇINCI formülünü hatasız birleştirebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["İNDİS", "KAÇINCI"],
        initialWorkbook: createTableSheet("s12_7", "IndisKacinciSayfasi", ["Personel Adı", "Sicil Kodu", "Maaş", "Aranan Sicil", "Bulunan Personel"], [["Ahmet Yılmaz", "P201", 35000, "P202", ""], ["Mehmet Kaya", "P202", 42000, "", ""], ["Ayşe Demir", "P203", 48000, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İNDİS ve KAÇINCI Birlikteliği (Sola Arama Devrimi)",
                    "description": "DÜŞEYARA'nın tüm kısıtlarını ortadan kaldırarak kurumsal raporlarda güvenli arama yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_7",
                    "title": "Efsanevi Formül Kombinasyonu",
                    "explanation": "Sicil Kodu (B sütunu) tablonun ortasındadır; personelin Adı ise soldadır (A sütunu). =İNDİS(A2:A4; KAÇINCI(D2; B2:B4; 0)) formülü önce P202'nin 2. satırda olduğunu bulur, ardından A sütunundan Mehmet Kaya'yı çeker.",
                    "speechText": "D2'deki aranan sicil kodunun personel adını getireceğiz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_7_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine İNDİS ve KAÇINCI formülünü yazın: =İNDİS(A2:A4;KAÇINCI(D2;B2:B4;0))",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=İNDİS(A2:A4;KAÇINCI(D2;B2:B4;0)) formülünü yazın.",
                              "E2 hücresine formülü tam olarak girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! İNDİS ve KAÇINCI Birlikteliği (Sola Arama Devrimi) görevini başarıyla tamamladınız.",
                              "expectedValue": "=İNDİS(A2:A4;KAÇINCI(D2;B2:B4;0))"
                    }
          }
],
        quiz: {
          "id": "q12_7",
          "title": "İNDİS ve KAÇINCI Birlikteliği (Sola Arama Devrimi) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_7_1",
                              "question": "İNDİS ve KAÇINCI kombinasyonunun DÜŞEYARA'ya göre en büyük üstünlüğü nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Aranan sütunun solundaki verileri de getirebilmesi ve araya sütun eklendiğinde bozulmaması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Daha yavaş çalışması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sadece sayıları bulabilmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca tek hücrede çalışması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sola arama ve dinamik sütun dayanıklılığı İNDİS-KAÇINCI'nın temel avantajıdır.",
                              "measuredSkill": "İki Boyutlu ve Sola Doğru Arama Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec12_l8",
        phaseId: 12,
        unitId: "u12_8",
        title: "İki Boyutlu İNDİS ve KAÇINCI (Satır ve Sütun Matrisi)",
        shortDesc: "Hem satır başlığını hem sütun başlığını iki ayrı KAÇINCI ile dinamik bularak matris kesişimini çekme.",
        category: "Arama ve Başvuru",
        groupTitle: "İleri Başvuru",
        primaryGoal: "Ürün ve Ay bazında iki boyutlu çapraz tablolardan dinamik değer çekmek.",
        prerequisites: ["sec12_l7"],
        commonMistakes: ["Satır KAÇINCI'sı ile sütun KAÇINCI'sının yerlerini karıştırmak"],
        successCriteria: "İki boyutlu matris aramasını başarıyla inşa edebilmek.",
        level: "İleri",
        durationMinutes: 13,
        functionsUsed: ["İNDİS", "KAÇINCI"],
        initialWorkbook: createTableSheet("s12_8", "MatrisAramaSayfasi", ["Ürün", "Ocak", "Şubat", "Mart", "Aranan Ürün", "Aranan Ay", "Kesişim Değeri"], [["Laptop", 100, 120, 140, "Tablet", "Şubat", ""], ["Tablet", 80, 95, 110, "", "", ""], ["Telefon", 200, 230, 260, "", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İki Boyutlu İNDİS ve KAÇINCI (Satır ve Sütun Matrisi)",
                    "description": "Ürün ve Ay bazında iki boyutlu çapraz tablolardan dinamik değer çekmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_8",
                    "title": "Çift Boyutlu Kesişim",
                    "explanation": "=İNDİS(B2:D4; KAÇINCI(E2; A2:A4; 0); KAÇINCI(F2; B1:D1; 0)) formülü satırda 'Tablet'i (2. satır), sütunda 'Şubat'ı (2. sütun) bularak kesişimdeki 95 değerini otomatik getirir.",
                    "speechText": "B2:D4 matrisinden Tablet ve Şubat kesişimini çekeceğiz.",
                    "targetCell": "G2"
          }
],
        tasks: [
          {
                    "id": "t12_8_1",
                    "stepNumber": 1,
                    "instruction": "G2 hücresine iki boyutlu İNDİS-KAÇINCI formülünü yazın: =İNDİS(B2:D4;KAÇINCI(E2;A2:A4;0);KAÇINCI(F2;B1:D1;0))",
                    "targetCell": "G2",
                    "hints": [
                              "G2 hücresini seçin.",
                              "=İNDİS(B2:D4;KAÇINCI(E2;A2:A4;0);KAÇINCI(F2;B1:D1;0)) formülünü yazın.",
                              "G2 hücresine iki boyutlu formülü girin."
                    ],
                    "validation": {
                              "targetCell": "G2",
                              "successMessage": "Tebrikler! İki Boyutlu İNDİS ve KAÇINCI (Satır ve Sütun Matrisi) görevini başarıyla tamamladınız.",
                              "expectedValue": "=İNDİS(B2:D4;KAÇINCI(E2;A2:A4;0);KAÇINCI(F2;B1:D1;0))"
                    }
          }
],
        quiz: {
          "id": "q12_8",
          "title": "İki Boyutlu İNDİS ve KAÇINCI (Satır ve Sütun Matrisi) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_8_1",
                              "question": "İki boyutlu İNDİS fonksiyonunda kaç adet KAÇINCI kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "2 adet (biri satır için, diğeri sütun için)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1 adet"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "4 adet"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kullanılmaz"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Biri satır koordinatını, diğeri sütun koordinatını bulmak için iki KAÇINCI kullanılır.",
                              "measuredSkill": "İki Boyutlu Çapraz Matris Araması"
                    }
          ]
}
      },
      {
        id: "sec12_l9",
        phaseId: 12,
        unitId: "u12_9",
        title: "ÇAPRAZARA (XLOOKUP) Temel Kullanımı",
        shortDesc: "Modern Excel'in en güçlü arama fonksiyonu: Soldan sağa, sağdan sola bağımsız arama ve varsayılan tam eşleşme.",
        category: "Arama ve Başvuru",
        groupTitle: "ÇAPRAZARA Devrimi",
        primaryGoal: "DÜŞEYARA ve İNDİS-KAÇINCI yerine tek ve sade bir fonksiyonla veri getirmek.",
        prerequisites: ["sec12_l1"],
        commonMistakes: ["Sütun indis sayısı saymaya çalışmak (ÇAPRAZARA'da yalnızca aranan sütun ve döndürülen sütun seçilir)"],
        successCriteria: "ÇAPRAZARA fonksiyonunu temel düzeyde uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["ÇAPRAZARA"],
        initialWorkbook: createTableSheet("s12_9", "CaprazaraTemel", ["TC Kimlik", "Müşteri Adı", "Kredi Skoru", "Sorgulanan TC", "Bulunan Skor"], [["11111", "Ahmet Yılmaz", 1450, "22222", ""], ["22222", "Mehmet Kaya", 1680, "", ""], ["33333", "Ayşe Demir", 1820, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇAPRAZARA (XLOOKUP) Temel Kullanımı",
                    "description": "DÜŞEYARA ve İNDİS-KAÇINCI yerine tek ve sade bir fonksiyonla veri getirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_9",
                    "title": "Yeni Nesil Arama Standartı",
                    "explanation": "=ÇAPRAZARA(ArananDeğer; AramaAralığı; DöndürülenAralık) şeklinde çalışır. Sütun sayma derdi yoktur, sola da sağa da arar ve varsayılan olarak zaten tam eşleşmedir (0 yazmaya gerek yoktur).",
                    "speechText": "D2'deki TC'yi A2:A4 aralığında arayıp C2:C4'teki Kredi Skorunu çekeceğiz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_9_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine ÇAPRAZARA formülünü yazın: =ÇAPRAZARA(D2;A2:A4;C2:C4)",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=ÇAPRAZARA(D2;A2:A4;C2:C4) formülünü yazın.",
                              "E2 hücresine =ÇAPRAZARA(D2;A2:A4;C2:C4) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! ÇAPRAZARA (XLOOKUP) Temel Kullanımı görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇAPRAZARA(D2;A2:A4;C2:C4)"
                    }
          }
],
        quiz: {
          "id": "q12_9",
          "title": "ÇAPRAZARA (XLOOKUP) Temel Kullanımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_9_1",
                              "question": "ÇAPRAZARA (XLOOKUP) fonksiyonunun DÜŞEYARA'ya göre en pratik kolaylığı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütun indis sayısı sayma zorunluluğunun olmaması ve varsayılan tam eşleşme yapması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formülün daha uzun olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sadece eski Excel sürümlerinde çalışması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca sayı araması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Doğrudan hedef sütunu seçtiğiniz için araya sütun eklense bile formül asla bozulmaz.",
                              "measuredSkill": "Modern ÇAPRAZARA Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec12_l10",
        phaseId: 12,
        unitId: "u12_10",
        title: "ÇAPRAZARA Bulunamadı Modu ve Hata Önleme",
        shortDesc: "Aranan değer tabloda yoksa #YOK hatası vermek yerine yerleşik [if_not_found] parametresiyle özel mesaj üretme.",
        category: "Arama ve Başvuru",
        groupTitle: "ÇAPRAZARA İleri",
        primaryGoal: "EĞERHATA fonksiyonuna ihtiyaç duymadan temiz ve profesyonel arama çıktıları üretmek.",
        prerequisites: ["sec12_l9"],
        commonMistakes: ["ÇAPRAZARA'yı EĞERHATA ile sarıp gereksiz yere formülü uzatmak"],
        successCriteria: "ÇAPRAZARA 4. parametresini etkin kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["ÇAPRAZARA"],
        initialWorkbook: createTableSheet("s12_10", "CaprazaraHataSayfasi", ["Ürün Barkodu", "Ürün Adı", "Stok", "Aranan Barkod", "Sonuç"], [["B101", "Kahve Makinesi", 15, "B999", ""], ["B102", "Çay Makinesi", 24, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇAPRAZARA Bulunamadı Modu ve Hata Önleme",
                    "description": "EĞERHATA fonksiyonuna ihtiyaç duymadan temiz ve profesyonel arama çıktıları üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_10",
                    "title": "Dahili Hata Koruması",
                    "explanation": "=ÇAPRAZARA(D2; A2:A3; B2:B3; 'Kayıt Bulunamadı') formülü B999 barkodu listede olmadığında ekrana doğrudan 'Kayıt Bulunamadı' yazar.",
                    "speechText": "D2'deki aranan barkodu bulamadığında 'Kayıt Yok' yazan formülü kuracağız.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_10_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine formülü yazın: =ÇAPRAZARA(D2;A2:A3;B2:B3;\"Kayıt Yok\")",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=ÇAPRAZARA(D2;A2:A3;B2:B3;\"Kayıt Yok\") formülünü yazın.",
                              "E2 hücresine formülü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! ÇAPRAZARA Bulunamadı Modu ve Hata Önleme görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇAPRAZARA(D2;A2:A3;B2:B3;\"Kayıt Yok\")"
                    }
          }
],
        quiz: {
          "id": "q12_10",
          "title": "ÇAPRAZARA Bulunamadı Modu ve Hata Önleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_10_1",
                              "question": "ÇAPRAZARA'da 4. parametre olan [bulunamadı] ne işe yarar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Değer bulunamadığında #YOK hatası yerine gösterilecek özel değeri belirler"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm tabloyu siler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Aramayı durdurur"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreyi kırmızı yapar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "4. argüman EĞERHATA kullanmaya gerek kalmadan özel hata mesajı üretir.",
                              "measuredSkill": "ÇAPRAZARA Yerleşik Hata Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec12_l11",
        phaseId: 12,
        unitId: "u12_11",
        title: "ÇAPRAZARA ile Sondan Başa Arama ve Son Hareketi Bulma",
        shortDesc: "Arama modu parametresi (-1) ile listenin sonundan başlayıp en güncel hareketi yakalama.",
        category: "Arama ve Başvuru",
        groupTitle: "ÇAPRAZARA İleri",
        primaryGoal: "Müşterinin veya personelin sistemdeki son işlem tarihini ve son bakiyesini tespit etmek.",
        prerequisites: ["sec12_l10"],
        commonMistakes: ["DÜŞEYARA ile listenin en güncel son kaydını bulmaya çalışıp hep ilk kaydı almak"],
        successCriteria: "ÇAPRAZARA'da sondan başa arama modunu uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["ÇAPRAZARA"],
        initialWorkbook: createTableSheet("s12_11", "SonHareketSayfasi", ["Tarih", "Müşteri", "İşlem Tutarı", "Sorgulanan Müşteri", "Son İşlem Tutarı"], [["01.06.2024", "Ali Vural", 500, "Ali Vural", ""], ["15.06.2024", "Ayşe Can", 1200, "", ""], ["28.06.2024", "Ali Vural", 3400, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ÇAPRAZARA ile Sondan Başa Arama ve Son Hareketi Bulma",
                    "description": "Müşterinin veya personelin sistemdeki son işlem tarihini ve son bakiyesini tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_11",
                    "title": "Ters Yönde Arama",
                    "explanation": "Klasik arama fonksiyonları hep yukarıdan aşağıya tarar ve ilk eşleşmeyi döner. =ÇAPRAZARA(D2; B2:B4; C2:C4; ''; 0; -1) formülündeki -1 arama modu tablonun en altından başlar ve Ali Vural'ın 28 Haziran'daki son 3400 TL'lik işlemini getirir.",
                    "speechText": "D2'deki müşterinin son işlem tutarını çekeceğiz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t12_11_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine sondan başa arayan formülü yazın: =ÇAPRAZARA(D2;B2:B4;C2:C4;\"\";0;-1)",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=ÇAPRAZARA(D2;B2:B4;C2:C4;\"\";0;-1) formülünü yazın.",
                              "E2 hücresine formülü girin."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! ÇAPRAZARA ile Sondan Başa Arama ve Son Hareketi Bulma görevini başarıyla tamamladınız.",
                              "expectedValue": "=ÇAPRAZARA(D2;B2:B4;C2:C4;\"\";0;-1)"
                    }
          }
],
        quiz: {
          "id": "q12_11",
          "title": "ÇAPRAZARA ile Sondan Başa Arama ve Son Hareketi Bulma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_11_1",
                              "question": "ÇAPRAZARA'da 6. parametre olan arama moduna -1 girildiğinde ne gerçekleşir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Arama listenin son öğesinden başlayarak geriye doğru yapılır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Değerler negatifle çarpılır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sadece ilk satır aranır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "-1 arama modu son kayıttan ilk kayda doğru ters tarama yapar.",
                              "measuredSkill": "Zaman Serisinde Son Hareket Tespiti"
                    }
          ]
}
      },
      {
        id: "sec12_l12",
        phaseId: 12,
        unitId: "u12_12",
        title: "DOLAYLI (INDIRECT) ile Dinamik Sayfa ve Hücre Başvuruları",
        shortDesc: "Hücrede yazılı olan metin dizesini (örneğin 'Ocak!B5') canlı bir Excel hücre başvurusuna dönüştürme.",
        category: "Arama ve Başvuru",
        groupTitle: "İleri Dinamik Başvuru",
        primaryGoal: "Açılır listeden seçilen ayın sayfasına formülle dinamik bağlanıp toplamları çekmek.",
        prerequisites: ["sec12_l7"],
        commonMistakes: ["DOLAYLI fonksiyonuna verilen metin tırnaklarını ve ampersand (&) birleştirmelerini yanlış kurgulamak"],
        successCriteria: "DOLAYLI fonksiyonu ile dinamik başvuru oluşturabilmek.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["DOLAYLI"],
        initialWorkbook: createTableSheet("s12_12", "DolayliSayfasi", ["Hedef Hücre Adı", "Başvuru Tipi", "Çekilen Değer"], [["B1", "Statik Metin", ""], ["A1", "Statik Metin", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DOLAYLI (INDIRECT) ile Dinamik Sayfa ve Hücre Başvuruları",
                    "description": "Açılır listeden seçilen ayın sayfasına formülle dinamik bağlanıp toplamları çekmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts12_12",
                    "title": "Metinden Canlı Başvuruya",
                    "explanation": "A2 hücresinde metin olarak 'B1' yazıyorsa, =DOLAYLI(A2) formülü doğrudan B1 hücresinin içindeki gerçek değeri okur.",
                    "speechText": "A2 hücresindeki metni canlı başvuruya dönüştüreceğiz.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t12_12_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine DOLAYLI formülünü yazın: =DOLAYLI(A2)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=DOLAYLI(A2) formülünü yazın.",
                              "C2 hücresine =DOLAYLI(A2) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! DOLAYLI (INDIRECT) ile Dinamik Sayfa ve Hücre Başvuruları görevini başarıyla tamamladınız.",
                              "expectedValue": "=DOLAYLI(A2)"
                    }
          }
],
        quiz: {
          "id": "q12_12",
          "title": "DOLAYLI (INDIRECT) ile Dinamik Sayfa ve Hücre Başvuruları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_12_12_1",
                              "question": "DOLAYLI (INDIRECT) fonksiyonunun temel işlevi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Metin dizesi olarak belirtilen bir başvuruyu geçerli bir hücre referansına dönüştürmek"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafik çizmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayfa adını değiştirmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Metin olarak saklanan hücre adreslerini canlı formül referansına çevirir.",
                              "measuredSkill": "Metin Tabanlı Dinamik Başvuru Üretimi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 13,
    category: "Dinamik Diziler",
    title: "13. Dinamik Diziler ve İleri Formüller",
    subtitle: "BENZERSİZ, SIRALA, FİLTRE, SIRALAUYARLA, SEQUENCE ve Dökülme (#SPILL!)",
    iconName: "Layers",
    description: "Modern Excel'in dinamik dizi mimarisi, tek hücreden çoklu hücreye dökülme (spill) mekanizması, dinamik tekilleştirme, canlı filtreleme ve matris formülleri.",
    lessons: [
      {
        id: "sec13_l1",
        phaseId: 13,
        unitId: "u13_1",
        title: "Dinamik Dizi Motoru ve #DÖKÜLME! (#SPILL!) Hatası",
        shortDesc: "Tek bir formülün birden fazla komşu hücreye taşması ve taşma aralığında engel olduğunda ortaya çıkan #DÖKÜLME! mantığı.",
        category: "Dinamik Diziler",
        groupTitle: "Dizi Motoru",
        primaryGoal: "Dinamik dizilerin dökülme aralığını yönetebilmek ve engelleri temizlemeyi öğrenmek.",
        prerequisites: ["sec12_l12"],
        commonMistakes: ["Dökülecek alanda önceden yazılmış metin veya biçim bırakıp #DÖKÜLME! hatası almak"],
        successCriteria: "Dinamik dizi dökülme mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dinamik Diziler"],
        initialWorkbook: createTableSheet("s13_1", "DokulmeGiris", ["Kaynak Sayılar", "Dökülme Formülü Alanı", "Açıklama"], [[10, "", "Formül tek hücreye yazılır"], [20, "", "Alt hücrelere kendiliğinden dökülür"], [30, "", "Aralıkta engel olmamalıdır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Dizi Motoru ve #DÖKÜLME! (#SPILL!) Hatası",
                    "description": "Dinamik dizilerin dökülme aralığını yönetebilmek ve engelleri temizlemeyi öğrenmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_1",
                    "title": "Dökülme Mekanizması",
                    "explanation": "Modern Excel'de =A2:A4 formülünü B2 hücresine yazdığınızda formül B2, B3 ve B4 hücrelerine kendiliğinden yayılır (dökülür). Mavi ince bir çerçeve ile sarılır.",
                    "speechText": "B2 hücresine A2:A4 aralığını döken formülü kuracağız.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t13_1_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine formülü yazın: =A2:A4",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=A2:A4 formülünü yazın.",
                              "B2 hücresine =A2:A4 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! Dinamik Dizi Motoru ve #DÖKÜLME! (#SPILL!) Hatası görevini başarıyla tamamladınız.",
                              "expectedValue": "=A2:A4"
                    }
          }
],
        quiz: {
          "id": "q13_1",
          "title": "Dinamik Dizi Motoru ve #DÖKÜLME! (#SPILL!) Hatası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_1_1",
                              "question": "#DÖKÜLME! (#SPILL!) hatası ne zaman ortaya çıkar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formülün yayılacağı hücre aralığında başka bir veri, formül veya engel bulunduğunda"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "İnternet kesildiğinde"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel lisansı bittiğinde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formül adı yanlış yazıldığında"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dökülme aralığında herhangi bir hücre doluysa Excel formülü dökemez ve #DÖKÜLME! uyarısı verir.",
                              "measuredSkill": "Dinamik Dizi Dökülme ve Alan Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec13_l2",
        phaseId: 13,
        unitId: "u13_2",
        title: "Dökülme Aralığı Operatörü (#) ile Dinamik Formül Kurma",
        shortDesc: "Bir dinamik dizinin ilk hücresinin ardına '#' işareti koyarak tüm dökülen aralığı otomatik referans alma.",
        category: "Dinamik Diziler",
        groupTitle: "Dizi Operatörü",
        primaryGoal: "Diziye yeni kayıt eklense bile formülleri güncellemek zorunda kalmamak.",
        prerequisites: ["sec13_l1"],
        commonMistakes: ["Aralığı B2:B10 diye statik seçip dökülme operatörü (#) kullanmayı unutmak"],
        successCriteria: "Dökülme aralığı (#) operatörünü başarıyla kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["# Operatörü", "TOPLA"],
        initialWorkbook: createTableSheet("s13_2", "SpillOperatorSayfasi", ["Orijinal Dizi", "Dökülen Dizi", "Toplam"], [[100, 100, ""], [200, 200, ""], [300, 300, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dökülme Aralığı Operatörü (#) ile Dinamik Formül Kurma",
                    "description": "Diziye yeni kayıt eklense bile formülleri güncellemek zorunda kalmamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_2",
                    "title": "Sihirli Kare (#) İmzası",
                    "explanation": "B2 hücresinde dökülen bir dizi varsa, =TOPLA(B2#) formülü dizinin boyutu 3 elemandan 50 elemana çıksa bile tüm aralığı dinamik olarak kapsar.",
                    "speechText": "B2'de başlayan dökülme dizisinin toplamını alacağız.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t13_2_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine formülü yazın: =TOPLA(B2#)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=TOPLA(B2#) formülünü yazın.",
                              "C2 hücresine =TOPLA(B2#) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Dökülme Aralığı Operatörü (#) ile Dinamik Formül Kurma görevini başarıyla tamamladınız.",
                              "expectedValue": "=TOPLA(B2#)"
                    }
          }
],
        quiz: {
          "id": "q13_2",
          "title": "Dökülme Aralığı Operatörü (#) ile Dinamik Formül Kurma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_2_1",
                              "question": "Excel formüllerinde B2# ifadesi neyi temsil eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "B2 hücresinden başlayan tüm dökülme aralığını"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "B2 hücresindeki sayının karesini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "B2 hücresinin gizlendiğini"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "B2'deki yazının rengini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "# sembolü dökülme aralığı operatörüdür ve dökülen tüm dizi bloğunu referans alır.",
                              "measuredSkill": "Dinamik Dökülme Referansı Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec13_l3",
        phaseId: 13,
        unitId: "u13_3",
        title: "BENZERSİZ (UNIQUE) ile Tekilleştirilmiş Liste Çıkarma",
        shortDesc: "Tekrarlayan yüzlerce satırdan oluşan bir veri kümesinden tek tıkla yinelenmeyen benzersiz listeyi çıkarma.",
        category: "Dinamik Diziler",
        groupTitle: "BENZERSİZ",
        primaryGoal: "Müşteri veya şehir listesindeki tekrarları tek bir formülle ayıklamak.",
        prerequisites: ["sec13_l1"],
        commonMistakes: ["Veri sekmesinden 'Yinelenenleri Kaldır' butonuna basıp ana veriyi kalıcı olarak silmek"],
        successCriteria: "BENZERSİZ fonksiyonunu dinamik olarak uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["BENZERSİZ"],
        initialWorkbook: createTableSheet("s13_3", "BenzersizSayfasi", ["Ham Şehir Listesi", "Benzersiz Şehirler", "Açıklama"], [["İstanbul", "", "Tekil liste"], ["Ankara", "", "otomatik dökülür"], ["İstanbul", "", ""], ["İzmir", "", ""], ["Ankara", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BENZERSİZ (UNIQUE) ile Tekilleştirilmiş Liste Çıkarma",
                    "description": "Müşteri veya şehir listesindeki tekrarları tek bir formülle ayıklamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_3",
                    "title": "Dinamik Tekilleştirme",
                    "explanation": "=BENZERSİZ(A2:A6) formülü A2:A6 aralığındaki tekrarlayan şehirleri eler ve İstanbul, Ankara, İzmir listesini aşağıya doğru otomatik döker. Ana veriye yeni şehir eklendiğinde liste kendiliğinden güncellenir.",
                    "speechText": "B2 hücresine benzersiz şehirleri döken formülü yazın.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t13_3_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine formülü yazın: =BENZERSİZ(A2:A6)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=BENZERSİZ(A2:A6) formülünü yazın.",
                              "B2 hücresine =BENZERSİZ(A2:A6) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BENZERSİZ (UNIQUE) ile Tekilleştirilmiş Liste Çıkarma görevini başarıyla tamamladınız.",
                              "expectedValue": "=BENZERSİZ(A2:A6)"
                    }
          }
],
        quiz: {
          "id": "q13_3",
          "title": "BENZERSİZ (UNIQUE) ile Tekilleştirilmiş Liste Çıkarma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_3_1",
                              "question": "BENZERSİZ fonksiyonunun geleneksel 'Yinelenenleri Kaldır' aracına en büyük avantajı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Orijinal ham veriyi bozmaması ve dinamik olarak güncellenmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosyayı küçültmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca sayıları ayıklaması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tüm verileri silmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formül tabanlı tekilleştirme ham veriyi korur ve yeni satır eklendiğinde anında güncellenir.",
                              "measuredSkill": "Dinamik Liste Tekilleştirme"
                    }
          ]
}
      },
      {
        id: "sec13_l4",
        phaseId: 13,
        unitId: "u13_4",
        title: "BENZERSİZ ile Yalnızca Bir Kez Geçen (Tekil) Kayıtları Bulma",
        shortDesc: "BENZERSİZ fonksiyonunun 3. parametresini (DOĞRU / 1) kullanarak listede yalnızca 1 defa yer alan özel kayıtları süzme.",
        category: "Dinamik Diziler",
        groupTitle: "BENZERSİZ İleri",
        primaryGoal: "Hileli veya tekil işlem yapmış müşterileri ve tekrarsız faturaları bulmak.",
        prerequisites: ["sec13_l3"],
        commonMistakes: ["2. parametre ile 3. parametrenin yerini karıştırmak"],
        successCriteria: "Yalnızca bir kez geçen kayıtları filtreleyebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["BENZERSİZ"],
        initialWorkbook: createTableSheet("s13_4", "TekilKayitSayfasi", ["Müşteri İşlemleri", "Yalnızca 1 Kez Gelenler", "Açıklama"], [["Ali", "", "Tekil işlem"], ["Veli", "", ""], ["Ali", "", ""], ["Can", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BENZERSİZ ile Yalnızca Bir Kez Geçen (Tekil) Kayıtları Bulma",
                    "description": "Hileli veya tekil işlem yapmış müşterileri ve tekrarsız faturaları bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_4",
                    "title": "Yalnızca Bir Kez Geçenler",
                    "explanation": "=BENZERSİZ(A2:A5; YANLIŞ; DOĞRU) formülündeki 3. parametre (DOĞRU) listede 2 veya daha fazla geçen 'Ali'yi tamamen eler ve yalnızca 1 kez işlem yapmış olan 'Veli' ve 'Can' isimlerini döker.",
                    "speechText": "B2 hücresine yalnızca 1 kez geçen müşterileri bulan formülü yazın.",
                    "targetCell": "B2"
          }
],
        tasks: [
          {
                    "id": "t13_4_1",
                    "stepNumber": 1,
                    "instruction": "B2 hücresine formülü yazın: =BENZERSİZ(A2:A5;YANLIŞ;DOĞRU)",
                    "targetCell": "B2",
                    "hints": [
                              "B2 hücresini seçin.",
                              "=BENZERSİZ(A2:A5;YANLIŞ;DOĞRU) formülünü yazın.",
                              "B2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B2",
                              "successMessage": "Tebrikler! BENZERSİZ ile Yalnızca Bir Kez Geçen (Tekil) Kayıtları Bulma görevini başarıyla tamamladınız.",
                              "expectedValue": "=BENZERSİZ(A2:A5;YANLIŞ;DOĞRU)"
                    }
          }
],
        quiz: {
          "id": "q13_4",
          "title": "BENZERSİZ ile Yalnızca Bir Kez Geçen (Tekil) Kayıtları Bulma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_4_1",
                              "question": "BENZERSİZ fonksiyonunda [tam_olarak_bir_kez] parametresi DOĞRU yapıldığında ne döner?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Listede tekrarlanmayan, yalnızca 1 defa görünen elemanlar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm liste"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca en çok tekrarlananlar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boş hücreler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "3. parametre tam olarak 1 kez geçen saf tekil değerleri filtreler.",
                              "measuredSkill": "Tekil İşlem ve İstisna Tespiti"
                    }
          ]
}
      },
      {
        id: "sec13_l5",
        phaseId: 13,
        unitId: "u13_5",
        title: "SIRALA (SORT) Fonksiyonu ile Otomatik Sıralama",
        shortDesc: "Veri tablosuna dokunmadan formülle alfabetik (A-Z) veya sayısal (büyükten küçüğe) canlı sıralı kopya üretme.",
        category: "Dinamik Diziler",
        groupTitle: "SIRALA",
        primaryGoal: "Veri değiştikçe anında kendini yeniden sıralayan canlı liderlik ve satış tabloları oluşturmak.",
        prerequisites: ["sec13_l1"],
        commonMistakes: ["SIRALA fonksiyonunun sıralama sırası parametresini (-1 azalan, 1 artan) yanlış kullanmak"],
        successCriteria: "SIRALA fonksiyonunu başarıyla uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["SIRALA"],
        initialWorkbook: createTableSheet("s13_5", "SiralaSayfasi", ["Ham Satışçı", "Ciro", "Sıralı Satışçı", "Sıralı Ciro"], [["Zeynep", 45000, "", ""], ["Ahmet", 89000, "", ""], ["Burak", 62000, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SIRALA (SORT) Fonksiyonu ile Otomatik Sıralama",
                    "description": "Veri değiştikçe anında kendini yeniden sıralayan canlı liderlik ve satış tabloları oluşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_5",
                    "title": "Otomatik Dinamik Sıralama",
                    "explanation": "=SIRALA(A2:B4; 2; -1) formülü A2:B4 tablosunu 2. sütuna (Ciro) göre büyükten küçüğe (-1 = Azalan sırada) sıralar ve dinamik olarak döker.",
                    "speechText": "A2:B4 tablosunu ciroya göre azalan sırada sıralayacağız.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t13_5_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine SIRALA formülünü yazın: =SIRALA(A2:B4;2;-1)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SIRALA(A2:B4;2;-1) formülünü yazın.",
                              "C2 hücresine =SIRALA(A2:B4;2;-1) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! SIRALA (SORT) Fonksiyonu ile Otomatik Sıralama görevini başarıyla tamamladınız.",
                              "expectedValue": "=SIRALA(A2:B4;2;-1)"
                    }
          }
],
        quiz: {
          "id": "q13_5",
          "title": "SIRALA (SORT) Fonksiyonu ile Otomatik Sıralama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_5_1",
                              "question": "SIRALA fonksiyonunda sıralama düzeni için -1 ne anlama gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Büyükten küçüğe (Azalan / Descending) sıralama"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Küçükten büyüğe (Artan)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sıralamayı iptal et"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata ver"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "-1 değeri büyükten küçüğe azalan sıralama düzenini belirler.",
                              "measuredSkill": "Dinamik Çoklu Kolon Sıralaması"
                    }
          ]
}
      },
      {
        id: "sec13_l6",
        phaseId: 13,
        unitId: "u13_6",
        title: "SIRALAUYARLA (SORTBY) ile Harici Sütuna Göre Sıralama",
        shortDesc: "Ekranda gösterilmeyen başka bir sütundaki puana veya tarihe göre listeyi dinamik dizide sıralama.",
        category: "Dinamik Diziler",
        groupTitle: "SIRALAUYARLA",
        primaryGoal: "Yalnızca isimleri gösterirken arka plandaki puana göre sıralı sonuç üretmek.",
        prerequisites: ["sec13_l5"],
        commonMistakes: ["SIRALA fonksiyonuyla tüm tabloyu seçmeye zorunlu olduğunu düşünmek"],
        successCriteria: "SIRALAUYARLA fonksiyonunu başarıyla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["SIRALAUYARLA"],
        initialWorkbook: createTableSheet("s13_6", "SiralaUyarlaSayfasi", ["Öğrenci Adı", "Sınav Notu", "Sıralı Öğrenci Adı"], [["Ahmet", 65, ""], ["Zeynep", 98, ""], ["Can", 82, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SIRALAUYARLA (SORTBY) ile Harici Sütuna Göre Sıralama",
                    "description": "Yalnızca isimleri gösterirken arka plandaki puana göre sıralı sonuç üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_6",
                    "title": "Bağımsız Sütunla Sıralama",
                    "explanation": "=SIRALAUYARLA(A2:A4; B2:B4; -1) formülü yalnızca öğrenci isimlerini (A2:A4) listeler ancak bu isimleri B2:B4'teki sınav notlarına göre büyükten küçüğe sıralar. Böylece not sütununu göstermeden sıralı isim listesi elde edilir.",
                    "speechText": "C2 hücresine nota göre sıralı isimleri döken formülü yazın.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t13_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine formülü yazın: =SIRALAUYARLA(A2:A4;B2:B4;-1)",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SIRALAUYARLA(A2:A4;B2:B4;-1) formülünü yazın.",
                              "C2 hücresine =SIRALAUYARLA(A2:A4;B2:B4;-1) yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! SIRALAUYARLA (SORTBY) ile Harici Sütuna Göre Sıralama görevini başarıyla tamamladınız.",
                              "expectedValue": "=SIRALAUYARLA(A2:A4;B2:B4;-1)"
                    }
          }
],
        quiz: {
          "id": "q13_6",
          "title": "SIRALAUYARLA (SORTBY) ile Harici Sütuna Göre Sıralama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_6_1",
                              "question": "SIRALAUYARLA fonksiyonunun SIRALA'dan temel farkı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sonuç aralığında bulunmayan harici bir sütuna göre sıralama yapabilmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca sayıları sıralaması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sıralama yapamaması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Daha yavaş olması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "SIRALAUYARLA sıralanacak dizi ile kriter dizisini bağımsız seçmenize izin verir.",
                              "measuredSkill": "Harici Ölçüte Göre Sıralama"
                    }
          ]
}
      },
      {
        id: "sec13_l7",
        phaseId: 13,
        unitId: "u13_7",
        title: "FİLTRE (FILTER) Fonksiyonu ile Tek Kriterli Veri Çıkarma",
        shortDesc: "Ana veri tablosundan belirli bir koşulu sağlayan tüm satırları formülle dinamik olarak başka bir alana çekme.",
        category: "Dinamik Diziler",
        groupTitle: "FİLTRE",
        primaryGoal: "Departman veya bölge bazlı rapor tablolarını formülle canlı üretmek.",
        prerequisites: ["sec13_l1"],
        commonMistakes: ["Klasik kopyala yapıştır filtresi yapıp ana veri güncellendiğinde raporun eski kalmasına yol açmak"],
        successCriteria: "FİLTRE fonksiyonunu doğru koşul dizisiyle uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["FİLTRE"],
        initialWorkbook: createTableSheet("s13_7", "FiltreTekSayfasi", ["Personel", "Departman", "Maaş", "Filtrelenen Personel", "Departman", "Maaş"], [["Ahmet", "IT", 45000, "", "", ""], ["Mehmet", "Satış", 35000, "", "", ""], ["Can", "IT", 48000, "", "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "FİLTRE (FILTER) Fonksiyonu ile Tek Kriterli Veri Çıkarma",
                    "description": "Departman veya bölge bazlı rapor tablolarını formülle canlı üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_7",
                    "title": "Canlı Veri Süzgeci",
                    "explanation": "=FİLTRE(A2:C4; B2:B4='IT'; 'Kayıt Yok') formülü B sütununda 'IT' yazan tüm satırları otomatik süzer ve D2'den itibaren 2 satırlık tabloyu döker. Yeni bir IT personeli eklendiğinde filtre tablosu anında genişler.",
                    "speechText": "D2 hücresine Departmanı 'IT' olanları filtreleyen formülü kuracağız.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t13_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine FİLTRE formülünü yazın: =FİLTRE(A2:C4;B2:B4=\"IT\";\"Kayıt Yok\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=FİLTRE(A2:C4;B2:B4=\"IT\";\"Kayıt Yok\") formülünü yazın.",
                              "D2 hücresine formülü tam olarak girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! FİLTRE (FILTER) Fonksiyonu ile Tek Kriterli Veri Çıkarma görevini başarıyla tamamladınız.",
                              "expectedValue": "=FİLTRE(A2:C4;B2:B4=\"IT\";\"Kayıt Yok\")"
                    }
          }
],
        quiz: {
          "id": "q13_7",
          "title": "FİLTRE (FILTER) Fonksiyonu ile Tek Kriterli Veri Çıkarma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_7_1",
                              "question": "FİLTRE fonksiyonunun 2. parametresine ne yazılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Mantıksal koşul dizisi (Örn: B2:B4=\"IT\")"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata mesajı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tablo adı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sütun sayısı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "2. parametre DOĞRU/YANLIŞ üreten kriter mantık dizisidir.",
                              "measuredSkill": "Dinamik Dizi Filtreleme Sözdizimi"
                    }
          ]
}
      },
      {
        id: "sec13_l8",
        phaseId: 13,
        unitId: "u13_8",
        title: "FİLTRE ile Çoklu Kriter: VE (*) ile VEYA (+) Mantığı",
        shortDesc: "Birden fazla koşulu aynı anda sağlayan (Çarpım *) veya koşullardan herhangi birini sağlayan (Toplama +) kayıtları süzme.",
        category: "Dinamik Diziler",
        groupTitle: "FİLTRE İleri",
        primaryGoal: "Örneğin 'Bölge=Marmara' VE 'Satış > 50.000' koşullu karmaşık kurumsal raporları formülleştirmek.",
        prerequisites: ["sec13_l7"],
        commonMistakes: ["FİLTRE içinde VE() veya VEYA() fonksiyonlarını kullanmaya çalışmak (Dinamik dizilerde * ve + kullanılır)"],
        successCriteria: "FİLTRE fonksiyonunda boolean mantığı (* ve +) uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["FİLTRE", "Boolean Mantık"],
        initialWorkbook: createTableSheet("s13_8", "FiltreCokluSayfasi", ["Satışçı", "Bölge", "Ciro", "Marmara & Ciro>40bin Sonuçları"], [["Ali", "Marmara", 50000, ""], ["Veli", "Ege", 60000, ""], ["Can", "Marmara", 30000, ""], ["Deniz", "Marmara", 45000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "FİLTRE ile Çoklu Kriter: VE (*) ile VEYA (+) Mantığı",
                    "description": "Örneğin 'Bölge=Marmara' VE 'Satış > 50.000' koşullu karmaşık kurumsal raporları formülleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_8",
                    "title": "Boolean Matrisiyle Çoklu Filtre",
                    "explanation": "Excel dizilerinde VE işlemi için koşullar parantez içinde çarpılır: (B2:B5='Marmara') * (C2:C5>40000). Bu işlem her iki koşul da doğru olduğunda 1 üretir ve satırı filtreye dahil eder.",
                    "speechText": "D2 hücresine Marmara bölgesinde olup cirosu 40.000'den büyük olanları filtreleyen formülü yazın.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t13_8_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formülü yazın: =FİLTRE(A2:C5;(B2:B5=\"Marmara\")*(C2:C5>40000);\"Sonuç Yok\")",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=FİLTRE(A2:C5;(B2:B5=\"Marmara\")*(C2:C5>40000);\"Sonuç Yok\") formülünü yazın.",
                              "D2 hücresine formülü eksiksiz girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! FİLTRE ile Çoklu Kriter: VE (*) ile VEYA (+) Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "=FİLTRE(A2:C5;(B2:B5=\"Marmara\")*(C2:C5>40000);\"Sonuç Yok\")"
                    }
          }
],
        quiz: {
          "id": "q13_8",
          "title": "FİLTRE ile Çoklu Kriter: VE (*) ile VEYA (+) Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_8_1",
                              "question": "Dinamik dizi formüllerinde VE mantığı kurmak için hangi matematiksel simge kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çarpma işareti (*)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Toplama işareti (+)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bölme işareti (/)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Üs alma (^)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Mantıksal çarpım (*) iki koşulun da DOĞRU olmasını zorunlu kılar (VE mantığı).",
                              "measuredSkill": "Çoklu Kriterli Dizi Filtreleme"
                    }
          ]
}
      },
      {
        id: "sec13_l9",
        phaseId: 13,
        unitId: "u13_9",
        title: "SIRALI (SEQUENCE) ile Dinamik Sayı Serileri ve Takvim Izgarası",
        shortDesc: "Belirtilen satır, sütun, başlangıç ve artış adımıyla tek bir hücreden otomatik matris üretme.",
        category: "Dinamik Diziler",
        groupTitle: "SIRALI",
        primaryGoal: "Otomatik sıra numaraları, fatura serileri ve aylık takvim şablonları inşa etmek.",
        prerequisites: ["sec13_l1"],
        commonMistakes: ["Sıra numarası vermek için aşağıya doğru fareyle çekip her yeni satırda manuel işlem yapmak"],
        successCriteria: "SIRALI fonksiyonunu satır ve adım parametreleriyle kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["SIRALI"],
        initialWorkbook: createTableSheet("s13_9", "SiraliSayfasi", ["Dinamik Sıra No", "Adım Açıklaması"], [["", "10'dan başlayıp 5'er artan 4 satır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "SIRALI (SEQUENCE) ile Dinamik Sayı Serileri ve Takvim Izgarası",
                    "description": "Otomatik sıra numaraları, fatura serileri ve aylık takvim şablonları inşa etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_9",
                    "title": "Otomatik Dizi İnşaatı",
                    "explanation": "=SIRALI(SatırSayısı; [SütunSayısı]; [Başlangıç]; [Adım]) formülü çalışır. =SIRALI(4; 1; 10; 5) formülü 4 satırlık 1 sütunluk diziye 10, 15, 20, 25 sayılarını otomatik döker.",
                    "speechText": "A2 hücresine 4 satırlık, 10'dan başlayıp 5'er artan seriyi döken formülü yazın.",
                    "targetCell": "A2"
          }
],
        tasks: [
          {
                    "id": "t13_9_1",
                    "stepNumber": 1,
                    "instruction": "A2 hücresine formülü yazın: =SIRALI(4;1;10;5)",
                    "targetCell": "A2",
                    "hints": [
                              "A2 hücresini seçin.",
                              "=SIRALI(4;1;10;5) formülünü yazın.",
                              "A2 hücresine =SIRALI(4;1;10;5) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "A2",
                              "successMessage": "Tebrikler! SIRALI (SEQUENCE) ile Dinamik Sayı Serileri ve Takvim Izgarası görevini başarıyla tamamladınız.",
                              "expectedValue": "=SIRALI(4;1;10;5)"
                    }
          }
],
        quiz: {
          "id": "q13_9",
          "title": "SIRALI (SEQUENCE) ile Dinamik Sayı Serileri ve Takvim Izgarası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_9_1",
                              "question": "=SIRALI(5) formülü ne üretir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1'den 5'e kadar alt alta 5 satırlık sayı dizisi (1, 2, 3, 4, 5)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sadece 5 sayısı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "5 sütun"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Varsayılan olarak 1'den başlar ve 1'er artarak 5 satır üretir.",
                              "measuredSkill": "Dinamik Sayı Serisi ve Matris Üretimi"
                    }
          ]
}
      },
      {
        id: "sec13_l10",
        phaseId: 13,
        unitId: "u13_10",
        title: "RASTGELEDİZİ (RANDARRAY) ile Simülasyon Verisi Üretimi",
        shortDesc: "Finansal stres testleri ve Monte Carlo simülasyonları için belirlenen aralıkta dinamik rastgele sayı matrisi oluşturma.",
        category: "Dinamik Diziler",
        groupTitle: "Simülasyon",
        primaryGoal: "Gerçek veriyi ifşa etmeden test veri seti üretmek ve olasılık modellemeleri kurmak.",
        prerequisites: ["sec13_l9"],
        commonMistakes: ["RASTGELEARADA fonksiyonunu yüzlerce hücreye tek tek kopyalayıp dökülme avantajını kaçırmak"],
        successCriteria: "RASTGELEDİZİ fonksiyonunu minimum, maksimum ve tamsayı parametreleriyle kullanabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["RASTGELEDİZİ"],
        initialWorkbook: createTableSheet("s13_10", "SimulasyonSayfasi", ["Satış Senaryoları (100 ile 500 Arası 3 Satır 1 Sütun)"], [[""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "RASTGELEDİZİ (RANDARRAY) ile Simülasyon Verisi Üretimi",
                    "description": "Gerçek veriyi ifşa etmeden test veri seti üretmek ve olasılık modellemeleri kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_10",
                    "title": "Matris Simülasyonu",
                    "explanation": "=RASTGELEDİZİ(Satır; Sütun; Min; Max; TamsayıMı) formülü belirlenen sınırlarda tek hamlede rastgele veri üretir. =RASTGELEDİZİ(3; 1; 100; 500; DOĞRU) formülü 3 satırlık tamsayı dizisi döker.",
                    "speechText": "A2 hücresine 3 satır 1 sütunluk, 100 ile 500 arası tamsayılar üreten formülü yazın.",
                    "targetCell": "A2"
          }
],
        tasks: [
          {
                    "id": "t13_10_1",
                    "stepNumber": 1,
                    "instruction": "A2 hücresine formülü yazın: =RASTGELEDİZİ(3;1;100;500;DOĞRU)",
                    "targetCell": "A2",
                    "hints": [
                              "A2 hücresini seçin.",
                              "=RASTGELEDİZİ(3;1;100;500;DOĞRU) formülünü yazın.",
                              "A2 hücresine formülü girip onaylayın."
                    ],
                    "validation": {
                              "targetCell": "A2",
                              "successMessage": "Tebrikler! RASTGELEDİZİ (RANDARRAY) ile Simülasyon Verisi Üretimi görevini başarıyla tamamladınız.",
                              "expectedValue": "=RASTGELEDİZİ(3;1;100;500;DOĞRU)"
                    }
          }
],
        quiz: {
          "id": "q13_10",
          "title": "RASTGELEDİZİ (RANDARRAY) ile Simülasyon Verisi Üretimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_10_1",
                              "question": "RASTGELEDİZİ fonksiyonunun son parametresi DOĞRU yapıldığında sayılar nasıl üretilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tamsayı olarak (ondalıksız)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ondalıklı olarak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Negatif olarak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin olarak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Son parametrede DOĞRU (TRUE) tamsayı üretilmesini sağlar.",
                              "measuredSkill": "Rastgele Matris ve Simülasyon Üretimi"
                    }
          ]
}
      },
      {
        id: "sec13_l11",
        phaseId: 13,
        unitId: "u13_11",
        title: "Dinamik Dizilerle Canlı Yönetici Özet Tablosu İnşası",
        shortDesc: "BENZERSİZ, SIRALA ve ÇOKETOPLA fonksiyonlarını dökülme operatörü (#) ile birleştirerek kendini güncelleyen tam dinamik özet rapor oluşturma.",
        category: "Dinamik Diziler",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Veri tabanından tek bir formülle sıralı benzersiz kategori listesi çıkarıp toplam ciro tablosunu otomatize etmek.",
        prerequisites: ["sec13_l3", "sec13_l5", "sec13_l2"],
        commonMistakes: ["Kategorileri elle yazıp yeni kategori geldiğinde raporun eksik kalmasına neden olmak"],
        successCriteria: "Uçtan uca dinamik dizi mimarisi ile canlı rapor inşa edebilmek.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["BENZERSİZ", "SIRALA", "# Operatörü"],
        initialWorkbook: createTableSheet("s13_11", "YoneticiOzetSayfasi", ["Ham Kategori", "Satış", "Sıralı Benzersiz Kategoriler"], [["Elektronik", 5000, ""], ["Gıda", 2000, ""], ["Elektronik", 7000, ""], ["Kozmetik", 3000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Dizilerle Canlı Yönetici Özet Tablosu İnşası",
                    "description": "Veri tabanından tek bir formülle sıralı benzersiz kategori listesi çıkarıp toplam ciro tablosunu otomatize etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts13_11",
                    "title": "İç İçe Dinamik Dizi Gücü",
                    "explanation": "=SIRALA(BENZERSİZ(A2:A5)) formülü tek hamlede kategorileri ayıklar ve alfabetik olarak sıralayıp aşağıya döker.",
                    "speechText": "C2 hücresine kategorileri tekilleştirip alfabetik sıralayan iç içe formülü yazın.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t13_11_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine formülü yazın: =SIRALA(BENZERSİZ(A2:A5))",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=SIRALA(BENZERSİZ(A2:A5)) formülünü yazın.",
                              "C2 hücresine =SIRALA(BENZERSİZ(A2:A5)) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Dinamik Dizilerle Canlı Yönetici Özet Tablosu İnşası görevini başarıyla tamamladınız.",
                              "expectedValue": "=SIRALA(BENZERSİZ(A2:A5))"
                    }
          }
],
        quiz: {
          "id": "q13_11",
          "title": "Dinamik Dizilerle Canlı Yönetici Özet Tablosu İnşası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_13_11_1",
                              "question": "=SIRALA(BENZERSİZ(A2:A100)) formülü ne işe yarar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tekrarlayanları ayıklayıp kalan benzersiz listeyi alfabetik sırada döker"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm listeyi siler"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca ilk değeri alır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Rastgele karıştırır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İç içe kullanım önce tekilleştirir ardından kusursuz sıralar.",
                              "measuredSkill": "Bileşik Dinamik Dizi Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 14,
    category: "Excel Tabloları",
    title: "14. Excel Tabloları ve Yapılandırılmış Veriler",
    subtitle: "Ctrl+T, Yapılandırılmış Başvurular ([@Alan]), Hesaplanmış Sütunlar ve Dilimleyiciler",
    iconName: "Table",
    description: "Klasik hücre aralıklarını akıllı resmi Excel Tablosuna (ListObject) dönüştürme, sütun başlığı tabanlı [@Miktar]*[@Fiyat] yapılandırılmış formülleri, dinamik aralık genişlemesi ve dilimleyici filtreleri.",
    lessons: [
      {
        id: "sec14_l1",
        phaseId: 14,
        unitId: "u14_1",
        title: "Ctrl+T ile Resmi Excel Tablosu (ListObject) Oluşturma",
        shortDesc: "Sıradan hücre aralıklarını akıllı, biçimli ve dinamik genişleyen resmi Excel Tablosuna dönüştürme.",
        category: "Excel Tabloları",
        groupTitle: "Tablo Temelleri",
        primaryGoal: "Hücre aralıklarının getirdiği manuel riskleri yok edip resmi tablo standardına geçmek.",
        prerequisites: ["sec13_l11"],
        commonMistakes: ["Hücreleri yalnızca renklendirip resmi Excel tablosu oluşturduğunu sanmak"],
        successCriteria: "Resmi tablo oluşturma adımlarını ve kısayolunu (Ctrl+T) kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Tablo Oluşturma", "Ctrl+T"],
        initialWorkbook: createTableSheet("s14_1", "TabloGirisSayfasi", ["Personel ID", "Ad Soyad", "Maaş"], [[101, "Ali Yılmaz", 45000], [102, "Ayşe Kaya", 52000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Ctrl+T ile Resmi Excel Tablosu (ListObject) Oluşturma",
                    "description": "Hücre aralıklarının getirdiği manuel riskleri yok edip resmi tablo standardına geçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_1",
                    "title": "Akıllı Tabloya Geçiş",
                    "explanation": "Ctrl+L veya Ctrl+T kısayolu seçili aralığı 'Tablo' nesnesine çevirir. Başlıklar otomatik filtre okları kazanır, alternatif satır renklendirmesi uygulanır ve tablo özel bir ad (Tablo1) alır.",
                    "speechText": "Açıklama hücresine resmi tablo kısayolunu doğrulayacağız.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t14_1_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine tablo oluşturma kısayolunu 'Ctrl+T' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Ctrl+T' yazın.",
                              "D2 hücresine tam olarak 'Ctrl+T' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Ctrl+T ile Resmi Excel Tablosu (ListObject) Oluşturma görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+T"
                    }
          }
],
        quiz: {
          "id": "q14_1",
          "title": "Ctrl+T ile Resmi Excel Tablosu (ListObject) Oluşturma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_1_1",
                              "question": "Excel'de seçili bir veri aralığını resmi Tabloya dönüştüren evrensel klavye kısayolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + T (veya Ctrl + L)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + S"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Alt + F4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + P"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+T (Table) anında Tablo Oluştur sihirbazını açar.",
                              "measuredSkill": "Resmi Excel Tablosu Başlatma"
                    }
          ]
}
      },
      {
        id: "sec14_l2",
        phaseId: 14,
        unitId: "u14_2",
        title: "Tablo Adlandırma ve Tasarım Sekmesi Standartları",
        shortDesc: "Tablolara 'SatisTablosu' veya 'MusteriListesi' gibi anlamlı isimler verme kuralı.",
        category: "Excel Tabloları",
        groupTitle: "Tablo Mimarisi",
        primaryGoal: "Formüllerde 'Tablo1' yerine anlaşılır kurumsal isimler kullanarak okunabilirliği artırmak.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Tablo adında boşluk bırakmak (Excel tablo adlarında boşluk kabul etmez, alt çizgi kullanılmalıdır)"],
        successCriteria: "Tablo adlandırma kurallarını doğru uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Tablo Tasarımı"],
        initialWorkbook: createTableSheet("s14_2", "TabloAdlandirma", ["Tablo Özelliği", "Kural", "Örnek"], [["İsimlendirme", "Boşluksuz veya alt çizgili", "Satis_2024"], ["Tasarım", "Tablo Tasarımı sekmesi", "Özet Rapor"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tablo Adlandırma ve Tasarım Sekmesi Standartları",
                    "description": "Formüllerde 'Tablo1' yerine anlaşılır kurumsal isimler kullanarak okunabilirliği artırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_2",
                    "title": "Kurumsal İsimlendirme",
                    "explanation": "Tablo seçildiğinde şeritte açılan 'Tablo Tasarımı' sekmesinin en solundaki 'Tablo Adı' kutusundan isim değiştirilir. Anlamlı isimler formül yazarken büyük kolaylık sağlar.",
                    "speechText": "Tablo seçildiğinde şeritte açılan 'Tablo Tasarımı' sekmesinin en solundaki 'Tablo Adı' kutusundan isim değiştirilir. Anlamlı isimler formül yazarken büyük kolaylık sağlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t14_2_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine geçerli örnek tablo adı olarak 'Satis_Verileri' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Satis_Verileri' yazın.",
                              "C4 hücresine tam olarak 'Satis_Verileri' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Tablo Adlandırma ve Tasarım Sekmesi Standartları görevini başarıyla tamamladınız.",
                              "expectedValue": "Satis_Verileri"
                    }
          }
],
        quiz: {
          "id": "q14_2",
          "title": "Tablo Adlandırma ve Tasarım Sekmesi Standartları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_2_1",
                              "question": "Excel tablo adlandırma kurallarına göre aşağıdakilerden hangisi GEÇERLİ bir tablo adıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Musteri_Tablosu"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Musteri Tablosu (boşluklu)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "1Musteri (sayı ile başlayan)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Musteri-Tablosu (tireli)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Tablo adları harfle başlamalı, boşluk içermemeli ve alt çizgi ile birleştirilmelidir.",
                              "measuredSkill": "Kurumsal Nesne Adlandırma Standartları"
                    }
          ]
}
      },
      {
        id: "sec14_l3",
        phaseId: 14,
        unitId: "u14_3",
        title: "Yapılandırılmış Başvuru (Structured Reference) ve [@Alan] Sözdizimi",
        shortDesc: "Hücre adresi (A2*B2) yerine kolon başlıklarını ([@[Miktar]]*[@[BirimFiyat]]) kullanan akıllı formül dili.",
        category: "Excel Tabloları",
        groupTitle: "Yapılandırılmış Başvuru",
        primaryGoal: "Satır numarası bağımlılığını yok edip insan tarafından okunabilir formüller yazmak.",
        prerequisites: ["sec14_l2"],
        commonMistakes: ["[@] simgesinin 'aynı satırdaki değer' anlamına geldiğini fark etmemek"],
        successCriteria: "Yapılandırılmış başvuru formüllerini başarıyla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Yapılandırılmış Başvuru"],
        initialWorkbook: createTableSheet("s14_3", "YapisalBasvuruSayfasi", ["Ürün", "Miktar", "Fiyat", "Tutar"], [["Defter", 5, 40, ""], ["Kalem", 10, 15, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yapılandırılmış Başvuru (Structured Reference) ve [@Alan] Sözdizimi",
                    "description": "Satır numarası bağımlılığını yok edip insan tarafından okunabilir formüller yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_3",
                    "title": "İnsan Diliyle Formül",
                    "explanation": "Resmi tablolarda formül yazarken hücreye tıkladığınızda Excel otomatik olarak [@Miktar]*[@Fiyat] yazar. '@' işareti 'formülün bulunduğu aynı satırdaki değer' demektir.",
                    "speechText": "Resmi tablolarda formül yazarken hücreye tıkladığınızda Excel otomatik olarak [@Miktar]*[@Fiyat] yazar. '@' işareti 'formülün bulunduğu aynı satırdaki değer' demektir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t14_3_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine yapılandırılmış başvuru ile tutarı hesaplayan formülü yazın: =[@Miktar]*[@Fiyat]",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=[@Miktar]*[@Fiyat] formülünü yazın.",
                              "D2 hücresine =[@Miktar]*[@Fiyat] formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Yapılandırılmış Başvuru (Structured Reference) ve [@Alan] Sözdizimi görevini başarıyla tamamladınız.",
                              "expectedValue": "=[@Miktar]*[@Fiyat]"
                    }
          }
],
        quiz: {
          "id": "q14_3",
          "title": "Yapılandırılmış Başvuru (Structured Reference) ve [@Alan] Sözdizimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_3_1",
                              "question": "Yapılandırılmış başvurularda [@Miktar] ifadesindeki '@' sembolü ne anlama gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formülün bulunduğu aktif satırdaki Miktar değeri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm sütunun toplamı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "E-posta adresi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata kodu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "'@' operatörü kesişim operatörüdür ve o satırdaki hücreyi temsil eder.",
                              "measuredSkill": "Yapılandırılmış Formül Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec14_l4",
        phaseId: 14,
        unitId: "u14_4",
        title: "Otomatik Hesaplanmış Sütunlar (Calculated Columns) Mantığı",
        shortDesc: "Tablonun tek bir satırına formül girildiğinde formülün tüm sütuna kendiliğinden aşağıya kadar uygulanması.",
        category: "Excel Tabloları",
        groupTitle: "Otomasyon",
        primaryGoal: "Formülü tutup aşağıya çekme (fill handle) ameleliğini tamamen ortadan kaldırmak.",
        prerequisites: ["sec14_l3"],
        commonMistakes: ["Otomatik dolan formülü görüp yanlışlıkla çift tıklayarak bozmaya çalışmak"],
        successCriteria: "Hesaplanmış sütun davranışını ve avantajını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hesaplanmış Sütun"],
        initialWorkbook: createTableSheet("s14_4", "HesaplanmisSutunSayfasi", ["Maaş", "Prim Oranı", "Net Prim"], [[30000, 0.1, ""], [45000, 0.15, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Hesaplanmış Sütunlar (Calculated Columns) Mantığı",
                    "description": "Formülü tutup aşağıya çekme (fill handle) ameleliğini tamamen ortadan kaldırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_4",
                    "title": "Tek Hamlede Tüm Sütun",
                    "explanation": "Resmi bir tabloda C2 hücresine formül yazıp Enter'a bastığınız an, Excel sütundaki 10.000 satır olsa bile hepsine aynı formülü uygular. Sütundaki formül bütünlüğü garantiye alınır.",
                    "speechText": "Resmi bir tabloda C2 hücresine formül yazıp Enter'a bastığınız an, Excel sütundaki 10.000 satır olsa bile hepsine aynı formülü uygular. Sütundaki formül bütünlüğü garantiye alınır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t14_4_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine primi hesaplayan formülü girin: =[@Maaş]*[@[Prim Oranı]]",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "=[@Maaş]*[@[Prim Oranı]] formülünü yazın.",
                              "C2 hücresine formülü girip Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Otomatik Hesaplanmış Sütunlar (Calculated Columns) Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "=[@Maaş]*[@[Prim Oranı]]"
                    }
          }
],
        quiz: {
          "id": "q14_4",
          "title": "Otomatik Hesaplanmış Sütunlar (Calculated Columns) Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_4_1",
                              "question": "Resmi tablolarda hesaplanmış sütunların en büyük avantajı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formülün tüm satırlara otomatik yayılması ve yeni satır eklendiğinde kendiliğinden devam etmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca tek bir hücrede çalışması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücreleri renklendirmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayıları metne çevirmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formül bütünlüğü korunur ve yeni eklenen her satıra otomatik kopyalanır.",
                              "measuredSkill": "Sütun Formül Bütünlüğü Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec14_l5",
        phaseId: 14,
        unitId: "u14_5",
        title: "Toplam Satırı (Total Row) ve Otomatik Fonksiyonlar",
        shortDesc: "Tablo Tasarımı sekmesinden tek tıkla açılan Toplam Satırı ve ALTTOPLAM (SUBTOTAL) entegrasyonu.",
        category: "Excel Tabloları",
        groupTitle: "Toplam Satırı",
        primaryGoal: "Tablonun altına manuel formül yazmadan toplam, ortalama veya adet bilgilerini açılır listeden yönetmek.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Tablonun altına manuel =TOPLA() yazıp yeni satır eklendiğinde formülün ezilmesine yol açmak"],
        successCriteria: "Toplam satırını ve filtre uyumlu fonksiyonlarını kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Toplam Satırı", "ALTTOPLAM"],
        initialWorkbook: createTableSheet("s14_5", "ToplamSatiriSayfasi", ["Departman", "Personel Sayısı", "Toplam Bütçe"], [["Yazılım", 12, 650000], ["Pazarlama", 8, 380000], ["Toplam", 20, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Toplam Satırı (Total Row) ve Otomatik Fonksiyonlar",
                    "description": "Tablonun altına manuel formül yazmadan toplam, ortalama veya adet bilgilerini açılır listeden yönetmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_5",
                    "title": "Akıllı Dip Toplam",
                    "explanation": "Toplam Satırı arka planda =ALTTOPLAM(109; [Toplam Bütçe]) fonksiyonunu kullanır. Bu sayede tablo filtrelendiğinde sadece ekranda görünen satırların toplamını verir.",
                    "speechText": "Toplam Satırı arka planda =ALTTOPLAM(109; [Toplam Bütçe]) fonksiyonunu kullanır. Bu sayede tablo filtrelendiğinde sadece ekranda görünen satırların toplamını verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t14_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine sütun toplamını alan formülü yazın: =ALTTOPLAM(109;C2:C3)",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=ALTTOPLAM(109;C2:C3) formülünü yazın.",
                              "C4 hücresine =ALTTOPLAM(109;C2:C3) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Toplam Satırı (Total Row) ve Otomatik Fonksiyonlar görevini başarıyla tamamladınız.",
                              "expectedValue": "=ALTTOPLAM(109;C2:C3)"
                    }
          }
],
        quiz: {
          "id": "q14_5",
          "title": "Toplam Satırı (Total Row) ve Otomatik Fonksiyonlar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_5_1",
                              "question": "Resmi tablolardaki Toplam Satırı (Total Row) filtrelenen satırlara nasıl tepki verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Gizlenen satırları otomatik dışlar, yalnızca filtrelenip ekranda kalanları toplar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Her zaman tüm tabloyu toplar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sıfır yazar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Toplam satırı ALTTOPLAM kullandığı için gizlenen verileri toplama katmaz.",
                              "measuredSkill": "Filtre Duyarlı Dip Toplam Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec14_l6",
        phaseId: 14,
        unitId: "u14_6",
        title: "Dinamik Genişleme: Yeni Veri Girişinde Formül ve Aralık Otomasyonu",
        shortDesc: "Tablonun en son satırının hemen altına yeni kayıt yazıldığında tablonun otomatik olarak o kaydı içine alması.",
        category: "Excel Tabloları",
        groupTitle: "Dinamik Genişleme",
        primaryGoal: "Formül, grafik ve pivot tabloların aralık güncellemesi yapmadan otomatik büyümesini sağlamak.",
        prerequisites: ["sec14_l4"],
        commonMistakes: ["Yeni veri girince formül aralığını manuel olarak A1:C50'den A1:C51'e güncellemek"],
        successCriteria: "Tablo dinamik genişleme prensiplerini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dinamik Genişleme"],
        initialWorkbook: createTableSheet("s14_6", "DinamikGenisleme", ["Adım", "İşlem", "Sonuç"], [["1. Tablo Sonu", "Tablonun altına veri yaz", "Tabloya dahil olur"], ["2. Formül", "Hesaplanmış formül", "Otomatik üretilir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dinamik Genişleme: Yeni Veri Girişinde Formül ve Aralık Otomasyonu",
                    "description": "Formül, grafik ve pivot tabloların aralık güncellemesi yapmadan otomatik büyümesini sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_6",
                    "title": "Kendiliğinden Büyüyen Veri",
                    "explanation": "Resmi tablonun hemen altındaki hücreye yeni veri yazıp Tab tuşuna bastığınızda mavi çerçeve genişler ve o satır resmi tablonun parçası olur. Tüm biçimlendirmeler ve formüller anında yeni satıra uygulanır.",
                    "speechText": "Resmi tablonun hemen altındaki hücreye yeni veri yazıp Tab tuşuna bastığınızda mavi çerçeve genişler ve o satır resmi tablonun parçası olur. Tüm biçimlendirmeler ve formüller anında yeni satıra uygulanır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t14_6_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine genişleme onay ifadesi olarak 'Dinamik Genişleme Aktif' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Dinamik Genişleme Aktif' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Dinamik Genişleme: Yeni Veri Girişinde Formül ve Aralık Otomasyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "Dinamik Genişleme Aktif"
                    }
          }
],
        quiz: {
          "id": "q14_6",
          "title": "Dinamik Genişleme: Yeni Veri Girişinde Formül ve Aralık Otomasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_6_1",
                              "question": "Resmi bir tablonun en son hücresindeyken klavyeden Tab tuşuna basıldığında ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tabloya otomatik olarak yeni, boş ve formülleri hazır bir satır eklenir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tablo silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel kapanır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İmleç en başa döner"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Son hücrede Tab tuşu anında yeni bir tablo satırı oluşturur.",
                              "measuredSkill": "Veri Giriş Otomasyonu"
                    }
          ]
}
      },
      {
        id: "sec14_l7",
        phaseId: 14,
        unitId: "u14_7",
        title: "Tablolarda Dilimleyici (Slicer) ile İnteraktif Filtreleme",
        shortDesc: "Pivot tablolarda kullanılan görsel buton filtrelerini (dilimleyici) doğrudan resmi Excel tablolarına bağlama.",
        category: "Excel Tabloları",
        groupTitle: "Dilimleyiciler",
        primaryGoal: "Yönetici ve kullanıcılar için şık, tek tıkla filtrelenen interaktif rapor arayüzleri hazırlamak.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Filtreleme için klasik küçük açılır liste oklarına mecbur olduğunu sanmak"],
        successCriteria: "Tabloya dilimleyici ekleyebilmek ve görsel filtrelemeyi yönetebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Dilimleyici (Slicer)"],
        initialWorkbook: createTableSheet("s14_7", "DilimleyiciSayfasi", ["Bölge", "Satış Temsilcisi", "Ciro"], [["Marmara", "Ahmet", 120000], ["Ege", "Mehmet", 95000], ["Marmara", "Ayşe", 140000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tablolarda Dilimleyici (Slicer) ile İnteraktif Filtreleme",
                    "description": "Yönetici ve kullanıcılar için şık, tek tıkla filtrelenen interaktif rapor arayüzleri hazırlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_7",
                    "title": "Görsel Filtre Butonları",
                    "explanation": "Tablo Tasarımı sekmesinden 'Dilimleyici Ekle' dendiğinde seçilen sütun (örneğin Bölge) için butonlar eklenir. 'Marmara' butonuna basıldığında tablo saniyeler içinde yalnızca Marmara satırlarını gösterir.",
                    "speechText": "Tablo Tasarımı sekmesinden 'Dilimleyici Ekle' dendiğinde seçilen sütun (örneğin Bölge) için butonlar eklenir. 'Marmara' butonuna basıldığında tablo saniyeler içinde yalnızca Marmara satırlarını gösterir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t14_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine görsel filtre aracının adını 'Dilimleyici' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Dilimleyici' yazın.",
                              "D2 hücresine tam olarak 'Dilimleyici' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Tablolarda Dilimleyici (Slicer) ile İnteraktif Filtreleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Dilimleyici"
                    }
          }
],
        quiz: {
          "id": "q14_7",
          "title": "Tablolarda Dilimleyici (Slicer) ile İnteraktif Filtreleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_7_1",
                              "question": "Resmi Excel tablolarında görsel butonlarla interaktif filtreleme sağlayan araç nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dilimleyici (Slicer)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "WordArt"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Köprü"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazım Denetimi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dilimleyiciler tablolara ve pivot tablolara modern görsel buton filtreleri ekler.",
                              "measuredSkill": "İnteraktif Tablo Dilimleyici Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec14_l8",
        phaseId: 14,
        unitId: "u14_8",
        title: "Yinelenenleri Kaldır ile Tablo Hijyeni ve Temizliği",
        shortDesc: "Belirli sütun kombinasyonlarına göre mükerrer kayıtları güvenli biçimde tespit edip tablodan arındırma.",
        category: "Excel Tabloları",
        groupTitle: "Veri Hijyeni",
        primaryGoal: "Birleştirilen listelerdeki mükerrer fatura veya müşteri kayıtlarını temizlemek.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Tüm sütunları seçmeden yinelenenleri kaldırıp veri bütünlüğünü bozmak"],
        successCriteria: "Yinelenenleri kaldır aracını doğru sütun seçimiyle yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Yinelenenleri Kaldır"],
        initialWorkbook: createTableSheet("s14_8", "YinelenenTemizle", ["Fatura No", "Müşteri", "Tutar"], [["FTR001", "ABC Ltd", 15000], ["FTR002", "XYZ AŞ", 22000], ["FTR001", "ABC Ltd", 15000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yinelenenleri Kaldır ile Tablo Hijyeni ve Temizliği",
                    "description": "Birleştirilen listelerdeki mükerrer fatura veya müşteri kayıtlarını temizlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_8",
                    "title": "Mükerrer Kayıt Temizliği",
                    "explanation": "Tablo Tasarımı veya Veri sekmesindeki 'Yinelenenleri Kaldır' aracı Fatura No sütunundaki çift kayıtları tarar ve tablodan siler.",
                    "speechText": "Tablo Tasarımı veya Veri sekmesindeki 'Yinelenenleri Kaldır' aracı Fatura No sütunundaki çift kayıtları tarar ve tablodan siler. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t14_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine benzersiz fatura sayısı olarak 2 yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "2 sayısını yazın.",
                              "C4 hücresine 2 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Yinelenenleri Kaldır ile Tablo Hijyeni ve Temizliği görevini başarıyla tamamladınız.",
                              "expectedValue": 2
                    }
          }
],
        quiz: {
          "id": "q14_8",
          "title": "Yinelenenleri Kaldır ile Tablo Hijyeni ve Temizliği Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_8_1",
                              "question": "Yinelenenleri Kaldır aracı çalıştırıldığında mükerrer satırlardan hangisi saklanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İlk karşılaşılan orijinal satır saklanır, sonrakiler silinir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sonuncu satır saklanır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tüm kayıtlar silinir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hiçbiri silinmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel listenin yukarısından tarar; ilk kaydı tutar, sonraki kopyaları temizler.",
                              "measuredSkill": "Veri Bütünlüğü ve Mükerrer Kayıt Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec14_l9",
        phaseId: 14,
        unitId: "u14_9",
        title: "Tabloyu Normal Aralığa Dönüştürme (Convert to Range)",
        shortDesc: "Resmi tablo özelliklerini kaldırıp biçimlendirmeleri koruyarak veriyi standart hücre aralığına geri çevirme.",
        category: "Excel Tabloları",
        groupTitle: "Aralığa Dönüştürme",
        primaryGoal: "Makrolar veya eski sistemlerle uyumluluk gerektiğinde tabloyu güvenle düz aralığa çevirmek.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Tabloyu aralığa çevirince biçimlerin de silineceğini sanmak"],
        successCriteria: "Tabloyu aralığa dönüştürme aracını başarıyla kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Aralığa Dönüştür"],
        initialWorkbook: createTableSheet("s14_9", "AraligaDonustur", ["İşlem Adımı", "Şerit Sekmesi", "Komut"], [["Aralığa Çevirme", "Tablo Tasarımı", "Aralığa Dönüştür"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tabloyu Normal Aralığa Dönüştürme (Convert to Range)",
                    "description": "Makrolar veya eski sistemlerle uyumluluk gerektiğinde tabloyu güvenle düz aralığa çevirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_9",
                    "title": "Geriye Dönüş",
                    "explanation": "Tablo Tasarımı sekmesindeki 'Aralığa Dönüştür' (Convert to Range) komutu tablo nesnesini kaldırır ancak hücrelerdeki renkleri ve değerleri korur. Yapılandırılmış başvurular standart hücre adreslerine (A2*B2) dönüşür.",
                    "speechText": "Tablo Tasarımı sekmesindeki 'Aralığa Dönüştür' (Convert to Range) komutu tablo nesnesini kaldırır ancak hücrelerdeki renkleri ve değerleri korur. Yapılandırılmış başvurular standart hücre adreslerine (A2*B2) dönüşür. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t14_9_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine ilgili komutun adını 'Aralığa Dönüştür' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Aralığa Dönüştür' yazın.",
                              "D2 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Tabloyu Normal Aralığa Dönüştürme (Convert to Range) görevini başarıyla tamamladınız.",
                              "expectedValue": "Aralığa Dönüştür"
                    }
          }
],
        quiz: {
          "id": "q14_9",
          "title": "Tabloyu Normal Aralığa Dönüştürme (Convert to Range) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_9_1",
                              "question": "Bir tablo 'Aralığa Dönüştür' komutuyla dönüştürüldüğünde aşağıdakilerden hangisi gerçekleşir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tablo özellikleri kalkar, standart hücre aralığına döner ancak veriler ve biçimler korunur"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm veriler silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel donar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya boyutu 10 katına çıkar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Resmi ListObject özelliği iptal edilir, veriler normal hücrelere dönüşür.",
                              "measuredSkill": "Veri Yapısı Dönüşümü"
                    }
          ]
}
      },
      {
        id: "sec14_l10",
        phaseId: 14,
        unitId: "u14_10",
        title: "Otomatik Başlık Sabitleme (Freeze Headers on Scroll)",
        shortDesc: "Tablo seçiliyken aşağıya kaydırıldığında kolon harflerinin (A, B, C) yerini otomatik olarak tablo başlıklarının alması.",
        category: "Excel Tabloları",
        groupTitle: "Görünüm Konforu",
        primaryGoal: "Bölmeleri Dondur aracına gerek duymadan binlerce satırlık tablolarda hangi sütunda olduğunuzu kaybetmemek.",
        prerequisites: ["sec14_l1"],
        commonMistakes: ["Aşağı kaydırırken aktif hücreyi tablonun dışına tıklayıp başlık görünürlüğünü kaybetmek"],
        successCriteria: "Tablo başlıklarının otomatik dondurulma özelliğini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Başlık Sabitleme"],
        initialWorkbook: createTableSheet("s14_10", "BaslikSabitleme", ["Özellik", "Açıklama"], [["Doğal Başlık", "Aşağı kaydırıldığında kolon harfleri başlık adına dönüşür"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Başlık Sabitleme (Freeze Headers on Scroll)",
                    "description": "Bölmeleri Dondur aracına gerek duymadan binlerce satırlık tablolarda hangi sütunda olduğunuzu kaybetmemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_10",
                    "title": "Kolon Harfi Dönüşümü",
                    "explanation": "Tablo içinde bir hücre seçiliyken aşağıya doğru fareyle kaydırdığınızda, A harfi yerine 'Personel ID', B harfi yerine 'Ad Soyad' başlıkları sütun harflerinin üstüne yerleşir.",
                    "speechText": "Tablo içinde bir hücre seçiliyken aşağıya doğru fareyle kaydırdığınızda, A harfi yerine 'Personel ID', B harfi yerine 'Ad Soyad' başlıkları sütun harflerinin üstüne yerleşir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t14_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine bu özelliğin sağladığı faydayı 'Doğal Başlık Sabitleme' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Doğal Başlık Sabitleme' yazın.",
                              "C2 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Otomatik Başlık Sabitleme (Freeze Headers on Scroll) görevini başarıyla tamamladınız.",
                              "expectedValue": "Doğal Başlık Sabitleme"
                    }
          }
],
        quiz: {
          "id": "q14_10",
          "title": "Otomatik Başlık Sabitleme (Freeze Headers on Scroll) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_10_1",
                              "question": "Resmi tablolarda aşağı kaydırma sırasında kolon harflerinin başlık adına dönüşmesi için ne gereklidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Aktif seçili hücrenin tablo sınırları içinde bulunması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "VBA kodu yazılması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bölmeleri dondur düğmesine basılması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Bilgisayarın yeniden başlatılması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İmleç tablo içerisindeyken Excel sütun harflerini doğrudan tablo başlıklarıyla değiştirir.",
                              "measuredSkill": "Kullanıcı Arayüzü ve Navigasyon Hijyeni"
                    }
          ]
}
      },
      {
        id: "sec14_l11",
        phaseId: 14,
        unitId: "u14_11",
        title: "Büyük Veri Kümelerinde Tablo Mimarisi ve Raporlama",
        shortDesc: "Resmi tabloları formüller, dinamik diziler ve grafiklerle birleştirerek tam otomatik operasyonel şablon kurma.",
        category: "Excel Tabloları",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Gelen yeni veriyi doğrudan içine alıp otomatik genişleyen profesyonel bir şirket raporu tasarlamak.",
        prerequisites: ["sec14_l3", "sec14_l5", "sec14_l7"],
        commonMistakes: ["Büyük tablolarda formülleri hücre adresiyle yazıp dinamik tablo başvurusu avantajından mahrum kalmak"],
        successCriteria: "Uçtan uca kurumsal tablo mimarisi kurabilmek.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["Resmi Tablo", "Yapılandırılmış Başvuru"],
        initialWorkbook: createTableSheet("s14_11", "TabloRaporPaneli", ["Sipariş ID", "Kategori", "Adet", "Birim Fiyat", "Toplam Ciro"], [["SIP101", "Elektronik", 4, 1500, ""], ["SIP102", "Mobilya", 2, 4500, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Büyük Veri Kümelerinde Tablo Mimarisi ve Raporlama",
                    "description": "Gelen yeni veriyi doğrudan içine alıp otomatik genişleyen profesyonel bir şirket raporu tasarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts14_11",
                    "title": "Kurumsal Tablo Standardı",
                    "explanation": "Kurumsal Excel mimarisinde tüm ham veriler mutlaka resmi Tablo (Ctrl+T) içine alınmalıdır. Bu sayede yazılan tüm formüller [@Adet]*[@[Birim Fiyat]] şeklinde okunabilir olur ve yeni sipariş eklendiğinde sistem anında hesaplar.",
                    "speechText": "Kurumsal Excel mimarisinde tüm ham veriler mutlaka resmi Tablo (Ctrl+T) içine alınmalıdır. Bu sayede yazılan tüm formüller [@Adet]*[@[Birim Fiyat]] şeklinde okunabilir olur ve yeni sipariş eklendiğinde sistem anında hesaplar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t14_11_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine resmi yapılandırılmış başvuru formülünü yazın: =[@Adet]*[@[Birim Fiyat]]",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=[@Adet]*[@[Birim Fiyat]] formülünü yazın.",
                              "E2 hücresine =[@Adet]*[@[Birim Fiyat]] formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Büyük Veri Kümelerinde Tablo Mimarisi ve Raporlama görevini başarıyla tamamladınız.",
                              "expectedValue": "=[@Adet]*[@[Birim Fiyat]]"
                    }
          }
],
        quiz: {
          "id": "q14_11",
          "title": "Büyük Veri Kümelerinde Tablo Mimarisi ve Raporlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_14_11_1",
                              "question": "Kurumsal bir Excel modelinde ham veriyi normal hücre aralığı yerine resmi Tablo olarak saklamanın en kritik mimari nedeni nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yeni veri eklendiğinde formüllerin, pivot tabloların ve grafiklerin aralığı otomatik genişletmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri mavi yapması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca yazdırmayı kolaylaştırması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı tipini değiştirmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dinamik genişleme sayesinde yeni eklenen satırlar tüm ekosisteme otomatik yansır.",
                              "measuredSkill": "Kurumsal Veri Mimarisi ve Tablo Tasarımı"
                    }
          ]
}
      }
    ]
  },
  {
    id: 15,
    category: "Sıralama ve Filtreleme",
    title: "15. Sıralama, Filtreleme ve Veri Yönetimi",
    subtitle: "Çok Düzeyli Sıralama, Özel Listeler, Sayı/Metin/Tarih Filtreleri ve Gelişmiş Filtre",
    iconName: "Sliders",
    description: "Büyük veri kümelerinde tek sütunlu ve çok düzeyli sıralamalar, özel liste sıralaması, joker karakterli filtreler, Gelişmiş Filtre (Advanced Filter) kriter tabloları ve ALTTOPLAM.",
    lessons: [
      {
        id: "sec15_l1",
        phaseId: 15,
        unitId: "u15_1",
        title: "Tek Sütunlu Hızlı Sıralama (A'dan Z'ye ve Z'den A'ya)",
        shortDesc: "Tek bir tıklamayla tüm tablonun satır bütünlüğünü koruyarak alfabetik veya sayısal sıralanması.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Hızlı Sıralama",
        primaryGoal: "Müşteri listesini alfabetik sıraya veya ciroları büyükten küçüğe dizmek.",
        prerequisites: ["sec14_l11"],
        commonMistakes: ["Yalnızca tek bir sütunu seçip 'Seçimi Genişlet' uyarısına dikkat etmeyerek veriyi birbirine karıştırmak"],
        successCriteria: "Hızlı sıralama araçlarını satır bütünlüğünü koruyarak uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sıralama", "A-Z"],
        initialWorkbook: createTableSheet("s15_1", "HizliSiralaSayfasi", ["Müşteri Adı", "Şehir", "Ciro"], [["Zeynep Kaya", "İzmir", 45000], ["Ahmet Demir", "İstanbul", 82000], ["Burak Yıldız", "Ankara", 63000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tek Sütunlu Hızlı Sıralama (A'dan Z'ye ve Z'den A'ya)",
                    "description": "Müşteri listesini alfabetik sıraya veya ciroları büyükten küçüğe dizmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_1",
                    "title": "Satır Bütünlüğüyle Sıralama",
                    "explanation": "Veri sekmesindeki A->Z butonu seçili sütuna göre tüm satırı taşır. Ahmet Demir satırı en başa geldiğinde İstanbul ve 82.000 TL bilgisi de onunla birlikte taşınır.",
                    "speechText": "Veri sekmesindeki A->Z butonu seçili sütuna göre tüm satırı taşır. Ahmet Demir satırı en başa geldiğinde İstanbul ve 82.000 TL bilgisi de onunla birlikte taşınır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_1_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine ilk sıraya geçecek müşterinin adını 'Ahmet Demir' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Ahmet Demir' yazın.",
                              "D2 hücresine 'Ahmet Demir' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Tek Sütunlu Hızlı Sıralama (A'dan Z'ye ve Z'den A'ya) görevini başarıyla tamamladınız.",
                              "expectedValue": "Ahmet Demir"
                    }
          }
],
        quiz: {
          "id": "q15_1",
          "title": "Tek Sütunlu Hızlı Sıralama (A'dan Z'ye ve Z'den A'ya) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_1_1",
                              "question": "Excel tek bir sütun seçilip sıralandığında neden 'Seçimi Genişlet' uyarısı verir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yanındaki sütunların sıralanmayıp satır ilişkisinin bozulmasını engellemek için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hata vermek için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel'i kapatmak için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı tipini değiştirmek için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Seçim genişletilmezse Ad sıralanır ama Soyad ve Maaş eski yerinde kalarak veri bozulur.",
                              "measuredSkill": "Veri Bütünlüğü Korumalı Sıralama"
                    }
          ]
}
      },
      {
        id: "sec15_l2",
        phaseId: 15,
        unitId: "u15_2",
        title: "Çok Düzeyli (Multi-Level) Özel Sıralama",
        shortDesc: "Önce Bölgeye göre (A-Z), aynı bölge içindekileri Departmana göre, aynı departmandakileri ise Maaşa göre (Z-A) sıralama.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Özel Sıralama",
        primaryGoal: "Karmaşık hiyerarşik kurumsal tabloları mantıksal öncelik sırasına göre dizmek.",
        prerequisites: ["sec15_l1"],
        commonMistakes: ["Düzey eklemek yerine her sütunu sırayla tek tek sıralayıp önceki sıralamayı ezmek"],
        successCriteria: "Çok düzeyli sıralama penceresinde 'Düzey Ekle' mantığını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Çok Düzeyli Sıralama"],
        initialWorkbook: createTableSheet("s15_2", "CokDuzeyliSayfasi", ["Bölge", "Departman", "Personel", "Maaş"], [["Marmara", "Satış", "Ali", 35000], ["Marmara", "Satış", "Mehmet", 48000], ["Ege", "IT", "Can", 42000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Çok Düzeyli (Multi-Level) Özel Sıralama",
                    "description": "Karmaşık hiyerarşik kurumsal tabloları mantıksal öncelik sırasına göre dizmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_2",
                    "title": "Hiyerarşik Sıralama",
                    "explanation": "Veri > Sıralama penceresinde 'Düzey Ekle' butonuyla 1. Kriter: Bölge, 2. Kriter: Departman, 3. Kriter: Maaş (Büyükten Küçüğe) tanımlanır. Böylece Marmara Satış içinde Mehmet, Ali'nin üstünde yer alır.",
                    "speechText": "Veri > Sıralama penceresinde 'Düzey Ekle' butonuyla 1. Kriter: Bölge, 2. Kriter: Departman, 3. Kriter: Maaş (Büyükten Küçüğe) tanımlanır. Böylece Marmara Satış içinde Mehmet, Ali'nin üstünde yer alır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t15_2_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine çok düzeyli sıralamada kullanılan butonun adını 'Düzey Ekle' olarak yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "'Düzey Ekle' yazın.",
                              "E2 hücresine 'Düzey Ekle' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Çok Düzeyli (Multi-Level) Özel Sıralama görevini başarıyla tamamladınız.",
                              "expectedValue": "Düzey Ekle"
                    }
          }
],
        quiz: {
          "id": "q15_2",
          "title": "Çok Düzeyli (Multi-Level) Özel Sıralama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_2_1",
                              "question": "Çok düzeyli sıralamada 2. düzey ne zaman devreye girer?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1. düzeydeki değerler birbirine eşit olduğunda"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Her zaman"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hiçbir zaman"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca sayılarda"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İlk düzeyde eşitlik olan satırlar arasında ikinci düzey sıralama kuralı uygulanır.",
                              "measuredSkill": "Hiyerarşik Çok Kriterli Sıralama"
                    }
          ]
}
      },
      {
        id: "sec15_l3",
        phaseId: 15,
        unitId: "u15_3",
        title: "Özel Liste Sıralaması (Custom List Sorting)",
        shortDesc: "Alfabetik sıralanamayan mantıksal sıraları (Ocak, Şubat, Mart.. veya Düşük, Orta, Yüksek, Acil) sıralama.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Özel Listeler",
        primaryGoal: "İş önceliği ve takvim aylarını alfabetik bozulma yaşamadan doğal akışında dizmek.",
        prerequisites: ["sec15_l2"],
        commonMistakes: ["Ayları A'dan Z'ye sıralayıp Ağustos, Aralık, Ekim diye takvim sırasını bozmak"],
        successCriteria: "Özel liste tanımlama ve sıralama yöntemini kavramak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Özel Liste"],
        initialWorkbook: createTableSheet("s15_3", "OzelListeSayfasi", ["Görev", "Öncelik"], [["Sunucu Güncellemesi", "Acil"], ["Arşiv Temizliği", "Düşük"], ["Bütçe Revizyonu", "Yüksek"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Liste Sıralaması (Custom List Sorting)",
                    "description": "İş önceliği ve takvim aylarını alfabetik bozulma yaşamadan doğal akışında dizmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_3",
                    "title": "Mantıksal Akış Sıralaması",
                    "explanation": "Excel'de Sıralama Düzeni açılır kutusundan 'Özel Liste' seçilerek 'Acil, Yüksek, Orta, Düşük' sırası belirlenebilir. Bu sayede Acil en tepeye, Düşük en alta yerleşir.",
                    "speechText": "Excel'de Sıralama Düzeni açılır kutusundan 'Özel Liste' seçilerek 'Acil, Yüksek, Orta, Düşük' sırası belirlenebilir. Bu sayede Acil en tepeye, Düşük en alta yerleşir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t15_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine ilk sırada yer alması gereken önceliği 'Acil' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Acil' yazın.",
                              "C2 hücresine 'Acil' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Özel Liste Sıralaması (Custom List Sorting) görevini başarıyla tamamladınız.",
                              "expectedValue": "Acil"
                    }
          }
],
        quiz: {
          "id": "q15_3",
          "title": "Özel Liste Sıralaması (Custom List Sorting) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_3_1",
                              "question": "Özel Liste sıralaması hangi senaryoda zorunludur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alfabetik olmayan ancak belirli bir iş mantığına göre dizilmesi gereken verilerde (Örn: Acil > Yüksek > Düşük)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca tarihlerde"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayısal işlemlerde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafiklerde"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İş mantığı içeren hiyerarşik sıralamalarda Özel Listeler kullanılır.",
                              "measuredSkill": "Özel Liste ve Mantıksal Sıralama"
                    }
          ]
}
      },
      {
        id: "sec15_l4",
        phaseId: 15,
        unitId: "u15_4",
        title: "Hücre Rengine ve Simgeye Göre Sıralama",
        shortDesc: "Koşullu biçimlendirme ile renklendirilmiş veya simge atanmış hücreleri listenin en tepesine toplama.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Görsel Sıralama",
        primaryGoal: "Kırmızı işaretlenmiş riskli müşterileri veya yeşil onaylı satırları tablonun başına taşımak.",
        prerequisites: ["sec15_l2"],
        commonMistakes: ["Renkli hücreleri fareyle tek tek kesip yapıştırarak en başa almaya çalışmak"],
        successCriteria: "Hücre rengine göre sıralama kuralını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Renkle Sıralama"],
        initialWorkbook: createTableSheet("s15_4", "RenkSiralaSayfasi", ["Fatura No", "Durum Rengi", "Tutar"], [["FTR01", "Kırmızı (Gecikmiş)", 12000], ["FTR02", "Yeşil (Ödendi)", 34000], ["FTR03", "Kırmızı (Gecikmiş)", 8500]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre Rengine ve Simgeye Göre Sıralama",
                    "description": "Kırmızı işaretlenmiş riskli müşterileri veya yeşil onaylı satırları tablonun başına taşımak."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_4",
                    "title": "Görsel Önceliklendirme",
                    "explanation": "Sıralama penceresinde 'Sıralama Ölçütü' olarak Hücre Rengi seçilir ve 'Üstte' kuralı verilir. Kırmızı hücreler anında en tepeye toplanır.",
                    "speechText": "Sıralama penceresinde 'Sıralama Ölçütü' olarak Hücre Rengi seçilir ve 'Üstte' kuralı verilir. Kırmızı hücreler anında en tepeye toplanır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine görsel sıralama kriterini 'Hücre Rengi' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Hücre Rengi' yazın.",
                              "D2 hücresine 'Hücre Rengi' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Hücre Rengine ve Simgeye Göre Sıralama görevini başarıyla tamamladınız.",
                              "expectedValue": "Hücre Rengi"
                    }
          }
],
        quiz: {
          "id": "q15_4",
          "title": "Hücre Rengine ve Simgeye Göre Sıralama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_4_1",
                              "question": "Excel'de renkli hücreleri sıralarken hangi konum seçeneği sunulur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Üstte (En Başta) veya Altta (En Sonda)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca Ortada"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sol tarafta"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sağ tarafta"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Renkli hücreler listenin en üstüne veya en altına konumlandırılabilir.",
                              "measuredSkill": "Görsel ve Renk Odaklı Sıralama"
                    }
          ]
}
      },
      {
        id: "sec15_l5",
        phaseId: 15,
        unitId: "u15_5",
        title: "Otomatik Filtre (AutoFilter) Temelleri ve Kısayolu",
        shortDesc: "Tablo başlıklarına filtre okları ekleme (Ctrl+Shift+L) ve tek tıkla arama kutusunu kullanma.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Otomatik Filtre",
        primaryGoal: "Hızlı veri analizlerinde filtreleri anında açıp kapatabilmek.",
        prerequisites: ["sec15_l1"],
        commonMistakes: ["Filtreyi açmak için şeritteki menüleri arayıp klavye kısayolunu kullanmamak"],
        successCriteria: "Ctrl+Shift+L filtre kısayolunu etkin kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Otomatik Filtre", "Ctrl+Shift+L"],
        initialWorkbook: createTableSheet("s15_5", "OtoFiltreGiris", ["Personel", "Şube", "Maaş"], [["Ali", "Kadıköy", 35000], ["Veli", "Beşiktaş", 42000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Filtre (AutoFilter) Temelleri ve Kısayolu",
                    "description": "Hızlı veri analizlerinde filtreleri anında açıp kapatabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_5",
                    "title": "Filtre Kısayolu",
                    "explanation": "Ctrl + Shift + L tuş kombinasyonu tablo başlıklarına anında filtre açılır oklarını ekler veya açık olan filtreyi tek tuşla kapatır.",
                    "speechText": "Ctrl + Shift + L tuş kombinasyonu tablo başlıklarına anında filtre açılır oklarını ekler veya açık olan filtreyi tek tuşla kapatır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_5_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine filtre kısayolunu 'Ctrl+Shift+L' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Ctrl+Shift+L' yazın.",
                              "D2 hücresine tam olarak 'Ctrl+Shift+L' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Otomatik Filtre (AutoFilter) Temelleri ve Kısayolu görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+Shift+L"
                    }
          }
],
        quiz: {
          "id": "q15_5",
          "title": "Otomatik Filtre (AutoFilter) Temelleri ve Kısayolu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_5_1",
                              "question": "Excel'de Otomatik Filtreyi (AutoFilter) açıp kapatan evrensel klavye kısayolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + Shift + L"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + F"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Alt + F4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + B"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+Shift+L anında filtre oklarını açar veya kaldırır.",
                              "measuredSkill": "Filtre Kısayolu ve Operasyonel Hız"
                    }
          ]
}
      },
      {
        id: "sec15_l6",
        phaseId: 15,
        unitId: "u15_6",
        title: "Sayı Filtreleri: İlk 10, Büyüktür ve Ortalama Üstü",
        shortDesc: "Sayısal sütunlarda tek tek işaretlemek yerine mantıksal operatörlerle otomatik süzme yapma.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Sayı Filtreleri",
        primaryGoal: "Cirosu 100.000 TL'den büyük olanları veya şirket ortalamasının üstündeki personeli anında listelemek.",
        prerequisites: ["sec15_l5"],
        commonMistakes: ["Sayıları filtrelemek için açılır kutudaki yüzlerce onay kutusunu tek tek elle tıklamak"],
        successCriteria: "Sayı filtreleri menüsünü ve operatörlerini doğru kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Sayı Filtreleri"],
        initialWorkbook: createTableSheet("s15_6", "SayiFiltreSayfasi", ["Temsilci", "Ciro", "Filtre Kuralı"], [["Ahmet", 150000, "Büyüktür: 100000"], ["Mehmet", 85000, ""], ["Ayşe", 210000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayı Filtreleri: İlk 10, Büyüktür ve Ortalama Üstü",
                    "description": "Cirosu 100.000 TL'den büyük olanları veya şirket ortalamasının üstündeki personeli anında listelemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_6",
                    "title": "Matematiksel Filtre Kuralları",
                    "explanation": "Filtre okuna basılıp 'Sayı Filtreleri' seçildiğinde: Büyüktür, Küçüktür, Arasında, İlk 10 ve Ortalama Üstü seçenekleri dinamik süzme sağlar.",
                    "speechText": "Filtre okuna basılıp 'Sayı Filtreleri' seçildiğinde: Büyüktür, Küçüktür, Arasında, İlk 10 ve Ortalama Üstü seçenekleri dinamik süzme sağlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_6_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine 100.000 TL üzeri ciro yapan personel sayısını 2 olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "2 sayısını yazın.",
                              "D2 hücresine 2 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Sayı Filtreleri: İlk 10, Büyüktür ve Ortalama Üstü görevini başarıyla tamamladınız.",
                              "expectedValue": 2
                    }
          }
],
        quiz: {
          "id": "q15_6",
          "title": "Sayı Filtreleri: İlk 10, Büyüktür ve Ortalama Üstü Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_6_1",
                              "question": "Sayı Filtreleri menüsünde 'Ortalama Üstü' seçildiğinde Excel ne yapar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütundaki tüm sayıların ortalamasını otomatik hesaplar ve ortalamanın üzerindeki satırları gösterir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En büyük tek bir sayıyı gösterir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayıları siler"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata verir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Arka planda ortalamayı alır ve dinamik olarak ortalamanın üstündeki kayıtları süzer.",
                              "measuredSkill": "Dinamik Sayı Filtreleme Operatörleri"
                    }
          ]
}
      },
      {
        id: "sec15_l7",
        phaseId: 15,
        unitId: "u15_7",
        title: "Metin Filtreleri: İçerir, İle Başlar ve Eşit Değildir",
        shortDesc: "Metin alanlarında belirli kelime veya heceleri içeren satırları filtreleme.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Metin Filtreleri",
        primaryGoal: "Unvanında 'Müdür' kelimesi geçen personeli veya 'TR' ile başlayan IBAN'ları listelemek.",
        prerequisites: ["sec15_l5"],
        commonMistakes: ["Metin ararken büyük/küçük harf ayrımında hata yapıp kayıtları kaçırmak"],
        successCriteria: "Metin filtreleri operatörlerini başarıyla kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Metin Filtreleri"],
        initialWorkbook: createTableSheet("s15_7", "MetinFiltreSayfasi", ["Personel", "Unvan"], [["Ali Yılmaz", "Satış Müdürü"], ["Can Demir", "Yazılım Uzmanı"], ["Ayşe Kaya", "Finans Müdürü"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metin Filtreleri: İçerir, İle Başlar ve Eşit Değildir",
                    "description": "Unvanında 'Müdür' kelimesi geçen personeli veya 'TR' ile başlayan IBAN'ları listelemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_7",
                    "title": "Metin Deseni Filtreleme",
                    "explanation": "Metin Filtreleri > 'İçerir' (Contains) seçeneğine 'Müdür' yazıldığında hem Satış Müdürü hem Finans Müdürü ekranda kalır.",
                    "speechText": "Metin Filtreleri > 'İçerir' (Contains) seçeneğine 'Müdür' yazıldığında hem Satış Müdürü hem Finans Müdürü ekranda kalır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t15_7_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine 'Müdür' unvanına sahip kişi sayısını 2 olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "2 sayısını yazın.",
                              "C2 hücresine 2 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Metin Filtreleri: İçerir, İle Başlar ve Eşit Değildir görevini başarıyla tamamladınız.",
                              "expectedValue": 2
                    }
          }
],
        quiz: {
          "id": "q15_7",
          "title": "Metin Filtreleri: İçerir, İle Başlar ve Eşit Değildir Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_7_1",
                              "question": "Metin Filtrelerinde bir kelimenin hücrenin neresinde olursa olsun geçmesini istiyorsak hangi kural seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İçerir (Contains)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Eşittir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İle Başlar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İle Biter"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "'İçerir' kuralı kelimenin başta, ortada veya sonda olmasına bakılmaksızın tüm eşleşmeleri bulur.",
                              "measuredSkill": "Metin Deseni ve Kural Tabanlı Filtreleme"
                    }
          ]
}
      },
      {
        id: "sec15_l8",
        phaseId: 15,
        unitId: "u15_8",
        title: "Tarih Filtreleri: Bu Ay, Geçen Çeyrek ve Dinamik Dönemler",
        shortDesc: "Tarih sütunlarında Excel'in takvim zekasını kullanarak dinamik periyot filtreleri uygulama.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Tarih Filtreleri",
        primaryGoal: "Tarihleri tek tek gün seçmek yerine 'Bu Ay' veya 'Son Çeyrek' diyerek dinamik raporlamak.",
        prerequisites: ["sec15_l5"],
        commonMistakes: ["Her ay başında filtreyi manuel olarak yeni ayın günlerine göre tek tek değiştirmek"],
        successCriteria: "Dinamik tarih filtrelerini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Tarih Filtreleri"],
        initialWorkbook: createTableSheet("s15_8", "TarihFiltreSayfasi", ["Fatura No", "Tarih", "Tutar"], [["F101", "15.01.2024", 25000], ["F102", "12.02.2024", 45000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tarih Filtreleri: Bu Ay, Geçen Çeyrek ve Dinamik Dönemler",
                    "description": "Tarihleri tek tek gün seçmek yerine 'Bu Ay' veya 'Son Çeyrek' diyerek dinamik raporlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_8",
                    "title": "Takvim Zekası",
                    "explanation": "Tarih Filtreleri menüsünde: Bugün, Dün, Bu Hafta, Geçen Ay, Bu Çeyrek, Gelecek Yıl gibi onlarca hazır dinamik kural bulunur.",
                    "speechText": "Tarih Filtreleri menüsünde: Bugün, Dün, Bu Hafta, Geçen Ay, Bu Çeyrek, Gelecek Yıl gibi onlarca hazır dinamik kural bulunur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_8_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine tarih filtreleme kategorisinin adını 'Tarih Filtreleri' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Tarih Filtreleri' yazın.",
                              "D2 hücresine 'Tarih Filtreleri' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Tarih Filtreleri: Bu Ay, Geçen Çeyrek ve Dinamik Dönemler görevini başarıyla tamamladınız.",
                              "expectedValue": "Tarih Filtreleri"
                    }
          }
],
        quiz: {
          "id": "q15_8",
          "title": "Tarih Filtreleri: Bu Ay, Geçen Çeyrek ve Dinamik Dönemler Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_8_1",
                              "question": "Tarih Filtrelerinde 'Geçen Ay' seçeneği kullanıldığında rapor ne zaman güncellenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sistem tarihi değiştikçe otomatik olarak her zaman bir önceki ayı gösterir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hiç güncellenmez"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tüm yılları siler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Dinamik tarih filtreleri sistem saatine göre kendini otomatik revize eder.",
                              "measuredSkill": "Dinamik Takvim Dönemi Filtreleme"
                    }
          ]
}
      },
      {
        id: "sec15_l9",
        phaseId: 15,
        unitId: "u15_9",
        title: "Joker Karakterlerle Filtreleme (* ve ? Mantığı)",
        shortDesc: "Yıldız (*) ile herhangi bir karakter dizisini, soru işareti (?) ile tek bir bilinmeyen karakteri filtreleme.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Joker Karakterler",
        primaryGoal: "Kod formatında 3. karakteri 'A' olan stokları veya 'İst' ile başlayan tüm kelimeleri süzmek.",
        prerequisites: ["sec15_l7"],
        commonMistakes: ["Joker karakterlerin formüllerde ve filtre arama kutusundaki farkını bilmemek"],
        successCriteria: "Joker karakterleri filtre kutusunda etkin uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Joker Karakterler"],
        initialWorkbook: createTableSheet("s15_9", "JokerFiltreSayfasi", ["Stok Kodu", "Açıklama"], [["AB100", "Standart Parça"], ["AC100", "Özel Parça"], ["AB200", "İthal Parça"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Joker Karakterlerle Filtreleme (* ve ? Mantığı)",
                    "description": "Kod formatında 3. karakteri 'A' olan stokları veya 'İst' ile başlayan tüm kelimeleri süzmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_9",
                    "title": "Arama Maskeleri",
                    "explanation": "Filtre arama kutusuna 'AB*' yazıldığında AB ile başlayan tüm kodlar gelir. 'A?100' yazıldığında ise ortadaki karakter ne olursa olsun 5 haneli eşleşmeler listelenir.",
                    "speechText": "Filtre arama kutusuna 'AB*' yazıldığında AB ile başlayan tüm kodlar gelir. 'A?100' yazıldığında ise ortadaki karakter ne olursa olsun 5 haneli eşleşmeler listelenir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t15_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine AB ile başlayan kayıt sayısını 2 olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "2 sayısını yazın.",
                              "C2 hücresine 2 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Joker Karakterlerle Filtreleme (* ve ? Mantığı) görevini başarıyla tamamladınız.",
                              "expectedValue": 2
                    }
          }
],
        quiz: {
          "id": "q15_9",
          "title": "Joker Karakterlerle Filtreleme (* ve ? Mantığı) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_9_1",
                              "question": "Excel filtrelerinde '*' (yıldız) joker karakteri neyi simgeler?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sıfır veya daha fazla herhangi bir sayıda karakteri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca tek bir karakteri"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca sayıları"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boşluğu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "'*' sınırsız sayıda karakteri temsil eder, '?' ise tam olarak tek bir karakteri temsil eder.",
                              "measuredSkill": "Joker Maskeli Veri Tarama"
                    }
          ]
}
      },
      {
        id: "sec15_l10",
        phaseId: 15,
        unitId: "u15_10",
        title: "Gelişmiş Filtre (Advanced Filter) ve Kriter Tablosu",
        shortDesc: "Karmaşık VE/VEYA koşullarını çalışma sayfasında bağımsız bir kriter aralığına yazıp veriyi farklı bir yere kopyalama.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Gelişmiş Filtre",
        primaryGoal: "Klasik filtrenin yetersiz kaldığı karmaşık kriter kümelerini yönetmek ve filtrelenen sonucu başka sayfaya aktarmak.",
        prerequisites: ["sec15_l5"],
        commonMistakes: ["Kriter tablosunda aynı satırın 'VE', alt satırın 'VEYA' anlamına geldiğini karıştırmak"],
        successCriteria: "Gelişmiş Filtre kriter aralığını doğru kurgulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Gelişmiş Filtre"],
        initialWorkbook: createTableSheet("s15_10", "GelismisFiltreSayfasi", ["Kriter Bölge", "Kriter Ciro", "Kriter Mantığı"], [["Marmara", ">50000", "Aynı satırda: VE"], ["Ege", "", "Alt satırda: VEYA"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Gelişmiş Filtre (Advanced Filter) ve Kriter Tablosu",
                    "description": "Klasik filtrenin yetersiz kaldığı karmaşık kriter kümelerini yönetmek ve filtrelenen sonucu başka sayfaya aktarmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_10",
                    "title": "Kriter Aralığı Mantığı",
                    "explanation": "Veri > Gelişmiş (Advanced Filter) aracı: 1. Liste Aralığı, 2. Ölçüt Aralığı ve 3. Başka Bir Yere Kopyala hedefi alır. Kriter tablosundaki başlıklar ana tabloyla birebir aynı olmalıdır.",
                    "speechText": "Veri > Gelişmiş (Advanced Filter) aracı: 1. Liste Aralığı, 2. Ölçüt Aralığı ve 3. Başka Bir Yere Kopyala hedefi alır. Kriter tablosundaki başlıklar ana tabloyla birebir aynı olmalıdır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_10_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine kopyalama seçeneğinin adını 'Başka bir yere kopyala' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Başka bir yere kopyala' yazın.",
                              "D2 hücresine 'Başka bir yere kopyala' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Gelişmiş Filtre (Advanced Filter) ve Kriter Tablosu görevini başarıyla tamamladınız.",
                              "expectedValue": "Başka bir yere kopyala"
                    }
          }
],
        quiz: {
          "id": "q15_10",
          "title": "Gelişmiş Filtre (Advanced Filter) ve Kriter Tablosu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_10_1",
                              "question": "Gelişmiş Filtre kriter tablosunda aynı satıra yazılan iki kriter nasıl değerlendirilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "VE (AND) mantığıyla (iki koşul da sağlanmalıdır)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "VEYA (OR) mantığıyla"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Kriterler yok sayılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata verir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Aynı satırdaki kriterler VE, farklı satırdaki kriterler VEYA olarak yorumlanır.",
                              "measuredSkill": "Gelişmiş Mantıksal Filtre Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec15_l11",
        phaseId: 15,
        unitId: "u15_11",
        title: "ALTTOPLAM (SUBTOTAL) ile Filtrelenen Veride Doğru Hesaplama",
        shortDesc: "Tablo filtrelendiğinde gizlenen satırları hesaba katmayıp yalnızca ekranda kalanları toplayan/ortalamasını alan fonksiyon.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "ALTTOPLAM",
        primaryGoal: "Filtre uygulandığında klasik TOPLA() fonksiyonunun yanlışlıkla gizli satırları da toplama hatasını önlemek.",
        prerequisites: ["sec15_l5"],
        commonMistakes: ["Filtreli tabloda =TOPLA(A2:A100) yazıp filtrenin dışındaki gizli satırları da toplama dahil etmek"],
        successCriteria: "ALTTOPLAM fonksiyonunu işlev numarası (109 / 9) ile doğru uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["ALTTOPLAM"],
        initialWorkbook: createTableSheet("s15_11", "AltToplamSayfasi", ["Şehir", "Satış Tutarı", "Klasik Toplam", "Doğru Alt Toplam"], [["İstanbul", 50000, 110000, ""], ["Ankara", 60000, "", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ALTTOPLAM (SUBTOTAL) ile Filtrelenen Veride Doğru Hesaplama",
                    "description": "Filtre uygulandığında klasik TOPLA() fonksiyonunun yanlışlıkla gizli satırları da toplama hatasını önlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_11",
                    "title": "Filtreye Duyarlı Toplam",
                    "explanation": "=ALTTOPLAM(109; B2:B3) formülü 109 kodu sayesinde gizlenen satırları atlar. Eğer filtreyle Ankara gizlenirse formül otomatik olarak yalnızca ekranda kalan 50.000 TL'yi gösterir.",
                    "speechText": "=ALTTOPLAM(109; B2:B3) formülü 109 kodu sayesinde gizlenen satırları atlar. Eğer filtreyle Ankara gizlenirse formül otomatik olarak yalnızca ekranda kalan 50.000 TL'yi gösterir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_11_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine filtreye duyarlı ALTTOPLAM formülünü yazın: =ALTTOPLAM(109;B2:B3)",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=ALTTOPLAM(109;B2:B3) formülünü yazın.",
                              "D2 hücresine =ALTTOPLAM(109;B2:B3) formülünü girin."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! ALTTOPLAM (SUBTOTAL) ile Filtrelenen Veride Doğru Hesaplama görevini başarıyla tamamladınız.",
                              "expectedValue": "=ALTTOPLAM(109;B2:B3)"
                    }
          }
],
        quiz: {
          "id": "q15_11",
          "title": "ALTTOPLAM (SUBTOTAL) ile Filtrelenen Veride Doğru Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_11_1",
                              "question": "Filtreli bir veri tablosunda =TOPLA() yerine neden =ALTTOPLAM() kullanılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "TOPLA gizli satırları da toplar, ALTTOPLAM ise yalnızca filtrelenip ekranda kalanları toplar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ALTTOPLAM daha renklidir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "TOPLA artık Excel'de çalışmamaktadır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hiçbir farkı yoktur"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Standart TOPLA gizlenen satırları göremez ve hatalı dip toplam üretir.",
                              "measuredSkill": "Filtre Uyumlu Dinamik Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec15_l12",
        phaseId: 15,
        unitId: "u15_12",
        title: "Büyük Veri Kümelerinde Sıralama ve Filtreleme Hijyeni",
        shortDesc: "Boş satır/sütun tuzakları, birleştirilmiş hücrelerin filtreyi felç etmesi ve kurumsal veri yönetim standartları.",
        category: "Sıralama ve Filtreleme",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "100.000 satırlık kurumsal tablolarda filtreleme ve sıralama öncesi veri bütünlüğünü denetlemek.",
        prerequisites: ["sec15_l2", "sec15_l10", "sec15_l11"],
        commonMistakes: ["Birleştirilmiş hücre (Merge & Center) içeren tablolarda filtre açıp alt satırların kaybolmasına yol açmak"],
        successCriteria: "Kurumsal veri seti hijyen standartlarını eksiksiz yönetebilmek.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["Veri Hijyeni", "Filtre Güvenliği"],
        initialWorkbook: createTableSheet("s15_12", "VeriHijyenSayfasi", ["Denetim Kuralı", "Risk Durumu", "Standart"], [["1. Birleştirilmiş Hücreler", "Filtreyi bozar", "Asla birleştirme yapma"], ["2. Boş Satırlar", "Tabloyu keser", "Boş satırları temizle"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Büyük Veri Kümelerinde Sıralama ve Filtreleme Hijyeni",
                    "description": "100.000 satırlık kurumsal tablolarda filtreleme ve sıralama öncesi veri bütünlüğünü denetlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts15_12",
                    "title": "Kurumsal Hijyen Manifestosu",
                    "explanation": "Profesyonel Excel veri mimarisinde: 1. Asla hücre birleştirilmez (Seçim Arasında Ortala kullanılır), 2. Tablonun ortasında boş satır veya sütun bırakılmaz, 3. Her kolonun tek ve benzersiz bir başlığı bulunur.",
                    "speechText": "Profesyonel Excel veri mimarisinde: 1. Asla hücre birleştirilmez (Seçim Arasında Ortala kullanılır), 2. Tablonun ortasında boş satır veya sütun bırakılmaz, 3. Her kolonun tek ve benzersiz bir başlığı bulunur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t15_12_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine hijyen onay durumu olarak 'Veri Hijyeni Onaylandı' yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Veri Hijyeni Onaylandı' yazın.",
                              "D2 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Büyük Veri Kümelerinde Sıralama ve Filtreleme Hijyeni görevini başarıyla tamamladınız.",
                              "expectedValue": "Veri Hijyeni Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q15_12",
          "title": "Büyük Veri Kümelerinde Sıralama ve Filtreleme Hijyeni Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_15_12_1",
                              "question": "Büyük bir veri setinde Otomatik Filtrenin yarıda kesilmesine neden olan en yaygın veri hatası nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tablo içinde tamamen boş bırakılmış bir satırın bulunması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayıların büyük olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücrelerin sarı olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı tipinin Calibri olması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel boş satır gördüğünde tablonun bittiğini varsayar ve sonrasını filtreye dahil etmez.",
                              "measuredSkill": "Büyük Veri Seti Hijyen ve Güvenlik Standardı"
                    }
          ]
}
      }
    ]
  }
];
