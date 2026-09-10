"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, Wrench, Layers, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { COMPANY, type Product, type SubProduct, type SpecRow, type SpecSection } from "@/lib/constants";
import { trackQuoteRequest } from "@/lib/analytics";
import { ProductImageModal, type LightboxImage } from "./ProductImageModal";

function getProductGalleryImages(product: Product): LightboxImage[] {
  const images: LightboxImage[] = [];
  const seen = new Set<string>();

  const addImage = (src: string, title: string, model?: string) => {
    if (!src || seen.has(src)) return;
    seen.add(src);
    images.push({
      src,
      title,
      model,
      category: product.category,
    });
  };

  // 1. Add hero image
  if (product.heroImage) {
    addImage(product.heroImage, product.name, "Overview");
  }

  // 2. Add product images
  if (product.images) {
    product.images.forEach((img, i) => {
      addImage(img, `${product.name} (View ${i + 1})`);
    });
  }

  // 3. Add all subproducts and their images
  if (product.subProducts) {
    product.subProducts.forEach((sub) => {
      if (sub.image) {
        addImage(sub.image, sub.name, sub.model);
      }
      if (sub.images) {
        sub.images.forEach((img, i) => {
          addImage(img, `${sub.name} (View ${i + 1})`, sub.model);
        });
      }
    });
  }

  return images;
}

