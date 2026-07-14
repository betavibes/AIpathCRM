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
    icon: "factory",
    name: "Manufacturing",
    pain: "Production schedules slip. Inventory blind spots. Quality data scattered.",
    solution: "Shop-floor MES + MRP + quality + finance — unified.",
    accent: "from-indigo-500/20 to-blue-500/5",
    capabilities: ["Production planning (MRP)", "Shop floor (MES)", "Quality control", "Multi-warehouse inventory", "Vendor mgmt"],
  },
  {
    icon: "saas",
    name: "SaaS & Tech",
    pain: "MRR scattered across tools. PLG funnel invisible. Churn is a surprise.",
    solution: "Subscription CRM + revenue ops + product analytics in one stack.",
    accent: "from-violet-500/20 to-pink-500/5",
    capabilities: ["MRR/ARR tracking", "PLG funnels", "Churn prediction", "Customer health scores", "Expansion forecasting"],
  },
  {
    icon: "health",
    name: "Healthcare",
    pain: "Patient flow chaos. Compliance overhead. Billing leakage.",
    solution: "Patient CRM + scheduling + claims + a full audit trail.",
    accent: "from-cyan-500/20 to-indigo-500/5",
    capabilities: ["Patient 360", "Appointment scheduling", "Audit trail", "Insurance claims", "Lab integrations"],
  },
  {
    icon: "retail",
    name: "Retail & E-commerce",
    pain: "Omnichannel inventory mess. Returns nightmare. Customer 360 is fiction.",
    solution: "Omnichannel POS + inventory + loyalty + AI recommendations.",
    accent: "from-pink-500/20 to-amber-500/5",
    capabilities: ["Omnichannel POS", "Real-time inventory", "Loyalty programs", "AI product recommendations", "Returns workflow"],
  },
  {
    icon: "realestate",
    name: "Real Estate",
    pain: "Leads leak. Site visits unmanaged. Documentation chaos.",
    solution: "Listings + leads + site visits + contracts + e-sign — together.",
    accent: "from-emerald-500/20 to-cyan-500/5",
    capabilities: ["Listing CRM", "Site visit scheduling", "Document mgmt", "E-sign integration", "Builder collaboration"],
  },
  {
    icon: "services",
    name: "Professional Services",
    pain: "Project margins guessed. Time tracking ignored. Billing delayed.",
    solution: "Project management + time + expenses + billing + retainers.",
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

function IndustryIcon({ name }: { name: string }) {
  const p = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "factory": // Manufacturing
      return (
        <svg {...p}>
          <path d="M2 20h20V9l-6 4V9l-6 4V4H2z" />
          <path d="M6 20v-4M11 20v-4M16 20v-4" />
        </svg>
      );
    case "saas": // SaaS & Tech
      return (
        <svg {...p}>
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "health": // Healthcare
      return (
        <svg {...p}>
          <path d="M12 21s-7-4.5-7-9.5A4.5 4.5 0 0112 8a4.5 4.5 0 017 3.5c0 5-7 9.5-7 9.5z" />
          <path d="M9 12h2l1-2 1 4 1-2h2" />
        </svg>
      );
    case "retail": // Retail & E-commerce
      return (
        <svg {...p}>
          <path d="M3 6h18l-1.5 13a2 2 0 01-2 1.8H6.5a2 2 0 01-2-1.8z" />
          <path d="M8.5 6V5a3.5 3.5 0 017 0v1" />
        </svg>
      );
    case "realestate": // Real Estate
      return (
        <svg {...p}>
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case "services": // Professional Services
      return (
        <svg {...p}>
          <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2.1-2.1z" />
        </svg>
      );
    default:
      return null;
  }
}

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
        <Link href="/contact" className="btn-primary">Book a Demo</Link>
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
                  <div className="mb-5">
                    <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-indigo-300">
                      <IndustryIcon name={i.icon} />
                    </div>
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
                    href="/contact"
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
                We migrate you off them. Timelines depend on how much data you have and how clean
                it is — we scope it with you before you commit to anything.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">Plan migration</Link>
                <Link href="/contact" className="btn-secondary">Talk to sales</Link>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 mb-4">We migrate from</p>
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
              <Link href="/contact" className="btn-primary">Book a Demo</Link>
              <Link href="/contact" className="btn-secondary">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
