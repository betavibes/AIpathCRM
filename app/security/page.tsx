import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Security — AIpath CRM",
  description:
    "How we protect your data: encryption in transit and at rest, role-based access, and audit logs. We are not yet independently certified, and we say so plainly.",
};

const pillars = [
  {
    title: "Encryption",
    body: "Your data is encrypted in transit over HTTPS/TLS, and encrypted at rest by our cloud database provider.",
    points: ["TLS for all traffic", "Encryption at rest", "No data sold or shared"],
  },
  {
    title: "Access control",
    body: "Every user gets a role. People see the records their role allows and nothing more. Admins control who can view, edit and approve.",
    points: ["Role-based permissions", "Per-user accounts", "Admin-managed roles"],
  },
  {
    title: "Audit logs",
    body: "Key actions in the system are recorded with who did what and when, so you can trace any change back to a person.",
    points: ["Action history", "Attributed to a user", "Exportable on request"],
  },
  {
    title: "Your data stays yours",
    body: "Your business data belongs to you. We don't sell it, and we don't train public models on it. Ask us for an export at any time and we'll give you one.",
    points: ["Export on request", "Deletion on request", "No resale of your data"],
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Security"
        title={
          <>
            How we protect
            <br />
            <span className="text-gradient">your data.</span>
          </>
        }
        subtitle="Straight answers about what we do, what we don't do yet, and what we'll tell you if you ask."
      >
        <Link href="/contact" className="btn-primary">
          Ask us a security question
        </Link>
      </PageHero>

      {/* Honest position on certification */}
      <section className="pb-8">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] p-7">
            <h2 className="text-lg font-semibold tracking-tight text-amber-100">
              We are not independently certified — yet.
            </h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              We do not hold SOC 2, ISO 27001, HIPAA or PCI-DSS certification, and we don&apos;t offer a
              contractual uptime SLA. Plenty of companies our size put those badges on the page anyway.
              We won&apos;t. If your procurement process requires a certification we don&apos;t have,
              tell us — we&apos;ll say so honestly rather than waste your time.
            </p>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              What we can do is walk you through exactly how the system is built, where your data lives,
              and who can reach it. Ask us anything.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <span className="chip"><span className="chip-dot" />What we actually do</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              The controls <span className="text-gradient">that are real.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-6xl">
            {pillars.map((p) => (
              <div key={p.title} className="card-glow p-8">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{p.body}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Found a vulnerability?
            </h2>
            <p className="mt-4 text-zinc-400">
              Email us and we&apos;ll look at it. We don&apos;t have a bug bounty programme, but we
              will always credit you and fix what you find.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
