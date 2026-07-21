import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StickyDemoBar from "@/components/StickyDemoBar";

// Google Analytics 4 measurement ID
const GA_ID = "G-Q43K20QZ8D";

// Tawk.to live-chat property/widget id (same widget as aipathdiginext.com)
const TAWK_ID =
  process.env.NEXT_PUBLIC_TAWK_ID || "6871f58fb0c9561915a88a4e/1ivuieebp";

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

        {/* Tawk.to live chat (bottom-left, same widget as aipathdiginext.com) */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            window.Tawk_API.customStyle = {
              visibility: {
                desktop: { position: 'bl', xOffset: 24, yOffset: 24 },
                mobile:  { position: 'bl', xOffset: 12, yOffset: 12 }
              }
            };
            (function () {
              var s1 = document.createElement('script');
              var s0 = document.getElementsByTagName('script')[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/${TAWK_ID}';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
