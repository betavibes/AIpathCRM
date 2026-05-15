import Image from "next/image";

/* =====================================================================
   BusinessSystemHero — multi-device premium composition
   Uses the real branded dashboard images from /public + a live
   WhatsApp AI chat panel (code-rendered)
   ===================================================================== */

function WhatsAppChatPanel() {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-xl">
      {/* WhatsApp header */}
      <div className="px-4 py-2.5 bg-[#075E54] flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/20">
          AI
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-semibold leading-none">AIpath Sales Bot</p>
          <p className="text-emerald-200 text-[10px] mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            online · WhatsApp
          </p>
        </div>
        <span className="text-white/70 text-base">⋮</span>
      </div>

      {/* Chat body */}
      <div
        className="px-3 pt-3 pb-3 space-y-2 flex-1"
        style={{
          backgroundColor: "#0b141a",
          backgroundImage:
            "radial-gradient(circle at 50% 0, rgba(7,94,84,0.15), transparent 60%)",
        }}
      >
        <div className="flex justify-center mb-1">
          <span className="text-[9px] px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-400">Today</span>
        </div>

        {/* Customer */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-1.5 text-white text-[12px] leading-snug">
            Hi! Need 50 units of Product A
            <p className="text-[8px] text-emerald-200/70 text-right mt-0.5">10:42 ✓✓</p>
          </div>
        </div>

        {/* AI — quote */}
        <div className="flex justify-start">
          <div className="max-w-[88%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[12px] leading-snug">
            <p>50 × Product A · ₹245/unit = <span className="font-semibold">₹49,000</span></p>
            <p className="mt-1">Quote <span className="text-emerald-300 font-mono">#QT-1842</span> sent 📄</p>
            <p className="text-[8px] text-zinc-400 mt-1">10:42</p>
          </div>
        </div>

        {/* Customer */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-1.5 text-white text-[12px] leading-snug">
            Confirm. Same address.
            <p className="text-[8px] text-emerald-200/70 text-right mt-0.5">10:44 ✓✓</p>
          </div>
        </div>

        {/* AI — order placed */}
        <div className="flex justify-start">
          <div className="max-w-[88%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[12px] leading-snug">
            Order <span className="text-emerald-300 font-mono">#ORD-9214</span> placed ✅
            <p className="mt-0.5 text-[10px] text-zinc-300">Dispatch 24h · Lucknow</p>
            <p className="mt-1 text-[10px] text-emerald-300">→ logged in CRM</p>
            <p className="text-[8px] text-zinc-400 mt-1">10:44</p>
          </div>
        </div>

        {/* AI — ticket */}
        <div className="flex justify-start">
          <div className="max-w-[88%] bg-[#1f2c33] rounded-xl rounded-tl-sm px-3 py-2 text-white text-[12px] leading-snug">
            Ticket <span className="text-amber-300 font-mono">#TKT-3308</span> opened (High)
            <p className="text-[8px] text-zinc-400 mt-1">10:46</p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 py-2 bg-[#0b141a] border-t border-white/5 flex items-center gap-2">
        <div className="flex-1 bg-[#1f2c33] rounded-full px-3 py-1.5 text-zinc-500 text-[10px]">
          😊 Message
        </div>
        <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">
          🎤
        </div>
      </div>
    </div>
  );
}

function PhotoCard({
  src,
  alt,
  label,
  badge,
  badgeColor = "indigo",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  badge: string;
  badgeColor?: "indigo" | "emerald" | "amber" | "cyan";
  priority?: boolean;
}) {
  const badgeColors = {
    indigo: "bg-indigo-500 shadow-indigo-500/40",
    emerald: "bg-emerald-500 shadow-emerald-500/40",
    amber: "bg-amber-500 shadow-amber-500/40",
    cyan: "bg-cyan-500 shadow-cyan-500/40",
  };
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 shadow-xl group">
      {/* gradient overlay for cohesion with dark hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Floating badge */}
      <span
        className={`absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-white text-[10px] font-bold shadow-lg ${badgeColors[badgeColor]}`}
      >
        {badge}
      </span>

      {/* Caption */}
      <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-[10px] font-semibold">
        {label}
      </div>

      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
        priority={priority}
        unoptimized
      />
    </div>
  );
}

export default function BusinessSystemHero() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 shadow-2xl shadow-indigo-900/40">
      {/* Subtle glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />

      {/* Top status bar */}
      <div className="relative flex items-center justify-between px-4 md:px-5 py-2.5 border-b border-white/[0.06] bg-black/30 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-[10px] md:text-xs text-zinc-200 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AIpath Business OS · Live
          </span>
          <span className="hidden md:inline text-[10px] text-zinc-500">·</span>
          <span className="hidden md:inline text-[10px] text-zinc-400">
            247 users active across 12 branches
          </span>
        </div>
        <span className="text-[9px] md:text-[10px] text-zinc-500 font-mono">
          app.aipathcrm.com
        </span>
      </div>

      {/* Composition — 4 quadrants */}
      <div className="relative grid grid-cols-12 gap-3 md:gap-4 p-4 md:p-6">
        {/* Top-left: Big BI portal monitor */}
        <div className="col-span-12 lg:col-span-8 aspect-[4/3] lg:aspect-[5/4]">
          <PhotoCard
            src="/analytics-dashboard.png"
            alt="Executive BI dashboard with revenue trends, real-time metrics, and team analytics"
            label="📊 Executive BI · Real-time"
            badge="Live"
            badgeColor="emerald"
            priority
          />
        </div>

        {/* Top-right: WhatsApp customer ordering */}
        <div className="col-span-12 lg:col-span-4 aspect-[3/4] lg:aspect-auto">
          <WhatsAppChatPanel />
        </div>

        {/* Bottom-left: Live workforce tracking monitor */}
        <div className="col-span-12 lg:col-span-7 aspect-[4/3]">
          <PhotoCard
            src="/workforce-tracking.png"
            alt="Live workforce GPS tracking with staff status and geofenced zones"
            label="📍 Live Workforce Tracking"
            badge="GPS"
            badgeColor="cyan"
          />
        </div>

        {/* Bottom-right: Face recognition + Mobile dashboard phones */}
        <div className="col-span-12 lg:col-span-5 aspect-[4/3]">
          <PhotoCard
            src="/mobile-app-screens.png"
            alt="Mobile app: face recognition check-in and employee dashboard"
            label="📱 Face Check-in · Mobile App"
            badge="iOS · Android"
            badgeColor="amber"
          />
        </div>
      </div>

      {/* Bottom activity ticker */}
      <div className="relative px-4 md:px-5 py-2 border-t border-white/[0.06] bg-black/30 flex items-center gap-4 overflow-hidden">
        <span className="text-[10px] text-emerald-300 font-bold whitespace-nowrap">
          ▲ LIVE FEED
        </span>
        <div className="flex gap-5 text-[10px] text-zinc-400 overflow-hidden whitespace-nowrap animate-marquee">
          <span>● Order #ORD-9214 · ₹49,000 · WhatsApp</span>
          <span className="text-zinc-700">·</span>
          <span>● Sarah clocked in · Office HQ</span>
          <span className="text-zinc-700">·</span>
          <span>● Invoice #INV-2841 · ₹4,80,000 · Paid</span>
          <span className="text-zinc-700">·</span>
          <span>● AI scored 14 leads (3 hot)</span>
          <span className="text-zinc-700">·</span>
          <span>● PO #PO-1922 approved · ₹1,20,000</span>
          <span className="text-zinc-700">·</span>
          <span>● Order #ORD-9214 · ₹49,000 · WhatsApp</span>
          <span className="text-zinc-700">·</span>
          <span>● Sarah clocked in · Office HQ</span>
        </div>
      </div>
    </div>
  );
}
