export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  forWho: string[];
  included: string[];
  process: { title: string; desc: string }[];
  caseSnippet: { name: string; result: string };
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "custom-shopify-theme-development": {
    slug: "custom-shopify-theme-development",
    title: "Custom Shopify Theme Development",
    tagline:
      "Tailored storefront UX with custom sections, templates and merchandising features built around your brand.",
    forWho: [
      "Brands that have outgrown off-the-shelf themes",
      "Merchants needing custom merchandising or product features",
      "Teams who want a storefront that matches their exact brand",
    ],
    included: [
      "Custom sections, templates and page layouts",
      "Bespoke merchandising and product-display features",
      "Theme-editor controls so content stays in your hands",
      "Speed and accessibility best practices",
      "Clean, scalable, well-documented code",
    ],
    process: [
      { title: "Discovery", desc: "Map your goals, brand, and feature requirements." },
      { title: "Build", desc: "Develop custom sections and templates iteratively." },
      { title: "QA & revisions", desc: "Test across devices and refine the experience." },
      { title: "Launch", desc: "Deploy with support and a smooth handoff." },
    ],
    caseSnippet: {
      name: "Krumbled Foods",
      result: "+18% conversion across 3 tailored niche storefronts.",
    },
  },
  "headless-shopify-nextjs": {
    slug: "headless-shopify-nextjs",
    title: "Headless Shopify & React / Next.js Development",
    tagline:
      "Custom, app-like frontends on the Shopify Storefront API — or white-label React / Next.js capacity for your agency.",
    forWho: [
      "Startups shipping custom, interactive frontend experiences",
      "Brands wanting an app-like, lightning-fast storefront",
      "Agencies needing dependable React / Next.js implementation support",
    ],
    included: [
      "Next.js front end on the Shopify Storefront API",
      "Custom cart, checkout flows and interactive components",
      "Reusable, typed component library (TypeScript)",
      "SEO, performance and Core Web Vitals optimization",
      "White-label collaboration under your workflow",
    ],
    process: [
      { title: "Architecture", desc: "Plan data flow, components, and integrations." },
      { title: "Build", desc: "Develop the frontend with reusable, typed components." },
      { title: "QA & revisions", desc: "Test performance, accessibility and edge cases." },
      { title: "Delivery", desc: "Ship with documentation and ongoing support." },
    ],
    caseSnippet: {
      name: "Adapt Naturals",
      result: "+25% conversion on a headless React storefront.",
    },
  },
};
