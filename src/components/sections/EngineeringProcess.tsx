"use client";

import { motion } from "framer-motion";
import { ENGINEERING_PROCESS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function EngineeringProcess() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Process"
          title="Engineering Workflow"
          subtitle="From requirement analysis to commissioning — systematic approach ensures quality at every stage"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border-default" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-0">
            {ENGINEERING_PROCESS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="relative text-center lg:px-2"
              >
                {/* Node */}
                <div className="relative z-10 w-4 h-4 mx-auto bg-white border-2 border-accent mb-4 rotate-45" />

                <div className="text-[10px] font-bold text-accent tracking-wider mb-1">
                  {item.step}
                </div>
                <h4 className="text-xs font-bold text-text-dark mb-0.5">
                  {item.title}
                </h4>
                <p className="text-[10px] text-text-muted leading-snug">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
