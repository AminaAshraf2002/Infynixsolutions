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

  return (
    <nav 
      id="navbar" 
      className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}
      style={{
        transform: (visible || menuOpen) ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease'
      }}
    >
      <div className="nav-inner-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Infynix Logo" />
          </Link>
        </div>

        <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links-new">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/growth-engineering" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/industries/healthcare" onClick={() => setMenuOpen(false)}>Industries</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/insights" onClick={() => setMenuOpen(false)}>Insights</Link></li>
            
            <li className="mobile-only-cta">
              <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="search-icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <Link to="/contact" className="header-cta desktop-only">
            Contact Us
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
      </div>
    </nav>
  );
};

export default Navbar;