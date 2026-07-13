import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Case Studies — Real Systems Running on AIpath | AIpath CRM",
  description:
    "See AIpath in production: a complete CRM, ERP, WhatsApp AI and mobile system running Kiran Fabricators, and an end-to-end rental platform running Bharat Costumes. Real businesses, live today.",
};

type CaseStudy = {
  name: string;
  location: string;
  industry: string;
  image: string;
  url: string;
  urlLabel: string;
  challenge: string;
  built: string[];
  outcome: string;
  highlight: string | null;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    name: "Kiran Fabricators",
    location: "Lucknow, India",
    industry: "Manufacturing & Fabrication",
    image: "/work/kiran.png",
    url: "https://kiranfabricators.in",
    urlLabel: "kiranfabricators.in",
    challenge:
      "A growing fabrication business was running purchase, sales, accounts, staff coordination and customer queries across disconnected tools and manual processes. They needed one connected system to run the entire operation — and an AI layer to handle customer conversations.",
    built: [
      "Business website",
      "CRM & ERP — purchase, sales, accounts",
      "AI chatbot on the website",
      "WhatsApp AI assistant",
      "Staff mobile app",
      "Task & delivery management",
    ],
    outcome:
      "One connected platform now runs the whole business — sales, purchase, accounts, staff and customer communication in a single place, with AI handling routine queries on both web and WhatsApp.",
    highlight: "AIpath One runs live in production here — this is our flagship platform in the wild.",
    tags: ["Website", "CRM & ERP", "AI Chatbot", "WhatsApp AI", "Mobile App", "Task & Delivery"],
  },
  {
    name: "Bharat Costumes",
    location: "New Delhi, India",
    industry: "Costume Rental & Retail",
    image: "/work/bharat.png",
    url: "https://bharatcostume.com",
    urlLabel: "bharatcostume.com",
    challenge:
      "A costume rental business relied on manual bookings and offline records. They wanted the entire operation online — catalog, bookings, customer accounts and returns — across both web and mobile, backed by a proper CRM.",
    built: [
      "Business website",
      "Rental platform — catalog & bookings",
      "Customer-facing web app",
      "Mobile app",
      "End-to-end CRM with accounts & bookings",
    ],
    outcome:
      "Rental operations are fully digitized end to end — customers browse, book and manage rentals online, while the business runs its catalog, bookings and customers from one CRM.",
    highlight: null,
    tags: ["Website", "Rental Platform", "Web App", "Mobile App", "CRM"],
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen bg-[#0E0F1A] text-zinc-100 overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Real systems, <span className="text-gradient">live in production</span>.
          </>
        }
        subtitle="We don't sell slideware. We design, build, ship and run. Here's real work delivered for real clients — with our name in their website footer."
      >
        <Link href="/demo" className="btn-primary">
          Book a Demo
          <span aria-hidden>→</span>
        </Link>
        <Link href="/live-demo" className="btn-secondary">
          Try the live demo
        </Link>
      </PageHero>

      {/* Capability strip */}
      <section className="pb-8">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {["CRM & ERP", "AI & WhatsApp AI", "Mobile & Web Apps", "Rental Platform"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.map((cs, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={cs.name}
            className={
              flipped
                ? "py-24 bg-[#161823] border-y border-white/[0.06]"
                : "py-24"
            }
          >
            <div className="container mx-auto px-5">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center max-w-6xl mx-auto">
                {/* Screenshot */}
                <div className={flipped ? "lg:order-2" : ""}>
                  <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#15161F] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]">
                    {/* browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="ml-3 truncate text-xs text-zinc-500 font-mono">{cs.urlLabel}</span>
                    </div>
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={cs.image}
                        alt={`${cs.name} — system built and delivered by AIpath`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="absolute top-14 right-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                      <CheckIcon className="w-3.5 h-3.5" />
                      Delivered
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={flipped ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                    <span>{cs.location}</span>
                    <span className="opacity-40">·</span>
                    <span>{cs.industry}</span>
                  </div>

                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
                    {cs.name}
                  </h2>

                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    {cs.urlLabel}
                    <ExternalIcon className="w-3.5 h-3.5" />
                  </a>

                  <div className="mt-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-2">
                      The challenge
                    </div>
                    <p className="text-zinc-400 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="mt-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-3">
                      What we built
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {cs.built.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200 mb-2">
                      The outcome
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{cs.outcome}</p>
                  </div>

                  {cs.highlight && (
                    <div className="mt-4 flex items-start gap-2.5 text-sm font-medium text-indigo-200">
                      <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />
                      {cs.highlight}
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-[0.65rem] uppercase tracking-[0.15em] text-zinc-600 font-medium">
                    Credited in the client&apos;s website footer
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 max-w-5xl mx-auto text-center">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/25 blur-3xl animate-orb-drift pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/25 blur-3xl animate-orb-drift pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
                Want a system like these for your business?
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
                Tell us what you want to run better — we&apos;ll show you exactly how we&apos;d build it, with a clear plan and estimate.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a free consultation
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/demo" className="btn-secondary">
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
