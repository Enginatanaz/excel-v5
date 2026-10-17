import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 1
  {
    id: 1,
    category: 'Giriş ve Çalışma Ortamı',
    title: '1. Tanıtım ve Eğitim Sisteminin Kullanımı',
    subtitle: 'Excel Akademi AI platformu, akıllı sesli öğretmen ve etkileşimli çalışma alanı oryantasyonu',
    iconName: 'Sparkles',
    description: 'Eğitim sisteminin nasıl çalıştığını, formül motorunu, yapay zekâ sesli öğretmenini ve mini test mekanizmasını kavrayın.',
    lessons: [
      {
        id: 'sec1_l1',
        phaseId: 1,
        unitId: 'u1_1',
        title: 'Platform Arayüzü ve Akıllı Öğretmen Tanıtımı',
        shortDesc: 'Excel Akademi AI üç sütunlu öğrenme mimarisini ve sesli öğretmen etkileşimini öğrenin.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Platform Kullanımı',
        primaryGoal: 'Platformun üç panelli çalışma alanını, sesli öğretmeni ve görev panelini etkin biçimde kullanabilmek.',
        prerequisites: ['Temel bilgisayar ve fare kullanımı'],
        commonMistakes: ['Sol paneldeki ses kontrollerini fark etmemek', 'Görev tamamlandıktan sonra kontrol butonuna basmayı unutmak'],
        successCriteria: 'Çalışma alanındaki panelleri tanımak ve ilk hücre etkileşimini gerçekleştirmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 8,
        functionsUsed: [],
        sheetId: 's1_1',
        sheetName: 'Hoşgeldiniz',
        headers: ['Bölüm', 'İşlev', 'Durum'],
        rows: [
          ['Sol Panel', 'AI Sesli Öğretmen', 'Aktif'],
          ['Orta Panel', 'Etkileşimli Excel Masası', 'Hazır'],
          ['Sağ Panel', 'Uygulama & Görev Kontrolü', 'Bekliyor'],
          ['Alt Bar', 'Durum ve Sayfa Yönetimi', 'Çalışıyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Arayüzü Tanıma', description: 'Sol öğretmen, orta çalışma alanı ve sağ görev panelinin işlevlerini anlama.' },
          { id: 'o2', title: 'Hücre Seçimi', description: 'Tabloda hedef hücreye tıklayarak seçili hücre koordinatını doğrulama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Üç Sütunlu Çalışma Alanı',
            explanation: 'Excel Akademi AI üç temel panelden oluşur: Sol panelde size özel sesli öğretmen yer alır, orta panelde gerçek formül motoru çalışan Excel masası bulunur, sağ panelde ise adım adım görev kontrol paneli yer alır.',
            speechText: 'Excel Akademi AI sistemine hoş geldiniz! Sol tarafta sizinle birlikte çalışan yapay zekâ öğretmeniniz, ortada gerçek bir Excel hesaplama tablosu, sağda ise görev yönergeleriniz bulunuyor.'
          },
          {
            id: 'ts2',
            title: 'Hücre Seçimi ve Koordinatlar',
            explanation: 'Excel de her hücre bir sütun harfi ve bir satır numarasının kesişimi ile adlandırılır. Örneğin B2 hücresi B sütunu ile 2. satırın kesişimidir.',
            speechText: 'Excel masasında herhangi bir hücreye tıkladığınızda hücrenin adresi sol üstte görünür. Şimdi orta tablodaki C5 hücresine tıklayın.',
            targetCell: 'C5'
          }
        ],
        tasks: [
          {
            id: 't1_1_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "Tamamlandı" yazın ve alttaki "İşlemi Kontrol Et" butonuna tıklayın.',
            targetCell: 'C5',
            hints: [
              'Tablodaki C5 hücresine (C sütunu, 5. satır) çift tıklayın veya seçip doğrudan yazmaya başlayın.',
              'Tam olarak Tamamlandı ifadesini yazın (tırnak işaretleri olmadan).',
              'C5 hücresine Tamamlandı yazıp Enter tuşuna basın ve sağdaki Görevi Denetle butonuna tıklayın.'
            ],
            validation: {
              targetCell: 'C5',
              expectedValue: 'Tamamlandı',
              successMessage: 'Harika! İlk hücre veri girişinizi başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q1_1',
          title: 'Platform Kullanımı Mini Değerlendirme',
          passingScore: 80,
          questions: [
            {
              id: 'q1_1_1',
              question: 'Excel Akademi AI arayüzünde ortadaki panel ne işe yarar?',
              options: [
                { id: 'a', text: 'Yalnızca video izleme alanı' },
                { id: 'b', text: 'Gerçek hesaplama motoru barındıran etkileşimli Excel çalışma tablosu' },
                { id: 'c', text: 'Statik bir ekran görüntüsü' },
                { id: 'd', text: 'Sohbet geçmişi penceresi' }
              ],
              correctOptionId: 'b',
              explanation: 'Orta panel, formülleri gerçek zamanlı hesaplayan canlı bir Excel grid çalışma masasıdır.',
              measuredSkill: 'Çalışma alanı bileşenlerini ayırt etme'
            },
            {
              id: 'q1_1_2',
              question: 'Excel de B sütunu ile 4. satırın kesiştiği hücrenin adresi nedir?',
              options: [
                { id: 'a', text: '4B' },
                { id: 'b', text: 'B-4' },
                { id: 'c', text: 'B4' },
                { id: 'd', text: 'Hücre 4' }
              ],
              correctOptionId: 'c',
              explanation: 'Excel standart adreslemesinde önce sütun harfi, ardından satır numarası yazılır: B4.',
              measuredSkill: 'Standart hücre adresi gösterimi'
            }
          ]
        }
      },
      {
        id: 'sec1_l2',
        phaseId: 1,
        unitId: 'u1_2',
        title: 'Hücre Seçimi, Adres Çubuğu ve Formül Çubuğu',
        shortDesc: 'Adres kutusu ve formül çubuğunun işleyişini, hücreler arası hızlı geçişi kavrayın.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Temel Gezinme',
        primaryGoal: 'Formül çubuğunun ham veri ile hesaplanan sonuç arasındaki farkı gösterme mantığını kavramak.',
        prerequisites: ['sec1_l1'],
        commonMistakes: ['Hücre içindeki biçimlendirilmiş görünüm ile formül çubuğundaki gerçek değeri karıştırmak'],
        successCriteria: 'Hedef hücreye değer girmek ve formül çubuğundan değer doğrulamasını yapabilmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's1_2',
        sheetName: 'Formül Çubuğu',
        headers: ['Hücre', 'Görünüm', 'Ham Değer'],
        rows: [
          ['A2', '1.500 ₺', '1500'],
          ['A3', '%20', '0.2'],
          ['A4', 'Hedef', 'Boş'],
        ],
        objectives: [
          { id: 'o1', title: 'Adres Çubuğu Kullanımı', description: 'Aktif hücre adresinin formül çubuğu solunda takibi.' },
          { id: 'o2', title: 'Formül Çubuğu Düzenleme', description: 'Veri ve formülleri doğrudan formül çubuğundan veya hücreden girebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Formül Çubuğu Anatomisi',
            explanation: 'Excel de bir hücrede gördüğünüz değer ile o hücrenin ham değeri farklı olabilir. Örneğin %20 gördüğünüzde ham değer 0.2 dir. Formül çubuğu her zaman arka plandaki gerçek değeri gösterir.',
            speechText: 'Formül çubuğu hücrenin kalbidir. Ekranda ne görünürse görünsün, formül çubuğu o hücrenin gerçek ham değerini veya formülünü sergiler.'
          }
        ],
        tasks: [
          {
            id: 't1_2_1',
            stepNumber: 1,
            instruction: 'C4 hücresine "Doğrulandı" yazarak ham veri girişini tamamlayın.',
            targetCell: 'C4',
            hints: [
              'C4 hücresini seçin.',
              'Doğrulandı kelimesini yazın.',
              'Enter tuşuna basın ve görevi denetleyin.'
            ],
            validation: {
              targetCell: 'C4',
              expectedValue: 'Doğrulandı',
              successMessage: 'Tebrikler! C4 hücresine başarıyla veri girişi yapıldı.'
            }
          }
        ],
        quiz: {
          id: 'q1_2',
          title: 'Adres ve Formül Çubuğu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q1_2_1',
              question: 'Bir hücrede "=5*20" formülü yazıldığında formül çubuğunda ne görünür?',
              options: [
                { id: 'a', text: '100' },
                { id: 'b', text: '=5*20' },
                { id: 'c', text: 'Boş' },
                { id: 'd', text: 'Hata' }
              ],
              correctOptionId: 'b',
              explanation: 'Hücrede hesaplanan sonuç olan 100 görünürken, formül çubuğunda yazılan formülün kendisi (=5*20) görünür.',
              measuredSkill: 'Hücre değeri ile formül çubuğu farkı'
            }
          ]
        }
      },
      {
        id: 'sec1_l3',
        phaseId: 1,
        unitId: 'u1_3',
        title: 'Araç Çubuğu, Biçimlendirme Araçları ve Kısayollar',
        shortDesc: 'Kalın, İtalik, dolgu rengi, kenarlıklar ve temel klavye kısayollarını öğrenin.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Biçimlendirme Temelleri',
        primaryGoal: 'Tablo başlıklarını kalınlaştırmak ve hücrelere dolgu rengi uygulayarak görsel hiyerarşi kurmak.',
        prerequisites: ['sec1_l2'],
        commonMistakes: ['Rakamları ortalayarak muhasebe standartlarına aykırı biçimlendirme yapmak'],
        successCriteria: 'Hedef hücreye veri girip kurumsal renklendirme uygulayabilmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's1_3',
        sheetName: 'Kısayollar',
        headers: ['Kısayol', 'İşlev', 'Kategori'],
        rows: [
          ['Ctrl + C', 'Kopyala', 'Düzenleme'],
          ['Ctrl + V', 'Yapıştır', 'Düzenleme'],
          ['Ctrl + Z', 'Geri Al', 'Düzenleme'],
          ['Ctrl + B', 'Kalın Yap', 'Biçimlendirme'],
        ],
        objectives: [
          { id: 'o1', title: 'Hızlı Düzenleme', description: 'Ctrl+C, Ctrl+V, Ctrl+Z kombinasyonlarının kullanımını kavrama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Klavye ile Hız Kazanma',
            explanation: 'Profesyonel Excel kullanıcıları fare kullanımını minimumda tutar. Ctrl+Z geri alır, Ctrl+B kalın yapar, Ctrl+S kaydeder.',
            speechText: 'Verimliliğin ilk kuralı kısayollardır. Ctrl+Z ile yapılan hatayı geri alabilir, Ctrl+C ve Ctrl+V ile hızlı kopyalama yapabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't1_3_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Aktif" yazarak yeni durumu kaydedin.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              'Aktif kelimesini yazın.',
              'Enter a basıp denetleyin.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Aktif',
              successMessage: 'Harika! Kısayol tablosuna yeni durum eklendi.'
            }
          }
        ],
        quiz: {
          id: 'q1_3',
          title: 'Kısayollar Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q1_3_1',
              question: 'Excel de yanlış yapılan bir işlemi hemen geri almak için hangi kısayol kullanılır?',
              options: [
                { id: 'a', text: 'Ctrl + Y' },
                { id: 'b', text: 'Ctrl + Z' },
                { id: 'c', text: 'Ctrl + X' },
                { id: 'd', text: 'Ctrl + F' }
              ],
              correctOptionId: 'b',
              explanation: 'Ctrl + Z komutu son yapılan işlemi geri alır.',
              measuredSkill: 'Geri alma kısayolu'
            }
          ]
        }
      },
      {
        id: 'sec1_l4',
        phaseId: 1,
        unitId: 'u1_4',
        title: 'Sesli Öğretmen ile Canlı Soru ve Hata Giderme',
        shortDesc: 'Sol paneldeki yapay zekâ öğretmenine soru sorma ve anlık pedagojik geri bildirim alma.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Akıllı Asistan',
        primaryGoal: 'Yapay zekâ öğretmeninden formül ve mantık yardımı talep etme sürecini öğrenmek.',
        prerequisites: ['sec1_l3'],
        commonMistakes: ['Soru sorarken formülün hangi hücrede olduğunu belirtmemek'],
        successCriteria: 'Asistan panelini kullanmak ve pratik işlem tamamlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's1_4',
        sheetName: 'SoruCevap',
        headers: ['Öğrenci Sorusu', 'Öğretmen Tavsiyesi', 'Durum'],
        rows: [
          ['Noktalı virgül neden gerekli?', 'Argümanları birbirinden ayırır', 'İncelendi'],
          ['Dolar işareti ne yapar?', 'Hücre başvurusunu kilitler', 'İncelendi'],
        ],
        objectives: [
          { id: 'o1', title: 'Öğretmen Etkileşimi', description: 'Sol panelden sesli ve metin tabanlı soru yöneltmeyi anlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Kişisel Excel Mentorunuz',
            explanation: 'Sol paneldeki öğretmeniniz yalnızca metin okumaz; tablonuzda yaptığınız hataları analiz eder, yanlış yazılan formüllerin neden hata verdiğini söyler.',
            speechText: 'Sol paneldeki öğretmeniniz sizin özel çalışma arkadaşınızdır. Formül yazarken takıldığınız her an soru sorabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't1_4_1',
            stepNumber: 1,
            instruction: 'C4 hücresine "Anlaşıldı" yazarak bu adımı tamamlayın.',
            targetCell: 'C4',
            hints: ['C4 hücresini seçin.', 'Anlaşıldı yazın.', 'Enter tuşuna basın.'],
            validation: {
              targetCell: 'C4',
              expectedValue: 'Anlaşıldı',
              successMessage: 'Tebrikler! Öğretmen etkileşim adımını başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q1_4',
          title: 'Öğretmen Modülü Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q1_4_1',
              question: 'Excel de Türkçe sürümde formül parametreleri (argümanlar) hangi karakterle ayrılır?',
              options: [
                { id: 'a', text: 'Virgül (,)' },
                { id: 'b', text: 'Noktalı virgül (;)' },
                { id: 'c', text: 'İki nokta üst üste (:)' },
                { id: 'd', text: 'Eğik çizgi (/)' }
              ],
              correctOptionId: 'b',
              explanation: 'Türkçe Excel bölgesel ayarlarında ondalık ayraç virgül olduğu için, fonksiyon argümanları noktalı virgül (;) ile ayrılır.',
              measuredSkill: 'Türkçe Excel argüman ayracı kuralı'
            }
          ]
        }
      },
      {
        id: 'sec1_l5',
        phaseId: 1,
        unitId: 'u1_5',
        title: 'Bölüm 1 Oryantasyon ve Kazanım Değerlendirme Sınavı',
        shortDesc: 'Bölüm 1 de öğrenilen arayüz, formül çubuğu ve temel kavramların kapsamlı sınavı.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: '1. Bölümdeki tüm arayüz ve oryantasyon kazanımlarını pekiştirmek ve test etmek.',
        prerequisites: ['sec1_l1', 'sec1_l2', 'sec1_l3', 'sec1_l4'],
        commonMistakes: ['Soruları dikkatli okumadan acele cevap vermek'],
        successCriteria: 'Sınavdan en az %80 alarak Bölüm 2 nin kilidini açmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's1_5',
        sheetName: 'Değerlendirme',
        headers: ['Kazanım Alanı', 'Soru Sayısı', 'Minimum Başarı'],
        rows: [
          ['Arayüz & Paneller', '1', '%80'],
          ['Adresleme & Hücreler', '1', '%80'],
          ['Formül Çubuğu & Kısayollar', '1', '%80'],
        ],
        objectives: [
          { id: 'o1', title: 'Oryantasyon Ölçümü', description: 'Giriş bölümü kazanımlarını başarıyla sergileme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 1 Final Değerlendirmesi',
            explanation: 'Tebrikler! İlk bölümün sonuna geldiniz. Şimdi hem hücrede son bir kontrol işlemi yapacak, hem de mini sınavı yanıtlayarak Bölüm 2 ye geçeceksiniz.',
            speechText: 'Harika bir başlangıç yaptınız! Şimdi Bölüm 1 in final sınavı ile öğrendiklerinizi pekiştirelim.'
          }
        ],
        tasks: [
          {
            id: 't1_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Başarılı" yazarak final görevini tamamlayın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Başarılı yazın.', 'Enter tuşuna basın ve denetleyin.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Başarılı',
              successMessage: 'Tebrikler! Bölüm 1 uygulama görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q1_5',
          title: 'Bölüm 1 Kapsamlı Oryantasyon Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q1_5_1',
              question: 'Excel de bir aralığı ifade ederken (örneğin A1 den A10 a kadar) hangi işaret kullanılır?',
              options: [
                { id: 'a', text: 'Tire (-)' },
                { id: 'b', text: 'İki nokta (:)' },
                { id: 'c', text: 'Noktalı virgül (;)' },
                { id: 'd', text: 'Soru işareti (?)' }
              ],
              correctOptionId: 'b',
              explanation: 'A1:A10 ifadesindeki iki nokta üst üste (:) işareti, iki hücre arasındaki tüm aralığı belirtir.',
              measuredSkill: 'Aralık operatörü (:)'
            },
            {
              id: 'q1_5_2',
              question: 'Aşağıdakilerden hangisi geçerli bir Excel hücre adresi DEĞİLDİR?',
              options: [
                { id: 'a', text: 'C12' },
                { id: 'b', text: 'AA5' },
                { id: 'c', text: '12C' },
                { id: 'd', text: 'Z100' }
              ],
              correctOptionId: 'c',
              explanation: 'Excel de önce harf, sonra sayı gelir. 12C geçersizdir; doğrusu C12 dir.',
              measuredSkill: 'Hücre adresi sentaksı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 2
  {
    id: 2,
    category: 'Giriş ve Çalışma Ortamı',
    title: '2. Excel\'e Giriş ve Çalışma Ortamı',
    subtitle: 'Şerit menü sekmeleri, ad kutusu, sayfa yönetimi ve görünüm ayarları',
    iconName: 'Layout',
    description: 'Excel in şerit menüsünü (Ribbon), ad kutusuyla gezinmeyi, çalışma sayfalarını ekleme, silme ve renklendirme tekniklerini öğrenin.',
    lessons: [
      {
        id: 'sec2_l1',
        phaseId: 2,
        unitId: 'u2_1',
        title: 'Şerit Menü Mimarisi ve Sekmelerin Görevleri',
        shortDesc: 'Giriş, Ekle, Sayfa Düzeni, Formüller, Veri ve Görünüm sekmelerinin işlevleri.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Şerit Menü',
        primaryGoal: 'İlgili Excel komutunun hangi sekmede yer aldığını doğru belirleyebilmek.',
        prerequisites: ['sec1_l5'],
        commonMistakes: ['Veri filtreleme araçlarını Ekle sekmesinde aramak'],
        successCriteria: 'Şerit menü sekmelerini tanımak ve pratik veri girişi yapmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's2_1',
        sheetName: 'ŞeritMenü',
        headers: ['Sekme Adı', 'Ana İşlev', 'Örnek Komut'],
        rows: [
          ['Giriş', 'Temel Biçimlendirme & Düzen', 'Yazı Tipi, Hizalama'],
          ['Ekle', 'Nesne ve Grafik Ekleme', 'Grafikler, PivotTable'],
          ['Formüller', 'Fonksiyon Kütüphanesi', 'TOPLA, Mantıksal'],
          ['Veri', 'Sıralama, Filtreleme, Dış Veri', 'Filtre, Metni Sütunlara Çevir'],
        ],
        objectives: [
          { id: 'o1', title: 'Şerit Menü Hiyerarşisi', description: 'Sekmeler, gruplar ve komut düğmelerinin yapısını anlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Şerit (Ribbon) Düzeni',
            explanation: 'Şerit menü sekmelere, sekmeler ise mantıksal gruplara ayrılmıştır. Örneğin Giriş sekmesinde Pano, Yazı Tipi, Hizalama, Sayı gibi gruplar bulunur.',
            speechText: 'Excel de ihtiyacınız olan komutları şerit menüde bulabilirsiniz. Biçimlendirme için Giriş, tablo ve grafikler için Ekle, formüller için Formüller sekmesini kullanırız.'
          }
        ],
        tasks: [
          {
            id: 't2_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Öğrenildi" yazarak bu adımı tamamlayın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Öğrenildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Öğrenildi',
              successMessage: 'Harika! Şerit menü incelemesi tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q2_1',
          title: 'Şerit Menü Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q2_1_1',
              question: 'Grafik ve PivotTable eklemek için hangi şerit menü sekmesi kullanılır?',
              options: [
                { id: 'a', text: 'Görünüm' },
                { id: 'b', text: 'Ekle' },
                { id: 'c', text: 'Gözden Geçir' },
                { id: 'd', text: 'Formüller' }
              ],
              correctOptionId: 'b',
              explanation: 'Grafikler, PivotTable lar ve çizim nesneleri Ekle (Insert) sekmesindedir.',
              measuredSkill: 'Şerit menü komut konumları'
            }
          ]
        }
      },
      {
        id: 'sec2_l2',
        phaseId: 2,
        unitId: 'u2_2',
        title: 'Ad Kutusu ile Hızlı Gezinme ve Aralık Adlandırma',
        shortDesc: 'Ad kutusunu kullanarak uzak hücrelere anında gitme ve hücre aralıklarına isim verme.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Ad Kutusu',
        primaryGoal: 'Ad kutusuna doğrudan adres yazarak büyük tablolarda hızla gezinmek.',
        prerequisites: ['sec2_l1'],
        commonMistakes: ['Ad kutusuna formül yazmaya çalışmak'],
        successCriteria: 'Ad kutusunun işlevini kavramak ve hedef hücrede veri oluşturmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's2_2',
        sheetName: 'AdKutusu',
        headers: ['Konum', 'İçerik', 'Önem Derecesi'],
        rows: [
          ['A1', 'Başlık', 'Yüksek'],
          ['B10', 'Dipnot', 'Orta'],
          ['Z100', 'Arşiv Verisi', 'Düşük'],
        ],
        objectives: [
          { id: 'o1', title: 'Ad Kutusu ile Atlama', description: 'Fareyle kaydırmak yerine hücre adresini yazıp anında hedefe gitme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Ad Kutusunun Gücü',
            explanation: 'Formül çubuğunun solundaki küçük kutu Ad Kutusudur. Oraya örneğin Z100 yazıp Enter a basarsanız, Excel anında 100. satırdaki Z sütununa atlar.',
            speechText: 'Büyük tablolarda fareyle yüzlerce satır kaydırmak yerine Ad Kutusuna gitmek istediğiniz hücreyi yazıp Enter a basabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't2_2_1',
            stepNumber: 1,
            instruction: 'C4 hücresine "Ziyaret Edildi" yazın.',
            targetCell: 'C4',
            hints: ['C4 hücresini seçin.', 'Ziyaret Edildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'C4',
              expectedValue: 'Ziyaret Edildi',
              successMessage: 'Tebrikler! Ad kutusu pratiğini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q2_2',
          title: 'Ad Kutusu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q2_2_1',
              question: 'Ad kutusuna "A500" yazıp Enter tuşuna basıldığında ne gerçekleşir?',
              options: [
                { id: 'a', text: 'Hücreye A500 metni yazılır' },
                { id: 'b', text: 'Excel doğrudan A500 hücresine gider ve orayı seçer' },
                { id: 'c', text: '500 adet yeni satır eklenir' },
                { id: 'd', text: 'Hata mesajı çıkar' }
              ],
              correctOptionId: 'b',
              explanation: 'Ad kutusu hızlı gezinme aracıdır; yazılan adrese anında atlar.',
              measuredSkill: 'Ad kutusu navigasyonu'
            }
          ]
        }
      },
      {
        id: 'sec2_l3',
        phaseId: 2,
        unitId: 'u2_3',
        title: 'Çalışma Sayfaları Ekleme, Yeniden Adlandırma ve Renklendirme',
        shortDesc: 'Alttaki sayfa sekmelerini yönetme, renklendirme ve iş akışına göre gruplama.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Sayfa Yönetimi',
        primaryGoal: 'Çalışma sayfalarını organize edebilmek ve sekme renkleriyle görsel ayrım sağlamak.',
        prerequisites: ['sec2_l2'],
        commonMistakes: ['Sayfa adlarında geçersiz karakterler (/ , ? * : [ ]) kullanmak'],
        successCriteria: 'Sayfa yapılandırmasını anlamak ve sayfaya yeni veri girmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's2_3',
        sheetName: 'Ocak',
        headers: ['Sayfa Adı', 'Sekme Rengi', 'Durum'],
        rows: [
          ['Ocak', 'Mavi', 'Tamamlandı'],
          ['Şubat', 'Yeşil', 'Devam Ediyor'],
          ['Mart', 'Kırmızı', 'Bekliyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Sayfa Yönetimi', description: 'Sayfa sekmelerini adlandırma ve renklendirme kuralları.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Çok Sayfalı Çalışma Kitapları',
            explanation: 'Bir Excel dosyası bir Çalışma Kitabıdır (Workbook). İçinde birden fazla Çalışma Sayfası (Worksheet) bulunabilir. Sayfa adlarına çift tıklayarak yeniden adlandırabilirsiniz.',
            speechText: 'Tek bir Excel dosyasında aylara veya departmanlara göre ayrı sayfalar açabilirsiniz. Alttaki sayfa sekmesine sağ tıklayarak rengini değiştirebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't2_3_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "Nisan" yazarak yeni ay planlamasını başlatın.',
            targetCell: 'C5',
            hints: ['C5 hücresini seçin.', 'Nisan yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'C5',
              expectedValue: 'Nisan',
              successMessage: 'Harika! Çok sayfalı çalışma planı güncellendi.'
            }
          }
        ],
        quiz: {
          id: 'q2_3',
          title: 'Sayfa Yönetimi Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q2_3_1',
              question: 'Excel de bir çalışma sayfası adında aşağıdaki karakterlerden hangisi KULLANILAMAZ?',
              options: [
                { id: 'a', text: 'Alt çizgi (_)' },
                { id: 'b', text: 'Soru işareti (?)' },
                { id: 'c', text: 'Tire (-)' },
                { id: 'd', text: 'Boşluk ( )' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel sayfa adlarında ? : * / \\ [ ] gibi özel karakterlerin kullanımına izin vermez.',
              measuredSkill: 'Sayfa adı kısıtlamaları'
            }
          ]
        }
      },
      {
        id: 'sec2_l4',
        phaseId: 2,
        unitId: 'u2_4',
        title: 'Görünüm Seçenekleri, Kılavuz Çizgileri ve Yakınlaştırma',
        shortDesc: 'Sayfa Düzeni, Sayfa Sonu Önizleme, Kılavuz Çizgilerini açıp kapatma ve Zoom ayarları.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Görünüm Ayarları',
        primaryGoal: 'Rapor sunumlarında kılavuz çizgilerini kapatarak temiz bir görünüm elde etmek.',
        prerequisites: ['sec2_l3'],
        commonMistakes: ['Kılavuz çizgileri kapalıyken kenarlık eklemeyi unutmak'],
        successCriteria: 'Görünüm ayarlarını kavramak ve sunum hazırlığı verisini tamamlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's2_4',
        sheetName: 'Görünüm',
        headers: ['Görünüm Türü', 'Kullanım Amacı', 'Durum'],
        rows: [
          ['Normal Görünüm', 'Günlük veri girişi ve hesaplama', 'Varsayılan'],
          ['Sayfa Sonu Önizleme', 'Yazdırma sınırlarını ve sayfaları ayarlama', 'İsteğe Bağlı'],
          ['Sayfa Düzeni', 'Kenar boşlukları ve üstbilgileri görme', 'İsteğe Bağlı'],
        ],
        objectives: [
          { id: 'o1', title: 'Görünüm Modları', description: 'Farklı çalışma ihtiyaçlarına göre görünüm modlarını seçebilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Profesyonel Rapor Görünümü',
            explanation: 'Üst yönetime sunulacak tablolarda Görünüm sekmesinden Kılavuz Çizgileri onay kutusunu kaldırarak arka planın bembeyaz görünmesini sağlayabilirsiniz.',
            speechText: 'Görünüm sekmesinden kılavuz çizgilerini gizleyerek raporlarınıza profesyonel bir pano görünümü kazandırabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't2_4_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Hazır" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Hazır yazın.', 'Enter a basıp denetleyin.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Hazır',
              successMessage: 'Tebrikler! Görünüm seçenekleri adımı tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q2_4',
          title: 'Görünüm Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q2_4_1',
              question: 'Kılavuz çizgilerini (Gridlines) gizlemek veya göstermek hangi sekmeden yapılır?',
              options: [
                { id: 'a', text: 'Veri' },
                { id: 'b', text: 'Görünüm' },
                { id: 'c', text: 'Formüller' },
                { id: 'd', text: 'Gözden Geçir' }
              ],
              correctOptionId: 'b',
              explanation: 'Kılavuz çizgileri, Formül Çubuğu ve Başlıklar Görünüm (View) sekmesinden kontrol edilir.',
              measuredSkill: 'Görünüm araçları'
            }
          ]
        }
      },
      {
        id: 'sec2_l5',
        phaseId: 2,
        unitId: 'u2_5',
        title: 'Bölüm 2 Çalışma Ortamı Değerlendirme Sınavı',
        shortDesc: 'Şerit menü, gezinme ve sayfa yönetimi konularını kapsayan bölüm sonu değerlendirmesi.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 2 deki tüm çalışma ortamı ve görünüm kazanımlarını doğrulamak.',
        prerequisites: ['sec2_l1', 'sec2_l2', 'sec2_l3', 'sec2_l4'],
        commonMistakes: ['Kavramları karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Bölüm 3 e geçiş hakkı kazanmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's2_5',
        sheetName: 'FinalTest2',
        headers: ['Konu', 'Kazanım', 'Durum'],
        rows: [
          ['Şerit Menü', 'Sekme ayrımı', 'Ölçüldü'],
          ['Ad Kutusu', 'Hızlı atlama', 'Ölçüldü'],
          ['Sayfalar', 'Çok sayfalı mimari', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Çalışma Ortamı Yetkinliği', description: 'Excel çalışma ortamı bileşenlerini eksiksiz kavrama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 2 Değerlendirmesi',
            explanation: 'Çalışma ortamını tamamen öğrendiniz. Şimdi değerlendirme görevini ve sınavını tamamlayarak hücre operasyonlarına geçiş yapın.',
            speechText: 'Tebrikler! İkinci bölümün sonundasınız. Sınavı yanıtlayarak hücre operasyonları bölümüne geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't2_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 2 değerlendirme görevi başarıyla tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q2_5',
          title: 'Bölüm 2 Kapsamlı Çalışma Ortamı Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q2_5_1',
              question: 'Excel de bir çalışma kitabında yeni bir sayfa eklemek için kullanılan klavye kısayolu nedir?',
              options: [
                { id: 'a', text: 'Shift + F11' },
                { id: 'b', text: 'Ctrl + N' },
                { id: 'c', text: 'Alt + F4' },
                { id: 'd', text: 'Ctrl + W' }
              ],
              correctOptionId: 'a',
              explanation: 'Shift + F11 kısayolu mevcut çalışma kitabına anında yeni bir çalışma sayfası ekler.',
              measuredSkill: 'Sayfa ekleme kısayolu'
            },
            {
              id: 'q2_5_2',
              question: 'Çalışma sayfasındaki tüm hücreleri tek hamlede seçmek için hangi kısayol kullanılır?',
              options: [
                { id: 'a', text: 'Ctrl + A' },
                { id: 'b', text: 'Ctrl + S' },
                { id: 'c', text: 'Ctrl + D' },
                { id: 'd', text: 'Shift + Space' }
              ],
              correctOptionId: 'a',
              explanation: 'Ctrl + A (Select All) tablodaki veya tüm sayfadaki tüm hücreleri seçer.',
              measuredSkill: 'Tümünü seçme kısayolu'
            }
          ]
        }
      }
    ]
  },

  // SECTION 3
  {
    id: 3,
    category: 'Giriş ve Çalışma Ortamı',
    title: '3. Hücreler, Satırlar, Sütunlar ve Sayfalar',
    subtitle: 'Satır/sütun boyutlandırma, ekleme/silme, gelişmiş seçim ve bölmeleri dondurma',
    iconName: 'Grid',
    description: 'Hücrelerin boyutlandırılması, satır ve sütun ekleme/gizleme, gelişmiş seçim teknikleri ve uzun tablolarda başlıkları sabitlemek için Bölmeleri Dondur özelliğini öğrenin.',
    lessons: [
      {
        id: 'sec3_l1',
        phaseId: 3,
        unitId: 'u3_1',
        title: 'Satır ve Sütun Boyutlandırma ve Otomatik Sığdırma',
        shortDesc: 'Sütun başlıkları arasına çift tıklayarak en uzun metne göre otomatik sığdırma (AutoFit).',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Boyutlandırma',
        primaryGoal: 'Sütun genişliği yetersizliğinden kaynaklanan ### hatasını gidermek ve otomatik sığdırma yapmak.',
        prerequisites: ['sec2_l5'],
        commonMistakes: ['### işaretini formül hatası sanmak; oysa yalnızca sütun genişliği yetersizliğidir'],
        successCriteria: 'Sütun genişliğini ayarlayarak veri görünürlüğünü sağlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's3_1',
        sheetName: 'Boyutlandırma',
        headers: ['Müşteri Ünvanı', 'Şehir', 'Sipariş Tutarı'],
        rows: [
          ['Anadolu Bilişim ve Teknoloji Hizmetleri A.Ş.', 'İstanbul', 145000],
          ['Ege Zeytincilik ve Gıda Sanayi Ltd. Şti.', 'İzmir', 87500],
          ['Başkent Medikal Sistemler Ticaret A.Ş.', 'Ankara', 212000],
        ],
        objectives: [
          { id: 'o1', title: 'Otomatik Sığdırma', description: 'Sütun sınırına çift tıklayarak genişliği içeriğe göre ayarlama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Sütun Genişliği ve ### Görünümü',
            explanation: 'Bir sayısal değer sütuna sığmadığında Excel ### işaretleri gösterir. Sütun harflerinin (örneğin A ile B nin) arasına çift tıkladığınızda sütun en uzun metne göre otomatik olarak genişler.',
            speechText: 'Hücrede kare işaretleri gördüyseniz korkmayın, bu bir formül hatası değil, yalnızca sütunun dar olduğunu gösterir. Sütun başlığı çizgisine çift tıklayarak otomatik genişletebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't3_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Onaylandı" yazarak tablo incelemesini tamamlayın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Onaylandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Onaylandı',
              successMessage: 'Harika! Sütun boyutlandırma pratiği tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q3_1',
          title: 'Sütun Boyutlandırma Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q3_1_1',
              question: 'Excel de bir hücrede "###" görünmesinin sebebi nedir?',
              options: [
                { id: 'a', text: 'Formülde yazım hatası yapılmıştır' },
                { id: 'b', text: 'Sütun genişliği hücredeki sayıyı göstermek için yetersizdir' },
                { id: 'c', text: 'Hücre silinmiştir' },
                { id: 'd', text: 'Sıfıra bölme yapılmıştır' }
              ],
              correctOptionId: 'b',
              explanation: 'Sayısal veriler sütun genişliği yetersiz olduğunda ### olarak maskelenir.',
              measuredSkill: '### gösterim mantığı'
            }
          ]
        }
      },
      {
        id: 'sec3_l2',
        phaseId: 3,
        unitId: 'u3_2',
        title: 'Satır ve Sütun Ekleme, Silme ve Gizleme',
        shortDesc: 'Araya yeni satır/sütun ekleme, gereksizleri silme ve gizle/göster (Hide/Unhide) komutları.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Satır ve Sütunlar',
        primaryGoal: 'Tablonun yapısını bozmadan yeni kayıt veya sütun ekleyebilmek.',
        prerequisites: ['sec3_l1'],
        commonMistakes: ['Hücre içeriğini silmek ile satırın kendisini silmeyi karıştırmak (Delete tuşu sadece içeriği temizler)'],
        successCriteria: 'Satır işlemlerini anlamak ve araya veri eklemek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's3_2',
        sheetName: 'SatırSütun',
        headers: ['Sıra No', 'Personel Adı', 'Departman', 'Maaş'],
        rows: [
          [1, 'Ahmet Yılmaz', 'Finans', 45000],
          [2, 'Mehmet Kaya', 'Pazarlama', 38000],
          [3, 'Ayşe Demir', 'İK', 42000],
        ],
        objectives: [
          { id: 'o1', title: 'Satır/Sütun İşlemleri', description: 'Ctrl+Plus ile satır ekleme, Ctrl+Minus ile satır silme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Satır Ekleme Kısayolu',
            explanation: 'Satır numarasını seçip Ctrl + + (artı) tuşuna basarsanız üstüne yeni bir satır eklenir. Ctrl + - (eksi) ise seçili satırı tamamen siler.',
            speechText: 'Delete tuşuna basmak hücredeki metni siler, ancak satırın kendisini yok etmez. Satırı tamamen silmek için satır başlığına sağ tıklayıp Sil demelisiniz.'
          }
        ],
        tasks: [
          {
            id: 't3_2_1',
            stepNumber: 1,
            instruction: 'B5 hücresine yeni personel olarak "Fatma Şahin" yazın.',
            targetCell: 'B5',
            hints: ['B5 hücresini seçin.', 'Fatma Şahin yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'B5',
              expectedValue: 'Fatma Şahin',
              successMessage: 'Tebrikler! Yeni kayıt başarıyla eklendi.'
            }
          }
        ],
        quiz: {
          id: 'q3_2',
          title: 'Satır ve Sütun Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q3_2_1',
              question: 'Seçili bir satırı veya sütunu tamamen silmek için hangi kısayol kullanılır?',
              options: [
                { id: 'a', text: 'Delete' },
                { id: 'b', text: 'Ctrl + - (eksi)' },
                { id: 'c', text: 'Backspace' },
                { id: 'd', text: 'Shift + Delete' }
              ],
              correctOptionId: 'b',
              explanation: 'Ctrl + eksi kısayolu seçili satır veya sütunu tablodan tamamen kaldırır.',
              measuredSkill: 'Satır silme kısayolu'
            }
          ]
        }
      },
      {
        id: 'sec3_l3',
        phaseId: 3,
        unitId: 'u3_3',
        title: 'Hücre ve Aralık Seçim Teknikleri (Ctrl ve Shift ile)',
        shortDesc: 'Bitişik aralıkları Shift ile, ayrık hücreleri Ctrl ile seçme ve Ctrl+Shift+Ok tuşları ile hızlı seçim.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Seçim Teknikleri',
        primaryGoal: 'Binlerce satırlık listelerde fare sürüklemeden saniyeler içinde tüm aralığı seçebilmek.',
        prerequisites: ['sec3_l2'],
        commonMistakes: ['Büyük tablolarda fareyi aşağı doğru dakikalarca sürüklemek'],
        successCriteria: 'Gelişmiş seçim kısayollarını kavramak ve hedef hücrede işlem yapmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's3_3',
        sheetName: 'Seçim',
        headers: ['ID', 'Ürün Adı', 'Kategori', 'Stok'],
        rows: [
          ['P101', 'Laptop Pro', 'Elektronik', 34],
          ['P102', 'Kablosuz Mouse', 'Aksesuar', 120],
          ['P103', 'Mekanik Klavye', 'Aksesuar', 65],
          ['P104', 'Monitör 27 inç', 'Elektronik', 18],
        ],
        objectives: [
          { id: 'o1', title: 'Hızlı Aralık Seçimi', description: 'Ctrl+Shift+Aşağı Ok ile tablonun sonuna kadar tek hamlede seçme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Ctrl + Shift + Ok Tuşları',
            explanation: 'İlk hücredeyken Ctrl ve Shift tuşlarına basılı tutup Aşağı Ok a basarsanız, Excel aradaki boşluğa kadar olan binlerce satırı bir salisede seçer.',
            speechText: 'Büyük tablolarda fareyle kaydırmak yerine klavyenizdeki Ctrl, Shift ve Ok tuşlarını birlikte kullanarak dev aralıkları anında seçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't3_3_1',
            stepNumber: 1,
            instruction: 'D6 hücresine "Seçildi" yazın.',
            targetCell: 'D6',
            hints: ['D6 hücresini seçin.', 'Seçildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D6',
              expectedValue: 'Seçildi',
              successMessage: 'Harika! Seçim teknikleri adımı tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q3_3',
          title: 'Seçim Kısayolları Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q3_3_1',
              question: 'A1 hücresinden başlayarak tablonun en altındaki dolu hücreye kadar olan tüm sütunu tek hamlede seçmek için hangi tuş kombinasyonu kullanılır?',
              options: [
                { id: 'a', text: 'Shift + Aşağı Ok' },
                { id: 'b', text: 'Ctrl + Shift + Aşağı Ok' },
                { id: 'c', text: 'Alt + Page Down' },
                { id: 'd', text: 'Ctrl + End' }
              ],
              correctOptionId: 'b',
              explanation: 'Ctrl+Shift+Ok tuşları dolu hücre bloğunun sonuna kadar anında seçim yapar.',
              measuredSkill: 'Dinamik aralık seçimi'
            }
          ]
        }
      },
      {
        id: 'sec3_l4',
        phaseId: 3,
        unitId: 'u3_4',
        title: 'Bölmeleri Dondur ile Başlık Satırlarını Sabitleme',
        shortDesc: 'Aşağı kaydırıldığında 1. satır başlıklarının ekranda sabit kalmasını sağlama (Freeze Panes).',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Bölmeleri Dondur',
        primaryGoal: 'Uzun tablolarda aşağı kaydırıldığında hangi sütunun ne olduğunu kaybetmemek için başlıkları sabitlemek.',
        prerequisites: ['sec3_l3'],
        commonMistakes: ['Bölmeleri dondururken aktif hücreyi yanlış yere koyup istenmeyen satırları dondurmak'],
        successCriteria: 'Bölmeleri dondurma mantığını kavramak ve veri doğrulaması yapmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's3_4',
        sheetName: 'BölmeleriDondur',
        headers: ['Müşteri No', 'Ad Soyad', 'Bölge', 'Ciro (TL)'],
        rows: [
          ['C001', 'Ahmet Demir', 'Marmara', 45000],
          ['C002', 'Burak Yıldız', 'Ege', 32000],
          ['C003', 'Canan Öztürk', 'İç Anadolu', 61000],
          ['C004', 'Derya Aksoy', 'Akdeniz', 29000],
        ],
        objectives: [
          { id: 'o1', title: 'Üst Satırı Dondur', description: 'Görünüm > Bölmeleri Dondur > Üst Satırı Dondur komutunun işlevi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Başlıkları Sabit Tutma',
            explanation: 'Yüzlerce satırlık bir müşteri tablosunda aşağı kaydırdığınızda sütun isimlerini göremezsiniz. Görünüm sekmesindeki Bölmeleri Dondur seçeneği 1. satırı ekrana kilitler.',
            speechText: 'Uzun listelerde aşağı kaydırınca başlıklar kaybolmasın diye Bölmeleri Dondur özelliğini kullanırız. Böylece 1. satır daima gözünüzün önünde kalır.'
          }
        ],
        tasks: [
          {
            id: 't3_4_1',
            stepNumber: 1,
            instruction: 'D6 hücresine "Sabitlendi" yazın.',
            targetCell: 'D6',
            hints: ['D6 hücresini seçin.', 'Sabitlendi yazın.', 'Enter a basıp denetleyin.'],
            validation: {
              targetCell: 'D6',
              expectedValue: 'Sabitlendi',
              successMessage: 'Tebrikler! Bölmeleri dondurma pratiği tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q3_4',
          title: 'Bölmeleri Dondur Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q3_4_1',
              question: 'Bölmeleri Dondur (Freeze Panes) komutu şerit menünün hangi sekmesinde yer alır?',
              options: [
                { id: 'a', text: 'Giriş' },
                { id: 'b', text: 'Sayfa Düzeni' },
                { id: 'c', text: 'Görünüm' },
                { id: 'd', text: 'Veri' }
              ],
              correctOptionId: 'c',
              explanation: 'Bölmeleri Dondur komutu Görünüm (View) sekmesi altındaki Pencere grubundadır.',
              measuredSkill: 'Bölmeleri dondurma konumu'
            }
          ]
        }
      },
      {
        id: 'sec3_l5',
        phaseId: 3,
        unitId: 'u3_5',
        title: 'Bölüm 3 Hücre ve Satır Yönetimi Değerlendirme Sınavı',
        shortDesc: 'Boyutlandırma, aralık seçimi, satır işlemleri ve bölmeleri dondurma kapsamlı sınavı.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 3 teki tüm hücre, satır ve sütun yönetimi kazanımlarını ölçmek.',
        prerequisites: ['sec3_l1', 'sec3_l2', 'sec3_l3', 'sec3_l4'],
        commonMistakes: ['Seçim kısayollarını unutmak'],
        successCriteria: 'Sınavdan %80 üzeri başarı sağlayarak Bölüm 4 e geçmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's3_5',
        sheetName: 'Değerlendirme3',
        headers: ['İşlem Türü', 'Önem', 'Kazanım'],
        rows: [
          ['AutoFit', 'Yüksek', '### giderme'],
          ['Ctrl+Shift+Ok', 'Kritik', 'Hızlı seçim'],
          ['Freeze Panes', 'Yüksek', 'Başlık kilitleme'],
        ],
        objectives: [
          { id: 'o1', title: 'Hücre Yönetimi Ustalığı', description: 'Tablo yapısını profesyonelce yönetme yetisi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 3 Kapsamlı Sınavı',
            explanation: 'Hücre ve satır yönetimini tamamladınız. Şimdi bu adımı onaylayıp sınav sorularını yanıtlayarak Veri Girişi bölümüne geçin.',
            speechText: 'Üçüncü bölümü başarıyla bitirdiniz! Sınavı yanıtlayarak dördüncü bölüme geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't3_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 3 değerlendirme görevi tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q3_5',
          title: 'Bölüm 3 Kapsamlı Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q3_5_1',
              question: 'Bölmeleri dondururken hem 1. satırın hem de A sütununun aynı anda kilitli kalması için aktif hücre nereye yerleştirilmelidir?',
              options: [
                { id: 'a', text: 'A1' },
                { id: 'b', text: 'B2' },
                { id: 'c', text: 'B1' },
                { id: 'd', text: 'A2' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel aktif hücrenin solunu ve üstünü dondurur. B2 hücresindeyken dondurursanız A sütunu ve 1. satır kilitlenir.',
              measuredSkill: 'İki yönlü bölmeleri dondurma kuralı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 4
  {
    id: 4,
    category: 'Giriş ve Çalışma Ortamı',
    title: '4. Veri Girişi ve Verimli Çalışma Teknikleri',
    subtitle: 'Otomatik doldurma tutamacı, sayı serileri, özel listeler ve özel yapıştır',
    iconName: 'Edit3',
    description: 'Verileri tek tek elle yazmak yerine Otomatik Doldurma (AutoFill) tutamacıyla seriler oluşturmayı, gün ve ay listelerini genişletmeyi ve Özel Yapıştır seçeneklerini öğrenin.',
    lessons: [
      {
        id: 'sec4_l1',
        phaseId: 4,
        unitId: 'u4_1',
        title: 'Otomatik Doldurma Tutamacı ve Sayı Serileri Üretme',
        shortDesc: 'Hücrenin sağ alt köşesindeki siyah kareden çekerek 1, 2, 3.. şeklinde ardışık seri üretme.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Otomatik Doldurma',
        primaryGoal: 'Sayı serilerini el ile tek tek yazmadan otomatik doldurma tutamacıyla anında türetmek.',
        prerequisites: ['sec3_l5'],
        commonMistakes: ['Yalnızca tek bir 1 yazıp aşağı çekince serinin artmayıp sadece 1 leri kopyalaması (en az iki sayı seçilmelidir)'],
        successCriteria: 'Sayı serisi mantığını kavramak ve hedef hücrede seriyi devam ettirmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's4_1',
        sheetName: 'SeriÜretme',
        headers: ['Sıra No', 'Adım', 'Açıklama'],
        rows: [
          [1, 'Adım 1', 'Hücreyi seç'],
          [2, 'Adım 2', 'Sağ alt köşeye gel'],
          [3, 'Adım 3', 'Aşağı doğru sürükle'],
        ],
        objectives: [
          { id: 'o1', title: 'Seri Mantığı', description: 'Excel in artış miktarını algılayıp seriyi devam ettirme prensibi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Doldurma Tutamacı (Fill Handle)',
            explanation: 'Hücreyi seçtiğinizde sağ alt köşesinde beliren küçük yeşil/siyah kareye Doldurma Tutamacı denir. 1 ve 2 yazıp ikisini seçtikten sonra bu tutamacı aşağı çekerseniz Excel 3, 4, 5 şeklinde otomatik doldurur.',
            speechText: 'Excel akıllı bir programdır. 1 ve 2 yazıp ikisini birden tutup aşağı çekerseniz aradaki farkı anlar ve 3, 4, 5 diye seriyi devam ettirir.'
          }
        ],
        tasks: [
          {
            id: 't4_1_1',
            stepNumber: 1,
            instruction: 'A5 hücresine serinin devamı olan 4 sayısını yazın.',
            targetCell: 'A5',
            hints: ['A5 hücresini seçin.', '4 yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'A5',
              expectedValue: 4,
              successMessage: 'Harika! Seri adımını başarıyla devam ettirdiniz.'
            }
          }
        ],
        quiz: {
          id: 'q4_1',
          title: 'Seri Üretme Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q4_1_1',
              question: 'A1 hücresine 5, A2 hücresine 10 yazıp ikisini seçerek doldurma tutamacından aşağı çekilirse A3 hücresinde hangi sayı oluşur?',
              options: [
                { id: 'a', text: '11' },
                { id: 'b', text: '15' },
                { id: 'c', text: '20' },
                { id: 'd', text: '10' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel 5 ten 10 a artışın 5 olduğunu anlar ve 10 un üzerine 5 ekleyerek 15 yazar.',
              measuredSkill: 'Aritmetik seri algılama'
            }
          ]
        }
      },
      {
        id: 'sec4_l2',
        phaseId: 4,
        unitId: 'u4_2',
        title: 'Özel Listeler ile Gün ve Ay Serileri',
        shortDesc: 'Pazartesi veya Ocak yazıp çekildiğinde diğer gün ve ayların otomatik gelmesi mantığı.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Özel Listeler',
        primaryGoal: 'Haftanın günleri ve yılın aylarını tek bir hücreden otomatik doldurabilmek.',
        prerequisites: ['sec4_l1'],
        commonMistakes: ['Gün isimlerini yanlış yazıp Excel in listeyi tanıyamamasına yol açmak'],
        successCriteria: 'Gün ve ay serilerini kavramak ve tabloyu tamamlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's4_2',
        sheetName: 'GünAy',
        headers: ['Gün', 'Vardiya Görevlisi', 'Durum'],
        rows: [
          ['Pazartesi', 'Ali Vural', 'Tamamlandı'],
          ['Salı', 'Ayşe Kaya', 'Tamamlandı'],
          ['Çarşamba', 'Cemil Demir', 'Bekliyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Dahili Listeler', description: 'Excel de yerleşik Türkçe gün ve ay listelerinin kullanımı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Yerleşik Özel Listeler',
            explanation: 'Excel hafızasında Pazartesi-Salı-Çarşamba... ve Ocak-Şubat-Mart... listeleri hazır bulunur. Sadece "Pazartesi" yazıp aşağı çekmeniz tüm haftayı doldurmak için yeterlidir.',
            speechText: 'Excel günleri ve ayları ezbere bilir. Sadece ilk günü yazıp tutamaktan çekerseniz haftanın diğer günleri kendiliğinden listelenir.'
          }
        ],
        tasks: [
          {
            id: 't4_2_1',
            stepNumber: 1,
            instruction: 'A5 hücresine haftanın dördüncü günü olan "Perşembe" yazın.',
            targetCell: 'A5',
            hints: ['A5 hücresini seçin.', 'Perşembe yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'A5',
              expectedValue: 'Perşembe',
              successMessage: 'Tebrikler! Gün serisi başarıyla tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q4_2',
          title: 'Gün ve Ay Listeleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q4_2_1',
              question: 'Bir hücreye "Ocak" yazıp doldurma tutamacından sağa doğru 3 hücre çekilirse sıradaki hücrede ne yazar?',
              options: [
                { id: 'a', text: 'Ocak' },
                { id: 'b', text: 'Şubat' },
                { id: 'c', text: '1' },
                { id: 'd', text: 'Pazartesi' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel ayları sağa veya aşağı doğru otomatik olarak Şubata genişletir.',
              measuredSkill: 'Dönemsel liste genişletme'
            }
          ]
        }
      },
      {
        id: 'sec4_l3',
        phaseId: 4,
        unitId: 'u4_3',
        title: 'Özel Yapıştır (Paste Special) Seçenekleri',
        shortDesc: 'Yalnızca değerleri yapıştırma (Değerleri Yapıştır), formülsüz aktarma ve devrik yapıştırma.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Özel Yapıştır',
        primaryGoal: 'Formüllü hücreleri formüllerinden arındırarak salt değer (statik metin/sayı) olarak yapıştırmak.',
        prerequisites: ['sec4_l2'],
        commonMistakes: ['Formüllü bir hücreyi normal yapıştırıp #BAŞV! hatası almak'],
        successCriteria: 'Değerleri yapıştır mantığını kavramak ve statik değer üretmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's4_3',
        sheetName: 'ÖzelYapıştır',
        headers: ['İşlem Adı', 'Kısayol', 'Kullanım Amacı'],
        rows: [
          ['Değerleri Yapıştır', 'Ctrl+Alt+V > D', 'Formülü kaldırıp sadece sonucu korur'],
          ['Formülleri Yapıştır', 'Ctrl+Alt+V > F', 'Biçimi bozmadan sadece formülü aktarır'],
          ['İşlemi Tersine Çevir', 'Ctrl+Alt+V > E', 'Satırları sütuna, sütunları satıra çevirir'],
        ],
        objectives: [
          { id: 'o1', title: 'Değerleri Yapıştırma', description: 'Formül bağımlılığını koparıp kalıcı veri oluşturma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Neden Değerleri Yapıştır?',
            explanation: 'Bir formül başka hücrelere bağlıdır. O hücreyi kopyalayıp başka sayfaya yapıştırdığınızda başvurular bozulabilir. "Değerleri Yapıştır" dediğinizde Excel formülü atar ve sadece çıkan sonucu (örneğin 1500 ü) yazar.',
            speechText: 'En çok kullanacağınız özelliklerden biri Değerleri Yapıştır komutudur. Formülü yok edip yalnızca ortaya çıkan nihai sonucu saklamanızı sağlar.'
          }
        ],
        tasks: [
          {
            id: 't4_3_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Uygulandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Uygulandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Uygulandı',
              successMessage: 'Harika! Özel yapıştır prensibi öğrenildi.'
            }
          }
        ],
        quiz: {
          id: 'q4_3',
          title: 'Özel Yapıştır Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q4_3_1',
              question: 'İçinde "=A1*B1" formülü bulunan ve sonucu 500 olan bir hücreyi başka bir yere sadece 500 sayısı olarak aktarmak için hangi yapıştırma seçeneği kullanılır?',
              options: [
                { id: 'a', text: 'Normal Yapıştır (Ctrl+V)' },
                { id: 'b', text: 'Değerleri Yapıştır (Paste Values)' },
                { id: 'c', text: 'Biçimlendirmeyi Yapıştır' },
                { id: 'd', text: 'Köprü Olarak Yapıştır' }
              ],
              correctOptionId: 'b',
              explanation: 'Değerleri Yapıştır seçeneği formülü kaldırarak yalnızca hücredeki nihai sonucu aktarır.',
              measuredSkill: 'Değer yapıştırma yetkinliği'
            }
          ]
        }
      },
      {
        id: 'sec4_l4',
        phaseId: 4,
        unitId: 'u4_4',
        title: 'Veri Türleri: Metin, Sayı ve Mantıksal Değerlerin Doğası',
        shortDesc: 'Excel in metinleri sola, sayıları sağa dayama kuralı ve veri türü uyumsuzlukları.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Veri Türleri',
        primaryGoal: 'Sayı gibi görünen ancak metin olarak saklanan verileri tespit edebilmek.',
        prerequisites: ['sec4_l3'],
        commonMistakes: ['Rakamın önüne tek tırnak koyarak metne dönüştüğünü fark etmemek'],
        successCriteria: 'Sayı ve metin hizalama kurallarını kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's4_4',
        sheetName: 'VeriTürleri',
        headers: ['Veri', 'Hizalama', 'Gerçek Tür'],
        rows: [
          ['12500', 'Sağa Dayalı', 'Sayı'],
          ['İstanbul', 'Sola Dayalı', 'Metin'],
          ['DOĞRU', 'Ortalı', 'Mantıksal (Boolean)'],
        ],
        objectives: [
          { id: 'o1', title: 'Doğal Hizalama', description: 'Biçimsiz bir hücrede Excel in veri türüne göre yaptığı varsayılan hizalamayı okuma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Excel Hizalama İpucu',
            explanation: 'Hiçbir hizalama butonuna basmadığınızda Excel sayıları sağa yaslar, metinleri sola yaslar, DOĞRU/YANLIŞ mantıksal değerlerini ise ortalar. Bir sayı sola yaslı duruyorsa o sayı değil metindir!',
            speechText: 'Altın kural: Excel de sayılar her zaman sağa, metinler ise sola yaslanır. Sola yaslı bir sayı görürseniz bilin ki o metin olarak algılanmıştır ve toplanamaz.'
          }
        ],
        tasks: [
          {
            id: 't4_4_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "Analiz Edildi" yazın.',
            targetCell: 'C5',
            hints: ['C5 hücresini seçin.', 'Analiz Edildi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'C5',
              expectedValue: 'Analiz Edildi',
              successMessage: 'Tebrikler! Veri türleri adımı tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q4_4',
          title: 'Veri Türleri Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q4_4_1',
              question: 'Herhangi bir hizalama ayarı yapılmamış bir hücrede girilen değer sola yaslı duruyorsa Excel bu değeri ne olarak kabul etmiştir?',
              options: [
                { id: 'a', text: 'Sayı' },
                { id: 'b', text: 'Metin' },
                { id: 'c', text: 'Tarih' },
                { id: 'd', text: 'Mantıksal değer' }
              ],
              correctOptionId: 'b',
              explanation: 'Excel de varsayılan olarak metinler sola, sayılar ve tarihler sağa yaslanır.',
              measuredSkill: 'Veri türü doğal hizalaması'
            }
          ]
        }
      },
      {
        id: 'sec4_l5',
        phaseId: 4,
        unitId: 'u4_5',
        title: 'Bölüm 4 Veri Girişi Değerlendirme Sınavı',
        shortDesc: 'Otomatik doldurma, özel listeler ve özel yapıştırma konularının ölçüldüğü final sınavı.',
        category: 'Giriş ve Çalışma Ortamı',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 4 veri girişi teknikleri kazanımlarını değerlendirmek.',
        prerequisites: ['sec4_l1', 'sec4_l2', 'sec4_l3', 'sec4_l4'],
        commonMistakes: ['Seri oluşturma mantığını atlamak'],
        successCriteria: 'Sınavdan en az %80 alarak Bölüm 5 e hak kazanmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's4_5',
        sheetName: 'Test4',
        headers: ['Kavram', 'Önemi', 'Kazanım'],
        rows: [
          ['Fill Handle', 'Çok Yüksek', 'Hızlı veri serisi'],
          ['Özel Listeler', 'Yüksek', 'Gün/Ay otomasyonu'],
          ['Değerleri Yapıştır', 'Kritik', 'Formül soyutlama'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Girişi Ustalığı', description: 'Hızlı ve hatasız veri oluşturma becerisi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 4 Finali',
            explanation: 'Veri girişini ustalıkla tamamladınız. Şimdi final sınavını yanıtlayarak Biçimlendirme bölümüne geçin.',
            speechText: 'Veri girişinde hız kazanma bölümünü başarıyla tamamladınız. Sınavınızı çözüp hücre biçimlendirmeye geçelim.'
          }
        ],
        tasks: [
          {
            id: 't4_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 4 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q4_5',
          title: 'Bölüm 4 Kapsamlı Veri Girişi Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q4_5_1',
              question: 'Doldurma tutamacı çift tıklandığında (Double-Click Fill) Excel neye göre aşağı doldurur?',
              options: [
                { id: 'a', text: 'Her zaman 10 satır doldurur' },
                { id: 'b', text: 'Solundaki veya sağındaki komşu sütunun son dolu satırına kadar doldurur' },
                { id: 'c', text: 'Sayfanın en sonuna (1048576. satıra) kadar doldurur' },
                { id: 'd', text: 'Hiçbir işlem yapmaz' }
              ],
              correctOptionId: 'b',
              explanation: 'Doldurma tutamacı çift tıklandığında yan sütundaki dolu verileri baz alarak tablonun bittiği satıra kadar anında doldurur.',
              measuredSkill: 'Doldurma tutamacı çift tıklama kuralı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 5
  {
    id: 5,
    category: 'Biçimlendirme & Tasarım',
    title: '5. Hücre Biçimlendirme ve Profesyonel Tablolar',
    subtitle: 'Sayı formatları, para birimi, yüzde, hizalama, kenarlıklar ve kurumsal tablo tasarımı',
    iconName: 'Palette',
    description: 'Sayıların para birimi ve yüzde olarak biçimlendirilmesi, binlik ayraçları, ondalık basamak kontrolü, metin hizalama ve kurumsal kenarlık stillerini öğrenin.',
    lessons: [
      {
        id: 'sec5_l1',
        phaseId: 5,
        unitId: 'u5_1',
        title: 'Sayı, Para Birimi ve Yüzde Formatlarını Ayarlama',
        shortDesc: 'Hücreleri TL (₺), USD ($), yüzde (%) ve ondalık basamaklı sayılara dönüştürme.',
        category: 'Biçimlendirme & Tasarım',
        groupTitle: 'Sayı Formatları',
        primaryGoal: 'Ham sayıların yanına elle "TL" veya "%" yazmadan Excel in Sayı Biçimi menüsüyle profesyonelce formatlamak.',
        prerequisites: ['sec4_l5'],
        commonMistakes: ['Hücreye "1500 TL" yazmak; bu işlem sayıyı metne çevirir ve formüllerle toplanamaz hale getirir!'],
        successCriteria: 'Sayı biçimlendirme kurallarını kavramak ve doğru biçimlendirilmiş veri oluşturmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's5_1',
        sheetName: 'SayıBiçimi',
        headers: ['Kalem', 'Ham Değer', 'Biçimli Hedef'],
        rows: [
          ['Satış Cirosu', 250000, '250.000 ₺'],
          ['Kâr Oranı', 0.185, '%18,5'],
          ['Adet', 1400, '1.400'],
        ],
        objectives: [
          { id: 'o1', title: 'Sayı Biçimlendirme Mantığı', description: 'Değerin matematiksel özünü değiştirmeden ekrandaki görünüşünü düzenleme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'En Büyük Excel Hatasından Kaçının',
            explanation: 'Hücreye asla elle "TL" veya "₺" yazmayın. Hücreye sadece 250000 yazıp ardından Giriş sekmesindeki Para Birimi (₺) simgesine tıklayın. Böylece hücre sayı olarak kalır ve formüllerde hesaplanabilir.',
            speechText: 'Asla sayıların yanına elle TL veya yüzde işareti yazmayın! Sayı biçimlendirmeyi her zaman yukarıdaki Giriş menüsünden yapmalıyız, aksi takdirde Excel onu metin sayar ve toplayamaz.'
          }
        ],
        tasks: [
          {
            id: 't5_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Doğru Biçim" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Doğru Biçim yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Doğru Biçim',
              successMessage: 'Harika! Sayı biçimlendirme kuralını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q5_1',
          title: 'Sayı Biçimlendirme Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q5_1_1',
              question: 'Bir hücreye 0.25 yazıp Yüzde Stili (%) butonuna basılırsa hücrede ne görünür?',
              options: [
                { id: 'a', text: '0.25%' },
                { id: 'b', text: '%25' },
                { id: 'c', text: '250' },
                { id: 'd', text: '#DEĞER!' }
              ],
              correctOptionId: 'b',
              explanation: '0.25 değeri yüzdeye çevrildiğinde 100 ile çarpılarak %25 olarak gösterilir.',
              measuredSkill: 'Yüzde biçimlendirme matematiği'
            }
          ]
        }
      },
      {
        id: 'sec5_l2',
        phaseId: 5,
        unitId: 'u5_2',
        title: 'Metin Hizalama, Metni Kaydır ve Hücre Birleştirme',
        shortDesc: 'Metni Kaydır (Wrap Text) ile uzun başlıkları sığdırma ve Birleştir ve Ortala kuralları.',
        category: 'Biçimlendirme & Tasarım',
        groupTitle: 'Hizalama',
        primaryGoal: 'Sütunları aşırı genişletmeden çok satırlı başlıklar oluşturabilmek için Metni Kaydır özelliğini kullanmak.',
        prerequisites: ['sec5_l1'],
        commonMistakes: ['Veri tablolarının içinde hücre birleştirmek (bu durum sıralama ve formülleri bozar)'],
        successCriteria: 'Hizalama ve metin kaydırma kurallarını anlamak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's5_2',
        sheetName: 'Hizalama',
        headers: ['Personel Adı', 'Yıllık Satış Performansı ve Hedef Tutarı', 'Durum'],
        rows: [
          ['Ahmet Yılmaz', 350000, 'Hedefe Ulaşıldı'],
          ['Zeynep Kaya', 420000, 'Hedef Aşıldı'],
        ],
        objectives: [
          { id: 'o1', title: 'Metni Kaydır', description: 'Sütun genişliğini bozmadan satır yüksekliğini artırarak sığdırma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Metni Kaydır (Wrap Text)',
            explanation: 'Uzun bir başlığınız varsa sütunu devasa yapmak yerine "Metni Kaydır" butonuna basın. Başlık 2-3 satıra bölünerek sütun içine estetikçe sığar.',
            speechText: 'Uzun başlıklar için sütunu sonsuza kadar açmak yerine Metni Kaydır özelliğini kullanırız. Böylece başlık iki satır halinde düzenli görünür.'
          }
        ],
        tasks: [
          {
            id: 't5_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Uyarlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Uyarlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Uyarlandı',
              successMessage: 'Tebrikler! Hizalama ve kaydırma pratiği tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q5_2',
          title: 'Hizalama Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q5_2_1',
              question: 'Bir hücre içinde aynı hücrede alt satıra geçmek için hangi klavye kısayolu kullanılır?',
              options: [
                { id: 'a', text: 'Enter' },
                { id: 'b', text: 'Alt + Enter' },
                { id: 'c', text: 'Ctrl + Enter' },
                { id: 'd', text: 'Shift + Enter' }
              ],
              correctOptionId: 'b',
              explanation: 'Alt + Enter kısayolu hücre içinde yeni bir satırbaşı açar.',
              measuredSkill: 'Hücre içi satırbaşı kısayolu'
            }
          ]
        }
      },
      {
        id: 'sec5_l3',
        phaseId: 5,
        unitId: 'u5_3',
        title: 'Kenarlıklar, Dolgu Renkleri ve Kurumsal Renk Paletleri',
        shortDesc: 'Tablo kenarlıkları, kalın alt kenarlık, kurumsal zümrüt/lacivert başlık stilleri.',
        category: 'Biçimlendirme & Tasarım',
        groupTitle: 'Stil ve Renk',
        primaryGoal: 'Gözü yormayan, profesyonel kurumsal renk paletiyle şık finansal tablolar oluşturmak.',
        prerequisites: ['sec5_l2'],
        commonMistakes: ['Aşırı parlak (fosforlu sarı, parlak kırmızı) renkler kullanarak ciddiyetten uzaklaşmak'],
        successCriteria: 'Kenarlık ve dolgu kurallarını kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's5_3',
        sheetName: 'Kenarlıklar',
        headers: ['Hesap Kodu', 'Hesap Adı', 'Borç (TL)', 'Alacak (TL)'],
        rows: [
          ['100', 'Kasa Hesabı', 45000, 0],
          ['102', 'Bankalar', 185000, 25000],
          ['120', 'Alıcılar', 92000, 14000],
        ],
        objectives: [
          { id: 'o1', title: 'Finansal Kenarlıklar', description: 'Toplam satırında üst tek çizgi, alt çift çizgi standardı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Muhasebe Kenarlık Standardı',
            explanation: 'Finansal tablolarda toplam satırının üstünde ince tek çizgi, altında ise çift çizgi (Üst ve Kalın Çift Alt Kenarlık) kullanılır. Bu, tablonun kapandığını ve denetlendiğini simgeler.',
            speechText: 'Kurumsal raporlarda başlıklar koyu zümrüt veya lacivert, toplam satırları ise altı çift çizgili olmalıdır. Bu uluslararası bir finans standardıdır.'
          }
        ],
        tasks: [
          {
            id: 't5_3_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Biçimlendi" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Biçimlendi yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Biçimlendi',
              successMessage: 'Harika! Kurumsal kenarlık adımı tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q5_3',
          title: 'Kenarlıklar Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q5_3_1',
              question: 'Finansal ve muhasebe tablolarında genel toplam satırının altında genellikle hangi kenarlık stili tercih edilir?',
              options: [
                { id: 'a', text: 'Kesikli çizgi' },
                { id: 'b', text: 'Çift çizgi (Double bottom border)' },
                { id: 'c', text: 'Kenarlıksız' },
                { id: 'd', text: 'Kırmızı kalın çizgi' }
              ],
              correctOptionId: 'b',
              explanation: 'Uluslararası muhasebe standardında nihai toplamlar çift alt çizgiyle kapatılır.',
              measuredSkill: 'Finansal tablo biçim standardı'
            }
          ]
        }
      },
      {
        id: 'sec5_l4',
        phaseId: 5,
        unitId: 'u5_4',
        title: 'Biçim Boyacısı (Format Painter) ile Stil Kopyalama',
        shortDesc: 'Bir hücredeki yazı tipi, dolgu, kenarlık ve sayı formatını tek tıkla diğer hücrelere aktarma.',
        category: 'Biçimlendirme & Tasarım',
        groupTitle: 'Stil Kopyalama',
        primaryGoal: 'Tek tek elle renk ve yazı tipi seçmek yerine Biçim Boyacısı ile anında stil transferi yapmak.',
        prerequisites: ['sec5_l3'],
        commonMistakes: ['Biçim boyacısına çift tıklandığında kilitlendiğini bilmeyip her hücre için tekrar butona basmak'],
        successCriteria: 'Biçim boyacısı mekanizmasını kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's5_4',
        sheetName: 'BiçimBoyacısı',
        headers: ['Kaynak Stil', 'Hedef Hücre', 'Sonuç'],
        rows: [
          ['Kalın + Yeşil', 'Düz Metin', 'Bekliyor'],
          ['Para Birimi ₺', 'Düz Sayı', 'Bekliyor'],
        ],
        objectives: [
          { id: 'o1', title: 'Biçim Boyacısı Çift Tıklama', description: 'Çift tıklayarak boyacıyı açık tutma ve ardışık boyama yapabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Sihirli Fırça',
            explanation: 'Giriş sekmesindeki fırça simgesi (Biçim Boyacısı) içeriği kopyalamaz, sadece stili kopyalar. Çift tıklarsanız siz Esc ye basana kadar fırça elinizde kalır ve istediğiniz kadar hücreyi boyayabilirsiniz.',
            speechText: 'Biçim boyacısı zaman kazandıran harika bir araçtır. Beğendiğiniz bir hücreyi seçip fırçaya çift tıklarsanız, istediğiniz tüm hücrelere aynı kurumsal stili anında aktarabilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't5_4_1',
            stepNumber: 1,
            instruction: 'C2 hücresine "Boyandı" yazın.',
            targetCell: 'C2',
            hints: ['C2 hücresini seçin.', 'Boyandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'C2',
              expectedValue: 'Boyandı',
              successMessage: 'Tebrikler! Biçim boyacısı adımı başarıyla tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q5_4',
          title: 'Biçim Boyacısı Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q5_4_1',
              question: 'Biçim boyacısı simgesine ÇİFT tıklandığında ne olur?',
              options: [
                { id: 'a', text: 'Biçimlendirme iptal edilir' },
                { id: 'b', text: 'Biçim birden çok hücreye ardışık olarak uygulanabilir, araç kilitli kalır' },
                { id: 'c', text: 'Hücre içeriği tamamen silinir' },
                { id: 'd', text: 'Renk paleti açılır' }
              ],
              correctOptionId: 'b',
              explanation: 'Çift tıklama biçim boyacısını sabitleştirir; Esc tuşuna basılana kadar ardışık boyama yapılabilir.',
              measuredSkill: 'Biçim boyacısı çift tık fonksiyonu'
            }
          ]
        }
      },
      {
        id: 'sec5_l5',
        phaseId: 5,
        unitId: 'u5_5',
        title: 'Bölüm 5 Biçimlendirme ve Tablo Tasarımı Final Sınavı',
        shortDesc: 'Sayı formatları, metin kaydırma, kenarlıklar ve kurumsal tablo tasarımı final sınavı.',
        category: 'Biçimlendirme & Tasarım',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 5 teki tüm tablo biçimlendirme ve tasarım kazanımlarını ölçmek.',
        prerequisites: ['sec5_l1', 'sec5_l2', 'sec5_l3', 'sec5_l4'],
        commonMistakes: ['Tasarım standartlarını atlamak'],
        successCriteria: 'Sınavdan en az %80 alarak Bölüm 6 Formüller bölümüne geçmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's5_5',
        sheetName: 'Final5',
        headers: ['Kazanım', 'Seviye', 'Durum'],
        rows: [
          ['Sayı Biçimlendirme', 'Temel', 'Ölçüldü'],
          ['Metni Kaydır', 'Temel', 'Ölçüldü'],
          ['Kurumsal Kenarlık', 'Orta', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Tasarım Ustalığı', description: 'Verileri görsel olarak temiz ve anlaşılır kılma becerisi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Tasarım Bölümü Tamamlandı',
            explanation: 'Tebrikler! Excel de profesyonel tablo tasarımını ve biçimlendirmeyi öğrendiniz. Artık Excel in asıl gücü olan FORMÜLLERE ve HESAPLAMA MOTORUNA geçmeye hazırsınız!',
            speechText: 'Harika bir aşamayı geride bıraktınız. Tablolarınız artık kurumsal ve okunabilir. Şimdi Excel in kalbine, yani formüller dünyasına adım atıyoruz!'
          }
        ],
        tasks: [
          {
            id: 't5_5_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 5 başarıyla tamamlandı. Formüller bölümüne geçebilirsiniz!'
            }
          }
        ],
        quiz: {
          id: 'q5_5',
          title: 'Bölüm 5 Kapsamlı Tasarım Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q5_5_1',
              question: 'Aşağıdakilerden hangisi profesyonel bir Excel tablosunda önerilmeyen bir uygulamadır?',
              options: [
                { id: 'a', text: 'Başlık satırında koyu arka plan ve beyaz metin kullanmak' },
                { id: 'b', text: 'Sayısal verilerin içine elle "TL" metni yazmak' },
                { id: 'c', text: 'Metinleri sola, sayıları sağa yaslamak' },
                { id: 'd', text: 'Uzun başlıklar için Metni Kaydır özelliğini kullanmak' }
              ],
              correctOptionId: 'b',
              explanation: 'Sayıların yanına elle TL yazmak hücreyi metne dönüştürür ve matematiksel işlemleri bozar.',
              measuredSkill: 'Profesyonel biçimlendirme kuralları'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_1_TO_5', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section1to5.ts'), content, 'utf8');
console.log('Successfully generated section1to5.ts (25 lessons)');
