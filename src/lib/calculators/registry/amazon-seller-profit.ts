import AmazonProfitCalculator from "@/components/calculators/AmazonProfitCalculator";
import AmazonProfitCalculatorContent from "@/components/calculators/AmazonProfitCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const amazonSellerProfitCalculator: CalculatorRegistryItem = {
  slug: "amazon-seller-profit",
  name: "Amazon Seller Profit Calculator",
  category: "business",
  order: 14,
  isPublished: true,
  listing: {
    title: "Amazon Seller Profit Calculator",
    shortDescription:
      "Calculate Amazon marketplace fees, ROI, and net profit per sale.",
  },
  hero: {
    title: "Amazon Seller Profit Calculator",
    description:
      "Analyze Amazon fees, shipping, ROI, and net margin to see your true profit per unit.",
  },
  seo: {
    title: "Amazon Seller Profit Calculator 2026 - FBA and Marketplace Fee Tool",
    description:
      "Accurate Amazon seller profit calculator for referral fees, shipping, ROI, and net margin analysis.",
    keywords: [
      "amazon seller profit calculator",
      "amazon fee calculator",
      "amazon roi calculator",
    ],
    canonicalPath: "/calculators/amazon-seller-profit",
  },
  relatedSlugs: ["profit-loss", "margin"],
  CalculatorComponent: AmazonProfitCalculator,
  ContentComponent: AmazonProfitCalculatorContent,
};
