/* === Stylized cardboard-box backdrop (CSS-only) === */
function WarehouseBoxes() {
  const boxes = [
    { x: -5, y: 10, w: 35, h: 45, rot: -3, shade: "from-amber-200 to-amber-400" },
    { x: 28, y: 0, w: 40, h: 55, rot: 2, shade: "from-amber-100 to-amber-300" },
    { x: 65, y: 8, w: 38, h: 50, rot: -2, shade: "from-amber-200 to-amber-400" },
    { x: 90, y: 18, w: 22, h: 40, rot: 4, shade: "from-amber-100 to-amber-300" },
    { x: 0, y: 50, w: 100, h: 50, rot: 0, shade: "from-amber-300 to-amber-500" },
    { x: 50, y: 62, w: 50, h: 38, rot: -1, shade: "from-amber-200 to-amber-400" },
  ];
  return (
    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 to-amber-100/60" />
      {boxes.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-md bg-gradient-to-br ${b.shade} border border-amber-700/30 shadow-md`}
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.w}%`,
            height: `${b.h}%`,
            transform: `rotate(${b.rot}deg)`,
            opacity: 0.55,
          }}
        >
          {/* tape strip */}
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 h-2 bg-amber-800/15 rounded" />
          {/* shipping label */}
          <div className="absolute top-2 left-2 w-12 h-6 bg-white/70 rounded-sm border border-amber-700/30">
            <div className="m-1 h-1 bg-amber-700/40 rounded" />
            <div className="mx-1 mt-0.5 h-0.5 bg-amber-700/30 rounded" />
            <div className="mx-1 mt-0.5 h-0.5 bg-amber-700/30 rounded" />
          </div>
        </div>
      ))}
      {/* subtle blue tint overlay so boxes recede */}
      <div className="absolute inset-0 bg-blue-200/40 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-blue-200/30" />
    </div>
  );
}

