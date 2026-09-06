import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroBackground from './HeroBackground';

// The five stages of the Growth Engineering method. Rendered as real text rather
// than an image, so it is crawlable, translatable and weighs nothing.
const METHOD = ['Attract', 'Engage', 'Convert', 'Optimise', 'Scale'];

function HeroSection({ data }) {
  const eyebrow = data?.eyebrow || 'GROWTH ENGINEERING COMPANY';

  return (
    <section className="hero-section">
      <div className="hero-stage">
        <HeroBackground />
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">{eyebrow}</span>

          <h1 className="hero-title">
            Creative that performs.
            <br />
            <span className="title-highlight">Systems that compound.</span>
          </h1>

          <p className="hero-subtitle">
            We are a marketing and media agency with an engineering team behind it.
            Brand, content and campaigns at the front. Connected data, automation
            and platforms underneath. So every rupee you spend keeps working long
            after the campaign ends.
          </p>

          <ol className="hero-method" aria-label="The Growth Engineering method">
            {METHOD.map((stage, index) => (
              <li key={stage} className="hero-method-item">
                <span className="hero-method-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="hero-method-label">{stage}</span>
              </li>
            ))}
          </ol>

          <div className="hero-actions">
            <Link to="/contact" className="hero-btn hero-btn-primary">
              Book a Discovery Call
            </Link>
            <Link to="/growth-engineering" className="hero-btn hero-btn-ghost">
              The Growth Engineering Method
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
