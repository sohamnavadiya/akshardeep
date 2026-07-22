import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/constants";
import { ProductDetail } from "./ProductDetail";
import { ContactCTA } from "@/components/sections/ContactCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== slug && (p.category === product.category || Math.random() > 0.5)
  ).slice(0, 3);

  return (
    <>
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <ContactCTA />
    </>
  );
}
