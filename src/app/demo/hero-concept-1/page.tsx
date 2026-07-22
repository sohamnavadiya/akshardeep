import { ConceptSwitcherBar } from "@/components/sections/hero-concepts/ConceptSwitcherBar";
import { HeroConcept1 } from "@/components/sections/hero-concepts/HeroConcept1";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { ProductHighlights } from "@/components/sections/ProductHighlights";

export default function Concept1Page() {
  return (
    <main>
      <ConceptSwitcherBar />
      <HeroConcept1 />
      <TrustBar />
      <AboutSnapshot />
      <SolutionsGrid />
      <ProductHighlights />
    </main>
  );
}
