import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { Timeline } from "./Timeline";
import { PartnersSection } from "./PartnersSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Akshardeep Engineers — Authorised Dealer & Certificates",
  description:
    "Established in 2013, Akshardeep Engineers is an authorised dealer of Forbes Marshall, Intervalve & El-O-Matic. View official authorisation letters and certificates.",
  alternates: {
    canonical: "https://www.akshardeep.com/about",
  },
  openGraph: {
    title: "About Akshardeep Engineers — Authorised Dealer & Certificates",
    description:
      "Established in 2013, Akshardeep Engineers is an authorised dealer of Forbes Marshall, Intervalve & El-O-Matic. View official authorisation letters and certificates.",
    url: "https://www.akshardeep.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <PartnersSection />
      <CertificatesSection />
      <ContactCTA />
    </>
  );
}

