"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";

export function ClientLogos() {
  // Duplicate for seamless infinite marquee
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 bg-white border-y border-border-default overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px w-6 bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                Trusted By
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-dark tracking-tight">
              Our Clients
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-concrete">
            <span className="text-2xl font-extrabold text-primary">35+</span>
            <span className="font-medium leading-tight">
              leading<br />organisations
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              title={client.name}
              className="flex-shrink-0 flex items-center justify-center w-36 h-16 bg-surface border border-border-subtle hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-300 px-3 group cursor-default"
            >
              <div className="relative w-full h-10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  sizes="144px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row — reverse direction */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {doubled.map((client, i) => (
            <div
              key={`rev-${client.name}-${i}`}
              title={client.name}
              className="flex-shrink-0 flex items-center justify-center w-36 h-16 bg-surface border border-border-subtle hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-300 px-3 group cursor-default"
            >
              <div className="relative w-full h-10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  sizes="144px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
