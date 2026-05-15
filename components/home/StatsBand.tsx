const stats = [
  { v: "1,200+", l: "Teams running on AIpath" },
  { v: "3.4×", l: "Faster pipeline velocity" },
  { v: "67%", l: "Lower TCO vs legacy stacks" },
  { v: "99.99%", l: "Uptime SLA" },
];

export default function StatsBand() {
  return (
    <section className="py-16 border-y border-white/[0.06] bg-[#15161F]/60">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">{s.v}</p>
              <p className="mt-2 text-xs md:text-sm text-zinc-500 uppercase tracking-[0.15em]">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
