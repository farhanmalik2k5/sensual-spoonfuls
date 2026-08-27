import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /**
   * Smooth-scroll to a section if on homepage, otherwise navigate home first.
   */
  const scrollTo = useCallback(
    (id) => (e) => {
      e.preventDefault();
      setMenuOpen(false);
      if (isHomePage) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate home with hash — the ScrollToTop component handles the rest
        window.location.href = `/#${id}`;
      }
    },
    [isHomePage]
  );

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo — always returns to homepage */}
        <Link to="/" className="navbar__logo" aria-label="Sensual Spoonfuls — Return to Homepage">
          <img
            src="/assets/logo-icon.png"
            alt=""
            className="navbar__logo-icon"
            aria-hidden="true"
            width="40"
            height="40"
          />
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Sensual</span>
            <span className="navbar__logo-sub">Spoonfuls</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`navbar__nav${menuOpen ? ' open' : ''}`}
          id="main-nav"
          aria-label="Primary navigation"
        >
          <a
            href="/#home"
            className="navbar__link"
            onClick={scrollTo('home')}
          >
            Home
          </a>
          <a
            href="/#menu"
            className="navbar__link"
            onClick={scrollTo('menu')}
          >
            Menu
          </a>
          <a
            href="/#contact"
            className="navbar__link"
            onClick={scrollTo('contact')}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-controls="main-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : undefined }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : undefined }} />
        </button>
      </div>
    </header>
  );
}
