import Link from "next/link";
import {
  Handshake,
  Paintbrush,
  Smartphone,
  MessageSquare,
  FileText,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Handshake,
    title: "White-label friendly from day one",
    desc: "I work behind the scenes as a technical extension of your agency without disrupting your client relationship.",
  },
  {
    icon: Paintbrush,
    title: "Accurate builds from Figma or existing sites",
    desc: "Design systems, landing pages, product templates, and custom sections are translated carefully into production-ready code.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first implementation",
    desc: "Layouts are refined across breakpoints so the final build keeps the same premium feel on real devices.",
  },
  {
    icon: MessageSquare,
    title: "Responsive communication",
    desc: "Fast updates, realistic timelines, and direct feedback loops reduce delivery risk and revision churn.",
  },
  {
    icon: FileText,
    title: "Clean code and easier handoff",
    desc: "Code structure, reusable sections, and QA make future edits easier for your team or your client after launch.",
  },
];

const steps = [
  {
    title: "Discovery",
    desc: "Review the brief, goals, dependencies, and timeline so the implementation plan is clear before work starts.",
  },
  {
    title: "File / Requirements Review",
    desc: "Audit the Figma file, existing site references, assets, and platform requirements to remove ambiguity early.",
  },
  {
    title: "Development",
    desc: "Build the approved UI in Shopify, WordPress, Webflow, React, or Next.js with reusable, production-ready code.",
  },
  {
    title: "QA & Revisions",
    desc: "Test across breakpoints, fix issues, and refine details so the final delivery is clean and launch-ready.",
  },
  {
    title: "Delivery / Support",
    desc: "Provide final handoff, launch support, and follow-up help for retainers, updates, or future implementation work.",
  },
];

export function AgenciesSection() {
  return (
    <section id="agencies" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <SectionHeading
          label="Why Agencies Work With Me"
          title={
            <>
              A Dependable White-Label <Hl>Delivery Partner</Hl>
            </>
          }
          subtitle="Built for agencies that need quality implementation, reliable delivery, and a developer who can work from Figma, existing storefronts, or a rough project brief without adding chaos."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* LEFT — feature cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={(i % 2) * 70}
                className="portfolio-card rounded-2xl border border-border bg-card p-6"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>

          {/* RIGHT — process panel */}
          <Reveal delay={120}>
            <div className="portfolio-card rounded-2xl border border-border bg-card p-6 sm:p-7">
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle2 className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Simple Process</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  Structured enough for agencies, lightweight enough to move fast.
                </p>
              </div>
            </div>

            <ol className="mt-5 space-y-3">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="rounded-xl border border-border bg-background/40 p-4"
                >
                  <div className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* CTA box */}
            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Need overflow support, one-off implementation, or an ongoing retainer?
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
              >
                Get a Free Sample
                <ArrowRight className="size-4" />
              </Link>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
