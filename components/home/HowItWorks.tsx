import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Connect your channels",
    body: "WhatsApp, email, calls, web forms, Stripe, Shopify — plug them in once. Every customer touchpoint flows into one timeline.",
    icon: "🔌",
    color: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-500/20",
  },
  {
    n: "02",
    title: "Let AI handle the busywork",
    body: "AI agents qualify leads, draft proposals, approve invoices, and route tickets — 24/7, in your tone, on your rules.",
    icon: "✦",
    color: "from-violet-500/20 to-pink-500/5",
    border: "border-violet-500/30",
  },
  {
    n: "03",
    title: "Run your business from one screen",
    body: "Pipeline, finance, inventory, HR, and reports — unified. Decisions backed by live data, not stitched-together exports.",
    icon: "▦",
    color: "from-indigo-500/20 to-violet-500/5",
    border: "border-indigo-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            How it works
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            From scattered tools to <span className="text-gradient">one operating system</span> — in weeks, not quarters.
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Three simple steps. We set it up around how your business already works — no year-long rollout, no army of consultants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.color} p-7 group hover:translate-y-[-4px] transition-transform`}
            >
              {/* connecting arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-[#1C1E2A] border border-white/10 items-center justify-center text-zinc-400 text-xs">
                  →
                </div>
              )}

              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-zinc-500 tracking-widest">STEP {s.n}</span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-100">{s.title}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/live-demo" className="btn-primary">
            Try the live demo — no signup
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
