const proof = [
  { big: "3-in-1", small: "CRM + ERP + AI on one platform" },
  { big: "Live", small: "Running real businesses in production" },
  { big: "India · Singapore", small: "Where we build and run it" },
  { big: "Own it", small: "No recurring licence fees" },
];

export default function AllInOne() {
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#15161F]/60">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip">
            <span className="chip-dot" />
            All-in-one business software
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
            One system for your <span className="text-gradient">whole business.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-lg">
            CRM to win customers, ERP to run operations, and AI to handle the busywork — on a single
            connected platform, instead of five disconnected tools that never talk to each other.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {proof.map((p) => (
            <div
              key={p.big}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient">{p.big}</p>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{p.small}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Already live at{" "}
          <a href="https://kiranfabricators.in" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Kiran Fabricators</a>{" "}
          and{" "}
          <a href="https://bharatcostume.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">Bharat Costumes</a>.
        </p>
      </div>
    </section>
  );
}
