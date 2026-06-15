import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const { title, forWho, description, href, icon: Icon, accent } = service;
  const style = { "--accent": accent } as CSSProperties;

  return (
    <div
      style={style}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.45)] hover:shadow-[0_0_28px_hsl(var(--accent)/0.16)]"
    >
      {/* colored corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 size-36 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-45"
        style={{ background: "hsl(var(--accent))" }}
      />

      <div className="relative flex h-full flex-col">
        <Icon className="size-8" style={{ color: "hsl(var(--accent))" }} />

        <h3 className="mt-5 text-xl font-semibold leading-snug">{title}</h3>
        <p className="mt-3 text-sm font-medium text-foreground/80">{forWho}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-primary transition-colors hover:underline"
        >
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
