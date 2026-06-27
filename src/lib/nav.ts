import {
  Home,
  User,
  Wrench,
  BadgeCheck,
  Handshake,
  Briefcase,
  HelpCircle,
  MessageSquare,
  IdCard,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  /** section id used for scroll-spy on the homepage */
  sectionId?: string;
  icon?: LucideIcon;
};

/** Primary nav items (in order) used by the navbar scroll-spy */
export const navItems: NavItem[] = [
  { label: "Home", href: "/#home", sectionId: "home", icon: Home },
  { label: "About", href: "/#about", sectionId: "about", icon: User },
  { label: "Services", href: "/#services", sectionId: "services", icon: Wrench },
  { label: "Proof", href: "/#testimonials", sectionId: "testimonials", icon: BadgeCheck },
  { label: "Why Me", href: "/#agencies", sectionId: "agencies", icon: Handshake },
  { label: "Work", href: "/#projects", sectionId: "projects", icon: Briefcase },
  { label: "FAQ", href: "/#faq", sectionId: "faq", icon: HelpCircle },
  { label: "Contact", href: "/#contact", sectionId: "contact", icon: MessageSquare },
  { label: "About Me", href: "/about", icon: IdCard },
];

/** Footer nav links */
export const footerNav: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Agencies", href: "/#agencies" },
  { label: "SaaS Solution", href: "/#saas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];
