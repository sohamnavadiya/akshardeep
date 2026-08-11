"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem("akshardeep_cookie_consent");
    if (!consent) {
      // Small timeout for smooth slide-in animation after page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("akshardeep_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("akshardeep_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent Banner"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-lg z-50 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="bg-charcoal/95 backdrop-blur-md border border-white/15 text-white p-5 rounded-2xl shadow-2xl relative">
        <button
          onClick={handleDecline}
          aria-label="Close cookie consent"
          className="absolute top-3 right-3 text-slate hover:text-white p-1 transition-colors rounded-lg hover:bg-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 mb-3">
          <div className="p-2.5 bg-accent/20 border border-accent/30 rounded-xl text-accent shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Cookie Preferences
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3" /> Privacy Protected
              </span>
            </h3>
            <p className="text-xs text-text-light-muted mt-1 leading-relaxed">
              We use cookies to improve your browsing experience, analyze site traffic, and support our service inquiries. You can manage your choices below. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-accent underline underline-offset-2 hover:text-white font-medium"
              >
                Privacy Policy
              </Link>{" "}
              for more details.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2 border-t border-white/10">
          <button
            onClick={handleDecline}
            className="px-3.5 py-1.5 text-xs font-semibold text-text-light-muted hover:text-white hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg shadow-sm transition-all transform active:scale-95"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
