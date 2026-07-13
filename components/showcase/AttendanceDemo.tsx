function PhoneFaceClock() {
  return (
    <div className="relative w-[260px] h-[520px] rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl shadow-black/60 border border-zinc-700/40">
      <div className="relative w-full h-full rounded-[2rem] bg-white overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

        <div className="absolute inset-0 pt-9 px-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[11px] text-slate-500">Facial Recognition for</p>
              <p className="text-base font-bold text-emerald-600">Clock-In</p>
            </div>
            <button className="text-[11px] text-slate-500">Go Back</button>
          </div>

          {/* Face frame */}
          <div className="relative mx-auto mt-2 w-44 h-56 rounded-[3rem] border-2 border-dashed border-emerald-400 overflow-hidden bg-gradient-to-b from-amber-100 via-orange-100 to-rose-100">
            {/* Face silhouette */}
            <svg viewBox="0 0 200 240" className="w-full h-full">
              <defs>
                <radialGradient id="faceglow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#fb923c" stopOpacity="0.8" />
                </radialGradient>
              </defs>
              <rect width="200" height="240" fill="url(#faceglow)" />
              {/* Hair */}
              <path d="M50 80 Q50 30, 100 25 Q150 30, 150 80 Q150 50, 100 50 Q50 50, 50 80 Z" fill="#1f2937" />
              {/* Face oval */}
              <ellipse cx="100" cy="120" rx="55" ry="68" fill="#f5d0b0" />
              {/* Eyes */}
              <ellipse cx="80" cy="115" rx="4" ry="3" fill="#1f2937" />
              <ellipse cx="120" cy="115" rx="4" ry="3" fill="#1f2937" />
              {/* Smile */}
              <path d="M82 145 Q100 160, 118 145" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Cheeks */}
              <ellipse cx="73" cy="135" rx="6" ry="3" fill="#fca5a5" opacity="0.5" />
              <ellipse cx="127" cy="135" rx="6" ry="3" fill="#fca5a5" opacity="0.5" />
            </svg>
          </div>

          {/* Lock badge */}
          <div className="absolute right-12 bottom-32 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs shadow-lg">
            🔒
          </div>

          {/* Caption */}
          <p className="absolute bottom-6 inset-x-0 text-center text-[11px] text-slate-400">
            Please look into the camera<br />and hold still.
          </p>
        </div>
      </div>
    </div>
  );
}

function PhoneAttendanceSummary() {
  const rows = [
    { addr: "60 Paya Lebar Rd, #07-33", time: "09:26:10", temp: "27°C", status: "in" },
    { addr: "60 Paya Lebar Rd, #07-33", time: "13:02:45", temp: "27°C", status: "out" },
    { addr: "60 Paya Lebar Rd, #07-33", time: "14:15:22", temp: "28°C", status: "in" },
    { addr: "60 Paya Lebar Rd, #07-33", time: "18:40:08", temp: "26°C", status: "out" },
  ];
  return (
    <div className="relative w-[260px] h-[480px] rounded-[2rem] bg-white shadow-2xl border border-zinc-200 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <span>‹</span>
          <span className="font-semibold text-slate-800">Attendance Summary</span>
          <span></span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500">April 14,</p>
            <p className="text-sm font-bold text-orange-500">Monday</p>
          </div>
          <div className="flex gap-1.5 text-[9px]">
            <span className="px-2 py-1 rounded-md border border-slate-200 text-slate-600">‹ Prev Day</span>
            <span className="px-2 py-1 rounded-md border border-slate-200 text-slate-600">Next Day ›</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <svg viewBox="0 0 260 130" className="w-full h-full">
          {/* Streets */}
          <path d="M0 60 L260 60" stroke="#cbd5e1" strokeWidth="3" />
          <path d="M0 90 L260 90" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M80 0 L80 130" stroke="#cbd5e1" strokeWidth="3" />
          <path d="M180 0 L180 130" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M0 30 L260 25" stroke="#e2e8f0" strokeWidth="1.5" />
          {/* Buildings */}
          <rect x="100" y="35" width="60" height="20" fill="#94a3b8" opacity="0.4" />
          <rect x="200" y="65" width="40" height="22" fill="#94a3b8" opacity="0.4" />
          {/* Labels */}
          <text x="120" y="50" fontSize="6" fill="#475569">Paya Lebar Sq</text>
          <text x="200" y="55" fontSize="5" fill="#64748b">Eunos Rd 8</text>
          {/* Pin */}
          <circle cx="135" cy="65" r="8" fill="#f97316" />
          <circle cx="135" cy="65" r="14" fill="#f97316" opacity="0.25" />
          <text x="135" y="68" textAnchor="middle" fontSize="9" fill="white">📍</text>
        </svg>
      </div>

      {/* Overview */}
      <div className="px-4 py-2 flex items-center justify-between">
        <p className="text-[11px] font-semibold text-slate-700">Overview</p>
        <p className="text-[10px] text-slate-500">Total: 07-hrs</p>
      </div>

      {/* Rows */}
      <div className="px-3 space-y-1.5 overflow-hidden">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${r.status === "in" ? "bg-emerald-500" : "bg-rose-500"}`} />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 shrink-0 flex items-center justify-center text-[10px]">👤</div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-slate-700 truncate">{r.addr}</p>
              <p className="text-[8px] text-slate-400">Singapore 408051</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-semibold text-slate-800">⏱ {r.time}</p>
              <p className="text-[8px] text-slate-500">🌡 {r.temp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AttendanceDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/60 bg-black">
      {/* Diagonal orange light streaks */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          "linear-gradient(115deg, transparent 0%, transparent 30%, rgba(251,146,60,0.15) 35%, rgba(251,146,60,0.4) 50%, rgba(251,146,60,0.15) 65%, transparent 70%, transparent 100%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          "linear-gradient(115deg, transparent 60%, rgba(234,88,12,0.25) 75%, transparent 90%)"
      }} />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative p-6 md:p-12">
        {/* Headline */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Manual Attendance Tracking?
            <br />
            Start <span className="text-orange-400">Automating It.</span>
          </h3>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
            Track, manage, and sync attendance with payroll, shifts, and leave. All in one connected system.
          </p>
        </div>

        {/* Phones + bullets layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left bullets */}
          <div className="lg:col-span-3 space-y-8 lg:text-right order-2 lg:order-1">
            {[
              "Attendance flows directly into payroll, leave & claims",
              "Facial recognition with GPS verification",
            ].map((b) => (
              <div key={b} className="flex lg:justify-end items-start gap-3">
                <span className="lg:order-2 mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400 font-bold shrink-0">✓</span>
                <p className="lg:order-1 text-white text-sm md:text-base font-semibold leading-snug max-w-[14rem]">{b}</p>
              </div>
            ))}
          </div>

          {/* Phones */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-end gap-4 relative">
            <div className="relative z-10">
              <PhoneFaceClock />
            </div>
            <div className="hidden md:block absolute right-0 lg:right-4 -bottom-4 z-20">
              <PhoneAttendanceSummary />
            </div>
          </div>

          {/* Right bullets */}
          <div className="lg:col-span-3 space-y-8 order-3">
            {[
              "Manage attendance across teams and locations in real-time",
              "Auto-approval flows for leave & claims",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400 font-bold shrink-0">✓</span>
                <p className="text-white text-sm md:text-base font-semibold leading-snug max-w-[14rem]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-shadow"
          >
            BOOK A FREE DEMO
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
