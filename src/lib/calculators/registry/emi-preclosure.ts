import EMIPreclosureCalculator from "@/components/calculators/EMIPreclosureCalculator";
import EMIPreclosureCalculatorContent from "@/components/calculators/EMIPreclosureCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const emiPreclosureCalculator: CalculatorRegistryItem = {
  slug: "emi-preclosure",
  name: "EMI Preclosure Calculator",
  category: "loan",
  order: 13,
  isPublished: true,
  listing: {
    title: "EMI Preclosure Calculator",
    shortDescription:
      "Estimate interest savings and tenure reduction from prepayments.",
  },
  hero: {
    title: "EMI Preclosure Calculator",
    description:
      "Find out how much interest and time you can save by prepaying your loan early.",
  },
  seo: {
    title: "EMI Preclosure Calculator 2026 - Save Interest on Bank Loans",
    description:
      "Calculate interest savings and tenure reduction from part-prepayments and loan foreclosure scenarios.",
    keywords: [
      "emi preclosure calculator",
      "loan prepayment calculator",
      "foreclosure savings calculator",
    ],
    canonicalPath: "/calculators/emi-preclosure",
  },
  relatedSlugs: ["emi", "loan"],
  CalculatorComponent: EMIPreclosureCalculator,
  ContentComponent: EMIPreclosureCalculatorContent,
};
