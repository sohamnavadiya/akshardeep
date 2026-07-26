import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Valve Repair, Calibration & Maintenance Services",
  description:
    "Akshardeep Engineers provides valve repair, NABL-traceable calibration, hydrostatic testing per API 598, actuator mounting, diaphragm seal replacement, and emergency field support in Ankleshwar, Gujarat.",
  alternates: {
    canonical: "https://www.akshardeep.com/services",
  },
  openGraph: {
    title: "Valve Repair, Calibration & Maintenance Services | Akshardeep Engineers",
    description:
      "Akshardeep Engineers provides valve repair, NABL-traceable calibration, hydrostatic testing per API 598, actuator mounting, diaphragm seal replacement, and emergency field support in Ankleshwar, Gujarat.",
    url: "https://www.akshardeep.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <ContactCTA />
    </>
  );
}
