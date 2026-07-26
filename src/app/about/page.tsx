import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { Timeline } from "./Timeline";
import { PartnersSection } from "./PartnersSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Akshardeep Engineers",
  description:
    "Established in 2013, Akshardeep Engineers is an authorised dealer of Forbes Marshall, Intervalve & El-O-Matic. Industrial valves, automation & instrumentation from Ankleshwar, Gujarat.",
  alternates: {
    canonical: "https://www.akshardeep.com/about",
  },
  openGraph: {
    title: "About Akshardeep Engineers — Industrial Flow Control Solutions",
    description:
      "Established in 2013, Akshardeep Engineers is an authorised dealer of Forbes Marshall, Intervalve & El-O-Matic. Industrial valves, automation & instrumentation from Ankleshwar, Gujarat.",
    url: "https://www.akshardeep.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <PartnersSection />
      <ContactCTA />
    </>
  );
}
