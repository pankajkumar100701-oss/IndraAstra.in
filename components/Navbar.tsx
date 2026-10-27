"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "./site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border border-line bg-[#0a0c15]/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo-mark.png" alt="IndraAstra logo" width={36} height={36} priority className="h-9 w-9" />
          <span className="text-[17px] font-semibold tracking-tight">
            Indra<span className="text-muted">Astra</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 sm:inline-flex"
          >
            Book a call
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-[#0a0c15]/95 p-2 backdrop-blur-xl md:hidden">
          {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-muted hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
