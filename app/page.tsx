import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import NeuralField from "@/components/NeuralField";
import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import { Arrow, Bolt, Coin, Doc, LinkedIn, Target } from "@/components/icons";
import { site, team } from "@/components/site";

const levers = [
  {
    icon: Coin,
    title: "Cost Reduction",
    body: "Lower the operating cost of AI to improve margins or unlock more competitive pricing — without trading away quality.",
    tags: ["Quantisation", "Distillation", "Smart routing"],
    accent: "text-gold",
  },
  {
    icon: Bolt,
    title: "Latency Optimization",
    body: "Faster inference for user-facing applications where response time matters and every millisecond shows up in retention.",
    tags: ["Batching", "Speculative decoding", "Caching"],
    accent: "text-volt",
  },
  {
    icon: Target,
    title: "Accuracy Enhancement",
    body: "Greater reliability for high-stakes enterprise use cases where mistakes are expensive and trust is non-negotiable.",
    tags: ["RAG", "Evals", "Domain tuning"],
    accent: "text-bolt",
  },
];

const steps = [
  { n: "01", title: "Audit", body: "We map your models, traffic and spend to find where performance is leaking." },
  { n: "02", title: "Benchmark", body: "Baseline cost, latency and accuracy on your real workloads — not synthetic tests." },
  { n: "03", title: "Optimise", body: "Targeted, research-backed changes across model, serving and retrieval layers." },
  { n: "04", title: "Ship & monitor", body: "Roll out safely, measure the gains and keep them as your traffic evolves." },
];

