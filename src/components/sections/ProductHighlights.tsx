"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  FileText,
  Building2,
  PackageCheck,
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCardSlider } from "@/components/shared/ProductCardSlider";
import { trackProductClick } from "@/lib/analytics";

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "Valves", label: "Industrial Valves" },
  { id: "Automation", label: "Valve Automation" },
  { id: "Instrumentation", label: "Instrumentation & Seals" },
] as const;

export function ProductHighlights() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);


  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden bg-blueprint">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeading
          label="ENGINEERED EXCELLENCE • AUTHORISED DISTRIBUTOR"
          title="Our Featured Product Portfolio"
          subtitle="Explore our comprehensive line of heavy-duty industrial valves, pneumatic automation actuators, precision instrumentation, and custom diaphragm seal replacements."
        />

        {/* Industrial Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 -mt-6">
          <div className="flex items-center gap-3 p-3 bg-white border border-border-default shadow-xs text-xs font-semibold text-text-dark">
            <div className="p-2 bg-primary/10 text-primary">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-primary">100% Tested</div>
              <div className="text-[10px] text-text-muted">Hydrostatic & Hydro-Pneumatic</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white border border-border-default shadow-xs text-xs font-semibold text-text-dark">
            <div className="p-2 bg-accent/10 text-accent">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-accent">SIL 3 & Fire Safe</div>
              <div className="text-[10px] text-text-muted">API 607 & ISO 17292 Standard</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white border border-border-default shadow-xs text-xs font-semibold text-text-dark">
            <div className="p-2 bg-primary/10 text-primary">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-primary">Authorised Partner</div>
              <div className="text-[10px] text-text-muted">Forbes Marshall | El-O-Matic</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white border border-border-default shadow-xs text-xs font-semibold text-text-dark">
            <div className="p-2 bg-emerald-600/10 text-emerald-600">
              <PackageCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-emerald-700">Ex-Stock Inventory</div>
              <div className="text-[10px] text-text-muted">Fast Ankleshwar Dispatch</div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-slate-200/70 border border-slate-300 gap-1.5 shadow-inner">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-md border-b-2 border-accent"
                      : "text-slate-700 hover:text-primary hover:bg-white/80"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>



        {/* Main Product Grid — 3 COLUMNS FOR MAXIMUM PRODUCT VISIBILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => {
              const sliderImages =
                product.images && product.images.length > 0
                  ? product.images
                  : [
                      product.heroImage,
                      ...(product.subProducts?.map((sp) => sp.image) || []),
                    ].filter(Boolean);

              const subProductCount = product.subProducts?.length || 0;

              return (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="h-full"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={() =>
                      trackProductClick(
                        product.name,
                        product.category,
                        "Homepage Product Grid"
                      )
                    }
                    className="group/card flex flex-col h-full bg-white border-2 border-slate-200/80 hover:border-primary shadow-sm hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1.5"
                  >
                    {/* Top Slider Header Canvas */}
                    <div className="relative">
                      <ProductCardSlider
                        images={sliderImages}
                        productName={product.name}
                        category={product.category}
                        subProducts={product.subProducts}
                        className="aspect-[16/11] bg-slate-50 p-4"
                      />

                      {/* Sub-products Count Ribbon */}
                      {subProductCount > 0 && (
                        <div className="absolute bottom-3 right-3 z-20 bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 shadow-md">
                          {subProductCount} Sub-Models
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        {/* Category & Title */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5">
                            {product.category}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            AK-SERIES
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-text-dark group-hover/card:text-primary group-hover/card:underline transition-colors duration-200 mb-1.5 tracking-tight leading-snug">
                          {product.name}
                        </h3>

                        <p className="text-xs text-text-muted italic line-clamp-1 mb-4 font-medium">
                          {product.tagline}
                        </p>

                        {/* Specs Box */}
                        <div className="bg-slate-900 text-white p-3 mb-4 shadow-inner border-l-4 border-accent">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                            SPECIFICATIONS RANGE
                          </div>
                          <div className="text-xs font-mono font-bold text-amber-400 truncate">
                            {product.specs}
                          </div>
                        </div>

                        {/* Feature Items List */}
                        {product.items && product.items.length > 0 && (
                          <div className="space-y-1.5 mb-4">
                            <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                              KEY FEATURES & TYPES:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {product.items.slice(0, 4).map((item, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-none max-w-full truncate"
                                >
                                  <Check className="w-3 h-3 text-accent shrink-0" />
                                  <span className="truncate">{item}</span>
                                </span>
                              ))}
                              {product.items.length > 4 && (
                                <span className="text-[10px] font-bold px-2 py-1 bg-slate-200 text-slate-700">
                                  +{product.items.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Card Bottom CTA Link */}
                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <div className="w-full flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-primary group-hover/card:text-accent transition-colors bg-slate-50 group-hover/card:bg-primary group-hover/card:text-white p-3 transition-all duration-200">
                          <span>Explore Full Specs & Models</span>
                          <ChevronRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Products Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-slate-900 via-primary-medium to-slate-900 text-white p-8 sm:p-12 border-b-4 border-accent shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent bg-accent/20 px-3 py-1 mb-3 inline-block">
              COMPLETE PRODUCT CATALOGUE
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Need Custom Valve Assemblies or Specific Engineering Specs?
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore our full catalogue of 150+ industrial valve models, pneumatic automation packages, and Badotherm diaphragm seals with complete datasheets.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover text-white px-8 py-4 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>View All 8 Product Ranges</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/documents/akshardeep-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Download Brochure (PDF)</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

