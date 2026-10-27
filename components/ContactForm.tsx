"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Arrow } from "./icons";
import { site } from "./site";

const topics = {
  optimisation: "AI cost / latency / accuracy optimisation",
  research: "Research partnership",
  deck: "Request pitch deck / company brief",
  careers: "Careers",
  other: "Something else",
};

const field =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-bolt/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-bolt/10";

// No backend yet: submitting opens the visitor's mail client with a prefilled message.
export default function ContactForm() {
  const fromUrl = useSearchParams().get("topic");
  const [picked, setTopic] = useState<keyof typeof topics | null>(null);
  const topic = picked ?? (fromUrl && fromUrl in topics ? (fromUrl as keyof typeof topics) : "optimisation");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `[${topics[topic]}] ${d.get("company") || d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Company: ${d.get("company")}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-[1.5rem] border border-line bg-[#0a0c15]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-muted">Name</span>
          <input name="name" required placeholder="Your name" className={field} />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-muted">Work email</span>
          <input name="email" type="email" required placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="mt-4 block space-y-2">
        <span className="text-sm text-muted">Company</span>
        <input name="company" placeholder="Company name" className={field} />
      </label>

      <fieldset className="mt-5">
        <legend className="text-sm text-muted">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(topics) as (keyof typeof topics)[]).map((k) => (
            <button
              type="button"
              key={k}
              onClick={() => setTopic(k)}
              aria-pressed={topic === k}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                topic === k
                  ? "border-bolt bg-bolt/15 text-foreground"
                  : "border-line text-muted hover:border-white/25 hover:text-foreground"
              }`}
            >
              {topics[k]}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block space-y-2">
        <span className="text-sm text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Models you run, monthly volume, what you'd like to improve…"
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:bg-white/90"
      >
        Send message <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 text-center text-xs text-muted" aria-live="polite">
        {sent ? "Opening your email app… if nothing happens, write to " + site.email : "We'll never share your details."}
      </p>
    </form>
  );
}
