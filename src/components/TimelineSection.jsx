import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageSquare, Lightbulb, ThumbsUp, TrendingUp, CheckCircle } from 'lucide-react';
import './TimelineSection.css';

const timelineData = [
  {
    id: 1,
    icon: MessageSquare,
    badgeColor: 'rgb(254, 235, 126)',
    title: "Discover Where Growth Stalls",
    description: "We begin with a business systems audit to identify disconnected silos and unify your growth engine.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header">
          <div className="tl-mockup-dots"><span></span><span></span><span></span></div>
          <span className="tl-mockup-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MessageSquare size={16} /> Customer Interaction</span>
        </div>
        <div className="tl-mockup-body">
          <div className="tl-msg user-msg">Can I still return my item? I bought it 30 days ago.</div>
          <div className="tl-msg ai-msg">
            <span className="ai-badge">AI Agent</span>
            Yes. We allow refunds for up to 30 days. I've initiated the return process for you.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    icon: Lightbulb,
    badgeColor: '#e49a45ff',
    title: "Engineer a Connected Growth Architecture",
    description: "We design custom website development, CRM systems, and business automation as one connected architecture.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header dark">
          <span className="tl-mockup-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Lightbulb size={16} /> Fill Knowledge Gaps</span>
        </div>
        <div className="tl-mockup-body">
          <div className="tl-card">
            <div className="tl-card-header">
              <span className="tl-card-title">Return policy</span>
              <span className="tl-card-badge">High impact</span>
            </div>
            <div className="tl-card-footer">
              <span className="tl-muted">Estimated automations</span>
              <span className="tl-stat">15%</span>
              <button className="tl-btn">Generate article</button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    icon: ThumbsUp,
    badgeColor: '#77dbefff',
    title: "Build with AI-Powered Precision",
    description: "From AI development to mobile app development, every solution is engineered for measurable business outcomes.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-body align-center">
           <div className="tl-qa-card">
              <div className="tl-qa-header">
                <ThumbsUp size={16} /> AI Agent QA
              </div>
              <div className="tl-qa-row">
                <span>Product knowledge</span>
                <span className="emoji">🤔</span>
              </div>
              <div className="tl-qa-row">
                <span>Solution accuracy</span>
                <span className="emoji">👎</span>
              </div>
              <div className="tl-qa-divider"></div>
              <div className="tl-qa-row">
                <span>Total</span>
                <span className="tl-qa-badge warning">Needs review</span>
                <span className="tl-qa-score warning">72%</span>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    icon: TrendingUp,
    badgeColor: '#ae84e8ff',
    title: "Optimize with Real-Time Business Intelligence",
    description: "Our performance marketing and SEO strategies are backed by real-time business intelligence for confident decisions.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header dark">
          <span className="tl-mockup-title">Performance Dashboard</span>
        </div>
        <div className="tl-mockup-body align-center">
          <div className="tl-chart-placeholder">
             <div className="tl-bar" style={{ height: '40%' }}></div>
             <div className="tl-bar" style={{ height: '70%' }}></div>
             <div className="tl-bar" style={{ height: '50%' }}></div>
             <div className="tl-bar" style={{ height: '90%' }}></div>
             <div className="tl-bar" style={{ height: '60%' }}></div>
          </div>
          <div className="tl-card-footer" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
              <span className="tl-stat">87%</span>
              <span className="tl-muted">Resolution Rate ↑</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    icon: CheckCircle,
    badgeColor: '#70beabff',
    title: "Scale on Systems Built to Grow",
    description: "Your engineered system scales with your business, supporting long-term digital transformation and sustainable business growth.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-body align-center" style={{ padding: '1rem' }}>
           <CheckCircle size={48} color="var(--ix-primary)" />
           <h4 style={{ marginTop: '0.5rem', marginBottom: '0.25rem', fontWeight: 'bold' }}>SOC2 Certified</h4>
           <span className="tl-muted">End-to-end encryption active</span>
        </div>
      </div>
    )
  }
];

