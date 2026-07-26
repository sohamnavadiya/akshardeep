import React from "react";
import { COMPANY } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.akshardeep.com/#organization",
    name: COMPANY.name,
    url: "https://www.akshardeep.com",
    logo: "https://www.akshardeep.com/logo.png",
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    sameAs: [COMPANY.social.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: "Gujarat",
      postalCode: "393002",
      addressCountry: "IN",
    },
    brand: COMPANY.partners.map((p) => ({
      "@type": "Brand",
      name: p.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.akshardeep.com/#localbusiness",
    name: COMPANY.name,
    image: "https://www.akshardeep.com/logo.png",
    url: "https://www.akshardeep.com",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: "Ankleshwar GIDC",
      addressRegion: "Gujarat",
      postalCode: "393002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.6264",
      longitude: "73.0152",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  category,
  slug,
  heroImage,
}: {
  name: string;
  description: string;
  category: string;
  slug: string;
  heroImage: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    category: category,
    image: heroImage.startsWith("http")
      ? heroImage
      : `https://www.akshardeep.com${heroImage}`,
    url: `https://www.akshardeep.com/products/${slug}`,
    brand: {
      "@type": "Brand",
      name: "Akshardeep Engineers",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Akshardeep Engineers",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://www.akshardeep.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
