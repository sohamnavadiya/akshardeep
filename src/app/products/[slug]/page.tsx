import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/constants";
import { ProductDetail } from "./ProductDetail";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

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
  const canonicalUrl = `https://www.akshardeep.com/products/${slug}`;
  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | Akshardeep Engineers`,
      description: product.description,
      url: canonicalUrl,
      images: [
        {
          url: product.heroImage,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== slug && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.slug !== slug && p.category !== product.category))
    .slice(0, 3);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        category={product.category}
        slug={product.slug}
        heroImage={product.heroImage}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <ContactCTA />
    </>
  );
}
