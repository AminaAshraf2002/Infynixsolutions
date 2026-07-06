import React from 'react';
import './AboutInfynix.css';
import videoSrc from '../assets/video.mp4'; 

const AboutInfynix = () => {
  return (
    <section className="about-infynix-section">
      <div className="about-infynix-container">
        
        {/* Left Column: Text Content */}
        <div className="about-infynix-text-col" data-aos="fade-right" data-aos-duration="800">
          <div className="about-eyebrow-row">
            <span className="about-eyebrow">INFYNIX SOLUTIONS</span>
            <span className="about-badge">NEW</span>
          </div>
          
          <h2 className="about-heading" style={{ whiteSpace: 'nowrap' }}>
            Self-improving AI agents<br/>
            on any platform
          </h2>
          
          <p className="about-paragraph">
            Leverage AI agents that learn and improve on any platform. Powered by the Infynix Resolution Learning Loop, every resolution makes the next one better, improving performance over time.
          </p>

          <div className="about-buttons">
            <button className="about-btn primary">Request demo</button>
            <button className="about-btn secondary">Learn more</button>
          </div>
        </div>

        {/* Right Column: Video Container */}
        <div className="about-infynix-media-col" data-aos="fade-left" data-aos-duration="800">
          <div className="about-media-wrapper">
            <video 
              src={videoSrc}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="about-video"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutInfynix;
