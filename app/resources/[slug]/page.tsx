import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { posts, getPost } from "../posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — AIpath" };
  return {
    title: `${post.title} — AIpath`,
    description: post.excerpt,
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#07070C] text-white overflow-x-hidden">
      <SiteNav />

      {/* Article hero */}
      <section className="relative pt-36 md:pt-44 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className={`absolute inset-x-0 top-32 h-96 bg-gradient-to-b ${post.accent} opacity-50 blur-3xl pointer-events-none`} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#07070C] pointer-events-none" />

        <div className="container mx-auto px-5 relative">
          <div className="max-w-3xl mx-auto">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8">
              <span aria-hidden>←</span> All resources
            </Link>

            <div className="flex items-center gap-3 text-xs text-zinc-400 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 font-semibold">
                {post.category}
              </span>
              <span>{fmtDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">{post.excerpt}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-sm font-bold">
                {post.author.initials}
              </div>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-xs text-zinc-500">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="pb-20">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto prose-invert">
            {post.content.map((block, i) => {
              switch (block.type) {
                case "p":
                  return (
                    <p key={i} className="text-zinc-300 text-lg leading-[1.75] mt-6">
                      {block.text}
                    </p>
                  );
                case "h2":
                  return (
                    <h2 key={i} className="text-3xl font-semibold tracking-tight mt-14 mb-2">
                      {block.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3 key={i} className="text-xl font-semibold tracking-tight mt-10 mb-1 text-zinc-100">
                      {block.text}
                    </h3>
                  );
                case "ul":
                  return (
                    <ul key={i} className="mt-5 space-y-2.5">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed">
                          <span className="mt-2.5 inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={i}
                      className="mt-10 border-l-2 border-indigo-500/60 pl-6 py-2 italic"
                    >
                      <p className="text-xl text-zinc-100 leading-relaxed">"{block.text}"</p>
                      {block.cite && (
                        <p className="mt-3 text-sm text-zinc-500 not-italic">— {block.cite}</p>
                      )}
                    </blockquote>
                  );
                case "callout":
                  return (
                    <div
                      key={i}
                      className="mt-10 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent p-6"
                    >
                      <div className="flex gap-4">
                        <div className="w-9 h-9 rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-base font-bold shrink-0">✦</div>
                        <p className="text-base text-zinc-100 leading-relaxed">{block.text}</p>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 mr-2">Tags</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-10 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              See AIpath in <span className="text-gradient">action.</span>
            </h2>
            <p className="mt-3 text-zinc-400">A 30-min walkthrough — tailored to your business.</p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo" className="btn-primary">Book a Demo</Link>
              <Link href="/resources" className="btn-secondary">More resources</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-28">
        <div className="container mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Keep reading</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/${p.slug}`}
                  className="card-glow flex flex-col overflow-hidden"
                >
                  <div className={`relative h-32 bg-gradient-to-br ${p.accent} flex items-center justify-center`}>
                    <span className="text-4xl font-semibold tracking-tight text-white/15">
                      {p.author.initials}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold text-indigo-300 uppercase tracking-[0.1em]">{p.category}</span>
                    <h4 className="mt-2 text-base font-semibold leading-snug">{p.title}</h4>
                    <p className="mt-2 text-xs text-zinc-500">{p.readingTime} · {fmtDate(p.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
