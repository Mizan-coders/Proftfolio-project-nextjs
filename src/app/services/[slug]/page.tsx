import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ArrowRight, MessageCircle, ArrowLeft } from "lucide-react";
import { serviceDetails } from "@/lib/service-details";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return { title: "Service" };
  return {
    title: `${detail.title} | ${site.name}`,
    description: detail.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/#services"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        All services
      </Link>

      {/* Hero */}
      <header className="mt-6 space-y-4">
        <p className="text-base font-medium text-primary">
          Service
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          {detail.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {detail.tagline}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
          >
            <MessageCircle className="size-4" />
            Discuss your project
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:border-primary/50"
          >
            Send a brief
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      {/* Who it's for */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Who it&apos;s for</h2>
        <ul className="mt-5 space-y-3">
          {detail.forWho.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What's included */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">What&apos;s included</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {detail.included.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">The process</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {detail.process.map((step, i) => (
            <li
              key={step.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <span className="grid size-8 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {i + 1}
              </span>
              <p className="mt-3 font-semibold">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Case snippet */}
      <section className="mt-14 rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
        <p className="text-base font-medium text-primary">
          Case snippet
        </p>
        <p className="mt-3 text-xl font-semibold">{detail.caseSnippet.name}</p>
        <p className="mt-2 text-muted-foreground">{detail.caseSnippet.result}</p>
      </section>

      {/* Bottom CTA */}
      <section className="mt-14 text-center">
        <h2 className="text-2xl font-bold">Ready to start?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Send your scope and I&apos;ll reply within 24 hours with a clear plan and
          timeline.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
          >
            Send Project Brief
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