const keywords = [
  "Inference Optimisation",
  "Knowledge Distillation",
  "Retrieval-Augmented Generation",
  "Computational Neuroscience",
  "Quantisation",
  "Indic Language AI",
  "Computer Vision",
  "OCR",
  "LLM Efficiency",
  "Brain-inspired Architectures",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Levers />
      <Process />
      <About />
      <Research />
      <Vision />
      <TeamPreview />
      <CTA />
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
      <span className="h-px w-6 bg-gradient-to-r from-bolt to-volt" />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 sm:pb-20">
      <div className="grid-bg absolute inset-0 -z-20" />
      <NeuralField className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-bolt/20 blur-[140px]" />
      <div className="absolute bottom-0 right-[-10%] -z-10 h-[400px] w-[500px] rounded-full bg-volt/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <Link
              href="#research"
              className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pl-3 pr-4 text-xs text-muted sm:text-sm backdrop-blur transition hover:border-white/20"
            >
              <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-volt" />
              <span>
                Now building: a <span className="text-foreground">next-gen LLM architecture</span>
              </span>
              <Arrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:mt-8 sm:text-6xl lg:text-7xl">
              Intelligence,
              <br />
              engineered{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-gradient">
                differently.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg">
              IndraAstra is a research-driven AI company from Bengaluru. We pair brain-inspired research
              with production performance engineering to give your AI{" "}
              <span className="text-foreground">lower costs, higher throughput and better accuracy.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black shadow-[0_0_40px_-8px_rgba(124,140,255,0.6)] transition hover:bg-white/90"
              >
                Optimise my AI stack
                <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#levers"
                className="inline-flex items-center justify-center rounded-xl border border-line bg-white/[0.03] px-6 py-3.5 font-medium backdrop-blur transition hover:border-white/25"
              >
                See how it works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400} className="lg:hidden">
            <div className="mt-8 grid grid-cols-3 gap-2">
              {[
                ["Cost", "↓", "text-gold"],
                ["Latency", "↓", "text-volt"],
                ["Accuracy", "↑", "text-bolt"],
              ].map(([k, v, c]) => (
                <div key={k} className="rounded-xl border border-line bg-white/[0.03] py-3 text-center backdrop-blur">
                  <div className={`text-lg ${c}`}>{v}</div>
                  <div className="mt-0.5 text-xs text-muted">{k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={350} className="hidden lg:block">
          <MetricsCard />
        </Reveal>
      </div>
    </section>
  );
}

// Illustrative before/after panel — numbers are placeholders for the demo.
function MetricsCard() {
  const rows = [
    { label: "Cost / 1M tokens", before: 100, after: 42, unit: "%", color: "from-gold to-amber-300" },
    { label: "p95 latency", before: 100, after: 38, unit: "%", color: "from-volt to-sky-300" },
    { label: "Task accuracy", before: 81, after: 94, unit: "%", color: "from-bolt to-violet-300" },
  ];
  return (
    <div className="animate-float relative">
      <div className="absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-bolt/50 via-transparent to-gold/40 opacity-60 blur-sm" />
      <div className="relative rounded-[1.35rem] border border-line bg-[#0b0d18]/85 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            inference-prod · optimised
          </div>
          <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            Illustrative
          </span>
        </div>
        <div className="mt-6 space-y-6">
          {rows.map((r) => (
            <div key={r.label}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted">{r.label}</span>
                <span className="font-mono">
                  <span className="text-muted line-through decoration-white/30">{r.before}</span>
                  <span className="mx-1.5 text-muted">→</span>
                  <span className="text-foreground">
                    {r.after}
                    {r.unit}
                  </span>
                </span>
              </div>
              <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-white/5">
                <div className={`h-full rounded-full bg-gradient-to-r ${r.color}`} style={{ width: `${r.after}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-3 gap-2 border-t border-line pt-5 text-center">
          {[
            ["Cost", "↓"],
            ["Latency", "↓"],
            ["Accuracy", "↑"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white/[0.03] py-3">
              <div className="text-xl">{v}</div>
              <div className="mt-0.5 text-xs text-muted">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [...keywords, ...keywords];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/[0.015] py-4 sm:py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max gap-10">
        {items.map((k, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap text-xs text-muted sm:text-sm">
            {k}
            <span className="text-bolt">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Levers() {
  return (
    <section id="levers" className="relative scroll-mt-24 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Three performance levers</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Already running AI in production?{" "}
            <span className="text-muted">We make it cheaper, faster and sharper.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {levers.map((l, i) => (
            <Reveal key={l.title} delay={i * 120}>
              <GlowCard className="h-full p-6 sm:p-7">
                <div className={`grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.04] ${l.accent}`}>
                  <l.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{l.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {l.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Engagement roadmap</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">From audit to impact.</h2>
        </Reveal>
        <div className="relative mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-bolt/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative flex gap-4 md:block">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line bg-background font-mono text-sm text-volt">
                  {s.n}
                </div>
                <div>
                  <h3 className="mt-2.5 text-lg font-semibold md:mt-6">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted md:mt-2">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    { title: "Artificial Intelligence", body: "Production systems that hold up under real traffic and real stakes." },
    { title: "Computational Neuroscience", body: "How biological brains process information efficiently — and what AI can learn from it." },
    { title: "Machine Learning", body: "Rigorous optimisation, evaluation and training methods at the core of every engagement." },
  ];
  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>About IndraAstra</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            Where the <span className="font-serif font-normal italic text-gradient">brain</span> meets the benchmark.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            We work across AI, computational neuroscience and machine learning with one goal: build AI
            systems that are more efficient, more reliable and more scalable. Our research informs our
            engineering — and our engineering keeps our research honest.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <DeckCard title="Intelligence, Engineered Differently" meta="Pitch deck · 8 slides" />
            <DeckCard title="Company Brief" meta="Overview · 4 slides" />
          </div>
        </Reveal>
        <div className="space-y-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <GlowCard className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                <div className="font-mono text-sm text-bolt">0{i + 1}</div>
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-muted">{p.body}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeckCard({ title, meta }: { title: string; meta: string }) {
  return (
    <Link
      href="/contact?topic=deck"
      className="group flex w-full items-center gap-3 rounded-xl border border-line bg-white/[0.03] px-4 py-3 transition hover:border-white/25 sm:w-auto"
    >
      <Doc className="h-5 w-5 text-gold" />
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted">{meta} · Request access</div>
      </div>
      <Arrow className="ml-auto h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}

function Research() {
  return (
    <section id="research" className="relative scroll-mt-24 py-10 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#0d1024] via-[#090b16] to-[#120e08] p-6 sm:p-14">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-bolt/25 blur-[100px]" />
            <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <SectionLabel>Research · In development</SectionLabel>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                  A next-generation <br className="hidden sm:block" />
                  LLM architecture.
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                  A novel algorithm under development with a{" "}
                  <span className="text-foreground">fundamentally different information-processing paradigm</span>{" "}
                  — inspired by how biological neural systems compute, built for the economics of modern
                  inference.
                </p>
                <Link
                  href="/contact?topic=research"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-volt"
                >
                  Partner on research
                  <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ArchitectureViz />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ArchitectureViz() {
  const layers = [3, 5, 5, 3];
  const W = 320;
  const H = 240;
  const pts = layers.map((count, li) =>
    Array.from({ length: count }, (_, i) => ({
      x: 30 + (li * (W - 60)) / (layers.length - 1),
      y: H / 2 + (i - (count - 1) / 2) * 42,
    }))
  );
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-0 rounded-full bg-volt/10 blur-3xl" />
      <svg viewBox={`0 0 ${W} ${H}`} className="relative w-full" aria-hidden>
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop stopColor="#7c8cff" stopOpacity=".6" />
            <stop offset="1" stopColor="#ffc35c" stopOpacity=".6" />
          </linearGradient>
        </defs>
        {pts.slice(0, -1).map((layer, li) =>
          layer.map((a, ai) =>
            pts[li + 1].map((b, bi) => (
              <line
                key={`${li}-${ai}-${bi}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#edge)"
                strokeWidth=".7"
                strokeOpacity={(ai + bi) % 3 === 0 ? 0.9 : 0.25}
              >
                {(ai + bi) % 3 === 0 && (
                  <animate
                    attributeName="stroke-opacity"
                    values="0.15;0.9;0.15"
                    dur={`${2 + ((ai + bi + li) % 3)}s`}
                    repeatCount="indefinite"
                  />
                )}
              </line>
            ))
          )
        )}
        {pts.flat().map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="9" fill="#0b0d18" stroke="#7c8cff" strokeOpacity=".5" />
            <circle cx={p.x} cy={p.y} r="3" fill={i % 4 === 0 ? "#ffc35c" : "#39d0ff"} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionLabel>Our vision</SectionLabel>
          <blockquote className="mt-8 text-[1.75rem] font-medium leading-snug tracking-tight sm:text-5xl sm:leading-[1.15]">
            “The next leap in AI won&apos;t come from <span className="text-muted">bigger</span> models — it will
            come from <span className="font-serif font-normal italic text-gradient">smarter</span> ones.”
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-base text-muted sm:text-lg">
            Named for Indra&apos;s divine weapon, IndraAstra exists to give teams an unfair advantage: AI that
            costs less to run, responds faster and gets it right — built from India for the world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TeamPreview() {
  const core = team.filter((m) => m.group !== "Interns");
  return (
    <section className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>The people</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Built by researchers <span className="text-muted">who ship.</span>
              </h2>
            </div>
            <Link href="/team" className="group inline-flex items-center gap-2 text-sm font-medium text-volt">
              Meet the full team <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {core.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <GlowCard className="group flex h-full items-center gap-4 p-4 sm:block sm:p-6">
                <Avatar name={m.name} size="h-12 w-12 shrink-0 text-base sm:h-14 sm:w-14 sm:text-lg" />
                <div>
                  <h3 className="font-semibold sm:mt-5">{m.name}</h3>
                  <p className="text-sm text-volt">{m.role}</p>
                  <div className="hidden sm:block">
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl sm:mt-10 border border-[#0a66c2]/40 bg-gradient-to-r from-[#0a66c2]/15 to-transparent p-6 transition hover:border-[#0a66c2] sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0a66c2] text-white">
                <LinkedIn className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Follow IndraAstra on LinkedIn</div>
                <div className="text-sm text-muted">Research updates, hiring and engineering notes.</div>
              </div>
            </div>
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black sm:w-auto sm:py-2">
              Follow <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative px-6 pb-20 pt-8 sm:pb-28 sm:pt-12">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-line px-6 py-12 text-center sm:p-16">
          <div className="grid-bg absolute inset-0 -z-10 opacity-60" />
          <div className="absolute left-1/2 top-0 -z-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-bolt/25 blur-[110px]" />
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-6xl">
            Ready to make your AI <span className="font-serif font-normal italic text-gradient">lighter</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{site.tagline}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:bg-white/90"
            >
              Talk to our team <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center break-all rounded-xl border border-line px-6 py-3.5 text-sm font-medium transition hover:border-white/25 sm:text-base"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

