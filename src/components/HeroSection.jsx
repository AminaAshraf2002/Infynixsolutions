import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

const PILLARS = ['Software', 'AI Surveillance', 'Marketing & SEO'];

const REGIONS = ['Kerala', 'GCC', 'United Kingdom'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'INFYNIX SOLUTIONS — SOFTWARE & AI ENGINEERING';

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title">
            Software Engineering, <span className="title-highlight">AI Surveillance</span> & Growth Systems
          </h1>

          <p style={{ color: '#ccc', fontSize: '1.05rem', marginTop: '1rem', marginBottom: '1.8rem', maxWidth: '680px', lineHeight: 1.6, fontFamily: 'var(--ix-font-body)' }}>
            Custom software development, real-time edge AI security systems, technical search pre-rendering, and performance marketing.
          </p>

          <ol className="hero-method" aria-label="What we build">
            {PILLARS.map((pillar, index) => (
              <li key={pillar} className="hero-method-item">
                <span className="hero-method-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="hero-method-label">{pillar}</span>
              </li>
            ))}
          </ol>

          <div className="hero-actions">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Book a Discovery Call
            </Link>
            <Link to="/growth-engineering" className="hero-btn hero-btn-ghost">
              Explore Growth Systems
            </Link>
          </div>

          <ul className="hero-regions" aria-label="Where we operate">
            {REGIONS.map((region) => (
              <li key={region} className="hero-region">{region}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
