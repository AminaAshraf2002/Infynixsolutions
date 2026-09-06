// Centralized data repository for solutions, industries, case studies, insights, and FAQs
import { subcategoryData } from './subcategoryData.js';

export const solutionsData = {
  ...subcategoryData,
  'infynix-agency': {
    title: 'Infynix Agency',
    category: 'Agency',
    keywords: ['Performance Advertising', 'SEO & Content Marketing', 'Social Media Management', 'Paid Media Agency', 'Google Ads Agency', 'Meta Ads Agency', 'SEO Engineering'],
    description: 'Infynix Agency builds performance advertising engines and technical SEO infrastructure to put your offer directly in front of ready-to-buy customers.',
    challenge: 'Brands struggle to turn traffic into revenue. Unoptimized paid ads burn budget while slow, unstructured web pages fail to rank in search engines.',
    insight: 'True growth requires an integrated media and search system combining paid intent capture with technical SEO engineering and conversion funnels.',
    solution: 'We deploy targeted paid media campaigns across Meta, Google, and LinkedIn paired with sub-second SEO pre-rendering and data-backed landing funnels.',
    outcome: 'Predictable, scalable customer acquisition with lower CAC, higher LTV, and measurable revenue attribution.',
    capabilities: [
      { title: 'Meta & Google Ads Engine', desc: 'High-intent search, shopping, display, and social campaigns optimized for direct ROI and customer acquisition.' },
      { title: 'SEO Engineering & Technical Search', desc: 'Sub-second SSG rendering, structured JSON-LD schema graphs, and programmatic search architecture.' },
      { title: 'Conversion Funnel Optimization', desc: 'Behavioral tracking, landing page CRO, dynamic personalization, and multi-touch retargeting loops.' },
      { title: 'Brand Positioning & Strategy', desc: 'High-impact value propositions and competitive differentiation built to convert cold traffic into loyal clients.' }
    ],
    faqs: [
      { q: 'How do you measure advertising performance?', a: 'We measure campaigns strictly by customer acquisition cost (CAC), return on ad spend (ROAS), and net revenue generated.' },
      { q: 'What makes your SEO approach different?', a: 'We combine technical software engineering with content architecture, ensuring your pages load instantly and rank for commercial intent keywords.' }
    ]
  },
  'infynix-media': {
    title: 'Infynix Media',
    category: 'Media',
    keywords: ['Brand Identity', 'UI UX Design', 'Video Production', 'Brand Films', '3D Motion Graphics', 'Studio Photography'],
    description: 'Infynix Media produces cinematic brand films, high-converting digital design, and 3D motion graphics that command market attention.',
    challenge: 'Generic visuals blend into digital noise, frustrating prospects and undermining your brand perceived value.',
    insight: 'High-impact design and story-led media establish instant market authority, creating an emotional anchor that drives user conversion.',
    solution: 'We design modern UI/UX interfaces, shoot broadcast-quality video content, and create 3D motion graphics that elevate your brand.',
    outcome: 'Heightened brand authority, superior visual identity, and higher user engagement across all digital touchpoints.',
    capabilities: [
      { title: 'UI/UX & Product Design', desc: 'Figma-crafted digital interfaces designed for high usability, modern aesthetics, and seamless conversion.' },
      { title: 'Cinematic Brand Films', desc: 'Broadcast-quality video production, commercials, and documentary-style brand narratives.' },
      { title: '3D Motion & Visual Effects', desc: 'Dynamic vector animations and 3D product renders that explain complex software and hardware.' },
      { title: 'Short-Form Social Content', desc: 'High-retention vertical video production for Reels, TikTok, and Shorts built for algorithmic organic reach.' }
    ],
    faqs: [
      { q: 'Do you provide end-to-end media production?', a: 'Yes, we handle pre-production scripting, studio and location shooting, motion graphics, and final delivery.' }
    ]
  },
  'infynix-growth-solutions': {
    title: 'Infynix Growth Solutions',
    category: 'Growth',
    keywords: ['Custom Web Development', 'Mobile App Development', 'AI Software Solutions', 'AI Surveillance', 'Business Automation'],
    description: 'Infynix Growth Solutions engineers custom software architectures, AI agents, enterprise automation, and AI surveillance pipelines for scaling enterprises.',
    challenge: 'Legacy software and disconnected manual processes slow operational velocity and limit business throughput.',
    insight: 'Sustainable scale requires custom software infrastructure where web applications, CRM databases, and AI systems communicate seamlessly.',
    solution: 'We build fast React/Next.js web applications, native mobile apps, automated workflow integrations, and real-time AI computer vision surveillance.',
    outcome: 'Robust technical infrastructure that lowers operating costs, automates manual labor, and powers long-term growth.',
    capabilities: [
      { title: 'Custom Web & Mobile Apps', desc: 'High-speed React, Next.js, and mobile applications engineered for security, scale, and sub-second load times.' },
      { title: 'AI Surveillance & Vision Systems', desc: 'Real-time computer vision threat detection, edge processing on NVIDIA Jetson, and smart CCTV network analytics.' },
      { title: 'AI Agents & Workflow Automation', desc: 'Autonomous AI agents and custom webhooks connecting CRMs, ERPs, and internal business tools.' },
      { title: 'API & Middleware Engineering', desc: 'Secure REST/GraphQL API integration and database warehousing for single-source data reporting.' }
    ],
    faqs: [
      { q: 'What technology stack do you use?', a: 'We build with modern frameworks including React 19, Next.js, Node.js, Python, OpenCV, and cloud infrastructure on AWS and Vercel.' }
    ]
  },
  'ai-surveillance': {
    title: 'AI Surveillance & Security Solutions',
    category: 'Surveillance',
    keywords: ['AI Surveillance', 'Computer Vision Security', 'Smart CCTV Analytics', 'NVIDIA Jetson AI', 'Object Threat Detection', 'Edge AI Vision'],
    description: 'Real-time AI computer vision surveillance, edge processing, and automated threat detection engineered for enterprise security and industrial facilities.',
    challenge: 'Traditional CCTV security relies on passive recording and manual monitoring, leaving facilities vulnerable to undetected intrusions and costly security incidents.',
    insight: 'Modern security requires active, edge-processed AI computer vision that detects threats instantly and alerts response teams in real time.',
    solution: 'We deploy custom AI surveillance pipelines with real-time computer vision, perimeter intrusion profiling, edge hardware integration (NVIDIA Jetson, Google Coral), and automated alerting.',
    outcome: 'Zero-latency threat detection, reduced security staffing costs, and automated incident compliance logs.',
    capabilities: [
      { title: 'Real-Time Threat Detection', desc: 'Automated perimeter intrusion, unauthorized entry, weapon profiling, and motion anomaly detection.' },
      { title: 'Edge Hardware Processing', desc: 'Deploying low-latency AI models on NVIDIA Jetson and Google Coral devices for local, privacy-first video analytics.' },
      { title: 'Smart CCTV & IP Camera Integration', desc: 'Seamless RTSP/ONVIF integration with existing camera infrastructure without requiring hardware replacement.' },
      { title: 'Live Telemetry & Alerting', desc: 'Real-time security dashboards, instant SMS/push notifications, and automated incident report generation.' }
    ],
    faqs: [
      { q: 'Can your AI surveillance system connect to existing CCTV cameras?', a: 'Yes, our vision models connect directly to standard IP and CCTV cameras via RTSP/ONVIF streams.' },
      { q: 'Does the video data leave our facility?', a: 'No. Using edge devices like NVIDIA Jetson, video analytics run locally on-site for maximum privacy and zero latency.' }
    ]
  },
  'website-development': {
    title: 'Website Development Services',
    category: 'Development',
    keywords: ['Web Development Company', 'Corporate Website Development', 'Business Website Development', 'Custom Website Development', 'Enterprise Website Design'],
    description: 'We build high-speed, secure web applications engineered with React 19 and Next.js to convert visitors into loyal customers.',
    challenge: 'Outdated websites load slowly, break on mobile devices, and fail to generate qualified sales leads.',
    insight: 'Your website is the core engine of your growth. It must combine sub-second performance, technical SEO, and conversion design.',
    solution: 'We build custom, pre-rendered web platforms that connect seamlessly to your business tools and marketing funnels.',
    outcome: 'A secure, high-speed web presence that boosts conversions and tracks leads accurately.',
    faqs: [
      { q: 'How long does custom website development take?', a: 'Typical projects take 4 to 10 weeks depending on custom feature requirements.' },
      { q: 'Are all websites mobile-friendly and optimized for SEO?', a: 'Yes, every build is fully responsive, accessible, and pre-rendered for search engines.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    category: 'Development',
    keywords: ['Mobile App Development Company', 'Android App Development', 'iOS App Development', 'Flutter Development', 'Cross Platform Development'],
    description: 'We develop high-performance mobile applications for iOS and Android built for speed, offline reliability, and intuitive UX.',
    challenge: 'Mobile apps fail when performance is sluggish, offline sync breaks, or navigation is confusing.',
    insight: 'Exceptional mobile apps combine responsive offline storage, clean UI design, and fast backend connectivity.',
    solution: 'We engineer native and cross-platform apps using React Native and Flutter for seamless mobile experiences.',
    outcome: 'Fast, secure mobile apps that keep users engaged and drive customer retention.',
    faqs: [
      { q: 'Should we build native or cross-platform apps?', a: 'We evaluate your goals and budget. Cross-platform frameworks like React Native deliver native performance at lower cost.' }
    ]
  },
  'performance-marketing': {
    title: 'Performance Marketing & Paid Media',
    category: 'Marketing',
    keywords: ['Performance Marketing Agency', 'Meta Ads Agency', 'Google Ads Agency', 'Lead Generation Company', 'PPC Advertising'],
    description: 'We build and scale paid ad campaigns across Google, Meta, and LinkedIn engineered for direct revenue generation.',
    challenge: 'Many ad agencies spend budget on vanity clicks without tracking real sales conversion or customer acquisition cost.',
    insight: 'Paid media must be managed against net revenue and customer acquisition metrics, backed by strict conversion attribution.',
    solution: 'We build targeted ad campaigns, continuous creative testing matrices, and conversion tracking pipelines.',
    outcome: 'Higher qualified lead volume, lower customer acquisition cost, and clear ROAS visibility.',
    faqs: [
      { q: 'How do you track campaign conversions?', a: 'We implement server-side tracking, Conversion APIs (CAPI), and CRM attribution to link ad clicks to sales.' }
    ]
  },
  'seo-services': {
    title: 'SEO Services & Technical SEO Engineering',
    category: 'Marketing',
    keywords: ['SEO Company', 'SEO Agency', 'Technical SEO', 'Local SEO', 'SEO Engineering Company'],
    description: 'We engineer technical search infrastructure, semantic topic clusters, and pre-rendered pages to dominate organic search results.',
    challenge: 'Superficial keyword stuffing and slow web pages keep your business hidden on page two of search results.',
    insight: 'Modern search dominance requires technical speed, structured JSON-LD data, sub-second pre-rendering, and authoritative content.',
    solution: 'We execute complete technical SEO overhauls, programmatic search page generation, and cluster-based content architecture.',
    outcome: 'Compounding organic search traffic, higher commercial keyword rankings, and sustainable market authority.',
    faqs: [
      { q: 'How quickly do SEO engineering improvements take effect?', a: 'Technical indexing improvements show within weeks, while organic keyword dominance compounds over 3 to 6 months.' }
    ]
  },
  'artificial-intelligence': {
    title: 'Artificial Intelligence & AI Integration',
    category: 'Production',
    keywords: ['AI Development Company', 'Business AI Solutions', 'AI Automation', 'AI Integration', 'AI Agents'],
    description: 'We engineer custom AI agents, LLM integrations, and RAG pipelines that automate complex operations and save time.',
    challenge: 'Generic AI tools fail to connect with proprietary company data and internal workflows.',
    insight: 'AI should solve operational bottlenecks by integrating directly into your existing software infrastructure.',
    solution: 'We build custom AI agents trained on your business data and connected to your CRM and daily communication channels.',
    outcome: 'Automated administrative workflows, faster response times, and lower operational overhead.',
    faqs: [
      { q: 'How does custom AI integration help our operations?', a: 'Custom AI handles customer inquiries, processes incoming documents, and automates daily data entry.' }
    ]
  },
  'business-automation': {
    title: 'Business Automation Solutions',
    category: 'Production',
    keywords: ['Workflow Automation', 'Business Automation Company', 'Digital Transformation', 'Process Automation'],
    description: 'We connect your software ecosystem with automated APIs and custom webhooks to eliminate manual data entry.',
    challenge: 'Teams waste hundreds of hours manually moving data between disconnected software applications.',
    insight: 'Disconnected tools slow operational speed. Automated middleware ensures instant data synchronization.',
    solution: 'We engineer automated workflows connecting your CRM, accounting, communication, and inventory software.',
    outcome: 'Zero manual data entry errors, accelerated workflow execution, and reduced staff burnout.',
    faqs: [
      { q: 'What software platforms can you automate?', a: 'We build custom API integrations and Make/Zapier pipelines connecting HubSpot, Salesforce, Stripe, WhatsApp, and custom databases.' }
    ]
  },
  'crm-erp-development': {
    title: 'Custom CRM & ERP Development',
    category: 'Development',
    keywords: ['CRM Development Company', 'ERP Development Company', 'Business Management Software'],
    description: 'We build bespoke CRM and ERP management software tailored precisely to your operational workflow.',
    challenge: 'Generic CRM software is expensive, rigid, and forces your team to adapt to awkward processes.',
    insight: 'Software should adapt to your business process, providing intuitive tools that increase team productivity.',
    solution: 'We design custom management portals with automated pipelines, client portals, and real-time operational reporting.',
    outcome: 'Full visibility over sales and operations, automated team tasks, and freedom from recurring per-seat software licensing fees.',
    faqs: [
      { q: 'Can you migrate data from our current software?', a: 'Yes, we safely migrate legacy customer and financial data into your new custom platform.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design & Brand Experience',
    category: 'Branding',
    keywords: ['UI UX Design Company', 'User Experience Design', 'Product Design', 'Brand Identity'],
    description: 'We design digital interfaces and brand design systems that combine aesthetic elegance with high conversion.',
    challenge: 'Cluttered, confusing website designs frustrate visitors and cause high bounce rates.',
    insight: 'Great UI/UX design simplifies user decisions, guiding visitors smoothly toward purchase or inquiry.',
    solution: 'We craft modern UI designs, interactive prototypes, and cohesive brand design systems.',
    outcome: 'Increased user retention, higher conversion rates, and a premium market position.',
    faqs: [
      { q: 'What is your UI/UX design workflow?', a: 'We start with user research and wireframes, create high-fidelity Figma designs, test usability, and deliver developer-ready assets.' }
    ]
  },
  'cloud-solutions': {
    title: 'Cloud Infrastructure & DevOps',
    category: 'Production',
    keywords: ['Cloud Solutions Company', 'Cloud Architecture', 'Cloud Migration', 'AWS Consulting'],
    description: 'We design, deploy, and manage resilient cloud infrastructure on AWS, Google Cloud, and Vercel.',
    challenge: 'Legacy on-premise servers and unoptimized cloud setups suffer from slow speeds, downtime, and high costs.',
    insight: 'Modern cloud architecture provides sub-second page loads, instant scaling, and bank-grade data security.',
    solution: 'We migrate applications to serverless cloud environments with CI/CD deployment pipelines and automated backups.',
    outcome: 'Sub-second web performance, 99.99% uptime reliability, and optimized cloud operating costs.',
    faqs: [
      { q: 'Can you migrate our applications without downtime?', a: 'Yes, we execute zero-downtime cloud migrations with strict data validation.' }
    ]
  }
};

export const industriesData = {
  'healthcare': {
    name: 'Healthcare',
    heroTitle: 'Healthcare Growth Engineering & Systems',
    challenge: 'Healthcare providers struggle with manual patient scheduling, paperwork delays, and fragmented record systems.',
    opportunity: 'Automate intake, deploy HIPAA-compliant patient portals, and integrate AI diagnostic assistants.',
    solutions: ['Custom patient portals, automated reminders, HIPAA-compliant storage, and AI vision diagnostics.'],
    faqs: [
      { q: 'Are your healthcare software systems HIPAA compliant?', a: 'Yes, we adhere to strict data encryption standards and secure authentication protocols.' }
    ],
    howItWorks: [
      { title: 'Automate Patient Intake', desc: 'Replace paper forms with smart digital intake portals that verify records instantly.', icon: 'clipboard-list' },
      { title: 'Predictive Diagnostics', desc: 'Provide medical teams with AI co-pilots that analyze historical data in real time.', icon: 'activity' },
      { title: 'Secure Compliance', desc: 'Ensure all patient data flows remain encrypted and compliant 24/7.', icon: 'shield-check' }
    ]
  },
  'education': {
    name: 'Education',
    heroTitle: 'Education Technology & Learning Platforms',
    challenge: 'Legacy LMS systems slow down student enrollment and virtual classroom engagement.',
    opportunity: 'Modernize learning with high-speed virtual portals, automated grading, and student dashboards.',
    solutions: ['Headless LMS setups, customized enrollment software, and interactive curriculum portals.'],
    faqs: [
      { q: 'Can you integrate with existing institutional databases?', a: 'Yes, we connect modern frontends with legacy databases via secure API layers.' }
    ],
    howItWorks: [
      { title: 'Streamline Enrollment', desc: 'Automate registration processes and eliminate paperwork for staff.', icon: 'graduation-cap' },
      { title: 'Interactive Portals', desc: 'Deploy high-speed learning tools that keep students engaged.', icon: 'monitor-play' },
      { title: 'Unified Systems', desc: 'Connect distinct campus workflows into one central hub.', icon: 'network' }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    heroTitle: 'Real Estate Growth Systems & MLS Portals',
    challenge: 'Slow property listing portals and manual lead follow-up cause prospective buyers to leave.',
    opportunity: 'Engage buyers with fast property search, interactive maps, and automated CRM lead flows.',
    solutions: ['High-speed property listings, interactive maps, and lead follow-up bots.'],
    faqs: [
      { q: 'Do you sync with RETS and MLS databases?', a: 'Yes, we automate listing updates by synchronizing directly with RETS/IDX systems.' }
    ],
    howItWorks: [
      { title: 'Fast Property Search', desc: 'Deliver instant search filters to help buyers find homes effortlessly.', icon: 'home' },
      { title: 'Automated Showing Tools', desc: 'Allow visitors to schedule property tours instantly with automated CRM sync.', icon: 'calendar-check' },
      { title: 'Lead Qualification', desc: 'Qualify buyer intent automatically to focus your sales team on high-value clients.', icon: 'trending-up' }
    ]
  },
  'retail': {
    name: 'Retail & Commerce',
    heroTitle: 'Retail & E-Commerce Growth Infrastructure',
    challenge: 'Slow checkouts and generic product displays reduce mobile sales conversions.',
    opportunity: 'Increase sales with headless checkouts, AI product recommendations, and custom carts.',
    solutions: ['Headless eCommerce systems, automated cart recovery, and revenue analytics.'],
    faqs: [
      { q: 'What commerce platforms do you support?', a: 'We build headless solutions using Shopify, BigCommerce, or custom web engines.' }
    ],
    howItWorks: [
      { title: 'Frictionless Checkout', desc: 'Eliminate checkout friction with single-click purchasing and fast loading.', icon: 'shopping-cart' },
      { title: 'Personalized Product Engine', desc: 'Recommend relevant products dynamically using real-time user behavior.', icon: 'sparkles' },
      { title: 'Omnichannel Integration', desc: 'Sell across web, mobile, and social media storefronts seamlessly.', icon: 'globe' }
    ]
  }
};

export const caseStudiesData = [
  {
    slug: 'task-management-system',
    title: 'A multi-role SaaS platform for team and task management across enterprise industries',
    client: 'TMS',
    challenge: 'Infynix engineered an internal, industry-agnostic software suite to manage teams and tasks across multiple roles (Super Admin, Org Admin, Team Lead/PM, Employee), with custom module activation per industry.',
    objectives: 'Build a scalable multi-role platform with clear separation between web (admin management) and mobile (execution roles), supporting offline-first usage for field employees.',
    strategy: 'Split the platform by role and surface, Web management built with React and Node.js, mobile app built with Flutter and SQLite for offline-first sync.',
    technology: 'React, Vite, Node.js, Express, MongoDB, SQLite, Flutter',
    execution: 'Shipped 17+ custom frontend modules, engineered backend API security, and implemented SQLite offline synchronization.',
    results: '17+ custom pages shipped across one unified role-based platform with 100% offline availability.',
  },
  {
    slug: 'beyond-demands',
    title: 'A multi-tenant supply procurement platform with three dedicated operational surfaces',
    client: 'Beyond Demands',
    challenge: 'Partner salons, warehouse teams, and org admins required tailored views into supply inventory, ordering, and dispatch without compromising tenant data security.',
    objectives: 'Ship one multi-tenant platform with three dedicated surfaces while maintaining strict tenant isolation and concurrency controls.',
    strategy: 'Modular monolith architecture in Next.js with PostgreSQL Row-Level Security and atomic transaction locks.',
    technology: 'Next.js, Prisma, PostgreSQL, NextAuth, Row-Level Security',
    execution: 'Implemented Postgres Row-Level Security policies, transaction locking for inventory dispatch, rate limiting, and automated security audit logs.',
    results: 'One unified codebase, three tailored operational surfaces, zero data leakage across multi-tenant clients.',
  }
];

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary: 'Learn why traditional siloed marketing fails and how Growth Engineering unifies software, search, and media for sustainable business growth.',
    content: `
      Businesses rarely fail due to a lack of ambition. They fail because their software, search strategy, paid advertising, and operational workflows function in silos.
      
      Growth Engineering solves this disconnection. At Infynix Solutions, we engineer unified systems where technical SEO, high-speed web apps, performance media, and business automation work as one cohesive growth engine.
      
      When your web infrastructure loads in under a second, your content is pre-rendered for search engines, and your lead capture syncs automatically into your CRM, customer acquisition becomes predictable and scalable.
    `,
    date: 'September 6, 2026',
    author: 'Infynix Tech Lab'
  },
  {
    slug: 'ai-surveillance-computer-vision-security',
    title: 'How Real-Time AI Computer Vision Transforms Facility Security',
    category: 'AI Surveillance',
    summary: 'Discover how edge-processed AI computer vision on NVIDIA Jetson hardware replaces passive CCTV with real-time threat detection.',
    content: `
      Traditional CCTV surveillance is reactive. Security teams review recorded footage only after an intrusion or security incident has already occurred.
      
      Modern AI surveillance changes this paradigm completely. By deploying computer vision models on local edge hardware like NVIDIA Jetson and Google Coral, cameras process video streams in real time.
      
      Intrusions, perimeter breaches, and safety anomalies are detected instantly, alerting security personnel before incidents escalate. Because video processing occurs locally on the edge device, facility data remains private and secure.
    `,
    date: 'September 6, 2026',
    author: 'Infynix AI Team'
  }
];
