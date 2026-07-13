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
                  <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">Book a demo</p>
                  <h2 className="text-2xl font-semibold tracking-tight mt-1">Tell us when suits you</h2>
                </div>
                <div className="text-xs text-zinc-500 font-mono px-3 py-1.5 rounded-md border border-white/[0.06] bg-white/[0.02]">
                  GMT +5:30 (IST)
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                We run demos Monday to Saturday, 10:00–19:00 IST. Send us a couple of times that work
                for you and we&apos;ll confirm by email — a real person reads every request and replies
                within one business day.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">
                  Request a demo
                  <span aria-hidden>→</span>
                </Link>
                <a href="https://wa.me/919695974444" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Message us on WhatsApp
                </a>
              </div>

              <div className="mt-7 pt-6 border-t border-white/[0.06] text-xs text-zinc-500">
                Prefer to look around first? The{" "}
                <Link href="/live-demo" className="text-indigo-300 hover:text-indigo-200">
                  live demo
                </Link>{" "}
                needs no signup.
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
                  <p className="text-xs uppercase tracking-[0.15em] text-indigo-200 mb-3">
                    What you&apos;ll actually get
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    A working session with the people who build the product — not a scripted pitch.
                    We&apos;ll walk your workflow, show you what AIpath does today, and tell you
                    plainly where it doesn&apos;t fit.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 mb-3">
                  Live in production
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href="https://kiranfabricators.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-zinc-300 hover:text-white transition-colors"
                  >
                    Kiran Fabricators — CRM, ERP &amp; WhatsApp AI
                  </a>
                  <a
                    href="https://bharatcostume.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-zinc-300 hover:text-white transition-colors"
                  >
                    Bharat Costumes — rental platform &amp; CRM
                  </a>
                  <Link
                    href="/case-studies"
                    className="inline-block pt-1 text-indigo-300 hover:text-indigo-200 font-semibold transition-colors"
                  >
                    Read the case studies →
                  </Link>
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
              ["Can I bring my team?", "Yes — bring whoever needs to be in the room."],
              ["Do you support my industry?", "We have shipped for manufacturing and rental/retail. Ask us about yours — we will be straight with you."],
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
