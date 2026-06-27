"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Facebook, Whatsapp } from "@/components/ui/BrandIcons";
import { footerNav } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Facebook", href: site.socials.facebook, Icon: Facebook },
  { label: "WhatsApp", href: whatsappLink, Icon: Whatsapp },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-14 text-center">
        {/* Row 1 */}
        <div className="space-y-2">
          <p className="text-xl font-bold text-primary">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>

        {/* Row 2 */}
        <div className="flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        {/* Row 3 */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {footerNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Row 4 */}
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ArrowUp className="size-4" />
          Back to Top
        </Link>

        {/* Row 5 */}
        <p className="text-xs text-muted-foreground">
          © {year} {site.name}. Available for new projects · Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
