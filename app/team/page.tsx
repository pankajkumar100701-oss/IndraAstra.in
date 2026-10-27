import type { Metadata } from "next";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import { Arrow, LinkedIn } from "@/components/icons";
import { site, team, type Member } from "@/components/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The researchers and engineers behind IndraAstra.",
};

const groups: Member["group"][] = ["Leadership", "Founding Engineers", "Mentor", "Interns"];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden pt-36 pb-24">
      <div className="grid-bg absolute inset-x-0 top-0 -z-10 h-[520px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-bolt/20 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Our team</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Small team. <span className="font-serif font-normal italic text-gradient">Serious</span> research.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Scientists and engineers from IIT (BHU), IIT Madras and industry — united by a belief that AI can be
            dramatically more efficient than it is today.
          </p>
        </Reveal>

        {groups.map((g) => {
          const members = team.filter((m) => m.group === g);
          return (
            <section key={g} className="mt-20">
              <Reveal>
                <div className="flex items-center gap-4">
                  <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">{g}</h2>
                  <div className="h-px flex-1 bg-line" />
                </div>
              </Reveal>
              <div
                className={`mt-8 grid gap-5 ${
                  g === "Leadership" || g === "Mentor" ? "md:grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {members.map((m, i) => (
                  <Reveal key={m.name} delay={i * 100}>
                    {g === "Leadership" || g === "Mentor" ? <WideCard m={m} /> : <MemberCard m={m} />}
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}

        <Reveal>
          <div className="mt-24 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-white/[0.02] p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Want to build with us?</h3>
              <p className="mt-2 text-muted">We&apos;re always looking for curious researchers and engineers.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0a66c2] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0a66c2]/90"
              >
                <LinkedIn className="h-4 w-4" /> Follow on LinkedIn
              </a>
              <Link
                href="/contact?topic=careers"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium transition hover:border-white/25"
              >
                Get in touch <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function LinkedInButton({ m }: { m: Member }) {
  if (!m.linkedin) return null;
  return (
    <a
      href={m.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${m.name} on LinkedIn`}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
    >
      <LinkedIn className="h-4 w-4" />
    </a>
  );
}

function WideCard({ m }: { m: Member }) {
  return (
    <GlowCard className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
      <Avatar name={m.name} size="h-20 w-20 text-2xl" />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">{m.name}</h3>
        <p className="text-volt">{m.role}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{m.bio}</p>
      </div>
      <LinkedInButton m={m} />
    </GlowCard>
  );
}

function MemberCard({ m }: { m: Member }) {
  return (
    <GlowCard className="h-full p-6">
      <div className="flex items-start justify-between">
        <Avatar name={m.name} />
        <LinkedInButton m={m} />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
      <p className="text-sm text-volt">{m.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
    </GlowCard>
  );
}
