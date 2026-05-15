import BrowserFrame from "./BrowserFrame";

const metrics = [
  { label: "Active users", value: "24,182", trend: "+12.4%" },
  { label: "Conversion", value: "3.84%", trend: "+0.6%" },
  { label: "Avg order", value: "₹4,820", trend: "+18%" },
  { label: "Churn", value: "1.2%", trend: "−0.3%" },
];

const linePoints = [
  { x: 0, y: 70 },
  { x: 14, y: 60 },
  { x: 28, y: 65 },
  { x: 42, y: 45 },
  { x: 56, y: 50 },
  { x: 70, y: 35 },
  { x: 84, y: 28 },
  { x: 100, y: 18 },
];
const linePath = linePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const lineFill = `${linePath} L 100 100 L 0 100 Z`;

const linePoints2 = [
  { x: 0, y: 80 },
  { x: 14, y: 75 },
  { x: 28, y: 72 },
  { x: 42, y: 68 },
  { x: 56, y: 60 },
  { x: 70, y: 55 },
  { x: 84, y: 48 },
  { x: 100, y: 38 },
];
const linePath2 = linePoints2.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

const segments = [
  { label: "Enterprise", pct: 48, color: "#6366F1" },
  { label: "Mid-market", pct: 32, color: "#8B5CF6" },
  { label: "SMB", pct: 14, color: "#22D3EE" },
  { label: "Startups", pct: 6, color: "#EC4899" },
];

export default function AnalyticsDashboard() {
  let cumulative = 0;
  const segmentArcs = segments.map((s) => {
    const start = cumulative;
    cumulative += s.pct;
    const startAngle = (start / 100) * 360 - 90;
    const endAngle = (cumulative / 100) * 360 - 90;
    const r = 38;
    const cx = 50;
    const cy = 50;
    const x1 = cx + r * Math.cos((startAngle * Math.PI) / 180);
    const y1 = cy + r * Math.sin((startAngle * Math.PI) / 180);
    const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
    const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);
    const large = s.pct > 50 ? 1 : 0;
    return { ...s, path: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z` };
  });

  return (
    <BrowserFrame url="app.aipathcrm.com / analytics">
      <div className="bg-[#15161F] text-zinc-200 p-5 min-h-[480px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em]">Analytics</p>
            <h2 className="text-base font-semibold mt-0.5">Last 30 days</h2>
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            {["Day", "Week", "Month", "Quarter"].map((p, i) => (
              <span key={p} className={`px-2.5 py-1 rounded-md border ${i === 2 ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-200" : "border-white/[0.05] text-zinc-400"}`}>{p}</span>
            ))}
          </div>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.15em]">{m.label}</p>
              <p className="text-lg font-semibold tracking-tight mt-1">{m.value}</p>
              <p className="text-[9px] text-emerald-400 mt-0.5">—² {m.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Line chart */}
          <div className="col-span-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-semibold">Revenue trend</p>
              <div className="flex items-center gap-3 text-[9px]">
                <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-indigo-400"/>This period</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-0.5 bg-zinc-600"/>Previous</span>
              </div>
            </div>
            <svg viewBox="0 0 100 100" className="w-full h-44" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[20, 40, 60, 80].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" />
              ))}
              <path d={lineFill} fill="url(#line-grad)" />
              <path d={linePath2} stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" fill="none" strokeDasharray="1,1" vectorEffect="non-scaling-stroke" />
              <path d={linePath} stroke="#818CF8" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              {/* end dot */}
              <circle cx="100" cy="18" r="1.4" fill="#A5B4FC" />
              <circle cx="100" cy="18" r="3" fill="#818CF8" opacity="0.3" />
            </svg>
            <div className="flex justify-between text-[9px] text-zinc-500 mt-1">
              {["Wk1", "Wk2", "Wk3", "Wk4"].map((w) => <span key={w}>{w}</span>)}
            </div>
          </div>

          {/* Donut */}
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <p className="text-[11px] font-semibold mb-2">By segment</p>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                {segmentArcs.map((s) => (
                  <path key={s.label} d={s.path} fill={s.color} opacity="0.85" />
                ))}
                <circle cx="50" cy="50" r="22" fill="#15161F" />
                <text x="50" y="46" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">100%</text>
                <text x="50" y="56" textAnchor="middle" fill="#A1A1AA" fontSize="5">total</text>
              </svg>
              <ul className="flex-1 space-y-1.5 text-[9px]">
                {segments.map((s) => (
                  <li key={s.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: s.color }} />
                      {s.label}
                    </span>
                    <span className="font-mono text-zinc-400">{s.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* AI insight bar */}
        <div className="mt-3 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent p-3 flex items-start gap-3">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-[11px] font-bold text-white shrink-0">✦</div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold">AI insight</p>
            <p className="text-[10px] text-zinc-300 mt-0.5">
              Enterprise segment growing 3.2à— faster than SMB. Reallocating ad spend could lift Q4 revenue by <span className="text-emerald-300 font-semibold">₹14L+</span>.
            </p>
          </div>
          <button className="text-[9px] px-2 py-1 rounded-md bg-white/10 border border-white/10 text-zinc-200">Investigate</button>
        </div>
      </div>
    </BrowserFrame>
  );
}
