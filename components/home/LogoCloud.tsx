const logos = [
  "Acme Corp", "Globex", "Initech", "Umbrella", "Hooli", "Stark Industries",
  "Wayne Enterprises", "Cyberdyne", "Tyrell", "Massive Dynamic", "Soylent",
  "Vandelay", "Pied Piper",
];

export default function LogoCloud() {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#161823]">
      <div className="container mx-auto px-5">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">
          Powering operations at category-leading teams
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-zinc-500 font-semibold text-lg tracking-wider whitespace-nowrap"
              >
                {name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
