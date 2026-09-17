'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  themeConfig,
  type ITTheme,
} from '@/data/itData';
import {
  Shield,
  Terminal,
  Globe,
  Cpu,
  BookOpen,
  Briefcase,
  Sparkles,
  ArrowRight,
  HelpCircle,
  TerminalSquare,
  Cloud,
  Link2,
  Bot,
  Wrench,
  Activity,
} from 'lucide-react';

type Language = 'en' | 'ar';
type Theme = ITTheme;

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTheme, setActiveTheme] = useState<Theme>('core');

  useEffect(() => {
    const savedTheme = localStorage.getItem('nextgen_active_theme') as Theme;
    if (savedTheme && (savedTheme === 'core' || savedTheme === 'operations' || savedTheme === 'security')) {
      setActiveTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setActiveTheme(newTheme);
    localStorage.setItem('nextgen_active_theme', newTheme);
  };

  const themeStyles: Record<Theme, string> = {
    core: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950',
    operations: 'bg-gradient-to-br from-black via-zinc-900 to-emerald-950',
    security: 'bg-gradient-to-br from-slate-950 via-red-950/40 to-black',
  };

  const themeAccent: Record<Theme, string> = {
    core: 'cyan',
    operations: 'emerald',
    security: 'red',
  };

  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const xPct = (e.clientX / innerWidth) * 100;
    const yPct = (e.clientY / innerHeight) * 100;

    const themeSpotlight: Record<Theme, string> = {
      core: 'rgba(34,211,238,0.16)',
      operations: 'rgba(52,211,153,0.16)',
      security: 'rgba(248,113,113,0.16)',
    };

    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(650px circle at ${xPct}% ${yPct}%, ${themeSpotlight[activeTheme]}, transparent 70%)`;
    }

    const factors = [18, -26, 14];
    blobRefs.current.forEach((el, i) => {
      if (!el) return;
      const f = factors[i] ?? 16;
      const dx = ((xPct - 50) / 50) * f;
      const dy = ((yPct - 50) / 50) * f;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = 'transparent';
    }
    blobRefs.current.forEach((el) => {
      if (el) el.style.transform = 'translate(0px, 0px)';
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const accentColor =
      activeTheme === 'operations'
        ? '52,211,153'
        : activeTheme === 'security'
        ? '248,113,113'
        : '34,211,238';

    let cleanupExtra: (() => void) | undefined;

    if (activeTheme === 'core') {
      const nodeCount = 20;
      const nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.3,
      }));

      let packets: { a: number; b: number; t: number }[] = [];
      const spawnInterval = window.setInterval(() => {
        const a = Math.floor(Math.random() * nodeCount);
        let b = Math.floor(Math.random() * nodeCount);
        if (b === a) b = (b + 1) % nodeCount;
        packets.push({ a, b, t: 0 });
      }, 2500);

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        });

        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.strokeStyle = `rgba(${accentColor}, ${0.07 * (1 - dist / 130)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        nodes.forEach((n) => {
          ctx.fillStyle = `rgba(${accentColor}, 0.35)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        packets = packets.filter((p) => p.t <= 1);
        packets.forEach((p) => {
          p.t += 0.008;
          const a = nodes[p.a];
          const b = nodes[p.b];
          const x = a.x + (b.x - a.x) * p.t;
          const y = a.y + (b.y - a.y) * p.t;
          ctx.fillStyle = `rgba(${accentColor}, 0.8)`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        });

        animationRef.current = requestAnimationFrame(draw);
      };

      draw();
      cleanupExtra = () => window.clearInterval(spawnInterval);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      if (cleanupExtra) cleanupExtra();
    };
  }, [activeTheme]);

  const isArabic = lang === 'ar';
  const accent = themeAccent[activeTheme];

  return (
    <main
      dir={isArabic ? 'rtl' : 'ltr'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-screen overflow-hidden text-gray-100 transition-colors duration-700 ${themeStyles[activeTheme]}`}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b border-gray-800/60 bg-gray-950/75 backdrop-blur-md relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className={`h-6 w-6 text-${accent}-400`} />
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-white">NextGen IT & AI Wiki</h1>
              <p className="text-xs text-gray-400">
                {isArabic ? 'المنصة الذكية المتطورة لتكنولوجيا المعلومات والذكاء الاصطناعي' : 'Advanced IT & AI Intelligence Hub'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-3 text-xs font-medium flex-wrap">
              <Link href={`/glossary?theme=${activeTheme}`} className="text-gray-300 hover:text-cyan-400 transition">
                {isArabic ? '📖 القاموس' : 'Glossary'}
              </Link>
              <Link href={`/careers?theme=${activeTheme}`} className="text-gray-300 hover:text-cyan-400 transition">
                {isArabic ? '🚀 المسارات' : 'Careers'}
              </Link>
              <Link href="/quiz" className="text-gray-300 hover:text-cyan-400 transition">
                {isArabic ? '🎯 الاختبارات' : 'Quizzes'}
              </Link>
              <Link href="/terminal" className="text-red-400 hover:text-red-300 transition font-bold">
                {isArabic ? '💻 المحاكي' : 'Terminal'}
              </Link>
              <Link href="/scanner" className="text-red-400 hover:text-red-300 transition font-bold">
                {isArabic ? '🛡️ المدقق' : 'Scanner'}
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs text-cyan-300 transition hover:bg-gray-700"
            >
              <Globe className="h-3.5 w-3.5" />
              {isArabic ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 text-center">
        <span className={`mb-4 inline-flex items-center gap-2 rounded-full border border-${accent}-500/40 bg-${accent}-500/10 px-4 py-1 text-xs font-medium text-${accent}-300`}>
          <Terminal className="h-3.5 w-3.5" />
          {isArabic ? 'منصة هندسية متكاملة للجيل القادم' : 'Next-Gen Engineering Intelligence Hub'}
        </span>

        <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
          {isArabic ? 'استكشف البنى التحتية، السحاب والذكاء الاصطناعي' : 'Explore Cloud, DevOps, AI & Security'}
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base mb-8">
          {isArabic ? 'اختر التخصص أدناه لتتفاعل المنصة مع بيئتك وتعرض لك الأدوات، الشروحات، والبروتوكولات بدقة.' : 'Select a domain focus below to dynamically tailor your engineering experience.'}
        </p>

        {/* Actionable Theme Selectors */}
        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <button
            type="button"
            onClick={() => handleThemeChange('core')}
            className={`group rounded-2xl border p-6 text-start shadow-lg backdrop-blur-md transition ${activeTheme === 'core' ? 'border-cyan-500 bg-cyan-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/60 hover:border-cyan-500'}`}
          >
            <Cpu className="mb-3 h-6 w-6 text-cyan-400" />
            <h3 className="mb-1 font-semibold text-white">{isArabic ? themeConfig.core.nameAr : themeConfig.core.nameEn}</h3>
            <p className="text-xs text-gray-400">{isArabic ? themeConfig.core.descriptionAr : themeConfig.core.descriptionEn}</p>
          </button>

          <button
            type="button"
            onClick={() => handleThemeChange('operations')}
            className={`group rounded-2xl border p-6 text-start shadow-lg backdrop-blur-md transition ${activeTheme === 'operations' ? 'border-emerald-500 bg-emerald-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/60 hover:border-emerald-500'}`}
          >
            <Terminal className="mb-3 h-6 w-6 text-emerald-400" />
            <h3 className="mb-1 font-semibold text-white">{isArabic ? themeConfig.operations.nameAr : themeConfig.operations.nameEn}</h3>
            <p className="text-xs text-gray-400">{isArabic ? themeConfig.operations.descriptionAr : themeConfig.operations.descriptionEn}</p>
          </button>

          <button
            type="button"
            onClick={() => handleThemeChange('security')}
            className={`group rounded-2xl border p-6 text-start shadow-lg backdrop-blur-md transition ${activeTheme === 'security' ? 'border-red-500 bg-red-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/60 hover:border-red-500'}`}
          >
            <Shield className="mb-3 h-6 w-6 text-red-400" />
            <h3 className="mb-1 font-semibold text-white">{isArabic ? themeConfig.security.nameAr : themeConfig.security.nameEn}</h3>
            <p className="text-xs text-gray-400">{isArabic ? themeConfig.security.descriptionAr : themeConfig.security.descriptionEn}</p>
          </button>
        </div>

        {/* Comprehensive Portal Cards (All Old & New Combined) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Glossary */}
          <Link href={`/glossary?theme=${activeTheme}`} className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-cyan-500 hover:bg-gray-900/90 shadow-xl">
            <BookOpen className="h-7 w-7 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'قاموس المصطلحات والبروتوكولات' : 'Glossary & Ports'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'تصفح مئات المصطلحات والبروتوكولات.' : 'Browse hundreds of terms.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300">
              {isArabic ? 'استكشف' : 'Explore'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 2. Career Roadmaps */}
          <Link href={`/careers?theme=${activeTheme}`} className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-emerald-500 hover:bg-gray-900/90 shadow-xl">
            <Briefcase className="h-7 w-7 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'مسارات الوظائف والمستقبل' : 'Career Roadmaps'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'دليل دراسي هندسي لأبرز التخصصات.' : 'Deep-dive professional roadmaps.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
              {isArabic ? 'عرض' : 'View'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 3. Quizzes */}
          <Link href="/quiz" className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-red-500 hover:bg-gray-900/90 shadow-xl">
            <HelpCircle className="h-7 w-7 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'الاختبارات الذكية' : 'Interactive Quizzes'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'اختبر معلوماتك بشروح هندسية.' : 'Test with instant feedback.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-300">
              {isArabic ? 'ابدأ' : 'Start'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 4. Terminal CLI Simulator */}
          <Link href="/terminal" className="group rounded-3xl border border-red-900/60 bg-gray-900/70 p-5 text-start transition hover:border-red-500 hover:bg-gray-900/90 shadow-xl shadow-red-950/20">
            <TerminalSquare className="h-7 w-7 text-red-500 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'محاكي الأوامر والمراقبة' : 'CLI & Monitoring'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'جرب أوامر لينكس و Nmap حية.' : 'Test live CLI commands.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-400">
              {isArabic ? 'جرب الآن' : 'Run'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 5. Vuln Scanner & Link Checker */}
          <Link href="/scanner" className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-red-500 hover:bg-gray-900/90 shadow-xl">
            <Link2 className="h-7 w-7 text-red-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'فحص الروابط والـ Scanner' : 'URL & Vuln Checker'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'تأكد من أمان الروابط وفحص الثغرات.' : 'Check link safety & recon.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-300">
              {isArabic ? 'افحص' : 'Check'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 6. AWS & DevOps Hub */}
          <Link href="/devops-aws" className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-emerald-500 hover:bg-gray-900/90 shadow-xl">
            <Cloud className="h-7 w-7 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'هندسة AWS والـ DevOps' : 'AWS & DevOps Hub'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'إدارة السحابة وأتمتة النشر (CI/CD).' : 'Cloud infrastructure & CI/CD.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
              {isArabic ? 'عرض' : 'View'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 7. AI Intelligence Hub */}
          <Link href="/ai-hub" className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-indigo-500 hover:bg-gray-900/90 shadow-xl">
            <Bot className="h-7 w-7 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'تخصص الذكاء الاصطناعي' : 'AI & Systems Hub'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'نماذج التعلم الآلي والأنظمة الذكية.' : 'Machine learning & AI tools.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300">
              {isArabic ? 'اكتشف' : 'Discover'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          {/* 8. Robotics & Circuits */}
          <Link href="/robotics" className="group rounded-3xl border border-gray-800 bg-gray-900/70 p-5 text-start transition hover:border-amber-500 hover:bg-gray-900/90 shadow-xl">
            <Wrench className="h-7 w-7 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-bold text-white mb-1.5">{isArabic ? 'الروبوتات والدوائر الكهربائية' : 'Robotics & Circuits'}</h4>
            <p className="text-xs text-gray-400 mb-3">{isArabic ? 'شرائح مصورة لصنع وبرمجة الدوائر.' : 'Circuits, microcontrollers & bots.'}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
              {isArabic ? 'تصفح' : 'Browse'} <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-gray-800/60 py-6 text-center text-xs text-gray-500">
        {isArabic ? 'NextGen IT & AI Wiki — منصة الهندسة والمعرفة التقنية المتقدمة' : 'NextGen IT & AI Wiki — Advanced Engineering & Intelligence Hub'}
      </footer>
    </main>
  );
}