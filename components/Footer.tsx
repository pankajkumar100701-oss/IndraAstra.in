import Image from "next/image";
import Link from "next/link";
import { LinkedIn, Mail } from "./icons";
import { nav, site } from "./site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-12 sm:py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block" aria-label="IndraAstra home">
            <Image src="/logo.png" alt="IndraAstra — Faster and Smarter" width={489} height={426} className="h-auto w-28 sm:w-36" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Research-driven AI from Bengaluru — brain-inspired research meets production-grade
            performance engineering.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IndraAstra on LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email IndraAstra"
              className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition hover:border-white/30 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-foreground/80 hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Reach us</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© 2026 IndraAstra. All rights reserved.</span>
          <span>Intelligence, engineered differently.</span>
        </div>
      </div>
    </footer>
  );
}
