import Link from "next/link";

/**
 * The real system — the CRM + ERP modules AIpath One actually ships.
 * Every module below is a live, DB-backed area of the product (per the
 * product inventory): customers/sales up front, purchases/stock/finance/
 * payroll behind them.
 */

const groups = [
  {
    tag: "CRM",
    title: "Customers & sales",
    blurb: "Everything facing your customer — from first message to repeat order.",
    accent: "from-indigo-500/15 to-violet-500/5",
    modules: [
      ["Customers & suppliers", "One record per party, with full history"],
      ["Sales orders", "The whole order lifecycle in one place"],
      ["Quotes", "Build a quotation and send it in a click"],
      ["Service & tickets", "Requests routed to the right team, tracked to close"],
      ["WhatsApp & website chat", "AI-assisted conversations that create real records"],
      ["Reviews", "Capture and act on customer feedback"],
    ],
  },
  {
    tag: "ERP",
    title: "Operations & money",
    blurb: "The back office that keeps the business running and the books straight.",
    accent: "from-emerald-500/15 to-cyan-500/5",
    modules: [
      ["Purchases", "Supplier entry — with AI reading the invoice for you"],
      ["Inventory & stock", "Live stock, adjustments, multi-warehouse"],
      ["Finance & accounting", "Double-entry ledger, invoices, receipts, payments, GST"],
      ["HR & payroll", "Attendance, leaves, shifts, salary and payslips"],
      ["Tasks & delivery", "Assign, track and verify work through to delivery"],
      ["Analytics", "Live dashboards and reports across the business"],
    ],
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Platform() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            The full system
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Not just a CRM. <span className="text-gradient">A whole business system.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Customers and sales up front; purchases, stock, accounts and payroll behind them —
            on one connected database. This is the real ERP that runs Kiran Fabricators today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {groups.map((g) => (
            <div key={g.tag} className={`card-glow relative overflow-hidden p-8`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${g.accent} opacity-60 pointer-events-none`} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold tracking-[0.15em] text-zinc-300">
                    {g.tag}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">{g.title}</h3>
                </div>
                <p className="mt-3 text-sm text-zinc-400">{g.blurb}</p>

                <ul className="mt-6 space-y-4">
                  {g.modules.map(([name, desc]) => (
                    <li key={name} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                        <Check />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-zinc-100">{name}</span>
                        <span className="block text-xs text-zinc-400 mt-0.5">{desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/features" className="btn-primary">
            Explore every module
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
