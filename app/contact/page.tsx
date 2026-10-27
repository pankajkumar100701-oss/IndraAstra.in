import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { LinkedIn, Mail, Pin } from "@/components/icons";
import { site } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to IndraAstra about optimising your AI in production.",
};

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: LinkedIn, label: "LinkedIn", value: "IndraAstra", href: site.linkedin },
    { icon: Pin, label: "Headquarters", value: site.location },
  ];

  return (
    <div className="relative overflow-hidden pt-36 pb-24">
      <div className="grid-bg absolute inset-x-0 top-0 -z-10 h-[520px]" />
      <div className="absolute right-0 top-10 -z-10 h-[400px] w-[600px] rounded-full bg-volt/10 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Contact</span>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Let&apos;s make your AI{" "}
            <span className="font-serif font-normal italic text-gradient">faster.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Tell us about your stack and what&apos;s slowing it down. We usually reply within one business day.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => {
              const inner = (
                <>
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-volt">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-transparent p-2 transition hover:border-line hover:bg-white/[0.02]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <Suspense fallback={<div className="h-[560px] rounded-[1.5rem] border border-line bg-[#0a0c15]/80" />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </div>
  );
}
