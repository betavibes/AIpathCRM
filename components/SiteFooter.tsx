import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT } from "@/lib/contact";

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
      { label: "Why AIpath", href: "/why-aipath" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Customer Stories", href: "/case-studies" },
      { label: "Contact us", href: "/contact" },
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
                Stop stitching tools together.
                <br />
                Start running your business.
              </h3>
              <p className="mt-4 text-zinc-400 max-w-md">
                Replace your scattered stack with one AI-native operating system. Your teams will thank you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Demo
                <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get a free consultation
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

            <div className="mt-6 space-y-2 text-sm">
              {CONTACT.phones.map((p) => (
                <p key={p.tel} className="text-zinc-500">
                  <span className="text-zinc-600">{p.country}</span>{" "}
                  <a href={`tel:${p.tel}`} className="text-zinc-300 hover:text-white transition-colors">
                    {p.display}
                  </a>
                </p>
              ))}
              <p>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  WhatsApp {CONTACT.whatsapp.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.emails.general}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {CONTACT.emails.general}
                </a>
              </p>
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              Built and run by AIpath DigiNext Private Limited.
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

        {/* Bottom bar — 3 columns: copyright | developed by (center) | compliance + links */}
        <div className="pt-8 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-zinc-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} AIpath DigiNext Private Limited. All rights reserved.
          </p>

          <p className="text-center order-last md:order-none">
            Developed by{" "}
            <a
              href="https://www.aipathdiginext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-300 hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              AIpath DigiNext Private Limited
            </a>
          </p>

          <div className="flex items-center justify-center md:justify-end gap-6 flex-wrap">
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
