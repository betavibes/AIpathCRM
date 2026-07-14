"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/contact";

const field =
  "w-full bg-[#15161F] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all";
const labelCls = "block text-xs uppercase tracking-[0.15em] text-zinc-400 mb-2";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          company: data.get("company"),
          teamSize: data.get("teamSize"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        form.reset();
        setStatus("sent");
        return;
      }

      setStatus("error");
      setError(
        json.error && json.error !== "NOT_CONFIGURED" && json.error !== "SEND_FAILED"
          ? json.error
          : null
      );
    } catch {
      setStatus("error");
      setError(null);
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] p-7 text-center">
        <div className="mx-auto mb-4 inline-flex w-11 h-11 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-emerald-100">
          Message sent.
        </h3>
        <p className="mt-2 text-sm text-zinc-300">
          It&apos;s with a real person, not a queue. We&apos;ll reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6 !py-2.5 !px-5 !text-sm"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={labelCls}>First name</label>
          <input id="firstName" name="firstName" type="text" required className={field} placeholder="John" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>Last name</label>
          <input id="lastName" name="lastName" type="text" className={field} placeholder="Doe" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>Work email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="john@company.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelCls}>Company</label>
          <input id="company" name="company" type="text" className={field} placeholder="Your company" />
        </div>
        <div>
          <label htmlFor="teamSize" className={labelCls}>Team size</label>
          <select id="teamSize" name="teamSize" className={field} defaultValue="">
            <option value="" disabled>Select...</option>
            <option>1—10</option>
            <option>11—50</option>
            <option>51—200</option>
            <option>201—1,000</option>
            <option>1,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
          placeholder="Tell us about your business, current stack, and what you're trying to achieve..."
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/[0.07] p-5 text-sm">
          <p className="font-semibold text-amber-100">
            {error ?? "We couldn't send that just now."}
          </p>
          {!error && (
            <p className="mt-2 text-zinc-300 leading-relaxed">
              Rather than lose your message, reach us directly —{" "}
              <a
                href={`mailto:${CONTACT.emails.general}`}
                className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
              >
                {CONTACT.emails.general}
              </a>{" "}
              or{" "}
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
              >
                WhatsApp {CONTACT.whatsapp.display}
              </a>
              .
            </p>
          )}
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="w-full btn-primary !py-3.5 disabled:opacity-60">
        {status === "sending" ? "Sending…" : <>Send message <span aria-hidden>→</span></>}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        We use what you send us only to reply to you. We do not sell or share your details.
      </p>
    </form>
  );
}
