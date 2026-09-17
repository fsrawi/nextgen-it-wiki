'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { itTerms, getThemeForCategory, type ITerm } from '@/data/itData';
import { BookOpen, Search, Globe, ChevronRight, ArrowLeft } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

function GlossaryContent() {
  const searchParams = useSearchParams();
  const themeParam = (searchParams.get('theme') as ThemeType) || 'core';

  const [lang, setLang] = useState<Language>('en');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedTermId, setExpandedTermId] = useState<string | number | null>(null);

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

  const toggleTerm = (id: string | number) => {
    setExpandedTermId((current) => (current === id ? null : id));
  };

  const filteredTerms = itTerms.filter((term) => {
    const hasThemeParam = searchParams.has('theme');
    const matchesTheme = !hasThemeParam ? true : getThemeForCategory(term.category) === themeParam;

    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      term.en.toLowerCase().includes(q) ||
      term.arTranslation.toLowerCase().includes(q) ||
      term.definitionEn.toLowerCase().includes(q) ||
      term.definitionAr.includes(q) ||
      term.tags?.some((tag) => tag.toLowerCase().includes(q));

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
                <BookOpen className={`h-6 w-6 ${themeStyles.accentText}`} />
                {isArabic ? 'قاموس المصطلحات التقنية' : 'Technical Glossary'}
              </h1>
              <p className="text-xs text-gray-400">
                {searchParams.has('theme') ? (isArabic ? `عرض المصطلحات المخصصة لثيم: ${themeParam}` : `Filtered by theme: ${themeParam}`) : (isArabic ? 'موسوعة شاملة للمصطلحات والبروتوكولات' : 'Comprehensive directory of IT terms & protocols')}
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
            placeholder={isArabic ? 'ابحث عن أي مصطلح تقني (مثل: IP, Docker, BGP)...' : 'Search any IT term or keyword...'}
            className={`w-full rounded-2xl border border-gray-700 bg-gray-900/90 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 shadow-xl focus:${themeStyles.accentBorder} focus:outline-none backdrop-blur-md`}
          />
        </div>

        <div className="space-y-3">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term: ITerm) => {
              const isOpen = expandedTermId === term.id;
              return (
                <div
                  key={term.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen ? `${themeStyles.accentBorder} bg-gray-900/90 shadow-lg` : `border-gray-800 bg-gray-900/50 ${themeStyles.cardHover}`
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleTerm(term.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start font-medium text-gray-200 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono font-bold ${themeStyles.accentText} text-sm sm:text-base`}>
                        {term.en}
                      </span>
                      <span className="text-xs rounded-full bg-gray-800 px-3 py-1 text-gray-300">
                        {term.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 hidden sm:inline">
                        {isArabic ? term.arTranslation : ''}
                      </span>
                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? `rotate-90 ${themeStyles.accentText}` : 'text-gray-500'}`} />
                    </div>
                  </button>

                  <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 space-y-2 text-xs sm:text-sm text-gray-300 border-t border-gray-800/60">
                        <p className="leading-relaxed pt-2">
                          {isArabic ? term.definitionAr : term.definitionEn}
                        </p>
                        {term.syntax && (
                          <div className={`rounded-xl bg-black/40 p-3 font-mono ${themeStyles.accentText} border border-gray-800`}>
                            <span className="text-gray-500 text-[10px] block mb-1">SYNTAX:</span>
                            {term.syntax}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p>{isArabic ? 'لم يتم العثور على أي مصطلحات تطابق بحثك أو الثيم المحدد.' : 'No terms found matching your filter.'}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function GlossaryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-950 text-white p-10 text-center">Loading...</div>}>
      <GlossaryContent />
    </Suspense>
  );
}