import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import {
  Target,
  Search,
  Share2,
  Workflow,
  Layout,
  Film,
  Box,
  Camera,
  Code2,
  Bot,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import './SolutionsMarquee.css';

// Register GSAP plugins safely on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);
}

// Inline Instagram SVG Icon
const InstagramIcon = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// 12 High-Converting Services
const SERVICES = [
  // ── Infynix Agency ──
  {
    id: 'performance-advertising',
    title: 'Performance Advertising & PPC',
    division: 'Infynix Agency',
    path: '/solutions/performance-advertising',
    icon: Target,
    description:
      'Data-driven paid media campaigns across Meta, Google & LinkedIn engineered for scalable ROAS and lowered acquisition costs.',
    phone: '+91 99959 11173',
    phoneFormatted: '+91 99959 11173',
    phoneUrl: 'tel:+919995911173',
    instagram: 'infynix_agency',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
  },
  {
    id: 'seo-services',
    title: 'SEO & Search Infrastructure',
    division: 'Infynix Agency',
    path: '/solutions/seo-services',
    icon: Search,
    description:
      'Technical search pre-rendering, clean HTML metadata architecture, and high-intent commercial keyword rankings that capture active buyers.',
    phone: '+91 99959 11173',
    phoneFormatted: '+91 99959 11173',
    phoneUrl: 'tel:+919995911173',
    instagram: 'infynix_agency',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
  },
  {
    id: 'social-media-management',
    title: 'Social Media & Brand Growth',
    division: 'Infynix Agency',
    path: '/solutions/social-media-management',
    icon: Share2,
    description:
      'Platform-tailored social strategy, organic audience cultivation, and high-converting community brand management.',
    phone: '+91 99959 11173',
    phoneFormatted: '+91 99959 11173',
    phoneUrl: 'tel:+919995911173',
    instagram: 'infynix_agency',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
  },
  {
    id: 'marketing-automation-crm',
    title: 'Marketing Automation & CRM',
    division: 'Infynix Agency',
    path: '/solutions/marketing-automation-crm',
    icon: Workflow,
    description:
      'Automated email drips, lead scoring pipelines, and CRM synchronizations that turn captured traffic into closed clients.',
    phone: '+91 99959 11173',
    phoneFormatted: '+91 99959 11173',
    phoneUrl: 'tel:+919995911173',
    instagram: 'infynix_agency',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
  },

  // ── Infynix Media ──
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Brand Styling',
    division: 'Infynix Media',
    path: '/solutions/ui-ux-design',
    icon: Layout,
    description:
      'Modern web and application interfaces crafted for frictionless usability, brand prestige, and peak conversion rates.',
    phone: '+91 99959 11196',
    phoneFormatted: '+91 99959 11196',
    phoneUrl: 'tel:+919995911196',
    instagram: 'infynixmediahouse',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
  },
  {
    id: 'brand-films-commercials',
    title: 'Cinematic Brand Films',
    division: 'Infynix Media',
    path: '/solutions/brand-films-commercials',
    icon: Film,
    description:
      'High-resolution corporate ad films, brand stories, and commercials written, directed, and produced end-to-end.',
    phone: '+91 99959 11196',
    phoneFormatted: '+91 99959 11196',
    phoneUrl: 'tel:+919995911196',
    instagram: 'infynixmediahouse',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
  },
  {
    id: 'motion-graphics-animation',
    title: '3D Motion Graphics & Animation',
    division: 'Infynix Media',
    path: '/solutions/motion-graphics-animation',
    icon: Box,
    description:
      'Photorealistic 3D product animations and dynamic vector motion graphics that make complex systems intuitive and captivating.',
    phone: '+91 99959 11196',
    phoneFormatted: '+91 99959 11196',
    phoneUrl: 'tel:+919995911196',
    instagram: 'infynixmediahouse',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
  },
  {
    id: 'photography-videography',
    title: 'Studio Photography & Media',
    division: 'Infynix Media',
    path: '/solutions/photography-videography',
    icon: Camera,
    description:
      'On-location commercial photography, studio product imaging, and owned visual asset libraries with complete licensing.',
    phone: '+91 99959 11196',
    phoneFormatted: '+91 99959 11196',
    phoneUrl: 'tel:+919995911196',
    instagram: 'infynixmediahouse',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
  },

  // ── Infynix Development ──
  {
    id: 'custom-web-app-development',
    title: 'Custom Web & App Engineering',
    division: 'Infynix Development',
    path: '/solutions/custom-web-app-development',
    icon: Code2,
    description:
      'Fast, scalable enterprise web platforms engineered in React 19, Next.js, and Node.js built around your precise business workflows.',
  },
  {
    id: 'ai-agents-automation',
    title: 'AI Agents & Business Workflows',
    division: 'Infynix Development',
    path: '/solutions/ai-agents-automation',
    icon: Bot,
    description:
      'Autonomous AI agents, custom LLM tools, and automated pipelines that connect to your company data and eliminate manual tasks.',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    division: 'Infynix Development',
    path: '/solutions/mobile-app-development',
    icon: Smartphone,
    description:
      'High-performance iOS and Android mobile applications engineered with React Native and Flutter for native-level responsiveness.',
  },
  {
    id: 'cloud-infrastructure-security',
    title: 'Cloud Infrastructure & Cyber Security',
    division: 'Infynix Development',
    path: '/solutions/cloud-infrastructure-security',
    icon: ShieldCheck,
    description:
      'Resilient cloud topologies on AWS, hardened cyber security frameworks, and zero-downtime deployment pipelines guaranteeing 99.99% uptime.',
  },
];

