// ============================================================
// IT KNOWLEDGE BASE
// Comprehensive IT / Cybersecurity / Networking / DevOps / Data
// ============================================================

export type ITCategory =
  | 'Networking & Infrastructure'
  | 'Cybersecurity & SOC'
  | 'Software Engineering'
  | 'Cloud & DevOps'
  | 'Data Science & AI'
  | 'Operating Systems'
  | 'Databases'
  | 'Digital Forensics & DFIR'
  | 'Data Analytics'
  | 'System Administration'
  | 'Web Development'
  | 'Programming'
  | 'IT Support'
  | 'Virtualization & Containers'
  | 'Cryptography'
  | 'Threat Intelligence'
  | 'Governance Risk & Compliance';

export type ITTheme = 'core' | 'security' | 'operations';

export type ITDomain =
  | 'Networking & Infrastructure'
  | 'Cybersecurity'
  | 'Software Engineering'
  | 'Cloud & DevOps'
  | 'Data Science & AI'
  | 'Operating Systems & Databases';

export interface ITSubdomain {
  id: string;
  domain: ITDomain;
  titleEn: string;
  titleAr: string;
  theme: ITTheme;
  categories: ITCategory[];
}

export const itDomains: ITSubdomain[] = [
  { id: 'networking', domain: 'Networking & Infrastructure', titleEn: 'Networking & Infrastructure', titleAr: 'الشبكات والبنية التحتية', theme: 'core', categories: ['Networking & Infrastructure'] },
  { id: 'cybersecurity', domain: 'Cybersecurity', titleEn: 'Cybersecurity', titleAr: 'الأمن السيبراني', theme: 'security', categories: ['Cybersecurity & SOC', 'Digital Forensics & DFIR', 'Cryptography', 'Threat Intelligence', 'Governance Risk & Compliance'] },
  { id: 'software', domain: 'Software Engineering', titleEn: 'Software Engineering', titleAr: 'هندسة البرمجيات', theme: 'core', categories: ['Software Engineering', 'Web Development', 'Programming'] },
  { id: 'cloud', domain: 'Cloud & DevOps', titleEn: 'Cloud & DevOps', titleAr: 'الحوسبة السحابية وDevOps', theme: 'core', categories: ['Cloud & DevOps', 'Virtualization & Containers'] },
  { id: 'data-ai', domain: 'Data Science & AI', titleEn: 'Data Science & AI', titleAr: 'علوم البيانات والذكاء الاصطناعي', theme: 'core', categories: ['Data Science & AI', 'Data Analytics'] },
  { id: 'systems', domain: 'Operating Systems & Databases', titleEn: 'Operating Systems & Databases', titleAr: 'أنظمة التشغيل وقواعد البيانات', theme: 'operations', categories: ['Operating Systems', 'Databases', 'System Administration', 'IT Support'] },
];

export const themeConfig: Record<ITTheme, { nameEn: string; nameAr: string; descriptionEn: string; descriptionAr: string }> = {
  core: {
    nameEn: 'Core IT',
    nameAr: 'أساسيات وتقنيات IT',
    descriptionEn: 'Networking, software, cloud, data, AI and databases.',
    descriptionAr: 'الشبكات والبرمجيات والسحابة والبيانات والذكاء الاصطناعي وقواعد البيانات.',
  },
  security: {
    nameEn: 'Security',
    nameAr: 'الأمن السيبراني',
    descriptionEn: 'Defense, SOC, DFIR, threat intelligence and security engineering.',
    descriptionAr: 'الدفاع وSOC والتحقيق الجنائي الرقمي والاستخبارات والهندسة الأمنية.',
  },
  operations: {
    nameEn: 'Operations',
    nameAr: 'العمليات والبنية التحتية',
    descriptionEn: 'Linux, Windows, administration, support and infrastructure operations.',
    descriptionAr: 'لينكس وويندوز والإدارة والدعم وتشغيل البنية التحتية.',
  },
};

export function getThemeForCategory(category: ITCategory): ITTheme {
  if (['Cybersecurity & SOC', 'Cryptography', 'Threat Intelligence', 'Governance Risk & Compliance', 'Digital Forensics & DFIR'].includes(category)) return 'security';
  if (['Operating Systems', 'System Administration', 'IT Support'].includes(category)) return 'operations';
  return 'core';
}

export function getDomainForCategory(category: ITCategory): ITDomain {
  const domain = itDomains.find(item => item.categories.includes(category));
  return domain?.domain ?? 'Operating Systems & Databases';
}

const subdomainByCategory: Partial<Record<ITCategory, string>> = {
  'Networking & Infrastructure': 'networking-fundamentals',
  'Cybersecurity & SOC': 'security-operations',
  'Digital Forensics & DFIR': 'digital-forensics-dfir',
  'Software Engineering': 'software-engineering',
  'Web Development': 'web-development',
  'Programming': 'programming',
  'Cloud & DevOps': 'cloud-platforms-devops',
  'Virtualization & Containers': 'containers-orchestration',
  'Data Science & AI': 'data-science-ai',
  'Data Analytics': 'data-analytics',
  'Operating Systems': 'linux-windows',
  'Databases': 'databases',
  'System Administration': 'system-administration',
  'IT Support': 'it-support',
  'Cryptography': 'cryptography',
  'Threat Intelligence': 'threat-intelligence',
  'Governance Risk & Compliance': 'grc',
};

export type ITItemType =
  | 'term'
  | 'protocol'
  | 'port'
  | 'command'
  | 'tool'
  | 'technology'
  | 'framework'
  | 'standard'
  | 'file-format'
  | 'concept'
  | 'architecture';

export interface ITerm {
  id: string;
  en: string;
  arTranslation: string;
  category: ITCategory;
  type: ITItemType;
  theme?: ITTheme;
  domain?: ITDomain;
  subdomain?: string;
  definitionEn: string;
  definitionAr: string;
  relatedTerms?: string[];
  tags?: string[];
  syntax?: string;
  examples?: string[];
  ports?: number[];
  layer?: string;
  platform?: string[];
}

export interface ITopic {
  id: string;
  titleEn: string;
  titleAr: string;
  category: ITCategory;
  theme?: ITTheme;
  domain?: ITDomain;
  subdomain?: string;
  summaryEn: string;
  summaryAr: string;
  essentialsEn: string[];
  essentialsAr: string[];
  usageEn: string;
  usageAr: string;
  technologies?: string[];
  tools?: string[];
  protocols?: string[];
}

export interface IJobRole {
  id: string;
  titleEn: string;
  titleAr: string;
  category: ITCategory;
  theme?: ITTheme;
  domain?: ITDomain;
  subdomain?: string;
  descriptionEn: string;
  descriptionAr: string;
  skills: string[];
  tools?: string[];
  certifications?: string[];
  marketDemandEn: string;
  marketDemandAr: string;
}

