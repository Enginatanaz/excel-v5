import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Award, RotateCcw, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LessonQuiz } from '../../types/excel';

interface QuizModalProps {
  quiz: LessonQuiz;
  isOpen: boolean;
  onClose: () => void;
  onQuizCompleted: (score: number) => void;
  onNextLesson?: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  quiz,
  isOpen,
  onClose,
  onQuizCompleted,
  onNextLesson,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  if (!isOpen) return null;

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    const calculatedScore = Math.round((correctCount / quiz.questions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);
    onQuizCompleted(calculatedScore);

    const passingScore = quiz.passingScore ?? 80;
    if (calculatedScore >= passingScore) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const passingScore = quiz.passingScore ?? 80;
  const isPassed = score >= passingScore;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 select-none">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden border border-neutral-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900">{quiz.title}</h3>
              <p className="text-xs text-neutral-500">Geçme Eşiği: %{quiz.passingScore}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Questions */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 excel-scrollbar">
          {!submitted ? (
            quiz.questions.map((q, qIdx) => (
              <div key={q.id} className="space-y-3 pb-4 border-b border-neutral-100 last:border-b-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-mono font-bold text-neutral-400">
                    Soru {qIdx + 1} / {quiz.questions.length}
                  </span>
                  {q.measuredSkill && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Ölçülen Kazanım: {q.measuredSkill}
                    </span>
                  )}
                </div>

                <p className="text-xs font-bold text-neutral-900 leading-normal">
                  {q.question}
                </p>

                {q.codeSnippet && (
                  <pre className="p-2.5 rounded bg-neutral-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                    {q.codeSnippet}
                  </pre>
                )}

                <div className="space-y-2">
                  {q.options.map((opt: any) => (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                        selectedAnswers[q.id] === opt.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-medium'
                          : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedAnswers[q.id] === opt.id
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-neutral-300'
                        }`}
                      >
                        {selectedAnswers[q.id] === opt.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-semibold text-neutral-500 uppercase mr-1">
                        {opt.id})
                      </span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div
                className={`p-5 rounded-xl border text-center space-y-2 ${
                  score >= 80
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : score >= 60
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : 'bg-red-50 border-red-300 text-red-950'
                }`}
              >
                <div className="text-3xl font-extrabold tabular-nums">%{score}</div>
                <h4 className="font-bold text-sm">
                  {score >= 80
                    ? 'Tebrikler! Dersi Başarıyla Tamamladınız.'
                    : score >= 60
                    ? 'Kısa Tekrar Gerekli ve Yeniden Değerlendirme'
                    : 'Konuyu Yeniden Öğrenme ve Destekli Uygulama'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {score >= 80
                    ? 'Müfredat hedeflerini başarıyla karşıladınız. Bir sonraki derse geçebilirsiniz.'
                    : score >= 60
                    ? 'Sınav başarı eşiği %80 dir. Aşağıdaki cevap ve kazanım analizlerini inceleyerek testi tekrar deneyin.'
                    : 'Kazanım hedeflerinde kritik eksikler tespit edildi. Dersi baştan çalışıp formülleri uygulamanız önerilir.'}
                </p>
              </div>

              {/* Question Review with Explanations */}
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-neutral-900 uppercase">
                  Kazanım Analizi & Soru Değerlendirmesi
                </h5>
                {quiz.questions.map((q, idx) => {
                  const selectedOptId = selectedAnswers[q.id];
                  const targetOptId = q.correctOptionId || q.correctOption;
                  const isCorrect = selectedOptId === targetOptId;
                  const chosenOpt = q.options.find((o: any) => o.id === selectedOptId);
                  const correctOpt = q.options.find((o: any) => o.id === targetOptId);

                  return (
                    <div
                      key={q.id}
                      className={`p-3.5 rounded-lg border text-xs space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-red-50/50 border-red-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 font-semibold">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                          )}
                          <span className="text-neutral-900">
                            {idx + 1}. {q.question}
                          </span>
                        </div>
                        {q.measuredSkill && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600 shrink-0">
                            {q.measuredSkill}
                          </span>
                        )}
                      </div>

                      <div className="pl-6 space-y-1.5 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-neutral-600">Sizin Seçiminiz:</span>
                          <span
                            className={
                              isCorrect
                                ? 'text-emerald-700 font-bold'
                                : 'text-red-700 font-bold line-through'
                            }
                          >
                            {chosenOpt ? `${chosenOpt.id.toUpperCase()}) ${chosenOpt.text}` : 'Cevaplanmadı'}
                          </span>
                        </div>

                        {!isCorrect && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-neutral-600">Doğru Seçenek:</span>
                            <span className="text-emerald-700 font-bold">
                              {correctOpt ? `${correctOpt.id.toUpperCase()}) ${correctOpt.text}` : ''}
                            </span>
                          </div>
                        )}

                        <div className="p-2 rounded bg-white/80 border border-neutral-200 text-neutral-700 mt-1">
                          <span className="font-bold text-neutral-900">Çözüm Mantığı: </span>
                          <span>{q.explanation}</span>
                        </div>

                        {!isCorrect && q.commonMistakeExplanation && (
                          <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900">
                            <span className="font-bold">Öğretmen Uyarısı (Yaygın Yanılgı): </span>
                            <span>{q.commonMistakeExplanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50/70">
          {!submitted ? (
            <>
              <span className="text-xs text-neutral-500">
                {Object.keys(selectedAnswers).length} / {quiz.questions.length} Cevaplandı
              </span>
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors disabled:opacity-40 cursor-pointer"
              >
                Sınavı Tamamla ve Puanla
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRetry}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-200 hover:bg-neutral-300 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tekrar Çöz</span>
              </button>

              {isPassed && onNextLesson && (
                <button
                  onClick={() => {
                    onClose();
                    onNextLesson();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  <span>Sonraki Derse Geç</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
