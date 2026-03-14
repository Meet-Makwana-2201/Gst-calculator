import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import DiscountCalculatorContent from "@/components/calculators/DiscountCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const discountCalculator: CalculatorRegistryItem = {
  slug: "discount",
  name: "Discount Calculator",
  category: "shopping",
  order: 4,
  isPublished: true,
  listing: {
    title: "Discount Calculator",
    shortDescription:
      "Calculate sale price, discount amount, and total savings.",
  },
  hero: {
    title: "Discount Calculator",
    description:
      "Find the final sale price and savings for any discount percentage in seconds.",
  },
  seo: {
    title: "Discount Calculator | Calculate Sale Price and Savings",
    description:
      "Calculate the final price after discount and see how much you save on sales and offers.",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "discount savings",
    ],
    canonicalPath: "/calculators/discount",
  },
  relatedSlugs: ["percentage", "margin", "profit-loss"],
  CalculatorComponent: DiscountCalculator,
  ContentComponent: DiscountCalculatorContent,
};