// ============================================================
// DATA ARRAYS
// ============================================================

export const networkingTerms: ITerm[] = [
  {
    id: 'net-ip',
    en: 'IP Address',
    arTranslation: 'عنوان IP',
    category: 'Networking & Infrastructure',
    type: 'concept',
    definitionEn: 'A numerical identifier assigned to a device on an IP network.',
    definitionAr: 'عنوان رقمي يُستخدم لتعريف جهاز على شبكة تعتمد بروتوكول IP.',
    tags: ['IPv4', 'IPv6', 'Addressing']
  },
  {
    id: 'net-subnet',
    en: 'Subnetting',
    arTranslation: 'تقسيم الشبكات',
    category: 'Networking & Infrastructure',
    type: 'concept',
    definitionEn: 'The process of dividing an IP network into smaller logical networks.',
    definitionAr: 'عملية تقسيم شبكة IP إلى شبكات منطقية أصغر.',
    tags: ['CIDR', 'VLSM', 'IPv4']
  },
  {
    id: 'net-vlan',
    en: 'VLAN',
    arTranslation: 'الشبكة المحلية الافتراضية',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A logical network segmentation mechanism operating primarily at Layer 2.',
    definitionAr: 'آلية لتقسيم الشبكة منطقيًا، وتعمل بشكل أساسي في الطبقة الثانية.',
    layer: 'Layer 2',
    tags: ['802.1Q', 'Switching']
  },
  {
    id: 'net-dhcp',
    en: 'DHCP',
    arTranslation: 'بروتوكول التهيئة الديناميكية للمضيف',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A protocol used to automatically provide IP configuration to network clients.',
    definitionAr: 'بروتوكول يُستخدم لتوزيع إعدادات الشبكة مثل IP وGateway وDNS تلقائيًا.',
    ports: [67, 68]
  },
  {
    id: 'net-dns',
    en: 'DNS',
    arTranslation: 'نظام أسماء النطاقات',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A distributed system that maps domain names to IP addresses and other records.',
    definitionAr: 'نظام موزع يربط أسماء النطاقات بعناوين IP وسجلات أخرى.',
    ports: [53]
  },
  {
    id: 'net-arp',
    en: 'ARP',
    arTranslation: 'بروتوكول تحليل العناوين',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A protocol used in IPv4 networks to map IP addresses to MAC addresses.',
    definitionAr: 'بروتوكول يُستخدم في IPv4 لربط عنوان IP بعنوان MAC.',
    layer: 'Layer 2/3'
  },
  {
    id: 'net-icmp',
    en: 'ICMP',
    arTranslation: 'بروتوكول رسائل التحكم بالإنترنت',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A network protocol used for diagnostic and error-reporting purposes.',
    definitionAr: 'بروتوكول يُستخدم للتشخيص والإبلاغ عن أخطاء الشبكة.'
  },
  {
    id: 'net-ospf',
    en: 'OSPF',
    arTranslation: 'بروتوكول أقصر مسار أول',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A link-state interior gateway routing protocol.',
    definitionAr: 'بروتوكول توجيه داخلي يعتمد على حالة الوصلات.'
  },
  {
    id: 'net-bgp',
    en: 'BGP',
    arTranslation: 'بروتوكول بوابة الحدود',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'The routing protocol used to exchange routing information between autonomous systems.',
    definitionAr: 'بروتوكول يُستخدم لتبادل معلومات التوجيه بين الأنظمة المستقلة.',
    ports: [179]
  },
  {
    id: 'net-tcp',
    en: 'TCP',
    arTranslation: 'بروتوكول التحكم بالنقل',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A connection-oriented transport protocol providing reliable ordered delivery.',
    definitionAr: 'بروتوكول نقل يعتمد على الاتصال ويوفر نقلًا موثوقًا ومرتبًا للبيانات.',
    layer: 'Layer 4'
  },
  {
    id: 'net-udp',
    en: 'UDP',
    arTranslation: 'بروتوكول مخطط بيانات المستخدم',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A connectionless transport protocol with low overhead.',
    definitionAr: 'بروتوكول نقل بدون اتصال يتميز بانخفاض الـoverhead.'
  },
  {
    id: 'net-http',
    en: 'HTTP',
    arTranslation: 'بروتوكول نقل النص التشعبي',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'An application-layer protocol used to transfer web resources.',
    definitionAr: 'بروتوكول على مستوى التطبيق يُستخدم لنقل موارد الويب.',
    ports: [80]
  },
  {
    id: 'net-https',
    en: 'HTTPS',
    arTranslation: 'بروتوكول HTTP الآمن',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'HTTP protected using TLS encryption.',
    definitionAr: 'بروتوكول HTTP محمي باستخدام تشفير TLS.',
    ports: [443]
  },
  {
    id: 'net-ssh',
    en: 'SSH',
    arTranslation: 'بروتوكول الاتصال الآمن',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A secure protocol for remote administration and encrypted communication.',
    definitionAr: 'بروتوكول آمن للإدارة عن بعد والاتصالات المشفرة.',
    ports: [22]
  },
  {
    id: 'net-snmp',
    en: 'SNMP',
    arTranslation: 'بروتوكول إدارة الشبكات البسيط',
    category: 'Networking & Infrastructure',
    type: 'protocol',
    definitionEn: 'A protocol used to monitor and manage network devices.',
    definitionAr: 'بروتوكول يُستخدم لمراقبة وإدارة أجهزة الشبكات.',
    ports: [161, 162]
  }
];

