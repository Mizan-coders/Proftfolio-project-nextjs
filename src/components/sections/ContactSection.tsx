import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Github, Linkedin, Facebook, Whatsapp } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { site, whatsappLink } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Facebook", href: site.socials.facebook, Icon: Facebook },
];

export function ContactSection() {
  const infoCards = [
    {
      Icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: Whatsapp,
      label: "WhatsApp",
      value: `+${site.whatsappNumber}`,
      href: whatsappLink,
    },
    {
      Icon: MapPin,
      label: "Location",
      value: site.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <SectionHeading
        label="Final CTA"
        title={
          <>
            Need a Reliable White-Label <Hl>Shopify Developer?</Hl>
          </>
        }
        subtitle="Send your Figma file, migration scope, or frontend brief. I usually reply within 24 hours."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        {/* LEFT — info */}
        <Reveal className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">
              Let&apos;s build your next ecommerce project
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Share the design file, current website, target platform, and timeline. I
              can support one-off builds, migrations, retained agency work, and overflow
              frontend delivery.
            </p>
          </div>

          <div className="space-y-3">
            {infoCards.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">{label}</span>
                    <span className="block truncate text-base font-medium">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="portfolio-card flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* socials */}
          <div>
            <p className="mb-3 text-sm font-semibold">Connect and verify</p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* response time */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-5 text-primary" />
              <p className="font-semibold text-primary">Response Time</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I respond within 24 hours on business days. For urgent projects, reach out
              on LinkedIn.
            </p>
          </div>
        </Reveal>

        {/* RIGHT — form */}
        <Reveal delay={120} className="h-full">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
