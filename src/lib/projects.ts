export type Project = {
  name: string;
  category: string;
  /** path under /public, or null for a styled placeholder */
  image: string | null;
  description: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  href?: string;
};

// NOTE: The problem / solution / result copy below is editable placeholder text.
// Replace it with the real details (and any real metrics) for each project.
export const projects: Project[] = [
  {
    name: "Fyne Skincare",
    category: "Premium Skincare Brand",
    image: "/project/fyne.jpg",
    description:
      "A clean, conversion-focused skincare storefront built pixel-perfect from design.",
    problem:
      "The brand had a polished design but needed it translated into a fast, editable Shopify theme without losing any detail.",
    solution:
      "Built reusable Shopify 2.0 sections with a refined product and collection experience, matching the design to the pixel.",
    result:
      "A premium, mobile-first storefront the team can update on their own — delivered on schedule.",
    stack: ["Shopify 2.0", "Liquid", "Tailwind", "JavaScript"],
    href: "#",
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
