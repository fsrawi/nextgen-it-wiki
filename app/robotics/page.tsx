'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Wrench, ArrowLeft, Globe, CircuitBoard, Cpu, Radio, Zap, Layers } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

export default function RoboticsPage() {
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
                <Wrench className={`h-6 w-6 ${themeStyles.text}`} />
                {isArabic ? 'موسوعة الروبوتات والأنظمة المدمجة والدوائر الكهربائية' : 'Robotics & Embedded Systems Encyclopedia'}
              </h1>
              <p className="text-xs text-gray-400 font-sans">
                {isArabic ? 'المرجع الشامل لبرمجة المتحكمات الدقيقة، تصميم الدوائر المنطقية، وهندسة الروبوتات' : 'Comprehensive reference for microcontrollers, logic circuits, and robotics engineering'}
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
            {isArabic ? 'ما هو تخصص الروبوتات والأنظمة المدمجة؟' : 'What are Robotics & Embedded Systems?'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            {isArabic 
              ? 'الأنظمة المدمجة (Embedded Systems) والروبوتات هي التخصص الهندسي الذي يدمج بين العتاد الصلب (Hardware) والبرمجيات (Software). يهدف إلى تصميم وتصنيع أجهزة ذكية، متحكمات دقيقة (Microcontrollers)، ودوائر كهربائية قادرة على التفاعل مع البيئة المحيطة عبر الحساسات والمحركات لتنفيذ مهام آلية معقدة.'
              : 'Embedded systems and robotics combine hardware and software to design intelligent devices, microcontrollers, and circuits that interact dynamically with physical environments.'}
          </p>
        </div>

        {/* Encyclopedia Content Blocks */}
        <div className="grid gap-6">
          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <CircuitBoard className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الأول: المتحكمات الدقيقة (Microcontrollers: Arduino, ESP32 & STM32)' : 'Module 1: Microcontroller Ecosystem & IoT'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-4">
              {isArabic ? 'دراسة عميقة لمعمارية المتحكمات، لغة C/C++ المضمنة، وتوصيل الحساسات الرقمية والتناظرية (Digital/Analog Sensors) مع دعم الاتصال اللاسلكي عبر وحدات ESP32 و Wi-Fi/Bluetooth.' : 'Deep-dive into microcontroller architectures, embedded C/C++, sensor interfacing, and wireless telemetry.'}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`rounded-2xl border border-gray-800 ${themeStyles.cardBg} p-4`}>
                <h4 className={`text-sm font-bold ${themeStyles.text} mb-1 font-sans`}>GPIO & PWM Control</h4>
                <p className="text-xs text-gray-300 font-sans">
                  {isArabic ? 'التحكم في إشارات الدخل والخرج الرقمية وتعديل عرض النبضة لتشغيل المحركات بدقة.' : 'Controlling digital I/O pins and pulse-width modulation for precise motor control.'}
                </p>
              </div>
              <div className={`rounded-2xl border border-gray-800 ${themeStyles.cardBg} p-4`}>
                <h4 className={`text-sm font-bold {themeStyles.text} mb-1 font-sans`}>Communication Protocols (I2C, SPI, UART)</h4>
                <p className="text-xs text-gray-300 font-sans">
                  {isArabic ? 'ربط الحساسات والشاشات بالمتحكم عبر بروتوكولات الاتصال التسلسلي السريعة.' : 'Interfacing sensors and displays using high-speed serial communication protocols.'}
                </p>
              </div>
            </div>
          </div>

          <div className={`rounded-3xl border ${themeStyles.border}/40 bg-black/85 p-6 sm:p-8 shadow-xl backdrop-blur-md`}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className={`h-6 w-6 ${themeStyles.text}`} />
              <h3 className="text-base font-bold text-white font-sans">
                {isArabic ? 'المجلد الثاني: منطق الدوائر الكهربائية واختبار العتاد' : 'Module 2: Circuit Logic & Hardware Diagnostics'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {isArabic ? 'حساب الأحمال الكهربائية، قانون أوم، حماية الدوائر عبر تنظيم الفولتية، واستخدام أجهزة القياس (Multimeter & Oscilloscope) لاختبار الإشارات وفحص الأخطاء الهندسية.' : 'Power logic, Ohm\'s law application, voltage regulation, and utilizing multimeters and oscilloscopes for hardware troubleshooting.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}