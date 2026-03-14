import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import CompoundInterestCalculatorContent from "@/components/calculators/CompoundInterestCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const compoundInterestCalculator: CalculatorRegistryItem = {
  slug: "compound-interest",
  name: "Compound Interest Calculator",
  category: "interest",
  order: 7,
  isPublished: true,
  listing: {
    title: "Compound Interest Calculator",
    shortDescription:
      "Estimate compounded growth for savings and investments over time.",
  },
  hero: {
    title: "Compound Interest Calculator",
    description:
      "See how your money grows with annual, quarterly, or monthly compounding.",
  },
  seo: {
    title: "Compound Interest Calculator | Calculate CI and Returns",
    description:
      "Calculate compound interest with different compounding frequencies and see how returns grow over time.",
    keywords: [
      "compound interest calculator",
      "calculate compound interest",
      "compounding returns",
    ],
    canonicalPath: "/calculators/compound-interest",
  },
  relatedSlugs: ["sip", "lumpsum", "simple-interest"],
  CalculatorComponent: CompoundInterestCalculator,
  ContentComponent: CompoundInterestCalculatorContent,
};
