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
    group: "Ecommerce",
    items: ["Shopify 2.0", "Liquid", "Theme dev", "Migrations", "Storefront API"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    group: "Design to Code",
    items: ["Figma", "WordPress", "Webflow", "HTML Email", "Responsive UI"],
  },
  {
    group: "Workflow",
    items: ["White-label", "Git", "QA", "Documentation", "Agency retainers"],
  },
];

const history = [
  {
    period: "2023 — Present",
    role: "Independent Full-Stack & Shopify Developer",
    desc: "Partnering white-label with agencies and brands on Shopify themes, Figma conversions, migrations and custom Next.js frontends.",
  },
  {
    period: "2021 — 2023",
    role: "Frontend / Shopify Developer",
    desc: "Delivered dozens of pixel-perfect storefronts and led design-to-code implementation for ecommerce clients.",
  },
  {
    period: "2019 — 2021",
    role: "Web Developer",
    desc: "Built responsive WordPress and custom HTML/CSS/JS sites, developing the eye for detail that defines my work today.",
  },
];

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
            I&apos;m {site.name}, a <Hl>Full-Stack &amp; Shopify Developer</Hl>
          </h1>
        </div>
      </header>

      <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>
          For over five years I&apos;ve helped agencies and ecommerce brands turn
          designs into fast, reliable storefronts. My focus is simple: faithful
          implementation, clean code, and a delivery experience that makes me easy
          to work with again and again.
        </p>
        <p>
          I work white-label, communicate clearly across time zones, and treat your
          clients&apos; projects with the same care I&apos;d give my own. Whether
          it&apos;s a Figma-to-Shopify build, a migration, or a custom Next.js
          frontend, you get a dependable partner — not just another freelancer.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard value={site.stats.projects} label="Projects delivered" />
        <StatCard value={site.stats.shopifyStores} label="Shopify stores" />
        <StatCard value={site.stats.wordpressBuilds} label="WordPress builds" />
        <StatCard value={site.stats.experience} label="Experience" />
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
              <span className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
              <p className="text-sm text-primary">{h.period}</p>
              <p className="font-semibold">{h.role}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {h.desc}
              </p>
            </li>
          ))}
        </ol>
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
