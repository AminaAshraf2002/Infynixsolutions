import { useEffect, useRef } from 'react';

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

const stats = [
  { num: '150+', label: 'Projects Delivered' },
  { num: '12+', label: 'Years in Business' },
  { num: '98%', label: 'Client Retention Rate' },
  { num: '40+', label: 'Senior Engineers' },
];

const Stats = () => {
  const ref = useAnimateOnScroll(0.2);

  return (
    <section className="stats-section" ref={ref} aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid" role="list">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-itemdelay-${i + 1} data-aos="fade-up"`}
              role="listitem"
            >
              <div className="stat-number" aria-label={s.num}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