export const cybersecurityTerms: ITerm[] = [
  {
    id: 'cyber-firewall',
    en: 'Firewall',
    arTranslation: 'جدار الحماية',
    category: 'Cybersecurity & SOC',
    type: 'technology',
    definitionEn: 'A security control that monitors and filters network traffic according to defined rules.',
    definitionAr: 'آلية أمنية تراقب وتفلتر حركة الشبكة بناءً على قواعد محددة.'
  },
  {
    id: 'cyber-siem',
    en: 'SIEM',
    arTranslation: 'إدارة المعلومات والأحداث الأمنية',
    category: 'Cybersecurity & SOC',
    type: 'technology',
    definitionEn: 'A platform that collects, correlates and analyzes security events and logs.',
    definitionAr: 'منصة تجمع وتربط وتحلل الأحداث والسجلات الأمنية.'
  },
  {
    id: 'cyber-soar',
    en: 'SOAR',
    arTranslation: 'تنسيق وأتمتة الاستجابة الأمنية',
    category: 'Cybersecurity & SOC',
    type: 'technology',
    definitionEn: 'Technology used to orchestrate and automate security operations and response workflows.',
    definitionAr: 'تقنية تُستخدم لتنسيق وأتمتة عمليات الأمن والاستجابة للحوادث.'
  },
  {
    id: 'cyber-edr',
    en: 'EDR',
    arTranslation: 'اكتشاف واستجابة نقاط النهاية',
    category: 'Cybersecurity & SOC',
    type: 'technology',
    definitionEn: 'A security technology that monitors endpoint activity and supports threat detection and response.',
    definitionAr: 'تقنية تراقب نشاط الأجهزة الطرفية وتساعد في اكتشاف التهديدات والاستجابة لها.'
  },
  {
    id: 'cyber-xdr',
    en: 'XDR',
    arTranslation: 'الاكتشاف والاستجابة الموسعة',
    category: 'Cybersecurity & SOC',
    type: 'technology',
    definitionEn: 'A security approach that correlates telemetry across multiple security layers.',
    definitionAr: 'نهج أمني يربط البيانات الأمنية عبر عدة طبقات ومصادر.'
  },
  {
    id: 'cyber-ioc',
    en: 'IOC',
    arTranslation: 'مؤشر الاختراق',
    category: 'Cybersecurity & SOC',
    type: 'concept',
    definitionEn: 'An observable artifact that may indicate malicious activity or compromise.',
    definitionAr: 'أثر قابل للملاحظة قد يشير إلى نشاط خبيث أو اختراق.'
  },
  {
    id: 'cyber-ttp',
    en: 'TTP',
    arTranslation: 'التكتيكات والتقنيات والإجراءات',
    category: 'Cybersecurity & SOC',
    type: 'concept',
    definitionEn: 'Tactics, techniques and procedures describing how threat actors operate.',
    definitionAr: 'التكتيكات والتقنيات والإجراءات التي تصف طريقة عمل الجهات المهاجمة.'
  },
  {
    id: 'cyber-mitre',
    en: 'MITRE ATT&CK',
    arTranslation: 'إطار MITRE ATT&CK',
    category: 'Cybersecurity & SOC',
    type: 'framework',
    definitionEn: 'A knowledge base describing adversary tactics and techniques based on real-world observations.',
    definitionAr: 'قاعدة معرفة تصف تكتيكات وتقنيات المهاجمين استنادًا إلى ملاحظات واقعية.'
  },
  {
    id: 'cyber-phishing',
    en: 'Phishing',
    arTranslation: 'التصيد الاحتيالي',
    category: 'Cybersecurity & SOC',
    type: 'concept',
    definitionEn: 'A social engineering technique used to deceive users into revealing information or performing actions.',
    definitionAr: 'أسلوب هندسة اجتماعية يهدف لخداع المستخدم للحصول على معلومات أو تنفيذ إجراء.'
  },
  {
    id: 'cyber-ransomware',
    en: 'Ransomware',
    arTranslation: 'برمجيات الفدية',
    category: 'Cybersecurity & SOC',
    type: 'concept',
    definitionEn: 'Malware designed to deny access to data or systems, commonly by encryption.',
    definitionAr: 'برمجيات خبيثة تهدف لمنع الوصول إلى البيانات أو الأنظمة، غالبًا باستخدام التشفير.'
  },
  {
    id: 'cyber-incident-response',
    en: 'Incident Response',
    arTranslation: 'الاستجابة للحوادث',
    category: 'Cybersecurity & SOC',
    type: 'concept',
    definitionEn: 'The structured process of detecting, containing, investigating and recovering from security incidents.',
    definitionAr: 'عملية منظمة لاكتشاف الحوادث الأمنية واحتوائها والتحقيق فيها والتعافي منها.'
  }
];

export const linuxCommands: ITerm[] = [
  {
    id: 'linux-ls',
    en: 'ls',
    arTranslation: 'عرض محتويات المجلد',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Lists files and directories.',
    definitionAr: 'يعرض الملفات والمجلدات.',
    syntax: 'ls [options] [path]',
    examples: ['ls -la', 'ls -lh']
  },
  {
    id: 'linux-cd',
    en: 'cd',
    arTranslation: 'تغيير المجلد',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Changes the current working directory.',
    definitionAr: 'يغير المجلد الحالي.',
    syntax: 'cd [directory]',
    examples: ['cd /var/log', 'cd ..']
  },
  {
    id: 'linux-pwd',
    en: 'pwd',
    arTranslation: 'عرض المسار الحالي',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Displays the current working directory.',
    definitionAr: 'يعرض المسار الحالي.',
    examples: ['pwd']
  },
  {
    id: 'linux-cp',
    en: 'cp',
    arTranslation: 'نسخ الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Copies files and directories.',
    definitionAr: 'ينسخ الملفات والمجلدات.',
    examples: ['cp file.txt backup.txt']
  },
  {
    id: 'linux-mv',
    en: 'mv',
    arTranslation: 'نقل أو إعادة تسمية',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Moves or renames files and directories.',
    definitionAr: 'ينقل أو يعيد تسمية الملفات والمجلدات.'
  },
  {
    id: 'linux-rm',
    en: 'rm',
    arTranslation: 'حذف الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Removes files or directories.',
    definitionAr: 'يحذف الملفات أو المجلدات.'
  },
  {
    id: 'linux-cat',
    en: 'cat',
    arTranslation: 'عرض محتوى الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Displays or concatenates file contents.',
    definitionAr: 'يعرض أو يدمج محتويات الملفات.'
  },
  {
    id: 'linux-grep',
    en: 'grep',
    arTranslation: 'البحث داخل النصوص',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Searches text using patterns.',
    definitionAr: 'يبحث داخل النصوص باستخدام أنماط محددة.',
    examples: ['grep "error" app.log', 'grep -r "password" /var/log']
  },
  {
    id: 'linux-find',
    en: 'find',
    arTranslation: 'البحث عن الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Searches for files and directories.',
    definitionAr: 'يبحث عن الملفات والمجلدات.'
  },
  {
    id: 'linux-chmod',
    en: 'chmod',
    arTranslation: 'تغيير صلاحيات الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Changes file permissions.',
    definitionAr: 'يغير صلاحيات الملفات.'
  },
  {
    id: 'linux-chown',
    en: 'chown',
    arTranslation: 'تغيير مالك الملف',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Changes file ownership.',
    definitionAr: 'يغير مالك الملف أو المجلد.'
  },
  {
    id: 'linux-ps',
    en: 'ps',
    arTranslation: 'عرض العمليات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Displays running processes.',
    definitionAr: 'يعرض العمليات الجارية.'
  },
  {
    id: 'linux-top',
    en: 'top',
    arTranslation: 'مراقبة العمليات والموارد',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Provides a real-time view of processes and system resources.',
    definitionAr: 'يعرض العمليات واستخدام موارد النظام بشكل لحظي.'
  },
  {
    id: 'linux-kill',
    en: 'kill',
    arTranslation: 'إرسال إشارة للعمليات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Sends signals to processes.',
    definitionAr: 'يرسل إشارات إلى العمليات.'
  },
  {
    id: 'linux-systemctl',
    en: 'systemctl',
    arTranslation: 'إدارة خدمات systemd',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Controls systemd services and system state.',
    definitionAr: 'يدير خدمات systemd وحالة النظام.'
  },
  {
    id: 'linux-journalctl',
    en: 'journalctl',
    arTranslation: 'قراءة سجلات systemd',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Queries logs collected by systemd-journald.',
    definitionAr: 'يستعرض السجلات التي يجمعها systemd-journald.'
  },
  {
    id: 'linux-ip',
    en: 'ip',
    arTranslation: 'إدارة الشبكات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Displays and manipulates network interfaces, addresses and routes.',
    definitionAr: 'يعرض ويدير واجهات الشبكة والعناوين ومسارات التوجيه.'
  },
  {
    id: 'linux-ss',
    en: 'ss',
    arTranslation: 'عرض اتصالات الشبكة',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Displays socket statistics and network connections.',
    definitionAr: 'يعرض إحصائيات المقابس واتصالات الشبكة.'
  },
  {
    id: 'linux-curl',
    en: 'curl',
    arTranslation: 'نقل البيانات عبر الشبكة',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Transfers data using various network protocols.',
    definitionAr: 'يستخدم لنقل البيانات عبر بروتوكولات شبكية متعددة.'
  },
  {
    id: 'linux-wget',
    en: 'wget',
    arTranslation: 'تنزيل الملفات من الشبكة',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Downloads files from web servers.',
    definitionAr: 'يستخدم لتنزيل الملفات من خوادم الويب.'
  },
  {
    id: 'linux-tar',
    en: 'tar',
    arTranslation: 'أرشفة الملفات',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Creates and extracts archive files.',
    definitionAr: 'ينشئ ويفك ملفات الأرشيف.'
  },
  {
    id: 'linux-ssh',
    en: 'ssh',
    arTranslation: 'الاتصال الآمن عن بعد',
    category: 'Operating Systems',
    type: 'command',
    definitionEn: 'Connects to remote systems securely.',
    definitionAr: 'يستخدم للاتصال الآمن بالأنظمة عن بعد.',
    examples: ['ssh user@server']
  }
];

