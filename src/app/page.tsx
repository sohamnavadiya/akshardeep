import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { FloatingEngineering } from "@/components/sections/FloatingEngineering";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { ValveAutomation } from "@/components/sections/ValveAutomation";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { ServicesDivision } from "@/components/sections/ServicesDivision";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutSnapshot />
      <SolutionsGrid />
      <ProductHighlights />
      <FloatingEngineering />
      <IndustriesGrid />
      <ValveAutomation />
      <WhyChooseUs />
      <EngineeringProcess />
      <ServicesDivision />
      <ClientLogos />
      <ContactCTA />
    </>
  );
}
