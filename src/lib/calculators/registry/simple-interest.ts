import SimpleInterestCalculator from "@/components/calculators/SimpleInterestCalculator";
import SimpleInterestCalculatorContent from "@/components/calculators/SimpleInterestCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const simpleInterestCalculator: CalculatorRegistryItem = {
  slug: "simple-interest",
  name: "Simple Interest Calculator",
  category: "interest",
  order: 6,
  isPublished: true,
  listing: {
    title: "Simple Interest Calculator",
    shortDescription:
      "Calculate simple interest and total amount for loans and savings.",
  },
  hero: {
    title: "Simple Interest Calculator",
    description:
      "Calculate interest earned or payable over time using the simple interest formula.",
  },
  seo: {
    title: "Simple Interest Calculator | Calculate SI and Total Amount",
    description:
      "Free simple interest calculator for principal, rate, time, and total amount calculations.",
    keywords: [
      "simple interest calculator",
      "simple interest formula",
      "calculate simple interest",
    ],
    canonicalPath: "/calculators/simple-interest",
  },
  relatedSlugs: ["compound-interest", "emi", "loan"],
  CalculatorComponent: SimpleInterestCalculator,
  ContentComponent: SimpleInterestCalculatorContent,
};