export const forensicsTerms: ITerm[] = [
  {
    id: 'forensics-digital-evidence',
    en: 'Digital Evidence',
    arTranslation: 'الأدلة الرقمية',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'Information stored or transmitted in digital form that may be relevant to an investigation.',
    definitionAr: 'معلومات مخزنة أو منقولة بصيغة رقمية وقد تكون ذات صلة بالتحقيق.'
  },
  {
    id: 'forensics-chain-custody',
    en: 'Chain of Custody',
    arTranslation: 'سلسلة حيازة الأدلة',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'Documentation of how evidence is collected, handled, transferred and preserved.',
    definitionAr: 'توثيق كيفية جمع الأدلة والتعامل معها ونقلها والحفاظ عليها.'
  },
  {
    id: 'forensics-disk-image',
    en: 'Forensic Disk Image',
    arTranslation: 'نسخة جنائية للقرص',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'A bit-for-bit copy of storage media used for forensic examination.',
    definitionAr: 'نسخة مطابقة على مستوى البت لوسيط التخزين تستخدم في التحقيق الجنائي الرقمي.'
  },
  {
    id: 'forensics-memory',
    en: 'Memory Forensics',
    arTranslation: 'التحليل الجنائي للذاكرة',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'The analysis of volatile memory to identify processes, connections and other artifacts.',
    definitionAr: 'تحليل الذاكرة المتطايرة لاكتشاف العمليات والاتصالات والآثار الرقمية.'
  },
  {
    id: 'forensics-timeline',
    en: 'Timeline Analysis',
    arTranslation: 'تحليل الخط الزمني',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'The reconstruction of events in chronological order from digital artifacts.',
    definitionAr: 'إعادة بناء الأحداث بترتيب زمني اعتمادًا على الآثار الرقمية.'
  },
  {
    id: 'forensics-file-system',
    en: 'File System Forensics',
    arTranslation: 'التحليل الجنائي لنظام الملفات',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'Examination of file-system structures, metadata and artifacts.',
    definitionAr: 'فحص هياكل نظام الملفات والـmetadata والآثار المرتبطة بها.'
  },
  {
    id: 'forensics-network',
    en: 'Network Forensics',
    arTranslation: 'التحقيق الجنائي للشبكات',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'Analysis of network traffic and network artifacts for investigative purposes.',
    definitionAr: 'تحليل حركة الشبكة والآثار الشبكية لأغراض التحقيق.'
  },
  {
    id: 'forensics-log-analysis',
    en: 'Log Analysis',
    arTranslation: 'تحليل السجلات',
    category: 'Digital Forensics & DFIR',
    type: 'concept',
    definitionEn: 'Examination and correlation of system, application and security logs.',
    definitionAr: 'فحص وربط سجلات الأنظمة والتطبيقات والسجلات الأمنية.'
  },
  {
    id: 'forensics-volatility',
    en: 'Volatility',
    arTranslation: 'Volatility',
    category: 'Digital Forensics & DFIR',
    type: 'tool',
    definitionEn: 'A framework used for memory forensics.',
    definitionAr: 'إطار عمل يُستخدم في التحقيق الجنائي للذاكرة.'
  },
  {
    id: 'forensics-autopsy',
    en: 'Autopsy',
    arTranslation: 'Autopsy',
    category: 'Digital Forensics & DFIR',
    type: 'tool',
    definitionEn: 'A digital forensics platform used to examine disk images and digital evidence.',
    definitionAr: 'منصة للتحقيق الجنائي الرقمي وفحص صور الأقراص والأدلة الرقمية.'
  },
  {
    id: 'forensics-wireshark',
    en: 'Wireshark',
    arTranslation: 'Wireshark',
    category: 'Digital Forensics & DFIR',
    type: 'tool',
    definitionEn: 'A network protocol analyzer used to capture and inspect network traffic.',
    definitionAr: 'محلل بروتوكولات شبكية يستخدم لالتقاط وفحص حركة الشبكة.'
  }
];

