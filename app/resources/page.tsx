import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import { posts, categories } from "./posts";

export const metadata = {
  title: "Resources — AIpath CRM",
  description:
    "Guides, customer stories, engineering deep-dives, and product updates from the AIpath team.",
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function ResourcesPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="min-h-screen bg-[#0E0F1A] text-white overflow-x-hidden">
      <SiteNav />

      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides, stories,{" "}
            <span className="text-gradient">and deep dives.</span>
          </>
        }
        subtitle="Practical writing on AI, operations, and what we're learning building AIpath."
      />

      {/* Categories filter (visual) */}
      <section className="pb-12">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            <span className="chip !bg-white/[0.06] !border-white/[0.1] !text-white">All posts</span>
            {categories.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 text-xs rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container mx-auto px-5">
          <Link
            href={`/resources/${featured.slug}`}
            className="block max-w-6xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:border-indigo-500/30 transition-colors overflow-hidden group"
          >
            <div className="grid md:grid-cols-2">
              <div className={`relative h-64 md:h-auto bg-gradient-to-br ${featured.accent} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-semibold tracking-tight text-white/20">
                    {featured.author.initials}
                  </span>
                </div>
                <div className="absolute top-5 left-5">
                  <span className="chip">
                    <span className="chip-dot" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-200">
                    {featured.category}
                  </span>
                  <span>{fmtDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readingTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-gradient transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-zinc-400 leading-relaxed">{featured.excerpt}</p>
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-bold">
                    {featured.author.initials}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-zinc-200">{featured.author.name}</p>
                    <p className="text-xs text-zinc-500">{featured.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="card-glow flex flex-col overflow-hidden"
              >
                <div className={`relative h-40 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-semibold tracking-tight text-white/15">
                      {p.author.initials}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/40 backdrop-blur border border-white/10 text-zinc-200">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-zinc-500 mb-3">
                    <span>{fmtDate(p.date)}</span>
                    <span>·</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="mt-auto pt-5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-[10px] font-bold">
                      {p.author.initials}
                    </div>
                    <p className="text-xs text-zinc-400">{p.author.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Operator-grade writing, <span className="text-gradient">in your inbox.</span>
              </h2>
              <p className="mt-4 text-zinc-400">
                One thoughtful piece per week. No spam, no list-rentals, unsubscribe in one click.
              </p>
              <form className="mt-7 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-[#15161F] border border-white/10 rounded-full px-5 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
              <p className="mt-3 text-xs text-zinc-500">Joins 12,000+ operators reading weekly.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
