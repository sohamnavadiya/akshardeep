"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  subtitle?: string;
  model?: string;
  category?: string;
}

interface ProductImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
}

const ZOOM_STEPS = [1, 1.5, 2, 2.5, 3];

export function ProductImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}: ProductImageModalProps) {
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const currentPanRef = useRef({ x: 0, y: 0 });
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Sync index with prop
  useEffect(() => {
    setInternalIndex(currentIndex);
  }, [currentIndex]);

  const activeIndex = onIndexChange ? currentIndex : internalIndex;

  const setActiveIndex = useCallback(
    (idx: number) => {
      const validIndex = (idx + images.length) % images.length;
      if (onIndexChange) {
        onIndexChange(validIndex);
      } else {
        setInternalIndex(validIndex);
      }
      // Reset zoom on slide change
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
      currentPanRef.current = { x: 0, y: 0 };
    },
    [images.length, onIndexChange]
  );

  const handleNext = useCallback(() => {
    setActiveIndex(activeIndex + 1);
  }, [activeIndex, setActiveIndex]);

  const handlePrev = useCallback(() => {
    setActiveIndex(activeIndex - 1);
  }, [activeIndex, setActiveIndex]);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    currentPanRef.current = { x: 0, y: 0 };
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => {
      const currentIdx = ZOOM_STEPS.findIndex((s) => s >= prev);
      if (currentIdx !== -1 && currentIdx < ZOOM_STEPS.length - 1) {
        return ZOOM_STEPS[currentIdx + 1];
      }
      return prev < 3 ? Math.min(3, +(prev + 0.5).toFixed(1)) : prev;
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const currentIdx = ZOOM_STEPS.slice().reverse().findIndex((s) => s <= prev);
      if (currentIdx !== -1 && currentIdx < ZOOM_STEPS.length - 1) {
        return ZOOM_STEPS.slice().reverse()[currentIdx + 1];
      }
      return prev > 1 ? Math.max(1, +(prev - 0.5).toFixed(1)) : prev;
    });
    if (zoomLevel <= 1.5) {
      setPanPosition({ x: 0, y: 0 });
      currentPanRef.current = { x: 0, y: 0 };
    }
  }, [zoomLevel]);

  // Toggle zoom on image click
  const handleImageClick = () => {
    if (isDragging) return;
    if (zoomLevel === 1) {
      setZoomLevel(2);
    } else {
      resetZoom();
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "0":
        case "r":
        case "R":
          resetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev, handleZoomIn, handleZoomOut, resetZoom]);

  // Keep active thumbnail in view
  useEffect(() => {
    if (!thumbnailsRef.current || !isOpen) return;
    const activeThumb = thumbnailsRef.current.children[activeIndex] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex, isOpen]);

  // Pointer drag events for panning when zoomed
  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoomLevel <= 1) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
    const maxBound = (zoomLevel - 1) * 350;
    const boundedX = Math.max(-maxBound, Math.min(maxBound, newX));
    const boundedY = Math.max(-maxBound, Math.min(maxBound, newY));

    const nextPos = { x: boundedX, y: boundedY };
    setPanPosition(nextPos);
    currentPanRef.current = nextPos;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      setTimeout(() => setIsDragging(false), 50);
    }
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col backdrop-blur-md select-none"
        style={{ backgroundColor: "rgba(10, 15, 26, 0.95)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget && zoomLevel === 1) {
            onClose();
          }
        }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-6 py-3 z-30 shadow-md"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Left info: Title & Model */}
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <div className="truncate">
              <h2 className="text-sm sm:text-base font-bold text-white truncate">
                {currentImage.title}
              </h2>
              {currentImage.model && (
                <p className="text-xs font-mono text-slate-300 truncate">
                  Model: {currentImage.model}
                </p>
              )}
            </div>
          </div>

          {/* Center / Counter & Zoom indicators */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-200 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              {activeIndex + 1} / {images.length}
            </span>
            <span className="text-xs font-semibold text-slate-200 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          {/* Right controls: Zoom buttons & Close */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15 mr-1">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                title="Zoom out (-)"
                className="p-1.5 text-slate-200 hover:text-white hover:bg-white/20 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={resetZoom}
                title="Reset zoom (0)"
                className="px-2 py-1 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/20 rounded transition-colors cursor-pointer"
                aria-label="Reset zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 3}
                title="Zoom in (+)"
                className="p-1.5 text-slate-200 hover:text-white hover:bg-white/20 rounded disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close modal (Esc)"
              className="p-2 text-slate-200 hover:text-white hover:bg-rose-600 rounded-lg transition-colors cursor-pointer border border-white/15 bg-white/5"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main image viewer area */}
        <div
          className="relative flex-1 w-full flex items-center justify-center p-3 sm:p-6 overflow-hidden touch-none"
          onClick={(e) => {
            if (e.target === e.currentTarget && zoomLevel === 1) {
              onClose();
            }
          }}
        >
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              title="Previous image (←)"
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-accent text-white border border-white/25 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              title="Next image (→)"
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-accent text-white border border-white/25 shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Image Container with high visibility card */}
          <div
            className={`relative flex items-center justify-center transition-all ${
              zoomLevel > 1
                ? isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : "cursor-zoom-in"
            }`}
            style={{
              maxWidth: "92vw",
              maxHeight: "calc(100vh - 200px)",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onClick={handleImageClick}
          >
            <motion.div
              key={currentImage.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: zoomLevel,
                x: panPosition.x,
                y: panPosition.y,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: isDragging ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="relative flex items-center justify-center"
            >
              {/* Elevated card frame ensuring all industrial valve photos and drawings pop with high contrast */}
              <div className="relative p-3 sm:p-5 rounded-2xl bg-white shadow-2xl border border-white/20 flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  style={{
                    maxHeight: "calc(100vh - 270px)",
                    maxWidth: "min(86vw, 1000px)",
                  }}
                  className="w-auto h-auto object-contain drop-shadow-md select-none pointer-events-none rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Helper Tip */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <span className="text-[11px] font-medium text-slate-200 bg-black/70 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-full shadow-lg">
              {zoomLevel === 1
                ? "Click image to zoom • Use arrows to navigate"
                : "Drag to pan • Click to reset zoom"}
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Strip at Bottom */}
        <div
          className="px-4 py-3 z-30 shadow-lg"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.96)",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold text-white">
                All Product Variants & Views ({images.length})
              </span>
              <span className="text-[11px] text-slate-400">
                Click any thumbnail to preview
              </span>
            </div>

            <div
              ref={thumbnailsRef}
              className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5"
            >
              {images.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={`${item.src}-${idx}`}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden p-1 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-2 border-accent ring-2 ring-accent/60 scale-105 shadow-lg bg-white"
                        : "border border-white/20 bg-white/90 hover:bg-white opacity-80 hover:opacity-100 hover:scale-102"
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    {item.model && (
                      <span className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[8px] font-mono text-white text-center py-0.5 px-1 truncate">
                        {item.model}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