export const dataAnalyticsTerms: ITerm[] = [
  {
    id: 'data-etl',
    en: 'ETL',
    arTranslation: 'الاستخراج والتحويل والتحميل',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'A process of extracting data, transforming it and loading it into a target system.',
    definitionAr: 'عملية استخراج البيانات وتحويلها ثم تحميلها إلى نظام مستهدف.'
  },
  {
    id: 'data-elt',
    en: 'ELT',
    arTranslation: 'الاستخراج والتحميل والتحويل',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'A data integration pattern where data is loaded before transformation.',
    definitionAr: 'نمط تكامل بيانات يتم فيه تحميل البيانات قبل تحويلها.'
  },
  {
    id: 'data-cleaning',
    en: 'Data Cleaning',
    arTranslation: 'تنظيف البيانات',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'The process of identifying and correcting inaccurate, incomplete or inconsistent data.',
    definitionAr: 'عملية اكتشاف وتصحيح البيانات غير الدقيقة أو الناقصة أو غير المتناسقة.'
  },
  {
    id: 'data-normalization',
    en: 'Data Normalization',
    arTranslation: 'تطبيع البيانات',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'Transforming data into a consistent structure or scale depending on the context.',
    definitionAr: 'تحويل البيانات إلى بنية أو مقياس متناسق حسب سياق الاستخدام.'
  },
  {
    id: 'data-kpi',
    en: 'KPI',
    arTranslation: 'مؤشر الأداء الرئيسي',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'A measurable indicator used to evaluate performance against a defined objective.',
    definitionAr: 'مؤشر قابل للقياس يستخدم لتقييم الأداء مقابل هدف محدد.'
  },
  {
    id: 'data-dashboard',
    en: 'Dashboard',
    arTranslation: 'لوحة المعلومات',
    category: 'Data Analytics',
    type: 'technology',
    definitionEn: 'A visual interface presenting metrics and analytical information.',
    definitionAr: 'واجهة مرئية تعرض المؤشرات والمعلومات التحليلية.'
  },
  {
    id: 'data-correlation',
    en: 'Correlation',
    arTranslation: 'الارتباط الإحصائي',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'A statistical measure describing the relationship between variables.',
    definitionAr: 'مقياس إحصائي يصف العلاقة بين المتغيرات.'
  },
  {
    id: 'data-regression',
    en: 'Regression Analysis',
    arTranslation: 'تحليل الانحدار',
    category: 'Data Analytics',
    type: 'concept',
    definitionEn: 'A statistical approach for modeling relationships between variables.',
    definitionAr: 'أسلوب إحصائي لنمذجة العلاقات بين المتغيرات.'
  },
  {
    id: 'data-pandas',
    en: 'Pandas',
    arTranslation: 'Pandas',
    category: 'Data Analytics',
    type: 'technology',
    definitionEn: 'A Python library for data manipulation and analysis.',
    definitionAr: 'مكتبة Python لمعالجة البيانات وتحليلها.'
  },
  {
    id: 'data-sql',
    en: 'SQL',
    arTranslation: 'لغة الاستعلامات المهيكلة',
    category: 'Data Analytics',
    type: 'technology',
    definitionEn: 'A language used to query and manipulate relational databases.',
    definitionAr: 'لغة تستخدم للاستعلام عن قواعد البيانات العلائقية ومعالجة بياناتها.'
  }
];

export const databaseTerms: ITerm[] = [
  {
    id: 'db-relational',
    en: 'Relational Database',
    arTranslation: 'قاعدة بيانات علائقية',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'A database that organizes data into related tables.',
    definitionAr: 'قاعدة بيانات تنظم البيانات ضمن جداول مترابطة.'
  },
  {
    id: 'db-nosql',
    en: 'NoSQL',
    arTranslation: 'قواعد بيانات غير علائقية',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'A family of database technologies that do not rely exclusively on traditional relational models.',
    definitionAr: 'مجموعة من تقنيات قواعد البيانات التي لا تعتمد حصريًا على النموذج العلائقي التقليدي.'
  },
  {
    id: 'db-index',
    en: 'Database Index',
    arTranslation: 'فهرس قاعدة البيانات',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'A data structure that improves the speed of database queries.',
    definitionAr: 'هيكل بيانات يساعد على تسريع الاستعلامات.'
  },
  {
    id: 'db-transaction',
    en: 'Transaction',
    arTranslation: 'المعاملة',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'A logical unit of database work that can be committed or rolled back.',
    definitionAr: 'وحدة منطقية من عمليات قاعدة البيانات يمكن تثبيتها أو التراجع عنها.'
  },
  {
    id: 'db-acid',
    en: 'ACID',
    arTranslation: 'خصائص ACID',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'Atomicity, Consistency, Isolation and Durability properties of transactions.',
    definitionAr: 'الذرية والاتساق والعزل والاستمرارية للمعاملات.'
  },
  {
    id: 'db-replication',
    en: 'Database Replication',
    arTranslation: 'نسخ قاعدة البيانات',
    category: 'Databases',
    type: 'concept',
    definitionEn: 'Maintaining copies of database data across multiple systems.',
    definitionAr: 'الحفاظ على نسخ من بيانات قاعدة البيانات عبر عدة أنظمة.'
  }
];

export const cloudDevOpsTerms: ITerm[] = [
  {
    id: 'cloud-iaas',
    en: 'IaaS',
    arTranslation: 'البنية التحتية كخدمة',
    category: 'Cloud & DevOps',
    type: 'concept',
    definitionEn: 'A cloud service model providing virtualized compute, storage and networking resources.',
    definitionAr: 'نموذج سحابي يوفر موارد حوسبة وتخزين وشبكات افتراضية.'
  },
  {
    id: 'cloud-paas',
    en: 'PaaS',
    arTranslation: 'المنصة كخدمة',
    category: 'Cloud & DevOps',
    type: 'concept',
    definitionEn: 'A cloud model providing a managed platform for application development and deployment.',
    definitionAr: 'نموذج سحابي يوفر منصة مُدارة لتطوير ونشر التطبيقات.'
  },
  {
    id: 'cloud-saas',
    en: 'SaaS',
    arTranslation: 'البرمجيات كخدمة',
    category: 'Cloud & DevOps',
    type: 'concept',
    definitionEn: 'Software delivered to users as a cloud service.',
    definitionAr: 'برمجيات يتم تقديمها للمستخدمين كخدمة سحابية.'
  },
  {
    id: 'devops-cicd',
    en: 'CI/CD',
    arTranslation: 'التكامل والنشر المستمر',
    category: 'Cloud & DevOps',
    type: 'framework',
    definitionEn: 'Practices for continuously building, testing and deploying software.',
    definitionAr: 'ممارسات لأتمتة بناء واختبار ونشر البرمجيات بشكل مستمر.'
  },
  {
    id: 'devops-docker',
    en: 'Docker',
    arTranslation: 'Docker',
    category: 'Virtualization & Containers',
    type: 'technology',
    definitionEn: 'A platform for building and running containerized applications.',
    definitionAr: 'منصة لبناء وتشغيل التطبيقات داخل الحاويات.'
  },
  {
    id: 'devops-kubernetes',
    en: 'Kubernetes',
    arTranslation: 'Kubernetes',
    category: 'Virtualization & Containers',
    type: 'technology',
    definitionEn: 'A platform for orchestrating containerized workloads.',
    definitionAr: 'منصة لإدارة وتنظيم أحمال العمل الموجودة داخل الحاويات.'
  },
  {
    id: 'devops-terraform',
    en: 'Terraform',
    arTranslation: 'Terraform',
    category: 'Cloud & DevOps',
    type: 'technology',
    definitionEn: 'An infrastructure-as-code tool for provisioning and managing infrastructure.',
    definitionAr: 'أداة Infrastructure as Code لتجهيز وإدارة البنية التحتية.'
  }
];