const gapZones = [
  { icon: HelpCircle, color: '#FFC107' },
  ...timelineData.map(item => ({ icon: item.icon, color: item.badgeColor })),
  { icon: CheckCircle, color: '#007A5E' }
];

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [trackHeight, setTrackHeight] = useState(0);
  const [ranges, setRanges] = useState({ input: [0, 1], output: [0, 0] });
  const [activeZone, setActiveZone] = useState(0);

  // Measure track height + each card's real center position
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const height = trackRef.current.offsetHeight;
      setTrackHeight(height);

      if (height === 0) return;
      // We no longer need to build custom pause ranges. Linear mapping guarantees a perfect 1:1 screen lock!
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 30%", "end 30%"]
  });

  // Remove spring completely for 1:1 pixel-perfect scrolling
  const iconY = useTransform(scrollYProgress, [0, 1], [0, trackHeight]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (trackHeight === 0) return;
      const currentY = latest * trackHeight;
      let newZone = 0;

      if (!trackRef.current) return;
      
      const trackRect = trackRef.current.getBoundingClientRect();
      const trackTop = trackRect.top;

      // Zone logic based on real physical position using getBoundingClientRect:
      if (cardRefs.current[0]) {
        const firstCardTop = cardRefs.current[0].getBoundingClientRect().top - trackTop;
        if (currentY < firstCardTop - 20) {
          newZone = 0; // Above first card -> Start Zone
        } else {
          newZone = gapZones.length - 1; // Default to End Zone
          for (let i = 0; i < cardRefs.current.length; i++) {
            const card = cardRefs.current[i];
            if (!card) continue;
            
            const cardRect = card.getBoundingClientRect();
            const cardBottom = cardRect.bottom - trackTop;
            
            // If the icon is physically above the bottom of this card (plus a small gap)
            if (currentY < cardBottom + 60) {
              newZone = i + 1; // Card zones are indices 1-5
              break;
            }
          }
        }
      }

      // If we are physically at the very bottom padding, lock to End Zone
      if (currentY >= trackHeight - 40) {
        newZone = gapZones.length - 1;
      }

      setActiveZone(newZone);
    });
    return () => unsubscribe();
  }, [scrollYProgress, trackHeight]);

  const ActiveIcon = gapZones[activeZone].icon;
  const activeBadgeColor = gapZones[activeZone].color;
  const activeCardIndex = Math.max(0, activeZone - 1);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-taller-wrapper">

        <div className="timeline-header-section">
          <h2>
            Growth Engineering that gets <span style={{ color: '#007A5E' }}>smarter</span> with every system.
          </h2>
          <p>
            From website development and AI automation to CRM integration — Infynix's Growth Engineering Method connects every business system for measurable, sustainable growth.
          </p>
          <button className="timeline-cta-btn">
            Schedule a Discovery Call
          </button>
        </div>

        <div className="timeline-container">

          <div className="timeline-track-wrapper">
            <div className="timeline-line-static" ref={trackRef}></div>

            <motion.div
              className="timeline-continuous-marker"
              style={{ x: "-50%", y: iconY }}
            >
              <div
                className="timeline-small-badge"
                style={{
                  background: activeBadgeColor,
                  borderColor: activeBadgeColor,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ActiveIcon size={16} strokeWidth={2.5} color="#ffffff" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="timeline-cards-continuous">
            {timelineData.map((item, index) => {
              const isActive = activeCardIndex === index;
              return (
                <div className="timeline-item-continuous" key={item.id}>
                  <div
                    className="timeline-card-wrapper"
                    ref={(el) => (cardRefs.current[index] = el)}
                  >
                    <div className={`timeline-card ${isActive ? 'active' : ''}`}>

                      <div className="timeline-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <div className="timeline-visual-scale-wrapper">
                        <div className="timeline-visual">
                          {item.mockup}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;