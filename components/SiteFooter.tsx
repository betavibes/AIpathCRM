import Link from "next/link";
import Logo from "@/components/Logo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/features" },
      { label: "Live Demo", href: "/live-demo" },
      { label: "CRM Module", href: "/features" },
      { label: "ERP Module", href: "/features" },
      { label: "AI & Automation", href: "/features" },
      { label: "Mobile App", href: "/mobile" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "All industries", href: "/solutions" },
      { label: "Manufacturing", href: "/solutions" },
      { label: "SaaS & Tech", href: "/solutions" },
      { label: "Healthcare", href: "/solutions" },
      { label: "Retail", href: "/solutions" },
      { label: "Services", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why AIpath", href: "/why-aipath" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Book Demo", href: "/demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/resources" },
      { label: "Customer Stories", href: "/resources" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/features" },
      { label: "Help Center", href: "/contact" },
      { label: "API", href: "/features" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#161823] pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-x-0 -top-40 h-80 bg-mesh opacity-40 pointer-events-none" />
      <div className="container mx-auto px-5 relative">
        {/* CTA strip */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-transparent p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-600/30 blur-3xl animate-orb-drift" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/30 blur-3xl animate-orb-drift" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Stop running 14 tools.
                <br />
                Start running your business.
              </h3>
              <p className="mt-4 text-zinc-400 max-w-md">
                Replace your scattered stack with one AI-native operating system. Your teams will thank you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/demo" className="btn-primary">
                Book a Demo
                <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="mb-5">
              <Logo size="md" />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              The AI-First Business Operating System. CRM, ERP, automation, and intelligent agents — unified.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-zinc-500">
              <span className="chip-dot" />
              All systems operational
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} AIpath CRM. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="opacity-60">SOC 2</span>
              <span className="opacity-60">·</span>
              <span className="opacity-60">ISO 27001</span>
              <span className="opacity-60">·</span>
              <span className="opacity-60">GDPR</span>
            </span>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>

        {/* Developed by */}
        <div className="mt-6 text-center text-xs text-zinc-500">
          Developed by{" "}
          <a
            href="https://www.aipathdiginext.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-zinc-300 hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            AIpath DigiNex Private Limited
          </a>
        </div>
      </div>
    </footer>
  );
}
