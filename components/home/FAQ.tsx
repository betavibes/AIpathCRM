"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is AIpath different from Salesforce or HubSpot?",
    a: "Legacy CRMs are built around contact records with AI bolted on. AIpath is built AI-first, with a unified data model spanning CRM, ERP, and operations — meaning AI can act across your entire business, not just your sales pipeline.",
  },
  {
    q: "Can I migrate my existing data?",
    a: "Yes. We provide native importers for Salesforce, HubSpot, Zoho, Pipedrive, NetSuite, and 30+ other systems. Most teams migrate in 2–4 weeks with zero downtime.",
  },
  {
    q: "Is AIpath secure enough for enterprise?",
    a: "AIpath is SOC 2 Type II certified, ISO 27001, GDPR and HIPAA compliant, with 99.99% uptime SLA, granular RBAC, SSO/SAML, and immutable audit logs.",
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
    q: "What does pricing include?",
    a: "All plans include CRM core, mobile apps, integrations, and unlimited contacts. AI Agents and ERP modules are included from the Growth plan upward.",
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
