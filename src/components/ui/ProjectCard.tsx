import Image from "next/image";
import { ArrowUpRight, ImageIcon, Code2, Check } from "lucide-react";
import type { Project } from "@/lib/projects";

function PSRBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <p className="font-semibold">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const {
    name,
    category,
    image,
    description,
    metrics,
    problem,
    highlights,
    solution,
    result,
    stack,
    href,
  } = project;
  return (
    <div className="portfolio-card group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      {/* Screenshot (16:9) */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
        {image ? (
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-linear-to-br from-primary/10 via-card to-card text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className="size-7 text-primary/50" />
              <span className="text-xs">Project preview</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {category}
        </p>
        <h3 className="text-xl font-semibold leading-snug">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        {/* Outcome metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-center"
              >
                <div className="text-lg font-bold text-primary">{m.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Challenge / What I built / Result */}
        <div className="mt-1 space-y-3">
          <PSRBox label="Challenge">{problem}</PSRBox>
          {highlights && highlights.length > 0 ? (
            <div className="rounded-xl border border-border bg-background/40 p-4">
              <p className="font-semibold">What I built</p>
              <ul className="mt-2 space-y-1.5">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <PSRBox label="Solution">{solution}</PSRBox>
          )}
          <PSRBox label="Result">{result}</PSRBox>
        </div>

        {/* Tech stack */}
        <div className="mt-auto pt-3">
          <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Code2 className="size-4" />
            Tech stack
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-primary hover:underline"
          >
            View project
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
}
