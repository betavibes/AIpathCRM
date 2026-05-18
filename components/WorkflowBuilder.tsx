"use client";

import { useEffect, useState } from "react";
import BrowserFrame from "./dashboards/BrowserFrame";

type Node = {
  id: string;
  x: number;
  y: number;
  type: "trigger" | "ai" | "action" | "condition" | "notify";
  title: string;
  body: string;
  icon: string;
};

const nodes: Node[] = [
  { id: "n1", x: 60,  y: 90,  type: "trigger",   title: "When", body: "Lead is created", icon: "⚡" },
  { id: "n2", x: 280, y: 90,  type: "ai",        title: "AI scores lead", body: "Win probability + intent", icon: "✦" },
  { id: "n3", x: 500, y: 30,  type: "condition", title: "If score > 70", body: "High-intent path", icon: "◆" },
  { id: "n4", x: 500, y: 170, type: "condition", title: "Else",     body: "Nurture path", icon: "◇" },
  { id: "n5", x: 720, y: 30,  type: "action",    title: "Assign SDR", body: "Round-robin enterprise reps", icon: "▦" },
  { id: "n6", x: 720, y: 170, type: "action",    title: "Drip campaign", body: "5-touch nurture sequence", icon: "▥" },
  { id: "n7", x: 940, y: 100, type: "notify",    title: "Notify team", body: "Slack + email + WhatsApp", icon: "♪" },
];

const edges: Array<[string, string]> = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n2", "n4"],
  ["n3", "n5"],
  ["n4", "n6"],
  ["n5", "n7"],
  ["n6", "n7"],
];

const typeColors: Record<Node["type"], { bg: string; border: string; chip: string }> = {
  trigger:   { bg: "from-indigo-500/20 to-blue-500/5",   border: "border-indigo-500/40", chip: "bg-indigo-500/20 text-indigo-200 border-indigo-500/30" },
  ai:        { bg: "from-violet-500/25 to-pink-500/5",   border: "border-violet-500/50", chip: "bg-violet-500/20 text-violet-200 border-violet-500/30" },
  condition: { bg: "from-amber-500/15 to-orange-500/5",  border: "border-amber-500/30",  chip: "bg-amber-500/20 text-amber-200 border-amber-500/30" },
  action:    { bg: "from-cyan-500/15 to-indigo-500/5",   border: "border-cyan-500/30",   chip: "bg-cyan-500/20 text-cyan-200 border-cyan-500/30" },
  notify:    { bg: "from-emerald-500/15 to-cyan-500/5",  border: "border-emerald-500/30", chip: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30" },
};

const typeLabels: Record<Node["type"], string> = {
  trigger: "TRIGGER",
  ai: "AI",
  condition: "IF/ELSE",
  action: "ACTION",
  notify: "NOTIFY",
};

const NODE_W = 180;
const NODE_H = 76;

function nodeAnchor(n: Node, side: "in" | "out") {
  return { x: side === "in" ? n.x : n.x + NODE_W, y: n.y + NODE_H / 2 };
}

function edgePath(a: Node, b: Node) {
  const p1 = nodeAnchor(a, "out");
  const p2 = nodeAnchor(b, "in");
  const dx = (p2.x - p1.x) / 2;
  return `M ${p1.x} ${p1.y} C ${p1.x + dx} ${p1.y}, ${p2.x - dx} ${p2.y}, ${p2.x} ${p2.y}`;
}

const sequence = ["n1", "n2", "n3", "n4", "n5", "n6", "n7"];

export default function WorkflowBuilder() {
  const [active, setActive] = useState<Set<string>>(new Set(["n1"]));

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % (sequence.length + 2);
      if (i === 0) {
        setActive(new Set(["n1"]));
        return;
      }
      if (i <= sequence.length) {
        setActive((prev) => new Set([...prev, sequence[i - 1]]));
      }
    }, 900);
    return () => clearInterval(t);
  }, []);

  return (
    <BrowserFrame url="app.aipathcrm.com / workflows / lead-router">
      <div className="bg-[#15161F] text-zinc-200">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] text-[11px]">
          <div className="flex items-center gap-3">
            <span className="text-zinc-200 font-semibold">High-intent Lead Router</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse-glow" />
              Live
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500">Last run: 2m ago · 312 leads/day</span>
            <button className="text-[10px] px-2.5 py-1 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium">
              Test run
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative bg-[#161823] overflow-x-auto" style={{ minHeight: 320 }}>
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <svg
            viewBox="0 0 1140 320"
            className="w-full h-[320px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="edge-active" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9"/>
              </linearGradient>
              <filter id="edge-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="b"/>
                <feMerge>
                  <feMergeNode in="b"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Edges */}
            {edges.map(([fromId, toId]) => {
              const a = nodes.find((n) => n.id === fromId)!;
              const b = nodes.find((n) => n.id === toId)!;
              const isActive = active.has(fromId) && active.has(toId);
              return (
                <g key={`${fromId}-${toId}`}>
                  <path
                    d={edgePath(a, b)}
                    fill="none"
                    stroke={isActive ? "url(#edge-active)" : "rgba(255,255,255,0.10)"}
                    strokeWidth={isActive ? 2 : 1.2}
                    strokeLinecap="round"
                    filter={isActive ? "url(#edge-glow)" : undefined}
                    style={{ transition: "all 0.4s ease" }}
                  />
                  {isActive && (
                    <circle r="3" fill="#A78BFA">
                      <animateMotion dur="1.4s" repeatCount="indefinite" path={edgePath(a, b)} />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes (positioned absolutely on top of svg) */}
          <div className="absolute inset-0 pointer-events-none">
            {nodes.map((n) => {
              const isActive = active.has(n.id);
              const t = typeColors[n.type];
              return (
                <div
                  key={n.id}
                  className={`absolute rounded-xl border bg-gradient-to-br ${t.bg} ${t.border} backdrop-blur-sm transition-all duration-500 ${
                    isActive
                      ? "shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] opacity-100 scale-100"
                      : "opacity-50 scale-95"
                  }`}
                  style={{
                    left: `${(n.x / 1140) * 100}%`,
                    top: `${(n.y / 320) * 100}%`,
                    width: `${(NODE_W / 1140) * 100}%`,
                    minHeight: NODE_H,
                  }}
                >
                  <div className="p-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[8px] font-bold tracking-[0.15em] px-1.5 py-0.5 rounded border ${t.chip}`}>
                        {typeLabels[n.type]}
                      </span>
                      <span className="text-[10px] opacity-70">{n.icon}</span>
                    </div>
                    <p className="text-[11px] font-semibold leading-tight text-white">{n.title}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5 leading-snug">{n.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip — palette */}
        <div className="border-t border-white/[0.05] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="text-zinc-500">Add:</span>
            {(["trigger", "ai", "condition", "action", "notify"] as Node["type"][]).map((tp) => (
              <span
                key={tp}
                className={`px-2 py-0.5 rounded border ${typeColors[tp].chip} cursor-pointer hover:scale-105 transition-transform`}
              >
                + {typeLabels[tp]}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-zinc-500">
            <span>Auto-saved</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span className="text-zinc-400">v 4.2</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
