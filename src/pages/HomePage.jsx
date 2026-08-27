import DessertCard from '../components/DessertCard';
import Footer from '../components/Footer';
import { desserts } from '../data/desserts';

/**
 * HomePage
 * ─────────────
 * The main landing page at "/".
 * Contains: Hero → Menu → Contact
 *
 * Each section has an `id` so Navbar can smooth-scroll to it.
 */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <main id="home">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__inner">
            <img
              src="/assets/logo-full.jpg"
              alt="Sensual Spoonfuls — A Secret Worth Sharing"
              className="hero__logo"
              width="560"
              height="560"
              fetchpriority="high"
              loading="eager"
            />

            <h1 id="hero-heading" className="hero__title">
              Sinfully Indulgent.<br />Artfully Crafted.
            </h1>

            <p className="hero__subtitle">A Secret&hellip; Worth Sharing</p>

            <p className="hero__copy">
              Handcrafted dessert cups made with premium ingredients.
              Each creation is a layered experience designed to indulge every sense.
            </p>

            <div className="hero__cta">
              <a
                href="#menu"
                className="btn-primary"
                id="explore-desserts-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Our Desserts
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                id="contact-us-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="hero__scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="hero__scroll-arrow" />
          </div>

          {/* Ambient orb — extra bottom glow */}
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: '-20%', left: '50%',
            transform: 'translateX(-50%)',
            width: '500px', height: '300px',
            background: 'radial-gradient(ellipse, rgba(139,0,0,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        </section>

        {/* ── MENU ──────────────────────────────────────────────────── */}
        <section
          id="menu"
          className="menu-section section"
          aria-labelledby="menu-heading"
        >
          <div className="container">
            <div className="menu-section__header">
              <p className="section-label">Our Creations</p>
              <h2 id="menu-heading" className="section-heading">
                The Dessert Menu
              </h2>
              <div className="gold-divider" role="separator" />
            </div>

            {/* Grid — generated from data, scales to 30+ desserts */}
            <div
              className="menu-section__grid"
              role="list"
              aria-label="Dessert menu items"
            >
              {desserts.map((dessert) => (
                <div key={dessert.slug} role="listitem">
                  <DessertCard dessert={dessert} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────── */}
        <section
          id="contact"
          className="contact-section section"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="contact-section__header">
              <p className="section-label">Get In Touch</p>
              <h2 id="contact-heading" className="section-heading">
                Find Us
              </h2>
              <div className="gold-divider" role="separator" />
            </div>

            <div className="contact-section__grid">
              {/* Address */}
              <div className="contact-item contact-item--full">
                <div className="contact-item__icon" aria-hidden="true">📍</div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Address</span>
                  <address className="contact-item__value" style={{ fontStyle: 'normal' }}>
                    13794 W Waddell Rd #239<br />
                    Surprise, AZ 85379
                  </address>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+16238060565"
                className="contact-item"
                id="contact-phone-link"
                aria-label="Call Sensual Spoonfuls at 623-806-0565"
              >
                <div className="contact-item__icon" aria-hidden="true">📞</div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Phone</span>
                  <span className="contact-item__value">623-806-0565</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sensualspoonfuls@gmail.com"
                className="contact-item"
                id="contact-email-link"
                aria-label="Email Sensual Spoonfuls"
              >
                <div className="contact-item__icon" aria-hidden="true">✉️</div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Email</span>
                  <span className="contact-item__value">sensualspoonfuls@gmail.com</span>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1DWKaFhzv1/"
                className="contact-item"
                id="contact-facebook-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sensual Spoonfuls on Facebook (opens in new tab)"
              >
                <div className="contact-item__icon" aria-hidden="true">📘</div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Facebook</span>
                  <span className="contact-item__value">Follow Us on Facebook ↗</span>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://sensualspoonfuls.com"
                className="contact-item"
                id="contact-website-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Sensual Spoonfuls website (opens in new tab)"
              >
                <div className="contact-item__icon" aria-hidden="true">🌐</div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Website</span>
                  <span className="contact-item__value">sensualspoonfuls.com</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
