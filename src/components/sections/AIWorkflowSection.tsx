import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Hl } from "@/components/ui/SectionHeading";

const tools = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "ChatGPT",
  "Shopify CLI",
];

export function AIWorkflowSection() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-base font-medium text-primary">
            <Sparkles className="size-4" />
            Modern Development Workflow
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            AI-Assisted Engineering, <Hl>Shipped Faster</Hl>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build with modern AI tools to prototype, review and ship
            production-ready code faster — without cutting quality or losing control
            of the codebase.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
