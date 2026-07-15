// y = yes, p = partial/add-on/separate, n = no
const cols = ["AIpath One", "Tally", "Zoho", "Salesforce"];

const rows: [string, ("y" | "p" | "n")[]][] = [
  ["CRM & sales pipeline", ["y", "n", "y", "y"]],
  ["Accounting & GST", ["y", "y", "p", "n"]],
  ["Inventory & purchases", ["y", "p", "p", "n"]],
  ["HR, attendance & payroll", ["y", "n", "p", "n"]],
  ["WhatsApp AI agent", ["y", "n", "p", "p"]],
  ["One connected system", ["y", "n", "p", "n"]],
  ["Own it — no per-seat monthly", ["y", "p", "n", "n"]],
];

function Mark({ v }: { v: "y" | "p" | "n" }) {
  if (v === "y")
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
      </span>
    );
  if (v === "p")
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300" title="Partial / separate add-on">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden><path d="M5 12h14" /></svg>
      </span>
    );
  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-white/[0.04] border border-white/10 text-zinc-600">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3 h-3" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
    </span>
  );
}

export default function Compare() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            Why AIpath
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            One system beats <span className="text-gradient">stitching four together.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            We respect Tally, Zoho and Salesforce — each is good at its slice. But most businesses
            end up running several at once, disconnected. AIpath One does the whole job on one
            database.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto scrollbar-none">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium pb-4 pr-4">
                  Capability
                </th>
                {cols.map((c, i) => (
                  <th
                    key={c}
                    className={`pb-4 px-3 text-center text-sm font-semibold ${
                      i === 0 ? "text-indigo-300" : "text-zinc-400"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, vals], ri) => (
                <tr key={label}>
                  <td className={`py-4 pr-4 text-sm text-zinc-200 font-medium ${ri > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    {label}
                  </td>
                  {vals.map((v, ci) => (
                    <td
                      key={ci}
                      className={`py-4 px-3 text-center ${ri > 0 ? "border-t border-white/[0.06]" : ""} ${
                        ci === 0 ? "bg-indigo-500/[0.06]" : ""
                      }`}
                    >
                      <span className="inline-flex justify-center">
                        <Mark v={v} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Built in</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Partial / separate add-on</span>
          <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-zinc-600" /> Not offered</span>
        </div>
      </div>
    </section>
  );
}
