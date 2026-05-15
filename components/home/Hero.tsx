import Link from "next/link";
import BusinessSystemHero from "@/components/dashboards/BusinessSystemHero";

export default function Hero() {
  return (
    <section className="relative pt-36 md:pt-48 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[40rem] h-[40rem] rounded-full bg-indigo-600/20 blur-[120px] animate-orb-drift pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[36rem] h-[36rem] rounded-full bg-violet-600/20 blur-[120px] animate-orb-drift pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0E0F1A] pointer-events-none" />

      <div className="container mx-auto px-5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex animate-fade-in">
            <span className="chip">
              <span className="chip-dot" />
              Introducing AIpath CRM 2.0 — AI Agents now live
            </span>
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-slide-up">
            <span className="block text-zinc-100">AIpath CRM —</span>
            <span className="block mt-1 md:mt-2">
              CRM. ERP. AI. <span className="text-gradient">Unified.</span>
            </span>
          </h1>

          <p
            className="mt-7 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            An AI-First Business Operating System designed to{" "}
            <span className="text-zinc-100 font-medium">automate operations</span>,{" "}
            <span className="text-zinc-100 font-medium">streamline growth</span>,
            and run your entire business from one intelligent platform.
          </p>

          <p
            className="mt-4 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            From sales to service, finance to communication — AIpath brings everything together across{" "}
            <span className="text-zinc-200">web, mobile, and messaging</span> platforms.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up"
            style={{ animationDelay: "240ms", animationFillMode: "both" }}
          >
            <Link href="/demo" className="btn-primary">
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Start Free Trial
            </Link>
            <Link href="/features" className="btn-ghost ml-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/15 bg-white/5">
                ▶
              </span>
              Watch 90-sec tour
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 flex flex-col items-center gap-5 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Trusted by 1,200+ teams across 40 countries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
              {["Acme", "Globex", "Initech", "Umbrella", "Hooli", "Stark", "Wayne"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-zinc-400 font-semibold tracking-wider text-sm"
                  >
                    {name.toUpperCase()}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Full Business System composition */}
        <div
          className="mt-20 relative max-w-6xl mx-auto animate-slide-up"
          style={{ animationDelay: "560ms", animationFillMode: "both" }}
        >
          <BusinessSystemHero />
        </div>
      </div>
    </section>
  );
}
