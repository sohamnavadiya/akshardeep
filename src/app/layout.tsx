import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Akshardeep Engineers — Industrial Valves, Automation & Instrumentation",
    template: "%s | Akshardeep Engineers",
  },
  description:
    "Authorised channel partner of Forbes Marshall, Intervalve & El-O-Matic. Industrial valves, valve automation, process instrumentation & precision monitoring devices. Ankleshwar, Gujarat.",
  keywords: [
    "industrial valves",
    "butterfly valves",
    "ball valves",
    "gate valves",
    "valve automation",
    "pneumatic actuators",
    "Forbes Marshall dealer",
    "Intervalve dealer",
    "El-O-Matic",
    "process instrumentation",
    "pressure gauges",
    "flow meters",
    "control valves",
    "Ankleshwar",
    "Gujarat",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Akshardeep Engineers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
