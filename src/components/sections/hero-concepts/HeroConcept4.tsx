"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Factory, TrendingUp, ChevronRight, Zap, Building2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function HeroConcept4() {
  const [selectedPartner, setSelectedPartner] = useState<"forbes" | "intervalve" | "el-o-matic">("forbes");

  const partnerData = {
    forbes: {
      name: "Forbes Marshall",
      desc: "Leader in steam engineering, control valves, and process instrumentation.",
      metrics: "50+ Product Lines Available",
      highlight: "Authorized Stockist & Technical Service Provider",
      products: ["Control Valves", "Steam Traps", "Flowmeters", "Boiler Automation"],
    },
    intervalve: {
      name: "Intervalve Poonawalla",
      desc: "Premier manufacturer of high-reliability butterfly and check valves.",
      metrics: "Zero Leakage Standard",
      highlight: "Industrial Flow Control & Water Treatment Solutions",
      products: ["Butterfly Valves", "Dual Plate Check Valves", "Ball Valves"],
    },
    "el-o-matic": {
      name: "El-O-Matic",
      desc: "World-class pneumatic rotary actuators and valve automation controls.",
      metrics: "100k+ Cycle Rating",
      highlight: "Pneumatic & Electric Actuator Integration",
      products: ["Pneumatic Actuators", "Limit Switch Boxes", "Solenoid Valves"],
    },
  };

  return (
    <section className="relative bg-primary min-h-[90vh] flex items-center overflow-hidden py-24 lg:py-28">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-35" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-6 text-xs text-white font-medium tracking-wide uppercase"
            >
              <Award className="w-3.5 h-3.5 text-accent" />
              CONCEPT 4: VERTICALLY CENTERED PARTNER &amp; PERFORMANCE HUB
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Industrial Valves, Automation &amp; Instrumentation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
            >
              Providing cost-effective, high-reliability flow control and process measurement solutions across India with certified engineering expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I would like to request a quote.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 rounded-lg"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white/5 rounded-lg"
              >
                Explore Products
              </Link>
            </motion.div>

            {/* Metric Stats Cards Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="bg-white/[0.04] p-3 rounded-lg border border-white/10">
                <div className="text-xl font-extrabold text-white">11+ Yrs</div>
                <div className="text-[10px] uppercase font-bold text-white/60 mt-0.5">Experience</div>
              </div>
              <div className="bg-white/[0.04] p-3 rounded-lg border border-white/10">
                <div className="text-xl font-extrabold text-white">200+</div>
                <div className="text-[10px] uppercase font-bold text-white/60 mt-0.5">Clients</div>
              </div>
              <div className="bg-white/[0.04] p-3 rounded-lg border border-white/10">
                <div className="text-xl font-extrabold text-accent">50+</div>
                <div className="text-[10px] uppercase font-bold text-white/60 mt-0.5">Product Lines</div>
              </div>
              <div className="bg-white/[0.04] p-3 rounded-lg border border-white/10">
                <div className="text-xl font-extrabold text-emerald-400">3,420</div>
                <div className="text-[10px] uppercase font-bold text-white/60 mt-0.5">Sq.Ft Facility</div>
              </div>
            </div>
          </div>

          {/* Right Hero: Authorised Partner Hub Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="bg-slate-900/90 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    Official Channel Partner Hub
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">World-Class Brand Portfolio</h3>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              {/* Interactive Partner Tab Buttons */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(["forbes", "intervalve", "el-o-matic"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPartner(p)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedPartner === p
                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/25"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {p === "forbes" ? "Forbes Marshall" : p === "intervalve" ? "Intervalve" : "El-O-Matic"}
                  </button>
                ))}
              </div>

              {/* Active Partner Info Showcase Box */}
              <div className="mt-5 bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">{partnerData[selectedPartner].name}</h4>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase rounded">
                    {partnerData[selectedPartner].metrics}
                  </span>
                </div>
                
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  {partnerData[selectedPartner].desc}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold text-white/50 block mb-2">
                    Key Product Offerings:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {partnerData[selectedPartner].products.map((prod, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/90 flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-accent" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Direct Link */}
              <div className="mt-5 pt-3 flex items-center justify-between text-xs">
                <span className="text-white/60">Stocked locally in Gujarat &amp; dispatched across India.</span>
                <Link
                  href="/products"
                  className="text-accent font-bold hover:underline flex items-center gap-1"
                >
                  View Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
