export interface ICareerRoadmap {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  whatToStudyEn: string;
  whatToStudyAr: string;
  whereToDeepDiveEn: string;
  whereToDeepDiveAr: string;
}

export const careerRoadmaps: ICareerRoadmap[] = [
  // ==================== CYBERSECURITY & SECURITY ====================
  {
    id: 'soc-analyst',
    titleEn: 'SOC Analyst & Cyber Defense',
    titleAr: 'محلل الأمن السيبراني وعمليات SOC',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Focus on networking fundamentals (TCP/IP, DNS, HTTP), Linux command line, operating system internals (Windows & Linux logs), and SIEM basics (Splunk / ELK).',
    whatToStudyAr: 'ركّز على أساسيات الشبكات (TCP/IP, DNS, HTTP)، سطر أوامر Linux، تفاصيل أنظمة التشغيل (سجلات Windows و Linux)، وأساسيات SIEM (مثل Splunk).',
    whereToDeepDiveEn: 'Master threat intelligence, packet analysis (Wireshark), EDR telemetry interpretation, incident response playbooks, and MITRE ATT&CK framework mapping.',
    whereToDeepDiveAr: 'أتقن استخبارات التهديدات، تحليل الحزم (Wireshark)، تفسير بيانات EDR، آليات الاستجابة للحوادث، ومواءمة الهجمات مع إطار MITRE ATT&CK.',
  },
  {
    id: 'penetration-tester',
    titleEn: 'Penetration Tester / Ethical Hacker',
    titleAr: 'مختبر اختراق ومهاجم أخلاقي',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Learn web application vulnerabilities (OWASP Top 10), network protocols, scripting (Python/Bash), and reconnaissance tools (Nmap, Burp Suite).',
    whatToStudyAr: 'تعلم ثغرات تطبيقات الويب (OWASP Top 10)، بروتوكولات الشبكات، البرمجة النصية (Python/Bash)، وأدوات الاستطلاع (Nmap, Burp Suite).',
    whereToDeepDiveEn: 'Deep dive into Active Directory exploitation, binary exploitation, buffer overflows, custom exploit development, and red teaming operations.',
    whereToDeepDiveAr: 'تعمق في اختراق Active Directory، استغلال الثغرات الثنائية (Binary Exploitation)، تجاوز مخزن المؤقت (Buffer Overflow)، وتطوير الإكسبلويتس المخصصة وعمليات Red Teaming.',
  },
  {
    id: 'digital-forensics',
    titleEn: 'Digital Forensics & Incident Responder (DFIR)',
    titleAr: 'محقق جنائي رقمي ومستجيب للحوادث (DFIR)',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Learn file systems (NTFS, EXT4), memory acquisition, volatile data analysis, chain of custody procedures, and core log analysis.',
    whatToStudyAr: 'تعلم أنظمة الملفات (NTFS, EXT4)، استخراج الذاكرة العشوائية، تحليل البيانات المتطايرة، إجراءات سلسلة الحيازة، وتحليل السجلات الأساسية.',
    whereToDeepDiveEn: 'Master memory forensics using Volatility, disk image analysis (Autopsy/EnCase), timeline reconstruction, malware artifact hunting, and advanced reverse engineering.',
    whereToDeepDiveAr: 'أتقن التحليل الجنائي للذاكرة باستخدام Volatility، فحص صور الأقراص، إعادة بناء الخط الزمني، اصطياد آثار البرمجيات الخبيثة، والهندسة العكسية المتقدمة.',
  },
  {
    id: 'cloud-security-engineer',
    titleEn: 'Cloud Security Engineer',
    titleAr: 'مهندس أمان السحابة (Cloud Security)',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Understand cloud service models (IaaS/PaaS/SaaS), IAM policies, cloud networking, native logging services, and security misconfigurations.',
    whatToStudyAr: 'افهم نماذج الخدمات السحابية، سياسات إدارة الهوية والصلاحيات (IAM)، شبكات السحابة، خدمات السجلات، وسوء الإعدادات الأمنية الشائعة.',
    whereToDeepDiveEn: 'Deep dive into cloud workload protection, container security (Kubernetes hardening), Infrastructure as Code (IaC) security scanning, and multi-cloud compliance (AWS/Azure/GCP).',
    whereToDeepDiveAr: 'تعمق في حماية أحمال العمل السحابية، أمان الحاويات، فحص أمان البنية ككود (IaC Security)، والامتثال الأمني عبر السحابة المتعددة.',
  },
  {
    id: 'security-architect',
    titleEn: 'Security Architect & GRC Specialist',
    titleAr: 'مهندس معماري أمني وأخصائي حوكمة واختراق (GRC)',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Learn information security frameworks (ISO 27001, NIST, GDPR), risk assessment methodologies, network zoning, and security policies.',
    whatToStudyAr: 'تعلم أطر أمن المعلومات، منهجيات تقييم المخاطر، تقسيم مناطق الشبكة (Zoning)، وصياغة السياسات الأمنية.',
    whereToDeepDiveEn: 'Master enterprise security architecture design (Zero Trust), third-party risk management, regulatory compliance auditing, and board-level risk reporting.',
    whereToDeepDiveAr: 'أتقن تصميم الهندسة الأمنية للمؤسسات (Zero Trust)، إدارة مخاطر الطرف الثالث، تدقيق الامتثال التنظيمي، وإعداد تقارير المخاطر للإدارة العليا.',
  },
  {
    id: 'threat-intelligence',
    titleEn: 'Threat Intelligence Analyst',
    titleAr: 'محلل استخبارات التهديدات السيبرانية',
    categoryEn: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    whatToStudyEn: 'Understand the threat landscape, cyber kill chain, APT groups, OSINT techniques, and indicator of compromise (IoC) collection.',
    whatToStudyAr: 'افهم بيئة التهديدات، سلسلة الهجوم السيبراني (Kill Chain)، مجموعات التهديد المتقدم (APTs)، تقنيات المصادر المفتوحة (OSINT)، وجمع مؤشرات الاختراق (IoCs).',
    whereToDeepDiveEn: 'Deep dive into strategic/tactical intelligence reporting, dark web monitoring, malware attribution analysis, and integrating TTPs into detection engineering.',
    whereToDeepDiveAr: 'تعمق في إعداد تقارير الاستخبارات الاستراتيجية، مراقبة الويب المظلم، تحليل نسب الهجمات للجهات الفاعلة، ودمج التكتيكات في هندسة الاكشاف والتنبيه.',
  },

  // ==================== DEVOPS & INFRASTRUCTURE ====================
  {
    id: 'devops-engineer',
    titleEn: 'Cloud & DevOps Engineer',
    titleAr: 'مهندس السحابة والـ DevOps',
    categoryEn: 'Cloud & Infrastructure',
    categoryAr: 'الحوسبة السحابية والبنية التحتية',
    whatToStudyEn: 'Master Linux administration, Bash scripting, Git version control, Docker containerization, networking essentials, and basic CI/CD pipelines.',
    whatToStudyAr: 'أتقن إدارة أنظمة لينكس، برمجة السكربتات (Bash)، نظام Git، عزل التطبيقات في الحاويات (Docker)، أساسيات الشبكات، وخطوط CI/CD الأساسية.',
    whereToDeepDiveEn: 'Deep dive into Kubernetes (K8s) orchestration, Infrastructure as Code (Terraform/Ansible), cloud provider services (AWS/Azure/GCP), and advanced SRE observability.',
    whereToDeepDiveAr: 'تعمق في إدارة الحاويات عبر Kubernetes، البنية ككود (Terraform/Ansible)، خدمات السحابة (AWS/Azure/GCP)، وأنظمة المراقبة والاعتمادية (SRE).',
  },

  // ==================== SOFTWARE ENGINEERING ====================
  {
    id: 'backend-engineer',
    titleEn: 'Backend Software Engineer',
    titleAr: 'مهندس تطوير الخلفية والأنظمة (Backend)',
    categoryEn: 'Software Engineering',
    categoryAr: 'هندسة البرمجيات',
    whatToStudyEn: 'Learn a robust backend language (Python/Node.js/Java), data structures & algorithms, relational databases (SQL), and RESTful API architecture.',
    whatToStudyAr: 'تعلم لغة خلفية قوية (Python/Node.js/Java)، هياكل البيانات والخوارزميات، قواعد البيانات العلائقية (SQL)، وتصميم واجهات RESTful APIs.',
    whereToDeepDiveEn: 'Master system design, asynchronous programming, caching mechanisms (Redis), message queues (Kafka/RabbitMQ), microservices architecture, and database performance tuning.',
    whereToDeepDiveAr: 'أتقن تصميم الأنظمة (System Design)، البرمجة غير المتزامنة، التخزين المؤقت (Redis)، طوابير الرسائل (Kafka)، هندسة الخدمات المصغرة، وتحسين أداء قواعد البيانات.',
  },
  {
    id: 'frontend-engineer',
    titleEn: 'Frontend & UI Engineer',
    titleAr: 'مهندس واجهات المستخدم (Frontend)',
    categoryEn: 'Software Engineering',
    categoryAr: 'هندسة البرمجيات',
    whatToStudyEn: 'Master HTML5, CSS3, Modern JavaScript (ES6+), responsive design principles, and Git version control.',
    whatToStudyAr: 'أتقن HTML5, CSS3، جافاسكريبت الحديثة (ES6+)، مبادئ التصميم المتجاوب، ونظام إدارة الإصدارات Git.',
    whereToDeepDiveEn: 'Deep dive into React.js / Next.js frameworks, TypeScript, state management, web performance optimization, accessibility (a11y), and frontend testing.',
    whereToDeepDiveAr: 'تعمق في إطارات العمل React.js / Next.js، لغة TypeScript، إدارة الحالة (State Management)، تحسين أداء الويب، إمكانية الوصول، واختبار الواجهات.',
  },
  {
    id: 'mobile-engineer',
    titleEn: 'Mobile App Developer',
    titleAr: 'مطور تطبيقات الهواتف الذكية',
    categoryEn: 'Software Engineering',
    categoryAr: 'هندسة البرمجيات',
    whatToStudyEn: 'Learn object-oriented programming, mobile UI/UX guidelines, state management, and basic networking integration (REST APIs).',
    whatToStudyAr: 'تعلم البرمجة كائنية التوجه، إرشادات واجهات الهواتف، إدارة الحالة، وربط التطبيقات بالخوادم عبر REST APIs.',
    whereToDeepDiveEn: 'Master cross-platform frameworks (Flutter / React Native) or native development (Swift/Kotlin), local caching, push notifications, and app store deployment.',
    whereToDeepDiveAr: 'أتقن الأطر متعددة المنصات (Flutter / React Native) أو التطوير الأصلي (Swift/Kotlin)، التخزين المحلي، الإشعارات الفورية (Push Notifications)، ونشر التطبيقات بالمتاجر.',
  },

  // ==================== NETWORKING ====================
  {
    id: 'network-engineer',
    titleEn: 'Enterprise Network Engineer',
    titleAr: 'مهندس شبكات المؤسسات',
    categoryEn: 'Networking',
    categoryAr: 'الشبكات',
    whatToStudyEn: 'Study OSI and TCP/IP models, IP addressing & subnetting, routing & switching fundamentals, VLANs, and basic firewall configurations.',
    whatToStudyAr: 'ادرس نماذج OSI و TCP/IP، عناوين IP وتقسيم الشبكات، أساسيات التوجيه والتحويل، الـ VLANs، والإعدادات الأساسية لجدران الحماية.',
    whereToDeepDiveEn: 'Deep dive into advanced routing protocols (BGP, OSPF), software-defined networking (SDN), network automation with Python, and enterprise data center architecture.',
    whereToDeepDiveAr: 'تعمق في بروتوكولات التوجيه المتقدمة (BGP, OSPF)، الشبكات المعرفة برمجياً (SDN)، أتمتة الشبكات بلغة Python، وهندسة مراكز البيانات للمؤسسات.',
  },

  // ==================== DATA SCIENCE & ANALYTICS ====================
  {
    id: 'data-scientist',
    titleEn: 'Data Scientist & AI Practitioner',
    titleAr: 'عالم بيانات وممارس ذكاء اصطناعي',
    categoryEn: 'Data Science & AI',
    categoryAr: 'علوم البيانات والذكاء الاصطناعي',
    whatToStudyEn: 'Learn Python, statistics & probability, data manipulation (Pandas/NumPy), SQL, and basic data visualization.',
    whatToStudyAr: 'تعلم Python، الإحصاء والاحتمالات، معالجة البيانات (Pandas/NumPy)، SQL، وأساسيات تصوير البيانات.',
    whereToDeepDiveEn: 'Deep dive into machine learning algorithms, deep learning (PyTorch/TensorFlow), Natural Language Processing (NLP), Large Language Models (LLMs), and MLOps.',
    whereToDeepDiveAr: 'تعمق في خوارزميات التعلم الآلي، التعلم العميق (PyTorch/TensorFlow)، معالجة اللغة الطبيعية (NLP)، نماذج اللغات الكبيرة (LLMs)، وممارسات MLOps.',
  },
  {
    id: 'data-analyst',
    titleEn: 'Data Analyst',
    titleAr: 'محلل بيانات',
    categoryEn: 'Data Analytics',
    categoryAr: 'تحليل البيانات',
    whatToStudyEn: 'Master SQL for querying, Excel for data analysis, Python or R basics, and data cleaning techniques.',
    whatToStudyAr: 'أتقن لغة SQL للاستعلام، برنامج Excel لتحليل البيانات، أساسيات Python أو R، وتقنيات تنظيف البيانات.',
    whereToDeepDiveEn: 'Master BI tools (Power BI / Tableau), advanced data modeling, KPI tracking design, and translating data into executive business insights.',
    whereToDeepDiveAr: 'أتقن أدوات ذكاء الأعمال (Power BI / Tableau)، النمذجة المتقدمة للبيانات، تصميم مؤشرات الأداء (KPIs)، وتحويل الأرقام إلى رؤى تجارية استراتيجية.',
  },

  // ==================== DATABASES & ADMIN ====================
  {
    id: 'database-admin',
    titleEn: 'Database Administrator (DBA)',
    titleAr: 'مسؤول قواعد البيانات (DBA)',
    categoryEn: 'Databases',
    categoryAr: 'قواعد البيانات',
    whatToStudyEn: 'Learn relational database concepts, SQL queries, indexing, basic backup and recovery strategies, and user permission management.',
    whatToStudyAr: 'تعلم مفاهيم قواعد البيانات العلائقية، استعلامات SQL، الفهرسة، استراتيجيات النسخ الاحتياطي والاستعادة الأساسية، وإدارة صلاحيات المستخدمين.',
    whereToDeepDiveEn: 'Deep dive into query optimization, database tuning, high availability clusters (Replication/Sharding), disaster recovery automation, and cloud database migration.',
    whereToDeepDiveAr: 'تعمق في تحسين الاستعلامات، ضبط أداء قاعدة البيانات، عِقد التوافر العالي (Replication/Sharding)، أتمتة التعافي من الكوارث، والانتقال لقواعد البيانات السحابية.',
  },
  {
    id: 'it-support-sysadmin',
    titleEn: 'System Administrator & IT Support',
    titleAr: 'مسؤول أنظمة ودعم فني مؤسسي',
    categoryEn: 'System Administration',
    categoryAr: 'إدارة الأنظمة والدعم الفني',
    whatToStudyEn: 'Learn Windows Server & Linux administration, Active Directory, DNS/DHCP configuration, hardware troubleshooting, and ticketing systems.',
    whatToStudyAr: 'تعلم إدارة Windows Server و Linux، خدمة Active Directory، إعدادات DNS/DHCP، استكشاف أخطاء الأجهزة، وأنظمة التذاكر الفنية.',
    whereToDeepDiveEn: 'Deep dive into PowerShell/Bash automation, enterprise patch management, Group Policy Objects (GPO), cloud identity management (Azure AD/Entra ID), and endpoint security.',
    whereToDeepDiveAr: 'تعمق في أتمتة المهام عبر PowerShell/Bash، إدارة التحديثات المؤسسية، سياسات المجموعة (GPO)، إدارة الهوية السحابية (Azure AD)، وأمان الأجهزة الطرفية.',
  }
];