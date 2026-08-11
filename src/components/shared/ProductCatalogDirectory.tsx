"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CatalogCategoryItem {
  name: string;
  href: string;
  badge?: string;
}

export interface CatalogCategory {
  title: string;
  slug: string;
  items: CatalogCategoryItem[];
}

export const POLYVALVES_CATALOG: CatalogCategory[] = [
  {
    title: "Lined Valves",
    slug: "lined-valves",
    items: [
      { name: "Lined Ball Valve", href: "/products/ball-valves" },
      { name: "Lined Plug Valve", href: "/products/other-valves" },
      { name: "Lined Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "Lined Diaphragm Valve", href: "/products/other-valves" },
      { name: "Lined Ball Check Valve", href: "/products/gate-globe-check" },
      { name: "Lined Globe Valve", href: "/products/gate-globe-check" },
      { name: "Lined Swing Check Valve", href: "/products/gate-globe-check" },
      { name: "Lined Sight Glass", href: "/products/other-valves" },
      { name: "Lined Sampling Valve", href: "/products/other-valves" },
    ],
  },
  {
    title: "Lined Pipe & Fittings",
    slug: "lined-pipe-fittings",
    items: [
      { name: "Lined Elbow", href: "/products/other-valves" },
      { name: "Lined Equal Cross", href: "/products/other-valves" },
      { name: "Lined Tee", href: "/products/other-valves" },
      { name: "Lined Reducing Flange", href: "/products/other-valves" },
      { name: 'Lined "Y" Type Strainer', href: "/products/other-valves" },
      { name: "Lined Reducer", href: "/products/other-valves" },
      { name: "Lined Pipe", href: "/products/other-valves" },
    ],
  },
  {
    title: "Control Lined Valves",
    slug: "control-lined-valves",
    items: [
      { name: "Control Lined Ball Valve", href: "/products/valve-automation" },
      { name: "Control Lined Butterfly Valve", href: "/products/valve-automation" },
      { name: "Control Plug Valve", href: "/products/valve-automation" },
      { name: "Control Lined Diaphragm Valve", href: "/products/valve-automation" },
      { name: "Control Globe Control Valve", href: "/products/valve-automation" },
    ],
  },
  {
    title: "Thermoplastic Valves",
    slug: "thermoplastic-valves",
    items: [
      { name: "Thermoplastic Ball Valves", href: "/products/ball-valves" },
      { name: "Thermoplastic Butterfly Valves", href: "/products/butterfly-valves" },
      { name: "Thermoplastic Diaphragm Valve", href: "/products/other-valves" },
      { name: "Thermoplastic Ball Check Valve", href: "/products/gate-globe-check" },
      { name: "Thermoplastic Strainer", href: "/products/other-valves" },
      { name: "Thermoplastic Socket Valves", href: "/products/ball-valves" },
      { name: "Thermoplastic Flanged Valves", href: "/products/ball-valves" },
    ],
  },
  {
    title: "Thermoplastic Pipe & Fittings",
    slug: "thermoplastic-pipe-fittings",
    items: [
      { name: "Thermoplastic Pipes", href: "/products/other-valves" },
      { name: "Thermoplastic Concentric Reducer", href: "/products/other-valves" },
      { name: "Thermoplastic Couplings", href: "/products/other-valves" },
      { name: "Thermoplastic Bends", href: "/products/other-valves" },
      { name: "Thermoplastic Elbow", href: "/products/other-valves" },
      { name: "Thermoplastic Stub Ends", href: "/products/other-valves" },
      { name: "Thermoplastic Flanges", href: "/products/other-valves" },
    ],
  },
  {
    title: "Actuated Thermoplastic Valves",
    slug: "actuated-thermoplastic-valves",
    items: [
      { name: "Actuated Thermoplastic Diaphragm Valve", href: "/products/valve-automation" },
      { name: "Actuated Thermoplastic Ball Valve", href: "/products/valve-automation" },
      { name: "Actuated Thermoplastic Butterfly Valve", href: "/products/valve-automation" },
    ],
  },
  {
    title: "Speciality Valves",
    slug: "speciality-valves",
    items: [
      { name: "Damper Gear Pneumatically Actuated", href: "/products/valve-automation" },
      { name: 'Strainer "T" / Basket Type Large Size', href: "/products/other-valves" },
      { name: "Check Valve Float Type Vertical Installation", href: "/products/gate-globe-check" },
      { name: "Check Valve Float Type Horizontal Installation", href: "/products/gate-globe-check" },
    ],
  },
];

export const AKSHARDEEP_CATALOG: CatalogCategory[] = [
  {
    title: "Lined & Specialty Valves",
    slug: "other-valves",
    items: [
      { name: "PFA / FEP Lined Ball Valve", href: "/products/other-valves" },
      { name: "PFA / FEP Lined Butterfly Valve", href: "/products/other-valves" },
      { name: "PFA / FEP Lined Plug Valve", href: "/products/other-valves" },
      { name: "Single Piece Jacketed Ball Valve", href: "/products/ball-valves" },
      { name: "3-Way Floating Ball Valve (T & L Port)", href: "/products/ball-valves" },
      { name: "Flush / Tank Bottom Ball Valve", href: "/products/ball-valves" },
      { name: "Full View Sight Glass", href: "/products/other-valves" },
      { name: "Double Window Sight Glass", href: "/products/other-valves" },
      { name: "Y-Type Strainer", href: "/products/other-valves" },
      { name: "Basket Type Strainer", href: "/products/other-valves" },
    ],
  },
  {
    title: "Industrial Ball Valves",
    slug: "ball-valves",
    items: [
      { name: "2 Pcs Floating Ball Valve", href: "/products/ball-valves" },
      { name: "2/3 Pcs Trunnion Mounted Ball Valve", href: "/products/ball-valves" },
      { name: "3 Pcs Forged Steel Ball Valve", href: "/products/ball-valves" },
      { name: "Single Piece Jacketed Ball Valve", href: "/products/ball-valves" },
      { name: "3-Way Floating Ball Valve", href: "/products/ball-valves" },
      { name: "Flush / Tank Bottom Ball Valve", href: "/products/ball-valves" },
      { name: "PFA Lined Ball Valve", href: "/products/ball-valves" },
    ],
  },
  {
    title: "Butterfly Valves",
    slug: "butterfly-valves",
    items: [
      { name: "Bonded Seat Concentric Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "Replaceable Seat Concentric Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "PTFE Seated Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "Soft Seated Double Offset Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "Metal Seated Double Offset Butterfly Valve", href: "/products/butterfly-valves" },
      { name: "Triple Offset High Performance Butterfly Valve", href: "/products/butterfly-valves" },
    ],
  },
  {
    title: "Gate, Globe & Check Valves",
    slug: "gate-globe-check",
    items: [
      { name: "Cast Steel Gate Valve (API 600)", href: "/products/gate-globe-check" },
      { name: "Cast Steel Globe Valve (BS 1873)", href: "/products/gate-globe-check" },
      { name: "Cast Steel Swing Check Valve (BS 1868)", href: "/products/gate-globe-check" },
      { name: "Forged Steel Gate & Globe Valves (API 602)", href: "/products/gate-globe-check" },
      { name: "Dual Plate Check Valve (API 594)", href: "/products/gate-globe-check" },
      { name: "Wafer Type Single Disc Check Valve", href: "/products/gate-globe-check" },
    ],
  },
  {
    title: "Control & Valve Automation",
    slug: "valve-automation",
    items: [
      { name: "El-O-Matic Pneumatic Actuator (Single Acting)", href: "/products/valve-automation" },
      { name: "El-O-Matic Pneumatic Actuator (Double Acting)", href: "/products/valve-automation" },
      { name: "Actuated Ball Valve Assembly", href: "/products/valve-automation" },
      { name: "Actuated Butterfly Valve Assembly", href: "/products/valve-automation" },
      { name: "Electro-Pneumatic Valve Positioner", href: "/products/valve-automation" },
      { name: "Smart HART Valve Positioner", href: "/products/valve-automation" },
      { name: "Automation Control Panel", href: "/products/valve-automation" },
    ],
  },
  {
    title: "Diaphragm Seal Replacement",
    slug: "diaphragm-seal",
    items: [
      { name: 'Flanged Diaphragm Seal (1"-4" CL150#-2500#)', href: "/products/diaphragm-seal" },
      { name: 'Threaded Diaphragm Seal (1/4"-2" NPT)', href: "/products/diaphragm-seal" },
      { name: "Clamped / Sanitary Tri-Clover Seal", href: "/products/diaphragm-seal" },
      { name: "PTFE & PFA Coated Seals", href: "/products/diaphragm-seal" },
      { name: "Gold & Silver Coated Diaphragm Seals", href: "/products/diaphragm-seal" },
      { name: "Custom Exotic Alloys (Hastelloy, Tantalum)", href: "/products/diaphragm-seal" },
    ],
  },
  {
    title: "Process Instrumentation",
    slug: "instrumentation",
    items: [
      { name: "Industrial Pressure Gauges (SP & GP)", href: "/products/instrumentation" },
      { name: "Chemical & Diaphragm Seal Gauges", href: "/products/instrumentation" },
      { name: "Bimetallic & Gas Filled Temperature Gauges", href: "/products/instrumentation" },
      { name: "Thermocouples (Types J, K, N, R, S, B)", href: "/products/instrumentation" },
      { name: "RTD Sensors (PT-100 Class A/B)", href: "/products/instrumentation" },
      { name: "Pressure Transmitters", href: "/products/instrumentation" },
      { name: "Level Switches & Accessories", href: "/products/instrumentation" },
    ],
  },
];

interface ProductCatalogDirectoryProps {
  initialCatalog?: "polyvalves" | "akshardeep";
  showCatalogSwitch?: boolean;
  showHeader?: boolean;
}

export function ProductCatalogDirectory({
  initialCatalog = "akshardeep",
  showCatalogSwitch = true,
  showHeader = true,
}: ProductCatalogDirectoryProps) {
  const [catalogType, setCatalogType] = useState<"akshardeep" | "polyvalves">(initialCatalog);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCatalog = catalogType === "polyvalves" ? POLYVALVES_CATALOG : AKSHARDEEP_CATALOG;

  // Filter items by search query
  const filteredCatalog = currentCatalog
    .map((cat) => {
      const matchingItems = cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const isTitleMatch = cat.title.toLowerCase().includes(searchQuery.toLowerCase());

      return {
        ...cat,
        items: isTitleMatch ? cat.items : matchingItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="w-full font-sans text-slate-800 bg-white p-8 sm:p-10 lg:p-12 border border-slate-200 shadow-lg rounded-xl relative overflow-hidden">
      {/* Top Mechanical Engineering Feature Banner */}
      <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 rounded-lg border-l-4 border-accent shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-accent uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Heavy-Duty Industrial Equipment Directory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Mechanical & Flow Control Catalog</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="bg-slate-800 text-slate-200 px-3 py-1.5 rounded border border-slate-700 flex items-center gap-1.5">
              <span className="text-accent font-bold">⚙</span> ISO 5208 / BS EN 17292
            </span>
            <span className="bg-slate-800 text-slate-200 px-3 py-1.5 rounded border border-slate-700 flex items-center gap-1.5">
              <span className="text-accent font-bold">⚙</span> 15 NB to 700 NB
            </span>
            <span className="bg-slate-800 text-slate-200 px-3 py-1.5 rounded border border-slate-700 flex items-center gap-1.5">
              <span className="text-accent font-bold">⚙</span> ASME Class #150 - #2500
            </span>
          </div>
        </div>
      </div>

      {/* Header Row & Controls */}
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <span>Products Directory</span>
              <ArrowRight className="w-7 h-7 stroke-[2.5] text-accent inline-block" />
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Browse complete index of corrosion resistant, industrial valves, fittings, and process control systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Filter */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter products index..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-slate-300 rounded-md focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Catalog Source Toggle (Akshardeep / Polyvalves Index) */}
            {showCatalogSwitch && (
              <div className="inline-flex border border-slate-300 p-0.5 bg-slate-100 rounded-md text-xs font-semibold">
                <button
                  onClick={() => setCatalogType("akshardeep")}
                  className={cn(
                    "px-3.5 py-2 rounded transition-colors cursor-pointer",
                    catalogType === "akshardeep"
                      ? "bg-accent text-white shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  Akshardeep Catalog
                </button>
                <button
                  onClick={() => setCatalogType("polyvalves")}
                  className={cn(
                    "px-3.5 py-2 rounded transition-colors cursor-pointer",
                    catalogType === "polyvalves"
                      ? "bg-accent text-white shadow-sm font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  Lined & Polyvalves Index
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grid of Categories - 4 Columns Layout matching screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {filteredCatalog.map((category) => (
          <div key={category.title} className="flex flex-col">
            {/* Red / Coral Category Title with Mechanical Cog Icon */}
            <h3 className="text-lg font-bold text-[#c83e2b] mb-4 leading-snug tracking-tight hover:underline cursor-pointer flex items-center gap-2 group/title">
              <svg className="w-4 h-4 text-accent group-hover/title:rotate-90 transition-transform duration-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
              </svg>
              <Link href={category.items[0]?.href || "/products"}>
                {category.title}
              </Link>
            </h3>

            {/* List of stacked items with mechanical bullet points */}
            <ul className="space-y-2.5">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group/item flex items-start gap-2.5 text-[14.5px] text-slate-800 hover:text-[#c83e2b] transition-all duration-150 leading-tight font-medium"
                  >
                    {/* Mechanical Bullet Marker */}
                    <svg className="w-3.5 h-3.5 text-accent/70 group-hover/item:text-accent group-hover/item:rotate-90 transition-all duration-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
                      <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-7.05l-1.41 1.41m-9.9 9.9l-1.41 1.41m0-12.72l1.41 1.41m9.9 9.9l1.41 1.41" />
                    </svg>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {filteredCatalog.length === 0 && (
        <div className="py-12 text-center text-slate-500">
          <p className="text-base font-semibold">No products found matching "{searchQuery}"</p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-2 text-xs text-accent font-bold underline"
          >
            Clear Search Filter
          </button>
        </div>
      )}
    </div>
  );
}
