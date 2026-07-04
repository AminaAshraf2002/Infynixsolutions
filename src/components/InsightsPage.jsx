import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { insightsData } from '../lib/contentData';
import SEOManager from './SEOManager';

const OFF_WHITE = "#F5F5F3";
const CHARCOAL = "#1A1A1A";
const GREEN = "#0A4A33";
const GREEN_LITE = "#EBF1ED";
const BORDER = "#E5E5E5";

const insightImages = {
  'what-is-growth-engineering': 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  'how-ai-automates-growth': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
};

const InsightsPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // States for List View
  const [activeFilter, setActiveFilter] = useState('ALL POSTS');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const featuredArticle = insightsData[0] || {
    slug: 'feature',
    title: 'Architecture of Efficiency: Scaling Industrial IoT in Legacy Systems',
    category: 'FEATURED CASE',
    date: 'October 24, 2024',
    summary: 'Our latest deep dive into bridging the gap between decades-old hardware and modern cloud architectures. Discover the protocols and middleware...'
  };

  const baseArticles = [
    { slug: '1', title: 'Optimizing Latency in High-Frequency Edge Nodes', category: 'SYSTEMS', date: 'Oct 22, 2024', summary: 'How reducing nanoseconds at the edge translates into millions in operational savings...', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
    { slug: '2', title: 'Zero-Trust Protocols for Distributed Global Teams', category: 'SECURITY', date: 'Sep 28, 2024', summary: 'Securing the perimeter when the perimeter is everywhere. A framework for the modern...', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80' },
    { slug: '3', title: 'The Sustainability Paradox of Cloud Integration', category: 'INFRASTRUCTURE', date: 'Sep 20, 2024', summary: 'Analyzing the energy footprint of rapid digital transformation and how to engineer for a...', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
    { slug: '4', title: 'Next-Gen Fiber: Beyond Terabit Boundaries', category: 'CONNECTIVITY', date: 'Aug 18, 2024', summary: 'Breaking down the breakthroughs in photonic transmission and what it means for enterprise...', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' },
    { slug: '5', title: 'Modular Thinking: Building Future-Proof Stacks', category: 'ENGINEERING', date: 'Aug 12, 2024', summary: 'Why composability is the ultimate competitive advantage in rapidly shifting technological...', img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&q=80' },
    { slug: '6', title: 'Manufacturing Precision at Global Scale', category: 'SCALE', date: 'Jul 29, 2024', summary: 'Maintaining 0.001mm tolerances across distributed production lines using AI-driven...', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  ];

  const allCategories = ['ALL POSTS', 'SYSTEMS', 'INFRASTRUCTURE', 'SECURITY', 'CONNECTIVITY', 'ENGINEERING', 'SCALE'];
  
  const filteredArticles = useMemo(() => {
    if (activeFilter === 'ALL POSTS') return baseArticles;
    return baseArticles.filter(a => a.category === activeFilter);
  }, [activeFilter, baseArticles]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredArticles]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 700, behavior: 'smooth' });
    }
  };

  if (slug) {
    const article = insightsData.find(a => a.slug === slug);
    if (!article) return <div style={{ padding: '100px', textAlign: 'center' }}>Article not found.</div>;

    const pageImage = insightImages[article.slug] || insightImages['what-is-growth-engineering'];

    return (
      <div style={{ background: OFF_WHITE, minHeight: '100vh', fontFamily: 'var(--ix-font-body)', color: CHARCOAL }}>
        <SEOManager
          title={`${article.title} | Infynix`}
          description={article.summary}
          canonicalUrl={`https://infynix.com/insights/${slug}`}
        />

        {/* ── ARTICLE HEADER ── */}
        <section style={{ padding: '140px 20px 60px', textAlign: 'center' }} data-aos="fade-up">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', padding: '6px 14px', background: GREEN, color: '#fff', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '30px' }}>
              {article.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, margin: '0 0 25px', lineHeight: 1.15, fontFamily: 'var(--ix-font-display)', color: CHARCOAL }}>
              {article.title}
            </h1>
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1rem', fontFamily: 'var(--ix-font-serif)', margin: 0 }}>
              {article.author} • {article.date}
            </p>
          </div>
        </section>

        {/* ── ARTICLE IMAGE ── */}
        <section style={{ padding: '0 20px 60px' }} data-aos="zoom-in" data-aos-delay="100">
          <div style={{ maxWidth: '1000px', margin: '0 auto', height: 'clamp(300px, 40vw, 400px)', borderRadius: '4px', overflow: 'hidden' }}>
            <img src={pageImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </section>

        {/* ── ARTICLE CONTENT ── */}
        <section style={{ padding: '0 20px 80px' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            
            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444' }}>
              {/* Fake content dots divider */}
              <div style={{ borderBottom: `1px dotted ${BORDER}`, marginBottom: '40px', width: '30px', margin: '0 auto 40px' }} />

              {article.content.split('\n\n').map((para, idx) => (
                <p key={idx} style={{ marginBottom: '30px' }} data-aos="fade-up">
                  {para.trim()}
                </p>
              ))}

              <div style={{ background: '#EAEAEA', padding: '30px', margin: '50px 0', borderLeft: `3px solid ${GREEN}` }} data-aos="fade-right">
                <p style={{ fontStyle: 'italic', fontFamily: 'var(--ix-font-serif)', fontSize: '1.15rem', color: '#333', margin: 0 }}>
                  "Engineering is not the art of building complex things, but the science of making complexity invisible to the user."
                </p>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--ix-font-display)', margin: '50px 0 20px', color: CHARCOAL }} data-aos="fade-up">
                Defining the New Blueprint
              </h3>
              <p style={{ marginBottom: '40px' }} data-aos="fade-up">
                The blueprint for 2025 relies on three fundamental pillars: modularity, observability, and self-healing logic. Traditional fixed-state configurations are being replaced by dynamic environments that respond to telemetry in real-time. This isn't just automation; it's autonomous integration.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div style={{ border: `1px dotted #ccc`, padding: '20px' }} data-aos="zoom-in" data-aos-delay="100">
                  <div style={{ color: GREEN, fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'monospace' }}>
                    01 / MODULARITY
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'monospace' }}>
                    Components must be swappable without interrupting the global state.
                  </p>
                </div>
                <div style={{ border: `1px dotted #ccc`, padding: '20px' }} data-aos="zoom-in" data-aos-delay="200">
                  <div style={{ color: GREEN, fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'monospace' }}>
                    02 / OBSERVABILITY
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, fontFamily: 'monospace' }}>
                    Granular data collection at every trace node for predictive maintenance.
                  </p>
                </div>
              </div>

            </div>

            {/* Back button */}
            <div style={{ marginTop: '80px', borderTop: `1px dotted ${BORDER}`, paddingTop: '60px', textAlign: 'center' }} data-aos="fade-up">
              <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: GREEN, textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', border: `1px solid ${GREEN}`, padding: '12px 30px', borderRadius: '100px', transition: 'all 0.3s ease' }} className="outline-btn-hover">
                ← Back to all Insights
              </Link>
            </div>
          </div>
        </section>

        

        <style>{`
          .outline-btn-hover:hover {
            background: ${GREEN};
            color: #fff !important;
          }
        `}</style>
      </div>
    );
  }

  // LIST VIEW - EDITORIAL EXACT MATCH
  const featImg = insightImages[featuredArticle.slug] || insightImages['what-is-growth-engineering'];

  return (
    <div style={{ background: OFF_WHITE, minHeight: '100vh', fontFamily: 'var(--ix-font-body)', color: CHARCOAL }}>
      <SEOManager
        title="Insights | Infynix"
        description="Growth Insights"
        canonicalUrl="https://infynix.com/insights"
      />

      {/* ── TOP HEADER ── */}
      <section style={{ padding: '160px 20px 40px', textAlign: 'center', position: 'relative' }} data-aos="fade-down">
        <div style={{ width: '1px', height: '20px', background: 'transparent', borderLeft: `1px dotted ${BORDER}`, margin: '0 auto 20px' }}></div>
        <div style={{ fontSize: '0.65rem', color: GREEN, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700, marginBottom: '20px' }}>
          PERSPECTIVES • ENGINEERING • SCALE
        </div>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: CHARCOAL, margin: '0 0 15px', fontFamily: 'var(--ix-font-display)', letterSpacing: '-0.02em' }}>
          Growth Insights
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic', fontFamily: 'var(--ix-font-serif)', maxWidth: '600px', margin: '0 auto' }}>
          Exploring the intersection of complex infrastructure, sustainable engineering, and the future of industrial integration.
        </p>
        <div style={{ width: '4px', height: '4px', background: GREEN, margin: '40px auto 0' }}></div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section style={{ padding: '20px clamp(60px, 8vw, 120px) 80px' }} data-aos="fade-up">
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          <Link to={`/insights/${featuredArticle.slug}`} style={{ position: 'relative', height: 'clamp(300px, 35vw, 500px)', display: 'block', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', background: GREEN, color: '#fff', padding: '6px 12px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', zIndex: 2 }}>
              {featuredArticle.category.toUpperCase()}
            </div>
            <img src={featImg} alt={featuredArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Link>

          <div style={{ padding: '0 20px' }}>
            <div style={{ fontStyle: 'italic', color: '#666', fontSize: '0.95rem', fontFamily: 'var(--ix-font-serif)', marginBottom: '20px' }}>
              • {featuredArticle.date}
            </div>
            <Link to={`/insights/${featuredArticle.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: CHARCOAL, margin: '0 0 20px', lineHeight: 1.1, fontFamily: 'var(--ix-font-display)', letterSpacing: '-0.02em' }}>
                {featuredArticle.title}
              </h2>
            </Link>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: '30px' }}>
              {featuredArticle.summary}
            </p>
            <Link to={`/insights/${featuredArticle.slug}`} style={{ textDecoration: 'none', color: GREEN, fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Read Article →
            </Link>
          </div>

        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }} data-aos="fade-in">
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center', padding: '15px clamp(60px, 8vw, 120px)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
          <div style={{ display: 'flex', gap: '20px', color: '#999', flexWrap: 'wrap' }}>
            {allCategories.slice(0, 4).map(cat => (
              <span 
                key={cat}
                onClick={() => { setActiveFilter(cat); setCurrentPage(1); }}
                style={{ 
                  cursor: 'pointer',
                  color: activeFilter === cat ? CHARCOAL : '#999',
                  borderBottom: activeFilter === cat ? `1px solid ${CHARCOAL}` : '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'all 0.2s ease'
                }}>
                {cat}
              </span>
            ))}
          </div>
          <div style={{ color: '#999' }}>
            DISPLAYING {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredArticles.length)} OF {filteredArticles.length}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: '60px clamp(60px, 8vw, 120px) 80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 30px' }}>
          
          {currentArticles.length > 0 ? currentArticles.map((article, idx) => (
            <Link to={`/insights/${article.slug}`} key={article.slug} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
              <div style={{ height: '220px', width: '100%', marginBottom: '20px', overflow: 'hidden' }}>
                <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '4px', height: '4px', background: GREEN }}></div>
                  {article.category}
                </div>
                <span>{article.date}</span>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: CHARCOAL, margin: '0 0 15px', lineHeight: 1.2, fontFamily: 'var(--ix-font-display)', letterSpacing: '-0.01em' }}>
                {article.title}
              </h3>
              
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {article.summary}
              </p>
            </Link>
          )) : (
            <div style={{ gridColumn: '1 / -1', padding: '60px 0', textAlign: 'center', color: '#888' }}>
              No articles found in this category.
            </div>
          )}

        </div>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '80px', fontSize: '0.75rem', fontWeight: 600 }} data-aos="fade-up">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ width: '32px', height: '32px', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: currentPage === 1 ? '#ccc' : '#999', background: 'transparent', cursor: currentPage === 1 ? 'default' : 'pointer' }}>
              &lt;
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => handlePageChange(i + 1)}
                style={{ 
                  width: '32px', height: '32px', 
                  border: currentPage === i + 1 ? 'none' : 'none', 
                  background: currentPage === i + 1 ? GREEN : 'transparent', 
                  color: currentPage === i + 1 ? '#fff' : '#666', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                {(i + 1).toString().padStart(2, '0')}
              </button>
            ))}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ width: '32px', height: '32px', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: currentPage === totalPages ? '#ccc' : '#999', background: 'transparent', cursor: currentPage === totalPages ? 'default' : 'pointer' }}>
              &gt;
            </button>
          </div>
        )}
      </section>

      {/* ── NEWSLETTER FOOTER ── */}
      <section style={{ background: '#EAEAE6', padding: '80px 20px', borderTop: `1px solid ${BORDER}` }} data-aos="fade-in">
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: OFF_WHITE, border: `1px solid ${GREEN}`, padding: '50px', position: 'relative' }}>
          {/* Decorative corners */}
          <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '10px', height: '10px', borderTop: `2px solid ${GREEN}`, borderLeft: `2px solid ${GREEN}` }}></div>
          <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '10px', height: '10px', borderBottom: `2px solid ${GREEN}`, borderRight: `2px solid ${GREEN}` }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: GREEN, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '15px' }}>
                THE ARCHIVE WEEKLY
              </div>
              <h4 style={{ fontSize: '1.8rem', fontWeight: 800, color: CHARCOAL, margin: '0 0 15px', fontFamily: 'var(--ix-font-display)' }}>
                Direct Intelligence
              </h4>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Receive a weekly digest of our latest engineering perspectives and system breakthroughs directly to your inbox.
              </p>
            </div>
            
            <div>
              <div style={{ display: 'flex', borderBottom: `1px solid ${CHARCOAL}`, paddingBottom: '10px', marginBottom: '15px' }}>
                <input type="email" placeholder="YOUR@EMAIL.COM" style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }} />
                <button style={{ background: GREEN, color: '#fff', border: 'none', padding: '10px 20px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', cursor: 'pointer' }}>
                  SUBSCRIBE
                </button>
              </div>
              <p style={{ fontSize: '0.65rem', color: '#999', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                BY SUBSCRIBING, YOU AGREE TO OUR PRIVACY PROTOCOLS AND TECHNICAL TERMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default InsightsPage;