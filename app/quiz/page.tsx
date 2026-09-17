'use client';

import { useState } from 'react';
import Link from 'next/link';
import { quizQuestions, type IQuizQuestion } from '@/data/quizData';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, ArrowRight, ArrowLeft, Globe, Sparkles } from 'lucide-react';

type Language = 'en' | 'ar';

export default function QuizPage() {
  const [lang, setLang] = useState<Language>('en');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const isArabic = lang === 'ar';
  const currentQ = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOptionIndex === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950 text-gray-100 p-6 sm:p-10">
      <div className="mx-auto max-w-2xl">
        {/* Header & Back Button */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-xl border border-gray-700 bg-gray-800 p-2 text-cyan-300 transition hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-red-400" />
                {isArabic ? 'الاختبارات التقنية الذكية' : 'Interactive IT Quiz Engine'}
              </h1>
              <p className="text-xs text-gray-400">
                {isArabic ? 'قيّم مهاراتك التقنية واحصل على شروح هندسية فورية' : 'Test your technical knowledge with instant feedback'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
            className="flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-cyan-300 transition hover:bg-gray-700 self-start sm:self-auto"
          >
            <Globe className="h-4 w-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Quiz Container */}
        <div className="rounded-3xl border border-gray-800 bg-gray-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {!quizCompleted ? (
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-xs uppercase font-mono text-cyan-400">
                  {isArabic ? `السؤال ${currentQuestionIndex + 1} من ${quizQuestions.length}` : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`}
                </span>
                <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-mono text-gray-300">
                  {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white leading-relaxed mb-6">
                {isArabic ? currentQ.questionAr : currentQ.questionEn}
              </h3>

              <div className="space-y-3 mb-6">
                {(isArabic ? currentQ.optionsAr : currentQ.optionsEn).map((option, idx) => {
                  let btnStyle = 'border-gray-800 bg-gray-950/60 hover:border-gray-700 text-gray-300';
                  if (selectedOptionIndex === idx) {
                    btnStyle = 'border-cyan-500 bg-cyan-500/10 text-white';
                  }
                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = 'border-emerald-500/80 bg-emerald-500/20 text-emerald-300 font-semibold';
                    } else if (selectedOptionIndex === idx) {
                      btnStyle = 'border-red-500/80 bg-red-500/20 text-red-300';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 text-start text-xs sm:text-sm transition ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && idx === currentQ.correctIndex && (
                        <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && selectedOptionIndex === idx && idx !== currentQ.correctIndex && (
                        <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswerSubmitted && (
                <div className="rounded-2xl border border-cyan-900/40 bg-cyan-950/20 p-4 text-xs sm:text-sm space-y-1.5 mb-6">
                  <p className="font-semibold text-cyan-300">
                    {isArabic ? '💡 الشرح التقني الهندسي:' : '💡 Technical Explanation:'}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {isArabic ? currentQ.explanationAr : currentQ.explanationEn}
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOptionIndex === null}
                    className="rounded-xl bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-gray-950 transition hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {isArabic ? 'تأكيد الإجابة' : 'Submit Answer'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="rounded-xl bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-gray-950 transition hover:bg-cyan-400 flex items-center gap-2"
                  >
                    <span>{currentQuestionIndex + 1 < quizQuestions.length ? (isArabic ? 'السؤال التالي' : 'Next Question') : (isArabic ? 'إنهاء الاختبار' : 'View Results')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 space-y-5">
              <div className="inline-flex p-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {isArabic ? 'أتممت الاختبار بنجاح!' : 'Quiz Completed!'}
              </h3>
              <p className="text-sm text-gray-300">
                {isArabic ? `لقد أجبت بشكل صحيح على ${score} من أصل ${quizQuestions.length} أسئلة.` : `You scored ${score} out of ${quizQuestions.length} correctly.`}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/60 bg-cyan-500/10 px-6 py-3 text-xs sm:text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>{isArabic ? 'إعادة الاختبار' : 'Retake Quiz'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}