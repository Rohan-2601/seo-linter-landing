import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Noise } from "@/components/ui/noise";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "seo-lint-cli – SEO Linter for Developers",
  description:
    "A lightweight, framework-agnostic SEO linter for static HTML builds and live URLs. Catch missing titles, meta descriptions, canonical tags, H1 issues, and Open Graph problems before deployment.",
  keywords: [
    "seo",
    "seo linter",
    "seo cli",
    "seo-lint-cli",
    "static site seo",
    "html seo checker",
    "seo analyzer",
    "developer seo tool",
    "open graph checker",
    "meta tags validator",
  ],
  alternates: {
    canonical: "https://seo-linter.vercel.app/",
  },
  openGraph: {
    title: "seo-lint-cli – SEO Linter for Developers",
    description:
      "Catch missing titles, meta descriptions, canonical tags, H1 issues, and Open Graph problems before deployment. Works with any framework.",
    url: "https://seo-linter.vercel.app/",
    siteName: "seo-lint-cli",
    type: "website",
    images: [
      {
        url: "https://seo-linter.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "seo-lint-cli Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "seo-lint-cli – SEO Linter for Developers",
    description:
      "A simple SEO linter that helps developers catch basic SEO issues before going live.",
    images: ["https://seo-linter.vercel.app/og-image.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-black text-white selection:bg-white/30 selection:text-black overflow-x-hidden`}
      >
        <Noise />
        <SmoothScroll>
          <ClientLayout>{children}</ClientLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}


