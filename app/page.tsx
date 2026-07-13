import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import AILayer from "@/components/home/AILayer";
import Integrations from "@/components/home/Integrations";
import WorkDelivered from "@/components/home/WorkDelivered";
import FAQ from "@/components/home/FAQ";
import WhatsAppAIDemo from "@/components/showcase/WhatsAppAIDemo";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0E0F1A] text-zinc-100 overflow-x-hidden">
      <SiteNav />

      {/* 1. Hero */}
      <Hero />

      {/* 2. How it works (3 steps) */}
      <HowItWorks />

      {/* 3. Flagship live demo — WhatsApp AI */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="chip">
              <span className="chip-dot" />
              Flagship demo · WhatsApp AI
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
              See it in action — <span className="text-gradient-ai">no signup needed.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg">
              Customers chat. AI creates quotes, orders, and tickets — automatically. Try every other module on the live demo page.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <WhatsAppAIDemo />
          </div>
          <div className="mt-10 text-center">
            <Link href="/live-demo" className="btn-secondary">
              Try CRM, ERP, HR & more →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. AI layer terminal */}
      <AILayer />

      {/* 5. Integrations marquee */}
      <Integrations />

      {/* 6. Work we've delivered — real client systems in production */}
      <WorkDelivered />

      {/* 7. FAQ */}
      <FAQ />

      <SiteFooter />
    </main>
  );
}
