const sidebarItems = [
  { icon: "⚡", label: "Get Started" },
  { icon: "▦", label: "Dashboard", active: true },
  { icon: "◉", label: "Leads", badge: 12 },
  { icon: "▥", label: "Pipeline" },
  { icon: "✉", label: "Inbox", badge: 4 },
  { icon: "♛", label: "Customers" },
  { icon: "📊", label: "Reports" },
  { icon: "✦", label: "AI Agents" },
  { icon: "♪", label: "Automations" },
];

const months = ["1", "5", "10", "15", "20", "25", "30"];
const monthBars = [40, 65, 50, 78, 62, 88, 92, 70, 85, 95, 58, 80, 72, 90, 100];

const recentDeals = [
  { name: "Sunrise Industries", amt: "₹4.85L", channel: "WhatsApp", channelColor: "bg-emerald-500", status: "Won", statusColor: "emerald" },
  { name: "Orbit Traders", amt: "₹3.20L", channel: "Email", channelColor: "bg-indigo-500", status: "Won", statusColor: "emerald" },
  { name: "Meridian Steel", amt: "₹2.95L", channel: "Phone", channelColor: "bg-violet-500", status: "Active", statusColor: "blue" },
  { name: "Northwind Traders", amt: "₹1.85L", channel: "WhatsApp", channelColor: "bg-emerald-500", status: "Won", statusColor: "emerald" },
];

const statusBadge: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  amber: "bg-amber-100 text-amber-700",
};

const miniApps = [
  { title: "WhatsApp CRM", body: "Sales conversations, automated. Send proposals + collect payments inline.", emoji: "💬", grad: "from-emerald-100 to-teal-100" },
  { title: "AI Email Drafts", body: "Personalized outreach in seconds. Win-back, follow-ups, proposals.", emoji: "✦", grad: "from-violet-100 to-pink-100" },
  { title: "Pipeline Forecast", body: "AI predicts close-by-month and alerts you when deals stall.", emoji: "📈", grad: "from-blue-100 to-indigo-100" },
  { title: "Mobile Sales App", body: "Reps update deals, log calls, and quote on the go. Offline-first.", emoji: "📱", grad: "from-cyan-100 to-blue-100" },
];

export default function SalesDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-emerald-200/40 shadow-2xl shadow-emerald-900/30">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-blue-200" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 0%, rgba(16,185,129,0.25), transparent 50%), radial-gradient(circle at 80% 100%, rgba(59,130,246,0.3), transparent 50%)"
      }} />

      <div className="relative p-5 md:p-8">
        {/* Top headline */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.05]">
            Run Your Entire <span className="text-emerald-600">Sales Engine</span>
            <br />
            From One Platform
          </h3>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-emerald-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">⏱</span>
              <span className="font-semibold text-slate-800">Less manual data entry</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-emerald-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">✓</span>
              <span className="font-semibold text-slate-800">See every deal in one place</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-emerald-200/60 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px]">🚀</span>
              <span className="font-semibold text-slate-800">Follow-ups that don't slip</span>
            </span>
          </div>
        </div>

        {/* Main grid: sidebar + content */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Sidebar */}
          <aside className="hidden md:block col-span-3 lg:col-span-2 rounded-2xl bg-gradient-to-b from-emerald-700 to-teal-800 p-3 shadow-lg">
            <div className="flex items-center gap-2 px-2 py-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-white/15 backdrop-blur flex items-center justify-center text-white text-xs font-bold">A</div>
              <span className="text-white font-semibold text-xs">aipath</span>
              <span className="ml-auto text-white/60 text-xs">≡</span>
            </div>
            <div className="space-y-0.5">
              {sidebarItems.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[11px] ${
                    s.active
                      ? "bg-white text-emerald-700 font-semibold shadow"
                      : "text-emerald-50/90"
                  }`}
                >
                  <span className="text-[11px]">{s.icon}</span>
                  <span className="flex-1">{s.label}</span>
                  {s.badge && (
                    <span className={`text-[9px] px-1.5 rounded-full ${
                      s.active ? "bg-emerald-500 text-white" : "bg-white/20 text-white"
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
                { l: "Total Sales", v: "₹50.36L", d: "▲ 15.8% vs last month", brand: "🛒" },
                { l: "Deals Won", v: "1,210", d: "▲ 12.6% vs last month", brand: "🏆" },
                { l: "Win Rate", v: "34%", d: "▲ 2.0%", brand: "🎯" },
                { l: "Active Customers", v: "1,820", d: "▲ 18% vs last month", brand: "♛" },
              ].map((k) => (
                <div key={k.l} className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-emerald-100/60">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500 font-semibold">{k.l}</p>
                    <span className="text-base">{k.brand}</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">{k.v}</p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-1">{k.d}</p>
                </div>
              ))}
            </div>

            {/* Chart + recent deals */}
            <div className="grid md:grid-cols-5 gap-3">
              {/* Bar chart */}
              <div className="md:col-span-3 bg-white rounded-2xl p-4 md:p-5 shadow-md border border-emerald-100/60">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Total Orders ▾</p>
                    <p className="text-base font-bold text-slate-900 mt-0.5">Last 30 days</p>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">This Month ▾</span>
                </div>
                <div className="flex items-end gap-1 md:gap-1.5 h-32 md:h-40">
                  {monthBars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 transition-colors" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 mt-2">
                  {months.map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>

              {/* Recent deals */}
              <div className="md:col-span-2 bg-white rounded-2xl p-4 shadow-md border border-emerald-100/60">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-900">Recent deals</p>
                  <span className="text-[10px] text-emerald-600 font-semibold">View all →</span>
                </div>
                <div className="space-y-2.5">
                  {recentDeals.map((d) => (
                    <div key={d.name} className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-full ${d.channelColor} flex items-center justify-center text-white text-[9px] font-bold shrink-0`}>
                        {d.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-slate-900 truncate">{d.name}</p>
                        <p className="text-[9px] text-slate-500">{d.channel}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-slate-900">{d.amt}</p>
                        <span className={`inline-block text-[8px] px-1.5 py-0.5 rounded-full font-semibold ${statusBadge[d.statusColor]} mt-0.5`}>
                          {d.status}
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
                <span className="inline-flex items-center gap-2"><span className="text-emerald-400">🛡</span> Sample data — for illustration</span>
                <span className="inline-flex items-center gap-2 opacity-90"><span className="text-emerald-400">⏱</span> CRM · Deals · AI scoring</span>
                <span className="inline-flex items-center gap-2 opacity-90"><span className="text-emerald-400">📈</span> Try it with your own data</span>
              </div>
              <a href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
                Book a demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
