import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDessertBySlug } from '../data/desserts';
import Footer from '../components/Footer';

export default function DessertPage() {
  const { slug } = useParams();
  const dessert = getDessertBySlug(slug);
  const [variant, setVariant] = useState('alcohol'); // 'alcohol' or 'af'

  // Dynamically update document title and meta description for SEO
  useEffect(() => {
    if (dessert) {
      document.title = `${dessert.name} Nutritional Value | Sensual Spoonfuls`;

      // Meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = `${dessert.name} Nutritional Value & Ingredients by Sensual Spoonfuls — ${dessert.tagline}`;

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://sensualspoonfuls.com/nutrition/${dessert.slug}`;
    } else {
      document.title = 'Dessert Not Found | Sensual Spoonfuls';
    }

    // Cleanup: restore default title on unmount
    return () => {
      document.title = 'Sensual Spoonfuls | A Secret Worth Sharing';
    };
  }, [dessert]);

  /* ── Dessert Not Found ─────────────────────────────────── */
  if (!dessert) {
    return (
      <div className="not-found page-enter" role="main">
        <div className="not-found__inner">
          <img
            src="/assets/logo-icon.png"
            alt="Sensual Spoonfuls logo"
            className="not-found__logo"
            width="70"
            height="70"
          />
          <div className="not-found__code" aria-hidden="true">404</div>
          <h1 className="not-found__title">Dessert Not Found</h1>
          <p className="not-found__body">
            We couldn&apos;t find a dessert called &ldquo;{slug}&rdquo;.
            It may have been renamed or this QR code is outdated.
            Head back to the menu to see our current creations.
          </p>
          <Link to="/#menu" className="btn-primary" id="back-to-menu-btn-notfound">
            ← Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const activeImage = variant === 'alcohol' ? dessert.infoImage : (dessert.infoImageAF || dessert.infoImage);
  const activeAlt = variant === 'alcohol' ? dessert.infoImageAlt : (dessert.infoImageAltAF || dessert.infoImageAlt);

  /* ── Dessert Found ─────────────────────────────────────── */
  return (
    <>
      <main className="dessert-page page-enter" role="main" aria-labelledby="dessert-name">
        {/* Top bar: Back navigation */}
        <div className="dessert-page__topbar">
          <div className="container">
            <Link
              to="/#menu"
              className="dessert-page__back"
              id="back-to-menu-btn"
              aria-label="Back to full menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              View All Desserts
            </Link>
          </div>
        </div>

        {/* Dessert Hero */}
        <section className="dessert-page__hero">
          <div className="container">
            {/* Brand logo */}
            <div className="dessert-page__brand">
              <img
                src="/assets/logo-icon.png"
                alt="Sensual Spoonfuls"
                className="dessert-page__brand-logo"
                width="80"
                height="80"
                loading="eager"
              />
            </div>

            <p className="dessert-page__label">Sensual Spoonfuls Nutritional Information</p>

            <h1 id="dessert-name" className="dessert-page__name">
              {dessert.name}
            </h1>

            <p className="dessert-page__tagline">{dessert.tagline}</p>
          </div>
        </section>

        {/* Variant Selector Tabs for Alcohol vs Alcohol-Free */}
        <section className="dessert-page__variant-selector">
          <div className="container">
            <div className="variant-tabs" role="tablist" aria-label="Nutritional value version options">
              <button
                type="button"
                role="tab"
                aria-selected={variant === 'alcohol'}
                className={`variant-tab ${variant === 'alcohol' ? 'variant-tab--active' : ''}`}
                onClick={() => setVariant('alcohol')}
              >
                🍷 Alcohol Version
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={variant === 'af'}
                className={`variant-tab ${variant === 'af' ? 'variant-tab--active' : ''}`}
                onClick={() => setVariant('af')}
              >
                🌱 Alcohol-Free (Non-Alcoholic)
              </button>
            </div>
          </div>
        </section>

        {/* Nutrition / Ingredient Information Image */}
        <section
          className="dessert-page__info"
          aria-label="Nutrition and ingredient information"
        >
          <div className="container">
            <div className="dessert-page__info-image-wrap">
              <img
                key={variant}
                src={activeImage}
                alt={activeAlt}
                className="dessert-page__info-image"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="dessert-page__actions">
          <div className="container">
            <Link
              to="/#menu"
              className="btn-ghost"
              id="back-to-menu-bottom-btn"
            >
              ← Back to Full Menu
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
