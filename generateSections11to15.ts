import * as fs from 'fs';
import * as path from 'path';
import { generateFileContent } from './buildAllCurriculum';

const PHASES = [
  // SECTION 11: Tarih, Saat ve İş Günü Hesaplamaları
  {
    id: 11,
    category: 'Tarih ve Saat',
    title: '11. Tarih, Saat ve İş Günü Hesaplamaları',
    subtitle: 'BUGÜN, ŞİMDİ, GÜN, AY, YIL, TARİH, TAMİŞGÜNÜ ve İŞGÜNÜ ile termin takibi',
    iconName: 'Calendar',
    description: 'Excel in arka plandaki tarih seri numarası mantığını, dinamik güncel tarih üretimini, fatura vadesi hesaplamayı, resmi tatilleri düşerek iş günü analizi yapmayı öğrenin.',
    lessons: [
      {
        id: 'sec11_l1',
        phaseId: 11,
        unitId: 'u11_1',
        title: 'BUGÜN (TODAY) ve ŞİMDİ (NOW) Dinamik Tarih Fonksiyonları',
        shortDesc: 'Çalışma kitabını her açtığınızda sistemin güncel tarihini ve saatini getirme.',
        category: 'Tarih ve Saat',
        groupTitle: 'Dinamik Tarih',
        primaryGoal: 'Raporlarda bugünün tarihini dinamik olarak üretip fatura vade farklarını hesaplamak.',
        prerequisites: ['sec10_l6'],
        commonMistakes: ['BUGÜN fonksiyonunun parantezinin içine bir şey yazmaya çalışmak (BUGÜN() boş parantezle kullanılır)'],
        successCriteria: 'BUGÜN fonksiyonunu uygulayabilmek.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: ['BUGÜN'],
        sheetId: 's11_1',
        sheetName: 'GüncelTarih',
        headers: ['Rapor Adı', 'Tarih'],
        rows: [
          ['Günlük Satış Özeti', ''],
        ],
        objectives: [
          { id: 'o1', title: 'BUGÜN Fonksiyonu', description: '=BUGÜN() ile argümansız dinamik sistem tarihi alma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Tarihlerin Arka Planı',
            explanation: 'Excel de 1 Ocak 1900 tarihi 1 sayısıdır. BUGÜN() fonksiyonu bugün kaçıncı günde olduğumuzun seri numarasını döner ve tarih olarak gösterir. Parantezi her zaman boştur: =BUGÜN()',
            speechText: 'Excel de bugünün tarihini dinamik olarak yazdırmak için =BUGÜN() formülünü kullanırız. Dosyayı yarın açtığınızda tarih otomatik olarak yarına güncellenir.'
          }
        ],
        tasks: [
          {
            id: 't11_1_1',
            stepNumber: 1,
            instruction: 'B2 hücresine "=BUGÜN()" formülünü yazın.',
            targetCell: 'B2',
            hints: [
              'B2 hücresini seçin.',
              '=BUGÜN() yazın.',
              'Enter a basın. Günün tarihi görünecektir.'
            ],
            validation: {
              targetCell: 'B2',
              expectedFormulaKeywords: ['BUGÜN', 'TODAY'],
              successMessage: 'Tebrikler! BUGÜN fonksiyonunu başarıyla yazdınız.'
            }
          }
        ],
        quiz: {
          id: 'q11_1',
          title: 'BUGÜN Fonksiyonu Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q11_1_1',
              question: 'Aşağıdakilerden hangisi hem bugünün tarihini HEM DE anlık saat ve dakikayı veren fonksiyondur?',
              options: [
                { id: 'a', text: 'BUGÜN' },
                { id: 'b', text: 'ŞİMDİ (NOW)' },
                { id: 'c', text: 'SAAT' },
                { id: 'd', text: 'TARİH' }
              ],
              correctOptionId: 'b',
              explanation: 'ŞİMDİ (NOW) fonksiyonu tarih ile birlikte anlık sistem saatini ve dakikasını da ekler.',
              measuredSkill: 'ŞİMDİ vs BUGÜN farkı'
            }
          ]
        }
      },
      {
        id: 'sec11_l2',
        phaseId: 11,
        unitId: 'u11_2',
        title: 'İki Tarih Arasındaki Gün Farkı ve Vade Hesaplama',
        shortDesc: 'Vade tarihi ile fatura tarihi arasındaki gecikme gününü basit çıkarma işlemiyle bulma.',
        category: 'Tarih ve Saat',
        groupTitle: 'Vade Hesaplama',
        primaryGoal: 'İki tarih hücresini birbirinden çıkararak geçen gün sayısını matematiksel olarak bulmak.',
        prerequisites: ['sec11_l1'],
        commonMistakes: ['Tarih farkı sonucunun da tarih olarak biçimlenmesi (sayı olarak biçimlendirilmelidir)'],
        successCriteria: 'İki tarih farkını hesaplayıp gecikme gününü bulmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's11_2',
        sheetName: 'VadeTakibi',
        headers: ['Fatura No', 'Fatura Tarihi', 'Ödeme Tarihi', 'Geçen Gün'],
        rows: [
          ['FTR-001', '2026-10-01', '2026-10-16', 0],
          ['FTR-002', '2026-09-15', '2026-10-15', 0],
        ],
        objectives: [
          { id: 'o1', title: 'Tarih Aritmetiği', description: 'Büyük tarihten küçük tarihi çıkararak gün sayısına ulaşma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Tarihler Arasında Çıkarma',
            explanation: 'Tarihler arka planda sayı olduğu için =C2-B2 formülü iki tarih arasında kaç gün olduğunu net olarak verir.',
            speechText: 'Excel de tarihler sayıdır. Ödeme tarihinden fatura tarihini çıkardığınızda aradaki gün sayısını doğrudan elde edersiniz.'
          }
        ],
        tasks: [
          {
            id: 't11_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=C2-B2" formülünü yazarak geçen gün sayısını hesaplayın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=C2-B2 yazın.',
              '16 Ekim - 1 Ekim = 15 gün çıkmalıdır.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 15,
              successMessage: 'Harika! Tarih farkını başarıyla hesapladınız.'
            }
          }
        ],
        quiz: {
          id: 'q11_2',
          title: 'Tarih Aritmetiği Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q11_2_1',
              question: 'A1 hücresinde bir tarih varken, o tarihten 30 gün sonraki tarihi bulmak için hangi formül yazılır?',
              options: [
                { id: 'a', text: '=A1 + 30' },
                { id: 'b', text: '=TOPLA(A1; "30 gün")' },
                { id: 'c', text: '=TARİH(A1 + 30)' },
                { id: 'd', text: '=GÜN(A1) + 30' }
              ],
              correctOptionId: 'a',
              explanation: 'Excel de her gün 1 tam sayısına eşittir; tarihe 30 eklemek 30 gün sonrasını verir.',
              measuredSkill: 'Tarihe gün ekleme matematiği'
            }
          ]
        }
      },
      {
        id: 'sec11_l3',
        phaseId: 11,
        unitId: 'u11_3',
        title: 'TAMİŞGÜNÜ (NETWORKDAYS) ile Hafta Sonlarını Düşme',
        shortDesc: 'Cumartesi-Pazar ve resmi tatilleri çıkararak iki tarih arasındaki net çalışma gününü bulma.',
        category: 'Tarih ve Saat',
        groupTitle: 'İş Günü Analizi',
        primaryGoal: 'İK bordro ve proje yönetiminde hafta sonlarını düşerek net çalışma gününü hesaplamak.',
        prerequisites: ['sec11_l2'],
        commonMistakes: ['Hafta sonlarının otomatik düşüldüğünü unutup elle gün eksiltmeye çalışmak'],
        successCriteria: 'TAMİŞGÜNÜ fonksiyonu ile net mesai gününü hesaplamak.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: ['TAMİŞGÜNÜ'],
        sheetId: 's11_3',
        sheetName: 'İşGünü',
        headers: ['Proje', 'Başlangıç', 'Bitiş', 'Net İş Günü'],
        rows: [
          ['Yazılım Sprint 1', '2026-10-01', '2026-10-15', 0],
        ],
        objectives: [
          { id: 'o1', title: 'TAMİŞGÜNÜ Söz Dizimi', description: '=TAMİŞGÜNÜ(başlangıç; bitiş; [tatiller]) fonksiyonunun kavranması.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Hafta Sonlarını Otomatik Çıkarın',
            explanation: '1 Ekim Perşembe ile 15 Ekim Perşembe arasında 15 takvim günü vardır. Ancak aradaki 4 hafta sonu gününü düştüğünüzde net 11 iş günü kalır. =TAMİŞGÜNÜ(B2; C2) bu hesabı otomatik yapar.',
            speechText: 'Proje yönetimi ve İK hesaplarında takvim günleri değil iş günleri önemlidir. TAMİŞGÜNÜ fonksiyonu hafta sonlarını kendiliğinden düşerek net çalışma gününü verir.'
          }
        ],
        tasks: [
          {
            id: 't11_3_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "=TAMİŞGÜNÜ(B2; C2)" formülünü yazın.',
            targetCell: 'D2',
            hints: [
              'D2 hücresini seçin.',
              '=TAMİŞGÜNÜ(B2; C2) yazın.',
              'Sonuç 11 çıkacaktır.'
            ],
            validation: {
              targetCell: 'D2',
              expectedValue: 11,
              expectedFormulaKeywords: ['TAMİŞGÜNÜ', 'NETWORKDAYS'],
              successMessage: 'Tebrikler! Net iş günü hesabını başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q11_3',
          title: 'TAMİŞGÜNÜ Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q11_3_1',
              question: 'TAMİŞGÜNÜ fonksiyonu varsayılan olarak haftanın hangi günlerini tatil kabul eder?',
              options: [
                { id: 'a', text: 'Yalnızca Pazar' },
                { id: 'b', text: 'Cumartesi ve Pazar' },
                { id: 'c', text: 'Cuma ve Cumartesi' },
                { id: 'd', text: 'Hiçbirini' }
              ],
              correctOptionId: 'b',
              explanation: 'Standart TAMİŞGÜNÜ fonksiyonu Cumartesi ve Pazar günlerini hafta sonu kabul ederek düşer.',
              measuredSkill: 'Standart iş günü tatil kuralı'
            }
          ]
        }
      },
      {
        id: 'sec11_l4',
        phaseId: 11,
        unitId: 'u11_4',
        title: 'Bölüm 11 Tarih ve Saat Final Sınavı',
        shortDesc: 'BUGÜN, tarih aritmetiği, TAMİŞGÜNÜ ve vade hesaplamaları final sınavı.',
        category: 'Tarih ve Saat',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 11 deki tüm tarih ve iş günü kazanımlarını doğrulamak.',
        prerequisites: ['sec11_l1', 'sec11_l2', 'sec11_l3'],
        commonMistakes: ['Tarih fonksiyonlarını karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Arama ve Başvuru Fonksiyonları bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's11_4',
        sheetName: 'Final11',
        headers: ['Kazanım', 'Açıklama', 'Durum'],
        rows: [
          ['BUGÜN()', 'Sistem tarihi', 'Ölçüldü'],
          ['Tarih Çıkarma', 'Vade takibi', 'Ölçüldü'],
          ['TAMİŞGÜNÜ', 'Net iş günü', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Tarih Ustalığı', description: 'Kurumsal zaman analizlerini hatasız yönetme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 11 Finali',
            explanation: 'Tarih hesaplamalarını tamamladınız. Şimdi final sınavını yanıtlayarak Excel in en popüler konusu olan Arama ve Başvuru Fonksiyonlarına (DÜŞEYARA, ÇAPRAZARA) geçin.',
            speechText: 'Tarih ve iş günü hesaplarını harika tamamladınız! Şimdi Excel in en ünlü fonksiyonlarına, yani DÜŞEYARA ve ÇAPRAZARA ya geçiyoruz.'
          }
        ],
        tasks: [
          {
            id: 't11_4_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 11 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q11_4',
          title: 'Bölüm 11 Kapsamlı Tarih Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q11_4_1',
              question: 'Başlangıç tarihi A1 de olan 10 iş günü sürecek bir işin teslimat tarihini veren fonksiyon hangisidir?',
              options: [
                { id: 'a', text: '=A1 + 10' },
                { id: 'b', text: '=İŞGÜNÜ(A1; 10)' },
                { id: 'c', text: '=TAMİŞGÜNÜ(A1; 10)' },
                { id: 'd', text: '=GÜN(A1 + 10)' }
              ],
              correctOptionId: 'b',
              explanation: 'İŞGÜNÜ (WORKDAY) fonksiyonu verilen tarihe belirli sayıda iş günü ekleyerek bitiş tarihini verir.',
              measuredSkill: 'İŞGÜNÜ termin fonksiyonu'
            }
          ]
        }
      }
    ]
  },

  // SECTION 12: Arama ve Başvuru Fonksiyonları (The flagship section requested in detail!)
  {
    id: 12,
    category: 'Arama ve Başvuru',
    title: '12. Arama ve Başvuru Fonksiyonları',
    subtitle: 'DÜŞEYARA, YATAYARA, İNDİS, KAÇINCI, modern ÇAPRAZARA ve iki yönlü arama',
    iconName: 'Search',
    description: 'Excel in en kritik fonksiyonları: DÜŞEYARA (VLOOKUP) söz dizimi, tam ve yaklaşık eşleşme, sütun indeksi kısıtlamaları, İNDİS & KAÇINCI ikilisi ve modern ÇAPRAZARA (XLOOKUP) mimarisi.',
    lessons: [
      {
        id: 'sec12_l1',
        phaseId: 12,
        unitId: 'u12_1',
        title: 'Arama Fonksiyonlarının Amacı ve Tablo Mimarisi',
        shortDesc: 'Farklı tablolardaki verileri ortak anahtar (kod, ID, TC No) ile birbiriyle eşleştirme mantığı.',
        category: 'Arama ve Başvuru',
        groupTitle: 'Arama Temelleri',
        primaryGoal: 'İlişkisel veri tablolarında birincil anahtar (Primary Key) ile arama mantığını kavramak.',
        prerequisites: ['sec11_l4'],
        commonMistakes: ['Arama yapılan sütunda yinelenen kayıtlar olduğunu fark etmemek'],
        successCriteria: 'Tablo yapısını ve anahtar sütun kavramını anlamak.',
        level: 'Orta' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's12_1',
        sheetName: 'AramaMantığı',
        headers: ['Ürün Kodu', 'Ürün Adı', 'Fiyat (TL)', 'Kategori'],
        rows: [
          ['U101', 'Kablosuz Klavye', 1200, 'Aksesuar'],
          ['U102', 'Gaming Mouse', 850, 'Aksesuar'],
          ['U103', 'Ultra Monitör 34 inç', 14500, 'Elektronik'],
        ],
        objectives: [
          { id: 'o1', title: 'Arama Kavramı', description: 'Sol sütundaki kod ile sağ sütunlardaki bilgileri eşleştirme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Veri Tabanı Mantığı',
            explanation: 'İş hayatında binlerce satırlık ana ürün tablosu vardır. Satış faturası keserken sadece "U101" kodunu yazarız ve Excel o ürünün adını ve fiyatını ana tablodan otomatik çeker.',
            speechText: 'Arama fonksiyonları Excel in en çok kullanılan araçlarıdır. Bir ürün kodu veya müşteri numarası verip o kişinin adını, telefonunu veya borcunu başka bir tablodan anında çekeriz.'
          }
        ],
        tasks: [
          {
            id: 't12_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Kavrandı" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Kavrandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Kavrandı',
              successMessage: 'Harika! Arama mimarisi temelini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q12_1',
          title: 'Arama Mimarisi Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q12_1_1',
              question: 'DÜŞEYARA fonksiyonunun aranacak değeri bulabilmesi için tablo aralığının ilk sütunu ne olmalıdır?',
              options: [
                { id: 'a', text: 'En yüksek fiyat sütunu' },
                { id: 'b', text: 'Aranan anahtar değerin (kod, ID) bulunduğu sütun' },
                { id: 'c', text: 'Her zaman A sütunu' },
                { id: 'd', text: 'Tarih sütunu' }
              ],
              correctOptionId: 'b',
              explanation: 'DÜŞEYARA kesin bir kurala sahiptir: Aranan değer seçilen tablo aralığının her zaman en solundaki 1. sütununda yer almalıdır.',
              measuredSkill: 'DÜŞEYARA ilk sütun kuralı'
            }
          ]
        }
      },
      {
        id: 'sec12_l2',
        phaseId: 12,
        unitId: 'u12_2',
        title: 'DÜŞEYARA (VLOOKUP) Söz Dizimi ve 4 Parametrenin Anlamı',
        shortDesc: 'Aranan Değer, Tablo Dizisi, Sütun İndis Sayısı ve Aralık Arama (YANLIŞ/0) anatomisi.',
        category: 'Arama ve Başvuru',
        groupTitle: 'DÜŞEYARA',
        primaryGoal: '=DÜŞEYARA(aranan; tablo; sütun_no; 0) söz dizimiyle tam eşleşme arama yapmak.',
        prerequisites: ['sec12_l1'],
        commonMistakes: ['4. parametreye YANLIŞ veya 0 yazmayı unutmak (bu durumda yaklaşık eşleşme yapıp tamamen yanlış satırı getirir!)'],
        successCriteria: 'DÜŞEYARA formülüyle ürün fiyatını doğru çekmek.',
        level: 'Orta' as const,
        durationMinutes: 15,
        functionsUsed: ['DÜŞEYARA'],
        sheetId: 's12_2',
        sheetName: 'DÜŞEYARATam',
        headers: ['Kod', 'Ürün', 'Fiyat'],
        rows: [
          ['1001', 'Laptop', 25000],
          ['1002', 'Monitör', 6500],
          ['1003', 'Yazıcı', 4200],
          ['Aranan Kod:', '1002', 0],
        ],
        objectives: [
          { id: 'o1', title: 'DÜŞEYARA Anatomisi', description: '4 parametreyi eksiksiz tanımlayıp tam eşleşmeyle veri çekme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'DÜŞEYARA nın 4 Adımı',
            explanation: '=DÜŞEYARA(B5; A2:C4; 3; YANLIŞ). 1: Neyi arıyorsun? (B5 deki 1002 yi). 2: Nerede arıyorsun? (A2:C4 tablosunda). 3: Kaçıncı sütundaki veriyi istiyorsun? (3. sütundaki Fiyatı). 4: Tam mı arasın? (YANLIŞ veya 0).',
            speechText: 'DÜŞEYARA nın 4 parametresi vardır: Aranan değer, tablonun tamamı, getirilecek sütunun numarası ve tam eşleşme için YANLIŞ parametresi. Dördüncü parametreyi asla unutmayın!'
          }
        ],
        tasks: [
          {
            id: 't12_2_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "=DÜŞEYARA(B5; A2:C4; 3; YANLIŞ)" formülünü yazarak 1002 kodlu ürünün fiyatını çekin.',
            targetCell: 'C5',
            hints: [
              'C5 hücresini seçin.',
              '=DÜŞEYARA(B5; A2:C4; 3; YANLIŞ) yazın.',
              '1002 kodlu Monitörün fiyatı 6500 olarak gelecektir.'
            ],
            validation: {
              targetCell: 'C5',
              expectedValue: 6500,
              expectedFormulaKeywords: ['DÜŞEYARA', 'VLOOKUP'],
              successMessage: 'Tebrikler! DÜŞEYARA ile tam eşleşme aramasını başarıyla gerçekleştirdiniz.'
            }
          }
        ],
        quiz: {
          id: 'q12_2',
          title: 'DÜŞEYARA Temel Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q12_2_1',
              question: 'DÜŞEYARA fonksiyonunda 4. parametre olan [aralık_bak] kısmına "YANLIŞ" (veya 0) yazılmasının sebebi nedir?',
              options: [
                { id: 'a', text: 'Hata verirse sıfır yazması için' },
                { id: 'b', text: 'Birebir tam eşleşme aramak için' },
                { id: 'c', text: 'Büyük küçük harfe duyarlı yapmak için' },
                { id: 'd', text: 'Sütun sayısını belirlemek için' }
              ],
              correctOptionId: 'b',
              explanation: 'YANLIŞ (veya 0) parametresi tam eşleşme (Exact Match) yapılmasını emreder.',
              measuredSkill: 'DÜŞEYARA tam eşleşme parametresi'
            }
          ]
        }
      },
      {
        id: 'sec12_l3',
        phaseId: 12,
        unitId: 'u12_3',
        title: 'DÜŞEYARA\'da Yaklaşık Eşleşme (DOĞRU / 1) ile Komisyon ve Vergi Skalası',
        shortDesc: 'Aralıklı tablolarda (Örn: 0-10 bin arası %2, 10-50 bin arası %5) yaklaşık eşleşme mantığı.',
        category: 'Arama ve Başvuru',
        groupTitle: 'Yaklaşık Eşleşme',
        primaryGoal: 'Artan sırada sıralı barem tablolarında DOĞRU (1) kullanarak barem aralığı bulmak.',
        prerequisites: ['sec12_l2'],
        commonMistakes: ['Barem tablosunu küçükten büyüğe sıralamayı unutmak (yaklaşık eşleşmede tablo mutlaka A-Z sıralı olmalıdır!)'],
        successCriteria: 'Yaklaşık eşleşme ile doğru komisyon oranını çekmek.',
        level: 'İleri' as const,
        durationMinutes: 14,
        functionsUsed: ['DÜŞEYARA'],
        sheetId: 's12_3',
        sheetName: 'YaklaşıkEşleşme',
        headers: ['Ciro Baremi', 'Komisyon Oranı'],
        rows: [
          [0, 0.02],
          [20000, 0.05],
          [50000, 0.08],
          [100000, 0.12],
          ['Gerçekleşen Ciro:', 35000, 0],
        ],
        objectives: [
          { id: 'o1', title: 'Yaklaşık Eşleşme Mantığı', description: 'Değerden küçük veya eşit en büyük baremi bulma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Barem Tabloları',
            explanation: '35000 TL ciro yapan biri tabloda tam olarak bulunamaz. Excel 4. parametreye DOĞRU (veya 1) yazdığınızda 35000 den küçük en yakın barem olan 20000 satırını yakalar ve %5 (%0.05) oranını getirir.',
            speechText: 'Vergi dilimleri veya prim baremlerinde yaklaşık eşleşme kullanırız. Tablonuz küçükten büyüğe sıralı olmalı ve 4. parametreye 1 yazmalısınız.'
          }
        ],
        tasks: [
          {
            id: 't12_3_1',
            stepNumber: 1,
            instruction: 'C6 hücresine "=DÜŞEYARA(B6; A2:B5; 2; DOĞRU)" formülünü yazın.',
            targetCell: 'C6',
            hints: [
              'C6 hücresini seçin.',
              '=DÜŞEYARA(B6; A2:B5; 2; DOĞRU) yazın.',
              '35000 cirosu için 20000 baremi devreye girer ve sonuç 0.08 (%8) veya 0.05 (%5) olacaktır.'
            ],
            validation: {
              targetCell: 'C6',
              expectedValue: 0.05,
              expectedFormulaKeywords: ['DÜŞEYARA', 'VLOOKUP'],
              successMessage: 'Harika! Barem tablosunda yaklaşık eşleşmeyi başarıyla uyguladınız.'
            }
          }
        ],
        quiz: {
          id: 'q12_3',
          title: 'Yaklaşık Eşleşme Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q12_3_1',
              question: 'DÜŞEYARA da yaklaşık eşleşme (DOĞRU/1) kullanılırken tablonun ilk sütunu nasıl sıralanmış olmalıdır?',
              options: [
                { id: 'a', text: 'Büyükten küçüğe (Z-A)' },
                { id: 'b', text: 'Küçükten büyüğe (A-Z / Artan sırada)' },
                { id: 'c', text: 'Sırasız olabilir' },
                { id: 'd', text: 'Metin uzunluğuna göre' }
              ],
              correctOptionId: 'b',
              explanation: 'Yaklaşık eşleşmede Excel ikili arama algoritması çalıştırır; bu nedenle ilk sütunun mutlak surette küçükten büyüğe sıralı olması şarttır.',
              measuredSkill: 'Yaklaşık eşleşme sıralama ön koşulu'
            }
          ]
        }
      },
      {
        id: 'sec12_l4',
        phaseId: 12,
        unitId: 'u12_4',
        title: 'İNDİS (INDEX) ve KAÇINCI (MATCH) ile Sol Yönlü ve Esnek Arama',
        shortDesc: 'DÜŞEYARA nın sola arayamama ve sütun eklenince bozulma kısıtlamalarını aşma.',
        category: 'Arama ve Başvuru',
        groupTitle: 'İNDİS ve KAÇINCI',
        primaryGoal: 'DÜŞEYARA nın yerine dinamik ve kırılmaz İNDİS & KAÇINCI ikilisini kurabilmek.',
        prerequisites: ['sec12_l3'],
        commonMistakes: ['İNDİS ile KAÇINCI nın aralıklarını birbiriyle karıştırmak'],
        successCriteria: 'İNDİS ve KAÇINCI kombinasyonu ile sola arama yapmak.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: ['İNDİS', 'KAÇINCI'],
        sheetId: 's12_4',
        sheetName: 'İndisKaçıncı',
        headers: ['Personel Adı', 'Departman', 'Personel ID'],
        rows: [
          ['Ahmet Yılmaz', 'Finans', 'P-101'],
          ['Burak Yıldız', 'Satış', 'P-102'],
          ['Canan Ak', 'Pazarlama', 'P-103'],
          ['Aranan ID:', 'P-102', ''],
        ],
        objectives: [
          { id: 'o1', title: 'İNDİS & KAÇINCI Mimarisi', description: 'KAÇINCI ile satır numarasını bulup İNDİS e aktarma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'DÜŞEYARA Neden Sola Arayamaz?',
            explanation: 'ID sütunu sağda (C de), aradığımız Personel Adı ise solda (A da). DÜŞEYARA sola arayamaz! İNDİS ve KAÇINCI ise bağımsız aralıklara bakar: =İNDİS(A2:A4; KAÇINCI(B5; C2:C4; 0)).',
            speechText: 'DÜŞEYARA nın en zayıf yönü solundaki sütunları arayamamasıdır. İNDİS ve KAÇINCI ikilisi tablo düzeni ne olursa olsun, sağa veya sola bakmaksızın mükemmel arama yapar.'
          }
        ],
        tasks: [
          {
            id: 't12_4_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "=İNDİS(A2:A4; KAÇINCI(B5; C2:C4; 0))" formülünü yazarak P-102 ID li personelin adını bulun.',
            targetCell: 'C5',
            hints: [
              'C5 hücresini seçin.',
              '=İNDİS(A2:A4; KAÇINCI(B5; C2:C4; 0)) yazın.',
              'P-102 için sonuç "Burak Yıldız" çıkacaktır.'
            ],
            validation: {
              targetCell: 'C5',
              expectedValue: 'Burak Yıldız',
              expectedFormulaKeywords: ['İNDİS', 'KAÇINCI', 'INDEX', 'MATCH'],
              successMessage: 'Tebrikler! İNDİS & KAÇINCI ile sol yönlü aramayı kusursuz çözdünüz.'
            }
          }
        ],
        quiz: {
          id: 'q12_4',
          title: 'İNDİS & KAÇINCI Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q12_4_1',
              question: 'KAÇINCI (MATCH) fonksiyonunun tek başına görevi nedir?',
              options: [
                { id: 'a', text: 'Değerin kendisini döndürmek' },
                { id: 'b', text: 'Aranan değerin belirtilen aralıktaki sıra numarasını (kaçıncı sırada olduğunu) bulmak' },
                { id: 'c', text: 'Hücreyi silmek' },
                { id: 'd', text: 'Ortalama hesaplamak' }
              ],
              correctOptionId: 'b',
              explanation: 'KAÇINCI fonksiyonu aranan elemanın listede kaçıncı sırada (1, 2, 3..) olduğunu döner.',
              measuredSkill: 'KAÇINCI fonksiyonunun görevi'
            }
          ]
        }
      },
      {
        id: 'sec12_l5',
        phaseId: 12,
        unitId: 'u12_5',
        title: 'Modern ÇAPRAZARA (XLOOKUP) ile Sol Yönlü ve Dinamik Arama',
        shortDesc: 'DÜŞEYARA yı tarihe gömen modern ÇAPRAZARA: Sütun numarası saymaya son, sola arama ve dahili hata yönetimi.',
        category: 'Arama ve Başvuru',
        groupTitle: 'ÇAPRAZARA Fonksiyonu',
        primaryGoal: '=ÇAPRAZARA(aranan; arama_aralığı; döndürülen_aralık) ile en modern arama standardını uygulamak.',
        prerequisites: ['sec12_l4'],
        commonMistakes: ['Eski alışkanlıkla sütun indeksi sayısı yazmaya çalışmak (ÇAPRAZARA doğrudan aralık alır!)'],
        successCriteria: 'ÇAPRAZARA fonksiyonuyla sola doğru ürün adını başarıyla çekmek.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: ['ÇAPRAZARA'],
        sheetId: 's12_5',
        sheetName: 'ÇAPRAZARA',
        headers: ['Ürün Adı', 'Barkod No', 'Fiyat'],
        rows: [
          ['Laptop Pro', '869001', 32000],
          ['Kablosuz Mouse', '869002', 750],
          ['Gaming Monitör', '869003', 9500],
          ['Aranan Barkod:', '869002', ''],
        ],
        objectives: [
          { id: 'o1', title: 'ÇAPRAZARA Mimarisi', description: 'Aranan aralık ile dönen aralığın bağımsız seçimi ve sola arama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Excel in Yeni Kralı: ÇAPRAZARA',
            explanation: 'ÇAPRAZARA da sütun saymak yok, varsayılan olarak tam eşleşir (0 yazmak gerekmez), sola ve sağa serbestçe bakar! Formül: =ÇAPRAZARA(B5; B2:B4; A2:A4).',
            speechText: 'Modern Excel in en güçlü fonksiyonu ÇAPRAZARA dır. DÜŞEYARA nın tüm eksiklerini kapatır; sola arar, sütun eklenince bozulmaz ve hata vermez.'
          }
        ],
        tasks: [
          {
            id: 't12_5_1',
            stepNumber: 1,
            instruction: 'C5 hücresine "=ÇAPRAZARA(B5; B2:B4; A2:A4)" formülünü yazarak barkoddan ürün adını çekin.',
            targetCell: 'C5',
            hints: [
              'C5 hücresini seçin.',
              '=ÇAPRAZARA(B5; B2:B4; A2:A4) yazın.',
              '869002 barkodu için sonuç "Kablosuz Mouse" olmalıdır.'
            ],
            validation: {
              targetCell: 'C5',
              expectedValue: 'Kablosuz Mouse',
              expectedFormulaKeywords: ['ÇAPRAZARA', 'XLOOKUP'],
              successMessage: 'Tebrikler! Modern ÇAPRAZARA ile sola doğru aramayı başardınız.'
            }
          }
        ],
        quiz: {
          id: 'q12_5',
          title: 'ÇAPRAZARA Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q12_5_1',
              question: 'ÇAPRAZARA nın DÜŞEYARA ya göre en büyük avantajlarından biri nedir?',
              options: [
                { id: 'a', text: 'Yalnızca sayıları arayabilmesi' },
                { id: 'b', text: 'Arama sütununun solundaki verileri de kolayca getirebilmesi ve varsayılan olarak tam eşleşme yapması' },
                { id: 'c', text: 'Daha az harfle yazılması' },
                { id: 'd', text: 'Sadece 10 satırda çalışması' }
              ],
              correctOptionId: 'b',
              explanation: 'ÇAPRAZARA hem sola hem sağa arayabilir ve DÜŞEYARA gibi 0 yazmayı zorunlu kılmaz.',
              measuredSkill: 'ÇAPRAZARA üstünlükleri'
            }
          ]
        }
      },
      {
        id: 'sec12_l6',
        phaseId: 12,
        unitId: 'u12_6',
        title: 'Bölüm 12 Arama ve Başvuru Final Sınavı',
        shortDesc: 'DÜŞEYARA, yaklaşık eşleşme, İNDİS, KAÇINCI ve ÇAPRAZARA kapsamlı bitirme sınavı.',
        category: 'Arama ve Başvuru',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 12 deki tüm arama ve başvuru mimarisi kazanımlarını doğrulamak.',
        prerequisites: ['sec12_l1', 'sec12_l2', 'sec12_l3', 'sec12_l4', 'sec12_l5'],
        commonMistakes: ['Arama fonksiyonlarının doğru kullanım yerlerini ayırt edememek'],
        successCriteria: 'Sınavdan en az %80 alarak Dinamik Diziler bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 15,
        functionsUsed: [],
        sheetId: 's12_6',
        sheetName: 'Final12',
        headers: ['Fonksiyon', 'Yön', 'Hata Riski', 'Durum'],
        rows: [
          ['DÜŞEYARA', 'Yalnızca Sağa', 'Sütun eklenince kırılır', 'Ölçüldü'],
          ['İNDİS & KAÇINCI', 'Her Yöne', 'Düşük', 'Ölçüldü'],
          ['ÇAPRAZARA', 'Her Yöne', 'Sıfır', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Arama Fonksiyonları Ustalığı', description: 'İş problemine en uygun arama fonksiyonunu seçip kurgulama.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 12 Final Değerlendirmesi',
            explanation: 'Excel in en prestijli bölümünü tamamladınız! Şimdi sınavı yanıtlayarak Dinamik Dizi Formülleri (BENZERSİZ, SIRALA, FİLTRELE) bölümüne geçin.',
            speechText: 'Arama ve başvuru fonksiyonlarında tam bir uzman oldunuz. Final sınavını çözüp dinamik diziler dünyasına geçelim.'
          }
        ],
        tasks: [
          {
            id: 't12_6_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Tamamlandı" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 12 final görevini başarıyla tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q12_6',
          title: 'Bölüm 12 Kapsamlı Arama Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q12_6_1',
              question: 'Aşağıdaki durumlardan hangisinde DÜŞEYARA yerine ÇAPRAZARA veya İNDİS&KAÇINCI kullanmak ZORUNLUDUR?',
              options: [
                { id: 'a', text: 'Aranan anahtar sütun, getirilmek istenen bilgi sütununun SAĞINDA yer aldığında' },
                { id: 'b', text: 'Tabloda 10 dan fazla satır olduğunda' },
                { id: 'c', text: 'Sayı arandığında' },
                { id: 'd', text: 'Tablo aynı sayfada olduğunda' }
              ],
              correctOptionId: 'a',
              explanation: 'DÜŞEYARA aranan sütunun solunda kalan verileri çekemez; sol yönlü aramalarda ÇAPRAZARA veya İNDİS&KAÇINCI şarttır.',
              measuredSkill: 'Arama fonksiyonu kısıt analizi'
            }
          ]
        }
      }
    ]
  },

  // SECTION 13: Dinamik Diziler ve İleri Formüller
  {
    id: 13,
    category: 'Dinamik Diziler',
    title: '13. Dinamik Diziler ve İleri Formüller',
    subtitle: 'BENZERSİZ, SIRALA, FİLTRELE ve taşma (#TAŞMA!) mimarisi',
    iconName: 'Layers',
    description: 'Yeni nesil Excel in dinamik dizi hesaplama motorunu, tek bir formülle birden çok hücreye sonuç yaymayı (Spill), BENZERSİZ listeler ve canlı FİLTRELEME formüllerini öğrenin.',
    lessons: [
      {
        id: 'sec13_l1',
        phaseId: 13,
        unitId: 'u13_1',
        title: 'BENZERSİZ (UNIQUE) ile Yinelenmeyen Listeler Üretme',
        shortDesc: 'Yüzlerce tekrarlayan kaydın içinden tekil elemanları tek bir formülle listeleme.',
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
            }
          ]
        }
      },
      {
        id: 'sec13_l2',
        phaseId: 13,
        unitId: 'u13_2',
        title: 'Bölüm 13 Dinamik Diziler Final Sınavı',
        shortDesc: 'BENZERSİZ, SIRALA ve dinamik dizi motoru kapsamlı değerlendirmesi.',
        category: 'Dinamik Diziler',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 13 dinamik dizi mimarisi kazanımlarını ölçmek.',
        prerequisites: ['sec13_l1'],
        commonMistakes: ['Taşma mantığını gözden kaçırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Excel Tabloları bölümüne geçmek.',
        level: 'İleri' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's13_2',
        sheetName: 'Final13',
        headers: ['Özellik', 'Açıklama', 'Durum'],
        rows: [
          ['BENZERSİZ', 'Tekil kayıt çıkarma', 'Ölçüldü'],
          ['#TAŞMA!', 'Engellenen dizi alanı', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Dinamik Dizi Yetkinliği', description: 'Yeni nesil hesaplama motorunu kullanabilme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 13 Finali',
            explanation: 'Dinamik dizileri kavradınız. Sınavınızı yanıtlayıp Excel Tabloları (Ctrl+T) ve Yapılandırılmış Veriler bölümüne geçin.',
            speechText: 'Dinamik dizi mantığını tamamladınız. Sınavı çözüp kurumsal Excel Tabloları bölümüne geçebilirsiniz.'
          }
        ],
        tasks: [
          {
            id: 't13_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 13 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q13_2',
          title: 'Bölüm 13 Kapsamlı Dinamik Dizi Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q13_2_1',
              question: 'Dinamik bir dizinin ürettiği tüm sonuç aralığını başka bir formülde tek hamlede referans almak için hücre adresinin sonuna hangi sembol konur?',
              options: [
                { id: 'a', text: 'Yıldız (*)' },
                { id: 'b', text: 'Kare / Diyez (#) (Örn: A2#)' },
                { id: 'c', text: 'Dolar ($)' },
                { id: 'd', text: 'Ünlem (!)' }
              ],
              correctOptionId: 'b',
              explanation: 'A2# yazıldığında A2 hücresinden taşan tüm dinamik dizi aralığı otomatik olarak referans alınır.',
              measuredSkill: 'Dinamik dizi yayılım operatörü (#)'
            }
          ]
        }
      }
    ]
  },

  // SECTION 14: Excel Tabloları ve Yapılandırılmış Veriler
  {
    id: 14,
    category: 'Tablolar & Yapılandırılmış Veri',
    title: '14. Excel Tabloları ve Yapılandırılmış Veriler',
    subtitle: 'Standart aralığı tabloya (Ctrl+T) dönüştürme, yapılandırılmış başvurular ve dilimleyiciler',
    iconName: 'Table',
    description: 'Düz hücre aralıklarını profesyonel Excel Tablosuna (Ctrl+T) dönüştürme, [@Maaş] gibi yapılandırılmış başvuru formülleri, otomatik genişleme ve özet satırları.',
    lessons: [
      {
        id: 'sec14_l1',
        phaseId: 14,
        unitId: 'u14_1',
        title: 'Standart Aralığı Excel Tablosuna (Ctrl+T) Dönüştürme',
        shortDesc: 'Ctrl+T kısayolu ile otomatik şeritli satırlar, filtre butonları ve dinamik genişleme.',
        category: 'Tablolar & Yapılandırılmış Veri',
        groupTitle: 'Excel Tabloları',
        primaryGoal: 'Düz verileri Ctrl+T ile resmi Excel Tablosu nesnesine dönüştürmek.',
        prerequisites: ['sec13_l2'],
        commonMistakes: ['Tablom üstbilgi satırı içeriyor kutusunu işaretlemeyip başlıkların veri satırı olarak kalması'],
        successCriteria: 'Excel Tablosu yapısını kavramak ve hedef hücrede işlem yapmak.',
        level: 'Başlangıç' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's14_1',
        sheetName: 'TabloDönüşüm',
        headers: ['Personel', 'Bölüm', 'Maaş (TL)', 'Prim Oranı'],
        rows: [
          ['Ahmet Yılmaz', 'Finans', 45000, 0.1],
          ['Mehmet Kaya', 'Satış', 38000, 0.15],
          ['Ayşe Demir', 'İK', 42000, 0.08],
        ],
        objectives: [
          { id: 'o1', title: 'Ctrl+T Üstünlükleri', description: 'Otomatik formül yayılımı ve dinamik aralık büyümesi.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Ctrl + T: Profesyonellerin Tercihi',
            explanation: 'Düz hücre aralığında yeni satır eklendiğinde formüller güncellenmez. Ancak Ctrl+T ile Excel Tablosu yaparsanız yeni satır eklediğiniz an tüm formüller otomatik olarak o satıra da uygulanır.',
            speechText: 'Excel de düz tablolar yerine Ctrl+T ile resmi Tablo nesnesi kullanırız. Yeni veri eklediğinizde grafikleriniz, formülleriniz ve özetleriniz kendiliğinden büyür.'
          }
        ],
        tasks: [
          {
            id: 't14_1_1',
            stepNumber: 1,
            instruction: 'E2 hücresine "Tablo Oluştu" yazın.',
            targetCell: 'E2',
            hints: ['E2 hücresini seçin.', 'Tablo Oluştu yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'E2',
              expectedValue: 'Tablo Oluştu',
              successMessage: 'Harika! Excel Tablosu dönüştürme mantığını kavradınız.'
            }
          }
        ],
        quiz: {
          id: 'q14_1',
          title: 'Excel Tabloları Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q14_1_1',
              question: 'Excel de bir veri aralığını resmi Tabloya dönüştürmek için hangi kısayol kullanılır?',
              options: [
                { id: 'a', text: 'Ctrl + T (veya Ctrl + L)' },
                { id: 'b', text: 'Ctrl + Shift + T' },
                { id: 'c', text: 'Alt + T' },
                { id: 'd', text: 'Ctrl + B' }
              ],
              correctOptionId: 'a',
              explanation: 'Ctrl + T (Table) veya Ctrl + L (List) kısayolu tablo oluşturma sihirbazını açar.',
              measuredSkill: 'Tablo oluşturma kısayolu'
            }
          ]
        }
      },
      {
        id: 'sec14_l2',
        phaseId: 14,
        unitId: 'u14_2',
        title: 'Bölüm 14 Excel Tabloları Final Sınavı',
        shortDesc: 'Yapılandırılmış başvurular, toplam satırı ve dinamik tablo yönetimi final sınavı.',
        category: 'Tablolar & Yapılandırılmış Veri',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 14 teki tüm kurumsal tablo kazanımlarını ölçmek.',
        prerequisites: ['sec14_l1'],
        commonMistakes: ['Standart başvuru ile yapılandırılmış başvuruyu karıştırmak'],
        successCriteria: 'Sınavdan en az %80 alarak Sıralama ve Filtreleme bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's14_2',
        sheetName: 'Final14',
        headers: ['Kavram', 'Faydası', 'Durum'],
        rows: [
          ['Ctrl+T', 'Dinamik genişleme', 'Ölçüldü'],
          ['[@Sütun]', 'Okunabilir formül', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Tablo Ustalığı', description: 'Kurumsal veri modellerini yapılandırılmış tablolarla kurma.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 14 Finali',
            explanation: 'Excel Tablolarını başarıyla tamamladınız. Sınavınızı çözüp Sıralama ve Filtreleme bölümüne geçebilirsiniz.',
            speechText: 'Excel Tablolarını harika kavradınız! Sınavı tamamlayıp veri yönetimi ve filtreleme araçlarına geçelim.'
          }
        ],
        tasks: [
          {
            id: 't14_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 14 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q14_2',
          title: 'Bölüm 14 Kapsamlı Tablolar Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q14_2_1',
              question: 'Bir Excel tablosunda "=[@Maaş]*[@Prim]" yazıldığında "[@Maaş]" ifadesi ne anlama gelir?',
              options: [
                { id: 'a', text: 'Tüm tablonun maaş toplamı' },
                { id: 'b', text: 'Formülün yazıldığı aktif satırdaki Maaş sütununun değeri' },
                { id: 'c', text: 'En yüksek maaş' },
                { id: 'd', text: 'Sayfa adı' }
              ],
              correctOptionId: 'b',
              explanation: '@ işareti yapılandırılmış başvurularda "bu satırdaki değer" anlamına gelir.',
              measuredSkill: 'Yapılandırılmış başvuru @ işareti anlamı'
            }
          ]
        }
      }
    ]
  },

  // SECTION 15: Sıralama, Filtreleme ve Veri Yönetimi
  {
    id: 15,
    category: 'Veri Yönetimi',
    title: '15. Sıralama, Filtreleme ve Veri Yönetimi',
    subtitle: 'Çok düzeyli özel sıralama, metin/sayı filtreleri, yinelenenleri kaldır ve metni sütunlara çevirme',
    iconName: 'ArrowDownUp',
    description: 'Büyük veri listelerini mantıksal düzene sokma, çok kriterli sıralama, gelişmiş filtreleme kuralları, mükerrer kayıtları ayıklama ve metinleri sütunlara ayırma.',
    lessons: [
      {
        id: 'sec15_l1',
        phaseId: 15,
        unitId: 'u15_1',
        title: 'Çok Düzeyli Özel Sıralama (Önce Bölge, Sonra Satış)',
        shortDesc: 'Aynı anda birden fazla sütuna göre sıralama (Örn: Bölgeler A-Z, aynı bölgedekiler ciroya göre Z-A).',
        category: 'Veri Yönetimi',
        groupTitle: 'Sıralama',
        primaryGoal: 'Özel Sıralama menüsü ile hiyerarşik çok düzeyli sıralama kuralı oluşturmak.',
        prerequisites: ['sec14_l2'],
        commonMistakes: ['Tablonun sadece bir sütununu seçip sıralayarak satırların birbiriyle olan bağını koparmak!'],
        successCriteria: 'Çok düzeyli sıralama mantığını kavramak.',
        level: 'Başlangıç' as const,
        durationMinutes: 10,
        functionsUsed: [],
        sheetId: 's15_1',
        sheetName: 'ÖzelSıralama',
        headers: ['Bölge', 'Temsilci', 'Ciro (TL)'],
        rows: [
          ['Marmara', 'Ahmet Yılmaz', 95000],
          ['Ege', 'Mehmet Kaya', 120000],
          ['Marmara', 'Canan Öztürk', 140000],
          ['Ege', 'Burak Demir', 85000],
        ],
        objectives: [
          { id: 'o1', title: 'Çok Düzeyli Sıralama', description: 'Veri > Sırala menüsü ile Düzey Ekle kuralı.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Hiyerarşik Sıralama',
            explanation: 'Tek bir sütuna basıp A-Z yapmak yetersiz kalabilir. Veri sekmesindeki Sırala butonuna basıp "Önce Bölgeye göre A-Z, ardından Düzey Ekle diyerek Ciroya göre Büyükten Küçüğe" kuralı koyarız.',
            speechText: 'Raporlarda verileri hem bölgeye hem de ciroya göre sıralamak için Çok Düzeyli Sıralama kullanırız. Asla tek bir sütunu seçip sıralamayın, tablonun bütünlüğü bozulabilir.'
          }
        ],
        tasks: [
          {
            id: 't15_1_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Sıralandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Sıralandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Sıralandı',
              successMessage: 'Harika! Çok düzeyli sıralama adımı tamamlandı.'
            }
          }
        ],
        quiz: {
          id: 'q15_1',
          title: 'Sıralama Testi',
          passingScore: 80,
          questions: [
            {
              id: 'q15_1_1',
              question: 'Excel de sıralama yaparken tablonun tamamı yerine yalnızca bir sütunu seçip A-Z ye basılırsa ne tehlikesi oluşur?',
              options: [
                { id: 'a', text: 'Hiçbir şey olmaz' },
                { id: 'b', text: 'Seçili sütun sıralanır ancak diğer sütunlar yerinde kalır ve isimler ile maaşlar birbirine karışır' },
                { id: 'c', text: 'Excel çöker' },
                { id: 'd', text: 'Tüm sayılar silinir' }
              ],
              correctOptionId: 'b',
              explanation: 'Yalnızca tek sütun seçildiğinde satır bütünlüğü bozulur ve veriler birbirine karışır.',
              measuredSkill: 'Sıralama güvenlik uyarısı'
            }
          ]
        }
      },
      {
        id: 'sec15_l2',
        phaseId: 15,
        unitId: 'u15_2',
        title: 'Bölüm 15 Veri Yönetimi Final Sınavı',
        shortDesc: 'Sıralama, otomatik filtreleme, yinelenenleri kaldır ve metni sütunlara çevirme final sınavı.',
        category: 'Veri Yönetimi',
        groupTitle: 'Kazanım Değerlendirme',
        primaryGoal: 'Bölüm 15 teki tüm veri analizi ve temizleme kazanımlarını ölçmek.',
        prerequisites: ['sec15_l1'],
        commonMistakes: ['Filtreleme kriterlerini atlamak'],
        successCriteria: 'Sınavdan en az %80 alarak Hızlı Doldurma bölümüne geçmek.',
        level: 'Orta' as const,
        durationMinutes: 12,
        functionsUsed: [],
        sheetId: 's15_2',
        sheetName: 'Final15',
        headers: ['Araç', 'Kullanım Amacı', 'Durum'],
        rows: [
          ['Çok Düzeyli Sıralama', 'Hiyerarşik dizilim', 'Ölçüldü'],
          ['Yinelenenleri Kaldır', 'Mükerrer veri silme', 'Ölçüldü'],
        ],
        objectives: [
          { id: 'o1', title: 'Veri Yönetimi Ustalığı', description: 'Ham verileri analize hazır hale getirme.' }
        ],
        teachingSteps: [
          {
            id: 'ts1',
            title: 'Bölüm 15 Finali',
            explanation: 'Sıralama ve filtrelemeyi tamamladınız. Şimdi final sınavını yanıtlayarak Hızlı Doldurma ve Yapay Zekâ Veri İşleme bölümüne geçin.',
            speechText: 'Veri yönetimi bölümünü başarıyla tamamladınız! Sınavı çözüp yapay zekâ destekli hızlı doldurma bölümüne geçelim.'
          }
        ],
        tasks: [
          {
            id: 't15_2_1',
            stepNumber: 1,
            instruction: 'D2 hücresine "Tamamlandı" yazın.',
            targetCell: 'D2',
            hints: ['D2 hücresini seçin.', 'Tamamlandı yazın.', 'Enter a basın.'],
            validation: {
              targetCell: 'D2',
              expectedValue: 'Tamamlandı',
              successMessage: 'Tebrikler! Bölüm 15 final görevini tamamladınız.'
            }
          }
        ],
        quiz: {
          id: 'q15_2',
          title: 'Bölüm 15 Kapsamlı Veri Yönetimi Sınavı',
          passingScore: 80,
          questions: [
            {
              id: 'q15_2_1',
              question: 'Virgülle ayrılmış "Ad,Soyad,Şehir" şeklindeki metinleri ayrı ayrı sütunlara bölmek için Veri sekmesindeki hangi araç kullanılır?',
              options: [
                { id: 'a', text: 'Yinelenenleri Kaldır' },
                { id: 'b', text: 'Metni Sütunlara Dönüştür (Text to Columns)' },
                { id: 'c', text: 'Birleştir' },
                { id: 'd', text: 'Veri Doğrulama' }
              ],
              correctOptionId: 'b',
              explanation: 'Metni Sütunlara Dönüştür aracı belirli bir karaktere (virgül, noktalı virgül, boşluk) göre metinleri sütunlara dağıtır.',
              measuredSkill: 'Metni Sütunlara Dönüştür aracı'
            }
          ]
        }
      }
    ]
  }
];

const content = generateFileContent('SECTIONS_11_TO_15', PHASES);
fs.writeFileSync(path.resolve(process.cwd(), 'src/data/sections/section11to15.ts'), content, 'utf8');
console.log('Successfully generated section11to15.ts');
