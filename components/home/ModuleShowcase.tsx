import Link from "next/link";
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
  Component: () => React.ReactNode;
};

const modules: Module[] = [
  {
    tag: "CRM · Sales",
    title: "Never lose a deal in a spreadsheet",
    body:
      "Leads, deals and a full customer 360 in one pipeline. AI scores every record and surfaces the next best action, so your team always knows who to call.",
    points: ["Pipeline & deal stages", "Customer 360", "AI next-best-action"],
    Component: SalesDemo,
  },
  {
    tag: "WhatsApp AI",
    title: "Your customers' favourite channel — automated",
    body:
      "They message on WhatsApp like they always have. AI turns the conversation into quotes, orders and tickets, and files every record in your CRM.",
    points: ["Quotes & orders from chat", "Voice & image understanding", "Every record in CRM"],
    Component: WhatsAppAIDemo,
  },
  {
    tag: "ERP · Operations",
    title: "Run operations without the spreadsheets",
    body:
      "Purchases, inventory and accounts on one ledger — reconciled as work happens, so your numbers are always live and month-end stops being a fire drill.",
    points: ["Purchases & inventory", "Double-entry accounting", "GST-ready"],
    Component: OperationsDemo,
  },
  {
    tag: "Attendance · HR",
    title: "Attendance you can actually trust",
    body:
      "Selfie and geo-verified check-ins flow straight into leave and payroll — no proxies, no paper registers, no manual entry.",
    points: ["Selfie + geo check-in", "Leave & shifts", "Feeds payroll"],
    Component: AttendanceDemo,
  },
  {
    tag: "ERP · for SMEs",
    title: "Built for growing SMEs",
    body:
      "Real-time visibility across purchase, sales and accounts in one place — without stitching three different systems together.",
    points: ["One connected ledger", "Live business view", "Multi-branch ready"],
    Component: BusinessOneDemo,
  },
  {
    tag: "Onboarding",
    title: "Guided setup, tailored to you",
    body:
      "Onboarding that configures the system around how your business already works — so your team is productive from week one.",
    points: ["Guided setup", "Your data imported", "Shaped to your workflow"],
    Component: GetStartedDemo,
  },
];

export default function ModuleShowcase() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06] overflow-hidden">
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

        <div className="space-y-24 max-w-6xl mx-auto">
          {modules.map((m, i) => {
            const flipped = i % 2 === 1;
            const Demo = m.Component;
            return (
              <div
                key={m.tag}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Copy */}
                <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-200">
                    {m.tag}
                  </span>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">
                    {m.title}
                  </h3>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{m.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-7 min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-x-auto scrollbar-none">
                    <Demo />
                  </div>
                </div>
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
