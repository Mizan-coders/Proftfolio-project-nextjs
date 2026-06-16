import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { Hl } from "@/components/ui/SectionHeading";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: `Get to know ${site.name} — a full-stack developer and Shopify expert helping agencies and brands ship premium ecommerce experiences.`,
};

const skills = [
  {
    group: "Shopify",
    items: [
      "Shopify Plus",
      "Liquid",
      "Theme Dev",
      "Checkout",
      "Upsell Flows",
      "Subscriptions",
    ],
  },
  {
    group: "CRO & Analytics",
    items: [
      "A/B Testing",
      "GA4",
      "GTM",
      "Server-Side Tracking",
      "Funnel Analysis",
      "Conversion APIs",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS"],
  },
  {
    group: "Backend & AI",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Claude Code",
      "Cursor",
    ],
  },
];

const history = [
  {
    period: "Dec 2024 — Present",
    role: "CRO-Focused Shopify Developer · TILT (Web Design & Digital Agency)",
    desc: "Lead CRO-focused Shopify theme development for D2C brands with AI-assisted workflows, owning full-funnel optimization from landing page to post-purchase and building Shopify Plus apps with React, Next.js and Node.js.",
  },
  {
    period: "Jun 2017 — Dec 2024",
    role: "Senior Shopify Developer · 1822 Denim / A3 Apparel LLC",
    desc: "Owned end-to-end CRO development across 4 leading D2C Shopify Plus brands, driving a 30%+ lift in conversion through experimentation, AI-driven upsells, GA4/GTM tracking and retention funnels.",
  },
  {
    period: "Feb 2014 — Jul 2017",
    role: "Full-Stack eCommerce Developer · Quadzlab",
    desc: "Managed technical implementation and optimization of 4 large US Shopify brands, built backend analytics for funnel performance, and integrated third-party APIs into checkout and post-purchase flows.",
  },
  {
    period: "Dec 2012 — Jan 2014",
    role: "Junior Web Developer · ParallaxLogic",
    desc: "Built subscription and recurring-billing systems for Shopify D2C brands, mentored junior developers, and gained hands-on AWS and Docker experience.",
  },
];

const education = {
  degree: "BSc in Computer Science & Engineering",
  school: "IBAIS University, Bangladesh",
  period: "2018 — 2022",
};

const languages = ["Bengali — Native", "English — Fluent", "Hindi — Intermediate"];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back home
      </Link>

      {/* Hero */}
      <header className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-primary/15">
          <Image
            src={site.profileImage}
            alt={site.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div className="space-y-3">
          <p className="text-base font-medium text-primary">
            About Me
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            I&apos;m {site.name}, a <Hl>Senior Shopify Developer &amp; CRO Expert</Hl>
          </h1>
        </div>
      </header>

      <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a Senior Shopify Developer and technical CRO specialist with 10+
          years building high-converting Shopify and Shopify Plus experiences for
          agencies and D2C brands. I specialize in AI-assisted development workflows,
          conversion systems, experimentation frameworks and performance-first
          ecommerce architecture.
        </p>
        <p>
          I&apos;ve driven 30%+ conversion lifts across 100+ ecommerce brands through
          A/B testing, funnel optimization, analytics integrity and scalable Shopify
          engineering — translating CRO strategy into clean, well-documented code, and
          leading developers and designers end-to-end.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value={site.stats.experience} label="Experience" />
        <StatCard value={site.stats.brands} label="Brands served" />
        <StatCard value={site.stats.conversion} label="Avg. conversion lift" />
        <StatCard value={site.stats.responseWindow} label="Response window" />
      </div>

      {/* Skills */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Skills &amp; tools</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.group}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="font-semibold">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work history */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Work history</h2>
        <ol className="mt-6 space-y-5 border-l border-border pl-8">
          {history.map((h) => (
            <li key={h.period} className="relative">
              <span className="absolute left-[-2.15rem] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
              <p className="text-sm text-primary">{h.period}</p>
              <p className="font-semibold">{h.role}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {h.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education & Languages */}
      <section className="mt-16 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-primary">{education.period}</p>
            <p className="mt-1 font-semibold">{education.degree}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{education.school}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Languages</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Have a project or need dependable white-label capacity? I&apos;ll reply
          within 24 hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
          >
            <MessageCircle className="size-4" />
            WhatsApp Me
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:border-primary/50"
          >
            Send a brief
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
