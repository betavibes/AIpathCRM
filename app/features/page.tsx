import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import CRMDashboard from "@/components/dashboards/CRMDashboard";
import ERPDashboard from "@/components/dashboards/ERPDashboard";
import MobileFrames from "@/components/dashboards/MobileFrames";
import WorkflowBuilder from "@/components/WorkflowBuilder";

const dashboards = [<CRMDashboard key="crm" />, <ERPDashboard key="erp" />, <MobileFrames key="mob" />];

export const metadata = {
  title: "Features — AIpath CRM",
  description:
    "Every capability you need to run a modern business: CRM, ERP, AI agents, automation, mobile apps, and intelligent analytics — unified in one platform.",
};

const modules = [
  {
    chip: "CRM",
    title: "Pipeline that thinks ahead.",
    desc: "Leads, deals, customer 360, omnichannel inboxes, service tickets — with AI scoring every record.",
    bullets: [
      ["Lead Management", "Capture, score, route, and convert."],
      ["Sales Pipeline", "Drag-and-drop kanban with AI next-best-action."],
      ["Customer 360", "Every conversation, deal, and ticket in one view."],
      ["Omnichannel", "Email, WhatsApp, Telegram, calls — unified."],
      ["Service Mgmt", "SLA-aware tickets with AI summarization."],
    ],
  },
  {
    chip: "ERP",
    title: "Operations on autopilot.",
    desc: "Finance, inventory, procurement, HR, and projects — sharing one ledger, one source of truth.",
    bullets: [
      ["Finance & Billing", "Quotes → invoices → reconciliation."],
      ["Inventory", "Multi-branch stock with auto-reorder."],
      ["Procurement", "PO workflows with approval chains."],
      ["HR & Payroll", "Hiring, attendance, payslips, appraisals."],
      ["Projects", "Tasks, time, budgets, billing — together."],
    ],
    reverse: true,
  },
  {
    chip: "Workforce",
    title: "Field ops, automated.",
    desc: "Selfie attendance, geofenced check-ins, task tracking, leave workflows — built mobile-first.",
    bullets: [
      ["Selfie Attendance", "Photo + GPS verified, no proxies."],
      ["Geo-Fencing", "Location-based attendance & visit rules."],
      ["Task Mgmt", "Assign, track, and verify field work."],
      ["Leave Mgmt", "Apply, approve, balance — instantly."],
      ["Real-time Sync", "Web + mobile, always in lockstep."],
    ],
  },
];

const ai = [
  ["AI Agents", "Digital workers for sales, support, finance, ops — 24/7."],
  ["Predictive Analytics", "Forecast pipeline, churn, revenue, demand."],
  ["Smart Reporting", "Ask questions in English. Get charts back."],
  ["AI Email & Proposals", "Drafted in your voice, ready in seconds."],
  ["Conversational AI", "Chat across your CRM, ERP, and inbox."],
  ["Workflow Recommendations", "AI suggests automations based on your data."],
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Every capability you need"
        title={
          <>
            One platform.{" "}
            <span className="text-gradient">Every workflow.</span>
          </>
        }
        subtitle="CRM, ERP, automation, AI agents, mobile, analytics — engineered to feel like one product, not seven."
      >
        <Link href="/contact" className="btn-primary">
          Book a Demo
        </Link>
        <Link href="/case-studies" className="btn-secondary">
          See our work
        </Link>
      </PageHero>

      {/* Module sections */}
      {modules.map((m, idx) => (
        <section
          key={m.title}
          className={`py-24 ${idx % 2 === 1 ? "bg-[#161823] border-y border-white/[0.06]" : ""}`}
        >
          <div className="container mx-auto px-5">
            <div
              className={`grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto ${
                m.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="chip"><span className="chip-dot" />{m.chip}</span>
                <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
                  {m.title}
                </h2>
                <p className="mt-5 text-lg text-zinc-400 leading-relaxed">{m.desc}</p>

                <div className="mt-8 space-y-3">
                  {m.bullets.map(([t, d]) => (
                    <div
                      key={t}
                      className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/30 transition-colors"
                    >
                      <span className="mt-0.5 inline-flex w-6 h-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{t}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">{dashboards[idx]}</div>
            </div>
          </div>
        </section>
      ))}

      {/* AI capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />The AI layer</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              AI in <span className="text-gradient-ai">every layer.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Not a feature, not a chatbot bolted on — AI is the substrate that
              makes the whole platform smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {ai.map(([t, d]) => (
              <div key={t} className="card-glow p-7">
                <div className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/20 mb-5">
                  ✦
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm text-zinc-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Builder demo */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="chip"><span className="chip-dot" />Workflow Builder</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Drag, drop, <span className="text-gradient">automate.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Visual workflows with AI nodes built in. No code, no engineers needed.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <WorkflowBuilder />
          </div>
        </div>
      </section>

      {/* Mobile + Integrations strip */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <span className="chip"><span className="chip-dot" />Mobile</span>
            <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
              Built for <span className="text-gradient">field & on-the-go teams.</span>
            </h3>
            <p className="mt-4 text-zinc-400">
              Native iOS & Android apps with offline mode, push intelligence, and field-ops dashboards.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <span className="chip"><span className="chip-dot" />Integrations</span>
            <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
              Connects to <span className="text-gradient">100+ tools.</span>
            </h3>
            <p className="mt-4 text-zinc-400">
              Slack, Google, Microsoft 365, Stripe, WhatsApp, Telegram, Zapier, and a modern API for the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              More than features — <span className="text-gradient">an operating system.</span>
            </h2>
            <p className="mt-4 text-zinc-400">See it in action with a personalized 30-min walkthrough.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">Book a Demo</Link>
              <Link href="/contact" className="btn-secondary">Talk to Sales</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
