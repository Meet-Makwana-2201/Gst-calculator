"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggle from "./ThemeToggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/calculators", label: "Calculators" },
  { href: "/gst-rates", label: "GST Rates" },
  { href: "/blog", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
          scrolled
            ? "surface-panel border-white/60 shadow-[0_20px_60px_-34px_rgba(15,23,42,0.55)]"
            : "border-transparent bg-white/65 backdrop-blur-md dark:bg-slate-950/40"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_12px_28px_-18px_rgba(15,23,42,0.45)] dark:border-slate-700/70 dark:bg-slate-900">
              <Image src="/logo.svg" alt="LedgerKit India logo" width={48} height={48} className="h-11 w-11" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-xl">
                LedgerKit India
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Faster financial decisions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-slate-900 text-white shadow-[0_12px_28px_-16px_rgba(15,23,42,0.6)] dark:bg-white dark:text-slate-950"
                      : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/calculators/gst"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(15,23,42,0.58)] transition hover:translate-y-[-1px] hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400 md:inline-flex"
            >
              Open GST Tool
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200/70 px-4 py-4 dark:border-slate-800/70 lg:hidden">
            <nav className="grid gap-2">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                        : "bg-white/80 text-slate-700 hover:bg-slate-100 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/calculators/gst"
                className="mt-2 rounded-2xl brand-gradient px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_20px_44px_-28px_rgba(8,145,178,0.65)]"
              >
                Start with GST
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
