import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

// Three words, no explanation. The hero states the position; the sections below
// it do the explaining. Anything longer here dilutes the one line that matters.
const PILLARS = ['Marketing', 'Software', 'AI Surveillance'];

// Where the company operates. Also the only place on the homepage that names the
// three markets, which matters for entity signals as much as for the narrative.
const REGIONS = ['Kerala', 'GCC', 'United Kingdom'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'A GROWTH ENGINEERING COMPANY';

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title">
            Growth is <span className="title-highlight">engineered</span>,
            <br />
            not advertised.
          </h1>

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
              What Growth Engineering Means
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
