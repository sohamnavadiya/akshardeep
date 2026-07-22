import type { Metadata } from "next";
import { CapabilitiesContent } from "./CapabilitiesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore Akshardeep's manufacturing capabilities - in-house CNC machining, valve automation, advanced testing, and custom engineering solutions.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <CapabilitiesContent />
      <ContactCTA />
    </>
  );
}
