import {
  Handshake,
  Code2,
  Smartphone,
  MessageSquare,
  ShoppingCart,
  Layers,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const stats = [
  { value: site.stats.projects, label: "Projects" },
  { value: site.stats.shopifyStores, label: "Shopify stores" },
  { value: site.stats.wordpressBuilds, label: "WordPress builds" },
  { value: site.stats.responseWindow, label: "Response window" },
];

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Handshake,
    title: "White-label collaboration",
    desc: "I plug into agency workflows without adding delivery friction or client-facing confusion.",
  },
  {
    icon: Code2,
    title: "Clean, scalable code",
    desc: "Builds are organized for maintainability, future iteration, and easier developer handoff.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first implementation",
    desc: "Layouts are translated carefully across breakpoints so design quality holds on real devices.",
  },
  {
    icon: MessageSquare,
    title: "Responsive communication",
    desc: "Fast updates, low-friction collaboration, and clear scoping help teams move without blockers.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce delivery focus",
    desc: "Shopify builds are shaped around storefront UX, merchandising flexibility, and launch speed.",
  },
  {
    icon: Layers,
    title: "Cross-platform execution",
    desc: "Support spans Shopify, WordPress, Webflow, React, and Next.js when the project needs more than one stack.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* LEFT CARD */}
        <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <p className="text-base font-medium text-primary">
            About Me
          </p>

          <div className="mt-6">
            <div className="relative float-left mr-5 mb-1 size-28 overflow-hidden rounded-2xl border border-border bg-primary/15">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl">
              I&apos;m {site.name},{" "}
              <span className="text-primary">
                a Full-Stack Developer &amp; Shopify Expert.
              </span>
            </h2>
          </div>

          <div className="clear-both mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For over five years I&apos;ve helped agencies and ecommerce brands turn
              designs into fast, reliable storefronts — from Figma-to-Shopify builds
              and migrations to custom React and Next.js frontends.
            </p>
            <p>
              I work white-label, communicate clearly, and obsess over the details
              that make a build feel premium. You get a dependable delivery partner,
              not just another freelancer.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-background/40 p-4 text-center"
              >
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* RIGHT GRID */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 60}
              className="portfolio-card rounded-xl border border-border bg-card p-5"
            >
              <div className="mb-3 grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
