import {
  TrendingUp,
  FlaskConical,
  Store,
  Gauge,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const stats = [
  { value: site.stats.brands, label: "D2C brands served" },
  { value: site.stats.conversion, label: "Avg. conversion lift" },
  { value: site.stats.experience, label: "Experience" },
  { value: site.stats.responseWindow, label: "Response window" },
];

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: TrendingUp,
    title: "Conversion-focused development",
    desc: "Every build is shaped around CRO — turning more of your existing traffic into revenue.",
  },
  {
    icon: FlaskConical,
    title: "A/B testing & experimentation",
    desc: "Hypotheses run through Shoplift, VWO, Optimizely and Intelligems for data-backed wins.",
  },
  {
    icon: Store,
    title: "Shopify Plus & Liquid expertise",
    desc: "Custom themes, checkout customization, upsell flows and subscription logic at scale.",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    desc: "Speed-first engineering — lazy loading, asset minification and clean, fast page loads.",
  },
  {
    icon: BarChart3,
    title: "Analytics integrity",
    desc: "GA4, GTM and server-side tracking set up for accurate attribution and reporting.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted workflows",
    desc: "Claude Code, Cursor and prompt engineering to ship full-funnel improvements faster.",
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
                a Senior Shopify Developer &amp; CRO Expert.
              </span>
            </h2>
          </div>

          <div className="clear-both mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For 10+ years I&apos;ve helped agencies and D2C brands build
              high-converting Shopify and Shopify Plus experiences — owning everything
              from theme development and AI-assisted workflows to A/B testing, funnel
              optimization and post-purchase upsells.
            </p>
            <p>
              I&apos;m a CRO-focused engineer who works white-label as a dependable
              delivery partner — turning conversion hypotheses into clean, scalable
              code while obsessing over analytics integrity, site speed and revenue per
              session.
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

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:border-primary/50 hover:shadow-glow-sm"
          >
            View full experience &amp; work history
            <ArrowRight className="size-4" />
          </Link>
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
