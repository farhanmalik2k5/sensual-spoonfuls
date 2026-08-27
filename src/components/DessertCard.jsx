import { Link } from 'react-router-dom';

/**
 * DessertCard
 * ─────────────
 * Renders a single dessert card in the menu grid.
 * The entire card is a navigable link to /desserts/<slug>.
 * Clicking it changes the URL — no modals.
 *
 * @param {import('../data/desserts').Dessert} dessert
 */
export default function DessertCard({ dessert }) {
  const { name, slug, tagline, infoImage, infoImageAlt, calories, abv } = dessert;

  return (
    <Link
      to={`/desserts/${slug}`}
      className="dessert-card"
      aria-label={`View ingredients and nutrition for ${name}`}
    >
      {/* Info image (top portion showing dessert) used as card visual */}
      <div className="dessert-card__image-wrap">
        <img
          src={infoImage}
          alt={`${name} dessert cup`}
          className="dessert-card__image"
          loading="lazy"
          width="400"
          height="533"
        />
        {/* ABV badge */}
        <span className="dessert-card__badge" aria-label={`Contains approximately ${abv} alcohol by volume`}>
          {abv} ABV
        </span>
      </div>

      {/* Card Body */}
      <div className="dessert-card__body">
        <h3 className="dessert-card__name">{name}</h3>
        <p className="dessert-card__tagline">{tagline}</p>

        {/* Quick nutrition meta */}
        <div className="dessert-card__meta">
          <div className="dessert-card__meta-item">
            <span className="dessert-card__meta-label">Calories</span>
            <span className="dessert-card__meta-value">{calories}</span>
          </div>
          <div className="dessert-card__meta-item">
            <span className="dessert-card__meta-label">Serving</span>
            <span className="dessert-card__meta-value">3 oz</span>
          </div>
          <div className="dessert-card__meta-item">
            <span className="dessert-card__meta-label">ABV</span>
            <span className="dessert-card__meta-value">{abv}</span>
          </div>
        </div>

        {/* Explicit CTA */}
        <div className="dessert-card__cta" role="presentation">
          View Ingredients &amp; Info ↗
        </div>
      </div>
    </Link>
  );
}
