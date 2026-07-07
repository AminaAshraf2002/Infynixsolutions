import { useEffect, useRef } from 'react';
import { useIxReveal } from './WhoWeAre';
import { Link } from 'react-router-dom';

const SpecializeSection = () => {
  useIxReveal();
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll('.word');
    if (!words) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      const progress = Math.max(0, Math.min(1, scrolled));

      const totalWords = words.length;
      const wordsToReveal = Math.floor(progress * totalWords * 1.5);

      words.forEach((word, i) => {
        if (i < wordsToReveal) {
          word.classList.add('active');
        } else {
          word.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text1 = "We optimize the critical foundations of business growth and scalable";
  const text2 = "digital operations.";

  return (
    <section className="specialize-section" id="specialize" ref={sectionRef} style={{ 
      background: 'black',
      color: '#fff',
      padding: 'clamp(80px, 10vw, 140px) 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0,122,94,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,122,94,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1050, margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <span className="ix-eyebrow ix-eyebrow--light" data-aos="fade-up">Our Expertise</span>
        
        <h2 className="specialize-text" ref={textRef} style={{ 
          fontFamily: '"Albert Sans", sans-serif', 
          fontSize: 'clamp(2.7rem, 5.7vw, 4.5rem)', 
          fontWeight: 700, 
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '1000px'
        }}>
          {text1.split(' ').map((w, i) => (
            <span className="word" key={`a-${i}`}>{w}</span>
          ))} 
          {' '}
          {text2.split(' ').map((w, i) => (
            <span className="word" style={{ color: 'rgb(167, 214, 0)' }} key={`b-${i}`}>{w}</span>
          ))}
        </h2>
        
        <p data-aos-delay="200" data-aos="fade-up" style={{
          fontSize: 'clamp(1rem, 1.7vw, 1rem)',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '900px',
          lineHeight: 1.6
        }}>
          Delivering innovative Growth Engineering, modern Growth Systems, and advanced AI Surveillance solutions that empower leading brands to accelerate performance.
        </p>

        <div data-aos-delay="300" data-aos="fade-up" style={{ marginTop: '2rem' }}>
          <Link to="/about" className="ix-btn-outline-wh">
            Explore Our Methodology
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;