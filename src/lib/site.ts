/**
 * Single source of truth for personal / brand details.
 * Edit the values below — they flow through every section, the footer,
 * metadata and the contact links. WhatsApp/social placeholders are marked.
 */

export const site = {
  name: "Mizanur Rahman",
  firstName: "Mizan",
  role: "Full-Stack Developer & Shopify Expert",
  profileImage: "/project/Mizan-ph.jpg",
  tagline:
    "Pixel-perfect Shopify builds, Figma to Shopify, React / Next.js and white-label frontend for agencies.",

  // Contact
  email: "Mizans.devs@gmail.com",
  // International format, digits only after the country code, no "+" or spaces — used in wa.me links
  whatsappNumber: "8801639608350",
  whatsappMessage: "Hi! I found your portfolio and I'd like to discuss a project.",
  location: "Dhaka District, Dhaka, Bangladesh",

  // Social links
  socials: {
    github: "https://github.com/yourusername", // TODO: add your GitHub URL
    linkedin: "https://www.linkedin.com/in/mizanweb/",
    facebook: "https://www.facebook.com/Mizan.coders",
    behance: "https://behance.net/yourusername", // TODO: add your Behance URL
  },

  // Deployment URL (used for SEO / OpenGraph)
  url: "https://yoursite.vercel.app", // TODO

  // Headline stats
  stats: {
    projects: "350+",
    shopifyStores: "300+",
    wordpressBuilds: "50+",
    experience: "5+ yrs",
    responseWindow: "24h",
  },
} as const;

/** Pre-built WhatsApp deep link */
export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
