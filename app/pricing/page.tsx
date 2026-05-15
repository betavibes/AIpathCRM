import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ROICalculator from "@/components/ROICalculator";

export const metadata = {
  title: "Pricing — AIpath CRM",
  description:
    "Transparent pricing for the AI-First Business Operating System. Start free, scale with confidence. Plans for startups, scaling teams, and enterprises.",
};

const tiers = [
  {
    name: "Growth",
    price: "₹199",
    cycle: "/user / month",
    note: "or ₹1,999/user/year (save 20%)",
    desc: "For smaller teams starting to automate operations.",
    cta: "Start Growth",
    href: "/contact",
    features: [
      "Staff Attendance (Selfie + GPS)",
      "Geo Tracking & Geofencing",
      "Leave Management",
      "Task Assignment",
      "Payroll Calculation",
      "Staff Mobile App",
      "Admin Web Dashboard",
      "Customer Notes & History",
      "Unlimited Support",
    ],
  },
  {
    name: "Scale",
    price: "₹499",
    cycle: "/user / month",
    note: "or ₹4,999/user/year",
    desc: "Best for teams focused on growth and efficiency.",
    cta: "Start Scale",
    href: "/contact",
    featured: true,
    features: [
      "Everything in Growth, plus:",
      "Multi-Branch Support",
      "Orders & Billing",
      "Basic Inventory",
      "Daily Reports & Analytics",
      "Team Performance Dashboard",
      "Attendance Location History",
      "Export to Excel / PDF",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cycle: "",
    note: "Module-based pricing",
    desc: "For ambitious businesses that need full automation.",
    cta: "Contact Sales",
    href: "/contact",
    features: [
      "Everything in Scale, plus:",
      "Sales Module",
      "Marketing Automation",
      "HRMS (Hiring → Appraisal)",
      "Accounting & Finance",
      "E-Commerce",
      "AI Business Assistant",
      "Dedicated Account Manager",
      "SSO, SAML, audit logs",
    ],
  },
  {
    name: "Founders",
    price: "₹9,999",
    cycle: "one-time",
    note: "Limited launch — up to 5 staff",
    desc: "Lifetime access for early customers.",
    cta: "Book Founders Plan",
    href: "/contact",
    accent: "limited",
    features: [
      "All Staff Management Features",
      "Free Updates for 1 Year",
      "Lifetime Access for 5 Employees",
      "Premium Support for 6 Months",
      "Great for shops, salons, freelancers, startups",
    ],
  },
];

const addons = [
  ["Additional Staff", "₹50 / user / month"],
  ["Additional Branch", "₹499 / month"],
  ["White Label Branding", "₹999 / month"],
  ["Custom Workflow Setup", "₹2,999 one-time"],
  ["Data Migration", "₹1,999 one-time"],
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Transparent pricing"
        title={
          <>
            Pricing that{" "}
            <span className="text-gradient">scales with you.</span>
          </>
        }
        subtitle="Start free. Upgrade when your business outgrows the basics. No hidden fees, no surprises — predictable monthly billing."
      >
        <Link href="/contact" className="btn-primary">
          Start Free Trial
        </Link>
        <Link href="/contact" className="btn-secondary">
          Talk to Sales
        </Link>
      </PageHero>

      {/* Plans */}
      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  t.featured
                    ? "border border-indigo-500/40 bg-gradient-to-b from-indigo-600/10 to-transparent shadow-2xl shadow-indigo-900/30"
                    : t.accent === "limited"
                    ? "border border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-transparent"
                    : "border border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip !bg-indigo-500/20 !border-indigo-400/40 !text-indigo-100">
                    Most popular
                  </div>
                )}
                {t.accent === "limited" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip !bg-amber-500/20 !border-amber-400/40 !text-amber-100">
                    Limited offer
                  </div>
                )}
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-zinc-400 mt-1.5 min-h-[2.75rem]">{t.desc}</p>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                    {t.cycle && <span className="text-sm text-zinc-500">{t.cycle}</span>}
                  </div>
                  {t.note && (
                    <p className="text-xs text-emerald-300 mt-1.5">{t.note}</p>
                  )}
                </div>

                <Link
                  href={t.href}
                  className={`mt-6 w-full ${
                    t.featured
                      ? "btn-primary"
                      : t.accent === "limited"
                      ? "btn-primary !bg-gradient-to-r !from-amber-500 !to-orange-600 !shadow-amber-500/30"
                      : "btn-secondary"
                  }`}
                >
                  {t.cta}
                </Link>

                <ul className="mt-7 space-y-3 text-sm flex-1">
                  {t.features.map((f, i) => {
                    const isHeader = f.startsWith("Everything") || f.startsWith("Great for");
                    return (
                      <li
                        key={i}
                        className={`flex items-start gap-2 ${
                          isHeader ? "text-zinc-200 font-medium pt-1" : "text-zinc-300"
                        }`}
                      >
                        {!isHeader && <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>}
                        <span>{f}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="chip"><span className="chip-dot" />ROI calculator</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Model your <span className="text-gradient">savings live.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Move the sliders. See exactly what AIpath saves your business — in your numbers.
            </p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* Add-ons & value */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <span className="chip"><span className="chip-dot" />Premium add-ons</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight mb-7">
                Extend the platform.
              </h3>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] divide-y divide-white/[0.06]">
                {addons.map(([label, price]) => (
                  <div key={label} className="flex items-center justify-between px-5 py-4">
                    <span className="text-zinc-300">{label}</span>
                    <span className="font-semibold text-white">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="chip"><span className="chip-dot" />Why our pricing wins</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight mb-7">
                Built for transparency.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Lowest cost", "Most affordable AI-CRM in India."],
                  ["No hidden fees", "What you see is what you pay."],
                  ["Made for India", "Built for Indian business workflows."],
                  ["24à—7 support", "Included with every plan."],
                  ["Free training", "We onboard your team end-to-end."],
                  ["Instant setup", "Start in minutes, not weeks."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-zinc-500 mt-1.5">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl" />
            <h2 className="relative text-3xl md:text-4xl font-semibold tracking-tight">
              Start free. <span className="text-gradient">No credit card needed.</span>
            </h2>
            <p className="relative mt-4 text-zinc-400">
              Join thousands of businesses already running on AIpath.
            </p>
            <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start 7-day free trial
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule live demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
