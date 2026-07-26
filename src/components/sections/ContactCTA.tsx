"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import {
  trackPhoneClick,
  trackEmailClick,
  trackWhatsAppClick,
} from "@/lib/analytics";

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Technical grid */}
      <div className="absolute inset-0 bg-blueprint opacity-20" />

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Get in Touch
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Discuss Your
              <br />
              Requirements
            </h2>
            <p className="mt-4 text-base text-text-light-muted max-w-lg leading-relaxed">
              Whether you need valves, actuators, instrumentation or complete
              automation solutions — our engineering team is ready to deliver quality
              products at competitive prices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Send Enquiry
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("ContactCTA WhatsApp Button")}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white/5"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right — contact card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="border border-white/10 bg-white/[0.03] p-8 space-y-5">
              <ContactRow
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                items={[
                  {
                    text: COMPANY.phone,
                    href: `tel:${COMPANY.phone}`,
                    onClick: () => trackPhoneClick("ContactCTA Primary Phone", COMPANY.phone),
                  },
                  {
                    text: COMPANY.phone2,
                    href: `tel:${COMPANY.phone2}`,
                    onClick: () => trackPhoneClick("ContactCTA Secondary Phone", COMPANY.phone2),
                  },
                ]}
              />
              <ContactRow
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                items={[
                  {
                    text: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                    onClick: () => trackEmailClick("ContactCTA Email", COMPANY.email),
                  },
                ]}
              />
              <ContactRow
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                items={[
                  {
                    text: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
                  },
                  {
                    text: `${COMPANY.address.city}, ${COMPANY.address.state}`,
                  },
                ]}
              />
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-light-muted">
                  Business Hours
                </p>
                <p className="text-sm text-white mt-1">Mon – Sat: 9:00 AM – 6:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: { text: string; href?: string; onClick?: () => void }[];
}) {
  return (
    <div className="flex gap-4">
      <div className="text-accent mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-light-muted mb-1">
          {label}
        </p>
        {items.map((item) =>
          item.href ? (
            <a
              key={item.text}
              href={item.href}
              onClick={item.onClick}
              className="text-sm text-white hover:text-accent transition-colors block"
            >
              {item.text}
            </a>
          ) : (
            <p key={item.text} className="text-sm text-white">
              {item.text}
            </p>
          )
        )}
      </div>
    </div>
  );
}

