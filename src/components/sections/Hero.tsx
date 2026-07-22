"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-primary min-h-[90vh] flex items-end overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40" />

      {/* Diagonal accent stripe */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-accent/5 skew-x-[-6deg] translate-x-20 hidden lg:block" />

      {/* Technical line decoration */}
      <div className="absolute top-20 left-10 w-px h-40 bg-white/10 hidden lg:block" />
      <div className="absolute top-20 left-10 w-16 h-px bg-white/10 hidden lg:block" />
      <div className="absolute bottom-40 right-20 w-px h-32 bg-white/10 hidden lg:block" />
      <div className="absolute bottom-40 right-20 w-12 h-px bg-white/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 w-full pb-20 pt-36 lg:pt-40">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Est. 2013 — Ankleshwar, India
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight"
            >
              Engineering Precision for
              <br />
              <span className="text-accent">Industrial Flow Control</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base lg:text-lg text-text-light-muted max-w-xl leading-relaxed"
            >
              Delivering world-class valve automation, industrial instrumentation,
              process control, and engineering solutions for mission-critical industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>

          {/* Right — stats block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="border border-white/10 bg-white/[0.03] p-8">
              <div className="grid grid-cols-2 gap-6">
                <StatBlock value="11+" label="Years Experience" />
                <StatBlock value="200+" label="Clients Served" />
                <StatBlock value="50+" label="Product Lines" />
                <StatBlock value="3,420" label="Sq.Ft Facility" />
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-light-muted">
                  Authorised Channel Partner
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/80">
                  <span>Forbes Marshall</span>
                  <span className="text-white/30">|</span>
                  <span>Intervalve</span>
                  <span className="text-white/30">|</span>
                  <span>El-O-Matic</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />
    </section>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
        {value}
      </div>
      <div className="text-[11px] font-medium uppercase tracking-wider text-text-light-muted mt-0.5">
        {label}
      </div>
    </div>
  );
}
