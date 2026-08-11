"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackQuoteRequest, trackNavClick } from "@/lib/analytics";

interface SlideData {
  id: number;
  title: string;
  highlightText: string;
  bullets: string[];
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  bannerImage: string;
  badge: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    title: "The Largest Supplier & Stockist of",
    highlightText: "Corrosive Flow & Industrial Solutions",
    bullets: [
      "Lined valves & High-Performance Ball Valves",
      "Lined Pipe & Flanged Fittings",
      "Control Lined Valves & Butterfly Valves",
    ],
    ctaPrimaryText: "Request a Quote",
    ctaPrimaryHref: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I would like to request a quote for Industrial & Lined Valves.")}`,
    ctaSecondaryText: "Explore Products",
    ctaSecondaryHref: "/products",
    bannerImage: "/banners/industrial-valves-slide.png",
    badge: "14+ Years Operational Excellence",
  },
  {
    id: 2,
    title: "High Reliability Flow Control &",
    highlightText: "Butterfly & Dual Plate Check Valves",
    bullets: [
      "Concentric, PTFE Seated & Triple Offset Butterfly",
      "Dual Plate & Wafer Type Disc Check Valves",
      "Heavy Duty Cast Steel & Stainless Steel Bodies",
    ],
    ctaPrimaryText: "Request Butterfly Quote",
    ctaPrimaryHref: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I need a quote for Butterfly & Check Valves.")}`,
    ctaSecondaryText: "View Butterfly Range",
    ctaSecondaryHref: "/products/butterfly-valves",
    bannerImage: "/banners/butterfly-check-valves-slide.png",
    badge: "Authorised Partner — Intervalve",
  },
  {
    id: 3,
    title: "Premier Supplier of Valve Automation &",
    highlightText: "High-End Pneumatic Actuators",
    bullets: [
      "El-O-Matic Double Acting & Spring Return Actuators",
      "Electro-Pneumatic Smart Positioners (4-20mA HART)",
      "Limit Switch Boxes & Solenoid Valves",
    ],
    ctaPrimaryText: "Request Automation Quote",
    ctaPrimaryHref: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I need a quote for Pneumatic Valve Automation.")}`,
    ctaSecondaryText: "View Automation Range",
    ctaSecondaryHref: "/products/valve-automation",
    bannerImage: "/banners/pneumatic-automation-slide.png",
    badge: "Authorised Partner — El-O-Matic",
  },
  {
    id: 4,
    title: "Trusted Engineering Partner for",
    highlightText: "Steam Traps & Process Control",
    bullets: [
      "Forbes Marshall Thermodynamic Steam Traps",
      "Control Valves & Pressure Reducing Stations",
      "Electromagnetic & Vortex Flowmeters",
    ],
    ctaPrimaryText: "Get Steam Audit & Quote",
    ctaPrimaryHref: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I would like to request a quote for Forbes Marshall Steam Traps.")}`,
    ctaSecondaryText: "Explore Forbes Marshall",
    ctaSecondaryHref: "/about#certificates",
    bannerImage: "/banners/steam-instrumentation-slide.png",
    badge: "Authorised Partner — Forbes Marshall",
  },
  {
    id: 5,
    title: "Precision Measuring & Control with",
    highlightText: "Process Instrumentation & Gauges",
    bullets: [
      "Pressure Gauges & Chemical Diaphragm Seals",
      "Bimetallic Temperature Gauges & RTD Sensors",
      "PTFE & Hastelloy Coated Sanitary Seals",
    ],
    ctaPrimaryText: "Request Gauges Quote",
    ctaPrimaryHref: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I need a quote for Pressure Gauges & Instrumentation.")}`,
    ctaSecondaryText: "View Instrumentation",
    ctaSecondaryHref: "/products/instrumentation",
    bannerImage: "/banners/process-instrumentation-slide.png",
    badge: "High Accuracy Process Measurement",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Auto slide timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative bg-[#0d1117] min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dark Slate Textured Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#121620] to-[#0a0d12]" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />

      {/* Subtle Radial Glow behind right product showcase */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-14 w-full py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & Bullet Points */}
          <div className="lg:col-span-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Main Heading */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight font-sans tracking-tight">
                  {slide.title}
                </h1>

                {/* Subtitle / Category Header Line */}
                <div className="mt-1 relative pb-2">
                  <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-accent tracking-tight block">
                    {slide.highlightText}
                  </span>
                  <div className="mt-2.5 w-24 h-1 bg-accent/80 rounded-full" />
                </div>

                {/* Curved Arrow Bulleted List */}
                <div className="mt-5 space-y-2.5">
                  {slide.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 group text-white/90"
                    >
                      {/* Stylized Curved White Arrow (↪) Icon */}
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 text-white flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors">
                        <svg
                          className="w-3 h-3 text-white transform group-hover:translate-x-0.5 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 15l5-5m0 0l-5-5m5 5H8a5 5 0 00-5 5v1"
                          />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base font-semibold text-white/90 font-sans tracking-wide">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <a
                    href={slide.ctaPrimaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackQuoteRequest(`Hero Banner Slide ${slide.id}`)}
                    className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-accent/30"
                  >
                    {slide.ctaPrimaryText}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link
                    href={slide.ctaSecondaryHref}
                    onClick={() => trackNavClick(`Hero Secondary Slide ${slide.id}`, slide.ctaSecondaryHref)}
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white/5"
                  >
                    {slide.ctaSecondaryText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Seamless Product Array Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[540px] aspect-[4/3] flex justify-center items-center group"
              >
                {/* Dark Ground Base Plate with Drop Shadow */}
                <div className="absolute bottom-2 inset-x-4 h-10 bg-black/70 rounded-[100%] blur-xl pointer-events-none" />

                {/* Seamless Floating Product Showcase */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src={slide.bannerImage}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Edge Blending Gradients to seamlessly merge image edges into #0d1117 banner background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#0d1117_98%)] pointer-events-none" />
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d1117] via-[#0d1117]/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0d1117] via-[#0d1117]/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent pointer-events-none" />

                    {/* Floating Operational Excellence Badge */}
                    <div className="absolute bottom-2 right-2 flex items-center justify-end z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 border border-white/10 rounded-full text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                        {slide.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Slide Indicators / Pagination Dots */}
        <div className="mt-8 lg:mt-10 flex items-center justify-center gap-2.5 z-30">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "w-8 bg-accent shadow-md shadow-accent/50"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
    </section>
  );
}
