import Link from "next/link";

const industries = [
  { name: "Manufacturing", body: "Production, MRP, shop floor, quality.", emoji: "🏭" },
  { name: "SaaS & Tech", body: "PLG funnels, MRR, churn, expansion.", emoji: "⚡" },
  { name: "Healthcare", body: "Patient flow, compliance, billing.", emoji: "🩺" },
  { name: "Retail", body: "Omnichannel, inventory, POS.", emoji: "🛍" },
  { name: "Real Estate", body: "Listings, leads, contracts, CRM.", emoji: "🏠" },
  { name: "Services", body: "Projects, time, billing, ops.", emoji: "🛠" },
];

export default function Industries() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="chip"><span className="chip-dot" />Industries</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Built for the way <span className="text-gradient">your industry</span> works.
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md">
            Pre-configured workflows, dashboards, and AI agents shaped for your vertical — not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <div key={i.name} className="card-glow p-7">
              <div className="text-3xl mb-5">{i.emoji}</div>
              <h3 className="text-lg font-semibold tracking-tight">{i.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{i.body}</p>
              <Link
                href="/solutions"
                className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                Explore solution <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
