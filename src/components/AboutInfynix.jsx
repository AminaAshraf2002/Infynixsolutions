import React, { useEffect, useRef, useState } from 'react';
import './AboutInfynix.css';
import videoSrc from '../assets/video.mp4'; 

const AboutInfynix = () => {
  // This clip is 2.6 MB and sits below the fold. `autoPlay` makes the browser
  // fetch it in full on load regardless of the `preload` hint, so it accounted
  // for most of the homepage's transfer weight. Attaching src only once the
  // element is near the viewport defers that cost until it is actually needed.
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
            <span className="about-eyebrow">THE GROWTH ENGINEERING METHOD</span>
          </div>
          
          <h2 className="about-heading">
            Broken tools<br/>stop your growth.
          </h2>
          
          <p className="about-paragraph">
            We are a Growth Engineering team. We stop you from wasting money on broken systems. We connect your marketing, sales, and tech so they work as one. When everything connects, your business grows faster.
          </p>

          <div className="about-buttons">
            <button className="about-btn primary outline-btn-hover" onClick={() => window.location.href = '/growth-engineering'}>Explore the Methodology</button>
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
