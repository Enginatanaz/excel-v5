import { CurriculumPhase } from '../../types/excel';
import { createTableSheet } from '../helpers';

export const SECTIONS_1_TO_5: CurriculumPhase[] = [
  {
    id: 1,
    category: "Giriş ve Çalışma Ortamı",
    title: "1. Tanıtım ve Eğitim Sisteminin Kullanımı",
    subtitle: "Excel Akademi AI Platformu, Akıllı Sesli Öğretmen ve Etkileşimli Çalışma Alanı",
    iconName: "Sparkles",
    description: "Eğitim sisteminin 3 sütunlu yapısını, akıllı formül motorunu, doğal sesli yapay zekâ öğretmenini, ipucu mekanizmasını ve kurumsal klavye gezinme standartlarını kavrayın.",
    lessons: [
      {
        id: "sec1_l1",
        phaseId: 1,
        unitId: "u1_1",
        title: "Platform Arayüzü ve Akıllı Öğretmen Tanıtımı",
        shortDesc: "Excel Akademi AI üç panelli öğrenme mimarisini ve sesli öğretmen etkileşimini öğrenin.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Platform Kullanımı",
        primaryGoal: "Üç panelli çalışma alanını, sesli öğretmeni ve görev panelini etkin biçimde kullanabilmek.",
        prerequisites: ["Temel bilgisayar ve fare kullanımı"],
        commonMistakes: ["Sol paneldeki ses kontrollerini fark etmemek", "Görev tamamlandıktan sonra kontrol butonuna basmayı unutmak"],
        successCriteria: "Platformun temel bileşenlerini tanıyabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Arayüz Gezinimi"],
        initialWorkbook: createTableSheet("s1_1", "OryantasyonSayfasi", ["Panel", "Görev", "Durum"], [["Sol Panel", "Sesli Öğretmen & Müfredat", "Aktif"], ["Orta Panel", "Gerçek Excel Çalışma Alanı", "Hazır"], ["Sağ Panel", "Görevler ve Testler", "Bekliyor"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Platform Arayüzü ve Akıllı Öğretmen Tanıtımı",
                    "description": "Üç panelli çalışma alanını, sesli öğretmeni ve görev panelini etkin biçimde kullanabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_1",
                    "title": "Hoş Geldiniz! Excel Akademi AI Başlıyor",
                    "explanation": "Excel Akademi AI, sizi pasif bir izleyici yapmaz. Sol tarafta doğal sesli öğretmeniniz dersi anlatırken, orta paneldeki gerçek Excel motorunda bizzat formülleri yazar, sağ panelden anında doğrulatırsınız.",
                    "speechText": "Sistemi başlatmak için C4 hücresine onay metnini yazacağız.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t1_1_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine eğitim onay durumu olarak 'Hazırım' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini fareyle seçin.",
                              "'Hazırım' yazın.",
                              "C4 hücresine 'Hazırım' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Platform Arayüzü ve Akıllı Öğretmen Tanıtımı görevini başarıyla tamamladınız.",
                              "expectedValue": "Hazırım"
                    }
          }
],
        quiz: {
          "id": "q1_1",
          "title": "Platform Arayüzü ve Akıllı Öğretmen Tanıtımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_1_1",
                              "question": "Excel Akademi AI platformunda öğrenme döngüsü hangi sırayla ilerler?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Dinle (Öğretmen) -> Uygula (Excel Çalışma Alanı) -> Doğrula & Test Et (Görev Paneli)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yalnızca test çözerek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sadece video izleyerek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel kullanmadan"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Platform interaktif dinleme, bizzat uygulama ve otomatik anlık doğrulama üzerine kuruludur.",
                              "measuredSkill": "Platform Oryantasyonu ve Akış Anlayışı"
                    }
          ]
}
      },
      {
        id: "sec1_l2",
        phaseId: 1,
        unitId: "u1_2",
        title: "Hücre Seçimi, Adres Çubuğu ve Formül Çubuğu",
        shortDesc: "Hücre koordinat mimarisi (sütun harfi + satır sayısı) ve formül çubuğu etkileşimi.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Hücre Mimarisi",
        primaryGoal: "Hücre koordinatlarını doğru okumak ve Ad Kutusu ile teyit etmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["Sütun harfi ile satır numarasının sırasını karıştırmak (2B yerine B2 olmalıdır)"],
        successCriteria: "Hücre adreslerini doğru tespit edebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hücre Adresi", "Ad Kutusu"],
        initialWorkbook: createTableSheet("s1_2", "HucreKoordinat", ["Sütun", "Satır", "Hücre Adresi"], [["A", 1, "A1"], ["B", 2, "B2"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre Seçimi, Adres Çubuğu ve Formül Çubuğu",
                    "description": "Hücre koordinatlarını doğru okumak ve Ad Kutusu ile teyit etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_2",
                    "title": "Hücrelerin Adresi",
                    "explanation": "Excel'de her kutucuk bir hücredir. Sol üstteki Ad Kutusu (Name Box) seçtiğiniz hücrenin koordinatını gösterir. Üstteki uzun Formül Çubuğu ise hücrenin içindeki gerçek formülü görüntüler.",
                    "speechText": "D2 hücresine hedef koordinat adını yazacağız.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t1_2_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu hücrenin adresi olarak 'D2' yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'D2' yazın.",
                              "D2 hücresine 'D2' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Hücre Seçimi, Adres Çubuğu ve Formül Çubuğu görevini başarıyla tamamladınız.",
                              "expectedValue": "D2"
                    }
          }
],
        quiz: {
          "id": "q1_2",
          "title": "Hücre Seçimi, Adres Çubuğu ve Formül Çubuğu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_2_1",
                              "question": "C sütunu ile 5. satırın kesiştiği hücrenin resmi adresi nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "C5"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "5C"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "C-5"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "5.C"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de hücre adresi daima önce sütun harfi, sonra satır numarası şeklinde yazılır.",
                              "measuredSkill": "Hücre Koordinat Sistemi"
                    }
          ]
}
      },
      {
        id: "sec1_l3",
        phaseId: 1,
        unitId: "u1_3",
        title: "Araç Çubuğu, Biçimlendirme Araçları ve Kısayollar",
        shortDesc: "Giriş sekmesindeki temel biçimlendirme araçları: Kalın (Ctrl+K/B), İtalik ve Hizalama.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Biçimlendirme",
        primaryGoal: "Metinleri vurgulamak için kısayolları ve biçim araçlarını kullanabilmek.",
        prerequisites: ["sec1_l2"],
        commonMistakes: ["Her işlem için fareye bağımlı kalıp klavye kısayollarını ihmal etmek"],
        successCriteria: "Temel kısayolları ve biçimlendirme araçlarını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Kalın", "Ctrl+B"],
        initialWorkbook: createTableSheet("s1_3", "BicimSayfasi", ["Komut", "Klavye Kısayolu", "Görev"], [["Kalın (Bold)", "Ctrl+B", "Metni vurgular"], ["İtalik", "Ctrl+I", "Metni eğer"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Araç Çubuğu, Biçimlendirme Araçları ve Kısayollar",
                    "description": "Metinleri vurgulamak için kısayolları ve biçim araçlarını kullanabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_3",
                    "title": "Biçimlendirme Hızı",
                    "explanation": "Verilerinizi görsel olarak ayrıştırmak için Kalın, Eğik, Altı Çizili ve Hizalama düğmelerini kullanırız. Kalın metin için Türkçe klavyede Ctrl+K veya evrensel Ctrl+B kullanılır.",
                    "speechText": "Verilerinizi görsel olarak ayrıştırmak için Kalın, Eğik, Altı Çizili ve Hizalama düğmelerini kullanırız. Kalın metin için Türkçe klavyede Ctrl+K veya evrensel Ctrl+B kullanılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t1_3_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine kalın yapma kısayolunu 'Ctrl+B' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Ctrl+B' yazın.",
                              "C4 hücresine 'Ctrl+B' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Araç Çubuğu, Biçimlendirme Araçları ve Kısayollar görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+B"
                    }
          }
],
        quiz: {
          "id": "q1_3",
          "title": "Araç Çubuğu, Biçimlendirme Araçları ve Kısayollar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_3_1",
                              "question": "Seçili bir metni anında Kalın (Bold) yapmak için hangi kısayol kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + B"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + U"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + I"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt + F4"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+B seçili hücredeki metni kalın yazı tipine dönüştürür.",
                              "measuredSkill": "Biçimlendirme ve Klavye Hızı"
                    }
          ]
}
      },
      {
        id: "sec1_l4",
        phaseId: 1,
        unitId: "u1_4",
        title: "Sesli Öğretmen ile Canlı Soru ve Hata Giderme",
        shortDesc: "Sesli öğretmenin duraklatma, devam ettirme ve hata anında ipucu verme özelliklerini tanıma.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Sesli Öğretmen",
        primaryGoal: "Sesli asistan ile etkileşim kurarak öğrenme temposunu ayarlayabilmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["Sesli öğretmeni tamamen sessize alıp ipuçlarını kaçırmak"],
        successCriteria: "Sesli öğretmenin öğrenme desteğini etkin kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sesli Öğretmen"],
        initialWorkbook: createTableSheet("s1_4", "OgretmenSayfasi", ["Özellik", "İşlev"], [["Sesli Anlatım", "Her adımı Türkçe seslendirir"], ["Canlı Analiz", "Formül hatalarında yol gösterir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sesli Öğretmen ile Canlı Soru ve Hata Giderme",
                    "description": "Sesli asistan ile etkileşim kurarak öğrenme temposunu ayarlayabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_4",
                    "title": "Doğal Türkçe Sesli Rehber",
                    "explanation": "Öğretmeniniz yalnızca metin okumaz; formülde parantezi unuttuğunuzda veya yanlış hücreyi seçtiğinizde sizi uyarır ve doğru yolu gösterir.",
                    "speechText": "Öğretmeniniz yalnızca metin okumaz; formülde parantezi unuttuğunuzda veya yanlış hücreyi seçtiğinizde sizi uyarır ve doğru yolu gösterir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t1_4_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine sesli öğretmenin durumunu 'Sesli Öğretmen Aktif' olarak yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Sesli Öğretmen Aktif' yazın.",
                              "B4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Sesli Öğretmen ile Canlı Soru ve Hata Giderme görevini başarıyla tamamladınız.",
                              "expectedValue": "Sesli Öğretmen Aktif"
                    }
          }
],
        quiz: {
          "id": "q1_4",
          "title": "Sesli Öğretmen ile Canlı Soru ve Hata Giderme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_4_1",
                              "question": "Excel Akademi AI sesli öğretmeninin en önemli pedagojik katkısı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ders adımlarını doğal sesle yönlendirmesi ve hata yapıldığında anında yol göstermesi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Müzik çalması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ekranı karartması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Excel'i kapatması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sesli öğretmen adım adım rehberlik ve anlık hata teşhisi sağlar.",
                              "measuredSkill": "Etkileşimli Sesli Öğrenme Yetkinliği"
                    }
          ]
}
      },
      {
        id: "sec1_l5",
        phaseId: 1,
        unitId: "u1_5",
        title: "Klavye Odaklı Çalışma ve Gezinme Kısayolları",
        shortDesc: "Ctrl + Yön Okları, Home, Ctrl + Home ve Ctrl + End ile binlerce satırda anında gezinme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Klavye Gezinimi",
        primaryGoal: "Fareyle kaydırmak yerine klavyeyle tablonun en ucuna 1 salisede gidebilmek.",
        prerequisites: ["sec1_l2"],
        commonMistakes: ["100.000 satırlık tabloda en sona inmek için fare tekerleğini dakikalarca çevirmek"],
        successCriteria: "Ctrl+Ok gezinme refleksini kazanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Ctrl+Ok", "Gezinme"],
        initialWorkbook: createTableSheet("s1_5", "GezinmeSayfasi", ["Tuş", "İşlev"], [["Ctrl + Aşağı Ok", "Veri bloğunun en alt hücresine zıplar"], ["Ctrl + Home", "Sayfanın en başına (A1) döner"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Klavye Odaklı Çalışma ve Gezinme Kısayolları",
                    "description": "Fareyle kaydırmak yerine klavyeyle tablonun en ucuna 1 salisede gidebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_5",
                    "title": "Işık Hızında Gezinme",
                    "explanation": "Ctrl + Aşağı Ok tuşuna bastığınızda aradaki 50.000 satırı atlayıp tablonun son satırına konarsınız. Ctrl + Home ise nerede olursanız olun sizi A1 hücresine geri götürür.",
                    "speechText": "Ctrl + Aşağı Ok tuşuna bastığınızda aradaki 50.000 satırı atlayıp tablonun son satırına konarsınız. Ctrl + Home ise nerede olursanız olun sizi A1 hücresine geri götürür. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t1_5_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine A1 hücresine dönen kısayolu 'Ctrl+Home' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Ctrl+Home' yazın.",
                              "C2 hücresine 'Ctrl+Home' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Klavye Odaklı Çalışma ve Gezinme Kısayolları görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+Home"
                    }
          }
],
        quiz: {
          "id": "q1_5",
          "title": "Klavye Odaklı Çalışma ve Gezinme Kısayolları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_5_1",
                              "question": "Çalışma sayfasının neresinde olursanız olun doğrudan A1 hücresine dönmek için hangi tuşa basılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + Home"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + End"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + Enter"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt + Tab"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+Home daima çalışma sayfasının mutlak başlangıcı olan A1 hücresine götürür.",
                              "measuredSkill": "Hızlı Klavye Navigasyonu"
                    }
          ]
}
      },
      {
        id: "sec1_l6",
        phaseId: 1,
        unitId: "u1_6",
        title: "Geri Al (Ctrl+Z) ve Yinele (Ctrl+Y) Mantığı",
        shortDesc: "Yapılan hatalı bir işlemi geri alma (Undo) ve geri alınan işlemi tekrar etme (Redo) mekanizması.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Hata Kurtarma",
        primaryGoal: "Yanlışlıkla silinen veya bozulan hücreleri saniyeler içinde eski haline getirebilmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["Hata yapınca panikleyip dosyayı kaydetmeden kapatmak"],
        successCriteria: "Geri Al ve Yinele kısayollarını refleks haline getirebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Geri Al", "Ctrl+Z"],
        initialWorkbook: createTableSheet("s1_6", "GeriAlSayfasi", ["İşlem", "Kısayol"], [["Geri Al (Undo)", "Ctrl+Z"], ["Yinele (Redo)", "Ctrl+Y"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Geri Al (Ctrl+Z) ve Yinele (Ctrl+Y) Mantığı",
                    "description": "Yanlışlıkla silinen veya bozulan hücreleri saniyeler içinde eski haline getirebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_6",
                    "title": "Hatalardan Korkmayın",
                    "explanation": "Excel'de yanlışlıkla bir sütunu silseniz bile panik yapmanıza gerek yoktur. Ctrl+Z tuşuna bastığınızda yapılan son işlem geri alınır.",
                    "speechText": "Excel'de yanlışlıkla bir sütunu silseniz bile panik yapmanıza gerek yoktur. Ctrl+Z tuşuna bastığınızda yapılan son işlem geri alınır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t1_6_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine Geri Al kısayolunu 'Ctrl+Z' olarak yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'Ctrl+Z' yazın.",
                              "B4 hücresine 'Ctrl+Z' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Geri Al (Ctrl+Z) ve Yinele (Ctrl+Y) Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+Z"
                    }
          }
],
        quiz: {
          "id": "q1_6",
          "title": "Geri Al (Ctrl+Z) ve Yinele (Ctrl+Y) Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_6_1",
                              "question": "Son yapılan işlemi anında geri almak (Undo) için kullanılan evrensel kısayol nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + Z"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + Y"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + X"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + C"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+Z son yapılan işlem adımlarını geriye doğru geri alır.",
                              "measuredSkill": "Hata Düzeltme ve Kurtarma Refleksi"
                    }
          ]
}
      },
      {
        id: "sec1_l7",
        phaseId: 1,
        unitId: "u1_7",
        title: "Hızlı Erişim Araç Çubuğunu Özelleştirme",
        shortDesc: "En sık kullanılan komutları (Kaydet, Geri Al, Yazdır) şeridin en üstüne sabitleme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Arayüz Kişiselleştirme",
        primaryGoal: "Sık kullanılan araçlara tek tıkla ulaşmak için Hızlı Erişim Araç Çubuğunu (QAT) düzenleyebilmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["Sürekli kullanılan bir komut için her seferinde sekmeler arasında geçiş yapmak"],
        successCriteria: "Hızlı erişim çubuğunun işlevini kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hızlı Erişim"],
        initialWorkbook: createTableSheet("s1_7", "HizliErisimSayfasi", ["Bileşen", "Konum"], [["Hızlı Erişim Araç Çubuğu", "Pencerenin en üst sol köşesi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hızlı Erişim Araç Çubuğunu Özelleştirme",
                    "description": "Sık kullanılan araçlara tek tıkla ulaşmak için Hızlı Erişim Araç Çubuğunu (QAT) düzenleyebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_7",
                    "title": "Kişisel Hız Çubuğu",
                    "explanation": "Hızlı Erişim Araç Çubuğu (Quick Access Toolbar), şerit sekmelerinden bağımsız olarak daima ekranın tepesinde görünür ve Alt+1, Alt+2 kısayollarıyla tetiklenebilir.",
                    "speechText": "Hızlı Erişim Araç Çubuğu (Quick Access Toolbar), şerit sekmelerinden bağımsız olarak daima ekranın tepesinde görünür ve Alt+1, Alt+2 kısayollarıyla tetiklenebilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t1_7_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine çubuğun kısaltmasını 'QAT' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'QAT' yazın.",
                              "C2 hücresine 'QAT' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Hızlı Erişim Araç Çubuğunu Özelleştirme görevini başarıyla tamamladınız.",
                              "expectedValue": "QAT"
                    }
          }
],
        quiz: {
          "id": "q1_7",
          "title": "Hızlı Erişim Araç Çubuğunu Özelleştirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_7_1",
                              "question": "Hızlı Erişim Araç Çubuğuna eklenen ilk komut hangi klavye kısayoluyla çalıştırılabilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alt + 1"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + 1"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + 1"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "F1"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Alt tuşuna basıldığında Hızlı Erişim Çubuğundaki araçlar 1, 2, 3.. rakamlarıyla eşleşir.",
                              "measuredSkill": "Arayüz Özelleştirme ve Ergonomi"
                    }
          ]
}
      },
      {
        id: "sec1_l8",
        phaseId: 1,
        unitId: "u1_8",
        title: "Dosya Kaydetme Seçenekleri (.xlsx, .pdf ve Otomatik Kurtarma)",
        shortDesc: "Excel çalışma kitabını standart .xlsx olarak kaydetme ve PDF formatında dışa aktarma.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Dosya Yönetimi",
        primaryGoal: "Dosyaları doğru format ve isimle güvenli biçimde saklayabilmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["Farklı Kaydet (Save As) yerine sadece Kaydet'e basıp şablonun üzerine yazmak"],
        successCriteria: "Excel dosya formatlarını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dosya Kaydetme", ".xlsx"],
        initialWorkbook: createTableSheet("s1_8", "KaydetSayfasi", ["Format", "Açıklama"], [[".xlsx", "Modern standart Excel çalışma kitabı"], [".pdf", "Değiştirilemez yazdırma formatı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dosya Kaydetme Seçenekleri (.xlsx, .pdf ve Otomatik Kurtarma)",
                    "description": "Dosyaları doğru format ve isimle güvenli biçimde saklayabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_8",
                    "title": "Güvenli Kayıt",
                    "explanation": "Modern Excel dosyaları .xlsx uzantısıyla saklanır. F12 tuşu doğrudan 'Farklı Kaydet' penceresini açar; Ctrl+S ise mevcut dosyanın üzerine kaydeder.",
                    "speechText": "Modern Excel dosyaları .xlsx uzantısıyla saklanır. F12 tuşu doğrudan 'Farklı Kaydet' penceresini açar; Ctrl+S ise mevcut dosyanın üzerine kaydeder. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B4"
          }
],
        tasks: [
          {
                    "id": "t1_8_1",
                    "stepNumber": 1,
                    "instruction": "B4 hücresine standart Excel uzantısını '.xlsx' olarak yazın.",
                    "targetCell": "B4",
                    "hints": [
                              "B4 hücresini seçin.",
                              "'.xlsx' yazın.",
                              "B4 hücresine '.xlsx' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B4",
                              "successMessage": "Tebrikler! Dosya Kaydetme Seçenekleri (.xlsx, .pdf ve Otomatik Kurtarma) görevini başarıyla tamamladınız.",
                              "expectedValue": ".xlsx"
                    }
          }
],
        quiz: {
          "id": "q1_8",
          "title": "Dosya Kaydetme Seçenekleri (.xlsx, .pdf ve Otomatik Kurtarma) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_8_1",
                              "question": "Modern Excel çalışma kitaplarının varsayılan dosya uzantısı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": ".xlsx"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": ".doc"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": ".txt"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": ".xlsb"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": ".xlsx açık XML tabanlı standart Excel çalışma kitabı formatıdır.",
                              "measuredSkill": "Dosya Standartları ve Güvenli Kayıt"
                    }
          ]
}
      },
      {
        id: "sec1_l9",
        phaseId: 1,
        unitId: "u1_9",
        title: "Excel Sürümleri ve Bulut (Microsoft 365 vs Standart) Farkları",
        shortDesc: "Microsoft 365 dinamik dizi fonksiyonları (ÇAPRAZARA, FİLTRE) ile eski Excel sürümleri (2016/2019) arasındaki farklar.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Sürüm Farkındalığı",
        primaryGoal: "Hangi fonksiyonların kendi Excel sürümünde çalışıp çalışmayacağını önceden bilmek.",
        prerequisites: ["sec1_l8"],
        commonMistakes: ["Eski Excel 2013 sürümünde ÇAPRAZARA yazıp #AD? hatası alınca şaşırmak"],
        successCriteria: "Sürüm yeteneklerini doğru ayırt edebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sürüm Analizi"],
        initialWorkbook: createTableSheet("s1_9", "SurumSayfasi", ["Özellik", "Microsoft 365", "Excel 2016"], [["Dinamik Diziler", "Var (Otomatik dökülme)", "Yok (Ctrl+Shift+Enter)"], ["ÇAPRAZARA", "Var", "Yok"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Excel Sürümleri ve Bulut (Microsoft 365 vs Standart) Farkları",
                    "description": "Hangi fonksiyonların kendi Excel sürümünde çalışıp çalışmayacağını önceden bilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_9",
                    "title": "Modern Excel Çağı",
                    "explanation": "Microsoft 365 ile Excel kökten değişmiştir; formüller artık tek bir hücreye sığmak yerine birden fazla hücreye dökülebilir (Spill).",
                    "speechText": "Microsoft 365 ile Excel kökten değişmiştir; formüller artık tek bir hücreye sığmak yerine birden fazla hücreye dökülebilir (Spill). Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t1_9_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine modern Excel sürüm adını 'Microsoft 365' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Microsoft 365' yazın.",
                              "D2 hücresine 'Microsoft 365' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Excel Sürümleri ve Bulut (Microsoft 365 vs Standart) Farkları görevini başarıyla tamamladınız.",
                              "expectedValue": "Microsoft 365"
                    }
          }
],
        quiz: {
          "id": "q1_9",
          "title": "Excel Sürümleri ve Bulut (Microsoft 365 vs Standart) Farkları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_9_1",
                              "question": "ÇAPRAZARA (XLOOKUP) ve FİLTRE (FILTER) gibi modern fonksiyonlar hangi platformda yerel olarak desteklenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Microsoft 365 ve Excel 2021 ve üzeri sürümlerde"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel 2003'te"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Not Defterinde"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yalnızca mobilde"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yeni nesil formül motoru Microsoft 365 ve güncel sürümlerde mevcuttur.",
                              "measuredSkill": "Yazılım Ekosistemi ve Sürüm Uyumluluğu"
                    }
          ]
}
      },
      {
        id: "sec1_l10",
        phaseId: 1,
        unitId: "u1_10",
        title: "İpucu ve Görev Doğrulama Sistemi ile Pratik Yapma",
        shortDesc: "Sağ paneldeki 3 aşamalı akıllı ipucu kademesini ve otomatik formül doğrulama mekanizmasını kullanma.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Öğrenme Metodolojisi",
        primaryGoal: "Takıldığınızda ipuçlarından destek alarak görevi bağımsız çözebilmek.",
        prerequisites: ["sec1_l1"],
        commonMistakes: ["İpuçlarını okumadan doğrudan cevabı tahmin etmeye çalışmak"],
        successCriteria: "3 kademeli ipucu mekanizmasından maksimum verim alabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["İpucu Sistemi"],
        initialWorkbook: createTableSheet("s1_10", "IpucuSayfasi", ["İpucu Seviyesi", "İçerik"], [["1. İpucu", "Genel yaklaşım ve yönlendirme"], ["2. İpucu", "Kullanılacak fonksiyon ve mantık"], ["3. İpucu", "Birebir hücre koordinatı ve tam çözüm"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "İpucu ve Görev Doğrulama Sistemi ile Pratik Yapma",
                    "description": "Takıldığınızda ipuçlarından destek alarak görevi bağımsız çözebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_10",
                    "title": "Destekli Öğrenme",
                    "explanation": "Excel Akademi AI'da her görevin 3 seviyeli ipucu bulunur. 1. ipucu düşünmenizi sağlar, 2. ipucu formülü fısıldar, 3. ipucu ise tam çözümü verir.",
                    "speechText": "Excel Akademi AI'da her görevin 3 seviyeli ipucu bulunur. 1. ipucu düşünmenizi sağlar, 2. ipucu formülü fısıldar, 3. ipucu ise tam çözümü verir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t1_10_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine ipucu sayısını 3 olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "3 sayısını yazın.",
                              "C4 hücresine 3 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! İpucu ve Görev Doğrulama Sistemi ile Pratik Yapma görevini başarıyla tamamladınız.",
                              "expectedValue": 3
                    }
          }
],
        quiz: {
          "id": "q1_10",
          "title": "İpucu ve Görev Doğrulama Sistemi ile Pratik Yapma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_10_1",
                              "question": "Excel Akademi AI görevlerinde takıldığınızda ne yapmalısınız?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağ paneldeki 'İpucu Göster' butonuna basarak kademeli rehberlik almak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dersi bırakmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı yenilemek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hepsini silmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "İpucu sistemi bağımsız öğrenmeyi destekleyen 3 kademeli rehberlik sunar.",
                              "measuredSkill": "Öğrenme Metodolojisi ve İpucu Kullanımı"
                    }
          ]
}
      },
      {
        id: "sec1_l11",
        phaseId: 1,
        unitId: "u1_11",
        title: "Bölüm 1 Oryantasyon ve Yetkinlik Sınavı",
        shortDesc: "1. Bölümde öğrenilen arayüz, hücre mimarisi, kısayollar ve platform araçlarının toplu sınavı.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "1. Bölümün tüm kazanımlarını başarıyla sergileyebilmek.",
        prerequisites: ["sec1_l1", "sec1_l2", "sec1_l5", "sec1_l8"],
        commonMistakes: ["Soruları dikkatli okumadan aceleyle yanıtlamak"],
        successCriteria: "Bölüm 1 kazanım testini tam puanla tamamlamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s1_11", "Bolum1Final", ["Konu", "Öğrenilen Kapsam", "Durum"], [["Platform", "3 panelli öğrenme mimarisi", "Tamamlandı"], ["Kısayollar", "Ctrl+Z, Ctrl+Home, Ctrl+B", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 1 Oryantasyon ve Yetkinlik Sınavı",
                    "description": "1. Bölümün tüm kazanımlarını başarıyla sergileyebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts1_11",
                    "title": "Bölüm 1 Mezuniyeti",
                    "explanation": "Tebrikler! Excel Akademi AI'nin ilk bölümünü başarıyla tamamladınız. Artık çalışma ortamını, hücre mantığını ve kısayolları biliyorsunuz. Şimdi Excel'in derinliklerine adım atmaya hazırsınız.",
                    "speechText": "Tebrikler! Excel Akademi AI'nin ilk bölümünü başarıyla tamamladınız. Artık çalışma ortamını, hücre mantığını ve kısayolları biliyorsunuz. Şimdi Excel'in derinliklerine adım atmaya hazırsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t1_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet durumu olarak 'Bölüm 1 Tamamlandı' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 1 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 1 Oryantasyon ve Yetkinlik Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 1 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q1_11",
          "title": "Bölüm 1 Oryantasyon ve Yetkinlik Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_1_11_1",
                              "question": "Excel'de formül yazarken ilk girilmesi gereken zorunlu karakter nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "= (Eşittir)"
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
                                                  "text": "? (Soru işareti)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'de bir hücreye formül veya hesaplama girmek için mutlaka '=' ile başlanır.",
                              "measuredSkill": "Bölüm 1 Genel Yetkinlik ve Temel Kavramlar"
                    }
          ]
}
      }
    ]
  },
  {
    id: 2,
    category: "Giriş ve Çalışma Ortamı",
    title: "2. Excel'e Giriş ve Çalışma Ortamı",
    subtitle: "Şerit Menü Mimarisi, Ad Kutusu, Sayfa Yönetimi ve Çoklu Görünüm",
    iconName: "Layout",
    description: "Şerit menü sekmeleri (Giriş, Ekle, Veri, Görünüm), Ad Kutusu ile hücre aralığı adlandırma, çalışma sayfaları ekleme/taşıma/gizleme, çoklu sayfa düzenleme ve durum çubuğu özelleştirmeleri.",
    lessons: [
      {
        id: "sec2_l1",
        phaseId: 2,
        unitId: "u2_1",
        title: "Şerit Menü Mimarisi ve Sekmelerin Görevleri",
        shortDesc: "Giriş, Ekle, Sayfa Düzeni, Formüller, Veri ve Görünüm sekmelerinin kurumsal rolleri.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Şerit Mimarisi",
        primaryGoal: "Aranan aracın hangi sekmede yer aldığını düşünmeden doğrudan bulabilmek.",
        prerequisites: ["sec1_l11"],
        commonMistakes: ["Veri filtreleme aracını Ekle sekmesinde aramak"],
        successCriteria: "Şerit sekmelerinin işlev haritasını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Şerit Menü"],
        initialWorkbook: createTableSheet("s2_1", "SeritSayfasi", ["Sekme Adı", "Temel Görevi"], [["Giriş (Home)", "Biçimlendirme, Pano, Hücre stilleri"], ["Veri (Data)", "Filtreleme, Sıralama, Power Query, Doğrulama"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Şerit Menü Mimarisi ve Sekmelerin Görevleri",
                    "description": "Aranan aracın hangi sekmede yer aldığını düşünmeden doğrudan bulabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_1",
                    "title": "Şerit Mimarisi",
                    "explanation": "Excel şeridi görev odaklı sekmelerden oluşur. Hesaplamalar 'Formüller'de, grafikler 'Ekle'de, filtre ve sorgular ise 'Veri' sekmesinde yer alır.",
                    "speechText": "Excel şeridi görev odaklı sekmelerden oluşur. Hesaplamalar 'Formüller'de, grafikler 'Ekle'de, filtre ve sorgular ise 'Veri' sekmesinde yer alır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine filtreleme araçlarının bulunduğu sekmeyi 'Veri' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Veri' yazın.",
                              "C2 hücresine 'Veri' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Şerit Menü Mimarisi ve Sekmelerin Görevleri görevini başarıyla tamamladınız.",
                              "expectedValue": "Veri"
                    }
          }
],
        quiz: {
          "id": "q2_1",
          "title": "Şerit Menü Mimarisi ve Sekmelerin Görevleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_1_1",
                              "question": "Excel'de grafik ve pivot tablo eklemek için hangi şerit sekmesine gidilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ekle (Insert)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Veri"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Gözden Geçir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Görünüm"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Tüm görsel nesneler, tablolar ve grafikler Ekle sekmesinden oluşturulur.",
                              "measuredSkill": "Şerit Menü Navigasyon Haritası"
                    }
          ]
}
      },
      {
        id: "sec2_l2",
        phaseId: 2,
        unitId: "u2_2",
        title: "Ad Kutusu ile Hızlı Gezinme ve Aralık Adlandırma",
        shortDesc: "Ad Kutusu'na (Name Box) hücre adresi yazarak doğrudan gitme ve hücre aralıklarına isim verme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Ad Kutusu",
        primaryGoal: "Uzak bir hücreye (Örn: Z500) anında gitmek ve alanları adlandırmak.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Ad kutusunda aralık adı verirken boşluk kullanmak"],
        successCriteria: "Ad Kutusunu navigasyon ve alan tanımlama için kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Ad Kutusu"],
        initialWorkbook: createTableSheet("s2_2", "AdKutusuSayfasi", ["Hedef Adres", "Gezinme Yöntemi"], [["Z100", "Ad Kutusuna 'Z100' yazıp Enter'a basmak"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Ad Kutusu ile Hızlı Gezinme ve Aralık Adlandırma",
                    "description": "Uzak bir hücreye (Örn: Z500) anında gitmek ve alanları adlandırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_2",
                    "title": "Ad Kutusunun Gücü",
                    "explanation": "Sol üstteki Ad Kutusu yalnızca nerede olduğunuzu göstermez; içine 'KDV_Orani' veya 'B2:B50' yazdığınızda o alanı adlandırır veya anında o aralığı seçer.",
                    "speechText": "Sol üstteki Ad Kutusu yalnızca nerede olduğunuzu göstermez; içine 'KDV_Orani' veya 'B2:B50' yazdığınızda o alanı adlandırır veya anında o aralığı seçer. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_2_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine örnek hücre adresi olarak 'A100' yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'A100' yazın.",
                              "C2 hücresine 'A100' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Ad Kutusu ile Hızlı Gezinme ve Aralık Adlandırma görevini başarıyla tamamladınız.",
                              "expectedValue": "A100"
                    }
          }
],
        quiz: {
          "id": "q2_2",
          "title": "Ad Kutusu ile Hızlı Gezinme ve Aralık Adlandırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_2_1",
                              "question": "Ad Kutusuna 'B100' yazıp Enter'a basıldığında ne olur?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İmleç anında B100 hücresine gider ve o hücreyi seçer"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "B100 hücresi silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel hata verir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yeni dosya açılır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ad Kutusu hızlı atlama koordinatörü olarak çalışır.",
                              "measuredSkill": "Ad Kutusu ve Hızlı Konumlanma"
                    }
          ]
}
      },
      {
        id: "sec2_l3",
        phaseId: 2,
        unitId: "u2_3",
        title: "Çalışma Sayfaları Ekleme, Yeniden Adlandırma ve Sekme Renkleri",
        shortDesc: "Çalışma kitabına yeni sayfalar ekleme (+ butonu), çift tıklayarak adlandırma ve sekme rengi atama.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Sayfa Yönetimi",
        primaryGoal: "Departman veya ay bazlı çalışma sayfalarını profesyonelce renklendirip organize etmek.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Sayfa adlarında geçersiz karakterler (/ \\ ? * [ ]) kullanmaya çalışmak"],
        successCriteria: "Çalışma sayfası oluşturma ve görsel yönetim standartlarını uygulamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sayfa Yönetimi"],
        initialWorkbook: createTableSheet("s2_3", "SayfaYonetimi", ["Sayfa Adı", "Önerilen Renk", "Departman"], [["Finans_2024", "Mavi", "Finans"], ["Satis_2024", "Yeşil", "Satış"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Çalışma Sayfaları Ekleme, Yeniden Adlandırma ve Sekme Renkleri",
                    "description": "Departman veya ay bazlı çalışma sayfalarını profesyonelce renklendirip organize etmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_3",
                    "title": "Sayfa Mimarisi",
                    "explanation": "Alttaki '+' butonuna basarak veya Shift+F11 kısayoluyla yeni sayfa eklenir. Sekme üzerine sağ tıklayıp 'Sekme Rengi' seçilerek departmanlar renklendirilir.",
                    "speechText": "Alttaki '+' butonuna basarak veya Shift+F11 kısayoluyla yeni sayfa eklenir. Sekme üzerine sağ tıklayıp 'Sekme Rengi' seçilerek departmanlar renklendirilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t2_3_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine yeni sayfa ekleme kısayolunu 'Shift+F11' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Shift+F11' yazın.",
                              "C4 hücresine 'Shift+F11' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Çalışma Sayfaları Ekleme, Yeniden Adlandırma ve Sekme Renkleri görevini başarıyla tamamladınız.",
                              "expectedValue": "Shift+F11"
                    }
          }
],
        quiz: {
          "id": "q2_3",
          "title": "Çalışma Sayfaları Ekleme, Yeniden Adlandırma ve Sekme Renkleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_3_1",
                              "question": "Excel çalışma sayfalarında sayfa adında hangisi KULLANILAMAZ?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Soru işareti (?) ve bölü işareti (/)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Türkçe harfler (ç, ş, ğ)"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayılar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt çizgi (_)"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel sayfa adlarında / \\ ? * : [ ] gibi özel karakterlere izin vermez.",
                              "measuredSkill": "Çalışma Sayfası Adlandırma Hijyeni"
                    }
          ]
}
      },
      {
        id: "sec2_l4",
        phaseId: 2,
        unitId: "u2_4",
        title: "Sayfaları Taşıma, Kopyalama ve Gizleme/Gösterme",
        shortDesc: "Ctrl tuşuna basılı tutarak sayfayı sürükleyip birebir kopyalama ve gizli sayfaları yönetme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Sayfa Operasyonları",
        primaryGoal: "Şablon sayfaları hızlıca çoğaltmak ve hassas hesaplama sayfalarını gizlemek.",
        prerequisites: ["sec2_l3"],
        commonMistakes: ["Sayfayı taşırken kopyaladığını sanıp orijinal sayfayı kaybetmek"],
        successCriteria: "Sayfa taşıma, kopyalama ve gizleme işlemlerini hatasız yapabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sayfa Kopyalama"],
        initialWorkbook: createTableSheet("s2_4", "SayfaKopyaSayfasi", ["İşlem", "Yöntem"], [["Sayfa Kopyalama", "Ctrl + Fareyle sürükle bırak"], ["Sayfa Gizleme", "Sağ tık > Gizle"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayfaları Taşıma, Kopyalama ve Gizleme/Gösterme",
                    "description": "Şablon sayfaları hızlıca çoğaltmak ve hassas hesaplama sayfalarını gizlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_4",
                    "title": "Tek Hamlede Sayfa Çoğaltma",
                    "explanation": "Bir sayfa sekmesini fareyle tutarken Ctrl tuşuna basılı tutarsanız imlecin yanında küçük bir '+' işareti belirir. Bıraktığınızda sayfanın kusursuz bir kopyası oluşur.",
                    "speechText": "Bir sayfa sekmesini fareyle tutarken Ctrl tuşuna basılı tutarsanız imlecin yanında küçük bir '+' işareti belirir. Bıraktığınızda sayfanın kusursuz bir kopyası oluşur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_4_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine sayfa kopyalama tuşunu 'Ctrl' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Ctrl' yazın.",
                              "C2 hücresine 'Ctrl' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Sayfaları Taşıma, Kopyalama ve Gizleme/Gösterme görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl"
                    }
          }
],
        quiz: {
          "id": "q2_4",
          "title": "Sayfaları Taşıma, Kopyalama ve Gizleme/Gösterme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_4_1",
                              "question": "Excel'de bir sayfa sekmesini gizlemek için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayfa sekmesine sağ tıklanıp 'Gizle' (Hide) seçilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayfa silinir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Bilgisayar kapatılır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Metinler beyaza boyanır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sağ tık menüsünden 'Gizle' seçeneği sayfayı görünmez yapar ancak formüller çalışmaya devam eder.",
                              "measuredSkill": "Sayfa Yaşam Döngüsü ve Güvenlik"
                    }
          ]
}
      },
      {
        id: "sec2_l5",
        phaseId: 2,
        unitId: "u2_5",
        title: "Çoklu Sayfa Seçimi ve 3 Boyutlu Eşzamanlı Düzenleme",
        shortDesc: "Ctrl veya Shift ile birden fazla sayfa sekmesini aynı anda seçip tek bir hamlede hepsine başlık ekleme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "3D Düzenleme",
        primaryGoal: "12 aylık sayfanın tamamına aynı şirket logosunu ve başlıklarını tek seferde yazmak.",
        prerequisites: ["sec2_l4"],
        commonMistakes: ["Sayfaların 'Grup' halinde seçili kaldığını unutup bir sayfada yapılan değişikliğin tüm sayfaları bozmasına yol açmak"],
        successCriteria: "Çoklu sayfa grubu oluşturmayı ve iş bittiğinde grubu çözmeyi kavramak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["3D Düzenleme", "Sayfa Grubu"],
        initialWorkbook: createTableSheet("s2_5", "GrupSayfaYonetimi", ["Durum", "Başlıkta Görünen İfade"], [["Grup Modu", "[Grup] veya [Group]"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Çoklu Sayfa Seçimi ve 3 Boyutlu Eşzamanlı Düzenleme",
                    "description": "12 aylık sayfanın tamamına aynı şirket logosunu ve başlıklarını tek seferde yazmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_5",
                    "title": "Eşzamanlı Sayfa Sihri",
                    "explanation": "Ocak, Şubat ve Mart sekmelerini Ctrl ile seçtiğinizde Excel pencere başlığında '[Grup]' yazar. Bu moddayken A1 hücresine ne yazarsanız üç sayfada da aynı anda A1 hücresine yazılır.",
                    "speechText": "Ocak, Şubat ve Mart sekmelerini Ctrl ile seçtiğinizde Excel pencere başlığında '[Grup]' yazar. Bu moddayken A1 hücresine ne yazarsanız üç sayfada da aynı anda A1 hücresine yazılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_5_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine grup modunda başlıkta beliren ifadeyi '[Grup]' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'[Grup]' yazın.",
                              "C2 hücresine '[Grup]' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Çoklu Sayfa Seçimi ve 3 Boyutlu Eşzamanlı Düzenleme görevini başarıyla tamamladınız.",
                              "expectedValue": "[Grup]"
                    }
          }
],
        quiz: {
          "id": "q2_5",
          "title": "Çoklu Sayfa Seçimi ve 3 Boyutlu Eşzamanlı Düzenleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_5_1",
                              "question": "Çoklu sayfa düzenleme (Grup modu) bittikten sonra neden sayfa grubu hemen çözülmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tek bir sayfada yapılacak sonraki değişikliklerin yanlışlıkla diğer tüm sayfalara da yazılmasını önlemek için"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Excel donduğu için"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Formüller silindiği için"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Gerek yoktur"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Grup modunda unutulan sayfalarda yapılan her hücre düzenlemesi tüm gruba uygulanır.",
                              "measuredSkill": "Eşzamanlı Çoklu Sayfa Mimarisi"
                    }
          ]
}
      },
      {
        id: "sec2_l6",
        phaseId: 2,
        unitId: "u2_6",
        title: "Görünüm Seçenekleri: Normal, Sayfa Düzeni ve Sayfa Sonu Önizleme",
        shortDesc: "Sayfa Sonu Önizleme (Page Break Preview) ile yazdırılacak sayfaların mavi kenarlıklarını ayarlama.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Görünüm Modları",
        primaryGoal: "Tablonun yazdırılırken sayfadan taşmasını ve ikinci sayfaya 1 sütun sarkmasını engellemek.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Baskı önizleme yapmadan doğrudan yazdırıp 1 sütun için onlarca kağıt israf etmek"],
        successCriteria: "Görünüm modlarını doğru seçip sayfa sınırlarını yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Sayfa Sonu Önizleme"],
        initialWorkbook: createTableSheet("s2_6", "GorunumModlari", ["Görünüm Tipi", "Kullanım Amacı"], [["Normal", "Standart veri girişi ve analiz"], ["Sayfa Sonu Önizleme", "Yazdırma sınırlarını mavi çizgilerle ayarlama"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Görünüm Seçenekleri: Normal, Sayfa Düzeni ve Sayfa Sonu Önizleme",
                    "description": "Tablonun yazdırılırken sayfadan taşmasını ve ikinci sayfaya 1 sütun sarkmasını engellemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_6",
                    "title": "Yazdırma Sınırlarını Yönetme",
                    "explanation": "Sayfa Sonu Önizleme moduna geçtiğinizde mavi kesikli çizgiler sayfa sonlarını gösterir. Fareyle bu mavi çizgiyi sağa çektiğinizde tüm tablo tek sayfaya sığdırılır.",
                    "speechText": "Sayfa Sonu Önizleme moduna geçtiğinizde mavi kesikli çizgiler sayfa sonlarını gösterir. Fareyle bu mavi çizgiyi sağa çektiğinizde tüm tablo tek sayfaya sığdırılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine baskı sınırlarını gösteren görünümün adını 'Sayfa Sonu Önizleme' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Sayfa Sonu Önizleme' yazın.",
                              "C2 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Görünüm Seçenekleri: Normal, Sayfa Düzeni ve Sayfa Sonu Önizleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Sayfa Sonu Önizleme"
                    }
          }
],
        quiz: {
          "id": "q2_6",
          "title": "Görünüm Seçenekleri: Normal, Sayfa Düzeni ve Sayfa Sonu Önizleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_6_1",
                              "question": "Tablonun yazdırıldığında kaç sayfaya bölündüğünü ve sayfa sınırlarını gösteren görünüm hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayfa Sonu Önizleme (Page Break Preview)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tam Ekran"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Normal Görünüm"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Web Görünümü"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sayfa Sonu Önizleme mavi sınır çizgileriyle yazdırma alanlarını net biçimde gösterir.",
                              "measuredSkill": "Baskı ve Sayfa Sonu Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec2_l7",
        phaseId: 2,
        unitId: "u2_7",
        title: "Kılavuz Çizgileri, Başlıklar ve Formül Çubuğunu Gizleme",
        shortDesc: "Görünüm sekmesinden kılavuz çizgilerini (Gridlines) kaldırarak temiz, profesyonel dashboard görünümü elde etme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Görünüm Temizliği",
        primaryGoal: "Raporları standart hücre tablosu görüntüsünden çıkarıp beyaz profesyonel kurumsal arayüze dönüştürmek.",
        prerequisites: ["sec2_l6"],
        commonMistakes: ["Beyaz arka plan için tüm hücreleri tek tek beyaz dolgu ile boyayıp dosya boyutunu şişirmek"],
        successCriteria: "Kılavuz çizgileri ve başlık onay kutularını yönetebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Kılavuz Çizgileri"],
        initialWorkbook: createTableSheet("s2_7", "TemizGorunum", ["Ayar", "Varsayılan", "Dashboard Modu"], [["Kılavuz Çizgileri (Gridlines)", "Açık", "Kapalı (Gizli)"], ["Başlıklar (Headings)", "Açık", "Sunumlarda Gizlenebilir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kılavuz Çizgileri, Başlıklar ve Formül Çubuğunu Gizleme",
                    "description": "Raporları standart hücre tablosu görüntüsünden çıkarıp beyaz profesyonel kurumsal arayüze dönüştürmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_7",
                    "title": "Dashboard Estetiği",
                    "explanation": "Görünüm sekmesindeki 'Kılavuz Çizgileri' işaretini kaldırdığınızda arka plandaki gri çizgiler kaybolur ve sayfa bembeyaz temiz bir tuvale dönüşür. Tüm C-Level dashboardlar bu görünümle sunulur.",
                    "speechText": "Görünüm sekmesindeki 'Kılavuz Çizgileri' işaretini kaldırdığınızda arka plandaki gri çizgiler kaybolur ve sayfa bembeyaz temiz bir tuvale dönüşür. Tüm C-Level dashboardlar bu görünümle sunulur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t2_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu ayarın bulunduğu şerit sekmesini 'Görünüm' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Görünüm' yazın.",
                              "D2 hücresine 'Görünüm' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Kılavuz Çizgileri, Başlıklar ve Formül Çubuğunu Gizleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Görünüm"
                    }
          }
],
        quiz: {
          "id": "q2_7",
          "title": "Kılavuz Çizgileri, Başlıklar ve Formül Çubuğunu Gizleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_7_1",
                              "question": "Profesyonel bir dashboard hazırlarken gri hücre çizgilerini kaldırmak için hangi onay kutusu temizlenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görünüm sekmesindeki 'Kılavuz Çizgileri' (Gridlines)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formül Çubuğu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yakınlaştır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazım Denetimi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Kılavuz çizgilerinin kapatılması sayfa genelinde beyaz ve temiz bir zemin oluşturur.",
                              "measuredSkill": "Dashboard Görsel Hijyeni"
                    }
          ]
}
      },
      {
        id: "sec2_l8",
        phaseId: 2,
        unitId: "u2_8",
        title: "Yakınlaştırma (Zoom) ve Seçimi Yakınlaştır Araçları",
        shortDesc: "Ctrl + Fare Tekerleği ile yakınlaştırma ve 'Seçimi Yakınlaştır' ile tablonun ekrana tam oturmasını sağlama.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Yakınlaştırma",
        primaryGoal: "Küçük yazıları anında büyütmek ve sunumlarda tablonun ekranı kaplamasını sağlamak.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Gözleri yoracak kadar küçük (%50) yakınlaştırmada formül yazmaya çalışmak"],
        successCriteria: "Yakınlaştırma araçlarını ergonomik kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Yakınlaştırma", "Ctrl+Tekerlek"],
        initialWorkbook: createTableSheet("s2_8", "YakinlastirSayfasi", ["Yöntem", "Açıklama"], [["Ctrl + Tekerlek", "Anlık % ölçek büyütme/küçültme"], ["Seçimi Yakınlaştır", "Seçili tabloyu ekrana %100 doldurur"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yakınlaştırma (Zoom) ve Seçimi Yakınlaştır Araçları",
                    "description": "Küçük yazıları anında büyütmek ve sunumlarda tablonun ekranı kaplamasını sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_8",
                    "title": "Görsel Ergonomi",
                    "explanation": "Görünüm > 'Seçimi Yakınlaştır' düğmesi seçtiğiniz aralığı analiz eder ve ekranın genişliğine göre yakınlaştırmayı (örneğin %140) otomatik ayarlar.",
                    "speechText": "Görünüm > 'Seçimi Yakınlaştır' düğmesi seçtiğiniz aralığı analiz eder ve ekranın genişliğine göre yakınlaştırmayı (örneğin %140) otomatik ayarlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine standart varsayılan yakınlaştırma oranını '%100' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'%100' yazın.",
                              "C2 hücresine '%100' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Yakınlaştırma (Zoom) ve Seçimi Yakınlaştır Araçları görevini başarıyla tamamladınız.",
                              "expectedValue": "%100"
                    }
          }
],
        quiz: {
          "id": "q2_8",
          "title": "Yakınlaştırma (Zoom) ve Seçimi Yakınlaştır Araçları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_8_1",
                              "question": "Excel'de çalışma sayfasını en hızlı şekilde yakınlaştırıp uzaklaştırmanın klavye/fare kısayolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl tuşuna basılı tutarak fare tekerleğini ileri/geri çevirmek"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Alt + F4"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + Enter"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Çift tıklamak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl + fare tekerleği tüm modern işletim sistemlerinde evrensel zoom kısayoludur.",
                              "measuredSkill": "Ergonomi ve Hızlı Yakınlaştırma"
                    }
          ]
}
      },
      {
        id: "sec2_l9",
        phaseId: 2,
        unitId: "u2_9",
        title: "Yeni Pencere Açma ve Pencereleri Yan Yana Yerleştirme",
        shortDesc: "Aynı Excel çalışma kitabını iki ayrı pencerede açarak biriyle ilk sayfayı, diğeriyle son sayfayı yan yana izleme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Çoklu Pencere",
        primaryGoal: "Büyük modellerde girdi sayfasıyla özet dashboardu eşzamanlı ekranda karşılaştırmak.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Sayfalar arasında sürekli ileri geri tıklayıp baş dönmesi ve zaman kaybı yaşamak"],
        successCriteria: "Görünüm sekmesindeki 'Yeni Pencere' ve 'Tümünü Yerleştir' araçlarını uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Yeni Pencere"],
        initialWorkbook: createTableSheet("s2_9", "PencereSayfasi", ["Komut", "İşlev"], [["Görünüm > Yeni Pencere", "Aynı dosyayı 2. pencerede açar (Dosya:2)"], ["Tümünü Yerleştir > Dikey", "İki pencereyi ekranda yan yana böler"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yeni Pencere Açma ve Pencereleri Yan Yana Yerleştirme",
                    "description": "Büyük modellerde girdi sayfasıyla özet dashboardu eşzamanlı ekranda karşılaştırmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_9",
                    "title": "Çift Ekran Konforu",
                    "explanation": "Görünüm > 'Yeni Pencere' dendiğinde aynı dosya 'DosyaAdı:1' ve 'DosyaAdı:2' olarak ikiye ayrılır. Birinde hücreyi değiştirdiğinizde diğerinde anında güncellenir.",
                    "speechText": "Görünüm > 'Yeni Pencere' dendiğinde aynı dosya 'DosyaAdı:1' ve 'DosyaAdı:2' olarak ikiye ayrılır. Birinde hücreyi değiştirdiğinizde diğerinde anında güncellenir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t2_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine ilgili aracın adını 'Yeni Pencere' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Yeni Pencere' yazın.",
                              "C2 hücresine 'Yeni Pencere' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Yeni Pencere Açma ve Pencereleri Yan Yana Yerleştirme görevini başarıyla tamamladınız.",
                              "expectedValue": "Yeni Pencere"
                    }
          }
],
        quiz: {
          "id": "q2_9",
          "title": "Yeni Pencere Açma ve Pencereleri Yan Yana Yerleştirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_9_1",
                              "question": "Aynı çalışma kitabının iki farklı sayfasını aynı ekranda yan yana görmek için hangi komut kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görünüm > Yeni Pencere ve ardından Tümünü Yerleştir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosyayı iki kez kopyalayıp açmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı silmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazdır düğmesine basmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Yeni Pencere komutu aynı canlı belleği paylaşan ikinci bir görüntüleme penceresi oluşturur.",
                              "measuredSkill": "Çoklu Pencere ve Karşılaştırmalı Çalışma"
                    }
          ]
}
      },
      {
        id: "sec2_l10",
        phaseId: 2,
        unitId: "u2_10",
        title: "Durum Çubuğu (Status Bar) Hızlı İstatistikleri",
        shortDesc: "Hücreleri seçtiğinizde sağ altta beliren Ortalama, Sayı ve Toplam bilgilerini sağ tıklayarak özelleştirme.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Durum Çubuğu",
        primaryGoal: "Formül yazmaya gerek kalmadan bir aralığın toplamını, en küçük veya en büyük değerini anında görmek.",
        prerequisites: ["sec1_l2"],
        commonMistakes: ["Hızlı bir toplam kontrolü için bile boş bir hücreye =TOPLA() yazmaya kalkmak"],
        successCriteria: "Durum çubuğu istatistiklerini etkin kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Durum Çubuğu"],
        initialWorkbook: createTableSheet("s2_10", "DurumCubuguSayfasi", ["Sayı 1", "Sayı 2", "Sayı 3"], [[100, 200, 300]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Durum Çubuğu (Status Bar) Hızlı İstatistikleri",
                    "description": "Formül yazmaya gerek kalmadan bir aralığın toplamını, en küçük veya en büyük değerini anında görmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_10",
                    "title": "Formülsüz Hızlı Kontrol",
                    "explanation": "A2:C2 aralığını seçtiğinizde ekranın en altındaki Durum Çubuğu anında 'Ortalama: 200 | Sayı: 3 | Toplam: 600' bilgilerini gösterir. Üzerine sağ tıklayarak En Büyük (Maksimum) ve En Küçük (Minimum) değerleri de eklenebilir.",
                    "speechText": "A2:C2 aralığını seçtiğinizde ekranın en altındaki Durum Çubuğu anında 'Ortalama: 200 | Sayı: 3 | Toplam: 600' bilgilerini gösterir. Üzerine sağ tıklayarak En Büyük (Maksimum) ve En Küçük (Minimum) değerleri de eklenebilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t2_10_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu üç sayının durum çubuğunda görünen toplamını 600 olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "600 sayısını yazın.",
                              "D2 hücresine 600 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Durum Çubuğu (Status Bar) Hızlı İstatistikleri görevini başarıyla tamamladınız.",
                              "expectedValue": 600
                    }
          }
],
        quiz: {
          "id": "q2_10",
          "title": "Durum Çubuğu (Status Bar) Hızlı İstatistikleri Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_10_1",
                              "question": "Excel penceresinin en altında yer alan ve seçili hücrelerin hızlı toplamını/ortalamasını gösteren alan nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Durum Çubuğu (Status Bar)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formül Çubuğu"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Başlık Çubuğu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kaydırma Çubuğu"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Durum çubuğu seçili hücrelerin temel istatistiklerini anlık olarak hesaplar.",
                              "measuredSkill": "Hızlı İstatistik Denetimi ve Ergonomi"
                    }
          ]
}
      },
      {
        id: "sec2_l11",
        phaseId: 2,
        unitId: "u2_11",
        title: "Bölüm 2 Çalışma Ortamı Kapsamlı Değerlendirme Sınavı",
        shortDesc: "Şerit sekmeleri, Ad Kutusu, sayfa operasyonları, görünüm modları ve durum çubuğu kazanımlarının sınavı.",
        category: "Giriş ve Çalışma Ortamı",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "2. Bölümün tüm çalışma ortamı yetkinliklerini tam puanla kanıtlamak.",
        prerequisites: ["sec2_l1", "sec2_l3", "sec2_l6", "sec2_l10"],
        commonMistakes: ["Kavramları birbirine karıştırmak"],
        successCriteria: "Bölüm 2 değerlendirme testini başarıyla tamamlamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s2_11", "Bolum2Final", ["Yetkinlik", "Durum"], [["Şerit Menü Mimarisi", "Kazanıldı"], ["Çalışma Sayfası Yönetimi", "Kazanıldı"], ["Görünüm ve Pencereler", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 2 Çalışma Ortamı Kapsamlı Değerlendirme Sınavı",
                    "description": "2. Bölümün tüm çalışma ortamı yetkinliklerini tam puanla kanıtlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts2_11",
                    "title": "Çalışma Ortamı Uzmanlığı",
                    "explanation": "Tebrikler! Excel'in tüm arayüz, şerit ve sayfa yönetim mimarisine hakim oldunuz. Artık hücreler, satırlar, sütunlar ve yapısal biçimlendirme dünyasına hazırsınız.",
                    "speechText": "Tebrikler! Excel'in tüm arayüz, şerit ve sayfa yönetim mimarisine hakim oldunuz. Artık hücreler, satırlar, sütunlar ve yapısal biçimlendirme dünyasına hazırsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t2_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 2 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 2 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 2 Çalışma Ortamı Kapsamlı Değerlendirme Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 2 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q2_11",
          "title": "Bölüm 2 Çalışma Ortamı Kapsamlı Değerlendirme Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_2_11_1",
                              "question": "Excel'de bir hücreye isim vermek için en pratik araç hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sol üstteki Ad Kutusu (Name Box)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazdır düğmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yakınlaştırma çubuğu"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayfa silme düğmesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hücre seçildikten sonra Ad Kutusuna isim yazılıp Enter'a basıldığında alan adı tanımlanır.",
                              "measuredSkill": "Bölüm 2 Genel Yetkinlik ve Çalışma Ortamı Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 3,
    category: "Hücreler ve Satırlar",
    title: "3. Hücreler, Satırlar, Sütunlar ve Sayfalar",
    subtitle: "Otomatik Sığdırma, Satır/Sütun Kısayolları, Özel Git ve Bölmeleri Dondurma",
    iconName: "Grid",
    description: "Satır ve sütun boyutlandırma, çift tıklama ile otomatik sığdırma (AutoFit), Ctrl+/Ctrl- kısayolları, Özel Git (Go To Special) ile boşlukları bulma, Yalnızca Görünür Hücreleri Seçme (Alt+;) ve Bölmeleri Dondurma.",
    lessons: [
      {
        id: "sec3_l1",
        phaseId: 3,
        unitId: "u3_1",
        title: "Satır ve Sütun Boyutlandırma ve Otomatik Sığdırma (AutoFit)",
        shortDesc: "Sütun başlıkları arasındaki çizgiye çift tıklayarak en uzun metne göre otomatik genişlik ayarlama.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Boyutlandırma",
        primaryGoal: "Hücrede '###' şeklinde görünen sayı taşmalarını anında düzeltmek.",
        prerequisites: ["sec2_l11"],
        commonMistakes: ["Sayı sığmadığı için çıkan '###' simgelerini formül hatası sanıp silmek"],
        successCriteria: "Otomatik sığdırma tekniğini sütun ve satırlarda uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Otomatik Sığdırma", "AutoFit"],
        initialWorkbook: createTableSheet("s3_1", "OtoSigdirSayfasi", ["Şirket Ünvanı", "Vergi Kimlik Numarası"], [["Türkiye Petrol Rafinerileri Anonim Şirketi", 1234567890]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satır ve Sütun Boyutlandırma ve Otomatik Sığdırma (AutoFit)",
                    "description": "Hücrede '###' şeklinde görünen sayı taşmalarını anında düzeltmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_1",
                    "title": "Metin Sığdırma Sanatı",
                    "explanation": "Bir sütundaki metin komşu hücreye taşıyorsa veya sayı sığmadığı için '###' çıkıyorsa, sütun harflerinin (örneğin A ile B'nin) arasındaki dikey çizgiye çift tıklanır. Sütun en uzun metne göre saniyesinde genişler.",
                    "speechText": "Bir sütundaki metin komşu hücreye taşıyorsa veya sayı sığmadığı için '###' çıkıyorsa, sütun harflerinin (örneğin A ile B'nin) arasındaki dikey çizgiye çift tıklanır. Sütun en uzun metne göre saniyesinde genişler. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t3_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine bu işlemin İngilizce adını 'AutoFit' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'AutoFit' yazın.",
                              "C2 hücresine 'AutoFit' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Satır ve Sütun Boyutlandırma ve Otomatik Sığdırma (AutoFit) görevini başarıyla tamamladınız.",
                              "expectedValue": "AutoFit"
                    }
          }
],
        quiz: {
          "id": "q3_1",
          "title": "Satır ve Sütun Boyutlandırma ve Otomatik Sığdırma (AutoFit) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_1_1",
                              "question": "Bir hücrede '###' işaretleri belirdiğinde bunun temel anlamı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücredeki sayı veya tarih sütun genişliğine sığmamaktadır"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Formül yanlış yazılmıştır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Veri silinmiştir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Virüs girmiştir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sayı ve tarihler metin gibi taşamaz; sığmadıklarında kullanıcıyı yanıltmamak için '###' gösterirler.",
                              "measuredSkill": "Hücre Genişliği ve Hata Teşhisi"
                    }
          ]
}
      },
      {
        id: "sec3_l2",
        phaseId: 3,
        unitId: "u3_2",
        title: "Satır ve Sütun Ekleme, Silme ve Kısayolları (Ctrl + ve Ctrl -)",
        shortDesc: "Seçili satır veya sütunlar arasında Ctrl + ile yeni boş satır ekleme ve Ctrl - ile silme.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Satır Operasyonları",
        primaryGoal: "Fareye dokunmadan klavyeden anında yeni satır açabilmek.",
        prerequisites: ["sec3_l1"],
        commonMistakes: ["Hücreleri Delete tuşuna basıp silince satırın da silindiğini sanmak (Delete sadece içeriği temizler)"],
        successCriteria: "Ctrl+ ve Ctrl- kısayollarını satır/sütun yönetiminde kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Satır Ekleme", "Ctrl+"],
        initialWorkbook: createTableSheet("s3_2", "SatirEkleSayfasi", ["İşlem", "Kısayol"], [["Satır / Sütun Ekle", "Ctrl + (Artı)"], ["Satır / Sütun Sil", "Ctrl - (Eksi)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satır ve Sütun Ekleme, Silme ve Kısayolları (Ctrl + ve Ctrl -)",
                    "description": "Fareye dokunmadan klavyeden anında yeni satır açabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_2",
                    "title": "Hızlı Satır Yönetimi",
                    "explanation": "Bir satırı seçip (Shift + Space) ardından Ctrl + tuşuna basarsanız hemen üstüne yeni bir boş satır eklenir. Ctrl - ise o satırı tamamen yok eder.",
                    "speechText": "Bir satırı seçip (Shift + Space) ardından Ctrl + tuşuna basarsanız hemen üstüne yeni bir boş satır eklenir. Ctrl - ise o satırı tamamen yok eder. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t3_2_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine yeni satır ekleme kısayolunu 'Ctrl+' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Ctrl+' yazın.",
                              "C2 hücresine 'Ctrl+' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Satır ve Sütun Ekleme, Silme ve Kısayolları (Ctrl + ve Ctrl -) görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+"
                    }
          }
],
        quiz: {
          "id": "q3_2",
          "title": "Satır ve Sütun Ekleme, Silme ve Kısayolları (Ctrl + ve Ctrl -) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_2_1",
                              "question": "Klavyeden seçili bir satırı veya sütunu tamamen silmek için hangi kısayol kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + - (Eksi)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Delete"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Backspace"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt + F4"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Delete tuşu içeriği temizler; Ctrl + - ise satır veya sütun yapısını tamamen siler.",
                              "measuredSkill": "Satır ve Sütun Klavye Kısayolları"
                    }
          ]
}
      },
      {
        id: "sec3_l3",
        phaseId: 3,
        unitId: "u3_3",
        title: "Satır ve Sütunları Gizleme (Hide) ve Yeniden Gösterme",
        shortDesc: "Ara hesaplama sütunlarını gizleyerek tabloyu sadeleştirme ve gizli aralıkları geri açma.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Gizleme",
        primaryGoal: "Raporu kalabalıklaştıran teknik sütunları geçici olarak gizleyebilmek.",
        prerequisites: ["sec3_l2"],
        commonMistakes: ["Gizlenen sütunu bulamayıp silindiğini düşünmek"],
        successCriteria: "Satır ve sütun gizleme/gösterme tekniklerini uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Gizleme"],
        initialWorkbook: createTableSheet("s3_3", "GizleSayfasi", ["Sütun A", "Sütun B (Gizlenecek)", "Sütun C"], [["Ürün", "Maliyet Hesaplama", "Satış Fiyatı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Satır ve Sütunları Gizleme (Hide) ve Yeniden Gösterme",
                    "description": "Raporu kalabalıklaştıran teknik sütunları geçici olarak gizleyebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_3",
                    "title": "Sütun Gizleme",
                    "explanation": "Sütun başlığına sağ tıklayıp 'Gizle' dendiğinde sütun genişliği 0 olur ve harfler A'dan C'ye atlar (B gizlidir). Geri açmak için A ve C seçilip sağ tık 'Göster' denir.",
                    "speechText": "Sütun başlığına sağ tıklayıp 'Gizle' dendiğinde sütun genişliği 0 olur ve harfler A'dan C'ye atlar (B gizlidir). Geri açmak için A ve C seçilip sağ tık 'Göster' denir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t3_3_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine gizleme işleminin adını 'Gizle' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Gizle' yazın.",
                              "D2 hücresine 'Gizle' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Satır ve Sütunları Gizleme (Hide) ve Yeniden Gösterme görevini başarıyla tamamladınız.",
                              "expectedValue": "Gizle"
                    }
          }
],
        quiz: {
          "id": "q3_3",
          "title": "Satır ve Sütunları Gizleme (Hide) ve Yeniden Gösterme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_3_1",
                              "question": "Sütun başlıkları 'A, B, D, E' şeklinde görünüyorsa hangi çıkarım yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "C sütunu gizlenmiştir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "C sütunu silinmiştir"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel bozulmuştur"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "C harfi yasaklanmıştır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Harf sıralamasındaki atlama aradaki sütunun gizlendiğini gösterir.",
                              "measuredSkill": "Sütun Görünürlüğü ve Denetim"
                    }
          ]
}
      },
      {
        id: "sec3_l4",
        phaseId: 3,
        unitId: "u3_4",
        title: "Hücre ve Aralık Seçim Teknikleri (Ctrl, Shift, Ctrl+Space)",
        shortDesc: "Bütün sütunu seçme (Ctrl + Space), bütün satırı seçme (Shift + Space) ve tüm sayfayı seçme (Ctrl + A).",
        category: "Hücreler ve Satırlar",
        groupTitle: "Gelişmiş Seçim",
        primaryGoal: "Fareyle aşağıya doğru saniyelerce sürüklemek yerine tek tuşla tüm sütunu seçebilmek.",
        prerequisites: ["sec1_l5"],
        commonMistakes: ["Binlerce hücreyi fareyle seçmeye çalışırken elin kayması ve seçimin bozulması"],
        successCriteria: "Seçim kısayollarını refleks haline getirebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Ctrl+Space", "Shift+Space"],
        initialWorkbook: createTableSheet("s3_4", "SecimTeknikleri", ["İşlem", "Kısayol"], [["Tüm Sütunu Seç", "Ctrl + Space"], ["Tüm Satırı Seç", "Shift + Space"], ["Tüm Tabloyu Seç", "Ctrl + A"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre ve Aralık Seçim Teknikleri (Ctrl, Shift, Ctrl+Space)",
                    "description": "Fareyle aşağıya doğru saniyelerce sürüklemek yerine tek tuşla tüm sütunu seçebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_4",
                    "title": "Klavyeyle Seçim Hakimiyeti",
                    "explanation": "Hangi hücrede olursanız olun Ctrl + Boşluk (Space) tuşuna bastığınız an o sütun tepeye kadar komple seçilir. Shift + Boşluk ise satırı boydan boya seçer.",
                    "speechText": "Hangi hücrede olursanız olun Ctrl + Boşluk (Space) tuşuna bastığınız an o sütun tepeye kadar komple seçilir. Shift + Boşluk ise satırı boydan boya seçer. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t3_4_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine tüm sütunu seçen kısayolu 'Ctrl+Space' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Ctrl+Space' yazın.",
                              "C2 hücresine 'Ctrl+Space' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Hücre ve Aralık Seçim Teknikleri (Ctrl, Shift, Ctrl+Space) görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+Space"
                    }
          }
],
        quiz: {
          "id": "q3_4",
          "title": "Hücre ve Aralık Seçim Teknikleri (Ctrl, Shift, Ctrl+Space) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_4_1",
                              "question": "Aktif hücrenin bulunduğu tüm dikey sütunu tek hamlede seçen kısayol nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + Boşluk (Space)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Shift + Boşluk"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Alt + Boşluk"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + A"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+Space sütunu, Shift+Space satırı seçer.",
                              "measuredSkill": "Gelişmiş Hücre ve Blok Seçimi"
                    }
          ]
}
      },
      {
        id: "sec3_l5",
        phaseId: 3,
        unitId: "u3_5",
        title: "Boş Hücreleri Seçme (Özel Git - Go To Special > Blanks)",
        shortDesc: "Tablodaki binlerce satırın arasında rastgele dağılmış boş hücreleri tek hamlede topluca seçip '0' veya 'Yok' ile doldurma.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Özel Git",
        primaryGoal: "Veri temizliğinde tek tek boşluk aramak yerine tek tıkla tüm boş hücreleri yönetebilmek.",
        prerequisites: ["sec3_l4"],
        commonMistakes: ["Boş hücreleri tek tek fareyle bulup içine sıfır yazmaya saatler harcamak"],
        successCriteria: "Özel Git > Boşluklar aracını başarıyla uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Özel Git", "Boşluklar"],
        initialWorkbook: createTableSheet("s3_5", "BosHucreSayfasi", ["Bölge", "Satış Adedi"], [["Marmara", 100], ["Ege", ""], ["İç Anadolu", 250], ["Akdeniz", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Boş Hücreleri Seçme (Özel Git - Go To Special > Blanks)",
                    "description": "Veri temizliğinde tek tek boşluk aramak yerine tek tıkla tüm boş hücreleri yönetebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_5",
                    "title": "Sihirli Boşluk Dedektifi",
                    "explanation": "F5 tuşuna basıp 'Özel' (Special) butonuna tıklandığında 'Boşluklar' (Blanks) seçilir. Excel tablodaki tüm boş hücreleri aynı anda seçer. '0' yazıp Ctrl+Enter'a basıldığında tüm boşluklar tek saniyede sıfırla dolar.",
                    "speechText": "F5 tuşuna basıp 'Özel' (Special) butonuna tıklandığında 'Boşluklar' (Blanks) seçilir. Excel tablodaki tüm boş hücreleri aynı anda seçer. '0' yazıp Ctrl+Enter'a basıldığında tüm boşluklar tek saniyede sıfırla dolar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t3_5_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine bu aracın adını 'Özel Git' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Özel Git' yazın.",
                              "C2 hücresine 'Özel Git' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Boş Hücreleri Seçme (Özel Git - Go To Special > Blanks) görevini başarıyla tamamladınız.",
                              "expectedValue": "Özel Git"
                    }
          }
],
        quiz: {
          "id": "q3_5",
          "title": "Boş Hücreleri Seçme (Özel Git - Go To Special > Blanks) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_5_1",
                              "question": "Bir aralıktaki tüm boş hücreleri aynı anda seçmek için hangi araç kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "F5 > Özel Git > Boşluklar (Go To Special > Blanks)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazım Denetimi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Grafik Ekle"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücreleri Birleştir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Özel Git penceresi formülleri, sabitleri ve boşlukları tek hamlede seçme gücü sunar.",
                              "measuredSkill": "Veri Temizleme ve Boşluk Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec3_l6",
        phaseId: 3,
        unitId: "u3_6",
        title: "Yalnızca Görünür Hücreleri Seçme (Alt + ;) Mantığı",
        shortDesc: "Filtreli veya gizli satırlar içeren bir tablodan kopyalama yaparken gizli satırların araya girmesini engelleme.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Görünür Hücreler",
        primaryGoal: "Kopyalanan verinin arasına gizlenmiş gizli satırların yapışmasını önlemek.",
        prerequisites: ["sec3_l3"],
        commonMistakes: ["Filtreli tabloyu seçip kopyaladığında gizli satırların da kopyalanmasına şaşırmak"],
        successCriteria: "Alt + ; kısayolunu veri kopyalamada standart refleks haline getirmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Görünür Hücreler", "Alt+;"],
        initialWorkbook: createTableSheet("s3_6", "GorunurHucreSayfasi", ["İşlem", "Kısayol"], [["Yalnızca Görünür Hücreleri Seç", "Alt + ; (Noktalı Virgül)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yalnızca Görünür Hücreleri Seçme (Alt + ;) Mantığı",
                    "description": "Kopyalanan verinin arasına gizlenmiş gizli satırların yapışmasını önlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_6",
                    "title": "Gizli Satır Tuzağı",
                    "explanation": "Excel'de satırlar gizlendiğinde standart kopyalama bazen o gizli satırları da hafızaya alır. Tabloyu seçtikten sonra Alt + ; (veya F5 > Özel > Yalnızca Görünür Hücreler) tuşuna basarsanız sadece ekranda görünen hücreler seçilir.",
                    "speechText": "Excel'de satırlar gizlendiğinde standart kopyalama bazen o gizli satırları da hafızaya alır. Tabloyu seçtikten sonra Alt + ; (veya F5 > Özel > Yalnızca Görünür Hücreler) tuşuna basarsanız sadece ekranda görünen hücreler seçilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t3_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine görünür hücre kısayolunu 'Alt+;' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Alt+;' yazın.",
                              "C2 hücresine 'Alt+;' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Yalnızca Görünür Hücreleri Seçme (Alt + ;) Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "Alt+;"
                    }
          }
],
        quiz: {
          "id": "q3_6",
          "title": "Yalnızca Görünür Hücreleri Seçme (Alt + ;) Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_6_1",
                              "question": "Filtreli veya satırları gizlenmiş bir tabloda yalnızca görünen hücreleri seçen kısayol nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alt + ; (Noktalı Virgül)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + C"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + F11"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + Z"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Alt + ; kısayolu gizli satırları atlayarak sadece görünür hücreleri seçer.",
                              "measuredSkill": "Görünür Veri Güvenliği ve Kopyalama"
                    }
          ]
}
      },
      {
        id: "sec3_l7",
        phaseId: 3,
        unitId: "u3_7",
        title: "Bölmeleri Dondur: Üst Satırı Dondur (Freeze Top Row)",
        shortDesc: "Sayfa binlerce satır aşağı kaydırıldığında başlık satırının ekranın en üstünde sabit kalması.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Bölmeleri Dondur",
        primaryGoal: "Aşağı kaydırırken hangi sütunun ne olduğunu unutmamak.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Başlıkları sabitlemeden kaydırıp sayıları yanlış sütunlara girmek"],
        successCriteria: "Üst satırı dondur komutunu uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölmeleri Dondur"],
        initialWorkbook: createTableSheet("s3_7", "UstSatirDondur", ["Personel Adı", "Maaş", "İşe Giriş Tarihi"], [["Ahmet Yılmaz", 35000, "01.01.2020"], ["Mehmet Kaya", 42000, "15.03.2021"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölmeleri Dondur: Üst Satırı Dondur (Freeze Top Row)",
                    "description": "Aşağı kaydırırken hangi sütunun ne olduğunu unutmamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_7",
                    "title": "Başlıklar Daima Görünsün",
                    "explanation": "Görünüm > Bölmeleri Dondur > 'Üst Satırı Dondur' seçildiğinde 1. satırın altına ince koyu bir çizgi çekilir. Siz 5000. satıra da inseniz başlık satırı gözünüzün önünde kalır.",
                    "speechText": "Görünüm > Bölmeleri Dondur > 'Üst Satırı Dondur' seçildiğinde 1. satırın altına ince koyu bir çizgi çekilir. Siz 5000. satıra da inseniz başlık satırı gözünüzün önünde kalır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t3_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu komutun adını 'Üst Satırı Dondur' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Üst Satırı Dondur' yazın.",
                              "D2 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Bölmeleri Dondur: Üst Satırı Dondur (Freeze Top Row) görevini başarıyla tamamladınız.",
                              "expectedValue": "Üst Satırı Dondur"
                    }
          }
],
        quiz: {
          "id": "q3_7",
          "title": "Bölmeleri Dondur: Üst Satırı Dondur (Freeze Top Row) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_7_1",
                              "question": "Excel'de aşağı kaydırma sırasında 1. satırdaki tablo başlıklarının kaybolmaması için ne yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Görünüm > Bölmeleri Dondur > Üst Satırı Dondur seçilir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yazı boyutu büyütülür"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hücreler kilitlenir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosya kapatılır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Üst Satırı Dondur 1. satırı ekranın tepesine sabitler.",
                              "measuredSkill": "Görünüm ve Başlık Sabitleme"
                    }
          ]
}
      },
      {
        id: "sec3_l8",
        phaseId: 3,
        unitId: "u3_8",
        title: "Bölmeleri Dondur: Özel Kesişim Noktası Dondurma",
        shortDesc: "Hem üstteki ilk 2 satırı hem de soldaki ilk sütunu aynı anda donduracak kesişim hücresini seçme kuralı.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Bölmeleri Dondur",
        primaryGoal: "Hem sağa hem aşağı kaydırırken hem başlıkları hem personel isimlerini ekranda sabit tutabilmek.",
        prerequisites: ["sec3_l7"],
        commonMistakes: ["Dondurulacak satır ve sütunun bir alt-sağındaki kesişim hücresini seçmek yerine yanlış hücreyi seçmek"],
        successCriteria: "Özel kesişim hücresini doğru belirleyebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Bölmeleri Dondur"],
        initialWorkbook: createTableSheet("s3_8", "KesisimDondur", ["Personel (Sabit)", "Ocak", "Şubat", "Mart"], [["Ali", 100, 120, 140], ["Veli", 200, 210, 220]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölmeleri Dondur: Özel Kesişim Noktası Dondurma",
                    "description": "Hem sağa hem aşağı kaydırırken hem başlıkları hem personel isimlerini ekranda sabit tutabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_8",
                    "title": "L Şeklinde Kesişim Kuralı",
                    "explanation": "1. satır ve A sütunu sabit kalsın istiyorsanız, B2 hücresine tıklayıp 'Bölmeleri Dondur' demelisiniz. Excel seçilen hücrenin üstünü ve solunu otomatik olarak dondurur.",
                    "speechText": "1. satır ve A sütunu sabit kalsın istiyorsanız, B2 hücresine tıklayıp 'Bölmeleri Dondur' demelisiniz. Excel seçilen hücrenin üstünü ve solunu otomatik olarak dondurur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t3_8_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine seçilmesi gereken kesişim hücresi olarak 'B2' yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'B2' yazın.",
                              "C4 hücresine 'B2' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölmeleri Dondur: Özel Kesişim Noktası Dondurma görevini başarıyla tamamladınız.",
                              "expectedValue": "B2"
                    }
          }
],
        quiz: {
          "id": "q3_8",
          "title": "Bölmeleri Dondur: Özel Kesişim Noktası Dondurma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_8_1",
                              "question": "1. satırı ve A sütununu aynı anda dondurmak için hangi hücre seçiliyken 'Bölmeleri Dondur' denmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "B2 hücresi"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "A1 hücresi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "C3 hücresi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "B1 hücresi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel imlecin solundaki sütunları ve üstündeki satırları dondurur. Bu nedenle B2 seçilmelidir.",
                              "measuredSkill": "İki Yönlü Kesişim Dondurma"
                    }
          ]
}
      },
      {
        id: "sec3_l9",
        phaseId: 3,
        unitId: "u3_9",
        title: "Sayfayı Böl (Split) ile Farklı Alanları Eşzamanlı İzleme",
        shortDesc: "Bölmeleri dondurmaktan farklı olarak sayfayı 4 bağımsız kaydırılabilir pencereye ayırma.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Sayfa Bölme",
        primaryGoal: "Tablonun başı, ortası ve sonunu aynı ekranda 4 ayrı kaydırma çubuğuyla yönetebilmek.",
        prerequisites: ["sec3_l8"],
        commonMistakes: ["Böl komutu ile Bölmeleri Dondur komutunun farkını karıştırmak"],
        successCriteria: "Böl (Split) aracını doğru yerde kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Böl", "Split"],
        initialWorkbook: createTableSheet("s3_9", "SayfaBolSayfasi", ["Özellik", "Bölmeleri Dondur", "Böl (Split)"], [["Kaydırma", "Dondurulan alan kaymaz", "Her 4 parça bağımsız kaydırılabilir"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayfayı Böl (Split) ile Farklı Alanları Eşzamanlı İzleme",
                    "description": "Tablonun başı, ortası ve sonunu aynı ekranda 4 ayrı kaydırma çubuğuyla yönetebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_9",
                    "title": "Dört Parçalı Bakış",
                    "explanation": "Görünüm > 'Böl' (Split) düğmesi sayfaya gri kalın bölme çubukları ekler. Bu çubuklar fareyle sürüklenebilir ve sayfanın farklı yerlerini aynı anda karşılaştırmanızı sağlar.",
                    "speechText": "Görünüm > 'Böl' (Split) düğmesi sayfaya gri kalın bölme çubukları ekler. Bu çubuklar fareyle sürüklenebilir ve sayfanın farklı yerlerini aynı anda karşılaştırmanızı sağlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t3_9_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu komutun adını 'Böl' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Böl' yazın.",
                              "D2 hücresine 'Böl' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Sayfayı Böl (Split) ile Farklı Alanları Eşzamanlı İzleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Böl"
                    }
          }
],
        quiz: {
          "id": "q3_9",
          "title": "Sayfayı Böl (Split) ile Farklı Alanları Eşzamanlı İzleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_9_1",
                              "question": "Görünüm sekmesindeki 'Böl' (Split) komutunun Bölmeleri Dondur'dan temel farkı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayfayı her biri bağımsız kaydırılabilen ayrı panellere ayırması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri silmesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yalnızca yazdırmada çalışması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formülleri gizlemesi"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Böl aracı sayfayı 2 veya 4 bağımsız kaydırılabilir alana böler.",
                              "measuredSkill": "Sayfa Bölme ve Karşılaştırma"
                    }
          ]
}
      },
      {
        id: "sec3_l10",
        phaseId: 3,
        unitId: "u3_10",
        title: "Sayfa Koruma (Protect Sheet) ve Hücre Kilidi Mantığı",
        shortDesc: "Kullanıcıların formülleri yanlışlıkla silmesini engellemek için yalnızca veri giriş hücrelerinin kilidini açıp sayfayı koruma.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Güvenlik",
        primaryGoal: "Kurumsal şablonlarda formülleri kilitleyip kullanıcıya sadece sarı giriş hücrelerini açmak.",
        prerequisites: ["sec2_l1"],
        commonMistakes: ["Tüm hücrelerin varsayılan olarak 'Kilitli' olduğunu bilmeden doğrudan sayfayı koruyup tüm sayfayı kitlemek"],
        successCriteria: "Hücre kilidi ve sayfa koruma hiyerarşisini uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Sayfa Koruma", "Hücre Kilidi"],
        initialWorkbook: createTableSheet("s3_10", "SayfaKorumaSayfasi", ["Hücre", "Rol", "Kilit Durumu"], [["B2 (Giriş)", "Veri Girişi", "Kilit Açık (Unlocked)"], ["C2 (Formül)", "=B2*1.20", "Kilitli (Protected)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayfa Koruma (Protect Sheet) ve Hücre Kilidi Mantığı",
                    "description": "Kurumsal şablonlarda formülleri kilitleyip kullanıcıya sadece sarı giriş hücrelerini açmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_10",
                    "title": "İki Aşamalı Koruma",
                    "explanation": "Excel'de kural şudur: 1. Kullanıcının yazacağı hücreler seçilir > Hücre Biçimlendir > Koruma > 'Kilitli' işareti kaldırılır. 2. Gözden Geçir > 'Sayfayı Koru' denir. Artık formüller korunur, veri hücresi düzenlenebilir.",
                    "speechText": "Excel'de kural şudur: 1. Kullanıcının yazacağı hücreler seçilir > Hücre Biçimlendir > Koruma > 'Kilitli' işareti kaldırılır. 2. Gözden Geçir > 'Sayfayı Koru' denir. Artık formüller korunur, veri hücresi düzenlenebilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t3_10_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine bu koruma aracının adını 'Sayfayı Koru' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Sayfayı Koru' yazın.",
                              "D2 hücresine 'Sayfayı Koru' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Sayfa Koruma (Protect Sheet) ve Hücre Kilidi Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "Sayfayı Koru"
                    }
          }
],
        quiz: {
          "id": "q3_10",
          "title": "Sayfa Koruma (Protect Sheet) ve Hücre Kilidi Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_10_1",
                              "question": "Kullanıcının yalnızca belirli hücrelere veri girmesine izin vermek için ilk adım ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "O hücrelerin özelliklerinden 'Kilitli' onay kutusundaki işareti kaldırmak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Dosyayı silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı kapatmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formülü silmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Varsayılan olarak kilitli olan hücreler açılmadan sayfa korunursa hiçbir hücre düzenlenemez.",
                              "measuredSkill": "Kurumsal Şablon Güvenliği ve Hücre Kilitleme"
                    }
          ]
}
      },
      {
        id: "sec3_l11",
        phaseId: 3,
        unitId: "u3_11",
        title: "Bölüm 3 Hücre ve Satır Mimarisi Final Sınavı",
        shortDesc: "Boyutlandırma, satır/sütun ekleme silme, Özel Git boşluklar, Alt+; ve Bölmeleri Dondurma sınavı.",
        category: "Hücreler ve Satırlar",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "3. Bölümün tüm hücresel ve yapısal operasyonel yetkinliklerini kanıtlamak.",
        prerequisites: ["sec3_l1", "sec3_l4", "sec3_l6", "sec3_l8"],
        commonMistakes: ["Kısayolları yanlış eşleştirmek"],
        successCriteria: "Bölüm 3 değerlendirme testini başarıyla tamamlamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s3_11", "Bolum3Final", ["Konu", "Durum"], [["Satır / Sütun Yönetimi", "Kazanıldı"], ["Gelişmiş Seçim ve Özel Git", "Kazanıldı"], ["Görünüm ve Dondurma", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 3 Hücre ve Satır Mimarisi Final Sınavı",
                    "description": "3. Bölümün tüm hücresel ve yapısal operasyonel yetkinliklerini kanıtlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts3_11",
                    "title": "Hücre Yapı Ustası",
                    "explanation": "Tebrikler! Hücre, satır, sütun ve sayfa yapısının tüm inceliklerini kavradınız. Artık verilerinizi hızla girmeye, doldurmaya ve biçimlendirmeye hazırsınız.",
                    "speechText": "Tebrikler! Hücre, satır, sütun ve sayfa yapısının tüm inceliklerini kavradınız. Artık verilerinizi hızla girmeye, doldurmaya ve biçimlendirmeye hazırsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t3_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 3 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 3 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 3 Hücre ve Satır Mimarisi Final Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 3 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q3_11",
          "title": "Bölüm 3 Hücre ve Satır Mimarisi Final Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_3_11_1",
                              "question": "Excel'de seçili hücrenin bulunduğu tüm yatay satırı seçen kısayol nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Shift + Boşluk (Space)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + Boşluk"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + Z"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt + F4"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Shift+Space satırı, Ctrl+Space sütunu seçer.",
                              "measuredSkill": "Bölüm 3 Genel Yetkinlik ve Satır Mimarisi"
                    }
          ]
}
      }
    ]
  },
  {
    id: 4,
    category: "Veri Girişi ve Verimlilik",
    title: "4. Veri Girişi ve Verimli Çalışma Teknikleri",
    subtitle: "Otomatik Doldurma, Özel Listeler, Özel Yapıştır, Veri Türleri ve Bul/Değiştir",
    iconName: "Zap",
    description: "Otomatik doldurma tutamacı, sayı ve tarih serileri üretme, Özel Listeler, Özel Yapıştır (Değerler, Devrik Dönüşüm, İşlemler), veri türleri (Metin vs Sayı hizalama) ve Bul & Değiştir.",
    lessons: [
      {
        id: "sec4_l1",
        phaseId: 4,
        unitId: "u4_1",
        title: "Otomatik Doldurma Tutamacı ve Sayı Serileri Üretme",
        shortDesc: "Hücrenin sağ alt köşesindeki yeşil küçük kareyi (Fill Handle) sürükleyerek veya çift tıklayarak seriyi devam ettirme.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Otomatik Doldurma",
        primaryGoal: "1'den 1000'e kadar olan sayıları elle yazmadan tek saniyede doldurabilmek.",
        prerequisites: ["sec3_l11"],
        commonMistakes: ["Tek bir sayı (1) yazıp çekince hepsinin 1 kopyalanması (Ctrl'ye basarak veya iki sayı yazarak çekilmelidir)"],
        successCriteria: "Otomatik doldurma tutamacını ve seri üretim kurallarını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Doldurma Tutamacı"],
        initialWorkbook: createTableSheet("s4_1", "OtoDoldurSayfasi", ["Sıra No", "Adım"], [[1, "İlk sayı"], [2, "İki sayı seçilip çekilir"], ["", "Devam eden seri"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Otomatik Doldurma Tutamacı ve Sayı Serileri Üretme",
                    "description": "1'den 1000'e kadar olan sayıları elle yazmadan tek saniyede doldurabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_1",
                    "title": "Sihirli Yeşil Kare",
                    "explanation": "Hücrenin sağ altındaki yeşil noktaya 'Doldurma Tutamacı' (Fill Handle) denir. 1 ve 2 sayılarını seçip bu kareye çift tıklarsanız solundaki tablo bitene kadar seriyi aşağıya döker.",
                    "speechText": "Hücrenin sağ altındaki yeşil noktaya 'Doldurma Tutamacı' (Fill Handle) denir. 1 ve 2 sayılarını seçip bu kareye çift tıklarsanız solundaki tablo bitene kadar seriyi aşağıya döker. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "A4"
          }
],
        tasks: [
          {
                    "id": "t4_1_1",
                    "stepNumber": 1,
                    "instruction": "A4 hücresine serinin devamı olan 3 sayısını yazın.",
                    "targetCell": "A4",
                    "hints": [
                              "A4 hücresini seçin.",
                              "3 sayısını yazın.",
                              "A4 hücresine 3 yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "A4",
                              "successMessage": "Tebrikler! Otomatik Doldurma Tutamacı ve Sayı Serileri Üretme görevini başarıyla tamamladınız.",
                              "expectedValue": 3
                    }
          }
],
        quiz: {
          "id": "q4_1",
          "title": "Otomatik Doldurma Tutamacı ve Sayı Serileri Üretme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_1_1",
                              "question": "Excel'de bir seriyi yanındaki tablonun sonuna kadar tek hamlede doldurmanın en hızlı yolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Doldurma tutamacına (sağ alttaki yeşil kare) çift tıklamak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayıları tek tek elle yazmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sayfayı silmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Dosyayı kapatıp açmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Doldurma tutamacına çift tıklamak komşu sütunun son satırına kadar seriyi anında doldurur.",
                              "measuredSkill": "Seri Üretimi ve Doldurma Tutamacı Hızı"
                    }
          ]
}
      },
      {
        id: "sec4_l2",
        phaseId: 4,
        unitId: "u4_2",
        title: "Özel Listeler ile Gün ve Ay Serileri Otomasyonu",
        shortDesc: "Ocak yazıp çekildiğinde Şubat, Mart.. veya Pazartesi yazıp çekildiğinde diğer günlerin otomatik gelmesi.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Özel Listeler",
        primaryGoal: "Kendi şirket şube veya ürün listesini Excel'e özel liste olarak tanıtıp tek kelimeden tüm listeyi çekebilmek.",
        prerequisites: ["sec4_l1"],
        commonMistakes: ["Özel listelerin harf duyarlılığını yanlış yorumlamak"],
        successCriteria: "Özel liste mantığını ve liste oluşturmayı kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Özel Liste"],
        initialWorkbook: createTableSheet("s4_2", "GunAySeriSayfasi", ["Ay Başlangıcı", "2. Ay", "3. Ay"], [["Ocak", "Şubat", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Listeler ile Gün ve Ay Serileri Otomasyonu",
                    "description": "Kendi şirket şube veya ürün listesini Excel'e özel liste olarak tanıtıp tek kelimeden tüm listeyi çekebilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_2",
                    "title": "Takvim Zekası",
                    "explanation": "Excel Türkçe sürümünde 'Pazartesi' veya 'Ocak' yazdığınızda bunu bir özel liste olarak tanır ve sürüklediğinizde takvim akışını sürdürür. Dosya > Seçenekler > Gelişmiş > 'Özel Listeleri Düzenle'den kendi listelerinizi de ekleyebilirsiniz.",
                    "speechText": "Excel Türkçe sürümünde 'Pazartesi' veya 'Ocak' yazdığınızda bunu bir özel liste olarak tanır ve sürüklediğinizde takvim akışını sürdürür. Dosya > Seçenekler > Gelişmiş > 'Özel Listeleri Düzenle'den kendi listelerinizi de ekleyebilirsiniz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t4_2_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine serinin 3. ayı olarak 'Mart' yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Mart' yazın.",
                              "C2 hücresine 'Mart' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Özel Listeler ile Gün ve Ay Serileri Otomasyonu görevini başarıyla tamamladınız.",
                              "expectedValue": "Mart"
                    }
          }
],
        quiz: {
          "id": "q4_2",
          "title": "Özel Listeler ile Gün ve Ay Serileri Otomasyonu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_2_1",
                              "question": "Excel'de 'Pazartesi' yazıp doldurma tutamacı sağa çekildiğinde bir sonraki hücreye ne gelir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Salı"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Pazartesi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Pazar"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel yerleşik gün listesini takip ederek Salı değerini doldurur.",
                              "measuredSkill": "Özel Liste ve Periyot Otomasyonu"
                    }
          ]
}
      },
      {
        id: "sec4_l3",
        phaseId: 4,
        unitId: "u4_3",
        title: "Hızlı Doldurma (Flash Fill) Temel Mantığı (Ctrl+E)",
        shortDesc: "Örüntüyü tanıyarak birleşik ad-soyadı veya karmaşık kodları formül yazmadan tek tuşla ayrıştırma.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Flash Fill",
        primaryGoal: "Birkaç örnek yazıp Ctrl+E'ye basarak yüzlerce satırı yapay zekâ gibi saniyede dönüştürmek.",
        prerequisites: ["sec4_l1"],
        commonMistakes: ["Yeterli örnek vermeden veya örüntünün bozulduğu verilerde tek seferde sonuç beklemek"],
        successCriteria: "Ctrl+E kısayolunu ve Flash Fill motorunu uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Flash Fill", "Ctrl+E"],
        initialWorkbook: createTableSheet("s4_3", "FlashFillGiris", ["Ad Soyad", "Yalnızca Ad"], [["Ahmet Yılmaz", "Ahmet"], ["Mehmet Kaya", ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hızlı Doldurma (Flash Fill) Temel Mantığı (Ctrl+E)",
                    "description": "Birkaç örnek yazıp Ctrl+E'ye basarak yüzlerce satırı yapay zekâ gibi saniyede dönüştürmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_3",
                    "title": "Örüntü Tanıma Devrimi",
                    "explanation": "B2 hücresine 'Ahmet' yazıp B3 hücresine geçtikten sonra Ctrl + E tuşuna basarsanız Excel sizin 'Ad Soyad' sütunundan ilk kelimeyi çekmek istediğinizi anlar ve tüm sütunu doldurur.",
                    "speechText": "B2 hücresine 'Ahmet' yazıp B3 hücresine geçtikten sonra Ctrl + E tuşuna basarsanız Excel sizin 'Ad Soyad' sütunundan ilk kelimeyi çekmek istediğinizi anlar ve tüm sütunu doldurur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "B3"
          }
],
        tasks: [
          {
                    "id": "t4_3_1",
                    "stepNumber": 1,
                    "instruction": "B3 hücresine Flash Fill mantığıyla gelmesi gereken adı 'Mehmet' olarak yazın.",
                    "targetCell": "B3",
                    "hints": [
                              "B3 hücresini seçin.",
                              "'Mehmet' yazın.",
                              "B3 hücresine 'Mehmet' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "B3",
                              "successMessage": "Tebrikler! Hızlı Doldurma (Flash Fill) Temel Mantığı (Ctrl+E) görevini başarıyla tamamladınız.",
                              "expectedValue": "Mehmet"
                    }
          }
],
        quiz: {
          "id": "q4_3",
          "title": "Hızlı Doldurma (Flash Fill) Temel Mantığı (Ctrl+E) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_3_1",
                              "question": "Excel'de Hızlı Doldurmayı (Flash Fill) tetikleyen evrensel klavye kısayolu nedir?",
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
                                                  "text": "Ctrl + R"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Alt + E"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+E örüntü tanıma motorunu çalıştırır ve sütunu doldurur.",
                              "measuredSkill": "Yapay Örüntü Tanıma ve Hızlı Doldurma"
                    }
          ]
}
      },
      {
        id: "sec4_l4",
        phaseId: 4,
        unitId: "u4_4",
        title: "Özel Yapıştır: Değerleri Yapıştır (Values Only)",
        shortDesc: "Formül içeren hücreleri kopyalayıp arka plandaki dinamik formülden arındırarak saf sayı/metin olarak yapıştırma.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Özel Yapıştır",
        primaryGoal: "Formüllü hesaplamaları e-posta veya sunum dosyalarına yapıştırırken #BAŞV! hatası almamak.",
        prerequisites: ["sec4_l1"],
        commonMistakes: ["DÜŞEYARA veya toplam formülünü düz kopyala-yapıştır yapıp hücre kaymasıyla formülü bozmak"],
        successCriteria: "Değerleri Yapıştır komutunu (Ctrl+Alt+V > V) refleks haline getirmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Değerleri Yapıştır"],
        initialWorkbook: createTableSheet("s4_4", "DegerYapistirSayfasi", ["Formüllü Hücre", "Formül", "Değer Olarak Yapıştırılan"], [["Hesaplanan Satış", "=100*1.20", 120]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Yapıştır: Değerleri Yapıştır (Values Only)",
                    "description": "Formüllü hesaplamaları e-posta veya sunum dosyalarına yapıştırırken #BAŞV! hatası almamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_4",
                    "title": "Formülden Arındırma",
                    "explanation": "Bir hücrede =A2*B2 formülü varsa ve siz o hücreyi başka bir sayfaya kopyalarsanız adresler kayabilir. Kopyaladıktan sonra Sağ Tık > 'Değerler' (123 simgesi) dendiğinde sadece çıkan nihai sonuç yapıştırılır.",
                    "speechText": "Bir hücrede =A2*B2 formülü varsa ve siz o hücreyi başka bir sayfaya kopyalarsanız adresler kayabilir. Kopyaladıktan sonra Sağ Tık > 'Değerler' (123 simgesi) dendiğinde sadece çıkan nihai sonuç yapıştırılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t4_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine Özel Yapıştır penceresini açan kısayolu 'Ctrl+Alt+V' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Ctrl+Alt+V' yazın.",
                              "C4 hücresine 'Ctrl+Alt+V' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Özel Yapıştır: Değerleri Yapıştır (Values Only) görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+Alt+V"
                    }
          }
],
        quiz: {
          "id": "q4_4",
          "title": "Özel Yapıştır: Değerleri Yapıştır (Values Only) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_4_1",
                              "question": "Formüllü bir hücreyi formülünden arındırıp yalnızca çıkan net sonucu yapıştırmak için hangi seçenek kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Özel Yapıştır > Değerler (Values)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Normal Yapıştır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Biçimleri Yapıştır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formülleri Yapıştır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değerleri Yapıştır formülü yok eder ve hücreye saf sonucu yazar.",
                              "measuredSkill": "Veri Bütünlüğü ve Değer Olarak Saklama"
                    }
          ]
}
      },
      {
        id: "sec4_l5",
        phaseId: 4,
        unitId: "u4_5",
        title: "Özel Yapıştır: Biçimleri ve Formülleri Bağımsız Yapıştırma",
        shortDesc: "Yalnızca formülü koruyup kenarlıkları bozmamak veya yalnızca rengi/sayı biçimini kopyalamak.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Özel Yapıştır",
        primaryGoal: "Güzel tasarlanmış bir tablonun renklerini bozmadan arka plana formül yapıştırabilmek.",
        prerequisites: ["sec4_l4"],
        commonMistakes: ["Düz yapıştır yapıp hedef hücrenin özel kenarlık ve dolgu renklerini yok etmek"],
        successCriteria: "Biçimleri ve formülleri bağımsız yapıştırma seçeneklerini kullanabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Özel Yapıştır"],
        initialWorkbook: createTableSheet("s4_5", "BicimFormulYapistir", ["Kaynak", "Hedef", "İşlem"], [["Sarı Dolgulu Hücre", "Beyaz Hücre", "Yalnızca Biçimleri Yapıştır"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Yapıştır: Biçimleri ve Formülleri Bağımsız Yapıştırma",
                    "description": "Güzel tasarlanmış bir tablonun renklerini bozmadan arka plana formül yapıştırabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_5",
                    "title": "Hedef Tasarımı Korumak",
                    "explanation": "Özel Yapıştır penceresinde 'Biçimler' seçilirse sadece renk, yazı tipi ve sayı formatı aktarılır. 'Formüller' seçilirse renkler ellenmez, yalnızca matematiksel formül aktarılır.",
                    "speechText": "Özel Yapıştır penceresinde 'Biçimler' seçilirse sadece renk, yazı tipi ve sayı formatı aktarılır. 'Formüller' seçilirse renkler ellenmez, yalnızca matematiksel formül aktarılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t4_5_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine biçim aktarım komutunu 'Biçimleri Yapıştır' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Biçimleri Yapıştır' yazın.",
                              "D2 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Özel Yapıştır: Biçimleri ve Formülleri Bağımsız Yapıştırma görevini başarıyla tamamladınız.",
                              "expectedValue": "Biçimleri Yapıştır"
                    }
          }
],
        quiz: {
          "id": "q4_5",
          "title": "Özel Yapıştır: Biçimleri ve Formülleri Bağımsız Yapıştırma Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_5_1",
                              "question": "Bir tablonun tasarımını ve renklerini başka bir tabloya kopyalarken verilerin değişmemesi için ne seçilmelidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Özel Yapıştır > Biçimler (Formats)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Özel Yapıştır > Tümü"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Hepsini Sil"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Değerler"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Biçimleri Yapıştır verileri ellemeden yalnızca görsel stili uygular.",
                              "measuredSkill": "Biçim ve Tasarım Entegrasyonu"
                    }
          ]
}
      },
      {
        id: "sec4_l6",
        phaseId: 4,
        unitId: "u4_6",
        title: "Özel Yapıştır: Devrik Dönüşüm (Transpose) ile Satır/Sütun Değişimi",
        shortDesc: "Yatay satırlar halindeki verileri dikey sütunlara (veya tersi) tek tıkla dönüştürme.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Devrik Dönüşüm",
        primaryGoal: "Yatay tasarlanmış kullanışsız tabloları veritabanı uyumlu dikey tabloya çevirmek.",
        prerequisites: ["sec4_l5"],
        commonMistakes: ["Satırları sütunlara çevirmek için hücreleri tek tek kesip yapıştırmaya saatler harcamak"],
        successCriteria: "Devrik Dönüşüm (Transpose) seçeneğini uygulayabilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Devrik Dönüşüm", "Transpose"],
        initialWorkbook: createTableSheet("s4_6", "DevrikSayfasi", ["Ocak", "Şubat", "Mart"], [[100, 200, 300]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Yapıştır: Devrik Dönüşüm (Transpose) ile Satır/Sütun Değişimi",
                    "description": "Yatay tasarlanmış kullanışsız tabloları veritabanı uyumlu dikey tabloya çevirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_4",
                    "title": "Matrisi Döndürme",
                    "explanation": "Yatay 3 sütunluk A1:C2 alanını kopyalayıp boş bir yere sağ tıkladıktan sonra 'İşlemi Tersine Çevir' (Transpose / Devrik Dönüşüm) simgesine basarsanız yatay aylar alt alta dikey 3 satır haline gelir.",
                    "speechText": "Yatay 3 sütunluk A1:C2 alanını kopyalayıp boş bir yere sağ tıkladıktan sonra 'İşlemi Tersine Çevir' (Transpose / Devrik Dönüşüm) simgesine basarsanız yatay aylar alt alta dikey 3 satır haline gelir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t4_4_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine bu işlemin adını 'Devrik Dönüşüm' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Devrik Dönüşüm' yazın.",
                              "C4 hücresine 'Devrik Dönüşüm' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Özel Yapıştır: Devrik Dönüşüm (Transpose) ile Satır/Sütun Değişimi görevini başarıyla tamamladınız.",
                              "expectedValue": "Devrik Dönüşüm"
                    }
          }
],
        quiz: {
          "id": "q4_4",
          "title": "Özel Yapıştır: Devrik Dönüşüm (Transpose) ile Satır/Sütun Değişimi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_4_1",
                              "question": "Excel'de yatay verileri dikey sütunlara dönüştüren Özel Yapıştır aracı hangisidir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "İşlemi Tersine Çevir / Devrik Dönüşüm (Transpose)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Değerleri Yapıştır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Köprü Yapıştır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sütun Genişlikleri"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Transpose matrisin eksenlerini değiştirerek satırları sütun, sütunları satır yapar.",
                              "measuredSkill": "Matris ve Eksen Dönüşümü"
                    }
          ]
}
      },
      {
        id: "sec4_l7",
        phaseId: 4,
        unitId: "u4_7",
        title: "Özel Yapıştır: Matematiksel İşlemler (Toplu Çarpma ve Güncelleme)",
        shortDesc: "Bir hücredeki sayıyı kopyalayıp binlerce hücreye 'Çarp' veya 'Böl' diyerek tek saniyede %10 zam veya KDV ekleme.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Toplu Matematik",
        primaryGoal: "10.000 ürünün fiyatına formül sütunu açmadan anında %20 zam yansıtmak.",
        prerequisites: ["sec4_l4"],
        commonMistakes: ["Zam yapmak için yan tarafa formül yazıp sonra kopyalayıp tekrar değer yapıştırmak"],
        successCriteria: "Özel Yapıştır işlem (Çarp/Böl/Topla) modunu uygulayabilmek.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Özel Yapıştır İşlemleri"],
        initialWorkbook: createTableSheet("s4_7", "TopluIslemSayfasi", ["Ürün", "Mevcut Fiyat", "Zam Oranı"], [["Laptop", 20000, 1.1], ["Tablet", 10000, ""]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Yapıştır: Matematiksel İşlemler (Toplu Çarpma ve Güncelleme)",
                    "description": "10.000 ürünün fiyatına formül sütunu açmadan anında %20 zam yansıtmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_7",
                    "title": "Formülsüz Yerinde Hesaplama",
                    "explanation": "1.10 sayısını kopyalayıp fiyat sütununu seçtikten sonra Özel Yapıştır penceresinden 'Çarp' (Multiply) seçilirse tüm fiyatlar yerinde %10 artar; sütun sayısı artmaz.",
                    "speechText": "1.10 sayısını kopyalayıp fiyat sütununu seçtikten sonra Özel Yapıştır penceresinden 'Çarp' (Multiply) seçilirse tüm fiyatlar yerinde %10 artar; sütun sayısı artmaz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t4_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine 20.000 TL'nin %10 zamlı yeni değerini 22000 olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "22000 sayısını yazın.",
                              "D2 hücresine 22000 yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Özel Yapıştır: Matematiksel İşlemler (Toplu Çarpma ve Güncelleme) görevini başarıyla tamamladınız.",
                              "expectedValue": 22000
                    }
          }
],
        quiz: {
          "id": "q4_7",
          "title": "Özel Yapıştır: Matematiksel İşlemler (Toplu Çarpma ve Güncelleme) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_7_1",
                              "question": "Bir fiyat sütunundaki tüm sayılara tek seferde formül açmadan %10 eklemek için hangi yöntem en hızlıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "1.10 sayısını kopyalayıp sütuna Özel Yapıştır > Çarp (Multiply) uygulamak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hesap makinesiyle tek tek hesaplayıp yazmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sütunu silmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hepsine +10 yazmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Özel Yapıştır Çarp işlemi mevcut hücre değerlerini kopyalanan katsayıyla anında çarpar.",
                              "measuredSkill": "Yerinde Toplu Veri Dönüştürme"
                    }
          ]
}
      },
      {
        id: "sec4_l8",
        phaseId: 4,
        unitId: "u4_8",
        title: "Veri Türleri: Metin, Sayı ve Mantıksal Değerlerin Doğası",
        shortDesc: "Excel'in sayıları sağa, metinleri sola, mantıksal değerleri (DOĞRU/YANLIŞ) ise ortaya hizalama kuralı.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Veri Türleri",
        primaryGoal: "Hücredeki değerin gerçek bir sayı mı yoksa metin mi olduğunu hizalamasından anında anlamak.",
        prerequisites: ["sec1_l2"],
        commonMistakes: ["Sola hizalı metin sayıyı matematiksel formüle sokup hatalı sonuç almak"],
        successCriteria: "Veri türlerinin doğal hizalama kurallarını kavramak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Veri Türleri"],
        initialWorkbook: createTableSheet("s4_8", "VeriTurleriSayfasi", ["Veri Değeri", "Veri Türü", "Doğal Hizalama"], [[1500, "Sayı", "Sağa Hizalı"], ["Ahmet", "Metin", "Sola Hizalı"], ["DOĞRU", "Mantıksal", "Ortalanmış"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Veri Türleri: Metin, Sayı ve Mantıksal Değerlerin Doğası",
                    "description": "Hücredeki değerin gerçek bir sayı mı yoksa metin mi olduğunu hizalamasından anında anlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_8",
                    "title": "Hizalamanın Dili",
                    "explanation": "Excel'de hiçbir hizalama düğmesine basmadığınızda sayılar daima SAĞA yaslanır. Metinler SOLA yaslanır. Eğer bir sayı sola yaslı duruyorsa o sayı değil, metin olarak saklanmaktadır.",
                    "speechText": "Excel'de hiçbir hizalama düğmesine basmadığınızda sayılar daima SAĞA yaslanır. Metinler SOLA yaslanır. Eğer bir sayı sola yaslı duruyorsa o sayı değil, metin olarak saklanmaktadır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t4_8_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine sayıların doğal hizalanma yönünü 'Sağa Hizalı' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Sağa Hizalı' yazın.",
                              "D2 hücresine 'Sağa Hizalı' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Veri Türleri: Metin, Sayı ve Mantıksal Değerlerin Doğası görevini başarıyla tamamladınız.",
                              "expectedValue": "Sağa Hizalı"
                    }
          }
],
        quiz: {
          "id": "q4_8",
          "title": "Veri Türleri: Metin, Sayı ve Mantıksal Değerlerin Doğası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_8_1",
                              "question": "Excel'de biçimlendirilmemiş saf bir sayı hücresi varsayılan olarak nereye hizalanır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sağa"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sola"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ortaya"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yukarı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Sayılar basamak değerlerinin alt alta gelmesi için varsayılan olarak sağa hizalanır.",
                              "measuredSkill": "Veri Türü Teşhisi ve Hizalama Kuralları"
                    }
          ]
}
      },
      {
        id: "sec4_l9",
        phaseId: 4,
        unitId: "u4_9",
        title: "Sayı Olarak Saklanan Metin ve Yeşil Üçgen Hatası",
        shortDesc: "Hücrenin sol üst köşesinde beliren yeşil üçgen uyarısı ve 'Sayıya Dönüştür' temizliği.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Veri Temizleme",
        primaryGoal: "Muhasebe programlarından gelen ve toplanamayan metin sayıları gerçek sayıya çevirmek.",
        prerequisites: ["sec4_l8"],
        commonMistakes: ["Yeşil üçgenli sayıları TOPLA formülüne dahil edip sonucun 0 çıkmasına şaşırıp kalmak"],
        successCriteria: "Metin olarak saklanan sayıları topluca gerçek sayıya dönüştürebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Sayıya Dönüştür"],
        initialWorkbook: createTableSheet("s4_9", "MetinSayiSayfasi", ["Bozuk Sayı (Metin)", "Düzeltilmiş Gerçek Sayı"], [["'500", 500]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayı Olarak Saklanan Metin ve Yeşil Üçgen Hatası",
                    "description": "Muhasebe programlarından gelen ve toplanamayan metin sayıları gerçek sayıya çevirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_9",
                    "title": "Yeşil Üçgenin Sırrı",
                    "explanation": "Bir sayının başına tek tırnak (') konursa veya ERP'den metin gelirse yeşil üçgen belirir. TOPLA(A1:A10) bu sayıları metin gördüğü için toplamaz ve 0 verir. Ünlem ikonuna tıklayıp 'Sayıya Dönüştür' denmelidir.",
                    "speechText": "Bir sayının başına tek tırnak (') konursa veya ERP'den metin gelirse yeşil üçgen belirir. TOPLA(A1:A10) bu sayıları metin gördüğü için toplamaz ve 0 verir. Ünlem ikonuna tıklayıp 'Sayıya Dönüştür' denmelidir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t4_9_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine düzeltme komutunun adını 'Sayıya Dönüştür' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Sayıya Dönüştür' yazın.",
                              "C2 hücresine 'Sayıya Dönüştür' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Sayı Olarak Saklanan Metin ve Yeşil Üçgen Hatası görevini başarıyla tamamladınız.",
                              "expectedValue": "Sayıya Dönüştür"
                    }
          }
],
        quiz: {
          "id": "q4_9",
          "title": "Sayı Olarak Saklanan Metin ve Yeşil Üçgen Hatası Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_9_1",
                              "question": "TOPLA formülünün bir sütundaki sayıları toplamayıp 0 (sıfır) vermesinin en olası nedeni nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Sayıların hücrede metin (Text) formatında saklanıyor olması"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Sayıların çok büyük olması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Excel'in kapalı olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hücre renginin sarı olması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel'in TOPLA fonksiyonu metin biçimindeki sayıları yok sayar.",
                              "measuredSkill": "Veri Dönüşümü ve Hesaplama Hijyeni"
                    }
          ]
}
      },
      {
        id: "sec4_l10",
        phaseId: 4,
        unitId: "u4_10",
        title: "Bul ve Değiştir (Find & Replace - Ctrl+H) ile Toplu Düzenleme",
        shortDesc: "Tüm tablodaki hatalı kelimeleri veya karakterleri (noktayı virgüle) saniyeler içinde topluca değiştirme.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Bul ve Değiştir",
        primaryGoal: "Binlerce satırdaki 'İst' kısaltmalarını tek hamlede 'İstanbul' yapmak.",
        prerequisites: ["sec4_l1"],
        commonMistakes: ["Hepsini tek tek okuyup manuel değiştirmeye kalkmak"],
        successCriteria: "Ctrl+H kısayolunu ve 'Tümünü Değiştir' butonunu güvenle kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bul ve Değiştir", "Ctrl+H"],
        initialWorkbook: createTableSheet("s4_10", "BulDegistirSayfasi", ["Aranan Metin", "Yeni Değer"], [["İst", "İstanbul"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bul ve Değiştir (Find & Replace - Ctrl+H) ile Toplu Düzenleme",
                    "description": "Binlerce satırdaki 'İst' kısaltmalarını tek hamlede 'İstanbul' yapmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_10",
                    "title": "Toplu Düzeltme Gücü",
                    "explanation": "Ctrl + H kısayolu Bul ve Değiştir penceresini açar. 'Aranan' kutusuna eski değer, 'Yeni Değer' kutusuna hedef kelime yazılır. 'Tümünü Değiştir' dendiğinde Excel kaç eşleşmenin düzeltildiğini raporlar.",
                    "speechText": "Ctrl + H kısayolu Bul ve Değiştir penceresini açar. 'Aranan' kutusuna eski değer, 'Yeni Değer' kutusuna hedef kelime yazılır. 'Tümünü Değiştir' dendiğinde Excel kaç eşleşmenin düzeltildiğini raporlar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t4_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine Bul ve Değiştir kısayolunu 'Ctrl+H' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Ctrl+H' yazın.",
                              "C2 hücresine 'Ctrl+H' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Bul ve Değiştir (Find & Replace - Ctrl+H) ile Toplu Düzenleme görevini başarıyla tamamladınız.",
                              "expectedValue": "Ctrl+H"
                    }
          }
],
        quiz: {
          "id": "q4_10",
          "title": "Bul ve Değiştir (Find & Replace - Ctrl+H) ile Toplu Düzenleme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_10_1",
                              "question": "Excel'de Bul ve Değiştir (Find and Replace) penceresini açan doğrudan kısayol nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Ctrl + H"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Ctrl + F"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Ctrl + G"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + P"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Ctrl+F sadece Bul penceresini açar, Ctrl+H ise doğrudan Değiştir sekmesini açar.",
                              "measuredSkill": "Toplu Metin ve Veri Değiştirme"
                    }
          ]
}
      },
      {
        id: "sec4_l11",
        phaseId: 4,
        unitId: "u4_11",
        title: "Bölüm 4 Veri Girişi ve Verimlilik Final Sınavı",
        shortDesc: "Doldurma tutamacı, özel listeler, Flash Fill, Özel Yapıştır çeşitleri ve veri türleri final testi.",
        category: "Veri Girişi ve Verimlilik",
        groupTitle: "Bölüm Sınavı",
        primaryGoal: "4. Bölümün tüm operasyonel hız ve veri girişi kazanımlarını tam başarıyla sergilemek.",
        prerequisites: ["sec4_l1", "sec4_l3", "sec4_l4", "sec4_l8"],
        commonMistakes: ["Acele edip veri türü kurallarını karıştırmak"],
        successCriteria: "Bölüm 4 değerlendirme testini tam puanla geçmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Bölüm Sınavı"],
        initialWorkbook: createTableSheet("s4_11", "Bolum4Final", ["Kazanım", "Durum"], [["Otomatik Doldurma ve Flash Fill", "Kazanıldı"], ["Özel Yapıştır ve Devrik Dönüşüm", "Kazanıldı"], ["Veri Türleri Hijyeni", "Kazanıldı"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 4 Veri Girişi ve Verimlilik Final Sınavı",
                    "description": "4. Bölümün tüm operasyonel hız ve veri girişi kazanımlarını tam başarıyla sergilemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts4_11",
                    "title": "Verimlilik Büyük Ustası",
                    "explanation": "Tebrikler! Veri girişi, doldurma otomasyonları ve Özel Yapıştır teknikleriyle çalışma hızınızı 10 katına çıkardınız. Şimdi hücre biçimlendirme ve profesyonel tablo tasarımına geçiyoruz.",
                    "speechText": "Tebrikler! Veri girişi, doldurma otomasyonları ve Özel Yapıştır teknikleriyle çalışma hızınızı 10 katına çıkardınız. Şimdi hücre biçimlendirme ve profesyonel tablo tasarımına geçiyoruz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C4"
          }
],
        tasks: [
          {
                    "id": "t4_11_1",
                    "stepNumber": 1,
                    "instruction": "C4 hücresine mezuniyet onayını 'Bölüm 4 Tamamlandı' olarak yazın.",
                    "targetCell": "C4",
                    "hints": [
                              "C4 hücresini seçin.",
                              "'Bölüm 4 Tamamlandı' yazın.",
                              "C4 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C4",
                              "successMessage": "Tebrikler! Bölüm 4 Veri Girişi ve Verimlilik Final Sınavı görevini başarıyla tamamladınız.",
                              "expectedValue": "Bölüm 4 Tamamlandı"
                    }
          }
],
        quiz: {
          "id": "q4_11",
          "title": "Bölüm 4 Veri Girişi ve Verimlilik Final Sınavı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_4_11_1",
                              "question": "Bir formülün ürettiği dinamik sonucu statik bir kalıcı sayıya çevirmek için hangi işlem yapılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Kopyala -> Özel Yapıştır -> Değerler (Values)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Yeniden başlatmak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Satırı silmek"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Yazı rengini değiştirmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Değerleri Yapıştır formül bağımlılığını kaldırır ve statik çıktıyı saklar.",
                              "measuredSkill": "Bölüm 4 Genel Yetkinlik ve Veri Verimliliği"
                    }
          ]
}
      }
    ]
  },
  {
    id: 5,
    category: "Hücre Biçimlendirme",
    title: "5. Hücre Biçimlendirme ve Profesyonel Tablolar",
    subtitle: "Sayı Formatları, Para Birimi, Özel Sayı Biçimi, Kenarlıklar ve Biçim Boyacısı",
    iconName: "Palette",
    description: "Sayı, basamak ve ondalık formatları, Para Birimi vs Muhasebe farkları, Yüzde (%) dönüşümü, Özel Sayı Biçimleri (#,##0 'TL'), Seçim Arasında Ortala, kenarlıklar, kurumsal renk paletleri ve Biçim Boyacısı.",
    lessons: [
      {
        id: "sec5_l1",
        phaseId: 5,
        unitId: "u5_1",
        title: "Sayı, Basamak ve Ondalık Formatlarını Ayarlama",
        shortDesc: "Binlik ayraç (1.000.000) ekleme ve ondalık basamak sayısını artırma/azaltma düğmeleri.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Sayı Formatı",
        primaryGoal: "Uzun sayıların gözü yormadan kolayca okunmasını sağlamak.",
        prerequisites: ["sec4_l11"],
        commonMistakes: ["Binlik ayracı göstermek için sayıların arasına elle nokta koyup sayıyı metne dönüştürmek"],
        successCriteria: "Binlik ayraç ve ondalık basamak yönetimini başarıyla uygulamak.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Binlik Ayraç"],
        initialWorkbook: createTableSheet("s5_1", "SayiFormatSayfasi", ["Ham Sayı", "Görünmesi Gereken Biçim"], [[1250000, "1.250.000,00"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Sayı, Basamak ve Ondalık Formatlarını Ayarlama",
                    "description": "Uzun sayıların gözü yormadan kolayca okunmasını sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_1",
                    "title": "Binlik Ayraç Rahatlığı",
                    "explanation": "1250000 sayısı tek bakışta algılanamaz. Giriş sekmesindeki 'Virgül Stili' (Binlik Ayraç) butonuna basıldığında Excel sayıyı bozmadan görünümünü '1.250.000,00' yapar.",
                    "speechText": "1250000 sayısı tek bakışta algılanamaz. Giriş sekmesindeki 'Virgül Stili' (Binlik Ayraç) butonuna basıldığında Excel sayıyı bozmadan görünümünü '1.250.000,00' yapar. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_1_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine binlik ayraçlı formatı '1.250.000' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'1.250.000' yazın.",
                              "C2 hücresine '1.250.000' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Sayı, Basamak ve Ondalık Formatlarını Ayarlama görevini başarıyla tamamladınız.",
                              "expectedValue": "1.250.000"
                    }
          }
],
        quiz: {
          "id": "q5_1",
          "title": "Sayı, Basamak ve Ondalık Formatlarını Ayarlama Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_1_1",
                              "question": "Excel'de büyük sayıların okunmasını kolaylaştırmak için hangi stil kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Binlik Ayraç (Virgül Stili)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Metin Biçimi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Tarih Formatı"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Köprü"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Binlik ayraç sayıları üçer basamaklı gruplara ayırarak okunabilirliği artırır.",
                              "measuredSkill": "Sayısal Biçimlendirme ve Basamak Yönetimi"
                    }
          ]
}
      },
      {
        id: "sec5_l2",
        phaseId: 5,
        unitId: "u5_2",
        title: "Para Birimi (₺, $, €) ve Muhasebe Biçimi Farkları",
        shortDesc: "Para Birimi (Currency) ile Muhasebe (Accounting) biçimleri arasındaki kritik hizalama farkı.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Finansal Biçim",
        primaryGoal: "Mali tablolarda para birimi simgelerini sütunun en soluna hizalayarak profesyonel bilanço görünümü sağlamak.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Muhasebe formatında sıfır (0) değerinin tire (-) olarak gösterildiğini bilmeyip paniklemek"],
        successCriteria: "Para Birimi ve Muhasebe formatlarını ayırt edebilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Muhasebe Formatı"],
        initialWorkbook: createTableSheet("s5_2", "ParaBirimiSayfasi", ["Format Tipi", "Simge Konumu", "Sıfır Değeri"], [["Para Birimi", "Sayının hemen yanında (₺100)", "₺0,00"], ["Muhasebe", "Sütunun en solunda (₺    100)", "₺   -"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Para Birimi (₺, $, €) ve Muhasebe Biçimi Farkları",
                    "description": "Mali tablolarda para birimi simgelerini sütunun en soluna hizalayarak profesyonel bilanço görünümü sağlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_2",
                    "title": "Muhasebe Standartı",
                    "explanation": "Kurumsal finans raporlarında daima 'Muhasebe' (Accounting) biçimi tercih edilir. Çünkü para simgesi en sola yaslanır, sayılar sağa yaslanır ve sıfır (0) değerleri estetik bir tire (-) olarak gösterilir.",
                    "speechText": "Kurumsal finans raporlarında daima 'Muhasebe' (Accounting) biçimi tercih edilir. Çünkü para simgesi en sola yaslanır, sayılar sağa yaslanır ve sıfır (0) değerleri estetik bir tire (-) olarak gösterilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t5_2_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine finansal raporlarda önerilen formatı 'Muhasebe' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Muhasebe' yazın.",
                              "D2 hücresine 'Muhasebe' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Para Birimi (₺, $, €) ve Muhasebe Biçimi Farkları görevini başarıyla tamamladınız.",
                              "expectedValue": "Muhasebe"
                    }
          }
],
        quiz: {
          "id": "q5_2",
          "title": "Para Birimi (₺, $, €) ve Muhasebe Biçimi Farkları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_2_1",
                              "question": "Muhasebe (Accounting) sayı biçiminde sıfır (0) değeri ekranda nasıl görüntülenir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Tire işareti (-) olarak"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "0,00 olarak"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boş hücre olarak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Hata olarak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Muhasebe standardında sıfır bakiyeler görsel kirlilik yaratmaması için tire (-) ile gösterilir.",
                              "measuredSkill": "Finansal Muhasebe Biçim Ayrımı"
                    }
          ]
}
      },
      {
        id: "sec5_l3",
        phaseId: 5,
        unitId: "u5_3",
        title: "Yüzde (%) Formatı ve Matematiksel Doğruluğu",
        shortDesc: "Excel'de 0.15 değerinin %15 anlamına gelmesi ve yüzde düğmesine basıldığında sayının 100 ile çarpılması kuralı.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Yüzde Formatı",
        primaryGoal: "Yüzde hesaplamalarında 15 yazıp yüzdeye basarak sayıyı %1500 yapma hatasını önlemek.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Hücreye 15 yazıp '%' butonuna basarak sayıyı %1500 yapmak (0.15 yazılmalıdır)"],
        successCriteria: "Yüzde matematiksel mantığını doğru uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Yüzde Formatı", "%"],
        initialWorkbook: createTableSheet("s5_3", "YuzdeSayfasi", ["Ondalık Sayı", "Yüzde Görünümü"], [[0.25, "%25"], [0.08, "%8"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Yüzde (%) Formatı ve Matematiksel Doğruluğu",
                    "description": "Yüzde hesaplamalarında 15 yazıp yüzdeye basarak sayıyı %1500 yapma hatasını önlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_3",
                    "title": "Yüzde Matematiktir",
                    "explanation": "Excel'de %100 tam 1 sayısıdır. %50 ise 0.5'tir. Bu yüzden bir hücreye yüzde uygulamadan önce sayıyı ondalık girmeli (0.18) veya doğrudan klavyeden '%18' yazmalısınız.",
                    "speechText": "Excel'de %100 tam 1 sayısıdır. %50 ise 0.5'tir. Bu yüzden bir hücreye yüzde uygulamadan önce sayıyı ondalık girmeli (0.18) veya doğrudan klavyeden '%18' yazmalısınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_3_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine 0.25 sayısının yüzde karşılığını '%25' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'%25' yazın.",
                              "C2 hücresine '%25' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Yüzde (%) Formatı ve Matematiksel Doğruluğu görevini başarıyla tamamladınız.",
                              "expectedValue": "%25"
                    }
          }
],
        quiz: {
          "id": "q5_3",
          "title": "Yüzde (%) Formatı ve Matematiksel Doğruluğu Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_3_1",
                              "question": "Excel'de bir hücreye 0.05 yazıp Yüzde (%) Stili butonuna basıldığında hücrede ne görünür?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "%5"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "%50"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "%0.05"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "5"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Excel sayıyı 100 ile çarpar ve yanına yüzde işareti koyar: 0.05 * 100 = %5.",
                              "measuredSkill": "Yüzde Oran ve Matematiksel Biçimlendirme"
                    }
          ]
}
      },
      {
        id: "sec5_l4",
        phaseId: 5,
        unitId: "u5_4",
        title: "Özel Sayı Biçimleri (#,##0 'TL' ve 00000 Formatı)",
        shortDesc: "Hücreye metin yazdırmadan sonuna 'TL' veya 'Adet' ekleme ve TC Kimlik için baştaki sıfırları koruma (00000).",
        category: "Hücre Biçimlendirme",
        groupTitle: "Özel Biçimlendirme",
        primaryGoal: "Toplanabilir sayısal hücrelerin yanına 'Adet' veya 'Kg' yazıp formül çalışabilirliğini korumak.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Hücreye '50 Adet' yazıp sayıyı metne dönüştürerek toplanamaz hale getirmek"],
        successCriteria: "Özel Sayı Biçimi kodlama sözdizimini kavramak.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Özel Sayı Biçimi"],
        initialWorkbook: createTableSheet("s5_4", "OzelBicimSayfasi", ["Sayı", "Özel Biçim Kodu", "Görünen Sonuç"], [[50, "#,##0 \"Adet\"", "50 Adet"], [123, "00000", "00123"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Özel Sayı Biçimleri (#,##0 'TL' ve 00000 Formatı)",
                    "description": "Toplanabilir sayısal hücrelerin yanına 'Adet' veya 'Kg' yazıp formül çalışabilirliğini korumak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_4",
                    "title": "Görünüm İllüzyonu",
                    "explanation": "Hücre Biçimlendir > Özel (Custom) alanına #,##0 'Adet' yazarsanız hücre ekranda '50 Adet' görünür ama arka planda saf 50 sayısı kalır; formüllerle toplanabilir!",
                    "speechText": "Hücre Biçimlendir > Özel (Custom) alanına #,##0 'Adet' yazarsanız hücre ekranda '50 Adet' görünür ama arka planda saf 50 sayısı kalır; formüllerle toplanabilir! Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t5_4_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine formatlanan görünüm olarak '50 Adet' yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'50 Adet' yazın.",
                              "D2 hücresine '50 Adet' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Özel Sayı Biçimleri (#,##0 'TL' ve 00000 Formatı) görevini başarıyla tamamladınız.",
                              "expectedValue": "50 Adet"
                    }
          }
],
        quiz: {
          "id": "q5_4",
          "title": "Özel Sayı Biçimleri (#,##0 'TL' ve 00000 Formatı) Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_4_1",
                              "question": "Hücreye '5 Adet' yazıldığında formüllerin bu hücreyi toplayabilmesi için ne yapılmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücreye sadece 5 yazılmalı, 'Adet' ifadesi Özel Sayı Biçimi (#,##0 \"Adet\") ile eklenmelidir"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreye doğrudan '5 Adet' yazılmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Metin formatı seçilmelidir"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Mümkün değildir"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Özel sayı biçimi görünümü değiştirir ama değeri sayı olarak korur.",
                              "measuredSkill": "Özel Sayı Kodlaması ve Biçim Mühendisliği"
                    }
          ]
}
      },
      {
        id: "sec5_l5",
        phaseId: 5,
        unitId: "u5_5",
        title: "Metin Hizalama, Dikey Hizalama ve Metin Yönlendirme",
        shortDesc: "Geniş satırlarda metni dikeyde ortalama ve dar sütun başlıklarını 45 derece eğik açılandırma.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Hizalama",
        primaryGoal: "Tablo başlıklarını dikeyde ve yatayda kusursuz ortalayabilmek.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Yatayda ortalayıp dikeyde dipte unutan asimetrik başlıklar tasarlamak"],
        successCriteria: "Yatay ve dikey hizalama kombinasyonlarını uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Hizalama"],
        initialWorkbook: createTableSheet("s5_5", "HizalamaSayfasi", ["Başlık Metni", "Yatay Hizalama", "Dikey Hizalama"], [["Rapor Başlığı", "Ortalanmış", "Ortalanmış"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metin Hizalama, Dikey Hizalama ve Metin Yönlendirme",
                    "description": "Tablo başlıklarını dikeyde ve yatayda kusursuz ortalayabilmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_5",
                    "title": "Kusursuz Ortalama",
                    "explanation": "Giriş sekmesindeki 6 hizalama düğmesiyle metin hem yatayda (Sol, Orta, Sağ) hem dikeyde (Üst, Orta, Alt) hizalanır. İki orta düğmesine basıldığında metin hücrenin tam kalbine oturur.",
                    "speechText": "Giriş sekmesindeki 6 hizalama düğmesiyle metin hem yatayda (Sol, Orta, Sağ) hem dikeyde (Üst, Orta, Alt) hizalanır. İki orta düğmesine basıldığında metin hücrenin tam kalbine oturur. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t5_5_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine dikey hizalama terimini 'Ortalanmış' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Ortalanmış' yazın.",
                              "D2 hücresine 'Ortalanmış' yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Metin Hizalama, Dikey Hizalama ve Metin Yönlendirme görevini başarıyla tamamladınız.",
                              "expectedValue": "Ortalanmış"
                    }
          }
],
        quiz: {
          "id": "q5_5",
          "title": "Metin Hizalama, Dikey Hizalama ve Metin Yönlendirme Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_5_1",
                              "question": "Excel'de uzun sütun başlıklarını dar sütunlara sığdırmak için hangi yönlendirme kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Metin Yönlendirme (Saat Yönünün Tersine Açılı / Dikey Metin)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreyi silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazı tipini kaldırmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Sayfayı küçültmek"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Açılı metin yönlendirme dar sütunlarda okunabilirliği korur.",
                              "measuredSkill": "Hizalama ve Açısal Yerleşim"
                    }
          ]
}
      },
      {
        id: "sec5_l6",
        phaseId: 5,
        unitId: "u5_6",
        title: "Metni Kaydır (Wrap Text) ile Satır İçi Çok Satırlı Başlıklar",
        shortDesc: "Sütun genişliğini artırmadan uzun cümlelerin hücre içinde otomatik alt satıra geçmesini sağlama.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Metni Kaydır",
        primaryGoal: "Tablo sütunlarının aşırı genişleyip ekranı kaplamasını önlemek.",
        prerequisites: ["sec5_l5"],
        commonMistakes: ["Hücre içinde alt satıra geçmek için Enter'a basıp yanlışlıkla alt hücreye geçmek (Alt+Enter basılmalıdır)"],
        successCriteria: "Metni Kaydır özelliğini ve Alt+Enter satır sonu kısayolunu kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Metni Kaydır", "Alt+Enter"],
        initialWorkbook: createTableSheet("s5_6", "MetniKaydirSayfasi", ["Uzun Başlık", "Özellik"], [["Toplam Gerçekleşen Satış Tutarı", "Metni Kaydır Aktif"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Metni Kaydır (Wrap Text) ile Satır İçi Çok Satırlı Başlıklar",
                    "description": "Tablo sütunlarının aşırı genişleyip ekranı kaplamasını önlemek."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_6",
                    "title": "Hücre İçi Alt Satır",
                    "explanation": "Giriş sekmesindeki 'Metni Kaydır' (Wrap Text) butonu sütun genişliği dolduğunda kelimeleri alt satıra taşır. Manuel olarak belirli bir kelimeden alt satıra geçmek için ise Alt + Enter tuşuna basılır.",
                    "speechText": "Giriş sekmesindeki 'Metni Kaydır' (Wrap Text) butonu sütun genişliği dolduğunda kelimeleri alt satıra taşır. Manuel olarak belirli bir kelimeden alt satıra geçmek için ise Alt + Enter tuşuna basılır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_6_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine hücre içi satır atlama kısayolunu 'Alt+Enter' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Alt+Enter' yazın.",
                              "C2 hücresine 'Alt+Enter' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Metni Kaydır (Wrap Text) ile Satır İçi Çok Satırlı Başlıklar görevini başarıyla tamamladınız.",
                              "expectedValue": "Alt+Enter"
                    }
          }
],
        quiz: {
          "id": "q5_6",
          "title": "Metni Kaydır (Wrap Text) ile Satır İçi Çok Satırlı Başlıklar Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_6_1",
                              "question": "Excel'de aynı hücrenin içinde yazarken alt satıra geçmek için hangi klavye kısayolu kullanılır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Alt + Enter"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Enter"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Shift + Enter"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Ctrl + Enter"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Alt+Enter hücre içinde zorunlu satır sonu (line break) ekler.",
                              "measuredSkill": "Hücre İçi Tipografi ve Metin Kaydırma"
                    }
          ]
}
      },
      {
        id: "sec5_l7",
        phaseId: 5,
        unitId: "u5_7",
        title: "Hücre Birleştirme Riskleri ve 'Seçim Arasında Ortala'",
        shortDesc: "Birleştir ve Ortala (Merge & Center) aracının filtre ve sıralamayı felç etmesi ve güvenli alternatif olan 'Center Across Selection'.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Kurumsal Tasarım",
        primaryGoal: "Tabloları birleştirmeden ortalayarak VBA ve filtreleme hatalarını sıfıra indirmek.",
        prerequisites: ["sec3_l11"],
        commonMistakes: ["Tablo başlıklarını birleştirip sonra sıralama yapmaya çalışınca hata almak"],
        successCriteria: "Hücre Biçimlendir > Hizalama > 'Seçim Arasında Ortala' tekniğini uygulamak.",
        level: "İleri",
        durationMinutes: 12,
        functionsUsed: ["Seçim Arasında Ortala"],
        initialWorkbook: createTableSheet("s5_7", "BirlestirRiskSayfasi", ["Yöntem", "Sıralama Uyumlu Mu?", "Filtre Uyumlu Mu?"], [["Birleştir ve Ortala (Merge)", "HAYIR (Hata Verir)", "HAYIR"], ["Seçim Arasında Ortala", "EVET (Kusursuz)", "EVET"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre Birleştirme Riskleri ve 'Seçim Arasında Ortala'",
                    "description": "Tabloları birleştirmeden ortalayarak VBA ve filtreleme hatalarını sıfıra indirmek."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_7",
                    "title": "Birleştirmenin Zehirli Etkisi",
                    "explanation": "Profesyonel Excel uzmanları asla 'Birleştir ve Ortala' (Merge & Center) kullanmaz; çünkü hücreleri birleştirmek sıralama, filtre ve formülleri bozar. Bunun yerine A1:D1 seçilir > Hücre Biçimlendir > 'Seçim Arasında Ortala' denir. Hücreler bağımsız kalır ama başlık ortalanır!",
                    "speechText": "Profesyonel Excel uzmanları asla 'Birleştir ve Ortala' (Merge & Center) kullanmaz; çünkü hücreleri birleştirmek sıralama, filtre ve formülleri bozar. Bunun yerine A1:D1 seçilir > Hücre Biçimlendir > 'Seçim Arasında Ortala' denir. Hücreler bağımsız kalır ama başlık ortalanır! Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t5_7_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine profesyonel başlık tekniğinin adını 'Seçim Arasında Ortala' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Seçim Arasında Ortala' yazın.",
                              "D2 hücresine metni yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Hücre Birleştirme Riskleri ve 'Seçim Arasında Ortala' görevini başarıyla tamamladınız.",
                              "expectedValue": "Seçim Arasında Ortala"
                    }
          }
],
        quiz: {
          "id": "q5_7",
          "title": "Hücre Birleştirme Riskleri ve 'Seçim Arasında Ortala' Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_7_1",
                              "question": "Kurumsal Excel modellerinde hücreleri birleştirmeden (Merge yapmadan) başlığı ortalamanın güvenli yolu nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücre Biçimlendir > Hizalama > Seçim Arasında Ortala (Center Across Selection)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Hücreleri silmek"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Boşluk tuşuna basarak metni kaydırmak"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Word'de yazıp yapıştırmak"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Seçim Arasında Ortala hücrelerin mimari yapısını bozmadan görsel ortalama sağlar.",
                              "measuredSkill": "Veri Mimarisini Korumalı Başlık Tasarımı"
                    }
          ]
}
      },
      {
        id: "sec5_l8",
        phaseId: 5,
        unitId: "u5_8",
        title: "Kenarlık Çeşitleri, Çift Çizgi Dip Toplam ve Izgara Tasarımı",
        shortDesc: "İnce gri kenarlıklar, koyu başlık alt çizgisi ve muhasebe standardı olan Çift Alt Kenarlık (Double Bottom Line).",
        category: "Hücre Biçimlendirme",
        groupTitle: "Kenarlık Tasarımı",
        primaryGoal: "Raporun dip toplamını çift alt çizgiyle vurgulayarak resmi muhasebe hiyerarşisi oluşturmak.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Tüm tabloyu kalın siyah kenarlıklarla çevreleyip hapishane parmaklığı gibi boğucu tablolar tasarlamak"],
        successCriteria: "Kurumsal kenarlık hiyerarşisini uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Kenarlıklar"],
        initialWorkbook: createTableSheet("s5_8", "KenarlikSayfasi", ["Tablo Bölümü", "Önerilen Kenarlık"], [["Başlık Satırı", "Kalın Alt Kenarlık"], ["Veri Gövdesi", "İnce Açık Gri Kenarlık"], ["Dip Toplam", "Üst Tek Çizgi, Alt Çift Çizgi"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Kenarlık Çeşitleri, Çift Çizgi Dip Toplam ve Izgara Tasarımı",
                    "description": "Raporun dip toplamını çift alt çizgiyle vurgulayarak resmi muhasebe hiyerarşisi oluşturmak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_8",
                    "title": "Muhasebe Dip Çift Çizgisi",
                    "explanation": "Dünya finans standardında bir tablonun bittiğini ve toplamın nihai olduğunu göstermek için toplam hücresinin altına 'Çift Alt Kenarlık' (Double Bottom Border) çekilir.",
                    "speechText": "Dünya finans standardında bir tablonun bittiğini ve toplamın nihai olduğunu göstermek için toplam hücresinin altına 'Çift Alt Kenarlık' (Double Bottom Border) çekilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_8_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine dip toplam standardını 'Çift Alt Kenarlık' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Çift Alt Kenarlık' yazın.",
                              "C2 hücresine 'Çift Alt Kenarlık' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Kenarlık Çeşitleri, Çift Çizgi Dip Toplam ve Izgara Tasarımı görevini başarıyla tamamladınız.",
                              "expectedValue": "Çift Alt Kenarlık"
                    }
          }
],
        quiz: {
          "id": "q5_8",
          "title": "Kenarlık Çeşitleri, Çift Çizgi Dip Toplam ve Izgara Tasarımı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_8_1",
                              "question": "Finansal tablolarda nihai dip toplam satırının altına hangi kenarlık stili çekilir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çift Alt Kenarlık (Top and Double Bottom Border)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Kesikli çizgi"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Noktalı çizgi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Kenarlık çekilmez"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Üst tek çizgi hesaplamayı, alt çift çizgi ise nihai mali kapanışı simgeler.",
                              "measuredSkill": "Finansal Kenarlık Tipografisi"
                    }
          ]
}
      },
      {
        id: "sec5_l9",
        phaseId: 5,
        unitId: "u5_9",
        title: "Dolgu Renkleri ve Profesyonel Kurumsal Renk Paleti Standartları",
        shortDesc: "Gözü yormayan pastel tonlar, açık gri/lacivert kurumsal paletler ve kontrast kuralları.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Renk Paleti",
        primaryGoal: "Göz yoran parlak neon renkler yerine C-Level sunumlara yakışır asil kurumsal tablolar tasarlamak.",
        prerequisites: ["sec5_l8"],
        commonMistakes: ["Parlak sarı dolgu üzerine beyaz yazı yazıp okunamaz hale getirmek"],
        successCriteria: "Kurumsal renk teorisini ve kontrast dengesini uygulayabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Dolgu Rengi", "Renk Teorisi"],
        initialWorkbook: createTableSheet("s5_9", "RenkPaletiSayfasi", ["Eleman", "Önerilen Dolgu Rengi", "Yazı Rengi"], [["Tablo Başlığı", "Koyu Lacivert / Koyu Gri", "Beyaz (Yüksek Kontrast)"], ["Zebra Satırlar", "%5 Açık Gri Dolgu", "Koyu Gri / Siyah"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Dolgu Renkleri ve Profesyonel Kurumsal Renk Paleti Standartları",
                    "description": "Göz yoran parlak neon renkler yerine C-Level sunumlara yakışır asil kurumsal tablolar tasarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_9",
                    "title": "Anti-Slop Renk Felsefesi",
                    "explanation": "Profesyonel Excel tasarımında parlak kırmızı, neon sarı veya cırtlak yeşil kullanılmaz. Başlıklarda kurumsal koyu lacivert, veri satırlarında hafif gri geçişler (Zebra satır) tercih edilir.",
                    "speechText": "Profesyonel Excel tasarımında parlak kırmızı, neon sarı veya cırtlak yeşil kullanılmaz. Başlıklarda kurumsal koyu lacivert, veri satırlarında hafif gri geçişler (Zebra satır) tercih edilir. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "D2"
          }
],
        tasks: [
          {
                    "id": "t5_9_1",
                    "stepNumber": 1,
                    "instruction": "D2 hücresine yüksek kontrast kuralını 'Yüksek Kontrast' olarak yazın.",
                    "targetCell": "D2",
                    "hints": [
                              "D2 hücresini seçin.",
                              "'Yüksek Kontrast' yazın.",
                              "D2 hücresine 'Yüksek Kontrast' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "D2",
                              "successMessage": "Tebrikler! Dolgu Renkleri ve Profesyonel Kurumsal Renk Paleti Standartları görevini başarıyla tamamladınız.",
                              "expectedValue": "Yüksek Kontrast"
                    }
          }
],
        quiz: {
          "id": "q5_9",
          "title": "Dolgu Renkleri ve Profesyonel Kurumsal Renk Paleti Standartları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_9_1",
                              "question": "Koyu lacivert dolgulu bir başlık hücresinde metnin rahat okunması için yazı tipi rengi ne olmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Beyaz veya çok açık gri"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Siyah"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Koyu mavi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Koyu yeşil"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Koyu zemin üzerine açık renk yazı (yüksek kontrast) okunabilirliğin temel kuralıdır.",
                              "measuredSkill": "Görsel Hiyerarşi ve Renk Kontrastı"
                    }
          ]
}
      },
      {
        id: "sec5_l10",
        phaseId: 5,
        unitId: "u5_10",
        title: "Biçim Boyacısı (Format Painter) Tek ve Çift Tıklama Mantığı",
        shortDesc: "Bir hücrenin tüm stilini kopyalayıp tek tıkla bir alana veya çift tıklayarak onlarca farklı tabloya aralıksız uygulama.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Biçim Boyacısı",
        primaryGoal: "Her yeni tablo için sıfırdan renk, kenarlık ve font seçmek yerine stili tek saniyede kopyalamak.",
        prerequisites: ["sec5_l1"],
        commonMistakes: ["Birden fazla yere biçim uygularken her seferinde Biçim Boyacısı butonuna yeniden tıklamak"],
        successCriteria: "Biçim boyacısına çift tıklama gücünü kullanabilmek.",
        level: "Başlangıç",
        durationMinutes: 10,
        functionsUsed: ["Biçim Boyacısı"],
        initialWorkbook: createTableSheet("s5_10", "BicimBoyacisiSayfasi", ["Tıklama Şekli", "Etki"], [["Tek Tıklama", "Biçimi 1 kez uygular ve kapanır"], ["Çift Tıklama", "Esc tuşuna basana kadar aralıksız biçim boyar"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Biçim Boyacısı (Format Painter) Tek ve Çift Tıklama Mantığı",
                    "description": "Her yeni tablo için sıfırdan renk, kenarlık ve font seçmek yerine stili tek saniyede kopyalamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_10",
                    "title": "Seri Biçim Boyama",
                    "explanation": "Biçimini beğendiğiniz hücreyi seçip Giriş sekmesindeki fırça simgesine (Biçim Boyacısı) ÇİFT tıklarsanız, fırça kilitlenir. Siz sayfadaki 20 farklı hücreye tıklasanız bile hepsini o biçime boyar. İşiniz bitince Esc'ye basarsınız.",
                    "speechText": "Biçimini beğendiğiniz hücreyi seçip Giriş sekmesindeki fırça simgesine (Biçim Boyacısı) ÇİFT tıklarsanız, fırça kilitlenir. Siz sayfadaki 20 farklı hücreye tıklasanız bile hepsini o biçime boyar. İşiniz bitince Esc'ye basarsınız. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_10_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine aralıksız boyama yöntemini 'Çift Tıklama' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Çift Tıklama' yazın.",
                              "C2 hücresine 'Çift Tıklama' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Biçim Boyacısı (Format Painter) Tek ve Çift Tıklama Mantığı görevini başarıyla tamamladınız.",
                              "expectedValue": "Çift Tıklama"
                    }
          }
],
        quiz: {
          "id": "q5_10",
          "title": "Biçim Boyacısı (Format Painter) Tek ve Çift Tıklama Mantığı Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_10_1",
                              "question": "Biçim Boyacısı fırçasının birden fazla farklı alana aralıksız uygulanabilmesi için simgeye nasıl tıklanmalıdır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Çift tıklanmalıdır (Double Click)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tek tıklanmalıdır"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Sağ tıklanmalıdır"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Tıklanmamalıdır"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Çift tıklama biçim boyacısını kilitler ve Esc tuşuna basılana kadar aktif tutar.",
                              "measuredSkill": "Biçim Kopyalama ve Operasyonel Hız"
                    }
          ]
}
      },
      {
        id: "sec5_l11",
        phaseId: 5,
        unitId: "u5_11",
        title: "Hücre Stilleri (Cell Styles) ile Kurumsal Tasarım Şablonları",
        shortDesc: "Şirket renk standartlarını Hücre Stilleri galerisine kaydedip tek tıkla 'Başlık', 'Vurgu' veya 'Girdi' stili uygulama.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Stil Mimarisi",
        primaryGoal: "Tüm şirketin hazırladığı Excel tablolarında tek tip kurumsal tasarım standardı yakalamak.",
        prerequisites: ["sec5_l9"],
        commonMistakes: ["Her personelin kendi zevkine göre uyumsuz renkler seçmesi"],
        successCriteria: "Hücre Stilleri galerisini yönetebilmek.",
        level: "Orta",
        durationMinutes: 11,
        functionsUsed: ["Hücre Stilleri"],
        initialWorkbook: createTableSheet("s5_11", "HucreStilleriSayfasi", ["Hazır Stil Adı", "Kullanım Amacı"], [["Girdi (Input)", "Kullanıcının veri gireceği hücreler (Açık Turuncu/Sarı)"], ["Hesaplama", "Formüllü hücreler (Açık Gri)"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Hücre Stilleri (Cell Styles) ile Kurumsal Tasarım Şablonları",
                    "description": "Tüm şirketin hazırladığı Excel tablolarında tek tip kurumsal tasarım standardı yakalamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_11",
                    "title": "Kurumsal Stil Kütüphanesi",
                    "explanation": "Giriş > Hücre Stilleri menüsünde 'İyi', 'Kötü', 'Nötr', 'Girdi', 'Çıktı' ve 'Hesaplama' gibi evrensel hazır stiller bulunur. Bu stiller sayfa tasarımını saniyeler içinde standartlaştırır.",
                    "speechText": "Giriş > Hücre Stilleri menüsünde 'İyi', 'Kötü', 'Nötr', 'Girdi', 'Çıktı' ve 'Hesaplama' gibi evrensel hazır stiller bulunur. Bu stiller sayfa tasarımını saniyeler içinde standartlaştırır. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "C2"
          }
],
        tasks: [
          {
                    "id": "t5_11_1",
                    "stepNumber": 1,
                    "instruction": "C2 hücresine veri giriş hücreleri için önerilen hazır stil adını 'Girdi' olarak yazın.",
                    "targetCell": "C2",
                    "hints": [
                              "C2 hücresini seçin.",
                              "'Girdi' yazın.",
                              "C2 hücresine 'Girdi' yazıp Enter'a basın."
                    ],
                    "validation": {
                              "targetCell": "C2",
                              "successMessage": "Tebrikler! Hücre Stilleri (Cell Styles) ile Kurumsal Tasarım Şablonları görevini başarıyla tamamladınız.",
                              "expectedValue": "Girdi"
                    }
          }
],
        quiz: {
          "id": "q5_11",
          "title": "Hücre Stilleri (Cell Styles) ile Kurumsal Tasarım Şablonları Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_11_1",
                              "question": "Büyük şirketlerde tüm çalışanların aynı renk ve tasarım standardını kullanmasını sağlayan Excel aracı nedir?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Hücre Stilleri (Cell Styles)"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "WordArt"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazım Denetimi"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Grafik Sihirbazı"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Hücre stilleri kurumsal font, renk ve kenarlık setlerini tek tıkla uygulanabilir kılar.",
                              "measuredSkill": "Kurumsal Tasarım Standardizasyonu"
                    }
          ]
}
      },
      {
        id: "sec5_l12",
        phaseId: 5,
        unitId: "u5_12",
        title: "Bölüm 5 Biçimlendirme ve Kurumsal Tablo Tasarımı Final Projesi",
        shortDesc: "Ham, biçimsiz ve çirkin bir veri tablosunu; doğru sayı formatları, Muhasebe stili, zarif kenarlıklar ve kurumsal renklerle C-Level yönetici raporuna dönüştürme.",
        category: "Hücre Biçimlendirme",
        groupTitle: "Bölüm Projesi",
        primaryGoal: "1-5. Bölümlerin tüm temellerini birleştirerek profesyonel bir finans tablosu tasarlamak.",
        prerequisites: ["sec5_l1", "sec5_l2", "sec5_l7", "sec5_l8", "sec5_l10"],
        commonMistakes: ["Biçimlendirmede aşırıya kaçıp okunabilirliği azaltmak"],
        successCriteria: "Bölüm 5 final tasarım projesini kusursuz tamamlamak.",
        level: "Uzman",
        durationMinutes: 14,
        functionsUsed: ["Kurumsal Tasarım", "Muhasebe Biçimi"],
        initialWorkbook: createTableSheet("s5_12", "FinansRaporTasarimi", ["Departman", "Bütçe", "Gerçekleşen", "Sapma Oranı"], [["Yazılım & Ar-Ge", 1250000, 1180000, "%5.6"], ["Pazarlama", 850000, 920000, "-%8.2"]]),
        objectives: [
          {
                    "id": "o1",
                    "title": "Bölüm 5 Biçimlendirme ve Kurumsal Tablo Tasarımı Final Projesi",
                    "description": "1-5. Bölümlerin tüm temellerini birleştirerek profesyonel bir finans tablosu tasarlamak."
          }
],
        teachingSteps: [
          {
                    "id": "ts5_12",
                    "title": "Gerçek Yönetici Raporu",
                    "explanation": "5 bölüm boyunca arayüzü, hücre yapısını, kısayolları, veri girişini ve biçimlendirmeyi öğrendiniz. Şimdi elinizdeki bu tabloyu şirket genel müdürünün önüne koyulacak seviyede profesyonel bir tasarımla taçlandırıyorsunuz.",
                    "speechText": "5 bölüm boyunca arayüzü, hücre yapısını, kısayolları, veri girişini ve biçimlendirmeyi öğrendiniz. Şimdi elinizdeki bu tabloyu şirket genel müdürünün önüne koyulacak seviyede profesyonel bir tasarımla taçlandırıyorsunuz. Şimdi uygulamayı tamamlayalım.",
                    "targetCell": "E2"
          }
],
        tasks: [
          {
                    "id": "t5_12_1",
                    "stepNumber": 1,
                    "instruction": "E2 hücresine tasarım onay durumu olarak 'C-Level Tasarım Onaylandı' yazın.",
                    "targetCell": "E2",
                    "hints": [
                              "E2 hücresini seçin.",
                              "'C-Level Tasarım Onaylandı' yazın.",
                              "E2 hücresine metni yazıp onaylayın."
                    ],
                    "validation": {
                              "targetCell": "E2",
                              "successMessage": "Tebrikler! Bölüm 5 Biçimlendirme ve Kurumsal Tablo Tasarımı Final Projesi görevini başarıyla tamamladınız.",
                              "expectedValue": "C-Level Tasarım Onaylandı"
                    }
          }
],
        quiz: {
          "id": "q5_12",
          "title": "Bölüm 5 Biçimlendirme ve Kurumsal Tablo Tasarımı Final Projesi Değerlendirme Testi",
          "passingScore": 80,
          "questions": [
                    {
                              "id": "q_5_12_1",
                              "question": "Bir Excel tablosunun 'C-Level Yönetici Standardında' kabul edilmesi için hangi kural şarttır?",
                              "options": [
                                        {
                                                  "id": "a",
                                                  "text": "Net sayı formatları (binlik ayraç), gözü yormayan kurumsal renkler ve birleştirilmemiş temiz başlıklar"
                                        },
                                        {
                                                  "id": "b",
                                                  "text": "Tüm hücrelerin rengarenk boyanması"
                                        },
                                        {
                                                  "id": "c",
                                                  "text": "Yazıların çok büyük olması"
                                        },
                                        {
                                                  "id": "d",
                                                  "text": "Formül kullanılmaması"
                                        }
                              ],
                              "correctOptionId": "a",
                              "explanation": "Zarafet, netlik, doğru finansal formatlar ve temiz tipografi kurumsal standardın temelidir.",
                              "measuredSkill": "Uçtan Uca Kurumsal Rapor ve Dashboard Tasarımı"
                    }
          ]
}
      }
    ]
  }
];
