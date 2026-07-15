const pillars = [
  {
    n: "01",
    tag: "CRM",
    title: "Win and keep customers",
    body:
      "Leads, quotes, orders, service and every conversation — web, WhatsApp and website — in one customer record. Nothing slips between the cracks.",
    points: ["Sales pipeline & quotes", "Service & tickets", "WhatsApp + website chat"],
    accent: "from-indigo-500/25 to-blue-500/5",
    ring: "group-hover:border-indigo-400/40",
  },
  {
    n: "02",
    tag: "ERP",
    title: "Run the whole operation",
    body:
      "Purchases, inventory, double-entry accounting with GST, and full HR & payroll — sharing one database, so your numbers are always live and reconciled.",
    points: ["Inventory & purchases", "Finance, ledger & GST", "HR, attendance & payroll"],
    accent: "from-emerald-500/25 to-cyan-500/5",
    ring: "group-hover:border-emerald-400/40",
  },
  {
    n: "03",
    tag: "AI",
    title: "Let it run the busywork",
    body:
      "AI agents answer customers, read invoices, route tickets, and surface what's coming next — working across the same data your team does, 24/7.",
    points: ["AI agents & chatbot", "Automation & routing", "Analytics & forecasting"],
    accent: "from-violet-500/25 to-pink-500/5",
    ring: "group-hover:border-violet-400/40",
  },
];

export default function Pillars() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Three pillars, one platform
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            <span className="text-gradient">CRM. ERP. AI.</span> Built to work as one.
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Most companies buy these three separately and spend years wiring them together. AIpath
            One ships them on a single database — so the customer, the stock, the invoice and the
            AI all see the same truth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className={`group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br ${p.accent} p-8 transition-all duration-300 hover:-translate-y-1 ${p.ring}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold tracking-tight text-gradient">{p.tag}</span>
                <span className="font-mono text-xs text-zinc-500 tracking-widest">{p.n}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-100">{p.title}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
