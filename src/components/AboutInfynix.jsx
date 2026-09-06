import React, { useEffect, useRef, useState } from 'react';
import './AboutInfynix.css';
import videoSrc from '../assets/video.mp4'; 

const AboutInfynix = () => {
  const videoWrapRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVideoReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-infynix-section">
      <div className="ind-glow"></div>
      <div className="about-infynix-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Left Column: Text Content */}
        <div className="about-infynix-text-col" data-aos="fade-right" data-aos-duration="800">
          <div className="about-eyebrow-row">
            <span className="about-eyebrow">INFYNIX SOLUTIONS: THE GROWTH ENGINEERING COMPANY</span>
          </div>
          
          <h2 className="about-heading">
            Unified Infrastructure<br/>Engineered for Scale.
          </h2>
          
          <p className="about-paragraph">
            Infynix Solutions is a Growth Engineering company. We unify technical SEO engineering, performance media, custom web/app software, and AI surveillance solutions into one resilient growth ecosystem built to dominate your industry.
          </p>

          <div className="about-buttons">
            <button className="about-btn primary outline-btn-hover" onClick={() => window.location.href = '/growth-engineering'}>Explore Growth Engineering</button>
          </div>
        </div>

        {/* Right Column: Video Container */}
        <div className="about-infynix-media-col" data-aos="fade-left" data-aos-duration="800">
          <div className="about-media-wrapper" ref={videoWrapRef}>
            <video
              src={videoReady ? videoSrc : undefined}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="about-video"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutInfynix;