export const softwareTerms: ITerm[] = [
  {
    id: 'software-api',
    en: 'API',
    arTranslation: 'واجهة برمجة التطبيقات',
    category: 'Software Engineering',
    type: 'concept',
    definitionEn: 'A defined interface through which software components communicate.',
    definitionAr: 'واجهة محددة تسمح لمكونات البرمجيات بالتواصل مع بعضها.'
  },
  {
    id: 'software-rest',
    en: 'REST',
    arTranslation: 'REST',
    category: 'Software Engineering',
    type: 'framework',
    definitionEn: 'An architectural style commonly used for networked APIs.',
    definitionAr: 'نمط معماري يستخدم بشكل واسع لبناء واجهات API الشبكية.'
  },
  {
    id: 'software-graphql',
    en: 'GraphQL',
    arTranslation: 'GraphQL',
    category: 'Software Engineering',
    type: 'technology',
    definitionEn: 'A query language and runtime for APIs.',
    definitionAr: 'لغة استعلام وبيئة تشغيل مخصصة لواجهات API.'
  },
  {
    id: 'software-microservices',
    en: 'Microservices',
    arTranslation: 'الخدمات المصغرة',
    category: 'Software Engineering',
    type: 'architecture',
    definitionEn: 'An architectural approach that structures applications as independently deployable services.',
    definitionAr: 'أسلوب معماري يقسم التطبيق إلى خدمات مستقلة يمكن نشرها وإدارتها بشكل منفصل.'
  },
  {
    id: 'software-oop',
    en: 'Object-Oriented Programming',
    arTranslation: 'البرمجة كائنية التوجه',
    category: 'Programming',
    type: 'concept',
    definitionEn: 'A programming paradigm based on objects containing state and behavior.',
    definitionAr: 'نموذج برمجي يعتمد على الكائنات التي تحتوي على الحالة والسلوك.'
  },
  {
    id: 'software-git',
    en: 'Git',
    arTranslation: 'نظام Git لإدارة الإصدارات',
    category: 'Software Engineering',
    type: 'technology',
    definitionEn: 'A distributed version control system.',
    definitionAr: 'نظام موزع لإدارة إصدارات الكود.'
  }
];

export const aiTerms: ITerm[] = [
  {
    id: 'ai-machine-learning',
    en: 'Machine Learning',
    arTranslation: 'التعلم الآلي',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'Methods that allow systems to learn patterns from data.',
    definitionAr: 'طرق تسمح للأنظمة بتعلم الأنماط من البيانات.'
  },
  {
    id: 'ai-deep-learning',
    en: 'Deep Learning',
    arTranslation: 'التعلم العميق',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'Machine learning based on multi-layer neural networks.',
    definitionAr: 'نوع من التعلم الآلي يعتمد على الشبكات العصبية متعددة الطبقات.'
  },
  {
    id: 'ai-overfitting',
    en: 'Overfitting',
    arTranslation: 'فرط التخصيص',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'A model learns training data too closely and performs poorly on unseen data.',
    definitionAr: 'حالة يتعلم فيها النموذج بيانات التدريب بشكل مفرط ويضعف أداؤه على البيانات الجديدة.'
  },
  {
    id: 'ai-neural-network',
    en: 'Neural Network',
    arTranslation: 'الشبكة العصبية الاصطناعية',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'A computational model composed of interconnected processing units.',
    definitionAr: 'نموذج حسابي يتكون من وحدات مترابطة لمعالجة البيانات.'
  },
  {
    id: 'ai-nlp',
    en: 'Natural Language Processing',
    arTranslation: 'معالجة اللغة الطبيعية',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'Techniques for processing and understanding human language.',
    definitionAr: 'تقنيات لمعالجة وفهم اللغة البشرية.'
  },
  {
    id: 'ai-computer-vision',
    en: 'Computer Vision',
    arTranslation: 'الرؤية الحاسوبية',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'Methods that enable computers to analyze and interpret visual information.',
    definitionAr: 'طرق تمكن الحاسوب من تحليل وفهم المعلومات البصرية.'
  },
  {
    id: 'ai-llm',
    en: 'Large Language Model',
    arTranslation: 'نموذج اللغة الكبير',
    category: 'Data Science & AI',
    type: 'concept',
    definitionEn: 'A machine-learning model trained on large amounts of text to perform language-related tasks.',
    definitionAr: 'نموذج تعلم آلي مدرب على كميات كبيرة من النصوص لتنفيذ مهام مرتبطة باللغة.'
  }
];

// ============================================================
// NORMALIZATION HELPERS
// ============================================================

function normalizeTerm(term: ITerm): ITerm {
  return {
    ...term,
    theme: term.theme ?? getThemeForCategory(term.category),
    domain: term.domain ?? getDomainForCategory(term.category),
    subdomain: term.subdomain ?? subdomainByCategory[term.category],
  };
}

function normalizeTopic(topic: ITopic): ITopic {
  return {
    ...topic,
    theme: topic.theme ?? getThemeForCategory(topic.category),
    domain: topic.domain ?? getDomainForCategory(topic.category),
    subdomain: topic.subdomain ?? subdomainByCategory[topic.category],
  };
}

function normalizeJob(job: IJobRole): IJobRole {
  return {
    ...job,
    theme: job.theme ?? getThemeForCategory(job.category),
    domain: job.domain ?? getDomainForCategory(job.category),
    subdomain: job.subdomain ?? subdomainByCategory[job.category],
  };
}

// ============================================================
// RAW ARRAYS & EXPORTS
// ============================================================

const rawITTerms: ITerm[] = [
  ...networkingTerms,
  ...cybersecurityTerms,
  ...linuxCommands,
  ...forensicsTerms,
  ...dataAnalyticsTerms,
  ...databaseTerms,
  ...cloudDevOpsTerms,
  ...softwareTerms,
  ...aiTerms
];

export const itTerms: ITerm[] = rawITTerms.map(normalizeTerm);

