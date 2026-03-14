import MarginCalculator from "@/components/calculators/MarginCalculator";
import MarginCalculatorContent from "@/components/calculators/MarginCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const marginCalculator: CalculatorRegistryItem = {
  slug: "margin",
  name: "Margin Calculator",
  category: "business",
  order: 9,
  isPublished: true,
  listing: {
    title: "Margin Calculator",
    shortDescription:
      "Calculate markup, margin, and selling price for products.",
  },
  hero: {
    title: "Margin Calculator",
    description:
      "Set pricing confidently by calculating gross margin, markup, and selling price targets.",
  },
  seo: {
    title: "Margin Calculator - Calculate Profit, Selling Price and Markup 2026",
    description:
      "Professional margin calculator for selling price, markup, and gross margin planning.",
    keywords: [
      "margin calculator",
      "markup calculator",
      "selling price calculator",
    ],
    canonicalPath: "/calculators/margin",
  },
  relatedSlugs: ["profit-loss", "discount", "amazon-seller-profit"],
  CalculatorComponent: MarginCalculator,
  ContentComponent: MarginCalculatorContent,
};
