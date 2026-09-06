import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

const PILLARS = ['Marketing', 'Software', 'AI Surveillance'];

const REGIONS = ['Kerala', 'GCC', 'United Kingdom'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'INFYNIX SOLUTIONS — THE GROWTH ENGINEERING COMPANY';

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title">
            Growth Engineering & <span className="title-highlight">Digital Marketing Agency</span> in Kerala
          </h1>

          <p style={{ color: '#ccc', fontSize: '1.05rem', marginTop: '1rem', marginBottom: '1.8rem', maxWidth: '650px', lineHeight: 1.6, fontFamily: 'var(--ix-font-body)' }}>
            We engineer technical search dominance, performance ad campaigns, custom software, and real-time AI security systems.
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
              Explore Growth Engineering
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
