import type { CalculatorPageShellProps } from "@/lib/calculators/types";

import { CalculatorFaq } from "./calculator-faq";
import { CalculatorListCard } from "./calculator-list-card";

export function CalculatorPageShell({
  calculator,
  relatedCalculators,
}: CalculatorPageShellProps) {
  const CalculatorComponent = calculator.CalculatorComponent;
  const ContentComponent = calculator.ContentComponent;

  return (
    <main className="px-4 pb-14 pt-8 md:px-6 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <div className="surface-panel relative overflow-hidden rounded-[2.25rem] px-6 py-8 md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
                {calculator.category} calculator
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
                {calculator.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                {calculator.hero.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Why this layout
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Inputs, answers, and explainers are grouped for faster scanning on mobile and desktop.
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white dark:bg-teal-500 dark:text-slate-950">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65 dark:text-slate-900/65">
                  Next step
                </p>
                <p className="mt-3 text-sm leading-7">
                  Finish the calculation, then jump to a related tool without hunting through menus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <CalculatorComponent />
          {ContentComponent ? <ContentComponent /> : null}
          <CalculatorFaq faqs={calculator.faqs ?? []} />
        </div>

        <aside className="space-y-4">
          <div className="surface-panel rounded-[2rem] p-5">
            <h2 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
              Related calculators
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Continue with the next calculation while staying in the same workflow.
            </p>
            <div className="mt-5 space-y-4">
              {relatedCalculators.map((relatedCalculator) => (
                <CalculatorListCard key={relatedCalculator.slug} calculator={relatedCalculator} />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
