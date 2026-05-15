import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Security & Compliance — AIpath CRM",
  description:
    "AIpath is built like a bank, feels like consumer. SOC 2 Type II, ISO 27001, GDPR, HIPAA, 99.99% uptime, granular RBAC, immutable audit logs.",
};

const certifications = [
  { name: "SOC 2 Type II", desc: "Annual independent audit" },
  { name: "ISO 27001", desc: "Information security mgmt" },
  { name: "GDPR", desc: "EU data protection compliant" },
  { name: "HIPAA", desc: "Healthcare-grade controls" },
  { name: "PCI-DSS", desc: "Card data handling" },
  { name: "DPDP Act", desc: "India data protection" },
];

const pillars = [
  {
    title: "Encryption everywhere",
    body: "AES-256 at rest. TLS 1.3 in transit. Per-tenant keys with optional BYOK (bring-your-own-key) for enterprise.",
    points: ["AES-256-GCM at rest", "TLS 1.3 in transit", "Per-tenant key isolation", "AWS KMS / HSM-backed"],
  },
  {
    title: "Identity & access",
    body: "Granular RBAC with field-level controls. SSO, SAML 2.0, SCIM provisioning, MFA enforceable org-wide.",
    points: ["Role + attribute-based access", "SSO via SAML 2.0 / OIDC", "SCIM auto-provisioning", "MFA + biometric"],
  },
  {
    title: "Audit & observability",
    body: "Immutable audit logs across every action. Webhooks to your SIEM. Real-time anomaly detection.",
    points: ["Immutable audit trail", "SIEM webhooks (Splunk, Datadog)", "Anomaly detection", "Data retention controls"],
  },
  {
    title: "Data residency",
    body: "Choose where your data lives. Multi-region deployments with strict data isolation.",
    points: ["US, EU, India, APAC regions", "No cross-region replication", "Data export anytime", "Right-to-be-forgotten"],
  },
];

const stats = [
  ["99.99%", "Uptime SLA"],
  ["< 50ms", "Median API latency"],
  ["24à—7", "Security ops center"],
  ["0", "Reportable breaches"],
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Security & compliance"
        title={
          <>
            Built like a bank.
            <br />
            <span className="text-gradient">Feels like consumer.</span>
          </>
        }
        subtitle="Enterprise-grade by default — every customer, every plan. Not a paid add-on."
      >
        <Link href="/contact" className="btn-primary">Talk to security team</Link>
        <a className="btn-secondary" href="#">Download whitepaper</a>
      </PageHero>

      {/* Stats */}
      <section className="pb-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient">{n}</p>
                <p className="mt-1.5 text-xs text-zinc-500 uppercase tracking-[0.15em]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />Certifications</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Audited. Certified. <span className="text-gradient">Verified.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              We've done the heavy lifting so your procurement team doesn't have to.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-5 text-center hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30">
                  ðŸ›¡
                </div>
                <p className="text-sm font-semibold tracking-tight">{c.name}</p>
                <p className="text-[10px] text-zinc-500 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <span className="chip"><span className="chip-dot" />The four pillars</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              How we <span className="text-gradient">protect your data.</span>
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

      {/* Architecture */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="chip"><span className="chip-dot" />Architecture</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Defense in <span className="text-gradient">depth.</span>
            </h2>
            <p className="mt-5 text-zinc-400">
              Every layer hardened, every layer monitored.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-[#15161F] p-6 md:p-10">
            <div className="space-y-3">
              {[
                ["Edge", "Cloudflare WAF · DDoS protection · Bot mitigation", "from-indigo-500/30 to-blue-500/10"],
                ["Application", "OWASP Top 10 hardened · Per-tenant isolation · Rate limiting", "from-violet-500/30 to-indigo-500/10"],
                ["Data", "AES-256 at rest · TLS 1.3 · BYOK · Field-level encryption", "from-cyan-500/30 to-violet-500/10"],
                ["Infrastructure", "AWS multi-AZ · Private VPC · Zero-trust networking", "from-emerald-500/30 to-cyan-500/10"],
                ["People", "Background-checked · Annual training · Least-privilege access", "from-amber-500/30 to-pink-500/10"],
              ].map(([layer, desc, grad]) => (
                <div
                  key={layer}
                  className={`relative rounded-xl border border-white/[0.06] bg-gradient-to-r ${grad} p-4 flex items-center gap-5`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 w-32 shrink-0">{layer}</span>
                  <span className="text-sm text-zinc-200">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust resources */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { title: "Trust Center", desc: "Live status, security posture, current certifications.", cta: "Visit trust center" },
              { title: "Security Whitepaper", desc: "30-page deep dive on architecture, controls, and processes.", cta: "Download PDF" },
              { title: "Vulnerability Disclosure", desc: "Report a vulnerability via our coordinated disclosure program.", cta: "Report → security@" },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{r.desc}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200">
                  {r.cta} <span aria-hidden>→</span>
                </a>
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
              Procurement got <span className="text-gradient">questions?</span>
            </h2>
            <p className="mt-4 text-zinc-400">Our security team responds within one business day.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">Talk to security</Link>
              <Link href="/demo" className="btn-secondary">Book a demo</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
