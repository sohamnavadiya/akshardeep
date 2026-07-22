"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const repairServices = [
  "Inspection & strip down",
  "Buffing & machining",
  "Gland packing & body gasket change",
  "Seat welding repairs",
  "Seat grinding & lapping",
  "Hydrostatic body test",
  "Seat leakage test",
  "Spray painting",
  "In-house inspection & acceptance",
];

export function ServicesContent() {
  return (
    <section className="pt-32 pb-20 bg-surface bg-blueprint">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Service Division
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Repair, Testing & Maintenance
          </h1>
          <p className="mt-3 text-base text-text-body max-w-xl">
            Leading industrial valve repair services in Ankleshwar. We handle valves
            of any size, age, type, make, rating, MOC and temperature.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="border-l-2 border-accent pl-5 py-4 bg-white border-r border-t border-b border-r-border-default border-t-border-default border-b-border-default"
            >
              <h3 className="text-sm font-bold text-text-dark mb-1">
                {service.name}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Routine repair details */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-lg font-bold text-text-dark mb-6">
              Routine Valve Repair Process
            </h2>
            <div className="space-y-0 border border-border-default">
              {repairServices.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  className="flex items-center gap-4 px-5 py-3 border-b border-border-default last:border-0 hover:bg-surface transition-colors"
                >
                  <span className="text-[10px] font-bold text-accent w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-text-body">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-dark mb-6">
              Why Choose Akshardeep for Services
            </h2>
            <div className="border border-border-default bg-white p-7 space-y-4">
              <InfoRow title="Experience" detail="Over 18 years combined experience in valve servicing" />
              <InfoRow title="Comprehensive" detail="Handle valves of any size, type, and rating" />
              <InfoRow title="Skilled Technicians" detail="Deep knowledge of valve repair and maintenance" />
              <InfoRow title="Quality Commitment" detail="Services that meet or exceed industry standards" />
              <InfoRow title="Competitive Pricing" detail="Cost-effective without compromising quality or safety" />
              <InfoRow title="Customer Focused" detail="Tailored solutions prioritizing customer satisfaction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="pb-3 border-b border-border-subtle last:border-0 last:pb-0">
      <h4 className="text-xs font-bold text-text-dark mb-0.5">{title}</h4>
      <p className="text-xs text-text-muted">{detail}</p>
    </div>
  );
}
