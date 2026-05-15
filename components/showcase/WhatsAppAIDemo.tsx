function WhatsAppPhone() {
  return (
    <div className="relative w-[280px] h-[560px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-1.5 shadow-2xl shadow-emerald-900/40 border border-zinc-700/40">
      <div className="relative w-full h-full rounded-[2rem] bg-[#0c1317] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />

        {/* WhatsApp header */}
        <div className="absolute inset-x-0 top-0 z-20 pt-9 pb-2.5 px-4 bg-[#075E54] flex items-center gap-3">
          <span className="text-white text-lg">‹</span>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/20">
            AI
          </div>
          <div className="flex-1">
            <p className="text-white text-[13px] font-semibold">AIpath Sales Bot</p>
            <p className="text-emerald-200 text-[10px]">● online · typing...</p>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-[14px]">📞</span>
            <span className="text-[14px]">⋮</span>
          </div>
        </div>

        {/* Chat body */}
        <div className="absolute inset-x-0 top-[88px] bottom-[60px] overflow-hidden px-3 pt-3 pb-2 space-y-2"
             style={{
               backgroundImage: "radial-gradient(circle at 50% 0, rgba(7,94,84,0.15), transparent 60%)",
               backgroundColor: "#0b141a"
             }}>
          {/* Date pill */}
          <div className="flex justify-center mb-1">
            <span className="text-[9px] px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-400">Today</span>
          </div>

          {/* Customer msg 1 */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-1.5 text-white text-[11px]">
              Hi, I need a quote for 200 units of Product A
              <p className="text-[8px] text-emerald-200/70 text-right mt-0.5">10:42 ✓✓</p>
            </div>
          </div>

          {/* AI reply 1 */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[11px]">
              <p className="leading-snug">Sure! 200 units of Product A at ₹245/unit = <span className="font-semibold">₹49,000</span>.</p>
              <p className="leading-snug mt-1">Quote <span className="text-emerald-300 font-mono">#QT-1842</span> sent to your inbox 📄</p>
              <p className="text-[8px] text-zinc-400 mt-1">10:42</p>
            </div>
          </div>

          {/* Customer msg 2 */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-1.5 text-white text-[11px]">
              Confirm order. Same address.
              <p className="text-[8px] text-emerald-200/70 text-right mt-0.5">10:44 ✓✓</p>
            </div>
          </div>

          {/* AI reply 2 — order created */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[11px]">
              <p className="leading-snug">Order <span className="text-emerald-300 font-mono">#ORD-9214</span> placed ✅</p>
              <p className="leading-snug mt-0.5">Dispatch in 24 hrs to <span className="text-zinc-300">Plot 562, Lucknow</span>.</p>
              <p className="leading-snug mt-1 text-[10px] text-emerald-300">Track: aipath.in/o/9214</p>
              <p className="text-[8px] text-zinc-400 mt-1">10:44</p>
            </div>
          </div>

          {/* Customer msg 3 */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-1.5 text-white text-[11px]">
              Last batch had defects. Need replacement.
              <p className="text-[8px] text-emerald-200/70 text-right mt-0.5">10:46 ✓✓</p>
            </div>
          </div>

          {/* AI reply 3 — ticket */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[11px]">
              <p className="leading-snug">Logged. Ticket <span className="text-amber-300 font-mono">#TKT-3308</span> opened (High priority).</p>
              <p className="leading-snug mt-0.5">Assigned to Priya. ETA reply: <span className="text-zinc-300">2 hrs</span>.</p>
              <p className="text-[8px] text-zinc-400 mt-1">10:46</p>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="absolute inset-x-0 bottom-0 px-2 py-2.5 bg-[#0b141a] border-t border-white/5 flex items-center gap-2">
          <div className="flex-1 bg-[#1f2c33] rounded-full px-3 py-1.5 text-zinc-500 text-[10px]">😊 Message</div>
          <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">🎤</div>
        </div>
      </div>
    </div>
  );
}

const flowCards = [
  {
    label: "Quote",
    code: "QT-1842",
    title: "Quote auto-created",
    detail: "200 × Product A — ₹49,000",
    color: "from-emerald-500 to-teal-500",
    icon: "📄",
  },
  {
    label: "Order",
    code: "ORD-9214",
    title: "Order placed in CRM",
    detail: "Dispatch in 24 hrs · Lucknow",
    color: "from-indigo-500 to-violet-500",
    icon: "📦",
  },
  {
    label: "Ticket",
    code: "TKT-3308",
    title: "Support ticket raised",
    detail: "High priority · Assigned to Priya",
    color: "from-amber-500 to-orange-500",
    icon: "🎫",
  },
];

export default function WhatsAppAIDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-emerald-200/40 shadow-2xl shadow-emerald-900/30">
      {/* Light mint gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-100 to-cyan-100" />
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.25), transparent 50%)"
      }} />

      <div className="relative p-6 md:p-12">
        {/* Headline */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            New · WhatsApp AI Agent
          </span>
          <h3 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Your customers chat.
            <br />
            <span className="text-emerald-600">AI does everything else.</span>
          </h3>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Quotes, orders, support tickets — all created automatically from WhatsApp conversations. Every message lands in your CRM, tagged and routed.
          </p>
        </div>

        {/* 3-column flow: phone → arrows → CRM cards */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Phone */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <WhatsAppPhone />
          </div>

          {/* Connector arrows (desktop only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-12">
            {flowCards.map((f, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-10 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500" />
                <span className="text-emerald-500 text-lg">→</span>
              </div>
            ))}
          </div>

          {/* Flow cards */}
          <div className="lg:col-span-6 space-y-4">
            {flowCards.map((f) => (
              <div
                key={f.code}
                className="relative bg-white rounded-2xl p-5 shadow-lg border border-white/80 group hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                    <span>{f.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">{f.label}</span>
                      <span className="text-[10px] font-mono text-slate-500">#{f.code}</span>
                      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Created in CRM
                      </span>
                    </div>
                    <p className="font-bold text-slate-900 leading-tight">{f.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{f.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { v: "24/7", l: "Instant response" },
            { v: "0", l: "Manual data entry" },
            { v: "8 langs", l: "Including Hindi & Tamil" },
            { v: "62%", l: "More qualified leads" },
          ].map((s) => (
            <div key={s.l} className="bg-white/80 backdrop-blur rounded-xl p-4 border border-emerald-100 text-center shadow-sm">
              <p className="text-2xl font-bold text-emerald-600">{s.v}</p>
              <p className="text-[11px] text-slate-600 mt-1">{s.l}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a href="/demo" className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-shadow">
            <span>💬</span>
            Try the WhatsApp AI agent
            <span>→</span>
          </a>
          <a href="/features" className="text-emerald-700 hover:text-emerald-900 font-semibold text-sm">
            See how it integrates with CRM →
          </a>
        </div>
      </div>
    </div>
  );
}
