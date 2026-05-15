"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "forecast Q3 pipeline by segment", result: "✓ Generated forecast — Enterprise +24%, Mid-market +11%" },
  { prompt: "draft proposal for Acme Corp ($120k)", result: "✓ Proposal drafted, 6 pages, sent to legal review" },
  { prompt: "approve invoices under $5k", result: "✓ 14 invoices approved, $42,300 cleared" },
  { prompt: "summarize last 7 customer calls", result: "✓ 3 themes extracted: pricing, onboarding, mobile UX" },
];

export default function AILayer() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const target = lines[step].prompt;
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTimeout(() => setStep((s) => (s + 1) % lines.length), 2400);
      }
    }, 35);
    return () => clearInterval(t);
  }, [step]);

  return (
    <section className="relative py-28 bg-[#161823] border-y border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="container mx-auto px-5 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="chip"><span className="chip-dot" />The AI layer</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Your business,{" "}
              <span className="text-gradient-ai">in plain English.</span>
            </h2>
            <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
              AIpath understands your data. Ask anything — forecasts, drafts,
              approvals, summaries — and watch it execute across your CRM, ERP,
              and workflows in real time.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "AI Agents that act, not just chat",
                "Predictive analytics on every record",
                "Auto-generated emails, proposals, reports",
                "Conversational interface across all modules",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[10px] shrink-0">
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal mock */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#15161F] shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#1C1E2A]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-xs text-zinc-500 font-mono">aipath —¸ ai-console</span>
                <span className="text-xs text-zinc-500">●</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4 min-h-[20rem]">
                {lines.slice(0, step).map((l, i) => (
                  <div key={i} className="space-y-1.5 opacity-50">
                    <div className="flex gap-2">
                      <span className="text-violet-400">"º</span>
                      <span className="text-zinc-300">{l.prompt}</span>
                    </div>
                    <div className="text-emerald-400 pl-4">{l.result}</div>
                  </div>
                ))}
                <div className="space-y-1.5">
                  <div className="flex gap-2">
                    <span className="text-violet-400">"º</span>
                    <span className="text-zinc-100">
                      {typed}
                      <span className="inline-block w-2 h-4 bg-violet-400 align-middle ml-0.5 animate-blink" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
