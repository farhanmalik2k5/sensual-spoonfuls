import { Link } from 'react-router-dom';

/**
 * NotFoundPage
 * ─────────────
 * Shown for completely unknown routes (not /desserts/* — those show
 * the dessert-not-found state inside DessertPage).
 */
export default function NotFoundPage() {
  return (
    <div className="not-found" role="main">
      <div className="not-found__inner">
        <img
          src="/assets/logo-icon.png"
          alt="Sensual Spoonfuls"
          className="not-found__logo"
          width="70"
          height="70"
        />
        <div className="not-found__code" aria-hidden="true">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__body">
          The page you&apos;re looking for doesn&apos;t exist.
          Head back to the homepage to explore our sinfully indulgent dessert menu.
        </p>
        <Link to="/" className="btn-primary" id="back-to-home-btn">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
