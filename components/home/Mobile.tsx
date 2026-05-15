import MobileFrames from "@/components/dashboards/MobileFrames";

export default function Mobile() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <MobileFrames />
          </div>

          <div className="order-1 lg:order-2">
            <span className="chip"><span className="chip-dot" />Mobile</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
              Your business.
              <br />
              <span className="text-gradient">In your pocket.</span>
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              Native iOS & Android apps with offline mode, push intelligence,
              and field-ops dashboards. Approve, respond, and decide from anywhere.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Real-time sync", "Across web + mobile"],
                ["Offline mode", "Work anywhere, sync later"],
                ["Field ops", "Built for technicians & sales"],
                ["Push intel", "AI alerts that matter"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold">{t}</p>
                  <p className="text-xs text-zinc-500 mt-1">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-secondary" href="#">▲ App Store</a>
              <a className="btn-secondary" href="#">▶ Google Play</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
