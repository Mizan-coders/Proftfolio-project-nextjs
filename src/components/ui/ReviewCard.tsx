import { Star, BadgeCheck, Quote } from "lucide-react";
import type { Review } from "@/lib/reviews";

// Deterministic avatar color palette (SSR-safe — derived from the name)
const avatarColors = [
  "bg-blue-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-orange-500",
];

export function ReviewCard({ review }: { review: Review }) {
  const { rating, quote, category, timeAgo, name, country, flag, source } = review;
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const colorIndex =
    name.split("").reduce((sum, c) => sum + c.charCodeAt(0), 0) % avatarColors.length;

  return (
    <div className="flex h-full min-h-104 flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30">
      {/* Stars + source */}
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-5"
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        {source && (
          <span className="text-base font-bold lowercase text-green-500">
            {source}
            <span className="text-green-500">.</span>
          </span>
        )}
      </div>

      {/* Quote */}
      <Quote className="mt-5 size-8 rotate-180 text-muted-foreground/40" />
      <p className="mt-3 flex-1 text-base italic leading-relaxed text-foreground/90">
        {quote}
      </p>

      {/* Category / time */}
      <div className="mt-5 rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground">
        {category} • {timeAgo}
      </div>

      {/* Reviewer */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold text-white ${avatarColors[colorIndex]}`}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="truncate">{name}</span>
            <BadgeCheck className="size-4 shrink-0 text-green-500" />
          </div>
          <div className="text-xs text-muted-foreground">
            {flag} {country}
          </div>
        </div>
      </div>
    </div>
  );
}
