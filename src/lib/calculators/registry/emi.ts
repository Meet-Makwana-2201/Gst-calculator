import EMICalculator from "@/components/calculators/EMICalculator";
import EMICalculatorContent from "@/components/calculators/EMICalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const emiCalculator: CalculatorRegistryItem = {
  slug: "emi",
  name: "EMI Calculator",
  category: "loan",
  order: 3,
  isPublished: true,
  listing: {
    title: "EMI Calculator",
    shortDescription:
      "Calculate monthly EMI, total interest, and total repayment for loans.",
    badge: "Core",
  },
  hero: {
    title: "EMI Calculator India",
    description:
      "Calculate home loan, car loan, and personal loan EMI with instant repayment insights.",
  },
  seo: {
    title: "Free EMI Calculator India 2026 - Home Loan, Car Loan and More",
    description:
      "Calculate your EMI in seconds with our free India-focused EMI calculator for home, car, and personal loans.",
    keywords: [
      "emi calculator india",
      "home loan emi calculator",
      "car loan emi",
      "loan emi calculator",
    ],
    canonicalPath: "/calculators/emi",
  },
  relatedSlugs: ["loan", "emi-preclosure", "simple-interest"],
  CalculatorComponent: EMICalculator,
  ContentComponent: EMICalculatorContent,
};
