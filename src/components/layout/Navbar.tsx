"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-charcoal text-text-light-muted text-xs">
        <div className="max-w-[1340px] mx-auto px-6 py-2 flex items-center justify-between">
          <span>Authorised Channel Partner — Forbes Marshall | Intervalve | El-O-Matic</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200 border-b",
          isScrolled
            ? "bg-white border-border-default shadow-sm"
            : "bg-white border-border-subtle"
        )}
      >
        <nav className="max-w-[1340px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">A</span>
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-primary block leading-tight">
                  AKSHARDEEP
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                  ENGINEERS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in link ? setActiveDropdown(link.label) : undefined
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-semibold uppercase tracking-wide text-steel hover:text-accent transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {"children" in link && (
                    <ChevronDown className="w-3 h-3 opacity-50" />
                  )}
                </Link>

                {"children" in link && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-0 w-60 bg-white border border-border-default shadow-lg py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2 text-sm text-steel hover:text-accent hover:bg-surface transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border-default flex items-center justify-between">
                <span className="font-extrabold text-primary tracking-tight">AKSHARDEEP</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5 text-steel" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 text-sm font-semibold text-steel hover:text-accent hover:bg-surface border-b border-border-subtle transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-border-default">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-accent text-white text-center py-3 text-sm font-bold uppercase tracking-wider"
                >
                  Request Quote
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="mt-3 flex items-center justify-center gap-2 text-sm text-steel">
                  <Phone className="w-4 h-4" /> {COMPANY.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
