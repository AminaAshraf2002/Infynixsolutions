import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setVisible(true);
  }, [location.pathname]);

  const [preHeaderVisible, setPreHeaderVisible] = useState(true);

  return (
    <>
      {preHeaderVisible && !scrolled && (
        <div className="pre-header-bar">
          <div className="pre-header-content">
            <div className="pre-header-left">
              <span><strong>Case Study:</strong> See how we helped a healthcare business unify systems and scale faster.</span>
            </div>
            <div className="pre-header-right">
              <Link to="/case-studies" className="pre-header-link">Read the Story</Link>
              <button className="pre-header-close" onClick={() => setPreHeaderVisible(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <nav 
        id="navbar" 
        className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''} ${preHeaderVisible ? 'has-preheader' : ''}`}
        style={{
          transform: (visible || menuOpen) ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, padding 0.3s ease, border-radius 0.3s ease'
        }}
      >
        <div className="nav-container-new">
          <div className="nav-top-row">
           
          </div>
          <div className="nav-main-row">
            <div className="nav-main-left">
              <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Infynix Logo" />
              </Link>
            </div>
            
            <div className="nav-main-center">
              <ul className="nav-links-new">
                <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/growth-engineering" className="nav-link" onClick={() => setMenuOpen(false)}>Growth Engineering</Link></li>
                <li><Link to="/solutions" className="nav-link" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
                <li><Link to="/industries/healthcare" className="nav-link" onClick={() => setMenuOpen(false)}>Industries</Link></li>
                <li><Link to="/case-studies" className="nav-link" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
                <li><Link to="/insights" className="nav-link" onClick={() => setMenuOpen(false)}>Insights</Link></li>
                <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
              </ul>
            </div>

            <div className="nav-main-right">
              <Link to="/contact" className="header-cta desktop-only">
                Contact Us
              </Link>
              {/* <button className="search-icon-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button> */}
              <button 
                className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;