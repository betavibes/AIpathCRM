import Link from "next/link";
import Logo from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";
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

function SocialIcon({ name }: { name: string }) {
  const p = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;
  switch (name) {
    case "LinkedIn":
      return (
        <svg {...p}>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case "X":
      return (
        <svg {...p}>
          <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.584-6.64 7.584H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...p}>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.34 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.34 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12C21.33 1.35 20.65.93 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32A6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...p}>
          <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...p}>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
        </svg>
      );
    default:
      return null;
  }
}

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
                  href={`mailto:${CONTACT.emails.general}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {CONTACT.emails.general}
                </a>
              </p>
            </div>

            <div className="mt-6">
              <WhatsAppButton />
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

          <div className="flex items-center justify-center md:justify-end gap-2.5">
            {CONTACT.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="inline-flex w-9 h-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-colors"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
