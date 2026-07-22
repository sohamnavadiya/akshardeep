"use client";

import { useEffect, useState, useRef } from "react";
import { Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function FloatingContactButtons() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Hide when scrolling down more than 8px (after passing 80px from top)
      if (delta > 8 && currentY > 80) {
        setVisible(false);
      }
      // Show when scrolling up
      else if (delta < -4) {
        setVisible(true);
      }

      lastScrollY.current = currentY;

      // Auto-show 600ms after scrolling stops
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setVisible(true);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const waHref = `https://wa.me/${COMPANY.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.`;
  const callHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${COMPANY.email}?subject=Product%20Enquiry&body=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.`;

  const visibilityClass = visible
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-6 pointer-events-none";

  return (
    <>
      {/* ── DESKTOP: vertical stack, bottom-right ─────────────────────── */}
      <div
        role="group"
        aria-label="Quick contact"
        className={[
          "hidden sm:flex flex-col items-center gap-3",
          "fixed bottom-6 right-5 z-50",
          "transition-all duration-500 ease-in-out",
          visibilityClass,
        ].join(" ")}
      >
        {/* WhatsApp */}
        <a
          id="float-whatsapp-desktop"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative w-[52px] h-[52px] rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <WaIcon />
          <Tooltip label="WhatsApp" />
        </a>

        {/* Call */}
        <a
          id="float-call-desktop"
          href={callHref}
          aria-label="Call Akshardeep Engineers"
          className="group relative w-[52px] h-[52px] rounded-full bg-[#0057FF] hover:bg-[#0046D4] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,87,255,0.4)] transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Phone className="w-5 h-5" strokeWidth={2.2} />
          <Tooltip label="Call Us" />
        </a>

        {/* Email */}
        <a
          id="float-email-desktop"
          href={mailHref}
          aria-label="Email Akshardeep Engineers"
          className="group relative w-[52px] h-[52px] rounded-full bg-[#E05C1A] hover:bg-[#C44F14] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(224,92,26,0.4)] transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Mail className="w-5 h-5" strokeWidth={2.2} />
          <Tooltip label="Email Us" />
        </a>
      </div>

      {/* ── MOBILE: always-visible vertical stack, bottom-right ─────────── */}
      <div
        role="group"
        aria-label="Quick contact"
        className={[
          "sm:hidden",
          "fixed bottom-5 right-4 z-50",
          "flex flex-col items-center gap-3",
          "transition-all duration-500 ease-in-out",
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none",
        ].join(" ")}
      >
        {/* WhatsApp */}
        <a
          id="float-whatsapp-mobile"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-[48px] h-[48px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.45)] active:scale-95 transition-transform"
        >
          <WaIcon />
        </a>

        {/* Call */}
        <a
          id="float-call-mobile"
          href={callHref}
          aria-label="Call Akshardeep Engineers"
          className="w-[48px] h-[48px] rounded-full bg-[#0057FF] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,87,255,0.4)] active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" strokeWidth={2.2} />
        </a>

        {/* Email */}
        <a
          id="float-email-mobile"
          href={mailHref}
          aria-label="Email Akshardeep Engineers"
          className="w-[48px] h-[48px] rounded-full bg-[#E05C1A] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(224,92,26,0.4)] active:scale-95 transition-transform"
        >
          <Mail className="w-5 h-5" strokeWidth={2.2} />
        </a>
      </div>
    </>
  );
}

/* ── Small helpers ──────────────────────────────────────────────────────── */

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}



function Tooltip({ label }: { label: string }) {
  return (
    <span
      className="
        absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2
        bg-gray-900 text-white text-xs font-medium
        px-2.5 py-1 rounded-md whitespace-nowrap
        opacity-0 group-hover:opacity-100
        pointer-events-none
        transition-opacity duration-150
        after:content-[''] after:absolute after:left-full after:top-1/2
        after:-translate-y-1/2 after:border-4 after:border-transparent
        after:border-l-gray-900
      "
    >
      {label}
    </span>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow">
      {label}
    </span>
  );
}
