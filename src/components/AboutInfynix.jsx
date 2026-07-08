import React from 'react';
import './AboutInfynix.css';
import videoSrc from '../assets/video.mp4'; 

const AboutInfynix = () => {
  return (
    <section className="about-infynix-section">
      <div className="ind-glow"></div>
      <div className="about-infynix-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Left Column: Text Content */}
        <div className="about-infynix-text-col" data-aos="fade-right" data-aos-duration="800">
          <div className="about-eyebrow-row">
            <span className="about-eyebrow">THE GROWTH ENGINEERING METHOD</span>
          </div>
          
          <h2 className="about-heading">
            Disconnected investments<br/>create disconnected growth.
          </h2>
          
          <p className="about-paragraph">
            Businesses don't struggle because they lack ambition. They struggle because technology, marketing, customer experience, operations and data often operate independently. Growth Engineering is the discipline of designing, building, and continuously improving interconnected business systems that create sustainable growth.
          </p>

          <div className="about-buttons">
            <button className="about-btn primary outline-btn-hover" onClick={() => window.location.href = '/growth-engineering'}>Explore the Methodology</button>
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
