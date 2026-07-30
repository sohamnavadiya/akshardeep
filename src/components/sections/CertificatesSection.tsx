"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES, CertificateItem } from "@/lib/constants";
import {
  FileText,
  Download,
  Eye,
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
} from "lucide-react";
import {
  trackCertificateView,
  trackCertificateDownload,
} from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const openModal = (cert: CertificateItem) => {
    setSelectedCert(cert);
    setCurrentPage(0);
    trackCertificateView(cert.title);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setCurrentPage(0);
  };

  const handleDownload = (cert: CertificateItem) => {
    trackCertificateDownload(cert.title);
  };

  return (
    <section id="certificates" className="py-20 bg-surface border-t border-border-default">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              Verified Credentials
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-text-dark tracking-tight">
            Authorisations &amp; Certificates
          </h2>
          <p className="mt-3 text-base text-text-body leading-relaxed">
            Verify our official dealership credentials, channel partner authorisations from Forbes Marshall &amp; El-O-Matic, and download our company profile.
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white border border-border-default hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group rounded-sm overflow-hidden"
            >
              {/* Document Image Thumbnail Box */}
              <div
                onClick={() => openModal(cert)}
                className="relative aspect-[3/4] bg-neutral-100 overflow-hidden cursor-pointer group-hover:opacity-95 transition-opacity"
              >
                <Image
                  src={cert.pages[0]}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-primary/95 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-sm flex items-center gap-1">
                  <Award className="w-3 h-3 text-accent" />
                  {cert.badge}
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg mb-2 transform group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    Click to Preview
                  </span>
                  {cert.pages.length > 1 && (
                    <span className="text-white/70 text-[11px] mt-1">
                      ({cert.pages.length} Pages)
                    </span>
                  )}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                    <span className="font-semibold text-accent uppercase tracking-wider text-[10px]">
                      {cert.brand}
                    </span>
                    <span className="bg-surface border border-border-default text-text-muted px-2 py-0.5 text-[10px] rounded">
                      {cert.fileSize}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-text-dark group-hover:text-primary transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-text-body leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-border-default flex items-center gap-3">
                  <button
                    onClick={() => openModal(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-primary bg-primary/5 hover:bg-primary hover:text-white border border-primary/20 transition-all rounded-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-accent hover:bg-accent/90 transition-all rounded-sm shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF ({cert.fileSize})
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] rounded-md shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-charcoal text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-[11px] text-white/60">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.pages.length > 1 && (
                    <span className="text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full">
                      Page {currentPage + 1} of {selectedCert.pages.length}
                    </span>
                  )}
                  <button
                    onClick={closeModal}
                    className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Viewport */}
              <div className="flex-1 overflow-y-auto bg-neutral-900/90 p-4 sm:p-6 flex items-center justify-center relative min-h-[400px]">
                <div className="relative max-w-full max-h-[70vh] shadow-2xl border border-white/10">
                  <Image
                    src={selectedCert.pages[currentPage]}
                    alt={`${selectedCert.title} - Page ${currentPage + 1}`}
                    width={900}
                    height={1200}
                    className="object-contain max-h-[65vh] w-auto h-auto"
                    priority
                  />
                </div>

                {/* Multi-page controls */}
                {selectedCert.pages.length > 1 && (
                  <>
                    <button
                      disabled={currentPage === 0}
                      onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/80 text-white border border-white/20 shadow-lg transition-all ${
                        currentPage === 0
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-accent hover:border-accent"
                      }`}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      disabled={currentPage === selectedCert.pages.length - 1}
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(selectedCert.pages.length - 1, p + 1)
                        )
                      }
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/80 text-white border border-white/20 shadow-lg transition-all ${
                        currentPage === selectedCert.pages.length - 1
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-accent hover:border-accent"
                      }`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 bg-white border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-text-dark">Format:</span> Official PDF Document ({selectedCert.fileSize})
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-text-dark border border-border-default hover:bg-surface transition-colors rounded-sm"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                    Open PDF in New Tab
                  </a>
                  <a
                    href={selectedCert.pdfUrl}
                    download
                    onClick={() => handleDownload(selectedCert)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2 px-5 text-xs font-bold text-white bg-accent hover:bg-accent/90 transition-colors rounded-sm shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Official PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
