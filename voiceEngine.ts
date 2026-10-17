export type VoiceStatus = 'idle' | 'preparing' | 'playing' | 'paused' | 'completed' | 'error';

export interface VoicePlaybackMetrics {
  latencyMs: number;
  engine: 'gemini-neural' | 'browser-speech' | 'gemini-cached';
  voiceName: string;
}

export type StatusListener = (status: VoiceStatus, metrics?: VoicePlaybackMetrics) => void;

class VoiceTeacherEngine {
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private status: VoiceStatus = 'idle';
  private playbackRate: number = 1.0;
  private selectedVoice: string = 'Kore'; // Kore, Puck, Zephyr, Fenrir
  private listeners: Set<StatusListener> = new Set();
  private lastMetrics: VoicePlaybackMetrics | null = null;
  private currentText: string = '';

  constructor() {
    // Warm up speech synthesis if available
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        // Voice list ready
      };
    }
  }

  public subscribe(listener: StatusListener): () => void {
    this.listeners.add(listener);
    listener(this.status, this.lastMetrics ?? undefined);
    return () => this.listeners.delete(listener);
  }

  private setStatus(status: VoiceStatus, metrics?: VoicePlaybackMetrics) {
    this.status = status;
    if (metrics) this.lastMetrics = metrics;
    this.listeners.forEach((fn) => fn(status, this.lastMetrics ?? undefined));
  }

  public getStatus(): VoiceStatus {
    return this.status;
  }

  public getMetrics(): VoicePlaybackMetrics | null {
    return this.lastMetrics;
  }

  public setPlaybackRate(rate: number) {
    this.playbackRate = rate;
    if (this.currentAudio) {
      this.currentAudio.playbackRate = rate;
    }
    if (this.currentUtterance && 'speechSynthesis' in window) {
      this.currentUtterance.rate = rate;
    }
  }

  public setVoice(voice: string) {
    this.selectedVoice = voice;
  }

  public stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
    this.setStatus('idle');
  }

  public pause() {
    if (this.currentAudio && !this.currentAudio.paused) {
      this.currentAudio.pause();
      this.setStatus('paused');
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      this.setStatus('paused');
    }
  }

  public resume() {
    if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play();
      this.setStatus('playing');
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      this.setStatus('playing');
    }
  }

  private clientCache = new Map<string, { audioSrc: string; mimeType: string }>();

  public normalizeTurkishSpeech(text: string): string {
    return text
      .replace(/₺/g, ' Türk Lirası ')
      .replace(/%/g, ' yüzde ')
      .replace(/\$([A-Z])\$([0-9]+)/g, 'mutlak $1 $2')
      .replace(/(^|[^$])([A-Z])\$([0-9]+)/g, '$1$2 dolar $3')
      .replace(/\$([A-Z])([0-9]+)/g, 'mutlak $1 $2')
      .replace(/([A-Z][0-9]+):([A-Z][0-9]+)/g, '$1 ile $2 aralığı')
      .replace(/=([A-ZÇĞİÖŞÜ_]+)\(/g, 'eşittir $1 parantez aç ');
  }

  public async prefetch(text: string, voice?: string): Promise<void> {
    if (!text || typeof window === 'undefined') return;
    const v = voice || this.selectedVoice;
    const key = `${v}:${text}`;
    if (this.clientCache.has(key)) return;

    try {
      const response = await fetch('/api/gemini/speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voice: v,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audio) {
          const audioSrc = `data:${data.mimeType || 'audio/wav'};base64,${data.audio}`;
          this.clientCache.set(key, { audioSrc, mimeType: data.mimeType || 'audio/wav' });
        }
      }
    } catch {
      // Background prefetch error ignored
    }
  }

  public async speak(text: string, lessonId?: string): Promise<void> {
    this.stop();
    this.currentText = text;
    this.setStatus('preparing');

    const requestStart = performance.now();
    const cacheKey = `${this.selectedVoice}:${text}`;

    // 1. Check instant client memory cache
    if (this.clientCache.has(cacheKey)) {
      const cached = this.clientCache.get(cacheKey)!;
      const latencyMs = Math.round(performance.now() - requestStart);
      const metrics: VoicePlaybackMetrics = {
        latencyMs,
        engine: 'gemini-cached',
        voiceName: this.selectedVoice,
      };

      const audio = new Audio(cached.audioSrc);
      audio.playbackRate = this.playbackRate;
      this.currentAudio = audio;

      audio.onplay = () => {
        this.setStatus('playing', metrics);
      };
      audio.onended = () => {
        this.setStatus('completed');
        this.currentAudio = null;
      };
      audio.onerror = () => {
        this.fallbackToWebSpeech(text, requestStart);
      };

      try {
        await audio.play();
      } catch (playErr) {
        console.warn('Audio play prevented by browser, fallback to Web Speech:', playErr);
        this.fallbackToWebSpeech(text, requestStart);
      }
      return;
    }

    // 2. Try Gemini Neural TTS via server proxy
    try {
      const response = await fetch('/api/gemini/speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          voice: this.selectedVoice,
          lessonId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.audio) {
          const latencyMs = Math.round(performance.now() - requestStart);
          const metrics: VoicePlaybackMetrics = {
            latencyMs,
            engine: data.cached ? 'gemini-cached' : 'gemini-neural',
            voiceName: this.selectedVoice,
          };

          const audioSrc = `data:${data.mimeType || 'audio/wav'};base64,${data.audio}`;
          // Store in client cache for instant replay
          this.clientCache.set(cacheKey, { audioSrc, mimeType: data.mimeType || 'audio/wav' });

          const audio = new Audio(audioSrc);
          audio.playbackRate = this.playbackRate;
          this.currentAudio = audio;

          audio.onplay = () => {
            this.setStatus('playing', metrics);
          };

          audio.onended = () => {
            this.setStatus('completed');
            this.currentAudio = null;
          };

          audio.onerror = () => {
            console.warn('Audio element error, falling back to Web Speech');
            this.fallbackToWebSpeech(text, requestStart);
          };

          try {
            await audio.play();
          } catch (playErr) {
            console.warn('Audio play error, falling back to Web Speech:', playErr);
            this.fallbackToWebSpeech(text, requestStart);
          }
          return;
        }
      }
    } catch (err) {
      console.warn('Gemini TTS fetch error, switching to Web Speech fallback:', err);
    }

    // Fallback to high-quality browser Web Speech API
    this.fallbackToWebSpeech(text, requestStart);
  }

  private fallbackToWebSpeech(text: string, startTime: number) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.setStatus('error');
      return;
    }

    window.speechSynthesis.cancel();

    // Prepare speech text with natural Turkish pronunciations
    const cleanText = text
      .replace(/₺/g, ' Türk Lirası ')
      .replace(/\$/g, ' Dolar ')
      .replace(/%/g, ' yüzde ')
      .replace(/([A-Z])\$([0-9]+)/g, '$1 dolar $2');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'tr-TR';
    utterance.rate = this.playbackRate;
    utterance.pitch = 1.0;

    // Pick Turkish voice if available
    const voices = window.speechSynthesis.getVoices();
    const turkishVoice = voices.find((v) => v.lang.startsWith('tr') || v.lang.includes('TR'));
    if (turkishVoice) {
      utterance.voice = turkishVoice;
    }

    utterance.onstart = () => {
      const latencyMs = Math.round(performance.now() - startTime);
      this.setStatus('playing', {
        latencyMs,
        engine: 'browser-speech',
        voiceName: turkishVoice?.name || 'Doğal Türkçe Sentezi',
      });
    };

    utterance.onend = () => {
      this.setStatus('completed');
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      console.error('Speech synthesis error:', e);
      this.setStatus('error');
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }
}

export const voiceEngine = new VoiceTeacherEngine();
