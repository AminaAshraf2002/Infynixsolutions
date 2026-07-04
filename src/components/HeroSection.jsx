import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function HeroSection({ data }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (data && data.slides) {
      setServices(data.slides);
    }
  }, [data]);

  useEffect(() => {
    if (!services || services.length <= 1) return;
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % services.length);
        setFade(true);
      }, 500); // match css transition
    }, 5000);
    return () => clearInterval(timer);
  }, [services]);

  const getImgUrl = (path) => {
    if (!path) return "";
    const formatted = path.replace(/\\/g, "/");
    if (formatted.startsWith("http") || formatted.startsWith("/") || formatted.startsWith("data:")) {
      return formatted;
    }
    return `${SERVER_URL}/${formatted}`;
  };

  const globalLink = data?.sectionLink || "/contact";
  const handlePrimaryClick = () => {
    if (globalLink.startsWith('http')) {
      window.open(globalLink, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = globalLink;
    }
  };

  if (!services || services.length === 0) return null;

  const currentSlide = services[currentSlideIndex];

  // Function to split title and highlight the second half with line break
  const renderTitle = (title) => {
    if (!title) return null;
    const words = title.split(' ');
    if (words.length <= 1) return <span>{title}</span>;
    
    const mid = Math.ceil(words.length / 2);
    const firstPart = words.slice(0, mid).join(' ');
    const secondPart = words.slice(mid).join(' ');
    
    return (
      <>
        {firstPart} <br className="title-break" />
        <span className="highlight-text">{secondPart}</span>
      </>
    );
  };

  return (
    <section className="hero-section">
      {/* Background Image Area (Right Side focused) */}
      <div 
        className={`hero-bg-image ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${getImgUrl(currentSlide?.image)})` }}
      >
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-container">
        <div className={`hero-content ${fade ? 'fade-in-up' : 'fade-out-down'}`}>
          <h1 className="hero-title">
            {renderTitle(currentSlide?.title)}
          </h1>
          <p className="hero-subtitle">
            {currentSlide?.subtitle}
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handlePrimaryClick}>
              Know More
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href = '/services'}>
              Our Services
            </button>
          </div>

          <div className="hero-trust">
            <span className="trust-text">Trustpilot</span>
            <div className="trust-stars">
              <span>★★★★★</span> 5 Star
            </div>
            <span className="trust-divider">|</span>
            <span className="trust-text">Clutch</span>
            <div className="trust-stars">
              <span>★★★★★</span> 5 Star
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="hero-indicators">
        {services.map((_, idx) => (
          <div 
            key={idx} 
            className={`indicator-dot ${idx === currentSlideIndex ? 'active' : ''}`}
            onClick={() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentSlideIndex(idx);
                    setFade(true);
                }, 500);
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
