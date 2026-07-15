import Link from "next/link";

const controls = [
  {
    title: "Role-based access (RBAC)",
    body:
      "Granular permissions per role — down to individual records and teams. People see and do exactly what their role allows, and nothing more.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "MFA & secure sign-in",
    body:
      "Multi-factor authentication and biometric login on mobile, so a stolen password isn't enough to get in.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><path d="M12 16v2" />
      </svg>
    ),
  },
  {
    title: "Encrypted, end to end",
    body:
      "Every connection is encrypted in transit (HTTPS/TLS), and your data is encrypted at rest in the database.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /><path d="M12 14v3" />
      </svg>
    ),
  },
  {
    title: "Full audit trail",
    body:
      "Key actions are logged with who did what and when — so every change can be traced back to a person.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    title: "Your own instance",
    body:
      "Your business runs on its own deployment — your data isn't pooled with anyone else's in a shared multi-tenant system.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="18" height="8" rx="2" /><rect x="3" y="13" width="18" height="8" rx="2" /><path d="M7 7h.01M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Your data stays yours",
    body:
      "We don't sell it and we don't train public models on it. Ask for a full export — or deletion — at any time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
      </svg>
    ),
  },
];

export default function Security() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Security
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Enterprise-grade control, <span className="text-gradient">without the fine print.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Serious access control and data protection built into the platform — described plainly,
            with no badges we haven&apos;t earned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {controls.map((c) => (
            <div key={c.title} className="card-glow p-7">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-300">
                {c.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-100">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500 max-w-2xl mx-auto">
          We&apos;re not yet independently certified (SOC 2 / ISO 27001), and we say so plainly.{" "}
          <Link href="/security" className="text-indigo-300 hover:text-indigo-200">
            Read our honest security page →
          </Link>
        </p>
      </div>
    </section>
  );
}
