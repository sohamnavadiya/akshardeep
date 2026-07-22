import { ConceptSwitcherBar } from "@/components/sections/hero-concepts/ConceptSwitcherBar";
import { HeroConcept4 } from "@/components/sections/hero-concepts/HeroConcept4";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { ProductHighlights } from "@/components/sections/ProductHighlights";

export default function Concept4Page() {
  return (
    <main>
      <ConceptSwitcherBar />
      <HeroConcept4 />
      <TrustBar />
      <AboutSnapshot />
      <SolutionsGrid />
      <ProductHighlights />
    </main>
  );
}
