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
  const { name, slug, tagline, cardImage, infoImage, calories, abv } = dessert;
  const imageToDisplay = cardImage || infoImage;

  return (
    <Link
      to={`/nutrition/${slug}`}
      className="dessert-card"
      aria-label={`View ingredients and nutritional value for ${name}`}
    >
      {/* Pure dessert product photograph */}
      <div className="dessert-card__image-wrap">
        <img
          src={imageToDisplay}
          alt={`${name} dessert cup`}
          className="dessert-card__image"
          loading="lazy"
          width="400"
          height="533"
        />
        {/* ABV badge */}
        <span className="dessert-card__badge" aria-label={`Contains approximately ${abv} alcohol by volume`}>
          {abv} ABV / AF Available
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
            <span className="dessert-card__meta-label">Variants</span>
            <span className="dessert-card__meta-value">Alcohol / AF</span>
          </div>
        </div>

        {/* Explicit Nutritional Value CTA */}
        <div className="dessert-card__cta" role="presentation">
          View Nutritional Value ↗
        </div>
      </div>
    </Link>
  );
}
