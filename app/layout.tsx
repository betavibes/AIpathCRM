import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StickyDemoBar from "@/components/StickyDemoBar";

// Google Analytics 4 measurement ID
const GA_ID = "G-Q43K20QZ8D";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIpath CRM — The AI-First Business Operating System",
  description:
    "Run your entire business with AI. AIpath unifies CRM, ERP, automation, and AI agents into one intelligent operating system for modern teams.",
  metadataBase: new URL("https://aipathcrm.com"),
  openGraph: {
    title: "AIpath CRM — The AI-First Business Operating System",
    description:
      "CRM, ERP, automation, and AI agents — unified into one intelligent platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-[#0E0F1A] text-zinc-100 overflow-x-hidden`}
      >
        {children}
        <StickyDemoBar />

        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
