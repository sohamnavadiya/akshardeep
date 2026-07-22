"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="space-y-6"
    >
      {/* Contact Details */}
      <div className="bg-white border border-border-default p-6 space-y-5">
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-concrete">
          Contact Information
        </h3>

        <div className="space-y-4">
          <ContactItem
            icon={<Phone className="w-4 h-4" />}
            primary={COMPANY.phone}
            secondary={COMPANY.phone2}
            href={`tel:${COMPANY.phone}`}
          />
          <ContactItem
            icon={<Mail className="w-4 h-4" />}
            primary={COMPANY.email}
            secondary="Email enquiries"
            href={`mailto:${COMPANY.email}`}
          />
          <ContactItem
            icon={<MapPin className="w-4 h-4" />}
            primary={`${COMPANY.address.line1}`}
            secondary={`${COMPANY.address.line2}, ${COMPANY.address.city}, ${COMPANY.address.state}`}
          />
          <ContactItem
            icon={<Clock className="w-4 h-4" />}
            primary="Mon – Sat: 9:00 AM – 6:30 PM"
            secondary="Indian Standard Time (IST)"
          />
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-border-default hover:border-[#25D366] p-5 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#25D366] flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-text-dark group-hover:text-[#25D366] transition-colors">
              WhatsApp
            </p>
            <p className="text-xs text-text-muted">
              Quick connect for instant response
            </p>
          </div>
        </div>
      </a>

      {/* Map placeholder */}
      <div className="bg-white border border-border-default overflow-hidden">
        <div className="aspect-[4/3] bg-surface flex items-center justify-center">
          <div className="text-center text-text-muted">
            <MapPin className="w-6 h-6 mx-auto mb-2 opacity-40" />
            <p className="text-xs font-semibold">Ankleshwar GIDC, Gujarat 393002</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ContactItem({
  icon,
  primary,
  secondary,
  href,
}: {
  icon: React.ReactNode;
  primary: string;
  secondary: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-start gap-3 group"
    >
      <div className="w-8 h-8 bg-surface border border-border-default flex items-center justify-center shrink-0 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-text-dark group-hover:text-accent transition-colors">
          {primary}
        </p>
        <p className="text-xs text-text-muted">{secondary}</p>
      </div>
    </Wrapper>
  );
}
