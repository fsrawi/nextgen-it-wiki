'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, ArrowLeft, Globe, Brain, Sparkles, Cpu, ShieldAlert, Network, Database } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

export default function AiHubPage() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTheme, setActiveTheme] = useState<ThemeType>('core');

  useEffect(() => {
    const savedTheme = localStorage.getItem('nextgen_active_theme') as ThemeType;
    if (savedTheme) setActiveTheme(savedTheme);
  }, []);

  const isArabic = lang === 'ar';

  const themeStyles = {
    core: { bg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950', text: 'text-cyan-400', border: 'border-cyan-500', cardBg: 'bg-cyan-950/20' },
    operations: { bg: 'bg-gradient-to-br from-black via-zinc-900 to-emerald-950', text: 'text-emerald-400', border: 'border-emerald-500', cardBg: 'bg-emerald-950/20' },
    security: { bg: 'bg-gradient-to-br from-slate-950 via-red-950/40 to-black', text: 'text-red-400', border: 'border-red-500', cardBg: 'bg-red-950/20' },
  }[activeTheme] || themeStyles.core;

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className={`min-h-screen ${themeStyles.bg} text-gray-100 p-6 sm:p-10 font-mono transition-colors duration-700`}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className={`rounded-xl border border-gray-700 bg-gray-800 p-2 ${themeStyles.text} transition hover:bg-gray-700`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
                <Bot className={`h-6 w-6 ${themeStyles.text}`} />
                {isArabic ? 'موسوعة الذكاء الاصطناعي وأنظمة التعلم الآلي' : 'AI & Machine Learning Encyclopedia'}
              </h1>
              <p className="text-xs text-gray-400 font-sans">
                {isArabic ? 'المرجع الهندسي الشامل للشبكات العصبية، نماذج اللغات الكبيرة، والأمن السيبراني المدعوم بالذكاء الاصطناعي' : 'Comprehensive reference for neural networks, LLMs, and AI-driven cybersecurity'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}
          className={`flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm ${themeStyles.text} transition font-sans`}
          >
            <Globe className="h-4 w-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Intro Overview */}
        <div className={`mb-8 rounded-3xl border ${themeStyles.border}/40 bg-black/80 p-6 sm:p-8 backdrop-blur-md`}>
          <h2 className={`text-lg font-bold ${themeStyles.text} mb-3 font-sans`}>
            {isArabic ? 'ما هو تخصص الذكاء الاصطناعي والأنظمة الذكية؟' : 'What is Artificial Intelligence & Intelligent Systems?'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {isArabic 
              ? 'يمثل الذكاء الاصطناعي (AI) والتعلم الآلي (Machine Learning) قمة التطور التقني الحديث. يهدف إلى محاكاة القدرات العقلية البشرية والأنماط المعقدة عبر خوارزميات رياضية قادرة على التعلم الذاتي، معالجة اللغات الطبيعية (NLP)، وتحليل البيانات الضخمة (Big Data) لاتخاذ قرارات دقيقة لحظياً.'
              : 'Artificial Intelligence and Machine Learning simulate human cognitive abilities through mathematical algorithms capable of self-learning, natural language processing, and big data analysis.'}
          </p>
        </div>

        {/* Encyclopedia Content Blocks */}
        <div className="grid gap-6">
          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <Brain className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الأول: الشبكات العصبية ونماذج اللغات الكبيرة (LLMs)' : 'Module 1: Neural Networks & Large Language Models'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
              {isArabic ? 'استكشاف بنية المحولات (Transformers)، آلية الانتباه (Attention Mechanism)، وكيفية تدريب نماذج الذكاء الاصطناعي لمعالجة النصوص وتوليد الأكواد والحلول البرمجية المعقدة.' : 'Exploring transformer architectures, attention mechanisms, and training methodologies for modern AI models.'}
            </p>
          </div>

          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الثاني: الأمن السيبراني الذكي وكشف التهديدات (AI-Driven SecOps)' : 'Module 2: AI-Driven Security & Threat Detection'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {isArabic ? 'استخدام خوارزميات التعلم غير المشرف عليه (Unsupervised Learning) لرصد الأنشطة الشبكية الشاذة (Anomaly Detection)، التصدي لهجمات الاختراق التلقائية، وتحليل السجلات الأمنية بسرعة فائقة.' : 'Leveraging unsupervised learning algorithms to detect network anomalies and automate cyber threat response.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}