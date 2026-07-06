import React from 'react';
import './HeroSection.css';
import heroBg from '../assets/newh.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function HeroSection({ data }) {
  // Use first slide or fallback to heroBg
  const staticSlide = data?.slides && data.slides.length > 0 ? data.slides[0] : { image: heroBg };

  const getImgUrl = (path) => {
    if (!path) return "";
    const formatted = path.replace(/\\/g, "/");
    if (formatted.startsWith("http") || formatted.startsWith("/") || formatted.startsWith("data:")) {
      return formatted;
    }
    return `${SERVER_URL}/${formatted}`;
  };

  const handlePrimaryClick = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper" style={{ backgroundImage: `url(${getImgUrl(staticSlide?.image)})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">GROWTH ENGINEERING COMPANY</span>
          <h1 className="hero-title">
            Move beyond deflection. Deliver <br/>
            <span className="title-highlight">real resolutions.</span>
          </h1>
          <p className="hero-subtitle">
            Self-Improving AI agents that learn, adapt and outperform.<br/>
            On every channel, on any platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
