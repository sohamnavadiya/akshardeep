"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COMPANY, type Product } from "@/lib/constants";
import {
  trackQuoteRequest,
  trackWhatsAppClick,
  trackProductClick,
  trackProductVariantSelect,
} from "@/lib/analytics";

type Props = {
  product: Product;
  relatedProducts: Product[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function ProductDetail({ product, relatedProducts }: Props) {
  const [activeVariant, setActiveVariant] = useState(0);
  const hasSubProducts = product.subProducts && product.subProducts.length > 0;
  const activeSubProduct = hasSubProducts
    ? (product.subProducts![activeVariant] || product.subProducts![0])
    : null;

  const getWhatsAppQuoteUrl = () => {
    let text = `Hello Akshardeep Engineers,\n\nI would like to request a quote for:\n\n📌 *Product:* ${product.name}\n📂 *Category:* ${product.category}`;

    if (activeSubProduct) {
      text += `\n🔹 *Selected Variant:* ${activeSubProduct.name}`;
      if (activeSubProduct.model) {
        text += ` (Model: ${activeSubProduct.model})`;
      }
      if (activeSubProduct.specs && activeSubProduct.specs.length > 0) {
        text += `\n*Variant Specs:*`;
        activeSubProduct.specs.forEach((s) => {
          text += `\n  • ${s.key}: ${s.value}`;
        });
      }
    }

    if (product.specTable && product.specTable.length > 0) {
      text += `\n\n📋 *Product Specifications:*`;
      product.specTable.forEach((s) => {
        text += `\n  • ${s.key}: ${s.value}`;
      });
    }

    text += `\n\nPlease share pricing, availability, and lead time. Thank you!`;

    return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const whatsappQuoteUrl = getWhatsAppQuoteUrl();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-0 overflow-hidden bg-charcoal">
        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Red accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent to-transparent" />

        <div className="relative max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            {/* Left: Text */}
            <div className="pb-14 lg:pb-20">
              {/* Breadcrumb */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="flex items-center gap-2 mb-6"
              >
                <Link
                  href="/products"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white/70 transition-colors"
                >
                  Products
                </Link>
                <span className="text-white/20">›</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  {product.category}
                </span>
                <span className="text-white/20">›</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {product.name}
                </span>
              </motion.div>

              {/* Category badge */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-accent border border-accent/40 bg-accent/10 px-3 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {product.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05] mb-4"
              >
                {product.name}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-base text-white/60 font-medium leading-relaxed mb-6 max-w-lg"
              >
                {product.tagline}
              </motion.p>

              {/* Spec summary pills */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex flex-wrap gap-2 mb-8"
              >
                {product.specTable.slice(0, 3).map((s) => (
                  <div
                    key={s.key}
                    className="flex flex-col bg-white/5 border border-white/10 px-3 py-2 min-w-[120px]"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 mb-0.5">
                      {s.key}
                    </span>
                    <span className="text-xs font-semibold text-white font-mono leading-tight">
                      {s.value.length > 40 ? s.value.slice(0, 38) + "…" : s.value}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="flex flex-wrap gap-3"
              >
                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackQuoteRequest("Product Page Request Quote", product.name)}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3.5 transition-colors shadow-lg hover:shadow-accent/20"
                >
                  Request a Quote
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href={whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("Product Page WhatsApp", product.name)}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] px-6 py-3.5 transition-colors"
                >
                  WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex items-end justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md lg:max-w-full h-72 sm:h-96 lg:h-[440px]">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-charcoal to-transparent z-10" />
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-14 bg-surface border-b border-border-default">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Overview</span>
            </div>
            <p className="text-base text-text-body leading-relaxed">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Sub-Products / Variants ── */}
      {hasSubProducts && (
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Product Variants
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
                Available Configurations
              </h2>
            </motion.div>

            {/* ── Mobile Accordion View (< lg) ── */}
            <div className="flex flex-col gap-3 lg:hidden">
              {product.subProducts!.map((sub, idx) => {
                const isExpanded = activeVariant === idx;
                return (
                  <div
                    key={sub.name}
                    className={`border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? "border-accent bg-white shadow-md"
                        : "border-border-default bg-white"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setActiveVariant(isExpanded ? -1 : idx);
                        if (!isExpanded) {
                          trackProductVariantSelect(product.name, sub.name, sub.model);
                        }
                      }}
                      className={`w-full text-left px-4 py-4 transition-colors flex items-center justify-between gap-3 ${
                        isExpanded ? "bg-accent/5" : "hover:bg-surface"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-8 rounded-full flex-shrink-0 transition-colors ${
                            isExpanded ? "bg-accent" : "bg-border-default"
                          }`}
                        />
                        <div>
                          <p className="text-sm font-bold text-text-dark leading-tight">{sub.name}</p>
                          {sub.model && (
                            <p className="text-[10px] font-mono text-concrete mt-0.5">Model: {sub.model}</p>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-concrete transition-transform duration-300 flex-shrink-0 ${
                          isExpanded ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="accordion-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-surface border-t border-border-default flex flex-col gap-4">
                            {/* Image */}
                            <div className="relative bg-white border border-border-default rounded-sm overflow-hidden flex items-center justify-center h-60 p-4">
                              <div
                                className="absolute inset-0 opacity-50"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(rgba(43,57,144,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(43,57,144,0.03) 1px, transparent 1px)",
                                  backgroundSize: "24px 24px",
                                }}
                              />
                              <Image
                                src={sub.image}
                                alt={sub.name}
                                fill
                                className="object-contain p-4"
                                sizes="100vw"
                              />
                            </div>

                            {/* Spec mini-table */}
                            <div className="flex flex-col">
                              <h3 className="text-sm font-extrabold text-text-dark mb-2 leading-tight">
                                {sub.name}
                              </h3>
                              <div className="border border-border-default overflow-hidden mb-3">
                                {sub.specs.map((spec, si) => (
                                  <div
                                    key={spec.key}
                                    className={`flex ${si % 2 === 0 ? "bg-surface" : "bg-white"}`}
                                  >
                                    <div className="w-[40%] px-3 py-2 border-r border-border-default">
                                      <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
                                        {spec.key}
                                      </span>
                                    </div>
                                    <div className="flex-1 px-3 py-2">
                                      <span className="text-xs text-text-body font-mono leading-relaxed">
                                        {spec.value}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <a
                                href={whatsappQuoteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                  trackQuoteRequest(
                                    "Product Variant Section",
                                    `${product.name} - ${sub.name}`
                                  )
                                }
                                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-colors text-center"
                              >
                                Request Quote for {sub.name}
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ── Desktop Layout (≥ lg) ── */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {/* Left: Variant selector */}
              <div className="lg:col-span-1 flex flex-col gap-2">
                {product.subProducts!.map((sub, idx) => (
                  <motion.button
                    key={sub.name}
                    onClick={() => {
                      setActiveVariant(idx);
                      trackProductVariantSelect(product.name, sub.name, sub.model);
                    }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    className={`text-left px-4 py-4 border transition-all duration-200 ${
                      activeVariant === idx
                        ? "border-accent bg-accent/5 shadow-sm"
                        : "border-border-default bg-white hover:border-primary/40 hover:bg-surface"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-1.5 h-8 rounded-full flex-shrink-0 transition-colors ${
                          activeVariant === idx ? "bg-accent" : "bg-border-default"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-bold text-text-dark leading-tight">{sub.name}</p>
                        {sub.model && (
                          <p className="text-[10px] font-mono text-concrete mt-0.5">Model: {sub.model}</p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Right: Variant detail */}
              {activeSubProduct && (
                <motion.div
                  key={activeVariant}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {/* Image */}
                  <div className="relative bg-surface border border-border-default rounded-sm overflow-hidden flex items-center justify-center h-64 sm:h-80 p-4">
                    <div
                      className="absolute inset-0 opacity-50"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(43,57,144,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(43,57,144,0.03) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <Image
                      src={activeSubProduct.image}
                      alt={activeSubProduct.name}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>

                  {/* Spec mini-table */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-extrabold text-text-dark mb-3 leading-tight">
                      {activeSubProduct.name}
                    </h3>
                    <div className="border border-border-default overflow-hidden flex-1 mb-3">
                      {activeSubProduct.specs.map((spec, si) => (
                        <div
                          key={spec.key}
                          className={`flex ${si % 2 === 0 ? "bg-surface" : "bg-white"}`}
                        >
                          <div className="w-[40%] px-3 py-2.5 border-r border-border-default">
                            <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
                              {spec.key}
                            </span>
                          </div>
                          <div className="flex-1 px-3 py-2.5">
                            <span className="text-xs text-text-body font-mono leading-relaxed">
                              {spec.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={whatsappQuoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackQuoteRequest(
                          "Product Variant Section",
                          `${product.name} - ${activeSubProduct.name}`
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 transition-colors"
                    >
                      Request Quote for {activeSubProduct.name}
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Full Specifications Table ── */}
      <section className="py-16 bg-surface border-y border-border-default">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Technical Data
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
              Full Specifications
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="border border-border-default overflow-hidden shadow-sm max-w-3xl"
          >
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em]">
              <div className="px-5 py-3 border-r border-primary-light/30">Parameter</div>
              <div className="px-5 py-3">Value / Range</div>
            </div>
            {/* Rows */}
            {product.specTable.map((spec, i) => (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`grid grid-cols-2 border-b border-border-default last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-surface"
                }`}
              >
                <div className="px-5 py-3 border-r border-border-default flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-full min-h-[16px] bg-accent/30 flex-shrink-0" />
                    <span className="text-xs font-bold text-primary">{spec.key}</span>
                  </div>
                </div>
                <div className="px-5 py-3 flex items-center">
                  <span className="text-xs text-text-body font-mono leading-relaxed">{spec.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Explore More
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-text-dark tracking-tight">
                Related Products
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <Link
                    href={`/products/${rel.slug}`}
                    onClick={() =>
                      trackProductClick(
                        rel.name,
                        rel.category,
                        "Related Products Section"
                      )
                    }
                    className="block group"
                  >
                    <div className="bg-white border border-border-default group-hover:border-accent group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative h-44 bg-surface flex items-center justify-center">
                        <Image
                          src={rel.heroImage}
                          alt={rel.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-4 border-t border-border-default">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-concrete">
                          {rel.category}
                        </span>
                        <h3 className="text-sm font-extrabold text-text-dark mt-1 group-hover:text-primary transition-colors">
                          {rel.name}
                        </h3>
                        <p className="text-[10px] text-concrete font-mono mt-1">{rel.specs}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
