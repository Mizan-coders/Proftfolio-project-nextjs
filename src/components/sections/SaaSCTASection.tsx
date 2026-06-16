import {
  Zap,
  ArrowRight,
  ShoppingBag,
  Repeat,
  TrendingUp,
  Store,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";

// Flagship product: "Upsell & Swap Upsell Pro" — a Shopify AOV/upsell app.
// Headline, description and stats are editable drafts; refine with real copy.
const features: { icon: LucideIcon; label: string }[] = [
  { icon: ShoppingBag, label: "One-click post-purchase upsells" },
  { icon: Repeat, label: "Smart swap offers" },
  { icon: TrendingUp, label: "AOV & revenue analytics" },
  { icon: Store, label: "Built for Shopify & Plus" },
];

export function SaaSCTASection() {
  return (
    <section id="saas" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <Reveal className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Zap className="size-3.5" />
              Flagship Shopify App
            </span>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Upsell &amp; Swap{" "}
              <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Upsell Pro
              </span>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A Shopify app that lifts average order value with one-click
              post-purchase upsells and smart swap offers — turning every checkout
              into a chance to grow revenue.
            </p>

            {/* Feature cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow"
              >
                Explore the App
                <ArrowRight className="size-4" />
              </a>
              <div className="text-sm">
                <p className="font-semibold text-primary">Early Access Open</p>
                <p className="text-muted-foreground">Built for growing D2C brands.</p>
              </div>
            </div>
          </div>

          {/* RIGHT — browser dashboard mockup */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-primary/10 blur-3xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-[#0d1117] shadow-glow-lg">
              {/* browser bar */}
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500/90" />
                  <span className="size-2.5 rounded-full bg-yellow-500/90" />
                  <span className="size-2.5 rounded-full bg-green-500/90" />
                </div>
                <div className="mx-auto rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
                  app.upsell-swap-pro.com
                </div>
              </div>

              {/* body */}
              <div className="flex gap-4 p-4">
                {/* sidebar */}
                <div className="hidden w-24 shrink-0 space-y-2.5 sm:block">
                  <div className="flex items-center gap-2 rounded-md bg-primary/15 px-2 py-1.5">
                    <span className="size-2.5 rounded-sm bg-primary" />
                    <span className="h-1.5 w-10 rounded bg-primary/60" />
                  </div>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2 px-2 py-1.5">
                      <span className="size-2.5 rounded-sm bg-muted-foreground/30" />
                      <span className="h-1.5 w-12 rounded bg-muted-foreground/20" />
                    </div>
                  ))}
                </div>

                {/* main */}
                <div className="flex-1 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border bg-background/40 p-3">
                      <div className="mb-2 h-1.5 w-10 rounded bg-muted-foreground/20" />
                      <div className="text-lg font-bold text-primary">16,243</div>
                      <div className="mt-2 h-1 w-full rounded bg-emerald-500/70" />
                    </div>
                    <div className="rounded-lg border border-border bg-background/40 p-3">
                      <div className="mb-2 h-1.5 w-10 rounded bg-muted-foreground/20" />
                      <div className="text-lg font-bold text-blue-400">2,405</div>
                      <div className="mt-2 h-1 w-full rounded bg-blue-500/70" />
                    </div>
                  </div>

                  {/* chart */}
                  <div
                    className="relative h-40 rounded-lg border border-border bg-background/40 p-3"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.5) 1px, transparent 1px)",
                      backgroundSize: "28px 24px",
                    }}
                  >
                    <svg
                      viewBox="0 0 300 100"
                      preserveAspectRatio="none"
                      className="h-full w-full text-primary"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="saas-area2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 C40,78 50,60 80,58 C120,55 130,40 170,38 C210,36 230,18 300,8 L300,100 L0,100 Z"
                        fill="url(#saas-area2)"
                      />
                      <path
                        d="M0,80 C40,78 50,60 80,58 C120,55 130,40 170,38 C210,36 230,18 300,8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>

                    {/* Upsell offer floating card */}
                    <div className="absolute bottom-3 right-3 w-40 rounded-lg border border-primary/30 bg-card/95 p-2.5 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="grid size-5 place-items-center rounded-md bg-primary/15 text-primary">
                          <ShoppingBag className="size-3" />
                        </span>
                        <span className="text-[11px] font-semibold">Smart Upsell</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="h-1.5 w-full rounded bg-muted-foreground/20" />
                        <div className="h-1.5 w-3/4 rounded bg-muted-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
