'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, Globe, Play, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

type Language = 'en' | 'ar';
type ThemeType = 'core' | 'operations' | 'security';

interface IVulnerability {
  port: number;
  service: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  cve: string;
  descriptionEn: string;
  descriptionAr: string;
  fixEn: string;
  fixAr: string;
}

export default function VulnerabilityScannerPage() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTheme, setActiveTheme] = useState<ThemeType>('security');
  const [targetIp, setTargetIp] = useState<string>('192.168.1.100');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanComplete, setScanComplete] = useState<boolean>(false);
  const [vulnerabilities, setVulnerabilities] = useState<IVulnerability[]>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('nextgen_active_theme') as ThemeType;
    if (savedTheme) {
      setActiveTheme(savedTheme);
    }
  }, []);

  const isArabic = lang === 'ar';

  const themeStyles = {
    core: {
      bg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-500',
      btnBg: 'bg-cyan-600 hover:bg-cyan-500',
    },
    operations: {
      bg: 'bg-gradient-to-br from-black via-zinc-900 to-emerald-950',
      accentText: 'text-emerald-400',
      accentBorder: 'border-emerald-500',
      btnBg: 'bg-emerald-600 hover:bg-emerald-500',
    },
    security: {
      bg: 'bg-gradient-to-br from-slate-950 via-red-950/40 to-black',
      accentText: 'text-red-400',
      accentBorder: 'border-red-500',
      btnBg: 'bg-red-600 hover:bg-red-500',
    },
  }[activeTheme] || themeStyles.security;

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetIp.trim()) return;

    setIsScanning(true);
    setScanComplete(false);
    setVulnerabilities([]);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setVulnerabilities([
        {
          port: 21,
          service: 'FTP (vsftpd 2.3.4)',
          severity: 'CRITICAL',
          cve: 'CVE-2011-2523',
          descriptionEn: 'Backdoor vulnerability allowing remote code execution via a smiley face (:)) in username.',
          descriptionAr: 'ثغرة باب خلفي تتيح تنفيذ أوامر برمجية عن بُعد عبر إرسال وجه ضاحك في اسم المستخدم.',
          fixEn: 'Upgrade vsftpd to the latest secure version or disable anonymous FTP access.',
          fixAr: 'قم بترقية الخدمة إلى أحدث نسخة آمنة أو قم بتعطيل الدخول المجهول.',
        },
        {
          port: 22,
          service: 'OpenSSH 4.3',
          severity: 'HIGH',
          cve: 'CVE-2008-0166',
          descriptionEn: 'Predictable pseudo-random number generator leading to weak cryptographic keys.',
          descriptionAr: 'مولد أرقام عشوائية ضعيف يؤدي إلى إنشاء مفاتيح تشفير ضعيفة ويسهل تخمينها.',
          fixEn: 'Update OpenSSH package and regenerate system host keys.',
          fixAr: 'قم بتحديث حزمة OpenSSH وإعادة توليد مفاتيح المضيف.',
        },
      ]);
    }, 2000);
  };

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className={`min-h-screen ${themeStyles.bg} text-gray-100 p-6 sm:p-10 font-mono transition-colors duration-700`}>
      <div className="mx-auto max-w-4xl">
        {/* Header & Back Button */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className={`rounded-xl border border-gray-700 bg-gray-800 p-2 ${themeStyles.accentText} transition hover:bg-gray-700`}>
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
                <Shield className={`h-6 w-6 ${themeStyles.accentText}`} />
                {isArabic ? 'مدقق الثغرات الأمنية (Mini Vuln Scanner)' : 'Mini Vulnerability Scanner'}
              </h1>
              <p className="text-xs text-gray-400 font-sans">
                {isArabic ? 'أداة محاكاة فحص الشبكات واستخراج تقارير التهديدات' : 'Simulate network reconnaissance and vulnerability assessment'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
            className={`flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm ${themeStyles.accentText} transition hover:bg-gray-700 self-start sm:self-auto font-sans`}
          >
            <Globe className="h-4 w-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Target IP Form */}
        <div className={`rounded-2xl border ${themeStyles.accentBorder}/50 bg-black/80 p-6 shadow-2xl backdrop-blur-md mb-8`}>
          <form onSubmit={handleStartScan} className="flex flex-col sm:flex-row gap-4 items-center">
            <div className={`w-full flex items-center gap-3 bg-gray-950 px-4 py-3 rounded-xl border ${themeStyles.accentBorder}/40`}>
              <Terminal className={`h-5 w-5 ${themeStyles.accentText} shrink-0`} />
              <input
                type="text"
                value={targetIp}
                onChange={(e) => setTargetIp(e.target.value)}
                placeholder={isArabic ? 'أدخل عنوان الـ IP المستهدف...' : 'Enter target IP address...'}
                className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isScanning}
              className={`w-full sm:w-auto rounded-xl ${themeStyles.btnBg} px-6 py-3 text-xs font-semibold text-white transition flex items-center justify-center gap-2 font-sans shrink-0 disabled:opacity-50`}
            >
              <Play className="h-4 w-4 fill-current" />
              <span>{isScanning ? (isArabic ? 'جاري الفحص...' : 'Scanning...') : (isArabic ? 'بدء الفحص' : 'Start Scan')}</span>
            </button>
          </form>
        </div>

        {/* Scan Results */}
        {scanComplete && (
          <div className="space-y-4">
            <h3 className={`text-sm font-bold ${themeStyles.accentText} uppercase tracking-wider flex items-center gap-2 font-sans`}>
              <AlertTriangle className="h-4 w-4" />
              {isArabic ? `تقرير الثغرات للهدف: ${targetIp}` : `Report for target: ${targetIp}`}
            </h3>

            {vulnerabilities.map((vuln, idx) => (
              <div key={idx} className={`rounded-2xl border ${themeStyles.accentBorder}/40 bg-gray-950/80 p-5 space-y-3 shadow-lg`}>
                <div className="flex justify-between items-center">
                  <span className={`px-2.5 py-1 text-xs font-bold ${themeStyles.accentText} bg-black border rounded`}>
                    PORT {vuln.port} - {vuln.service}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded">
                    {vuln.cve}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-sans">
                  {isArabic ? vuln.descriptionAr : vuln.descriptionEn}
                </p>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-3 text-xs">
                  <span className={`font-semibold ${themeStyles.accentText} block mb-1`}>
                    {isArabic ? 'طريقة المعالجة:' : 'Remediation:'}
                  </span>
                  <p className="text-gray-300">{isArabic ? vuln.fixAr : vuln.fixEn}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}