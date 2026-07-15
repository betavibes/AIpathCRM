const channels = [
  "WhatsApp",
  "Email",
  "Website & web forms",
  "Mobile app · iOS & Android",
  "Google Drive",
  "Media & documents",
  "Payment capture",
  "Custom integrations",
];

export default function Integrations() {
  const doubled = [...channels, ...channels];
  return (
    <section className="py-28">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip"><span className="chip-dot" />Connected</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Runs on the channels <span className="text-gradient">your business already uses.</span>
          </h2>
          <p className="mt-5 text-zinc-400">
            Customers reach you on WhatsApp, email and your website; your team works on web and
            mobile. AIpath pulls it all into one place — and if you need a specific tool wired in,
            we build the integration. Tell us your stack and we&apos;ll tell you straight what we can connect.
          </p>
        </div>

        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee">
            {doubled.map((a, i) => (
              <div
                key={`${a}-${i}`}
                className="shrink-0 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300 backdrop-blur"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
