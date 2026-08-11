import { ConceptSwitcherBar } from "@/components/sections/hero-concepts/ConceptSwitcherBar";
import { HeroConcept2 } from "@/components/sections/hero-concepts/HeroConcept2";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ProductHighlights } from "@/components/sections/ProductHighlights";

export default function Concept2Page() {
  return (
    <main>
      <ConceptSwitcherBar />
      <HeroConcept2 />
      <TrustBar />
      <AboutSnapshot />
      <ProductHighlights />
    </main>
  );
}
