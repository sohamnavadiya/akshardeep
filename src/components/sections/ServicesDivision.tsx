"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesDivision() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left intro */}
          <div className="lg:col-span-4">
            <SectionHeading
              label="Service Division"
              title="Repair, Testing & Maintenance"
              subtitle="Leading industrial valve repair services in Ankleshwar. We handle valves of any size, age, type, make, rating and material of construction."
              align="left"
              className="mb-8"
            />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Service
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right services list */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="border-l-2 border-accent pl-5 py-3"
                >
                  <h3 className="text-sm font-bold text-text-dark mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {service.description}
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