// 4 Category Tabs
const TABS = [
  { id: 'All', label: 'All' },
  { id: 'Infynix Agency', label: 'Infynix Agency' },
  { id: 'Infynix Media', label: 'Infynix Media' },
  { id: 'Infynix Development', label: 'Infynix Development' },
];

// Direct Department Contacts Config
const DEPARTMENT_CONTACTS = {
  'Infynix Agency': {
    title: 'Infynix Agency',
    phone: '+91 99959 11173',
    phoneUrl: 'tel:+919995911173',
    instagram: '@infynix_agency',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
  },
  'Infynix Media': {
    title: 'Infynix Media',
    phone: '+91 99959 11196',
    phoneUrl: 'tel:+919995911196',
    instagram: '@infynixmediahouse',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
  },
};

const SolutionsMarquee = ({
  showHeading = true,
  heading = 'What We Offer',
  subheading = 'Explore our connected ecosystem of digital marketing, creative media, and software engineering solutions.',
  className = '',
  style = {},
}) => {
  const [activeTab, setActiveTab] = useState('All');
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const magneticBtnRef = useRef(null);

  // Tab Filtering with GSAP Flip
  const handleTabSelect = (tabId) => {
    if (tabId === activeTab) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !cardsContainerRef.current) {
      setActiveTab(tabId);
      return;
    }

    // 1. Capture positions of CURRENTLY VISIBLE cards before state change
    const visibleCards = cardsContainerRef.current.querySelectorAll(
      '.service-card-wrapper:not(.is-filtered-out)'
    );
    const state = Flip.getState(visibleCards);

    // 2. Update React State
    setActiveTab(tabId);

    // 3. Animate newly visible cards to new positions
    requestAnimationFrame(() => {
      if (!cardsContainerRef.current) return;
      const targetCards = cardsContainerRef.current.querySelectorAll(
        '.service-card-wrapper:not(.is-filtered-out)'
      );

      Flip.from(state, {
        targets: targetCards,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.02,
        fade: true,
        onComplete: () => {
          // Clear any inline styles that could lock opacity or transform
          gsap.set(targetCards, { clearProps: 'opacity,transform,visibility' });
        },
      });
    });
  };

  // 3D Card Tilt on Mouse Move
  const handleCardMouseMove = (e) => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.2,
      ease: 'power1.out',
    });

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--glare-opacity', '0.55');
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
    card.style.setProperty('--glare-opacity', '0');
  };

  // Magnetic CTA Button Movement
  const handleMagneticMouseMove = (e) => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const btn = magneticBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * 0.32,
      y: y * 0.32,
      duration: 0.28,
      ease: 'power2.out',
    });
  };

  const handleMagneticMouseLeave = () => {
    const btn = magneticBtnRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  // GSAP ScrollTrigger Entrance Animations
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;
      const section = sectionRef.current;
      if (!section) return;

      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      // Check if section is already in or past view on mount/reload
      const rect = section.getBoundingClientRect();
      const isAlreadyInView = rect.top < window.innerHeight;

      if (prefersReduced || isAlreadyInView) {
        // Immediately ensure all elements are 100% visible and un-translated
        gsap.set('.what-we-offer-eyebrow, .what-we-offer-heading .heading-word, .what-we-offer-subtitle, .what-we-offer-tabs, .service-card-wrapper:not(.is-filtered-out)', {
          opacity: 1,
          y: 0,
          rotateX: 0,
          clearProps: 'opacity,transform',
        });
        gsap.set('.what-we-offer-accent-line', { scaleX: 1 });
        return;
      }

      // Staggered 3D ScrollTrigger entrance when scrolling down
      gsap.fromTo(
        '.what-we-offer-eyebrow',
        { opacity: 0, y: -16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.what-we-offer-heading .heading-word',
        { opacity: 0, y: 28, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.what-we-offer-accent-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.what-we-offer-subtitle',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.what-we-offer-tabs',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.25,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.service-card-wrapper:not(.is-filtered-out)',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.3,
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Refresh ScrollTrigger after any assets/fonts finish initial layout
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);

      return () => clearTimeout(timer);
    },
    { scope: sectionRef }
  );

  // JSON-LD Schema: ItemList + Service for all 12 services covering UK, UAE, and India regions
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Infynix Solutions Capabilities & Services',
    description:
      'Explore our connected ecosystem of digital marketing, creative media, and software engineering solutions.',
    numberOfItems: SERVICES.length,
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `https://www.infynixgrowthsolutions.com${service.path}`,
        provider: {
          '@type': 'Organization',
          name: 'Infynix Solutions',
          url: 'https://www.infynixgrowthsolutions.com/',
        },
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'United Kingdom' },
        ],
      },
    })),
  };

  // Active department contact info for Infynix Agency & Infynix Media
  const activeDeptContact = DEPARTMENT_CONTACTS[activeTab] || null;

  // Split heading into separate words for 3D staggered entrance
  const headingWords = heading.split(' ');

  return (
    <section
      ref={sectionRef}
      className={`what-we-offer-section ${className}`}
      style={style}
      aria-label="What We Offer - Services & Capabilities"
    >
      {/* Background ambient lighting */}
      <div className="what-we-offer-glow" aria-hidden="true" />

      {/* SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <div className="what-we-offer-container">
        {/* ── 1. Section Header & Heading ── */}
        {showHeading && (
          <header className="what-we-offer-header">
            <span className="what-we-offer-eyebrow">OUR CAPABILITIES</span>
            <h2 className="what-we-offer-heading">
              {headingWords.map((word, i) => (
                <React.Fragment key={i}>
                  <span className="heading-word">{word}</span>
                  {i < headingWords.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h2>
            <div className="what-we-offer-accent-line" aria-hidden="true" />
            {subheading && (
              <p className="what-we-offer-subtitle">{subheading}</p>
            )}
          </header>
        )}

        {/* ── 2. Category Filter Tabs ── */}
        <div className="what-we-offer-tabs-wrapper">
          <div
            className="what-we-offer-tabs"
            role="tablist"
            aria-label="Filter services by division"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`filter-tab-button ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleTabSelect(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Direct Department Contacts Bar (Agency & Media) ── */}
        {activeDeptContact && (
          <div
            className="department-contact-bar"
            role="region"
            aria-label={`Direct Contact for ${activeDeptContact.title}`}
          >
            <div className="dept-bar-label">
              <span>Direct Contact:</span>
              <strong>{activeDeptContact.title}</strong>
            </div>
            <div className="dept-bar-links">
              <a
                href={activeDeptContact.phoneUrl}
                className="dept-link-pill"
                aria-label={`Call ${activeDeptContact.title} at ${activeDeptContact.phone}`}
              >
                <Phone size={13} strokeWidth={2.2} />
                <span>{activeDeptContact.phone}</span>
              </a>
              <a
                href={activeDeptContact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dept-link-pill"
                aria-label={`Visit ${activeDeptContact.title} Instagram page`}
              >
                <InstagramIcon size={14} />
                <span>{activeDeptContact.instagram} ↗</span>
              </a>
            </div>
          </div>
        )}

        {/* ── 3. Responsive 3D Grid & Cards ── */}
        <div
          ref={cardsContainerRef}
          className="services-3d-grid"
          role="region"
          aria-label="Capabilities Service Grid"
        >
          {SERVICES.map((service) => {
            const isMatch =
              activeTab === 'All' || service.division === activeTab;
            const IconComponent = service.icon;

            // Pill styling variation based on division
            let badgeClass = 'card-division-badge';
            if (service.division === 'Infynix Media') {
              badgeClass += ' badge-media';
            } else if (service.division === 'Infynix Development') {
              badgeClass += ' badge-development';
            }

            return (
              <div
                key={service.id}
                data-division={service.division}
                data-service-id={service.id}
                className={`service-card-wrapper ${!isMatch ? 'is-filtered-out' : ''}`}
              >
                <Link
                  to={service.path}
                  className="service-card-3d"
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  aria-label={`${service.title} - ${service.division}`}
                >
                  {/* Soft light specular reflection glare */}
                  <div className="service-card-glare" aria-hidden="true" />

                  {/* Card Top: Gradient circle icon & Division Pill badge */}
                  <div className="card-top-row">
                    <div className="card-icon-circle" aria-hidden="true">
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                    <span className={badgeClass}>{service.division}</span>
                  </div>

                  {/* Card Content: Title & 1-2 line Description */}
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.description}</p>

                    {/* In-Card Clickable Chips for Agency & Media */}
                    {service.phone && service.instagram && (
                      <div className="card-contact-chips">
                        <a
                          href={service.phoneUrl}
                          className="card-contact-chip"
                          onClick={(e) => e.stopPropagation()}
                          title={`Call ${service.phone}`}
                          aria-label={`Call ${service.title} directly`}
                        >
                          <Phone size={12} strokeWidth={2.2} />
                          <span>{service.phoneFormatted}</span>
                        </a>
                        <a
                          href={service.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-contact-chip"
                          onClick={(e) => e.stopPropagation()}
                          title={`Instagram @${service.instagram}`}
                          aria-label={`Visit @${service.instagram} on Instagram`}
                        >
                          <InstagramIcon size={12} />
                          <span>@{service.instagram} ↗</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Learn More Link with Hover Slide Arrow */}
                  <div className="card-footer">
                    <span className="card-learn-more">
                      Learn more
                      <span className="card-learn-arrow" aria-hidden="true">
                        <ArrowRight size={16} strokeWidth={2.2} />
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── 4. Bottom Magnetic CTA Button ── */}
        <div className="what-we-offer-cta-container">
          <div
            className="magnetic-btn-wrapper"
            onMouseMove={handleMagneticMouseMove}
            onMouseLeave={handleMagneticMouseLeave}
          >
            <Link
              ref={magneticBtnRef}
              to="/contact"
              className="what-we-offer-cta-btn"
              id="what-we-offer-consultation-cta"
            >
              <span>Get a Free Consultation</span>
              <span className="cta-btn-arrow" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsMarquee;
