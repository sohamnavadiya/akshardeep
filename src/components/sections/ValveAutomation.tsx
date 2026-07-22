"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const capabilities = [
  "ON/OFF Valve Automation",
  "SCADA & DCS Integration",
  "Digital Positioners",
  "Pneumatic Actuators (4–4022 Nm)",
  "SIL 3 Certified Systems",
  "Fail-Safe Design",
  "Remote Monitoring",
  "Digital Partial Stroke Testing",
];

const valveTypes = [
  "Ball Valve",
  "Butterfly Valve",
  "Plug Valve",
  "PFA Lined Valve",
];

export function ValveAutomation() {
  return (
    <section className="py-20 lg:py-28 bg-surface-warm bg-hatch">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <SectionHeading
              label="Valve Automation Center"
              title="Complete Automation Solutions"
              subtitle="Trusted provider of valve automation solutions — high-quality, reliable valves for industrial applications. We design, assemble and supply actuator valves built for durability and performance."
              align="left"
              className="mb-10"
            />

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-accent shrink-0" />
                  <span className="text-sm font-medium text-text-body">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — technical spec card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="border border-border-default bg-white">
              <div className="px-6 py-4 bg-primary text-white">
                <h3 className="text-xs font-bold uppercase tracking-[0.15em]">
                  Pneumatic Actuator Specifications
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <SpecRow label="Torque Range" value="4 to 4,022 Nm" />
                <SpecRow label="Operating Pressure" value="3 to 8 Bar" />
                <SpecRow label="Acting Type" value="Single Acting & Double Acting" />
                <SpecRow label="Body Material" value="Aluminium / Carbon Steel / SS" />
                <SpecRow label="Design" value="3-Lug Patented (Rack & Pinion)" />
                <SpecRow label="Lifecycle" value="5,00,000 Cycles (Min.)" />
                <SpecRow label="Safety" value="Fire Safe, SIL 3 Certified" />
              </div>
              <div className="px-6 py-4 bg-surface border-t border-border-default">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-concrete mb-2">
                  Valves Automated
                </p>
                <div className="flex flex-wrap gap-2">
                  {valveTypes.map((v) => (
                    <span key={v} className="text-xs px-2.5 py-1 border border-border-default bg-white text-text-body">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 pb-3 border-b border-border-subtle last:border-0 last:pb-0">
      <span className="text-xs font-semibold text-concrete uppercase tracking-wide">{label}</span>
      <span className="text-sm font-medium text-text-dark text-right">{value}</span>
    </div>
  );
}
