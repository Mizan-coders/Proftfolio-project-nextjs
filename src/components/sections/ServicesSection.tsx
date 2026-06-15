import { SectionHeading, Hl } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <SectionHeading
        label="Services"
        title={
          <>
            What I Actually <Hl>Offer Clients</Hl>
          </>
        }
        subtitle="A focused solo service stack for agencies, ecommerce brands, and founders who need implementation done properly."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 80}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
