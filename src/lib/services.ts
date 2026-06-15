import {
  Frame,
  Store,
  ArrowLeftRight,
  Layers,
  PenTool,
  Code2,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  short: string; // short label for nav dropdown
  forWho: string;
  description: string;
  href: string;
  icon: LucideIcon;
  /** accent color as an HSL triple, e.g. "177 85% 55%" — drives the card glow */
  accent: string;
  /** true when there's a dedicated detail page under /services/[slug] */
  hasPage: boolean;
  slug?: string;
};

export const services: Service[] = [
  {
    title: "Figma to Shopify Theme Development",
    short: "Figma to Shopify",
    forWho: "For agencies and ecommerce brands with approved designs",
    description: "Pixel-perfect Shopify 2.0 builds with reusable sections, responsive polish, and editor-friendly flexibility.",
    href: "/services/figma-to-shopify",
    slug: "figma-to-shopify",
    icon: Frame,
    accent: "177 85% 55%",
    hasPage: true,
  },
  {
    title: "Custom Shopify Theme Development",
    short: "Custom Shopify Themes",
    forWho: "For brands that need tailored storefront UX and performance",
    description: "Custom sections, templates, and features engineered for merchandising, conversion, and long-term maintainability.",
    href: "/services/custom-shopify-theme-development",
    slug: "custom-shopify-theme-development",
    icon: Store,
    accent: "210 90% 62%",
    hasPage: true,
  },
  {
    title: "Shopify Store Migration",
    short: "Shopify Migrations",
    forWho: "For brands moving from WordPress, Wix, Webflow, or custom sites",
    description: "A smoother migration path into Shopify without losing the structure, content clarity, or brand feel that already works.",
    href: "/#contact",
    icon: ArrowLeftRight,
    accent: "350 85% 64%",
    hasPage: false,
  },
  {
    title: "White-Label Frontend Development",
    short: "Frontend for Agencies",
    forWho: "For agencies needing dependable implementation support",
    description: "Frontend capacity for Shopify, WordPress, Webflow, and custom interfaces delivered under your workflow and standards.",
    href: "/services/headless-shopify-nextjs",
    slug: "headless-shopify-nextjs",
    icon: Layers,
    accent: "190 90% 55%",
    hasPage: true,
  },
  {
    title: "Figma to WordPress or Webflow",
    short: "Figma to WordPress / Webflow",
    forWho: "For design-led teams that need faithful frontend implementation",
    description: "Production-ready pages and CMS builds that preserve design intent and simplify client handoff.",
    href: "/#contact",
    icon: PenTool,
    accent: "262 83% 68%",
    hasPage: false,
  },
  {
    title: "React / Next.js Implementation",
    short: "React / Next.js",
    forWho: "For startups and product teams shipping custom frontend experiences",
    description: "Modern component-based frontend builds with responsive UX, maintainable code, and reliable execution from design to QA.",
    href: "/services/headless-shopify-nextjs",
    slug: "headless-shopify-nextjs",
    icon: Code2,
    accent: "28 92% 60%",
    hasPage: true,
  },
  {
    title: "HTML Email Development",
    short: "HTML Emails",
    forWho: "For ecommerce teams and agencies running campaign-heavy retention programs",
    description: "Responsive email builds that render cleanly across major clients and stay aligned with brand visuals.",
    href: "/#contact",
    icon: Mail,
    accent: "292 80% 66%",
    hasPage: false,
  },
];

/** Distinct services that have a dedicated detail page (for /services/[slug]) */
export const servicePages = services.filter(
  (s, i, arr) => s.hasPage && arr.findIndex((x) => x.slug === s.slug) === i
);
