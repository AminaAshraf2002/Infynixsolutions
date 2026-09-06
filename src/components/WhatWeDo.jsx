import React, { useState } from 'react';

const tabs = [
  { id: 'ai_surveillance', label: 'AI Surveillance & Vision' },
  { id: 'growth_engineering', label: 'SEO & Growth Engineering' },
  { id: 'growth_marketing', label: 'Infynix Agency (Paid Media)' },
  { id: 'app_development', label: 'Infynix Media & Branding' },
  { id: 'growth_systems', label: 'Infynix Growth Solutions' },
  { id: 'crm_development', label: 'CRM & Custom Software' },
  { id: 'web_development', label: 'Web Platform Development' },
];

const tabContent = {
  ai_surveillance: {
    title: 'AI Surveillance & Security Solutions',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <polygon points="32,8 56,26 32,44 8,26" stroke="#007A5E" strokeWidth="2" />
        <circle cx="32" cy="26" r="10" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Real-time computer vision pipelines for perimeter intrusion and threat profiling.',
      'Edge hardware processing (NVIDIA Jetson, Google Coral) for privacy-first local analytics.',
      'Automated intrusion alerts, weapon detection, and motion anomaly detection.',
      'Direct RTSP/ONVIF streaming integration with existing CCTV camera networks.',
      'Security telemetry dashboards with real-time incident notifications.',
    ],
    subSections: [],
  },
  growth_engineering: {
    title: 'SEO Engineering & Growth Systems',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <rect x="8" y="16" width="12" height="32" fill="#007A5E" />
        <rect x="26" y="24" width="12" height="24" fill="#007A5E" />
        <rect x="44" y="8" width="12" height="40" fill="#007A5E" />
      </svg>
    ),
    items: [
      'Sub-second SSG rendering, structured JSON-LD schema graphs, and semantic keyword architecture.',
      'Technical SEO audits fixing crawl budget bottlenecks and indexing barriers.',
      'Programmatic search page generation targeting high-intent commercial keywords.',
      'Conversion rate optimization (CRO) funnel design and performance tracking.',
      'Full-funnel attribution linking organic search rankings directly to sales revenue.',
    ],
    subSections: [],
  },
  growth_marketing: {
    title: 'Infynix Agency: Performance Advertising',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <ellipse cx="32" cy="16" rx="20" ry="8" stroke="#007A5E" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="15" ry="6" stroke="#A7D600" strokeWidth="2" />
        <ellipse cx="32" cy="48" rx="8" ry="4" stroke="#007A5E" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Targeted paid media campaigns across Meta Ads, Google Search, Shopping, and LinkedIn.',
      'Server-side tracking and Conversion API (CAPI) setup for pixel-perfect ROAS tracking.',
      'Multi-variant creative ad testing matrices to continuously lower acquisition costs.',
      'Retargeting funnels designed to re-engage past visitors and abandoned carts.',
      'Real-time customer acquisition dashboards tracking CAC, LTV, and return on ad spend.',
    ],
    subSections: [],
  },
  growth_systems: {
    title: 'Infynix Growth Solutions: Tech Architecture',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <circle cx="32" cy="32" r="18" stroke="#007A5E" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="32" cy="32" r="8" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Full-stack React 19, Next.js, and Node.js custom software development.',
      'Autonomous AI agents and LLM integrations connected securely to enterprise databases.',
      'Automated API middleware connecting CRMs, ERPs, and daily communication tools.',
      'Cloud serverless infrastructure setup on AWS and Vercel with 99.99% uptime.',
      'Site Reliability Engineering (SRE) and automated performance monitoring.',
    ],
    subSections: [],
  },
  app_development: {
    title: 'Infynix Media: Visual Branding & Design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <rect x="20" y="8" width="24" height="48" rx="4" stroke="#007A5E" strokeWidth="2" />
        <rect x="24" y="14" width="16" height="30" rx="1" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Modern UI/UX digital interface design crafted for high conversion and visual elegance.',
      'Cinematic brand films, broadcast commercials, and documentary-style videos.',
      '3D motion graphics and dynamic vector animations that explain complex products.',
      'Short-form vertical content production for Reels, TikTok, and Shorts.',
      'Complete brand design systems, visual guidelines, and digital asset libraries.',
    ],
    subSections: [],
  },
  crm_development: {
    title: 'Custom CRM & ERP Software',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <polygon points="32,10 50,25 42,50 22,50 14,25" stroke="#007A5E" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="30" r="6" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Bespoke CRM software tailored precisely to your internal sales pipelines.',
      'Automated task assignments, lead scoring models, and client management portals.',
      'Syncing client communications across email, messaging, and operational dashboards.',
      'Custom ERP modules managing inventory, dispatch, and financial reporting.',
      'Elimination of recurring per-seat SaaS licensing fees.',
    ],
    subSections: [],
  },
  web_development: {
    title: 'Web Platform Development',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="#007A5E" strokeWidth="2" />
        <line x1="10" y1="24" x2="54" y2="24" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'High-performance web applications using React 19, Next.js, and modern tech stacks.',
      'Fully responsive layouts pre-rendered into static HTML for instant load speeds.',
      'Headless CMS integrations and secure e-commerce transactional engines.',
      'Strict adherence to accessibility standards (WCAG) and security protocols.',
      'Pre-built integrations with analytics, CRMs, and marketing automation.',
    ],
    subSections: [],
  },
};

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState('ai_surveillance');
  const content = tabContent[activeTab];

  return (
    <div className="wwd-page">

      {/* ── SECTION 1: HERO ── */}
      <section className="wwd-s1">
        <div className="wwd-s1-inner">
          <p className="wwd-eyebrow">INFYNIX SOLUTIONS: THE GROWTH ENGINEERING COMPANY</p>
          <h1 className="wwd-h1">
            <em>Architecting</em> Growth Systems
          </h1>
          <p className="wwd-sub">
            We engineer technical SEO pre-rendering architectures, performance advertising engines, custom software platforms, and real-time AI computer vision surveillance.
          </p>
 
          <div className="wwd-pillars">
            <div className="wwd-pillar">
              <h3>SEO Engineering</h3>
              <p>Pre-rendered static HTML architectures for sub-second page loads and search dominance.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Infynix Agency</h3>
              <p>Paid media campaigns across Meta, Google, and LinkedIn optimized for direct ROI.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Infynix Media</h3>
              <p>UI/UX design, cinematic brand films, and 3D motion graphics that elevate brand authority.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Infynix Growth Solutions</h3>
              <p>Custom software, AI agents, enterprise automation, and AI vision security pipelines.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── SECTION 2: DARK BANNER ── */}
      <section className="wwd-s2">
        <h2 className="wwd-s2-h2">
          Engineered to Accelerate<br />
          your Business<br />
          <em>Growth</em>
        </h2>
        <p className="wwd-s2-sub">Delivering high-performance backend stacks, conversion-optimized funnels, and scalable architectures that align with your strategic targets.</p>
        <div className="wwd-s2-line"></div>
      </section>

      {/* ── SECTION 3: ENGAGEMENT MODEL ── */}
      <section className="wwd-s3">
        <div className="wwd-s3-line-top"></div>
        <h2 className="wwd-s3-h2">Our Engineering Engagement Model</h2>
        <div className="wwd-cards">
          {[
            { title: 'Analyze', desc: 'We audit technical SEO indexing, page speed latency, ad attribution models, and operational software workflows.' },
            { title: 'Architect', desc: 'We design pre-rendered static HTML routes, custom software blueprints, and AI vision computer pipelines.' },
            { title: 'Deploy', desc: 'Our senior developers write production-ready code, integrating seamless analytics and structured schema graphs.' },
            { title: 'Optimize', desc: 'We provide Site Reliability Engineering (SRE), page load tuning under one second, and continuous CRO funnels.' },
            { title: 'Scale', desc: 'We deploy self-evolving AI agents and automated keyword expansion to ensure your business stays ahead of competition.' },
          ].map((card, i) => (
            <div
              key={card.title}
              className="wwd-card"
              style={{ marginBottom: [60, 100, 60, 100, 60][i] }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: CORE PRACTICE COMPETENCIES ── */}
      <section className="wwd-s4">
        <h2 className="wwd-s4-h2">
          Core Practice <em>Competencies</em>
        </h2>

        {/* Tabs */}
        <div className="wwd-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`wwd-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="wwd-panel" key={activeTab}>
          <div className="wwd-comp-icon">
            {content.icon}
            <div className="wwd-comp-title">{content.title}</div>
          </div>

          <div className="wwd-comp-body">
            <ul className="wwd-list">
              {content.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <a href="/contact" className="wwd-know-more">
            Schedule Technical Audit
            <svg viewBox="0 0 14 14" fill="none" style={{ width: 12, height: 12 }}>
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
