"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

export function ProductsListing() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 mb-10 border-b border-border-default">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px",
              active === cat
                ? "border-accent text-accent"
                : "border-transparent text-concrete hover:text-text-dark"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Table */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Table header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-4 py-3 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em]">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Product</div>
            <div className="col-span-3">Specifications</div>
            <div className="col-span-5">Variants</div>
          </div>

          <div className="border border-border-default border-t-0">
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                id={product.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 px-4 py-5 border-b border-border-default last:border-0 hover:bg-surface transition-colors items-start"
              >
                {/* Number */}
                <div className="col-span-1 hidden lg:block">
                  <span className="text-xs font-bold text-concrete">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name & Category */}
                <div className="lg:col-span-3">
                  <h3 className="text-sm font-bold text-text-dark">
                    {product.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-concrete">
                    {product.category}
                  </span>
                </div>

                {/* Specs */}
                <div className="lg:col-span-3">
                  <span className="text-xs text-text-body font-mono">
                    {product.specs}
                  </span>
                </div>

                {/* Items */}
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap gap-1.5">
                    {product.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-2 py-0.5 bg-white border border-border-default text-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
