"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { trackProductClick, trackCategoryFilter } from "@/lib/analytics";
import { ProductCardSlider } from "@/components/shared/ProductCardSlider";
import { Layers } from "lucide-react";

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
              "px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-none border cursor-pointer",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((product, i) => {
            const sliderImages =
              product.images && product.images.length > 0
                ? product.images
                : [
                    product.heroImage,
                    ...(product.subProducts?.map((sp) => sp.image) || []),
                  ].filter(Boolean);

            return (
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
                  className="block h-full group/card cursor-pointer"
                >
                  <div
                    className={cn(
                      "bg-white border rounded-none overflow-hidden flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/10",
                      hoveredSlug === product.slug
                        ? "border-accent -translate-y-1"
                        : "border-border-default hover:border-accent/40"
                    )}
                  >
                    {/* Slidable Image Gallery */}
                    <ProductCardSlider
                      images={sliderImages}
                      productName={product.name}
                      category={product.category}
                      subProducts={product.subProducts}
                    />

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-1">
                      {/* Header: Category & Variant Count */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] bg-primary/10 text-primary px-2.5 py-0.5 rounded-none">
                          {product.category}
                        </span>
                        {product.items && product.items.length > 0 && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-none">
                            <Layers className="w-3 h-3 text-slate-400" />
                            {product.items.length} Variants
                          </span>
                        )}
                      </div>

                      {/* Product Title */}
                      <h3 className="text-base font-extrabold text-text-dark tracking-tight mb-1.5 group-hover/card:text-primary group-hover/card:underline transition-colors">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="bg-slate-50 border border-slate-200/60 rounded-none px-2 py-1 text-[11px] font-mono text-slate-600 mb-3 truncate">
                        {product.specs}
                      </div>

                      {/* Variants chips */}
                      <div className="flex flex-wrap gap-1 mb-4 flex-1">
                        {product.items.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-text-muted uppercase tracking-wide font-semibold rounded-none"
                          >
                            {item}
                          </span>
                        ))}
                        {product.items.length > 3 && (
                          <span className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-accent font-semibold uppercase tracking-wide rounded-none">
                            +{product.items.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA Link */}
                      <div className="flex items-center justify-between pt-3 border-t border-border-subtle mt-auto">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-accent group-hover/card:text-accent-hover transition-colors">
                          <span>View Details & Specs</span>
                          <svg
                            className="w-3.5 h-3.5 text-accent group-hover/card:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
