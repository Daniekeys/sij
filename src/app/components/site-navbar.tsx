"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/legacy", label: "Legacy" },
  { href: "/economic-blueprint", label: "Blueprint" },
  { href: "/join-movement", label: "Join Movement" },
];

type SiteNavbarProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export default function SiteNavbar({
  ctaLabel = "Get Involved",
  ctaHref = "/join-movement",
}: SiteNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav animate-fade-down fixed inset-x-0 top-0 z-50 border-b border-outline-variant/20 bg-surface/90 shadow-ambient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="font-headline text-2xl font-bold italic tracking-tight text-primary"
            onClick={() => setOpen(false)}
          >
            SIJ
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-primary/75 transition duration-300 hover:-translate-y-0.5 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={ctaHref}
              className="cta-magic glow-pulse hidden rounded-xl bg-gradient-to-br from-primary to-primary-container px-5 py-3 text-sm font-semibold text-on-primary transition hover:opacity-90 sm:inline-flex"
            >
              {ctaLabel}
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-primary transition hover:scale-105 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {open ? (
          <div className="animate-fade-up border-t border-outline-variant/20 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-primary transition hover:bg-surface-container-low"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                className="mt-1 rounded-lg bg-gradient-to-br from-primary to-primary-container px-3 py-3 text-center text-sm font-semibold text-on-primary"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
