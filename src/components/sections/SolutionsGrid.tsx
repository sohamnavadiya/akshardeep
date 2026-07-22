"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SolutionsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Solutions"
          title="Complete Flow Control Solutions"
          subtitle="From specification to commissioning — integrated engineering solutions for every process requirement"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-default">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="group p-6 lg:p-7 border-b border-r border-border-default hover:bg-surface transition-colors relative"
            >
              {/* Number accent */}
              <div className="absolute top-4 right-4 text-[10px] font-bold text-border-default group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-8 h-[2px] bg-accent mb-5" />

              <h3 className="text-sm font-bold text-text-dark mb-2 group-hover:text-accent transition-colors">
                {solution.name}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
