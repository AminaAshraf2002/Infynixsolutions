import React, { useState } from 'react';

const tabs = [
  { id: 'growth_marketing', label: 'Infynix Agency' },
  { id: 'app_development', label: 'Infynix Media' },
  { id: 'growth_systems', label: 'Infynix Growth Solutions' },
  { id: 'ai_surveillance', label: 'AI Surveillance & Vision' },
  { id: 'growth_engineering', label: 'SEO Engineering' },
  { id: 'web_development', label: 'Web Development' },
  { id: 'crm_development', label: 'Custom CRM Software' },
];

const tabContent = {
  growth_marketing: {
    title: 'Infynix Agency: Paid Media & Ads',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <ellipse cx="32" cy="16" rx="20" ry="8" stroke="#007A5E" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="15" ry="6" stroke="#A7D600" strokeWidth="2" />
        <ellipse cx="32" cy="48" rx="8" ry="4" stroke="#007A5E" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Targeted ad campaigns across Meta, Google Search, Shopping, and LinkedIn.',
      'Server-side tracking and Conversion APIs to measure exact ad return.',
      'A/B creative testing to continuously lower customer acquisition costs.',
      'Retargeting campaigns that re-engage visitors and recover lost sales.',
      'Simple monthly reporting tracking lead volume, cost per lead, and revenue.',
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
      'Modern UI/UX digital product design crafted for high conversion.',
      'Cinematic brand films, product commercials, and corporate video production.',
      '3D motion graphics and animations that explain your product simply.',
      'Short vertical video content created for Reels, TikTok, and social ads.',
      'Cohesive brand identity packages, logo designs, and visual guidelines.',
    ],
    subSections: [],
  },
  growth_systems: {
    title: 'Infynix Growth Solutions',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <circle cx="32" cy="32" r="18" stroke="#007A5E" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="32" cy="32" r="8" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Full-stack custom software built with React 19, Next.js, and Node.js.',
      'AI agents connected safely to your internal company databases.',
      'Automated API integrations connecting your CRM, accounting, and tools.',
      'Fast, reliable cloud hosting setup on AWS and Vercel.',
      'Continuous maintenance and monitoring to ensure 99.99% uptime.',
    ],
    subSections: [],
  },
  ai_surveillance: {
    title: 'AI Surveillance & Security Solutions',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <polygon points="32,8 56,26 32,44 8,26" stroke="#007A5E" strokeWidth="2" />
        <circle cx="32" cy="26" r="10" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Real-time computer vision threat detection for facility security.',
      'Edge hardware processing on NVIDIA Jetson for private, local data analytics.',
      'Automated intrusion alerts, weapon detection, and boundary monitoring.',
      'Seamless connection with your existing CCTV and IP camera network.',
      'Real-time mobile push alerts and security management dashboards.',
    ],
    subSections: [],
  },
  growth_engineering: {
    title: 'SEO Engineering & Search Infrastructure',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <rect x="8" y="16" width="12" height="32" fill="#007A5E" />
        <rect x="26" y="24" width="12" height="24" fill="#007A5E" />
        <rect x="44" y="8" width="12" height="40" fill="#007A5E" />
      </svg>
    ),
    items: [
      'Sub-second page rendering and structured search tags to boost search rankings.',
      'Technical SEO audits that fix indexing barriers and site speed slowdowns.',
      'Targeted search page generation for commercial keywords in your industry.',
      'Landing page optimization designed to turn web traffic into qualified inquiries.',
      'Clear analytics tracking that ties organic search rankings directly to revenue.',
    ],
    subSections: [],
  },
  crm_development: {
    title: 'Custom CRM Software',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.8 }}>
        <polygon points="32,10 50,25 42,50 22,50 14,25" stroke="#007A5E" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="30" r="6" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Bespoke CRM software tailored to how your sales team actually works.',
      'Automated lead assignments, deal pipelines, and client portals.',
      'Centralized client communication syncing email, chat, and notes.',
      'Custom reporting dashboards tracking sales performance and deal velocity.',
      'No recurring per-user software subscription fees.',
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
      'Fast, modern websites built on React 19 and Next.js.',
      'Pre-rendered static pages designed for instant loading on mobile and desktop.',
      'Headless CMS integration for easy content management.',
      'Full accessibility compliance and robust security standards.',
      'Built-in integration with Google Analytics and CRM lead capture.',
    ],
    subSections: [],
  },
};

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState('growth_marketing');
  const content = tabContent[activeTab];

  return (
    <div className="wwd-page">

      {/* ── SECTION 1: HERO ── */}
      <section className="wwd-s1">
        <div className="wwd-s1-inner">
          <p className="wwd-eyebrow">WHAT WE DO</p>
          <h1 className="wwd-h1">
            <em>Services</em> & Solutions
          </h1>
          <p className="wwd-sub">
            We build fast websites, search architecture, paid ad campaigns, custom software, and AI vision systems.
          </p>
 
          <div className="wwd-pillars">
            <div className="wwd-pillar">
              <h3>Infynix Agency</h3>
              <p>Targeted paid media campaigns on Meta and Google built for clear lead acquisition.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Infynix Media</h3>
              <p>Modern UI/UX design, brand films, and 3D graphics that build brand authority.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Infynix Growth Solutions</h3>
              <p>Custom web apps, AI software workflows, and computer vision security systems.</p>
            </div>
            <div className="wwd-pillar">
              <h3>SEO Engineering</h3>
              <p>Sub-second pre-rendered pages built to rank at the top of search engine results.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── SECTION 2: DARK BANNER ── */}
      <section className="wwd-s2">
        <h2 className="wwd-s2-h2">
          Engineered for Real<br />
          Business<br />
          <em>Growth</em>
        </h2>
        <p className="wwd-s2-sub">Delivering high-performance software, high-converting ad funnels, and search infrastructure that drive measurable results.</p>
        <div className="wwd-s2-line"></div>
      </section>

      {/* ── SECTION 3: ENGAGEMENT MODEL ── */}
      <section className="wwd-s3">
        <div className="wwd-s3-line-top"></div>
        <h2 className="wwd-s3-h2">How We Work</h2>
        <div className="wwd-cards">
          {[
            { title: 'Audit', desc: 'We review your site speed, search rankings, ad performance, and current software tools.' },
            { title: 'Plan', desc: 'We outline a clear strategy for SEO, paid media, and software upgrades tailored to your business.' },
            { title: 'Build', desc: 'Our team writes production-ready code, creates visual assets, and sets up tracking.' },
            { title: 'Optimize', desc: 'We continuously tune load speeds, landing page conversion rates, and ad acquisition costs.' },
            { title: 'Scale', desc: 'We add automated software workflows to help your business handle higher lead volumes.' },
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
          Core <em>Capabilities</em>
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
            Schedule a Call
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
