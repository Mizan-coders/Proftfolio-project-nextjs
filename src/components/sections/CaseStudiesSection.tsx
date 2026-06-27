import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";

export function CaseStudiesSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <SectionHeading
        label="Case Studies"
        title={
          <>
            Selected Shopify <Hl>Case Studies</Hl>
          </>
        }
        subtitle="Premium ecommerce implementation with clearer problems, stronger solutions, and more believable execution detail."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {projects.slice(0, 3).map((project, i) => (
          <Reveal
            key={project.name}
            delay={(i % 3) * 80}
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-col items-center gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-6 py-3 font-medium text-primary transition-all hover:border-primary/50 hover:shadow-glow"
        >
          View all case studies
          <ArrowRight className="size-4" />
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          Need similar delivery? Send your project brief
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
