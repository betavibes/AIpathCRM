import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT } from "@/lib/contact";

export default function ContactCTA() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          {/* Pitch */}
          <div className="lg:pt-6">
            <span className="chip">
              <span className="chip-dot" />
              Let&apos;s talk
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
              See it on <span className="text-gradient">your business.</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Tell us what you want to run better. We&apos;ll show you exactly how AIpath One would
              handle it — a real walkthrough on your workflows, and a clear plan and price. No hard
              sell.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "A working demo on your real processes",
                "A clear scope and a one-time price",
                "Honest answers — including where it doesn't fit",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">✓</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <WhatsAppButton />
              <p className="mt-3 text-sm text-zinc-500">
                Prefer to talk now? Message us on WhatsApp — {CONTACT.whatsapp.display}.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-tight mb-1">Send us a message</h3>
            <p className="text-sm text-zinc-500 mb-7">We reply within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
