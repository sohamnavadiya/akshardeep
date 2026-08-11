import { ConceptSwitcherBar } from "@/components/sections/hero-concepts/ConceptSwitcherBar";
import { HeroConcept3 } from "@/components/sections/hero-concepts/HeroConcept3";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { ProductHighlights } from "@/components/sections/ProductHighlights";

export default function Concept3Page() {
  return (
    <main>
      <ConceptSwitcherBar />
      <HeroConcept3 />
      <TrustBar />
      <AboutSnapshot />
      <ProductHighlights />
    </main>
  );
}
