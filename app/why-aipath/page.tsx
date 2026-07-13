import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Why AIpath CRM — The AI-First Business OS",
  description:
    "Why operators choose AIpath: one unified platform, AI in every layer, mobile-first, enterprise-grade — built for how modern businesses actually run.",
};

const reasons = [
  {
    icon: "✦",
    title: "AI is the substrate, not a feature",
    body:
      "Legacy CRMs added AI to existing rails. AIpath was built around an AI core — every record, workflow, and report is intelligent by default.",
  },
  {
    icon: "◆",
    title: "One unified data model",
    body:
      "CRM + ERP + operations sharing the same schema. No more reconciling six tools — your data moves with your business.",
  },
  {
    icon: "◇",
    title: "Mobile-first, field-ready",
    body:
      "Native iOS & Android with offline mode. Built for sales reps, technicians, and operations teams who don't sit at desks.",
  },
  {
    icon: "—²",
    title: "Honest about security",
    body:
      "Encryption in transit and at rest, role-based access and audit logs. No certification badges we haven't earned — ask us and we'll tell you exactly what we do and don't have.",
  },
  {
    icon: "●",
    title: "We set it up with you",
    body:
      "We import your existing data, configure the modules around how you actually work, and stay on the phone until it runs.",
  },
  {
    icon: "—¼",
    title: "Pricing built for India and the world",
    body:
      "₹199—₹499 per user. No hidden fees, no platform tax. Predictable monthly billing with annual discounts.",
  },
];

const compare = [
  ["Unified CRM + ERP", "AIpath", "Yes — one schema", "Salesforce / HubSpot", "CRM only", "Zoho / Microsoft", "Bundled apps, separate data"],
  ["AI architecture", "AIpath", "Native (built around it)", "Salesforce / HubSpot", "Bolted on (Einstein)", "Zoho / Microsoft", "Add-ons"],
  ["Mobile experience", "AIpath", "Native, offline-ready", "Salesforce / HubSpot", "Web wrapper", "Zoho / Microsoft", "Limited"],
  ["Pricing transparency", "AIpath", "Public, predictable", "Salesforce / HubSpot", "Quote-based", "Zoho / Microsoft", "Tiered upsells"],
  ["Time to value", "AIpath", "Days", "Salesforce / HubSpot", "Weeks—months", "Zoho / Microsoft", "Months"],
];

export default function WhyAipathPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Why operators choose AIpath"
        title={
          <>
            They built CRMs and added AI.
            <br />
            <span className="text-gradient">We built AI and shaped it into a business OS.</span>
          </>
        }
        subtitle="One platform. One data model. One intelligence layer. Built for the way modern businesses actually run."
      >
        <Link href="/contact" className="btn-primary">Book a Demo</Link>
        <Link href="/features" className="btn-secondary">Explore the platform</Link>
      </PageHero>

      {/* Reasons */}
      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {reasons.map((r) => (
              <div key={r.title} className="card-glow p-7">
                <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-lg shadow-lg shadow-indigo-500/20 mb-5">
                  {r.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />How we compare</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              The honest <span className="text-gradient">comparison.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              We respect the incumbents — but operators ship faster on a unified, AI-native platform.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] text-xs uppercase tracking-[0.15em] text-zinc-400">
              <span>Capability</span>
              <span className="text-indigo-300">AIpath</span>
              <span>Legacy CRMs</span>
            </div>
            {compare.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-3 px-6 py-5 border-b border-white/[0.04] last:border-b-0 items-center text-sm"
              >
                <span className="text-zinc-200 font-medium">{row[0]}</span>
                <span className="text-emerald-300 inline-flex items-center gap-2">
                  <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs">✓</span>
                  {row[2]}
                </span>
                <span className="text-zinc-500 inline-flex items-center gap-2">
                  <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-zinc-500/10 border border-zinc-600/30 text-xs">·</span>
                  {row[6]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              ["Unify your tech stack", "Replace 5—14 disconnected point tools with one intelligent platform."],
              ["AI-ready workflows", "Automate follow-ups, analytics, productivity, and customer engagement."],
              ["White-glove launch", "Guided onboarding, dedicated CSM, and always-on support."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-8 border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                <h3 className="text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{d}</p>
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
              Ready to see <span className="text-gradient">the difference?</span>
            </h2>
            <p className="mt-4 text-zinc-400">A 30-minute demo is worth more than 30 product brochures.</p>
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
