"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Product" },
  { href: "/live-demo", label: "Live Demo", highlight: true },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0E0F1A]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Logo size="md" />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          <nav className="flex items-center gap-7 text-sm font-medium text-zinc-300">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative transition-colors flex items-center gap-1.5 ${
                  l.highlight
                    ? "text-emerald-300 hover:text-emerald-200"
                    : "hover:text-white"
                }`}
              >
                {l.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://one.aipathcrm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Sign in
            </a>
            <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Book a Demo
            </Link>
          </div>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-5 rounded-2xl border border-white/10 bg-[#161823]/95 backdrop-blur-xl p-5 animate-slide-up">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="block py-2 text-zinc-200 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="https://one.aipathcrm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2.5 !text-sm"
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>
            <Link href="/contact" className="btn-primary !py-2.5 !text-sm">
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
