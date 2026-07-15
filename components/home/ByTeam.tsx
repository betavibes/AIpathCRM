import Link from "next/link";
import TeamIcon from "@/components/TeamIcon";

const teams = [
  { key: "sales", name: "Sales", hook: "Stop losing deals in a spreadsheet." },
  { key: "operations", name: "Operations", hook: "Work gets tracked, not chased." },
  { key: "finance", name: "Finance", hook: "Close the books without the panic." },
  { key: "hr", name: "HR", hook: "From hire to payslip, in one place." },
  { key: "service", name: "Service", hook: "No ticket falls through." },
  { key: "marketing", name: "Marketing", hook: "Know which campaigns pay." },
];

export default function ByTeam() {
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Every team
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            One platform, <span className="text-gradient">every department.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Not six seat licenses and six logins. Sales, ops, finance, HR, service and
            marketing — running on the same data, so nothing falls between them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {teams.map((t) => (
            <Link
              key={t.key}
              href="/solutions"
              className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-indigo-500/40 hover:bg-white/[0.04] transition-colors"
            >
              <span className="inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
                <TeamIcon name={t.key} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-100">{t.name}</span>
                <span className="block text-xs text-zinc-400 mt-0.5">{t.hook}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/solutions" className="btn-secondary">
            See what each team gets →
          </Link>
        </div>
      </div>
    </section>
  );
}