/* ─── Hero Variant Slider ─── */
function HeroVariantSlider({
  product,
  onOpenModal,
}: {
  product: Product;
  onOpenModal: (imgSrc: string) => void;
}) {
  const hasSubProducts = product.subProducts && product.subProducts.length > 0;

  // Build slides: hero + each sub-product main image
  const slides = hasSubProducts
    ? product.subProducts!.map((sub) => ({
        image: sub.image,
        label: sub.name,
        model: sub.model || "",
      }))
    : (product.images && product.images.length > 0 ? product.images : [product.heroImage]).map((img, i) => ({
        image: img,
        label: i === 0 ? product.name : `Variant ${i}`,
        model: "",
      }));

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-advance every 3.5s unless paused
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [isPaused, next, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative h-72 sm:h-80 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image area */}
      <div className="relative flex-1 flex items-center justify-center p-6 cursor-zoom-in">
        {slides.map((slide, idx) => (
          <div
            key={slide.image}
            onClick={() => onOpenModal(slide.image)}
            className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 ease-in-out ${
              idx === current
                ? "opacity-100 scale-100 cursor-zoom-in"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Floating Zoom Button */}
        <button
          type="button"
          onClick={() => onOpenModal(slides[current].image)}
          aria-label="Click to zoom image"
          title="Click to zoom image"
          className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-accent shadow-sm border border-slate-200/80 transition-all text-xs font-semibold cursor-pointer group/btn"
        >
          <ZoomIn className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-accent" />
          <span className="hidden sm:inline text-[11px]">Click to zoom</span>
        </button>

        {/* Nav arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous variant"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-accent hover:text-white hover:border-accent transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next variant"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-accent hover:text-white hover:border-accent transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Bottom bar: label + dots */}
      {slides.length > 1 && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-t border-slate-100">
          <div className="min-w-0 flex-1 mr-3">
            <p className="text-xs font-bold text-slate-800 truncate">
              {slides[current].label}
            </p>
            {slides[current].model && (
              <p className="text-[10px] text-slate-500 truncate">{slides[current].model}</p>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to variant ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current
                    ? "w-5 bg-accent"
                    : "w-2 bg-slate-300 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Keys that belong to "Features" section
const FEATURES_KEYS = new Set([
  "key features", "features", "special features", "highlights",
]);

// Keys that belong to "Material of Construction" section
const MATERIALS_KEYS = new Set([
  "body moc", "ball moc", "seat options", "stem moc", "disc moc",
  "body materials", "ball & stem moc", "lining moc", "jacket moc",
  "lined moc", "ball/disc/plug moc", "w/p part", "mesh",
  "diaphragm moc", "coating", "coating options", "lining options",
  "fill fluid", "fill fluid options",
]);

function categorizeSpec(spec: SpecRow): SpecSection {
  if (spec.section) return spec.section;
  const keyLower = spec.key.toLowerCase();
  if (FEATURES_KEYS.has(keyLower)) return "features";
  if (MATERIALS_KEYS.has(keyLower)) return "materials";
  return "specifications";
}

type GroupedSpecs = {
  features: SpecRow[];
  specifications: SpecRow[];
  materials: SpecRow[];
};

function groupSpecs(specs: SpecRow[]): GroupedSpecs {
  const grouped: GroupedSpecs = { features: [], specifications: [], materials: [] };
  for (const spec of specs) {
    const section = categorizeSpec(spec);
    grouped[section].push(spec);
  }
  return grouped;
}

type Props = {
  product: Product;
  relatedProducts: Product[];
};

function VariantSpecs({
  sub,
  idx,
  getWhatsAppUrl,
  productName,
}: {
  sub: SubProduct;
  idx: number;
  getWhatsAppUrl: (sub?: SubProduct | null) => string;
  productName: string;
}) {
  const grouped = groupSpecs(sub.specs);

  return (
    <div className="lg:col-span-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Variant {idx + 1}
          </span>
          <h3 className="text-2xl font-bold text-slate-900">{sub.name}</h3>
        </div>
        {sub.model && (
          <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
            {sub.model}
          </span>
        )}
      </div>

      {/* Unified Sections */}
      <div className="space-y-5">
        {/* Features */}
        {grouped.features.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {grouped.features.map((sp) =>
                sp.value.split(",").map((feat, i) => (
                  <span
                    key={`${sp.key}-${i}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"
                  >
                    <Sparkles className="w-3 h-3 text-accent" />
                    {feat.trim()}
                  </span>
                ))
              )}
            </div>
          </div>
        )}

        {/* Specifications */}
        {grouped.specifications.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Wrench className="w-3.5 h-3.5 text-accent" />
              Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {grouped.specifications.map((sp) => (
                <div key={sp.key} className="flex items-start gap-2 py-1.5 border-b border-slate-100 last:border-b-0">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap min-w-[110px]">
                    {sp.key}
                  </span>
                  <span className="text-xs font-medium text-slate-900">{sp.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Materials */}
        {grouped.materials.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Layers className="w-3.5 h-3.5 text-accent" />
              Materials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {grouped.materials.map((sp) => (
                <div key={sp.key} className="flex items-start gap-2 py-1.5 border-b border-slate-100 last:border-b-0">
                  <span className="text-xs font-bold text-slate-500 whitespace-nowrap min-w-[110px]">
                    {sp.key}
                  </span>
                  <span className="text-xs font-medium text-slate-900">{sp.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="pt-2">
        <a
          href={getWhatsAppUrl(sub)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackQuoteRequest(`Editorial Variant Quote - ${sub.name}`, productName)}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors cursor-pointer"
        >
          Request Quote for {sub.name}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function SubProductGallery({
  sub,
  onOpenModal,
}: {
  sub: SubProduct;
  onOpenModal: (imgSrc: string) => void;
}) {
  const images = sub.images && sub.images.length > 0 ? sub.images : [sub.image];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-24 self-start">
      {/* Main Image */}
      <div
        onClick={() => onOpenModal(images[activeIdx])}
        className="relative h-60 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-4 cursor-zoom-in group hover:border-slate-300 transition-colors"
      >
        <Image
          src={images[activeIdx]}
          alt={`${sub.name} - View ${activeIdx + 1}`}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />

        {/* Zoom trigger badge */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(images[activeIdx]);
          }}
          aria-label={`Zoom ${sub.name} image`}
          title="Click to zoom image"
          className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/90 hover:bg-white text-slate-700 hover:text-accent shadow-sm border border-slate-200/80 transition-all text-xs font-semibold cursor-pointer group/btn"
        >
          <ZoomIn className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-accent" />
          <span className="hidden sm:inline text-[10px]">Zoom</span>
        </button>

        {/* Hover hint */}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-[10px] font-medium text-slate-600 bg-white/90 px-2.5 py-0.5 rounded-full shadow-sm border border-slate-200/60 whitespace-nowrap">
          Click to zoom & inspect
        </span>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveIdx(i)}
              className={`relative w-16 h-16 rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                i === activeIdx
                  ? "border-accent shadow-md"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <Image
                src={img}
                alt={`${sub.name} thumbnail ${i + 1}`}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductOption1Blueprint({ product }: Props) {
  const hasSubProducts = product.subProducts && product.subProducts.length > 0;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const galleryImages = useMemo(() => getProductGalleryImages(product), [product]);

  const handleOpenModal = useCallback(
    (targetSrc: string) => {
      const foundIdx = galleryImages.findIndex((img) => img.src === targetSrc);
      setModalIndex(foundIdx !== -1 ? foundIdx : 0);
      setModalOpen(true);
    },
    [galleryImages]
  );

  const getWhatsAppUrl = (sub?: SubProduct | null) => {
    let text = `Hello Akshardeep Engineers,\n\nI would like to inquire about:\n📌 *Product:* ${product.name}`;
    if (sub) {
      text += `\n🔹 *Model/Variant:* ${sub.name} (${sub.model || ""})`;
      if (sub.specs && sub.specs.length > 0) {
        text += `\n\n📋 *Specifications:*`;
        sub.specs.forEach((s) => {
          text += `\n  • ${s.key}: ${s.value}`;
        });
      }
    }
    text += `\n\nPlease send pricing and availability details.`;
    return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-accent selection:text-white">
      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-md">
                {product.category} Range
              </span>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                {product.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl(null)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackQuoteRequest("Minimal Hero Quote", product.name)}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Product Line Quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroVariantSlider product={product} onOpenModal={handleOpenModal} />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-10 border-b border-slate-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Engineering Overview</h2>
            <p className="text-base text-slate-700 leading-relaxed font-normal">{product.description}</p>
          </div>
        </div>
      </section>

      {/* Continuous Zero-Click Product Range */}
      {hasSubProducts && (
        <section className="py-12 bg-slate-50/60">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Available Model Range ({product.subProducts!.length} Variants)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">All variant details expanded below — no clicking required</p>
              </div>
            </div>

            <div className="space-y-6">
              {product.subProducts!.map((sub, idx) => (
                <div
                  key={sub.name + idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Variant Image Gallery */}
                  <SubProductGallery sub={sub} onOpenModal={handleOpenModal} />

                  {/* Variant Info & Specs */}
                  <VariantSpecs
                    sub={sub}
                    idx={idx}
                    getWhatsAppUrl={getWhatsAppUrl}
                    productName={product.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox / Zoom Modal */}
      <ProductImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={galleryImages}
        currentIndex={modalIndex}
        onIndexChange={setModalIndex}
      />
    </div>
  );
}
