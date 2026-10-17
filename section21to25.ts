import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_21_TO_25: CurriculumPhase[] = [
  {
    id: 21,
    category: "Harici Veriler & Dosya İşlemleri",
    title: "21. Harici Veriler ve Dosya İşlemleri",
    subtitle: "CSV, TXT, Web Verileri, Dosya Yolları, Bağlantı Yönetimi ve Dışa Aktarma",
    iconName: "Database",
    description: "CSV, TXT ve XLSX kaynaklarından veri alma, ayırıcı ve Türkçe karakter kodlama (UTF-8), canlı web tabloları, bağlantı yenileme ve dışa aktarma standartları.",
    lessons: [
      {
        id: "sec21_l1",
        phaseId: 21,
        unitId: "u21_1",
        title: "CSV ve Metin (TXT) Dosyalarından Veri Alma Mantığı",
        shortDesc: "ERP, CRM veya bankalardan indirilen virgül ve noktalı virgüllü dosyaları Excel'e içe aktarma.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Veri Alma",
        primaryGoal: "Veri > Metinden/CSV'den aracı ile doğru sütun yapısında veri yüklemek.",
        prerequisites: ["sec20_l11"],
        commonMistakes: ["CSV dosyasını çift tıklayarak açıp tüm verinin A sütununa sıkışmasına yol açmak"],
        successCriteria: "CSV içe aktarma yöntemini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Al", "CSV"],
        initialWorkbook: createTableSheet("s21_1", "CsvSayfasi", ["Sipariş No", "Müşteri", "Tutar (TL)"], [["CSV-101", "Özdemir Ticaret", 45000], ["CSV-102", "Yıldırım Ltd", 38000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "CSV ve Metin (TXT) Dosyalarından Veri Alma Mantığı",
                    "description": "Veri > Metinden/CSV'den aracı ile doğru sütun yapısında veri yüklemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_1",
                    "title": "CSV Dosyaları Neden Çift Tıklanmaz?",
                    "explanation": "CSV dosyalarını doğrudan çift tıklayarak açarsanız Excel bölgesel ayraçları yanlış yorumlayabilir. Veri > Metinden/CSV'den seçeneğiyle önizleme yaparak içe aktarmak kurumsal kuraldır.",
                    "speechText": "Doğru içe aktarma sihirbazı ayırıcıyı otomatik tanır ve sayıları bozulmadan sütunlara yerleştirir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t21_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine toplam sipariş tutarını '=TOPLA(C2:C3)' formülüyle yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "C4 hücresine '=TOPLA(C2:C3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! CSV ve Metin (TXT) Dosyalarından Veri Alma Mantığı görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q21_1",
          "title": "CSV ve Metin (TXT) Dosyalarından Veri Alma Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_1_1",
                              "question": "Bir CSV dosyasını sütunları bozulmadan Excel'e aktarmanın en güvenli yolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri sekmesinden 'Metinden/CSV'den' (From Text/CSV) aracını kullanmak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosyayı çift tıklamak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Not defterinden kopyalayıp yapıştırmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya uzantısını silmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri > Metinden/CSV'den sihirbazı ayraç ve karakter kodlamasını kontrol etme imkanı sunar.",
                              "measuredSkill": "CSV İçe Aktarma İlkeleri"
                    }
          ]
}
      },
      {
        id: "sec21_l2",
        phaseId: 21,
        unitId: "u21_2",
        title: "Ayırıcı ve Karakter Kodlama (UTF-8 vs ANSI) Sorunlarını Çözme",
        shortDesc: "Türkçe karakterlerin (ş, ç, ğ, ı) bozuk çıkmasını UTF-8 kodlama seçimiyle düzeltme.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Karakter Kodlama",
        primaryGoal: "Dosya Kaynağı (File Origin) kısmından 65001: Unicode (UTF-8) seçerek harfleri onarmak.",
        prerequisites: ["sec21_l1"],
        commonMistakes: ["Bozuk harfleri tek tek elle düzeltmeye çalışmak"],
        successCriteria: "Karakter kodlama dönüşümünü yapabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["UTF-8", "Karakter Kodlama"],
        initialWorkbook: createTableSheet("s21_2", "KodlamaSayfasi", ["Ham İsim", "Doğru Kodlama"], [["Ahmet YÄ±lmaz", "Ahmet Yılmaz"], ["Åžener Kaya", "Şener Kaya"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Ayırıcı ve Karakter Kodlama (UTF-8 vs ANSI) Sorunlarını Çözme",
                    "description": "Dosya Kaynağı (File Origin) kısmından 65001: Unicode (UTF-8) seçerek harfleri onarmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_2",
                    "title": "Bozuk Karakterlerin Sebebi: UTF-8",
                    "explanation": "CSV içe aktarırken harfler 'Ä±' gibi garip sembollere dönüşüyorsa dosya UTF-8 olarak kaydedilmiş demektir. İçe aktarma penceresinde Dosya Kaynağını '65001: Unicode (UTF-8)' yapmanız sorunu çözer.",
                    "speechText": "Uluslararası yazılımlardan gelen Türkçe verilerde UTF-8 ayarı hayat kurtarır.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t21_2_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine doğru karakter kodlama standardı olarak 'Unicode (UTF-8)' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Unicode (UTF-8)' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Ayırıcı ve Karakter Kodlama (UTF-8 vs ANSI) Sorunlarını Çözme görevini başarıyla tamamladınız.",
                              "expectedValue": "Unicode (UTF-8)"
                    }
          }
],
        quiz: {
          "id": "q21_2",
          "title": "Ayırıcı ve Karakter Kodlama (UTF-8 vs ANSI) Sorunlarını Çözme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_2_1",
                              "question": "Türkçe karakterlerin (ş, ğ, ı) bozuk çıkmaması için Dosya Kaynağı (File Origin) ne seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "65001: Unicode (UTF-8)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1252: Western European"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "MS-DOS"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "ASCII"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "UTF-8 kodlaması Türkçe dahil tüm modern karakter kümelerini doğru çözer.",
                              "measuredSkill": "UTF-8 Karakter Kodlama"
                    }
          ]
}
      },
      {
        id: "sec21_l3",
        phaseId: 21,
        unitId: "u21_3",
        title: "Birden Fazla Çalışma Kitabından Veri Çekme ve Bağlama",
        shortDesc: "Farklı Excel dosyalarındaki hücrelere ='[Bütçe2026.xlsx]Sayfa1'!$B$5 şeklinde harici bağlantı kurma.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Harici Bağlantılar",
        primaryGoal: "Harici dosya referanslarını yönetmek ve otomatik güncellemek.",
        prerequisites: ["sec21_l2"],
        commonMistakes: ["Kaynak dosya kapalıyken formülün tam dosya yolunu gösterdiğini görüp hata sanmak"],
        successCriteria: "Harici çalışma kitabı bağlantılarını yönetebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Harici Bağlantı"],
        initialWorkbook: createTableSheet("s21_3", "HariciBaglanti", ["Dosya Adı", "Aktarılan Veri", "Durum"], [["Satislar_Ocak.xlsx", "₺ 350.000", "Bağlı"], ["Satislar_Subat.xlsx", "₺ 420.000", "Bağlı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Birden Fazla Çalışma Kitabından Veri Çekme ve Bağlama",
                    "description": "Harici dosya referanslarını yönetmek ve otomatik güncellemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_3",
                    "title": "Dosyalar Arası Köprü Kurma",
                    "explanation": "İki dosya açıkken '=' tuşuna basıp diğer dosyadaki hücreye tıkladığınızda Excel dosya adını köşeli parantez içinde bağlar. Kaynak dosyadaki rakam değiştiğinde ana dosyanız da güncellenir.",
                    "speechText": "Konsolide bütçe ve şirket grup raporlarında onlarca bağımsız şube dosyasından veri toplamanın temel yöntemidir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t21_3_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine 2 dosyanın konsolide toplamını temsil eden '₺ 770.000' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'₺ 770.000' yazın.",
                              "B4 hücresine '₺ 770.000' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Birden Fazla Çalışma Kitabından Veri Çekme ve Bağlama görevini başarıyla tamamladınız.",
                              "expectedValue": "₺ 770.000"
                    }
          }
],
        quiz: {
          "id": "q21_3",
          "title": "Birden Fazla Çalışma Kitabından Veri Çekme ve Bağlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_3_1",
                              "question": "Başka bir Excel çalışma kitabındaki hücreye başvururken dosya adı nasıl gösterilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Köşeli parantez içinde: '[DosyaAdi.xlsx]'"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Süslü parantez içinde"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tırnak işareti içinde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Parantezsiz"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel harici dosya isimlerini '[Dosya.xlsx]Sayfa!A1' biçiminde köşeli parantezle belirtir.",
                              "measuredSkill": "Harici Çalışma Kitabı Başvurusu"
                    }
          ]
}
      },
      {
        id: "sec21_l4",
        phaseId: 21,
        unitId: "u21_4",
        title: "Web Sayfalarından Canlı Tablo / Döviz Kuru Verisi Çekme",
        shortDesc: "Veri > Web'den (From Web) seçeneğiyle bir internet sitesindeki canlı tabloyu Excel'e bağlama.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Web Verisi",
        primaryGoal: "Web URL adresini girerek HTML tablolarını dinamik çekmek.",
        prerequisites: ["sec21_l3"],
        commonMistakes: ["Web sayfasındaki tablonun JavaScript ile sonradan yüklendiği durumlarda URL'yi kontrol etmemek"],
        successCriteria: "Web veri entegrasyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Web'den Veri"],
        initialWorkbook: createTableSheet("s21_4", "WebVeriSayfasi", ["Döviz Cinsi", "Alış (TL)", "Satış (TL)"], [["USD", 34.2, 34.28], ["EUR", 37.15, 37.25]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Web Sayfalarından Canlı Tablo / Döviz Kuru Verisi Çekme",
                    "description": "Web URL adresini girerek HTML tablolarını dinamik çekmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_4",
                    "title": "İnternetten Canlı Veri Akışı",
                    "explanation": "TCMB veya finans sitelerindeki döviz kurlarını tek tıkla Excel'e bağlayabilirsiniz. Sayfayı yenilediğinizde kurlar internetten otomatik olarak son değerlerle tazelenir.",
                    "speechText": "Elle döviz kuru yazmak yerine canlı web bağlantısı kullanmak finans raporlarınızı otomatikleştirir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t21_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine web veri durumu olarak 'Canlı Bağlantı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Canlı Bağlantı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Web Sayfalarından Canlı Tablo / Döviz Kuru Verisi Çekme görevini başarıyla tamamladınız.",
                              "expectedValue": "Canlı Bağlantı"
                    }
          }
],
        quiz: {
          "id": "q21_4",
          "title": "Web Sayfalarından Canlı Tablo / Döviz Kuru Verisi Çekme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_4_1",
                              "question": "Bir web sitesindeki döviz tablosunu Excel'e canlı bağlamak için hangi menü kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri > Web'den (From Web)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ekle > Köprü"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Görünüm > Web Düzeni"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya > Paylaş"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veri sekmesindeki 'Web'den' aracı internet sayfalarındaki tabloları Excel'e dinamik bağlar.",
                              "measuredSkill": "Web Veri Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec21_l5",
        phaseId: 21,
        unitId: "u21_5",
        title: "Veri Bağlantıları ve Özellikleri (Connections) Yönetimi",
        shortDesc: "Çalışma kitabındaki tüm veri akışlarını tek bir pencereden görme ve yönetme.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Bağlantı Yönetimi",
        primaryGoal: "Sorgular ve Bağlantılar panelinde bağlantı adlarını ve türlerini incelemek.",
        prerequisites: ["sec21_l4"],
        commonMistakes: ["Kullanılmayan eski bağlantıları silmeyip dosyanın açılışını yavaşlatmak"],
        successCriteria: "Bağlantı yönetimini yapabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Bağlantılar"],
        initialWorkbook: createTableSheet("s21_5", "BaglantiYonetimSayfasi", ["Bağlantı Adı", "Kaynak Türü", "Durum"], [["Sorgu_DovizKurlari", "Web Tablosu", "Aktif"], ["Sorgu_MuhasebeCSV", "Metin Dosyası", "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Bağlantıları ve Özellikleri (Connections) Yönetimi",
                    "description": "Sorgular ve Bağlantılar panelinde bağlantı adlarını ve türlerini incelemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_5",
                    "title": "Merkezi Bağlantı Terminali",
                    "explanation": "Veri > Sorgular ve Bağlantılar penceresi dosyanızın hangi veritabanlarına, CSV'lere veya web sitelerine bağlı olduğunu tek ekranda listeler.",
                    "speechText": "Büyük kurumsal dosyalarda hangi tablonun nereden geldiğini denetlemek için bağlantı yöneticisi kullanılır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t21_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine sistem durumu olarak 'Bağlantılar Sağlıklı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bağlantılar Sağlıklı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Veri Bağlantıları ve Özellikleri (Connections) Yönetimi görevini başarıyla tamamladınız.",
                              "expectedValue": "Bağlantılar Sağlıklı"
                    }
          }
],
        quiz: {
          "id": "q21_5",
          "title": "Veri Bağlantıları ve Özellikleri (Connections) Yönetimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_5_1",
                              "question": "Çalışma kitabındaki tüm dış veri bağlantılarını listelemek için hangi panel açılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sorgular ve Bağlantılar (Queries & Connections)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazım Denetimi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İsim Yöneticisi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İzleme Penceresi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sorgular ve Bağlantılar paneli tüm harici veri köprülerini yönetir.",
                              "measuredSkill": "Bağlantı Terminali Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec21_l6",
        phaseId: 21,
        unitId: "u21_6",
        title: "Arka Planda Yenileme ve Otomatik Periyodik Güncelleme Ayarları",
        shortDesc: "Dosya açıldığında veya her 15 dakikada bir verilerin arka planda kendiliğinden güncellenmesi.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Otomatik Yenileme",
        primaryGoal: "Bağlantı Özellikleri penceresinde 'Dosyayı açarken yenile' ve 'Yenileme sıklığı: 15 dk' ayarlarını yapmak.",
        prerequisites: ["sec21_l5"],
        commonMistakes: ["Arka planda yenilemeyi açıp Excel'in işlem yaparken yanıt vermemesini engellememek"],
        successCriteria: "Otomatik yenileme kurallarını ayarlayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Bağlantı Özellikleri"],
        initialWorkbook: createTableSheet("s21_6", "OtomatikYenileme", ["Parametre", "Ayar Değeri"], [["Yenileme Aralığı", "15 Dakika"], ["Dosya Açılışında", "Otomatik Yenile"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Arka Planda Yenileme ve Otomatik Periyodik Güncelleme Ayarları",
                    "description": "Bağlantı Özellikleri penceresinde 'Dosyayı açarken yenile' ve 'Yenileme sıklığı: 15 dk' ayarlarını yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_6",
                    "title": "Kendi Kendini Güncelleyen Raporlar",
                    "explanation": "Bağlantı Özellikleri > Kullanım sekmesinde 'Dosya açılırken verileri yenile' kutusunu işaretlediğinizde, yönetici dosyayı her açtığında en güncel veriyi karşısında bulur.",
                    "speechText": "Böylece raporu her sabah el ile yenileme zahmetinden tamamen kurtulursunuz.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t21_6_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine yenileme standardı olarak 'Tam Otomatik Yenileme' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Tam Otomatik Yenileme' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Arka Planda Yenileme ve Otomatik Periyodik Güncelleme Ayarları görevini başarıyla tamamladınız.",
                              "expectedValue": "Tam Otomatik Yenileme"
                    }
          }
],
        quiz: {
          "id": "q21_6",
          "title": "Arka Planda Yenileme ve Otomatik Periyodik Güncelleme Ayarları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_6_1",
                              "question": "Raporun her açılışta en güncel verileri çekmesi için hangi ayar işaretlenmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dosyayı açarken verileri yenile (Refresh data when opening the file)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosyayı salt okunur aç"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Otomatik kaydetmeyi kapat"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreleri kilitle"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Bu ayar dosya her açıldığında arka plandaki sorguları otomatik tetikler.",
                              "measuredSkill": "Otomatik Yenileme Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec21_l7",
        phaseId: 21,
        unitId: "u21_7",
        title: "Dosya Yolu Değiştiğinde Bozuk Bağlantıları Onarma (Edit Links)",
        shortDesc: "Sunucu veya klasör yeri değişen kaynak dosyalardaki #BAŞV! hatalarını 'Kaynak Değiştir' ile onarma.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Bağlantı Onarma",
        primaryGoal: "Veri > Bağlantıları Düzenle (Edit Links) > Kaynağı Değiştir ile yeni klasör yolunu göstermek.",
        prerequisites: ["sec21_l6"],
        commonMistakes: ["Yolu değişen dosyayı bulamayıp tüm formülleri baştan yazmak"],
        successCriteria: "Bozuk dosya bağlantılarını onarabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Bağlantıları Düzenle"],
        initialWorkbook: createTableSheet("s21_7", "BaglantiOnarSayfasi", ["Eski Dosya Yolu", "Yeni Dosya Yolu", "Durum"], [["D:\\Satis\\2025.xlsx", "Z:\\Kurumsal\\Satis\\2025.xlsx", "Onarıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dosya Yolu Değiştiğinde Bozuk Bağlantıları Onarma (Edit Links)",
                    "description": "Veri > Bağlantıları Düzenle (Edit Links) > Kaynağı Değiştir ile yeni klasör yolunu göstermek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_7",
                    "title": "Kopan Bağlantıları Kurtarma",
                    "explanation": "Şirket sunucusundaki klasör adı değiştiğinde Excel dosyasındaki formüller hata verir. 'Bağlantıları Düzenle' penceresinden 'Kaynağı Değiştir' diyerek yeni konumu göstermek saniyeler içinde tüm formülleri tamir eder.",
                    "speechText": "Tek bir tıklamayla yüzlerce hücredeki formül yolunu topluca güncellemiş olursunuz.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t21_7_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine bağlantı durumu olarak 'Bağlantı Onarıldı' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Bağlantı Onarıldı' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Dosya Yolu Değiştiğinde Bozuk Bağlantıları Onarma (Edit Links) görevini başarıyla tamamladınız.",
                              "expectedValue": "Bağlantı Onarıldı"
                    }
          }
],
        quiz: {
          "id": "q21_7",
          "title": "Dosya Yolu Değiştiğinde Bozuk Bağlantıları Onarma (Edit Links) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_7_1",
                              "question": "Kaynak dosyanın klasörü değiştiğinde formülleri tek tek düzeltmek yerine hangi araç kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri > Bağlantıları Düzenle > Kaynağı Değiştir (Change Source)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Bul ve Değiştir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı Sil"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtre Uygula"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kaynağı Değiştir seçeneği yeni dosya yolunu tüm formüllere tek seferde uygular.",
                              "measuredSkill": "Bozuk Bağlantı Onarımı"
                    }
          ]
}
      },
      {
        id: "sec21_l8",
        phaseId: 21,
        unitId: "u21_8",
        title: "Verileri CSV, TXT ve PDF Olarak Dışa Aktarma Standartları",
        shortDesc: "Excel tablosunu diğer muhasebe yazılımlarının okuyabileceği noktalı virgüllü CSV veya temiz PDF'e çevirme.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Dışa Aktarma",
        primaryGoal: "Farklı Kaydet (Save As) > CSV UTF-8 (Virgülle Ayrılmış) veya PDF formatını seçmek.",
        prerequisites: ["sec21_l7"],
        commonMistakes: ["Çok sayfalı dosyayı CSV kaydederken yalnızca aktif sayfanın kaydedileceği uyarısını dikkate almamak"],
        successCriteria: "Farklı formatlarda dışa aktarabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dışa Aktar", "PDF", "CSV"],
        initialWorkbook: createTableSheet("s21_8", "DisaAktarSayfasi", ["Format", "Kullanım Amacı", "Standart"], [["CSV (UTF-8)", "Sistemlere Veri Aktarımı", "Standart"], ["PDF", "Yöneticiye Rapor Gönderimi", "Baskıya Hazır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Verileri CSV, TXT ve PDF Olarak Dışa Aktarma Standartları",
                    "description": "Farklı Kaydet (Save As) > CSV UTF-8 (Virgülle Ayrılmış) veya PDF formatını seçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_8",
                    "title": "Doğru Formatla Dışa Aktarma",
                    "explanation": "Muhasebe veya ERP'ye veri yüklerken 'CSV UTF-8' seçilir. Yönetim kuruluna veya müşteriye resmi rapor gönderirken değiştirilemez 'PDF' formatı tercih edilir.",
                    "speechText": "Unutmayın: CSV formatı yalnızca aktif sayfayı ve düz metinleri saklar; formüller ve grafikler CSV'de kaydedilmez.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t21_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine aktarım durumu olarak 'Başarılı Dışa Aktarım' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Başarılı Dışa Aktarım' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Verileri CSV, TXT ve PDF Olarak Dışa Aktarma Standartları görevini başarıyla tamamladınız.",
                              "expectedValue": "Başarılı Dışa Aktarım"
                    }
          }
],
        quiz: {
          "id": "q21_8",
          "title": "Verileri CSV, TXT ve PDF Olarak Dışa Aktarma Standartları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_8_1",
                              "question": "Bir Excel dosyasını CSV olarak kaydettiğinizde hangisi gerçekleşir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca aktif sayfa düz metin olarak kaydedilir, grafikler ve biçimler silinir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm sayfalar ve formüller korunur"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosya şifrelenir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya boyutu 10 katına çıkar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "CSV salt metin tabanlı bir formattır; grafik, biçimlendirme ve formülleri saklamaz.",
                              "measuredSkill": "Dışa Aktarma Formatları"
                    }
          ]
}
      },
      {
        id: "sec21_l9",
        phaseId: 21,
        unitId: "u21_9",
        title: "Harici Bağlantı Güvenliği ve Güvenilen Konumlar",
        shortDesc: "İnternetten indirilen dosyalarda beliren sarı Güvenlik Uyarısı bandını ve engellemeleri aşma.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Güvenlik",
        primaryGoal: "Güven Merkezi (Trust Center) > Güvenilen Konumlar ekleyerek şirket ağını yetkilendirmek.",
        prerequisites: ["sec21_l8"],
        commonMistakes: ["Güvenilmeyen kaynaklardan gelen harici bağlantıları körü körüne 'İçeriği Etkinleştir' ile çalıştırmak"],
        successCriteria: "Veri güvenliği ilkelerini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Güvenlik Uyarısı"],
        initialWorkbook: createTableSheet("s21_9", "GuvenlikSayfasi", ["Uyarı Türü", "İşlem Kuralı"], [["Sarı Güvenlik Bandı", "Kaynak güvenilirse İçeriği Etkinleştir"], ["Kırmızı Makro Engeli", "Güvenilen Konuma Ekle"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Harici Bağlantı Güvenliği ve Güvenilen Konumlar",
                    "description": "Güven Merkezi (Trust Center) > Güvenilen Konumlar ekleyerek şirket ağını yetkilendirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_9",
                    "title": "Güvenlik Kalkanı",
                    "explanation": "Excel, bilgisayarınızı korumak için dışarıdan gelen dosyalardaki harici bağlantıları otomatik engeller. Dosya güvenilir bir şirket sunucusundaysa 'İçeriği Etkinleştir' diyerek bağlantıları açarız.",
                    "speechText": "Şirket ortak klasörünü 'Güvenilen Konum' olarak tanımlamak her açılışta çıkan güvenlik uyarılarını kalıcı olarak çözer.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t21_9_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine güvenlik standardı olarak 'Güvenilen Ağ Konumu' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Güvenilen Ağ Konumu' yazın.",
                              "B4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Harici Bağlantı Güvenliği ve Güvenilen Konumlar görevini başarıyla tamamladınız.",
                              "expectedValue": "Güvenilen Ağ Konumu"
                    }
          }
],
        quiz: {
          "id": "q21_9",
          "title": "Harici Bağlantı Güvenliği ve Güvenilen Konumlar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_9_1",
                              "question": "Şirket ortak klasöründeki dosyaların her açılışta güvenlik uyarısı vermemesi için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Klasör yolu Güven Merkezi'nde 'Güvenilen Konumlar' listesine eklenmelidir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Antivirüs programı kapatılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel silinmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İnternet bağlantısı kesilmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Güvenilen Konumlar klasörü Excel'e bu lokasyondaki dosyalara güvenebileceğini söyler.",
                              "measuredSkill": "Excel Güvenlik Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec21_l10",
        phaseId: 21,
        unitId: "u21_10",
        title: "Büyük Dosya Boyutlarını Optimize Etme ve Bağlantı Temizliği",
        shortDesc: "Harici veri çeken ve şişen dosyaların boyutunu düşürme ve gereksiz bağlantıları koparma (Break Link).",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Dosya Optimizasyonu",
        primaryGoal: "Bağlantıları Düzenle > Bağlantıyı Kes (Break Link) ile formülleri sabit değerlere çevirip bağımsızlaştırmak.",
        prerequisites: ["sec21_l9"],
        commonMistakes: ["Bağlantıyı kestikten sonra geri alınamayacağını ve formüllerin değerlere dönüştüğünü unutmak"],
        successCriteria: "Dosya boyutunu ve bağlantıları optimize edebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Bağlantıyı Kes"],
        initialWorkbook: createTableSheet("s21_10", "OptimizasyonSayfasi", ["Optimizasyon İşlemi", "Sonuç"], [["Eski Bağlantıları Kes", "Dış dosya bağımlılığı biter"], ["Gereksiz Aralığı Temizle", "Boyut 40 MB'tan 3 MB'a düşer"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Büyük Dosya Boyutlarını Optimize Etme ve Bağlantı Temizliği",
                    "description": "Bağlantıları Düzenle > Bağlantıyı Kes (Break Link) ile formülleri sabit değerlere çevirip bağımsızlaştırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_10",
                    "title": "Dosyayı Özgürleştirme: Bağlantıyı Kes",
                    "explanation": "Yıl sonu geldiğinde artık değişmeyecek eski bütçe bağlantılarını 'Bağlantıyı Kes' (Break Link) yaparak sabit değerlere dönüştürürüz. Dosya bağımsızlaşır ve boyutu küçülür.",
                    "speechText": "Dışarıdaki bir tedarikçiye dosya gönderirken şirket sunucusuna bağlı harici formülleri kesinlikle koparmalısınız.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t21_10_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine optimizasyon sonucu olarak 'Bağlantısız Statik Rapor' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Bağlantısız Statik Rapor' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Büyük Dosya Boyutlarını Optimize Etme ve Bağlantı Temizliği görevini başarıyla tamamladınız.",
                              "expectedValue": "Bağlantısız Statik Rapor"
                    }
          }
],
        quiz: {
          "id": "q21_10",
          "title": "Büyük Dosya Boyutlarını Optimize Etme ve Bağlantı Temizliği Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_10_1",
                              "question": "Harici bir dosyaya olan formül bağımlılığını kaldırıp sonucu kalıcı değere çevirmek için hangi buton kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Bağlantıyı Kes (Break Link)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Değerleri Güncelle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Kaynağı Aç"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Durumu Kontrol Et"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Bağlantıyı Kes işlemi formülleri static değerlere dondurarak harici dosya bağını koparır.",
                              "measuredSkill": "Harici Bağlantı Dondurma"
                    }
          ]
}
      },
      {
        id: "sec21_l11",
        phaseId: 21,
        unitId: "u21_11",
        title: "Harici Veri Entegrasyonu Bölüm Projesi",
        shortDesc: "CSV içe aktarma, web döviz kuru bağlama ve otomatik yenilemeli konsolide tablo kurma bitirme görevi.",
        category: "Harici Veriler & Dosya İşlemleri",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Harici veri kaynaklarını tek bir dinamik konsolidasyon tablosunda birleştirmek.",
        prerequisites: ["sec21_l10"],
        commonMistakes: ["Web döviz kuru ile yerel ciro çarpılırken sayısal format uyumsuzluklarını gidermemek"],
        successCriteria: "Uçtan uca harici veri entegrasyonu yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Harici Veri Projesi"],
        initialWorkbook: createTableSheet("s21_11", "HariciVeriProje", ["Kaynak", "Tutar (USD)", "Kur (TL)", "Toplam Tutar (TL)"], [["Yurtdışı Şube A", 50000, 34.0, ""], ["Yurtdışı Şube B", 75000, 34.0, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Harici Veri Entegrasyonu Bölüm Projesi",
                    "description": "Harici veri kaynaklarını tek bir dinamik konsolidasyon tablosunda birleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts21_11",
                    "title": "Canlı Harici Veri Entegrasyonu",
                    "explanation": "Bu projede harici CSV dosyasından USD cinsinden satışlar çekildi, webden canlı kur alındı ve D sütununda '=B2 * C2' ile anlık TL karşılıkları hesaplandı.",
                    "speechText": "Artık şirketinizin tüm dış veri akışlarını otomatikleştiren sağlam bir veri entegrasyon uzmanısınız.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t21_11_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine ilk şubenin TL tutarını '=B2*C2' formülüyle hesaplayın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "=B2*C2 yazın.",
                              "D2 hücresine '=B2*C2' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Harici Veri Entegrasyonu Bölüm Projesi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "B2*C2",
                                        "B2 * C2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q21_11",
          "title": "Harici Veri Entegrasyonu Bölüm Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_21_11_1",
                              "question": "Harici veri entegrasyonu yapılmış bir raporun en büyük iş avantajı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Verilerin tek tıkla arka planda güncellenmesi ve insan hatasının sıfırlanması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Daha çok sayfa açması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Renkli olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formüllerin gizlenmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Otomatik harici veri entegrasyonu kopyala-yapıştır eforunu bitirir ve hata payını yok eder.",
                              "measuredSkill": "Konsolide Veri Entegrasyonu"
                    }
          ]
}
      }
    ]
  },
  {
    id: 22,
    category: "Power Query & ETL",
    title: "22. Power Query ile İleri Veri Dönüştürme",
    subtitle: "ETL Mimarisi, M Dili, Merge, Append, Unpivot, Klasör Birleştirme ve Otomasyon",
    iconName: "Workflow",
    description: "Power Query arayüzü, Excel/CSV/klasör veri alma, veri tipleri, satır/sütun dönüşümleri, metin temizliği, sütun bölme/birleştirme, özel/koşullu sütunlar, Group By, Merge (Join), Append, Unpivot, tarih dönüşümleri, null/hata yönetimi, parametreler, M dili ve gerçek veri hazırlama projesi.",
    lessons: [
      {
        id: "sec22_l1",
        phaseId: 22,
        unitId: "u22_1",
        title: "Power Query Arayüzü ve Uygulanan Adımlar (Applied Steps) Mantığı",
        shortDesc: "ETL (Extract, Transform, Load) sürecini ve her işlemin kaydedildiği Adımlar panelini anlama.",
        category: "Power Query & ETL",
        groupTitle: "Arayüz ve Mantık",
        primaryGoal: "Uygulanan Adımlar panelinde adımları izlemek, silmek ve yeniden sıralamak.",
        prerequisites: ["sec21_l11"],
        commonMistakes: ["Power Query'de Ctrl+Z yapmaya çalışmak (adımlar panelindeki çarpı simgesiyle geri alınır)"],
        successCriteria: "Power Query adımlar mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 12,
        functionsUsed: ["Power Query"],
        initialWorkbook: createTableSheet("s22_1", "PowerQueryArayuz", ["Adım Adı", "İşlem", "Durum"], [["Kaynak (Source)", "Excel Tablosu Yüklendi", "Tamamlandı"], ["Değiştirilen Tür", "Metin ve Sayılar Ayrıldı", "Tamamlandı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Power Query Arayüzü ve Uygulanan Adımlar (Applied Steps) Mantığı",
                    "description": "Uygulanan Adımlar panelinde adımları izlemek, silmek ve yeniden sıralamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_1",
                    "title": "Kaydedilen Adımların Gücü",
                    "explanation": "Power Query yaptığınız her fare tıklamasını bir 'Uygulanan Adım' olarak kaydeder. Yarın yeni veri geldiğinde tek tıkla aynı 20 adımı milisaniyeler içinde tekrarlar.",
                    "speechText": "Makro yazmaya gerek kalmadan tüm veri temizleme sürecinizi otomatikleştiren çağdaş veri motoru Power Query'dir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine adım durumu olarak 'Otomatik Adım Kaydı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Otomatik Adım Kaydı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Power Query Arayüzü ve Uygulanan Adımlar (Applied Steps) Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "Otomatik Adım Kaydı"
                    }
          }
],
        quiz: {
          "id": "q22_1",
          "title": "Power Query Arayüzü ve Uygulanan Adımlar (Applied Steps) Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_1_1",
                              "question": "Power Query'de yapılan hatalı bir işlemi geri almak için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağdaki Uygulanan Adımlar (Applied Steps) listesindeki adımın yanındaki 'X' simgesine basılır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Bilgisayar yeniden başlatılır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosya silinir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreye çift tıklanır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Uygulanan Adımlar panelindeki çarpı simgesi o dönüşüm adımını iptal eder.",
                              "measuredSkill": "Uygulanan Adımlar Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec22_l2",
        phaseId: 22,
        unitId: "u22_2",
        title: "Excel, CSV ve Klasörlerden Veri Alma",
        shortDesc: "Veri Al (Get Data) menüsüyle farklı kaynaklardan Power Query editörüne veri aktarma.",
        category: "Power Query & ETL",
        groupTitle: "Veri Alma",
        primaryGoal: "Farklı dosya formatlarını Power Query'ye bağlayabilmek.",
        prerequisites: ["sec22_l1"],
        commonMistakes: ["Doğrudan Yükle (Load) deyip temizleme yapmadan veriyi ham olarak sayfaya basmak"],
        successCriteria: "Veri alma ve Dönüştür seçeneğini uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 12,
        functionsUsed: ["Veri Al", "Power Query"],
        initialWorkbook: createTableSheet("s22_2", "VeriAlmaSayfasi", ["Kaynak Türü", "Bağlantı Türü", "İşlem"], [["Excel Çalışma Kitabı", "Yerel Dosya", "Dönüştür"], ["CSV Dosyası", "ERP Çıktısı", "Dönüştür"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Excel, CSV ve Klasörlerden Veri Alma",
                    "description": "Farklı dosya formatlarını Power Query'ye bağlayabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_2",
                    "title": "Veriyi Dönüştür (Transform Data) Butonu",
                    "explanation": "Veri Al dedikten sonra gelen önizleme penceresinde asla doğrudan 'Yükle'ye basmayın; daima 'Veriyi Dönüştür'e basarak Power Query editörüne geçin.",
                    "speechText": "Böylece hatalı satırları, boşlukları ve yanlış sütunları daha Excel sayfasına girmeden temizleyebilirsiniz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_2_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine önerilen işlem adımı olarak 'Veriyi Dönüştür' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Veriyi Dönüştür' yazın.",
                              "C4 hücresine 'Veriyi Dönüştür' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Excel, CSV ve Klasörlerden Veri Alma görevini başarıyla tamamladınız.",
                              "expectedValue": "Veriyi Dönüştür"
                    }
          }
],
        quiz: {
          "id": "q22_2",
          "title": "Excel, CSV ve Klasörlerden Veri Alma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_2_1",
                              "question": "Power Query önizleme penceresinde veriyi temizlemek için hangi butona basılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veriyi Dönüştür (Transform Data)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yükle (Load)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İptal"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yardım"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Veriyi Dönüştür butonu Power Query editörünü açarak temizlik yapmanızı sağlar.",
                              "measuredSkill": "Veri Yükleme Stratejisi"
                    }
          ]
}
      },
      {
        id: "sec22_l3",
        phaseId: 22,
        unitId: "u22_3",
        title: "Veri Türlerini Doğru Belirleme (Data Types)",
        shortDesc: "Sayıların metin (ABC) olarak algılanıp toplanamamasını 123 (Tam Sayı) veya Ondalık Sayıya çevirme.",
        category: "Power Query & ETL",
        groupTitle: "Veri Tipleri",
        primaryGoal: "Sütun başlığındaki simgeye tıklayarak Metin, Tam Sayı, Para Birimi veya Tarih atamak.",
        prerequisites: ["sec22_l2"],
        commonMistakes: ["Sayısal tutarların başında ABC simgesi varken PivotTable'a aktarıp toplam alamamak"],
        successCriteria: "Veri türü dönüşümlerini hatasız yapabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Türleri"],
        initialWorkbook: createTableSheet("s22_3", "VeriTuruSayfasi", ["Sütun Adı", "Mevcut Tür", "Doğru Tür"], [["Fatura Tutarı", "Metin (ABC)", "Ondalık Sayı (1.2)"], ["Sipariş Tarihi", "Metin (ABC)", "Tarih"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Türlerini Doğru Belirleme (Data Types)",
                    "description": "Sütun başlığındaki simgeye tıklayarak Metin, Tam Sayı, Para Birimi veya Tarih atamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_3",
                    "title": "Sütun Başlığındaki Küçük İkonlar",
                    "explanation": "Her sütun başlığının solunda bir veri tipi ikonu vardır: ABC (Metin), 123 (Tam Sayı), 1.2 (Ondalık), Takvim (Tarih). Sayıların toplanabilmesi için mutlaka 123 veya 1.2 olmalıdır.",
                    "speechText": "Yanlış veri türü tüm analiz ve raporları bozar; Power Query'de her sütunun tipini ilk adımda doğrularız.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_3_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine ciro sütunu için doğru veri türü olarak 'Ondalık Sayı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Ondalık Sayı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Veri Türlerini Doğru Belirleme (Data Types) görevini başarıyla tamamladınız.",
                              "expectedValue": "Ondalık Sayı"
                    }
          }
],
        quiz: {
          "id": "q22_3",
          "title": "Veri Türlerini Doğru Belirleme (Data Types) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_3_1",
                              "question": "Power Query'de bir sütunun matematiksel olarak toplanabilmesi için türü ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tam Sayı (Whole Number) veya Ondalık Sayı (Decimal Number)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin (Text)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tarih"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İkili"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Metin türündeki sayılar toplanamaz; sayısal türe dönüştürülmelidir.",
                              "measuredSkill": "Veri Türü Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec22_l4",
        phaseId: 22,
        unitId: "u22_4",
        title: "Satır ve Sütun Dönüşümleri (Satırları Kaldır & İlk Satırı Başlık Yap)",
        shortDesc: "ERP raporlarındaki ilk 4 boş başlık satırını kaldırma ve tablonun gerçek başlığını tepeye taşıma.",
        category: "Power Query & ETL",
        groupTitle: "Satır ve Sütun",
        primaryGoal: "İlk Satırı Üstbilgi Olarak Kullan (Use First Row as Headers) ve Üst Satırları Kaldır araçlarını kullanmak.",
        prerequisites: ["sec22_l3"],
        commonMistakes: ["Sütun1, Sütun2 başlıkları varken ilk satırdaki gerçek başlıkları fark etmemek"],
        successCriteria: "Satır ve sütun temizliğini yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Satır Dönüşümleri"],
        initialWorkbook: createTableSheet("s22_4", "SatirDonusumSayfasi", ["Mevcut Başlık", "Gerçek Başlık", "Durum"], [["Sütun1", "Personel Adı", "Üstbilgi Yapıldı"], ["Sütun2", "Maaş", "Üstbilgi Yapıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satır ve Sütun Dönüşümleri (Satırları Kaldır & İlk Satırı Başlık Yap)",
                    "description": "İlk Satırı Üstbilgi Olarak Kullan (Use First Row as Headers) ve Üst Satırları Kaldır araçlarını kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_4",
                    "title": "İlk Satırı Başlık Yap Butonu",
                    "explanation": "ERP'den gelen raporlarda tablonun başlığı ilk satırda veri gibi durabilir. Giriş sekmesindeki 'İlk Satırı Üstbilgi Olarak Kullan' butonuna tek tıkla başlıkları doğru yerine oturturuz.",
                    "speechText": "Üst Satırları Kaldır (Remove Top Rows) ile raporun üstündeki şirket logosu veya tarih gibi gereksiz satırları sileriz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine işlem adı olarak 'İlk Satırı Üstbilgi Yap' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'İlk Satırı Üstbilgi Yap' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Satır ve Sütun Dönüşümleri (Satırları Kaldır & İlk Satırı Başlık Yap) görevini başarıyla tamamladınız.",
                              "expectedValue": "İlk Satırı Üstbilgi Yap"
                    }
          }
],
        quiz: {
          "id": "q22_4",
          "title": "Satır ve Sütun Dönüşümleri (Satırları Kaldır & İlk Satırı Başlık Yap) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_4_1",
                              "question": "Tablodaki ilk satırı sütun başlıklarına taşımak için hangi buton kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İlk Satırı Üstbilgi Olarak Kullan (Use First Row as Headers)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Satır Ekle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sütun Sil"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtrele"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Bu araç ilk veri satırını tablonun kalıcı sütun başlığına yükseltir.",
                              "measuredSkill": "Başlık Satırı Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec22_l5",
        phaseId: 22,
        unitId: "u22_5",
        title: "Metin Temizliği ve Değer Değiştirme (Replace Values)",
        shortDesc: "Hücre içi görünmez boşlukları kırpma, büyük harfe çevirme ve 'N/A' değerlerini sıfırla değiştirme.",
        category: "Power Query & ETL",
        groupTitle: "Metin Temizliği",
        primaryGoal: "Dönüştür > Biçim > Kırp ve Değerleri Değiştir (Replace Values) komutlarını uygulamak.",
        prerequisites: ["sec22_l4"],
        commonMistakes: ["Sayısal bir sütundaki 'Bilinmiyor' metnini silmeden sütun türünü sayı yapmaya çalışıp hata almak"],
        successCriteria: "Metin temizliği ve değer değiştirme yapabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Kırp", "Değerleri Değiştir"],
        initialWorkbook: createTableSheet("s22_5", "DegerDegistirSayfasi", ["Eski Değer", "Yeni Değer", "Uygulama"], [["N/A", "0", "Değer Değiştir"], ["  İstanbul  ", "İstanbul", "Kırp (Trim)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metin Temizliği ve Değer Değiştirme (Replace Values)",
                    "description": "Dönüştür > Biçim > Kırp ve Değerleri Değiştir (Replace Values) komutlarını uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_5",
                    "title": "Değerleri Değiştir Zekası",
                    "explanation": "Sağ tık > Değerleri Değiştir seçeneğiyle sütundaki tüm 'Yok' veya 'Tanımsız' metinlerini tek hamlede '0' veya 'Diğer' ile değiştirebilirsiniz.",
                    "speechText": "Dönüştür > Biçim > Kırp (Trim) ile hücrelerin başındaki ve sonundaki görünmeyen tüm gereksiz boşluklar silinir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine temizlik işlemi olarak 'Kırp ve Değiştir' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Kırp ve Değiştir' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Metin Temizliği ve Değer Değiştirme (Replace Values) görevini başarıyla tamamladınız.",
                              "expectedValue": "Kırp ve Değiştir"
                    }
          }
],
        quiz: {
          "id": "q22_5",
          "title": "Metin Temizliği ve Değer Değiştirme (Replace Values) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_5_1",
                              "question": "Power Query'de sütundaki belirli bir hatalı metni topluca başka bir değerle değiştirmek için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağ Tık > Değerleri Değiştir (Replace Values)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütunu Sil"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Adı Değiştir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sırala"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değerleri Değiştir komutu sütundaki aranan metni yenisiyle otomatik ikame eder.",
                              "measuredSkill": "Veri Standardizasyonu"
                    }
          ]
}
      },
      {
        id: "sec22_l6",
        phaseId: 22,
        unitId: "u22_6",
        title: "Sütun Bölme ve Birleştirme (Split & Merge Columns)",
        shortDesc: "Ayırıcıya (Tire, Boşluk, Nokta) veya karakter sayısına göre sütunları bölme ve birleştirme.",
        category: "Power Query & ETL",
        groupTitle: "Sütun Dönüşümleri",
        primaryGoal: "Sütunu Böl > Ayırıcıya Göre (By Delimiter) ve Sütunları Birleştir komutlarını kullanmak.",
        prerequisites: ["sec22_l5"],
        commonMistakes: ["Bölme işleminde her ayırıcı örneğinde böl seçip gerekenden çok sütun üretmek"],
        successCriteria: "Sütun bölme ve birleştirme yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Sütunu Böl", "Sütunları Birleştir"],
        initialWorkbook: createTableSheet("s22_6", "SutunBolSayfasi", ["Ham Kod", "Kategori Kodu", "Sıra No"], [["PRD-1001", "PRD", "1001"], ["SRV-2005", "SRV", "2005"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sütun Bölme ve Birleştirme (Split & Merge Columns)",
                    "description": "Sütunu Böl > Ayırıcıya Göre (By Delimiter) ve Sütunları Birleştir komutlarını kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_6",
                    "title": "Ayırıcıya Göre Sütun Bölme",
                    "explanation": "Tire (-) işaretinden böl dediğinizde Power Query tek sütunu anında 'Kategori' ve 'Sıra No' olarak ikiye böler. İki sütunu seçip 'Sütunları Birleştir' dediğinizde ise araya boşluk koyarak tek sütun yapar.",
                    "speechText": "Metin formülleriyle dakikalarca uğraşmak yerine tek bir tıklamayla sütunları ayrıştırıp birleştirebilirsiniz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_6_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine ayrıştırma yöntemi olarak 'Tire ile Sütun Bölme' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Tire ile Sütun Bölme' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Sütun Bölme ve Birleştirme (Split & Merge Columns) görevini başarıyla tamamladınız.",
                              "expectedValue": "Tire ile Sütun Bölme"
                    }
          }
],
        quiz: {
          "id": "q22_6",
          "title": "Sütun Bölme ve Birleştirme (Split & Merge Columns) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_6_1",
                              "question": "Power Query'de 'PRD-1001' kodunu ikiye bölmek için hangi yöntem kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütunu Böl > Ayırıcıya Göre (Tire -)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütunu Sil"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Veri Türünü Değiştir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Gruplandır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ayırıcıya Göre bölme işlemi tire karakterini baz alarak iki sütun üretir.",
                              "measuredSkill": "Sütun Bölme Teknikleri"
                    }
          ]
}
      },
      {
        id: "sec22_l7",
        phaseId: 22,
        unitId: "u22_7",
        title: "Özel ve Koşullu Sütunlar (Custom & Conditional Columns)",
        shortDesc: "Sütun Ekle sekmesinden mantıksal kurallarla (EĞER gibi) yeni hesaplanmış sütunlar türetme.",
        category: "Power Query & ETL",
        groupTitle: "Hesaplanmış Sütunlar",
        primaryGoal: "Koşullu Sütun Ekle (Conditional Column) arayüzünde If / Else mantığı kurmak.",
        prerequisites: ["sec22_l6"],
        commonMistakes: ["Büyük harf / küçük harf duyarlılığına dikkat etmeyip koşulun eşleşmemesine yol açmak"],
        successCriteria: "Koşullu ve özel sütun ekleyebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Koşullu Sütun", "Özel Sütun"],
        initialWorkbook: createTableSheet("s22_7", "KosulluSutunSayfasi", ["Tutar", "Limit Durumu", "Kural"], [[150000, "Büyük Satış", "Tutar > 100000"], [45000, "Standart", "Tutar <= 100000"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel ve Koşullu Sütunlar (Custom & Conditional Columns)",
                    "description": "Koşullu Sütun Ekle (Conditional Column) arayüzünde If / Else mantığı kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_7",
                    "title": "Formülsüz EĞER Mantığı: Koşullu Sütun",
                    "explanation": "Sütun Ekle > Koşullu Sütun seçtiğinizde açılan sihirbazda: 'Eğer Tutar büyüktür 100000 ise Çıktı: Büyük Satış, Değilse: Standart' tanımlanır.",
                    "speechText": "Karmaşık iç içe formüller yazmadan görsel sihirbazla her türlü kategorizasyon sütununu üretebilirsiniz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_7_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine kural durumu olarak 'Dinamik Koşullu Sütun' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Dinamik Koşullu Sütun' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Özel ve Koşullu Sütunlar (Custom & Conditional Columns) görevini başarıyla tamamladınız.",
                              "expectedValue": "Dinamik Koşullu Sütun"
                    }
          }
],
        quiz: {
          "id": "q22_7",
          "title": "Özel ve Koşullu Sütunlar (Custom & Conditional Columns) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_7_1",
                              "question": "Power Query'de görsel sihirbazla If/Else mantığı kurup yeni sütun üretmek için hangisi kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Koşullu Sütun (Conditional Column)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütunu Sil"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Veri Türü"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yenile"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Koşullu Sütun sihirbazı kod yazmadan If / Else mantığıyla türetilmiş sütun açar.",
                              "measuredSkill": "Koşullu Sütun Üretimi"
                    }
          ]
}
      },
      {
        id: "sec22_l8",
        phaseId: 22,
        unitId: "u22_8",
        title: "Gruplama ve Toplama (Group By) ile Özet Tablolar",
        shortDesc: "Milyonlarca satırlık detay veriyi kategori bazında gruplayarak toplam ciro ve işlem sayısını çıkarma.",
        category: "Power Query & ETL",
        groupTitle: "Gruplandırma",
        primaryGoal: "Dönüştür > Gruplandır (Group By) aracı ile özetleme işlemleri tanımlamak.",
        prerequisites: ["sec22_l7"],
        commonMistakes: ["Detay satırların kaybolacağını bilmeden ana sorguda gruplama yapmak (Referans sorgu açılmalıdır)"],
        successCriteria: "Group By dönüşümünü yapabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Group By"],
        initialWorkbook: createTableSheet("s22_8", "GroupBySayfasi", ["Bölge", "Toplam Ciro", "İşlem Sayısı"], [["Marmara", 1250000, 45], ["Ege", 850000, 30]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Gruplama ve Toplama (Group By) ile Özet Tablolar",
                    "description": "Dönüştür > Gruplandır (Group By) aracı ile özetleme işlemleri tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_8",
                    "title": "Veriyi Özetleme ve Sıkıştırma",
                    "explanation": "Group By aracı veriyi belirlenen sütuna göre gruplar. Aynı anda hem 'Toplam Ciro' sütununu toplar, hem de 'İşlem Sayısı' için satırları sayar.",
                    "speechText": "Ağır veri setlerini Excel sayfasına çekmeden önce Power Query içinde gruplayarak dosyayı hafifletiriz.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t22_8_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine 2 bölgenin toplam cirosunu '=TOPLA(B2:B3)' formülüyle hesaplayın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B4 hücresine '=TOPLA(B2:B3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Gruplama ve Toplama (Group By) ile Özet Tablolar görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_8",
          "title": "Gruplama ve Toplama (Group By) ile Özet Tablolar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_8_1",
                              "question": "Power Query'de Group By (Gruplandır) komutunun ana görevi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Belirli sütunlara göre verileri özetleyip toplam, ortalama veya sayı hesaplamak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütun adlarını değiştirmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücreleri boyamak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosyayı kilitlemek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Group By SQL'deki GROUP BY mantığıyla veriyi kategorize edip toplulaştırır.",
                              "measuredSkill": "Veri Özetleme ve Group By"
                    }
          ]
}
      },
      {
        id: "sec22_l9",
        phaseId: 22,
        unitId: "u22_9",
        title: "Merge ile Tabloları Birleştirme (DÜŞEYARA'ya Çağdaş Alternatif)",
        shortDesc: "İki farklı tabloyu ortak bir anahtar (ID) sütunu üzerinden SQL Join mantığıyla birleştirme.",
        category: "Power Query & ETL",
        groupTitle: "Merge (Join)",
        primaryGoal: "Sorguları Birleştir (Merge Queries) ve Left Outer / Inner Join türlerini kullanmak.",
        prerequisites: ["sec22_l8"],
        commonMistakes: ["Birleştirme sonrası yeni sütundaki genişletme (Expand) ikonuna basmayı unutmak"],
        successCriteria: "Merge işlemlerini yönetebilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Merge", "Join"],
        initialWorkbook: createTableSheet("s22_9", "MergeSayfasi", ["Sipariş ID", "Ürün Adı", "Birim Fiyat", "Müşteri Adı"], [["SP-01", "Laptop", 35000, "Ahmet Yılmaz"], ["SP-02", "Monitör", 8000, "Selin Kaya"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Merge ile Tabloları Birleştirme (DÜŞEYARA'ya Çağdaş Alternatif)",
                    "description": "Sorguları Birleştir (Merge Queries) ve Left Outer / Inner Join türlerini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_9",
                    "title": "DÜŞEYARA'ya Elveda: Merge Queries",
                    "explanation": "Sipariş tablosu ile Müşteri tablosunu 'Müşteri ID' üzerinden eşleştirerek tek tıkla müşterinin adını, şehrini ve telefonunu siparişlerin yanına çekeriz.",
                    "speechText": "Binlerce DÜŞEYARA formülü yazıp Excel'i kasmak yerine Merge işlemiyle arka planda sıfır maliyetle birleştirme yapılır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_9_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 2 siparişin toplam fiyatını '=TOPLA(C2:C3)' formülüyle yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=TOPLA(C2:C3) yazın.",
                              "C4 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Merge ile Tabloları Birleştirme (DÜŞEYARA'ya Çağdaş Alternatif) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_9",
          "title": "Merge ile Tabloları Birleştirme (DÜŞEYARA'ya Çağdaş Alternatif) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_9_1",
                              "question": "Sol tablodaki tüm kayıtları koruyup sağ tablodan eşleşenleri çekmek için hangi Join türü kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sol Dış (Left Outer)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sağ Dış (Right Outer)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca Eşleşenler (Inner)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tam Dış (Full Outer)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Left Outer ana tablodaki tüm satırları korur ve eşleşen bilgileri sağdan ekler.",
                              "measuredSkill": "Merge ve Join Türleri"
                    }
          ]
}
      },
      {
        id: "sec22_l10",
        phaseId: 22,
        unitId: "u22_10",
        title: "Append ile Tabloları Alt Alta Ekleme (Aylık Dosyaları Birleştirme)",
        shortDesc: "Ocak, Şubat ve Mart satış tablolarını tek bir dev konsolide tabloda alt alta bağlama.",
        category: "Power Query & ETL",
        groupTitle: "Append",
        primaryGoal: "Sorguları Ekle (Append Queries as New) ile tabloları dikey birleştirmek.",
        prerequisites: ["sec22_l9"],
        commonMistakes: ["Birleştirilecek tabloların sütun başlıklarında harf hatası olduğu için yeni sütun açılmasına sebep olmak"],
        successCriteria: "Append dönüşümünü yapabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Append"],
        initialWorkbook: createTableSheet("s22_10", "AppendSayfasi", ["Ay", "Temsilci", "Satış"], [["Ocak", "Ahmet", 120000], ["Şubat", "Ahmet", 140000], ["Mart", "Ahmet", 160000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Append ile Tabloları Alt Alta Ekleme (Aylık Dosyaları Birleştirme)",
                    "description": "Sorguları Ekle (Append Queries as New) ile tabloları dikey birleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_10",
                    "title": "Dikey Tablo Konsolidasyonu: Append",
                    "explanation": "Sütun başlıkları aynı olan 12 farklı aylık sayfayı 'Sorguları Ekle' diyerek tek bir master tabloda alt alta toplarız. Manuel kopyala-yapıştır tarihe karışır.",
                    "speechText": "Başlıkların birebir aynı yazılmış olması kritiktir; Power Query aynı başlıklı sütunları mükemmel şekilde alt alta dizer.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t22_10_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine 3 aylık toplam satışı '=TOPLA(C2:C4)' formülüyle hesaplayın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "C5 hücresine '=TOPLA(C2:C4)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Append ile Tabloları Alt Alta Ekleme (Aylık Dosyaları Birleştirme) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_10",
          "title": "Append ile Tabloları Alt Alta Ekleme (Aylık Dosyaları Birleştirme) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_10_1",
                              "question": "Farklı aylara ait tabloları alt alta tek bir master tabloda birleştirmek için hangi işlem yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sorguları Ekle (Append Queries)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sorguları Birleştir (Merge Queries)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sütun Böl"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kaldır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Append işlemi sütunları eşleştirerek tabloları alt alta ekler.",
                              "measuredSkill": "Dikey Tablo Konsolidasyonu (Append)"
                    }
          ]
}
      },
      {
        id: "sec22_l11",
        phaseId: 22,
        unitId: "u22_11",
        title: "Pivot ve Unpivot (Sütunları Satırlara Çevirme)",
        shortDesc: "Yatay aylık bütçe matrisini (Oca, Şub, Mar...) dikey 3 sütunluk analize hazır veri modeline çevirme.",
        category: "Power Query & ETL",
        groupTitle: "Unpivot",
        primaryGoal: "Dönüştür > Sütunları Çöz (Unpivot Other Columns) ile tabular dönüşüm yapmak.",
        prerequisites: ["sec22_l10"],
        commonMistakes: ["Yatay matris tablolarından doğrudan PivotTable yapmaya çalışıp aylar bazında filtreleme yapamamak"],
        successCriteria: "Unpivot dönüşümünü ustalıkla yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Unpivot", "Sütunları Çöz"],
        initialWorkbook: createTableSheet("s22_11", "UnpivotSayfasi", ["Departman", "Ay", "Bütçe (TL)"], [["Pazarlama", "Ocak", 50000], ["Pazarlama", "Şubat", 60000], ["Pazarlama", "Mart", 55000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Pivot ve Unpivot (Sütunları Satırlara Çevirme)",
                    "description": "Dönüştür > Sütunları Çöz (Unpivot Other Columns) ile tabular dönüşüm yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_11",
                    "title": "Veri Dünyasının En Güçlü Aracı: Unpivot",
                    "explanation": "Sağa doğru uzayan ay sütunlarını seçip 'Diğer Sütunları Çöz' (Unpivot) dediğinizde yüzlerce sütunluk hantal matris saniyeler içinde tertemiz 'Ay' ve 'Değer' satırlarına dönüşür.",
                    "speechText": "Unpivot yapılmamış yatay tablolarla modern veri analizi ve PivotTable kurulamaz; Unpivot veriyi özgürleştirir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t22_11_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine çeyrek bütçesi toplamını '=TOPLA(C2:C4)' formülüyle yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "=TOPLA(C2:C4) yazın.",
                              "C5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Pivot ve Unpivot (Sütunları Satırlara Çevirme) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_11",
          "title": "Pivot ve Unpivot (Sütunları Satırlara Çevirme) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_11_1",
                              "question": "Yatay aylık sütunları tek bir 'Ay' sütununa ve değerleri 'Tutar' sütununa indirmek için hangi komut kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütunları Çöz (Unpivot Columns)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütun Ekle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metinden Sütunlara"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtre Temizle"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Unpivot yatay matrisleri dikey tabular veri satırlarına dönüştürür.",
                              "measuredSkill": "Unpivot ve Tabular Modelleme"
                    }
          ]
}
      },
      {
        id: "sec22_l12",
        phaseId: 22,
        unitId: "u22_12",
        title: "Tarih ve Saat Dönüşümleri (Date Transformations)",
        shortDesc: "Fatura tarihinden tek tıkla Yıl, Ay Adı, Haftanın Günü ve Çeyrek sütunları türetme.",
        category: "Power Query & ETL",
        groupTitle: "Tarih Dönüşümleri",
        primaryGoal: "Sütun Ekle > Tarih menüsünden Ay > Ayın Adı veya Çeyrek seçeneğini kullanmak.",
        prerequisites: ["sec22_l11"],
        commonMistakes: ["Dönüştür sekmesindeki Tarih aracı ile Sütun Ekle sekmesindekini karıştırıp mevcut tarihi ezmek"],
        successCriteria: "Tarih sütunlarını zenginleştirebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Tarih Dönüşümü"],
        initialWorkbook: createTableSheet("s22_12", "TarihDonusumSayfasi", ["Fatura Tarihi", "Yıl", "Ay Adı", "Çeyrek"], [["2026-03-15", 2026, "Mart", "Çeyrek 1"], ["2026-08-20", 2026, "Ağustos", "Çeyrek 3"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tarih ve Saat Dönüşümleri (Date Transformations)",
                    "description": "Sütun Ekle > Tarih menüsünden Ay > Ayın Adı veya Çeyrek seçeneğini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_12",
                    "title": "Formülsüz Tarih Zenginleştirme",
                    "explanation": "Sütun Ekle sekmesindeki 'Tarih' menüsünden tek tıklamayla: Yıl, Çeyrek, Ayın Adı, Haftanın Günü, Yılın Günü gibi onlarca analitik sütunu anında üretebilirsiniz.",
                    "speechText": "Artık =METNEÇEVİR formülleriyle uğraşmanıza gerek yok; Power Query tarihleri zahmetsizce analiz boyutlarına ayırır.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t22_12_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine tarih analiz standardı olarak 'Tam Tarih Boyutu' yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "'Tam Tarih Boyutu' yazın.",
                              "D4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Tarih ve Saat Dönüşümleri (Date Transformations) görevini başarıyla tamamladınız.",
                              "expectedValue": "Tam Tarih Boyutu"
                    }
          }
],
        quiz: {
          "id": "q22_12",
          "title": "Tarih ve Saat Dönüşümleri (Date Transformations) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_12_1",
                              "question": "Mevcut tarih sütununu bozmadan yanına yeni bir 'Ay Adı' sütunu açmak için hangi sekme kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütun Ekle (Add Column) > Tarih > Ay > Ayın Adı"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Görünüm"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Giriş > Sil"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sütun Ekle sekmesi orijinal sütunu koruyarak yanına türetilmiş yeni sütun üretir.",
                              "measuredSkill": "Tarih Sütunu Zenginleştirme"
                    }
          ]
}
      },
      {
        id: "sec22_l13",
        phaseId: 22,
        unitId: "u22_13",
        title: "Null, Boş Değer ve Hata Yönetimi (Error Handling)",
        shortDesc: "Hesaplamaları bozan null değerleri ve #HATA içeren satırları temizleme veya varsayılan değer atama.",
        category: "Power Query & ETL",
        groupTitle: "Hata Yönetimi",
        primaryGoal: "Hataları Kaldır (Remove Errors) ve Hataları Değiştir (Replace Errors) seçeneklerini kullanmak.",
        prerequisites: ["sec22_l12"],
        commonMistakes: ["Hataları incelemeden doğrudan silip önemli satırları kaybetmek"],
        successCriteria: "Veri kalitesi ve hata temizliğini yapabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Hata Yönetimi"],
        initialWorkbook: createTableSheet("s22_13", "HataYonetimSayfasi", ["Müşteri", "Sipariş Tutarı", "Temiz Tutar"], [["Müşteri A", 12000, 12000], ["Müşteri B", "null", 0], ["Müşteri C", 18500, 18500]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Null, Boş Değer ve Hata Yönetimi (Error Handling)",
                    "description": "Hataları Kaldır (Remove Errors) ve Hataları Değiştir (Replace Errors) seçeneklerini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_13",
                    "title": "Null ve Hatalarla Başa Çıkma",
                    "explanation": "Veritabanından gelen 'null' değerleri matematiksel toplama girdiğinde sorun yaratabilir. Sağ tık > Değerleri Değiştir ile 'null' metnini '0' yaparak hesaplama sürekliliğini sağlarız.",
                    "speechText": "Hatalı satırları ise 'Hataları Değiştir' ile sıfıra çekebilir veya 'Hataları Kaldır' ile sorgudan filtreleyebiliriz.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t22_13_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine temizlenmiş toplam tutarı '=TOPLA(C2:C4)' formülüyle yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "=TOPLA(C2:C4) yazın.",
                              "C5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Null, Boş Değer ve Hata Yönetimi (Error Handling) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_13",
          "title": "Null, Boş Değer ve Hata Yönetimi (Error Handling) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_13_1",
                              "question": "Power Query'de null (boş) değer içeren hücreleri sıfır yapmak için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağ Tık > Değerleri Değiştir > Aranacak: null, Yeni Değer: 0"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sütun silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sorgu kapatılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtre kaldırılır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değerleri Değiştir ile null değerler güvenle sıfıra dönüştürülür.",
                              "measuredSkill": "Null ve Hata Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec22_l14",
        phaseId: 22,
        unitId: "u22_14",
        title: "Parametreler ve Tekrar Kullanılabilir Dinamik Sorgular",
        shortDesc: "Yıl veya dosya yolunu parametreye bağlayarak sorgunun tek bir parametre kutusundan kontrol edilmesi.",
        category: "Power Query & ETL",
        groupTitle: "Parametreler",
        primaryGoal: "Parametreleri Yönet (Manage Parameters) ile dinamik filtre ve dosya yolu parametreleri kurmak.",
        prerequisites: ["sec22_l13"],
        commonMistakes: ["Parametre veri tipini formüldeki veri tipiyle uyuşmaz tanımlamak"],
        successCriteria: "Dinamik parametreli sorgu kurabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Parametreler"],
        initialWorkbook: createTableSheet("s22_14", "ParametreSayfasi", ["Parametre Adı", "Mevcut Değer", "Kullanım Alanı"], [["HedefYil", 2026, "Yıl Filtresi"], ["KaynakKlasor", "C:\\Raporlar\\", "Klasör Yolu"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Parametreler ve Tekrar Kullanılabilir Dinamik Sorgular",
                    "description": "Parametreleri Yönet (Manage Parameters) ile dinamik filtre ve dosya yolu parametreleri kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_14",
                    "title": "Sorguları Parametrik Kılma",
                    "explanation": "Parametreler Yönet aracıyla 'SeciliYil = 2026' tanımlandığında, filtre adımında sabit sayı yerine parametre kullanılır. Parametreyi 2025 yaptığınız an tüm sorgu o yıla göre çalışır.",
                    "speechText": "Büyük kurumsal modellerde dosya yollarını ve mali yılları parametreye bağlamak en üst düzey mühendislik pratiğidir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_14_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine parametre mimarisi standardı olarak 'Dinamik Parametre Kontrolü' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Dinamik Parametre Kontrolü' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Parametreler ve Tekrar Kullanılabilir Dinamik Sorgular görevini başarıyla tamamladınız.",
                              "expectedValue": "Dinamik Parametre Kontrolü"
                    }
          }
],
        quiz: {
          "id": "q22_14",
          "title": "Parametreler ve Tekrar Kullanılabilir Dinamik Sorgular Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_14_1",
                              "question": "Power Query'de sorgunun çalıştığı yılı veya klasör yolunu dinamik kılmak için ne kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Parametreler (Parameters)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücre boyama"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfa şifresi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Köprü"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Parametreler sorguların girdilerini dinamik olarak değiştirmeyi sağlar.",
                              "measuredSkill": "Parametrik ETL Tasarımı"
                    }
          ]
}
      },
      {
        id: "sec22_l15",
        phaseId: 22,
        unitId: "u22_15",
        title: "M Dili Temelleri ve Formül Çubuğu (let ... in Yapısı)",
        shortDesc: "Power Query'nin arka planındaki fonksiyonel M (Mashup) programlama dilinin temel sözdizimini anlama.",
        category: "Power Query & ETL",
        groupTitle: "M Dili",
        primaryGoal: "Gelişmiş Düzenleyici (Advanced Editor) penceresinde let ve in bloklarını okumak ve düzenlemek.",
        prerequisites: ["sec22_l14"],
        commonMistakes: ["M dilinin büyük/küçük harfe aşırı duyarlı olduğunu (case-sensitive) unutup 'table.selectrows' yazmak"],
        successCriteria: "M dili temel sözdizimini okuyabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["M Dili", "Advanced Editor"],
        initialWorkbook: createTableSheet("s22_15", "MDiliSayfasi", ["M Bloğu", "Görevi", "Örnek"], [["let", "Dönüşüm adımlarının tanımlandığı blok", "Kaynak = Excel.CurrentWorkbook()"], ["in", "Sonucun döndürüldüğü adım", "in SonAdim"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "M Dili Temelleri ve Formül Çubuğu (let ... in Yapısı)",
                    "description": "Gelişmiş Düzenleyici (Advanced Editor) penceresinde let ve in bloklarını okumak ve düzenlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_15",
                    "title": "M Dilinin Sırrı: let ... in",
                    "explanation": "Power Query arayüzünde yaptığınız her tıklama arka planda bir M kodu üretir: 'let Adim1 = ..., Adim2 = ... in Adim2'. M dili fonksiyoneldir ve büyük/küçük harfe duyarlıdır.",
                    "speechText": "Gelişmiş Düzenleyiciyi açıp doğrudan M kodu yazabilmek sizi sıradan bir kullanıcıdan gerçek bir veri mühendisine dönüştürür.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_15_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine M dili dilbilgisi standardı olarak 'Büyük-Küçük Harfe Duyarlı (Case-Sensitive)' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Büyük-Küçük Harfe Duyarlı (Case-Sensitive)' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! M Dili Temelleri ve Formül Çubuğu (let ... in Yapısı) görevini başarıyla tamamladınız.",
                              "expectedValue": "Büyük-Küçük Harfe Duyarlı (Case-Sensitive)"
                    }
          }
],
        quiz: {
          "id": "q22_15",
          "title": "M Dili Temelleri ve Formül Çubuğu (let ... in Yapısı) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_15_1",
                              "question": "Power Query'nin arka planındaki M dili hakkında hangisi doğrudur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Büyük/küçük harfe duyarlıdır (case-sensitive) ve let ... in yapısıyla çalışır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Büyük/küçük harf fark etmez"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca İngilizce çalışır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel formülleriyle aynıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "M dili kesinlikle büyük/küçük harfe duyarlıdır ve fonksiyon adları kurallara uygun yazılmalıdır.",
                              "measuredSkill": "M Dili Temel Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec22_l16",
        phaseId: 22,
        unitId: "u22_16",
        title: "Klasörlerdeki Çok Sayıda Dosyayı Tek Hamlede Otomatik Birleştirme",
        shortDesc: "Bir klasöre her gün atılan yüzlerce Excel veya CSV dosyasını tek sorguyla otomatik okuyup birleştirme.",
        category: "Power Query & ETL",
        groupTitle: "Klasör Birleştirme",
        primaryGoal: "Veri Al > Dosyadan > Klasörden (From Folder) seçeneğiyle 'Dosyaları Birleştir' sihirbazını çalıştırmak.",
        prerequisites: ["sec22_l15"],
        commonMistakes: ["Klasöre geçici veya farklı şablonlu dosya atıp birleştirme şablonunun bozulmasına yol açmak"],
        successCriteria: "Klasörden otomatik veri alma mimarisini kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Klasörden Veri Al"],
        initialWorkbook: createTableSheet("s22_16", "KlasorBirlestirSayfasi", ["Klasör Yolu", "Dosya Adedi", "İşlem"], [["C:\\GunlukSatislar\\", 365, "Otomatik Konsolidasyon"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Klasörlerdeki Çok Sayıda Dosyayı Tek Hamlede Otomatik Birleştirme",
                    "description": "Veri Al > Dosyadan > Klasörden (From Folder) seçeneğiyle 'Dosyaları Birleştir' sihirbazını çalıştırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_16",
                    "title": "Yıllık Veriyi Saniyede Toplama",
                    "explanation": "365 günlük satış dosyasını tek tek açıp kopyalamak günler sürer. Power Query 'Klasörden' diyerek klasörü gösterdiğinizde 365 dosyanın tamamını tek bir saniyede alt alta birleştirir.",
                    "speechText": "Yarın klasöre 366. dosya geldiğinde tek yapmanız gereken 'Yenile'ye basmaktır; yeni dosya otomatik eklenir.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t22_16_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine klasör konsolidasyon durumu olarak '365 Dosya Konsolide Edildi' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'365 Dosya Konsolide Edildi' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Klasörlerdeki Çok Sayıda Dosyayı Tek Hamlede Otomatik Birleştirme görevini başarıyla tamamladınız.",
                              "expectedValue": "365 Dosya Konsolide Edildi"
                    }
          }
],
        quiz: {
          "id": "q22_16",
          "title": "Klasörlerdeki Çok Sayıda Dosyayı Tek Hamlede Otomatik Birleştirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_16_1",
                              "question": "Bir klasöre yeni eklenen dosyaların rapora dahil olması için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yalnızca 'Yenile' (Refresh) butonuna basılmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm formüller baştan yazılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosyalar tek tek açılmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Bilgisayar yeniden başlatılmalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Klasör sorguları yapılandırıldıktan sonra yeni dosyalar tek tıkla yenilenerek içeri alınır.",
                              "measuredSkill": "Klasör Otomasyonu"
                    }
          ]
}
      },
      {
        id: "sec22_l17",
        phaseId: 22,
        unitId: "u22_17",
        title: "Sorgu Yenileme, Performans ve Hata Ayıklama (Query Optimization)",
        shortDesc: "Sorgu katlama (Query Folding) kavramı, bellek kullanımı ve yavaş sorguları hızlandırma teknikleri.",
        category: "Power Query & ETL",
        groupTitle: "Performans ve Hata Ayıklama",
        primaryGoal: "Sorgu Adımları üzerinde sağ tıklayıp 'Yerel Sorguyu Görüntüle' (View Native Query) seçeneğini incelemek.",
        prerequisites: ["sec22_l16"],
        commonMistakes: ["Sorgu katlamayı bozan adımları en başa koyup veritabanının tüm veriyi yerel belleğe göndermesine sebep olmak"],
        successCriteria: "Sorgu performans optimizasyonu yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Query Folding", "Performans"],
        initialWorkbook: createTableSheet("s22_17", "QueryOptimizasyon", ["Optimizasyon Tekniği", "Açıklama", "Fayda"], [["Sorgu Katlama (Query Folding)", "Filtreleri SQL sunucusuna yaptır", "10x Hız Artışı"], ["Gereksiz Sütunları Baştan Sil", "Hafıza kullanımını düşür", "Düşük Bellek"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sorgu Yenileme, Performans ve Hata Ayıklama (Query Optimization)",
                    "description": "Sorgu Adımları üzerinde sağ tıklayıp 'Yerel Sorguyu Görüntüle' (View Native Query) seçeneğini incelemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_17",
                    "title": "Sorgu Katlama (Query Folding) Nedir?",
                    "explanation": "Power Query filtreleme adımlarını SQL veritabanına bir SQL sorgusu olarak tercüme ederse buna 'Query Folding' denir. Milyonlarca satır sunucuda filtrelenir, Excel'e yalnızca filtrelenmiş sonuç gelir.",
                    "speechText": "Performanslı bir ETL sürecinde filtreleme ve sütun silme adımları daima en başta yapılmalıdır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t22_17_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine performans standardı olarak 'Sorgu Katlama Aktif' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Sorgu Katlama Aktif' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Sorgu Yenileme, Performans ve Hata Ayıklama (Query Optimization) görevini başarıyla tamamladınız.",
                              "expectedValue": "Sorgu Katlama Aktif"
                    }
          }
],
        quiz: {
          "id": "q22_17",
          "title": "Sorgu Yenileme, Performans ve Hata Ayıklama (Query Optimization) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_17_1",
                              "question": "Power Query'de filtreleme işleminin yerel bilgisayar yerine SQL sunucusunda çalışmasına ne ad verilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sorgu Katlama (Query Folding)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Unpivot"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Append"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Merge"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Query Folding filtrelerin doğrudan veri kaynağında çalışmasını sağlayarak hızı devasa artırır.",
                              "measuredSkill": "Sorgu Katlama ve Performans"
                    }
          ]
}
      },
      {
        id: "sec22_l18",
        phaseId: 22,
        unitId: "u22_18",
        title: "Gerçek Kurumsal Uçtan Uca Veri Hazırlama Projesi (Capstone ETL)",
        shortDesc: "Ham, bozuk, ayrılmış ve birden fazla kaynaktan gelen verileri analize hazır hale getirme bitirme görevi.",
        category: "Power Query & ETL",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Tüm Power Query adımlarını (Al, Temizle, Merge, Unpivot, Tipleri Belirle) entegre uygulamak.",
        prerequisites: ["sec22_l17"],
        commonMistakes: ["Uygulanan adımları isimlendirmeyip 6 ay sonra sorgunun ne yaptığını unutmak"],
        successCriteria: "Kurumsal ETL projesini başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["ETL Projesi"],
        initialWorkbook: createTableSheet("s22_18", "CapstoneEtlSayfasi", ["Müşteri ID", "Müşteri Adı", "Kategori", "Net Satış (TL)"], [["M-101", "Demir Çelik Sanayi", "Endüstriyel", 450000], ["M-102", "Kaya Teknoloji", "Bilişim", 320000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Gerçek Kurumsal Uçtan Uca Veri Hazırlama Projesi (Capstone ETL)",
                    "description": "Tüm Power Query adımlarını (Al, Temizle, Merge, Unpivot, Tipleri Belirle) entegre uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts22_18",
                    "title": "Veri Mühendisliği Zirvesi",
                    "explanation": "Tebrikler! Kirli metinleri temizlediniz, eksik müşteri bilgilerini Merge ile bağladınız, yatay matrisleri Unpivot ettiniz ve tek tıkla yenilenen kurumsal bir veri boru hattı (Data Pipeline) inşa ettiniz.",
                    "speechText": "Artık Excel'in en ileri veri hazırlama aracı olan Power Query'ye bütünüyle hakim bir veri uzmanısınız.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t22_18_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine 2 müşterinin toplam net satışını '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "D4 hücresine '=TOPLA(D2:D3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Gerçek Kurumsal Uçtan Uca Veri Hazırlama Projesi (Capstone ETL) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q22_18",
          "title": "Gerçek Kurumsal Uçtan Uca Veri Hazırlama Projesi (Capstone ETL) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_22_18_1",
                              "question": "Power Query ile inşa edilen uçtan uca veri boru hattının (Data Pipeline) en büyük avantajı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Gelecekte veri güncellendiğinde tek bir 'Yenile' tuşuyla tüm temizlik adımlarının otomatik tekrarlanması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel'i kapatması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tabloyu renklendirmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı tiplerini değiştirmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "ETL boru hatları veri temizleme işçiliğini tamamen otomatikleştirerek insan hatasını yok eder.",
                              "measuredSkill": "Uçtan Uca ETL Boru Hattı Yönetimi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 23,
    category: "Veri Modeli, Power Pivot & DAX",
    title: "23. Veri Modeli, Power Pivot ve DAX",
    subtitle: "İlişkisel Modelleme, Yıldız Şema, CALCULATE, Filtre Bağlamı ve Zaman Zekâsı",
    iconName: "Cpu",
    description: "Veri modeli temelleri, tablolar arası 1-to-Many ilişkiler, birincil/yabancı anahtarlar, yıldız şema, hesaplanan sütun ile DAX ölçüsü (measure) farkı, CALCULATE, filtre bağlamı, tarih tablosu ve TOTALYTD zaman zekâsı.",
    lessons: [
      {
        id: "sec23_l1",
        phaseId: 23,
        unitId: "u23_1",
        title: "Power Pivot Nedir ve Klasik Excel Sınırlarını Aşma",
        shortDesc: "Excel'in 1.048.576 satır sınırını arkada VertiPaq sıkıştırma motoruyla 100 milyon satıra çıkarma.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Giriş",
        primaryGoal: "Veri Modeline Ekle (Add to Data Model) aracıyla tabloları ilişkisel motora yüklemek.",
        prerequisites: ["sec22_l18"],
        commonMistakes: ["Milyonlarca satırı standart çalışma sayfasına yapıştırmaya çalışıp Excel'i kilitlemek"],
        successCriteria: "Power Pivot veri modeli mimarisini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Power Pivot", "Veri Modeli"],
        initialWorkbook: createTableSheet("s23_1", "PowerPivotGiris", ["Model Özelliği", "Klasik Excel", "Power Pivot"], [["Maksimum Satır", "1.048.576", "Yüz Milyonlarca"], ["Bellek Sıkıştırma", "Yok", "VertiPaq Sütunsal Sıkıştırma"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Power Pivot Nedir ve Klasik Excel Sınırlarını Aşma",
                    "description": "Veri Modeline Ekle (Add to Data Model) aracıyla tabloları ilişkisel motora yüklemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_1",
                    "title": "Büyük Veri Devrimi: Power Pivot",
                    "explanation": "Power Pivot veriyi Excel hücrelerine değil, RAM bellekte çalışan sıkıştırılmış ilişkisel motora yükler. Dosya boyutu 10 kat küçülürken sorgular milisaniyede hesaplanır.",
                    "speechText": "DÜŞEYARA ile sayfaları şişirmek yerine tabloları veri modelinde ilişkilendirerek devasa veri setlerini yönetiriz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t23_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine teknoloji standardı olarak 'VertiPaq Motoru' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'VertiPaq Motoru' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Power Pivot Nedir ve Klasik Excel Sınırlarını Aşma görevini başarıyla tamamladınız.",
                              "expectedValue": "VertiPaq Motoru"
                    }
          }
],
        quiz: {
          "id": "q23_1",
          "title": "Power Pivot Nedir ve Klasik Excel Sınırlarını Aşma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_1_1",
                              "question": "Power Pivot'un klasik Excel sayfalarına göre en büyük üstünlüğü nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1 milyon satır sınırını aşıp yüz milyonlarca satırı sıkıştırılmış bellekte işleyebilmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Daha renkli grafikler çizmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı tiplerini değiştirmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İnternet gerektirmemesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Power Pivot sütunsal VertiPaq motoruyla milyonlarca satırı bellek içinde anında işler.",
                              "measuredSkill": "Power Pivot Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec23_l2",
        phaseId: 23,
        unitId: "u23_2",
        title: "Tablolar Arası İlişkiler (Relationships) ve 1-to-Many Mantığı",
        shortDesc: "Diyagram Görünümünde (Diagram View) tabloları sürükle-bırak yöntemiyle 1-Çok ilişkisiyle bağlama.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "İlişkiler",
        primaryGoal: "İlişki Oluştur (Create Relationship) penceresinden ortak sütunları eşleştirmek.",
        prerequisites: ["sec23_l1"],
        commonMistakes: ["İki tablonun da tekil olmadığı durumlarda Many-to-Many ilişkisi kurup ambiguous filtreleme hatası almak"],
        successCriteria: "1-to-Many ilişkisi kurabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["İlişkiler", "1-to-Many"],
        initialWorkbook: createTableSheet("s23_2", "IliskiSayfasi", ["Tablo A (Fact)", "Tablo B (Dimension)", "İlişki Türü"], [["Satislar (Siparişler)", "Musteriler (Müşteri Kartı)", "1 - Çok (1-to-Many)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tablolar Arası İlişkiler (Relationships) ve 1-to-Many Mantığı",
                    "description": "İlişki Oluştur (Create Relationship) penceresinden ortak sütunları eşleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_2",
                    "title": "DÜŞEYARA Formüllerine Son",
                    "explanation": "Satışlar tablosundaki 'MusteriID' ile Müşteriler tablosundaki 'MusteriID'yi birbirine bağladığınız an iki tablo tek bir organizma gibi çalışır. Formülsüz olarak müşterinin şehrini rapora alabilirsiniz.",
                    "speechText": "Müşteriler tablosunda her ID'den yalnızca bir tane vardır (1), Satışlar tablosunda ise bir müşteri yüzlerce alışveriş yapabilir (Çok).",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t23_2_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine ilişki kuralı olarak '1-Çok İlişkisi' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'1-Çok İlişkisi' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Tablolar Arası İlişkiler (Relationships) ve 1-to-Many Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "1-Çok İlişkisi"
                    }
          }
],
        quiz: {
          "id": "q23_2",
          "title": "Tablolar Arası İlişkiler (Relationships) ve 1-to-Many Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_2_1",
                              "question": "İlişkisel bir modelde bir Müşteri tablosu ile Satışlar tablosu arasındaki standart ilişki türü nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1-Çok (1-to-Many)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "1-e-1 (1-to-1)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Çok-a-Çok (Many-to-Many)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "İlişkisiz"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Müşteri kartı tekildir (1), satış işlemlerinde ise aynı müşteri birden fazla işlem yapabilir (*).",
                              "measuredSkill": "İlişkisel Veri Modelleme"
                    }
          ]
}
      },
      {
        id: "sec23_l3",
        phaseId: 23,
        unitId: "u23_3",
        title: "Birincil ve Yabancı Anahtar (Primary & Foreign Key) Mimarisi",
        shortDesc: "Tablolardaki tekil kimlik sütunları (Primary Key) ile işlem tablolarındaki referansları (Foreign Key) eşleme.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Anahtar Mimarisi",
        primaryGoal: "Primary Key sütunundaki yinelenen kayıtları temizleyerek ilişki bütünlüğünü sağlamak.",
        prerequisites: ["sec23_l2"],
        commonMistakes: ["Boyut tablosundaki Primary Key alanında aynı ID'den iki tane olup ilişkinin kurulamaması"],
        successCriteria: "Anahtar sütun mimarisini yönetebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Primary Key", "Foreign Key"],
        initialWorkbook: createTableSheet("s23_3", "AnahtarSayfasi", ["Sütun Adı", "Rol", "Tekillik"], [["MusteriID (Müşteri Tablosu)", "Primary Key (PK)", "Kesinlikle Benzersiz"], ["MusteriID (Satış Tablosu)", "Foreign Key (FK)", "Yinelenen Kayıtlar"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Birincil ve Yabancı Anahtar (Primary & Foreign Key) Mimarisi",
                    "description": "Primary Key sütunundaki yinelenen kayıtları temizleyerek ilişki bütünlüğünü sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_3",
                    "title": "İlişkilerin Omurgası: Anahtarlar",
                    "explanation": "Primary Key (Birincil Anahtar) o satırın TC kimliği gibidir; asla tekrar edemez ve boş olamaz. Foreign Key (Yabancı Anahtar) ise bu kimliğe referans veren işlem kayıtlarıdır.",
                    "speechText": "Bu ayrımı doğru kurmak veritabanınızın ve raporlarınızın çökmeyen kaya gibi sağlam bir temele oturmasını sağlar.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t23_3_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine anahtar bütünlüğü kuralı olarak 'Referans Bütünlüğü (Referential Integrity)' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Referans Bütünlüğü (Referential Integrity)' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Birincil ve Yabancı Anahtar (Primary & Foreign Key) Mimarisi görevini başarıyla tamamladınız.",
                              "expectedValue": "Referans Bütünlüğü (Referential Integrity)"
                    }
          }
],
        quiz: {
          "id": "q23_3",
          "title": "Birincil ve Yabancı Anahtar (Primary & Foreign Key) Mimarisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_3_1",
                              "question": "Bir Boyut (Dimension) tablosunun Primary Key sütunu hangi özelliğe sahip olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Her satırda kesinlikle benzersiz ve tekil olmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yinelenen sayılar içerebilir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş hücrelerden oluşabilir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca metin olmalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Primary Key tablodaki her bir varlığı tekil tanımlamak zorundadır.",
                              "measuredSkill": "Anahtar ve Bütünlük Kuralları"
                    }
          ]
}
      },
      {
        id: "sec23_l4",
        phaseId: 23,
        unitId: "u23_4",
        title: "Yıldız Şema (Star Schema): Boyut (Dimension) ve Olgu (Fact) Tabloları",
        shortDesc: "Veri ambarı standardı Yıldız Şema kurgusunu merkezdeki Fact tablosu ve etrafındaki Dimension tablolarıyla kurma.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Yıldız Şema",
        primaryGoal: "Fact_Satislar tablosunu Dim_Musteri, Dim_Urun ve Dim_Tarih ile yıldız düzeninde bağlamak.",
        prerequisites: ["sec23_l3"],
        commonMistakes: ["Tüm verileri tek bir devasa geniş tabloda tutup yıldız şemanın performans avantajını kaçırmak"],
        successCriteria: "Yıldız şema modelini kurabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Star Schema", "Fact & Dimension"],
        initialWorkbook: createTableSheet("s23_4", "YildizSemaSayfasi", ["Tablo Adı", "Şema Türü", "İçerik"], [["Fact_Satislar", "Olgu (Fact)", "İşlem tutarları ve adetler"], ["Dim_Urunler", "Boyut (Dimension)", "Ürün adı, kategori, marka"], ["Dim_Tarih", "Boyut (Dimension)", "Yıl, çeyrek, ay, gün"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yıldız Şema (Star Schema): Boyut (Dimension) ve Olgu (Fact) Tabloları",
                    "description": "Fact_Satislar tablosunu Dim_Musteri, Dim_Urun ve Dim_Tarih ile yıldız düzeninde bağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_4",
                    "title": "İş Zekasının Altın Standardı: Star Schema",
                    "explanation": "Merkezde sayısız satış işleminin tutulduğu Fact tablosu, etrafında ise filtreleme ve gruplama yapacağımız Dim (Boyut) tabloları yer alır. Bu yapıya Yıldız Şema denir.",
                    "speechText": "Yıldız Şema Power BI ve Power Pivot'un en yüksek hızda ve en doğru filtre yayılımıyla çalışması için tasarlanmış en ideal mimaridir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t23_4_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine şema mimarisi standardı olarak 'Yıldız Şema (Star Schema)' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Yıldız Şema (Star Schema)' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Yıldız Şema (Star Schema): Boyut (Dimension) ve Olgu (Fact) Tabloları görevini başarıyla tamamladınız.",
                              "expectedValue": "Yıldız Şema (Star Schema)"
                    }
          }
],
        quiz: {
          "id": "q23_4",
          "title": "Yıldız Şema (Star Schema): Boyut (Dimension) ve Olgu (Fact) Tabloları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_4_1",
                              "question": "Yıldız Şema (Star Schema) mimarisinde merkezdeki Fact tablosu neleri saklar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayısal işlem metriklerini (tutar, adet) ve boyut anahtarlarını"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca müşteri adreslerini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca ürün fotoğraflarını"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kullanıcı şifrelerini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Fact tablosu ölçülebilir sayısal iş metriklerini ve ilişkili boyutların ID anahtarlarını barındırır.",
                              "measuredSkill": "Yıldız Şema Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec23_l5",
        phaseId: 23,
        unitId: "u23_5",
        title: "Hesaplanan Sütunlar ile DAX Ölçülerinin (Measures) Hayati Farkı",
        shortDesc: "RAM belleği şişiren sütunlar yerine sorgu anında dinamik hesaplanan Ölçü (Measure) yazmanın önemi.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Measures vs Columns",
        primaryGoal: "YENİ ÖLÇÜ (New Measure) oluşturarak 'Toplam Ciro := SUM(Satislar[Tutar])' tanımlamak.",
        prerequisites: ["sec23_l4"],
        commonMistakes: ["Her hesaplama için tabloya yeni sütun ekleyip dosya boyutunu devasa şişirmek"],
        successCriteria: "DAX ölçüsü (Measure) yazabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["DAX Measure"],
        initialWorkbook: createTableSheet("s23_5", "MeasureVsSutun", ["Özellik", "Hesaplanan Sütun", "DAX Ölçüsü (Measure)"], [["Bellek Tüketimi", "Yüksek (Her satırda saklanır)", "Sıfır (Sorgu anında hesaplanır)"], ["Dinamik Filtre", "Statik", "Pivot filtrelere anında tepki verir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hesaplanan Sütunlar ile DAX Ölçülerinin (Measures) Hayati Farkı",
                    "description": "YENİ ÖLÇÜ (New Measure) oluşturarak 'Toplam Ciro := SUM(Satislar[Tutar])' tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_5",
                    "title": "Altın Kural: Mümkünse Daima Measure Kullan!",
                    "explanation": "Hesaplanan Sütun her bir satır için RAM'de yer kaplar. DAX Ölçüsü (Measure) ise bellekte yer tutmaz; siz PivotTable'a attığınızda o an filtrelere göre yıldırım hızında hesaplanır.",
                    "speechText": "Profesyonel veri modelcileri toplamları, ortalamaları ve kâr marjlarını daima Ölçü (Measure) olarak yazar.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t23_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine doğru DAX yaklaşımı olarak 'DAX Ölçüsü (Measure)' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'DAX Ölçüsü (Measure)' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Hesaplanan Sütunlar ile DAX Ölçülerinin (Measures) Hayati Farkı görevini başarıyla tamamladınız.",
                              "expectedValue": "DAX Ölçüsü (Measure)"
                    }
          }
],
        quiz: {
          "id": "q23_5",
          "title": "Hesaplanan Sütunlar ile DAX Ölçülerinin (Measures) Hayati Farkı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_5_1",
                              "question": "Bellek tasarrufu sağlamak ve PivotTable filtrelerine dinamik tepki vermek için hangisi tercih edilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "DAX Ölçüsü (Measure)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hesaplanan Sütun (Calculated Column)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "DÜŞEYARA"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Statik Sayı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ölçüler (Measures) RAM'de satır satır saklanmaz; yalnızca sorgu anında dinamik hesaplanır.",
                              "measuredSkill": "DAX Ölçü vs Sütun Ayrımı"
                    }
          ]
}
      },
      {
        id: "sec23_l6",
        phaseId: 23,
        unitId: "u23_6",
        title: "Temel DAX Sözdizimi: Implicit vs Explicit Measures",
        shortDesc: "Excel'in otomatik sürüklemeyle yaptığı örtük ölçü yerine ':= SUM()' ile açık formül tanımlama standardı.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "DAX Sözdizimi",
        primaryGoal: "Açık DAX ölçüsü tanımlayarak formatını Para Birimi olarak kilitlemek.",
        prerequisites: ["sec23_l5"],
        commonMistakes: ["Örtük ölçülerde formatın her yeni PivotTable'da sıfırlanıp genel sayıya dönmesi"],
        successCriteria: "Açık DAX ölçüleri tanımlayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Açık Ölçü (Explicit Measure)"],
        initialWorkbook: createTableSheet("s23_6", "AcikOlcuSayfasi", ["Ölçü Türü", "Tanım", "Sözdizimi"], [["Açık Ölçü (Explicit)", "Kalıcı ve biçimlendirilmiş", "ToplamSatis := SUM(Satislar[Tutar])"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Temel DAX Sözdizimi: Implicit vs Explicit Measures",
                    "description": "Açık DAX ölçüsü tanımlayarak formatını Para Birimi olarak kilitlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_6",
                    "title": "Neden Açık Ölçü Yazmalıyız?",
                    "explanation": "Bir sütunu Değerlere sürüklediğinizde Excel geçici bir ölçü yapar. Ancak formül çubuğuna 'ToplamSatis := SUM(Satislar[Tutar])' yazdığınızda ölçünüz kalıcı, yeniden kullanılabilir ve standart hale gelir.",
                    "speechText": "Açık ölçüler diğer tüm gelişmiş DAX formüllerinin (CALCULATE, YTD vb.) temel yapı taşıdır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t23_6_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine açık DAX ölçü örneği olarak 'ToplamSatis := SUM(Satislar[Tutar])' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'ToplamSatis := SUM(Satislar[Tutar])' yazın.",
                              "C3 hücresine formülü yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Temel DAX Sözdizimi: Implicit vs Explicit Measures görevini başarıyla tamamladınız.",
                              "expectedValue": "ToplamSatis := SUM(Satislar[Tutar])"
                    }
          }
],
        quiz: {
          "id": "q23_6",
          "title": "Temel DAX Sözdizimi: Implicit vs Explicit Measures Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_6_1",
                              "question": "Açık bir DAX ölçüsü (Explicit Measure) tanımlanırken atama operatörü olarak ne kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": ":= (İki nokta ve eşittir)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "=="
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "->"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "+="
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "DAX'ta ölçü adı ile formül arasına ':=' operatörü konur.",
                              "measuredSkill": "DAX Sözdizim Temelleri"
                    }
          ]
}
      },
      {
        id: "sec23_l7",
        phaseId: 23,
        unitId: "u23_7",
        title: "İteratör Fonksiyonları: SUMX ve Satır Bağlamı (Row Context)",
        shortDesc: "Her satırda Adet ile Birim Fiyatı çarpıp ardından toplamı alan iteratif hesaplama mantığı.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "İteratörler",
        primaryGoal: "SUMX(Satislar; Satislar[Adet] * Satislar[BirimFiyat]) formülüyle satır bağlamı çalıştırmak.",
        prerequisites: ["sec23_l6"],
        commonMistakes: ["SUM(Adet) * SUM(BirimFiyat) yazıp matematiksel olarak tamamen yanlış sonuç elde etmek"],
        successCriteria: "SUMX iteratör fonksiyonunu uygulayabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["SUMX", "Row Context"],
        initialWorkbook: createTableSheet("s23_7", "SumxSayfasi", ["Satış ID", "Adet", "Birim Fiyat (TL)", "Satır Cirosu"], [["S-1", 5, 2000, 10000], ["S-2", 2, 4500, 9000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İteratör Fonksiyonları: SUMX ve Satır Bağlamı (Row Context)",
                    "description": "SUMX(Satislar; Satislar[Adet] * Satislar[BirimFiyat]) formülüyle satır bağlamı çalıştırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_7",
                    "title": "Sonunda 'X' Olan Fonksiyonlar",
                    "explanation": "SUM yalnızca tek bir sütunu toplar. Ancak tablonuzda 'Toplam Tutar' sütunu yoksa, SUMX satır satır gezerek her satırda Adet ile Fiyatı çarpar ve hafızada toplar.",
                    "speechText": "Tabloya yeni sütun eklemeden satır satır matematiksel işlem yapmanın en zarif yolu SUMX iteratörüdür.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t23_7_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine 2 satırın genel toplamını '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "D4 hücresine '=TOPLA(D2:D3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! İteratör Fonksiyonları: SUMX ve Satır Bağlamı (Row Context) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q23_7",
          "title": "İteratör Fonksiyonları: SUMX ve Satır Bağlamı (Row Context) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_7_1",
                              "question": "Her satırda Adet ile Birim Fiyatı çarpıp toplam ciro üretmek için hangi DAX fonksiyonu kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "SUMX(Satislar; Satislar[Adet] * Satislar[BirimFiyat])"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "SUM(Satislar[Adet])"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "COUNT()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "AVERAGE()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "SUMX satır bağlamında satır satır çarpım yapıp sonuçları toplar.",
                              "measuredSkill": "İteratör Fonksiyonları (X-Functions)"
                    }
          ]
}
      },
      {
        id: "sec23_l8",
        phaseId: 23,
        unitId: "u23_8",
        title: "CALCULATE Fonksiyonu: DAX'ın En Güçlü Silahı",
        shortDesc: "Filtre bağlamını değiştirerek 'Yalnızca Marmara Bölgesi' veya 'Yalnızca 2026' cirosunu hesaplama.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "CALCULATE",
        primaryGoal: "CALCULATE([ToplamSatis]; Satislar[Bolge] = \"Marmara\") formülüyle filtre manipülasyonu yapmak.",
        prerequisites: ["sec23_l7"],
        commonMistakes: ["CALCULATE içine doğrudan sütun toplama yazıp ölçü referansı kullanmamak"],
        successCriteria: "CALCULATE fonksiyonunu ustalıkla kullanabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["CALCULATE"],
        initialWorkbook: createTableSheet("s23_8", "CalculateSayfasi", ["Bölge", "Genel Ciro", "Marmara Özel Ciro"], [["Marmara", 500000, 500000], ["Ege", 300000, 0]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "CALCULATE Fonksiyonu: DAX'ın En Güçlü Silahı",
                    "description": "CALCULATE([ToplamSatis]; Satislar[Bolge] = \"Marmara\") formülüyle filtre manipülasyonu yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_8",
                    "title": "DAX'ın Kalbi: CALCULATE",
                    "explanation": "CALCULATE, DAX dilindeki en önemli fonksiyondur. Görevi mevcut filtreleri ezip yerine sizin belirlediğiniz yeni filtreyi koymaktır. CALCULATE([ToplamSatis]; Bolge=\"Marmara\") nereye konursa konsun sadece Marmara'yı hesaplar.",
                    "speechText": "Tüm ileri iş zekası modelleri ve KPI karşılaştırmaları CALCULATE üzerine inşa edilir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t23_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine toplam Marmara cirosu olarak 500000 yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "500000 sayısını yazın.",
                              "C4 hücresine 500000 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! CALCULATE Fonksiyonu: DAX'ın En Güçlü Silahı görevini başarıyla tamamladınız.",
                              "expectedValue": 500000
                    }
          }
],
        quiz: {
          "id": "q23_8",
          "title": "CALCULATE Fonksiyonu: DAX'ın En Güçlü Silahı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_8_1",
                              "question": "DAX'ta bir ölçünün filtre bağlamını değiştirmek veya yeni filtreler enjekte etmek için hangi fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "CALCULATE"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "FILTER"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "SUM"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "LOOKUPVALUE"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "CALCULATE filtre bağlamını modifiye eden yegane ve en güçlü DAX fonksiyonudur.",
                              "measuredSkill": "CALCULATE Fonksiyon Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec23_l9",
        phaseId: 23,
        unitId: "u23_9",
        title: "Filtre Bağlamı (Filter Context) ve ALL Fonksiyonu",
        shortDesc: "Seçili filtreleri temizleyerek bir ürünün şirketin genel cirosundaki yüzdesini hatasız hesaplama.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "ALL Fonksiyonu",
        primaryGoal: "CALCULATE([ToplamSatis]; ALL(Satislar)) formülüyle payda sabitlemek.",
        prerequisites: ["sec23_l8"],
        commonMistakes: ["ALL fonksiyonunu kullanmadan oran hesaplamaya çalışıp her satırda %100 sonucuyla karşılaşmak"],
        successCriteria: "Filtre bağlamını sıfırlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["ALL", "Filter Context"],
        initialWorkbook: createTableSheet("s23_9", "AllFonksiyonSayfasi", ["Kategori", "Kategori Cirosu", "Tüm Şirket Cirosu", "Pazar Payı %"], [["Donanım", 600000, 1000000, 0.6], ["Yazılım", 400000, 1000000, 0.4]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Filtre Bağlamı (Filter Context) ve ALL Fonksiyonu",
                    "description": "CALCULATE([ToplamSatis]; ALL(Satislar)) formülüyle payda sabitlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_9",
                    "title": "Filtreleri Kaldırma Sanatı: ALL",
                    "explanation": "PivotTable'daki satır filtresini kaldırmak için ALL(Satislar) deriz. Böylece payda daima şirketin 1.000.000 TL'lik genel cirosunu korur ve '= [Ciro] / CALCULATE([Ciro]; ALL(Satislar))' formülü mükemmel pazar payı verir.",
                    "speechText": "Filtre Bağlamını anlamak profesyonel bir DAX analisti olmanın en büyük dönüm noktasıdır.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t23_9_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine pazar payları genel toplamı olarak 1.0 yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "1.0 veya 1 yazın.",
                              "D4 hücresine 1 yazarak onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Filtre Bağlamı (Filter Context) ve ALL Fonksiyonu görevini başarıyla tamamladınız.",
                              "expectedValue": 1
                    }
          }
],
        quiz: {
          "id": "q23_9",
          "title": "Filtre Bağlamı (Filter Context) ve ALL Fonksiyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_9_1",
                              "question": "DAX'ta bir tablodaki tüm filtreleri kaldırıp büyük toplamı elde etmek için hangi fonksiyon kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "ALL()"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "NONE()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "CLEAR()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "RESET()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "ALL fonksiyonu hedef tablodaki veya sütundaki tüm filtreleri temizler.",
                              "measuredSkill": "Filtre Bağlamı ve ALL"
                    }
          ]
}
      },
      {
        id: "sec23_l10",
        phaseId: 23,
        unitId: "u23_10",
        title: "Tarih Tablosu (Calendar / Date Table) Oluşturmanın Önemi",
        shortDesc: "Zaman zekâsı formüllerinin çalışması için eksiksiz, boşluksuz takvim tablosu kurma şartı.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Tarih Tablosu",
        primaryGoal: "Tasarım > Tarih Tablosu > Yeni Oluştur ile kesintisiz takvim tablosu üretmek.",
        prerequisites: ["sec23_l9"],
        commonMistakes: ["Satış tablosundaki delikli ve tatil günleri eksik olan tarih sütununu doğrudan zaman zekasında kullanmaya çalışmak"],
        successCriteria: "Özel tarih tablosu yapılandırabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Date Table", "Takvim"],
        initialWorkbook: createTableSheet("s23_10", "TarihTablosuSayfasi", ["Tarih", "Yıl", "Ay No", "Hafta Sonu Mu?"], [["2026-01-01", 2026, 1, "Hayır"], ["2026-01-02", 2026, 1, "Hayır"], ["2026-01-03", 2026, 1, "Evet"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tarih Tablosu (Calendar / Date Table) Oluşturmanın Önemi",
                    "description": "Tasarım > Tarih Tablosu > Yeni Oluştur ile kesintisiz takvim tablosu üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_10",
                    "title": "Zaman Zekâsının 1 Numaralı Şartı",
                    "explanation": "DAX zaman zekâsı formüllerinin (YTD, MTD, Geçen Yıl) çalışabilmesi için 1 Ocak'tan 31 Aralık'a kadar hiçbir günü atlamayan kesintisiz bir 'Tarih Tablosu' şarttır.",
                    "speechText": "Power Pivot'ta 'Tarih Tablosu Olarak İşaretle' diyerek takvimimizi modelin resmi zaman kılavuzu yaparız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t23_10_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine tarih tablosu standardı olarak 'Kesintisiz Tarih Dizisi' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Kesintisiz Tarih Dizisi' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Tarih Tablosu (Calendar / Date Table) Oluşturmanın Önemi görevini başarıyla tamamladınız.",
                              "expectedValue": "Kesintisiz Tarih Dizisi"
                    }
          }
],
        quiz: {
          "id": "q23_10",
          "title": "Tarih Tablosu (Calendar / Date Table) Oluşturmanın Önemi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_10_1",
                              "question": "DAX zaman zekâsı formüllerinin hatasız çalışması için Tarih tablosunda hangi kural zorunludur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Aralıkta hiçbir günün eksik olmaması ve kesintisiz devam etmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca hafta sonlarını içermesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin formatında olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca tek bir yıl olması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Zaman zekâsı formülleri eksik gün içeren delikli tarihlerde yanlış sonuç verir; kesintisiz takvim şarttır.",
                              "measuredSkill": "Tarih Tablosu Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec23_l11",
        phaseId: 23,
        unitId: "u23_11",
        title: "Temel Zaman Zekâsı: TOTALYTD ve SAMEPERIODLASTYEAR",
        shortDesc: "Yılbaşından bugüne kümülatif ciro (YTD) ve geçen yılın aynı dönemiyle büyüme kıyaslaması.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Zaman Zekâsı",
        primaryGoal: "TOTALYTD([ToplamSatis]; 'Tarih'[Date]) ve SAMEPERIODLASTYEAR formüllerini yazmak.",
        prerequisites: ["sec23_l10"],
        commonMistakes: ["Zaman zekası fonksiyonuna Satış tablosunun tarihini verip takvim tablosunu kullanmamak"],
        successCriteria: "YTD ve geçen yıl karşılaştırmalarını yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["TOTALYTD", "SAMEPERIODLASTYEAR"],
        initialWorkbook: createTableSheet("s23_11", "ZamanZekasiSayfasi", ["Ay", "Aylık Satış", "Yılbaşından Bugüne (YTD)", "Geçen Yıl Aynı Dönem"], [["Ocak", 100000, 100000, 85000], ["Şubat", 120000, 220000, 95000], ["Mart", 130000, 350000, 110000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Temel Zaman Zekâsı: TOTALYTD ve SAMEPERIODLASTYEAR",
                    "description": "TOTALYTD([ToplamSatis]; 'Tarih'[Date]) ve SAMEPERIODLASTYEAR formüllerini yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_11",
                    "title": "Kurumsal Finansın Dili: YTD",
                    "explanation": "TOTALYTD formülü Ocak'tan itibaren her ayın cirosunu üst üste ekleyerek yıl sonuna doğru kümülatif büyümeyi izler. SAMEPERIODLASTYEAR ise geçen yılın aynı ayını çekerek şirket büyüme hızını ölçer.",
                    "speechText": "Bu iki formül finans direktörlerinin ve yönetim kurullarının en çok talep ettiği raporlama göstergesidir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t23_11_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine 3 aylık nihai YTD cirosu olarak 350000 yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "350000 sayısını yazın.",
                              "C5 hücresine 350000 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Temel Zaman Zekâsı: TOTALYTD ve SAMEPERIODLASTYEAR görevini başarıyla tamamladınız.",
                              "expectedValue": 350000
                    }
          }
],
        quiz: {
          "id": "q23_11",
          "title": "Temel Zaman Zekâsı: TOTALYTD ve SAMEPERIODLASTYEAR Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_11_1",
                              "question": "Yılın ilk gününden itibaren kümülatif olarak biriken satışları hesaplayan DAX fonksiyonu hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "TOTALYTD"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "SUM"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "ALL"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "AVERAGEX"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "TOTALYTD (Year-to-Date) yılbaşından seçili tarihe kadar birikimli toplam alır.",
                              "measuredSkill": "Zaman Zekâsı (Time Intelligence)"
                    }
          ]
}
      },
      {
        id: "sec23_l12",
        phaseId: 23,
        unitId: "u23_12",
        title: "Veri Modeli Performansı ve Bellek Yönetimi (VertiPaq Engine)",
        shortDesc: "Yüksek kardinaliteli (tekrarsız ID) sütunları modelden çıkararak bellek kullanımını %80 azaltma.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Model Optimizasyonu",
        primaryGoal: "Kardinalite analizine göre gereksiz benzersiz sütunları gizlemek veya kaldırmak.",
        prerequisites: ["sec23_l11"],
        commonMistakes: ["Raporlarda hiç kullanılmayan saniyeli saat damgalarını modelde tutup sıkıştırmayı mahvetmek"],
        successCriteria: "Veri modeli bellek optimizasyonu yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["VertiPaq", "Kardinalite"],
        initialWorkbook: createTableSheet("s23_12", "ModelOptimizasyon", ["Sütun Adı", "Kardinalite (Tekil Sayı)", "Optimizasyon Kararı"], [["Sipariş Zaman Damgası (Saat:Dak:San)", 500000, "Tarih ve Saati Ayır / Saniyeyi Sil"], ["Bölge Kodu", 7, "Modelde Tut (Mükemmel Sıkışır)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Modeli Performansı ve Bellek Yönetimi (VertiPaq Engine)",
                    "description": "Kardinalite analizine göre gereksiz benzersiz sütunları gizlemek veya kaldırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_12",
                    "title": "Sütunsal Sıkıştırmanın Sırrı",
                    "explanation": "VertiPaq motoru bir sütundaki benzersiz değer sayısı (kardinalite) ne kadar azsa o kadar yüksek sıkıştırma yapar. Bölge sütununda sadece 7 değer varsa sıfır bellek tüketir.",
                    "speechText": "İlişkisel modelinizi optimize etmek için saniyeli saatleri silin, gereksiz metin sütunlarını kaldırın.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t23_12_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine optimizasyon standardı olarak 'Düşük Kardinalite Kuralı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Düşük Kardinalite Kuralı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Veri Modeli Performansı ve Bellek Yönetimi (VertiPaq Engine) görevini başarıyla tamamladınız.",
                              "expectedValue": "Düşük Kardinalite Kuralı"
                    }
          }
],
        quiz: {
          "id": "q23_12",
          "title": "Veri Modeli Performansı ve Bellek Yönetimi (VertiPaq Engine) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_12_1",
                              "question": "Power Pivot'ta bellek tüketimini düşürmek ve hızı artırmak için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kardinalitesi yüksek (çok fazla tekil değer içeren) gereksiz sütunlar modelden kaldırılmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Daha çok sütun eklenmelidir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tüm sayılar metin yapılmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Bilgisayar kapatılmalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kardinalitesi düşük sütunlar VertiPaq tarafından muazzam şekilde sıkıştırılır.",
                              "measuredSkill": "Bellek ve Kardinalite Optimizasyonu"
                    }
          ]
}
      },
      {
        id: "sec23_l13",
        phaseId: 23,
        unitId: "u23_13",
        title: "Power Pivot ve DAX Final Projesi",
        shortDesc: "İlişkileri kurma, CALCULATE ve TOTALYTD ölçüleriyle kurumsal iş zekası modeli tamamlama.",
        category: "Veri Modeli, Power Pivot & DAX",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Yıldız şemayı kurup çoklu DAX ölçüleriyle yönetim dashboarduna veri beslemek.",
        prerequisites: ["sec23_l12"],
        commonMistakes: ["Ölçüleri mantıksal tablolara ayırmayıp dağınık bırakmak"],
        successCriteria: "Kurumsal DAX projesini başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["DAX Projesi"],
        initialWorkbook: createTableSheet("s23_13", "DaxProjeSayfasi", ["Model Bileşeni", "Durum", "Metrik"], [["Yıldız Şema", "3 Boyut + 1 Fact Bağlandı", "Aktif"], ["Temel Ölçüler", "Ciro, Kâr, Maliyet", "Hesaplandı"], ["Zaman Zekâsı", "YTD ve Geçen Yıl Büyüme", "Hazır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Power Pivot ve DAX Final Projesi",
                    "description": "Yıldız şemayı kurup çoklu DAX ölçüleriyle yönetim dashboarduna veri beslemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts23_13",
                    "title": "İş Zekası Mimarı Seviyesi",
                    "explanation": "Tebrikler! İlişkisel veri modeli kurdunuz, Fact ve Dimension tablolarını bağladınız, CALCULATE ve TOTALYTD ile kurumsal metrikler ürettiniz.",
                    "speechText": "Artık sadece bir Excel kullanıcısı değil, milyonlarca satırlık veriyi yönetebilen bir Veri ve İş Zekası Mimarısınız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t23_13_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine proje tamamlama derecesi olarak 'İş Zekası Mimarisi Onaylandı' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'İş Zekası Mimarisi Onaylandı' yazın.",
                              "C5 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Power Pivot ve DAX Final Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "İş Zekası Mimarisi Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q23_13",
          "title": "Power Pivot ve DAX Final Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_23_13_1",
                              "question": "Kurumsal bir Power Pivot projesinde başarının anahtarı hangi üçlünün doğru kurulmasıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yıldız Şema + Kesintisiz Tarih Tablosu + Açık DAX Ölçüleri (Measures)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca biçimlendirme"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Çok sayıda hesaplanan sütun"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin formülleri"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yıldız şema, temiz tarih tablosu ve açık ölçüler kurumsal BI projelerinin temel taşıdır.",
                              "measuredSkill": "Kurumsal İş Zekası Mimarlığı"
                    }
          ]
}
      }
    ]
  },
  {
    id: 24,
    category: "What-If Analizi & Optimizasyon",
    title: "24. What-If Analysis ve Optimizasyon",
    subtitle: "Hedef Ara, Senaryo Yöneticisi, Veri Tabloları, Çözücü (Solver) ve Duyarlılık Analizi",
    iconName: "Sliders",
    description: "Durum çözümlemesi, Hedef Ara (Goal Seek) ile tersine hesaplama, başabaş noktası, Senaryo Yöneticisi, tek/çift değişkenli veri tabloları, Solver eklentisi, kısıtlar ve kar maksimizasyonu.",
    lessons: [
      {
        id: "sec24_l1",
        phaseId: 24,
        unitId: "u24_1",
        title: "Durum Çözümlemesine (What-If Analysis) Giriş",
        shortDesc: "Farklı iş senaryolarında 'Fiyat %10 artarsa kâr ne olur?' sorularına matematiksel yanıt arama.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Giriş",
        primaryGoal: "What-If araçlarının karar destek süreçlerindeki rolünü kavramak.",
        prerequisites: ["sec23_l13"],
        commonMistakes: ["Formül içermeyen statik sayılarda durum çözümlemesi yapmaya çalışmak"],
        successCriteria: "Durum çözümlemesi temel mantığını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["What-If"],
        initialWorkbook: createTableSheet("s24_1", "WhatIfGiris", ["Parametre", "Baz Değer", "Senaryo Değeri"], [["Birim Fiyat (TL)", 100, 110], ["Satış Adedi", 5000, 5000], ["Toplam Ciro", 500000, 550000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Durum Çözümlemesine (What-If Analysis) Giriş",
                    "description": "What-If araçlarının karar destek süreçlerindeki rolünü kavramak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_1",
                    "title": "Varsayımlarla Karar Alma",
                    "explanation": "What-If (Durum Çözümlemesi) araçları girdi değişkenlerini değiştirerek çıktıların nasıl etkileneceğini simüle eder. Karar vericiler riskleri önceden görür.",
                    "speechText": "Şirket bütçeleri ve fiyatlandırma stratejileri durum çözümlemesi modelleriyle test edilir.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t24_1_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine senaryo kâr artışı olarak '50000 TL Artış' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'50000 TL Artış' yazın.",
                              "C5 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Durum Çözümlemesine (What-If Analysis) Giriş görevini başarıyla tamamladınız.",
                              "expectedValue": "50000 TL Artış"
                    }
          }
],
        quiz: {
          "id": "q24_1",
          "title": "Durum Çözümlemesine (What-If Analysis) Giriş Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_1_1",
                              "question": "Excel'de durum çözümlemesi (What-If Analysis) yapabilmek için sonuç hücresinde ne bulunmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Girdi hücrelerine bağlı dinamik bir formül"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin açıklaması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boşluk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Resim"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hedef ve senaryo araçları yalnızca matematiksel formül bağı olan hücreleri simüle edebilir.",
                              "measuredSkill": "What-If Analiz Şartları"
                    }
          ]
}
      },
      {
        id: "sec24_l2",
        phaseId: 24,
        unitId: "u24_2",
        title: "Hedef Ara (Goal Seek) ile Tersine Hesaplama",
        shortDesc: "100.000 TL net kâr elde etmek için kaç adet ürün satılması gerektiğini formülü tersten çözdürerek bulma.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Hedef Ara",
        primaryGoal: "Veri > Durum Çözümlemesi > Hedef Ara (Goal Seek) kutularını doğru eşleştirmek.",
        prerequisites: ["sec24_l1"],
        commonMistakes: ["Ayarlanacak Hücre (Set Cell) kısmına formül içermeyen düz sayı hücresi seçmek"],
        successCriteria: "Hedef Ara aracını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Hedef Ara", "Goal Seek"],
        initialWorkbook: createTableSheet("s24_2", "HedefAraSayfasi", ["Parametre", "Değer"], [["Birim Fiyat", 250], ["Satış Adedi", 300], ["Toplam Ciro", 75000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hedef Ara (Goal Seek) ile Tersine Hesaplama",
                    "description": "Veri > Durum Çözümlemesi > Hedef Ara (Goal Seek) kutularını doğru eşleştirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_2",
                    "title": "Formülü Tersten Çözme Sihirbazı",
                    "explanation": "Hedef Ara üç soru sorar: 1: Hangi hücre değişsin? (Toplam Ciro C4). 2: Sonuç kaç olsun? (100000). 3: Hangi hücreyi değiştirerek bu sonuca ulaşalım? (Satış Adedi C3).",
                    "speechText": "Matematiksel denklemleri elle çözmek yerine Excel deneme-yanılma algoritmasıyla saniyesinde tam çözümü bulur.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t24_2_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine formül olarak '=B2*B3' yazarak ciroyu bağlayın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=B2*B3 yazın.",
                              "B4 hücresine '=B2*B3' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Hedef Ara (Goal Seek) ile Tersine Hesaplama görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "B2*B3",
                                        "B2 * B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q24_2",
          "title": "Hedef Ara (Goal Seek) ile Tersine Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_2_1",
                              "question": "Hedef Ara (Goal Seek) penceresinde 'Ayarlanacak Hücre' (Set Cell) alanına ne seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Belirli bir değere ulaşması hedeflenen formüllü sonuç hücresi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Rastgele boş bir hücre"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin başlığı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih sütunu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ayarlanacak hücre, formül içeren ve hedef rakama gelmesi istenen hücredir.",
                              "measuredSkill": "Hedef Ara Yapılandırması"
                    }
          ]
}
      },
      {
        id: "sec24_l3",
        phaseId: 24,
        unitId: "u24_3",
        title: "Başabaş Noktası (Break-Even Point) Hesaplama Senaryosu",
        shortDesc: "Sabit maliyetler, değişken maliyetler ve birim fiyat verileriyle kârın sıfır olduğu kritik başabaş noktasını bulma.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Başabaş Analizi",
        primaryGoal: "Kâr formülü sıfır olacak şekilde Hedef Ara ile başabaş satış adedini tespit etmek.",
        prerequisites: ["sec24_l2"],
        commonMistakes: ["Sabit maliyet ile değişken maliyeti birbirine karıştırmak"],
        successCriteria: "Başabaş analizi modelleyebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Başabaş Noktası"],
        initialWorkbook: createTableSheet("s24_3", "BasabasSayfasi", ["Maliyet / Gelir Kalemi", "Tutar (TL)"], [["Sabit Maliyet (Kira, Maaş)", 120000], ["Birim Satış Fiyatı", 500], ["Birim Değişken Maliyet", 200], ["Başabaş Satış Adedi", 400]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Başabaş Noktası (Break-Even Point) Hesaplama Senaryosu",
                    "description": "Kâr formülü sıfır olacak şekilde Hedef Ara ile başabaş satış adedini tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_3",
                    "title": "Zarardan Kâra Geçiş Noktası",
                    "explanation": "Birim katkı payı = 500 - 200 = 300 TL'dir. Sabit maliyeti (120.000 TL) karşılamak için tam 400 adet satmak gerekir. 401. ürün şirkete ilk net kârını getirir.",
                    "speechText": "Yeni bir işe veya projeye başlarken başabaş satış adedini bilmek finansal fizibilitenin ilk kuralıdır.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t24_3_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine başabaş satış adedi formülünü '=B2/(B3-B4)' yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=B2/(B3-B4) yazın.",
                              "B5 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Başabaş Noktası (Break-Even Point) Hesaplama Senaryosu görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "B2/(B3-B4)",
                                        "B2 / (B3 - B4)"
                              ]
                    }
          }
],
        quiz: {
          "id": "q24_3",
          "title": "Başabaş Noktası (Break-Even Point) Hesaplama Senaryosu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_3_1",
                              "question": "Başabaş noktasında şirketin net kârı kaç TL'dir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "0 TL (Gelirler giderlere tam eşittir)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "100.000 TL"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Maksimum Kâr"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "-10.000 TL"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Başabaş noktası (Break-Even) toplam gelirin toplam maliyete eşit olduğu (kârın sıfır olduğu) noktadır.",
                              "measuredSkill": "Başabaş Noktası Analizi"
                    }
          ]
}
      },
      {
        id: "sec24_l4",
        phaseId: 24,
        unitId: "u24_4",
        title: "Senaryo Yöneticisi (Scenario Manager): İyimser, Kötümser ve Baz Durum",
        shortDesc: "Ekonomik koşullara göre birden fazla değişkeni (Enflasyon, Kur, Talep) aynı anda değiştirerek senaryolar kaydetme.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Senaryo Yöneticisi",
        primaryGoal: "Veri > Senaryo Yöneticisi > Ekle ile 'İyimser', 'Kötümser' ve 'Baz' senaryoları tanımlamak.",
        prerequisites: ["sec24_l3"],
        commonMistakes: ["Değişen hücrelerin adreslerini sabitlemeyip senaryolar arasında hücrelerin kaymasına yol açmak"],
        successCriteria: "Çoklu iş senaryoları tanımlayabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Senaryo Yöneticisi"],
        initialWorkbook: createTableSheet("s24_4", "SenaryoSayfasi", ["Senaryo Adı", "Fiyat Artışı %", "Talep Değişimi %"], [["Baz Senaryo", 0.1, 0.05], ["İyimser Senaryo", 0.2, 0.15], ["Kötümser Senaryo", 0.05, -0.1]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Senaryo Yöneticisi (Scenario Manager): İyimser, Kötümser ve Baz Durum",
                    "description": "Veri > Senaryo Yöneticisi > Ekle ile 'İyimser', 'Kötümser' ve 'Baz' senaryoları tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_4",
                    "title": "Risk Yönetimi ve Senaryo Modelleme",
                    "explanation": "Senaryo Yöneticisi aynı anda 32 farklı değişken hücresini değiştirebilir. Kötümser senaryoya tıkladığınızda talep düşer, maliyet artar ve kâr anında revize olur.",
                    "speechText": "Strateji toplantılarında yöneticilere 'Kriz olursa ne olur, büyüme olursa ne kazanırız?' sorularının yanıtını canlı sunarız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t24_4_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine senaryo yönetim standardı olarak '3 Boyutlu Senaryo Modeli' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'3 Boyutlu Senaryo Modeli' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Senaryo Yöneticisi (Scenario Manager): İyimser, Kötümser ve Baz Durum görevini başarıyla tamamladınız.",
                              "expectedValue": "3 Boyutlu Senaryo Modeli"
                    }
          }
],
        quiz: {
          "id": "q24_4",
          "title": "Senaryo Yöneticisi (Scenario Manager): İyimser, Kötümser ve Baz Durum Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_4_1",
                              "question": "Excel'de İyimser ve Kötümser gibi çok değişkenli durumları kaydedip tek tıkla değiştiren araç hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Senaryo Yöneticisi (Scenario Manager)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazım Denetimi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Koşullu Biçimlendirme"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metinden Sütunlara"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Senaryo Yöneticisi farklı değişken setlerini adlandırarak saklar ve tek tıkla çalıştırır.",
                              "measuredSkill": "Senaryo Modelleme"
                    }
          ]
}
      },
      {
        id: "sec24_l5",
        phaseId: 24,
        unitId: "u24_5",
        title: "Senaryo Özet Raporu Oluşturma ve Karşılaştırma",
        shortDesc: "Tanımlanan tüm senaryoları tek bir özet sayfada yan yana pivot tablosu gibi karşılaştırmalı raporlama.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Senaryo Özeti",
        primaryGoal: "Senaryo Yöneticisi > Özet (Summary) butonuna basarak 'Senaryo Özeti' sayfası üretmek.",
        prerequisites: ["sec24_l4"],
        commonMistakes: ["Özet raporu almadan önce değişken hücrelere Ad Yöneticisinden isim vermeyip raporda $B$2 gibi çirkin adresler görmek"],
        successCriteria: "Senaryo özet raporu üretebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Senaryo Özeti"],
        initialWorkbook: createTableSheet("s24_5", "SenaryoOzetSayfasi", ["Senaryo", "Tahmini Ciro (TL)", "Net Kâr (TL)"], [["Kötümser", 1800000, 150000], ["Baz Durum", 2200000, 320000], ["İyimser", 2800000, 540000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Senaryo Özet Raporu Oluşturma ve Karşılaştırma",
                    "description": "Senaryo Yöneticisi > Özet (Summary) butonuna basarak 'Senaryo Özeti' sayfası üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_5",
                    "title": "Yönetim Kurulu Senaryo Tablosu",
                    "explanation": "Senaryo Özeti butonu tüm olasılıkları tek bir sayfada yan yana dizer. Değişken hücrelere 'Fiyat', 'Maliyet' gibi isimler verdiyseniz rapor mükemmel bir profesyonellikle üretilir.",
                    "speechText": "Yöneticiler tek bir tabloda kötümser, baz ve iyimser senaryoların kâr üzerindeki etkisini kıyaslar.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t24_5_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine senaryo özet durumu olarak 'Karşılaştırmalı Özet Hazır' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Karşılaştırmalı Özet Hazır' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Senaryo Özet Raporu Oluşturma ve Karşılaştırma görevini başarıyla tamamladınız.",
                              "expectedValue": "Karşılaştırmalı Özet Hazır"
                    }
          }
],
        quiz: {
          "id": "q24_5",
          "title": "Senaryo Özet Raporu Oluşturma ve Karşılaştırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_5_1",
                              "question": "Senaryo özet raporunda $B$1, $B$2 gibi adresler yerine 'Fiyat', 'Adet' gibi temiz isimlerin görünmesi için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücrelere Ad Kutusu veya İsim Yöneticisi ile anlamlı adlar tanımlanmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Rapor el ile düzenlenmelidir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Font değiştirilmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreler renklendirilmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Adlandırılmış hücreler senaryo özet raporunda doğrudan başlık olarak kullanılır.",
                              "measuredSkill": "Adlandırılmış Hücrelerle Senaryo Raporu"
                    }
          ]
}
      },
      {
        id: "sec24_l6",
        phaseId: 24,
        unitId: "u24_6",
        title: "Tek Değişkenli Veri Tablosu (One-Variable Data Table)",
        shortDesc: "Faiz oranı %1'den %5'e kadar arttığında aylık kredi taksitinin nasıl değişeceğini tek hamlede tablolama.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Veri Tablosu",
        primaryGoal: "Veri > Durum Çözümlemesi > Veri Tablosu (Data Table) ile sütun girdi hücresi tanımlamak.",
        prerequisites: ["sec24_l5"],
        commonMistakes: ["Formül referansını tablonun sol üst köşesine çapraz bağlamayı unutmak"],
        successCriteria: "Tek değişkenli veri tablosu kurabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Veri Tablosu", "TABLE"],
        initialWorkbook: createTableSheet("s24_6", "TekDegiskenTablosu", ["Faiz Oranı", "Aylık Taksit (TL)"], [[0.02, 5400], [0.03, 5800], [0.04, 6200], [0.05, 6650]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tek Değişkenli Veri Tablosu (One-Variable Data Table)",
                    "description": "Veri > Durum Çözümlemesi > Veri Tablosu (Data Table) ile sütun girdi hücresi tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_6",
                    "title": "Duyarlılık Analizinin Hızlı Yolu",
                    "explanation": "Veri Tablosu (Data Table) arka planda özel bir dizi formülü ({=TABLE(;A1)}) çalıştırır. 50 farklı faiz oranını tek tek formülle hesaplamak yerine saniyesinde tek hamlede tabloya döker.",
                    "speechText": "Kredi, ciro ve fiyat hassasiyetlerini anında test etmek için en güçlü analitik araçtır.",
                    "targetCell": "B6"
          }
],
        tasks: [
          {
                    "id": "t24_6_1",
                    "stepNumber": 1,
                    "instruction": "B6 hücresine ortalama taksiti '=ORTALAMA(B2:B5)' formülüyle yazın.",
                    "targetCell": "B6",
                    "hints": [
                              "B6 hücresini seçin.",
                              "=ORTALAMA(B2:B5) yazın.",
                              "B6 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "B6",
                              "successMessage": "Tebrikler! Tek Değişkenli Veri Tablosu (One-Variable Data Table) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "ORTALAMA",
                                        "B2:B5"
                              ]
                    }
          }
],
        quiz: {
          "id": "q24_6",
          "title": "Tek Değişkenli Veri Tablosu (One-Variable Data Table) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_6_1",
                              "question": "Tek değişkenli dikey bir Veri Tablosunda girdi hücresi hangi kutucuğa tanımlanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sütun Giriş Hücresi (Column Input Cell)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Satır Giriş Hücresi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hedef Hücre"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Değer Hücresi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değişkenler alt alta sütun halinde dizildiğinde 'Sütun Giriş Hücresi' seçilir.",
                              "measuredSkill": "Veri Tablosu Parametreleme"
                    }
          ]
}
      },
      {
        id: "sec24_l7",
        phaseId: 24,
        unitId: "u24_7",
        title: "İki Değişkenli Veri Tablosu (Two-Variable Data Table)",
        shortDesc: "Hem Fiyatın hem de Satış Adedinin aynı anda değiştiği durumlarda iki boyutlu kâr matrisi kurma.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Matris Duyarlılık",
        primaryGoal: "Sol üst köşeye formülü koyup hem Satır Giriş Hücresini hem Sütun Giriş Hücresini eşlemek.",
        prerequisites: ["sec24_l6"],
        commonMistakes: ["Satır giriş hücresi ile sütun giriş hücresini ters seçip sonuçları çapraz yanlış üretmek"],
        successCriteria: "İki değişkenli duyarlılık matrisi kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["İki Değişkenli Veri Tablosu"],
        initialWorkbook: createTableSheet("s24_7", "IkiDegiskenMatrisi", ["Fiyat / Adet", "1000 Adet", "2000 Adet", "3000 Adet"], [[100, 100000, 200000, 300000], [150, 150000, 300000, 450000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İki Değişkenli Veri Tablosu (Two-Variable Data Table)",
                    "description": "Sol üst köşeye formülü koyup hem Satır Giriş Hücresini hem Sütun Giriş Hücresini eşlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_7",
                    "title": "İki Boyutlu Duyarlılık Matrisi",
                    "explanation": "Sol tarafa fiyatları (100, 150, 200), üst satıra adetleri (1000, 2000, 3000) yazıp sol üst kesişime '=CiroFormülü' bağlarız. Veri Tablosu tüm matrisi saniyesinde hesaplar.",
                    "speechText": "Finansal modellemede iki boyutlu stres testi ve duyarlılık analizinin zirve noktasıdır.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t24_7_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine maksimum matris cirosu olarak 450000 yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "450000 sayısını yazın.",
                              "D4 hücresine 450000 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! İki Değişkenli Veri Tablosu (Two-Variable Data Table) görevini başarıyla tamamladınız.",
                              "expectedValue": 450000
                    }
          }
],
        quiz: {
          "id": "q24_7",
          "title": "İki Değişkenli Veri Tablosu (Two-Variable Data Table) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_7_1",
                              "question": "İki değişkenli veri tablosunda formül bağlantısı nereye yerleştirilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Satır ve sütun başlıklarının kesiştiği sol üst köşedeki hücreye"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "En sağ alt köşeye"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tablonun ortasına"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ayrı bir sayfaya"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formül tablonun sol üst köşesine yerleştirilir ve Excel oradan satır/sütun döngüsü kurar.",
                              "measuredSkill": "İki Değişkenli Matris Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec24_l8",
        phaseId: 24,
        unitId: "u24_8",
        title: "Çözücü (Solver) Eklentisi Temelleri ve Kurulumu",
        shortDesc: "Hedef Ara'nın tek değişken kısıtını aşıp onlarca kısıt altında optimizasyon yapan Solver'ı aktif etme.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Solver Kurulumu",
        primaryGoal: "Dosya > Seçenekler > Eklentiler > Git > Çözücü Eklentisi (Solver Add-in) onay kutusunu işaretlemek.",
        prerequisites: ["sec24_l7"],
        commonMistakes: ["Solver eklentisini açmadan Veri sekmesinde arayıp bulamamak"],
        successCriteria: "Solver eklentisini aktif edebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Solver", "Çözücü"],
        initialWorkbook: createTableSheet("s24_8", "SolverKurulumSayfasi", ["Eklenti Adı", "Konum", "Durum"], [["Çözücü Eklentisi (Solver)", "Veri Sekmesi > Çözümleme Grubu", "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Çözücü (Solver) Eklentisi Temelleri ve Kurulumu",
                    "description": "Dosya > Seçenekler > Eklentiler > Git > Çözücü Eklentisi (Solver Add-in) onay kutusunu işaretlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_8",
                    "title": "Doğrusal ve Doğrusal Olmayan Optimizasyon",
                    "explanation": "Hedef Ara yalnızca tek bir hücreyi değiştirebilir. Ancak Solver onlarca hücreyi aynı anda değiştirebilir ve 'Bütçe 500.000'i geçmesin, stok tam sayı olsun' gibi sınırsız kısıt koyabilir.",
                    "speechText": "Solver büyük şirketlerin lojistik, üretim planlama ve portföy optimizasyonunda kullandığı endüstriyel matematik motorudur.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t24_8_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine Solver durumu olarak 'Solver Eklentisi Aktif' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Solver Eklentisi Aktif' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Çözücü (Solver) Eklentisi Temelleri ve Kurulumu görevini başarıyla tamamladınız.",
                              "expectedValue": "Solver Eklentisi Aktif"
                    }
          }
],
        quiz: {
          "id": "q24_8",
          "title": "Çözücü (Solver) Eklentisi Temelleri ve Kurulumu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_8_1",
                              "question": "Excel'de Solver (Çözücü) eklentisini kullanabilmek için ilk olarak ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dosya > Seçenekler > Eklentiler menüsünden Çözücü Eklentisi aktif edilmelidir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yeni yazılım satın alınmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bilgisayar formatlanmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel silinmelidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Solver Excel ile birlikte gelir ancak varsayılan olarak kapalıdır; Eklentiler'den açılır.",
                              "measuredSkill": "Solver Kurulumu ve Aktivasyonu"
                    }
          ]
}
      },
      {
        id: "sec24_l9",
        phaseId: 24,
        unitId: "u24_9",
        title: "Solver ile Karar Değişkenleri ve Kısıtlar (Constraints) Tanımlama",
        shortDesc: "Hedef Hücre (Maksimum Kâr), Değişen Hücreler (Üretim Miktarı) ve Kısıtlar (Hammadde, İşçilik) kurgusu.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Kısıt Tanımlama",
        primaryGoal: "Kısıtlama Ekle (Add Constraint) penceresinden <=, >=, = ve int (Tam Sayı) kuralı koymak.",
        prerequisites: ["sec24_l8"],
        commonMistakes: ["Üretim adetlerine tam sayı (int) kısıtı koymayıp 14.8 adet ürün üretilmesi gibi saçma sonuçlar almak"],
        successCriteria: "Solver kısıtlarını hatasız kurabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Kısıtlar (Constraints)"],
        initialWorkbook: createTableSheet("s24_9", "SolverKisitSayfasi", ["Kısıt Kalemi", "İşleç", "Kısıt Değeri"], [["Maksimum İşçilik Saati", "<=", 400], ["Depo Kapasitesi (Adet)", "<=", 1500], ["Üretim Adetleri", "int", "Tam Sayı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Solver ile Karar Değişkenleri ve Kısıtlar (Constraints) Tanımlama",
                    "description": "Kısıtlama Ekle (Add Constraint) penceresinden <=, >=, = ve int (Tam Sayı) kuralı koymak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_9",
                    "title": "Kısıtların Matematiksel Gücü",
                    "explanation": "Solver penceresinde 'Kısıtlama Ekle' diyerek gerçek hayat engellerini Excel'e öğretiriz: Toplam çalışma saati <= 400 olmalı, bütçe <= 50.000 TL olmalı ve adetler tam sayı (int) olmalı.",
                    "speechText": "Bu kısıtlar altında Solver milyonlarca kombinasyonu tarayarak size maksimum kârı veren tek kombinasyonu bulur.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t24_9_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine kısıt modeli kuralı olarak 'Lineer Programlama (Simplex LP)' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Lineer Programlama (Simplex LP)' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Solver ile Karar Değişkenleri ve Kısıtlar (Constraints) Tanımlama görevini başarıyla tamamladınız.",
                              "expectedValue": "Lineer Programlama (Simplex LP)"
                    }
          }
],
        quiz: {
          "id": "q24_9",
          "title": "Solver ile Karar Değişkenleri ve Kısıtlar (Constraints) Tanımlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_9_1",
                              "question": "Solver'da üretilecek fiziksel ürün adetlerinin buçuklu çıkmaması için hangi kısıt türü seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "int (Tam Sayı / Integer)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "<="
                                        },
                                        {
                                                  "id": "c",
                                                  "text": ">="
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "bin (İkili)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "int kısıtı karar değişkenlerinin yalnızca tam sayı olmasını zorunlu kılar.",
                              "measuredSkill": "Solver Kısıt Tanımlama"
                    }
          ]
}
      },
      {
        id: "sec24_l10",
        phaseId: 24,
        unitId: "u24_10",
        title: "Maksimum Kâr ve Minimum Maliyet Optimizasyonu",
        shortDesc: "Kısıtlı hammaddeyle hangi üründen kaç adet üretilirse en yüksek kârın elde edileceğini Solver ile çözme.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Kâr Maksimizasyonu",
        primaryGoal: "Simplex LP çözme yöntemiyle hedef hücreyi 'En Büyük' (Max) yaparak çözüme ulaşmak.",
        prerequisites: ["sec24_l9"],
        commonMistakes: ["Lineer problemlerde GRG Doğrusal Olmayan seçip çözüm süresini uzatmak"],
        successCriteria: "Optimizasyon problemini çözebilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Simplex LP", "Optimizasyon"],
        initialWorkbook: createTableSheet("s24_10", "KarMaksimizasyon", ["Ürün", "Optimal Üretim Adedi", "Birim Kâr (TL)", "Toplam Kâr (TL)"], [["Model A", 120, 500, 60000], ["Model B", 80, 750, 60000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Maksimum Kâr ve Minimum Maliyet Optimizasyonu",
                    "description": "Simplex LP çözme yöntemiyle hedef hücreyi 'En Büyük' (Max) yaparak çözüme ulaşmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_10",
                    "title": "Optimal Üretim Kararı",
                    "explanation": "Solver'ın 'Çöz' (Solve) butonuna bastığınızda saniyeler içinde Model A'dan 120, Model B'den 80 adet üretildiğinde tüm işçilik ve hammadde kısıtlarına uyularak 120.000 TL rekor kâra ulaşıldığını görürsünüz.",
                    "speechText": "Tahminlerle değil, saf matematiksel optimizasyonla şirket kaynaklarını en verimli şekilde dağıtırsınız.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t24_10_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine maksimum toplam kârı '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA(D2:D3) yazın.",
                              "D4 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Maksimum Kâr ve Minimum Maliyet Optimizasyonu görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q24_10",
          "title": "Maksimum Kâr ve Minimum Maliyet Optimizasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_10_1",
                              "question": "Doğrusal (lineer) kâr maksimizasyonu problemlerinde Solver'da hangi çözüm yöntemi seçilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Simplex LP"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "GRG Doğrusal Olmayan"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Evrimsel (Evolutionary)"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Manuel"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Doğrusal optimizasyon modellerinde Simplex LP en hızlı ve kesin global çözümü verir.",
                              "measuredSkill": "Çözüm Yöntemi Seçimi"
                    }
          ]
}
      },
      {
        id: "sec24_l11",
        phaseId: 24,
        unitId: "u24_11",
        title: "What-If ve Optimizasyon Bölüm Sınavı",
        shortDesc: "Hedef Ara, Veri Tabloları ve Solver araçlarını doğru iş senaryolarıyla eşleştirme uzmanlık testi.",
        category: "What-If Analizi & Optimizasyon",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Farklı iş problemlerinde doğru optimizasyon aracını seçip uygulamak.",
        prerequisites: ["sec24_l10"],
        commonMistakes: ["Çok değişkenli kısıtlı problemlerde Hedef Ara kullanmaya çalışıp yetersiz kalmak"],
        successCriteria: "Optimizasyon karar matrisini yönetebilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Optimizasyon Projesi"],
        initialWorkbook: createTableSheet("s24_11", "OptimizasyonProje", ["İş Problemi", "En Uygun Excel Aracı", "Durum"], [["Kredi Taksitini 5000 TL'ye Sabitleme", "Hedef Ara (Goal Seek)", "Başarılı"], ["Kısıtlı Bütçeyle Maksimum Kâr", "Çözücü (Solver)", "Başarılı"], ["Fiyat-Adet Kâr Matrisi", "İki Değişkenli Veri Tablosu", "Başarılı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "What-If ve Optimizasyon Bölüm Sınavı",
                    "description": "Farklı iş problemlerinde doğru optimizasyon aracını seçip uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts24_11",
                    "title": "Karar Destek Uzmanlığı",
                    "explanation": "Tebrikler! Tek değişkenli tersine problemde Hedef Ara'yı, matris duyarlılıkta Veri Tablosunu ve çok kısıtlı kar maksimizasyonunda Solver'ı ne zaman ve nasıl kullanacağınızı kanıtladınız.",
                    "speechText": "Şirketinizin stratejik kararlarında yöneticilerin en güvendiği analitik danışman seviyesine ulaştınız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t24_11_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine final başarı durumu olarak 'Optimizasyon Uzmanı' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'Optimizasyon Uzmanı' yazın.",
                              "C5 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! What-If ve Optimizasyon Bölüm Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Optimizasyon Uzmanı"
                    }
          }
],
        quiz: {
          "id": "q24_11",
          "title": "What-If ve Optimizasyon Bölüm Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_24_11_1",
                              "question": "Hangi durumda Solver (Çözücü) kullanılması zorunludur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Birden çok değişken ve uyulması gereken kapasite/bütçe kısıtları (constraints) olduğunda"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca tek bir hücre değişeceğinde"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Basit bir toplama yapılacağında"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metin birleştirileceğinde"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Birden çok karar değişkeni ve kısıt varsa yalnızca Solver problemi çözebilir.",
                              "measuredSkill": "Optimizasyon Aracı Seçim Becerisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 25,
    category: "Finansal Fonksiyonlar & İş Analizi",
    title: "25. Finansal Fonksiyonlar ve İş Analizi",
    subtitle: "Kredi Amortismanı, Nakit Akışı, İndirgeme, NPV, IRR, XNPV ve XIRR",
    iconName: "DollarSign",
    description: "Paranın zaman değeri, DEVRESEL_ÖDEME (PMT), PPMT ve IPMT kredi amortismanı, bugünkü/gelecek değer (PV/FV), yatırım değerleme (NBD/NPV), iç verim oranı (İÇ_VERİM_ORANI/IRR), düzensiz nakit akışları (XNPV/XIRR) ve finansal modelleme.",
    lessons: [
      {
        id: "sec25_l1",
        phaseId: 25,
        unitId: "u25_1",
        title: "Finans Matematiğinin Temeli ve Paranın Zaman Değeri",
        shortDesc: "Bugünkü 100 TL ile gelecekteki 100 TL'nin eşit olmaması ve nakit akışı yönü (eksi/artı).",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Finans Matematiği",
        primaryGoal: "Nakit çıkışlarını eksi (-), nakit girişlerini artı (+) olarak modellemek.",
        prerequisites: ["sec24_l11"],
        commonMistakes: ["Nakit çıkışına eksi koymayıp formülün negatif sonuç üretmesini hata sanmak"],
        successCriteria: "Paranın zaman değeri prensiplerini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Finans Matematiği"],
        initialWorkbook: createTableSheet("s25_1", "ZamanDegeriSayfasi", ["Kavram", "Finansal Anlamı", "Excel İşareti"], [["Nakit Çıkışı (Yatırım/Ödeme)", "Cebinizden para çıkar", "Eksi (-) Değer"], ["Nakit Girişi (Kredi/Tahsilat)", "Cebinize para girer", "Artı (+) Değer"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Finans Matematiğinin Temeli ve Paranın Zaman Değeri",
                    "description": "Nakit çıkışlarını eksi (-), nakit girişlerini artı (+) olarak modellemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_1",
                    "title": "Nakit Akışının Altın Kuralı",
                    "explanation": "Finansal formüllerde nakit akışının yönü hayatidir. Bir kredi çekiyorsanız bankadan cebinize para girer (+), her ay taksit ödüyorsanız cebinizden para çıkar (-).",
                    "speechText": "Paranın zaman değeri, enflasyon ve faiz ortamında gelecekteki paranın bugünkü değerini hesaplamamızı sağlar.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t25_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine finansal modelleme kuralı olarak 'Nakit Yönü Kuralı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Nakit Yönü Kuralı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Finans Matematiğinin Temeli ve Paranın Zaman Değeri görevini başarıyla tamamladınız.",
                              "expectedValue": "Nakit Yönü Kuralı"
                    }
          }
],
        quiz: {
          "id": "q25_1",
          "title": "Finans Matematiğinin Temeli ve Paranın Zaman Değeri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_1_1",
                              "question": "Excel finansal fonksiyonlarında cebinizden çıkan bir yatırım veya kredi taksiti nasıl girilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Negatif eksi (-) işaretli bir sayı olarak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Pozitif artı işaretli olarak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin olarak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tırnak içinde"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Finans fonksiyonlarında nakit çıkışları eksi (-), nakit girişleri artı (+) ile temsil edilir.",
                              "measuredSkill": "Nakit Akışı Yönü Standardı"
                    }
          ]
}
      },
      {
        id: "sec25_l2",
        phaseId: 25,
        unitId: "u25_2",
        title: "DEVRESEL_ÖDEME (PMT) ile Kredi Taksiti Hesaplama",
        shortDesc: "Faiz oranı, vade (dönem sayısı) ve anapara tutarına göre sabit aylık kredi taksitini bulma.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Kredi Hesaplama",
        primaryGoal: "=DEVRESEL_ÖDEME(AylıkFaiz; Vade; -KrediTutarı) formülünü uygulamak.",
        prerequisites: ["sec25_l1"],
        commonMistakes: ["Yıllık faiz oranını 12'ye bölmeden aylık taksit hesaplamaya çalışıp devasa taksit bulmak"],
        successCriteria: "DEVRESEL_ÖDEME fonksiyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["DEVRESEL_ÖDEME", "PMT"],
        initialWorkbook: createTableSheet("s25_2", "DevreselOdemeSayfasi", ["Parametre", "Değer"], [["Yıllık Faiz Oranı", 0.24], ["Vade (Ay)", 36], ["Kredi Tutarı (TL)", 100000], ["Aylık Taksit (TL)", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DEVRESEL_ÖDEME (PMT) ile Kredi Taksiti Hesaplama",
                    "description": "=DEVRESEL_ÖDEME(AylıkFaiz; Vade; -KrediTutarı) formülünü uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_2",
                    "title": "Aylık Faiz Frekansı Kuralı",
                    "explanation": "Kredi taksiti aylık ödenecekse yıllık faiz oranı mutlaka 12'ye bölünmelidir: =DEVRESEL_ÖDEME(B2/12; B3; -B4). Eksi işareti taksitin pozitif görünmesini sağlar.",
                    "speechText": "Taşıt, konut ve ticari kredilerin aylık maliyetini tek formülle hesaplamanın standardı DEVRESEL_ÖDEME'dir.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t25_2_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine '=DEVRESEL_ÖDEME(B2/12; B3; -B4)' formülünü yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=DEVRESEL_ÖDEME formülünü açın.",
                              "B5 hücresine '=DEVRESEL_ÖDEME(B2/12; B3; -B4)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! DEVRESEL_ÖDEME (PMT) ile Kredi Taksiti Hesaplama görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "DEVRESEL_ÖDEME",
                                        "B2/12",
                                        "B3",
                                        "-B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_2",
          "title": "DEVRESEL_ÖDEME (PMT) ile Kredi Taksiti Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_2_1",
                              "question": "Yıllık faizi %24 olan 36 aylık bir kredinin aylık taksitini hesaplarken ilk parametre ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "%24 / 12 (Yıllık faiz 12'ye bölünür)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "%24 * 12"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "%24"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "36"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Vade ay cinsindense faiz oranı da aylığa dönüştürülmek için 12'ye bölünmelidir.",
                              "measuredSkill": "DEVRESEL_ÖDEME Frekans Uyumu"
                    }
          ]
}
      },
      {
        id: "sec25_l3",
        phaseId: 25,
        unitId: "u25_3",
        title: "ANA_PARA_ÖDEMESİ (PPMT) ve FAİZ_TUTARI (IPMT) Ayrımı",
        shortDesc: "Ödenen taksitin ne kadarının borcu kapattığını (anapara), ne kadarının banka faizine gittiğini bulma.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Anapara ve Faiz",
        primaryGoal: "PPMT ve IPMT fonksiyonlarıyla belirli bir dönemin anapara/faiz ayrımını yapmak.",
        prerequisites: ["sec25_l2"],
        commonMistakes: ["İlk taksitlerde faiz oranının yüksek, son taksitlerde anapara payının yüksek olduğunu bilmemek"],
        successCriteria: "PPMT ve IPMT fonksiyonlarını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["ANA_PARA_ÖDEMESİ", "FAİZ_TUTARI", "PPMT", "IPMT"],
        initialWorkbook: createTableSheet("s25_3", "PpmtIpmtSayfasi", ["Dönem (Ay)", "Toplam Taksit", "Anapara Payı (PPMT)", "Faiz Payı (IPMT)"], [[1, 3923, 1923, 2000], [36, 3923, 3846, 77]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "ANA_PARA_ÖDEMESİ (PPMT) ve FAİZ_TUTARI (IPMT) Ayrımı",
                    "description": "PPMT ve IPMT fonksiyonlarıyla belirli bir dönemin anapara/faiz ayrımını yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_3",
                    "title": "Taksitin Anatomisi: Anapara + Faiz",
                    "explanation": "Her taksitte: Taksit = PPMT + IPMT. İlk aylarda borç büyük olduğu için taksitin çoğu faize gider. Vade sonuna doğru anapara payı hızla yükselir.",
                    "speechText": "Şirket muhasebesinde faiz giderlerini vergi matrahından düşebilmek için anapara ve faiz ayrımı zorunludur.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t25_3_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine 1. ayın toplam taksitini '=C2+D2' formülüyle doğrulayın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=C2+D2 yazın.",
                              "B4 hücresine '=C2+D2' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! ANA_PARA_ÖDEMESİ (PPMT) ve FAİZ_TUTARI (IPMT) Ayrımı görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "C2+D2",
                                        "C2 + D2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_3",
          "title": "ANA_PARA_ÖDEMESİ (PPMT) ve FAİZ_TUTARI (IPMT) Ayrımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_3_1",
                              "question": "Kredi taksidinin doğrudan anapara borcunu azaltan kısmını hesaplayan Excel fonksiyonu hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "ANA_PARA_ÖDEMESİ (PPMT)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "FAİZ_TUTARI (IPMT)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "TOPLA"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "BUGÜN"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "PPMT (Principal Payment) ödemenin anapara kısmını hesaplar.",
                              "measuredSkill": "PPMT ve IPMT Ayrımı"
                    }
          ]
}
      },
      {
        id: "sec25_l4",
        phaseId: 25,
        unitId: "u25_4",
        title: "Kredi Amortisman Tablosu (İtfa Planı) Hazırlama",
        shortDesc: "1'den 36'ya kadar her ayın kalan anapara borcunu ve toplam ödenen faizi gösteren itfa tablosu.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "İtfa Planı",
        primaryGoal: "Kredi amortisman çizelgesini formüllerle dinamik olarak aşağı kopyalamak.",
        prerequisites: ["sec25_l3"],
        commonMistakes: ["Kalan borç hücresinde bir önceki bakiyeden ödenen anaparayı düşmeyi unutmak"],
        successCriteria: "Eksiksiz amortisman tablosu kurabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Amortisman Tablosu"],
        initialWorkbook: createTableSheet("s25_4", "AmortismanSayfasi", ["Ay", "Taksit", "Anapara", "Faiz", "Kalan Borç"], [[1, 3923, 1923, 2000, 98077], [2, 3923, 1961, 1962, 96116]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kredi Amortisman Tablosu (İtfa Planı) Hazırlama",
                    "description": "Kredi amortisman çizelgesini formüllerle dinamik olarak aşağı kopyalamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_4",
                    "title": "Profesyonel Banka İtfa Planı",
                    "explanation": "Kalan borç formülü: '=E2 - C3'. Her ay ödenen anapara borçtan düşer ve son ayın sonunda kalan borç tam olarak 0.00 TL olur.",
                    "speechText": "Bankaların verdiği ödeme planlarının birebir aynısını Excel'de dinamik olarak inşa edebilmek temel bir finansal beceridir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t25_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine ilk iki ayın ödenen toplam anaparasını '=TOPLA(C2:C3)' formülüyle yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "=TOPLA(C2:C3) yazın.",
                              "C4 hücresine formülü uygulayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Kredi Amortisman Tablosu (İtfa Planı) Hazırlama görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "C2:C3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_4",
          "title": "Kredi Amortisman Tablosu (İtfa Planı) Hazırlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_4_1",
                              "question": "Bir kredi amortisman tablosunun doğru kurulduğu nasıl test edilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Son taksit ödendiğinde Kalan Borç hücresinin tam olarak 0 TL olmasıyla"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tablonun renkli olmasıyla"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücrelerin kilitlenmesiyle"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcıdan çıktı alınmasıyla"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Doğru amortisman tablosunda son dönemde kalan borç sıfıra eşitlenir.",
                              "measuredSkill": "Amortisman Doğrulama Kriteri"
                    }
          ]
}
      },
      {
        id: "sec25_l5",
        phaseId: 25,
        unitId: "u25_5",
        title: "GELECEKTEKİ_DEĞER (FV) ile Düzenli Birikimlerin Getirisi",
        shortDesc: "Her ay kenara 5.000 TL atıldığında ve yıllık %30 getiri sağlandığında 5 yıl sonraki serveti hesaplama.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Gelecekteki Değer",
        primaryGoal: "=GELECEKTEKİ_DEĞER(Oran; Dönem_Sayısı; -AylıkTutar) formülünü uygulamak.",
        prerequisites: ["sec25_l4"],
        commonMistakes: ["Bileşik faiz etkisini göz ardı edip düz çarpma yapmak"],
        successCriteria: "GELECEKTEKİ_DEĞER fonksiyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["GELECEKTEKİ_DEĞER", "FV"],
        initialWorkbook: createTableSheet("s25_5", "GelecektekiDegerSayfasi", ["Parametre", "Değer"], [["Aylık Yatırım (TL)", 5000], ["Yıllık Getiri Oranı", 0.3], ["Yatırım Süresi (Ay)", 60], ["5 Yıl Sonraki Servet", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "GELECEKTEKİ_DEĞER (FV) ile Düzenli Birikimlerin Getirisi",
                    "description": "=GELECEKTEKİ_DEĞER(Oran; Dönem_Sayısı; -AylıkTutar) formülünü uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_5",
                    "title": "Bileşik Getirinin Gücü",
                    "explanation": "Albert Einstein'ın 'dünyanın sekizinci harikası' dediği bileşik faiz getirisi GELECEKTEKİ_DEĞER fonksiyonuyla hesaplanır: '=GELECEKTEKİ_DEĞER(B3/12; B4; -B2)'.",
                    "speechText": "Bireysel emeklilik, şirket rezerv fonları ve yatırım hedeflerinin gelecekteki büyüklüğünü anında öngörürsünüz.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t25_5_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine '=GELECEKTEKİ_DEĞER(B3/12; B4; -B2)' formülünü yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=GELECEKTEKİ_DEĞER formülünü açın.",
                              "B5 hücresine '=GELECEKTEKİ_DEĞER(B3/12; B4; -B2)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! GELECEKTEKİ_DEĞER (FV) ile Düzenli Birikimlerin Getirisi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "GELECEKTEKİ_DEĞER",
                                        "B3/12",
                                        "B4",
                                        "-B2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_5",
          "title": "GELECEKTEKİ_DEĞER (FV) ile Düzenli Birikimlerin Getirisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_5_1",
                              "question": "Düzenli tasarrufların gelecekteki toplam birikimini hesaplayan fonksiyon hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "GELECEKTEKİ_DEĞER (FV)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "BUGÜNKÜ_DEĞER (PV)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "DEVRESEL_ÖDEME"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "TOPLA"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "FV (Future Value) periyodik ödemelerin ve faizin gelecekte ulaşacağı toplam büyüklüğü verir.",
                              "measuredSkill": "Gelecekteki Değer Hesaplama"
                    }
          ]
}
      },
      {
        id: "sec25_l6",
        phaseId: 25,
        unitId: "u25_6",
        title: "BUGÜNKÜ_DEĞER (PV) ile Gelecekteki Nakit Akışını İndirgeme",
        shortDesc: "3 yıl sonra ödenecek 500.000 TL'lik bir senedin bugünkü piyasa faiz oranıyla güncel peşin değerini bulma.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Bugünkü Değer",
        primaryGoal: "=BUGÜNKÜ_DEĞER(YıllıkFaiz; Yıl; 0; -GelecekTutar) formülünü uygulamak.",
        prerequisites: ["sec25_l5"],
        commonMistakes: ["Taksit ödemesi olmayan tek seferlik ödemelerde [öde] parametresini 0 geçmeyi unutmak"],
        successCriteria: "BUGÜNKÜ_DEĞER fonksiyonunu uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["BUGÜNKÜ_DEĞER", "PV"],
        initialWorkbook: createTableSheet("s25_6", "BugunkuDegerSayfasi", ["Parametre", "Değer"], [["Gelecekteki Tutar (TL)", 500000], ["İskonto / Faiz Oranı", 0.25], ["Vade (Yıl)", 3], ["Bugünkü Peşin Değeri", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "BUGÜNKÜ_DEĞER (PV) ile Gelecekteki Nakit Akışını İndirgeme",
                    "description": "=BUGÜNKÜ_DEĞER(YıllıkFaiz; Yıl; 0; -GelecekTutar) formülünü uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_6",
                    "title": "Geleceğin Parasını Bugüne Çekme",
                    "explanation": "Gelecekteki bir paranın bugünkü değeri enflasyon ve fırsat maliyeti nedeniyle daha düşüktür: '=BUGÜNKÜ_DEĞER(B3; B4; 0; -B2)'.",
                    "speechText": "Şirket satın almalarında, tahvil değerlemede ve peşin iskonto pazarlıklarında BUGÜNKÜ_DEĞER en kritik pazarlık aracıdır.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t25_6_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine '=BUGÜNKÜ_DEĞER(B3; B4; 0; -B2)' formülünü yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=BUGÜNKÜ_DEĞER formülünü açın.",
                              "B5 hücresine '=BUGÜNKÜ_DEĞER(B3; B4; 0; -B2)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! BUGÜNKÜ_DEĞER (PV) ile Gelecekteki Nakit Akışını İndirgeme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "BUGÜNKÜ_DEĞER",
                                        "B3",
                                        "B4",
                                        "-B2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_6",
          "title": "BUGÜNKÜ_DEĞER (PV) ile Gelecekteki Nakit Akışını İndirgeme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_6_1",
                              "question": "Gelecekte ele geçecek tek seferlik bir paranın bugünkü değerini bulurken [öde] parametresine ne yazılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "0 (Çünkü düzenli taksit ödemesi yoktur)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Gelecek tutar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Faiz oranı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Düzenli taksit yoksa [öde] sıfır geçilir ve [gd] kısmına gelecek değer yazılır.",
                              "measuredSkill": "Bugünkü Değer İskonto Mantığı"
                    }
          ]
}
      },
      {
        id: "sec25_l7",
        phaseId: 25,
        unitId: "u25_7",
        title: "NET_BUGÜNKÜ_DEĞER (NPV) ile Yatırım Karlılığı Değerleme",
        shortDesc: "Bir makine veya fabrika yatırımının yıllara sari nakit girişlerini indirgeyerek kârlı olup olmadığını ölçme.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Yatırım Değerleme",
        primaryGoal: "=NBD(İskontoOranı; GelecekAkışlar) + BaşlangıçYatırımı formülüyle NPV hesaplamak.",
        prerequisites: ["sec25_l6"],
        commonMistakes: ["Başlangıç yatırımını (0. yılı) NBD formülünün içine dahil edip ilk yatırımı da iskonto etmek (0. yıl formülün dışına eklenir)"],
        successCriteria: "NET_BUGÜNKÜ_DEĞER fonksiyonunu hatasız uygulayabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["NET_BUGÜNKÜ_DEĞER", "NPV", "NBD"],
        initialWorkbook: createTableSheet("s25_7", "NbdSayfasi", ["Yıl", "Nakit Akışı (TL)"], [[0, -1000000], [1, 350000], [2, 450000], [3, 550000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "NET_BUGÜNKÜ_DEĞER (NPV) ile Yatırım Karlılığı Değerleme",
                    "description": "=NBD(İskontoOranı; GelecekAkışlar) + BaşlangıçYatırımı formülüyle NPV hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_7",
                    "title": "Excel'in En Ünlü Tuzağı: NBD(0. Yıl)",
                    "explanation": "NBD fonksiyonu ilk seçilen değeri 1. yılın sonu olarak kabul eder ve 1 yıl iskonto eder! Bu yüzden formül: '=NBD(0.15; B3:B5) + B2' şeklinde yazılır. Başlangıç yatırımı dışarıda toplanır.",
                    "speechText": "NPV > 0 ise yatırım şirket için kârlıdır ve değer yaratır; NPV < 0 ise proje reddedilmelidir.",
                    "targetCell": "B6"
          }
],
        tasks: [
          {
                    "id": "t25_7_1",
                    "stepNumber": 1,
                    "instruction": "B6 hücresine NBD kuralını doğrulayan '=NBD(0.15; B3:B5) + B2' formülünü yazın.",
                    "targetCell": "B6",
                    "hints": [
                              "B6 hücresini seçin.",
                              "=NBD formülünü yazın.",
                              "B6 hücresine '=NBD(0.15; B3:B5) + B2' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B6",
                              "successMessage": "Tebrikler! NET_BUGÜNKÜ_DEĞER (NPV) ile Yatırım Karlılığı Değerleme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "NBD",
                                        "B3:B5",
                                        "B2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_7",
          "title": "NET_BUGÜNKÜ_DEĞER (NPV) ile Yatırım Karlılığı Değerleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_7_1",
                              "question": "Excel'de NBD (NPV) hesaplarken 0. yıldaki ilk yatırım tutarı neden parantez içine dahil edilmez?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çünkü Excel parantez içindeki ilk elemanı 1. yıl kabul eder ve gereksiz iskonto uygular"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel hata verdiği için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Negatif sayı kabul etmediği için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih olmadığı için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "NBD formülü 1. yıldan başlatılmalı, bugünkü 0. yıl harcaması dışarıdan toplanmalıdır.",
                              "measuredSkill": "NBD Fonksiyon Kuralı"
                    }
          ]
}
      },
      {
        id: "sec25_l8",
        phaseId: 25,
        unitId: "u25_8",
        title: "İÇ_VERİM_ORANI (IRR) ile Proje Getiri Oranını Ölçme",
        shortDesc: "Yatırımın Net Bugünkü Değerini (NPV) tam olarak sıfır yapan başabaş getiri yüzdesini bulma.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "İç Verim Oranı",
        primaryGoal: "=İÇ_VERİM_ORANI(B2:B5) formülüyle tüm nakit akışını kapsayan getiri oranını hesaplamak.",
        prerequisites: ["sec25_l7"],
        commonMistakes: ["İÇ_VERİM_ORANI aralığına başlangıçtaki negatif yatırımı dahil etmemek (en az bir negatif bir pozitif değer şarttır)"],
        successCriteria: "İÇ_VERİM_ORANI fonksiyonunu uygulayabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["İÇ_VERİM_ORANI", "IRR"],
        initialWorkbook: createTableSheet("s25_8", "IrrSayfasi", ["Dönem", "Nakit Akışı (TL)"], [["Yıl 0 (Yatırım)", -500000], ["Yıl 1", 200000], ["Yıl 2", 250000], ["Yıl 3", 300000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İÇ_VERİM_ORANI (IRR) ile Proje Getiri Oranını Ölçme",
                    "description": "=İÇ_VERİM_ORANI(B2:B5) formülüyle tüm nakit akışını kapsayan getiri oranını hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_8",
                    "title": "Şirketlerin Yatırım Kriteri: IRR",
                    "explanation": "NBD'nin aksine İÇ_VERİM_ORANI başlangıçtaki negatif tutarı da aralığa dahil eder: '=İÇ_VERİM_ORANI(B2:B5)'. Çıkan yüzde şirketin sermaye maliyetinden (WACC) yüksekse projeye onay verilir.",
                    "speechText": "Yatırım komitelerinde projeler iç verim oranına göre sıralanır ve en yüksek getiri sağlayan fabrikalar onay alır.",
                    "targetCell": "B6"
          }
],
        tasks: [
          {
                    "id": "t25_8_1",
                    "stepNumber": 1,
                    "instruction": "B6 hücresine '=İÇ_VERİM_ORANI(B2:B5)' formülünü yazın.",
                    "targetCell": "B6",
                    "hints": [
                              "B6 hücresini seçin.",
                              "=İÇ_VERİM_ORANI formülünü açın.",
                              "B6 hücresine '=İÇ_VERİM_ORANI(B2:B5)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B6",
                              "successMessage": "Tebrikler! İÇ_VERİM_ORANI (IRR) ile Proje Getiri Oranını Ölçme görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "İÇ_VERİM_ORANI",
                                        "B2:B5"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_8",
          "title": "İÇ_VERİM_ORANI (IRR) ile Proje Getiri Oranını Ölçme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_8_1",
                              "question": "İÇ_VERİM_ORANI (IRR) fonksiyonunun çalışabilmesi için veri aralığında hangi şart zorunludur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "En az bir negatif (çıkış) ve en az bir pozitif (giriş) değer bulunmalıdır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm sayılar pozitif olmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Aralık 10 yılı aşmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih sütunu gereklidir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yatırım getirisi hesaplanabilmesi için nakit çıkışı ve nakit girişi bir arada olmalıdır.",
                              "measuredSkill": "İÇ_VERİM_ORANI Matematiksel Mantığı"
                    }
          ]
}
      },
      {
        id: "sec25_l9",
        phaseId: 25,
        unitId: "u25_9",
        title: "DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD (XNPV) ile Gerçek Takvim Tarihli Analiz",
        shortDesc: "Nakit akışlarının eşit yıllık aralıklarla değil, düzensiz gerçek tarihlerde gerçekleştiği durumlarda net bugünkü değer.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Düzensiz Nakit Akışları",
        primaryGoal: "=DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD(İskonto; Değerler; Tarihler) formülünü uygulamak.",
        prerequisites: ["sec25_l8"],
        commonMistakes: ["Tarih sütunundaki günleri sıralı girmemek"],
        successCriteria: "XNPV fonksiyonunu uygulayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD", "XNPV"],
        initialWorkbook: createTableSheet("s25_9", "XnpvSayfasi", ["Tarih", "Nakit Akışı (TL)"], [["2026-01-01", -1000000], ["2026-04-15", 300000], ["2026-09-30", 500000], ["2027-02-10", 400000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD (XNPV) ile Gerçek Takvim Tarihli Analiz",
                    "description": "=DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD(İskonto; Değerler; Tarihler) formülünü uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_9",
                    "title": "Gerçek Hayat Düzensizdir: XNPV",
                    "explanation": "Standart NBD her ödemenin tam 1 yıl arayla yapıldığını varsayar. Oysa gerçek hayatta paralar 15 Nisan'da veya 30 Eylül'de girer. XNPV gerçek gün sayısını hesaba katar.",
                    "speechText": "NBD'nin aksine XNPV 0. günün tarihini de içine alır ve ilk günü otomatik bugünkü değer kabul eder.",
                    "targetCell": "B6"
          }
],
        tasks: [
          {
                    "id": "t25_9_1",
                    "stepNumber": 1,
                    "instruction": "B6 hücresine '=DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD(0.18; B2:B5; A2:A5)' formülünü yazın.",
                    "targetCell": "B6",
                    "hints": [
                              "B6 hücresini seçin.",
                              "=DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD yazın.",
                              "B6 hücresine '=DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD(0.18; B2:B5; A2:A5)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B6",
                              "successMessage": "Tebrikler! DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD (XNPV) ile Gerçek Takvim Tarihli Analiz görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD",
                                        "0.18",
                                        "B2:B5",
                                        "A2:A5"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_9",
          "title": "DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD (XNPV) ile Gerçek Takvim Tarihli Analiz Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_9_1",
                              "question": "DÜZENSİZ_NAKİT_AKIMI_İÇİN_NBD (XNPV) fonksiyonunu standart NBD'den üstün kılan nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ödemelerin kesin takvim tarihlerini baz alarak gün sayısına göre hassas iskonto yapması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Daha yavaş olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca dövizle çalışması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formülsüz olması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "XNPV gerçek takvim günlerini kullandığı için finansal modellemede mutlak hassasiyet sağlar.",
                              "measuredSkill": "XNPV Takvim Hassasiyeti"
                    }
          ]
}
      },
      {
        id: "sec25_l10",
        phaseId: 25,
        unitId: "u25_10",
        title: "DÜZENSİZ_İÇ_VERİM_ORANI (XIRR) ile Düzensiz Getiri Analizi",
        shortDesc: "Farklı tarihlerde yapılan sermaye artırımları ve temettü ödemelerinin yıllıklandırılmış getirisini hesaplama.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "XIRR Analizi",
        primaryGoal: "=DÜZENSİZ_İÇ_VERİM_ORANI(Değerler; Tarihler) formülüyle yıllık iç verim oranını bulmak.",
        prerequisites: ["sec25_l9"],
        commonMistakes: ["İlk tarihin en eski tarih olmamasına dikkat etmemek"],
        successCriteria: "XIRR fonksiyonunu uygulayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["DÜZENSİZ_İÇ_VERİM_ORANI", "XIRR"],
        initialWorkbook: createTableSheet("s25_10", "XirrSayfasi", ["Tarih", "Nakit Akışı (TL)"], [["2026-01-10", -200000], ["2026-06-20", 80000], ["2027-01-15", 180000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "DÜZENSİZ_İÇ_VERİM_ORANI (XIRR) ile Düzensiz Getiri Analizi",
                    "description": "=DÜZENSİZ_İÇ_VERİM_ORANI(Değerler; Tarihler) formülüyle yıllık iç verim oranını bulmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_10",
                    "title": "Özel Sermaye ve Portföy Getirisi: XIRR",
                    "explanation": "Girişim sermayesi (Venture Capital) ve hisse senedi portföylerinde para giriş çıkışları düzensizdir. XIRR tüm bu düzensiz hareketlerin yıllık bileşik getirisini hassasiyetle hesaplar.",
                    "speechText": "CFA ve kurumsal finans uzmanlarının en güvendiği getiri ölçüm metriği XIRR'dır.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t25_10_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine '=DÜZENSİZ_İÇ_VERİM_ORANI(B2:B4; A2:A4)' formülünü yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=DÜZENSİZ_İÇ_VERİM_ORANI yazın.",
                              "B5 hücresine '=DÜZENSİZ_İÇ_VERİM_ORANI(B2:B4; A2:A4)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! DÜZENSİZ_İÇ_VERİM_ORANI (XIRR) ile Düzensiz Getiri Analizi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "DÜZENSİZ_İÇ_VERİM_ORANI",
                                        "B2:B4",
                                        "A2:A4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q25_10",
          "title": "DÜZENSİZ_İÇ_VERİM_ORANI (XIRR) ile Düzensiz Getiri Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_10_1",
                              "question": "Düzensiz tarihlerdeki yatırım ve kâr payı akışlarının yıllık getiri oranını hesaplayan fonksiyon hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "DÜZENSİZ_İÇ_VERİM_ORANI (XIRR)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "ORTALAMA"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "YUVARLA"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "BUGÜN"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "XIRR düzensiz tarihli nakit akışlarının yıllıklandırılmış getirisini verir.",
                              "measuredSkill": "XIRR Portföy Getirisi"
                    }
          ]
}
      },
      {
        id: "sec25_l11",
        phaseId: 25,
        unitId: "u25_11",
        title: "Finansal Modellemede En Sık Yapılan Hatalar",
        shortDesc: "Dönem-faiz frekansı uyuşmazlığı, NBD 0. yıl kayması ve dairesel faiz hesaplama tuzakları.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Model Hataları",
        primaryGoal: "Finansal modellerde denetim yaparak formül tutarsızlıklarını engellemek.",
        prerequisites: ["sec25_l10"],
        commonMistakes: ["Aylık vadede yıllık faiz kullanıp krediyi fahiş hesaplamak"],
        successCriteria: "Finansal model denetimini yapabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Model Denetimi"],
        initialWorkbook: createTableSheet("s25_11", "ModelHataSayfasi", ["Hata Türü", "Nedeni", "Çözümü"], [["Frekans Uyuşmazlığı", "Yıllık faizi 12'ye bölmemek", "Faiz/12 yapılmalı"], ["NBD 0. Yıl Kayması", "Yatırımı NBD içine almak", "İlk yatırım dışarıda toplanmalı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Finansal Modellemede En Sık Yapılan Hatalar",
                    "description": "Finansal modellerde denetim yaparak formül tutarsızlıklarını engellemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_11",
                    "title": "Finansal Hataların Milyon Liralık Bedeli",
                    "explanation": "Dünyada yanlış Excel formülleri yüzünden batan şirketler ve milyonlarca dolar zarar eden fonlar vardır. En yaygın hata: Faiz frekansını (aylık/yıllık) vadeyle eşleştirmemektir.",
                    "speechText": "Finansal modelinizi yayınlamadan önce mutlaka birim uyumunu ve nakit akış yönlerini iki kez denetleyin.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t25_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine denetim kuralı olarak 'Frekans ve Yön Doğrulandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Frekans ve Yön Doğrulandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Finansal Modellemede En Sık Yapılan Hatalar görevini başarıyla tamamladınız.",
                              "expectedValue": "Frekans ve Yön Doğrulandı"
                    }
          }
],
        quiz: {
          "id": "q25_11",
          "title": "Finansal Modellemede En Sık Yapılan Hatalar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_11_1",
                              "question": "Bir finansal modelde aylık taksit hesaplanırken yapılan en kritik hata nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yıllık faiz oranının 12'ye bölünmeden doğrudan formüle yazılması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazı tipinin küçük olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Para birimi simgesi eklenmesi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Satır eklenmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Aylık taksitte faiz de aylık olmalıdır; yıllık faiz 12'ye bölünmezse devasa hata oluşur.",
                              "measuredSkill": "Finansal Model Risk Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec25_l12",
        phaseId: 25,
        unitId: "u25_12",
        title: "İki Yatırım Projesini Kıyaslama Final Vaka Analizi",
        shortDesc: "Fabrika A ve Fabrika B yatırımlarını NBD ve İÇ_VERİM_ORANI ile kıyaslayıp doğru yatırım kararını verme.",
        category: "Finansal Fonksiyonlar & İş Analizi",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Karar matrisinde hem NPV hem IRR metriklerini birleştirerek nihai fizibilite sunumu yapmak.",
        prerequisites: ["sec25_l11"],
        commonMistakes: ["Yalnızca IRR'a bakıp daha büyük ölçekli ve daha çok para kazandıran projeyi kaçırmak (Ölçek Yanılgısı)"],
        successCriteria: "Kapsamlı yatırım fizibilitesi yapabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Yatırım Fizibilitesi"],
        initialWorkbook: createTableSheet("s25_12", "YatirimKiyaslama", ["Proje", "Yatırım (TL)", "NBD (NPV)", "İÇ_VERİM (IRR)", "Karar"], [["Fabrika Projesi A", 2000000, 450000, 0.28, "Onaylandı"], ["Fabrika Projesi B", 3500000, 220000, 0.19, "Reddedildi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İki Yatırım Projesini Kıyaslama Final Vaka Analizi",
                    "description": "Karar matrisinde hem NPV hem IRR metriklerini birleştirerek nihai fizibilite sunumu yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts25_12",
                    "title": "Yatırım Komitesi Kararı",
                    "explanation": "Tebrikler! İki fabrikanın nakit akışlarını modellediniz, NBD'lerini iskonto ettiniz, iç verim oranlarını hesapladınız ve şirketin sermayesini en yüksek değer yaratan Proje A'ya yönlendirdiniz.",
                    "speechText": "Artık kurumsal finans, sermaye bütçelemesi ve nakit akış modellemesinde tam donanımlı bir finans uzmanısınız.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t25_12_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine onay durumu olarak 'Onaylandı' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "'Onaylandı' yazın.",
                              "E2 hücresine 'Onaylandı' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! İki Yatırım Projesini Kıyaslama Final Vaka Analizi görevini başarıyla tamamladınız.",
                              "expectedValue": "Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q25_12",
          "title": "İki Yatırım Projesini Kıyaslama Final Vaka Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_25_12_1",
                              "question": "İki kârlı yatırım alternatifi arasında seçim yaparken en temel karar kriteri ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sermaye kısıtı altında şirkete en yüksek Net Bugünkü Değeri (NBD/NPV) kazandıran proje"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Rengi en güzel olan"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "En kısa süren"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Rastgele seçim"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "NBD şirketin piyasa değerine doğrudan eklenen net zenginliği gösterir ve nihai kriterdir.",
                              "measuredSkill": "Sermaye Bütçelemesi ve Karar Verme"
                    }
          ]
}
      }
    ]
  }
];
