import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import { CalculatorSearch } from "@/components/calculators/calculator-search";
import { getPublishedCalculators } from "@/lib/calculators/helpers";
import { calculatorRegistry } from "@/lib/calculators/registry";

export const metadata: Metadata = {
  title: "All Calculators | GST, EMI, Interest, Pricing and Business Tools",
  description:
    "Browse the LedgerKit India calculator library across GST, EMI, loans, pricing, margins, interest, and investment workflows.",
  alternates: {
    canonical: "https://onecalculator.online/calculators",
  },
  keywords: [
    "calculator library",
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
    name: "LedgerKit India Calculator Directory",
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
            Registry-driven catalog
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
            All calculators, one cleaner directory
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Browse by need, search by keyword, and jump into a tool without scanning through
            cluttered pages. The library is organized for finance, tax, lending, pricing, and
            business tasks.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <CalculatorSearch calculators={listItems} />
      </section>
    </main>
  );
}
