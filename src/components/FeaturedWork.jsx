import { useEffect, useRef } from 'react';
import { useIxReveal } from './WhoWeAre';
import work1Png from '../assets/work.svg';
import work1Mp4 from '../assets/work1.mp4';

const FeaturedWork = () => {
  useIxReveal();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          video.play().catch((err) => {
            console.log("Autoplay check:", err);
          });
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured">
      <div className="featured-inner">
        <div className="feat-label" data-aos="fade-up">Featured Work</div>

        {/* Project 1 */}
        <div className="feat-project" data-aos-delay="100" data-aos="fade-up">
          <div className="feat-meta-row">
            <div className="feat-dot"></div>
            <span className="feat-category">E-Commerce</span>
            <span className="feat-year">2024</span>
            <span className="feat-badge">Innovation</span>
          </div>
          <div className="feat-title-row">
            <h3 className="feat-title">Experiential Platform and Loyalty Engine for a Leading Global Beauty Retailer</h3>
            <a href="#" className="feat-view-btn">
              View Project
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 13L13 1M13 1H5M13 1v8" />
              </svg>
            </a>
          </div>
          <div className="feat-img-wrap project1">
            <img src={work1Png} alt="Loyalty Engine Dashboard" className="feat-media" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="feat-project" data-aos-delay="200" data-aos="fade-up">
          <div className="feat-meta-row">
            <div className="feat-dot"></div>
            <span className="feat-category">E-Commerce</span>
            <span className="feat-year">2023</span>
            <span className="feat-badge" style={{ background: '#0891b2' }}>Innovation</span>
          </div>
          <div className="feat-title-row">
            <h3 className="feat-title">Systems Engineering & Intelligent Platforms for a Top Technology Brand</h3>
            <a href="#" className="feat-view-btn">
              View Project
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 13L13 1M13 1H5M13 1v8" />
              </svg>
            </a>
          </div>
          <div className="feat-img-wrap project2">
            <video ref={videoRef} src={work1Mp4} loop muted playsInline className="feat-media" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
