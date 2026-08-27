import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <Link to="/" className="footer__logo" aria-label="Sensual Spoonfuls — Return to Homepage">
          <img
            src="/assets/logo-icon.png"
            alt=""
            className="footer__logo-icon"
            aria-hidden="true"
            width="32"
            height="32"
          />
          <span className="footer__logo-name">Sensual Spoonfuls</span>
        </Link>

        <div className="footer__divider" role="separator" />

        <p className="footer__abv-notice">
          All Sensual Spoonfuls dessert cups contain approximately 5% ABV per 3 oz serving.
          Must be 21+ to purchase. Enjoy responsibly.
        </p>

        <p className="footer__copy">
          &copy; {year} Sensual Spoonfuls. All rights reserved.
          &nbsp;·&nbsp; Surprise, AZ
        </p>
      </div>
    </footer>
  );
}
