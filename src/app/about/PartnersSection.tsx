"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const strengths = [
  "Quick delivery",
  "Reliable service support",
  "High-quality products",
  "Technical expertise",
  "Customer-focused approach",
  "Strong commitment to customer satisfaction",
];

const industries = [
  "Chemicals & Pharma",
  "Fertilizers",
  "Oil & Gas",
  "Power Plants",
  "Refineries",
  "Steel & Allied Industries",
];

export function PartnersSection() {
  return (
    <>
      {/* ── Office Photo & Company Info ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Office Photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                <Image
                  src="/about/page2_img5_1111x940.png"
                  alt="Akshardeep Engineers Office & Facility, Ankleshwar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
                  <p className="text-white font-bold text-sm">
                    Our Facility — Ankleshwar GIDC, Gujarat
                  </p>
                  <p className="text-white/60 text-xs mt-0.5">
                    2,700 Sq.Ft Land | 5,420 Sq.Ft Total Infrastructure
                  </p>
                </div>
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent/10 border-2 border-accent/30 -z-10" />
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary/10 border-2 border-primary/20 -z-10" />
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Who We Are
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight mb-5"
              >
                Precision Engineering Since 2013
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="text-base text-text-body leading-relaxed mb-6"
              >
                We at <strong>Akshardeep Engineers</strong>, established in 2013, are pleased to introduce
                ourselves as one of the innovative and successful supplier companies. As authorised dealers
                of <strong>Forbes Marshall</strong>, <strong>Intervalve</strong> & <strong>El-O-Matic</strong>,
                our unique blend of experience and expertise enables us to provide cost-effective, efficient,
                flexible and robust solutions to optimize and smooth running of our customer's business.
              </motion.p>

              {/* Two column lists */}
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                >
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">
                    Our Strengths
                  </h3>
                  <ul className="space-y-2">
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-xs text-text-body leading-snug">{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={4}
                >
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">
                    Industries Served
                  </h3>
                  <ul className="space-y-2">
                    {industries.map((ind) => (
                      <li key={ind} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-xs text-text-body leading-snug">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Authorised Channel Partners ── */}
      <section className="py-16 bg-surface border-y border-border-default">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Our Principals
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight">
              Authorised Channel Partners
            </h2>
            <p className="mt-3 text-base text-text-body max-w-xl mx-auto">
              We are the authorised dealer and service partner for these world-class brands in the region.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {COMPANY.partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-border-default hover:border-primary/40 hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center text-center group"
              >
                <div className="relative w-full h-24 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.full}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="300px"
                  />
                </div>
                <div className="h-px w-8 bg-border-default group-hover:bg-accent transition-colors duration-300 mb-4" />
                <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  {partner.full}
                </h3>
                <div className="mt-3 flex flex-col items-center gap-3">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent border border-accent/30 bg-accent/5 px-3 py-1">
                    Authorised Dealer
                  </span>
                  <a
                    href="#certificates"
                    className="text-[11px] font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1 group-hover:underline"
                  >
                    View Official Certificate &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Award Section ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  Awards & Recognition
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark tracking-tight mb-5">
                Recognized for Excellence
              </h2>
              <p className="text-base text-text-body leading-relaxed mb-6">
                Our consistent commitment to quality and performance has been recognised by our principals.
                We were honoured with the <strong>"Best Performance New Dealer" Award in 2016</strong> from
                the Poonawalla Group of Engineering Companies, recognizing our outstanding sales performance
                and customer service.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Award", value: "Best Performance New Dealer" },
                  { label: "Year", value: "2016" },
                  { label: "Awarded by", value: "Poonawalla Group of Engineering Companies" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-concrete min-w-[70px]">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-text-dark">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20" />
                <div className="relative aspect-[4/3] overflow-hidden bg-surface border border-border-default">
                  <Image
                    src="/about/page3_img1_437x302.png"
                    alt="Best Performance New Dealer Award — Poonawalla Group 2016"
                    fill
                    className="object-contain p-4"
                    sizes="400px"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-accent text-white text-[9px] font-bold uppercase tracking-[0.15em] px-3 py-1.5">
                  Award 2016
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
