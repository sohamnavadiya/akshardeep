"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Award, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const achievements = [
  {
    id: "poonawalla-2016",
    image: "/about/page3_img1_437x302.png",
    alt: "Poonawalla Group Dealer Award — Best Performance New Dealer 2016",
    title: "Best Performance New Dealer",
    issuer: "Poonawalla Group of Engineering Companies",
    year: "2016",
    tag: "Dealer Award",
    accent: "primary",
    description:
      "Honoured with the Best Performance New Dealer award for outstanding sales achievement, customer service excellence, and strong commitment in the region.",
  },
  {
    id: "intervalve-cert",
    image: "/about/page3_img2_437x302.png",
    alt: "Intervalve Poonawalla Ltd. Certificate of Appreciation — Akshardeep Engineers Gujarat",
    title: "Certificate of Appreciation",
    issuer: "Intervalve Poonawalla Ltd.",
    year: "2024",
    tag: "Channel Partner",
    accent: "accent",
    description:
      "Recognised for achieving and exceeding business goals in CY 2024 for Industrial Valves, Actuators & Accessories manufactured by Intervalve Poonawalla.",
  },
  {
    id: "forbes-marshall-2018",
    image: "/about/page3_img3_437x302.png",
    alt: "Forbes Marshall Certificate of Appreciation — Highest Channel Partner Achievement FY 17-18",
    title: "Highest Channel Partner Achievement",
    issuer: "Forbes Marshall Pvt. Ltd.",
    year: "FY 17–18",
    tag: "Top Achiever",
    accent: "accent",
    description:
      "Awarded for outstanding contribution towards Highest Channel Partner Achievement in FY 17-18, demonstrating engineering expertise and market leadership.",
  },
];



const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
  }),
};

export function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<
    (typeof achievements)[0] | null
  >(null);

  const current = achievements[currentIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  }, []);

  const selectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-surface via-white to-surface relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.04]"
        style={{ background: "var(--color-accent)" }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              Recognition &amp; Awards
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
            Our Achievements
          </h2>
          <p className="mt-3 text-base text-text-body">
            Honoured by our principals for consistent excellence, performance, and outstanding partnership in industrial automation.
          </p>
        </motion.div>

        {/* Single Master Box Frame */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="relative max-w-4xl mx-auto bg-white border border-border-default shadow-xl overflow-hidden rounded-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slideable Content Container inside the Single Box */}
          <div className="relative min-h-[460px] sm:min-h-[420px] flex flex-col justify-between">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-12 w-full flex-1"
              >
                {/* Left Side: Certificate Image Showcase */}
                <div className="md:col-span-6 lg:col-span-7 relative bg-neutral-900 flex items-center justify-center p-6 min-h-[260px] sm:min-h-[340px]">
                  <div
                    className="relative w-full aspect-[4/3] max-h-[320px] cursor-pointer group"
                    onClick={() => setSelectedAchievement(current)}
                  >
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                  </div>

                  {/* Badge top-left */}
                  <div
                    className={`
                      absolute top-4 left-4 text-[9px] font-bold uppercase tracking-[0.18em]
                      px-3 py-1 text-white shadow-md
                      ${current.accent === "accent" ? "bg-accent" : "bg-primary"}
                    `}
                  >
                    {current.tag}
                  </div>

                  {/* Expand icon overlay top-right */}
                  <button
                    onClick={() => setSelectedAchievement(current)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-text-dark hover:bg-accent hover:text-white transition-colors cursor-pointer shadow-xs"
                    aria-label="Expand certificate image"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Side: Details Content */}
                <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-border-default">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent">
                        {current.issuer}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-concrete border border-border-default px-2.5 py-0.5 bg-surface">
                        {current.year}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-text-dark leading-snug mb-3">
                      {current.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-6">
                      {current.description}
                    </p>
                  </div>

                  {/* Footer inside right side */}
                  <div className="pt-4 border-t border-border-default flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-text-dark">
                        Verified Partner
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((k) => (
                        <Star key={k} className="w-3.5 h-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-scroll Progress Indicator Bar (No bottom buttons) */}
            <div className="w-full h-1 bg-surface border-t border-border-default overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white overflow-hidden shadow-2xl border border-border-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border-default bg-surface">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                    {selectedAchievement.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-text-dark">
                    {selectedAchievement.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="w-9 h-9 rounded-full bg-white border border-border-default flex items-center justify-center text-text-dark hover:bg-accent hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative w-full aspect-[4/3] bg-neutral-950 flex items-center justify-center p-4 sm:p-8">
                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 90vw, 800px"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-border-default">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary px-3 py-1">
                    {selectedAchievement.tag}
                  </span>
                  <span className="text-xs font-semibold text-text-body border border-border-default px-2.5 py-1">
                    {selectedAchievement.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="text-xs font-bold uppercase tracking-wider text-text-dark hover:text-accent transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
