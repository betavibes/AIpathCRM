import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Kiran Fabricators",
    location: "Lucknow, India",
    industry: "Manufacturing & Fabrication",
    image: "/work/kiran.png",
    url: "https://kiranfabricators.in",
    urlLabel: "kiranfabricators.in",
    scope:
      "Runs the entire operation on AIpath One — CRM & ERP for purchase, sales and accounts, an AI chatbot on the website, a WhatsApp AI assistant, a staff mobile app, and task & delivery management.",
    tags: ["CRM & ERP", "WhatsApp AI", "AI Chatbot", "Mobile App"],
    powered: true,
  },
  {
    name: "Bharat Costumes",
    location: "New Delhi, India",
    industry: "Costume Rental & Retail",
    image: "/work/bharat.png",
    url: "https://bharatcostume.com",
    urlLabel: "bharatcostume.com",
    scope:
      "A rental business taken fully online — catalog and bookings, a customer web app, a mobile app, and a CRM running customer accounts, bookings and returns end to end.",
    tags: ["Rental Platform", "Web App", "Mobile App", "CRM"],
    powered: false,
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function WorkDelivered() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Work we&apos;ve delivered
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Real businesses, <span className="text-gradient">live in production</span>.
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Not slideware. These are complete systems we designed, built and shipped — running the day-to-day of real companies right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <article key={p.name} className="card-glow overflow-hidden group flex flex-col">
              {/* Screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#15161F]">
                <Image
                  src={p.image}
                  alt={`${p.name} — system built and delivered by AIpath`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E2A] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  <CheckIcon className="w-3.5 h-3.5" />
                  Delivered
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                  <span>{p.location}</span>
                  <span className="opacity-40">·</span>
                  <span>{p.industry}</span>
                </div>

                <h3 className="mt-2.5 text-2xl font-semibold tracking-tight text-zinc-100">
                  {p.name}
                </h3>

                {p.powered && (
                  <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22D3EE]" />
                    Powered by AIpath One
                  </span>
                )}

                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{p.scope}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    {p.urlLabel}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden>
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                  <span className="text-[0.65rem] uppercase tracking-[0.15em] text-zinc-600 font-medium">
                    Live site
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <Link href="/case-studies" className="btn-primary">
            Read the full case studies
            <span aria-hidden>→</span>
          </Link>
          <p className="text-sm text-zinc-500">
            Two systems, both live and in daily use.
          </p>
        </div>
      </div>
    </section>
  );
}