/* === Realistic laptop chassis with the CRM dashboard inside === */
function LaptopMockup() {
  return (
    <div className="relative w-full max-w-[680px] mx-auto" style={{ perspective: "1400px" }}>
      <div
        className="relative"
        style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}
      >
        {/* === Lid / screen bezel === */}
        <div className="relative rounded-t-[14px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[6px] shadow-2xl shadow-black/40">
          {/* Camera */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-600" />

          {/* Screen */}
          <div className="rounded-t-[10px] bg-slate-50 overflow-hidden border border-zinc-700">
            {/* === Dashboard inside === */}
            <div className="grid grid-cols-[64px_1fr] min-h-[280px]">
              {/* Sidebar */}
              <aside className="bg-white border-r border-slate-200 py-3.5 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-base shadow-md shadow-blue-500/30">
                  ☁
                </div>
                {[
                  { i: "⌂" },
                  { i: "👥" },
                  { i: "▦" },
                  { i: "♥" },
                  { i: "⊙" },
                  { i: "ⓘ" },
                  { i: "🔍" },
                ].map((s, i) => (
                  <div key={i} className="w-9 h-9 rounded-md flex items-center justify-center text-base text-slate-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer">
                    {s.i}
                  </div>
                ))}
              </aside>

              {/* Main */}
              <div className="p-4">
                {/* Top bar with search + Home tab */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1.5 rounded-t-md bg-blue-100 border-b-2 border-blue-500 text-[11px] font-semibold text-blue-700 flex items-center gap-1.5">
                    🏠 Home
                  </div>
                  <div className="flex-1 max-w-md h-7 rounded-md bg-white border border-slate-200 flex items-center px-2 text-[10px] text-slate-400">
                    🔍 Search Salesforce
                  </div>
                  <div className="text-slate-400 text-sm">🔔 ⚙</div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-300 to-blue-500" />
                </div>

                {/* KPI strip */}
                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  {[
                    { l: "Pipeline", v: "$1.2M", w: 70, c: "bg-blue-500" },
                    { l: "Closed Won", v: "$420K", w: 55, c: "bg-blue-500" },
                    { l: "Quota", v: "78%", w: 45, c: "bg-blue-500" },
                  ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-slate-200 bg-white p-2.5">
                      <p className="text-[8px] text-slate-500 uppercase tracking-wider">{k.l}</p>
                      <p className="text-[13px] font-bold text-slate-900 mt-0.5">{k.v}</p>
                      <div className="mt-1.5 h-1 rounded-full bg-slate-100 overflow-hidden">
                        <div className={`h-full rounded-full ${k.c}`} style={{ width: `${k.w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar / chart cards row */}
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Green bars */}
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <p className="text-[8px] text-slate-500 mb-1.5 font-semibold">Top deals</p>
                    {[
                      [78, "Acme"],
                      [62, "Globex"],
                      [44, "Initech"],
                    ].map(([w, n], i) => (
                      <div key={i} className="flex items-center gap-1 mb-1">
                        <span className="text-[7px] text-slate-500 w-9">{n}</span>
                        <div className="flex-1 h-1.5 rounded bg-slate-100 overflow-hidden">
                          <div className="h-full rounded bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: `${w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Amber bars */}
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <p className="text-[8px] text-slate-500 mb-1.5 font-semibold">Top reps</p>
                    {[
                      [88, "Sarah"],
                      [72, "Marcus"],
                      [55, "Priya"],
                      [38, "Anuj"],
                    ].map(([w, n], i) => (
                      <div key={i} className="flex items-center gap-1 mb-1">
                        <span className="text-[7px] text-slate-500 w-9">{n}</span>
                        <div className="flex-1 h-1.5 rounded bg-slate-100 overflow-hidden">
                          <div className="h-full rounded bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: `${w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Donut */}
                  <div className="rounded-lg border border-slate-200 bg-white p-2.5 flex flex-col items-center justify-center">
                    <p className="text-[8px] text-slate-500 mb-1 font-semibold self-start">Goal</p>
                    <svg viewBox="0 0 36 36" className="w-14 h-14">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#cffafe" strokeWidth="4" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="4"
                        strokeDasharray="68 88"
                        transform="rotate(-90 18 18)"
                        strokeLinecap="round"
                      />
                      <text x="18" y="20" textAnchor="middle" fontSize="6" fill="#0891b2" fontWeight="700">
                        78%
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Keyboard deck === */}
        <div className="relative h-3 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 rounded-b-[12px] mx-[-2%] shadow-lg" style={{ transform: "translateZ(-2px)" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-zinc-700/40 rounded-b-md" />
        </div>
        {/* Underside / table reflection */}
        <div className="h-2 bg-gradient-to-b from-zinc-500/60 to-transparent rounded-b-3xl mx-[8%] blur-sm" />
      </div>
    </div>
  );
}

/* === Floating Get Started onboarding card === */
function GetStartedCard() {
  return (
    <div className="w-60 rounded-2xl bg-white shadow-2xl shadow-blue-900/30 border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100 bg-slate-50">
        <span className="text-slate-400 text-xs">‹</span>
        <div className="flex items-center gap-2.5 text-slate-400 text-xs">
          <span>📌</span>
          <span>✕</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-base font-bold text-slate-900 mb-1.5">Get Started</p>
        <div className="flex items-center justify-between mb-1">
          <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "25%" }} />
          </div>
          <span className="ml-2 text-[10px] font-semibold text-slate-500">25%</span>
        </div>
        <p className="text-[10px] text-slate-400">1 of 4</p>

        <div className="mt-3.5 space-y-2">
          {[
            { t: "Watch an Intro Video", done: true },
            { t: "Import Contacts", done: false },
            { t: "Invite User", done: false },
            { t: "Connect Email", done: false },
          ].map((item) => (
            <div key={item.t} className="flex items-center gap-2 text-[11px]">
              <span
                className={`w-4 h-4 rounded-sm flex items-center justify-center text-[9px] font-bold ${
                  item.done
                    ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/40"
                    : "bg-white border border-slate-300 text-transparent"
                }`}
              >
                ✓
              </span>
              <span className={item.done ? "text-slate-700 line-through opacity-70" : "text-slate-600"}>
                {item.t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GetStartedDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-blue-200/40 shadow-2xl shadow-blue-900/40">
      {/* Light sky gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-100 to-blue-200" />

      <div className="relative p-6 md:p-12">
        {/* Headline */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
            The CRM that gets
            <br />
            you started <span className="text-blue-700">fast</span>
          </h3>
          <p className="mt-5 text-xl md:text-2xl text-slate-700 font-medium max-w-2xl mx-auto leading-snug">
            Everything you need to grow,
            <br className="hidden md:block" />
            right from day one.
          </p>
        </div>

        {/* === Hero scene: laptop on warehouse boxes === */}
        <div className="relative px-2 md:px-6">
          {/* Photo-like container */}
          <div className="relative rounded-[2rem] aspect-[16/10] bg-blue-100 overflow-hidden shadow-xl border border-white/60">
            {/* Boxes backdrop */}
            <WarehouseBoxes />

            {/* Soft shadow under laptop */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[12%] w-[60%] h-6 bg-black/30 blur-2xl rounded-full" />

            {/* Laptop */}
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-12 pt-6 pb-8">
              <LaptopMockup />
            </div>

            {/* Floating Get Started card */}
            <div className="absolute top-6 right-4 md:right-8 hidden sm:block">
              <GetStartedCard />
            </div>

            {/* Floating blue check badge */}
            <div className="absolute right-4 bottom-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-500 text-2xl md:text-3xl border border-blue-100 font-bold">
              ✓
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 rounded-2xl bg-white shadow-lg border border-slate-200 px-5 md:px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✦</span>
            <p className="text-sm md:text-base font-semibold text-slate-900">
              AI for small businesses.{" "}
              <span className="text-slate-500 font-normal">Easy setup, no cost.</span>
            </p>
          </div>
          <a
            href="/demo"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transition-shadow whitespace-nowrap"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
