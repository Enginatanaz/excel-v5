import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  MessageSquare,
  BookOpen,
  Send,
  Zap,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Lock,
  Lightbulb,
  FileSpreadsheet,
} from 'lucide-react';
import { TeachingStep, CellData } from '../../types/excel';
import { voiceEngine, VoiceStatus, VoicePlaybackMetrics } from '../../engine/voiceEngine';

interface AITeacherPanelProps {
  lessonId?: string;
  lessonTitle: string;
  lessonConcept: string;
  steps: TeachingStep[];
  activeStepIndex: number;
  onStepChange: (index: number) => void;
  selectedCell: string;
  selectedCellData: CellData | null;
  taskInstruction?: string;
  mistakeHistory?: any[];
  completedSteps?: number[];
  onStepCompleted?: (stepNumber: number) => void;
  onStartPractice?: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'student' | 'teacher';
  text: string;
  timestamp: string;
}

export const AITeacherPanel: React.FC<AITeacherPanelProps> = ({
  lessonId,
  lessonTitle,
  lessonConcept,
  steps,
  activeStepIndex,
  onStepChange,
  selectedCell,
  selectedCellData,
  taskInstruction,
  mistakeHistory,
  completedSteps = [],
  onStepCompleted,
  onStartPractice,
}) => {
  const [mode, setMode] = useState<'listen' | 'chat'>('listen');
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>('idle');
  const [playbackMetrics, setPlaybackMetrics] = useState<VoicePlaybackMetrics | null>(null);
  const [voiceSpeed, setVoiceSpeed] = useState<number>(1.0);
  const [selectedVoice, setSelectedVoice] = useState<string>('Kore');
  const [questionInput, setQuestionInput] = useState<string>('');
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [lockWarning, setLockWarning] = useState<string | null>(null);

  // Dynamic pedagogical opening greetings
  const getDynamicGreeting = (title: string, concept: string, stepTitle?: string) => {
    const greetings = [
      `Hoş geldin! Bu derste "${title}" konusunu bölümler halinde ele alıyoruz. ${concept} üzerine yoğunlaşacağız. Şu an "${stepTitle || 'Bölüm 1'}" aşamasındasın. Takıldığın her detayı bana sorabilirsin.`,
      `Harika bir dersle devam ediyoruz: "${title}". Mantığı ve formül sözdizimini kavrayabilmen için adım adım gideceğiz. Çalışma tablosundaki her hücre seçimini ve formülü anlık olarak takip ediyorum.`,
      `Selam! Bugün birlikte "${title}" yeteneğini pratiğe döküyoruz. ${concept}. Tabloda yapacağın denemeleri inceliyor olacağım; hazırsan başlayalım!`,
    ];
    const idx = (title.length + (stepTitle?.length || 0)) % greetings.length;
    return greetings[idx];
  };

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'm1',
      sender: 'teacher',
      text: getDynamicGreeting(lessonTitle, lessonConcept, steps[activeStepIndex]?.title),
      timestamp: 'Şimdi',
    },
  ]);

  // Update teacher greeting when lesson changes
  useEffect(() => {
    setChatMessages([
      {
        id: 'msg_' + Date.now(),
        sender: 'teacher',
        text: getDynamicGreeting(lessonTitle, lessonConcept, steps[activeStepIndex]?.title),
        timestamp: 'Şimdi',
      },
    ]);
    setLockWarning(null);
  }, [lessonTitle]);

  const activeStep: TeachingStep = steps[activeStepIndex] || steps[0] || {
    id: 'default_step',
    stepNumber: 1,
    title: 'Bölüm 1: Giriş ve Kavram',
    explanation: 'Ders yükleniyor...',
    speechText: 'Ders yükleniyor...',
  };

  const currentStepNum = activeStep.stepNumber || activeStepIndex + 1;
  const isCurrentStepCompleted = completedSteps.includes(currentStepNum);
  const isLastStep = activeStepIndex === steps.length - 1;

  // Subscribe to voice teacher state
  useEffect(() => {
    const unsubscribe = voiceEngine.subscribe((status, metrics) => {
      setVoiceStatus(status);
      if (metrics) setPlaybackMetrics(metrics);

      // When narration finishes playing, mark the chapter completed automatically
      if (status === 'completed') {
        if (onStepCompleted) {
          onStepCompleted(currentStepNum);
        }
      }
    });

    return () => {
      unsubscribe();
      voiceEngine.stop();
    };
  }, [currentStepNum, onStepCompleted]);

  // Update voice settings
  const handleSpeedChange = (rate: number) => {
    setVoiceSpeed(rate);
    voiceEngine.setPlaybackRate(rate);
  };

  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    voiceEngine.setVoice(voice);
  };

  // Play narration of active step
  const handlePlayStepNarration = () => {
    if (!activeStep?.speechText) return;
    voiceEngine.speak(activeStep.speechText, activeStep.id);
  };

  const handlePauseResume = () => {
    if (voiceStatus === 'playing') {
      voiceEngine.pause();
    } else if (voiceStatus === 'paused') {
      voiceEngine.resume();
    }
  };

  const handleStop = () => {
    voiceEngine.stop();
  };

  // Attempt to switch chapter with pedagogical flow check
  const handleSelectChapter = (targetIndex: number) => {
    setLockWarning(null);
    if (targetIndex === activeStepIndex) return;

    // Check if target chapter is unlocked:
    // User can always access earlier chapters (<= activeStepIndex)
    // Or if previous chapter was completed
    const targetStepNum = (steps[targetIndex]?.stepNumber || targetIndex + 1);
    const prevRequiredStepNum = targetStepNum - 1;

    if (targetIndex > activeStepIndex && !completedSteps.includes(prevRequiredStepNum)) {
      setLockWarning(
        `Konunun doğal öğrenme akışı gereği önce Bölüm ${prevRequiredStepNum} anlatımını dinlemeniz veya tamamlamanız önerilir.`
      );
      return;
    }

    voiceEngine.stop();
    onStepChange(targetIndex);
  };

  // Move to next chapter
  const handleNextChapter = () => {
    setLockWarning(null);
    // Mark current chapter as completed
    if (onStepCompleted) {
      onStepCompleted(currentStepNum);
    }
    voiceEngine.stop();

    if (activeStepIndex < steps.length - 1) {
      onStepChange(activeStepIndex + 1);
    }
  };

  // Move to previous chapter
  const handlePrevChapter = () => {
    setLockWarning(null);
    voiceEngine.stop();
    if (activeStepIndex > 0) {
      onStepChange(activeStepIndex - 1);
    }
  };

  // Ask Teacher question in Mod B
  const handleAskQuestion = async (customPrompt?: string) => {
    const q = (customPrompt || questionInput).trim();
    if (!q) return;

    const userMsg: ChatMessage = {
      id: 'usr_' + Date.now(),
      sender: 'student',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setQuestionInput('');
    setIsAsking(true);

    try {
      const response = await fetch('/api/gemini/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          lessonTitle,
          lessonConcept,
          selectedCell,
          cellValue: selectedCellData?.computed ?? 'Boş',
          cellFormula: selectedCellData?.raw ?? 'Boş',
          taskInstruction,
          mistakeHistory,
          activeChapter: activeStep.title,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const teacherMsg: ChatMessage = {
          id: 'tch_' + Date.now(),
          sender: 'teacher',
          text: data.answer || 'Sorunuz başarıyla incelendi.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setChatMessages((prev) => [...prev, teacherMsg]);
        voiceEngine.speak(teacherMsg.text);
      } else {
        throw new Error('Yanıt alınamadı');
      }
    } catch {
      const errMsg: ChatMessage = {
        id: 'tch_' + Date.now(),
        sender: 'teacher',
        text: `Seçili olan ${selectedCell} hücresi için: Formül başlangıcında = işaretini unutmayın ve Türkçe Excel de argümanları noktalı virgül (;) ile ayırın.`,
        timestamp: 'Şimdi',
      };
      setChatMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsAsking(false);
    }
  };

  // Prefetch active step audio in the background for instant zero-latency playback
  useEffect(() => {
    if (activeStep?.speechText) {
      voiceEngine.prefetch(activeStep.speechText);
    }
  }, [activeStep?.speechText]);

  return (
    <div className="flex flex-col h-full bg-white border border-neutral-200 rounded-lg shadow-xs overflow-hidden select-none">
      {/* 1. Header with Mode Selector */}
      <div className="p-3 border-b border-neutral-200 bg-neutral-50/70">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-emerald-700 flex items-center justify-center text-white shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-neutral-900 leading-tight">
                Yapay Zekâ Öğretmeni
              </h2>
              <p className="text-[11px] text-neutral-500">Doğal Türkçe Sesli Anlatım & Rehberlik</p>
            </div>
          </div>

          {/* Clean Audio Status Indicator */}
          {voiceStatus === 'playing' ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-[11px] text-emerald-800 font-semibold animate-in fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Bölüm {currentStepNum} Dinleniyor</span>
            </div>
          ) : voiceStatus === 'preparing' ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100/80 text-[11px] text-amber-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
              <span>Ses Hazırlanıyor...</span>
            </div>
          ) : isCurrentStepCompleted ? (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 text-[10px] text-neutral-600 font-medium">
              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
              <span>Bölüm Tamamlandı</span>
            </div>
          ) : null}
        </div>

        {/* Mode Toggle Bar */}
        <div className="grid grid-cols-2 p-1 bg-neutral-200/70 rounded-lg gap-1">
          <button
            onClick={() => setMode('listen')}
            className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              mode === 'listen'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Teorik Anlatım (Bölümler)</span>
          </button>

          <button
            onClick={() => setMode('chat')}
            className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              mode === 'chat'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Canlı Öğretmene Sor</span>
          </button>
        </div>
      </div>

      {/* 2. Main Content Area */}
      {mode === 'listen' ? (
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* Chapter Step Bar (Bölüm 1, Bölüm 2, Bölüm 3 vb.) */}
          <div className="px-3 py-2 border-b border-neutral-100 bg-neutral-50/50">
            <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5">
              <span className="font-semibold text-neutral-700">Öğretim Bölümleri:</span>
              <span className="font-mono text-emerald-700 font-bold tabular-nums">
                Bölüm {currentStepNum} / {steps.length}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5">
              {steps.map((st, idx) => {
                const sNum = st.stepNumber || idx + 1;
                const isCompleted = completedSteps.includes(sNum);
                const isActive = activeStepIndex === idx;

                return (
                  <button
                    key={st.id || idx}
                    onClick={() => handleSelectChapter(idx)}
                    title={st.title}
                    className={`flex items-center justify-between px-2 py-1.5 rounded-md text-[11px] font-medium transition-all text-left cursor-pointer border ${
                      isActive
                        ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs font-semibold'
                        : isCompleted
                        ? 'bg-emerald-50/90 text-emerald-950 border-emerald-200 hover:bg-emerald-100/80'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="truncate">Bölüm {sNum}</span>
                    {isCompleted ? (
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isActive ? 'text-white' : 'text-emerald-600'
                        }`}
                      />
                    ) : (
                      <span
                        className={`text-[9px] uppercase font-bold shrink-0 ${
                          isActive ? 'text-emerald-100' : 'text-neutral-400'
                        }`}
                      >
                        {isActive ? 'Aktif' : `${sNum}.`}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Lock / Pedagogical warning banner if user tries to jump ahead */}
            {lockWarning && (
              <div className="mt-2 p-2 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-[11px] flex items-start justify-between gap-2 animate-in fade-in">
                <div className="flex items-start gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                  <span>{lockWarning}</span>
                </div>
                <button
                  onClick={() => setLockWarning(null)}
                  className="text-amber-800 hover:text-amber-950 font-bold px-1"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Active Chapter Details (Scrollable Body) */}
          <div className="flex-1 p-3.5 overflow-y-auto excel-scrollbar space-y-3 min-h-0">
            {/* Chapter Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
                  Bölüm {currentStepNum}
                </span>
                {activeStep.subtitle && (
                  <span className="text-[11px] text-neutral-500 font-medium">
                    {activeStep.subtitle}
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                {activeStep.title.replace(/^Bölüm \d+:\s*/, '')}
              </h3>
            </div>

            {/* Natural Pedagogical Explanation */}
            <div className="text-xs text-neutral-700 leading-relaxed bg-neutral-50/80 p-3 rounded-lg border border-neutral-200 space-y-2">
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold text-[11px]">
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>Öğretmen Anlatımı & Mantık</span>
              </div>
              <p className="whitespace-pre-line text-neutral-800">{activeStep.explanation}</p>
            </div>

            {/* Concrete Example Box (Formül Şablonu & Örnek Senaryo) */}
            {activeStep.exampleSnippet && (
              <div className="p-3 rounded-lg bg-neutral-900 text-neutral-100 border border-neutral-800 space-y-2 text-xs shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-sans">
                  <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Somut Örnek & Sözdizimi
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase">Örnek Kalıp</span>
                </div>
                <div className="p-2 rounded bg-neutral-950 font-mono text-xs text-emerald-300 overflow-x-auto select-text border border-neutral-800">
                  {activeStep.exampleSnippet}
                </div>
                {activeStep.exampleExplanation && (
                  <p className="text-[11px] text-neutral-300 leading-relaxed">
                    {activeStep.exampleExplanation}
                  </p>
                )}
              </div>
            )}

            {/* Key Takeaway / Golden Rule */}
            {activeStep.keyTakeaway && (
              <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-950 text-xs flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-amber-900 block text-[11px] mb-0.5">
                    Altın Kural & Püf Noktası:
                  </span>
                  <p className="text-[11px] text-amber-900 leading-normal">
                    {activeStep.keyTakeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Notice distinguishing theory from simulator task */}
            <div className="p-2 rounded-lg bg-blue-50/60 border border-blue-200/80 text-[11px] text-blue-900 flex items-start gap-2">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
              <p className="leading-snug">
                Bu aşamada teorik anlatımı dinlemektesiniz. Bizzat formül yazacağınız uygulama görevi sağ panelde yer almaktadır.
              </p>
            </div>

            {/* Proactive Mistake Feedback if exists */}
            {mistakeHistory && mistakeHistory.length > 0 && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs">
                <div className="flex items-center justify-between text-rose-900 font-bold mb-1">
                  <span className="flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                    Öğretmen Gözlemi ({mistakeHistory[mistakeHistory.length - 1]?.errorType})
                  </span>
                  <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-rose-200">
                    {mistakeHistory[mistakeHistory.length - 1]?.cellAddress}
                  </span>
                </div>
                <p className="text-[11px] text-rose-800 leading-relaxed">
                  {mistakeHistory[mistakeHistory.length - 1]?.advice}
                </p>
                <button
                  onClick={() => {
                    setMode('chat');
                    handleAskQuestion(
                      `${mistakeHistory[mistakeHistory.length - 1]?.cellAddress} hücresindeki ${mistakeHistory[mistakeHistory.length - 1]?.errorType} sorununu ve doğru formülü açıklar mısın?`
                    );
                  }}
                  className="mt-2 text-[11px] font-semibold text-rose-900 hover:underline cursor-pointer"
                >
                  Öğretmene Bu Hatayı Canlı Sor →
                </button>
              </div>
            )}
          </div>

          {/* 3. Audio & Chapter Navigation Deck (Pinned at bottom) */}
          <div className="p-3 border-t border-neutral-200 bg-neutral-50/80 space-y-2.5 shrink-0">
            {/* Audio Playback Control Row */}
            <div className="flex items-center gap-2">
              <button
                onClick={
                  voiceStatus === 'playing' || voiceStatus === 'paused'
                    ? handlePauseResume
                    : handlePlayStepNarration
                }
                disabled={voiceStatus === 'preparing'}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              >
                {voiceStatus === 'preparing' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Ses Hazırlanıyor...</span>
                  </>
                ) : voiceStatus === 'playing' ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-white" />
                    <span>Bölüm {currentStepNum} Duraklat</span>
                  </>
                ) : voiceStatus === 'paused' ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Devam Ettir</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Bölüm {currentStepNum} Anlatımını Dinle</span>
                  </>
                )}
              </button>

              {voiceStatus !== 'idle' && (
                <button
                  onClick={handleStop}
                  title="Durdur"
                  className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition-colors cursor-pointer"
                >
                  <VolumeX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Audio Speed & Voice Choice */}
            <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-0.5">
              <div className="flex items-center gap-1">
                <span>Hız:</span>
                {[0.75, 1.0, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handleSpeedChange(rate)}
                    className={`px-1.5 py-0.5 rounded cursor-pointer ${
                      voiceSpeed === rate
                        ? 'bg-emerald-100 text-emerald-800 font-bold'
                        : 'hover:bg-neutral-200'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <span>Ses:</span>
                <select
                  value={selectedVoice}
                  onChange={(e) => handleVoiceChange(e.target.value)}
                  className="bg-transparent font-medium text-neutral-700 focus:outline-hidden cursor-pointer"
                >
                  <option value="Kore">Kore (Doğal Öğretmen)</option>
                  <option value="Zephyr">Zephyr (Dinamik)</option>
                  <option value="Puck">Puck (Berrak)</option>
                  <option value="Fenrir">Fenrir (Resmi)</option>
                </select>
              </div>
            </div>

            {/* Previous & Next Chapter Navigation Controls */}
            <div className="pt-1 flex items-center gap-2 border-t border-neutral-200/60">
              <button
                onClick={handlePrevChapter}
                disabled={activeStepIndex === 0}
                className="flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-white text-xs font-semibold cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Bölüm</span>
              </button>

              {!isLastStep ? (
                <button
                  onClick={handleNextChapter}
                  className="flex-1 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold cursor-pointer shadow-2xs transition-colors"
                >
                  <span>Sonraki Bölüm (Bölüm {currentStepNum + 1})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (onStepCompleted) {
                      onStepCompleted(currentStepNum);
                    }
                    if (onStartPractice) {
                      onStartPractice();
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white text-xs font-bold cursor-pointer shadow-xs transition-all"
                >
                  <span>Excel Simülatöründe Uygulamaya Başla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Mod B: Canlı Öğretmen Modu */
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 excel-scrollbar bg-neutral-50/50">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'student' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-lg text-xs leading-relaxed ${
                    msg.sender === 'student'
                      ? 'bg-emerald-700 text-white rounded-br-none'
                      : 'bg-white text-neutral-800 border border-neutral-200 shadow-2xs rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-neutral-400 mt-0.5 px-1">
                  {msg.sender === 'student' ? 'Sen' : 'Öğretmen'} · {msg.timestamp}
                </span>
              </div>
            ))}

            {isAsking && (
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-500 w-fit">
                <div className="w-3 h-3 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                <span>Öğretmen çalışma alanınızı inceliyor...</span>
              </div>
            )}
          </div>

          {/* Quick Questions Strip */}
          <div className="p-2 border-t border-neutral-200 bg-white">
            <p className="text-[10px] text-neutral-400 font-medium mb-1.5 px-1">Öğretmene Hızlı Sor:</p>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 excel-scrollbar">
              <button
                onClick={() =>
                  handleAskQuestion(
                    `Şu an seçili olan ${selectedCell} hücresindeki veriyi ve formülü kontrol eder misin?`
                  )
                }
                className="px-2.5 py-1 text-[11px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-md whitespace-nowrap transition-colors font-medium border border-emerald-200 cursor-pointer"
              >
                {selectedCell} hücresini kontrol et
              </button>
              <button
                onClick={() =>
                  handleAskQuestion(
                    `Bu derste "${lessonTitle}" için ${activeStep.title} kapsamında formül mantığını ve püf noktalarını açıklar mısın?`
                  )
                }
                className="px-2.5 py-1 text-[11px] bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md whitespace-nowrap transition-colors cursor-pointer"
              >
                Bu bölümün mantığı nedir?
              </button>
              <button
                onClick={() =>
                  handleAskQuestion(
                    'Türkçe Excel de argümanları ayırırken ve aralık belirtirken nelere dikkat etmeliyim?'
                  )
                }
                className="px-2.5 py-1 text-[11px] bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md whitespace-nowrap transition-colors cursor-pointer"
              >
                Sözdizimi ve noktalı virgül kuralı
              </button>
              <button
                onClick={() =>
                  handleAskQuestion(
                    'Bu adım için gerçek hayattan bir iş senaryosu ve basit bir örnek verir misin?'
                  )
                }
                className="px-2.5 py-1 text-[11px] bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md whitespace-nowrap transition-colors cursor-pointer"
              >
                İş hayatı örneği ver
              </button>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-2.5 border-t border-neutral-200 bg-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAskQuestion();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                placeholder="Öğretmene bir şey sorun (örn. Bu formülde neden hata aldım?)"
                className="flex-1 h-8 px-3 text-xs bg-neutral-100 border border-neutral-200 rounded-lg focus:bg-white focus:border-emerald-600 focus:outline-hidden"
              />
              <button
                type="submit"
                disabled={!questionInput.trim() || isAsking}
                className="w-8 h-8 flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors disabled:opacity-40 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
