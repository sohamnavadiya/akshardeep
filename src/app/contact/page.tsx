import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Akshardeep Engineers for industrial valve solutions, custom engineering, and quotations. Ankleshwar, Gujarat.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 bg-surface bg-blueprint min-h-screen">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Contact
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-base text-text-body max-w-xl">
            Our engineering team is ready to discuss your requirements. Fill in
            the form or reach out directly — we typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
