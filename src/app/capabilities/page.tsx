import type { Metadata } from "next";
import { CapabilitiesContent } from "./CapabilitiesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Engineering Capabilities & Valve Automation",
  description:
    "Explore Akshardeep's engineering capabilities — CNC machining, custom valve automation packages, API 598 hydrostatic testing, and precision instrumentation assembly.",
  alternates: {
    canonical: "https://www.akshardeep.com/capabilities",
  },
  openGraph: {
    title: "Engineering Capabilities & Valve Automation | Akshardeep Engineers",
    description:
      "Explore Akshardeep's engineering capabilities — CNC machining, custom valve automation packages, API 598 hydrostatic testing, and precision instrumentation assembly.",
    url: "https://www.akshardeep.com/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesContent />
      <ContactCTA />
    </>
  );
}
