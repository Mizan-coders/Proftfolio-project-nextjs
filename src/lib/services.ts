import {
  TrendingUp,
  ListChecks,
  Repeat,
  Puzzle,
  LayoutTemplate,
  Code2,
  ArrowLeftRight,
  Handshake,
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
    title: "Shopify & Shopify Plus Theme Development",
    short: "Shopify Theme Dev",
    forWho: "For brands launching or rebuilding a storefront",
    description:
      "Pixel-perfect Figma-to-Shopify builds, custom Shopify 2.0 sections, and 0→1 brand storefronts on Shopify Plus.",
    href: "/services/custom-shopify-theme-development",
    slug: "custom-shopify-theme-development",
    icon: LayoutTemplate,
    accent: "210 90% 62%",
    hasPage: true,
  },
  {
    title: "Shopify CRO Optimization",
    short: "Shopify CRO",
    forWho: "For brands that want more revenue from existing traffic",
    description:
      "Data-driven A/B testing, PDP and funnel optimization, and AOV-boosting upsells — every decision backed by clean analytics.",
    href: "/#contact",
    icon: TrendingUp,
    accent: "177 85% 55%",
    hasPage: false,
  },
  {
    title: "Quizzes & Personalization",
    short: "Quizzes & Personalization",
    forWho: "For brands that want guided, personalized product discovery",
    description:
      "Custom quiz apps and product-recommendation logic that match shoppers to the right products and lift conversion.",
    href: "/#contact",
    icon: ListChecks,
    accent: "262 83% 68%",
    hasPage: false,
  },
  {
    title: "Subscriptions & Retention",
    short: "Subscriptions & Retention",
    forWho: "For brands building recurring revenue",
    description:
      "Subscription models, custom subscription flows, and win-back/retention funnels that reduce churn and grow lifetime value.",
    href: "/#contact",
    icon: Repeat,
    accent: "190 90% 55%",
    hasPage: false,
  },
  {
    title: "Checkout & Shopify Apps",
    short: "Checkout & Apps",
    forWho: "For brands needing custom Shopify functionality",
    description:
      "Custom apps, Checkout UI Extensions and Shopify Functions — bundles, upsells, validations and tailored checkout experiences.",
    href: "/#contact",
    icon: Puzzle,
    accent: "292 80% 66%",
    hasPage: false,
  },
  {
    title: "Headless Shopify (React / Next.js)",
    short: "Headless Shopify",
    forWho: "For brands & startups wanting app-like performance",
    description:
      "High-performance, app-like headless storefronts built on the Shopify Storefront API with React and Next.js.",
    href: "/services/headless-shopify-nextjs",
    slug: "headless-shopify-nextjs",
    icon: Code2,
    accent: "28 92% 60%",
    hasPage: true,
  },
  {
    title: "Shopify Store Migration",
    short: "Shopify Migrations",
    forWho: "For brands moving from Magento, OpenCart, WooCommerce, Wix or Squarespace",
    description:
      "A smooth migration into Shopify — preserving catalog structure, content, SEO and the brand feel that already works.",
    href: "/#contact",
    icon: ArrowLeftRight,
    accent: "350 85% 64%",
    hasPage: false,
  },
  {
    title: "White-Label Shopify Partner",
    short: "White-Label for Agencies",
    forWho: "For agencies that need dependable Shopify + CRO capacity",
    description:
      "Overflow development and conversion work delivered invisibly under your brand — theme builds, custom apps, A/B testing and funnels, on your workflow.",
    href: "/#contact",
    icon: Handshake,
    accent: "150 70% 48%",
    hasPage: false,
  },
];

/** Distinct services that have a dedicated detail page (for /services/[slug]) */
export const servicePages = services.filter(
  (s, i, arr) => s.hasPage && arr.findIndex((x) => x.slug === s.slug) === i
);
