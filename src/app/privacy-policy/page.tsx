import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, Server, Bell, Mail, MapPin, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Akshardeep Engineers — Learn how we collect, protect, and handle data when you browse our industrial flow control and process instrumentation solutions.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 10, 2026";

  const sections = [
    {
      id: "collection",
      icon: Eye,
      title: "1. Information We Collect",
      content: (
        <div className="space-y-3">
          <p>
            Akshardeep Engineers collects information necessary to fulfill your industrial enquiries, provide technical datasheets, process quotations, and deliver our flow control products and services.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              <strong className="text-text-dark">Personal &amp; Corporate Contact Details:</strong> Name, business email address, phone number, company name, department, and billing/delivery address provided when submitting RFQ forms or reaching out via phone/email.
            </li>
            <li>
              <strong className="text-text-dark">Technical &amp; Order Requirements:</strong> Valve specifications, process parameters (pressure rating, temperature, medium, MOC), RFQ attachments, and project schedules.
            </li>
            <li>
              <strong className="text-text-dark">Automated Technical Usage Data:</strong> IP addresses, browser types, device identifiers, referring URLs, operating system details, and interaction metrics gathered standardly when navigating our site.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "usage",
      icon: FileText,
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-3">
          <p>We use collected data solely for legitimate industrial business purposes, including:</p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>Responding to RFQs, technical inquiries, and product price requests for Forbes Marshall, Intervalve, El-O-Matic, and Badotherm ranges.</li>
            <li>Processing orders, issuing official tax invoices, and scheduling on-site valve automation or diaphragm seal replacements in Ankleshwar GIDC and Gujarat industrial hubs.</li>
            <li>Improving website navigation, catalog usability, and digital resource delivery (PDF brochures and datasheets).</li>
            <li>Ensuring compliance with statutory industrial equipment regulations, taxation laws, and warranty validation.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: Server,
      title: "3. Cookies & Analytics Technologies",
      content: (
        <div className="space-y-3">
          <p>
            Our website uses cookies and aggregate tracking tools to optimize page performance and monitor technical site health:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              <strong className="text-text-dark">Essential Cookies:</strong> Session state cookies required for basic navigation, security, and storing your consent choices.
            </li>
            <li>
              <strong className="text-text-dark">Google Analytics (G-2JG47TB45V):</strong> We use Google Analytics to analyze aggregated visitor traffic, top-viewed product categories (e.g. Butterfly Valves, Ball Valves, Automation), and site speed. These cookies collect non-identifying aggregate metrics.
            </li>
          </ul>
          <p className="text-xs bg-surface p-3 rounded-lg border border-border-default text-text-muted mt-2">
            You can modify your browser settings to decline non-essential cookies at any time, or click &quot;Essential Only&quot; on our Cookie Consent banner.
          </p>
        </div>
      ),
    },
    {
      id: "sharing",
      icon: Lock,
      title: "4. Third-Party Information Sharing",
      content: (
        <div className="space-y-3">
          <p>
            Akshardeep Engineers does <strong>not sell, rent, or trade</strong> customer data to third-party marketing firms. Information is shared strictly under the following limited conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>
              <strong className="text-text-dark">Authorised Principal Brands:</strong> When required for custom engineering validation, factory test certificates (TC), or direct manufacturer warranties from Forbes Marshall (HVY) Pvt. Ltd., Intervalve Poonawalla Pvt. Ltd., El-O-Matic India Pvt. Ltd., or Badotherm India.
            </li>
            <li>
              <strong className="text-text-dark">Logistics &amp; Delivery Partners:</strong> Sharing shipping addresses and contact details with vetted freight and courier partners for valve equipment dispatches.
            </li>
            <li>
              <strong className="text-text-dark">Legal &amp; Regulatory Obligations:</strong> Where mandated by Indian law, judicial summons, or government tax/audit authorities.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "5. Data Security & Retention",
      content: (
        <div className="space-y-3">
          <p>
            We implement administrative, technical, and physical safeguards designed to protect industrial project data against unauthorized access, loss, or alteration.
          </p>
          <p>
            Customer RFQs, transaction histories, and project specifications are retained only as long as necessary to service warranty commitments, maintain audit compliance, or maintain ongoing engineering accounts.
          </p>
        </div>
      ),
    },
    {
      id: "rights",
      icon: Bell,
      title: "6. Your Rights & Options",
      content: (
        <div className="space-y-3">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 text-text-body">
            <li>Request access to or copies of your personal contact records stored with Akshardeep Engineers.</li>
            <li>Request corrections to outdated or incomplete company/billing contact details.</li>
            <li>Request deletion of non-transactional contact data, subject to tax and legal retention requirements.</li>
            <li>Opt-out of any promotional or technical product update communications.</li>
          </ul>
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
            <span className="text-white font-medium">Privacy Policy</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-accent/20 border border-accent/30 rounded-xl text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Legal &amp; Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-text-light-muted max-w-2xl">
            Transparency, data security, and confidentiality in our industrial valve, automation, and instrumentation business operations.
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
                  href="#contact-privacy"
                  className="block text-xs font-medium text-accent hover:text-accent-hover transition-colors py-1 hover:pl-1"
                >
                  Contact Privacy Team
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
              id="contact-privacy"
              className="bg-charcoal text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg scroll-mt-28"
            >
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                Privacy &amp; Data Enquiries
              </h2>
              <p className="text-sm text-text-light-muted mb-6 leading-relaxed">
                If you have questions regarding this Privacy Policy, wish to exercise your data rights, or need clarifications about industrial quotation security, please contact our administrative team:
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
                    <strong className="block text-white font-semibold mb-0.5">Email Contact</strong>
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
