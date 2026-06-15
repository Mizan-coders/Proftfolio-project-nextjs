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
            Selected Builds That Show <Hl>Delivery Quality</Hl>
          </>
        }
        subtitle="Premium ecommerce implementation with clearer problems, stronger solutions, and more believable execution detail."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Need similar delivery? Send your project brief
          <ArrowRight className="size-4" />
        </Link>
      </Reveal>
    </section>
  );
}
