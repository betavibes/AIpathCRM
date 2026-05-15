import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About — AIpath CRM",
  description:
    "AIpath is led by founders who combine product strategy, CRM/ERP expertise, and AI infrastructure leadership to build a premium business operating system.",
};

const team = [
  {
    name: "Aadesh Gupta",
    role: "Co-founder & Director",
    focus: "Sales, Partnerships & Growth",
    body: "Driving business expansion, strategic partnerships, and customer success.",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    name: "Anurag Chaurasia",
    role: "Co-founder & Director",
    focus: "Technology, AI & Infrastructure",
    body: "Spearheading AI systems, platform engineering, and cloud infrastructure.",
    accent: "from-cyan-500 to-indigo-500",
  },
  {
    name: "Anuj Kumar Singh",
    role: "Co-founder & Director",
    focus: "CRM, ERP & Product Strategy",
    body: "Leading product vision, CRM/ERP architecture, and scalable SaaS innovation.",
    accent: "from-violet-500 to-pink-500",
  },
];

const values = [
  ["AI-first", "We don't bolt AI on. It's the substrate of every feature."],
  ["Operator empathy", "Our team has built and shipped at scale. We obsess over the user."],
  ["Speed of iteration", "Ship daily. Learn weekly. Compound monthly."],
  ["Trust by default", "Enterprise security and transparency in every feature, from day one."],
];

const stats = [
  ["1,200+", "Teams running on AIpath"],
  ["40", "Countries served"],
  ["99.99%", "Uptime SLA"],
  ["3.4à—", "Avg. pipeline velocity gain"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Our story"
        title={
          <>
            Building the <span className="text-gradient">operating system</span>
            <br />
            for modern business.
          </>
        }
        subtitle="AIpath was founded on the belief that businesses deserve one intelligent platform — not fourteen disconnected tools — to run on."
      >
        <Link href="/contact" className="btn-primary">Talk to Founders</Link>
        <Link href="/features" className="btn-secondary">Explore the platform</Link>
      </PageHero>

      {/* Stats strip */}
      <section className="py-16 border-y border-white/[0.06] bg-[#161823]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">{n}</p>
                <p className="mt-2 text-sm text-zinc-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <span className="chip"><span className="chip-dot" />Leadership</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              The founders behind <span className="text-gradient">AIpath.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {team.map((p) => (
              <div key={p.name} className="card-glow p-7">
                <div
                  className={`aspect-[4/5] rounded-xl bg-gradient-to-br ${p.accent} relative overflow-hidden mb-6 flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-[#15161F]/60" />
                  <span className="relative text-6xl font-semibold tracking-tight text-white/90">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="text-sm text-indigo-300 font-medium mt-1">{p.role}</p>
                <p className="text-xs text-zinc-500 mt-0.5 uppercase tracking-[0.1em]">{p.focus}</p>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#161823] border-y border-white/[0.06]">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl p-10 border border-white/[0.08] bg-gradient-to-br from-indigo-600/10 to-transparent relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl" />
              <span className="chip relative"><span className="chip-dot" />Vision</span>
              <h3 className="relative mt-5 text-3xl font-semibold tracking-tight">
                Redefine how businesses operate.
              </h3>
              <p className="relative mt-4 text-zinc-400 leading-relaxed">
                A future where every business — from a 5-person startup to a 50,000-person enterprise — runs on one intelligent system, with AI as the underlying fabric.
              </p>
            </div>
            <div className="rounded-2xl p-10 border border-white/[0.08] bg-gradient-to-br from-violet-600/10 to-transparent relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-600/20 blur-3xl" />
              <span className="chip relative"><span className="chip-dot" />Mission</span>
              <h3 className="relative mt-5 text-3xl font-semibold tracking-tight">
                Simplify and automate.
              </h3>
              <p className="relative mt-4 text-zinc-400 leading-relaxed">
                Deliver premium AI-powered workflows, seamless communication, and effortless scalability — for teams that demand more than another business app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-12">
            <span className="chip"><span className="chip-dot" />What we believe</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              How we <span className="text-gradient">build.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            {values.map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl p-7 border border-white/[0.08] bg-white/[0.02]"
              >
                <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Want to <span className="text-gradient">build with us?</span>
            </h2>
            <p className="mt-4 text-zinc-400">Customers, partners, careers — we'd love to talk.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">Get in touch</Link>
              <Link href="/contact" className="btn-secondary">View open roles</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
