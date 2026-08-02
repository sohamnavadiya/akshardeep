"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCardSlider } from "@/components/shared/ProductCardSlider";
import { trackProductClick } from "@/lib/analytics";

export function ProductHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-surface via-slate-50/50 to-surface relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-none blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Product Range"
          subtitle="Explore our comprehensive line of high-performance industrial valves, pneumatic automation systems, and process instrumentation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.slice(0, 8).map((product, i) => {
            // Aggregate all images for this product
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  onClick={() =>
                    trackProductClick(
                      product.name,
                      product.category,
                      "Homepage Product Highlights"
                    )
                  }
                  className="group/card block h-full bg-white rounded-none border border-border-default hover:border-accent shadow-sm hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Slidable Product Image Gallery */}
                    <ProductCardSlider
                      images={sliderImages}
                      productName={product.name}
                      category={product.category}
                      subProducts={product.subProducts}
                    />

                    {/* Card Body */}
                    <div className="p-4 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-sm font-extrabold text-text-dark group-hover/card:text-primary group-hover/card:underline transition-colors duration-200 line-clamp-1 mb-1 tracking-tight">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="bg-slate-50 border border-slate-200/60 rounded-none px-2 py-1 text-[11px] font-mono text-slate-600 mb-3 truncate">
                        {product.specs}
                      </div>

                      {/* Key Items / Sub-products feature chips */}
                      {product.items && product.items.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.items.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-text-muted uppercase tracking-wide font-semibold rounded-none truncate max-w-full"
                            >
                              {item}
                            </span>
                          ))}
                          {product.items.length > 3 && (
                            <span className="text-[9px] px-2 py-0.5 bg-surface border border-border-subtle text-concrete uppercase tracking-wide font-semibold rounded-none">
                              +{product.items.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="px-4 pb-3 pt-3 border-t border-border-subtle mt-auto">
                    <div className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-accent group-hover/card:text-accent-hover transition-colors">
                      <span>View Details</span>
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
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-light text-white px-8 py-3.5 rounded-none font-bold text-sm tracking-wide shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Products & Specifications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
