"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Target, Info, Check, ShieldCheck, Settings, Layers } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface Hotspot {
  id: number;
  x: number; // % from left
  y: number; // % from top
  title: string;
  category: string;
  specs: string[];
  partner: string;
}

export function HeroConcept3() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const hotspots: Hotspot[] = [
    {
      id: 1,
      x: 50,
      y: 22,
      title: "Smart Pneumatic Actuator",
      category: "El-O-Matic Partnership",
      partner: "El-O-Matic",
      specs: ["Dual Piston Rack & Pinion", "Hard Anodized Corrosion Resistance", "100k+ Cycle Endurance Rating"],
    },
    {
      id: 2,
      x: 72,
      y: 42,
      title: "Digital Electro-Pneumatic Positioner",
      category: "Forbes Marshall",
      partner: "Forbes Marshall",
      specs: ["4-20mA HART / Modbus Communication", "Auto-Calibrating Micro-Processor", "IP66 NEMA 4X Enclosure"],
    },
    {
      id: 3,
      x: 48,
      y: 62,
      title: "Cast Steel Globe Body",
      category: "Intervalve",
      partner: "Intervalve",
      specs: ["ASTM A216 WCB Heavy Duty Construction", "PN40 / ANSI 300 Pressure Class", "Zero-Leak Stellite Trim Option"],
    },
    {
      id: 4,
      x: 28,
      y: 78,
      title: "High-Temperature Flange Seal",
      category: "Industrial Standard",
      partner: "Forbes Marshall",
      specs: ["Spiral Wound Gaskets", "RF/RTJ Flange Ends to ASME B16.5", "Up to 450°C Thermal Limit"],
    },
  ];

  return (
    <section className="relative bg-primary min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 lg:py-24">
      {/* Heavy Engineering Grid Canvas Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-45" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-sky-900/20 via-blue-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-500/15 border border-sky-400/30 rounded-full mb-6 text-xs text-sky-200 font-medium tracking-wide uppercase"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
              CONCEPT 3: CAD BLUEPRINT HOTSPOT VIEWER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Engineered Blueprint Precision &amp; Reliability
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
            >
              Authorized Channel Partner for Forbes Marshall, Intervalve, and El-O-Matic. Click on the interactive CAD blueprint to inspect high-performance valve assemblies built to ISO and ASME standards.
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

            {/* Sub-strip with CAD info */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-sky-400" />
                Click Blueprint Pins to Inspect
              </span>
              <span className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-sky-400" />
                Full CAD Dimensions Available
              </span>
            </div>
          </div>

          {/* Right Hero: Interactive CAD Blueprint Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative bg-slate-950/90 border border-sky-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* CAD Canvas Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-sky-500/20 text-xs font-mono">
                <span className="text-sky-300 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-400" />
                  CAD SCHEMATIC: MODEL AK-V400
                </span>
                <span className="text-white/50">SCALE 1:10 | ASME B16.34</span>
              </div>

              {/* Central CAD Schematic Container */}
              <div className="relative my-4 w-full h-[320px] bg-slate-900/60 rounded-xl border border-sky-500/20 flex items-center justify-center p-4">
                
                {/* Vector CAD SVG Wireframe Drawing */}
                <svg className="w-full h-full max-w-[400px]" viewBox="0 0 300 300" fill="none">
                  {/* Grid Lines */}
                  {[30, 90, 150, 210, 270].map((v) => (
                    <line key={`h${v}`} x1="0" y1={v} x2="300" y2={v} stroke="#0284c7" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3" />
                  ))}
                  {[30, 90, 150, 210, 270].map((v) => (
                    <line key={`v${v}`} x1={v} y1="0" x2={v} y2="300" stroke="#0284c7" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3" />
                  ))}

                  {/* Outer Pipe Ends & Flanges */}
                  <rect x="20" y="160" width="30" height="60" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <rect x="250" y="160" width="30" height="60" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.8" />
                  <line x1="50" y1="170" x2="110" y2="170" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="50" y1="210" x2="110" y2="210" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="190" y1="170" x2="250" y2="170" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="190" y1="210" x2="250" y2="210" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* Main Valve Globe Body */}
                  <circle cx="150" cy="190" r="45" stroke="#38bdf8" strokeWidth="2" fill="#0369a1" fillOpacity="0.1" />
                  <path d="M 110 190 Q 150 220 190 190" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />

                  {/* Stem & Bonnet */}
                  <rect x="142" y="100" width="16" height="55" stroke="#38bdf8" strokeWidth="1.5" fill="#0369a1" fillOpacity="0.2" />
                  <line x1="150" y1="70" x2="150" y2="170" stroke="#38bdf8" strokeWidth="2.5" />

                  {/* Actuator Top Assembly */}
                  <rect x="110" y="30" width="80" height="45" rx="8" stroke="#38bdf8" strokeWidth="2" fill="#0284c7" fillOpacity="0.2" />
                  <path d="M 110 52.5 H 190" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                  {/* Digital Positioner Box Side Attach */}
                  <rect x="195" y="105" width="45" height="35" rx="4" stroke="#38bdf8" strokeWidth="1.5" fill="#0284c7" fillOpacity="0.3" />
                  <line x1="180" y1="122" x2="195" y2="122" stroke="#38bdf8" strokeWidth="1.5" />

                  {/* Technical Dimension Crosshair Lines */}
                  <line x1="150" y1="0" x2="150" y2="300" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" strokeDasharray="6 4" />
                  <line x1="0" y1="190" x2="300" y2="190" stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" strokeDasharray="6 4" />
                </svg>

                {/* Hotspot Target Pins Overlay */}
                {hotspots.map((hs) => {
                  const isSelected = activeHotspot?.id === hs.id;
                  return (
                    <button
                      key={hs.id}
                      onClick={() => setActiveHotspot(isSelected ? null : hs)}
                      onMouseEnter={() => setActiveHotspot(hs)}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                    >
                      <span className="relative flex h-7 w-7 items-center justify-center">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isSelected ? "bg-accent" : "bg-sky-400"
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-bold transition-transform ${
                            isSelected
                              ? "bg-accent text-white scale-125 shadow-lg shadow-accent/50"
                              : "bg-sky-500 text-white hover:scale-110"
                          }`}
                        >
                          {hs.id}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Spec Card Popover */}
              <div className="min-h-[100px] bg-slate-900 border border-sky-500/30 rounded-xl p-4 transition-all">
                {activeHotspot ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400">
                        {activeHotspot.category}
                      </span>
                      <span className="text-[10px] font-mono bg-sky-500/20 text-sky-200 px-2 py-0.5 rounded">
                        PIN #{activeHotspot.id} ACTIVE
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1">{activeHotspot.title}</h4>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {activeHotspot.specs.map((sp, idx) => (
                        <div key={idx} className="text-[11px] text-white/80 bg-white/5 p-1.5 rounded flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full py-3 text-center text-xs text-white/50 gap-2">
                    <Info className="w-4 h-4 text-sky-400" />
                    <span>Hover or click on any numbered pin on the CAD blueprint to inspect details</span>
                  </div>
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
