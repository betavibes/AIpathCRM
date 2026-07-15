"use client";

import { useState } from "react";

const P = {
  width: 20, height: 20, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const ICONS: Record<string, React.ReactNode> = {
  users: <svg {...P}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
  funnel: <svg {...P}><path d="M3 4h18l-7 8v6l-4 2v-8z" /></svg>,
  doc: <svg {...P}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></svg>,
  cart: <svg {...P}><circle cx="9" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M3 3h2l2 12h11l2-8H6" /></svg>,
  ticket: <svg {...P}><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" /></svg>,
  chat: <svg {...P}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  star: <svg {...P}><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.8 6.5 19.5l1-6.3L3 8.9 9 8z" /></svg>,
  box: <svg {...P}><path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8" /></svg>,
  ledger: <svg {...P}><path d="M4 4h13l3 3v13H4z" /><path d="M8 9h8M8 13h8M8 17h5" /></svg>,
  rupee: <svg {...P}><path d="M6 4h12M6 8h12M14 4c0 4-3 6-6 6h-2l7 8" /></svg>,
  clock: <svg {...P}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  wallet: <svg {...P}><path d="M3 7h16a2 2 0 012 2v8a2 2 0 01-2 2H4a1 1 0 01-1-1z" /><path d="M16 13h.01M3 7V6a2 2 0 012-2h12" /></svg>,
  tasks: <svg {...P}><path d="M9 11l3 3 8-8" /><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" /></svg>,
  ai: <svg {...P}><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4M9 14h.01M15 14h.01" /></svg>,
  scan: <svg {...P}><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" /><path d="M7 12h10" /></svg>,
  route: <svg {...P}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h8a4 4 0 010 8H8a4 4 0 000 8h0" /></svg>,
  face: <svg {...P}><circle cx="12" cy="12" r="9" /><path d="M9 10h.01M15 10h.01M9 15c1 1 5 1 6 0" /></svg>,
  book: <svg {...P}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
  chart: <svg {...P}><path d="M3 3v18h18" /><path d="M7 14l3-3 4 4 5-7" /></svg>,
  trend: <svg {...P}><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>,
  pen: <svg {...P}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" /></svg>,
  mobile: <svg {...P}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  globe: <svg {...P}><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18 15 15 0 010-18z" /></svg>,
};

type Tab = { id: string; label: string; features: { icon: string; label: string }[] };

const tabs: Tab[] = [
  {
    id: "crm",
    label: "CRM",
    features: [
      { icon: "users", label: "Leads" },
      { icon: "funnel", label: "Sales pipeline" },
      { icon: "users", label: "Customer 360" },
      { icon: "doc", label: "Quotes" },
      { icon: "cart", label: "Sales orders" },
      { icon: "ticket", label: "Service tickets" },
      { icon: "chat", label: "WhatsApp chat" },
      { icon: "globe", label: "Website chat" },
      { icon: "star", label: "Reviews" },
      { icon: "mobile", label: "Mobile CRM app" },
    ],
  },
  {
    id: "erp",
    label: "ERP",
    features: [
      { icon: "cart", label: "Purchases" },
      { icon: "box", label: "Inventory" },
      { icon: "doc", label: "Sales invoices" },
      { icon: "ledger", label: "Ledger & accounts" },
      { icon: "rupee", label: "GST billing" },
      { icon: "wallet", label: "Payments & receipts" },
      { icon: "users", label: "Employees" },
      { icon: "clock", label: "Attendance" },
      { icon: "wallet", label: "Payroll & payslips" },
      { icon: "tasks", label: "Tasks & delivery" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    features: [
      { icon: "chat", label: "WhatsApp AI agent" },
      { icon: "globe", label: "Website AI chatbot" },
      { icon: "scan", label: "Invoice reading (OCR)" },
      { icon: "route", label: "Ticket routing" },
      { icon: "face", label: "Face attendance" },
      { icon: "book", label: "Knowledge base" },
      { icon: "chart", label: "Analytics" },
      { icon: "trend", label: "Forecasting alerts" },
      { icon: "pen", label: "Content generation" },
      { icon: "ai", label: "AI on every record" },
    ],
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="chip">
            <span className="chip-dot" />
            Everything inside
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            See what AIpath One <span className="text-gradient">does for your business.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            One platform covering all your CRM, ERP and AI needs — here&apos;s what&apos;s in the box.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-1.5 rounded-2xl border border-white/10 bg-[#15161F]/80 p-1.5">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  i === active
                    ? "bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div
          key={tab.id}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto animate-fade-in"
        >
          {tab.features.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center hover:border-indigo-500/30 hover:bg-white/[0.04] transition-colors"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
                {ICONS[f.icon]}
              </span>
              <p className="mt-3 text-sm font-medium text-zinc-200 leading-tight">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
