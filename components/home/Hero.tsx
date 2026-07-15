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
              AI-First Business OS · Live at Kiran Fabricators
            </span>
          </div>

          {/* Product name */}
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1] tracking-tight animate-slide-up">
            <span className="text-zinc-100">AIpath </span>
            <span className="text-gradient">One</span>
          </h1>

          {/* Positioning line */}
          <p
            className="mt-5 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-200 animate-slide-up"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            CRM<span className="text-indigo-400 mx-1">.</span>
            ERP<span className="text-violet-400 mx-1">.</span>
            AI<span className="text-pink-400">.</span>
          </p>

          {/* Extended tagline */}
          <p
            className="mt-5 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up"
            style={{ animationDelay: "160ms", animationFillMode: "both" }}
          >
            Run your entire business from one system — and let{" "}
            <span className="text-zinc-100 font-semibold">AI handle the busywork</span>. It answers
            your customers on WhatsApp, reads your supplier invoices, and keeps your books moving.
          </p>

          <p
            className="mt-3 text-sm md:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "220ms", animationFillMode: "both" }}
          >
            Sales, stock, accounts, staff and customer chat — on{" "}
            <span className="text-zinc-300">web, mobile and WhatsApp</span>.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up"
            style={{ animationDelay: "240ms", animationFillMode: "both" }}
          >
            <Link href="/contact" className="btn-primary">
              Book a Demo
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to us
            </Link>
            <Link href="/features" className="btn-ghost ml-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/15 bg-white/5">
                ▶
              </span>
              Explore the product
            </Link>
          </div>

          {/* Trust strip */}
          <div
            className="mt-14 flex flex-col items-center gap-5 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "both" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Live in production today
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <a
                href="https://kiranfabricators.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white font-semibold tracking-wide text-sm transition-colors"
              >
                Kiran Fabricators
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="https://bharatcostume.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white font-semibold tracking-wide text-sm transition-colors"
              >
                Bharat Costumes
              </a>
              <Link
                href="/case-studies"
                className="text-indigo-300 hover:text-indigo-200 text-sm font-semibold transition-colors"
              >
                See the work →
              </Link>
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
