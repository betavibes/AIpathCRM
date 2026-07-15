import Link from "next/link";
import BrowserFrame from "@/components/dashboards/BrowserFrame";
import SalesDemo from "@/components/showcase/SalesDemo";
import WhatsAppAIDemo from "@/components/showcase/WhatsAppAIDemo";
import OperationsDemo from "@/components/showcase/OperationsDemo";
import AttendanceDemo from "@/components/showcase/AttendanceDemo";
import BusinessOneDemo from "@/components/showcase/BusinessOneDemo";
import GetStartedDemo from "@/components/showcase/GetStartedDemo";

type Module = {
  tag: string;
  title: string;
  body: string;
  points: string[];
  frame: string;
  Component: () => React.ReactNode;
};

const modules: Module[] = [
  {
    tag: "CRM · Sales",
    title: "Never lose a deal in a spreadsheet",
    body:
      "Leads, deals and a full customer 360 in one pipeline. AI scores every record and surfaces the next best action, so your team always knows who to call.",
    points: ["Pipeline & deal stages", "Customer 360", "AI next-best-action"],
    frame: "AIpath One · CRM & Sales",
    Component: SalesDemo,
  },
  {
    tag: "WhatsApp AI",
    title: "Your customers' favourite channel — automated",
    body:
      "They message on WhatsApp like they always have. AI turns the conversation into quotes, orders and tickets, and files every record in your CRM.",
    points: ["Quotes & orders from chat", "Voice & image understanding", "Every record in CRM"],
    frame: "AIpath One · WhatsApp AI",
    Component: WhatsAppAIDemo,
  },
  {
    tag: "ERP · Operations",
    title: "Run operations without the spreadsheets",
    body:
      "Purchases, inventory and accounts on one ledger — reconciled as work happens, so your numbers are always live and month-end stops being a fire drill.",
    points: ["Purchases & inventory", "Double-entry accounting", "GST-ready"],
    frame: "AIpath One · ERP & Operations",
    Component: OperationsDemo,
  },
  {
    tag: "Attendance · HR",
    title: "Attendance you can actually trust",
    body:
      "Selfie and geo-verified check-ins flow straight into leave and payroll — no proxies, no paper registers, no manual entry.",
    points: ["Selfie + geo check-in", "Leave & shifts", "Feeds payroll"],
    frame: "AIpath One · Attendance & HR",
    Component: AttendanceDemo,
  },
  {
    tag: "ERP · for SMEs",
    title: "Built for growing SMEs",
    body:
      "Real-time visibility across purchase, sales and accounts in one place — without stitching three different systems together.",
    points: ["One connected ledger", "Live business view", "Multi-branch ready"],
    frame: "AIpath One · Business Suite",
    Component: BusinessOneDemo,
  },
  {
    tag: "Onboarding",
    title: "Guided setup, tailored to you",
    body:
      "Onboarding that configures the system around how your business already works — so your team is productive from week one.",
    points: ["Guided setup", "Your data imported", "Shaped to your workflow"],
    frame: "AIpath One · Get Started",
    Component: GetStartedDemo,
  },
];

export default function ModuleShowcase() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="chip">
            <span className="chip-dot" />
            The whole platform
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Every part of the system, <span className="text-gradient">module by module.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            This is the actual product — real screens, not slideware. Want to click through it
            yourself? The live demo needs no signup.
          </p>
        </div>

        <div className="space-y-28 max-w-6xl mx-auto">
          {modules.map((m) => {
            const Demo = m.Component;
            return (
              <div key={m.tag}>
                {/* Content above */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-200">
                    {m.tag}
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-zinc-400 text-lg leading-relaxed">{m.body}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                    {m.points.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-sm text-zinc-300"
                      >
                        <span className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px]">✓</span>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Full-width image below — consistent frame unifies each demo */}
                <BrowserFrame url={m.frame} glow={false}>
                  <div className="overflow-x-auto scrollbar-none">
                    <Demo />
                  </div>
                </BrowserFrame>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link href="/live-demo" className="btn-primary">
            Try the live demo — no signup
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
