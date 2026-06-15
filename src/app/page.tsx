import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SaaSCTASection } from "@/components/sections/SaaSCTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AgenciesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <SaaSCTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
