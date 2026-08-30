/**
 * SENSUAL SPOONFULS — Dessert Data
 * ─────────────────────────────────
 * This is the SINGLE SOURCE OF TRUTH for all desserts.
 *
 * To add a new dessert:
 *  1. Add a new object to the array below.
 *  2. Copy the corresponding info image into:
 *       public/assets/desserts/<slug>-info.jpg
 *  3. That's it. The card, route, and QR URL are all generated automatically.
 *
 * QR URL pattern: https://sensualspoonfuls.com/nutrition/<slug>
 */

export const desserts = [
  {
    /** Displayed name on cards and dessert page */
    name: "Buttery Nipple",
    /** URL slug → /nutrition/buttery-nipple */
    slug: "buttery-nipple",
    /** Short tagline shown on the card */
    tagline: "A layered dessert with butterscotch and white chocolate.",
    /** Pure dessert product photo for homepage menu cards */
    cardImage: "/assets/desserts/buttery-nipple.png",
    /** Path to the detailed nutrition/ingredient info image */
    infoImage: "/assets/desserts/buttery-nipple-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for Buttery Nipple dessert cup by Sensual Spoonfuls. 350 calories per serving, approximately 5% ABV.",
    /** Calories per serving (used for quick metadata) */
    calories: 350,
    /** Alcohol by volume per serving */
    abv: "~5%",
    /** Serving size */
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "The Orange Affair",
    slug: "the-orange-affair",
    tagline:
      "A layered citrus and cream dessert with a touch of indulgence in every spoonful.",
    cardImage: "/assets/desserts/orange-affair.png",
    infoImage: "/assets/desserts/orange-affair-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for The Orange Affair dessert cup by Sensual Spoonfuls. 290 calories per serving, approximately 5% ABV.",
    calories: 290,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Sinfully Seductive",
    slug: "sinfully-seductive",
    tagline: "Love at first bite. Indulge in every layer.",
    cardImage: "/assets/desserts/sinfully-seductive.png",
    infoImage: "/assets/desserts/sinfully-seductive-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for Sinfully Seductive dessert cup by Sensual Spoonfuls. 280 calories per serving, approximately 5% ABV.",
    calories: 280,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
];

// ─── ADD NEW DESSERTS BELOW THIS LINE ───────────────────────────────────────
  // {
  //   name: "New Dessert Name",
  //   slug: "new-dessert-slug",
  //   tagline: "Short, evocative description.",
  //   infoImage: "/assets/desserts/new-dessert-slug-info.jpg",
  //   infoImageAlt: "Nutrition facts for New Dessert Name...",
  //   calories: 320,
  //   abv: "~5%",
  //   servingSize: "1 dessert cup (3 oz / 85 g)",
  // },

/**
 * Find a dessert by its URL slug.
 * Returns undefined if not found (triggers 404 state in DessertPage).
 */
export function getDessertBySlug(slug) {
  return desserts.find((d) => d.slug === slug);
}
