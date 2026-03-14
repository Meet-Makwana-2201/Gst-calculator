import type { CalculatorFAQItem } from "@/lib/calculators/types";

interface CalculatorFaqProps {
  faqs: CalculatorFAQItem[];
}

export function CalculatorFaq({ faqs }: CalculatorFaqProps) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950"
          >
            <summary className="cursor-pointer list-none font-semibold text-slate-900 dark:text-slate-100">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
