import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const useAnimateOnScroll = (threshold = 0.12) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale')
        .forEach((t) => observer.observe(t));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

// --- Beautiful SVG Wireframe Icons ---
const AiSurveillanceIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    <polygon points="50,10 85,50 50,90 15,50" />
    <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="2 2" />
    <line x1="15" y1="50" x2="85" y2="50" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="16" stroke="#A7D600" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="6" fill="#007A5E" />
    <path d="M25,25 L35,25 L35,35 M75,25 L65,25 L65,35 M25,75 L35,75 L35,65 M75,75 L65,75 L65,65" stroke="#007A5E" strokeWidth="1" />
    <style>{`
      @keyframes float-rotate {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-4px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
      }
    `}</style>
  </svg>
);

const GrowthEngineeringIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    {/* Inner cube */}
    <polygon points="50,32 75,45 50,58 25,45" />
    <line x1="50" y1="58" x2="50" y2="85" />
    <line x1="25" y1="45" x2="25" y2="72" />
    <line x1="75" y1="45" x2="75" y2="72" />
    <polygon points="50,59 75,72 50,85 25,72" />
    {/* Outer wireframe box */}
    <polygon points="50,15 88,35 50,55 12,35" stroke="#A7D600" strokeDasharray="3 3" />
    <line x1="50" y1="15" x2="50" y2="32" stroke="#A7D600" />
    <line x1="12" y1="35" x2="25" y2="45" stroke="#A7D600" />
    <line x1="88" y1="35" x2="75" y2="45" stroke="#A7D600" />
  </svg>
);

const GrowthMarketingIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    <ellipse cx="50" cy="25" rx="35" ry="12" />
    <ellipse cx="50" cy="50" rx="22" ry="8" stroke="#A7D600" />
    <ellipse cx="50" cy="75" rx="10" ry="4" />
    <line x1="15" y1="25" x2="40" y2="75" />
    <line x1="85" y1="25" x2="60" y2="75" />
    <line x1="50" y1="25" x2="50" y2="75" strokeDasharray="3 3" />
  </svg>
);

const GrowthSystemsIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1" style={{ width: '100%', height: '100%' }}>
    <circle cx="50" cy="50" r="30" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="15" stroke="#A7D600" />
    <circle cx="50" cy="20" r="4" fill="#007A5E" />
    <circle cx="50" cy="80" r="4" fill="#007A5E" />
    <circle cx="20" cy="50" r="4" fill="#007A5E" />
    <circle cx="80" cy="50" r="4" fill="#007A5E" />
    <line x1="50" y1="20" x2="50" y2="80" />
    <line x1="20" y1="50" x2="80" y2="50" />
    <line x1="29" y1="29" x2="71" y2="71" strokeDasharray="2 2" />
    <line x1="29" y1="71" x2="71" y2="29" strokeDasharray="2 2" />
  </svg>
);

const AppDevIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    {/* Base phone structure */}
    <rect x="28" y="15" width="44" height="70" rx="6" />
    {/* Screen layers floating */}
    <rect x="34" y="22" width="32" height="42" rx="2" stroke="#A7D600" />
    <line x1="38" y1="72" x2="62" y2="72" />
    <circle cx="50" cy="79" r="2.5" />
    {/* Floating wireframe panels */}
    <path d="M18,30 L38,20 L38,40 L18,50 Z" strokeOpacity="0.5" />
    <path d="M82,40 L62,50 L62,70 L82,60 Z" strokeOpacity="0.5" />
  </svg>
);

const CrmIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    {/* Interconnected pentagon */}
    <polygon points="50,15 80,38 68,76 32,76 20,38" strokeDasharray="3 3" />
    <circle cx="50" cy="15" r="4" fill="#007A5E" />
    <circle cx="80" cy="38" r="4" fill="#A7D600" />
    <circle cx="68" cy="76" r="4" fill="#007A5E" />
    <circle cx="32" cy="76" r="4" fill="#007A5E" />
    <circle cx="20" cy="38" r="4" fill="#A7D600" />
    {/* Central node connection */}
    <circle cx="50" cy="48" r="8" stroke="#007A5E" />
    <line x1="50" y1="15" x2="50" y2="40" />
    <line x1="80" y1="38" x2="57" y2="44" />
    <line x1="68" y1="76" x2="55" y2="54" />
    <line x1="32" y1="76" x2="45" y2="54" />
    <line x1="20" y1="38" x2="43" y2="44" />
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    <rect x="15" y="20" width="70" height="50" rx="4" />
    <line x1="15" y1="32" x2="85" y2="32" />
    <circle cx="22" cy="26" r="2" fill="#007A5E" />
    <circle cx="28" cy="26" r="2" fill="#007A5E" />
    <circle cx="34" cy="26" r="2" fill="#A7D600" />
    {/* Floating elements */}
    <rect x="25" y="42" width="22" height="18" stroke="#A7D600" />
    <line x1="54" y1="45" x2="75" y2="45" />
    <line x1="54" y1="52" x2="75" y2="52" />
    <line x1="54" y1="59" x2="68" y2="59" />
  </svg>
);

