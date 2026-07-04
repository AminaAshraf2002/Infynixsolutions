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
      setScrolled(currentScrollY > 40);
      
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

  return (
    <nav 
      id="navbar" 
      className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}
      style={{
        transform: (visible || menuOpen) ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-130%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Infynix Logo" />
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/growth-engineering" onClick={() => setMenuOpen(false)}>Growth Engineering</Link></li>
          <li><Link to="/solutions/website-development" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
          <li><Link to="/industries/healthcare" onClick={() => setMenuOpen(false)}>Industries</Link></li>
          <li><Link to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
          <li><Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="mobile-cta-li">
            <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 13L13 1M13 1H5M13 1v8" />
              </svg>
              Get in touch
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="nav-cta desktop-cta">
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 13L13 1M13 1H5M13 1v8" />
          </svg>
          Get in touch
        </Link>
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
    </nav>
  );
};

export default Navbar;