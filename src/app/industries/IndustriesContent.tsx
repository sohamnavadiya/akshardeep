"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";

const industryDetails: Record<string, string[]> = {
  "oil-and-gas": ["Pipeline Isolation", "Wellhead Control", "High-Pressure Ball Valves", "Safety Instrumented Systems"],
  "chemical-plants": ["Corrosion Resistant Valves", "PFA Lined Valves", "Chemical Seal Gauges", "Process Automation"],
  "pharmaceutical": ["Sanitary Connections", "Triclover Fittings", "Clean-in-Place", "Temperature Monitoring"],
  "power-plants": ["Steam Isolation", "Safety Relief Valves", "High-Temperature Service", "IBR Certified"],
  "refineries": ["Fire Safe Valves", "Metal Seated Ball Valves", "Triple Offset Butterfly", "SCADA Integration"],
  "steel-plants": ["High-Temperature Valves", "Dust-Resistant Actuators", "Cooling Water Control", "Blast Furnace Service"],
  "fertilizers": ["Ammonia Service", "Urea Grade Valves", "High-Pressure Applications", "Corrosion Protection"],
  "water-treatment": ["Butterfly Valves", "Flow Measurement", "Level Monitoring", "Chlorination Control"],
  "manufacturing": ["Compressed Air Systems", "Pneumatic Actuators", "Process Control", "OEM Solutions"],
};

export function IndustriesContent() {
  return (
    <section className="pt-32 pb-20 bg-surface bg-blueprint">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Industries
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Mission-Critical Applications
          </h1>
          <p className="mt-3 text-base text-text-body max-w-xl">
            Proven performance across India&apos;s most demanding process industries.
            From specification to commissioning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-default border border-border-default">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-white p-7 hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent" />
                <h2 className="text-sm font-bold text-text-dark">{industry.name}</h2>
              </div>
              <ul className="space-y-1.5">
                {(industryDetails[industry.slug] || []).map((app) => (
                  <li key={app} className="text-xs text-text-muted flex items-center gap-2">
                    <div className="w-1 h-1 bg-concrete shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
