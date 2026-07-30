"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/constants";

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-border-default">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Trusted By
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
              Our Esteemed Clients
            </h2>
            <p className="text-sm text-concrete mt-1">
              Partnering with 35+ industry leaders across chemicals, pharmaceuticals, power, and manufacturing.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-surface px-4 py-2 rounded-sm border border-border-subtle self-start sm:self-auto">
            <span className="text-3xl font-black text-primary">35+</span>
            <span className="text-xs font-semibold text-charcoal leading-tight">
              Valued Client<br />Organisations
            </span>
          </div>
        </div>

        {/* Fixed Grid Mode with Full Color Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (index % 7) * 0.04 }}
              title={client.name}
              className="group relative flex flex-col items-center justify-center p-3 h-24 bg-white border border-border-subtle rounded-sm hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              {/* Full Color Logo Container */}
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                />
              </div>

              {/* Client Name Label */}
              <span className="mt-1 text-[11px] font-medium text-concrete group-hover:text-charcoal transition-colors line-clamp-1 text-center w-full px-1">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
