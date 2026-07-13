"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is AIpath different from Salesforce or HubSpot?",
    a: "Legacy CRMs are built around contact records with AI bolted on. AIpath is built AI-first, with a unified data model spanning CRM, ERP, and operations — meaning AI can act across your entire business, not just your sales pipeline.",
  },
  {
    q: "Can I migrate my existing data?",
    a: "Yes. We import from spreadsheets and from systems like Salesforce, HubSpot, Zoho and Tally. Migration timelines depend on how much data you have and how clean it is — we'll scope it with you before you commit.",
  },
  {
    q: "How do you handle security?",
    a: "Data is encrypted in transit and at rest, access is controlled per role, and actions are logged. We are not yet independently certified (no SOC 2 or ISO 27001 audit), and we'd rather tell you that than claim a badge we haven't earned. Ask us anything about our setup — we'll answer honestly.",
  },
  {
    q: "Do AI Agents work with my existing data?",
    a: "Absolutely. Agents are trained on your CRM, ERP, documents, and conversations — never on third-party customer data. Your data stays yours, fully isolated.",
  },
  {
    q: "Can I customize workflows without code?",
    a: "Yes. The Workflow Builder is fully visual — drag-and-drop nodes for triggers, conditions, AI actions, approvals, and integrations. Developers can extend with our API.",
  },
  {
    q: "How much does it cost?",
    a: "We scope and price each build around what you actually need — the modules, the integrations, and the size of your team. Tell us what you want to run better and we'll come back with a clear plan and an estimate.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <span className="chip"><span className="chip-dot" />FAQ</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Questions, <span className="text-gradient">answered.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Still curious? Talk to our team — no pressure, no scripts.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-xl border ${
                    isOpen
                      ? "border-indigo-500/30 bg-indigo-500/[0.04]"
                      : "border-white/[0.08] bg-white/[0.02]"
                  } transition-all`}
                >
                  <button
                    className="w-full text-left flex items-center justify-between gap-4 p-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-medium text-zinc-100">{f.q}</span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-zinc-300 transition-transform ${
                        isOpen ? "rotate-45 bg-indigo-500/20 border-indigo-400/40" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed animate-fade-in">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
