"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

export function ClientLogos() {
  const allBrands = [
    ...COMPANY.partners.map((p) => p.name),
    ...COMPANY.additionalBrands,
  ];

  return (
    <section className="py-16 bg-surface border-y border-border-default">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-concrete">
            Brands We Represent & Supply
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {allBrands.map((brand) => (
            <span
              key={brand}
              className="text-base font-bold text-steel/40 hover:text-steel transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
