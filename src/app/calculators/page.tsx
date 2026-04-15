import type { Metadata } from "next";
import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { CalculatorSearch } from "@/components/calculators/calculator-search";
import { getPublishedCalculators } from "@/lib/calculators/helpers";
import { calculatorRegistry } from "@/lib/calculators/registry";

export const metadata: Metadata = {
  title: "All Calculators | Free GST, EMI & Finance Tools | OneCalculator",
  description:
    "Browse all free calculators from OneCalculator in one place. Compare GST, EMI, loans, interest, pricing, margins, and business finance tools for India.",
  alternates: {
    canonical: "https://onecalculator.online/calculators",
  },
  keywords: [
    "calculator library",
    "free financial calculators",
    "GST calculator",
    "EMI calculator",
    "pricing calculator",
    "business calculator India",
  ],
};

export default function CalculatorsPage() {
  const calculators = getPublishedCalculators(calculatorRegistry);
  const listItems = calculators.map((calculator) => ({
    slug: calculator.slug,
    name: calculator.name,
    category: calculator.category,
    listing: calculator.listing,
    hero: calculator.hero,
  }));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OneCalculator Calculator Directory",
    itemListElement: calculators.map((calculator, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: calculator.name,
      url: `https://onecalculator.online/calculators/${calculator.slug}`,
    })),
  };

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <JsonLd data={itemListSchema} />

      <section className="mx-auto max-w-7xl">
        <div className="surface-panel relative overflow-hidden rounded-[2.25rem] px-6 py-10 text-center md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
            Free calculator directory
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
            All Calculators
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            OneCalculator brings GST, EMI, loan, interest, pricing, margin, and business finance
            calculators together in one place. Use this page to compare tools quickly, open the
            right calculator faster, and move from question to answer without extra steps.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
            Need more than a calculator? Read our{" "}
            <Link
              href="/blog"
              className="font-semibold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
            >
              finance guides
            </Link>
            {" "}or visit the{" "}
            <Link
              href="/faq"
              className="font-semibold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
            >
              FAQ
            </Link>
            {" "}for quick answers about GST and calculator usage.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <CalculatorSearch calculators={listItems} />
      </section>
    </main>
  );
}
