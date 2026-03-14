import ProfitLossCalculator from "@/components/calculators/ProfitLossCalculator";
import ProfitLossCalculatorContent from "@/components/calculators/ProfitLossCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const profitLossCalculator: CalculatorRegistryItem = {
  slug: "profit-loss",
  name: "Profit Loss Calculator",
  category: "business",
  order: 8,
  isPublished: true,
  listing: {
    title: "Profit Loss Calculator",
    shortDescription:
      "Calculate profit, loss, and margin percentage for your products.",
  },
  hero: {
    title: "Profit and Loss Calculator",
    description:
      "Work out profit amount, loss amount, and percentage margins for business decisions.",
  },
  seo: {
    title: "Profit and Loss Calculator | Calculate Profit Margin and Percentage",
    description:
      "Calculate profit or loss amount and percentage for business, trading, and pricing use cases.",
    keywords: [
      "profit loss calculator",
      "profit percentage calculator",
      "loss percentage calculator",
    ],
    canonicalPath: "/calculators/profit-loss",
  },
  relatedSlugs: ["margin", "discount", "amazon-seller-profit"],
  CalculatorComponent: ProfitLossCalculator,
  ContentComponent: ProfitLossCalculatorContent,
};
