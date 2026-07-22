"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const milestones = [
  { year: "2013", title: "Company Founded", description: "Akshardeep Engineers established in Ankleshwar GIDC, Gujarat as an industrial valve supplier and service provider." },
  { year: "2014", title: "Forbes Marshall Partnership", description: "Became authorised channel partner of Forbes Marshall (HVY) Pvt. Ltd. for valve and steam engineering products." },
  { year: "2016", title: "Intervalve Dealership", description: "Appointed as authorised dealer of Intervalve Poonamwala Pvt. Ltd. for butterfly, ball, and high-performance valves." },
  { year: "2018", title: "Valve Automation Center", description: "Launched dedicated Valve Automation Center for ON-OFF actuator assembly, testing and supply." },
  { year: "2020", title: "El-O-Matic Partnership", description: "Added El-O-Matic India Pvt. Ltd. to our portfolio — expanding pneumatic actuator offerings." },
  { year: "2022", title: "Valve Service Center", description: "Established full-fledged Valve Repair Service Center with hydrostatic testing and calibration capabilities." },
  { year: "2024", title: "Diaphragm Seal Services", description: "Partnered with Badotherm India for diaphragm seal replacement services — any brand, any type." },
];

export function Timeline() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Our Journey"
          title="Key Milestones"
          subtitle="Building a trusted industrial solutions partnership since 2013"
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
