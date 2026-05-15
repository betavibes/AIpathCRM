function LaptopWithDashboard() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Screen */}
      <div className="relative rounded-t-2xl bg-slate-900 p-1.5 border border-slate-700">
        <div className="rounded-t-xl bg-slate-50 overflow-hidden">
          {/* Mini dashboard inside */}
          <div className="grid grid-cols-[110px_1fr] min-h-[300px] text-slate-700">
            {/* Sidebar */}
            <aside className="bg-[#161823] text-white p-2.5 flex flex-col gap-1 text-[10px]">
              <div className="flex items-center gap-1.5 px-1.5 py-1.5 mb-2">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-[8px] font-bold">A</div>
                <span className="text-[9px] font-semibold">aipath ERP</span>
              </div>
              {[
                { i: "🏠", l: "Home", a: true },
                { i: "📈", l: "Sales" },
                { i: "🛒", l: "Purchasing" },
                { i: "📦", l: "Inventory" },
                { i: "₹", l: "Finance" },
                { i: "♛", l: "CRM" },
                { i: "📊", l: "Reports" },
              ].map((s) => (
                <div key={s.l} className={`flex items-center gap-2 px-1.5 py-1 rounded ${s.a ? "bg-indigo-500 text-white font-semibold" : "text-zinc-400"}`}>
                  <span className="text-[10px]">{s.i}</span>
                  <span>{s.l}</span>
                </div>
              ))}
            </aside>

            {/* Content */}
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-slate-900">Dashboard</p>
                <span className="text-[8px] text-slate-500">Singapore ▾</span>
              </div>

              {/* Top KPI cards */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <p className="text-[8px] text-slate-500">Total Sales</p>
                  <p className="text-[8px] text-slate-400">This Month</p>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <p className="text-[12px] font-bold text-slate-900">S$ 285,000</p>
                    <span className="text-[8px] text-emerald-600 font-semibold">▲ 18.7%</span>
                  </div>
                  <svg viewBox="0 0 100 20" className="w-full h-3 mt-1" preserveAspectRatio="none">
                    <path d="M0 15 L20 12 L40 14 L60 8 L80 10 L100 4" stroke="#3b82f6" strokeWidth="1" fill="none" />
                  </svg>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <p className="text-[8px] text-slate-500">Gross Profit</p>
                  <p className="text-[8px] text-slate-400">This Month</p>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <p className="text-[12px] font-bold text-slate-900">S$ 142,300</p>
                    <span className="text-[8px] text-emerald-600 font-semibold">▲ 16.3%</span>
                  </div>
                  <svg viewBox="0 0 100 20" className="w-full h-3 mt-1" preserveAspectRatio="none">
                    <path d="M0 17 L20 14 L40 12 L60 9 L80 7 L100 3" stroke="#10b981" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Bar list + donut */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <p className="text-[9px] font-bold text-slate-900 mb-1">Top 5 Items by Sales</p>
                  <div className="space-y-0.5">
                    {[
                      ["Item A", 100, "S$ 62,500"],
                      ["Item B", 78, "S$ 48,300"],
                      ["Item C", 55, "S$ 34,200"],
                      ["Item D", 45, "S$ 28,100"],
                      ["Item E", 35, "S$ 21,900"],
                    ].map(([n, w, v]) => (
                      <div key={n as string} className="flex items-center gap-1.5 text-[7px]">
                        <span className="w-9 text-slate-600">{n}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: `${w}%` }} />
                        </div>
                        <span className="text-slate-500 font-mono w-12 text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <p className="text-[9px] font-bold text-slate-900">Receivables Overdue</p>
                  <p className="text-[12px] font-bold text-slate-900 mt-0.5">S$ 38,450</p>
                  <div className="flex items-center gap-2 mt-1">
                    <svg viewBox="0 0 36 36" className="w-12 h-12">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#dbeafe" strokeWidth="5" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="50 88" strokeDashoffset="0" transform="rotate(-90 18 18)" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#fbbf24" strokeWidth="5" strokeDasharray="22 88" strokeDashoffset="-50" transform="rotate(-90 18 18)" />
                    </svg>
                    <ul className="text-[7px] space-y-0.5">
                      <li className="text-slate-600">● 0–30 Days</li>
                      <li className="text-slate-600">● 31–60 Days</li>
                      <li className="text-slate-600">● 61–90 Days</li>
                      <li className="text-slate-600">● 90+ Days</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom KPI row */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["Inventory Value", "S$ 512,800", "▲ 12.4%", "emerald"],
                  ["Open Orders", "36", "▼ 8.3%", "rose"],
                  ["Purchase Amount", "S$ 178,600", "▲ 9.6%", "emerald"],
                ].map(([l, v, d, c]) => (
                  <div key={l as string} className="rounded-md border border-slate-200 bg-white p-1.5">
                    <p className="text-[7px] text-slate-500">{l}</p>
                    <p className="text-[10px] font-bold text-slate-900 mt-0.5">{v}</p>
                    <p className={`text-[7px] font-semibold mt-0.5 ${c === "emerald" ? "text-emerald-600" : "text-rose-500"}`}>
                      {d} <span className="text-slate-400">vs Last Month</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="h-3 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-[2rem] mx-[-2%]" />
      <div className="h-1 bg-slate-500 rounded-b-2xl mx-[10%]" />
    </div>
  );
}

export default function BusinessOneDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-blue-200/40 shadow-2xl shadow-blue-900/40">
      {/* Blue gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-200" />
      {/* City silhouette (abstract) */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
          <defs>
            <linearGradient id="city" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 350 L20 350 L20 250 L40 250 L40 280 L60 280 L60 200 L80 200 L80 220 L100 220 L100 150 L130 150 L130 180 L150 180 L150 100 L180 100 L180 130 L200 130 L200 80 L230 80 L230 110 L260 110 L260 140 L290 140 L290 90 L320 90 L320 170 L350 170 L350 200 L400 200 L400 400 L0 400 Z"
                fill="url(#city)" />
        </svg>
      </div>
      {/* Bottom blue wave */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-blue-700/20 to-transparent pointer-events-none" />

      <div className="relative p-6 md:p-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-[10px] font-bold tracking-wider">AIPATH</span>
              <span className="text-blue-900 font-bold text-sm">Business One</span>
              <span className="text-blue-300">|</span>
              <span className="text-blue-900 font-semibold text-xs">Premium ERP</span>
            </div>

            <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Run Your
              <br />
              Business
              <br />
              <span className="text-amber-500">in One Place</span>
            </h3>

            <div className="mt-6">
              <p className="text-blue-700 font-bold text-lg">AIpath ERP for growing SMEs</p>
              <p className="text-slate-700 mt-2 max-w-md">
                Unify finance, sales, purchasing, inventory and operations in one integrated ERP solution.
              </p>
            </div>

            {/* Feature pills */}
            <div className="mt-7 space-y-2.5">
              {[
                { i: "📊", t: "Real-time visibility" },
                { i: "🧩", t: "Flexible & scalable" },
                { i: "⚡", t: "Faster decisions" },
              ].map((f) => (
                <div
                  key={f.t}
                  className="inline-flex items-center gap-3 pl-1 pr-5 py-1 rounded-2xl bg-white shadow-md border border-blue-100/80 mr-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg shrink-0">
                    {f.i}
                  </div>
                  <p className="text-blue-900 font-bold leading-tight">{f.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right laptop */}
          <div className="flex justify-center lg:justify-end">
            <LaptopWithDashboard />
          </div>
        </div>

        {/* CTA pill */}
        <div className="mt-10 flex justify-center">
          <a
            href="/demo"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base shadow-2xl shadow-blue-700/40 hover:shadow-blue-700/60 transition-shadow"
          >
            <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">💬</span>
            Message us today
          </a>
        </div>

        {/* Footer contact strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-blue-900/80 font-medium">
          <span className="inline-flex items-center gap-1.5">📞 +91 9695 974 444</span>
          <span className="inline-flex items-center gap-1.5">✉ contact@aipathcrm.com</span>
          <span className="inline-flex items-center gap-1.5">🌐 aipathcrm.com</span>
        </div>
      </div>
    </div>
  );
}
