import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Pillars from "@/components/home/Pillars";
import Platform from "@/components/home/Platform";
import AICapabilities from "@/components/home/AICapabilities";
import Omnichannel from "@/components/home/Omnichannel";
import Security from "@/components/home/Security";
import Ownership from "@/components/home/Ownership";
import WorkDelivered from "@/components/home/WorkDelivered";
import Projects from "@/components/home/Projects";
import FAQ from "@/components/home/FAQ";
import WhatsAppAIDemo from "@/components/showcase/WhatsAppAIDemo";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0E0F1A] text-zinc-100 overflow-x-hidden">
      <SiteNav />

      {/* 1. Hero — CRM + ERP + AI, every device, no recurring cost */}
      <Hero />

      {/* 2. The problem — scattered tools */}
      <Problem />

      {/* 3. Three pillars — CRM · ERP · AI */}
      <Pillars />

      {/* 4. The full system — real CRM + ERP modules */}
      <Platform />

      {/* 5. AI-first — chatbot, agents, automation, analytics, forecasting */}
      <AICapabilities />

      {/* 6. Flagship live demo — WhatsApp AI */}
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

      {/* 7. One system, every device */}
      <Omnichannel />

      {/* 8. Security — RBAC, MFA, encryption, audit */}
      <Security />

      {/* 9. Own it — no recurring licence, every size */}
      <Ownership />

      {/* 10. Work we've delivered — real client systems in production */}
      <WorkDelivered />

      {/* 11. Want this built for you? — projects */}
      <Projects />

      {/* 12. FAQ */}
      <FAQ />

      <SiteFooter />
    </main>
  );
}
