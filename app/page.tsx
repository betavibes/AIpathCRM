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
import Compare from "@/components/home/Compare";
import Industries from "@/components/home/Industries";
import WorkDelivered from "@/components/home/WorkDelivered";
import Projects from "@/components/home/Projects";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

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

      {/* 9. Own it — no recurring licence, buy & support, every size */}
      <Ownership />

      {/* 10. Why AIpath vs Tally / Zoho / Salesforce */}
      <Compare />

      {/* 11. Who it's for — industries */}
      <Industries />

      {/* 12. Work we've delivered — real client systems in production */}
      <WorkDelivered />

      {/* 13. Want this built for you? — projects */}
      <Projects />

      {/* 14. FAQ */}
      <FAQ />

      {/* 15. Talk to us — inline lead capture */}
      <ContactCTA />

      <SiteFooter />
    </main>
  );
}
