"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Activity, Layers, Award, ArrowLeft } from "lucide-react";

export function ConceptSwitcherBar() {
  const pathname = usePathname();

  const concepts = [
    {
      id: "concept-1",
      path: "/demo/hero-concept-1",
      label: "Concept 1: Flow Simulator",
      icon: Activity,
      badge: "Interactive Flow",
    },
    {
      id: "concept-2",
      path: "/demo/hero-concept-2",
      label: "Concept 2: 3D Product Showcase",
      icon: Sparkles,
      badge: "Floating 3D Cards",
    },
    {
      id: "concept-3",
      path: "/demo/hero-concept-3",
      label: "Concept 3: CAD Blueprint",
      icon: Layers,
      badge: "Interactive Hotspots",
    },
    {
      id: "concept-4",
      path: "/demo/hero-concept-4",
      label: "Concept 4: Centered Layout",
      icon: Award,
      badge: "Partner Showcase",
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-slate-950/95 border-b border-white/15 backdrop-blur-md px-4 py-3 shadow-xl">
      <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Original Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Hero Concept Explorer
            </span>
          </div>
        </div>

        {/* Concept Links Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {concepts.map((c) => {
            const Icon = c.icon;
            const isActive = pathname === c.path;
            return (
              <Link
                key={c.id}
                href={c.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-accent border-accent text-white shadow-md shadow-accent/30"
                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{c.label}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
