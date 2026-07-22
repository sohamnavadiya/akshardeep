"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Gauge, Activity, Droplets, Wind, Flame, ShieldCheck, Zap } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function HeroConcept1() {
  // Simulator State
  const [valveState, setValveState] = useState<"open" | "throttled" | "closed">("open");
  const [fluidType, setFluidType] = useState<"water" | "steam" | "oil">("water");
  const [pressure, setPressure] = useState<number>(150); // PSI
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Computed flow rate (GPM)
  const flowRate = valveState === "closed" ? 0 : valveState === "throttled" ? Math.round(pressure * 1.4) : Math.round(pressure * 2.8);
  const tempC = fluidType === "water" ? 45 : fluidType === "steam" ? 180 : 85;

  // Particle speed calculation
  const particleSpeed = valveState === "closed" ? 0 : valveState === "throttled" ? 3 : 1.5;

  return (
    <section className="relative bg-primary min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16 lg:py-24">
      {/* Background blueprint grid & gradient */}
      <div className="absolute inset-0 bg-blueprint opacity-35" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-accent/10 via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-6 text-xs text-white font-medium tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CONCEPT 1: INTERACTIVE FLOW &amp; PRESSURE SIMULATOR
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Precision Flow Control &amp; Process Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
            >
              Authorised partner for Forbes Marshall, Intervalve, and El-O-Matic. Experience live simulation of high-reliability industrial valve manifolds engineered for extreme pressures and zero-leakage performance.
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

            {/* Quick Metrics Strip */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-black text-white">11+ Yrs</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">Field Expertise</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">50+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">Product Lines</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400">99.9%</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">Uptime Reliability</div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Flow Simulator Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            {/* Interactive Simulator Box */}
            <div className="relative bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden">
              
              {/* Box Header & Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-accent/20 border border-accent/40 text-accent">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">Interactive Flow Simulator</h3>
                    <p className="text-[11px] text-white/60">Live Valve Manifold Dynamics</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setIsSimulating(!isSimulating)}
                    className={`px-3 py-1 text-xs font-semibold rounded flex items-center gap-1.5 transition-colors ${
                      isSimulating ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {isSimulating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    {isSimulating ? "Active" : "Paused"}
                  </button>
                </div>
              </div>

              {/* Controls Toolbar */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Valve Position Selector */}
                <div className="col-span-2 sm:col-span-1 bg-white/[0.04] p-2.5 rounded-lg border border-white/10">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 block mb-1.5">
                    Valve Position
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(["open", "throttled", "closed"] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setValveState(st)}
                        className={`py-1 text-[10px] font-bold uppercase rounded transition-all ${
                          valveState === st
                            ? st === "open"
                              ? "bg-emerald-500 text-slate-950 shadow-md"
                              : st === "throttled"
                              ? "bg-amber-500 text-slate-950 shadow-md"
                              : "bg-rose-500 text-white shadow-md"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Medium Type Selector */}
                <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/10">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-white/60 block mb-1.5">
                    Fluid Medium
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(["water", "steam", "oil"] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setFluidType(m)}
                        className={`py-1 text-[10px] font-bold uppercase rounded flex justify-center items-center transition-all ${
                          fluidType === m ? "bg-accent text-white shadow-md" : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {m === "water" ? <Droplets className="w-3 h-3" /> : m === "steam" ? <Wind className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pressure Slider */}
                <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-white/60">
                      Line Pressure
                    </label>
                    <span className="text-[11px] font-mono font-bold text-accent">{pressure} PSI</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={400}
                    step={25}
                    value={pressure}
                    onChange={(e) => setPressure(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>
              </div>

              {/* Graphic Flow Pipe Canvas SVG */}
              <div className="relative mt-5 h-56 sm:h-64 bg-slate-950/90 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-4">
                {/* SVG Piping Network */}
                <svg className="w-full h-full" viewBox="0 0 500 240" fill="none">
                  {/* Pipe Outer Wall */}
                  <path
                    d="M 20 120 H 190 M 310 120 H 480"
                    stroke="#334155"
                    strokeWidth="48"
                    strokeLinecap="round"
                  />
                  {/* Pipe Inner Cavity */}
                  <path
                    d="M 20 120 H 190 M 310 120 H 480"
                    stroke="#0f172a"
                    strokeWidth="38"
                    strokeLinecap="round"
                  />
                  {/* Flanges */}
                  <rect x="175" y="85" width="18" height="70" rx="3" fill="#475569" stroke="#64748b" strokeWidth="2" />
                  <rect x="307" y="85" width="18" height="70" rx="3" fill="#475569" stroke="#64748b" strokeWidth="2" />

                  {/* Central Valve Body */}
                  <circle cx="250" cy="120" r="55" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                  <circle cx="250" cy="120" r="42" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 2" />

                  {/* Valve Disc / Gate */}
                  <motion.rect
                    x="244"
                    y="75"
                    width="12"
                    height="90"
                    rx="4"
                    fill={valveState === "closed" ? "#ef4444" : valveState === "throttled" ? "#f59e0b" : "#10b981"}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    animate={{
                      rotate: valveState === "open" ? 90 : valveState === "throttled" ? 45 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{ originX: "250px", originY: "120px" }}
                  />

                  {/* Actuator Top Assembly */}
                  <rect x="235" y="20" width="30" height="45" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                  <rect x="220" y="10" width="60" height="14" rx="3" fill="#38bdf8" />
                  <line x1="250" y1="65" x2="250" y2="95" stroke="#94a3b8" strokeWidth="4" />

                  {/* Animated Fluid Particles */}
                  {isSimulating && valveState !== "closed" && (
                    <g>
                      {[...Array(12)].map((_, i) => {
                        const color =
                          fluidType === "water" ? "#38bdf8" : fluidType === "steam" ? "#e0f2fe" : "#f59e0b";
                        return (
                          <motion.circle
                            key={i}
                            r={fluidType === "steam" ? 5 : 4}
                            fill={color}
                            opacity={0.8}
                            initial={{ cx: 20 + i * 40, cy: 120 }}
                            animate={{
                              cx: [20 + ((i * 40) % 460), 480],
                            }}
                            transition={{
                              duration: particleSpeed,
                              repeat: Infinity,
                              ease: "linear",
                              delay: (i * 0.25) % particleSpeed,
                            }}
                          />
                        );
                      })}
                    </g>
                  )}
                </svg>

                {/* Overlaid Live Badges */}
                <div className="absolute top-3 left-3 bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[11px] font-mono font-bold text-white">{flowRate} GPM</span>
                </div>

                <div className="absolute top-3 right-3 bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-mono font-bold text-white">{tempC}°C Temp</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur flex items-center justify-between text-[11px]">
                  <span className="text-white/70">Valve Status:</span>
                  <span
                    className={`font-mono font-bold uppercase ${
                      valveState === "open"
                        ? "text-emerald-400"
                        : valveState === "throttled"
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}
                  >
                    ● {valveState === "open" ? "Full Flow (100%)" : valveState === "throttled" ? "Modulating (50%)" : "Zero-Leak Sealed (0%)"}
                  </span>
                </div>
              </div>

              {/* Bottom Partner Verification */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Engineered to ASME &amp; ISO Standards
                </span>
                <span className="font-mono text-accent font-semibold">Forbes Marshall / Intervalve / El-O-Matic</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
