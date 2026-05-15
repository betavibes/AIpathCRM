import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Roadmap — AIpath CRM",
  description:
    "Where AIpath is heading next. Quarterly roadmap covering AI agents, mobile-first ops, deep automation, and unified role-based experiences.",
};

const roles = [
  {
    name: "Admin",
    color: "from-indigo-500 to-blue-500",
    items: [
      "Dashboards, KPIs, reports",
      "Lead & customer management",
      "Project & task allocation",
      "HR & attendance",
      "Approval workflows",
      "Billing & subscription control",
    ],
  },
  {
    name: "Manager",
    color: "from-violet-500 to-indigo-500",
    items: [
      "Team monitoring",
      "Daily tasks",
      "Staff performance",
      "Approvals",
      "Internal communication",
      "Customer visit tracking",
    ],
  },
  {
    name: "Staff",
    color: "from-pink-500 to-violet-500",
    items: [
      "Selfie attendance + GPS",
      "Daily tasks",
      "Submit reports & expenses",
      "Customer visits",
      "Leave requests",
      "Notifications & alerts",
    ],
  },
];

const phases = [
  {
    label: "Now shipping",
    quarter: "Q2 2026",
    title: "Unified mobile experience",
    status: "shipping",
    items: [
      "Single role-aware mobile app (admin/manager/staff)",
      "Offline mode + background sync",
      "Push intelligence (AI alerts that matter)",
      "Selfie attendance + geofencing 2.0",
    ],
  },
  {
    label: "Building",
    quarter: "Q3 2026",
    title: "AI Agents — generally available",
    status: "building",
    items: [
      "Sales SDR agent (drafts, follow-ups, qualification)",
      "Support agent with ticket triage + auto-resolve",
      "Finance agent: invoice approval, reconciliation",
      "Custom agent builder (no-code)",
    ],
  },
  {
    label: "Designing",
    quarter: "Q4 2026",
    title: "Workflow Builder 2.0 + Marketplace",
    status: "design",
    items: [
      "Visual drag-and-drop with AI-suggested steps",
      "Public template marketplace",
      "Conditional branching + parallel execution",
      "Versioning + sandbox testing",
    ],
  },
  {
    label: "Researching",
    quarter: "Q1 2027",
    title: "Voice + Conversational OS",
    status: "research",
    items: [
      "Voice command across CRM + ERP",
      "Real-time call summarization with action items",
      "WhatsApp-native business workflows",
      "Multilingual AI for India + APAC",
    ],
  },
];

const principles = [
  ["No multiple apps to download", "One install. Role detected automatically."],
  ["Unified UI for all roles", "Same product, smart context switching."],
  ["Faster onboarding", "Days, not months. White-glove on every plan."],
  ["Lower TCO", "One platform replaces 5—14 point tools."],
  ["Mobile-first by default", "Designed for field, sales, and ops teams."],
];

const statusColors: Record<string, string> = {
  shipping: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  building: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  design: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  research: "bg-zinc-500/10 text-zinc-300 border-zinc-500/30",
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Roadmap & product direction"
        title={
          <>
            Where AI and{" "}
            <span className="text-gradient">operations meet.</span>
          </>
        }
        subtitle="Our public roadmap: mobile-first workflows, autonomous agents, and a unified experience for admins, managers, and staff."
      >
        <Link href="/contact" className="btn-primary">Influence the roadmap</Link>
        <Link href="/features" className="btn-secondary">See what's live today</Link>
      </PageHero>

      {/* Principles */}
      <section className="pb-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {principles.map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex w-5 h-5 items-center justify-center rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs shrink-0">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-zinc-500 mt-1">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />Quarterly themes</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              The next <span className="text-gradient">12 months.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              We ship publicly. Here's what's in motion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* vertical line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent" />

            <div className="space-y-10">
              {phases.map((p, i) => (
                <div
                  key={p.title}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 ring-4 ring-[#161823] shadow-lg shadow-indigo-500/40 z-10" />

                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <span className={`chip ${statusColors[p.status]}`}>
                      <span className="chip-dot !bg-current" />
                      {p.label} · {p.quarter}
                    </span>
                    <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                  </div>

                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                    <ul className="space-y-2.5 text-sm text-zinc-300">
                      {p.items.map((it) => (
                        <li
                          key={it}
                          className={`flex items-start gap-2 ${
                            i % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                          }`}
                        >
                          <span className="mt-1.5 inline-block w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Role-based experience */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <span className="chip"><span className="chip-dot" />Role-based experience</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              One app. <span className="text-gradient">Three experiences.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              The interface adapts automatically. No separate apps for admins, managers, or staff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl">
            {roles.map((r) => (
              <div key={r.name} className="card-glow p-7">
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${r.color} text-white font-semibold mb-5 shadow-lg`}>
                  {r.name[0]}
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-4">{r.name}</h3>
                <ul className="space-y-2.5 text-sm text-zinc-300">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Want to <span className="text-gradient">shape what we build?</span>
            </h2>
            <p className="mt-4 text-zinc-400">
              Join our customer advisory board. Earliest access, direct line to product.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">Request access</Link>
              <Link href="/features" className="btn-secondary">See current features</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