const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="#007A5E" strokeWidth="1.2" style={{ width: '100%', height: '100%' }}>
    <circle cx="50" cy="50" r="38" />
    <circle cx="50" cy="50" r="25" stroke="#A7D600" />
    <circle cx="50" cy="50" r="12" />
    {/* Crosshairs */}
    <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="3 3" />
    <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="3 3" />
    {/* Pulsing signal waves */}
    <path d="M50,12 A38,38 0 0,1 88,50" stroke="#007A5E" strokeWidth="2" />
    <path d="M12,50 A38,38 0 0,1 50,88" stroke="#007A5E" strokeWidth="2" />
  </svg>
);

const services = [
  {
    icon: <AiSurveillanceIcon />,
    title: 'AI & AI Surveillance',
    tagline: 'Intelligent and responsive',
    desc: 'Advanced computer vision pipelines, real-time activity profiling, object tracking, and secure, predictive surveillance intelligence.',
    link: '/solutions/artificial-intelligence',
  },
  {
    icon: <GrowthEngineeringIcon />,
    title: 'Growth Engineering',
    tagline: 'Engineered to accelerate',
    desc: 'High-performance growth stacks, conversion rate optimization (CRO), custom APIs, and backend frameworks built to accelerate performance.',
    link: '/growth-engineering',
  },
  {
    icon: <GrowthMarketingIcon />,
    title: 'Growth Marketing System',
    tagline: 'Automated and personalized',
    desc: 'Automated multi-channel loops, Customer Data Platforms (CDP) integration, ML-powered personalization, and user engagement scaling.',
    link: '/solutions/performance-marketing',
  },
  {
    icon: <GrowthSystemsIcon />,
    title: 'Growth Systems',
    tagline: 'Scalable and resilient',
    desc: 'Scalable event-driven microservices architectures, service mesh networking, SRE orchestration, and automated cloud scaling.',
    link: '/solutions/business-automation',
  },
  {
    icon: <AppDevIcon />,
    title: 'App Development',
    tagline: 'Fluid and intuitive',
    desc: 'Stunning native and cross-platform mobile apps for iOS and Android with offline-first support and fluid user interfaces.',
    link: '/solutions/mobile-app-development',
  },
  {
    icon: <CrmIcon />,
    title: 'CRM Software Development',
    tagline: 'Connected and efficient',
    desc: 'Bespoke CRM integrations, business management software, automated lead tracking, and custom workflow optimizations.',
    link: '/solutions/crm-erp-development',
  },
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    tagline: 'Fast and optimized',
    desc: 'High-performance, search-optimized websites and web applications engineered using modern, secure frameworks.',
    link: '/solutions/website-development',
  },
  {
    icon: <DigitalMarketingIcon />,
    title: 'Digital Marketing & SEO',
    tagline: 'Targeted and visible',
    desc: 'Premium brand positioning, search engine optimization (SEO), social media campaigns, and data-driven marketing strategy.',
    link: '/solutions/seo-services',
  },
];

const Services = () => {
  const containerRef = useAnimateOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayTagline, setDisplayTagline] = useState(services[0].tagline);
  const [fade, setFade] = useState(false);

  // IntersectionObserver to monitor active service scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.service-item');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger near middle of viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(items).indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [containerRef]);

  // Smoothly fade left content out, change tagline, and fade back in
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setDisplayTagline(services[activeIndex].tagline);
      setFade(false);
    }, 300); // match transition speed

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section id="services" ref={containerRef} aria-label="Services">
      <div className="services-wrap">
        {/* Left Sticky Column */}
        <div className="services-left">
          <span className="svc-label">Our Services</span>
          <h2 className={`svc-tagline ${fade ? 'hidden' : ''}`}>
            {displayTagline.substring(0, displayTagline.lastIndexOf(' '))}
            <br />
            {displayTagline.substring(displayTagline.lastIndexOf(' ') + 1)}
          </h2>
        </div>

        {/* Right Scrolling Column */}
        <div className="services-right">
          {services.map((svc, i) => {
            const words = svc.title.split(' ');
            const secondPart = words.pop();
            const firstPart = words.join(' ');

            return (
              <div
                key={svc.title}
                className="service-item anim-fade-up"
              >
                <div 
                  className="svc-icon" 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    marginBottom: '2rem', 
                    transition: 'transform 0.8s ease'
                  }}
                >
                  {svc.icon}
                </div>
                <div className="svc-name-wrap">
                  <span className="svc-name-bold">{firstPart}</span>
                  <span className="svc-name-italic">{secondPart}</span>
                </div>
                <p className="svc-desc">{svc.desc}</p>
                <Link to={svc.link} className="svc-btn" aria-label={`Learn more about ${svc.title}`}>
                  Learn More
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 13L13 1M13 1H5M13 1v8" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
