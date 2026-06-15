import Link from "next/link";
import {
  MessageCircle,
  Star,
  Hammer,
  Workflow,
  Trophy,
  CheckCircle2,
  UserRound,
} from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { StatCard } from "@/components/ui/StatCard";
import { site, whatsappLink } from "@/lib/site";

const badges = [
  "White-label friendly",
  "Pixel-perfect builds",
  "Fast turnaround",
  "Clean scalable code",
];

const featureCards = [
  {
    icon: Hammer,
    title: "Build Scope",
    desc: "Shopify themes, Figma conversions, migrations and custom frontend.",
  },
  {
    icon: Workflow,
    title: "Working Style",
    desc: "White-label, async-friendly, and slotted neatly into your process.",
  },
  {
    icon: Trophy,
    title: "Outcome",
    desc: "Fast, responsive stores your clients and customers actually love.",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-360 flex-col justify-center px-6 pb-16 pt-28 lg:pt-32"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT */}
        <div className="animate-fade-in-up space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
            <CheckCircle2 className="size-4" />
            Full-Stack Developer · Shopify Expert · SaaS Builder
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Full-Stack Shopify &amp; Web Development
            <span className="mt-1 block text-primary">
              for Agencies, Brands &amp; B2B Growth
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            I turn approved designs into premium, production-ready builds — pixel-perfect
            Shopify stores, Figma conversions and modern web experiences.{" "}
            <Link href="/about" className="text-primary hover:underline">
              Know more about how I work
            </Link>
            .
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-3">
            <StatCard value={site.stats.projects} label="Projects delivered" />
            <StatCard value={site.stats.shopifyStores} label="Shopify stores" />
            <StatCard value={site.stats.experience} label="Agency-ready workflow" />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
            >
              <MessageCircle className="size-5" />
              WhatsApp Me Now
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 font-medium text-foreground transition-all hover:border-primary/50"
            >
              <UserRound className="size-4" />
              Know More About Me
            </Link>
          </div>

          {/* Badge tags */}
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
              >
                <CheckCircle2 className="size-3.5" />
                {b}
              </span>
            ))}
          </div>

          {/* Trust bar */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-muted-foreground">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" />
              ))}
            </div>
            <span>
              Trusted for fast delivery, white-label collaboration, and clean handoffs.
            </span>
          </div>
        </div>

        {/* RIGHT — single "delivery overview" window */}
        <div className="lg:animate-fade-in">
          <div className="rounded-3xl border border-primary/20 bg-[#0d1117] p-4 shadow-glow-lg sm:p-6">
            <CodeBlock />

            {/* Feature cards — stacked */}
            <div className="mt-5 space-y-3">
              {featureCards.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="portfolio-card rounded-xl border border-white/10 bg-white/4 p-4"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    <p className="font-semibold">{title}</p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm">
              <span className="font-semibold text-primary">
                Solo specialist. Agency-level execution.
              </span>{" "}
              <span className="text-foreground/90">
                Send your Figma file or project brief and I&apos;ll reply with next
                steps.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
