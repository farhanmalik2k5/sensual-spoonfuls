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
              <p className="contact-section__subtitle">
                Available for orders &amp; inquiries — reach out anytime
              </p>
              <div className="gold-divider" role="separator" />
            </div>

            <div className="contact-section__grid">

              {/* Address — Branded Map Widget */}
              <div className="map-widget contact-item--full">

                {/* Branded header */}
                <div className="map-widget__header">
                  <div className="map-widget__icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div className="map-widget__info">
                    <span className="map-widget__label">Our Location</span>
                    <address className="map-widget__address" style={{ fontStyle: 'normal' }}>
                      13794 W Waddell Rd #239 &nbsp;·&nbsp; Surprise, AZ 85379
                    </address>
                  </div>
                  <a
                    href="https://maps.google.com/?q=13794+W+Waddell+Rd+%23239,+Surprise,+AZ+85379"
                    className="map-widget__directions"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to Sensual Spoonfuls"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                    </svg>
                    Directions
                  </a>
                </div>

                {/* Map embed */}
                <div className="map-widget__frame">
                  <iframe
                    title="Sensual Spoonfuls location map"
                    src="https://maps.google.com/maps?q=13794+W+Waddell+Rd+%23239,+Surprise,+AZ+85379&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Dark overlay tint to match brand */}
                  <div className="map-widget__overlay" aria-hidden="true" />
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+16238060565"
                className="contact-item"
                id="contact-phone-link"
                aria-label="Call Sensual Spoonfuls at 623-806-0565"
              >
                <div className="contact-item__icon-wrap" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Call Us</span>
                  <span className="contact-item__value">623-806-0565</span>
                </div>
                <span className="contact-item__arrow">↗</span>
              </a>

              {/* Email */}
              <a
                href="mailto:sensualspoonfuls@gmail.com"
                className="contact-item"
                id="contact-email-link"
                aria-label="Email Sensual Spoonfuls"
              >
                <div className="contact-item__icon-wrap" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Email Us</span>
                  <span className="contact-item__value">sensualspoonfuls@gmail.com</span>
                </div>
                <span className="contact-item__arrow">↗</span>
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
                <div className="contact-item__icon-wrap" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Facebook</span>
                  <span className="contact-item__value">Follow Us on Facebook</span>
                </div>
                <span className="contact-item__arrow">↗</span>
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
                <div className="contact-item__icon-wrap" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Website</span>
                  <span className="contact-item__value">sensualspoonfuls.com</span>
                </div>
                <span className="contact-item__arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
