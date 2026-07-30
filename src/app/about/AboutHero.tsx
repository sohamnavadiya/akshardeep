"use client";

import { motion } from "framer-motion";
import { StatsCounter } from "@/components/shared/StatsCounter";
import { COMPANY } from "@/lib/constants";

const stats = [
  { value: COMPANY.stats.yearsExperience, label: "Years Experience", suffix: "+" },
  { value: COMPANY.stats.clients, label: "Clients Served", suffix: "+" },
  { value: COMPANY.stats.products, label: "Product Lines", suffix: "+" },
  { value: COMPANY.stats.infrastructure, label: "Sq.Ft Facility", suffix: "+" },
];

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              About Us
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Akshardeep Engineers
          </h1>
          <p className="mt-6 text-base lg:text-lg text-text-light-muted leading-relaxed max-w-2xl">
            Established in 2013, Akshardeep Engineers is a trusted supplier of
            industrial valves, valve automation and process instrumentation.
            As authorised channel partners of Forbes Marshall, Intervalve &amp; El-O-Matic,
            we deliver quality and reliability from our 5,420 sq.ft facility in Ankleshwar, Gujarat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 border-t border-white/10 pt-10"
        >
          <StatsCounter stats={stats} dark />
        </motion.div>
      </div>
    </section>
  );
}
