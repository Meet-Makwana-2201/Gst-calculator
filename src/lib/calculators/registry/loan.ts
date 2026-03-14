import LoanCalculator from "@/components/calculators/LoanCalculator";
import LoanCalculatorContent from "@/components/calculators/LoanCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const loanCalculator: CalculatorRegistryItem = {
  slug: "loan",
  name: "Loan Calculator",
  category: "loan",
  order: 10,
  isPublished: true,
  listing: {
    title: "Loan Calculator",
    shortDescription:
      "Estimate EMI, total interest, and repayment for home, car, or personal loans.",
  },
  hero: {
    title: "Loan Calculator",
    description:
      "Plan repayments for home, car, and personal loans with fast principal-versus-interest analysis.",
  },
  seo: {
    title: "Loan Calculator - Calculate Home, Car and Personal Loan EMI 2026",
    description:
      "Accurate loan EMI calculator for home, car, and personal loans with repayment and interest estimates.",
    keywords: [
      "loan calculator",
      "home loan calculator",
      "personal loan calculator",
    ],
    canonicalPath: "/calculators/loan",
  },
  relatedSlugs: ["emi", "emi-preclosure", "simple-interest"],
  CalculatorComponent: LoanCalculator,
  ContentComponent: LoanCalculatorContent,
};
