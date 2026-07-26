"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV_LINKS, PRODUCTS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-charcoal text-text-light-muted">
      {/* Main footer */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Akshardeep Engineers Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-tight">
                  AKSHARDEEP
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
                  ENGINEERS
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-text-light-muted max-w-xs mb-6">
              Authorised channel partner of Forbes Marshall, Intervalve &amp; El-O-Matic.
              Complete industrial flow control solutions since 2013.
            </p>
            <div className="space-y-2">
              {COMPANY.partners.map((p) => (
                <div key={p.name} className="text-xs text-slate">{p.full}</div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Products
            </h4>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products#${p.slug}`}
                    className="text-sm text-text-light-muted hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Company
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm">
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city}, {COMPANY.address.state}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  onClick={() => trackPhoneClick("Footer Phone 1", COMPANY.phone)}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone2}`}
                  onClick={() => trackPhoneClick("Footer Phone 2", COMPANY.phone2)}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  {COMPANY.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  onClick={() => trackEmailClick("Footer Email", COMPANY.email)}
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate">
            © {new Date().getFullYear()} Akshardeep Engineers. All Rights Reserved.
          </p>
          <p className="text-xs text-slate">
            Ankleshwar GIDC, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
