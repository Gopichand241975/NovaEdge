import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NovaEdge Digital — Premium Web Design & Development Agency",
    template: "%s | NovaEdge Digital",
  },
  description:
    "NovaEdge Digital is a premium web design and development agency. We build modern websites, e-commerce stores, and digital experiences that help businesses grow.",
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "e-commerce development",
    "SEO optimization",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "NovaEdge Digital" }],
  creator: "NovaEdge Digital",
  metadataBase: new URL("https://novaedgedigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaedgedigital.com",
    title: "NovaEdge Digital — Premium Web Design & Development Agency",
    description:
      "We build modern websites, powerful digital experiences, and smart solutions designed to help businesses grow.",
    siteName: "NovaEdge Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaEdge Digital — Premium Web Design & Development Agency",
    description:
      "We build modern websites and digital experiences that help businesses grow.",
    creator: "@novaedgedigital",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#030712] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
