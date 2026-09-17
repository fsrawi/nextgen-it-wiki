'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cloud, ArrowLeft, Globe, Server, GitBranch, ShieldCheck, Terminal, Layers, Database, Cpu, Network } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

export default function DevopsAwsPage() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTheme, setActiveTheme] = useState<ThemeType>('operations');

  useEffect(() => {
    const savedTheme = localStorage.getItem('nextgen_active_theme') as ThemeType;
    if (savedTheme) setActiveTheme(savedTheme);
  }, []);

  const isArabic = lang === 'ar';

  const themeStyles = {
    core: { bg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950', text: 'text-cyan-400', border: 'border-cyan-500', cardBg: 'bg-cyan-950/20' },
    operations: { bg: 'bg-gradient-to-br from-black via-zinc-900 to-emerald-950', text: 'text-emerald-400', border: 'border-emerald-500', cardBg: 'bg-emerald-950/20' },
    security: { bg: 'bg-gradient-to-br from-slate-950 via-red-950/40 to-black', text: 'text-red-400', border: 'border-red-500', cardBg: 'bg-red-950/20' },
  }[activeTheme] || themeStyles.operations;

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
                <Cloud className={`h-6 w-6 ${themeStyles.text}`} />
                {isArabic ? 'موسوعة هندسة AWS وأتمتة الـ DevOps' : 'AWS Infrastructure & DevOps Encyclopedia'}
              </h1>
              <p className="text-xs text-gray-400 font-sans">
                {isArabic ? 'المرجع الشامل والعميق لإدارة السحابة، الحاويات، أمن البنى التحتية، وخطوط النشر الآلي' : 'Comprehensive encyclopedia for cloud architecture, container orchestration, and CI/CD'}
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
            {isArabic ? 'ما هو قسم هندسة السحاب والـ DevOps؟' : 'What is Cloud & DevOps Engineering?'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {isArabic 
              ? 'الـ DevOps ليس مجرد أداة أو مسمى وظيفي، بل هو ثقافة هندسية وجسر متين يربط بين مطوري البرمجيات (Development) وفرق العمليات التقنية (Operations). يهدف إلى أتمتة دورة حياة البرمجيات بالكامل، وضمان استقرار الأنظمة على الحوسبة السحابية (مثل AWS) عبر ممارسات مثل الحوسبة اللامنهجية، البنية التحتية كبرمجيات (IaC)، والمراقبة اللحظية.'
              : 'DevOps is an engineering culture and bridge between software development and IT operations, automating the software lifecycle and ensuring enterprise stability on cloud platforms like AWS.'}
          </p>
        </div>

        {/* Encyclopedia Content Blocks */}
        <div className="grid gap-6">
          {/* Module 1 */}
          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <Server className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الأول: هندسة سحابة أمازون (AWS Core & VPC Architecture)' : 'Module 1: AWS Core & Virtual Private Cloud'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
              {isArabic ? 'تصميم شبكات افتراضية مععزولة (VPC) تحتوي على شبكات داخلية وخارجية (Public/Private Subnets)، توجيه البوابات (Internet/NAT Gateways)، وإدارة قواعد الأمان الحية عبر Security Groups و NACLs.' : 'Designing isolated VPC architectures with public/private subnets, gateways, and dynamic security group rule enforcement.'}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`rounded-2xl border border-gray-800 ${themeStyles.cardBg} p-4`}>
                <h4 className={`text-sm font-bold ${themeStyles.text} mb-1 font-sans`}>Elastic Load Balancing (ELB)</h4>
                <p className="text-xs text-gray-300 font-sans">
                  {isArabic ? 'توزيع حركة المرور الهائلة على عدة خوادم لمنع التوقف وضمان الاستمرارية.' : 'Distributing incoming application traffic across multiple targets to ensure high fault tolerance.'}
                </p>
              </div>
              <div className={`rounded-2xl border border-gray-800 ${themeStyles.cardBg} p-4`}>
                <h4 className={`text-sm font-bold ${themeStyles.text} mb-1 font-sans`}>AWS Auto Scaling</h4>
                <p className="text-xs text-gray-300 font-sans">
                  {isArabic ? 'زيادة أو تقليل عدد السيرفرات تلقائياً بناءً على استهلاك الـ CPU والضغط الفعلي.' : 'Dynamically scaling compute capacity up or down based on real-time utilization metrics.'}
                </p>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <Layers className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الثاني: الحاويات المتقدمة (Docker & Kubernetes Orchestration)' : 'Module 2: Advanced Containerization & Kubernetes'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
              {isArabic ? 'عزل التطبيقات بالكامل عبر حاويات مستقلة تضمن عمل النظام على أي بيئة دون مشاكل، مع إدارة التجمعات العنقودية عبر Kubernetes.' : 'Isolating applications via lightweight containers and orchestrating clusters at scale with Kubernetes.'}
            </p>
            <div className="rounded-2xl border border-gray-800 bg-gray-950 p-4 text-xs text-emerald-400 font-mono overflow-x-auto">
              <pre>{`# Multi-stage production Dockerfile architecture
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]`}</pre>
            </div>
          </div>

          {/* Module 3 */}
          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الثالث: أتمتة خطوط النشر (GitHub Actions & CI/CD Pipelines)' : 'Module 3: Automated CI/CD Pipelines'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {isArabic ? 'بناء مسارات أوتوماتيكية تفحص الكود برمجياً، تختبر وحدات البرمجيات، تبني حاويات Docker، وترفعها إلى خوادم الإنتاج لحظياً عند كل عملية `git push` مع ضمان انعدام وقت التوقف (Zero-Downtime).' : 'Building automated pipelines that lint, test, containerize, and deploy code securely with zero downtime.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}