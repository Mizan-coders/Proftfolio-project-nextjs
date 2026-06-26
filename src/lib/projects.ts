export type Project = {
  name: string;
  category: string;
  /** path under /public, or null for a styled placeholder */
  image: string | null;
  description: string;
  problem: string;
  /** optional "what I built" bullets; falls back to `solution` paragraph */
  highlights?: string[];
  solution: string;
  result: string;
  stack: string[];
  href?: string;
};

// NOTE: The problem / solution / result copy below is editable placeholder text.
// Replace it with the real details (and any real metrics) for each project.
export const projects: Project[] = [
  {
    name: "Adapt Naturals",
    category: "DTC Supplements · Shopify Plus",
    // TODO: drop your screenshot at public/project/adapt-naturals.jpg, then set this path
    image: null,
    description:
      "Full storefront redesign and CRO overhaul for Chris Kresser's premium supplement brand — built to scale DTC revenue through subscriptions, personalized discovery and higher-converting product pages.",
    problem:
      "A premium supplement brand that needed a higher-converting storefront with a strong subscription model and personalized product discovery to scale DTC revenue.",
    highlights: [
      "CRO-driven PDP redesign & customization",
      "Subscription model + subscription-flow modifications",
      "Custom quiz app for personalized recommendations",
      "Cart & bundle upsells built with custom apps",
      "Product recommendation strategy",
      "Sales funnels + A/B testing analysis & management",
    ],
    solution:
      "Redesigned the store and rebuilt the conversion layer end-to-end — CRO-optimized PDPs, a subscription model with custom flow logic, a custom quiz app for personalized recommendations, cart and bundle upsells via custom apps, and sales funnels managed through ongoing A/B testing.",
    result:
      "A faster, conversion-focused storefront with recurring subscription revenue, higher AOV from upsells and bundles, and personalized product discovery that guides customers to the right supplements.",
    stack: [
      "Shopify Plus",
      "Liquid",
      "Custom Apps",
      "Subscriptions",
      "Quiz App",
      "A/B Testing",
      "JavaScript",
    ],
    href: "https://adaptnaturals.com",
  },
  {
    name: "Two Brothers Organic Farms",
    category: "Organic Ecommerce Brand",
    image: "/project/two-brothers.jpg",
    description:
      "A storytelling-led storefront for an organic food brand with rich content and merchandising.",
    problem:
      "The brand needed a content-rich store that balanced their farm story with a smooth shopping experience.",
    solution:
      "Developed custom sections for storytelling, recipes and bundles, with flexible merchandising controls.",
    result:
      "An engaging, on-brand storefront that showcases the product range while staying easy to manage.",
    stack: ["Shopify", "Liquid", "Custom Sections", "JavaScript"],
    href: "#",
  },
  {
    name: "Aquaria",
    category: "Science-Led Beauty Brand",
    image: "/project/aqueria.jpg",
    description:
      "A bold, modern storefront with a strong visual identity and interactive product pages.",
    problem:
      "Off-the-shelf themes couldn't deliver the immersive, brand-forward experience the product deserved.",
    solution:
      "Built a custom theme with interactive sections and a polished product page tailored to the brand.",
    result:
      "A distinctive, fast storefront that elevates the brand and supports its merchandising goals.",
    stack: ["Shopify 2.0", "Liquid", "Tailwind", "JavaScript"],
    href: "#",
  },
];
