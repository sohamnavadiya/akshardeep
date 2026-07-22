"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, ExternalLink, ShieldAlert, Cpu } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function HeroConcept2() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const productCards = [
    {
      id: 1,
      title: "Pneumatic Control Valves",
      partner: "Forbes Marshall",
      badge: "PN40 High Pressure",
      img: "/products/page16_img2_325x407.png",
      specs: ["Globe / Butterfly Pattern", "Smart 4-20mA Positioner", "Zero Seat Leakage"],
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: 2,
      title: "Steam Traps & Flowmeters",
      partner: "Forbes Marshall",
      badge: "Energy Saver 30%",
      img: "/products/page12_img1_465x354.png",
      specs: ["Thermodynamic & Float", "High Steam Efficiency", "In-line Inspection"],
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: 3,
      title: "Rotary & Rack Actuators",
      partner: "El-O-Matic",
      badge: "ISO 5211 Direct Mount",
      img: "/products/page20_img1_463x426.png",
      specs: ["Double Acting & Spring Return", "Hard Anodized Aluminum", "100k+ Cycle Rating"],
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section className="relative bg-primary min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 lg:py-24">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-blueprint opacity-35" />
      <div className="absolute -top-24 -right-24 w-[650px] h-[650px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/15 border border-accent/30 rounded-full mb-6 text-xs text-white font-medium tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
              CONCEPT 2: FLOATING 3D GLASSMORPHISM PRODUCT SHOWCASE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
            >
              India’s Trusted Source for Flow Control &amp; Valves
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
            >
              Authorised Channel Partner for Forbes Marshall, Intervalve, and El-O-Matic. Delivering premium industrial automation products with immediate stock availability and expert technical support.
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
                Explore Catalog
              </Link>
            </motion.div>

            {/* Key Value Props */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-6 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Genuine Certified
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Fast Nationwide Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                In-house Calibration &amp; Testing
              </span>
            </div>
          </div>

          {/* Right Hero: Floating 3D Product Showcase Cards */}
          <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center">
            
            {/* Card 1: Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0], x: 0 }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: 0.2 },
              }}
              onHoverStart={() => setActiveCard(1)}
              onHoverEnd={() => setActiveCard(null)}
              className={`absolute top-0 right-0 sm:right-4 w-[280px] sm:w-[320px] bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl transition-all duration-300 z-20 cursor-pointer ${
                activeCard === 1 ? "scale-105 border-accent shadow-accent/20 z-30" : "hover:border-white/40"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 bg-slate-950/80 rounded-xl border border-white/10 p-2 shrink-0 flex items-center justify-center">
                  <Image
                    src={productCards[0].img}
                    alt={productCards[0].title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="px-2 py-0.5 bg-accent/20 text-accent border border-accent/30 text-[10px] font-bold uppercase rounded">
                    {productCards[0].badge}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1.5 leading-snug">{productCards[0].title}</h4>
                  <p className="text-[11px] text-white/60 mt-0.5">{productCards[0].partner}</p>
                </div>
              </div>
              <ul className="mt-3 pt-3 border-t border-white/10 space-y-1">
                {productCards[0].specs.map((sp, i) => (
                  <li key={i} className="text-[11px] text-white/70 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {sp}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Center Left */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -20 }}
              animate={{ opacity: 1, y: [0, 12, 0], x: 0 }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                opacity: { duration: 0.5, delay: 0.4 },
              }}
              onHoverStart={() => setActiveCard(2)}
              onHoverEnd={() => setActiveCard(null)}
              className={`absolute top-28 left-0 sm:left-4 w-[280px] sm:w-[310px] bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl transition-all duration-300 z-20 cursor-pointer ${
                activeCard === 2 ? "scale-105 border-amber-400 shadow-amber-500/20 z-30" : "hover:border-white/40"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 bg-slate-950/80 rounded-xl border border-white/10 p-2 shrink-0 flex items-center justify-center">
                  <Image
                    src={productCards[1].img}
                    alt={productCards[1].title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase rounded">
                    {productCards[1].badge}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1.5 leading-snug">{productCards[1].title}</h4>
                  <p className="text-[11px] text-white/60 mt-0.5">{productCards[1].partner}</p>
                </div>
              </div>
              <ul className="mt-3 pt-3 border-t border-white/10 space-y-1">
                {productCards[1].specs.map((sp, i) => (
                  <li key={i} className="text-[11px] text-white/70 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    {sp}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3: Bottom Center-Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                opacity: { duration: 0.5, delay: 0.6 },
              }}
              onHoverStart={() => setActiveCard(3)}
              onHoverEnd={() => setActiveCard(null)}
              className={`absolute bottom-0 right-2 sm:right-8 w-[290px] sm:w-[330px] bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl transition-all duration-300 z-10 cursor-pointer ${
                activeCard === 3 ? "scale-105 border-emerald-400 shadow-emerald-500/20 z-30" : "hover:border-white/40"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 bg-slate-950/80 rounded-xl border border-white/10 p-2 shrink-0 flex items-center justify-center">
                  <Image
                    src={productCards[2].img}
                    alt={productCards[2].title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase rounded">
                    {productCards[2].badge}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1.5 leading-snug">{productCards[2].title}</h4>
                  <p className="text-[11px] text-white/60 mt-0.5">{productCards[2].partner}</p>
                </div>
              </div>
              <ul className="mt-3 pt-3 border-t border-white/10 space-y-1">
                {productCards[2].specs.map((sp, i) => (
                  <li key={i} className="text-[11px] text-white/70 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    {sp}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
