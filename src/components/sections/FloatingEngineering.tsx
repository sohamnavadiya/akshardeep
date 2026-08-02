"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Zap,
  ChevronRight,
  Layers,
  Wrench,
} from "lucide-react";

/* ─────────────────────────── DETAILED INDUSTRIAL BLUEPRINT SVGS ─────────────────────────── */

function ButterflyValveCAD({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grid crosshair guides */}
      <line x1="140" y1="10" x2="140" y2="270" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
      <line x1="10" y1="140" x2="270" y2="140" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

      {/* Outer Bolt Ring */}
      <circle cx="140" cy="140" r="115" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
      <circle cx="140" cy="140" r="102" stroke="currentColor" strokeWidth="2.5" />

      {/* 8 Flange Bolt Holes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 140 + 92 * Math.cos(rad);
        const cy = 140 + 92 * Math.sin(rad);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx={cx} cy={cy} r="2.5" fill="currentColor" opacity="0.5" />
          </g>
        );
      })}

      {/* Inner Valve Body Seat */}
      <circle cx="140" cy="140" r="76" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="140" r="66" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

      {/* Disc & Shaft Assembly */}
      <ellipse cx="140" cy="140" rx="58" ry="18" stroke="currentColor" strokeWidth="2.5" transform="rotate(-25 140 140)" />
      <ellipse cx="140" cy="140" rx="58" ry="18" stroke="currentColor" strokeWidth="1.2" transform="rotate(25 140 140)" opacity="0.3" />

      {/* Top Mounting Stem */}
      <line x1="140" y1="38" x2="140" y2="76" stroke="currentColor" strokeWidth="3" />
      <rect x="133" y="24" width="14" height="14" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <rect x="127" y="16" width="26" height="8" stroke="currentColor" strokeWidth="1.5" />

      {/* Center Pivot Hub */}
      <circle cx="140" cy="140" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="140" r="3" fill="currentColor" />

      {/* Technical Dimension Callouts */}
      <line x1="25" y1="140" x2="15" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="255" y1="140" x2="265" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="20" y1="248" x2="260" y2="248" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="20" y1="242" x2="20" y2="254" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="260" y1="242" x2="260" y2="254" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="140" y="263" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.85" fontWeight="bold">
        Ø 204.0 MM (DN150 PN16)
      </text>
    </svg>
  );
}

function BallValveCAD({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center Crosshair */}
      <line x1="140" y1="10" x2="140" y2="230" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
      <line x1="10" y1="120" x2="270" y2="120" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

      {/* Left Pipe Flange */}
      <rect x="15" y="80" width="40" height="80" stroke="currentColor" strokeWidth="2" />
      <rect x="55" y="65" width="16" height="110" stroke="currentColor" strokeWidth="2" />
      <circle cx="63" cy="78" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="63" cy="162" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />

      {/* Central Spherical Valve Body */}
      <circle cx="140" cy="120" r="56" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="140" cy="120" r="40" stroke="currentColor" strokeWidth="1.8" />
      <rect x="110" y="106" width="60" height="28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 2" opacity="0.7" />

      {/* Right Pipe Flange */}
      <rect x="209" y="65" width="16" height="110" stroke="currentColor" strokeWidth="2" />
      <rect x="225" y="80" width="40" height="80" stroke="currentColor" strokeWidth="2" />
      <circle cx="217" cy="78" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="217" cy="162" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" />

      {/* Top Actuator Mounting Stem & Lever */}
      <rect x="132" y="15" width="16" height="49" stroke="currentColor" strokeWidth="2" />
      <rect x="115" y="15" width="50" height="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M140 15 L220 15 L230 25 L140 25 Z" stroke="currentColor" strokeWidth="1.8" fill="none" />

      {/* Dimension Line */}
      <line x1="15" y1="210" x2="265" y2="210" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="15" y1="204" x2="15" y2="216" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="265" y1="204" x2="265" y2="216" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="140" y="226" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.85" fontWeight="bold">
        L = 267.0 MM (API 6D CLASS 150)
      </text>
    </svg>
  );
}

