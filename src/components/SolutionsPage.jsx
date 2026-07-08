import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutionsData } from '../lib/contentData';
import SEOManager from './SEOManager';
import './InfynixDesign.css';
import teamImg from '../assets/team.png';
import weImg from '../assets/webpage.png';
import aiImg from '../assets/ai.png'; // Added alternative image for AI

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



function Accordion({ items, dark }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`ix-accordion-item${dark ? ' ix-accordion-item--dark' : ''}`}>
          <button className="ix-accordion-btn" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className={`ix-accordion-q${dark ? ' ix-accordion-q--dark' : ''}`}>{item.q}</span>
            <span className={`ix-accordion-icon${dark ? ' ix-accordion-icon--dark' : ''}${open === i ? ' open' : ''}`}>+</span>
          </button>
          <div className={`ix-accordion-body${open === i ? ' open' : ''}`}>
            <p className={`ix-accordion-a${dark ? ' ix-accordion-a--dark' : ''}`}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SolutionsPage = () => {
  const { slug } = useParams();
  const activeSlug = slug || 'website-development';
  useIxReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug]);

  const data = solutionsData[activeSlug];
  if (!data) return <div style={{ padding: '20vh 5%', textAlign: 'center', fontFamily: 'var(--ix-font-display)', fontSize: '2rem' }}>Solution not found.</div>;

  const titleWords = data.title.split(' ');
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(' ');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': data.title,
    'description': data.description,
    'provider': { '@type': 'Organization', 'name': 'Infynix', 'url': 'https://infynix.com' }
  };

  const blueprint = [
    { label: 'Challenge', text: data.challenge },
    { label: 'Insight', text: data.insight },
    { label: 'Solution', text: data.solution },
    { label: 'Outcome', text: data.outcome },
    { label: 'Scale', text: 'Continuous testing, optimizations, and cloud scaling alerts.' },
  ];

  return (
    <div style={{ background: '#fff' }}>
      <SEOManager
        title={`${data.title} | Infynix Solutions`}
        description={data.description}
        canonicalUrl={`https://infynix.com/solutions/${slug}`}
        schemaData={schema}
      />

      {/* ══ HERO — Zendesk Replica ══ */}
      <section style={{
        background: '#ffffff',
        minHeight: '85vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        position: 'relative',
        padding: '120px var(--section-px) 80px',
        gap: '4rem',
        overflow: 'hidden'
      }}>
        {/* Radial ambient glow */}
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '0',
          width: '100%',
          height: '250px',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(0, 122, 94, 0.7) 0%, rgba(204, 255, 0, 0.11) 55%, rgba(255,255,255,0) 85%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        {/* Left */}
        <div style={{ position: 'relative', zIndex: 1 }} data-aos="fade-up">
          <h1 style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 500, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111', lineHeight: 1.1, marginTop: '60px',marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {data.title}
          </h1>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: '#111', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '520px' }}>
            {data.description}
          </p>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.1rem', color: '#111', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '520px' }}>
            {data.challenge}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ background: '#007A5E', color: '#ffffffff', padding: '0.9rem 1.8rem', borderRadius: '40px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = '#96c200'} onMouseLeave={e => e.currentTarget.style.background = '#a7d600'}>
              Try it for free
            </Link>
            <a href="#blueprint" style={{ background: '#fff', border: '1px solid #ccc', color: '#111', padding: '0.9rem 1.8rem', borderRadius: '40px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#999'} onMouseLeave={e => e.currentTarget.style.borderColor = '#ccc'}>
              View demo
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="200">
          <img src={activeSlug === 'artificial-intelligence' ? aiImg : weImg} alt={data.title} style={{ width: '100%', maxWidth: '340px', height: 'auto', borderRadius: '40px', objectFit: 'cover', aspectRatio: '1/1',  }} />
        </div>
      </section>

      {/* ══ TEAL BANNER ══ */}
      <section style={{ background: 'var(--ix-primary)', padding: 'clamp(48px, 8vw, 96px) var(--section-px)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: '"Montserrat", Arial, sans-serif', fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.8rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Engineered for<br />
            <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Sustainable Growth</em>
          </h2>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.97rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, maxWidth: 480, flex: '1 1 300px' }}>
            {data.insight}
          </p>
        </div>
      </section>

      {/* ══ THE GROWTH Blueprint ══ */}
      <section id="blueprint" className="ix-section" style={{ background: '#fff', textAlign: 'center', padding: '120px var(--section-px)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <h2 data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#111', marginBottom: '100px', letterSpacing: '-0.02em' }}>
            The Growth Blueprint
          </h2>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {blueprint.map((item, i) => {
              const isHigh = i % 2 !== 0;
              const dropAmount = isHigh ? 30 : 120; // 30px for high, 120px for low

              return (
                <div key={item.label} className={`ix-d${i + 1} data-aos="fade-up"`} style={{
                  position: 'relative',
                  flex: 1,
                  maxWidth: '220px', // Exact card size constraint
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: `${dropAmount}px`,
                  zIndex: 1
                }}>
                  {/* Horizontal line to the next card */}
                  {i < blueprint.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: `-${dropAmount}px`, // Reaches exactly the top 0 line
                      left: '50%',
                      width: 'calc(100% + 30px)', // Matches gap: 30px
                      borderTop: '1px dashed #e5e7eb',
                      zIndex: 0
                    }}></div>
                  )}

                  {/* Vertical drop line */}
                  <div style={{
                    position: 'absolute',
                    top: `-${dropAmount}px`,
                    left: '50%',
                    height: `${dropAmount}px`,
                    borderLeft: '1px dashed #e5e7eb',
                    zIndex: 0
                  }}></div>

                  {/* Card */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid #f3f4f6',
                    borderRadius: '16px',
                    padding: '2rem 1.5rem',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)',
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <h3 style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#111', marginBottom: '0.8rem', letterSpacing: '-0.01em' }}>
                      {item.label}
                    </h3>
                    <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FAQ — white ══ */}
      <section className="ix-section" style={{ background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="ix-teal-bar" />
          <h2 data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--ix-text)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            Frequently Asked<br />
            <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ix-primary)' }}>Questions</em>
          </h2>
          <div data-aos-delay="100" data-aos="fade-up"><Accordion items={data.faqs} /></div>
          <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--ix-border-n)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.92rem', color: 'var(--ix-muted)', flex: 1 }}>Still have questions? Our team is ready to help.</p>
            <Link to="/contact" className="ix-btn-primary">Book Discovery Session <Arrow /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
