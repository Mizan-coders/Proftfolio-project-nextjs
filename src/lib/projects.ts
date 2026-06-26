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
    image: "/project/adapt-naturals.jpg",
    description:
      "Full storefront redesign and CRO overhaul for Chris Kresser's premium supplement brand — built to scale DTC revenue through subscriptions, personalized discovery and higher-converting product pages.",
    problem:
      "A premium supplement brand that needed a higher-converting storefront with a strong subscription model and personalized product discovery to scale DTC revenue.",
    highlights: [
      "CRO-driven PDP redesign & customization",
      "Subscription model + subscription-flow modifications",
      "Custom quiz app for personalized recommendations",
      "Cart & bundle upsells built with custom apps",
      "Checkout UI extensions for custom checkout content & upsells",
      "Shopify Functions for subscription & bundle discounts and cart validations",
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
    name: "Krumbled Foods",
    category: "Multi-Niche DTC · Shopify",
    image: "/project/krumbledfoods.jpg",
    description:
      "A multi-niche DTC storefront (food + beauty/skincare) with three tailored homepages and a bundle-driven conversion layer.",
    problem:
      "A brand spanning multiple product niches — including beauty/skincare — that needed distinct, on-brand experiences for each, plus a higher-converting, bundle-driven storefront.",
    highlights: [
      "CRO-driven PDP redesign & customization",
      "3 custom homepages for 3 niches, cross-linked from the header menu",
      "Custom bundle app + cart & bundle upsells",
      "Checkout UI extensions for a branded checkout experience",
      "Shopify Functions for bundle discounts & volume pricing",
      "Product recommendation strategy",
      "Sales funnels + A/B testing analysis & management",
    ],
    solution:
      "Built three tailored homepages for the brand's different niches (linked from the header on every page), redesigned the PDPs for conversion, and added a custom bundle app powering cart and bundle upsells, plus sales funnels managed through ongoing A/B testing.",
    result:
      "Distinct, on-brand experiences per niche with higher AOV from bundles and upsells, and a conversion-focused storefront the team can scale across categories.",
    stack: [
      "Shopify Plus",
      "Liquid",
      "Custom Apps",
      "Bundles",
      "A/B Testing",
      "JavaScript",
    ],
    href: "https://krumbledfoods.com",
  },
  {
    name: "GOJU Shots",
    category: "Functional Wellness · Shopify",
    image: "/project/goju.jpg",
    description:
      "Figma-to-Shopify build for a New Zealand functional-wellness shots brand — translated the design pixel-perfect and built the full conversion layer for DTC growth.",
    problem:
      "A wellness brand with a finished Figma design that needed a pixel-perfect, high-converting Shopify storefront with subscriptions and bundle-driven AOV.",
    highlights: [
      "Pixel-perfect Figma → Shopify build",
      "CRO-driven PDP redesign & customization",
      "Subscription model + subscription-flow modifications",
      "Custom cart drawer implementation",
      "Free-shipping progress calculator in the cart drawer",
      "Custom bundle app + cart & bundle upsells",
      "AI-powered product recommendations",
      "Checkout UI extensions to customize the checkout flow",
      "Shopify Functions for bundle discounts & delivery customization",
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
    href: "https://gojushots.com",
  },
];
