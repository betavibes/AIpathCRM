import Link from "next/link";

const badges = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI-DSS"];

export default function Security() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="chip"><span className="chip-dot" />Security & Compliance</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Built like a bank.
              <br />
              <span className="text-gradient-soft">Feels like consumer.</span>
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              Enterprise-grade by default — encryption everywhere, granular RBAC,
              full audit trails, and data residency in the US, EU, India, and APAC.
            </p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              {[
                "AES-256 at rest, TLS 1.3 in transit",
                "SSO, SAML, SCIM, MFA",
                "Immutable audit logs",
                "99.99% uptime SLA",
              ].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <Link href="/security" className="btn-secondary mt-8 inline-flex">
              Visit trust center →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {badges.map((b) => (
              <div
                key={b}
                className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent flex flex-col items-center justify-center text-center p-4 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/30 mb-3">
                  ðŸ›¡
                </div>
                <p className="text-xs font-semibold text-zinc-200">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
