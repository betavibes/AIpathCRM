import Link from "next/link";

const products = [
  {
    tag: "CRM",
    title: "Win & keep customers",
    body: "Leads, deals, quotes, service and every conversation — web, WhatsApp and website — in one customer record.",
    features: ["Sales pipeline", "Quotes & orders", "Service & tickets", "WhatsApp + website chat"],
    accent: "from-indigo-500/20 to-blue-500/5",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    tag: "ERP",
    title: "Run the whole operation",
    body: "Purchases, inventory, double-entry accounting with GST, and full HR & payroll — all on one connected ledger.",
    features: ["Inventory & purchases", "Finance, ledger & GST", "HR, attendance & payroll", "Tasks & delivery"],
    accent: "from-emerald-500/20 to-cyan-500/5",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    tag: "AI",
    title: "Automate the busywork",
    body: "AI agents that answer customers, read invoices, route tickets, and surface what's coming — across your live data.",
    features: ["WhatsApp AI agent", "Invoice reading", "Ticket routing", "Analytics & forecasting"],
    accent: "from-violet-500/20 to-pink-500/5",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 16h.01M16 16h.01" />
      </svg>
    ),
  },
];

export default function SolutionProducts() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Three products, one platform
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            CRM, ERP &amp; AI <span className="text-gradient">software for your business.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Buy them as one system that already talks to itself — not three tools you have to wire together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((p) => (
            <Link
              key={p.tag}
              href="/features"
              className={`group relative rounded-2xl border border-white/[0.08] bg-gradient-to-br ${p.accent} p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-200">
                  {p.icon}
                </span>
                <span className="text-2xl font-semibold tracking-tight text-gradient">{p.tag}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-100">{p.title}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors">
                Explore {p.tag}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
