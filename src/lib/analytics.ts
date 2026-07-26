"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export interface TrackEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Low-level event tracking helper
 */
export function trackEvent({
  action,
  category,
  label,
  value,
  ...customParams
}: TrackEventParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...customParams,
    });
  }
}

/**
 * High-level helpers for customer behavior tracking
 */

// 1. WhatsApp Clicks
export function trackWhatsAppClick(location: string, details?: string) {
  trackEvent({
    action: "click_whatsapp",
    category: "Contact",
    label: details ? `${location} - ${details}` : location,
  });
}

// 2. Phone Call Clicks
export function trackPhoneClick(location: string, phoneNumber?: string) {
  trackEvent({
    action: "click_phone",
    category: "Contact",
    label: phoneNumber ? `${location} - ${phoneNumber}` : location,
  });
}

// 3. Email Clicks
export function trackEmailClick(location: string, email?: string) {
  trackEvent({
    action: "click_email",
    category: "Contact",
    label: email ? `${location} - ${email}` : location,
  });
}

// 4. Request Quote Button Clicks
export function trackQuoteRequest(source: string, productName?: string) {
  trackEvent({
    action: "click_request_quote",
    category: "Lead Generation",
    label: productName ? `${source} - ${productName}` : source,
  });
}

// 5. Contact / Enquiry Form Submissions
export function trackFormSubmission(formName: string, productCategory?: string) {
  trackEvent({
    action: "submit_enquiry_form",
    category: "Lead Generation",
    label: productCategory ? `${formName} - ${productCategory}` : formName,
  });
}

// 6. Product Item View / Clicks
export function trackProductClick(productName: string, productCategory?: string) {
  trackEvent({
    action: "select_content",
    category: "Product",
    content_type: "product",
    item_id: productName,
    label: productCategory ? `${productCategory} - ${productName}` : productName,
  });
}

// 7. Navigation & Link Clicks
export function trackNavClick(linkName: string, destination: string) {
  trackEvent({
    action: "navigation_click",
    category: "Navigation",
    label: `${linkName} -> ${destination}`,
  });
}
