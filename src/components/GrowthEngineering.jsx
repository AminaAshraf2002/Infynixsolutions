import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

/* â”€â”€ DATA â”€â”€ */
const stages = [
  { n: '01', title: 'Discover', body: 'Identify bottlenecks in your customer acquisition, data latency, and engineering flows.' },
  { n: '02', title: 'Diagnose', body: 'Audit system logs, conversion paths, and technical gaps across software systems.' },
  { n: '03', title: 'Engineer', body: 'Blueprint dynamic integrations, speed optimizations, and CRM databases.' },
  { n: '04', title: 'Build',    body: 'Write clean, scalable, production-ready code with continuous integration.' },
  { n: '05', title: 'Deploy',   body: 'Seamlessly push integrations complete with GA4 and lead attribution analytics.' },
  { n: '06', title: 'Optimize', body: 'Tune load speeds, run conversion rate optimization audits, and fix user drops.' },
  { n: '07', title: 'Scale',    body: 'Introduce self-evolving AI automation models to handle high volumes.' },
];

const marqueeItems = [
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
];

const stats = [
  { num: '7x',   label: 'Stage Method' },
  { num: '3x',   label: 'Avg. Revenue Lift' },
  { num: '98%',  label: 'Client Retention' },
  { num: '150+', label: 'Systems Built' },
];

/* â”€â”€ HOOKS â”€â”€ */
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

