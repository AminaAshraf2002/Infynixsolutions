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
            <span className="about-eyebrow">INFYNIX SOLUTIONS</span>
          </div>
          
          <h2 className="about-heading">
            Systems built<br/>for real growth.
          </h2>
          
          <p className="about-paragraph">
            We build high-speed web apps, search architecture, targeted paid campaigns, and AI vision systems. No filler, no disconnected tools, just solid engineering designed to get results.
          </p>

          <div className="about-buttons">
            <button className="about-btn primary outline-btn-hover" onClick={() => window.location.href = '/growth-engineering'}>See How We Work</button>
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
