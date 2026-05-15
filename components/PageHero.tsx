import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative pt-36 md:pt-48 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[36rem] h-[36rem] rounded-full bg-indigo-600/20 blur-[120px] animate-orb-drift pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-[32rem] h-[32rem] rounded-full bg-violet-600/20 blur-[120px] animate-orb-drift pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0E0F1A] pointer-events-none" />

      <div className="container mx-auto px-5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex animate-fade-in">
            <span className="chip">
              <span className="chip-dot" />
              {eyebrow}
            </span>
          </div>
          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight animate-slide-up">
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up"
              style={{ animationDelay: "240ms", animationFillMode: "both" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
