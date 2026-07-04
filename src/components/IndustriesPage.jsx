import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../lib/contentData';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

const industryImages = {
  'healthcare':            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'education':             'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
  'construction':          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  'real-estate':           'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  'manufacturing':         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  'retail':                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
  'hospitality':           'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
  'professional-services': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
};

function useIxReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.ix-reveal, .ix-reveal-left, .ix-reveal-right, .ix-reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('ix-visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useWordReveal(textRef, wordSectionRef, slug) {
  useEffect(() => {
    const words = textRef.current?.querySelectorAll('.word');
    if (!words) return;
    const handleScroll = () => {
      const section = wordSectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = (vh - rect.top) / (sectionHeight + vh);
      const progress = Math.max(0, Math.min(1, scrolled));
      const wordsToReveal = Math.floor(progress * words.length * 1.5);
      words.forEach((word, i) => {
        if (i < wordsToReveal) word.classList.add('active');
        else word.classList.remove('active');
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);
}

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IndustriesPage = () => {
  const { slug } = useParams();
  const industryKey = slug && industriesData[slug] ? slug : 'healthcare';
  const data = industriesData[industryKey];
  const pageImage = industryImages[industryKey] || industryImages['healthcare'];

  const wordSectionRef = useRef(null);
  const textRef = useRef(null);
  const [faqOpen, setFaqOpen] = useState(null);

  useIxReveal();
  useWordReveal(textRef, wordSectionRef, slug);

  return (
    <div style={{ background: '#fff' }}>
      <SEOManager
        title={`${data.name} Growth Solutions | Infynix`}
        description={data.challenge}
        canonicalUrl={`https://infynix.com/industries/${industryKey}`}
      />

      {/* ══ HERO — full-bleed image with teal overlay ══ */}
      <section style={{ position: 'relative', height: '92vh', overflow: 'hidden', minHeight: 500 }}>
        <img src={pageImage} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />

        {/* Dark green overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,30,20,0.92) 0%, rgba(0,30,20,0.6) 50%, rgba(0,30,20,0.25) 100%)' }} />
        {/* White fade at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, #fff 0%, transparent 100%)' }} />

        {/* Teal left accent */}
        <div style={{ position: 'absolute', top: 0, left: 'clamp(20px, 8vw, 120px)', width: 3, height: '65%', background: 'linear-gradient(to bottom, var(--ix-primary-lt), transparent)', opacity: 0.7 }} />

        {/* Content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(80px, 12vw, 160px) clamp(20px, 8vw, 120px) clamp(80px, 10vw, 120px)' }}>
          <span className="ix-eyebrow" data-aos="fade-up" style={{ color: 'var(--ix-primary-lt)' }}>Industry Solutions</span>
          <h1 style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 6rem)', lineHeight: 0.95, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.8rem' }}>
            <span data-aos-delay="100" data-aos="fade-up" style={{ display: 'block' }}>{data.name}</span>
            <em data-aos-delay="200" data-aos="fade-up" style={{ display: 'block', fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ix-primary-lt)' }}>
              Marketing & Tech
            </em>
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <p data-aos-delay="300" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: 'clamp(0.88rem, 1.2vw, 1rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 500 }}>
              Transforming {data.name} operations through growth engineering — intelligent systems that attract, engage, and scale.
            </p>
            <Link to="/contact" className="ix-btn-primary" data-aos-delay="400" data-aos="fade-up">Discover Solutions <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* ══ WORD REVEAL — dark teal ══ */}
      <section ref={wordSectionRef} style={{ background: 'var(--ix-dark)', minHeight: '70vh', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 8vw, 120px)', display: 'flex', alignItems: 'center' }}>
        <div ref={textRef} style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', lineHeight: 1.45, color: 'rgba(255,255,255,0.1)', maxWidth: 1000, margin: '0 auto', letterSpacing: '-0.01em' }}>
          {`The core challenge in ${data.name} revolves around: ${data.challenge}`.split(' ').map((w, i) => (
            <span className="word" key={i} style={{ transition: 'color 0.4s ease', marginRight: '0.3em', display: 'inline-block' }}>{w}</span>
          ))}
        </div>
      </section>
      <style>{`.word.active { color: rgba(255,255,255,0.9) !important; }`}</style>

      {/* ══ SOLUTIONS — white ══ */}
      <section className="ix-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'start' }}>
          <div>
            <span className="ix-teal-bar" />
            <h2 data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--ix-text)', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Unlocking Value in<br />
              <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ix-primary)' }}>{data.name} Sectors</em>
            </h2>
            <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.97rem', color: 'var(--ix-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>{data.opportunity}</p>
            <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.97rem', color: 'var(--ix-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We introduce robust digital frameworks, APIs, checkouts, and AI scheduling integrations custom built for {data.name} structures. Our solutions address the exact bottlenecks hindering workflow productivity and sales checkout conversions.
            </p>
            <Link to="/contact" className="ix-btn-outline" data-aos-delay="300" data-aos="fade-up">Schedule a Discovery Session <Arrow /></Link>
          </div>

          {/* Numbered solutions list */}
          <div className="-right" data-aos="fade-up">
            <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ix-primary)', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>Recommended Solutions</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--ix-border-n)', border: '1px solid var(--ix-border-n)', borderRadius: 16, overflow: 'hidden' }}>
              {data.solutions.map((sol, i) => (
                <div key={i}
                  style={{ background: '#fff', padding: '1.1rem 1.4rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--ix-primary-bg)'}
                  onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                >
                  <span style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 800, fontSize: '0.75rem', color: 'var(--ix-primary)', minWidth: 28, paddingTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.9rem', color: 'var(--ix-text)', lineHeight: 1.55 }}>{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ — light teal bg ══ */}
      <section className="ix-section" style={{ background: 'var(--ix-primary-bg)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <span className="ix-teal-bar" />
          <h2 data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--ix-text)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            Your {data.name}<br />
            <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ix-primary)' }}>Questions Answered</em>
          </h2>

          <div data-aos-delay="200" data-aos="fade-up" style={{ background: '#fff', border: '1px solid var(--ix-border-n)', borderRadius: 16, padding: '0.5rem 1.5rem' }}>
            {data.faqs.map((faq, i) => (
              <div key={i} className="ix-accordion-item">
                <button
                  className="ix-accordion-btn"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                >
                  <span className="ix-accordion-q">{faq.q}</span>
                  <span className={`ix-accordion-icon${faqOpen === i ? ' open' : ''}`}>+</span>
                </button>
                <div className={`ix-accordion-body${faqOpen === i ? ' open' : ''}`}>
                  <p className="ix-accordion-a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — teal ══ */}
      <section style={{ background: 'var(--ix-primary)', padding: 'clamp(64px, 10vw, 112px) clamp(20px, 8vw, 120px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <h2 data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.6rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
              Ready to Modernize<br />Your {data.name} Operations?
            </h2>
            <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              Our engineers are ready to diagnose and redesign your growth systems.
            </p>
          </div>
          <Link to="/contact" data-aos-delay="200" data-aos="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.7rem', background: '#fff', color: 'var(--ix-primary)',
            fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.06em', textTransform: 'uppercase',
            borderRadius: 100, padding: '1rem 2.2rem', textDecoration: 'none', flexShrink: 0,
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Schedule a Discovery Session <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
