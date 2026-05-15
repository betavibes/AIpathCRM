export type Category = "Guide" | "Customer Story" | "Engineering" | "Product Update" | "AI";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readingTime: string;
  date: string; // ISO
  author: { name: string; role: string; initials: string };
  accent: string; // tailwind gradient classes for thumb
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string; cite?: string }
    | { type: "callout"; text: string }
  >;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-agents-changing-sales",
    title: "How AI agents are quietly changing how sales teams operate",
    excerpt:
      "The shift from AI-as-feature to AI-as-coworker is happening faster than most ops leaders realize. Here's what changes — and what doesn't.",
    category: "AI",
    readingTime: "6 min",
    date: "2026-04-22",
    author: { name: "Anurag Chaurasia", role: "Co-founder, Tech & AI", initials: "AC" },
    accent: "from-indigo-500/30 to-violet-500/10",
    tags: ["AI agents", "Sales ops", "Workflows"],
    content: [
      { type: "p", text: "Six months ago, AI in CRM meant a sentiment score on a contact card. Today, our customers have agents that draft proposals, qualify leads at 2 AM, and handle the first three touchpoints of a renewal — without human involvement." },
      { type: "p", text: "This isn't science fiction. It's the operational reality at the 200+ teams running AIpath AI Agents in production. And it's reshaping how sales leaders think about headcount, ramp time, and what 'productivity' even means." },
      { type: "h2", text: "From feature to coworker" },
      { type: "p", text: "The mental shift is subtle but profound. AI as a feature is something you click into — a chatbot, a summarizer, a writing assistant. AI as a coworker is something that operates in the background, with goals, with memory, and with autonomy bounded by policy." },
      { type: "h3", text: "What this looks like in practice" },
      { type: "ul", items: [
        "An SDR agent qualifies inbound leads, books meetings, and pushes hot ones to humans — 24/7",
        "A finance agent reconciles invoices under ₹50K automatically, escalating only edge cases",
        "A support agent triages tickets, drafts replies, and routes complex ones to the right specialist",
        "An ops agent monitors SLA breaches and re-prioritizes the queue in real time",
      ]},
      { type: "callout", text: "Customers tell us the unlock isn't replacing humans — it's giving every human two more hours a day to do work only humans can do." },
      { type: "h2", text: "What still needs human judgment" },
      { type: "p", text: "We're explicit with our customers: agents are best at high-volume, low-ambiguity work. They are not yet good at: reading the room in a renewal call, navigating an angry escalation, or making strategic pricing decisions. The pattern that works is agents handling the first 70% of any flow, humans handling the last 30%." },
      { type: "quote", text: "Our SDR team genuinely has a digital teammate that drafts, follows up, and qualifies — overnight. Conversion is up 62%.", cite: "Marcus Chen, VP Sales, Lumen SaaS" },
      { type: "h2", text: "Where this goes next" },
      { type: "p", text: "The next 12 months will be about coordination — multiple agents working together, handing off context, escalating to humans gracefully. We're already seeing teams build their own custom agents on top of AIpath's primitives. The future of CRM isn't a better interface. It's a workforce." },
    ],
  },
  {
    slug: "northstar-3-4x-pipeline",
    title: "How Northstar Industries grew pipeline 3.4× in one quarter",
    excerpt:
      "A manufacturing leader replaced four legacy tools with AIpath. The unification — not the AI — was the unlock.",
    category: "Customer Story",
    readingTime: "5 min",
    date: "2026-03-18",
    author: { name: "Aadesh Gupta", role: "Co-founder, Growth", initials: "AG" },
    accent: "from-emerald-500/30 to-cyan-500/10",
    tags: ["Manufacturing", "ROI", "Migration"],
    content: [
      { type: "p", text: "Priya Menon took over as COO of Northstar Industries in late 2025 with a clear mandate: reduce operational drag. Her team was running Salesforce for CRM, NetSuite for ERP, two separate inventory systems, and a custom Power BI stack stitched on top." },
      { type: "p", text: "Six months later, Northstar runs on AIpath. Pipeline velocity is up 3.4×, finance close time dropped from 11 days to 3, and the company's first AI agent is qualifying inbound enterprise leads autonomously." },
      { type: "h2", text: "The migration" },
      { type: "p", text: "Most teams approach a CRM/ERP migration like a six-quarter project. Northstar finished primary migration in 11 weeks. The native importers handled 94% of the heavy lifting; our migration partner team handled the rest." },
      { type: "ul", items: [
        "Week 1–3: Data mapping & sandbox migration",
        "Week 4–7: Workflow rebuild + AI agent training on Northstar's data",
        "Week 8–9: Parallel run with legacy stack",
        "Week 10–11: Cutover + decommission",
      ]},
      { type: "h2", text: "What changed" },
      { type: "p", text: "The biggest unlock wasn't AI — it was data unification. When sales, ops, and finance share the same record, decisions stop being arguments about whose data is right." },
      { type: "quote", text: "We replaced four tools with AIpath in a single quarter. Our pipeline velocity is up 3.4× and our finance ops finally has a single source of truth.", cite: "Priya Menon, COO, Northstar Industries" },
    ],
  },
  {
    slug: "ai-substrate-architecture",
    title: "Why we built AIpath as an AI-native platform from day one",
    excerpt:
      "Bolting AI onto a legacy CRM produces a worse product than starting from scratch. Here's the architectural argument.",
    category: "Engineering",
    readingTime: "8 min",
    date: "2026-02-09",
    author: { name: "Anurag Chaurasia", role: "Co-founder, Tech & AI", initials: "AC" },
    accent: "from-cyan-500/30 to-indigo-500/10",
    tags: ["Architecture", "AI", "Platform"],
    content: [
      { type: "p", text: "If you've used Salesforce Einstein, HubSpot's AI features, or Zoho Zia, you've experienced what happens when AI is added to a platform built before transformer models existed: it works, but it feels grafted on. There's a reason." },
      { type: "h2", text: "Three architectural decisions" },
      { type: "p", text: "When we started AIpath in 2024, we made three foundational bets that shaped everything since." },
      { type: "h3", text: "1. Unified semantic data layer" },
      { type: "p", text: "Every record — contact, deal, invoice, asset — is stored in a single semantic graph with rich relationships. AI agents reason across this graph natively. Compare to legacy CRMs where each module has its own schema and AI has to translate." },
      { type: "h3", text: "2. Streaming inference at the data layer" },
      { type: "p", text: "Instead of running AI as a separate service called via API, our inference layer sits inside the data plane. Lead scoring, summarization, and recommendations happen at write time, not on demand." },
      { type: "h3", text: "3. Tool-first agent design" },
      { type: "p", text: "Every action a human can take — create a deal, send an email, approve an invoice — is also an MCP-compatible tool. Agents use the same primitives as humans. There's no separate 'AI surface area.'" },
      { type: "callout", text: "The architectural test: if you removed the chat UI from AIpath tomorrow, the AI would still be running everywhere. That's the difference between AI-native and AI-added." },
    ],
  },
  {
    slug: "q3-2026-release",
    title: "Q3 2026 release: AI Agents GA, Workflow Builder 2.0, and 18 integrations",
    excerpt:
      "Our biggest quarter ever. Three flagship features ship and we land a major partnership with Microsoft 365.",
    category: "Product Update",
    readingTime: "4 min",
    date: "2026-01-15",
    author: { name: "Anuj Kumar Singh", role: "Co-founder, Product", initials: "AS" },
    accent: "from-violet-500/30 to-pink-500/10",
    tags: ["Release notes", "Roadmap"],
    content: [
      { type: "p", text: "This is the largest release in AIpath's history. Six months of work from the entire team ships today." },
      { type: "h2", text: "AI Agents — generally available" },
      { type: "p", text: "After 4 months in beta with 200+ design partners, AI Agents are now GA on the Growth plan and above. Five built-in agents (SDR, Support, Finance, Ops, Recruiting) ship today, and the Custom Agent Builder is in private preview." },
      { type: "h2", text: "Workflow Builder 2.0" },
      { type: "p", text: "Visual drag-and-drop with AI-suggested next steps, public template marketplace, conditional branching, and sandbox testing. Migration from v1 is automatic." },
      { type: "h2", text: "18 new integrations" },
      { type: "ul", items: ["Microsoft 365 (deep integration)", "Linear, Notion, Asana", "Stripe, Razorpay, PayPal", "DocuSign, eSignly", "Twilio, SendGrid, Resend", "BigQuery, Snowflake, Databricks"]},
    ],
  },
  {
    slug: "scaling-on-call-150-engineers",
    title: "Scaling on-call from 8 to 150 engineers without burning anyone out",
    excerpt:
      "How we restructured our incident response as the team grew 18×, and the AI playbook that runs every page now.",
    category: "Engineering",
    readingTime: "7 min",
    date: "2025-12-04",
    author: { name: "Anurag Chaurasia", role: "Co-founder, Tech & AI", initials: "AC" },
    accent: "from-rose-500/30 to-amber-500/10",
    tags: ["Engineering", "Reliability", "Culture"],
    content: [
      { type: "p", text: "When you go from 8 engineers to 150 in 18 months, on-call breaks. Here's what we did." },
      { type: "h2", text: "The old way" },
      { type: "p", text: "Round-robin across the whole team. One engineer per week. It worked at 8. It collapsed at 40. People burned out, alerts got ignored, and our MTTR doubled." },
      { type: "h2", text: "The new way" },
      { type: "p", text: "Tiered response with AI as the first responder. Every page hits an AI runbook executor first. It correlates signals, runs diagnostics, and either auto-resolves (60% of cases) or pages a human with full context attached." },
    ],
  },
  {
    slug: "guide-migrating-from-salesforce",
    title: "The complete guide to migrating from Salesforce to AIpath",
    excerpt:
      "A practical, opinionated playbook based on 200+ real migrations. What to plan for, what to skip, and how to keep your reps from rebelling.",
    category: "Guide",
    readingTime: "12 min",
    date: "2025-11-20",
    author: { name: "Aadesh Gupta", role: "Co-founder, Growth", initials: "AG" },
    accent: "from-amber-500/30 to-orange-500/10",
    tags: ["Migration", "Salesforce", "Playbook"],
    content: [
      { type: "p", text: "Migrating CRMs is one of the most political projects an ops leader can take on. Done wrong, you lose months and trust. Done right, you save your company seven figures a year. Here's the playbook." },
      { type: "h2", text: "Phase 1: Audit before you plan" },
      { type: "p", text: "Most failed migrations skip this. Spend two weeks understanding what's actually being used in your current Salesforce instance. You'll find — guaranteed — that 60% of custom fields and 80% of custom objects are dead." },
      { type: "h2", text: "Phase 2: Map, don't replicate" },
      { type: "p", text: "AIpath has a different data model. Don't try to recreate every Salesforce object 1:1. Map to the AIpath primitives. The result will be cleaner and faster." },
      { type: "h2", text: "Phase 3: Run in parallel" },
      { type: "p", text: "Two weeks minimum. Your reps need to trust the new system before you cut over." },
    ],
  },
];

export const categories: Category[] = ["Guide", "Customer Story", "Engineering", "Product Update", "AI"];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
