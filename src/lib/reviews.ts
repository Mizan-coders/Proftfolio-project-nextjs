export type Review = {
  rating: number;
  quote: string;
  category: string;
  timeAgo: string;
  name: string;
  country: string;
  flag: string;
  /** review source shown as a wordmark (e.g. "Fiverr") */
  source?: string;
};

export const reviewTags: { title: string; sub: string }[] = [
  { title: "Fast", sub: "turnaround" },
  { title: "Pixel-perfect", sub: "build quality" },
  { title: "Agency-ready", sub: "collaboration" },
  { title: "Ecommerce", sub: "development focus" },
];

export const reviews: Review[] = [
  {
    rating: 5,
    quote:
      "Delivered our Figma design as a Shopify theme exactly as drawn. Communication was fast and the handoff was clean.",
    category: "Figma to Shopify",
    timeAgo: "2 weeks ago",
    name: "James Carter",
    country: "United States",
    flag: "🇺🇸",
  },
  {
    rating: 5,
    quote:
      "Best white-label developer we've worked with. He slotted into our workflow and our client never knew we outsourced.",
    category: "White-Label Frontend",
    timeAgo: "1 month ago",
    name: "Sophie Müller",
    country: "Germany",
    flag: "🇩🇪",
  },
  {
    rating: 5,
    quote:
      "Migrated our store from WooCommerce without losing a single ranking. Pure professional from start to finish.",
    category: "Store Migration",
    timeAgo: "3 weeks ago",
    name: "Liam O'Brien",
    country: "Ireland",
    flag: "🇮🇪",
  },
  {
    rating: 5,
    quote:
      "Pixel-perfect builds and lightning-fast turnaround. He's now our go-to for every Shopify front-end project.",
    category: "Custom Shopify Theme",
    timeAgo: "1 week ago",
    name: "Olivia Bennett",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    rating: 5,
    quote:
      "The Next.js storefront he built is genuinely fast. Clean components, well documented, easy for our team to extend.",
    category: "React / Next.js",
    timeAgo: "2 months ago",
    name: "Noah Williams",
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    rating: 5,
    quote:
      "Responsive, reliable and detail-obsessed. Our retention emails finally render perfectly across every client.",
    category: "HTML Email",
    timeAgo: "1 month ago",
    name: "Emma Dubois",
    country: "France",
    flag: "🇫🇷",
  },
  {
    rating: 5,
    quote:
      "Took a messy brief and turned it into a beautiful, scalable theme. Worth every cent and then some.",
    category: "Custom Shopify Theme",
    timeAgo: "3 months ago",
    name: "Lucas Silva",
    country: "Brazil",
    flag: "🇧🇷",
  },
  {
    rating: 5,
    quote:
      "Handled our agency overflow during a crunch and delivered ahead of schedule. A true partner.",
    category: "White-Label Frontend",
    timeAgo: "2 weeks ago",
    name: "Charlotte Nguyen",
    country: "Australia",
    flag: "🇦🇺",
  },
  {
    rating: 5,
    quote:
      "Clean, scalable code that our developers actually enjoyed picking up. Rare to find this level of care.",
    category: "Frontend Development",
    timeAgo: "1 month ago",
    name: "Daniel Rossi",
    country: "Italy",
    flag: "🇮🇹",
  },
  {
    rating: 5,
    quote:
      "From Figma to live store in under two weeks, fully responsive. Couldn't recommend him more highly.",
    category: "Figma to Shopify",
    timeAgo: "5 weeks ago",
    name: "Mia Andersen",
    country: "Denmark",
    flag: "🇩🇰",
  },
  {
    rating: 5,
    quote:
      "Knows Shopify inside out. Solved merchandising problems other devs told us were impossible.",
    category: "Custom Shopify Theme",
    timeAgo: "2 months ago",
    name: "Ethan Park",
    country: "South Korea",
    flag: "🇰🇷",
  },
  {
    rating: 5,
    quote:
      "Great communicator across time zones, always on top of revisions. The final build was flawless.",
    category: "Figma to WordPress",
    timeAgo: "6 weeks ago",
    name: "Isabella García",
    country: "Spain",
    flag: "🇪🇸",
  },
];
