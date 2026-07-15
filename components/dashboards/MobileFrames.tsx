function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer device */}
      <div className="relative w-[240px] h-[490px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-1.5 shadow-2xl shadow-black/60 border border-zinc-700/40">
        {/* Inner screen */}
        <div className="relative w-full h-full rounded-[2rem] bg-[#161823] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
          {/* Status bar */}
          <div className="absolute top-0 inset-x-0 h-8 flex items-center justify-between px-5 text-[9px] text-white/80 font-medium z-10">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="opacity-60">●●●</span>
              <span>5G</span>
              <span className="ml-1 inline-block w-4 h-2 border border-white/40 rounded-sm relative">
                <span className="absolute inset-0.5 right-1 bg-white/80 rounded-[1px]" />
              </span>
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

function PhoneDashboard() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 pt-10 px-4 text-white">
        {/* Greeting */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[9px] text-zinc-400">Good morning,</p>
            <p className="text-sm font-semibold">Sarah</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500" />
        </div>

        {/* Hero card */}
        <div className="relative rounded-2xl p-3 bg-gradient-to-br from-indigo-600 to-violet-700 mb-3 overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
          <p className="relative text-[9px] text-indigo-100 uppercase tracking-[0.15em]">Today's pipeline</p>
          <p className="relative text-2xl font-semibold tracking-tight mt-1">₹4.82L</p>
          <p className="relative text-[10px] text-indigo-200 mt-0.5">▲ 12% vs yesterday</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            ["Calls", "12"],
            ["Tasks", "8"],
            ["Meets", "3"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-2 text-center">
              <p className="text-base font-semibold tracking-tight">{v}</p>
              <p className="text-[8px] text-zinc-500 uppercase tracking-[0.1em] mt-0.5">{l}</p>
            </div>
          ))}
        </div>

        {/* AI assistant card */}
        <div className="rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-transparent p-3 mb-3">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-[10px] font-bold shrink-0">✦</div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold">AI suggests</p>
              <p className="text-[9px] text-zinc-300 mt-0.5 leading-snug">
                Follow up with Sunrise Industries — last seen 4d ago.
              </p>
              <button className="mt-1.5 text-[8px] px-2 py-0.5 rounded-md bg-violet-500/20 border border-violet-500/30 text-violet-100">
                Draft message
              </button>
            </div>
          </div>
        </div>

        {/* Activity */}
        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Recent</p>
        <div className="space-y-2">
          {[
            { name: "Orbit deal closed", amt: "₹2.1L", color: "bg-emerald-500" },
            { name: "Meridian — proposal sent", amt: "Now", color: "bg-indigo-500" },
          ].map((a) => (
            <div key={a.name} className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${a.color}`} />
              <p className="text-[10px] flex-1">{a.name}</p>
              <p className="text-[9px] text-zinc-500">{a.amt}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function PhoneAttendance() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 pt-10 px-4 text-white">
        <p className="text-[9px] text-zinc-400 mb-1">Attendance</p>
        <p className="text-sm font-semibold mb-4">Mon, 18 Aug</p>

        {/* Selfie area */}
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-700 via-violet-700 to-pink-700 mb-3 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-3xl">👤</div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-[9px] bg-black/40 backdrop-blur rounded-md px-2 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            GPS verified · Office HQ
          </div>
        </div>

        {/* Status */}
        <div className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-emerald-200 font-semibold">Checked in</p>
              <p className="text-[9px] text-emerald-300/70">9:02 AM</p>
            </div>
            <div className="text-emerald-300 text-xl">✓</div>
          </div>
        </div>

        {/* Timeline */}
        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Today's timeline</p>
        <div className="space-y-1.5">
          {[
            ["09:02", "Check-in", "Office HQ"],
            ["11:30", "Site visit", "Sunrise Industries"],
            ["14:15", "Returned", "Office HQ"],
          ].map(([t, e, l]) => (
            <div key={t} className="flex items-center gap-2.5 text-[10px]">
              <span className="font-mono text-zinc-500 w-10">{t}</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400" />
              <span className="text-zinc-200 flex-1">{e}</span>
              <span className="text-zinc-500 text-[9px]">{l}</span>
            </div>
          ))}
        </div>

        {/* Bottom action */}
        <button className="absolute bottom-4 left-4 right-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-semibold">
          Check out
        </button>
      </div>
    </PhoneFrame>
  );
}

function PhoneInbox() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 pt-10 px-4 text-white">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold">Inbox</p>
          <p className="text-[9px] text-zinc-500">12 new</p>
        </div>

        {/* Channel filters */}
        <div className="flex gap-1.5 mb-3">
          {["All", "WA", "Email", "SMS"].map((c, i) => (
            <span key={c} className={`text-[9px] px-2 py-1 rounded-md border ${i === 0 ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-200" : "border-white/10 text-zinc-400"}`}>
              {c}
            </span>
          ))}
        </div>

        {/* Messages */}
        <div className="space-y-2">
          {[
            { from: "Sunrise Industries", msg: "Re: proposal — looks great, when can we…", channel: "WhatsApp", time: "2m", color: "bg-emerald-500", unread: true },
            { from: "Orbit", msg: "AI: Drafted reply about Q3 pricing.", channel: "Email", time: "8m", color: "bg-indigo-500", ai: true },
            { from: "Meridian Steel", msg: "Schedule a call next week?", channel: "WhatsApp", time: "1h", color: "bg-emerald-500" },
            { from: "Vertex", msg: "Invoice INV-2841 paid ✓", channel: "Stripe", time: "3h", color: "bg-violet-500" },
          ].map((m) => (
            <div key={m.from} className={`rounded-xl p-2.5 border ${m.unread ? "border-indigo-500/30 bg-indigo-500/[0.05]" : "border-white/[0.06] bg-white/[0.02]"}`}>
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-[11px] font-semibold flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${m.color}`} />
                  {m.from}
                </p>
                <p className="text-[8px] text-zinc-500">{m.time}</p>
              </div>
              <p className="text-[9px] text-zinc-400 leading-snug line-clamp-2">{m.msg}</p>
              {m.ai && (
                <div className="mt-1.5 inline-flex items-center gap-1 text-[8px] text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded px-1.5 py-0.5">
                  ✦ AI drafted
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function MobileFrames() {
  return (
    <div className="relative flex items-end justify-center gap-4 md:gap-6 py-8">
      <div className="hidden md:block translate-y-6 opacity-90 scale-[0.92]">
        <PhoneInbox />
      </div>
      <div className="z-10">
        <PhoneDashboard />
      </div>
      <div className="hidden md:block translate-y-6 opacity-90 scale-[0.92]">
        <PhoneAttendance />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-cyan-500/20 blur-3xl" />
    </div>
  );
}

export { PhoneDashboard, PhoneAttendance, PhoneInbox, PhoneFrame };
