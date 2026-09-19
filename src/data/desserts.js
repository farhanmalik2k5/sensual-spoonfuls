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
  {
    name: "Caramel Opulence",
    slug: "caramel-opulence",
    tagline:
      "Salted caramel & cream cheesecake parfait over a buttery vanilla wafer crust.",
    cardImage: "/assets/desserts/caramel-opulence.jpg",
    infoImage: "/assets/desserts/caramel-opulence-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for Caramel Opulence dessert cup by Sensual Spoonfuls. 360 calories per serving, approximately 5% ABV.",
    calories: 360,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "B.B.C. (Bailey's, Banana, Coconut)",
    slug: "bbc",
    tagline:
      "A luscious layered cheesecake shooter with Bailey's, tropical coconut, and sweet banana.",
    cardImage: "/assets/desserts/bbc.jpg",
    infoImage: "/assets/desserts/bbc-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for B.B.C. (Bailey's, Banana, Coconut) dessert cup by Sensual Spoonfuls. 340 calories per serving, approximately 5% ABV.",
    calories: 340,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Haunted Seduction",
    slug: "haunted-seduction",
    tagline:
      "Decadent layers of rich dark chocolate cheesecake, cherry cheesecake, and Oreo crumble, topped with a cherry.",
    cardImage: "/assets/desserts/haunted-seduction.jpg",
    infoImage: "/assets/desserts/haunted-seduction-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for Haunted Seduction dessert cup by Sensual Spoonfuls. 300 calories per serving, approximately 5% ABV.",
    calories: 300,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Dirty Desires",
    slug: "dirty-desires",
    tagline: "Love at first bite. Indulge in every layer.",
    cardImage: "/assets/desserts/dirty-desires.jpg",
    infoImage: "/assets/desserts/dirty-desires-info.jpg",
    infoImageAlt:
      "Nutrition facts and ingredient information for Dirty Desires dessert cup by Sensual Spoonfuls. 320 calories per serving, approximately 5% ABV.",
    calories: 320,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "B.W.C. (Bailey's, White Chocolate, Coconut)",
    slug: "bwc",
    tagline: "Silky. Seductive. Unforgettable.",
    cardImage: "/assets/desserts/BWC.png",
    infoImage: "/assets/desserts/BWC.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for B.W.C. (Bailey's, White Chocolate, Coconut) dessert cup by Sensual Spoonfuls. 340 calories per serving, approximately 5% ABV.",
    calories: 340,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Berry Naughty",
    slug: "berry-naughty",
    tagline: "The Berry best Kind of Trouble.",
    cardImage: "/assets/desserts/Berry Naughty.png",
    infoImage: "/assets/desserts/Berry Naughty.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Berry Naughty dessert cup by Sensual Spoonfuls. 310 calories per serving, approximately 5% ABV.",
    calories: 310,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Blow Job",
    slug: "blow-job",
    tagline: "The sweetest finish at the bar.",
    cardImage: "/assets/desserts/Blowjob.png",
    infoImage: "/assets/desserts/Blowjob.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Blow Job dessert cup by Sensual Spoonfuls. 330 calories per serving, approximately 5% ABV.",
    calories: 330,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Chateau Cherry",
    slug: "chateau-cherry",
    tagline: "Decadent dark chocolate and rich cherry layers.",
    cardImage: "/assets/desserts/Chateau Cherry.png",
    infoImage: "/assets/desserts/Chateau Cherry.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Chateau Cherry dessert cup by Sensual Spoonfuls. 320 calories per serving, approximately 5% ABV.",
    calories: 320,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Crimson Silk",
    slug: "crimson-silk",
    tagline: "Velvety strawberry and chocolate layers.",
    cardImage: "/assets/desserts/Crimson Silk.png",
    infoImage: "/assets/desserts/Crimson Silk.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Crimson Silk dessert cup by Sensual Spoonfuls. 300 calories per serving, approximately 5% ABV.",
    calories: 300,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Eclipse Reserve",
    slug: "eclipse-reserve",
    tagline: "Dark blackberry and rich chocolate luxury.",
    cardImage: "/assets/desserts/Eclipse Reserve.png",
    infoImage: "/assets/desserts/Eclipse Reserve.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Eclipse Reserve dessert cup by Sensual Spoonfuls. 310 calories per serving, approximately 5% ABV.",
    calories: 310,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Emerald Citrus Dream",
    slug: "emerald-citrus",
    tagline: "Bright citrus and creamy indulgence in every layer.",
    cardImage: "/assets/desserts/Emerald Citrus.png",
    infoImage: "/assets/desserts/Emerald Citrus.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Emerald Citrus Dream dessert cup by Sensual Spoonfuls. 290 calories per serving, approximately 5% ABV.",
    calories: 290,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Fat Tuesday Fantasy",
    slug: "fat-tuesday-fantasy",
    tagline: "A little sinful. A lot unforgettable.",
    cardImage: "/assets/desserts/Fat Tuesday Fantasy.png",
    infoImage: "/assets/desserts/Fat Tuesday Fantasy.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Fat Tuesday Fantasy dessert cup by Sensual Spoonfuls. 340 calories per serving, approximately 5% ABV.",
    calories: 340,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Forbidden Velvet Raspberry",
    slug: "forbidden-velvet-raspberry",
    tagline: "Tart raspberry compote over silky dark chocolate cheesecake.",
    cardImage: "/assets/desserts/Forbidden Velvet Raspberry.png",
    infoImage: "/assets/desserts/Forbidden Velvet Raspberry.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Forbidden Velvet Raspberry dessert cup by Sensual Spoonfuls. 310 calories per serving, approximately 5% ABV.",
    calories: 310,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Golden Mirage",
    slug: "golden-mirage",
    tagline: "Caramelized apple and cinnamon cream over a golden crust.",
    cardImage: "/assets/desserts/Golden Mirage.png",
    infoImage: "/assets/desserts/Golden Mirage.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Golden Mirage dessert cup by Sensual Spoonfuls. 330 calories per serving, approximately 5% ABV.",
    calories: 330,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Golden Shower",
    slug: "golden-shower",
    tagline: "Dripping in gold. Drenched in desire.",
    cardImage: "/assets/desserts/Golden Shower.png",
    infoImage: "/assets/desserts/Golden Shower.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Golden Shower dessert cup by Sensual Spoonfuls. 320 calories per serving, approximately 5% ABV.",
    calories: 320,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Island Bliss",
    slug: "island-bliss",
    tagline: "Sweet tropical pineapple and coconut bliss.",
    cardImage: "/assets/desserts/Island Bliss.png",
    infoImage: "/assets/desserts/Island Bliss.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Island Bliss dessert cup by Sensual Spoonfuls. 300 calories per serving, approximately 5% ABV.",
    calories: 300,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Kiss My Peach",
    slug: "kiss-my-peach",
    tagline: "A sweet Southern kiss with a naughty little twist.",
    cardImage: "/assets/desserts/Kiss my Peach.png",
    infoImage: "/assets/desserts/Kiss my Peach.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Kiss My Peach dessert cup by Sensual Spoonfuls. 295 calories per serving, approximately 5% ABV.",
    calories: 295,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Liberty Luxe",
    slug: "liberty-luxe",
    tagline: "Patriotic red, white, and blueberry layered indulgence.",
    cardImage: "/assets/desserts/Liberty Luxe.png",
    infoImage: "/assets/desserts/Liberty Luxe.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Liberty Luxe dessert cup by Sensual Spoonfuls. 310 calories per serving, approximately 5% ABV.",
    calories: 310,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Passion Breeze",
    slug: "passion-breeze",
    tagline: "Tropical passion fruit and toasted coconut parfait.",
    cardImage: "/assets/desserts/Passion Breeze.png",
    infoImage: "/assets/desserts/Passion Breeze.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Passion Breeze dessert cup by Sensual Spoonfuls. 290 calories per serving, approximately 5% ABV.",
    calories: 290,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Sinfully Spiced",
    slug: "sinfully-spiced",
    tagline: "Wrapped in spice, served with seduction.",
    cardImage: "/assets/desserts/Sinfully Spiced.png",
    infoImage: "/assets/desserts/Sinfully Spiced.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Sinfully Spiced dessert cup by Sensual Spoonfuls. 330 calories per serving, approximately 5% ABV.",
    calories: 330,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Take My Cherry",
    slug: "take-my-cherry",
    tagline: "Rich. Creamy. Decadent. A temptation in every bite.",
    cardImage: "/assets/desserts/Take my Cherry.png",
    infoImage: "/assets/desserts/Take my Cherry.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Take My Cherry dessert cup by Sensual Spoonfuls. 325 calories per serving, approximately 5% ABV.",
    calories: 325,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Tropical Sunset",
    slug: "tropical-sunset",
    tagline: "A sunset in a glass. Sweet, creamy, and unforgettable.",
    cardImage: "/assets/desserts/Tropical Sunset.png",
    infoImage: "/assets/desserts/Tropical Sunset.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Tropical Sunset dessert cup by Sensual Spoonfuls. 295 calories per serving, approximately 5% ABV.",
    calories: 295,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
  {
    name: "Tropical Treasure",
    slug: "tropical-treasure",
    tagline: "Bright. Creamy. Tropical. A layered escape in every bite.",
    cardImage: "/assets/desserts/Tropical Treasure.png",
    infoImage: "/assets/desserts/Tropical Treasure.png",
    infoImageAlt:
      "Nutrition facts and ingredient information for Tropical Treasure dessert cup by Sensual Spoonfuls. 300 calories per serving, approximately 5% ABV.",
    calories: 300,
    abv: "~5%",
    servingSize: "1 dessert cup (3 oz / 85 g)",
  },
];

/**
 * Find a dessert by its URL slug.
 * Returns undefined if not found (triggers 404 state in DessertPage).
 */
export function getDessertBySlug(slug) {
  return desserts.find((d) => d.slug === slug);
}

