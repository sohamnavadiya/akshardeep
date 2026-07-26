import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/shared/FloatingContactButtons";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akshardeep.com"),
  title: {
    default: "Akshardeep Engineers — Industrial Valves, Automation & Instrumentation",
    template: "%s | Akshardeep Engineers Ankleshwar",
  },
  description:
    "Authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic. Industrial valves, valve automation, process instrumentation & precision monitoring devices in Ankleshwar, Gujarat.",
  keywords: [
    "industrial valves",
    "butterfly valves",
    "ball valves",
    "gate valves",
    "valve automation",
    "pneumatic actuators",
    "Forbes Marshall dealer",
    "Intervalve dealer",
    "El-O-Matic distributor",
    "process instrumentation",
    "pressure gauges",
    "flow meters",
    "control valves",
    "Ankleshwar GIDC",
    "Gujarat industrial supplier",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akshardeep Engineers — Industrial Valves, Automation & Instrumentation",
    description:
      "Authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic. Flow control equipment & process instrumentation in Ankleshwar, Gujarat.",
    url: "https://www.akshardeep.com",
    siteName: "Akshardeep Engineers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Akshardeep Engineers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshardeep Engineers — Industrial Valves & Process Automation",
    description:
      "Authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic in Ankleshwar GIDC, Gujarat.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2JG47TB45V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2JG47TB45V');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
