import type { Metadata } from "next";
import { IndustriesContent } from "./IndustriesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Industries Served — Chemical, Pharma, Oil & Gas",
  description:
    "Akshardeep Engineers serves Oil & Gas, Chemical Plants, Pharma, Power Generation, Refineries, Steel, Fertilizer, Water Treatment, and Manufacturing industries across Gujarat & India.",
  alternates: {
    canonical: "https://www.akshardeep.com/industries",
  },
  openGraph: {
    title: "Industries Served — Chemical, Pharma, Oil & Gas | Akshardeep Engineers",
    description:
      "Akshardeep Engineers serves Oil & Gas, Chemical Plants, Pharma, Power Generation, Refineries, Steel, Fertilizer, Water Treatment, and Manufacturing industries across Gujarat & India.",
    url: "https://www.akshardeep.com/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesContent />
      <ContactCTA />
    </>
  );
}
