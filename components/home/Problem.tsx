const pains = [
  {
    tool: "Quotes & orders",
    where: "in a WhatsApp group",
  },
  {
    tool: "Stock",
    where: "in a diary or a spreadsheet",
  },
  {
    tool: "Accounts",
    where: "in Tally, separately",
  },
  {
    tool: "Staff & attendance",
    where: "on paper registers",
  },
];

export default function Problem() {
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#15161F]/60">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="chip">
            <span className="chip-dot" />
            The real problem
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            Most businesses run on{" "}
            <span className="text-gradient">14 apps that don&apos;t talk</span> to each other.
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            Every part of the business lives in a different place — so nobody has the full
            picture, work slips through the cracks, and AI has no connected data to actually
            help with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {pains.map((p) => (
            <div
              key={p.tool}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
            >
              <p className="text-sm font-semibold text-zinc-200">{p.tool}</p>
              <p className="mt-1.5 text-sm text-zinc-500">{p.where}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-zinc-300 text-lg">
          <span className="text-zinc-500">Four systems, zero connection.</span>{" "}
          AIpath One makes it <span className="text-zinc-100 font-semibold">one</span>.
        </p>
      </div>
    </section>
  );
}
