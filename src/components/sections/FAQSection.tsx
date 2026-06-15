import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you work white-label with agencies?",
    a: "Yes — white-label is my default. I work under your brand and process, stay invisible to your clients, and can join calls as part of your team if needed.",
  },
  {
    q: "Can you convert Figma to Shopify exactly?",
    a: "Absolutely. I build pixel-perfect, responsive Shopify 2.0 themes from your Figma files, with reusable sections so your team can edit content without touching code.",
  },
  {
    q: "Can you migrate an existing website to Shopify?",
    a: "Yes. I migrate from WordPress, Wix, Webflow and others — preserving your catalog structure, URLs (with redirects), SEO and brand feel so you don't lose rankings.",
  },
  {
    q: "Do you also work with WordPress, Webflow, React, and Next.js?",
    a: "I do. Beyond Shopify I build WordPress and Webflow sites and custom React / Next.js frontends, including headless Shopify storefronts.",
  },
  {
    q: "How fast can you deliver?",
    a: "Timelines depend on scope, but most theme builds and Figma conversions ship in 1–3 weeks. I always confirm a clear timeline before starting and respond within 24 hours.",
  },
  {
    q: "Can you work on ongoing agency retainers?",
    a: "Yes. Many agencies keep me on a monthly retainer for dependable frontend capacity. We agree on hours or scope and I slot into your sprint cadence.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
      <SectionHeading
        label="FAQ"
        title={
          <>
            Questions Agencies Usually <Hl>Ask First</Hl>
          </>
        }
        subtitle="Short answers that remove friction before the first message."
      />

      <Reveal className="mt-10">
        <Accordion multiple={false} className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="mb-3 rounded-xl border border-border bg-card px-6 transition-colors last:mb-0 hover:border-primary/30"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
