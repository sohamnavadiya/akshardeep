import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Akshardeep Engineers — valve repair, calibration, hydrostatic testing, actuator mounting, diaphragm seal replacement, and emergency field support.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <ContactCTA />
    </>
  );
}
