import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

const REGIONS = ['United Kingdom', 'United Arab Emirates', 'India'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'INFYNIX SOLUTIONS';

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title">
            The Growth <span className="title-highlight">Engineering</span> Company
          </h1>

          <p style={{ color: '#ccc', fontSize: '1.05rem', marginTop: '0.8rem', marginBottom: '2.2rem', maxWidth: '500px', lineHeight: 1.5, fontFamily: 'var(--ix-font-body)' }}>
            Software, AI vision, and retail growth systems.
          </p>

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
