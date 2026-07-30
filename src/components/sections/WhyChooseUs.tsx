"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  { stat: "14+", unit: "Years", detail: "Engineering Experience" },
  { stat: "3", unit: "OEM", detail: "Authorised Partnerships" },
  { stat: "24h", unit: "Max", detail: "Delivery Turnaround" },
  { stat: "200+", unit: "Active", detail: "Industry Clients" },
  { stat: "5,420+", unit: "Sq.Ft", detail: "Testing Facility" },
  { stat: "100%", unit: "Tested", detail: "Quality Assurance" },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white bg-technical">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Why Akshardeep"
          title="Proven Performance, Competitive Pricing"
          subtitle="Quality products at better prices — bulk purchasing from OEM with low overhead for cost-effective solutions"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 border border-border-default">
          {reasons.map((item, i) => (
            <motion.div
              key={item.detail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="p-8 border-b border-r border-border-default text-center hover:bg-surface transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {item.stat}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mt-1">
                {item.unit}
              </div>
              <div className="text-xs text-text-muted mt-2 font-medium">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
