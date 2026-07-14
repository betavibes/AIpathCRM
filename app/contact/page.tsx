import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT } from "@/lib/contact";

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

              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-5">Reach us directly</h3>
                <div className="space-y-5">
                  <ContactRow
                    icon={<PhoneIcon />}
                    label="Phone — India"
                    href={`tel:${CONTACT.phones[0].tel}`}
                    value={CONTACT.phones[0].display}
                  />
                  <ContactRow
                    icon={<PhoneIcon />}
                    label="Phone — Singapore"
                    href={`tel:${CONTACT.phones[1].tel}`}
                    value={CONTACT.phones[1].display}
                  />
                  <ContactRow
                    icon={<MailIcon />}
                    label="Email"
                    href={`mailto:${CONTACT.emails.general}`}
                    value={CONTACT.emails.general}
                    sub={`Sales — ${CONTACT.emails.sales}`}
                  />
                </div>

                <div className="mt-7 pt-6 border-t border-white/[0.06]">
                  <WhatsAppButton className="w-full" />
                  <p className="mt-3 text-center text-xs text-zinc-500">
                    {CONTACT.whatsapp.display}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-5">Our presence</h3>
                <div className="space-y-5">
                  <ContactRow
                    icon={<PinIcon />}
                    label={CONTACT.offices.singapore.label}
                    value={CONTACT.offices.singapore.address}
                    sub={CONTACT.offices.singapore.city}
                  />
                  <ContactRow
                    icon={<PinIcon />}
                    label={CONTACT.offices.india.label}
                    value={CONTACT.offices.india.address}
                    sub={CONTACT.offices.india.city}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <h3 className="text-lg font-semibold tracking-tight mb-4">Business hours</h3>
                <div className="space-y-2.5 text-sm">
                  <Row k={CONTACT.hours.weekdays} v={CONTACT.hours.weekdayTime} />
                  <Row k={CONTACT.hours.weekend} v={CONTACT.hours.weekendTime} muted />
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs text-zinc-500">
                  <span className="chip-dot" />
                  We reply within one business day
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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
