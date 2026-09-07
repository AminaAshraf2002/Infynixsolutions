import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

/* ── DATA ── */
const stages = [
  { n: '01', title: 'Audit', body: 'We review your site speed, search rankings, ad setup, and software tools to spot exact fixes.' },
  { n: '02', title: 'Plan', body: 'We map out a clear roadmap for search engineering, paid media, and software improvements.' },
  { n: '03', title: 'Design', body: 'We create clean layouts, brand visual assets, and high-converting landing pages.' },
  { n: '04', title: 'Build', body: 'We write clean, production-ready code in React, Next.js, and Node.js built for sub-second speeds.' },
  { n: '05', title: 'Launch', body: 'We roll out static pre-rendered pages with complete search tags and analytics tracking.' },
  { n: '06', title: 'Optimize', body: 'We refine user flows, speed up load times, and tune ad campaigns to lower acquisition costs.' },
  { n: '07', title: 'Scale', body: 'We add automated software workflows and AI agents to handle higher client volumes.' },
];

/* ── HOOKS ── */
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

  const [activeWhyTab, setActiveWhyTab] = useState(0);

  const whyTabsData = [
    {
      title: "SEO Engineering",
      mockupIcon: "fa-solid fa-magnifying-glass",
      capability: "Search Infrastructure & Ranking",
      details: "Fast page loading, clean pre-rendering, and structured search tags built to get your site ranking at the top of Google.",
      heading: "Turn search engines into your most consistent source of new clients."
    },
    {
      title: "Infynix Agency",
      mockupIcon: "fa-solid fa-bullhorn",
      capability: "Paid Media & Lead Flow",
      details: "Meta and Google campaigns targeted directly at high-intent buyers, backed by clear tracking and lower lead costs.",
      heading: "Clear ad budgets, tracked conversions, and steady client acquisition."
    },
    {
      title: "Infynix Media",
      mockupIcon: "fa-solid fa-film",
      capability: "Branding & Visual Content",
      details: "Clean UI design, brand films, and short video content that make your company look premium and build trust.",
      heading: "Design that looks modern, communicates value, and drives action."
    },
    {
      title: "Infynix Growth Solutions",
      mockupIcon: "fa-solid fa-code",
      capability: "Custom Web & App Development",
      details: "React and Next.js web applications, mobile apps, and automated workflows built to handle heavy daily workloads.",
      heading: "Custom software that takes care of manual tasks so your team can focus on growth."
    },
    {
      title: "AI Surveillance",
      mockupIcon: "fa-solid fa-shield-halved",
      capability: "Computer Vision Security",
      details: "Real-time edge security processing on local hardware that detects threats instantly on your current camera network.",
      heading: "Active facility security that alerts your team before incidents happen."
    }
  ];

  const [settled, setSettled] = useState(false);
  const [whyScrollProgress, setWhyScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const whyRef = useRef(null);
  const TRANSITION = "all 0.75s cubic-bezier(0.4, 0, 0.2, 1)";
  const TRANSITION_SLOW = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
  const GREEN = "#007A5E";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSettled(-rect.top > 80);
      }
      if (whyRef.current) {
        const rect = whyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollDistance = windowHeight * 0.5;

        if (rect.top > 0) {
          setWhyScrollProgress(0);
        } else if (rect.top <= -scrollDistance) {
          setWhyScrollProgress(1);
        } else {
          const progress = -rect.top / scrollDistance;
          setWhyScrollProgress(progress);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Growth Engineering & SEO Services',
    'provider': { '@type': 'Organization', 'name': 'Infynix Solutions', 'url': 'https://www.infynix-solutions.com' },
    'description': 'Infynix Solutions is a Growth Engineering Company. We build fast websites, search architecture, paid media campaigns, and AI software.',
    'serviceType': 'Growth Engineering',
  };

  return (
    <>
      <SEOManager
        title="Growth Engineering & SEO Company | Infynix Solutions"
        description="Infynix Solutions is a Growth Engineering company. We build fast websites, search architecture, paid media campaigns, and AI vision systems."
        canonicalUrl="https://www.infynix-solutions.com/growth-engineering"
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
          <div
            className="ge-hero-text-1" 
            style={{
            opacity: settled ? 0 : 1,
            transform: settled ? "translateY(-30px)" : "translateY(0px)",
            transition: TRANSITION,
            zIndex: 4,
            pointerEvents: "none",
          }}>
            <h1 className="ge-hero-h1" style={{
              fontFamily: '"Montserrat", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 4.9vw, 4.7rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#4d4c4c",
              whiteSpace: "nowrap",
            }}>
              Infynix{" "}
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: GREEN,
              }}>
                Solutions
              </em>
            </h1>

            <h2 className="ge-hero-h2" style={{
              fontFamily: '"Montserrat", Arial, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 3.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#353434",
            }}>
              The Growth Engineering Company
              <br />
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#353434",
                marginTop: "10px",
                display: 'inline-block'
              }}>
                SEO, Software & Media
              </em>
            </h2>

            <p className="ge-hero-p" style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6 }}>
              We build fast websites, smart search setups, targeted ads, and AI software.
            </p>
          </div>

          <div
            className={`ge-hero-image ${settled ? 'settled' : ''}`}
            style={{
            transition: TRANSITION_SLOW,
            zIndex: 2,
          }}>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Infynix Growth Engineering"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center 20%",
                display: "block",
              }}
            />
          </div>

          <div
            className="ge-hero-text-2"
            style={{
            opacity: settled ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
            zIndex: 3,
            pointerEvents: settled ? "auto" : "none",
          }}>
            <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '1.5rem' }}>Our Work</span>
            <h2 style={{
              fontFamily: "var(--ix-font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#424242",
              marginBottom: "0.8rem",
            }}>
              SEO Engineering &
              <br />
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#424242",
              }}>
                Connected Systems
              </em>
            </h2>
            <p style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6 }}>Building clean digital systems that help your business rank high and get clients.</p>
          </div>

          <div className={`ge-hero-text-3 ${settled ? 'settled' : ''}`} style={{
            position: "absolute",
            left: "8vw",
            right: "8vw",
            opacity: settled ? 1 : 0,
            pointerEvents: settled ? "auto" : "none",
            zIndex: 3,
            marginTop: "40px",
            transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
          }}>
            <div className="ge-hero-box-inner" style={{ maxWidth: 1200, margin: '0 auto', background: '#f5f5f5', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <p className="ge-hero-box-text" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                Infynix Solutions builds search infrastructure, high-speed web apps, paid media campaigns, and AI security systems designed for long-term growth.
              </p>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1.5rem', background: '#fff', color: '#111', textDecoration: 'none', borderRadius: 30, border: '1px solid #ddd', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                Book a Call <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LIME BANNER ══ */}
      <section className="ix-section ge-lime-section" data-aos="fade-up" style={{ position: "relative", background: 'rgb(198, 255, 109)', textAlign: 'left', padding: 'clamp(60px, 8vw, 100px) 20px', overflow: 'hidden' }}>
        <div className="ge-lime-quote-container" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#000000ff', lineHeight: 1.4, margin: '2rem 0' }}>
            Real growth comes from clear engineering. We connect your search, media, and software so your business works smoothly every day.
          </blockquote>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0, 0, 0, 0.9)', marginTop: '3rem' }}>
            Infynix Solutions
          </p>
        </div>
      </section>

      {/* ══ PINNED SCROLL SHOWCASE ══ */}
      <div ref={whyRef} style={{ position: 'relative', height: '200vh' }}>
        <div style={{
          position: 'sticky',
          top: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '90px'
        }}>
          <section className="ix-section" style={{ padding: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{
              width: whyScrollProgress === 1 ? '100%' : `calc(100% - ${40 * (1 - whyScrollProgress)}px)`,
              maxWidth: whyScrollProgress === 0 ? '1100px' : (whyScrollProgress === 1 ? '100%' : `calc(1100px + (100vw - 1100px) * ${whyScrollProgress})`),
              background: 'linear-gradient(160deg, #005A46 0%, #007A5E 55%, #004d3a 100%)',
              borderRadius: `${32 * (1 - whyScrollProgress)}px`,
              padding: 'clamp(24px, 3vw, 40px) clamp(20px, 4vw, 40px) clamp(24px, 3vw, 40px)',
              margin: '0 auto',
              boxShadow: whyScrollProgress < 1 ? '0 20px 40px rgba(0,0,0,0.2)' : 'none'
            }}>

              {/* Header part */}
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2.5rem' }}>
                <h2 data-aos="fade-up" style={{
                  fontFamily: '"Montserrat", Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2.1rem, 3.7vw, 2.3rem)',
                  lineHeight: 1.16,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}>
                  Five Core <em style={{ fontStyle: 'normal', fontWeight: 600 }}>Capabilities</em>
                </h2>
                <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: '"Montserrat", Arial, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  Everything your business needs to rank high, capture leads, and run efficiently.
                </p>
                <div data-aos-delay="200" data-aos="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Link to="/contact" style={{
                    background: 'rgb(167, 214, 0)',
                    color: '#000',
                    padding: '14px 28px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontFamily: '"Montserrat", Arial, sans-serif',
                    transition: 'background 0.3s'
                  }}>Talk with Us</Link>
                  <Link to="/solutions" style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#fff',
                    padding: '14px 28px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontFamily: '"Montserrat", Arial, sans-serif',
                    transition: 'background 0.3s'
                  }}>View Solutions</Link>
                </div>
              </div>

              {/* Tabs grid container */}
              <div style={{
                background: 'rgba(0,0,0,0.15)',
                borderRadius: '24px',
                padding: 'clamp(0.8rem, 1.5vw, 1.5rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                border: '1px solid rgba(255,255,255,0.05)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {/* Left Column: Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {whyTabsData.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveWhyTab(idx)}
                      style={{
                        background: activeWhyTab === idx ? 'rgba(0,0,0,0.15)' : 'transparent',
                        border: 'none',
                        borderLeft: activeWhyTab === idx ? '3px solid var(--ix-lime)' : '3px solid transparent',
                        padding: '1rem',
                        textAlign: 'left',
                        color: '#fff',
                        cursor: 'pointer',
                        fontFamily: '"Montserrat", Arial, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        borderBottom: idx !== whyTabsData.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none'
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                {/* Right Column: Tab Content */}
                <div style={{
                  background: 'rgba(0,0,0,0.15)',
                  borderRadius: '16px',
                  padding: 'clamp(1.2rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '320px',
                  position: 'relative'
                }}>
                  <div key={activeWhyTab} style={{
                    background: '#1b231c',
                    borderRadius: '24px',
                    padding: '16px',
                    width: '100%',
                    maxWidth: '280px',
                    height: '340px',
                    boxShadow: '0 0 60px rgba(167, 214, 0, 0.25)',
                    position: 'relative',
                    zIndex: 2,
                    animation: 'ix-fade-up 0.4s ease-out forwards',
                    fontFamily: '"Montserrat", Arial, sans-serif'
                  }}>
                    <div style={{
                      background: '#fff',
                      borderRadius: '16px',
                      height: '100%',
                      padding: '20px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ fontSize: '0.75rem', color: '#007A5E', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {whyTabsData[activeWhyTab].title}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: '#111', fontWeight: 800, lineHeight: 1.3 }}>
                        {whyTabsData[activeWhyTab].capability}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.5, flex: 1 }}>
                        {whyTabsData[activeWhyTab].details}
                      </div>
                    </div>
                  </div>

                  <div key={`heading-${activeWhyTab}`} style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '500px', animation: 'ix-fade-up 0.5s ease-out forwards' }}>
                    <p style={{ fontFamily: '"Montserrat", Arial, sans-serif', fontSize: '1rem', color: '#fff', lineHeight: 1.5, margin: 0 }}>
                      {whyTabsData[activeWhyTab].heading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ══ 7 STAGE METHOD ══ */}
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
              Our 7 Step<br />
              <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Working Process</em>
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
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--ix-black)';
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#fff';
                  if (body) body.style.color = 'rgba(255,255,255,0.7)';
                  if (num) num.style.color = 'var(--ix-lime)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#fff';
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#0a0a0a';
                  if (body) body.style.color = '#666';
                  if (num) num.style.color = 'rgba(0,0,0,0.18)';
                }}
              >
                <div className="ge-num" style={{ fontFamily: 'var(--ix-font-display)', fontSize: '3rem', fontWeight: 800, color: 'rgba(0,0,0,0.08)', lineHeight: 1, marginBottom: '1rem', transition: 'color 0.25s' }}>{stage.n}</div>
                <h3 className="ge-title" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#0a0a0a', marginBottom: '0.6rem', transition: 'color 0.25s' }}>{stage.title}</h3>
                <p className="ge-body" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.88rem', color: '#666', lineHeight: 1.7, transition: 'color 0.25s' }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONNECT FORM ══ */}
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
            Get In Touch
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '800px' }}>
            Schedule a conversation with our team. We will review your website performance, search rankings, and growth goals.
          </p>

          <div data-aos-delay="300" data-aos="fade-up" style={{ padding: '0' }}>
            <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#111', marginBottom: '2.5rem' }}>Send Us a Message</h3>
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
