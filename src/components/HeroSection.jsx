import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

// The three practices, as real text rather than a graphic: crawlable,
// translatable and weightless. The five-stage method is not repeated here
// because the section directly below the hero already carries it.
const PILLARS = ['Marketing & Media', 'Software & Platforms', 'AI Vision & Surveillance'];

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
            Growth Engineering.
            <br />
            <span className="title-highlight">A discipline we are building.</span>
          </h1>

          <p className="hero-subtitle">
            Marketing wins attention. Software creates leverage. AI tells you what
            is actually happening. Most companies buy the three from three
            different vendors, then wonder why none of it compounds. We engineer
            them as one system.
          </p>

          <ol className="hero-method" aria-label="What we build">
            {PILLARS.map((pillar, index) => (
              <li key={pillar} className="hero-method-item">
                <span className="hero-method-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="hero-method-label">{pillar}</span>
              </li>
            ))}
          </ol>

          <p className="hero-claim">
            A category we are building rather than borrowing. Engineered in Kochi,
            for clients across Kerala, the Gulf and the United Kingdom.
          </p>

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
