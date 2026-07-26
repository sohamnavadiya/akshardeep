"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, MessageSquare } from "lucide-react";
import { trackFormSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { COMPANY } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const company = (formData.get("company") as string) || "";
    const product = (formData.get("product") as string) || "General Enquiry";
    const message = (formData.get("message") as string) || "";

    trackFormSubmission("Contact Page Form", product);
    trackWhatsAppClick("Contact Form Submission", product);

    const formattedText = `*New Website Enquiry* 📩

👤 *Name:* ${name}
✉️ *Email:* ${email}
📞 *Phone:* ${phone || "Not provided"}
🏢 *Company:* ${company || "Not provided"}
📦 *Product Interest:* ${product}

💬 *Requirements:*
${message}`;

    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(formattedText)}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setStatus("success");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 600);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-border-default p-10 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-dark">Redirecting to WhatsApp...</h3>
        <p className="mt-2 text-sm text-text-body">
          Your enquiry has been prepared. If WhatsApp didn't open automatically, click the button below to send your enquiry directly to +91 94294 83636.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 text-sm rounded transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs text-text-body underline hover:text-text-dark transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="bg-white border border-border-default p-8"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Full Name" id="name" required placeholder="Your name" />
        <FormField label="Email Address" id="email" type="email" required placeholder="you@company.com" />
        <FormField label="Phone Number" id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
        <FormField label="Company Name" id="company" placeholder="Your company" />
      </div>

      <div className="mt-5">
        <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-concrete mb-2">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="w-full px-4 py-3 border border-border-default bg-surface focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm text-text-body"
        >
          <option value="">Select a product category</option>
          <option value="Butterfly Valves">Butterfly Valves</option>
          <option value="Ball Valves">Ball Valves</option>
          <option value="Gate / Globe / Check Valves">Gate / Globe / Check Valves</option>
          <option value="Pneumatic Actuators">Pneumatic Actuators</option>
          <option value="Valve Automation">Valve Automation</option>
          <option value="Instrumentation">Instrumentation</option>
          <option value="Valve Repair / Services">Valve Repair / Services</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-concrete mb-2">
          Your Requirements *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-border-default bg-surface focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
          placeholder="Describe your requirements (size, pressure, material, quantity, etc.)"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </motion.form>
  );
}

function FormField({
  label,
  id,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-concrete mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-3 border border-border-default bg-surface focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
