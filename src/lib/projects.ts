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
    name: "GOJU Shots",
    category: "Functional Wellness · Shopify",
    // TODO: drop your screenshot at public/project/goju.jpg, then set this path
    image: null,
    description:
      "Figma-to-Shopify build for a New Zealand functional-wellness shots brand — translated the design pixel-perfect and built the full conversion layer for DTC growth.",
    problem:
      "A wellness brand with a finished Figma design that needed a pixel-perfect, high-converting Shopify storefront with subscriptions and bundle-driven AOV.",
    highlights: [
      "Pixel-perfect Figma → Shopify build",
      "CRO-driven PDP redesign & customization",
      "Subscription model + subscription-flow modifications",
      "Custom bundle app + cart & bundle upsells",
      "Product recommendation strategy",
      "Sales funnels + A/B testing analysis & management",
    ],
    solution:
      "Built the store from Figma and rebuilt the conversion layer — CRO-optimized PDPs, a subscription model with custom flow logic, a custom bundle app powering cart and bundle upsells, product recommendations, and sales funnels managed through ongoing A/B testing.",
    result:
      "A fast, on-brand storefront with recurring subscription revenue and higher AOV driven by custom bundles and upsells.",
    stack: [
      "Figma to Shopify",
      "Shopify Plus",
      "Liquid",
      "Custom Apps",
      "Subscriptions",
      "A/B Testing",
      "JavaScript",
    ],
    // TODO: add the live GOJU store URL
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