function PneumaticActuatorCAD({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 270" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grid Guides */}
      <line x1="130" y1="10" x2="130" y2="260" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
      <line x1="10" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

      {/* Main Cylinder Body */}
      <rect x="35" y="45" width="190" height="130" stroke="currentColor" strokeWidth="2.5" />
      <line x1="35" y1="75" x2="225" y2="75" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
      <line x1="35" y1="145" x2="225" y2="145" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />

      {/* End Caps with Bolts */}
      <rect x="20" y="35" width="18" height="150" stroke="currentColor" strokeWidth="2" />
      <rect x="222" y="35" width="18" height="150" stroke="currentColor" strokeWidth="2" />
      {[45, 80, 115, 150, 170].map((y, i) => (
        <React.Fragment key={i}>
          <circle cx="29" cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="231" cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        </React.Fragment>
      ))}

      {/* Internal Spring Coil Visual */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M ${55 + i * 22} 85 L ${55 + i * 22 + 11} 93 L ${55 + i * 22 + 22} 85`}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      ))}

      {/* Bottom Valve Mounting Shaft (ISO 5211) */}
      <rect x="102" y="175" width="56" height="60" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="215" r="18" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="215" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Top Visual Position Indicator */}
      <rect x="118" y="18" width="24" height="20" stroke="currentColor" strokeWidth="2" />
      <line x1="130" y1="18" x2="130" y2="38" stroke="currentColor" strokeWidth="2" />

      {/* Spec Label */}
      <text x="130" y="255" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.85" fontWeight="bold">
        ISO 5211 / NAMUR INDUSTRIAL MOUNT
      </text>
    </svg>
  );
}

function DoubleActingActuatorCAD({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grid Lines */}
      <line x1="140" y1="10" x2="140" y2="220" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
      <line x1="10" y1="110" x2="270" y2="110" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

      {/* Dual Cylinder Body */}
      <rect x="25" y="35" width="230" height="110" stroke="currentColor" strokeWidth="2.5" />
      <line x1="25" y1="90" x2="255" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Left and Right Pistons */}
      <rect x="45" y="45" width="30" height="90" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />
      <rect x="205" y="45" width="30" height="90" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />

      {/* Center Pinion Gear */}
      <circle cx="140" cy="90" r="32" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="90" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />

      {/* Air Ports (A & B) */}
      <rect x="80" y="15" width="16" height="22" stroke="currentColor" strokeWidth="1.5" />
      <text x="88" y="29" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">A</text>
      <rect x="184" y="15" width="16" height="22" stroke="currentColor" strokeWidth="1.5" />
      <text x="192" y="29" fill="currentColor" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">B</text>

      {/* Lower Drive Bushing */}
      <rect x="116" y="145" width="48" height="45" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="172" r="14" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="140" cy="172" r="5" fill="currentColor" opacity="0.6" />

      {/* Dimension Line */}
      <line x1="25" y1="205" x2="255" y2="205" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="25" y1="199" x2="25" y2="211" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="255" y1="199" x2="255" y2="211" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="140" y="220" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.85" fontWeight="bold">
        W = 310.0 MM | SIL 3 HEAVY DUTY
      </text>
    </svg>
  );
}

function PlugValveCAD({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 270" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Grid lines */}
      <line x1="125" y1="10" x2="125" y2="260" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
      <line x1="10" y1="140" x2="240" y2="140" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />

      {/* Tapered Plug Body Housing */}
      <polygon points="40,70 210,70 185,220 65,220" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <polygon points="60,85 190,85 172,205 78,205" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" fill="none" />

      {/* Flange Ends */}
      <rect x="10" y="105" width="30" height="70" stroke="currentColor" strokeWidth="2" />
      <rect x="210" y="105" width="30" height="70" stroke="currentColor" strokeWidth="2" />

      {/* Flow Port Through Plug */}
      <ellipse cx="125" cy="140" rx="38" ry="18" stroke="currentColor" strokeWidth="2" />

      {/* Top Bonnet & Adjustment Gland */}
      <rect x="95" y="20" width="60" height="50" stroke="currentColor" strokeWidth="2" />
      <rect x="85" y="32" width="80" height="14" stroke="currentColor" strokeWidth="1.5" />
      <rect x="115" y="5" width="20" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Sleeve PTFE Indicator */}
      <text x="125" y="250" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.85" fontWeight="bold">
        360° MOLDED PTFE SLEEVE HOUSING
      </text>
    </svg>
  );
}

/* ─────────────────────────── COMPONENT SHOWCASE DATA ─────────────────────────── */

const componentsData = [
  {
    id: "butterfly",
    name: "Butterfly Valve",
    tagline: "Wafer & Lug Type Industrial Flow Control Assembly",
    CADComponent: ButterflyValveCAD,
    sizeRange: "DN 50 – DN 600 (2″ to 24″)",
    pressureRating: "PN 10 / PN 16 / PN 25 / Class 150",
    materials: "Ductile Iron, CF8M Stainless, PTFE Sleeve",
    applications: "Chemical Processing, Water & Effluent, HVAC, Slurry",
    certifications: ["ISO 9001", "CE / PED", "FIRE-SAFE"],
    hotspots: [
      { id: 1, title: "Bubble-Tight Disc Seal", text: "Heavy resilient seat liner engineered for zero leakage", x: "50%", y: "48%" },
      { id: 2, title: "ISO 5211 Flange Top", text: "Direct rigid mounting base for pneumatic actuators", x: "50%", y: "15%" },
      { id: 3, title: "Blowout-Proof Shaft", text: "Heavy duty solid stem shaft construction", x: "50%", y: "28%" },
      { id: 4, title: "Multi-Bolt Flange Ring", text: "Machined bolt pattern matching international standards", x: "82%", y: "50%" },
    ],
    specs: [
      { label: "Flow Velocity", value: "Up to 5 m/s" },
      { label: "Operating Temp", value: "-20°C to +200°C" },
      { label: "Disc Profile", value: "Low ΔP Streamlined" },
      { label: "Seat Option", value: "EPDM / Viton / PTFE" },
    ],
  },
  {
    id: "ball",
    name: "Ball Valve",
    tagline: "API 6D Industrial 2-Piece & 3-Piece Trunnion Valves",
    CADComponent: BallValveCAD,
    sizeRange: "½″ to 12″ (DN 15 to DN 300)",
    pressureRating: "Class 150 – 900 / API 6D",
    materials: "SS316, Carbon Steel WCB, Hastelloy, Monel",
    applications: "Oil & Gas, High-Pressure Steam, Petrochemicals",
    certifications: ["API 6D", "API 607 FIRE SAFE", "SIL 3"],
    hotspots: [
      { id: 1, title: "Solid Stainless Ball", text: "Precision CNC ground and mirror polished sphere", x: "50%", y: "50%" },
      { id: 2, title: "API 607 Packing", text: "Flexible graphite fire-safe stem gland packing", x: "50%", y: "18%" },
      { id: 3, title: "ASME Flanged Ends", text: "Heavy-duty Raised Face (RF) ASME B16.5 flanges", x: "80%", y: "50%" },
      { id: 4, title: "Anti-Static Earthing", text: "Spring-loaded metal grounding pin mechanism", x: "30%", y: "50%" },
    ],
    specs: [
      { label: "Leakage Standard", value: "ISO 5208 Rate A / Cl. VI" },
      { label: "Operating Temp", value: "-50°C to +400°C" },
      { label: "Bore Profile", value: "Full Bore & Reduced" },
      { label: "Actuation Type", value: "Manual / Pneumatic" },
    ],
  },
  {
    id: "pneumatic",
    name: "Pneumatic Actuator",
    tagline: "Heavy Rack & Pinion Quarter-Turn Automation Unit",
    CADComponent: PneumaticActuatorCAD,
    sizeRange: "Torque Output: 4 Nm – 4,022 Nm",
    pressureRating: "Air Supply: 3 Bar to 8 Bar Clean Air",
    materials: "Hard Anodized Aluminum Alloy Extrusion",
    applications: "Automated On-Off Valves, ESD Systems, Process Plants",
    certifications: ["ISO 5211", "NAMUR VDI/VDE", "SIL 3 CERTIFIED"],
    hotspots: [
      { id: 1, title: "Spring Cartridges", text: "Encapsulated spring modules for secure servicing", x: "32%", y: "42%" },
      { id: 2, title: "Hard Anodized Shell", text: "Heavy industrial anti-corrosion exterior finish", x: "70%", y: "30%" },
      { id: 3, title: "NAMUR Accessory Mount", text: "Standard pad for solenoid valves & limit switches", x: "50%", y: "82%" },
      { id: 4, title: "Visual Position Marker", text: "Impact-resistant mechanical open/close pointer", x: "50%", y: "11%" },
    ],
    specs: [
      { label: "Cycle Rating", value: "1,000,000+ Cycles" },
      { label: "Stroke Adjustment", value: "90° (±5° Travel Limit)" },
      { label: "Operating Temp", value: "-20°C to +80°C" },
      { label: "Drive Interface", value: "Female Star Drive" },
    ],
  },
  {
    id: "double",
    name: "Double Acting Actuator",
    tagline: "High-Torque Dual Piston Heavy Industrial Actuator",
    CADComponent: DoubleActingActuatorCAD,
    sizeRange: "Torque Output: 10 Nm – 6,500 Nm",
    pressureRating: "Air Supply: 2.5 Bar to 8 Bar",
    materials: "Extruded Aluminum / Epoxy Coated Ductile Iron",
    applications: "High Cycling Valves, Power Station & Steam Lines",
    certifications: ["SIL 3 CAPABLE", "ATEX Ex II 2GD", "CE CERTIFIED"],
    hotspots: [
      { id: 1, title: "Dual Piston Drive", text: "Balanced rack and pinion power transmission", x: "30%", y: "40%" },
      { id: 2, title: "Nickel Pinion Shaft", text: "Alloy steel shaft designed for high torque loads", x: "50%", y: "42%" },
      { id: 3, title: "NPT Pneumatic Ports", text: "1/4″ NPT ports per NAMUR standard specifications", x: "66%", y: "14%" },
      { id: 4, title: "Bi-Directional Stops", text: "Dual external travel stop adjustment bolts", x: "85%", y: "40%" },
    ],
    specs: [
      { label: "Response Speed", value: "< 0.5 Seconds" },
      { label: "Travel Limits", value: "±5° External Adjusters" },
      { label: "Lubrication", value: "Factory Sealed Grease" },
      { label: "Safety Level", value: "SIL 3 Certified" },
    ],
  },
  {
    id: "plug",
    name: "Plug Valve",
    tagline: "Sleeve-Lined Cavity-Free Severe Service Industrial Valve",
    CADComponent: PlugValveCAD,
    sizeRange: "½″ to 16″ (DN 15 to DN 400)",
    pressureRating: "Class 150 / Class 300 / PN 16",
    materials: "Carbon Steel WCB, CF8M, Molded PTFE Sleeve",
    applications: "Corrosive Acid Lines, Polymer Fluids, Slurries",
    certifications: ["API 599", "ASME B16.34", "ISO 9001"],
    hotspots: [
      { id: 1, title: "360° PTFE Body Liner", text: "Full body cavity-free molded fluoropolymer sleeve", x: "50%", y: "52%" },
      { id: 2, title: "Self-Cleaning Plug", text: "Wiping action prevents fluid buildup & scaling", x: "50%", y: "38%" },
      { id: 3, title: "Top Gland Adjustment", text: "Inline sleeve compression bolts for easy maintenance", x: "50%", y: "15%" },
      { id: 4, title: "Zero Dead-Space", text: "Eliminates media accumulation in valve cavity", x: "75%", y: "52%" },
    ],
    specs: [
      { label: "Liner Material", value: "100% Virgin PTFE" },
      { label: "Operating Temp", value: "-29°C to +204°C" },
      { label: "Maintenance", value: "In-line Adjustability" },
      { label: "Shutoff Rating", value: "Bi-Directional Tight" },
    ],
  },
];

/* ─────────────────────────── MAIN COMPONENT ─────────────────────────── */

export function FloatingEngineering() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const activeComp = componentsData[activeTab];

  return (
    <section className="relative bg-[#090d16] text-slate-100 py-20 lg:py-28 overflow-hidden border-t-2 border-slate-800">
      {/* Heavy Engineering Grid Background (Sharp Grid Pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-transparent to-[#090d16] opacity-95" />

      {/* Industrial Outer Framing Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full pointer-events-none border-x border-slate-800/50" />


      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6">

        {/* Section Header - Industrial Sharp Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b-2 border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-white font-mono text-[10px] font-extrabold uppercase tracking-widest mb-4 border border-red-700">
              <Wrench className="w-3.5 h-3.5" />
              <span>Engineering Component Inspector</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white uppercase">
              Precision Industrial <br className="hidden sm:block" />
              <span className="text-accent">Flow Control Components</span>
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-md leading-relaxed border-l-2 border-accent pl-4">
            TECHNICAL CAD ASSEMBLY INSPECTION SYSTEM. Select a component tab below to examine CAD blueprint schematics, material specs, and active structural callouts.
          </p>
        </div>

        {/* Component Selector Tabs - Sharp Rectangular Industrial Styling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {componentsData.map((comp, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={comp.id}
                onClick={() => {
                  setActiveTab(idx);
                  setActiveHotspot(null);
                }}
                className={`text-left px-4 py-3.5 border transition-all duration-200 uppercase font-mono text-xs font-bold relative ${
                  isActive
                    ? "bg-slate-800 text-white border-accent border-l-4 border-l-accent shadow-md"
                    : "bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1 font-normal">
                  <span>ITEM 0{idx + 1}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-accent" />}
                </div>
                <div className="truncate">{comp.name}</div>
              </button>
            );
          })}
        </div>

        {/* CAD WORKBENCH STAGE - Sharp Rectangular Framing */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT / MAIN: Interactive Blueprint Canvas (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 border-2 border-slate-700 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl min-h-[480px]">

            {/* Sharp Corner Notch Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />

            {/* Blueprint Technical Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 bg-emerald-500" />
                <span className="font-bold uppercase tracking-wider">BLUEPRINT SHEET: {activeComp.id.toUpperCase()}_0{activeTab + 1}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 font-bold text-[10px] text-slate-200">
                  SCALE 1:1
                </span>
                <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 font-bold text-[10px] text-accent">
                  REV 3.2
                </span>
              </div>
            </div>

            {/* Main Interactive CAD Stage */}
            <div className="relative flex-1 flex items-center justify-center py-6 min-h-[310px] bg-[#070b14] border border-slate-800">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeComp.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full max-w-[360px] text-slate-200 flex items-center justify-center"
                >
                  <activeComp.CADComponent className="w-full h-auto max-h-[320px]" />

                  {/* Sharp Hotspot Pins Overlay */}
                  {activeComp.hotspots.map((spot) => {
                    const isSelected = activeHotspot === spot.id;
                    return (
                      <div
                        key={spot.id}
                        style={{ left: spot.x, top: spot.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                      >
                        <button
                          onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                          className={`relative flex items-center justify-center w-7 h-7 font-mono font-bold text-xs transition-all duration-150 ${
                            isSelected
                              ? "bg-accent text-white border-2 border-white shadow-lg"
                              : "bg-slate-900 text-slate-200 border border-slate-600 hover:bg-accent hover:text-white hover:border-accent"
                          }`}
                        >
                          0{spot.id}
                        </button>

                        {/* Sharp Rectangular Tooltip Card */}
                        <div
                          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-3 bg-slate-950 border-2 border-slate-700 shadow-2xl transition-all duration-200 pointer-events-none z-30 ${
                            isSelected
                              ? "opacity-100 translate-y-0 scale-100"
                              : "opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent font-extrabold uppercase mb-1">
                            <span>FEATURE 0{spot.id}</span>
                          </div>
                          <div className="text-xs font-bold text-white mb-1">
                            {spot.title}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400 leading-tight">
                            {spot.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>


          </div>

          {/* RIGHT: Technical Spec & Details Panel (5 Cols) - Sharp Industrial Design */}
          <div className="lg:col-span-5 bg-slate-900 border-2 border-slate-700 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">

            {/* Corner Bracket Notch */}
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />

            <div>
              {/* Header Tagline & Name */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-accent bg-accent/15 px-2.5 py-1 border border-accent/30">
                  {activeComp.id.toUpperCase()}
                </span>
                <div className="flex gap-1">
                  {activeComp.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-[9px] font-bold font-mono bg-slate-800 text-slate-300 px-2 py-0.5 border border-slate-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-1 tracking-tight">
                {activeComp.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed border-b border-slate-800 pb-3">
                {activeComp.tagline}
              </p>

              {/* Core Attributes Sharp List */}
              <div className="space-y-2 mb-6">
                <div className="bg-slate-950 border border-slate-800 p-3 flex items-start justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block mb-0.5">
                      Standard Size Range
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      {activeComp.sizeRange}
                    </span>
                  </div>
                  <Layers className="w-4 h-4 text-accent" />
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3 flex items-start justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block mb-0.5">
                      Pressure Class / Rating
                    </span>
                    <span className="text-xs font-bold text-white font-mono">
                      {activeComp.pressureRating}
                    </span>
                  </div>
                  <Activity className="w-4 h-4 text-accent" />
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3 flex items-start justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block mb-0.5">
                      Body Material MOC Options
                    </span>
                    <span className="text-xs font-bold text-slate-200 font-mono leading-tight block">
                      {activeComp.materials}
                    </span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Key Technical Specs Grid */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-accent" /> DESIGN PARAMETERS MATRIX
                </h4>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  {activeComp.specs.map((item) => (
                    <div
                      key={item.label}
                      className="bg-slate-950 border border-slate-800 p-2.5"
                    >
                      <div className="text-[9px] text-slate-500 uppercase font-bold">
                        {item.label}
                      </div>
                      <div className="text-xs font-bold text-slate-200 mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Industrial Action Buttons */}
            <div className="pt-4 border-t-2 border-slate-800 flex items-center gap-3">
              <Link
                href="/products"
                className="group flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors border border-red-700"
              >
                <span>Full Product Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                title="Request Engineering Specs"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
