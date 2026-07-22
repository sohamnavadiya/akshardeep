import type { Metadata } from "next";
import { IndustriesContent } from "./IndustriesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Akshardeep serves Oil & Gas, Chemical Plants, Pharma, Power Generation, Refineries, Steel, Fertilizer, Water Treatment, and Manufacturing industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesContent />
      <ContactCTA />
    </>
  );
}
