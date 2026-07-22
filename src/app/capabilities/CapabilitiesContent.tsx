"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Valve Automation Center",
    description: "Dedicated ON-OFF valve automation facility for actuator assembly, testing and supply. Integrates seamlessly with SCADA or DCS systems.",
    features: ["Pneumatic Actuators", "Positioner Mounting", "Fail-Safe Design", "SIL 3 Rated"],
  },
  {
    title: "Valve Repair Services",
    description: "Full-service valve repair center handling any size, type, make, rating & MOC. Over 18 years of combined experience in valve servicing.",
    features: ["Seat Grinding & Lapping", "Hydrostatic Testing", "Spray Painting", "Seat Welding"],
  },
  {
    title: "Diaphragm Seal Replacement",
    description: "Partnership with Badotherm India for diaphragm seal replacement — any brand, any type (flanged, threaded, clamped).",
    features: ["Any Brand Seals", "Reduced Cost", "Shorter Delivery", "Same Accuracy"],
  },
  {
    title: "Process Instrumentation",
    description: "Complete range of precision monitoring devices — pressure, temperature, level & flow measurement with NABL traceability.",
    features: ["Pressure Gauges", "Temperature Instruments", "Level Switches", "Flow Meters"],
  },
  {
    title: "Quick Stock & Delivery",
    description: "Large inventory maintained at Ankleshwar GIDC for immediate availability. Efficient assembly ensures on-time delivery.",
    features: ["Ready Stock", "Bulk from OEM", "Quick Assembly", "Pan-India Delivery"],
  },
  {
    title: "After-Sales Support",
    description: "Dedicated service unit providing after-sales support including actuator mounting, positioner calibration and preventive maintenance.",
    features: ["Actuator Mounting", "Positioner Calibration", "Preventive Maintenance", "Technical Support"],
  },
];

export function CapabilitiesContent() {
  return (
    <section className="pt-32 pb-20 bg-surface bg-blueprint">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Solutions
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Our Capabilities
          </h1>
          <p className="mt-3 text-base text-text-body max-w-xl">
            From valve automation and repair to instrumentation and quick delivery —
            complete industrial solutions under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-default border border-border-default">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-white p-7 hover:bg-surface-warm transition-colors group"
            >
              <div className="text-[10px] font-bold text-accent mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-sm font-bold text-text-dark mb-2 group-hover:text-accent transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                {cap.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {cap.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-0.5 text-[10px] border border-border-default text-text-muted bg-surface"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
