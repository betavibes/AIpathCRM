import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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
  title: "AIpath CRM — CRM. ERP. AI. Unified.",
  description: "AIpath CRM is an AI-first business operating system that unifies CRM, ERP, mobile, and messaging into one intelligent SaaS platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-[#0B0C15] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
