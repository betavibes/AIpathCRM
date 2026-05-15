/* =====================================================================
   BusinessSystemHero — multi-device premium CRM/ERP composition
   Big monitor + person with laptop + WhatsApp + face/GPS attendance
   ===================================================================== */

function BigMonitor() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-xl">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400/70" />
          <span className="w-2 h-2 rounded-full bg-amber-400/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="text-[9px] text-zinc-500 font-mono">app.aipathcrm.com / business-os</span>
        <span className="text-[9px] text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Body — KPIs + chart + tables */}
      <div className="p-3">
        {/* Title */}
        <div className="flex items-center justify-between mb-2.5">
          <div>
            <p className="text-[8px] uppercase tracking-[0.15em] text-zinc-500">Business OS · Overview</p>
            <p className="text-[12px] font-bold text-zinc-100">Q3 FY26 — All branches</p>
          </div>
          <div className="flex items-center gap-1 text-[8px]">
            {["Day", "Week", "Month", "Quarter"].map((p, i) => (
              <span
                key={p}
                className={`px-1.5 py-0.5 rounded border ${
                  i === 2
                    ? "bg-indigo-500/20 border-indigo-400/40 text-indigo-200"
                    : "border-white/10 text-zinc-400"
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { l: "Total Sales", v: "₹50.4L", d: "+18.7%", c: "from-indigo-500 to-violet-500" },
            { l: "Total Purchases", v: "₹32.1L", d: "+9.2%", c: "from-emerald-500 to-teal-500" },
            { l: "Staff Avail.", v: "28/35", d: "80% on-duty", c: "from-cyan-500 to-blue-500" },
            { l: "Inventory", v: "12,840", d: "+312 SKUs", c: "from-amber-500 to-orange-500" },
          ].map((k) => (
            <div key={k.l} className="relative rounded-md border border-white/[0.06] bg-white/[0.02] p-2 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${k.c}`} />
              <p className="text-[7px] uppercase tracking-wider text-zinc-500">{k.l}</p>
              <p className="text-[12px] font-bold text-zinc-100 mt-0.5">{k.v}</p>
              <p className="text-[7px] text-emerald-400 font-semibold mt-0.5">▲ {k.d}</p>
            </div>
          ))}
        </div>

        {/* Chart + Staff list row */}
        <div className="grid grid-cols-3 gap-2">
          {/* Bar chart */}
          <div className="col-span-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] font-semibold text-zinc-200">Sales vs Purchases</p>
              <div className="flex gap-2 text-[7px]">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />Sales</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />Purchases</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[
                [55, 38], [68, 45], [62, 50], [78, 55], [84, 58], [92, 62], [88, 60], [95, 65],
              ].map(([s, p], i) => (
                <div key={i} className="flex-1 flex items-end gap-0.5 h-full">
                  <div
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-600 to-violet-400"
                    style={{ height: `${s}%` }}
                  />
                  <div
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-600 to-teal-400"
                    style={{ height: `${p}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[7px] text-zinc-500 mt-1">
              {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((w) => <span key={w}>{w}</span>)}
            </div>
          </div>

          {/* Staff status */}
          <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
            <p className="text-[9px] font-semibold text-zinc-200 mb-1.5">Staff status</p>
            <div className="space-y-1.5">
              {[
                { n: "Sarah", r: "Sales", s: "in", c: "bg-emerald-500" },
                { n: "Marcus", r: "Ops", s: "in", c: "bg-emerald-500" },
                { n: "Priya", r: "HR", s: "field", c: "bg-amber-400" },
                { n: "Anuj", r: "Tech", s: "in", c: "bg-emerald-500" },
                { n: "Neha", r: "Finance", s: "leave", c: "bg-rose-400" },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-1.5 text-[8px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${s.c}`} />
                  <span className="font-semibold text-zinc-200 flex-1">{s.n}</span>
                  <span className="text-zinc-500">{s.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="h-1 bg-zinc-700 mx-[40%] rounded-b-md" />
      <div className="h-2 bg-gradient-to-b from-zinc-700 to-zinc-800 mx-[30%] rounded-b-lg" />
    </div>
  );
}

function PersonWithLaptop() {
  return (
    <div className="relative flex items-end justify-start">
      {/* Person silhouette */}
      <svg viewBox="0 0 80 100" className="w-20 h-24 text-indigo-300/80 shrink-0">
        <defs>
          <linearGradient id="personGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4338CA" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Head */}
        <ellipse cx="40" cy="22" rx="11" ry="13" fill="url(#personGrad)" />
        {/* Hair */}
        <path d="M30 18 Q30 8, 40 8 Q50 8, 50 18 L50 22 Q45 18, 40 18 Q35 18, 30 22 Z" fill="#1E293B" />
        {/* Body / shoulders (back view) */}
        <path d="M22 60 Q22 38, 40 38 Q58 38, 58 60 L62 100 L18 100 Z" fill="url(#personGrad)" />
        {/* Arm reaching to laptop */}
        <path d="M22 55 Q12 65, 22 78" stroke="url(#personGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M58 55 Q68 65, 58 78" stroke="url(#personGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>

      {/* Laptop */}
      <div className="relative ml-[-12px] mb-1 w-[200px]">
        <div className="rounded-t-md bg-gradient-to-b from-zinc-700 to-zinc-800 p-[3px] border border-zinc-600">
          <div className="rounded-t-sm bg-[#0A0A14] overflow-hidden">
            {/* Pipeline view inside laptop */}
            <div className="p-2">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-[7px] font-bold text-zinc-200">Sales Pipeline</p>
                <span className="text-[6px] text-zinc-500">Q3</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  { stage: "New", count: 24, c: "bg-zinc-500" },
                  { stage: "Qual.", count: 18, c: "bg-blue-500" },
                  { stage: "Prop.", count: 11, c: "bg-violet-500" },
                  { stage: "Won", count: 6, c: "bg-emerald-500" },
                ].map((s) => (
                  <div key={s.stage} className="rounded bg-white/[0.04] border border-white/[0.05] p-1">
                    <div className="flex items-center gap-0.5 mb-0.5">
                      <span className={`w-1 h-1 rounded-full ${s.c}`} />
                      <span className="text-[6px] text-zinc-300 font-semibold">{s.stage}</span>
                    </div>
                    <p className="text-[8px] font-bold text-zinc-100">{s.count}</p>
                    <div className="mt-0.5 space-y-0.5">
                      <div className="h-0.5 rounded bg-white/10" />
                      <div className="h-0.5 rounded bg-white/10 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Keyboard */}
        <div className="h-1 bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-b-md mx-[-3%]" />
        <div className="h-0.5 bg-zinc-600 rounded-b-md mx-[15%]" />
      </div>
    </div>
  );
}

function WhatsAppOrder() {
  return (
    <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-1 border border-zinc-700/40 shadow-xl">
      <div className="relative w-full h-full rounded-[1rem] bg-[#0b141a] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-30" />

        {/* WhatsApp header */}
        <div className="absolute inset-x-0 top-0 z-20 pt-5 pb-1.5 px-2 bg-[#075E54] flex items-center gap-1.5">
          <span className="text-white text-[10px]">‹</span>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-[7px]">
            AI
          </div>
          <div className="flex-1">
            <p className="text-white text-[8px] font-semibold leading-none">AIpath Sales Bot</p>
            <p className="text-emerald-200 text-[6px]">● online</p>
          </div>
        </div>

        {/* Chat */}
        <div className="absolute inset-x-0 top-[42px] bottom-[26px] overflow-hidden px-1.5 pt-1.5 space-y-1">
          {/* Customer */}
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-[#005c4b] rounded-md rounded-tr-sm px-1.5 py-1 text-white text-[7px] leading-tight">
              Hi! Need 50 units of Product A
              <p className="text-[5px] text-emerald-200/70 text-right">10:42 ✓✓</p>
            </div>
          </div>
          {/* AI */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#1f2c33] rounded-md rounded-tl-sm px-1.5 py-1 text-white text-[7px] leading-tight">
              Quote <span className="text-emerald-300 font-mono">#QT-1842</span> = ₹49,000 ✓
            </div>
          </div>
          {/* Customer */}
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-[#005c4b] rounded-md rounded-tr-sm px-1.5 py-1 text-white text-[7px] leading-tight">
              Confirm order
              <p className="text-[5px] text-emerald-200/70 text-right">10:44 ✓✓</p>
            </div>
          </div>
          {/* AI */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#1f2c33] rounded-md rounded-tl-sm px-1.5 py-1 text-white text-[7px] leading-tight">
              Order <span className="text-emerald-300 font-mono">#ORD-9214</span> placed ✅
              <p className="text-[6px] text-zinc-400 mt-0.5">→ logged in CRM</p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="absolute inset-x-0 bottom-0 px-1 py-1 bg-[#0b141a] border-t border-white/5 flex items-center gap-1">
          <div className="flex-1 bg-[#1f2c33] rounded-full px-2 py-0.5 text-zinc-500 text-[6px]">Message</div>
          <div className="w-4 h-4 rounded-full bg-[#00a884] flex items-center justify-center text-white text-[6px]">→</div>
        </div>
      </div>
    </div>
  );
}

function FaceGPSPhone() {
  return (
    <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-1 border border-zinc-700/40 shadow-xl">
      <div className="relative w-full h-full rounded-[1rem] bg-white overflow-hidden">
        {/* Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-30" />

        <div className="absolute inset-0 pt-5 px-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <p className="text-[6px] text-slate-500">Facial Recognition</p>
              <p className="text-[8px] font-bold text-emerald-600">Clock-In</p>
            </div>
            <span className="text-[6px] text-emerald-600 font-bold">✓ verified</span>
          </div>

          {/* Face oval */}
          <div className="relative mx-auto w-20 h-24 rounded-[2rem] border-2 border-dashed border-emerald-400 overflow-hidden bg-gradient-to-b from-amber-100 via-orange-100 to-rose-100 mb-1.5">
            <svg viewBox="0 0 100 120" className="w-full h-full">
              <ellipse cx="50" cy="60" rx="28" ry="34" fill="#f5d0b0" />
              <path d="M22 45 Q22 18, 50 15 Q78 18, 78 45 Q70 30, 50 30 Q30 30, 22 45 Z" fill="#1f2937" />
              <ellipse cx="42" cy="58" rx="2" ry="1.5" fill="#1f2937" />
              <ellipse cx="58" cy="58" rx="2" ry="1.5" fill="#1f2937" />
              <path d="M42 75 Q50 82, 58 75" stroke="#1f2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* GPS map */}
          <div className="relative h-12 rounded-md overflow-hidden bg-slate-100 mb-1">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M0 25 L100 22" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M30 0 L30 50" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M70 0 L70 50" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M0 38 L100 36" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="40" y="5" width="22" height="12" fill="#94a3b8" opacity="0.3" />
              <circle cx="50" cy="28" r="4" fill="#f97316" />
              <circle cx="50" cy="28" r="7" fill="#f97316" opacity="0.3" />
            </svg>
          </div>

          {/* Status */}
          <div className="rounded-md bg-emerald-50 border border-emerald-200 p-1 flex items-center justify-between">
            <div>
              <p className="text-[7px] text-emerald-700 font-bold">Checked in</p>
              <p className="text-[6px] text-emerald-600">9:02 · Office HQ</p>
            </div>
            <span className="text-emerald-600 text-[10px]">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessSystemHero() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 shadow-2xl shadow-indigo-900/40">
      {/* Subtle grid + glow */}
      <div className="absolute inset-0 opacity-30 bg-grid pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />

      {/* Top status bar */}
      <div className="relative flex items-center justify-between px-4 md:px-5 py-2.5 border-b border-white/[0.06] bg-black/30 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-[10px] md:text-xs text-zinc-300 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AIpath Business OS · Live
          </span>
          <span className="hidden md:inline text-[10px] text-zinc-500">·</span>
          <span className="hidden md:inline text-[10px] text-zinc-400">247 users active across 12 branches</span>
        </div>
        <span className="text-[9px] md:text-[10px] text-zinc-500 font-mono">app.aipathcrm.com</span>
      </div>

      {/* Composition */}
      <div className="relative grid grid-cols-12 gap-3 md:gap-4 p-4 md:p-6">
        {/* Left column — big monitor + person/laptop */}
        <div className="col-span-12 lg:col-span-8 space-y-3 md:space-y-4">
          <BigMonitor />
          <PersonWithLaptop />
        </div>

        {/* Right column — two phones stacked */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
          {/* WhatsApp phone */}
          <div className="relative aspect-[9/19] lg:h-[260px]">
            <WhatsAppOrder />
            <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold shadow-lg shadow-emerald-500/40">
              💬 New order
            </span>
          </div>

          {/* Face + GPS phone */}
          <div className="relative aspect-[9/19] lg:h-[260px]">
            <FaceGPSPhone />
            <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-bold shadow-lg shadow-amber-500/40">
              📍 Clock-in
            </span>
          </div>
        </div>
      </div>

      {/* Bottom activity ticker */}
      <div className="relative px-4 md:px-5 py-2 border-t border-white/[0.06] bg-black/20 flex items-center gap-4 overflow-hidden">
        <span className="text-[9px] text-emerald-300 font-bold whitespace-nowrap">▲ LIVE FEED</span>
        <div className="flex gap-5 text-[9px] text-zinc-400 overflow-hidden whitespace-nowrap animate-marquee">
          <span>● Order #ORD-9214 · ₹49,000 · WhatsApp</span>
          <span className="text-zinc-700">·</span>
          <span>● Sarah clocked in · Office HQ</span>
          <span className="text-zinc-700">·</span>
          <span>● Invoice #INV-2841 · ₹4,80,000 · Paid</span>
          <span className="text-zinc-700">·</span>
          <span>● AI scored 14 leads (3 hot)</span>
          <span className="text-zinc-700">·</span>
          <span>● PO #PO-1922 approved · ₹1,20,000</span>
          <span className="text-zinc-700">·</span>
          <span>● Order #ORD-9214 · ₹49,000 · WhatsApp</span>
        </div>
      </div>
    </div>
  );
}
