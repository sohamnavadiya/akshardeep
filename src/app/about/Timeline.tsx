"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const milestones = [
  { year: "2013", title: "Company Founded", description: "Akshardeep Engineers was established in Ankleshwar, Gujarat, as a supplier of industrial valves and instrumentation solutions." },
  { year: "2014", title: "Forbes Marshall Channel Partner", description: "Appointed as an authorised channel partner of Forbes Marshall for process measurement and control instrumentation." },
  { year: "2016", title: "Intervalve & El-O-Matic Dealership", description: "Became an authorised dealer of Intervalve Poonawalla Pvt. Ltd. and El-O-Matic India Pvt. Ltd. for industrial valves and pneumatic actuators." },
  { year: "2019", title: "Valve Automation Center", description: "Established a dedicated Valve Automation Center for on-off valve assembly, testing, and supply." },
  { year: "2022", title: "Valve Service Center", description: "Started a comprehensive Valve Service Center offering valve repair, hydrostatic testing, and calibration services." },
  { year: "2025", title: "Diaphragm Seal Services", description: "Partnered with Badotherm India to provide diaphragm seal replacement and servicing solutions." },
];

export function Timeline() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Journey"
          title="Key Milestones"
          subtitle="Building Trusted Industrial Solutions Since 2013"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-border-default" />

          <div className="space-y-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`relative flex items-start gap-6 sm:gap-8 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node */}
                <div className="absolute left-[18px] sm:left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-accent z-10 rotate-45" />

                <div className={`pl-12 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="text-xs font-bold text-accent">{milestone.year}</span>
                  <h3 className="text-sm font-bold text-text-dark mt-1">{milestone.title}</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
