import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageSquare, Lightbulb, ThumbsUp, TrendingUp, CheckCircle } from 'lucide-react';
import './TimelineSection.css';

const timelineData = [
  {
    id: 1,
    icon: MessageSquare,
    badgeColor: '#FFC107',
    title: "Move beyond simple deflection",
    description: "Achieve up to 80% automation with AI agents that continuously learn from every interaction, managing complex workflows to provide better outcomes.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header">
          <div className="tl-mockup-dots"><span></span><span></span><span></span></div>
          <span className="tl-mockup-title">Customer Interaction</span>
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
    badgeColor: '#FF8A00',
    title: "Turn signals into actionable improvement",
    description: "Automatically identify knowledge gaps and generate articles to automate even more workflows. Infynix TMS turns support data into a powerful growth engine.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header dark">
          <span className="tl-mockup-title">Fill Knowledge Gaps</span>
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
    badgeColor: '#00B4D8',
    title: "Smarter with every single resolution",
    description: "Every conversation becomes a learning signal. Trillions of data points train our AI to understand intent, sentiment, and context for flawless execution.",
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
    badgeColor: '#8338EC',
    title: "Data-Driven Performance Analytics",
    description: "Uncover deep insights into operational bottlenecks. Our advanced telemetry dashboards empower your leadership with real-time, actionable business intelligence.",
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
    badgeColor: '#007A5E',
    title: "Enterprise-Grade Security & Compliance",
    description: "Rest easy knowing your critical growth data is protected by bank-level encryption and strict role-based access control, adhering to SOC2 standards.",
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

// Combine the 5 steps + the start bookend icon
const gapZones = [
  { icon: HelpCircle, color: '#FFC107' }, // Start Bookend
  ...timelineData.map(item => ({ icon: item.icon, color: item.badgeColor })),
  { icon: CheckCircle, color: '#007A5E' } // Safety end bookend
];

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  
  const [trackHeight, setTrackHeight] = useState(0);
  const [activeZone, setActiveZone] = useState(0);

  // Measure the exact track height
  useEffect(() => {
    const measureTrack = () => {
      if (trackRef.current) {
        setTrackHeight(trackRef.current.offsetHeight);
      }
    };
    measureTrack();
    window.addEventListener('resize', measureTrack);
    return () => window.removeEventListener('resize', measureTrack);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Balanced spring physics as requested
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
    restDelta: 0.001
  });

  // Map exactly to the height of the vertical line
  const iconY = useTransform(smoothProgress, [0, 1], [0, trackHeight]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const totalZones = gapZones.length;
      let currentIndex = Math.floor(latest * totalZones);
      if (currentIndex >= totalZones) currentIndex = totalZones - 1;
      if (currentIndex < 0) currentIndex = 0;
      
      setActiveZone(currentIndex);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const ActiveIcon = gapZones[activeZone].icon;
  const activeBadgeColor = gapZones[activeZone].color;

  // We highlight the card if the icon has passed its starting point but hasn't fully cleared it.
  // We can approximate active card index by mapping activeZone back to card index (zone 1 = card 1)
  const activeCardIndex = Math.max(0, activeZone - 1);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-taller-wrapper">
        
        <div className="timeline-header-section">
          <h2>AI that gets <span style={{ color: '#007A5E' }}>smarter</span> with every resolution.</h2>
          <p>Achieve up to 80% automation with AI agents that continuously learn from every interaction, manage more complex workflows and provide better outcomes.</p>
          <button className="timeline-cta-btn">Explore the platform</button>
        </div>

        <div className="timeline-container">
          
          <div className="timeline-track-wrapper">
            <div className="timeline-line-static" ref={trackRef}></div>

            {/* Continuous Traveling Marker - Explicitly setting x: "-50%" in Framer Motion to prevent transform override */}
            <motion.div 
              className="timeline-continuous-marker"
              style={{ x: "-50%", y: iconY }}
            >
              <div  
                className="timeline-small-badge"
                style={{ 
                  background: activeBadgeColor,
                  borderColor: activeBadgeColor,
                  color: '#ffffff'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <ActiveIcon size={16} strokeWidth={2.5} color="#ffffff" />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="timeline-small-connector-dot" style={{ background: activeBadgeColor }}></div>
            </motion.div>
          </div>

          <div className="timeline-cards-continuous">
            {timelineData.map((item, index) => {
              const isActive = activeCardIndex === index;
              return (
                <div 
                  className="timeline-item-continuous" 
                  key={item.id} 
                >
                  <div className="timeline-card-wrapper">
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
