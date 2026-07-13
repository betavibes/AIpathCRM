import BrowserFrame from "./BrowserFrame";

const navItems = [
  { label: "Dashboard", icon: "—¦", active: true },
  { label: "Pipeline", icon: "—¤" },
  { label: "Contacts", icon: "◉" },
  { label: "Inbox", icon: "✉", badge: 3 },
  { label: "Tasks", icon: "✓" },
  { label: "Reports", icon: "—¥" },
  { label: "Automations", icon: "⚡" },
];

const stats = [
  { label: "Pipeline", value: "$1.24M", trend: "+12.4%", up: true },
  { label: "Closed (MTD)", value: "$284K", trend: "+8.1%", up: true },
  { label: "Win rate", value: "34%", trend: "+2.0%", up: true },
  { label: "Avg cycle", value: "18d", trend: "−3d", up: true },
];

type Deal = { name: string; amt: string; logo: string; color: string; ai?: boolean };
type Stage = { stage: string; count: number; value: string; color: string; deals: Deal[] };

const pipeline: Stage[] = [
  {
    stage: "New",
    count: 24,
    value: "$320K",
    color: "from-zinc-500 to-zinc-600",
    deals: [
      { name: "Sunrise Industries", amt: "$48K", logo: "AC", color: "bg-rose-500" },
      { name: "Orbit", amt: "$32K", logo: "GX", color: "bg-amber-500" },
    ],
  },
  {
    stage: "Qualified",
    count: 18,
    value: "$450K",
    color: "from-blue-500 to-indigo-500",
    deals: [
      { name: "Lakeview Co", amt: "$72K", logo: "IN", color: "bg-cyan-500" },
      { name: "Vertex", amt: "$120K", logo: "HL", color: "bg-violet-500" },
    ],
  },
  {
    stage: "Proposal",
    count: 11,
    value: "$280K",
    color: "from-violet-500 to-purple-500",
    deals: [
      { name: "Meridian", amt: "$95K", logo: "ST", color: "bg-rose-500", ai: true },
    ],
  },
  {
    stage: "Closing",
    count: 6,
    value: "$190K",
    color: "from-emerald-500 to-cyan-500",
    deals: [
      { name: "Northwind", amt: "$140K", logo: "WE", color: "bg-emerald-500" },
    ],
  },
];

const sparkPath = "M0 30 L20 28 L40 22 L60 24 L80 16 L100 18 L120 12 L140 14 L160 8 L180 10 L200 4";

export default function CRMDashboard() {
  return (
    <BrowserFrame url="app.aipathcrm.com / pipeline">
      <div className="grid grid-cols-[180px_1fr] bg-[#15161F] text-zinc-200 min-h-[480px]">
        {/* Sidebar */}
        <aside className="bg-[#161823] border-r border-white/[0.05] p-3 flex flex-col gap-1 text-xs">
          <div className="px-2 py-2 mb-2 flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-[10px]">
              AI
            </div>
            <span className="font-semibold text-white text-[11px]">AIpath</span>
          </div>
          {navItems.map((n) => (
            <button
              key={n.label}
              className={`flex items-center justify-between px-2.5 py-2 rounded-md text-left transition-colors ${
                n.active
                  ? "bg-indigo-500/15 text-white border border-indigo-500/20"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-[10px] opacity-70">{n.icon}</span>
                {n.label}
              </span>
              {n.badge && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-indigo-500 text-white font-semibold">
                  {n.badge}
                </span>
              )}
            </button>
          ))}
          <div className="mt-auto pt-3 border-t border-white/[0.05]">
            <div className="px-2.5 py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
              <div className="leading-tight">
                <p className="text-[10px] font-semibold">Sarah Chen</p>
                <p className="text-[9px] text-zinc-500">Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-col">
          {/* Top bar */}
          <header className="flex items-center justify-between px-5 py-3 border-b border-white/[0.05]">
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em]">Sales pipeline</p>
              <h2 className="text-sm font-semibold mt-0.5">Q3 2026 — Enterprise</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5 rounded-md">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                Search
              </div>
              <button className="text-[10px] px-2.5 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium">
                + New deal
              </button>
            </div>
          </header>

          {/* KPI strip */}
          <div className="grid grid-cols-4 gap-2 p-4 border-b border-white/[0.05]">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
                <p className="text-[9px] text-zinc-500 uppercase tracking-[0.15em]">{s.label}</p>
                <div className="flex items-end justify-between mt-1.5">
                  <span className="text-base font-semibold tracking-tight">{s.value}</span>
                  <span className={`text-[9px] font-medium ${s.up ? "text-emerald-400" : "text-rose-400"}`}>
                    {s.up ? "—²" : "—¼"} {s.trend}
                  </span>
                </div>
                {/* sparkline */}
                <svg viewBox="0 0 200 32" className="w-full h-5 mt-1.5" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`spark-${s.label}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={`${sparkPath} L200 32 L0 32 Z`} fill={`url(#spark-${s.label})`} />
                  <path d={sparkPath} stroke="#818CF8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>

          {/* Pipeline kanban */}
          <div className="p-4 grid grid-cols-4 gap-2 flex-1">
            {pipeline.map((col) => (
              <div key={col.stage} className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${col.color}`} />
                    <p className="text-[10px] font-semibold">{col.stage}</p>
                    <span className="text-[9px] text-zinc-500">{col.count}</span>
                  </div>
                  <p className="text-[9px] text-zinc-400 font-mono">{col.value}</p>
                </div>
                {col.deals.map((d) => (
                  <div key={d.name} className="rounded-md border border-white/[0.05] bg-[#1A1A28] p-2 hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-md ${d.color} flex items-center justify-center text-[8px] font-bold text-white`}>
                        {d.logo}
                      </div>
                      <div className="leading-tight flex-1 min-w-0">
                        <p className="text-[10px] font-semibold truncate">{d.name}</p>
                        <p className="text-[9px] text-zinc-500">{d.amt}</p>
                      </div>
                    </div>
                    {d.ai && (
                      <div className="mt-1.5 flex items-center gap-1 text-[8px] text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded px-1.5 py-0.5">
                        <span>✦</span> AI: 78% win prob
                      </div>
                    )}
                  </div>
                ))}
                <button className="text-[9px] text-zinc-500 hover:text-zinc-300 py-1 border border-dashed border-white/[0.06] rounded-md">+ Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
