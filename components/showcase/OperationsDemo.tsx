const sidebarItems = [
  { icon: "▦", label: "Overview", active: true },
  { icon: "₹", label: "Finance" },
  { icon: "📦", label: "Inventory", badge: 312 },
  { icon: "🛒", label: "Procurement" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "👥", label: "HR & Payroll" },
  { icon: "📊", label: "Reports" },
  { icon: "✦", label: "AI Finance" },
];

const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const revBars = [62, 70, 65, 78, 84, 92];
const expBars = [44, 50, 52, 55, 58, 60];

const txns = [
  { ref: "INV-2841", party: "Sunrise Industries", amt: "₹4,80,000", status: "Paid", color: "emerald" },
  { ref: "PO-1922", party: "Meridian Supplies", amt: "₹1,20,000", status: "Approved", color: "blue" },
  { ref: "INV-2840", party: "Orbit Traders", amt: "₹2,15,000", status: "Pending", color: "amber" },
  { ref: "INV-2838", party: "Lakeview Co", amt: "₹95,000", status: "Overdue", color: "rose" },
];

const statusBadge: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
};

const miniApps = [
  { title: "Inventory Scanner", body: "Barcode scan from mobile. Stock in/out, batch tracking, multi-warehouse.", emoji: "📷", grad: "from-indigo-100 to-blue-100" },
  { title: "GST Auto-File", body: "Auto-classify invoices, generate GSTR-1/3B, file directly. Zero manual work.", emoji: "📋", grad: "from-violet-100 to-pink-100" },
  { title: "Smart Payroll", body: "Salaries, attendance, TDS, PF, ESI — calculated, approved, disbursed.", emoji: "💼", grad: "from-amber-100 to-orange-100" },
  { title: "Vendor Portal", body: "POs, invoices, payments, GRN — vendors self-serve. Save 12+ hrs/week.", emoji: "🤝", grad: "from-cyan-100 to-blue-100" },
];

export default function OperationsDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-indigo-200/40 shadow-2xl shadow-indigo-900/30">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-violet-100 to-blue-200" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 0% 0%, rgba(139,92,246,0.25), transparent 50%), radial-gradient(circle at 100% 100%, rgba(99,102,241,0.3), transparent 50%)"
      }} />

      <div className="relative p-5 md:p-8">
        {/* Top headline */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Run Your Entire <span className="text-indigo-600">Operations</span>
            <br />
            From One Platform
          </h3>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-indigo-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px]">⚡</span>
              <span className="font-semibold text-slate-800">Faster monthly close</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-indigo-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px]">✓</span>
              <span className="font-semibold text-slate-800">Live stock across warehouses</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-indigo-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px]">📋</span>
              <span className="font-semibold text-slate-800">Auto GST + payroll</span>
            </span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Sidebar */}
          <aside className="hidden md:block col-span-3 lg:col-span-2 rounded-2xl bg-gradient-to-b from-indigo-700 to-violet-800 p-3 shadow-lg">
            <div className="flex items-center gap-2 px-2 py-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-white/15 backdrop-blur flex items-center justify-center text-white text-xs font-bold">A</div>
              <span className="text-white font-semibold text-xs">aipath ERP</span>
            </div>
            <div className="space-y-0.5">
              {sidebarItems.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[11px] ${
                    s.active
                      ? "bg-white text-indigo-700 font-semibold shadow"
                      : "text-indigo-50/90"
                  }`}
                >
                  <span className="text-[11px]">{s.icon}</span>
                  <span className="flex-1">{s.label}</span>
                  {s.badge && (
                    <span className={`text-[9px] px-1.5 rounded-full ${
                      s.active ? "bg-indigo-500 text-white" : "bg-white/20 text-white"
                    }`}>{s.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-3 md:space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { l: "Revenue (FY)", v: "₹2.40Cr", d: "▲ 18% vs last year", brand: "₹" },
                { l: "Inventory Value", v: "₹85.20L", d: "▲ ₹12L this Q", brand: "📦" },
                { l: "Open POs", v: "47", d: "₹14L pending", brand: "🛒" },
                { l: "Working Capital", v: "₹1.20Cr", d: "▲ Healthy", brand: "💰" },
              ].map((k) => (
                <div key={k.l} className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-indigo-100/60">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500 font-semibold">{k.l}</p>
                    <span className="text-base">{k.brand}</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">{k.v}</p>
                  <p className="text-[10px] text-indigo-600 font-semibold mt-1">{k.d}</p>
                </div>
              ))}
            </div>

            {/* Chart + transactions */}
            <div className="grid md:grid-cols-5 gap-3">
              {/* Bar chart */}
              <div className="md:col-span-3 bg-white rounded-2xl p-4 md:p-5 shadow-md border border-indigo-100/60">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Revenue vs Expenses ▾</p>
                    <p className="text-base font-bold text-slate-900 mt-0.5">Last 6 months</p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-indigo-500"/>Revenue</span>
                    <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-rose-400"/>Expenses</span>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-2 md:gap-3 h-32 md:h-40">
                  {labels.map((m, i) => (
                    <div key={m} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-end gap-1 h-full">
                        <div className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-violet-400" style={{ height: `${revBars[i]}%` }} />
                        <div className="flex-1 rounded-t bg-gradient-to-t from-rose-500 to-pink-300" style={{ height: `${expBars[i]}%` }} />
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent transactions */}
              <div className="md:col-span-2 bg-white rounded-2xl p-4 shadow-md border border-indigo-100/60">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-900">Recent transactions</p>
                  <span className="text-[10px] text-indigo-600 font-semibold">View all →</span>
                </div>
                <div className="space-y-2.5">
                  {txns.map((t) => (
                    <div key={t.ref} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-indigo-100 flex items-center justify-center text-[9px] font-bold text-indigo-700 shrink-0">
                        {t.ref.startsWith("INV") ? "I" : "P"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-slate-900 truncate">{t.party}</p>
                        <p className="text-[9px] text-slate-500 font-mono">{t.ref}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-slate-900">{t.amt}</p>
                        <span className={`inline-block text-[8px] px-1.5 py-0.5 rounded-full font-semibold ${statusBadge[t.color]} mt-0.5`}>
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini app cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {miniApps.map((a) => (
                <div key={a.title} className={`bg-gradient-to-br ${a.grad} rounded-2xl p-4 border border-white/60 shadow-md hover:shadow-lg transition-shadow`}>
                  <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center text-lg mb-3">
                    {a.emoji}
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">{a.title}</p>
                  <p className="text-[10px] text-slate-600 mt-1.5 leading-snug">{a.body}</p>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="rounded-xl bg-slate-900 text-white p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                <span className="inline-flex items-center gap-2"><span className="text-indigo-400">🛡</span> Sample data — for illustration</span>
                <span className="inline-flex items-center gap-2 opacity-90"><span className="text-indigo-400">⏱</span> Books, inventory and vendors in one place</span>
                <span className="inline-flex items-center gap-2 opacity-90"><span className="text-indigo-400">💰</span> Purchase · Sales · Accounts</span>
              </div>
              <a href="/demo" className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
                Book a Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
