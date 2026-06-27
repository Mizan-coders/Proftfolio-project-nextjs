import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Whatsapp } from "@/components/ui/BrandIcons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Hl } from "@/components/ui/SectionHeading";
import { projects, moreProjects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `Work & Case Studies | ${site.name}`,
  description: `Selected Shopify & Shopify Plus builds, migrations and CRO work delivered by ${site.name} for DTC brands.`,
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Back home
      </Link>

      {/* Hero */}
      <header className="mt-6 max-w-3xl">
        <p className="text-base font-medium text-primary">Work & Case Studies</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
          Shopify Builds, Migrations &amp; <Hl>CRO Work</Hl>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          A selection of DTC stores I&apos;ve built, migrated and optimized — from
          pixel-perfect Figma-to-Shopify builds to full platform migrations and
          conversion overhauls.
        </p>
      </header>

      {/* Featured case studies */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Featured case studies</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">More projects</h2>
        <p className="mt-2 text-muted-foreground">
          Additional Shopify builds and migrations delivered for DTC brands.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p) => (
            <div
              key={p.name}
              className="portfolio-card flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                {p.category}
              </p>
              <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.scope}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Visit store
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold">Have a similar project?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Send your Figma file, migration scope or store brief — I&apos;ll reply within
          24 hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
          >
            <Whatsapp className="size-4" />
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
