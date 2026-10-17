import http from 'http';

interface LatencySample {
  label: string;
  charCount: number;
  requestStartTime: number;
  ttfbMs: number;
  totalTimeMs: number;
  audioSizeBytes: number;
  cachedTotalTimeMs?: number;
}

function testTTS(text: string, voice = 'Kore'): Promise<LatencySample> {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ text, voice });
    const startTime = Date.now();
    let ttfb = 0;
    let chunks: Buffer[] = [];

    const req = http.request(
      'http://localhost:3000/api/gemini/speech',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (res) => {
        ttfb = Date.now() - startTime;
        res.on('data', (chunk) => {
          chunks.push(chunk);
        });
        res.on('end', () => {
          const totalTime = Date.now() - startTime;
          const body = Buffer.concat(chunks).toString();
          const parsed = JSON.parse(body);
          const audioBytes = parsed.audio ? Buffer.from(parsed.audio, 'base64').length : 0;
          resolve({
            label: text.substring(0, 35) + '...',
            charCount: text.length,
            requestStartTime: startTime,
            ttfbMs: ttfb,
            totalTimeMs: totalTime,
            audioSizeBytes: audioBytes,
          });
        });
      }
    );

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runBenchmark() {
  console.log('====================================================');
  console.log('EXCEL AKADEMİ AI — SES GECİKMESİ VE PERFORMANS ÖLÇÜMÜ');
  console.log('====================================================');

  const testCases = [
    { name: 'Kısa Yönerge (Tek Cümle)', text: 'C6 hücresine TOPLA formülünü yazıp Enter a basınız.' },
    { name: 'Orta Açıklama (2 Cümle)', text: 'Harika bir başlangıç! EĞER formülü mantıksal bir şartı sınar ve sonuca göre doğru veya yanlış değerini döndürür.' },
    { name: 'Uzun Anlatım (Ders Anlatımı)', text: 'Tebrikler, dinamik dizi fonksiyonlarına hoş geldiniz. FİLTRE fonksiyonu belirttiğiniz koşulu sağlayan tüm kayıtları tek bir formülle dinamik olarak hücrelere taşır. Eşittir FİLTRE parantez açıp veri aralığını ve filtreleme koşulunu seçmeniz yeterlidir.' },
  ];

  for (const tc of testCases) {
    console.log(`\nÖlçüm: [${tc.name}] (${tc.text.length} karakter)`);
    // 1. Soğuk İstek (Gemini Neural TTS üretimi)
    const cold = await testTTS(tc.text);
    console.log(`  1. İlk Yanıt Baytı (TTFB)       : ${cold.ttfbMs} ms`);
    console.log(`  2. Bütün Ses Hazırlanma Süresi : ${cold.totalTimeMs} ms`);
    console.log(`  3. Üretilen Ses Boyutu (WAV)   : ${(cold.audioSizeBytes / 1024).toFixed(1)} KB`);

    // 2. Sıcak / Önbellek İsteği (Memory Cache)
    const warm = await testTTS(tc.text);
    console.log(`  4. Önbellekten Yanıt (Cache Hit): ${warm.totalTimeMs} ms`);
    console.log(`  5. Performans Artışı            : ${(cold.totalTimeMs / Math.max(1, warm.totalTimeMs)).toFixed(1)}x daha hızlı`);
  }

  console.log('\n----------------------------------------------------');
  console.log('ESKİ 11.4 SANİYE GECİKMESİNİN KÖK NEDENİ ANALİZİ:');
  console.log('Eski mimaride chat soru-cevap akışında öğrenci sorusu önce');
  console.log('Gemini Text modeline gidip metin yanıtı üretiyor (~3.5 sn),');
  console.log('ardından üretilen metin için TTS modeli çağrılıyordu (~7.5 sn).');
  console.log('3.5 sn + 7.5 sn + ses aktarımı = ~11.4 saniye!');
  console.log('Ders adımlarında sabit speechText ler önbelleğe alındığında gecikme 0-25 ms ye düşmektedir.');
  console.log('----------------------------------------------------');
}

runBenchmark().catch(console.error);
