import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


const TypewriterTitle = ({ firstPart, secondPart }) => {
  const [displayedFirst, setDisplayedFirst] = useState('');
  const [displayedSecond, setDisplayedSecond] = useState('');

  useEffect(() => {
    setDisplayedFirst('');
    setDisplayedSecond('');
    let i = 0;
    let j = 0;
    const totalFirst = firstPart.length;
    const totalSecond = secondPart.length;

    const timer = setInterval(() => {
      if (i < totalFirst) {
        // Typing first part
        setDisplayedFirst((prev) => firstPart.slice(0, prev.length + 1));
        i++;
      } else if (j < totalSecond) {
        // Typing second part
        setDisplayedSecond((prev) => secondPart.slice(0, prev.length + 1));
        j++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [firstPart, secondPart]);

  return (
    <>
      {displayedFirst}
      {displayedFirst.length === firstPart.length && ' '}
      <span className="title-break">{displayedSecond}</span>
      <span className="typewriter-cursor"></span>
    </>
  );
};

function HeroSection({ data }) {
  // Get just the first slide to use as the static image
  const staticSlide = data?.slides && data.slides.length > 0 ? data.slides[0] : null;

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

  if (!staticSlide) return null;

  // Function to split title for typewriter
  const renderTitle = (title) => {
    if (!title) return null;
    const words = title.split(' ');
    if (words.length <= 1) {
       return (
         <>
           {title}
           <span className="typewriter-cursor">|</span>
         </>
       );
    }
    
    const mid = Math.ceil(words.length / 2);
    const firstPart = words.slice(0, mid).join(' ');
    const secondPart = words.slice(mid).join(' ');
    
    return <TypewriterTitle firstPart={firstPart} secondPart={secondPart} />;
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">Growth Engineering Company</div>
          <h1 className="hero-title">
            {renderTitle("Engineering Intelligent Growth Systems for Businesses Built to Scale.")}
          </h1>
          <p className="hero-subtitle">
            Businesses don't struggle because they lack ambition. They struggle because technology, marketing, customer experience, operations and data often operate independently. Infynix engineers these into one intelligent system that enables sustainable business growth.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handlePrimaryClick}>
              Book a Discovery Call
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.href = '/growth-engineering'}>
              Learn About Growth Engineering
            </button>
          </div>
        </div>
      </div>
      
      {/* Static Image */}
      <div className="hero-image-wrapper">
        <img src={getImgUrl(staticSlide?.image)} alt="Hero visual" />
      </div>
    </section>
  );
}

export default HeroSection;
