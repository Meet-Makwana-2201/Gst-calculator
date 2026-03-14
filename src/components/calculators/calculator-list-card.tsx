import Link from "next/link";

import type { CalculatorListItem } from "@/lib/calculators/types";

interface CalculatorListCardProps {
  calculator: CalculatorListItem;
}

export function CalculatorListCard({ calculator }: CalculatorListCardProps) {
  return (
    <Link href={`/calculators/${calculator.slug}`} className="group block h-full">
      <article className="surface-panel hover-lift h-full rounded-[1.75rem] p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {calculator.category}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
              {calculator.listing.title}
            </h3>
          </div>
          {calculator.listing.badge ? (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 dark:bg-amber-300 dark:text-slate-950">
              {calculator.listing.badge}
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {calculator.listing.shortDescription}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition group-hover:text-amber-600 dark:text-teal-300 dark:group-hover:text-amber-300">
          Open tool
          <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
