import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import crypto from 'crypto';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Audio memory cache for fast repeat access
const audioCache = new Map<string, { audioBase64: string; mimeType: string; timestamp: number }>();

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// Text-to-speech endpoint for Turkish Excel Teacher
app.post('/api/gemini/speech', async (req, res) => {
  const startTime = Date.now();
  const { text, voice = 'Kore', lessonId } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Text parameter is required' });
  }

  // Generate cache key
  const cacheKey = crypto.createHash('md5').update(`${voice}:${text}`).digest('hex');
  if (audioCache.has(cacheKey)) {
    const cached = audioCache.get(cacheKey)!;
    const latency = Date.now() - startTime;
    return res.json({
      audio: cached.audioBase64,
      mimeType: cached.mimeType,
      cached: true,
      latencyMs: latency,
      provider: 'gemini-cached',
    });
  }

  const ai = getGeminiClient();
  if (!ai) {
    return res.json({
      audio: null,
      fallback: true,
      reason: 'NO_API_KEY',
      latencyMs: Date.now() - startTime,
    });
  }

  try {
    // Normalise text for natural speech pronunciation in Turkish Excel context
    const normalizedText = text
      .replace(/₺/g, ' Türk Lirası ')
      .replace(/\$/g, ' Dolar ')
      .replace(/%/g, ' yüzde ')
      .replace(/;/g, ', noktalı virgül, ');

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: normalizedText,
              speechMetadata: {
                style: 'Clear, encouraging, natural professional Turkish educator',
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice },
          },
        },
      },
    });

    const candidate = response.candidates?.[0];
    const audioPart = candidate?.content?.parts?.find(
      (p: { inlineData?: { data?: string; mimeType?: string } }) => p.inlineData && p.inlineData.data
    );

    if (audioPart?.inlineData?.data) {
      const audioBase64 = audioPart.inlineData.data;
      const mimeType = audioPart.inlineData.mimeType || 'audio/wav';

      // Cache up to 100 recent audio snippets
      if (audioCache.size > 100) {
        const oldestKey = audioCache.keys().next().value;
        if (oldestKey) audioCache.delete(oldestKey);
      }
      audioCache.set(cacheKey, { audioBase64, mimeType, timestamp: Date.now() });

      const latencyMs = Date.now() - startTime;
      return res.json({
        audio: audioBase64,
        mimeType,
        cached: false,
        latencyMs,
        provider: 'gemini-3.8-flash-lite-tts',
      });
    }

    // Fallback if no audio part returned
    return res.json({
      audio: null,
      fallback: true,
      reason: 'NO_AUDIO_PART',
      latencyMs: Date.now() - startTime,
    });
  } catch (err: any) {
    console.error('Speech generation error:', err);
    return res.json({
      audio: null,
      fallback: true,
      error: err.message,
      latencyMs: Date.now() - startTime,
    });
  }
});

// Live Q&A endpoint for Teacher mode B
app.post('/api/gemini/ask', async (req, res) => {
  const { question, lessonTitle, lessonConcept, selectedCell, cellValue, cellFormula, taskInstruction, mistakeHistory } = req.body;

  const ai = getGeminiClient();
  if (!ai) {
    // Deterministic fallback pedagogical answers
    return res.json({
      answer: `Harika bir soru! ${lessonTitle || 'Bu derste'} şu an seçili hücreniz ${selectedCell || 'belirtilmedi'}. Formülde formül başlangıcında mutlaka eşittir (=) işareti olmalı, argümanları noktalı virgül (;) ile ayırmalı ve sabit kalması gereken başvuru için dolar ($) işaretini doğru kullanmalısınız.`,
      source: 'offline-rule',
    });
  }

  try {
    const prompt = `Sen "Excel Akademi AI" platformunun kıdemli, samimi, pedagojik ve doğrudan çözüme odaklı Türkçe Excel öğretmenisin.
Öğrencinin şu anki ders bağlamı:
- Ders Başlığı: ${lessonTitle || 'Genel Excel Uygulaması'}
- Öğretilen Kavram: ${lessonConcept || 'Formüller ve Fonksiyonlar'}
- Şu Anki Görevi: ${taskInstruction || 'Belirtilmedi'}
- Seçili Hücre: ${selectedCell || 'Seçili hücre yok'}
- Hücre Formülü: ${cellFormula || 'Boş'}
- Hücre Değeri / Sonucu: ${cellValue || 'Boş'}
- Öğrencinin Geçmiş Hataları: ${mistakeHistory ? JSON.stringify(mistakeHistory) : 'Yok'}

Öğrencinin Sorusu: "${question}"

Cevap Kuralları:
1. Kesinlikle klişe selamlama ("Merhaba, bugün harika bir soru sordun", "Tabii ki sana yardımcı olabilirim") KULLANMA.
2. Doğrudan soruya cevap ver. Öğrencinin çalışma alanındaki aktif hücresine (${selectedCell}) ve yazdığı formüle atıfta bulunarak somut olarak açıkla.
3. Formül önerirken Türkçe Excel sözdizimini (noktalı virgül ; kullanımı) esas al, gerekirse parantez içinde İngilizce karşılığını ver (örn. EĞER / IF).
4. Kısa, berrak, 2-4 cümlelik öz bir öğretmen açıklaması yap.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const answer = response.text || 'Sorunuzu incelerken bir hata oluştu, lütfen tekrar deneyin.';
    return res.json({ answer, source: 'gemini-3.8-flash' });
  } catch (err: any) {
    console.error('Ask teacher error (fallback engaged):', err.message);
    // Intelligent domain-specific pedagogical fallback response
    let fallbackText = `${lessonTitle || 'Bu derste'} ${selectedCell ? selectedCell + ' hücresindeki işlem için:' : ''} Excel'de formüller her zaman '=' ile başlar ve fonksiyon argümanları noktalı virgül (;) ile ayrılır.`;
    if (question.toLowerCase().includes('çoketopla') || question.toLowerCase().includes('etopla')) {
      fallbackText = "ETOPLA tek bir kritere göre toplama yaparken, ÇOKETOPLA birden fazla şartı aynı anda denetler. En önemli fark: ÇOKETOPLA'da toplanacak ciro aralığı en başa yazılır.";
    } else if (question.toLowerCase().includes('dolar') || question.toLowerCase().includes('$') || question.toLowerCase().includes('sabitle')) {
      fallbackText = "Dolar işareti ($) formülü aşağı veya sağa kopyaladığınızda hücre referansının kaymasını önler. Örneğin $B$1 yazarak hem B sütununu hem 1. satırı kilitlersiniz.";
    } else if (question.toLowerCase().includes('eğer') || question.toLowerCase().includes('if')) {
      fallbackText = "EĞER formülü üç parçadan oluşur: =EĞER(Mantıksal_Şart; Doğruysa_Sonuç; Yanlışsa_Sonuç). Metin çıktıları mutlaka çift tırnak içine alınmalıdır.";
    } else if (question.toLowerCase().includes('düşeyara') || question.toLowerCase().includes('vlookup')) {
      fallbackText = "DÜŞEYARA tablonun ilk sütununda arama yapar. 4. parametreye mutlaka 'YANLIŞ' veya 0 yazmalısınız; aksi takdirde yaklaşık eşleşme yaparak yanlış sonuç verebilir.";
    }
    res.json({ answer: fallbackText, source: 'teacher-domain-engine' });
  }
});

