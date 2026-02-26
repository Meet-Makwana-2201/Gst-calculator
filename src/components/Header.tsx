'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/85 shadow-[0_8px_32px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/85'
          : 'border-b border-slate-200/50 bg-white/70 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-900/70'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="OneCalculator Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl shadow-md transition-all group-hover:scale-105 group-hover:shadow-lg"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-400 md:text-2xl">
              OneCalculator
            </span>
            <span className="text-xs font-normal text-cyan-700 dark:text-cyan-400">GST and finance tools</span>
          </div>
        </Link>
        <nav className="hidden items-center space-x-1 md:flex">
          <Link href="/" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">Home</Link>
          <Link href="/calculators" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">Calculators</Link>
          <Link href="/faq" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">FAQ</Link>
          <Link href="/gst-rates" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">GST Rates</Link>
          <Link href="/blog" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">Blog</Link>
          <Link href="/about" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">About</Link>
          <Link href="/contact" className="rounded-lg px-4 py-2 font-medium text-slate-700 transition-all hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-cyan-900/20 dark:hover:text-cyan-400">Contact</Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
