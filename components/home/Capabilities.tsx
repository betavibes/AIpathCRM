const tiles = [
  {
    title: "CRM",
    body: "A pipeline that thinks ahead — leads, deals, customer 360, omnichannel.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "from-indigo-500/30 to-blue-500/10",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "ERP",
    body: "Finance, inventory, procurement & manufacturing in one ledger.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    accent: "from-violet-500/25 to-pink-500/10",
  },
  {
    title: "AI Agents",
    body: "Digital workers that draft, decide, and execute — 24/7.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 16h.01M16 16h.01" />
      </svg>
    ),
    accent: "from-cyan-500/25 to-indigo-500/10",
  },
  {
    title: "Automation",
    body: "Drag-and-drop workflows. Approvals, alerts, business rules.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    accent: "from-amber-500/20 to-pink-500/10",
  },
  {
    title: "Analytics",
    body: "Predictive intelligence. Real-time dashboards. Smart reporting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 3v18h18" /><path d="M7 14l3-3 4 4 5-7" />
      </svg>
    ),
    accent: "from-emerald-500/25 to-cyan-500/10",
  },
  {
    title: "Mobile",
    body: "Native iOS & Android. Field ops, push intel, offline mode.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    accent: "from-pink-500/25 to-violet-500/10",
  },
];

export default function Capabilities() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mb-16">
          <span className="chip"><span className="chip-dot" />The platform</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            One platform.
            <br />
            <span className="text-gradient-soft">Six capabilities. Zero silos.</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            Stop stitching together CRMs, spreadsheets, and AI add-ons. AIpath is one
            system of record — with intelligence built into every layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-[14rem]">
          {tiles.map((t) => (
            <div
              key={t.title}
              className={`card-glow p-7 flex flex-col justify-between overflow-hidden ${t.span ?? ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-50 pointer-events-none`} />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white">
                  {t.icon}
                </div>
              </div>
              <div className="relative mt-6">
                <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
