import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import {
  getCalculatorBySlug,
  getPublishedCalculators,
  getRelatedCalculators,
} from "@/lib/calculators/helpers";
import { calculatorRegistry } from "@/lib/calculators/registry";
import {
  buildBreadcrumbJsonLd,
  buildCalculatorJsonLd,
  buildCalculatorMetadata,
  buildFAQJsonLd,
} from "@/lib/calculators/seo";
import type { CalculatorPageProps } from "@/lib/calculators/types";

export async function generateStaticParams() {
  return getPublishedCalculators(calculatorRegistry).map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({
  params,
}: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(calculatorRegistry, slug);

  if (!calculator) {
    return {};
  }

  return buildCalculatorMetadata(calculator);
}

export default async function CalculatorDetailPage({
  params,
}: CalculatorPageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(calculatorRegistry, slug);

  if (!calculator) {
    notFound();
  }

  const relatedCalculators = getRelatedCalculators(
    calculatorRegistry,
    calculator.relatedSlugs
  );
  const calculatorSchema = buildCalculatorJsonLd(calculator);
  const breadcrumbSchema = buildBreadcrumbJsonLd(calculator);
  const faqSchema = buildFAQJsonLd(calculator.faqs);

  return (
    <>
      <JsonLd data={calculatorSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <CalculatorPageShell
        calculator={calculator}
        relatedCalculators={relatedCalculators}
      />
    </>
  );
}