// Formula error diagnostic endpoint
app.post('/api/gemini/diagnose', async (req, res) => {
  const { formula, errorType, expectedResult, cellAddress } = req.body;
  const ai = getGeminiClient();

  if (!ai) {
    return res.json({
      diagnosis: `${cellAddress} hücresindeki ${formula} formülü ${errorType} hatası veriyor. Lütfen argüman tiplerini, aralık boyutlarını ve parantez kapanışlarını kontrol edin.`,
    });
  }

  try {
    const prompt = `Excel öğretmenisin. Öğrenci ${cellAddress} hücresine "${formula}" formülünü yazdı ve "${errorType}" hatası aldı.
Beklenen durum: "${expectedResult}".
Öğrenciye doğrudan hatasının sebebini ve nasıl düzelteceğini 2 kısa cümlede açıkla. Klişe selamlama yapma.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    res.json({ diagnosis: response.text });
  } catch (err: any) {
    console.error('Diagnose error (fallback engaged):', err.message);
    res.json({
      diagnosis: `${cellAddress} hücresindeki ${formula} ifadesi ${errorType} hatasına yol açtı. Lütfen formüldeki aralık boyutlarını ve noktalı virgül (;) ayracını kontrol edin.`,
      source: 'offline-diagnostic',
    });
  }
});

// Dynamic Task Evaluation & Pedagogical Feedback endpoint
app.post('/api/gemini/evaluate-task', async (req, res) => {
  const {
    taskTitle,
    instruction,
    targetCell,
    expectedValue,
    expectedFormulaKeywords,
    userFormula,
    userComputedValue,
    lessonTitle,
    lessonConcept,
    isSuccess,
    errorType,
  } = req.body;

  const ai = getGeminiClient();
  if (!ai) {
    return res.json({
      feedback: isSuccess
        ? `Harika! ${targetCell} hücresindeki işlemi başarıyla tamamladınız.`
        : `${targetCell} hücresindeki formülünüzü talimata göre tekrar inceleyin.`,
      source: 'offline-rule',
    });
  }

  try {
    const prompt = `Sen "Excel Akademi AI"nin tecrübeli ve teşvik edici Türkçe Excel öğretmenisin.
Öğrencinin görevi: "${instruction}"
Ders: "${lessonTitle}" (${lessonConcept})
Hedef Hücre: ${targetCell}
Beklenen Fonksiyonlar: ${JSON.stringify(expectedFormulaKeywords || [])}
Beklenen Değer: ${expectedValue ?? 'Belirtilmedi'}

Öğrencinin Yaptığı İşlem:
- Yazdığı Formül/Metin: "${userFormula || 'Boş'}"
- Hesaplanan Değer: "${userComputedValue ?? 'Boş'}"
- Durum: ${isSuccess ? 'BAŞARILI' : 'DÜZELTME GEREKİYOR'}
- Hata Tipi: ${errorType || 'Yok'}

Görevin:
Öğrenciye doğrudan hitap eden, sesli okunmaya uygun, samimi, 1-2 cümlelik kısa ve doğal bir öğretmen geri bildirimi oluştur.
Eğer başarılıysa neyi doğru yaptığını öv ve varsa profesyonel bir püf nokta ekle.
Eğer hatalıysa hatanın nedenini nazikçe ve tam olarak açıkla (örn: noktalı virgül, parantez, fonksiyon adı), asla hevesini kırma, çözüme yönlendir.
Klişe selamlama veya robotik ifadeler kullanma.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    const feedback = response.text || (isSuccess ? 'Harika iş çıkardın!' : 'Tekrar deneyelim.');
    res.json({ feedback, source: 'gemini-3.8-flash' });
  } catch (err: any) {
    console.error('Evaluate task error:', err.message);
    res.json({
      feedback: isSuccess
        ? `Tebrikler! ${targetCell} hücresindeki işlemi tam istenen formülle tamamladınız.`
        : `${targetCell} hücresindeki sözdizimini ve beklenen formülü kontrol ediniz.`,
      source: 'offline-fallback',
    });
  }
});

// Start server and mount Vite
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Excel Akademi AI server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
