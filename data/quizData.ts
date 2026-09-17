export interface IQuizQuestion {
  id: string;
  category: string;
  questionEn: string;
  questionAr: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
}

export const quizQuestions: IQuizQuestion[] = [
  // --- Cybersecurity & SOC ---
  {
    id: 'q1',
    category: 'Cybersecurity & SOC',
    questionEn: 'Which component in a SIEM architecture is primarily responsible for lightweight log collection from endpoints?',
    questionAr: 'أي مكون في هندسة نظام الـ SIEM يكون مسؤولاً بشكل أساسي عن جمع السجلات بشكل خفيف من الأجهزة الطرفية؟',
    optionsEn: ['Indexers', 'Search Head', 'Forwarders', 'Firewall'],
    optionsAr: ['الـ Indexers', 'رأس البحث (Search Head)', 'الـ Forwarders', 'جدار الحماية'],
    correctIndex: 2,
    explanationEn: 'Forwarders are lightweight agents installed on servers and endpoints to collect and forward logs securely.',
    explanationAr: 'الـ Forwarders هي وكلاء خفيفون يتم تثبيتهم على الخوادم والأجهزة الطرفية لجمع وتوجيه السجلات بأمان.'
  },
  {
    id: 'q2',
    category: 'Cybersecurity & SOC',
    questionEn: 'What does an Indicator of Compromise (IoC) represent in incident response?',
    questionAr: 'ماذا يمثل مؤشر الاختراق (IoC) في سياق الاستجابة للحوادث؟',
    optionsEn: [
      'A software bug in the operating system',
      'An observable artifact that indicates potential malicious network or system activity',
      'A legal framework for data privacy',
      'A network routing protocol'
    ],
    optionsAr: [
      'خطأ برمجيسي في نظام التشغيل',
      'أثر ملاحظ يشير إلى احتمال وجود نشاط خبيث في الشبكة أو النظام',
      'إطار قانوني لخصوصية البيانات',
      'بروتوكول توجيه شبكي'
    ],
    correctIndex: 1,
    explanationEn: 'IoCs are forensic artifacts (like malicious hashes, IPs, or domains) that indicate a system compromise has occurred.',
    explanationAr: 'مؤشرات الاختراق هي آثار جنائية (مثل الهاش الخبيث، أو عناوين IP، أو النطاقات) تدل على حدوث اختراق للنظام.'
  },
  // --- Networking ---
  {
    id: 'q3',
    category: 'Networking',
    questionEn: 'Which routing protocol operates on the Path Vector protocol principle and powers the global internet routing across Autonomous Systems?',
    questionAr: 'أي بروتوكول توجيه يعتمد على مبدأ مسار المتجه (Path Vector) ويدير توجيه الإنترنت العالمي بين الأنظمة المستقلة (AS)?',
    optionsEn: ['OSPF', 'RIP', 'BGP', 'ICMP'],
    optionsAr: ['OSPF', 'RIP', 'BGP', 'ICMP'],
    correctIndex: 2,
    explanationEn: 'Border Gateway Protocol (BGP) is the routing protocol that makes the global internet work by exchanging routing info between Autonomous Systems.',
    explanationAr: 'بروتوكول بوابة الحدود (BGP) هو بروتوكول التوجيه المسؤول عن عمل الإنترنت العالمي عبر تبادل المعلومات بين الأنظمة المستقلة.'
  },
  {
    id: 'q4',
    category: 'Networking',
    questionEn: 'What is the primary function of a VLAN (Virtual Local Area Network)?',
    questionAr: 'ما هي الوظيفة الأساسية للشبكة المحلية الافتراضية (VLAN)؟',
    optionsEn: [
      'To encrypt wireless transmissions',
      'To logically segment and isolate broadcast domains on Layer 2 switches',
      'To automatically assign IP addresses to hosts',
      'To translate domain names to IP addresses'
    ],
    optionsAr: [
      'تشفير الاتصالات اللاسلكية',
      'تقسيم ועزل نطاقات البث (Broadcast Domains) منطقياً في الطبقة الثانية للمبدلات',
      'تعيين عناوين IP تلقائياً للمضيفين',
      'ترجمة أسماء النطاقات إلى عناوين IP'
    ],
    correctIndex: 1,
    explanationEn: 'VLANs allow network administrators to partition physical network equipment into separate logical broadcast domains for security and performance.',
    explanationAr: 'تسمح الـ VLANs لمديري الشبكات بتقسيم معدات الشبكة الفيزيائية إلى نطاقات بث منطقية منفصلة لأسباب أمنية وأداء أفضل.'
  },
  // --- Cloud & DevOps ---
  {
    id: 'q5',
    category: 'Cloud & DevOps',
    questionEn: 'Which tool is widely used for Infrastructure as Code (IaC) to provision cloud resources declaratively?',
    questionAr: 'ما هي الأداة المستخدمة على نطاق واسع للبنية التحتية ككود (IaC) لتجهيز الموارد السحابية بطريقة تعريفية؟',
    optionsEn: ['Wireshark', 'Terraform', 'Nmap', 'Autopsy'],
    optionsAr: ['Wireshark', 'Terraform', 'Nmap', 'Autopsy'],
    correctIndex: 1,
    explanationEn: 'Terraform enables developers and operations teams to define and provision cloud infrastructure using a declarative configuration language.',
    explanationAr: 'تتيح أداة Terraform للمطورين وفرق العمليات تعريف وتجهيز البنية التحتية السحابية باستخدام لغة إعداد تعريفية.'
  },
  {
    id: 'q6',
    category: 'Cloud & DevOps',
    questionEn: 'What is the primary purpose of containerization platforms like Docker?',
    questionAr: 'ما هو الغرض الأساسي من منصات الحاويات (Containerization) مثل Docker؟',
    optionsEn: [
      'To replace operating system kernels entirely',
      'To package applications with their dependencies so they run reliably across any environment',
      'To monitor network bandwidth utilization',
      'To store relational database tables'
    ],
    optionsAr: [
      'استبدال أنظمة التشغيل بالكامل',
      'حزم التطبيقات مع تبعياتها لتعمل بثبات عبر أي بيئة تشغيل',
      'مراقبة استهلاك النطاق الترددي للشبكة',
      'تخزين جداول قواعد البيانات العلائقية'
    ],
    correctIndex: 1,
    explanationEn: 'Docker containers isolate applications and their required libraries/binaries, ensuring consistency from development to production.',
    explanationAr: 'حاويات Docker تعزل التطبيقات والمكتبات الخاصة بها، مما يضمن التوافق والاستقرار من مرحلة التطوير وحتى الإنتاج.'
  }
];