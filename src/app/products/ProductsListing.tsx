"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { trackProductClick, trackCategoryFilter } from "@/lib/analytics";

const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

const categoryIcons: Record<string, string> = {
  Valves: "⚙",
  Automation: "⚡",
  Instrumentation: "📡",
};

export function ProductsListing() {
  const [active, setActive] = useState("All");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              trackCategoryFilter(cat);
            }}
            className={cn(
              "px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-sm border",
              active === cat
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-concrete border-border-default hover:border-primary hover:text-primary"
            )}
          >
            {cat !== "All" && (
              <span className="mr-1.5">{categoryIcons[cat] ?? ""}</span>
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              id={product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onHoverStart={() => setHoveredSlug(product.slug)}
              onHoverEnd={() => setHoveredSlug(null)}
            >
              <Link
                href={`/products/${product.slug}`}
                onClick={() =>
                  trackProductClick(
                    product.name,
                    product.category,
                    "Products Catalog Grid"
                  )
                }
                className="block h-full group"
              >
                <div
                  className={cn(
                    "bg-white border rounded-sm overflow-hidden flex flex-col h-full transition-all duration-300",
                    hoveredSlug === product.slug
                      ? "border-accent shadow-lg shadow-accent/10 -translate-y-1"
                      : "border-border-default hover:shadow-md"
                  )}
                >
                  {/* Image */}
                  <div className="relative w-full h-52 bg-surface overflow-hidden flex items-center justify-center p-4">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(43,57,144,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,57,144,0.04) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] bg-primary/90 text-white px-2 py-1 backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 border-t border-border-default">
                    <h3 className="text-sm font-extrabold text-text-dark tracking-tight mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-text-muted font-mono mb-3 leading-relaxed">
                      {product.specs}
                    </p>

                    {/* Variants chips */}
                    <div className="flex flex-wrap gap-1 mb-4 flex-1">
                      {product.items.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-text-muted uppercase tracking-wide font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                      {product.items.length > 3 && (
                        <span className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-concrete uppercase tracking-wide font-semibold">
                          +{product.items.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-border-subtle mt-auto">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-accent-hover transition-colors">
                        View Details
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
