import { ReactNode } from "react";

export default function BrowserFrame({
  url = "app.aipathcrm.com / dashboard",
  children,
  glow = true,
}: {
  url?: string;
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <div className="relative">
      {glow && (
        <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-cyan-500/20 blur-3xl pointer-events-none" />
      )}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161823] shadow-2xl shadow-indigo-900/40">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#1C1E2A]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="text-[11px] text-zinc-500 font-mono px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.04]">
            🔒 {url}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
