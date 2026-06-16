/**
 * Single source of truth for personal / brand details.
 * Edit the values below — they flow through every section, the footer,
 * metadata and the contact links. WhatsApp/social placeholders are marked.
 */

export const site = {
  name: "Mizanur Rahman",
  firstName: "Mizan",
  role: "Sr. Full-Stack Shopify Developer & CRO Expert",
  profileImage: "/project/Mizan-ph.jpg",
  tagline:
    "Senior Shopify Plus & CRO developer helping agencies and D2C brands lift conversion with A/B testing, funnel optimization and dependable white-label ecommerce engineering.",

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
  url: "https://mizandevs.vercel.app",

  // Headline stats (sourced from CV)
  stats: {
    experience: "10+ yrs",
    brands: "100+",
    conversion: "30%+",
    shopifyPlus: "Shopify Plus",
    responseWindow: "24h",
  },
} as const;

/** Pre-built WhatsApp deep link */
export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;
