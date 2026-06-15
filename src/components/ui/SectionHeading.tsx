import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-base font-medium text-primary">{label}</p>
      <h2 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  );
}

/** Inline teal-highlighted span for headings. */
export function Hl({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}
