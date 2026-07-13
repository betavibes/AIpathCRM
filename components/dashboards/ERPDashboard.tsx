import BrowserFrame from "./BrowserFrame";

const kpis = [
  { label: "Revenue", value: "₹2.4Cr", trend: "+18%", color: "from-indigo-500 to-violet-500" },
  { label: "Expenses", value: "₹1.1Cr", trend: "−4%", color: "from-rose-500 to-pink-500" },
  { label: "Inventory", value: "12,840", trend: "+312", color: "from-cyan-500 to-blue-500" },
  { label: "POs Open", value: "47", trend: "+9", color: "from-amber-500 to-orange-500" },
];

const txns = [
  { ref: "INV-2841", party: "Sunrise Industries", amt: "₹4,80,000", status: "Paid", color: "emerald" },
  { ref: "INV-2840", party: "Orbit Traders", amt: "₹2,15,000", status: "Pending", color: "amber" },
  { ref: "PO-1922", party: "Meridian Supplies", amt: "₹1,20,000", status: "Approved", color: "indigo" },
  { ref: "INV-2839", party: "Vertex", amt: "₹6,25,000", status: "Paid", color: "emerald" },
  { ref: "INV-2838", party: "Lakeview Co", amt: "₹95,000", status: "Overdue", color: "rose" },
];

const statusColors: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  rose: "bg-rose-500/15 text-rose-300 border-rose-500/20",
};

const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const revBars = [55, 68, 62, 78, 84, 92];
const expBars = [42, 48, 51, 49, 55, 58];

export default function ERPDashboard() {
  return (
    <BrowserFrame url="app.aipathcrm.com / erp / finance">
      <div className="bg-[#15161F] text-zinc-200 p-5 min-h-[480px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em]">ERP · Finance</p>
            <h2 className="text-base font-semibold mt-0.5">Q3 FY26 — Consolidated</h2>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-400">Last 6 mo</span>
            <span className="px-2 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-200">Export</span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {kpis.map((k) => (
            <div key={k.label} className="relative rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${k.color}`} />
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.15em]">{k.label}</p>
              <div className="flex items-baseline justify-between mt-1.5">
                <span className="text-lg font-semibold tracking-tight">{k.value}</span>
                <span className="text-[9px] text-emerald-400 font-medium">{k.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + AI */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {/* Bar chart */}
          <div className="col-span-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-semibold">Revenue vs Expenses</p>
              <div className="flex items-center gap-3 text-[9px]">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-indigo-500"/>Revenue</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm bg-rose-500/70"/>Expenses</span>
              </div>
            </div>
            <div className="flex items-end justify-between gap-3 h-28">
              {months.map((m, i) => (
                <div key={m} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex items-end gap-0.5 h-24">
                    <div
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-600 to-violet-400"
                      style={{ height: `${revBars[i]}%` }}
                    />
                    <div
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-rose-600/70 to-pink-400/70"
                      style={{ height: `${expBars[i]}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-zinc-500">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI insight */}
          <div className="rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-[9px] font-bold text-white">✦</div>
                <p className="text-[10px] font-semibold">AI Finance</p>
              </div>
              <p className="text-[11px] leading-snug text-zinc-200">
                Cash flow projects positive through Dec 2026.
              </p>
              <p className="text-[10px] leading-snug text-zinc-400 mt-2">
                3 vendors offer early-pay discounts. Save <span className="text-emerald-300 font-semibold">₹38,200</span>.
              </p>
              <button className="mt-3 text-[9px] px-2 py-1 rounded-md bg-violet-500/20 border border-violet-500/30 text-violet-100">
                Apply →
              </button>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
            <p className="text-[11px] font-semibold">Recent transactions</p>
            <p className="text-[9px] text-zinc-500">View all →</p>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {txns.map((t) => (
              <div key={t.ref} className="grid grid-cols-[80px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[10px] hover:bg-white/[0.02]">
                <span className="font-mono text-zinc-500">{t.ref}</span>
                <span className="text-zinc-200">{t.party}</span>
                <span className="font-semibold tracking-tight">{t.amt}</span>
                <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border ${statusColors[t.color]}`}>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
