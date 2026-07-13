import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact — AIpath CRM",
  description:
    "Talk to the AIpath team. Book a demo or ask us a question — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="We reply within one business day"
        title={
          <>
            Let's build your <span className="text-gradient">business OS.</span>
          </>
        }
        subtitle="Whether you want a demo, want to migrate from an existing CRM, or have a custom requirement — talk to us."
      />

      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
              <h2 className="text-2xl font-semibold tracking-tight mb-1">Send us a message</h2>
              <p className="text-sm text-zinc-500 mb-7">We'll get back within one business day.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">Work email</label>
                  <input
                    type="email"
                    className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">Team size</label>
                    <select
                      className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Select...</option>
                      <option>1—10</option>
                      <option>11—50</option>
                      <option>51—200</option>
                      <option>201—1,000</option>
                      <option>1,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2">How can we help?</label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                    placeholder="Tell us about your business, current stack, and what you're trying to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary !py-3.5"
                >
                  Send message <span aria-hidden>→</span>
                </button>

                <p className="text-xs text-zinc-500 text-center">
                  We use what you send us only to reply to you. We do not sell or share your details.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-5">Reach us directly</h3>
                <div className="space-y-5">
                  <ContactRow
                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                    label="Office"
                    value="Khasra No. 562, Mubarakpur, IIM Road"
                    sub="Lucknow — 226013, India"
                  />
                  <ContactRow
                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>}
                    label="Email"
                    href="mailto:contact@aipathcrm.com"
                    value="contact@aipathcrm.com"
                  />
                  <ContactRow
                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>}
                    label="Phone"
                    href="tel:+919695974444"
                    value="+91 96959 74444"
                  />
                  <ContactRow
                    icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>}
                    label="WhatsApp"
                    href="https://wa.me/6586958473"
                    value="+65 8695 8473"
                    accent="emerald"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-4">Business hours</h3>
                <div className="space-y-2.5 text-sm">
                  <Row k="Mon — Fri" v="9:00 AM — 6:00 PM IST" />
                  <Row k="Saturday" v="10:00 AM — 4:00 PM IST" />
                  <Row k="Sunday" v="Closed" muted />
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs text-zinc-500">
                  <span className="chip-dot" />
                  We reply within one business day
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/10 to-transparent p-7">
                <h3 className="text-lg font-semibold tracking-tight">Prefer a call?</h3>
                <p className="mt-2 text-sm text-zinc-400">Skip the email — book a 30-min slot directly.</p>
                <a href="/contact" className="btn-primary mt-5 !py-2.5 !px-5 text-sm">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ContactRow({
  icon,
  label,
  value,
  sub,
  href,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  href?: string;
  accent?: "emerald";
}) {
  const colors = accent === "emerald"
    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/20"
    : "bg-indigo-500/15 text-indigo-300 border-indigo-500/20";
  const valueClass = accent === "emerald" ? "hover:text-emerald-300" : "hover:text-indigo-300";
  return (
    <div className="flex items-start gap-4">
      <div className={`shrink-0 w-10 h-10 rounded-lg border ${colors} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{label}</p>
        {href ? (
          <a href={href} className={`block text-sm text-zinc-200 mt-1 transition-colors ${valueClass}`}>
            {value}
          </a>
        ) : (
          <p className="text-sm text-zinc-200 mt-1">{value}</p>
        )}
        {sub && <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function Row({ k, v, muted }: { k: string; v: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-zinc-400">{k}</span>
      <span className={muted ? "text-zinc-600" : "text-zinc-200"}>{v}</span>
    </div>
  );
}
