import Link from "next/link";
import { ConceptSwitcherBar } from "@/components/sections/hero-concepts/ConceptSwitcherBar";
import { Activity, Sparkles, Layers, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function DemoHubPage() {
  const concepts = [
    {
      id: "hero-concept-1",
      title: "Concept 1: Interactive Flow & Pressure Simulator",
      path: "/demo/hero-concept-1",
      icon: Activity,
      tag: "Interactive Engineering Visual",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      description:
        "Dynamic industrial schematic canvas with animated fluid particles, open/close valve controls, pressure slider (PSI), flow GPM readout, and temperature meters.",
      highlights: [
        "Live valve position toggle (Open / Throttle / Closed)",
        "Fluid medium selector (Water / Steam / Hydraulic Oil)",
        "Real-time GPM flow velocity calculation",
      ],
    },
    {
      id: "hero-concept-2",
      title: "Concept 2: Floating 3D Glassmorphism Showcase",
      path: "/demo/hero-concept-2",
      icon: Sparkles,
      tag: "Floating Interactive Product Cards",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      description:
        "Staggered floating glassmorphism product cards with continuous ambient levitation animations, product imagery, high-pressure badges, and technical spec lists.",
      highlights: [
        "Continuous levitation particle movement",
        "Hover expansion & glowing border accents",
        "Direct visual connection to Forbes Marshall & El-O-Matic products",
      ],
    },
    {
      id: "hero-concept-3",
      title: "Concept 3: CAD Blueprint Hotspot Viewer",
      path: "/demo/hero-concept-3",
      icon: Layers,
      tag: "Technical Engineering CAD Drawing",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
      description:
        "Architectural CAD vector blueprint canvas overlay with glowing animated target pins (hotspots) for inspecting actuators, positioners, valve bodies, and flanges.",
      highlights: [
        "Click/hover target hotspots on vector schematic",
        "Dynamic component spec inspector popover",
        "High-tech engineering drawing style",
      ],
    },
    {
      id: "hero-concept-4",
      title: "Concept 4: Vertically Centered Partner & Performance Hub",
      path: "/demo/hero-concept-4",
      icon: Award,
      tag: "Balanced Corporate Layout",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      description:
        "Rebalanced full-height hero layout (`items-center`) featuring an interactive Partner Portfolio card with quick tab switching between Forbes Marshall, Intervalve, and El-O-Matic.",
      highlights: [
        "Full-screen balanced vertical height",
        "Interactive Partner brand tab switcher",
        "Integrated metric cards grid (14+ Yrs, 200+ Clients)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ConceptSwitcherBar />

      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider">
            Interactive Prototype Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
            Hero Section Design Concepts
          </h1>
          <p className="text-white/70 mt-4 text-base leading-relaxed">
            Select any concept below to test the full live interactive implementation on your website.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {concepts.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="bg-slate-900 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent transition-all hover:shadow-2xl hover:shadow-accent/10 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase ${c.badgeColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-5 group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-sm text-white/70 mt-2 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                    {c.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={c.path}
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-accent/25"
                  >
                    Launch Interactive Preview
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
