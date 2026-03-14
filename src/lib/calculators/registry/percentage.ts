import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import PercentageCalculatorContent from "@/components/calculators/PercentageCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const percentageCalculator: CalculatorRegistryItem = {
  slug: "percentage",
  name: "Percentage Calculator",
  category: "math",
  order: 5,
  isPublished: true,
  listing: {
    title: "Percentage Calculator",
    shortDescription:
      "Calculate percentages, changes, increases, and decreases quickly.",
  },
  hero: {
    title: "Percentage Calculator",
    description:
      "Handle common percentage math for discounts, salaries, tax, and comparisons.",
  },
  seo: {
    title: "Percentage Calculator | Calculate Percentages Online",
    description:
      "Free online percentage calculator for simple percentage, increase, decrease, and comparison use cases.",
    keywords: [
      "percentage calculator",
      "calculate percentages online",
      "percent increase calculator",
    ],
    canonicalPath: "/calculators/percentage",
  },
  relatedSlugs: ["discount", "profit-loss", "gst"],
  CalculatorComponent: PercentageCalculator,
  ContentComponent: PercentageCalculatorContent,
};
