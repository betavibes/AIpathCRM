import Link from "next/link";

const value = [
  {
    title: "No recurring licence",
    body:
      "You're not renting seats by the month. No per-user subscription that balloons every time you hire.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="9" /><path d="M8 12h8M9 9l-3 3 3 3" opacity="0" /><path d="M4.9 4.9l14.2 14.2" /><path d="M12 7v2M12 15v2M9 12h6" />
      </svg>
    ),
  },
  {
    title: "No maintenance trap",
    body:
      "No forced annual maintenance contract and no surprise upkeep bills — you know what it costs up front.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2.1-2.1z" />
      </svg>
    ),
  },
  {
    title: "Scales with you, not your bill",
    body:
      "Add users, branches and modules as you grow. The system grows with the business — the invoice doesn't chase it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 3v18h18" /><path d="M7 15l3-3 3 3 5-6" />
      </svg>
    ),
  },
];

const sizes = [
  ["Small business", "Start with the modules you need — a shop, a workshop, a trading desk."],
  ["Mid-market", "Multiple branches, teams and roles on one connected system."],
  ["Large enterprise", "Deep RBAC, custom workflows and integrations, deployed and run for you."],
];

export default function Ownership() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            The commercial model
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Own your system. <span className="text-gradient">Don&apos;t rent it forever.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Traditional CRM and ERP charge per user, per month, forever — and bill you again for
            &ldquo;maintenance&rdquo;. AIpath One is built to be owned: no recurring licence, no
            per-seat tax, no maintenance trap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {value.map((v) => (
            <div key={v.title} className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.06] to-transparent p-7">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                {v.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-100">{v.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        {/* Built for every size */}
        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
            Built for every size
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {sizes.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-sm font-semibold text-zinc-100">{t}</p>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get a tailored quote
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
