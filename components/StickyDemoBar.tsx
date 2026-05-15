"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyDemoBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pointer-events-none transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="pointer-events-auto rounded-full bg-[#1C1E2A]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 px-3 py-2 flex items-center gap-2">
        <Link
          href="/live-demo"
          className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold text-zinc-200 bg-white/[0.04] border border-white/[0.06] active:scale-95 transition-transform"
        >
          ▶ Live Demo
        </Link>
        <Link
          href="/demo"
          className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-900/40 active:scale-95 transition-transform"
        >
          Book Demo →
        </Link>
      </div>
    </div>
  );
}
