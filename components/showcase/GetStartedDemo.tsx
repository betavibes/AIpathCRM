function MiniCRMDashboard() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Soft drop shadow ring */}
      <div className="absolute -inset-4 bg-blue-300/30 blur-3xl rounded-3xl pointer-events-none" />

      {/* Dashboard card */}
      <div className="relative rounded-3xl bg-white shadow-2xl shadow-blue-900/20 overflow-hidden border border-blue-200/60">
        {/* Top browser bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="text-[10px] text-slate-500 font-mono px-3 py-0.5 rounded-md bg-white border border-slate-200">
            🔒 app.aipathcrm.com
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span className="text-[14px]">⌕</span>
            <span className="text-[14px]">⚙</span>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[60px_1fr] min-h-[240px]">
          {/* Sidebar */}
          <aside className="bg-white border-r border-slate-200 py-4 flex flex-col items-center gap-3">
            {[
              { i: "☁", a: true, c: "bg-blue-500 text-white" },
              { i: "⌂", c: "text-slate-500" },
              { i: "👥", c: "text-slate-500" },
              { i: "▦", c: "text-slate-500" },
              { i: "♥", c: "text-slate-500" },
              { i: "⊙", c: "text-slate-500" },
              { i: "ⓘ", c: "text-slate-500" },
            ].map((s, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-base ${s.c}`}
              >
                {s.i}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="p-4">
            {/* Top bar with search */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex-1 max-w-md h-7 rounded-md bg-slate-100 border border-slate-200" />
              <span className="text-[11px] text-slate-500">🔔 ⚙ 👤</span>
            </div>

            {/* KPI cards row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { l: "Pipeline", v: "▬▬▬▬▬", c: "bg-blue-100" },
                { l: "Closed Won", v: "▬▬▬▬", c: "bg-blue-100" },
                { l: "Quota", v: "▬▬▬", c: "bg-blue-100" },
              ].map((k, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="h-1 w-12 rounded-full bg-slate-200 mb-2" />
                  <div className="h-2.5 w-24 rounded-full bg-slate-300" />
                </div>
              ))}
            </div>

            {/* Bar chart cards row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-1 w-16 rounded-full bg-slate-200 mb-3" />
                <div className="space-y-1.5">
                  {[80, 65, 45].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-emerald-400" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3">
                <div className="h-1 w-16 rounded-full bg-slate-200 mb-3" />
                <div className="space-y-1.5">
                  {[90, 70, 50, 40].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-amber-400" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-14 h-14">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#cffafe" strokeWidth="4" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#06b6d4" strokeWidth="4"
                    strokeDasharray="60 88" transform="rotate(-90 18 18)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating "Get Started" onboarding card */}
      <div className="absolute -right-4 top-1/4 hidden md:block">
        <div className="w-56 rounded-2xl bg-white shadow-2xl shadow-blue-900/30 border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-100">
            <span className="text-slate-400 text-xs">‹</span>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <span>📌</span>
              <span>✕</span>
            </div>
          </div>
          <div className="p-3.5">
            <p className="text-sm font-bold text-slate-900 mb-1">Get Started</p>
            <div className="flex items-center justify-between mb-1">
              <div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "25%" }} />
              </div>
              <span className="ml-2 text-[10px] font-semibold text-slate-500">25%</span>
            </div>
            <p className="text-[10px] text-slate-400">1 of 4</p>

            <div className="mt-3 space-y-1.5">
              {[
                { t: "Watch an Intro Video", done: true },
                { t: "Import Contacts", done: false },
                { t: "Invite User", done: false },
                { t: "Connect Email", done: false },
              ].map((item) => (
                <div key={item.t} className="flex items-center gap-2 text-[11px]">
                  <span
                    className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[8px] font-bold ${
                      item.done
                        ? "bg-blue-500 text-white"
                        : "bg-white border border-slate-300 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={item.done ? "text-slate-700" : "text-slate-500"}>{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating blue check badge bottom-right */}
      <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-500 text-2xl border border-blue-100">
        ✓
      </div>
    </div>
  );
}

export default function GetStartedDemo() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-blue-200/40 shadow-2xl shadow-blue-900/40">
      {/* Light sky gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-100 to-blue-200" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(59,130,246,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.18), transparent 50%)",
        }}
      />

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

        {/* Dashboard */}
        <div className="px-2 md:px-12 mb-10">
          <MiniCRMDashboard />
        </div>

        {/* Bottom strip — like the reference's Sign-up bar */}
        <div className="rounded-2xl bg-white shadow-lg border border-slate-200 px-5 md:px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✦</span>
            <p className="text-sm md:text-base font-semibold text-slate-900">
              AI for small businesses. <span className="text-slate-500 font-normal">Easy setup, no cost.</span>
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
