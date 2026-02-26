import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-cyan-700 p-2">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">OneCalculator</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Free calculator platform for GST, EMI, percentage, and business finance.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Contact</Link></li>
              <li><Link href="/blog" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Blog</Link></li>
              <li><Link href="/privacy" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Privacy</Link></li>
              <li><Link href="/faq" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Business</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/calculators/gst" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">GST Calculator</Link></li>
              <li><Link href="/calculators/discount" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Discount Calculator</Link></li>
              <li><Link href="/calculators/profit-loss" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Profit and Loss</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Finance</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/calculators/emi" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">EMI Calculator</Link></li>
              <li><Link href="/calculators/percentage" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Percentage Calculator</Link></li>
              <li><Link href="/calculators/simple-interest" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Simple Interest</Link></li>
              <li><Link href="/calculators/compound-interest" className="text-slate-500 transition-colors hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400">Compound Interest</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left dark:text-slate-400">
              Copyright {new Date().getFullYear()} OneCalculator. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fast, accurate, and privacy-friendly calculators</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
