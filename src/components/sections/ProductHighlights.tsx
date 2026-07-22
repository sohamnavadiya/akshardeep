"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProductHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Product Range"
          subtitle="Comprehensive range of valves, automation systems & process instrumentation from world-class brands"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full bg-white rounded-2xl p-5 border border-border-light hover:border-accent/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>

                {/* Category */}
                <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium mb-2">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-1.5">
                  {product.name}
                </h3>

                {/* Specs */}
                <p className="text-xs text-text-secondary mb-3">
                  {product.specs}
                </p>

                {/* Link Arrow */}
                <div className="flex items-center gap-1 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Range
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
