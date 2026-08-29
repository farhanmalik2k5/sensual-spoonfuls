import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDessertBySlug } from '../data/desserts';

export default function DessertPage() {
  const { slug } = useParams();
  const dessert = getDessertBySlug(slug);

  // Dynamically update document title and meta description for SEO
  useEffect(() => {
    if (dessert) {
      document.title = `${dessert.name} Nutritional Information | Sensual Spoonfuls`;

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
          <h1 className="not-found__title">Information Not Found</h1>
          <p className="not-found__body">
            We couldn&apos;t find nutritional information for &ldquo;{slug}&rdquo;.
            Please check the QR code or URL.
          </p>
        </div>
      </div>
    );
  }

  /* ── Standalone Dead-End QR Nutrition Page ──────────────── */
  return (
    <div className="qr-nutrition-page page-enter" role="main" aria-labelledby="dessert-name">
      <div className="container qr-nutrition-container">
        
        {/* Brand Header */}
        <header className="qr-nutrition__header">
          <img
            src="/assets/logo-icon.png"
            alt="Sensual Spoonfuls"
            className="qr-nutrition__logo"
            width="90"
            height="90"
            loading="eager"
          />
          <span className="qr-nutrition__brand-name">Sensual Spoonfuls</span>
          <p className="qr-nutrition__label">Nutritional &amp; Ingredient Information</p>
          <h1 id="dessert-name" className="qr-nutrition__title">
            {dessert.name}
          </h1>
          <p className="qr-nutrition__tagline">{dessert.tagline}</p>
          <div className="gold-divider" role="separator" />
        </header>

        {/* Primary Content: Nutritional Image */}
        <div className="qr-nutrition__image-wrap">
          <img
            src={dessert.infoImage}
            alt={dessert.infoImageAlt}
            className="qr-nutrition__image"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        {/* Company Information Card */}
        <div className="qr-nutrition__company-card">
          <h2 className="qr-nutrition__company-heading">Company Information</h2>
          <div className="qr-nutrition__company-grid">
            <div className="qr-nutrition__company-item">
              <span className="qr-nutrition__company-label">Brand</span>
              <span className="qr-nutrition__company-value">Sensual Spoonfuls</span>
            </div>
            <div className="qr-nutrition__company-item">
              <span className="qr-nutrition__company-label">Address</span>
              <span className="qr-nutrition__company-value">
                13794 W Waddell Rd #239<br />Surprise, AZ 85379
              </span>
            </div>
            <div className="qr-nutrition__company-item">
              <span className="qr-nutrition__company-label">Phone</span>
              <span className="qr-nutrition__company-value">623-806-0565</span>
            </div>
            <div className="qr-nutrition__company-item">
              <span className="qr-nutrition__company-label">Email</span>
              <span className="qr-nutrition__company-value">sensualspoonfuls@gmail.com</span>
            </div>
            <div className="qr-nutrition__company-item">
              <span className="qr-nutrition__company-label">Website</span>
              <span className="qr-nutrition__company-value">sensualspoonfuls.com</span>
            </div>
          </div>
          <p className="qr-nutrition__legal">
            Sensual Spoonfuls dessert cups contain approximately 5% ABV. Please enjoy responsibly. Must be 21+ to consume alcoholic variants.
          </p>
          <p className="qr-nutrition__copyright">
            &copy; {new Date().getFullYear()} Sensual Spoonfuls. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
