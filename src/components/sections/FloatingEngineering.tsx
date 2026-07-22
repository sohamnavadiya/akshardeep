"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ─────────────────────────── SVG ELEMENTS ─────────────────────────── */

function ButterflyValveSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <circle cx="80" cy="80" r="62" stroke="currentColor" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <circle
          key={i}
          cx={80 + 56 * Math.cos((angle * Math.PI) / 180)}
          cy={80 + 56 * Math.sin((angle * Math.PI) / 180)}
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
      <circle cx="80" cy="80" r="42" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="80" r="34" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="80" cy="80" rx="30" ry="10" stroke="currentColor" strokeWidth="2" transform="rotate(-15 80 80)" />
      <ellipse cx="80" cy="80" rx="30" ry="10" stroke="currentColor" strokeWidth="2" transform="rotate(15 80 80)" opacity="0.5" />
      <line x1="80" y1="18" x2="80" y2="42" stroke="currentColor" strokeWidth="2.5" />
      <rect x="76" y="12" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="80" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.6" />
      <line x1="8" y1="80" x2="18" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="142" y1="80" x2="152" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="8" y1="76" x2="8" y2="84" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="152" y1="76" x2="152" y2="84" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function BallValveSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="55" width="44" height="30" stroke="currentColor" strokeWidth="1.8" />
      <line x1="0" y1="62" x2="44" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="78" x2="44" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <rect x="40" y="46" width="10" height="48" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="45" cy="50" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="45" cy="90" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <ellipse cx="90" cy="70" rx="36" ry="38" stroke="currentColor" strokeWidth="2" />
      <circle cx="90" cy="70" r="24" stroke="currentColor" strokeWidth="1.8" />
      <rect x="66" y="62" width="48" height="16" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="84" y="0" width="12" height="34" stroke="currentColor" strokeWidth="1.8" />
      <rect x="72" y="0" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="80" y="30" width="20" height="10" stroke="currentColor" strokeWidth="1.5" />
      <rect x="130" y="46" width="10" height="48" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="135" cy="50" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="135" cy="90" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="136" y="55" width="44" height="30" stroke="currentColor" strokeWidth="1.8" />
      <line x1="136" y1="62" x2="180" y2="62" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="136" y1="78" x2="180" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="128" x2="180" y2="128" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="0" y1="124" x2="0" y2="132" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="180" y1="124" x2="180" y2="132" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function PneumaticActuatorSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="30" width="110" height="80" rx="6" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="50" x2="130" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="20" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <rect x="30" y="22" width="14" height="12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="106" y="22" width="14" height="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="37" cy="28" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="113" cy="28" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M ${34 + i * 14} 55 Q ${34 + i * 14 + 7} 60 ${34 + i * 14 + 14} 55`}
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={`b${i}`}
          d={`M ${34 + i * 14} 80 Q ${34 + i * 14 + 7} 75 ${34 + i * 14 + 14} 80`}
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
      ))}
      <rect x="60" y="108" width="30" height="50" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="60" y1={116 + i * 9} x2="50" y2={116 + i * 9} stroke="currentColor" strokeWidth="1" opacity="0.5" />
      ))}
      <circle cx="75" cy="158" r="16" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="75" cy="158" r="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="108" width="134" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="114" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="120" cy="114" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="10" y="26" width="130" height="8" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function DoubleActingActuatorSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="10" y="20" width="150" height="70" rx="8" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="10" cy="55" rx="12" ry="35" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="160" cy="55" rx="12" ry="35" stroke="currentColor" strokeWidth="1.5" />
      <rect x="70" y="24" width="30" height="62" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <line x1="10" y1="28" x2="160" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <line x1="10" y1="82" x2="160" y2="82" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="10" cy="28" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="160" cy="28" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="10" cy="82" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="160" cy="82" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="78" y="88" width="14" height="35" stroke="currentColor" strokeWidth="2" />
      <circle cx="85" cy="110" r="12" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="85" cy="110" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="85" cy="110" r="2" fill="currentColor" opacity="0.6" />
      <rect x="30" y="10" width="10" height="14" stroke="currentColor" strokeWidth="1.2" />
      <rect x="130" y="10" width="10" height="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="30" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="100" y1="40" x2="140" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="100" y1="70" x2="140" y2="70" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function PlugValveSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 40 L20 120 Q20 140 70 140 Q120 140 120 120 L120 40 Q120 20 70 20 Q20 20 20 40Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M35 50 L35 110 Q35 126 70 126 Q105 126 105 110 L105 50 Q105 34 70 34 Q35 34 35 50Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="0" y="62" width="35" height="16" stroke="currentColor" strokeWidth="1.5" />
      <rect x="105" y="62" width="35" height="16" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="70" cy="70" rx="22" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="62" y="0" width="16" height="22" stroke="currentColor" strokeWidth="1.8" />
      <rect x="56" y="14" width="28" height="8" stroke="currentColor" strokeWidth="1.3" />
      <rect x="65" y="2" width="10" height="10" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <rect x="56" y="20" width="28" height="10" stroke="currentColor" strokeWidth="1.3" />
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={i < 2 ? 28 : 112}
          cy={i % 2 === 0 ? 52 : 88}
          r="3"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}

/* ─────────────────────────── DATA ─────────────────────────── */

const elements = [
  {
    id: "butterfly",
    label: "Butterfly Valve",
    spec: "DN 50–DN 600 | PN 10–PN 25",
    Icon: ButterflyValveSVG,
    size: "w-32 h-32",
    floatDelay: 0,
    floatDuration: 5.5,
    rotateRange: 4,
    x: "5%",
    y: "8%",
  },
  {
    id: "ball",
    label: "Ball Valve",
    spec: "½″–12″ | API 6D | Fire Safe",
    Icon: BallValveSVG,
    size: "w-44 h-36",
    floatDelay: 0.8,
    floatDuration: 6.2,
    rotateRange: 3,
    x: "55%",
    y: "4%",
  },
  {
    id: "pneumatic",
    label: "Pneumatic Actuator",
    spec: "4–4022 Nm | 3–8 Bar",
    Icon: PneumaticActuatorSVG,
    size: "w-28 h-36",
    floatDelay: 1.6,
    floatDuration: 7.0,
    rotateRange: 5,
    x: "2%",
    y: "55%",
  },
  {
    id: "double",
    label: "Double Acting Actuator",
    spec: "Rack & Pinion | SIL 3",
    Icon: DoubleActingActuatorSVG,
    size: "w-44 h-32",
    floatDelay: 2.4,
    floatDuration: 5.8,
    rotateRange: 3,
    x: "52%",
    y: "58%",
  },
  {
    id: "plug",
    label: "Plug Valve",
    spec: "Lubricated | ½″–16″",
    Icon: PlugValveSVG,
    size: "w-28 h-36",
    floatDelay: 3.2,
    floatDuration: 6.6,
    rotateRange: 4,
    x: "28%",
    y: "30%",
  },
];

/* ─────────────────────────── FLOATING CARD ─────────────────────────── */

function FloatingCard({
  element,
  index,
}: {
  element: (typeof elements)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute"
      style={{ left: element.x, top: element.y }}
      animate={{
        y: [0, -14, 0, -8, 0],
        rotate: [0, element.rotateRange, 0, -element.rotateRange * 0.6, 0],
      }}
      transition={{
        duration: element.floatDuration,
        delay: element.floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={hovered ? { scale: 1.08 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="relative group cursor-pointer"
      >
        {/* Glow ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-sm"
          animate={
            hovered
              ? { boxShadow: "0 0 40px 8px rgba(227,30,36,0.25)" }
              : { boxShadow: "0 0 0px 0px rgba(227,30,36,0)" }
          }
          transition={{ duration: 0.3 }}
        />

        {/* Card */}
        <div className="relative bg-primary-medium/80 border border-white/10 backdrop-blur-sm p-4 rounded-sm">
          {/* Index tag */}
          <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-accent flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* SVG element */}
          <element.Icon
            className={`${element.size} text-white/70 group-hover:text-white transition-colors duration-300`}
          />

          {/* Label popup on hover */}
          <motion.div
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="mt-3 pt-3 border-t border-white/10"
          >
            <p className="text-[10px] font-bold text-white uppercase tracking-widest">
              {element.label}
            </p>
            <p className="text-[9px] text-white/50 mt-0.5 font-mono">
              {element.spec}
            </p>
          </motion.div>
        </div>

        {/* Connector dots */}
        <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent/60 rounded-full" />
        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent/40 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────── SECTION ─────────────────────────── */

export function FloatingEngineering() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const parallaxX = useTransform(springX, [0, 1], [-12, 12]);
  const parallaxY = useTransform(springY, [0, 1], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-primary overflow-hidden py-24 lg:py-32"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/15" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-white/15" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-white/15" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/15" />

      {/* Accent bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: floating elements stage */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="relative h-[480px] lg:h-[560px] hidden sm:block"
          >
            {elements.map((el, i) => (
              <FloatingCard key={el.id} element={el} index={i} />
            ))}

            {/* Connecting lines — blueprint style */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 560"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="100" y1="100" x2="200" y2="200"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.line
                x1="370" y1="80" x2="200" y2="200"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.line
                x1="200" y1="200" x2="100" y2="360"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.5, delay: 1.1 }}
              />
              <motion.line
                x1="200" y1="200" x2="400" y2="380"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.5, delay: 1.4 }}
              />
            </svg>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Engineering Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight tracking-tight mb-6"
            >
              Precision-Crafted
              <br />
              <span className="text-accent">Industrial Components</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-light-muted text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Every component we supply is precision-engineered for critical
              process environments — from butterfly valves and ball valves to
              pneumatic actuators. Built to international standards, tested for
              performance.
            </motion.p>

            {/* Spec badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {[
                { value: "50+", label: "Product Lines" },
                { value: "SIL 3", label: "Safety Certified" },
                { value: "API 6D", label: "Ball Valve Standard" },
                { value: "ISO 5211", label: "Actuator Mounting" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <div className="text-xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-text-light-muted mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors"
              >
                View All Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile — horizontal scroll strip */}
        <div className="sm:hidden mt-12 -mx-4 px-4 flex gap-5 overflow-x-auto pb-4">
          {elements.map((el) => (
            <div
              key={el.id}
              className="flex-shrink-0 bg-primary-medium/80 border border-white/10 p-4 rounded-sm w-40"
            >
              <el.Icon className="w-24 h-24 text-white/70 mx-auto" />
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mt-3 text-center">
                {el.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

