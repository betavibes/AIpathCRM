"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SalesDemo from "@/components/showcase/SalesDemo";
import OperationsDemo from "@/components/showcase/OperationsDemo";
import WhatsAppAIDemo from "@/components/showcase/WhatsAppAIDemo";
import AttendanceDemo from "@/components/showcase/AttendanceDemo";
import BusinessOneDemo from "@/components/showcase/BusinessOneDemo";
import GetStartedDemo from "@/components/showcase/GetStartedDemo";

type Tab = {
  id: string;
  label: string;
  short: string;
  icon: string;
  tagline: string;
  blurb: string;
  Component: () => React.ReactNode;
  color: string;
};

const tabs: Tab[] = [
  {
    id: "quickstart",
    label: "Quick Start",
    short: "Start",
    icon: "✦",
    tagline: "The CRM that gets you started fast.",
    blurb:
      "Everything you need to get started — set up around how your business actually works.",
    Component: GetStartedDemo,
    color: "blue",
  },
  {
    id: "crm",
    label: "CRM · Sales",
    short: "CRM",
    icon: "📈",
    tagline: "Pipeline that closes itself.",
    blurb:
      "Track leads, deals, and customer 360 in real-time. AI scores every record and surfaces the next best action.",
    Component: SalesDemo,
    color: "emerald",
  },
  {
    id: "whatsapp",
    label: "WhatsApp AI",
    short: "WA AI",
    icon: "💬",
    tagline: "Customers chat. AI does the rest.",
    blurb:
      "Quotes, orders, and tickets created automatically from WhatsApp messages — every record lands in your CRM.",
    Component: WhatsAppAIDemo,
    color: "teal",
  },
  {
    id: "erp",
    label: "ERP · Operations",
    short: "ERP",
    icon: "📊",
    tagline: "Operations on autopilot.",
    blurb:
      "Finance, inventory, procurement, and HR sharing one ledger. AI flags anomalies before they hurt margins.",
    Component: OperationsDemo,
    color: "indigo",
  },
  {
    id: "attendance",
    label: "Attendance · HR",
    short: "HR",
    icon: "🛡",
    tagline: "Selfie + GPS clock-in. Zero proxy.",
    blurb:
      "Facial recognition with geofencing. Attendance flows directly into payroll, leave, and claims — no manual entry.",
    Component: AttendanceDemo,
    color: "amber",
  },
  {
    id: "erp-sap",
    label: "ERP · for SMEs",
    short: "SME",
    icon: "🏢",
    tagline: "The premium ERP for growing teams.",
    blurb:
      "Real-time visibility across purchase, sales and accounts — without stitching three systems together.",
    Component: BusinessOneDemo,
    color: "blue",
  },
];

const chipColors: Record<string, string> = {
  emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-200",
  teal: "bg-teal-500/15 border-teal-500/30 text-teal-200",
  indigo: "bg-indigo-500/15 border-indigo-500/30 text-indigo-200",
  amber: "bg-amber-500/15 border-amber-500/30 text-amber-200",
  blue: "bg-blue-500/15 border-blue-500/30 text-blue-200",
};

const ROTATE_MS = 5000;
const TICK_MS = 50;

export default function LiveDemoTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [progress, setProgress] = useState(0); // 0–100
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = tabs[activeIdx];
  const Active = active.Component;

  // Autoplay rotation with smooth progress bar
  useEffect(() => {
    if (!autoplay) return;
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / ROTATE_MS) * 100);
      setProgress(pct);
      if (elapsed >= ROTATE_MS) {
        setActiveIdx((i) => (i + 1) % tabs.length);
      }
    }, TICK_MS);
    return () => clearInterval(tick);
  }, [activeIdx, autoplay]);

  // Auto-scroll active tab into view inside the rail
  useEffect(() => {
    const el = tabRefs.current[activeIdx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeIdx]);

  const selectTab = (i: number) => {
    setActiveIdx(i);
    setAutoplay(false); // pause auto-rotation when user takes control
    setProgress(0);
  };

  return (
    <div className="space-y-10">
      {/* === Centered, highlighted tab nav === */}
      <div className="sticky top-20 z-30">
        <div className="relative mx-auto max-w-fit">
          {/* glow halo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/30 via-violet-600/30 to-pink-500/20 blur-2xl rounded-full pointer-events-none" />

          <div className="relative rounded-2xl border border-white/10 bg-[#15161F]/90 backdrop-blur-xl p-2 shadow-2xl shadow-indigo-900/40">
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none justify-start md:justify-center">
              {tabs.map((t, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={t.id}
                    ref={(el) => { tabRefs.current[i] = el; }}
                    onClick={() => selectTab(i)}
                    className={`relative group flex items-center gap-2 px-3.5 md:px-5 py-2.5 md:py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                      isActive
                        ? "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-lg shadow-indigo-500/40 scale-[1.04]"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
                    }`}
                  >
                    <span className="text-base">{t.icon}</span>
                    <span className="hidden sm:inline">{t.label}</span>
                    <span className="sm:hidden">{t.short}</span>

                    {/* Active progress bar (only when autoplay on) */}
                    {isActive && autoplay && (
                      <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-white/20 overflow-hidden">
                        <span
                          className="block h-full rounded-full bg-white"
                          style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* autoplay status pill */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setAutoplay((v) => !v)}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
              autoplay
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "bg-white/[0.04] text-zinc-400 border border-white/10 hover:text-white"
            }`}
          >
            {autoplay ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Auto-rotating · pause
              </>
            ) : (
              <>▶ Resume auto-tour</>
            )}
          </button>
        </div>
      </div>

      {/* Tab heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${chipColors[active.color]}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Interactive demo · {active.label}
        </span>
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100 leading-tight">
          {active.tagline}
        </h2>
        <p className="mt-4 text-zinc-400 text-base md:text-lg">{active.blurb}</p>
      </div>

      {/* Showcase */}
      <div className="max-w-6xl mx-auto">
        <div key={active.id} className="animate-fade-in">
          <Active />
        </div>
      </div>

      {/* Inline CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Link href="/demo" className="btn-primary">
          Book a 30-min walkthrough
          <span aria-hidden>→</span>
        </Link>
        <button
          className="btn-secondary"
          onClick={() => selectTab((activeIdx + 1) % tabs.length)}
        >
          See next demo →
        </button>
      </div>
    </div>
  );
}
