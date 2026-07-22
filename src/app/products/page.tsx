import type { Metadata } from "next";
import { ProductsListing } from "./ProductsListing";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Complete range of industrial valves, actuators, instrumentation and automation solutions. Butterfly, Ball, Gate, Globe, Check valves, pressure gauges, flow meters and more.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-surface bg-blueprint min-h-screen">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Product Range
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
              Industrial Catalog
            </h1>
            <p className="mt-3 text-base text-text-body max-w-xl">
              Comprehensive range of industrial valves and flow control equipment
              engineered for mission-critical applications.
            </p>
          </div>
          <ProductsListing />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
