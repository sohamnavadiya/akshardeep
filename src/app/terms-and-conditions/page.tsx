import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, Award, Scale, Wrench, Globe, Mail, MapPin, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions of Use and Supply for Akshardeep Engineers — Authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic in Ankleshwar, Gujarat.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "August 10, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "1. Acceptance of Terms & Website Use",
      content: (
        <div className="space-y-3">
          <p>
            By accessing or using the website of <strong>{COMPANY.name}</strong> (&quot;www.akshardeep.com&quot;), downloading corporate brochures, or submitting Requests for Quotations (RFQs), you agree to be bound by these Terms and Conditions.
          </p>
          <p>
            If you do not agree to these terms, please refrain from using this website or relying on the digital materials published herein.
          </p>
        </div>
      ),
    },
    {
      id: "ip-partner",
      icon: Award,
      title: "2. Channel Partnership & Intellectual Property",
      content: (
        <div className="space-y-3">
          <p>
            <strong>Akshardeep Engineers</strong> is an official <strong>Authorised Channel Partner / Dealer / Distributor</strong> for leading industrial flow control and automation manufacturers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li><strong>Forbes Marshall (HVY) Pvt. Ltd.</strong> (Control valves, steam traps, instrumentation)</li>
            <li><strong>Intervalve Poonawalla Pvt. Ltd.</strong> (Butterfly valves, wafer check valves)</li>
            <li><strong>El-O-Matic India Pvt. Ltd.</strong> (Pneumatic actuators, valve automation)</li>
            <li><strong>Badotherm India</strong> (Diaphragm seal replacement &amp; pressure gauges)</li>
          </ul>
          <p className="text-xs bg-surface p-3 rounded-lg border border-border-default text-text-muted mt-2">
            All brand names, product logos, registered trademarks, catalog drawings, and technical parameters belong to their respective corporate owners. Akshardeep Engineers displays these trademarks strictly under authorized distribution rights.
          </p>
        </div>
      ),
    },
    {
      id: "technical-quotes",
      icon: Wrench,
      title: "3. Technical Specifications & Quotation Disclaimer",
      content: (
        <div className="space-y-3">
          <p>
            Product images, dimensional drawings, pressure ratings, temperature capabilities, and material of construction (MOC) tables published on this website serve as general informational guides:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              <strong className="text-text-dark">Factory Engineering Modifications:</strong> Principal manufacturers reserve the right to alter physical dimensions, casting tolerances, or design standards (API, BS, ISO) without prior public notice.
            </li>
            <li>
              <strong className="text-text-dark">Formal Price Quotations:</strong> Online catalog prices or specs do not constitute binding sales offers. Formal commercial proposals are issued via official written quotations signed by Akshardeep Engineers.
            </li>
            <li>
              <strong className="text-text-dark">Engineering Compatibility:</strong> Final selection of valve seats, diaphragm seal fill fluids, and actuator sizing must be reviewed against actual plant process conditions by your engineering team.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "orders-delivery",
      icon: Globe,
      title: "4. Supply, Delivery & Field Services",
      content: (
        <div className="space-y-3">
          <p>
            All physical valve supplies, automation retrofits, and diaphragm seal replacements are governed by the following operational conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              <strong className="text-text-dark">Delivery Schedules:</strong> Ex-stock or factory lead times quoted in purchase order acceptances are estimated in good faith, subject to principal manufacturer dispatch and force majeure events.
            </li>
            <li>
              <strong className="text-text-dark">Inspection &amp; Testing:</strong> Hydrostatic test certificates, NABL calibration reports, and material test certificates (MTC) are provided upon request as per order agreement terms.
            </li>
            <li>
              <strong className="text-text-dark">Field Service Support:</strong> On-site valve automation mounting or diaphragm seal replacement services in Ankleshwar GIDC and surrounding industrial regions are scheduled based on agreed service contracts.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation-liability",
      icon: ShieldAlert,
      title: "5. Limitation of Liability & Warranties",
      content: (
        <div className="space-y-3">
          <p>
            To the maximum extent permitted under applicable law:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              Equipment warranties are backed by the respective OEM manufacturers (Forbes Marshall, Intervalve, El-O-Matic, Badotherm) according to their standard warranty policies against manufacturing defects.
            </li>
            <li>
              Akshardeep Engineers shall not be held liable for indirect, incidental, or consequential damages resulting from improper valve installation, operation beyond specified pressure/temperature limits, or unauthorized media incompatibility.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "6. Governing Law & Jurisdiction",
      content: (
        <div className="space-y-3">
          <p>
            These Terms and Conditions, alongside any commercial contracts or technical service agreements originating from Akshardeep Engineers, shall be governed by and construed in accordance with the <strong>Laws of India</strong>.
          </p>
          <p>
            Any legal disputes or proceedings arising out of or in connection with site usage or product supply shall fall under the exclusive jurisdiction of the competent courts in <strong>Ankleshwar / Bharuch, Gujarat, India</strong>.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-surface min-h-screen pb-16">
      {/* Hero Banner */}
      <section className="bg-primary-medium text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-blueprint pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-xs text-text-light-muted mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate" />
            <span className="text-white font-medium">Terms &amp; Conditions</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-accent/20 border border-accent/30 rounded-xl text-accent">
              <Scale className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Legal &amp; Operational Framework
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-text-light-muted max-w-2xl">
            Operational guidelines, channel partnership disclosures, technical quotation terms, and legal jurisdiction for Akshardeep Engineers.
          </p>
          <p className="text-xs text-slate mt-4">
            Last Updated: <span className="text-white font-medium">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Nav Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28 bg-white p-5 rounded-xl border border-border-default shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4 pb-2 border-b border-border-light">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs font-medium text-text-body hover:text-primary transition-colors py-1 hover:pl-1"
                  >
                    {s.title}
                  </a>
                ))}
                <a
                  href="#contact-terms"
                  className="block text-xs font-medium text-accent hover:text-accent-hover transition-colors py-1 hover:pl-1"
                >
                  Contact Support
                </a>
              </nav>
            </div>
          </aside>

          {/* Policy Body Cards */}
          <main className="lg:col-span-3 space-y-6">
            {sections.map((s) => {
              const IconComponent = s.icon;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-border-default shadow-sm scroll-mt-28 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border-light">
                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-bold text-text-dark">{s.title}</h2>
                  </div>
                  <div className="text-sm text-text-body leading-relaxed">{s.content}</div>
                </article>
              );
            })}

            {/* Contact Box */}
            <article
              id="contact-terms"
              className="bg-charcoal text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg scroll-mt-28"
            >
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                Questions Regarding Terms &amp; Quotations?
              </h2>
              <p className="text-sm text-text-light-muted mb-6 leading-relaxed">
                For questions regarding technical specifications, official RFQ proposals, or commercial supply agreements, please reach out to our team:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">
                      {COMPANY.name}
                    </strong>
                    <span className="text-text-light-muted">
                      {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city},{" "}
                      {COMPANY.address.state}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Sales Contact</strong>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-accent hover:underline font-medium"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </div>
  );
}
