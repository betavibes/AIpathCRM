import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "₹999",
    suffix: "/user / month",
    desc: "For small teams getting started.",
    features: ["CRM core", "Basic automations", "Mobile app", "Email + chat support"],
    cta: "Start free trial",
    href: "/contact",
  },
  {
    name: "Growth",
    price: "₹2,499",
    suffix: "/user / month",
    desc: "Most popular for scaling teams.",
    features: ["Everything in Starter", "ERP modules", "5 AI Agents", "Workflow builder", "Priority support"],
    cta: "Start free trial",
    href: "/contact",
    featured: true,
  },
  {
    name: "Scale",
    price: "₹4,999",
    suffix: "/user / month",
    desc: "Advanced AI for power orgs.",
    features: ["Everything in Growth", "Unlimited AI Agents", "Advanced analytics", "Custom integrations", "Dedicated CSM"],
    cta: "Talk to sales",
    href: "/contact",
  },
];

export default function PricingPreview() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip"><span className="chip-dot" />Pricing</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Pricing that <span className="text-gradient">scales with you.</span>
          </h2>
          <p className="mt-5 text-zinc-400">
            Start free. Upgrade when your business outgrows the basics. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border ${
                t.featured
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-600/10 to-transparent shadow-2xl shadow-indigo-900/30"
                  : "border-white/[0.08] bg-white/[0.02]"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip !bg-indigo-500/20 !border-indigo-400/40 !text-indigo-100">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-zinc-400 mt-1">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                <span className="text-sm text-zinc-500">{t.suffix}</span>
              </div>
              <Link
                href={t.href}
                className={`mt-6 w-full ${t.featured ? "btn-primary" : "btn-secondary"}`}
              >
                {t.cta}
              </Link>
              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-zinc-300">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/pricing" className="btn-ghost">
            See full pricing & enterprise plans →
          </Link>
        </div>
      </div>
    </section>
  );
}
