import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Solutions by Industry — AIpath CRM",
  description:
    "Pre-configured workflows, dashboards, and AI agents for manufacturing, SaaS, healthcare, retail, real estate, and services.",
};

const industries = [
  {
    icon: "ðŸ­",
    name: "Manufacturing",
    pain: "Production schedules slip. Inventory blind spots. Quality data scattered.",
    solution: "Shop-floor MES + MRP + quality + finance — unified.",
    metric: "32% reduction in production delays",
    accent: "from-indigo-500/20 to-blue-500/5",
    capabilities: ["Production planning (MRP)", "Shop floor (MES)", "Quality control", "Multi-warehouse inventory", "Vendor mgmt"],
  },
  {
    icon: "⚡",
    name: "SaaS & Tech",
    pain: "MRR scattered across tools. PLG funnel invisible. Churn is a surprise.",
    solution: "Subscription CRM + revenue ops + product analytics in one stack.",
    metric: "3.4à— faster pipeline velocity",
    accent: "from-violet-500/20 to-pink-500/5",
    capabilities: ["MRR/ARR tracking", "PLG funnels", "Churn prediction", "Customer health scores", "Expansion forecasting"],
  },
  {
    icon: "ðŸ©º",
    name: "Healthcare",
    pain: "Patient flow chaos. Compliance overhead. Billing leakage.",
    solution: "HIPAA-compliant patient CRM + scheduling + claims + audit.",
    metric: "44% less admin time per provider",
    accent: "from-cyan-500/20 to-indigo-500/5",
    capabilities: ["Patient 360", "Appointment scheduling", "HIPAA-grade audit", "Insurance claims", "Lab integrations"],
  },
  {
    icon: "ðŸ›",
    name: "Retail & E-commerce",
    pain: "Omnichannel inventory mess. Returns nightmare. Customer 360 is fiction.",
    solution: "Omnichannel POS + inventory + loyalty + AI recommendations.",
    metric: "+18% repeat purchase rate",
    accent: "from-pink-500/20 to-amber-500/5",
    capabilities: ["Omnichannel POS", "Real-time inventory", "Loyalty programs", "AI product recommendations", "Returns workflow"],
  },
  {
    icon: "ðŸ ",
    name: "Real Estate",
    pain: "Leads leak. Site visits unmanaged. Documentation chaos.",
    solution: "Listings + leads + site visits + contracts + e-sign — together.",
    metric: "2.6à— lead-to-close conversion",
    accent: "from-emerald-500/20 to-cyan-500/5",
    capabilities: ["Listing CRM", "Site visit scheduling", "Document mgmt", "E-sign integration", "Builder collaboration"],
  },
  {
    icon: "ðŸ› ",
    name: "Professional Services",
    pain: "Project margins guessed. Time tracking ignored. Billing delayed.",
    solution: "Project management + time + expenses + billing + retainers.",
    metric: "27% margin improvement",
    accent: "from-amber-500/20 to-rose-500/5",
    capabilities: ["Project planning", "Time tracking", "Expense capture", "Retainer billing", "Resource utilization"],
  },
];

const teams = [
  ["Sales", "Pipeline, forecasting, AI SDR agent."],
  ["Operations", "Workflows, approvals, field ops."],
  ["Finance", "Invoicing, reconciliation, AI close."],
  ["HR", "Hiring, attendance, payroll, appraisals."],
  ["Service", "Tickets, SLA, AI ticket triage."],
  ["Marketing", "Campaigns, attribution, lead scoring."],
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Built for your industry"
        title={
          <>
            One platform.{" "}
            <span className="text-gradient">Every industry.</span>
          </>
        }
        subtitle="Pre-configured workflows, dashboards, and AI agents shaped for your vertical — never a generic template."
      >
        <Link href="/demo" className="btn-primary">Book a Demo</Link>
        <Link href="/features" className="btn-secondary">Explore platform</Link>
      </PageHero>

      {/* Industries grid */}
      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {industries.map((i) => (
              <article
                key={i.name}
                className={`relative rounded-2xl border border-white/[0.08] bg-gradient-to-br ${i.accent} overflow-hidden hover:border-indigo-500/30 transition-colors group`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-4xl">{i.icon}</div>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {i.metric}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{i.name}</h3>

                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">The pain</p>
                      <p className="text-sm text-zinc-300 mt-1">{i.pain}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-indigo-300">With AIpath</p>
                      <p className="text-sm text-zinc-100 mt-1 font-medium">{i.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {i.capabilities.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/demo"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    See {i.name} demo <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* By team */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />By team</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Every team in your business — <span className="text-gradient">on one platform.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Not multiple seat licenses. Not separate logins. One product, every department.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teams.map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-indigo-500/30 transition-colors"
              >
                <p className="text-sm font-semibold">{t}</p>
                <p className="text-xs text-zinc-500 mt-1.5">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="chip"><span className="chip-dot" />Migration</span>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                Already on Salesforce, HubSpot, Zoho, or NetSuite?
              </h2>
              <p className="mt-5 text-lg text-zinc-400">
                We have native importers for 30+ platforms. Most teams are fully migrated in
                2—4 weeks with zero downtime.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/demo" className="btn-primary">Plan migration</Link>
                <Link href="/contact" className="btn-secondary">Talk to sales</Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 mb-4">Migration partners</p>
                <div className="grid grid-cols-3 gap-3">
                  {["Salesforce", "HubSpot", "Zoho", "NetSuite", "Pipedrive", "Freshworks", "Monday", "ClickUp", "Asana"].map((p) => (
                    <div
                      key={p}
                      className="text-xs font-semibold text-zinc-300 text-center py-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Don't see your industry? <span className="text-gradient">We probably support it.</span>
            </h2>
            <p className="mt-4 text-zinc-400">
              Our platform is configurable. Tell us about your business — we'll show you how AIpath fits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo" className="btn-primary">Book a Demo</Link>
              <Link href="/contact" className="btn-secondary">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
