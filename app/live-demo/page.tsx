import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LiveDemoTabs from "@/components/LiveDemoTabs";

export const metadata = {
  title: "Live Demo — AIpath CRM",
  description:
    "Try every module of AIpath CRM live in your browser. CRM, ERP, WhatsApp AI, Attendance, and Operations — all interactive, no signup needed.",
};

export default function LiveDemoPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-zinc-100 overflow-x-hidden">
      <SiteNav />

      {/* Compact hero */}
      <section className="relative pt-32 md:pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-[36rem] h-[36rem] rounded-full bg-indigo-600/15 blur-[120px] animate-orb-drift pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0E0F1A] pointer-events-none" />

        <div className="container mx-auto px-5 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip">
              <span className="chip-dot" />
              No signup · Click through any module
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Take AIpath for a <span className="text-gradient">test drive.</span>
            </h1>
            <p className="mt-5 text-lg text-zinc-400 max-w-2xl mx-auto">
              Five live product modules. Switch between them with the tabs below — see how AIpath replaces your stack.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo" className="btn-primary">
                Book a personalized demo
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + showcases */}
      <section className="pb-24">
        <div className="container mx-auto px-5">
          <LiveDemoTabs />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl" />
            <h2 className="relative text-3xl md:text-4xl font-semibold tracking-tight">
              Want to see <span className="text-gradient">your data</span> in here?
            </h2>
            <p className="relative mt-4 text-zinc-400 max-w-xl mx-auto">
              30-minute personalized walkthrough — bring your real workflows, leave with a working sandbox.
            </p>
            <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo" className="btn-primary">Book a demo</Link>
              <Link href="/contact" className="btn-secondary">Talk to sales</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
