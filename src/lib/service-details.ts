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
  "figma-to-shopify": {
    slug: "figma-to-shopify",
    title: "Figma to Shopify Theme Development",
    tagline:
      "Hand me your approved Figma file and get back a pixel-perfect, fully responsive Shopify 2.0 theme your team can manage.",
    forWho: [
      "Agencies with client designs that need faithful implementation",
      "Ecommerce brands with a finished Figma but no Shopify developer",
      "Teams that want reusable sections, not a one-off hardcoded theme",
    ],
    included: [
      "Pixel-perfect conversion of every Figma frame",
      "Shopify 2.0 sections & blocks editable in the theme editor",
      "Mobile-first, cross-browser responsive markup",
      "Performance-minded, clean Liquid and JavaScript",
      "QA across breakpoints and a documented handoff",
    ],
    process: [
      { title: "Design review", desc: "Audit the Figma file, flag gaps, confirm scope and timeline." },
      { title: "Build", desc: "Develop reusable sections matching the design to the pixel." },
      { title: "QA & revisions", desc: "Test every breakpoint and refine until it's perfect." },
      { title: "Handoff", desc: "Deliver a clean, editable theme with launch support." },
    ],
    caseSnippet: {
      name: "Luxe Living — Home & Decor",
      result: "Launched in 12 days with a 40% faster mobile load.",
    },
  },
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
      name: "NordSupply — B2B Store",
      result: "25% lift in mobile conversion after the rebuild.",
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
      name: "Pulse — Headless Storefront",
      result: "Sub-second navigation and a 30% increase in AOV.",
    },
  },
};
