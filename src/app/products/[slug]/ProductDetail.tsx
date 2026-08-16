"use client";

import type { Product } from "@/lib/constants";
import { ProductOption1Blueprint } from "@/components/products/ProductOption1Blueprint";

type Props = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetail({ product, relatedProducts }: Props) {
  return (
    <div className="w-full">
      <ProductOption1Blueprint product={product} relatedProducts={relatedProducts} />
    </div>
  );
}

