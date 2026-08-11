"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Sliders,
  CircleDot,
  GitCommit,
  Cpu,
  Layers,
  Shield,
  Gauge,
  FolderKanban,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  trackPhoneClick,
  trackEmailClick,
  trackQuoteRequest,
} from "@/lib/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-charcoal text-text-light-muted text-xs">
        <div className="max-w-[1340px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Authorised Channel Partner — Forbes Marshall | Intervalve | El-O-Matic</span>
            <span className="text-white/20">|</span>
            <Link
              href="/about#certificates"
              className="text-accent font-semibold hover:underline flex items-center gap-1"
            >
              View Certificates &rarr;
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phone}`}
              onClick={() => trackPhoneClick("Navbar Top Bar", COMPANY.phone)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              {COMPANY.phone}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              onClick={() => trackEmailClick("Navbar Top Bar", COMPANY.email)}
              className="hover:text-white transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200 border-b",
          isScrolled
            ? "bg-white border-border-default shadow-sm"
            : "bg-white border-border-subtle"
        )}
      >
        <nav className="max-w-[1340px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Akshardeep Engineers Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                priority
              />
              <div>
                <span className="text-base font-extrabold tracking-tight text-primary block leading-tight">
                  AKSHARDEEP
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                  ENGINEERS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in link ? setActiveDropdown(link.label) : undefined
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-steel hover:text-accent transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {"children" in link && (
                    <ChevronDown className="w-3 h-3 opacity-50" />
                  )}
                </Link>

                {"children" in link && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          "absolute top-full bg-white border border-border-default shadow-2xl z-50",
                          link.label === "Products"
                            ? "left-1/2 -translate-x-1/2 w-[1180px] p-8 rounded-b-2xl shadow-2xl border-t-2 border-accent"
                            : "left-0 w-60 py-2 p-5"
                        )}
                      >
                        {link.label === "Products" ? (
                          <div className="flex flex-col">
                            {/* Top Mechanical Technical Bar */}
                            <div className="-mx-8 -mt-8 mb-6 bg-slate-900 text-white px-8 py-3.5 rounded-t-xl flex flex-wrap items-center justify-between gap-4 border-b-2 border-accent/40 shadow-inner">
                              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-slate-100">
                                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(200,62,43,0.8)]" />
                                <span>Industrial Heavy-Duty Valve & Automation Directory</span>
                              </div>
                              <div className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-slate-300">
                                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> ASME Class #150 to #2500</span>
                                <span className="text-slate-600">•</span>
                                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> API 600 / BS EN 17292</span>
                                <span className="text-slate-600">•</span>
                                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> 15 NB to 700 NB</span>
                              </div>
                            </div>

                            {/* 4-Column Grid Layout */}
                            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                              {/* 1. Butterfly Valves */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Sliders className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/butterfly-valves" onClick={() => setActiveDropdown(null)}>
                                      Butterfly Valves
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "Bonded Seat Concentric", href: "/products/butterfly-valves" },
                                    { name: "Replaceable Seat", href: "/products/butterfly-valves" },
                                    { name: "PTFE Seated", href: "/products/butterfly-valves" },
                                    { name: "Triple Offset High Performance", href: "/products/butterfly-valves" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 2. Ball Valves */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <CircleDot className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/ball-valves" onClick={() => setActiveDropdown(null)}>
                                      Ball Valves
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "2-Pcs Floating Ball Valve", href: "/products/ball-valves" },
                                    { name: "Trunnion Mounted Ball", href: "/products/ball-valves" },
                                    { name: "3-Pcs Forged Steel", href: "/products/ball-valves" },
                                    { name: "Single Piece Jacketed", href: "/products/ball-valves" },
                                    { name: "3-Way T & L Port", href: "/products/ball-valves" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 3. Gate, Globe & Check */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <GitCommit className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/gate-globe-check" onClick={() => setActiveDropdown(null)}>
                                      Gate, Globe & Check
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "Cast Steel Gate (API 600)", href: "/products/gate-globe-check" },
                                    { name: "Cast Steel Globe (BS 1873)", href: "/products/gate-globe-check" },
                                    { name: "Dual Plate Check (API 594)", href: "/products/gate-globe-check" },
                                    { name: "Wafer Type Disc Check", href: "/products/gate-globe-check" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 4. Valve Automation */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Cpu className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/valve-automation" onClick={() => setActiveDropdown(null)}>
                                      Valve Automation
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "El-O-Matic Pneumatic Actuators", href: "/products/valve-automation" },
                                    { name: "Actuated Ball Valve Assembly", href: "/products/valve-automation" },
                                    { name: "Smart HART Positioners", href: "/products/valve-automation" },
                                    { name: "Automation Control Panels", href: "/products/valve-automation" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 5. Lined & Specialty Valves */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Layers className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/other-valves" onClick={() => setActiveDropdown(null)}>
                                      Lined & Specialty Valves
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "PFA / FEP Lined Ball Valve", href: "/products/other-valves" },
                                    { name: "PFA / FEP Lined Butterfly", href: "/products/other-valves" },
                                    { name: "Full View Sight Glasses", href: "/products/other-valves" },
                                    { name: "Y-Type & Basket Strainers", href: "/products/other-valves" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 6. Diaphragm Seal */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Shield className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/diaphragm-seal" onClick={() => setActiveDropdown(null)}>
                                      Diaphragm Seal
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "Flanged Diaphragm Seal", href: "/products/diaphragm-seal" },
                                    { name: "Threaded Diaphragm Seal", href: "/products/diaphragm-seal" },
                                    { name: "Sanitary Tri-Clover Seal", href: "/products/diaphragm-seal" },
                                    { name: "Gold & PTFE Coated Seals", href: "/products/diaphragm-seal" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 7. Instrumentation */}
                              <div>
                                <div className="flex items-center gap-3 mb-3 pb-2 border-b border-slate-100">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-accent border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Gauge className="w-4 h-4 stroke-[2.2]" />
                                  </div>
                                  <h4 className="text-[14.5px] font-bold text-slate-900 leading-tight hover:text-accent transition-colors">
                                    <Link href="/products/instrumentation" onClick={() => setActiveDropdown(null)}>
                                      Instrumentation
                                    </Link>
                                  </h4>
                                </div>
                                <ul className="space-y-2">
                                  {[
                                    { name: "Pressure Gauges (SP & GP)", href: "/products/instrumentation" },
                                    { name: "Chemical Seal Gauges", href: "/products/instrumentation" },
                                    { name: "Bimetallic Temp. Gauges", href: "/products/instrumentation" },
                                    { name: "RTD Sensors & Thermocouples", href: "/products/instrumentation" },
                                  ].map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group/item flex items-start gap-2.5 text-[13px] text-slate-700 hover:text-accent font-medium transition-all duration-150 py-0.5"
                                      >
                                        <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                          <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                                          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                                        </svg>
                                        <span className="leading-snug">{item.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* 8. Full Directory Mechanical Highlight Box */}
                              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 rounded-xl border border-slate-700 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
                                <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-accent/15 rounded-full blur-xl pointer-events-none group-hover:bg-accent/25 transition-all" />
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded bg-accent/20 border border-accent/40 flex items-center justify-center">
                                      <FolderKanban className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-accent">Full Directory</span>
                                  </div>
                                  <h4 className="text-base font-bold text-white mb-2 leading-tight">
                                    Complete Product Index
                                  </h4>
                                  <ul className="space-y-1.5 mb-4 text-[11.5px] text-slate-300 font-sans">
                                    <li className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> 150+ Technical Lines</li>
                                    <li className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> CAD Specs & Datasheets</li>
                                    <li className="flex items-center gap-1.5"><span className="text-accent font-bold">⚙</span> Fire-Safe & Anti-Static</li>
                                  </ul>
                                </div>
                                <Link
                                  href="/products"
                                  onClick={() => setActiveDropdown(null)}
                                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-accent hover:bg-accent-hover px-4 py-2.5 transition-all rounded-lg shadow-md hover:shadow-accent/30"
                                >
                                  <span>View All Products</span>
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          Array.isArray((link as any).children) && (link as any).children.map((child: { label: string; href: string }) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-5 py-2 text-sm text-steel hover:text-accent hover:bg-surface transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I would like to request a quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackQuoteRequest("Navbar Desktop Button")}
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border-default flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/logo.png"
                    alt="Akshardeep Engineers Logo"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                  <div>
                    <span className="font-extrabold text-primary tracking-tight text-sm block leading-none">AKSHARDEEP</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase block mt-0.5">ENGINEERS</span>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5 text-steel" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-sm font-semibold text-steel hover:text-accent hover:bg-surface border-b border-border-subtle transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-border-default">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello Akshardeep Engineers, I would like to request a quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackQuoteRequest("Navbar Mobile Menu Button");
                    setMobileOpen(false);
                  }}
                  className="block w-full bg-accent text-white text-center py-3 text-sm font-bold uppercase tracking-wider"
                >
                  Request Quote
                </a>
                <a
                  href={`tel:${COMPANY.phone}`}
                  onClick={() => trackPhoneClick("Navbar Mobile Menu", COMPANY.phone)}
                  className="mt-3 flex items-center justify-center gap-2 text-sm text-steel"
                >
                  <Phone className="w-4 h-4" /> {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
