'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Terminal as TerminalIcon, ArrowLeft, Globe, Play, Trash2 } from 'lucide-react';

type Language = 'en' | 'ar';

interface ICommandLog {
  command: string;
  output: string;
  explanationEn: string;
  explanationAr: string;
}

export default function TerminalSimulatorPage() {
  const [lang, setLang] = useState<Language>('en');
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<ICommandLog[]>([
    {
      command: 'help',
      output: 'Available commands: nmap, docker ps, ping, systemctl status nginx, ip addr, clear',
      explanationEn: 'Type any of the available commands to test their simulated output.',
      explanationAr: 'اكتب أي أمر من الأوامر المتاحة لتجربة مخرجاتها المحاكية.',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isArabic = lang === 'ar';

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    let expEn = '';
    let expAr = '';

    if (cmd.startsWith('nmap')) {
      output = 'Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for target (192.168.1.100)\nHost is up (0.0012s latency).\nNot shown: 998 closed ports\nPORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https\nMAC Address: 00:11:22:33:44:55 (Cisco Systems)';
      expEn = 'Nmap is a powerful network scanner used for vulnerability assessment and discovering hosts and services.';
      expAr = 'أمر Nmap يُستخدم لاكتشاف الأجهزة، المنافذ المفتوحة، والخدمات قيد التشغيل في الشبكة.';
    } else if (cmd === 'docker ps') {
      output = 'CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES\na1b2c3d4e5f6   nginx:latest  "/docker-entrypoint.…"   2 hours ago      Up 2 hours      0.0.0.0:80->80/tcp       web-proxy\n7f8e9d0c1b2a   redis:alpine  "docker-entrypoint.s…"   5 hours ago      Up 5 hours      0.0.0.0:6379->6379/tcp   cache-db';
      expEn = 'Lists all running Docker containers, their active ports, and operational status.';
      expAr = 'يعرض قائمة الحاويات (Containers) قيد التشغيل حالياً مع منافذ الاتصال الخاصة بها.';
    } else if (cmd.startsWith('ping')) {
      output = 'PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=14.2 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=13.8 ms\n--- 8.8.8.8 ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, time 1001ms';
      expEn = 'Sends ICMP ECHO_REQUEST to network hosts to test reachability and latency.';
      expAr = 'يستخدم لاختبار الاتصال والوصول إلى عنوان شبكي معين وحساب زمن الاستجابة (Latency).';
    } else if (cmd.includes('systemctl status nginx')) {
      output = '● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)\n     Active: active (running) since Thu 2026-09-17 02:00:00 UTC; 3h ago\n   Main PID: 1234 (nginx)';
      expEn = 'Checks the operational status of the Nginx web server service in Linux systems.';
      expAr = 'يتحقق من حالة تشغيل خادم الويب Nginx وما إذا كان يعمل بشكل سليم.';
    } else if (cmd === 'ip addr' || cmd === 'ifconfig') {
      output = '1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65535 qdisc noqueue state UNKNOWN\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    inet 192.168.1.50/24 brd 192.168.1.255 scope global dynamic eth0';
      expEn = 'Displays network interface IP addresses, MAC addresses, and operational states.';
      expAr = 'يعرض عناوين IP وعناوين MAC الخاصة بكروت الشبكة المثبتة في الجهاز.';
    } else if (cmd === 'help') {
      output = 'Available commands:\n- nmap [target]\n- docker ps\n- ping [host]\n- systemctl status nginx\n- ip addr\n- clear';
      expEn = 'List of simulated diagnostic and administration commands.';
      expAr = 'قائمة بالأوامر المتاحة للتجربة.';
    } else {
      output = `bash: ${cmd}: command not found. Type 'help' for available commands.`;
      expEn = 'Command not recognized in the simulator sandbox.';
      expAr = 'الأمر غير معروف داخل بيئة المحاكاة الآمنة.';
    }

    setHistory((prev) => [
      ...prev,
      {
        command: inputVal,
        output,
        explanationEn: expEn,
        explanationAr: expAr,
      },
    ]);
    setInputVal('');
  };

  return (
    <main dir={isArabic ? 'rtl' : 'ltr'} className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-gray-100 p-6 sm:p-10 font-mono">
      <div className="mx-auto max-w-4xl">
        {/* Header & Back Button */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-xl border border-gray-700 bg-gray-800 p-2 text-red-400 transition hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2 font-sans">
                <TerminalIcon className="h-6 w-6 text-red-500" />
                {isArabic ? 'محاكي الأوامر التقني (Terminal Simulator)' : 'Interactive CLI Simulator'}
              </h1>
              <p className="text-xs text-gray-400 font-sans">
                {isArabic ? 'جرب الأوامر الشائعة وشاهد المخرجات والشرح الهندسي الفوري' : 'Test popular IT/Security commands with live simulated outputs'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLang((current) => (current === 'en' ? 'ar' : 'en'))}
            className="flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-red-300 transition hover:bg-gray-700 self-start sm:self-auto font-sans"
          >
            <Globe className="h-4 w-4" />
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-red-900/40 bg-black/90 p-5 shadow-2xl backdrop-blur-md min-h-[450px] max-h-[600px] flex flex-col justify-between">
          <div className="space-y-4 overflow-y-auto pr-2 pb-4">
            <div className="text-xs text-gray-500 border-b border-gray-900 pb-2">
              {isArabic ? '💡 تلميح: اكتب help لعرض الأوامر المتاحة، أو nmap، docker ps، ping' : '💡 Tip: Type "help", "nmap", "docker ps", or "ping"'}
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-red-500 font-bold">
                  <span>$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <pre className="whitespace-pre-wrap text-gray-300 bg-gray-950/80 p-3 rounded-xl border border-gray-900 text-xs overflow-x-auto">
                  {item.output}
                </pre>
                <div className="text-[11px] text-red-400 bg-red-950/20 px-3 py-1.5 rounded-lg border border-red-900/30 font-sans">
                  <span className="font-semibold">{isArabic ? 'الشرح الهندسي: ' : 'Analysis: '}</span>
                  {isArabic ? item.explanationAr : item.explanationEn}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommandSubmit} className="mt-4 border-t border-gray-800 pt-4 flex items-center gap-3">
            <span className="text-red-500 font-bold text-base">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={isArabic ? 'اكتب أمراً هنا (مثل: nmap)...' : 'Type a command here...'}
              className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none text-xs sm:text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-500 flex items-center gap-1.5 font-sans"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{isArabic ? 'تنفيذ' : 'Run'}</span>
            </button>
            <button
              type="button"
              onClick={() => setHistory([])}
              className="rounded-xl border border-gray-700 bg-gray-800 p-2 text-gray-400 transition hover:text-white"
              title="Clear terminal"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}