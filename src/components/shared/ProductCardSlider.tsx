"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SubProduct } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductCardSliderProps {
  images: string[];
  productName: string;
  category?: string;
  subProducts?: SubProduct[];
  className?: string;
}

export function ProductCardSlider({
  images,
  productName,
  category,
  subProducts,
  className,
}: ProductCardSliderProps) {
  // Ensure we have a valid non-empty list of images
  const imageList = images && images.length > 0 ? images : ["/logo.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Derive title for current slide if matching subProduct exists
  const currentSubProduct =
    subProducts && subProducts[currentIndex - 1]
      ? subProducts[currentIndex - 1]
      : subProducts && subProducts[currentIndex]
      ? subProducts[currentIndex]
      : null;

  const slideTitle =
    currentIndex === 0
      ? productName
      : currentSubProduct
      ? currentSubProduct.name
      : `${productName} Variant ${currentIndex + 1}`;

  const handlePrev = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch gestures support
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 40;

    if (isSwipe) {
      e.stopPropagation();
      if (distance > 0) {
        // Swiped left -> Next image
        setDirection(1);
        setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
      } else {
        // Swiped right -> Prev image
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div
      className={cn(
        "group/slider relative w-full aspect-[4/3] rounded-none overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-border-default flex items-center justify-center p-4 select-none",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      {/* Top Left Category Badge */}
      {category && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] bg-primary/90 text-white px-2 py-1 backdrop-blur-sm shadow-sm rounded-none">
            {category}
          </span>
        </div>
      )}

      {/* Main Image Animation */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex items-center justify-center p-1"
        >
          <div className="relative w-full h-full">
            <Image
              src={imageList[currentIndex]}
              alt={`${productName} image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-contain drop-shadow-md group-hover/card:scale-105 transition-transform duration-500 ease-out"
              priority={currentIndex === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top Right Counter Badge */}
      {imageList.length > 1 && (
        <div className="absolute top-2.5 right-2.5 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-none flex items-center gap-1 shadow-sm border border-white/10">
          <Images className="w-3 h-3 text-accent" />
          <span>
            {currentIndex + 1}/{imageList.length}
          </span>
        </div>
      )}

      {/* Bottom Left Model/Variant Label */}
      <div className="absolute bottom-2.5 left-2.5 z-10 max-w-[65%] bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-medium px-2 py-0.5 rounded-none truncate shadow-sm border border-slate-200/80">
        {slideTitle}
      </div>

      {/* Slider Controls */}
      {imageList.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-none bg-white/95 text-slate-800 shadow-md backdrop-blur-sm border border-slate-200/80 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 hover:scale-105 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-none bg-white/95 text-slate-800 shadow-md backdrop-blur-sm border border-slate-200/80 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover/slider:opacity-100 hover:scale-105 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-2 right-2.5 z-20 flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-md px-2 py-1 rounded-none border border-white/10">
            {imageList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleDotClick(e, idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-none transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-3.5 bg-accent"
                    : "w-1.5 bg-white/50 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
