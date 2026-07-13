"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const fmtINR = (n: number) =>
  "₹" +
  Math.round(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

const fmtINRshort = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}K`;
  return `₹${Math.round(n)}`;
};

type Sliders = {
  users: number;
  legacyPerUser: number;
  hoursSaved: number;
  hourlyCost: number;
};

const aipathPerUser = 499; // Growth plan, per user / month

function compute({ users, legacyPerUser, hoursSaved, hourlyCost }: Sliders) {
  const legacyMonthly = users * legacyPerUser;
  const aipathMonthly = users * aipathPerUser;
  const productivityMonthly = users * hoursSaved * 4 * hourlyCost;

  const monthlySavings = legacyMonthly - aipathMonthly + productivityMonthly;
  const annualSavings = monthlySavings * 12;
  const paybackMonths =
    monthlySavings > 0 ? Math.max(1, Math.round((aipathMonthly / monthlySavings) * 10) / 10) : 99;
  const reductionPct = legacyMonthly > 0 ? Math.round((1 - aipathMonthly / legacyMonthly) * 100) : 0;

  return {
    legacyMonthly,
    aipathMonthly,
    productivityMonthly,
    monthlySavings,
    annualSavings,
    paybackMonths,
    reductionPct,
  };
}

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
  hint,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
  hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-xs uppercase tracking-[0.15em] text-zinc-400">
          {label}
        </label>
        <span className="text-base font-semibold tracking-tight text-gradient">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none h-1.5 rounded-full bg-white/[0.06] outline-none accent-indigo-500"
        style={{
          background: `linear-gradient(to right, #818CF8 0%, #A78BFA ${pct}%, rgba(255,255,255,0.06) ${pct}%, rgba(255,255,255,0.06) 100%)`,
        }}
      />
      {hint && <p className="text-[11px] text-zinc-500 mt-1.5">{hint}</p>}
    </div>
  );
}

export default function ROICalculator() {
  const [s, setS] = useState<Sliders>({
    users: 25,
    legacyPerUser: 1500,
    hoursSaved: 8,
    hourlyCost: 800,
  });

  const r = useMemo(() => compute(s), [s]);

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-7 md:p-10 max-w-5xl mx-auto relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <span className="chip"><span className="chip-dot" />Interactive</span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Your numbers, instantly.
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Move the sliders to model your savings. Calculation is live, no email gate.
            </p>
          </div>

          <div className="space-y-5">
            <Slider
              label="Team size"
              value={s.users}
              min={5}
              max={500}
              step={1}
              onChange={(v) => setS({ ...s, users: v })}
              format={(v) => `${v} users`}
            />
            <Slider
              label="Current spend per user / month"
              value={s.legacyPerUser}
              min={500}
              max={5000}
              step={100}
              onChange={(v) => setS({ ...s, legacyPerUser: v })}
              format={fmtINR}
              hint="Add up your CRM, ERP, HRMS, automation, and analytics tool fees."
            />
            <Slider
              label="Hours saved per user / week"
              value={s.hoursSaved}
              min={1}
              max={20}
              step={1}
              onChange={(v) => setS({ ...s, hoursSaved: v })}
              format={(v) => `${v} hrs`}
              hint="From AI agents, automation, and fewer tool switches."
            />
            <Slider
              label="Average hourly cost"
              value={s.hourlyCost}
              min={200}
              max={3000}
              step={50}
              onChange={(v) => setS({ ...s, hourlyCost: v })}
              format={fmtINR}
              hint="Loaded cost (salary + benefits) per hour."
            />
          </div>
        </div>

        {/* Outputs */}
        <div className="space-y-4">
          {/* Hero result */}
          <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-indigo-200">Estimated annual saving</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-gradient">
              {fmtINRshort(r.annualSavings)}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
                <p className="text-zinc-500">Monthly saving</p>
                <p className="text-base font-semibold mt-1">{fmtINRshort(r.monthlySavings)}</p>
              </div>
              <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
                <p className="text-zinc-500">Payback</p>
                <p className="text-base font-semibold mt-1">{r.paybackMonths.toFixed(1)} mo</p>
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-zinc-400">
              This is an estimate based on the numbers you entered — not a measured result or a promise.
              Your actual saving depends on your team and your processes.
            </p>
          </div>

          {/* Breakdown */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 mb-4">
              Monthly breakdown
            </p>
            <div className="space-y-3">
              <Row label="Legacy stack" value={fmtINR(r.legacyMonthly)} bar={100} color="bg-rose-500/70" />
              <Row
                label="AIpath CRM"
                value={fmtINR(r.aipathMonthly)}
                bar={r.legacyMonthly > 0 ? (r.aipathMonthly / r.legacyMonthly) * 100 : 0}
                color="bg-gradient-to-r from-indigo-500 to-violet-500"
              />
              <div className="h-px bg-white/[0.06] my-2" />
              <Row
                label="Productivity gain"
                value={`+ ${fmtINR(r.productivityMonthly)}`}
                bar={r.legacyMonthly > 0 ? (r.productivityMonthly / r.legacyMonthly) * 100 : 0}
                color="bg-gradient-to-r from-emerald-500 to-cyan-500"
                positive
              />
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Cost cut" value={`${r.reductionPct}%`} accent="rose" />
            <Stat label="Hrs / wk saved" value={`${s.users * s.hoursSaved}`} accent="cyan" />
            <Stat label="Year 1 ROI" value={`${Math.round((r.annualSavings / (s.users * aipathPerUser * 12)) * 100)}%`} accent="emerald" />
          </div>

          <Link
            href="/contact"
            className="btn-primary w-full justify-center"
          >
            Talk to us about your numbers
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  bar,
  color,
  positive,
}: {
  label: string;
  value: string;
  bar: number;
  color: string;
  positive?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5 text-sm">
        <span className="text-zinc-400">{label}</span>
        <span className={`font-semibold ${positive ? "text-emerald-300" : "text-zinc-100"}`}>
          {value}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300 rounded-full`}
          style={{ width: `${Math.min(100, Math.max(2, bar))}%` }}
        />
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "rose" | "cyan" | "emerald";
}) {
  const colors = {
    rose: "text-rose-300 border-rose-500/20 bg-rose-500/5",
    cyan: "text-cyan-300 border-cyan-500/20 bg-cyan-500/5",
    emerald: "text-emerald-300 border-emerald-500/20 bg-emerald-500/5",
  };
  return (
    <div className={`rounded-lg border ${colors[accent]} p-3 text-center`}>
      <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400">{label}</p>
      <p className={`text-lg font-semibold mt-1 ${colors[accent].split(" ")[0]}`}>{value}</p>
    </div>
  );
}
