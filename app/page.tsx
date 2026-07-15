import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Pillars from "@/components/home/Pillars";
import ModuleShowcase from "@/components/home/ModuleShowcase";
import AICapabilities from "@/components/home/AICapabilities";
import Omnichannel from "@/components/home/Omnichannel";
import Security from "@/components/home/Security";
import Ownership from "@/components/home/Ownership";
import WorkDelivered from "@/components/home/WorkDelivered";
import Projects from "@/components/home/Projects";
import FAQ from "@/components/home/FAQ";

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

      {/* 4. The whole platform — every module, alternating showcases */}
      <ModuleShowcase />

      {/* 5. AI-first — chatbot, agents, automation, analytics, forecasting */}
      <AICapabilities />

      {/* 6. One system, every device */}
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