const rawITTopics: ITopic[] = [
  {
    id: 'networking',
    titleEn: 'Networking & Infrastructure',
    titleAr: 'الشبكات والبنية التحتية',
    category: 'Networking & Infrastructure',
    summaryEn: 'Designing, operating and troubleshooting modern computer networks and infrastructure.',
    summaryAr: 'تصميم وتشغيل واستكشاف أخطاء الشبكات والبنية التحتية الحديثة.',
    essentialsEn: ['OSI and TCP/IP', 'IPv4 and IPv6', 'Subnetting and CIDR', 'Routing and Switching', 'VLANs', 'OSPF and BGP', 'DNS and DHCP', 'Network Troubleshooting', 'Wireless Networking', 'Network Security'],
    essentialsAr: ['OSI و TCP/IP', 'IPv4 و IPv6', 'Subnetting و CIDR', 'Routing و Switching', 'VLAN', 'OSPF و BGP', 'DNS و DHCP', 'استكشاف أخطاء الشبكات', 'الشبكات اللاسلكية', 'أمن الشبكات'],
    usageEn: 'Enterprise networking, data centers, cloud connectivity and infrastructure operations.',
    usageAr: 'شبكات المؤسسات ومراكز البيانات والربط السحابي وتشغيل البنية التحتية.',
    protocols: ['TCP', 'UDP', 'IP', 'ICMP', 'ARP', 'DNS', 'DHCP', 'HTTP', 'HTTPS', 'SSH', 'OSPF', 'BGP', 'SNMP']
  },
  {
    id: 'cybersecurity',
    titleEn: 'Cybersecurity & SOC',
    titleAr: 'الأمن السيبراني وعمليات SOC',
    category: 'Cybersecurity & SOC',
    summaryEn: 'Security monitoring, threat detection, incident response, offensive security and defensive operations.',
    summaryAr: 'المراقبة الأمنية واكتشاف التهديدات والاستجابة للحوادث والأمن الهجومي والدفاعي.',
    essentialsEn: ['SOC Operations', 'SIEM', 'Threat Detection', 'Threat Hunting', 'Incident Response', 'Digital Forensics', 'Penetration Testing', 'Vulnerability Management', 'Identity and Access Management', 'Security Architecture'],
    essentialsAr: ['عمليات SOC', 'SIEM', 'اكتشاف التهديدات', 'Threat Hunting', 'الاستجابة للحوادث', 'التحقيق الجنائي الرقمي', 'اختبار الاختراق', 'إدارة الثغرات', 'إدارة الهوية والصلاحيات', 'الهندسة الأمنية'],
    usageEn: 'Protecting systems, networks, endpoints, identities and cloud environments.',
    usageAr: 'حماية الأنظمة والشبكات والأجهزة والهويات والبيئات السحابية.'
  },
  {
    id: 'dfir',
    titleEn: 'Digital Forensics & DFIR',
    titleAr: 'التحقيق الجنائي الرقمي والاستجابة للحوادث',
    category: 'Digital Forensics & DFIR',
    summaryEn: 'Collection, preservation and analysis of digital evidence and investigation of security incidents.',
    summaryAr: 'جمع وحفظ وتحليل الأدلة الرقمية والتحقيق في الحوادث الأمنية.',
    essentialsEn: ['Evidence Acquisition', 'Chain of Custody', 'Disk Forensics', 'Memory Forensics', 'Network Forensics', 'Log Analysis', 'Timeline Analysis', 'File System Analysis', 'Malware Investigation', 'Incident Reconstruction'],
    essentialsAr: ['جمع الأدلة', 'سلسلة حيازة الأدلة', 'التحقيق في الأقراص', 'التحقيق في الذاكرة', 'التحقيق في الشبكات', 'تحليل السجلات', 'تحليل الخط الزمني', 'تحليل أنظمة الملفات', 'تحقيق البرمجيات الخبيثة', 'إعادة بناء الحوادث'],
    usageEn: 'Security investigations, incident response, legal investigations and post-compromise analysis.',
    usageAr: 'التحقيقات الأمنية والاستجابة للحوادث والتحقيقات القانونية وتحليل الاختراقات.'
  },
  {
    id: 'software',
    titleEn: 'Software Engineering',
    titleAr: 'هندسة البرمجيات',
    category: 'Software Engineering',
    summaryEn: 'Building reliable, maintainable and scalable software systems.',
    summaryAr: 'بناء أنظمة برمجية موثوقة وقابلة للصيانة والتوسع.',
    essentialsEn: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'REST APIs', 'Microservices', 'Testing', 'Git', 'CI/CD'],
    essentialsAr: ['أساسيات البرمجة', 'هياكل البيانات', 'الخوارزميات', 'OOP', 'Design Patterns', 'REST APIs', 'Microservices', 'الاختبارات', 'Git', 'CI/CD'],
    usageEn: 'Backend systems, APIs, enterprise applications and distributed systems.',
    usageAr: 'أنظمة Backend وواجهات API والتطبيقات المؤسسية والأنظمة الموزعة.'
  },
  {
    id: 'cloud-devops',
    titleEn: 'Cloud & DevOps',
    titleAr: 'الحوسبة السحابية وDevOps',
    category: 'Cloud & DevOps',
    summaryEn: 'Cloud infrastructure, automation, containers, orchestration and continuous delivery.',
    summaryAr: 'البنية السحابية والأتمتة والحاويات وإدارة الأنظمة والنشر المستمر.',
    essentialsEn: ['Cloud Computing', 'AWS / Azure / GCP', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code', 'Monitoring', 'Observability'],
    essentialsAr: ['الحوسبة السحابية', 'AWS / Azure / GCP', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code', 'المراقبة', 'Observability'],
    usageEn: 'Cloud platforms, deployment automation and scalable infrastructure.',
    usageAr: 'المنصات السحابية وأتمتة النشر والبنية التحتية القابلة للتوسع.'
  },
  {
    id: 'data',
    titleEn: 'Data Analytics & Data Science',
    titleAr: 'تحليل البيانات وعلوم البيانات',
    category: 'Data Analytics',
    summaryEn: 'Turning raw data into insights, metrics, models and decisions.',
    summaryAr: 'تحويل البيانات الخام إلى مؤشرات وتحليلات ونماذج ونتائج قابلة للاستخدام.',
    essentialsEn: ['SQL', 'Python', 'Data Cleaning', 'Statistics', 'ETL / ELT', 'Data Visualization', 'Dashboards', 'KPI Analysis', 'Machine Learning', 'Data Warehousing'],
    essentialsAr: ['SQL', 'Python', 'تنظيف البيانات', 'الإحصاء', 'ETL / ELT', 'تصوير البيانات', 'Dashboards', 'تحليل KPIs', 'Machine Learning', 'مستودعات البيانات'],
    usageEn: 'Business intelligence, reporting, forecasting and machine learning.',
    usageAr: 'ذكاء الأعمال والتقارير والتنبؤ وتحليل البيانات والتعلم الآلي.'
  },
  {
    id: 'os-databases',
    titleEn: 'Operating Systems & Databases',
    titleAr: 'أنظمة التشغيل وقواعد البيانات',
    category: 'Operating Systems',
    summaryEn: 'Understanding system internals, processes, memory, storage and database systems.',
    summaryAr: 'فهم الأنظمة والعمليات والذاكرة والتخزين وقواعد البيانات.',
    essentialsEn: ['Linux', 'Windows', 'Processes', 'Threads', 'Memory Management', 'File Systems', 'Permissions', 'SQL', 'NoSQL', 'Database Administration'],
    essentialsAr: ['Linux', 'Windows', 'Processes', 'Threads', 'إدارة الذاكرة', 'أنظمة الملفات', 'الصلاحيات', 'SQL', 'NoSQL', 'إدارة قواعد البيانات'],
    usageEn: 'System administration, application hosting, databases and troubleshooting.',
    usageAr: 'إدارة الأنظمة واستضافة التطبيقات وقواعد البيانات واستكشاف الأخطاء.'
  }
];

export const itTopics: ITopic[] = rawITTopics.map(normalizeTopic);

const rawJobRoles: IJobRole[] = [
  {
    id: 'network-engineer',
    titleEn: 'Network Engineer',
    titleAr: 'مهندس شبكات',
    category: 'Networking & Infrastructure',
    descriptionEn: 'Designs, configures and maintains enterprise network infrastructure.',
    descriptionAr: 'يصمم ويهيئ ويدير البنية التحتية لشبكات المؤسسات.',
    skills: ['TCP/IP', 'Routing', 'Switching', 'OSPF', 'BGP', 'VLAN', 'Network Security'],
    tools: ['Wireshark', 'Cisco IOS', 'Nmap'],
    certifications: ['CCNA', 'CCNP'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  },
  {
    id: 'soc-analyst',
    titleEn: 'SOC Analyst',
    titleAr: 'محلل مركز عمليات أمنية',
    category: 'Cybersecurity & SOC',
    descriptionEn: 'Monitors security events, investigates alerts and responds to incidents.',
    descriptionAr: 'يراقب الأحداث الأمنية ويحقق في التنبيهات ويستجيب للحوادث.',
    skills: ['SIEM', 'Log Analysis', 'Incident Response', 'Threat Detection', 'Network Analysis', 'Endpoint Security'],
    tools: ['SIEM', 'Wireshark', 'EDR'],
    certifications: ['Security+', 'CySA+'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  },
  {
    id: 'digital-forensics',
    titleEn: 'Digital Forensics Investigator',
    titleAr: 'محقق جنائي رقمي',
    category: 'Digital Forensics & DFIR',
    descriptionEn: 'Examines digital evidence to reconstruct events and support investigations.',
    descriptionAr: 'يفحص الأدلة الرقمية لإعادة بناء الأحداث ودعم التحقيقات.',
    skills: ['Disk Forensics', 'Memory Forensics', 'File Systems', 'Timeline Analysis', 'Network Forensics', 'Evidence Handling'],
    tools: ['Autopsy', 'Volatility', 'Wireshark'],
    certifications: ['GCFE', 'GCFA'],
    marketDemandEn: 'Specialized',
    marketDemandAr: 'تخصصي'
  },
  {
    id: 'backend-engineer',
    titleEn: 'Backend Engineer',
    titleAr: 'مهندس Backend',
    category: 'Software Engineering',
    descriptionEn: 'Builds server-side applications, APIs and data services.',
    descriptionAr: 'يطور أنظمة الخوادم وواجهات API وخدمات البيانات.',
    skills: ['Python', 'Java', 'Node.js', 'REST', 'SQL', 'NoSQL', 'Docker'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  },
  {
    id: 'devops-engineer',
    titleEn: 'DevOps Engineer',
    titleAr: 'مهندس DevOps',
    category: 'Cloud & DevOps',
    descriptionEn: 'Automates infrastructure, deployments and software delivery pipelines.',
    descriptionAr: 'يؤتمت البنية التحتية والنشر وخطوط تسليم البرمجيات.',
    skills: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Cloud'],
    tools: ['Docker', 'Kubernetes', 'Terraform', 'Git'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  },
  {
    id: 'data-analyst',
    titleEn: 'Data Analyst',
    titleAr: 'محلل بيانات',
    category: 'Data Analytics',
    descriptionEn: 'Analyzes data and creates reports, dashboards and business insights.',
    descriptionAr: 'يحلل البيانات ويبني التقارير ولوحات المعلومات ويستخرج الرؤى.',
    skills: ['SQL', 'Excel', 'Python', 'Statistics', 'Data Visualization', 'Power BI'],
    tools: ['SQL', 'Power BI', 'Python', 'Pandas'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  },
  {
    id: 'data-scientist',
    titleEn: 'Data Scientist',
    titleAr: 'عالم بيانات',
    category: 'Data Science & AI',
    descriptionEn: 'Builds statistical and machine-learning models from data.',
    descriptionAr: 'يبني النماذج الإحصائية ونماذج التعلم الآلي اعتمادًا على البيانات.',
    skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization', 'Model Evaluation'],
    marketDemandEn: 'High',
    marketDemandAr: 'مرتفع'
  }
];

export const jobRoles: IJobRole[] = rawJobRoles.map(normalizeJob);

// ============================================================
// HELPER FUNCTIONS (No duplicates)
// ============================================================

export function getTermsByCategory(category: ITCategory): ITerm[] {
  return itTerms.filter(term => term.category === category);
}

export function getTermsByType(type: ITItemType): ITerm[] {
  return itTerms.filter(term => term.type === type);
}

export function searchTerms(query: string): ITerm[] {
  const q = query.toLowerCase().trim();
  return itTerms.filter(term =>
    term.en.toLowerCase().includes(q) ||
    term.arTranslation.toLowerCase().includes(q) ||
    term.definitionEn.toLowerCase().includes(q) ||
    term.definitionAr.includes(q) ||
    term.tags?.some(tag => tag.toLowerCase().includes(q))
  );
}

export function getProtocols(): ITerm[] {
  return itTerms.filter(term => term.type === 'protocol');
}

export function getLinuxCommands(): ITerm[] {
  return itTerms.filter(term => term.type === 'command');
}

export function getForensicsTerms(): ITerm[] {
  return itTerms.filter(term => term.category === 'Digital Forensics & DFIR');
}

export function getDataTerms(): ITerm[] {
  return itTerms.filter(
    term => term.category === 'Data Analytics' || term.category === 'Data Science & AI'
  );
}