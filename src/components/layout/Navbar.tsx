"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Github, Linkedin, Facebook, X as XIcon, Instagram, Whatsapp } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/nav";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

const socialRail = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Facebook", href: site.socials.facebook, Icon: Facebook },
  { label: "Instagram", href: site.socials.instagram, Icon: Instagram },
  { label: "X", href: site.socials.x, Icon: XIcon },
  { label: "GitHub", href: site.socials.github, Icon: Github },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll-spy (homepage only)
  useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((n) => n.sectionId).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      {/* Left floating social rail (desktop) */}
      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {socialRail.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      {/* Mobile: full-width bar (avatar · title · toggle). Desktop: centered pill. */}
      <header className="fixed left-1/2 top-4 z-50 flex w-[calc(100vw-2rem)] -translate-x-1/2 flex-col lg:w-auto">
        <nav className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-md lg:flex lg:w-auto lg:gap-1 lg:px-2.5">
          {/* Mobile: profile avatar (left) */}
          <Link
            href="/#home"
            aria-label="Home"
            onClick={() => setMobileOpen(false)}
            className="relative block size-9 shrink-0 overflow-hidden rounded-full border border-border lg:hidden"
          >
            <Image
              src={site.profileImage}
              alt={site.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </Link>

          {/* Mobile: title (center) */}
          <Link
            href="/#home"
            onClick={() => setMobileOpen(false)}
            className="truncate text-center text-sm font-semibold text-primary lg:hidden"
          >
            {site.firstName}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) =>
              item.sectionId === "services" ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors",
                      isHome && active === item.sectionId
                        ? "border-primary/40 bg-primary/20 text-primary"
                        : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {item.icon && <item.icon className="size-3.5" />}
                    {item.label}
                    <ChevronDown className="size-3.5" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                      <ul className="rounded-2xl border border-border bg-card/95 p-2 shadow-xl backdrop-blur-md">
                        {services.map((s) => (
                          <li key={s.title}>
                            <Link
                              href={s.href}
                              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              <s.icon className="size-4 shrink-0" />
                              {s.short}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors",
                      isHome && active === item.sectionId
                        ? "border-primary/40 bg-primary/20 text-primary"
                        : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {item.icon && <item.icon className="size-3.5" />}
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA (far right) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow lg:flex"
          >
            <Whatsapp className="size-4" />
            Let&apos;s Talk
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-9 shrink-0 place-items-center justify-self-end rounded-full text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-2 w-full rounded-2xl border border-border bg-card/95 p-3 backdrop-blur-md lg:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      isHome && active === item.sectionId
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.icon && <item.icon className="size-4" />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-border pt-3">
              <div className="flex gap-2">
                {socialRail.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <Whatsapp className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
