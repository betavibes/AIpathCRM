import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Book a Demo — AIpath CRM",
  description:
    "See AIpath CRM in action. 30-minute personalized demo tailored to your business — pipeline, AI agents, ERP, and migrations.",
};

const steps = [
  {
    n: "01",
    title: "Discovery (10 min)",
    body: "We'll learn about your team, current stack, and the workflows you want to automate.",
  },
  {
    n: "02",
    title: "Live walkthrough (15 min)",
    body: "Personalized demo of the modules most relevant to you — CRM, ERP, AI agents, mobile.",
  },
  {
    n: "03",
    title: "Q&A + next steps (5 min)",
    body: "Pricing, migration timeline, custom requirements — get your questions answered.",
  },
];

const slots = [
  ["Mon, 18 Aug", ["10:00", "11:30", "14:00", "15:30", "17:00"]],
  ["Tue, 19 Aug", ["09:30", "11:00", "13:00", "14:30", "16:00"]],
  ["Wed, 20 Aug", ["10:00", "12:00", "15:00"]],
  ["Thu, 21 Aug", ["09:00", "10:30", "13:30", "15:00", "16:30"]],
  ["Fri, 22 Aug", ["10:00", "11:30", "14:00"]],
] as const;

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Book a personalized demo"
        title={
          <>
            See AIpath in action.{" "}
            <span className="text-gradient">In 30 minutes.</span>
          </>
        }
        subtitle="A guided walkthrough tailored to your business — no scripted presentation, no pressure."
      />

      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Slot picker */}
            <div className="lg:col-span-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Step 1 of 2</p>
                  <h2 className="text-2xl font-semibold tracking-tight mt-1">Choose a time</h2>
                </div>
                <div className="text-xs text-zinc-500 font-mono px-3 py-1.5 rounded-md border border-white/[0.06] bg-white/[0.02]">
                  GMT +5:30 (IST)
                </div>
              </div>

              <div className="space-y-5">
                {slots.map(([day, times]) => (
                  <div key={day} className="">
                    <p className="text-sm font-semibold text-zinc-200 mb-2.5">{day}</p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          className="px-3 py-2.5 rounded-lg text-sm border border-white/[0.08] bg-white/[0.02] hover:bg-indigo-500/15 hover:border-indigo-500/40 hover:text-white transition-all text-zinc-300"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500">
                <span>Don't see a time that works?</span>
                <Link href="/contact" className="text-indigo-300 hover:text-indigo-200">Request a custom slot →</Link>
              </div>
            </div>

            {/* Right rail */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-5">What to expect</h3>
                <ol className="space-y-5">
                  {steps.map((s) => (
                    <li key={s.n} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-indigo-300 shrink-0 mt-0.5">{s.n}</span>
                      <div>
                        <p className="text-sm font-semibold">{s.title}</p>
                        <p className="text-xs text-zinc-500 mt-1">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-7 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
                    <div>
                      <p className="text-sm font-semibold">Sarah Chen</p>
                      <p className="text-xs text-zinc-400">Solutions Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    "I've onboarded 200+ teams to AIpath. I'll show you exactly what your workflow looks like — not a generic demo."
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 mb-3">Trusted by</p>
                <div className="grid grid-cols-3 gap-2 opacity-70">
                  {["Acme", "Globex", "Hooli", "Stark", "Wayne", "Initech"].map((l) => (
                    <span key={l} className="text-xs font-semibold tracking-wider text-zinc-400 text-center">
                      {l.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-20 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5">
            {[
              ["Is the demo free?", "Yes — no charge, no obligation."],
              ["Can I bring my team?", "Absolutely. Bring up to 10 stakeholders."],
              ["Do you support my industry?", "Manufacturing, SaaS, healthcare, retail, services & more."],
            ].map(([q, a]) => (
              <div key={q} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-sm font-semibold">{q}</p>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
