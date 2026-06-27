export type Review = {
  rating: number;
  quote: string;
  category: string;
  timeAgo: string;
  name: string;
  country: string;
  flag: string;
  /** review source shown as a wordmark (e.g. "Fiverr") */
  source?: string;
};

export const reviewTags: { title: string; sub: string }[] = [
  { title: "Fast", sub: "turnaround" },
  { title: "Pixel-perfect", sub: "build quality" },
  { title: "Agency-ready", sub: "collaboration" },
  { title: "Ecommerce", sub: "development focus" },
];

// NOTE: Real clients/locations/projects below. Quote text is temporary demo
// copy (to be replaced with each client's real review).
export const reviews: Review[] = [
  {
    rating: 5,
    quote:
      "Took our mockup and rebuilt the whole store on Shopify exactly as designed. Fast, professional and a clean handoff.",
    category: "Zaccha · Mockup → Shopify",
    timeAgo: "Recent project",
    name: "Summer Song",
    country: "Singapore",
    flag: "🇸🇬",
  },
  {
    rating: 5,
    quote:
      "From Figma to a live, fully responsive Shopify store faster than we expected. Couldn't recommend him more highly.",
    category: "GOJU Shots · Figma to Shopify",
    timeAgo: "Recent project",
    name: "Annabel Hartles",
    country: "New Zealand",
    flag: "🇳🇿",
  },
  {
    rating: 5,
    quote:
      "Delivered our Figma design as a Shopify theme exactly as drawn. Communication was fast and the build quality was excellent.",
    category: "Rojo Outerwear · Figma to Shopify",
    timeAgo: "Recent project",
    name: "Jassie Salvrojo",
    country: "Australia",
    flag: "🇦🇺",
  },
  {
    rating: 5,
    quote:
      "Migrated our store to Shopify smoothly without losing a thing. A true professional from start to finish.",
    category: "Proski · Store Migration",
    timeAgo: "Recent project",
    name: "Madeleine McVie",
    country: "Australia",
    flag: "🇦🇺",
  },
];