/* â”€â”€ ACCORDION â”€â”€ */
function Accordion({ items, dark }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={dark ? 'ix-accordion-item ix-accordion-item--dark' : 'ix-accordion-item'}
        >
          <button
            className="ix-accordion-btn"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={dark ? 'ix-accordion-q ix-accordion-q--dark' : 'ix-accordion-q'}>
              {item.q}
            </span>
            <span className={`ix-accordion-icon${dark ? ' ix-accordion-icon--dark' : ''}${open === i ? ' open' : ''}`}>+</span>
          </button>
          <div className={`ix-accordion-body${open === i ? ' open' : ''}`}>
            <p className={dark ? 'ix-accordion-a ix-accordion-a--dark' : 'ix-accordion-a'}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── ARROW ICON ── */
const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


/* ════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
const GrowthEngineering = () => {
  useIxReveal();

  const [settled, setSettled] = useState(false);
  const sectionRef = useRef(null);
  const TRANSITION = "all 0.75s cubic-bezier(0.4, 0, 0.2, 1)";
  const TRANSITION_SLOW = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
  const GREEN = "#007A5E";

  useEffect(() => {
      const onScroll = () => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          setSettled(-rect.top > 80);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Growth Engineering',
    'provider': { '@type': 'Organization', 'name': 'Infynix', 'url': 'https://infynix.com' },
    'description': 'Category page describing the Infynix Growth Engineering Method: Attract, Engage, Convert, Optimize, Scale.',
    'serviceType': 'Growth Engineering',
  };

  return (
    <>
      <SEOManager
        title="Growth Engineering Company | Infynix"
        description="Businesses don't struggle because they lack ambition. They struggle because technology, marketing, operations and data operate independently. Infynix engineers these into one system."
        canonicalUrl="https://infynix.com/growth-engineering"
        schemaData={schema}
      />

      {/* ══ HERO SECTION ══ */}
      <section ref={sectionRef} style={{ position: "relative", height: "calc(100vh + 100px)" }}>
          <div style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden",
              background: "#fff",
          }}>
              <div style={{
                  position: "absolute",
                  left: "8vw",
                  top: "14vh",
                  opacity: settled ? 0 : 1,
                  transform: settled ? "translateY(-30px)" : "translateY(0px)",
                  transition: TRANSITION,
                  zIndex: 4,
                  pointerEvents: "none",
              }}>
                  <h1 style={{
                      fontFamily: "var(--ix-font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                      lineHeight: 1.04,
                      letterSpacing: "-0.03em",
                      color: "#4d4c4c",
                      whiteSpace: "nowrap",
                      marginBottom: "1.4rem",
                      marginLeft: "50px",
                      marginTop: "50px",
                  }}>
                      Growth{" "}
                      <em style={{
                          fontFamily: "var(--ix-font-serif)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: GREEN,
                      }}>
                          Engineering
                      </em>
                  </h1>

                  <h2 style={{
                      fontFamily: "var(--ix-font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 3.2vw, 3.4rem)",
                      lineHeight: 1.15,
                      letterSpacing: "-0.01em",
                      color: "#353434",
                      marginBottom: "0.55rem",
                      marginLeft: "50px",
                      marginTop: "30px",
                  }}>
                      Attract → Engage → Convert
                      <br />
                      <em style={{
                          fontFamily: "var(--ix-font-serif)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: "#353434",
                          marginTop: "10px",
                          display: 'inline-block'
                      }}>
                          Optimize & Scale Systems
                      </em>
                  </h2>

                  <p style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6, marginLeft: "50px", marginTop: "20px" }}>
                      Unifying technology, marketing, operations and data into one intelligent system.
                  </p>
              </div>

              <div style={{
                  position: "absolute",
                  left: "11vw",
                  top: settled ? "16vh" : "55vh",
                  width: settled ? "40vw" : "70vw",
                  height: settled ? "50vh" : "36vh",
                  borderRadius: settled ? "38px" : "24px",
                  overflow: "hidden",
                  transition: TRANSITION_SLOW,
                  zIndex: 2,
                  marginTop: "50px",
              }}>
                  <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                      alt="Global tech network"
                      style={{
                          width: "100%", height: "100%",
                          objectFit: "cover", objectPosition: "center 20%",
                          display: "block",
                      }}
                  />
              </div>

              <div style={{
                  position: "absolute",
                  left: "52vw",
                  right: "4vw",
                  top: "10vh",
                  bottom: "10vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  opacity: settled ? 1 : 0,
                  transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                  zIndex: 3,
                  pointerEvents: settled ? "auto" : "none",
                  marginLeft: "30px",
              }}>
                  <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '1.5rem' }}>The Discipline</span>
                  <h2 style={{
                      fontFamily: "var(--ix-font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 3.2vw, 3.4rem)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      color: "#424242",
                      marginBottom: "0.8rem",
                  }}>
                      Engineering Intelligent
                      <br />
                      <em style={{
                          fontFamily: "var(--ix-font-serif)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: "#424242",
                      }}>
                          Growth Blueprints
                      </em>
                  </h2>
                  <p style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6 }}>Engineering intelligent business systems that attract, engage, convert, and scale.</p>
              </div>

              <div style={{
                  position: "absolute",
                  left: "8vw",
                  right: "8vw",
                  top: settled ? "calc(66vh + 5vh)" : "calc(105vh)",
                  opacity: settled ? 1 : 0,
                  transform: settled ? "translateY(0px)" : "translateY(10px)",
                  transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
                  pointerEvents: settled ? "auto" : "none",
                  zIndex: 3,
                  marginTop: "40px",
              }}>
                  <div style={{ maxWidth: 1200, margin: '0 auto', background: '#f5f5f5', borderRadius: 16, padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                      <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.95rem', color: '#555', lineHeight: 1.6, flex: '1 1 500px', margin: 0 }}>
                          Infynix engineers high-performance tech stacks, CRM dashboards, and AI agents that support long-term business growth.
                      </p>
                      <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1.5rem', background: '#fff', color: '#111', textDecoration: 'none', borderRadius: 30, border: '1px solid #ddd', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                          Book a Discovery Call <Arrow />
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* ══ LIME QUOTE SECTION ══ */}
      <section className="ix-section" data-aos="fade-up" style={{ position: "relative", background: 'rgb(61, 33, 112)', textAlign: 'left', padding: 'clamp(60px, 8vw, 100px) 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', padding: '0 40px 0 100px', zIndex: 2 }}>
          <span style={{ position: 'absolute', top: -30, left: '30px', fontSize: '5rem', color: 'var(--ix-lime)', lineHeight: 1, fontFamily: 'var(--ix-font-serif)', opacity: 0.8 }}>"</span>
          <blockquote style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.4, margin: '2rem 0' }}>
            Growth isn't achieved through isolated services. It is built through connected systems, strategic thinking, and continuous improvement. Technology × AI × Performance × Automation = Sustainable Business Growth.
          </blockquote>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginTop: '3rem' }}>
            Infynix Growth Engineers
          </p>
          <span style={{ position: 'absolute', bottom: -10, right: '40px', fontSize: '5rem', color: 'var(--ix-lime)', lineHeight: 1, fontFamily: 'var(--ix-font-serif)', opacity: 0.8 }}>"</span>
        </div>
      </section>

      {/* ══ MARQUEE TICKER ══ */}
      <div className="ix-marquee-wrapper">
        <div className="ix-marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="ix-marquee-item" key={i}>
              {item}
              <span className="ix-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ══ WHY SECTION ══ */}
      <section className="ix-section" style={{ background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <span className="ix-lime-bar" />
            <h2 data-aos="fade-up" style={{
              fontFamily: 'var(--ix-font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              lineHeight: 1.12,
              color: '#0a0a0a',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              Why Businesses<br />
              <em style={{ fontFamily: 'var(--ix-font-serif)', fontWeight: 400, fontStyle: 'italic' }}>Stop Growing</em>
            </h2>
            <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.97rem', color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
              Businesses don't struggle because they lack ambition. They struggle because technology, marketing, customer experience, operations and data often operate independently.
            </p>
            <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.97rem', color: '#555', lineHeight: 1.8, marginBottom: '2rem' }}>
              Standard monitoring fails to capture deep operational inefficiencies, leaving organizations blind to critical bottlenecks. We engineer frameworks that merge edge intelligence, real-time feedback telemetry, and dynamic load-balancing growth systems to automate intelligence.
            </p>
            <Link to="/contact" className="ix-btn-outline ix-btn-outline-dark" data-aos-delay="300" data-aos="fade-up" style={{ textDecoration: 'none' }}>
              Start the Conversation <Arrow />
            </Link>
          </div>

          {/* Stats Glassmorphism over Image */}
          <div className="-right" data-aos="fade-up" style={{ 
            position: 'relative', 
            borderRadius: '24px', 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '2.5rem',
            minHeight: '520px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            {/* Background Image */}
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                 alt="Business Growth Analytics" 
                 style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
            
            {/* Dark gradient overlay for readability */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }} />
            
            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
              <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ix-lime)', fontWeight: 800, display: 'block', marginBottom: '1.5rem' }}>Impact Metrics</span>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, background 0.3s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                  >
                    <span style={{ fontFamily: 'var(--ix-font-display)', fontSize: '2.5rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{s.num}</span>
                    <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FULL-BLEED IMAGE COMBINED ══ */}
      <section style={{ minHeight: '85vh', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
          alt="Integrated growth structures"
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
        
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4rem', padding: '10vh 5vw', minHeight: '70vh' }}>
          
          {/* Top Left Content */}
          <div data-aos="fade-up" style={{ alignSelf: 'flex-start', maxWidth: '600px' }}>
            <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
              <strong style={{ color: '#fff' }}>The Cost of Disconnected Systems:</strong> fragmentations in <br />client checkout 
              pages, manual inventory updates, and <br /> delayed sales lead alerts. We solve these friction points <br /> by designing custom Growth Systems frameworks that <br /> focus on resilient system metrics and secure data routing,<br /> moving far beyond standard cloud configurations.
            </p>
          </div>

          {/* Bottom Right Content */}
          <div className="-right" data-aos="fade-up" style={{ alignSelf: 'flex-end', maxWidth: '700px', textAlign: 'left' }}>
            <blockquote style={{
              fontFamily: 'var(--ix-font-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.4,
              margin: 0
            }}>
              "Growth Engineering is the discipline of <br />designing, building and continuously <br />improving interconnected business <br />systems that create sustainable growth."
            </blockquote>
          </div>
          
        </div>
      </section>

      {/* ══ 7-STAGE METHOD ══ */}
      <section id="method" className="ix-section" style={{ background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="ix-lime-bar" />
            <h2 data-aos="fade-up" style={{
              fontFamily: 'var(--ix-font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#0a0a0a',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              The Infynix Growth<br />
              <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Engineering Method</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, overflow: 'hidden' }}>
            {stages.map((stage, i) => (
              <div
                key={stage.n}
                className={`ix-d${Math.min(i + 1, 7)} data-aos="fade-up"`}
                style={{
                  background: '#fff',
                  padding: '2.2rem',
                  transition: 'background 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--ix-black)'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                onMouseEnterCapture={e => {
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#fff';
                  if (body) body.style.color = 'rgba(255,255,255,0.5)';
                  if (num) num.style.color = 'var(--ix-lime)';
                }}
                onMouseLeaveCapture={e => {
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#0a0a0a';
                  if (body) body.style.color = '#666';
                  if (num) num.style.color = 'rgba(0,0,0,0.18)';
                }}
              >
                <div className="ge-num" style={{ fontFamily: 'var(--ix-font-display)', fontSize: '3rem', fontWeight: 800, color: 'rgba(0,0,0,0.08)', lineHeight: 1, marginBottom: '1rem', transition: 'color 0.25s' }}>{stage.n}</div>
                <h3 className="ge-title" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#0a0a0a', marginBottom: '0.6rem', transition: 'color 0.25s' }}>{stage.title} Stage</h3>
                <p className="ge-body" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.88rem', color: '#666', lineHeight: 1.7, transition: 'color 0.25s' }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONNECT FORM (WHITE LAYOUT) ══ */}
      <section id="download" className="ix-section" style={{ background: '#fafafa', position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{
            fontFamily: 'var(--ix-font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            color: '#111',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Connect With Us
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '800px' }}>
            Speak directly with our senior technologists. We will perform a thorough technical audit of your landing pages, database latency, and lead sync workflows.
          </p>

          <div data-aos-delay="300" data-aos="fade-up" style={{ padding: '0' }}>
            <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#111', marginBottom: '2.5rem' }}>Schedule a Session</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 4rem' }}>
              {[
                { label: 'Name', type: 'text' },
                { label: 'Work Email', type: 'email' },
                { label: 'Phone Number', type: 'tel' },
                { label: 'Company Name', type: 'text' },
              ].map(({ label, type }) => (
                <div key={label}>
                  <input
                    type={type}
                    placeholder={label}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #ddd',
                      padding: '0.5rem 0',
                      color: '#333',
                      fontFamily: 'var(--ix-font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderBottom = '1px solid #111'}
                    onBlur={(e) => e.target.style.borderBottom = '1px solid #ddd'}
                  />
                </div>
              ))}
            </div>
            <button style={{ 
                marginTop: '4rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '0.85rem 1.8rem', 
                background: '#fff', 
                color: '#111', 
                borderRadius: '30px', 
                border: '1px solid #ddd', 
                fontWeight: 600, 
                fontSize: '0.95rem', 
                fontFamily: 'var(--ix-font-body)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.background = '#fff'}
            >
              Book Discovery Session <Arrow />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthEngineering;

