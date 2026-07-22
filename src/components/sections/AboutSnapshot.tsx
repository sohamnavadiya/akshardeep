"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const strengths = [
  { title: "Quick Delivery", detail: "Large stock maintained at Ankleshwar GIDC" },
  { title: "Technical Expertise", detail: "10+ years in valve assembly & instrumentation" },
  { title: "Complete Facility", detail: "3,420 sq.ft — assembly, testing & servicing" },
  { title: "Quality Assurance", detail: "Tested for reliability & industry compliance" },
  { title: "Customer Focus", detail: "Tailored solutions for every application" },
  { title: "After-Sales Support", detail: "Dedicated service unit & field personnel" },
];

export function AboutSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — content */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="About Us"
              title="Your Trusted Industrial Solutions Partner"
              subtitle="Akshardeep Engineers provides cost effective, efficient, flexible and robust solutions to optimize and smooth running of our customer's business across diverse process industries."
              align="left"
              className="mb-10"
            />
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — strengths grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border-default border border-border-default">
              {strengths.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="bg-white p-6 hover:bg-surface transition-colors"
                >
                  <div className="text-[11px] font-bold text-accent mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-bold text-text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
