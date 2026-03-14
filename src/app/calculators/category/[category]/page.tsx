import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { CalculatorListing } from "@/components/calculators/calculator-listing";
import {
  getCalculatorCategories,
  getCalculatorsByCategory,
  getCategoryLabel,
  isCalculatorCategory,
} from "@/lib/calculators/helpers";
import { calculatorRegistry } from "@/lib/calculators/registry";
import type { CalculatorCategoryPageProps } from "@/lib/calculators/types";

export async function generateStaticParams() {
  return getCalculatorCategories(calculatorRegistry).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: CalculatorCategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!isCalculatorCategory(category)) {
    return {};
  }

  const title = getCategoryLabel(category);
  const description = `Browse ${category} calculators on OneCalculator, including tools designed for ${category}-focused calculations and decision making.`;
  const canonical = `https://onecalculator.online/calculators/category/${category}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function CalculatorCategoryPage({
  params,
}: CalculatorCategoryPageProps) {
  const { category } = await params;

  if (!isCalculatorCategory(category)) {
    notFound();
  }

  const calculators = getCalculatorsByCategory(calculatorRegistry, category);

  if (!calculators.length) {
    notFound();
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: getCategoryLabel(category),
    url: `https://onecalculator.online/calculators/category/${category}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: calculators.map((calculator, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: calculator.name,
        url: `https://onecalculator.online/calculators/${calculator.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <JsonLd data={itemListSchema} />

      <section className="border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.14),transparent_44%),radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.12),transparent_34%)] py-16 md:py-24 dark:border-slate-800/70">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-sm font-semibold text-cyan-700 backdrop-blur-sm dark:border-cyan-800 dark:bg-slate-900/70 dark:text-cyan-300">
            Category archive
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
            {getCategoryLabel(category)}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Explore all calculators filed under the {category} category. This page is generated from the shared registry and stays aligned with the calculator detail pages.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <CalculatorListing calculators={calculators} />
      </section>
    </main>
  );
}
