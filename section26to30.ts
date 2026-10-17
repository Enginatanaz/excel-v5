import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_26_TO_30: CurriculumPhase[] = [
  {
    id: 26,
    category: "Makrolar & VBA Otomasyonu",
    title: "26. Makrolar ve VBA ile İş Otomasyonu",
    subtitle: "Makro Kaydetme, VBE Düzenleyici, Range Nesnesi, Döngüler ve Hata Yönetimi",
    iconName: "Code",
    description: "Makro kaydetme ve güvenlik ayarları, VBE editörü, değişkenler (Dim), Range/Cells nesneleri, If-Then-Else koşulları, For-Next/For-Each döngüleri, kullanıcı tanımlı fonksiyonlar (UDF), On Error hata yönetimi ve F8 hata ayıklama.",
    lessons: [
      {
        id: "sec26_l1",
        phaseId: 26,
        unitId: "u26_1",
        title: "Makro Nedir ve Geliştirici (Developer) Sekmesini Açma",
        shortDesc: "Tekrarlayan rutin işleri kaydedip tek tuşla saniyeler içinde çalıştırma mantığı.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Giriş ve Arayüz",
        primaryGoal: "Şeridi Özelleştir penceresinden Geliştirici (Developer) sekmesini görünür kılmak.",
        prerequisites: ["sec25_l12"],
        commonMistakes: ["Geliştirici sekmesini bulamayıp makroları çalıştıramamak"],
        successCriteria: "Geliştirici sekmesini aktif edebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Makrolar", "Geliştirici Sekmesi"],
        initialWorkbook: createTableSheet("s26_1", "MakroGirisSayfasi", ["Adım", "Açıklama", "Durum"], [["1. Dosya > Seçenekler", "Şeridi Özelleştir'e git", "Tamamlandı"], ["2. Geliştirici Kutusu", "Geliştirici sekmesini işaretle", "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Makro Nedir ve Geliştirici (Developer) Sekmesini Açma",
                    "description": "Şeridi Özelleştir penceresinden Geliştirici (Developer) sekmesini görünür kılmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_1",
                    "title": "Rutin İşleri Otomatiğe Bağlama",
                    "explanation": "Her sabah yarım saat süren tablo biçimlendirme ve rapor hazırlama işlerini bir kez makro olarak kaydedip bir butona bağladığınızda, aynı iş tek tıkla 2 saniyede biter.",
                    "speechText": "Excel'de otomasyon dünyasının kapısını açmak için ilk iş Geliştirici sekmesini şeride eklemektir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t26_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine geliştirici durumu olarak 'Geliştirici Sekmesi Açık' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Geliştirici Sekmesi Açık' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Makro Nedir ve Geliştirici (Developer) Sekmesini Açma görevini başarıyla tamamladınız.",
                              "expectedValue": "Geliştirici Sekmesi Açık"
                    }
          }
],
        quiz: {
          "id": "q26_1",
          "title": "Makro Nedir ve Geliştirici (Developer) Sekmesini Açma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_1_1",
                              "question": "Excel'de makro ve VBA araçlarına erişmek için şeritte hangi sekme açılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Geliştirici (Developer)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Çiz"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfa Düzeni"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Gözden Geçir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Makro kaydetme, VBE ve form denetimleri Geliştirici sekmesinde yer alır.",
                              "measuredSkill": "Geliştirici Sekmesi Aktivasyonu"
                    }
          ]
}
      },
      {
        id: "sec26_l2",
        phaseId: 26,
        unitId: "u26_2",
        title: "Makro Güvenliği ve .xlsm Dosya Formatı",
        shortDesc: "Standart .xlsx dosyalarında makroların kaydedilememesi ve Makro İçerebilen Çalışma Kitabı (.xlsm) standardı.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Dosya Formatı",
        primaryGoal: "Farklı Kaydet > 'Excel Makro İçerebilen Çalışma Kitabı (*.xlsm)' formatını seçmek.",
        prerequisites: ["sec26_l1"],
        commonMistakes: ["Makro yazıp standart .xlsx olarak kaydederek tüm VBA kodlarının silinmesine neden olmak"],
        successCriteria: ".xlsm format standardını yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: [".xlsm", "Makro Güvenliği"],
        initialWorkbook: createTableSheet("s26_2", "FormatGuvenlikSayfasi", ["Format Uzantısı", "Makro Desteği", "Güvenlik"], [[".xlsx", "Makro İÇERMEZ (Kodlar Silinir)", "Varsayılan"], [".xlsm", "Makro İÇERİR (Kodlar Saklanır)", "Makro Uyumlu"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Makro Güvenliği ve .xlsm Dosya Formatı",
                    "description": "Farklı Kaydet > 'Excel Makro İçerebilen Çalışma Kitabı (*.xlsm)' formatını seçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_2",
                    "title": "Kodları Kaybetmemenin Tek Yolu: .xlsm",
                    "explanation": "Excel bir güvenlik önlemi olarak standart .xlsx dosyalarına yazılan makroları kaydederken siler! Kodlarınızın korunması için dosyayı mutlaka '.xlsm' olarak kaydetmelisiniz.",
                    "speechText": "Ayrıca Güven Merkezi > Makro Ayarları'ndan 'Bildirimde bulunarak tüm makroları devre dışı bırak' seçeneği önerilir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_2_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine doğru dosya uzantısı olarak '.xlsm' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'.xlsm' yazın.",
                              "B4 hücresine '.xlsm' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Makro Güvenliği ve .xlsm Dosya Formatı görevini başarıyla tamamladınız.",
                              "expectedValue": ".xlsm"
                    }
          }
],
        quiz: {
          "id": "q26_2",
          "title": "Makro Güvenliği ve .xlsm Dosya Formatı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_2_1",
                              "question": "Yazılan makro kodlarının kaybolmaması için dosya hangi uzantıyla kaydedilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": ".xlsm (Excel Makro İçerebilen Çalışma Kitabı)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ".xlsx"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": ".csv"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": ".txt"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": ".xlsx makro kodlarını saklamaz; makrolu dosyalar .xlsm olarak kaydedilmelidir.",
                              "measuredSkill": "Makro Dosya Formatları"
                    }
          ]
}
      },
      {
        id: "sec26_l3",
        phaseId: 26,
        unitId: "u26_3",
        title: "İlk Makroyu Kaydetme ve Şekle/Butona Makro Atama",
        shortDesc: "Geliştirici > Makro Kaydet ile tablo başlıklarını yeşile boyayıp bunu bir butona bağlama.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Makro Kaydet",
        primaryGoal: "Makro Kaydet (Record Macro) ve Şekle Sağ Tık > Makro Ata (Assign Macro) adımlarını uygulamak.",
        prerequisites: ["sec26_l2"],
        commonMistakes: ["Makro kaydederken gereksiz hücrelere tıklayıp gereksiz kod kalabalığı yaratmak"],
        successCriteria: "Makro kaydedebilmek ve butona atayabilmek.",
        level: "Başlangıç",
        durationMinutes: 12,
        functionsUsed: ["Makro Kaydet", "Makro Ata"],
        initialWorkbook: createTableSheet("s26_3", "IlkMakroSayfasi", ["İşlem", "Kısayol Tuşu", "Atanan Buton"], [["TabloFormatla", "Ctrl+Shift+F", "Yuvarlatılmış Dikdörtgen"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İlk Makroyu Kaydetme ve Şekle/Butona Makro Atama",
                    "description": "Makro Kaydet (Record Macro) ve Şekle Sağ Tık > Makro Ata (Assign Macro) adımlarını uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_3",
                    "title": "Kayıt Cihazı Mantığı",
                    "explanation": "Makro Kaydet'e bastığınız andan itibaren klavye ve farenizle yaptığınız her hareket arka planda VBA koduna tercüme edilir. Kaydı Durdur'a bastığınızda işlem tamamlanır.",
                    "speechText": "Ekle sekmesinden şık bir düğme çizip sağ tıklayarak 'Makro Ata' dediğinizde tek tıklamayla tüm o adımlar tekrarlanır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t26_3_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine atanan makro adı olarak 'TabloFormatla' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'TabloFormatla' yazın.",
                              "C3 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! İlk Makroyu Kaydetme ve Şekle/Butona Makro Atama görevini başarıyla tamamladınız.",
                              "expectedValue": "TabloFormatla"
                    }
          }
],
        quiz: {
          "id": "q26_3",
          "title": "İlk Makroyu Kaydetme ve Şekle/Butona Makro Atama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_3_1",
                              "question": "Sayfaya eklenen bir şekil veya butona makro bağlamak için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Şekle sağ tıklanıp 'Makro Ata' (Assign Macro) seçilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Şekil silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formül çubuğuna yazılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı boyutu büyütülür"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sağ tık > Makro Ata seçeneği şekli tıklanabilir bir otomasyon butonuna dönüştürür.",
                              "measuredSkill": "Makro Atama Becerisi"
                    }
          ]
}
      },
      {
        id: "sec26_l4",
        phaseId: 26,
        unitId: "u26_4",
        title: "VBA Editörü (VBE - Alt+F11), Modüller ve Proje Gezgini Arayüzü",
        shortDesc: "Alt+F11 kısayoluyla Visual Basic for Applications kod editörünü açma ve modül yapısını tanıma.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "VBA Editörü",
        primaryGoal: "Project Explorer ve Ekle (Insert) > Modül (Module) yapısını yönetmek.",
        prerequisites: ["sec26_l3"],
        commonMistakes: ["Kodları sayfa nesnesi (Sheet1) yerine standart bir Modül (Module) içine yazmayı bilmemek"],
        successCriteria: "VBE ortamında gezinebilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Alt+F11", "VBE", "Modül"],
        initialWorkbook: createTableSheet("s26_4", "VbeArayuzSayfasi", ["VBE Paneli", "Kısayol", "İşlev"], [["VBA Editörü Aç", "Alt + F11", "Geliştirici Ortamı"], ["Kod Modülü Ekle", "Insert > Module", "Genel Makro Alanı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "VBA Editörü (VBE - Alt+F11), Modüller ve Proje Gezgini Arayüzü",
                    "description": "Project Explorer ve Ekle (Insert) > Modül (Module) yapısını yönetmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_4",
                    "title": "Kaputun Altındaki Motor: Alt + F11",
                    "explanation": "Alt+F11 tuşlarına bastığınızda Excel'in arkasındaki devasa VBA kodlama stüdyosu açılır. Sol tarafta sayfalarınızı ve eklediğiniz 'Module1' kod dosyasını görürsünüz.",
                    "speechText": "Tüm genel amaçlı makro prosedürleri Insert > Module diyerek açılan temiz modül sayfalarına yazılır.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_4_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine VBE açma kısayolu olarak 'Alt + F11' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Alt + F11' yazın.",
                              "B4 hücresine 'Alt + F11' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! VBA Editörü (VBE - Alt+F11), Modüller ve Proje Gezgini Arayüzü görevini başarıyla tamamladınız.",
                              "expectedValue": "Alt + F11"
                    }
          }
],
        quiz: {
          "id": "q26_4",
          "title": "VBA Editörü (VBE - Alt+F11), Modüller ve Proje Gezgini Arayüzü Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_4_1",
                              "question": "Excel'de VBA kod düzenleyicisini (VBE) anında açan klavye kısayolu hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alt + F11"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + F1"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + F3"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "F12"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Alt + F11 doğrudan Visual Basic Düzenleyicisini açar.",
                              "measuredSkill": "VBE Arayüzü Kısayolları"
                    }
          ]
}
      },
      {
        id: "sec26_l5",
        phaseId: 26,
        unitId: "u26_5",
        title: "Sub Prosedürleri ve Temel Kod Yapısı (Sub ... End Sub)",
        shortDesc: "Kendi ilk makro prosedürünüzü el ile yazma ve kod bloklarının çalıştırılması.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Sub Prosedürleri",
        primaryGoal: "Sub RaporHazirla() ... End Sub bloğunu kurgulamak.",
        prerequisites: ["sec26_l4"],
        commonMistakes: ["Sub başlığını yazıp End Sub ile kapatmayı unutmak"],
        successCriteria: "Temel Sub prosedürü yazabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Sub", "End Sub"],
        initialWorkbook: createTableSheet("s26_5", "SubProsedurSayfasi", ["Kod Satırı", "Açıklama"], [["Sub RaporTemizle()", "Prosedür başlangıcı"], ["Range(\"A1\").Value = \"Başarılı\"", "Hücreye değer yaz"], ["End Sub", "Prosedür bitişi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sub Prosedürleri ve Temel Kod Yapısı (Sub ... End Sub)",
                    "description": "Sub RaporHazirla() ... End Sub bloğunu kurgulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_5",
                    "title": "Kod Yazmanın Temel Alfabesi",
                    "explanation": "VBA'da her işlem bir Sub prosedürü içinde başlar ve biter. 'Sub' anahtar kelimesi, prosedür adı ve parantezlerle açılır; 'End Sub' ile tamamlanır.",
                    "speechText": "Prosedür içindeyken F5 tuşuna bastığınızda yazdığınız kod o an Excel sayfasında çalıştırılır.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_5_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine prosedür bitiş ifadesi olarak 'End Sub' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'End Sub' yazın.",
                              "B4 hücresine 'End Sub' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Sub Prosedürleri ve Temel Kod Yapısı (Sub ... End Sub) görevini başarıyla tamamladınız.",
                              "expectedValue": "End Sub"
                    }
          }
],
        quiz: {
          "id": "q26_5",
          "title": "Sub Prosedürleri ve Temel Kod Yapısı (Sub ... End Sub) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_5_1",
                              "question": "VBA'da bağımsız bir makro prosedürü hangi ifadeyle sonlandırılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "End Sub"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Stop"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Exit"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Close"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sub prosedürleri 'End Sub' anahtar kelimesiyle kapanır.",
                              "measuredSkill": "VBA Kod Blokları"
                    }
          ]
}
      },
      {
        id: "sec26_l6",
        phaseId: 26,
        unitId: "u26_6",
        title: "Değişkenler, Veri Tipleri (Dim) ve Option Explicit Kuralı",
        shortDesc: "Dim ile bellek tanımlama (Long, Double, String, Boolean) ve Option Explicit zorunluluğu.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Değişkenler",
        primaryGoal: "Dim satir As Long, Dim musteriAdi As String tanımlamalarını yapmak.",
        prerequisites: ["sec26_l5"],
        commonMistakes: ["Büyük sayılar için Integer kullanıp 'Overflow' (Taşma) hatası almak (Daima Long kullanılmalıdır)"],
        successCriteria: "Değişkenleri ve veri tiplerini doğru tanımlayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Dim", "Option Explicit", "Long", "String"],
        initialWorkbook: createTableSheet("s26_6", "DegiskenSayfasi", ["Değişken Adı", "Önerilen Tür", "Açıklama"], [["satirSayisi", "Long", "2 milyara kadar tam sayılar (Taşmayı önler)"], ["toplamCiro", "Double", "Ondalıklı büyük tutarlar"], ["sehirAdi", "String", "Metin ifadeleri"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Değişkenler, Veri Tipleri (Dim) ve Option Explicit Kuralı",
                    "description": "Dim satir As Long, Dim musteriAdi As String tanımlamalarını yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_6",
                    "title": "Profesyonel Kodun Şartı: Option Explicit",
                    "explanation": "Modülün en tepesine 'Option Explicit' yazmak tanımsız değişken kullanımını yasaklar. Böylece yazım hatalarından kaynaklanan hayalet bug'lar daha kod çalışmadan yakalanır.",
                    "speechText": "Excel'de satır numaraları 1 milyonu aştığı için satır değişkenleri asla Integer değil, daima 'Long' tanımlanmalıdır.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_6_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine satır numaraları için doğru tam sayı türü olarak 'Long' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Long' yazın.",
                              "B4 hücresine 'Long' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Değişkenler, Veri Tipleri (Dim) ve Option Explicit Kuralı görevini başarıyla tamamladınız.",
                              "expectedValue": "Long"
                    }
          }
],
        quiz: {
          "id": "q26_6",
          "title": "Değişkenler, Veri Tipleri (Dim) ve Option Explicit Kuralı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_6_1",
                              "question": "Excel'de satır numarası tutan bir değişkenin taşma (Overflow) hatası vermemesi için hangi türde tanımlanması gerekir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Long (Çünkü Integer yalnızca 32.767'ye kadar sayabilir)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Integer"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Byte"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boolean"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de 1.048.576 satır olduğu için satır indisleri daima Long tanımlanmalıdır.",
                              "measuredSkill": "VBA Veri Tipleri ve Bellek"
                    }
          ]
}
      },
      {
        id: "sec26_l7",
        phaseId: 26,
        unitId: "u26_7",
        title: "Hücre ve Aralık Manipülasyonu: Range, Cells ve Offset",
        shortDesc: "Range(\"A1:B10\"), Cells(satır, sütun) ve Offset(satırÖteleme, sütunÖteleme) ile hücre yönetimi.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Range & Cells",
        primaryGoal: "Cells(i, 2).Value = 100 ve Range(\"A1\").Offset(1, 0) komutlarını kullanmak.",
        prerequisites: ["sec26_l6"],
        commonMistakes: ["Cells(satır, sütun) yapısında sütunu önce yazıp satırla yer değiştirmek"],
        successCriteria: "Range ve Cells nesnelerini ustalıkla yönetebilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Range", "Cells", "Offset"],
        initialWorkbook: createTableSheet("s26_7", "RangeCellsSayfasi", ["VBA İfadesi", "İşaret Ettiği Hücre", "Değer"], [["Range(\"B2\").Value", "B2 hücresi", 50000], ["Cells(2, 2).Value", "B2 hücresi (2. Satır, 2. Sütun)", 50000], ["Range(\"B2\").Offset(1, 0).Value", "B3 hücresi (1 satır altı)", "Ötelenmiş Hücre"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre ve Aralık Manipülasyonu: Range, Cells ve Offset",
                    "description": "Cells(i, 2).Value = 100 ve Range(\"A1\").Offset(1, 0) komutlarını kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_7",
                    "title": "Döngülerin Dostu: Cells(satır, sütun)",
                    "explanation": "Döngü yazarken sütun harfi yerine sayı kullanabilmek için 'Cells(i, 2)' kullanırız. 'Offset(1, 0)' ise seçili hücreden bir satır aşağıya veya sağa zıplamamızı sağlar.",
                    "speechText": "Hücre değerini okumak veya yazmak için daima '.Value' özelliği kullanılır.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t26_7_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine ötelenmiş hücre değeri olarak 'Ötelenmiş Hücre' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Ötelenmiş Hücre' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Hücre ve Aralık Manipülasyonu: Range, Cells ve Offset görevini başarıyla tamamladınız.",
                              "expectedValue": "Ötelenmiş Hücre"
                    }
          }
],
        quiz: {
          "id": "q26_7",
          "title": "Hücre ve Aralık Manipülasyonu: Range, Cells ve Offset Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_7_1",
                              "question": "Range(\"A1\").Offset(2, 1) ifadesi hangi hücreyi temsil eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "B3 hücresi (2 satır aşağı, 1 sütun sağa)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "C2 hücresi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "A3 hücresi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "B1 hücresi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Offset(2, 1) A1'den 2 satır aşağı inip 1 sütun sağa kayarak B3'e ulaşır.",
                              "measuredSkill": "Offset ve Hücre Navigasyonu"
                    }
          ]
}
      },
      {
        id: "sec26_l8",
        phaseId: 26,
        unitId: "u26_8",
        title: "Karar ve Koşul Yapıları: If-Then-Else ve Select Case",
        shortDesc: "Maaş 50.000'den büyükse prim hesaplayan, değilse uyaran mantıksal VBA blokları.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Koşullar",
        primaryGoal: "If ... Then ... Else ... End If ve Select Case yapılarını kurgulamak.",
        prerequisites: ["sec26_l7"],
        commonMistakes: ["If bloğunu End If ile kapatmayı unutmak"],
        successCriteria: "VBA karar yapılarını uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["If-Then-Else", "Select Case"],
        initialWorkbook: createTableSheet("s26_8", "KosulSayfasi", ["Ciro (TL)", "Koşul Kuralı", "Prim %"], [[120000, "Ciro > 100000 ise", 0.15], [80000, "Ciro <= 100000 ise", 0.05]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Karar ve Koşul Yapıları: If-Then-Else ve Select Case",
                    "description": "If ... Then ... Else ... End If ve Select Case yapılarını kurgulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_8",
                    "title": "VBA'da Karar Verme Sanatı",
                    "explanation": "'If Range(\"A2\").Value > 100000 Then ... Else ... End If'. Çok fazla alternatif varsa 'Select Case' yapısı If karmaşasını önler ve temiz kod sağlar.",
                    "speechText": "İş kurallarını kodla otomatize etmenin yolu If koşullarını hatasız dizayn etmekten geçer.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t26_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine koşullu prim oranı olarak 0.15 yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "0.15 yazın.",
                              "C4 hücresine 0.15 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Karar ve Koşul Yapıları: If-Then-Else ve Select Case görevini başarıyla tamamladınız.",
                              "expectedValue": 0.15
                    }
          }
],
        quiz: {
          "id": "q26_8",
          "title": "Karar ve Koşul Yapıları: If-Then-Else ve Select Case Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_8_1",
                              "question": "VBA'da çok adımlı bir If koşul bloğu hangi komutla sonlandırılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "End If"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Next"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Loop"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Finish"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "If blokları daima 'End If' ifadesiyle kapatılır.",
                              "measuredSkill": "VBA Karar Yapıları"
                    }
          ]
}
      },
      {
        id: "sec26_l9",
        phaseId: 26,
        unitId: "u26_9",
        title: "Döngüler: For ... Next ve For Each ... In ile Hücre Taraması",
        shortDesc: "Binlerce satırlık veri tablosunu saniyeler içinde baştan sona tarayıp işlem yapan döngüler.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Döngüler",
        primaryGoal: "For i = 2 To sonSatir ... Next i ve For Each hucre In Range ... Next hucre döngülerini yazmak.",
        prerequisites: ["sec26_l8"],
        commonMistakes: ["Döngü sayacını artırmayı unutarak sonsuz döngüye girmek (Ctrl+Pause Break ile kırılır)"],
        successCriteria: "VBA döngülerini uygulayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["For Next", "For Each", "Döngüler"],
        initialWorkbook: createTableSheet("s26_9", "DonguSayfasi", ["Döngü Türü", "Kullanım Amacı", "Sözdizimi"], [["For i = 2 To 100", "Belirli sayıda satır tarama", "For i = 2 To n ... Next i"], ["For Each c In Selection", "Seçili her hücrede dönme", "For Each c In ... Next c"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Döngüler: For ... Next ve For Each ... In ile Hücre Taraması",
                    "description": "For i = 2 To sonSatir ... Next i ve For Each hucre In Range ... Next hucre döngülerini yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_9",
                    "title": "Saniyede 10.000 Satır İşleme",
                    "explanation": "For döngüsü 2. satırdan son satıra kadar tek tek iner, her satırdaki borcu kontrol eder ve ödenmemişleri işaretler. İnsan eliyle saatler süren iş döngüyle 1 saniyede biter.",
                    "speechText": "For Each ise bir tablodaki tüm hücreleri veya çalışma kitabındaki tüm sayfaları tek tek dolaşmak için muazzam pratiktir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_9_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine döngü kapatma komutu olarak 'Next' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Next' yazın.",
                              "B4 hücresine 'Next' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Döngüler: For ... Next ve For Each ... In ile Hücre Taraması görevini başarıyla tamamladınız.",
                              "expectedValue": "Next"
                    }
          }
],
        quiz: {
          "id": "q26_9",
          "title": "Döngüler: For ... Next ve For Each ... In ile Hücre Taraması Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_9_1",
                              "question": "VBA'da 'For i = 1 To 10' döngüsü bir sonraki adıma geçmek için hangi komutla kapatılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Next i"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "End For"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Loop"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Continue"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "For döngüleri 'Next' (veya Next i) komutuyla bir sonraki yinelemeye geçer.",
                              "measuredSkill": "VBA Döngü Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec26_l10",
        phaseId: 26,
        unitId: "u26_10",
        title: "Özel Kullanıcı Fonksiyonu (UDF - User Defined Function) Yazma",
        shortDesc: "Excel'de olmayan bir vergi veya komisyon formülünü VBA'da 'Function' olarak yazıp hücrede =KDVLI() gibi kullanma.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "UDF Fonksiyonları",
        primaryGoal: "Function Komisyon(tutar As Double) As Double ... End Function tanımlamak.",
        prerequisites: ["sec26_l9"],
        commonMistakes: ["UDF fonksiyonunun içinde hücre rengi veya biçimini değiştirmeye çalışmak (UDF sadece değer döndürür)"],
        successCriteria: "Kullanıcı tanımlı fonksiyon yazabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["UDF", "Function"],
        initialWorkbook: createTableSheet("s26_10", "UdfSayfasi", ["Ham Tutar (TL)", "Özel Fonksiyon Sonucu", "Formül"], [[1000, 1200, "=KDVLI(1000)"], [2500, 3000, "=KDVLI(2500)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Kullanıcı Fonksiyonu (UDF - User Defined Function) Yazma",
                    "description": "Function Komisyon(tutar As Double) As Double ... End Function tanımlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_10",
                    "title": "Kendi Excel Fonksiyonunuzu Yaratın",
                    "explanation": "VBA'da 'Function KDVLI(tutar As Double) As Double' yazıp 'KDVLI = tutar * 1.20' dediğiniz an, çalışma sayfasında '=KDVLI(A2)' yazdığınızda kendi fonksiyonunuz çalışır.",
                    "speechText": "Şirketinize özel karmaşık iskonto algoritmalarını UDF fonksiyonlarına gömerek tüm personelin tek isimle çağırmasını sağlarsınız.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_10_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine UDF tanım başlangıcı olarak 'Function' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Function' yazın.",
                              "B4 hücresine 'Function' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Özel Kullanıcı Fonksiyonu (UDF - User Defined Function) Yazma görevini başarıyla tamamladınız.",
                              "expectedValue": "Function"
                    }
          }
],
        quiz: {
          "id": "q26_10",
          "title": "Özel Kullanıcı Fonksiyonu (UDF - User Defined Function) Yazma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_10_1",
                              "question": "Excel çalışma sayfalarında formül gibi çağrılabilen özel fonksiyonlar VBA'da ne ile başlar?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Function ... End Function"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sub ... End Sub"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dim ... As"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formula ... End"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hücreye değer döndüren özel formüller 'Function' bloklarıyla yazılır.",
                              "measuredSkill": "Kullanıcı Tanımlı Fonksiyonlar (UDF)"
                    }
          ]
}
      },
      {
        id: "sec26_l11",
        phaseId: 26,
        unitId: "u26_11",
        title: "Hata Yönetimi: On Error GoTo ve Hata Yakalama",
        shortDesc: "Kod çalışırken Excel'in çökmesini veya kullanıcıya çirkin hata mesajı vermesini engelleme.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Hata Yönetimi",
        primaryGoal: "On Error GoTo HataYakala ve On Error Resume Next komutlarını güvenle kullanmak.",
        prerequisites: ["sec26_l10"],
        commonMistakes: ["On Error Resume Next'i tüm kodda açık bırakıp gerçek hataların üstünü örtmek"],
        successCriteria: "Profesyonel hata yakalama mimarisi kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["On Error GoTo", "Err.Number"],
        initialWorkbook: createTableSheet("s26_11", "HataYonetimVba", ["Komut", "İşlevi"], [["On Error GoTo HataBlogu", "Hata anında kontrolü hata etiketine aktarır"], ["On Error Resume Next", "Hatayı yoksayıp bir sonraki satırdan devam eder"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hata Yönetimi: On Error GoTo ve Hata Yakalama",
                    "description": "On Error GoTo HataYakala ve On Error Resume Next komutlarını güvenle kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_11",
                    "title": "Çökmeyen Kurumsal Makrolar",
                    "explanation": "Dosya bulunamadığında veya sıfıra bölme olduğunda kodun patlamaması için 'On Error GoTo HataBlogu' yazarız. Hata oluştuğunda kullanıcıya nazikçe 'Dosya bulunamadı, lütfen kontrol edin' mesajı veririz.",
                    "speechText": "Profesyonel bir yazılımcının kodu asla sarı renkle debug moduna düşmez; hataları zarifçe yakalar.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_11_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine hata yönetim standardı olarak 'On Error GoTo' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'On Error GoTo' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Hata Yönetimi: On Error GoTo ve Hata Yakalama görevini başarıyla tamamladınız.",
                              "expectedValue": "On Error GoTo"
                    }
          }
],
        quiz: {
          "id": "q26_11",
          "title": "Hata Yönetimi: On Error GoTo ve Hata Yakalama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_11_1",
                              "question": "VBA'da bir hata oluştuğunda kodun çökmeden belirlenen bir satıra atlamasını sağlayan komut nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "On Error GoTo [Etiket]"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Stop Error"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Close Program"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Exit"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "On Error GoTo hata oluştuğunda akışı hata yönetimi etiketine yönlendirir.",
                              "measuredSkill": "VBA Hata Yakalama Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec26_l12",
        phaseId: 26,
        unitId: "u26_12",
        title: "F8 ile Adım Adım Kod Çalıştırma (Step-Into) ve Hata Ayıklama",
        shortDesc: "Kodu satır satır sarı renkle aheste aheste çalıştırarak değişken değerlerini anlık izleme.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Hata Ayıklama (Debug)",
        primaryGoal: "F8 (Step Into), Yerel Pencereler (Locals Window) ve İzleme (Watch Window) pencerelerini kullanmak.",
        prerequisites: ["sec26_l11"],
        commonMistakes: ["Kodu F5 ile tek seferde çalıştırıp nerede hata verdiğini görememek"],
        successCriteria: "Adım adım hata ayıklayabilmek.",
        level: "Uzman",
        durationMinutes: 12,
        functionsUsed: ["F8", "Step Into", "Debug"],
        initialWorkbook: createTableSheet("s26_12", "DebugSayfasi", ["Debug Aracı", "Kısayol", "Görevi"], [["Step Into", "F8", "Kodu tek satır tek satır çalıştırır"], ["Run Macro", "F5", "Kodu tam hızda sonuna kadar çalıştırır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "F8 ile Adım Adım Kod Çalıştırma (Step-Into) ve Hata Ayıklama",
                    "description": "F8 (Step Into), Yerel Pencereler (Locals Window) ve İzleme (Watch Window) pencerelerini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_12",
                    "title": "Dedektiflik Becerisi: F8",
                    "explanation": "VBE'deyken F8 tuşuna her bastığınızda sarı bir ok tek bir satırı çalıştırır. Farenizi değişkenlerin üzerine götürdüğünüzde o an hangi sayıyı tuttuklarını canlı görürsünüz.",
                    "speechText": "Hatanın tam olarak hangi döngüde ve hangi satırda patladığını tespit etmenin en kusursuz yöntemi F8'dir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t26_12_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine adım adım çalıştırma kısayolu olarak 'F8' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'F8' yazın.",
                              "B4 hücresine 'F8' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! F8 ile Adım Adım Kod Çalıştırma (Step-Into) ve Hata Ayıklama görevini başarıyla tamamladınız.",
                              "expectedValue": "F8"
                    }
          }
],
        quiz: {
          "id": "q26_12",
          "title": "F8 ile Adım Adım Kod Çalıştırma (Step-Into) ve Hata Ayıklama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_12_1",
                              "question": "VBA editöründe kodu satır satır adım adım çalıştırmak için hangi tuşa basılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "F8"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "F5"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + C"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Enter"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "F8 (Step Into) kodu tek tek satır halinde çalıştırarak hata ayıklama imkanı sunar.",
                              "measuredSkill": "VBA Debugging ve F8"
                    }
          ]
}
      },
      {
        id: "sec26_l13",
        phaseId: 26,
        unitId: "u26_13",
        title: "Otomatik Raporlama ve Sayfa Temizleme Gerçek VBA Projesi",
        shortDesc: "Tek bir butona basıldığında tüm eski verileri silen, yeni verileri getiren ve biçimlendiren komple makro.",
        category: "Makrolar & VBA Otomasyonu",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Application.ScreenUpdating = False ile ekran titremesini önleyip hızlı çalışan konsolidasyon yazmak.",
        prerequisites: ["sec26_l12"],
        commonMistakes: ["ScreenUpdating'i kod başında False yapıp kod sonunda tekrar True yapmayı unutmak"],
        successCriteria: "Uçtan uca VBA otomasyon projesini tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["VBA Projesi"],
        initialWorkbook: createTableSheet("s26_13", "VbaProjeSayfasi", ["Prosedür Adımı", "VBA Komutu", "Durum"], [["1. Hızlandırma", "Application.ScreenUpdating = False", "Aktif"], ["2. Veri Temizliği", "Range(\"A2:D100\").ClearContents", "Tamamlandı"], ["3. Yeniden Hesapla", "Calculate", "Hazır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Raporlama ve Sayfa Temizleme Gerçek VBA Projesi",
                    "description": "Application.ScreenUpdating = False ile ekran titremesini önleyip hızlı çalışan konsolidasyon yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts26_13",
                    "title": "Profesyonel Otomasyon Zirvesi",
                    "explanation": "Tebrikler! Ekran güncellemesini kapatarak süper hız kazandırdınız, döngülerle verileri taradınız, hataları yönettiniz ve tek bir butonla tüm departman raporunu hazırlayan tam teşekküllü bir VBA projesi yazdınız.",
                    "speechText": "Artık tekrarlayan hiçbir manuel Excel işi sizin zamanınızı çalamaz; işinizi kodlara devreden bir otomasyon uzmanısınız.",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t26_13_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine proje durumu olarak 'VBA Otomasyonu Tamamlandı' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'VBA Otomasyonu Tamamlandı' yazın.",
                              "C5 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Otomatik Raporlama ve Sayfa Temizleme Gerçek VBA Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "VBA Otomasyonu Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q26_13",
          "title": "Otomatik Raporlama ve Sayfa Temizleme Gerçek VBA Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_26_13_1",
                              "question": "VBA makrolarının ekran titremesi yapmadan 10 kat daha hızlı çalışması için kodun başına ne yazılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Application.ScreenUpdating = False"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Application.Quit"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Stop"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "End"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "ScreenUpdating = False ekran çizimini durdurur ve kodun çalışma hızını devasa artırır.",
                              "measuredSkill": "VBA Performans Optimizasyonu"
                    }
          ]
}
      }
    ]
  },
  {
    id: 27,
    category: "Office Scripts & Bulut Otomasyonu",
    title: "27. Office Scripts ve Bulut Otomasyonu",
    subtitle: "TypeScript, Excel Online, Power Automate Entegrasyonu ve Bulut Raporlama",
    iconName: "Cloud",
    description: "Office Scripts mimarisi, Excel Online çalışma ortamı, TypeScript dili temelleri, Workbook ve Worksheet API, Tablo/Range manipülasyonu, Power Automate bulut akışları ve zamanlanmış raporlama.",
    lessons: [
      {
        id: "sec27_l1",
        phaseId: 27,
        unitId: "u27_1",
        title: "Office Scripts Nedir? VBA ile Temel Farklar ve Bulut Mimarisi",
        shortDesc: "Masaüstüne bağımlı VBA'nın yerini alan, web tarayıcısında ve mobilde çalışan çağdaş bulut otomasyonu.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Giriş",
        primaryGoal: "Office Scripts ile VBA arasındaki platform ve mimari farkları kavramak.",
        prerequisites: ["sec26_l13"],
        commonMistakes: ["Office Scripts kodlarının internet olmadan ve yerel makro gibi çalışacağını sanmak"],
        successCriteria: "Office Scripts bulut mimarisini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Office Scripts"],
        initialWorkbook: createTableSheet("s27_1", "OfficeScriptsGiris", ["Özellik", "VBA (Klasik)", "Office Scripts (Bulut)"], [["Çalışma Ortamı", "Yalnızca Masaüstü Windows/Mac", "Excel Online, Web, Mobil, Bulut"], ["Programlama Dili", "Visual Basic", "TypeScript (Modern JavaScript)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Office Scripts Nedir? VBA ile Temel Farklar ve Bulut Mimarisi",
                    "description": "Office Scripts ile VBA arasındaki platform ve mimari farkları kavramak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_1",
                    "title": "Yeni Nesil Otomasyon: Office Scripts",
                    "explanation": "VBA 30 yıllık harika bir dildir ancak Excel Online'da veya telefonda çalışmaz. Microsoft'un yeni bulut otomasyon dili Office Scripts ise TypeScript tabanlıdır ve sunucularda otomatik çalışır.",
                    "speechText": "Power Automate ile birleştiğinde bilgisayarınız kapalıyken bile gece yarısı raporları hazırlayıp yöneticilere e-posta atabilir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t27_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine bulut otomasyon dili olarak 'TypeScript' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'TypeScript' yazın.",
                              "C4 hücresine 'TypeScript' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Office Scripts Nedir? VBA ile Temel Farklar ve Bulut Mimarisi görevini başarıyla tamamladınız.",
                              "expectedValue": "TypeScript"
                    }
          }
],
        quiz: {
          "id": "q27_1",
          "title": "Office Scripts Nedir? VBA ile Temel Farklar ve Bulut Mimarisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_1_1",
                              "question": "Office Scripts hangi modern programlama dilini temel alır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "TypeScript (JavaScript tabanlı)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Python"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "C++"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "PHP"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Office Scripts güçlü tip güvenliği sağlayan TypeScript diliyle yazılır.",
                              "measuredSkill": "Office Scripts Temelleri"
                    }
          ]
}
      },
      {
        id: "sec27_l2",
        phaseId: 27,
        unitId: "u27_2",
        title: "Desteklenen Çalışma Ortamı: Excel Online vs Masaüstü",
        shortDesc: "Office Scripts'in gerçek bulut ortamı gereksinimleri, lisanslama ve simülasyon sınırları.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Çalışma Ortamı",
        primaryGoal: "Microsoft 365 kurumsal hesap gereksinimlerini ve tarayıcı entegrasyonunu anlamak.",
        prerequisites: ["sec27_l1"],
        commonMistakes: ["Bireysel ücretsiz hesaplarda kurumsal Office Scripts özelliklerini aramak"],
        successCriteria: "Çalışma ortamı gereksinimlerini yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Excel Online"],
        initialWorkbook: createTableSheet("s27_2", "OrtamSayfasi", ["Gereksinim", "Durum"], [["M365 Kurumsal Lisans", "Zorunlu"], ["Excel Online Tarayıcı Desteği", "Tam Uyumlu"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Desteklenen Çalışma Ortamı: Excel Online vs Masaüstü",
                    "description": "Microsoft 365 kurumsal hesap gereksinimlerini ve tarayıcı entegrasyonunu anlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_2",
                    "title": "Bulutta Çalışma İlkeleri",
                    "explanation": "Office Scripts kurumsal Microsoft 365 iş ve eğitim hesaplarında tam desteklenir. Eğitim ortamımızda Office Scripts API yapısını ve TypeScript mantığını simüle ederek öğreneceksiniz.",
                    "speechText": "Bu sayede kurumsal iş hayatında şirketinizin bulut sistemlerine geçtiğinizde yabancılık çekmeyeceksiniz.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t27_2_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine kurumsal ortam standardı olarak 'M365 Kurumsal Bulut' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'M365 Kurumsal Bulut' yazın.",
                              "B3 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Desteklenen Çalışma Ortamı: Excel Online vs Masaüstü görevini başarıyla tamamladınız.",
                              "expectedValue": "M365 Kurumsal Bulut"
                    }
          }
],
        quiz: {
          "id": "q27_2",
          "title": "Desteklenen Çalışma Ortamı: Excel Online vs Masaüstü Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_2_1",
                              "question": "Office Scripts hangi hesap türlerinde kurumsal olarak desteklenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Microsoft 365 İş (Business) ve Kurumsal (Enterprise) hesaplarında"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca internetsiz bilgisayarlarda"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Disket sürücülerde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Eski Windows 98'de"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Office Scripts M365 bulut lisanslarıyla kurumsal tenant'larda tam aktiftir.",
                              "measuredSkill": "Office Scripts Lisanslama ve Ortam"
                    }
          ]
}
      },
      {
        id: "sec27_l3",
        phaseId: 27,
        unitId: "u27_3",
        title: "TypeScript Temelleri ve main(workbook: ExcelScript.Workbook) Fonksiyonu",
        shortDesc: "Office Scripts'in başlangıç noktası olan ana main fonksiyonu ve nesne yönelimli sözdizimi.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "TypeScript Temelleri",
        primaryGoal: "function main(workbook: ExcelScript.Workbook) yapısını analiz etmek.",
        prerequisites: ["sec27_l2"],
        commonMistakes: ["TypeScript'te süslü parantezleri { } veya noktalı virgülleri unutmak"],
        successCriteria: "TypeScript fonksiyon yapısını kavrayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["TypeScript", "ExcelScript.Workbook"],
        initialWorkbook: createTableSheet("s27_3", "TypeScriptGiris", ["Kod Bloğu", "Görevi"], [["function main(workbook: ExcelScript.Workbook)", "Script'in giriş ve yürütme kapısı"], ["let sheet = workbook.getActiveWorksheet();", "Aktif sayfayı değişkene atama"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "TypeScript Temelleri ve main(workbook: ExcelScript.Workbook) Fonksiyonu",
                    "description": "function main(workbook: ExcelScript.Workbook) yapısını analiz etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_3",
                    "title": "main() Fonksiyonunun Mimarisi",
                    "explanation": "Her Office Script 'function main(workbook: ExcelScript.Workbook) { ... }' bloğuyla başlar. 'workbook' parametresi tüm Excel dosyasına erişmenizi sağlayan anahtardır.",
                    "speechText": "TypeScript'te değişkenler 'let' veya 'const' ile tanımlanır ve her nesnenin tipi kesin olarak belirtilir.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t27_3_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine giriş fonksiyon adı olarak 'main' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'main' yazın.",
                              "B3 hücresine 'main' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! TypeScript Temelleri ve main(workbook: ExcelScript.Workbook) Fonksiyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "main"
                    }
          }
],
        quiz: {
          "id": "q27_3",
          "title": "TypeScript Temelleri ve main(workbook: ExcelScript.Workbook) Fonksiyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_3_1",
                              "question": "Her Office Scripts kodunun ana çalışma fonksiyonunun adı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "main"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "start"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "run"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "execute"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Office Scripts yürütme motoru daima 'main()' fonksiyonunu çağırır.",
                              "measuredSkill": "Office Scripts Giriş Fonksiyonu"
                    }
          ]
}
      },
      {
        id: "sec27_l4",
        phaseId: 27,
        unitId: "u27_4",
        title: "Çalışma Kitabı ve Sayfa Nesnelerine Erişim",
        shortDesc: "workbook.getActiveWorksheet() ve workbook.getWorksheet(\"Rapor\") komutlarıyla sayfa yönetimi.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Sayfa Nesneleri",
        primaryGoal: "Sayfa seçme, yeni sayfa ekleme ve adlandırma kodlarını yazmak.",
        prerequisites: ["sec27_l3"],
        commonMistakes: ["Olmayan bir sayfa adına erişmeye çalışıp çalışma anı hatası almak"],
        successCriteria: "Sayfa nesnelerini kodla yönetebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Worksheet API"],
        initialWorkbook: createTableSheet("s27_4", "SayfaYonetimSayfasi", ["TypeScript Komutu", "Sonuç"], [["workbook.getActiveWorksheet()", "O an ekranda açık sayfayı döndürür"], ["workbook.addWorksheet(\"Ocak\")", "Yeni sayfa ekler"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Çalışma Kitabı ve Sayfa Nesnelerine Erişim",
                    "description": "Sayfa seçme, yeni sayfa ekleme ve adlandırma kodlarını yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_4",
                    "title": "Nesneleri Zincirleme: Dot Notation",
                    "explanation": "Office Scripts nesne yönelimlidir. 'workbook.getActiveWorksheet().getName()' yazarak tek satırda aktif sayfanın adını alabilirsiniz.",
                    "speechText": "VBA'deki 'Sheets(\"Sayfa1\")' mantığı Office Scripts'te 'workbook.getWorksheet(\"Sayfa1\")' metoduna dönüşür.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t27_4_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine aktif sayfa metodunun adı olarak 'getActiveWorksheet' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'getActiveWorksheet' yazın.",
                              "B3 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Çalışma Kitabı ve Sayfa Nesnelerine Erişim görevini başarıyla tamamladınız.",
                              "expectedValue": "getActiveWorksheet"
                    }
          }
],
        quiz: {
          "id": "q27_4",
          "title": "Çalışma Kitabı ve Sayfa Nesnelerine Erişim Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_4_1",
                              "question": "Office Scripts'te o an kullanıcının baktığı aktif sayfayı getiren metot hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "getActiveWorksheet()"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "getCurrent()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "selectSheet()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "open()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "getActiveWorksheet() aktif sayfaya referans veren standart API metodudur.",
                              "measuredSkill": "Worksheet API Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec27_l5",
        phaseId: 27,
        unitId: "u27_5",
        title: "Tablo ve Aralık Nesnelerini Manipüle Etme (getRange & setValues)",
        shortDesc: "selectedSheet.getRange(\"A1:C10\").setValues() ile çok boyutlu matris verisi yazma.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Aralık ve Hücreler",
        primaryGoal: "getRange, setValue ve setValues([[]]) komutlarını hatasız kullanmak.",
        prerequisites: ["sec27_l4"],
        commonMistakes: ["Tek boyutlu dizi ile iki boyutlu matris dizisini karıştırmak ([[satır1], [satır2]])"],
        successCriteria: "Aralık ve hücre değerlerini kodla yönetebilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["getRange", "setValues"],
        initialWorkbook: createTableSheet("s27_5", "AralikYonetimSayfasi", ["Hücre", "Değer"], [["A1", "Ürün Adı"], ["B1", "Fiyat"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Tablo ve Aralık Nesnelerini Manipüle Etme (getRange & setValues)",
                    "description": "getRange, setValue ve setValues([[]]) komutlarını hatasız kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_5",
                    "title": "Matris Değer Yazma Gücü",
                    "explanation": "setValues([[ 'Laptop', 35000 ], [ 'Mouse', 500 ]]) şeklinde iki boyutlu bir dizi verdiğinizde, tek bir ağ çağrısıyla tüm tabloyu milisaniyede doldurursunuz.",
                    "speechText": "Hücreleri tek tek yazmak yerine toplu dizi (array) yazmak bulut otomasyonunda en yüksek performans kuralıdır.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t27_5_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine toplu değer yazma metodu olarak 'setValues' yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'setValues' yazın.",
                              "B3 hücresine 'setValues' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Tablo ve Aralık Nesnelerini Manipüle Etme (getRange & setValues) görevini başarıyla tamamladınız.",
                              "expectedValue": "setValues"
                    }
          }
],
        quiz: {
          "id": "q27_5",
          "title": "Tablo ve Aralık Nesnelerini Manipüle Etme (getRange & setValues) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_5_1",
                              "question": "Office Scripts'te bir hücre aralığına toplu olarak çok satırlı veri yazmak için hangi metot kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "setValues() (İki boyutlu dizi kabul eder)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "writeText()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "pasteAll()"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "insertRow()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "setValues([[...]]) metodu iki boyutlu matris dizilerini aralığa anında yazar.",
                              "measuredSkill": "Range API ve Matris Veri Yazma"
                    }
          ]
}
      },
      {
        id: "sec27_l6",
        phaseId: 27,
        unitId: "u27_6",
        title: "Otomatik Biçimlendirme ve Koşullu Format Kodlama",
        shortDesc: "range.getFormat().getFill().setColor(\"#047857\") ile kurumsal renkleri ve kenarlıkları kodla uygulama.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Biçimlendirme API",
        primaryGoal: "Yazı tipi, kalınlık, arka plan dolgusu ve sayı biçimlerini TypeScript ile ayarlamak.",
        prerequisites: ["sec27_l5"],
        commonMistakes: ["Renk kodlarında hex (#) işaretini unutmak"],
        successCriteria: "Biçimlendirme API'sini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Format API", "setColor"],
        initialWorkbook: createTableSheet("s27_6", "FormatApiSayfasi", ["Özellik", "TypeScript Metodu", "Değer"], [["Arka Plan Rengi", "getFill().setColor()", "#047857 (Zümrüt Yeşili)"], ["Yazı Tipi Kalın", "getFont().setBold()", "true"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Biçimlendirme ve Koşullu Format Kodlama",
                    "description": "Yazı tipi, kalınlık, arka plan dolgusu ve sayı biçimlerini TypeScript ile ayarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_6",
                    "title": "Kodla Mükemmel Tasarım",
                    "explanation": "Office Scripts ile tablonun başlığını zümrüt yeşiline (#047857), yazı rengini beyaza (#FFFFFF) ve fontu kalın yapabilirsiniz. Her gün gelen ham veriler otomatik olarak şirket şablonuna bürünür.",
                    "speechText": "getFormat().getNumberFormat() ile sayıları tek satırda '₺#,##0' para birimine çevirebilirsiniz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t27_6_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine yazı kalınlaştırma metodu olarak 'setBold' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'setBold' yazın.",
                              "C4 hücresine 'setBold' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Otomatik Biçimlendirme ve Koşullu Format Kodlama görevini başarıyla tamamladınız.",
                              "expectedValue": "setBold"
                    }
          }
],
        quiz: {
          "id": "q27_6",
          "title": "Otomatik Biçimlendirme ve Koşullu Format Kodlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_6_1",
                              "question": "Office Scripts'te bir aralığın arka plan dolgu rengini değiştirmek için hangi zincir kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "range.getFormat().getFill().setColor(\"#HEX\")"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "range.paint()"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "range.color = red"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "range.fill()"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "getFormat().getFill().setColor() nesne zinciri hücre rengini değiştirir.",
                              "measuredSkill": "Biçimlendirme API Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec27_l7",
        phaseId: 27,
        unitId: "u27_7",
        title: "Script Parametreleri ile Dinamik Çalıştırma",
        shortDesc: "main(workbook, departman: string, hedefCiro: number) ile dışarıdan parametre alabilen esnek scriptler.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Dinamik Parametreler",
        primaryGoal: "Fonksiyon parametreleri tanımlayarak farklı departmanlara göre dinamik çalıştırmak.",
        prerequisites: ["sec27_l6"],
        commonMistakes: ["Parametre tipini (string, number, boolean) belirtmeyip Power Automate ile haberleşememek"],
        successCriteria: "Parametreli Office Script yazabilmek.",
        level: "İleri",
        durationMinutes: 15,
        functionsUsed: ["Parametreler", "Dinamik Script"],
        initialWorkbook: createTableSheet("s27_7", "ParametreliScript", ["Parametre", "Tipi", "Açıklama"], [["departman", "string", "Hangi departmanın raporlanacağı"], ["hedefCiro", "number", "Karşılaştırma eşik değeri"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Script Parametreleri ile Dinamik Çalıştırma",
                    "description": "Fonksiyon parametreleri tanımlayarak farklı departmanlara göre dinamik çalıştırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_7",
                    "title": "Dış Dünyaya Açılan Kapı: Parametreler",
                    "explanation": "main fonksiyonuna 'departman: string' parametresi eklerseniz, Power Automate bu parametreyi bir formdan veya e-postadan alarak scripte aktarabilir.",
                    "speechText": "Aynı scripti 50 farklı şube için 50 kez kopyalamak yerine tek bir parametreli script ile tüm şirketi yönetirsiniz.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t27_7_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine parametre tanım standardı olarak 'Tip Güvenli Parametre' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Tip Güvenli Parametre' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Script Parametreleri ile Dinamik Çalıştırma görevini başarıyla tamamladınız.",
                              "expectedValue": "Tip Güvenli Parametre"
                    }
          }
],
        quiz: {
          "id": "q27_7",
          "title": "Script Parametreleri ile Dinamik Çalıştırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_7_1",
                              "question": "Office Scripts main fonksiyonuna dışarıdan girdi almak için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "main(workbook: ExcelScript.Workbook, parametre: string) şeklinde argüman tanımlanır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin dosyası açılır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ekran resmi çekilir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücre silinir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "main fonksiyonuna eklenen tip tanımlı parametreler dış sistemlerden veri almayı sağlar.",
                              "measuredSkill": "Parametrik Office Scripts"
                    }
          ]
}
      },
      {
        id: "sec27_l8",
        phaseId: 27,
        unitId: "u27_8",
        title: "Power Automate Akışı ile Office Script Tetikleme",
        shortDesc: "Microsoft Forms'tan form doldurulduğunda veya SharePoint'e dosya yüklendiğinde scripti otomatik çalıştırma.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Power Automate",
        primaryGoal: "'Run script' (Betiği çalıştır) eylemiyle Excel Online üzerinde bulut otomasyonu tetiklemek.",
        prerequisites: ["sec27_l7"],
        commonMistakes: ["Dosyanın OneDrive veya SharePoint üzerinde açık yetkili konumda olmaması"],
        successCriteria: "Bulut akışı entegrasyonu kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Power Automate", "Run script"],
        initialWorkbook: createTableSheet("s27_8", "PowerAutomateSayfasi", ["Tetikleyici (Trigger)", "Eylem (Action)", "Bulut Entegrasyonu"], [["Yeni Form Yanıtı Geldiğinde", "Run script (Excel Online)", "Otomatik Veri Kaydı"], ["Her Pazartesi Sabah 08:00", "Run script (Rapor Üret)", "Haftalık Otomasyon"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Power Automate Akışı ile Office Script Tetikleme",
                    "description": "'Run script' (Betiği çalıştır) eylemiyle Excel Online üzerinde bulut otomasyonu tetiklemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_8",
                    "title": "Sıfır İnsan Müdahalesi",
                    "explanation": "Power Automate ve Office Scripts ikilisi şirketlerin manuel operasyonlarını tamamen ortadan kaldırır. Form doldurulduğu an script çalışır, veriyi Excel tablosuna yazar, formülleri tetikler ve sonucu geri döner.",
                    "speechText": "Hiçbir bilgisayarın açık kalmasına gerek yoktur; tüm süreç Microsoft bulut sunucularında sessizce akar.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t27_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine otomasyon standardı olarak 'Bulut Akışı Aktif' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bulut Akışı Aktif' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Power Automate Akışı ile Office Script Tetikleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Bulut Akışı Aktif"
                    }
          }
],
        quiz: {
          "id": "q27_8",
          "title": "Power Automate Akışı ile Office Script Tetikleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_8_1",
                              "question": "Power Automate akışında bir Office Script çalıştırmak için hangi eylem kartı kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Run script (Betiği çalıştır)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Send email"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Create folder"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Delete file"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel Online bağlayıcısındaki 'Run script' eylemi Office Script'leri bulutta yürütür.",
                              "measuredSkill": "Power Automate ve Excel Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec27_l9",
        phaseId: 27,
        unitId: "u27_9",
        title: "Zamanlanmış Bulut Görevleriyle E-posta ile Excel Raporu Gönderme",
        shortDesc: "Her Cuma akşamı 18:00'de haftalık ciro tablosunu güncelleyip yöneticilere PDF/Excel ekli e-posta yollama.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Zamanlanmış Görevler",
        primaryGoal: "Recurrence (Yinelenen) tetikleyici ile e-posta gönderim akışı kurmak.",
        prerequisites: ["sec27_l8"],
        commonMistakes: ["Script çalışması bitmeden e-posta kartının tetiklenip eski raporun gönderilmesi"],
        successCriteria: "Zamanlanmış kurumsal raporlama kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Zamanlanmış Görev", "E-Posta Otomasyonu"],
        initialWorkbook: createTableSheet("s27_9", "ZamanlanmisGorevSayfasi", ["Zamanlama", "Hedef Kitle", "Durum"], [["Her Cuma 18:00", "Satış Direktörlüğü", "Otomatik E-Posta"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Zamanlanmış Bulut Görevleriyle E-posta ile Excel Raporu Gönderme",
                    "description": "Recurrence (Yinelenen) tetikleyici ile e-posta gönderim akışı kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_9",
                    "title": "Haftalık Rapor Kabusuna Son",
                    "explanation": "Eskiden cuma akşamları personelin saatlerce uğraştığı konsolidasyon raporu, zamanlanmış bulut akışıyla saat tam 18:00'de kendiliğinden üretilir ve PDF olarak direktörün e-posta kutusuna düşer.",
                    "speechText": "İşte dijital dönüşümün ve modern iş otomasyonunun en somut zaferi budur.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t27_9_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine sistem durumu olarak 'Otomatik Rapor Gönderildi' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Otomatik Rapor Gönderildi' yazın.",
                              "C3 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Zamanlanmış Bulut Görevleriyle E-posta ile Excel Raporu Gönderme görevini başarıyla tamamladınız.",
                              "expectedValue": "Otomatik Rapor Gönderildi"
                    }
          }
],
        quiz: {
          "id": "q27_9",
          "title": "Zamanlanmış Bulut Görevleriyle E-posta ile Excel Raporu Gönderme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_9_1",
                              "question": "Zamanlanmış periyodik bir bulut görevi başlatmak için Power Automate'te hangi tetikleyici kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yinelenme (Recurrence)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Manuel buton"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosya silme"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcı çıktısı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Recurrence tetikleyicisi gün ve saat bazında periyodik otomatik akışlar başlatır.",
                              "measuredSkill": "Zamanlanmış Bulut Raporlama"
                    }
          ]
}
      },
      {
        id: "sec27_l10",
        phaseId: 27,
        unitId: "u27_10",
        title: "Hata Yönetimi, console.log ile Günlükleme ve Test",
        shortDesc: "try-catch blokları ile bulutta çökmeyi engelleme ve console.log ile işlem günlüklerini izleme.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Hata Yönetimi & Test",
        primaryGoal: "try { ... } catch (error) { console.log(error); } mimarisini uygulamak.",
        prerequisites: ["sec27_l9"],
        commonMistakes: ["Bulutta hata oluştuğunda log tutmayıp akışın neden başarısız olduğunu anlayamamak"],
        successCriteria: "Bulut kodlarında hata ayıklama ve test yapabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["try-catch", "console.log"],
        initialWorkbook: createTableSheet("s27_10", "LogSayfasi", ["Log Mesajı", "Seviye", "Durum"], [["Script başlatıldı", "Info", "Kayıt Altında"], ["Tablo başarıyla güncellendi", "Success", "Kayıt Altında"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hata Yönetimi, console.log ile Günlükleme ve Test",
                    "description": "try { ... } catch (error) { console.log(error); } mimarisini uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_10",
                    "title": "Bulutun Karasutusu: console.log",
                    "explanation": "Bulutta ekranınız olmadığı için ne olduğunu göremezsiniz. 'console.log(\"Satır sayısı: \" + rowCount)' yazarak Power Automate geçmişinde her adımın detayını günlüğe kaydederiz.",
                    "speechText": "try-catch bloğu ise beklenmedik bir hatada akışın durmasını önler ve hatayı yöneticinin e-postasına uyarı olarak yollar.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t27_10_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine hata yönetim standardı olarak 'try-catch ve Loglama Aktif' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'try-catch ve Loglama Aktif' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Hata Yönetimi, console.log ile Günlükleme ve Test görevini başarıyla tamamladınız.",
                              "expectedValue": "try-catch ve Loglama Aktif"
                    }
          }
],
        quiz: {
          "id": "q27_10",
          "title": "Hata Yönetimi, console.log ile Günlükleme ve Test Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_10_1",
                              "question": "Office Scripts kodlarında hata yakalamak ve akışı güvene almak için hangi blok kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "try { ... } catch (error) { ... }"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "On Error GoTo"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "If-Else"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Loop"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "TypeScript ve JavaScript standart hata yönetimi try-catch bloklarıyla yapılır.",
                              "measuredSkill": "TypeScript Hata Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec27_l11",
        phaseId: 27,
        unitId: "u27_11",
        title: "Office Scripts ile Uçtan Uca Bulut Raporlama Projesi",
        shortDesc: "Veriyi okuma, temizleme, biçimlendirme ve Power Automate'e özet KPI çıktısı döndürme final görevi.",
        category: "Office Scripts & Bulut Otomasyonu",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "main fonksiyonundan return ile JSON nesnesi döndürerek akışa veri iletmek.",
        prerequisites: ["sec27_l10"],
        commonMistakes: ["Dönüş değerini (return) belirtmeyip Power Automate'in sonuç verisine ulaşamamasına yol açmak"],
        successCriteria: "Uçtan uca bulut otomasyon projesini tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bulut Projesi"],
        initialWorkbook: createTableSheet("s27_11", "BulutProjeSayfasi", ["Metrik", "Hesaplanan Değer", "Durum"], [["Günlük Ciro", "₺ 320.000", "Buluta Aktarıldı"], ["Aktif Müşteri", 85, "Buluta Aktarıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Office Scripts ile Uçtan Uca Bulut Raporlama Projesi",
                    "description": "main fonksiyonundan return ile JSON nesnesi döndürerek akışa veri iletmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts27_11",
                    "title": "Yeni Çağın Veri Mimarı",
                    "explanation": "Tebrikler! TypeScript ile Excel nesnelerine hükmettiniz, kurumsal biçimlendirmeleri kodladınız ve Power Automate ile haberleşen modern bir bulut otomasyonu kurdunuz.",
                    "speechText": "Artık sadece masaüstü makrolarına bağımlı değilsiniz; Microsoft bulut ekosisteminde çalışan tam yetkin bir bulut otomasyon uzmanısınız.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t27_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine proje onay durumu olarak 'Bulut Raporlama Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bulut Raporlama Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Office Scripts ile Uçtan Uca Bulut Raporlama Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "Bulut Raporlama Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q27_11",
          "title": "Office Scripts ile Uçtan Uca Bulut Raporlama Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_27_11_1",
                              "question": "Bir Office Script'in hesapladığı sonuçları Power Automate akışında kullanmak için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "main() fonksiyonunun sonunda return ile sonuç nesnesi döndürülmelidir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayfaya resim eklenmelidir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosya silinmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel kapatılmalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "main fonksiyonundan return edilen nesneler Power Automate tarafından dinamik içerik olarak kullanılır.",
                              "measuredSkill": "Bulut Entegrasyon Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 28,
    category: "Formül Denetimi & Performans",
    title: "28. Formül Denetimi ve Performans",
    subtitle: "Formülü Değerlendir, Etkileyenleri İzle, Döngüsel Başvuru ve Optimizasyon",
    iconName: "Activity",
    description: "Formül değerlendirme adımları, etkileyenleri/etkilenenleri izleme okları, döngüsel başvuru (circular reference) çözümü, akıllı yeşil üçgenler, hesaplama modları (manuel vs otomatik), volatile fonksiyon maliyeti ve dosya sıkıştırma.",
    lessons: [
      {
        id: "sec28_l1",
        phaseId: 28,
        unitId: "u28_1",
        title: "Formülü Değerlendir (Evaluate Formula) ile Adım Adım Hesaplama",
        shortDesc: "İç içe karmaşık formüllerin Excel tarafından hangi sırayla ve nasıl çözüldüğünü ağır çekimde izleme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Formülü Değerlendir",
        primaryGoal: "Formüller > Formülü Değerlendir penceresinde 'Değerlendir' (Evaluate) butonuna basarak adım adım çözmek.",
        prerequisites: ["sec27_l11"],
        commonMistakes: ["#DEĞER! veya #YOK hatasının hangi iç fonksiyondan patladığını görmeden tahmin etmeye çalışmak"],
        successCriteria: "Formülü Değerlendir aracını kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Formülü Değerlendir", "Evaluate Formula"],
        initialWorkbook: createTableSheet("s28_1", "DegerlendirSayfasi", ["İç İçe Formül", "Hata Sebebi", "Çözüm Durumu"], [["=EĞER(DÜŞEYARA(...)>100; ...)", "DÜŞEYARA #YOK döndü", "Tespit Edildi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formülü Değerlendir (Evaluate Formula) ile Adım Adım Hesaplama",
                    "description": "Formüller > Formülü Değerlendir penceresinde 'Değerlendir' (Evaluate) butonuna basarak adım adım çözmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_1",
                    "title": "Formüllere Röntgen Çekmek",
                    "explanation": "Formülü Değerlendir butonu altı çizili olan ilk matematiksel parçayı çözer, yerine sonucu yazar ve sıradaki adıma geçer. 5 katmanlı iç içe formüllerde hatanın nerede olduğunu kesin olarak gösterir.",
                    "speechText": "Karmaşık bir formülde hata aldığınızda yapacağınız ilk ve en doğru hareket Formülü Değerlendir penceresini açmaktır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t28_1_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine teşhis durumu olarak 'Hata Teşhis Edildi' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Hata Teşhis Edildi' yazın.",
                              "C3 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Formülü Değerlendir (Evaluate Formula) ile Adım Adım Hesaplama görevini başarıyla tamamladınız.",
                              "expectedValue": "Hata Teşhis Edildi"
                    }
          }
],
        quiz: {
          "id": "q28_1",
          "title": "Formülü Değerlendir (Evaluate Formula) ile Adım Adım Hesaplama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_1_1",
                              "question": "İç içe geçmiş karmaşık bir formülün adım adım ara sonuçlarını görmek için hangi araç kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formülü Değerlendir (Evaluate Formula)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazım Denetimi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yenile"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafik Ekle"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Formülü Değerlendir aracı her tıklamada altı çizili ifadeyi çözerek adım adım ilerler.",
                              "measuredSkill": "Formül Hata Ayıklama"
                    }
          ]
}
      },
      {
        id: "sec28_l2",
        phaseId: 28,
        unitId: "u28_2",
        title: "Etkileyenleri İzle (Trace Precedents) ile Kaynak Hücre Okları",
        shortDesc: "Bir toplam veya kâr hücresinin hangi hücrelerden beslendiğini mavi izleme oklarıyla görselleştirme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Hücre Okları",
        primaryGoal: "Formüller > Etkileyenleri İzle (Trace Precedents) ile besleme oklarını çizdirmek.",
        prerequisites: ["sec28_l1"],
        commonMistakes: ["Formül başka bir sayfaya başvurduğunda siyah kesikli ok ve mini tablo simgesini fark etmemek"],
        successCriteria: "Etkileyen hücreleri izleyebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Etkileyenleri İzle", "Trace Precedents"],
        initialWorkbook: createTableSheet("s28_2", "EtkileyenSayfasi", ["Sonuç Hücresi", "Besleyen Hücreler", "Ok Durumu"], [["C10 (Net Kâr)", "B2 (Gelir) ve B5 (Gider)", "Mavi Oklar Çizildi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Etkileyenleri İzle (Trace Precedents) ile Kaynak Hücre Okları",
                    "description": "Formüller > Etkileyenleri İzle (Trace Precedents) ile besleme oklarını çizdirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_2",
                    "title": "Görsel Veri Yolları",
                    "explanation": "Etkileyenleri İzle butonuna bastığınızda seçili hücreye doğru uzanan mavi oklar belirir. Sayfadaki hangi hücrelerin bu formüle girdi sağladığını gözlerinizle görürsünüz.",
                    "speechText": "Büyük bütçe tablolarında yanlış bir hücrenin formüle katılıp katılmadığını denetlemenin en hızlı yoludur.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t28_2_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine ok durumu olarak 'Mavi Oklar Aktif' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Mavi Oklar Aktif' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Etkileyenleri İzle (Trace Precedents) ile Kaynak Hücre Okları görevini başarıyla tamamladınız.",
                              "expectedValue": "Mavi Oklar Aktif"
                    }
          }
],
        quiz: {
          "id": "q28_2",
          "title": "Etkileyenleri İzle (Trace Precedents) ile Kaynak Hücre Okları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_2_1",
                              "question": "Bir formülün hangi hücrelerden veri aldığını gösteren mavi okları çıkaran araç hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Etkileyenleri İzle (Trace Precedents)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Etkilenenleri İzle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Köprü"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Filtre"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Etkileyenleri İzle seçili hücreyi besleyen kaynaklara ok çizer.",
                              "measuredSkill": "Kaynak Hücre Haritalama"
                    }
          ]
}
      },
      {
        id: "sec28_l3",
        phaseId: 28,
        unitId: "u28_3",
        title: "Etkilenenleri İzle (Trace Dependents) ile Sonuç Hücrelerini Bulma",
        shortDesc: "Bu hücredeki sayıyı değiştirirsem çalışma kitabında başka hangi formüller ve raporlar değişir?",
        category: "Formül Denetimi & Performans",
        groupTitle: "Hücre Okları",
        primaryGoal: "Formüller > Etkilenenleri İzle (Trace Dependents) ile bağımlı hücreleri tespit etmek.",
        prerequisites: ["sec28_l2"],
        commonMistakes: ["Önemli bir parametre hücresini silip etkilenen onlarca formülde #BAŞV! hatası patlatmak"],
        successCriteria: "Bağımlı hücreleri haritalayabilmek.",
        level: "Orta",
        durationMinutes: 10,
        functionsUsed: ["Etkilenenleri İzle", "Trace Dependents"],
        initialWorkbook: createTableSheet("s28_3", "EtkilenenSayfasi", ["Kaynak Parametre", "Etkilenen Raporlar", "Bağımlılık Sayısı"], [["B1 (Dolar Kuru)", "Ciro, Maliyet, Vergi ve Net Kâr", "14 Formül"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Etkilenenleri İzle (Trace Dependents) ile Sonuç Hücrelerini Bulma",
                    "description": "Formüller > Etkilenenleri İzle (Trace Dependents) ile bağımlı hücreleri tespit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_3",
                    "title": "Kritik Güvenlik Kontrolü: Silmeden Önce İzle!",
                    "explanation": "Bir hücreyi veya sütunu silmeden önce MUTLAKA 'Etkilenenleri İzle' butonuna basın. Başka bir hücre bu veriye bağlıysa ok çıkar; böylece yanlışlıkla raporları bozmaktan kurtulursunuz.",
                    "speechText": "Etkilenenleri İzle risk analizinin ve finansal model güvenliğinin birinci kuralıdır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t28_3_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine güvenlik kontrolü olarak '14 Formül Doğrulandı' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'14 Formül Doğrulandı' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Etkilenenleri İzle (Trace Dependents) ile Sonuç Hücrelerini Bulma görevini başarıyla tamamladınız.",
                              "expectedValue": "14 Formül Doğrulandı"
                    }
          }
],
        quiz: {
          "id": "q28_3",
          "title": "Etkilenenleri İzle (Trace Dependents) ile Sonuç Hücrelerini Bulma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_3_1",
                              "question": "Bir hücreyi değiştirmeden veya silmeden önce başka nereleri etkileyeceğini görmek için ne kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Etkilenenleri İzle (Trace Dependents)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Etkileyenleri İzle"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücreyi Sil"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metni Değiştir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Etkilenenleri İzle bu hücreye bağımlı olan tüm sonuç hücrelerini gösterir.",
                              "measuredSkill": "Bağımlılık Analizi"
                    }
          ]
}
      },
      {
        id: "sec28_l4",
        phaseId: 28,
        unitId: "u28_4",
        title: "Okları Kaldırma ve Karmaşık Formül Haritası Çıkarma",
        shortDesc: "Denetim bittikten sonra tüm mavi ve kırmızı izleme oklarını tek tıkla temizleme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Okları Kaldırma",
        primaryGoal: "Formüller > Okları Kaldır (Remove Arrows) komutunu uygulamak.",
        prerequisites: ["sec28_l3"],
        commonMistakes: ["Okları silmek için sayfayı kaydedip kapatıp açmaya çalışmak"],
        successCriteria: "İzleme oklarını yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Okları Kaldır"],
        initialWorkbook: createTableSheet("s28_4", "OklariKaldirSayfasi", ["İşlem", "Menü Konumu", "Durum"], [["Tüm Okları Sil", "Formüller > Okları Kaldır", "Temizlendi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Okları Kaldırma ve Karmaşık Formül Haritası Çıkarma",
                    "description": "Formüller > Okları Kaldır (Remove Arrows) komutunu uygulamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_4",
                    "title": "Temiz Çalışma Masası",
                    "explanation": "Denetim oklarıyla işiniz bittiğinde 'Okları Kaldır' açılır menüsünden tek tıkla tüm ekranı temizleyebilirsiniz. İsterseniz yalnızca etkileyen veya yalnızca etkilenen oklarını da silebilirsiniz.",
                    "speechText": "Raporu yöneticiye sunmadan önce sayfada denetim oku bırakmamak görsel ciddiyet kuralıdır.",
                    "targetCell": "C3"
          }
],
        tasks: [
          {
                    "id": "t28_4_1",
                    "stepNumber": 1,
                    "instruction": "C3 hücresine ekran temizlik durumu olarak 'Oklar Temizlendi' yazın.",
                    "targetCell": "C3",
                    "hints": [
                              "C3 hücresini seçin.",
                              "'Oklar Temizlendi' yazın.",
                              "C3 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C3",
                              "successMessage": "Tebrikler! Okları Kaldırma ve Karmaşık Formül Haritası Çıkarma görevini başarıyla tamamladınız.",
                              "expectedValue": "Oklar Temizlendi"
                    }
          }
],
        quiz: {
          "id": "q28_4",
          "title": "Okları Kaldırma ve Karmaşık Formül Haritası Çıkarma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_4_1",
                              "question": "Sayfadaki tüm denetim oklarını tek seferde silmek için hangi komut kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Okları Kaldır (Remove Arrows)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Delete tuşu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Esc tuşu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Geri Al"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Okları Kaldır komutu ekrandaki tüm izleme çizgilerini kaldırır.",
                              "measuredSkill": "Denetim Oku Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec28_l5",
        phaseId: 28,
        unitId: "u28_5",
        title: "Döngüsel Başvuru (Circular Reference) Tespit ve Çözümü",
        shortDesc: "Bir hücrenin doğrudan veya dolaylı olarak kendi kendisini toplaması sebebiyle Excel'in kilitlenmesini çözme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Döngüsel Başvuru",
        primaryGoal: "Durum çubuğunda 'Döngüsel Başvuru' uyarısını ve Formüller > Hata Denetimi > Döngüsel Başvurular listesini izlemek.",
        prerequisites: ["sec28_l4"],
        commonMistakes: ["B5 hücresine =TOPLA(B2:B5) yazarak kendi hücresini toplama dahil etmek"],
        successCriteria: "Döngüsel başvuruları tespit edip çözebilmek.",
        level: "Orta",
        durationMinutes: 12,
        functionsUsed: ["Döngüsel Başvuru", "Circular Reference"],
        initialWorkbook: createTableSheet("s28_5", "DonguselSayfasi", ["Hücre", "Yazılan Formül", "Hata Sebebi"], [["B5", "=TOPLA(B2:B5)", "B5 hücresi kendi kendisini topluyor!"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Döngüsel Başvuru (Circular Reference) Tespit ve Çözümü",
                    "description": "Durum çubuğunda 'Döngüsel Başvuru' uyarısını ve Formüller > Hata Denetimi > Döngüsel Başvurular listesini izlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_5",
                    "title": "Sonsuz Kısır Döngü: Circular Reference",
                    "explanation": "B5 hücresindeyken =TOPLA(B2:B5) yazarsanız Excel sonsuz döngüye girer çünkü B5'in sonucu B5'e bağlıdır! Durum çubuğunun sol altında 'Döngüsel Başvurular: B5' yazar.",
                    "speechText": "Formüller > Hata Denetimi > Döngüsel Başvurular menüsü sizi doğrudan suçlu hücreye götürür. Aralığı B2:B4 yaparak hatayı anında çözersiniz.",
                    "targetCell": "B5"
          }
],
        tasks: [
          {
                    "id": "t28_5_1",
                    "stepNumber": 1,
                    "instruction": "B5 hücresine doğru formül olarak '=TOPLA(B2:B4)' yazın.",
                    "targetCell": "B5",
                    "hints": [
                              "B5 hücresini seçin.",
                              "=TOPLA(B2:B4) yazın.",
                              "B5 hücresine doğru aralığı yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B5",
                              "successMessage": "Tebrikler! Döngüsel Başvuru (Circular Reference) Tespit ve Çözümü görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B4"
                              ]
                    }
          }
],
        quiz: {
          "id": "q28_5",
          "title": "Döngüsel Başvuru (Circular Reference) Tespit ve Çözümü Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_5_1",
                              "question": "Excel bir formülde 'Döngüsel Başvuru' (Circular Reference) uyarısı veriyorsa sorun nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Formül doğrudan veya dolaylı olarak kendi bulunduğu hücreye başvurmaktadır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosya boyutu çok büyüktür"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazıcı bağlı değildir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel lisansı bitmiştir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Döngüsel başvuru formülün kendi sonucunu kendi girdisi yapmasıyla oluşur.",
                              "measuredSkill": "Döngüsel Başvuru Çözümü"
                    }
          ]
}
      },
      {
        id: "sec28_l6",
        phaseId: 28,
        unitId: "u28_6",
        title: "Formül Hata Denetimi ve Akıllı Yeşil Üçgenler",
        shortDesc: "Hücrelerin sol üst köşesindeki yeşil üçgen uyarılarını (Metin Olarak Saklanan Sayı) anlama ve düzeltme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Yeşil Üçgenler",
        primaryGoal: "Hata etiketine tıklayıp 'Sayıya Dönüştür' seçeneğiyle toplama katılmayan sahte sayıları onarmak.",
        prerequisites: ["sec28_l5"],
        commonMistakes: ["Yeşil üçgeni görmezden gelip TOPLA formülünün bu sayıları sıfır saymasını fark etmemek"],
        successCriteria: "Yeşil üçgen hatalarını çözebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hata Denetimi", "Sayıya Dönüştür"],
        initialWorkbook: createTableSheet("s28_6", "YesilUcgenSayfasi", ["Görünüm", "Gerçek Durum", "Çözüm"], [["'1500 (Sol üstte yeşil üçgen)", "Metin formatında gizli sayı", "Sayıya Dönüştür"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formül Hata Denetimi ve Akıllı Yeşil Üçgenler",
                    "description": "Hata etiketine tıklayıp 'Sayıya Dönüştür' seçeneğiyle toplama katılmayan sahte sayıları onarmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_6",
                    "title": "Tehlikeli Yeşil Üçgenler",
                    "explanation": "Bir sayının sol üstünde yeşil üçgen varsa Excel onu metin sanıyor demektir. =TOPLA(A1:A10) dediğinizde bu sayılar toplama katılmaz ve kasanız eksik çıkar!",
                    "speechText": "Üçgenin yanındaki sarı ünleme tıklayıp 'Sayıya Dönüştür' demek veriyi anında gerçek sayısala çevirir.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t28_6_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine düzeltme işlemi olarak 'Sayıya Dönüştür' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Sayıya Dönüştür' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Formül Hata Denetimi ve Akıllı Yeşil Üçgenler görevini başarıyla tamamladınız.",
                              "expectedValue": "Sayıya Dönüştür"
                    }
          }
],
        quiz: {
          "id": "q28_6",
          "title": "Formül Hata Denetimi ve Akıllı Yeşil Üçgenler Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_6_1",
                              "question": "Hücrenin sol üst köşesinde beliren yeşil üçgen en sık hangi anlama gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayısal bir değerin hücrede metin olarak saklandığını ve formülleri bozabileceğini"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formülün mükemmel çalıştığını"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücrenin kilitli olduğunu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayfanın kaydedildiğini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yeşil üçgen Excel'in akıllı hata denetim uyarısıdır ve en sık metinleşmiş sayıları gösterir.",
                              "measuredSkill": "Akıllı Hata Denetimi"
                    }
          ]
}
      },
      {
        id: "sec28_l7",
        phaseId: 28,
        unitId: "u28_7",
        title: "Hesaplama Seçenekleri: Otomatik vs El ile (Manual Calculation - F9)",
        shortDesc: "100 bin satırlık dosyalarda her hücre girişinde bekleme yapmamak için hesaplamayı El İle (Manual) moda alma.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Hesaplama Modu",
        primaryGoal: "Formüller > Hesaplama Seçenekleri > El ile ve F9 (Şimdi Hesapla) tuşunu kullanmak.",
        prerequisites: ["sec28_l6"],
        commonMistakes: ["Hesaplama modu El İle iken yeni veri girip formülün değişmediğini görünce formülü bozuk sanmak"],
        successCriteria: "Hesaplama modlarını yönetebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Hesaplama Seçenekleri", "F9", "Manual"],
        initialWorkbook: createTableSheet("s28_7", "HesaplamaModSayfasi", ["Mod Türü", "Çalışma Şekli", "Kullanım Amacı"], [["Otomatik", "Her hücrede anında hesaplar", "Küçük ve orta dosyalar"], ["El ile (Manual)", "Yalnızca F9'a basınca hesaplar", "Devasa büyük dosyalar"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hesaplama Seçenekleri: Otomatik vs El ile (Manual Calculation - F9)",
                    "description": "Formüller > Hesaplama Seçenekleri > El ile ve F9 (Şimdi Hesapla) tuşunu kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_7",
                    "title": "Ağır Dosyaları Uçurma: F9 Tuşu",
                    "explanation": "Milyonlarca formül içeren ağır dosyalarda her rakam girdiğinizde Excel 5 saniye donabilir. Hesaplamayı 'El ile' yaparsanız anında yazarsınız, işiniz bitince 'F9'a basarak tek seferde hesaplatırsınız.",
                    "speechText": "Raporu teslim etmeden önce hesaplama modunu mutlaka tekrar 'Otomatik'e almayı unutmayın.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t28_7_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine manuel modda tüm kitabı hesaplatan kısayol tuşu olarak 'F9' yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'F9' yazın.",
                              "B4 hücresine 'F9' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Hesaplama Seçenekleri: Otomatik vs El ile (Manual Calculation - F9) görevini başarıyla tamamladınız.",
                              "expectedValue": "F9"
                    }
          }
],
        quiz: {
          "id": "q28_7",
          "title": "Hesaplama Seçenekleri: Otomatik vs El ile (Manual Calculation - F9) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_7_1",
                              "question": "Hesaplama modu 'El ile' (Manual) olarak ayarlanmış bir Excel kitabında tüm formülleri güncellemek için hangi tuşa basılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "F9"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "F1"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "F4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "F11"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "F9 tuşu tüm çalışma kitabındaki formülleri tek seferde yeniden hesaplar.",
                              "measuredSkill": "Hesaplama Modları ve F9"
                    }
          ]
}
      },
      {
        id: "sec28_l8",
        phaseId: 28,
        unitId: "u28_8",
        title: "Volatile (Uçucu) Fonksiyonların Performans Maliyeti",
        shortDesc: "DOLAYLI, OFSET, BUGÜN ve ŞİMDİ fonksiyonlarının sayfadaki her harekette tetiklenip dosyayı yavaşlatması.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Volatile Fonksiyonlar",
        primaryGoal: "Uçucu fonksiyonlar (DOLAYLI/OFSET) yerine statik ve hızlı İNDİS/KAÇINCI alternatiflerini kullanmak.",
        prerequisites: ["sec28_l7"],
        commonMistakes: ["100 bin satırda OFSET kullanıp dosyanın işlem yapamaz hale gelmesine yol açmak"],
        successCriteria: "Volatile fonksiyon risklerini yönetebilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Volatile", "DOLAYLI", "OFSET"],
        initialWorkbook: createTableSheet("s28_8", "VolatileSayfasi", ["Fonksiyon", "Türü", "Alternatif Hızlı Çözüm"], [["OFSET (OFFSET)", "Uçucu (Volatile) - Ağır", "İNDİS (INDEX) - Yıldırım Hızlı"], ["DOLAYLI (INDIRECT)", "Uçucu (Volatile) - Ağır", "Dinamik Dizi / ÇAPRAZARA"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Volatile (Uçucu) Fonksiyonların Performans Maliyeti",
                    "description": "Uçucu fonksiyonlar (DOLAYLI/OFSET) yerine statik ve hızlı İNDİS/KAÇINCI alternatiflerini kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_8",
                    "title": "Uçucu (Volatile) Fonksiyon Nedir?",
                    "explanation": "Normal bir formül sadece girdisi değiştiğinde hesaplanır. Oysa 'Volatile' fonksiyonlar (OFSET, DOLAYLI, BUGÜN) siz sayfada boş bir hücreye çift tıklasanız bile tüm 100 bin satırı baştan hesaplar!",
                    "speechText": "Performans canavarı bir model kurmak istiyorsanız OFSET yerine daima İNDİS fonksiyonunu tercih etmelisiniz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t28_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine OFSET yerine önerilen hızlı alternatif olarak 'İNDİS' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'İNDİS' yazın.",
                              "C4 hücresine 'İNDİS' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Volatile (Uçucu) Fonksiyonların Performans Maliyeti görevini başarıyla tamamladınız.",
                              "expectedValue": "İNDİS"
                    }
          }
],
        quiz: {
          "id": "q28_8",
          "title": "Volatile (Uçucu) Fonksiyonların Performans Maliyeti Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_8_1",
                              "question": "Excel'de sayfadaki alakasız bir hücre değişse bile her seferinde baştan hesaplanan fonksiyonlara ne ad verilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Uçucu Fonksiyonlar (Volatile Functions - OFSET, DOLAYLI, BUGÜN)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sabit Fonksiyonlar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin Fonksiyonları"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Mantıksal Fonksiyonlar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Volatile fonksiyonlar her hesaplama döngüsünde tetiklenerek performansı düşürür.",
                              "measuredSkill": "Volatile Fonksiyon Optimizasyonu"
                    }
          ]
}
      },
      {
        id: "sec28_l9",
        phaseId: 28,
        unitId: "u28_9",
        title: "Kullanılmayan Alanları Temizleme ve Dosya Şişmesini Önleme",
        shortDesc: "Veri olmamasına rağmen 1 milyonuncu satıra kadar uzanan hayalet hücreleri tespit edip silme.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Dosya Şişmesi",
        primaryGoal: "Ctrl + End ile son kullanılan hücreyi bulup gereksiz satır ve sütunları kalıcı olarak silmek.",
        prerequisites: ["sec28_l8"],
        commonMistakes: ["Delete tuşuna basıp biçimlendirmeleri silmemek (Satırları seçip sağ tık > Sil yapılmalıdır)"],
        successCriteria: "Dosya şişmesini engelleyebilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Ctrl+End", "Dosya Temizliği"],
        initialWorkbook: createTableSheet("s28_9", "DosyaSismeSayfasi", ["Sorun", "Belirti", "Çözüm"], [["Hayalet Hücreler", "Kaydırma çubuğu minicik kalmış", "Ctrl+End ile fazlalık satırları seçip Sil"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kullanılmayan Alanları Temizleme ve Dosya Şişmesini Önleme",
                    "description": "Ctrl + End ile son kullanılan hücreyi bulup gereksiz satır ve sütunları kalıcı olarak silmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_9",
                    "title": "Minicik Kalan Kaydırma Çubukları",
                    "explanation": "Sayfanın sağındaki kaydırma çubuğu minicik kalmışsa ve aşağı kaydırdığınızda boş satırlar bitmek bilmiyorsa, Excel o boş hücreleri veri sanıp belleğe yüklemiştir. Dosya 50 MB olur!",
                    "speechText": "Verinizin bittiği yerden itibaren tüm satırları seçip 'Satırları Sil' yapıp kaydettiğinizde dosya boyutu anında 1 MB'a düşer.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t28_9_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine temizlik komutu olarak 'Gereksiz Satırları Sil' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Gereksiz Satırları Sil' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Kullanılmayan Alanları Temizleme ve Dosya Şişmesini Önleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Gereksiz Satırları Sil"
                    }
          }
],
        quiz: {
          "id": "q28_9",
          "title": "Kullanılmayan Alanları Temizleme ve Dosya Şişmesini Önleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_9_1",
                              "question": "Excel'de bir sayfadaki en son kullanılan hücreye anında gitmek için hangi kısayol kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + End"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + Home"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Alt + F4"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Shift + Enter"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl + End Excel'in aktif kabul ettiği en alt-sağdaki son hücreye zıplar.",
                              "measuredSkill": "Çalışma Alanı Sınır Tespiti"
                    }
          ]
}
      },
      {
        id: "sec28_l10",
        phaseId: 28,
        unitId: "u28_10",
        title: "Büyük Veri Kümelerinde Formül Optimizasyon Kontrol Listesi",
        shortDesc: "Kurumsal dosyalarda performans denetimi kontrol listesini adım adım uygulama.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Kontrol Listesi",
        primaryGoal: "Tüm sütun başvuruları (A:A) yerine sınırlandırılmış tablo başvuruları ([@Sütun]) kullanmak.",
        prerequisites: ["sec28_l9"],
        commonMistakes: ["=DÜŞEYARA(A1; A:Z; 5; 0) şeklinde 1 milyon satırlık devasa sütunları formüle verip hesaplamayı tıkamak"],
        successCriteria: "Formül optimizasyon kontrol listesini uygulayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Optimizasyon Kontrol Listesi"],
        initialWorkbook: createTableSheet("s28_10", "KontrolListesiSayfasi", ["Denetim Kriteri", "Kötü Pratik", "İyi Pratik"], [["Aralık Tanımı", "A:A (1 milyon satır)", "A1:A5000 veya Tablo[@Ciro]"], ["Arama Fonksiyonu", "DÜŞEYARA(A:Z)", "İNDİS / KAÇINCI veya ÇAPRAZARA"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Büyük Veri Kümelerinde Formül Optimizasyon Kontrol Listesi",
                    "description": "Tüm sütun başvuruları (A:A) yerine sınırlandırılmış tablo başvuruları ([@Sütun]) kullanmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_10",
                    "title": "10 Maddelik Hız Kılavuzu",
                    "explanation": "1: Tüm sütun (A:A) başvurusu yapmayın. 2: OFSET ve DOLAYLI'dan kaçının. 3: Sayfadaki boş satırları silin. 4: Koşullu biçimlendirmeyi tüm sütuna değil sadece veriye uygulayın. 5: Özetleri PivotTable'a yaptırın.",
                    "speechText": "Bu kontrol listesini uyguladığınızda 5 dakikada açılan ve donan bir dosya 2 saniyede açılan yağ gibi bir rapora dönüşür.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t28_10_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine performans kuralı olarak 'Sınırlandırılmış Aralık Kullanımı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Sınırlandırılmış Aralık Kullanımı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Büyük Veri Kümelerinde Formül Optimizasyon Kontrol Listesi görevini başarıyla tamamladınız.",
                              "expectedValue": "Sınırlandırılmış Aralık Kullanımı"
                    }
          }
],
        quiz: {
          "id": "q28_10",
          "title": "Büyük Veri Kümelerinde Formül Optimizasyon Kontrol Listesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_10_1",
                              "question": "Formüllerde =TOPLA(A:A) yerine =TOPLA(A2:A1000) kullanmanın performansa faydası nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Excel'in 1 milyon boş hücreyi taramasını önleyerek hesaplama süresini devasa kısaltır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hiçbir farkı yoktur"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcıyı hızlandırır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sınırlandırılmış aralıklar Excel'in 1.048.576 satırı gereksiz yere belleğe almasını engeller.",
                              "measuredSkill": "Formül Alan Optimizasyonu"
                    }
          ]
}
      },
      {
        id: "sec28_l11",
        phaseId: 28,
        unitId: "u28_11",
        title: "Formül Denetimi ve Performans Uzmanlık Testi",
        shortDesc: "Karmaşık modellerdeki hataları çözme, döngüsel başvuruları temizleme ve dosyayı optimize etme final sınavı.",
        category: "Formül Denetimi & Performans",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "Tüm denetim ve optimizasyon araçlarını gerçek bir vaka dosyasında başarıyla tamamlamak.",
        prerequisites: ["sec28_l10"],
        commonMistakes: ["Hata ayıklamadan önce dosyanın yedeğini almayı unutmak"],
        successCriteria: "Formül denetimi ve performans sertifikasyonunu tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Final Denetim"],
        initialWorkbook: createTableSheet("s28_11", "DenetimFinalSayfasi", ["Denetim Aşaması", "Uygulanan Araç", "Sonuç"], [["Hata Tespiti", "Formülü Değerlendir & İzleme Okları", "Çözüldü"], ["Performans", "Volatile Temizliği & Sınırlandırma", "10x Hızlandı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Formül Denetimi ve Performans Uzmanlık Testi",
                    "description": "Tüm denetim ve optimizasyon araçlarını gerçek bir vaka dosyasında başarıyla tamamlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts28_11",
                    "title": "Usta Denetçi Seviyesi",
                    "explanation": "Tebrikler! Döngüsel başvuruları temizlediniz, yeşil üçgenleri düzelttiniz, gereksiz şişkinlikleri attınız ve dosyanızı kurumsal performans standartlarına kavuşturdunuz.",
                    "speechText": "Artık şirketinizdeki en karmaşık ve ağır Excel modellerini bile saniyeler içinde teşhis edip iyileştiren bir Formül ve Performans Uzmanısınız.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t28_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine final başarı derecesi olarak 'Performans Denetimi Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Performans Denetimi Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Formül Denetimi ve Performans Uzmanlık Testi görevini başarıyla tamamladınız.",
                              "expectedValue": "Performans Denetimi Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q28_11",
          "title": "Formül Denetimi ve Performans Uzmanlık Testi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_28_11_1",
                              "question": "Bir finansal modelin kurumsal denetimden tam not alması için hangi şartlar sağlanmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sıfır döngüsel başvuru, hatasız formül hiyerarşisi ve optimize edilmiş hafif aralıklar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Çok renkli olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "En az 50 sayfa olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca PDF olarak kaydedilmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hatasız, döngüsüz ve optimize edilmiş modeller kurumsal denetimin temel standardıdır.",
                              "measuredSkill": "Kurumsal Model Denetim Standardı"
                    }
          ]
}
      }
    ]
  },
  {
    id: 29,
    category: "Kurumsal İş Raporlama Projeleri",
    title: "29. Profesyonel İş Raporlama Projeleri",
    subtitle: "Satış, Stok Yaşlandırma, Lojistik, İK Bütçesi, Sapma, RFM, OEE ve Nakit Akışı",
    iconName: "Briefcase",
    description: "Farklı departmanlar için sıfırdan kurulan 8 kapsamlı kurumsal raporlama projesi: Satış analitiği, stok yaşlandırma, sevkiyat takibi, İK devir hızı, bütçe sapması, RFM müşteri segmentasyonu, üretim OEE verimliliği ve nakit akış modeli.",
    lessons: [
      {
        id: "sec29_l1",
        phaseId: 29,
        unitId: "u29_1",
        title: "Satış ve Ciro Performans Analiz Raporu Projesi",
        shortDesc: "Bölge, temsilci ve ürün bazında aylık büyüme, pazar payı ve hedef gerçekleşme analitiği.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Satış Analitiği",
        primaryGoal: "Satış performans raporunu dinamik KPI ve grafiklerle eksiksiz kurmak.",
        prerequisites: ["sec28_l11"],
        commonMistakes: ["İade ve iskonto düşülmeden brüt satış üzerinden net prim hesaplamak"],
        successCriteria: "Uçtan uca kurumsal satış raporu üretebilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Satış Raporu"],
        initialWorkbook: createTableSheet("s29_1", "SatisProjeSayfasi", ["Bölge", "Hedef (TL)", "Gerçekleşen (TL)", "Gerçekleşme %"], [["Marmara", 1000000, 1150000, 1.15], ["Ege", 750000, 720000, 0.96]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satış ve Ciro Performans Analiz Raporu Projesi",
                    "description": "Satış performans raporunu dinamik KPI ve grafiklerle eksiksiz kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_1",
                    "title": "Satış Analitiğinin Zirvesi",
                    "explanation": "Bu projede brüt cirodan iadeler ve iskontolar düşülerek net satış bulundu, bölge hedefleriyle kıyaslandı ve lider temsilciler dinamik sıralamayla belirlendi.",
                    "speechText": "Yönetim kurullarına her ay sunulan stratejik satış raporlama mimarisini inşa ettiniz.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t29_1_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine genel gerçekleşme oranı olarak 1.07 yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "1.07 yazın.",
                              "D4 hücresine 1.07 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Satış ve Ciro Performans Analiz Raporu Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": 1.07
                    }
          }
],
        quiz: {
          "id": "q29_1",
          "title": "Satış ve Ciro Performans Analiz Raporu Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_1_1",
                              "question": "Satış performans raporlarında net ciro hesaplanırken brüt cirodan hangi kalemler düşülmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İadeler, iskontolar ve satış indirimleri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca çalışan maaşları"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Elektrik faturası"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kira"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Net satış = Brüt Satış - (Satış İadeleri + Satış İskontoları) formülüyle bulunur.",
                              "measuredSkill": "Net Satış Raporlama Standardı"
                    }
          ]
}
      },
      {
        id: "sec29_l2",
        phaseId: 29,
        unitId: "u29_2",
        title: "Stok ve Envanter Yaşlandırma Raporu (FIFO / Yaşlandırma)",
        shortDesc: "Depodaki malların kaç gündür yattığını (0-30, 31-60, 60-90, 90+ gün) ve hurda riskini analiz etme.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Stok Yaşlandırma",
        primaryGoal: "Depo giriş tarihlerine göre =BUGÜN()-GirişTarihi ile gün farkı bulup yaşlandırma bantlarına dağıtmak.",
        prerequisites: ["sec29_l1"],
        commonMistakes: ["Depodan çıkan malları FIFO (İlk Giren İlk Çıkar) kuralına göre düşmemek"],
        successCriteria: "Stok yaşlandırma raporu kurabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Stok Yaşlandırma", "FIFO"],
        initialWorkbook: createTableSheet("s29_2", "StokYaslandirmaSayfasi", ["Ürün", "Stok Adedi", "Yaşlandırma Bandı", "Değer (TL)"], [["Palet A", 150, "0 - 30 Gün", 45000], ["Koli B", 40, "90+ Gün (Kritik)", 28000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Stok ve Envanter Yaşlandırma Raporu (FIFO / Yaşlandırma)",
                    "description": "Depo giriş tarihlerine göre =BUGÜN()-GirişTarihi ile gün farkı bulup yaşlandırma bantlarına dağıtmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_2",
                    "title": "Atıl Sermayeyi Kurtarma: Yaşlandırma",
                    "explanation": "Depoda 90 günden uzun süredir yatan stoklar şirketin nakdini bağlar ve bozulma riski taşır. Yaşlandırma raporu kritik stokları anında kırmızıyla vurgulayarak indirim veya tasfiye kararı aldırır.",
                    "speechText": "Tedarik zinciri yönetiminin en kritik kontrol mekanizmasını başarıyla modellediniz.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t29_2_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine toplam stok envanter değerini '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "D4 hücresine '=TOPLA(D2:D3)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Stok ve Envanter Yaşlandırma Raporu (FIFO / Yaşlandırma) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q29_2",
          "title": "Stok ve Envanter Yaşlandırma Raporu (FIFO / Yaşlandırma) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_2_1",
                              "question": "Stok yaşlandırma raporunda '90+ Gün' bandında biriken yüksek stoklar şirket için ne anlama gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Atıl sermaye, nakit sıkışıklığı ve envanter değer kaybı riski"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yüksek kârlılık"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hızlı satış"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sıfır maliyet"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "90 günden eski stoklar atıl sermaye bağlar ve acil tasfiye stratejisi gerektirir.",
                              "measuredSkill": "Stok Yaşlandırma ve Tedarik Zinciri"
                    }
          ]
}
      },
      {
        id: "sec29_l3",
        phaseId: 29,
        unitId: "u29_3",
        title: "Lojistik ve Sevkiyat Takip Raporu",
        shortDesc: "Sipariş teslim süreleri (Lead Time), geciken sevkiyatlar ve zamanında teslimat (OTIF) oranları.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Lojistik & Sevkiyat",
        primaryGoal: "OTIF (On-Time In-Full) teslimat başarı oranını dinamik formüllerle hesaplamak.",
        prerequisites: ["sec29_l2"],
        commonMistakes: ["Gecikme gününü hesaplarken hafta sonlarını ve resmi tatilleri TAMİŞGÜNÜ ile düşmemek"],
        successCriteria: "Lojistik takip raporu hazırlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Lojistik", "OTIF"],
        initialWorkbook: createTableSheet("s29_3", "LojistikSayfasi", ["Sevkiyat No", "Taşıyıcı Firma", "Gecikme (Gün)", "OTIF Durumu"], [["SEV-01", "Aras Lojistik", 0, "Zamanında (OTIF)"], ["SEV-02", "MNG Kargo", 3, "Gecikmeli"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Lojistik ve Sevkiyat Takip Raporu",
                    "description": "OTIF (On-Time In-Full) teslimat başarı oranını dinamik formüllerle hesaplamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_3",
                    "title": "Zamanında ve Eksiksiz: OTIF",
                    "explanation": "Küresel lojistiğin altın metriği OTIF'tir (On-Time In-Full). Hem tam zamanında hem de eksiksiz teslim edilen siparişler tespit edilir ve taşıyıcı kargo firmalarının performans karnesi çıkarılır.",
                    "speechText": "Hangi nakliye firmasının ne kadar gecikme yaşattığını tek bakışta gösteren canlı bir lojistik kontrol kulesi kurdunuz.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t29_3_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine lojistik kalite standardı olarak 'OTIF Başarı Oranı %96' yazın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "'OTIF Başarı Oranı %96' yazın.",
                              "D4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Lojistik ve Sevkiyat Takip Raporu görevini başarıyla tamamladınız.",
                              "expectedValue": "OTIF Başarı Oranı %96"
                    }
          }
],
        quiz: {
          "id": "q29_3",
          "title": "Lojistik ve Sevkiyat Takip Raporu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_3_1",
                              "question": "Lojistik yönetiminde OTIF (On-Time In-Full) neyi ifade eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Siparişin hem tam zamanında hem de eksiksiz teslim edilme oranını"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Kamyonun yakıt tüketimini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Kargonun ağırlığını"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yol mesafesini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "OTIF müşteri memnuniyetini ölçen zamanında ve eksiksiz teslimat standardıdır.",
                              "measuredSkill": "Lojistik Performans Metrikleri"
                    }
          ]
}
      },
      {
        id: "sec29_l4",
        phaseId: 29,
        unitId: "u29_4",
        title: "İK, Personel Devir Hızı (Turnover) ve Maaş Bütçesi Analizi",
        shortDesc: "Departman bazında çalışan sirkülasyonu, kıdem ortalaması, yıllık zam maliyeti ve İK metrikleri.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "İK Analitiği",
        primaryGoal: "Turnover Oranı = (Ayrılan Personel / Ortalama Çalışan Sayısı) formülüyle devir hızını ölçmek.",
        prerequisites: ["sec29_l3"],
        commonMistakes: ["Yıllık kıdem hesaplarken işe giriş tarihini BUGÜN ile dinamik bağlamayıp sabit sayı yazmak"],
        successCriteria: "İK analitiği raporu hazırlayabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["İK Analitiği", "Turnover"],
        initialWorkbook: createTableSheet("s29_4", "IkAnalitikSayfasi", ["Departman", "Çalışan Sayısı", "Ayrılan Personel", "Turnover %"], [["Yazılım", 40, 2, 0.05], ["Satış", 60, 9, 0.15]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İK, Personel Devir Hızı (Turnover) ve Maaş Bütçesi Analizi",
                    "description": "Turnover Oranı = (Ayrılan Personel / Ortalama Çalışan Sayısı) formülüyle devir hızını ölçmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_4",
                    "title": "İnsan Kaynakları Yönetim Masası",
                    "explanation": "Yüksek personel devir hızı (Turnover) şirkete büyük işe alım ve eğitim maliyeti yükler. Satış departmanındaki %15'lik devir hızı alarm verirken, yazılımdaki %5'lik oran bağlılığı gösterir.",
                    "speechText": "Maaş skalaları, kıdem tazminatı yükü ve prim simülasyonlarıyla tam donanımlı bir İK bütçe modeli inşa ettiniz.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t29_4_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine toplam şirket çalışan sayısını '=TOPLA(B2:B3)' formülüyle hesaplayın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "B4 hücresine '=TOPLA(B2:B3)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! İK, Personel Devir Hızı (Turnover) ve Maaş Bütçesi Analizi görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "B2:B3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q29_4",
          "title": "İK, Personel Devir Hızı (Turnover) ve Maaş Bütçesi Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_4_1",
                              "question": "Personel Devir Hızı (Turnover Rate) nasıl hesaplanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "(Dönem İçinde Ayrılan Personel Sayısı / Ortalama Çalışan Sayısı) * 100"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Toplam Maaş / Çalışan Sayısı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "İşe Giriş Sayısı * 2"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Çalışılan Saatler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Turnover ayrılan çalışanların ortalama işgücüne oranıyla bulunur.",
                              "measuredSkill": "İK Metrikleri ve Turnover"
                    }
          ]
}
      },
      {
        id: "sec29_l5",
        phaseId: 29,
        unitId: "u29_5",
        title: "Şirket Bütçe ve Gerçekleşen Sapma Raporu (Variance Analysis)",
        shortDesc: "Departman harcamalarını onaylı bütçeyle kuruşu kuruşuna kıyaslayıp sapma (Fark ve % Sapma) tespiti.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Bütçe ve Sapma",
        primaryGoal: "Sapma = Gerçekleşen - Bütçe ve % Sapma formüllerini koşullu renklendirmeyle sunmak.",
        prerequisites: ["sec29_l4"],
        commonMistakes: ["Gider bütçesinde gerçekleşenin fazla olmasının olumsuz (kırmızı), gelire göre ise olumlu olduğunu karıştırmak"],
        successCriteria: "Bütçe sapma analizi yapabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["Bütçe Sapma", "Variance"],
        initialWorkbook: createTableSheet("s29_5", "ButceSapmaSayfasi", ["Masraf Merkezi", "Bütçe (TL)", "Gerçekleşen (TL)", "Sapma (TL)", "Sapma %"], [["Pazarlama", 500000, 560000, 60000, 0.12], ["Bilişim", 300000, 275000, -25000, -0.08]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Şirket Bütçe ve Gerçekleşen Sapma Raporu (Variance Analysis)",
                    "description": "Sapma = Gerçekleşen - Bütçe ve % Sapma formüllerini koşullu renklendirmeyle sunmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_5",
                    "title": "Bütçe Disiplini ve Sapma Analizi",
                    "explanation": "Pazarlama departmanı bütçesini 60.000 TL (%12) aşarak kırmızı alarm verirken, Bilişim departmanı 25.000 TL tasarruf sağlamıştır.",
                    "speechText": "Yönetim kurullarının her ay harcama yetkilerini denetlediği en prestijli finansal kontrol şablonunu başarıyla kurdunuz.",
                    "targetCell": "D4"
          }
],
        tasks: [
          {
                    "id": "t29_5_1",
                    "stepNumber": 1,
                    "instruction": "D4 hücresine net bütçe sapmasını '=TOPLA(D2:D3)' formülüyle hesaplayın.",
                    "targetCell": "D4",
                    "hints": [
                              "D4 hücresini seçin.",
                              "=TOPLA formülünü yazın.",
                              "D4 hücresine '=TOPLA(D2:D3)' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D4",
                              "successMessage": "Tebrikler! Şirket Bütçe ve Gerçekleşen Sapma Raporu (Variance Analysis) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "TOPLA",
                                        "D2:D3"
                              ]
                    }
          }
],
        quiz: {
          "id": "q29_5",
          "title": "Şirket Bütçe ve Gerçekleşen Sapma Raporu (Variance Analysis) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_5_1",
                              "question": "Bir gider kaleminde Gerçekleşen Harcama > Bütçe ise bu durum nasıl adlandırılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Olumsuz (Aleyhte) Sapma / Bütçe Aşımı"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tasarruf"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Gelir Fazlası"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sıfır Sapma"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Giderin bütçeden fazla olması bütçe aşımıdır ve aleyhte (olumsuz) sapma kabul edilir.",
                              "measuredSkill": "Bütçe Sapma Analizi"
                    }
          ]
}
      },
      {
        id: "sec29_l6",
        phaseId: 29,
        unitId: "u29_6",
        title: "Müşteri Segmentasyonu ve RFM Analizi",
        shortDesc: "Recency (Yenilik), Frequency (Sıklık) ve Monetary (Parasal Değer) skorlarıyla müşterileri VIP ve Kayıp olarak sınıflandırma.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "RFM Analizi",
        primaryGoal: "YÜZDELİK (PERCENTRANK) veya EĞER kurallarıyla 1-5 arası RFM skorları üretip müşteri segmenti atamak.",
        prerequisites: ["sec29_l5"],
        commonMistakes: ["Recency (son alışveriş üzerinden geçen gün) sayısının küçük olmasının daha iyi (yüksek skor) olduğunu ters algılamak"],
        successCriteria: "RFM müşteri analitiği modelleyebilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["RFM Analizi", "Segmentasyon"],
        initialWorkbook: createTableSheet("s29_6", "RfmSayfasi", ["Müşteri", "Son Alışveriş (Gün)", "Sipariş Sayısı", "Toplam Tutar (TL)", "Müşteri Segmenti"], [["Platin Müşteri A", 3, 24, 185000, "Şampiyonlar (VIP)"], ["Pasif Müşteri B", 180, 1, 1500, "Uykuda / Riskli"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Müşteri Segmentasyonu ve RFM Analizi",
                    "description": "YÜZDELİK (PERCENTRANK) veya EĞER kurallarıyla 1-5 arası RFM skorları üretip müşteri segmenti atamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_6",
                    "title": "Pazarlamanın Zirvesi: RFM Skorlaması",
                    "explanation": "Recency: Ne kadar yakın zamanda alışveriş yaptı? Frequency: Ne sıklıkla alıyor? Monetary: Ne kadar para harcadı? Bu üç metrik müşterileri 'Şampiyonlar', 'Sadıklar' ve 'Terk Edenler' olarak böler.",
                    "speechText": "E-ticaret ve perakende devlerinin milyonlarca liralık pazarlama bütçesini doğru müşterilere harcamasını sağlayan RFM motorunu modellediniz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t29_6_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine lider segment adı olarak 'Şampiyonlar (VIP)' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "'Şampiyonlar (VIP)' yazın.",
                              "E2 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Müşteri Segmentasyonu ve RFM Analizi görevini başarıyla tamamladınız.",
                              "expectedValue": "Şampiyonlar (VIP)"
                    }
          }
],
        quiz: {
          "id": "q29_6",
          "title": "Müşteri Segmentasyonu ve RFM Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_6_1",
                              "question": "RFM analizinde 'Recency' metriğinde gün sayısının küçük olması neyi gösterir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Müşterinin çok yakın zamanda alışveriş yaptığını ve son derece aktif olduğunu"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Müşterinin şirketi terk ettiğini"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hiç para harcamadığını"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Borçlu olduğunu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Recency gün sayısı ne kadar azsa müşteri o kadar yakın zamanda alışveriş yapmıştır ve skoru yüksektir.",
                              "measuredSkill": "RFM Skorlama Mantığı"
                    }
          ]
}
      },
      {
        id: "sec29_l7",
        phaseId: 29,
        unitId: "u29_7",
        title: "Üretim Verimlilik ve Duruş (OEE) Analizi Raporu",
        shortDesc: "Fabrika makinelerinin Kullanılabilirlik (Availability), Performans ve Kalite oranlarıyla Genel Ekipman Etkinliğini (OEE) hesaplama.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Üretim & OEE",
        primaryGoal: "OEE = Kullanılabilirlik * Performans * Kalite formülüyle fabrika verimliliğini çarpmak.",
        prerequisites: ["sec29_l6"],
        commonMistakes: ["Planlı bakım duruşlarını arıza duruşlarıyla aynı kategoriye koyup kullanılabilirliği yanlış hesaplamak"],
        successCriteria: "OEE üretim analitiği raporu kurabilmek.",
        level: "Uzman",
        durationMinutes: 15,
        functionsUsed: ["OEE", "Üretim Verimliliği"],
        initialWorkbook: createTableSheet("s29_7", "OeeSayfasi", ["Hat / Makine", "Kullanılabilirlik %", "Performans %", "Kalite %", "OEE Oranı %"], [["CNC Torna Hattı 1", 0.9, 0.95, 0.98, 0.838]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Üretim Verimlilik ve Duruş (OEE) Analizi Raporu",
                    "description": "OEE = Kullanılabilirlik * Performans * Kalite formülüyle fabrika verimliliğini çarpmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_7",
                    "title": "Dünya Standardı Üretim: OEE",
                    "explanation": "OEE = %90 Kullanılabilirlik * %95 Performans * %98 Kalite = %83.8 Genel Ekipman Etkinliği. Küresel standartta %85 ve üzeri 'World Class Manufacturing' (Dünya Klasında Üretim) kabul edilir.",
                    "speechText": "Hangi makinenin ne kadar arıza duruşu yaptığını ve fire oranını anında tespit eden endüstriyel üretim panosu kurdunuz.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t29_7_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine OEE formülü olarak '=B2*C2*D2' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=B2*C2*D2 yazın.",
                              "E2 hücresine '=B2*C2*D2' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Üretim Verimlilik ve Duruş (OEE) Analizi Raporu görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "B2*C2*D2",
                                        "B2 * C2 * D2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q29_7",
          "title": "Üretim Verimlilik ve Duruş (OEE) Analizi Raporu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_7_1",
                              "question": "Üretimde OEE (Genel Ekipman Etkinliği) hangi üç temel oranın çarpımıyla hesaplanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kullanılabilirlik (Availability) * Performans * Kalite"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Maaş * Elektrik * Kira"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Fiyat * Adet * KDV"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tarih * Saat * Hız"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "OEE makinenin çalışma süresini, üretim hızını ve sağlam ürün oranını çarparak net verimlilik bulur.",
                              "measuredSkill": "OEE Endüstriyel Analitik"
                    }
          ]
}
      },
      {
        id: "sec29_l8",
        phaseId: 29,
        unitId: "u29_8",
        title: "Nakit Akış ve Finansal Sağlık Tablosu (Cash Flow Forecasting)",
        shortDesc: "Gelecek 12 haftalık nakit giriş ve çıkışlarını modelleyerek şirketin ne zaman nakit açığına düşeceğini öngörme.",
        category: "Kurumsal İş Raporlama Projeleri",
        groupTitle: "Nakit Akışı",
        primaryGoal: "Devreden Bakiye + Girişler - Çıkışlar = Kapanış Bakiyesi zinciri kurmak.",
        prerequisites: ["sec29_l7"],
        commonMistakes: ["KDV ve vergi ödemelerini nakit çıkışına eklemeyi unutup nakit krizine girmek"],
        successCriteria: "Nakit akış projeksiyonu modelleyebilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Nakit Akışı", "Cash Flow"],
        initialWorkbook: createTableSheet("s29_8", "NakitAkisSayfasi", ["Hafta", "Açılış Bakiyesi", "Tahsilatlar", "Ödemeler", "Net Kapanış Bakiyesi"], [["Hafta 1", 500000, 350000, 250000, 600000], ["Hafta 2", 600000, 200000, 450000, 350000]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Nakit Akış ve Finansal Sağlık Tablosu (Cash Flow Forecasting)",
                    "description": "Devreden Bakiye + Girişler - Çıkışlar = Kapanış Bakiyesi zinciri kurmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts29_8",
                    "title": "Şirketin Hayat Damarı: Nakit Akışı",
                    "explanation": "Kâr eden şirketler batmaz; nakdi biten şirketler batar! Bu model gelecek haftalarda kasanın ne zaman negatife düşeceğini önceden haber verir ve kredi ihtiyacını erkenden planlar.",
                    "speechText": "Tebrikler! 8 dev kurumsal departmanın (Satış, Stok, Lojistik, İK, Bütçe, RFM, Üretim ve Finans) tüm büyük raporlarını sıfırdan kurup başarıyla tamamladınız.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t29_8_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine net kapanış formülü olarak '=B2+C2-D2' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "=B2+C2-D2 yazın.",
                              "E2 hücresine '=B2+C2-D2' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Nakit Akış ve Finansal Sağlık Tablosu (Cash Flow Forecasting) görevini başarıyla tamamladınız.",
                              "expectedFormulaKeywords": [
                                        "B2+C2-D2",
                                        "B2 + C2 - D2"
                              ]
                    }
          }
],
        quiz: {
          "id": "q29_8",
          "title": "Nakit Akış ve Finansal Sağlık Tablosu (Cash Flow Forecasting) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_29_8_1",
                              "question": "Bir sonraki haftanın Açılış Bakiyesi formülü ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Bir önceki haftanın Kapanış Bakiyesine eşit olmalıdır (=E2)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sıfır yazılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tahsilatlara eşit olmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Rastgele sayı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Nakit akışında her haftanın açılış kasası önceki haftanın kapanış kasasından devralınır.",
                              "measuredSkill": "Nakit Akış Projeksiyon Modellemesi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 30,
    category: "Kapsamlı Bitirme Projesi (Capstone)",
    title: "30. Kapsamlı Bitirme Projesi",
    subtitle: "Ham Veriden C-Level Dashboarda Uçtan Uca Bütünleşik İş Zekası Şaheseri",
    iconName: "Award",
    description: "Öğrencinin tüm Excel yetkinliklerini birleştirdiği 7 aşamalı dev bitirme projesi: Veri temizleme, formül mimarisi, Pivot modelleme, dinamik grafikler, C-Level dashboard tasarımı, senaryo analizi ve sertifikasyon.",
    lessons: [
      {
        id: "sec30_l1",
        phaseId: 30,
        unitId: "u30_1",
        title: "Bitirme Projesi 1. Aşama: Ham Veri Temizliği ve Yapılandırma",
        shortDesc: "ERP'den gelen 100.000 satırlık kirli veriyi boşluklardan, çift kayıtlardan arındırıp resmi Tabloya dönüştürme.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 1: Veri Hazırlığı",
        primaryGoal: "KIRP, YAZIM.DÜZENİ ve Ctrl+T ile ham veri setini 1NF tabular forma kavuşturmak.",
        prerequisites: ["sec29_l8"],
        commonMistakes: ["Veri temizliğini tamamlamadan formül ve pivot aşamasına geçip sonra tüm sistemi baştan yapmak zorunda kalmak"],
        successCriteria: "1. Aşama veri hazırlığını başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bitirme Projesi", "Veri Temizliği"],
        initialWorkbook: createTableSheet("s30_1", "CapstoneAsama1", ["Ham Kayıt", "Temizlenmiş Veri", "Durum"], [["  TR-1001 / marmara  ", "TR-1001 | Marmara", "Temizlendi"], ["TR-1002 / ege ", "TR-1002 | Ege", "Temizlendi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 1. Aşama: Ham Veri Temizliği ve Yapılandırma",
                    "description": "KIRP, YAZIM.DÜZENİ ve Ctrl+T ile ham veri setini 1NF tabular forma kavuşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_1",
                    "title": "Temel Olmadan Bina Kurulmaz",
                    "explanation": "Büyük bitirme projemizin 1. aşamasında ham CRM ve satış kayıtlarındaki bozuk metinleri temizliyor, tarih sütunlarını doğru formata çekiyor ve tüm aralığı 'Tablo_Satislar' olarak adlandırıyoruz.",
                    "speechText": "Veri altyapısı kusursuz hazırlandı; artık üzerine dinamik formülleri ve analitik modelleri inşa edebiliriz.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 1. aşama onay durumu olarak '1. Aşama: Veri Mimarisi Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'1. Aşama: Veri Mimarisi Onaylandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 1. Aşama: Ham Veri Temizliği ve Yapılandırma görevini başarıyla tamamladınız.",
                              "expectedValue": "1. Aşama: Veri Mimarisi Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q30_1",
          "title": "Bitirme Projesi 1. Aşama: Ham Veri Temizliği ve Yapılandırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_1_1",
                              "question": "Büyük bir veri projesinde ilk yapılması gereken en kritik aşama hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ham verilerin temizlenmesi, tiplerin doğrulanması ve tabular tabloya dönüştürülmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hemen grafik çizmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı tiplerini büyütmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Renk seçmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kusursuz veri temizliği olmadan yapılan tüm analiz ve grafikler hatalı sonuç verir.",
                              "measuredSkill": "Veri Hazırlığı ve Taban Kurulumu"
                    }
          ]
}
      },
      {
        id: "sec30_l2",
        phaseId: 30,
        unitId: "u30_2",
        title: "Bitirme Projesi 2. Aşama: Dinamik Formüller ve Hata Denetimi",
        shortDesc: "ÇAPRAZARA, ÇOKETOPLA, EĞERHATA ve dinamik dizi formülleriyle hesaplama motorunu kurma.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 2: Hesaplama Motoru",
        primaryGoal: "Müşteri ve ürün bilgilerini ÇAPRAZARA ile bağlayıp ÇOKETOPLA ile departman toplamları üretmek.",
        prerequisites: ["sec30_l1"],
        commonMistakes: ["Formülleri EĞERHATA ile sarmalamayıp bulunamayan kayıtlarda #YOK hatası bırakmak"],
        successCriteria: "2. Aşama formül motorunu başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bitirme Projesi", "ÇAPRAZARA", "ÇOKETOPLA"],
        initialWorkbook: createTableSheet("s30_2", "CapstoneAsama2", ["Hesaplama Metriği", "Formül Mimarisi", "Durum"], [["Dinamik Ürün Eşleme", "=ÇAPRAZARA(Barkod; Ürünler; Fiyat)", "Aktif"], ["Koşullu Ciro Toplamı", "=ÇOKETOPLA(Tutar; Bölge; \"Marmara\")", "Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 2. Aşama: Dinamik Formüller ve Hata Denetimi",
                    "description": "Müşteri ve ürün bilgilerini ÇAPRAZARA ile bağlayıp ÇOKETOPLA ile departman toplamları üretmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_2",
                    "title": "Hesaplama Motorunun Kalbi",
                    "explanation": "2. aşamada veritabanı eşleştirmelerini en modern fonksiyon olan ÇAPRAZARA ile tamamladık. ÇOKETOPLA ve ÇOKEĞERSAY ile tüm finansal özetleri canlı formül ağına bağladık.",
                    "speechText": "Her formülü EĞERHATA ile zırhlayarak en uç veri girişlerinde bile sıfır hata veren kurumsal bir motor kurduk.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_2_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 2. aşama onay durumu olarak '2. Aşama: Hesaplama Motoru Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'2. Aşama: Hesaplama Motoru Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 2. Aşama: Dinamik Formüller ve Hata Denetimi görevini başarıyla tamamladınız.",
                              "expectedValue": "2. Aşama: Hesaplama Motoru Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q30_2",
          "title": "Bitirme Projesi 2. Aşama: Dinamik Formüller ve Hata Denetimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_2_1",
                              "question": "Formül hesaplama motorunun profesyonel kabul edilmesi için hangi zırh kuralı uygulanmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tüm arama formüllerinin EĞERHATA ile sarmalanarak #YOK hatalarının temizlenmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formüllerin elle silinmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Büyük punto yapılması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca tek formül yazılması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "EĞERHATA koruması raporun görsel kalitesini ve profesyonelliğini garanti altına alır.",
                              "measuredSkill": "Hatasız Formül Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec30_l3",
        phaseId: 30,
        unitId: "u30_3",
        title: "Bitirme Projesi 3. Aşama: PivotTable ve Özet Veri Mimarisi",
        shortDesc: "Çok boyutlu çapraz analizler, tarih gruplamaları ve hesaplanan alanlarla özet veri katmanını kurma.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 3: Pivot Modelleme",
        primaryGoal: "PivotTable'ları veri modeline bağlayıp çoklu analitik özet tabloları yapılandırmak.",
        prerequisites: ["sec30_l2"],
        commonMistakes: ["PivotTable'ları isimlendirmeyip (Pivot_Bolge, Pivot_Zaman vb.) dilimleyici bağlantılarında karıştırmak"],
        successCriteria: "3. Aşama Pivot modelini başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bitirme Projesi", "PivotTable"],
        initialWorkbook: createTableSheet("s30_3", "CapstoneAsama3", ["Pivot Adı", "Özet Türü", "Boyut"], [["Pivot_BolgeCiro", "Bölgesel Toplam ve Pazar Payı", "Coğrafi"], ["Pivot_ZamanTrend", "Aylık Büyüme ve Çeyrek Analizi", "Zamansal"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 3. Aşama: PivotTable ve Özet Veri Mimarisi",
                    "description": "PivotTable'ları veri modeline bağlayıp çoklu analitik özet tabloları yapılandırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_3",
                    "title": "Analitik Veri Katmanı",
                    "explanation": "3. aşamada dashboard'un arkasında çalışacak 'Hesaplamalar' sayfasına 3 farklı PivotTable yerleştirdik: Bölge bazlı ciro, kategori dağılımı ve çeyreklik trendler.",
                    "speechText": "Her PivotTable'a anlamlı isimler verdik ve değerleri hem TL hem de genel toplam yüzdesi olarak yapılandırdık.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_3_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 3. aşama onay durumu olarak '3. Aşama: Pivot Katmanı Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'3. Aşama: Pivot Katmanı Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 3. Aşama: PivotTable ve Özet Veri Mimarisi görevini başarıyla tamamladınız.",
                              "expectedValue": "3. Aşama: Pivot Katmanı Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q30_3",
          "title": "Bitirme Projesi 3. Aşama: PivotTable ve Özet Veri Mimarisi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_3_1",
                              "question": "Dashboard'a veri sağlayan PivotTable'ların isimlendirilmesi (Örn: Pivot_Satislar) neden zorunludur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dilimleyici bağlantılarında ve formül referanslarında hangi tablonun hedeflendiğini bilmek için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel'in zorunlu kuralı olduğu için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı renklendirmek için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Boyut küçültmek için"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Anlamlı Pivot adları rapor bağlantılarının hatasız kurulmasını sağlar.",
                              "measuredSkill": "PivotTable Katman Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec30_l4",
        phaseId: 30,
        unitId: "u30_4",
        title: "Bitirme Projesi 4. Aşama: Dinamik Grafikler ve Dilimleyiciler",
        shortDesc: "Birleşik grafikler, ikincil eksenler, sparklines ve tek merkezden bağlı dilimleyici kontrol paneli.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 4: Görselleştirme",
        primaryGoal: "Rapor Bağlantıları ile dilimleyicileri tüm grafiklerle senkronize etmek.",
        prerequisites: ["sec30_l3"],
        commonMistakes: ["Grafik eksenlerini formatlamadan ham sayılarla bırakmak"],
        successCriteria: "4. Aşama görselleştirmeyi başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bitirme Projesi", "Dinamik Grafikler"],
        initialWorkbook: createTableSheet("s30_4", "CapstoneAsama4", ["Grafik Türü", "Metrik", "Etkileşim"], [["Birleşik Grafik (Combo)", "Ciro (Sütun) + Kâr Marjı % (Çizgi)", "İkincil Eksen Bağlı"], ["Dilimleyici Paneli", "Yıl, Bölge, Kategori", "Tüm Rapor Senkronize"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 4. Aşama: Dinamik Grafikler ve Dilimleyiciler",
                    "description": "Rapor Bağlantıları ile dilimleyicileri tüm grafiklerle senkronize etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_4",
                    "title": "Göz Alıcı ve Fonksiyonel Görseller",
                    "explanation": "4. aşamada minimalist tasarım ilkelerine sadık kalarak birleşik grafiklerimizi çizdik, hedef çizgilerini ekledik ve tüm dilimleyicileri tek bir kontrol panelinde topladık.",
                    "speechText": "Filtre butonuna tıklandığında tüm grafikler birbiriyle uyum içinde canlı olarak yeniden çizilmektedir.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 4. aşama onay durumu olarak '4. Aşama: Görsel Panel Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'4. Aşama: Görsel Panel Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 4. Aşama: Dinamik Grafikler ve Dilimleyiciler görevini başarıyla tamamladınız.",
                              "expectedValue": "4. Aşama: Görsel Panel Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q30_4",
          "title": "Bitirme Projesi 4. Aşama: Dinamik Grafikler ve Dilimleyiciler Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_4_1",
                              "question": "Dinamik bir grafiğin yönetim seviyesinde kabul görmesi için hangi görsel disiplin esastır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Minimalist tasarım, gereksiz gürültüden arındırılmış eksenler ve net veri etiketleri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "3D animasyonlar"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "10 farklı parlak renk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kalın siyah kenarlıklar"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Görsel sadelik ve netlik karar vericinin odaklanmasını sağlar.",
                              "measuredSkill": "Profesyonel Grafik Disiplini"
                    }
          ]
}
      },
      {
        id: "sec30_l5",
        phaseId: 30,
        unitId: "u30_5",
        title: "Bitirme Projesi 5. Aşama: C-Level Yönetim Dashboard Tasarımı",
        shortDesc: "KPI özet kartları, 12 kolonluk grid yerleşimi, kurumsal renk teması ve tek sayfalık yönetici tuvali.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 5: Dashboard Montajı",
        primaryGoal: "Kılavuz çizgilerini kapatıp 5 saniye kuralına uygun C-Level dashboard inşa etmek.",
        prerequisites: ["sec30_l4"],
        commonMistakes: ["Sayfayı fazla uzatarak dikey kaydırma çubuğuna mahkum etmek"],
        successCriteria: "5. Aşama dashboard montajını başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 25,
        functionsUsed: ["Bitirme Projesi", "C-Level Dashboard"],
        initialWorkbook: createTableSheet("s30_5", "CapstoneAsama5", ["Dashboard Bileşeni", "Konum", "Durum"], [["3 Ana KPI Kartı", "Sol Üst Bölge", "Canlı Bağlantı"], ["Ana Trend Grafiği", "Orta Geniş Alan", "Dinamik Başlık"], ["Filtre Konsolu", "Sol Kenar Şeridi", "Kusursuz Hizalama"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 5. Aşama: C-Level Yönetim Dashboard Tasarımı",
                    "description": "Kılavuz çizgilerini kapatıp 5 saniye kuralına uygun C-Level dashboard inşa etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_5",
                    "title": "Yönetim Kurulu Sahnesi Hazır",
                    "explanation": "5. aşamada tüm parçaları tek bir kusursuz tuvalde birleştirdik. Sol üstte Ciro, Kâr ve Büyüme KPI kartları; ortada dinamik başlıklı ana grafik; sol tarafta şık dilimleyiciler.",
                    "speechText": "Görünümden kılavuz çizgilerini ve başlıkları kapattık; Excel artık safkan bir iş zekası uygulaması gibi parıldıyor.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_5_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 5. aşama onay durumu olarak '5. Aşama: C-Level Dashboard Tamamlandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'5. Aşama: C-Level Dashboard Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 5. Aşama: C-Level Yönetim Dashboard Tasarımı görevini başarıyla tamamladınız.",
                              "expectedValue": "5. Aşama: C-Level Dashboard Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q30_5",
          "title": "Bitirme Projesi 5. Aşama: C-Level Yönetim Dashboard Tasarımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_5_1",
                              "question": "C-Level bir yönetim dashboardunda '5 Saniye Kuralı' neyi ifade eder?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Yöneticinin ilk 5 saniyede şirketin genel sağlık durumunu ve ana KPI'ları kavrayabilmesini"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel'in 5 saniyede kapanmasını"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafiklerin 5 saniye sonra silinmesini"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazıcının bekleme süresini"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "5 saniye kuralı en kritik göstergelerin anında algılanmasını zorunlu kılan evrensel UX standardıdır.",
                              "measuredSkill": "Yönetici Dashboard Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec30_l6",
        phaseId: 30,
        unitId: "u30_6",
        title: "Bitirme Projesi 6. Aşama: Senaryo ve Duyarlılık Analizi",
        shortDesc: "Enflasyon, kur ve talep dalgalanmalarına göre dashboardun kriz ve büyüme stres testini tamamlama.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Aşama 6: Stres Testi",
        primaryGoal: "Senaryo Yöneticisi ve İki Değişkenli Veri Tablosu ile dashboardu interaktif karar desteğe açmak.",
        prerequisites: ["sec30_l5"],
        commonMistakes: ["Stres testi senaryolarını ana veriyi bozacak şekilde elle yazıp geri alamamak"],
        successCriteria: "6. Aşama senaryo analizini başarıyla tamamlayabilmek.",
        level: "Uzman",
        durationMinutes: 20,
        functionsUsed: ["Bitirme Projesi", "Stres Testi"],
        initialWorkbook: createTableSheet("s30_6", "CapstoneAsama6", ["Stres Testi Senaryosu", "Beklenen Kâr Etkisi", "Risk Düzeyi"], [["Kriz Senaryosu (Kur +%30, Talep -%15)", "₺ 180.000 Kâr (Pozitif Korundu)", "Dirençli"], ["Büyüme Senaryosu", "₺ 850.000 Kâr", "Yüksek Potansiyel"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi 6. Aşama: Senaryo ve Duyarlılık Analizi",
                    "description": "Senaryo Yöneticisi ve İki Değişkenli Veri Tablosu ile dashboardu interaktif karar desteğe açmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_6",
                    "title": "Geleceğe Hazır Karar Desteği",
                    "explanation": "6. aşamada dashboardumuza What-If senaryo motoru entegre ettik. Yönetici tek bir seçimle kriz durumunda şirketin nakit durumunu veya büyüme durumunda gereken hammadde ihtiyacını canlı simüle edebiliyor.",
                    "speechText": "Statik bir geçmiş raporu değil, geleceğe yön veren dinamik bir kurumsal karar destek sistemi ortaya çıktı.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t30_6_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine 6. aşama onay durumu olarak '6. Aşama: Duyarlılık ve Stres Testi Onaylandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'6. Aşama: Duyarlılık ve Stres Testi Onaylandı' yazın.",
                              "C4 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bitirme Projesi 6. Aşama: Senaryo ve Duyarlılık Analizi görevini başarıyla tamamladınız.",
                              "expectedValue": "6. Aşama: Duyarlılık ve Stres Testi Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q30_6",
          "title": "Bitirme Projesi 6. Aşama: Senaryo ve Duyarlılık Analizi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_6_1",
                              "question": "Bir yönetim dashboarduna Senaryo ve Duyarlılık Analizi eklemenin nihai değeri nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Raporu geçmişi gösteren statik bir tablodan, geleceği simüle eden bir karar destek sistemine dönüştürmesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca süs katması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Dosyayı ağırlaştırması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreleri kilitlemesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Duyarlılık analizi karar vericilere farklı olasılıklarda ne yapacaklarını önceden gösterir.",
                              "measuredSkill": "Stratejik Karar Destek Modellemesi"
                    }
          ]
}
      },
      {
        id: "sec30_l7",
        phaseId: 30,
        unitId: "u30_7",
        title: "Bitirme Projesi Final Değerlendirmesi ve Uzmanlık Sertifikasyonu",
        shortDesc: "Tüm 30 bölümün, 340 dersin ve bitirme projesinin bütünleşik değerlendirmesi ve mezuniyet.",
        category: "Kapsamlı Bitirme Projesi (Capstone)",
        groupTitle: "Final Mezuniyet",
        primaryGoal: "Tüm yetkinlik standartlarını tam başarıyla tamamlayıp Excel Büyük Ustası (Grandmaster) unvanını almak.",
        prerequisites: ["sec30_l6"],
        commonMistakes: ["Öğrenilen ileri teknikleri sürekli uygulamayarak zamanla unutmak"],
        successCriteria: "Excel Akademi AI Büyük Usta unvanını kazanabilmek.",
        level: "Uzman",
        durationMinutes: 25,
        functionsUsed: ["Mezuniyet", "Grandmaster"],
        initialWorkbook: createTableSheet("s30_7", "MezuniyetSayfasi", ["Yetkinlik Alanı", "Tamamlanan Kapsam", "Başarı Derecesi"], [["Temel ve İleri Formüller", "1-15. Bölümler (166 Ders)", "Kusursuz"], ["Veri Analitiği, Power Query & DAX", "16-25. Bölümler (124 Ders)", "Kusursuz"], ["Otomasyon, VBA & Büyük Projeler", "26-30. Bölümler (50 Ders)", "Kusursuz"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bitirme Projesi Final Değerlendirmesi ve Uzmanlık Sertifikasyonu",
                    "description": "Tüm yetkinlik standartlarını tam başarıyla tamamlayıp Excel Büyük Ustası (Grandmaster) unvanını almak."
          }
],
        teachingSteps: [
          {
                    "id": "ts30_7",
                    "title": "Tebrikler! Excel Akademi AI Büyük Ustasısınız!",
                    "explanation": "30 ana bölüm, 340 benzersiz interaktif ders, 1100'ün üzerinde formül ve sınav, Power Query ETL hatları, Power Pivot DAX modelleri, VBA makro otomasyonları ve kurumsal C-Level dashboard projesi...",
                    "speechText": "Siz artık yalnızca bir Excel kullanıcısı değilsiniz; modern iş dünyasının en üst seviye Veri Mimarı ve İş Zekası Uzmanısınız. Tebrik ederiz!",
                    "targetCell": "C5"
          }
],
        tasks: [
          {
                    "id": "t30_7_1",
                    "stepNumber": 1,
                    "instruction": "C5 hücresine nihai mezuniyet derecesi olarak 'BÜYÜK USTA (GRANDMASTER)' yazın.",
                    "targetCell": "C5",
                    "hints": [
                              "C5 hücresini seçin.",
                              "'BÜYÜK USTA (GRANDMASTER)' yazın.",
                              "C5 hücresine 'BÜYÜK USTA (GRANDMASTER)' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C5",
                              "successMessage": "Tebrikler! Bitirme Projesi Final Değerlendirmesi ve Uzmanlık Sertifikasyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "BÜYÜK USTA (GRANDMASTER)"
                    }
          }
],
        quiz: {
          "id": "q30_7",
          "title": "Bitirme Projesi Final Değerlendirmesi ve Uzmanlık Sertifikasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_30_7_1",
                              "question": "Excel Akademi AI eğitim programını tamamlayan bir uzmanın kazandığı temel kimlik nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Veri temizlemeden başlayıp formül, DAX, Power Query, VBA ve C-Level dashboarda kadar uçtan uca uzmanlık"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sıradan veri giriş elemanı"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca basit toplama yapan kullanıcı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca grafik çizen kişi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "30 bölüm ve 340 ders uçtan uca eksiksiz bir Veri Mimarlığı ve İş Zekası Uzmanlığı sağlar.",
                              "measuredSkill": "Excel Büyük Usta (Grandmaster) Yetkinliği"
                    }
          ]
}
      }
    ]
  }
];
