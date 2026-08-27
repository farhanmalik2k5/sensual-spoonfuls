import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getDessertBySlug } from '../data/desserts';
import Footer from '../components/Footer';

/**
 * DessertPage
 * ─────────────────
 * Dynamic route: /desserts/:slug
 *
 * This single template renders the correct dessert based on the URL slug.
 * Every QR code points to a URL like:
 *   https://sensualspoonfuls.com/desserts/buttery-nipple
 *
 * The customer lands directly on this page — no homepage visit required.
 * The correct dessert information image is displayed prominently.
 *
 * If the slug doesn't match any dessert, a branded "Dessert not found"
 * state is shown with a back-to-menu button.
 */
export default function DessertPage() {
  const { slug } = useParams();
  const dessert = getDessertBySlug(slug);

  // Dynamically update document title and meta description for SEO
  useEffect(() => {
    if (dessert) {
      document.title = `${dessert.name} | Sensual Spoonfuls`;

      // Meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = `${dessert.name} by Sensual Spoonfuls — ${dessert.tagline} ${dessert.calories} calories per serving. View full nutrition facts.`;

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://sensualspoonfuls.com/desserts/${dessert.slug}`;
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

            <p className="dessert-page__label">Sensual Spoonfuls Presents</p>

            <h1 id="dessert-name" className="dessert-page__name">
              {dessert.name}
            </h1>

            <p className="dessert-page__tagline">{dessert.tagline}</p>
          </div>
        </section>

        {/* Nutrition / Ingredient Information Image — PRIMARY CONTENT */}
        <section
          className="dessert-page__info"
          aria-label="Nutrition and ingredient information"
        >
          <div className="container">
            <div className="dessert-page__info-image-wrap">
              <img
                src={dessert.infoImage}
                alt={dessert.infoImageAlt}
                className="dessert-page__info-image"
                loading="eager"
                fetchpriority="high"
                /* No explicit width/height — preserves original aspect ratio */
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
