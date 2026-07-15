import AnalyticsDashboard from "@/components/dashboards/AnalyticsDashboard";
import MobileFrames from "@/components/dashboards/MobileFrames";

const channels = [
  {
    name: "Web app",
    desc: "Full platform in the browser",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="2" y="4" width="20" height="14" rx="2" /><path d="M2 9h20M8 21h8" />
      </svg>
    ),
  },
  {
    name: "Mobile app",
    desc: "iOS & Android, offline-ready",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "Tablet",
    desc: "Same app, bigger screen",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    desc: "AI answers your customers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.63.7.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.52 3.45A11.8 11.8 0 0012.05 0C5.46 0 .1 5.36.1 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.65a11.9 11.9 0 005.7 1.45h.01c6.58 0 11.94-5.36 11.94-11.89a11.8 11.8 0 00-3.48-8.46" />
      </svg>
    ),
  },
  {
    name: "Website",
    desc: "Storefront + AI chatbot",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
      </svg>
    ),
  },
  {
    name: "AI chatbot",
    desc: "On web & WhatsApp, 24/7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /><path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
];

export default function Omnichannel() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06] overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            One system, everywhere
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Centralised data. <span className="text-gradient">Every screen your business uses.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            One database at the centre — reached from the web, native mobile and tablet apps, your
            website, and WhatsApp. Your team, your customers and your AI all work off the same live
            information, wherever they are.
          </p>
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto mb-16">
          {channels.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center hover:border-indigo-500/30 transition-colors"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
                {c.icon}
              </span>
              <p className="mt-3 text-sm font-semibold text-zinc-100">{c.name}</p>
              <p className="mt-0.5 text-xs text-zinc-500">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Same system, web + mobile */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnalyticsDashboard />
          </div>
          <div className="-mt-4">
            <MobileFrames />
          </div>
          <p className="text-center text-sm text-zinc-500 mt-2">
            The same platform on web and mobile — sample data shown for illustration.
          </p>
        </div>
      </div>
    </section>
  );
}
