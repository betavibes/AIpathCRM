const apps = [
  "Slack", "Google Workspace", "Microsoft 365", "Stripe", "Shopify",
  "WhatsApp", "Telegram", "Zapier", "QuickBooks", "Salesforce",
  "HubSpot", "Notion", "Linear", "Jira", "Twilio", "SendGrid",
  "AWS", "GitHub", "DocuSign", "Calendly",
];

export default function Integrations() {
  const doubled = [...apps, ...apps];
  return (
    <section className="py-28 bg-[#161823] border-y border-white/[0.06]">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="chip"><span className="chip-dot" />Integrations</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Connects to <span className="text-gradient">everything</span> you already use.
          </h2>
          <p className="mt-5 text-zinc-400">
            100+ native integrations. A modern API for the rest. Your data stays unified, automatically.
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
