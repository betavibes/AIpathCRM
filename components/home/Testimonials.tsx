const items = [
  {
    quote:
      "We replaced four tools with AIpath in a single quarter. Our pipeline velocity is up 3.4x and our finance ops finally has a single source of truth.",
    author: "Priya Menon",
    role: "COO, Northstar Industries",
    metric: "3.4x pipeline velocity",
  },
  {
    quote:
      "The AI agents are not a gimmick. Our SDR team genuinely has a digital teammate that drafts, follows up, and qualifies — overnight.",
    author: "Marcus Chen",
    role: "VP Sales, Lumen SaaS",
    metric: "+62% qualified meetings",
  },
  {
    quote:
      "Migrating from Salesforce + NetSuite was a six-week project. The unified data model alone saved us a CFO's worth of headcount.",
    author: "Sarah Park",
    role: "CFO, Atlas Manufacturing",
    metric: "$1.2M annual savings",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mb-14">
          <span className="chip"><span className="chip-dot" />Customers</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Operators ship faster <span className="text-gradient">on AIpath.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.author} className="card-glow p-8 flex flex-col">
              <blockquote className="text-zinc-200 leading-relaxed">
                <span className="text-3xl text-indigo-400 leading-none">“</span>
                {t.quote}
              </blockquote>
              <div className="mt-6 mb-4 h-px bg-white/[0.06]" />
              <figcaption className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  {t.metric}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
