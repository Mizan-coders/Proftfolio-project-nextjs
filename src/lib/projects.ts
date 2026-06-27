export type Project = {
  name: string;
  category: string;
  /** path under /public, or null for a styled placeholder */
  image: string | null;
  description: string;
  /** optional role line, e.g. "Sole Developer — Shopify + CRO" */
  role?: string;
  /** optional headline outcome metrics */
  metrics?: { value: string; label: string }[];
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
    role: "Sole Developer — Shopify + CRO",
    metrics: [
      { value: "+25%", label: "Conversion rate" },
      { value: "+20%", label: "Avg. order value" },
    ],
    problem:
      "A premium supplement brand that needed a higher-converting storefront with a strong subscription model and personalized product discovery to scale DTC revenue.",
    highlights: [
      "CRO-driven PDP redesign & customization",
      "Headless Shopify storefront built with React",
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
      "Headless",
      "React",
      "Liquid",
      "Custom Apps",
      "Shopify Functions",
      "Shopify Flow",
      "Checkout Extensions",
      "Subscriptions",
      "Quiz App",
      "A/B Testing",
    ],
    href: "https://adaptnaturals.com",
  },
  {
    name: "Krumbled Foods",
    category: "Multi-Niche DTC · Shopify",
    image: "/project/krumbledfoods.jpg",
    description:
      "A multi-niche DTC storefront (food + beauty/skincare) with three tailored homepages and a bundle-driven conversion layer.",
    role: "Sole Developer — Shopify + CRO",
    metrics: [
      { value: "+18%", label: "Conversion rate" },
      { value: "30%", label: "Bundle attach rate" },
    ],
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
      "Shopify Functions",
      "Shopify Flow",
      "Checkout Extensions",
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
    role: "Sole Developer — Shopify + CRO",
    metrics: [
      { value: "+22%", label: "Conversion rate" },
      { value: "+15%", label: "Avg. order value" },
      { value: "35%", label: "Subscription rate" },
      { value: "96", label: "Lighthouse score" },
    ],
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
      "Shopify Functions",
      "Shopify Flow",
      "Checkout Extensions",
      "Subscriptions",
      "A/B Testing",
      "JavaScript",
    ],
    href: "https://gojushots.com",
  },
  {
    name: "Zaccha",
    category: "DTC Supplements · Shopify",
    image: "/project/zaccha-2026.jpg",
    description:
      "Premium immune-health supplement brand built around the patented GPComplex® ingredient — a single hero product backed by 20+ clinical studies and a 20-year track record, aimed at adults 40+. Translated the brand mockup into a fast, trust-led Shopify storefront.",
    role: "Sole Developer — Shopify",
    problem:
      "A science-led immune-health brand with a single hero product and strong credibility assets (clinical studies, 1M+ customers, 20 years in market) needed its mockup turned into a high-trust, conversion-ready Shopify storefront on the Horizon theme — one that communicates the science clearly to an audience of adults 40+.",
    highlights: [
      "Mockup → Shopify build, translated pixel-perfect",
      "Full Shopify Horizon theme rebuild with custom sections",
      "Single-product PDP structured around the science & credibility story",
      "Trust & credibility sections — clinical studies, testimonials and proof assets",
      "Mobile-first, performance-focused build",
    ],
    solution:
      "Rebuilt the Shopify Horizon theme from the brand mockup with custom sections, structuring the single-product PDP around the science and credibility story and surfacing trust assets throughout.",
    result:
      "A fast, credibility-first storefront that turns the brand's clinical science and 20-year track record into a clear, conversion-ready buying experience — purpose-built for a single hero product and an audience of adults 40+.",
    stack: [
      "Mockup to Shopify",
      "Shopify",
      "Horizon Theme",
      "Liquid",
      "JavaScript",
    ],
    href: "https://zaccha.com",
  },
  {
    name: "Rojo Outerwear",
    category: "Outerwear Apparel · Shopify",
    image: "/project/rojoouterwear-au-2026.jpg",
    description:
      "Pixel-perfect Figma-to-Shopify build for an Australian outerwear brand — translated the design and built the storefront for DTC growth.",
    role: "Sole Developer — Shopify",
    metrics: [
      { value: "+23%", label: "Conversion rate" },
      { value: "+25%", label: "Avg. order value" },
    ],
    problem:
      "An apparel brand with a finished Figma design that needed a pixel-perfect, high-converting Shopify storefront built for DTC growth.",
    highlights: [
      "Pixel-perfect Figma → Shopify build",
      "Custom Shopify 2.0 sections built from the design",
      "Conversion-focused PDP & collection pages",
      "Custom cart & upsell experience",
      "Mobile-first, performance-focused build",
    ],
    solution:
      "Built the store from Figma — pixel-perfect, with custom Shopify 2.0 sections, conversion-focused product and collection pages, and a custom cart and upsell experience.",
    result:
      "A fast, on-brand storefront that translates the design faithfully and gives the brand a conversion-ready foundation to scale DTC.",
    stack: [
      "Figma to Shopify",
      "Shopify",
      "Liquid",
      "JavaScript",
    ],
    href: "https://www.rojoouterwear.com.au",
  },
  {
    name: "KetoVitals",
    category: "DTC Supplements · Shopify",
    image: "/project/ketovitals-2025.jpg",
    description:
      "Pixel-perfect Figma-to-Shopify build for a DTC keto supplement brand — translated the design on the Prestige theme and built the storefront for DTC growth.",
    role: "Sole Developer — Shopify",
    problem:
      "A supplement brand with a finished Figma design that needed a pixel-perfect, high-converting Shopify storefront built on the Prestige theme.",
    highlights: [
      "Pixel-perfect Figma → Shopify build on the Prestige theme",
      "Custom Shopify 2.0 sections built from the design",
      "Conversion-focused PDP & collection pages",
      "Custom cart & upsell experience",
      "Mobile-first, performance-focused build",
    ],
    solution:
      "Built the store from Figma on the Prestige theme — pixel-perfect, with custom Shopify 2.0 sections, conversion-focused product and collection pages, and a custom cart and upsell experience.",
    result:
      "A fast, on-brand storefront that translates the design faithfully and gives the brand a conversion-ready foundation to scale DTC.",
    stack: [
      "Figma to Shopify",
      "Shopify",
      "Prestige Theme",
      "Liquid",
      "JavaScript",
    ],
    href: "https://www.ketovitals.com",
  },
  {
    name: "Crafty Mixologist",
    category: "Cocktail & Bar · Shopify",
    image: "/project/craftymixologist-2025.jpg",
    description:
      "Prestige-theme store redesign with a custom browsing and cart experience — rebuilt collection pages, filtering and the cart drawer for smoother shopping.",
    role: "Sole Developer — Shopify",
    problem:
      "An existing store that needed a redesign with better product discovery and a smoother cart experience to lift conversion.",
    highlights: [
      "Prestige theme-based store redesign",
      "Custom collection page built from scratch",
      "Custom product filtering for faster discovery",
      "Custom cart drawer implementation",
      "Cart upsell app development",
      "Product recommendation app development",
      "Conversion-focused PDP & mobile-first build",
    ],
    solution:
      "Redesigned the store on the Prestige theme with a custom collection page, custom product filtering and a custom cart drawer, plus custom cart-upsell and product-recommendation apps for higher AOV.",
    result:
      "A cleaner, faster storefront with easier product discovery, a smoother path to checkout, and higher AOV from cart upsells and recommendations.",
    stack: [
      "Shopify",
      "Prestige Theme",
      "Liquid",
      "JavaScript",
      "Custom Apps",
      "Custom Filter",
    ],
    href: "https://craftymixologist.com",
  },
];

/** Lighter project entries (no metrics) shown on the dedicated /work page. */
export type MiniProject = {
  name: string;
  category: string;
  scope: string;
  stack: string[];
  href?: string;
};

export const moreProjects: MiniProject[] = [
  {
    name: "Proski",
    category: "Figma → Shopify · Migration",
    scope: "Full Figma → Shopify migration.",
    stack: ["Figma to Shopify", "Shopify", "Liquid", "Migration"],
    href: "https://proski.com.au",
  },
  {
    name: "Gentle Habits",
    category: "DTC · Shopify",
    scope: "Figma → Shopify build.",
    stack: ["Figma to Shopify", "Shopify", "Liquid"],
    href: "https://www.gentlehabits.com.au",
  },
];
