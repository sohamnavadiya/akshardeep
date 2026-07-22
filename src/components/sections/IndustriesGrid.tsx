"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function IndustriesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Blueprint overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Industries Served"
          title="Mission-Critical Applications"
          subtitle="Proven performance across India's most demanding process industries"
          dark
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-primary-medium hover:bg-primary-light p-6 text-center transition-colors group cursor-default"
            >
              <div className="w-2 h-2 bg-accent mx-auto mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="text-sm font-bold text-white mb-1">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
