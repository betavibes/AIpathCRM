import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import MobileFrames, { PhoneDashboard, PhoneAttendance, PhoneInbox } from "@/components/dashboards/MobileFrames";

export const metadata = {
  title: "Mobile App — AIpath CRM",
  description:
    "Native iOS & Android apps with offline mode, GPS attendance, push intelligence, and field-ops dashboards. Your business in your pocket.",
};

const features = [
  {
    title: "Native iOS & Android",
    body: "Built ground-up for each platform — not a web wrapper. Sub-second navigation, native gestures.",
    icon: "◆",
  },
  {
    title: "Offline mode",
    body: "Work in low-signal areas — capture data, sync intelligently when you're back online.",
    icon: "✦",
  },
  {
    title: "GPS attendance",
    body: "Selfie + geofence verified check-ins, to make proxy attendance far harder.",
    icon: "◇",
  },
  {
    title: "Push intelligence",
    body: "AI-curated alerts only. Approvals, escalations, deal updates — never noise.",
    icon: "◈",
  },
  {
    title: "Voice + dictation",
    body: "Log calls, update deals, create tasks by voice. Built for the field.",
    icon: "●",
  },
  {
    title: "Biometric security",
    body: "FaceID, TouchID, fingerprint. Enterprise SSO and MFA enforced.",
    icon: "▣",
  },
];

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="iOS · Android · Offline-ready"
        title={
          <>
            Your business.{" "}
            <span className="text-gradient">In your pocket.</span>
          </>
        }
        subtitle="Native apps engineered for sales reps, technicians, ops teams, and executives — anyone who doesn't sit at a desk all day."
      >
        <Link className="btn-primary" href="/contact">See it in a demo</Link>
        <Link className="btn-secondary" href="/contact">Ask about early access</Link>
      </PageHero>

      {/* Hero phones */}
      <section className="pb-16">
        <div className="container mx-auto px-5">
          <MobileFrames />
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <span className="chip"><span className="chip-dot" />Capabilities</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Built for the way <span className="text-gradient">field teams</span> work.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-glow p-7">
                <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-lg shadow-lg shadow-indigo-500/20 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three deep-dives */}
      <section className="py-24">
        <div className="container mx-auto px-5 space-y-24">
          {/* 1. Dashboard */}
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="chip"><span className="chip-dot" />Dashboard</span>
              <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
                Your day, <span className="text-gradient">at a glance.</span>
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Pipeline value, today's tasks, AI-curated next actions. The first
                thing your reps see when they open the app.
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneDashboard />
            </div>
          </div>

          {/* 2. Attendance */}
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="lg:order-2">
              <span className="chip"><span className="chip-dot" />Attendance</span>
              <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
                GPS-verified <span className="text-gradient">check-ins.</span>
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Selfie + geofence prevents proxy attendance. Live timeline tracks
                visits, transit, and on-site time — automatically.
              </p>
            </div>
            <div className="lg:order-1 flex justify-center">
              <PhoneAttendance />
            </div>
          </div>

          {/* 3. Inbox */}
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div>
              <span className="chip"><span className="chip-dot" />Omnichannel inbox</span>
              <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">
                WhatsApp, email, SMS — <span className="text-gradient">one inbox.</span>
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                AI drafts replies in your tone. One tap to send. Every conversation
                automatically attached to the deal, contact, or ticket.
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneInbox />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Download AIpath <span className="text-gradient">today.</span>
                </h2>
                <p className="mt-3 text-zinc-400">Deployed directly to your team today. Public app-store listings are on the way — ask us for access.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link className="btn-primary" href="/contact">See it in a demo</Link>
                <Link className="btn-secondary" href="/contact">Ask about early access</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
