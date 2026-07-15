const industries = [
  {
    name: "Manufacturing & fabrication",
    body: "Purchase, production, stock and accounts on one system — like Kiran Fabricators.",
    proven: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M2 20h20V9l-6 4V9l-6 4V4H2z" /><path d="M6 20v-4M11 20v-4M16 20v-4" />
      </svg>
    ),
  },
  {
    name: "Trading & distribution",
    body: "Quotes, orders, inventory and GST billing — with WhatsApp AI taking orders for you.",
    proven: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 9l1-5h16l1 5" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    name: "Retail & rental",
    body: "Catalog, bookings, customer accounts and returns, on web and mobile — like Bharat Costumes.",
    proven: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 6h18l-1.5 13a2 2 0 01-2 1.8H6.5a2 2 0 01-2-1.8z" /><path d="M8.5 6V5a3.5 3.5 0 017 0v1" />
      </svg>
    ),
  },
  {
    name: "Services & field ops",
    body: "Tasks, tickets, staff attendance and delivery tracking for teams that don't sit at desks.",
    proven: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2.1-2.1z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Who it&apos;s for
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Built for businesses <span className="text-gradient">like yours.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            AIpath One is shaped for real operating businesses — the ones running purchase, sales,
            stock, accounts and staff every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {industries.map((it) => (
            <div key={it.name} className="card-glow p-7">
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-300">
                  {it.icon}
                </span>
                {it.proven && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Delivered
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-100">{it.name}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Not on the list? If you run purchase, sales, stock and staff, it fits — ask us.
        </p>
      </div>
    </section>
  );
}
