'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { careerRoadmaps } from '@/data/careerData';
import { Briefcase, Search, Globe, ChevronRight, ArrowLeft, BookMarked, ArrowRight } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

function CareersContent() {
  const searchParams = useSearchParams();
  const themeParam = (searchParams.get('theme') as ThemeType) || 'core';

  const [lang, setLang] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);

  const isArabic = lang === 'ar';

  const themeStyles = {
    core: {
      bg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-500',
      cardHover: 'hover:border-cyan-500',
    },
    operations: {
      bg: 'bg-gradient-to-br from-black via-zinc-900 to-emerald-950',
      accentText: 'text-emerald-400',
      accentBorder: 'border-emerald-500',
      cardHover: 'hover:border-emerald-500',
    },
    security: {
      bg: 'bg-gradient-to-br from-slate-950 via-red-950/40 to-black',
      accentText: 'text-red-400',
      accentBorder: 'border-red-500',
      cardHover: 'hover:border-red-500',
    },
  }[themeParam] || themeStyles.core;

  const filteredCareers = careerRoadmaps.filter((career) => {
    const hasThemeParam = searchParams.has('theme');
    const matchesTheme = !hasThemeParam
      ? true
      : themeParam === 'security'
      ? career.categoryEn === 'Cybersecurity'
      : themeParam === 'operations'
      ? career.categoryEn === 'Cloud & Infrastructure' || career.categoryEn === 'System Administration' || career.categoryEn === 'Databases'
      : themeParam === 'core'
      ? career.categoryEn === 'Software Engineering' || career.categoryEn === 'Networking' || career.categoryEn === 'Data Science'
      : true;

    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      career.titleEn.toLowerCase().includes(q) ||
      career.titleAr.includes(q) ||
      career.categoryEn.toLowerCase().includes(q) ||
      career.categoryAr.includes(q) ||
      career.whatToStudyEn.toLowerCase().includes(q) ||
      career.whatToStudyAr.includes(q);

    return matchesTheme && matchesSearch;
  });

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className={`min-h-screen ${themeStyles.bg} text-gray-100 p-6 sm:p-10 transition-colors duration-700`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <Link href={`/?theme=${themeParam}`} className={`rounded-xl border border-gray-700 bg-gray-800 p-2 ${themeStyles.accentText} transition hover:bg-gray-700`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className={`h-6 w-6 ${themeStyles.accentText}`} />
                {isArabic ? 'مسارات وظائف الـ IT والتعمق المهني' : 'IT Career Roadmaps & Deep-Dive'}
              </h1>
              <p className="text-xs text-gray-400">
                {searchParams.has('theme') ? (isArabic ? `عرض المسارات المخصصة لثيم: ${themeParam}` : `Filtered by theme: ${themeParam}`) : (isArabic ? 'دليل شامل لأبرز مسارات سوق العمل التقني' : 'Master study roadmaps for top tech roles')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
            className={`flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm ${themeStyles.accentText} transition hover:bg-gray-700 self-start sm:self-auto`}
          >
            <Globe className="h-4 w-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isArabic ? 'ابحث عن أي مسار مهني أو مهارة...' : 'Search any career role or skill...'}
            className={`w-full rounded-2xl border border-gray-700 bg-gray-900/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 shadow-xl focus:${themeStyles.accentBorder} focus:outline-none backdrop-blur-md`}
          />
        </div>

        <div className="space-y-4">
          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => {
              const isSelected = selectedCareerId === career.id;
              return (
                <div
                  key={career.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isSelected ? `${themeStyles.accentBorder} bg-gray-900/95 shadow-xl` : `border-gray-800 bg-gray-900/60 ${themeStyles.cardHover}`
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedCareerId(isSelected ? null : career.id)}
                    className="flex w-full items-center justify-between p-5 text-start"
                  >
                    <div className="flex items-center gap-3">
                      <BookMarked className={`h-5 w-5 ${themeStyles.accentText} shrink-0`} />
                      <div>
                        <span className={`text-[10px] uppercase font-mono tracking-wider ${themeStyles.accentText} mb-0.5 block`}>
                          {isArabic ? career.categoryAr : career.categoryEn}
                        </span>
                        <h3 className="font-semibold text-white text-base sm:text-lg">
                          {isArabic ? career.titleAr : career.titleEn}
                        </h3>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-xs ${themeStyles.accentText} shrink-0`}>
                      <span>{isArabic ? (isSelected ? 'إخفاء الخارطة' : 'عرض التفاصيل') : (isSelected ? 'Hide' : 'View Deep-Dive')}</span>
                      <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
                    </div>
                  </button>

                  {isSelected && (
                    <div className="border-t border-gray-800 px-5 py-5 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300">
                      <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-4">
                        <h4 className={`font-semibold ${themeStyles.accentText} mb-1.5 flex items-center gap-2`}>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                          {isArabic ? '📚 ما الذي يجب أن تدرسه (البداية والأساسيات):' : '📚 What to Study (Foundations):'}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{isArabic ? career.whatToStudyAr : career.whatToStudyEn}</p>
                      </div>

                      <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-4">
                        <h4 className={`font-semibold ${themeStyles.accentText} mb-1.5 flex items-center gap-2`}>
                          <ArrowRight className="h-4 w-4 shrink-0" />
                          {isArabic ? '🚀 في ماذا يجب أن تتعمق (الاحتراف والمنافسة):' : '🚀 Where to Deep-Dive (Mastery):'}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">{isArabic ? career.whereToDeepDiveAr : career.whereToDeepDiveEn}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p>{isArabic ? 'لم يتم العثور على أي مسارات مهنية تطابق بحثك أو الثيم المحدد.' : 'No career roadmaps found matching your filter.'}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function CareersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-950 text-white p-10 text-center">Loading...</div>}>
      <CareersContent />
    </Suspense>
  );
}