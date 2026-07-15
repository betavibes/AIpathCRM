import Link from "next/link";

/**
 * The AI-First section — the six AI capabilities that actually ship in AIpath One.
 * Every tile maps to real product code (WhatsApp bot, Gemini invoice OCR, RAG KB,
 * Rekognition attendance, ticket routing, content generation).
 * Adapted from the original home/Capabilities bento styling.
 */

const tiles = [
  {
    title: "Answers your customers on WhatsApp",
    body:
      "Customers chat in plain language — the AI creates orders, quotes and support tickets from the conversation, reads voice notes and photos, and only pulls in a human when it needs to.",
    badge: "Live at Kiran Fabricators",
    accent: "from-emerald-500/25 to-cyan-500/10",
    span: "lg:col-span-2 lg:row-span-2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.63.7.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.52 3.45A11.8 11.8 0 0012.05 0C5.46 0 .1 5.36.1 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.65a11.9 11.9 0 005.7 1.45h.01c6.58 0 11.94-5.36 11.94-11.89a11.8 11.8 0 00-3.48-8.46" />
      </svg>
    ),
  },
  {
    title: "Reads your invoices",
    body:
      "Snap a supplier bill — AI pulls the GSTIN, HSN codes, line items and taxes and fills the purchase entry for you.",
    accent: "from-violet-500/25 to-pink-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Routes every request",
    body:
      "Detects the issue in a message, opens a ticket, and sends it to the right department — automatically.",
    accent: "from-cyan-500/25 to-indigo-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
  },
  {
    title: "Verifies attendance",
    body:
      "Selfie and geo check-in, matched by face recognition. Real attendance, no proxies.",
    accent: "from-amber-500/20 to-pink-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    title: "Answers from your knowledge base",
    body:
      "Semantic search over your own documents, so customers and staff get answers in your words.",
    accent: "from-indigo-500/25 to-blue-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Spots what's coming",
    body:
      "Reads your live data and flags what needs you now — low stock, overdue payments, slow-moving deals — turned into analytics you can act on.",
    accent: "from-blue-500/25 to-cyan-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M3 3v18h18" /><path d="M7 14l3-3 4 4 5-7" /><path d="M17 8h3v3" />
      </svg>
    ),
  },
  {
    title: "Writes your catalog",
    body:
      "Generates product descriptions and tags so your catalog fills itself in.",
    accent: "from-pink-500/25 to-violet-500/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" />
      </svg>
    ),
  },
];

export default function AICapabilities() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="chip">
            <span className="chip-dot" />
            AI-first, for real
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            AI that does the work — <span className="text-gradient-ai">not another chatbot.</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            AIpath One doesn&apos;t bolt an assistant onto the side. Chatbots, agents, automation,
            analytics and forecasting are wired into the data — reading, deciding and acting across
            your business. Here&apos;s how it already earns its keep:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-[13rem] max-w-6xl mx-auto">
          {tiles.map((t) => (
            <div
              key={t.title}
              className={`card-glow relative p-7 flex flex-col justify-between overflow-hidden ${t.span ?? ""}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-50 pointer-events-none`} />
              <div className="relative flex items-start justify-between gap-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white shrink-0">
                  {t.icon}
                </div>
                {t.badge && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {t.badge}
                  </span>
                )}
              </div>
              <div className="relative mt-6">
                <h3 className={`font-semibold tracking-tight ${t.span ? "text-2xl" : "text-lg"}`}>
                  {t.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link href="/live-demo" className="btn-primary">
            See the AI in action
            <span aria-hidden>→</span>
          </Link>
          <p className="text-sm text-zinc-500">
            Running in production at{" "}
            <a href="https://kiranfabricators.in" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
              Kiran Fabricators
            </a>{" "}
            today.
          </p>
        </div>
      </div>
    </section>
  );
}
