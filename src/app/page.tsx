import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { ServicesDivision } from "@/components/sections/ServicesDivision";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Akshardeep Engineers — Industrial Valves, Automation & Instrumentation",
  description:
    "Leading supplier of industrial valves, pneumatic valve automation, and process instrumentation in Ankleshwar, Gujarat. Authorised partner for Forbes Marshall, Intervalve, and El-O-Matic.",
  alternates: {
    canonical: "https://www.akshardeep.com",
  },
  openGraph: {
    title: "Akshardeep Engineers — Industrial Valves, Automation & Instrumentation",
    description:
      "Leading supplier of industrial valves, pneumatic valve automation, and process instrumentation in Ankleshwar, Gujarat. Authorised partner for Forbes Marshall, Intervalve, and El-O-Matic.",
    url: "https://www.akshardeep.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <ProductHighlights />
      <IndustriesGrid />
      <WhyChooseUs />
      <EngineeringProcess />
      <ServicesDivision />
      <ClientLogos />
      <ContactCTA />
    </>
  );
}
