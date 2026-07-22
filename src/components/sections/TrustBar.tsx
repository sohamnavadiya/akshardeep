"use client";

import { COMPANY } from "@/lib/constants";

export function TrustBar() {
  const allBrands = [
    ...COMPANY.partners.map((p) => p.name),
    ...COMPANY.additionalBrands,
  ];

  return (
    <section className="border-b border-border-default bg-white py-6">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-concrete whitespace-nowrap shrink-0">
            Trusted Brands
          </span>
          <div className="h-6 w-px bg-border-default shrink-0" />
          <div className="flex items-center gap-8">
            {allBrands.map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold text-steel/60 hover:text-steel whitespace-nowrap transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
