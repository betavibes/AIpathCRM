import Link from "next/link";

const steps = [
  ["Discover", "We learn how your business actually runs — the real workflows, not a template."],
  ["Build & configure", "We shape AIpath One around it — modules, roles, AI and integrations."],
  ["Deploy", "Your data imported, your team onboarded, live on web, mobile and WhatsApp."],
  ["Run with you", "We stay on hand — no throwing it over the wall and disappearing."],
];

export default function Projects() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-transparent p-10 md:p-14 max-w-6xl mx-auto">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-600/25 blur-3xl animate-orb-drift pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/25 blur-3xl animate-orb-drift pointer-events-none" />

          <div className="relative">
            <div className="max-w-3xl">
              <span className="chip">
                <span className="chip-dot" />
                Built for you
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100">
                Want a system like this <span className="text-gradient">for your business?</span>
              </h2>
              <p className="mt-5 text-zinc-300 text-lg leading-relaxed">
                We don&apos;t just hand you software. We design, build, deploy and run it around the
                way your business actually works — exactly what we did for Kiran Fabricators and
                Bharat Costumes.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map(([t, d], i) => (
                <div key={t} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <span className="font-mono text-xs text-indigo-300">0{i + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-zinc-100">{t}</p>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <Link href="/contact" className="btn-primary">
                Start your project
                <span aria-hidden>→</span>
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See what we&apos;ve built
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
