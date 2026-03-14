import LumpsumCalculator from "@/components/calculators/LumpsumCalculator";
import LumpsumCalculatorContent from "@/components/calculators/LumpsumCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const lumpsumCalculator: CalculatorRegistryItem = {
  slug: "lumpsum",
  name: "Lumpsum Calculator",
  category: "investment",
  order: 12,
  isPublished: true,
  listing: {
    title: "Lumpsum Calculator",
    shortDescription:
      "Calculate future value for one-time investments and wealth plans.",
  },
  hero: {
    title: "Lumpsum Calculator",
    description:
      "Project the growth of a one-time investment across different return assumptions.",
  },
  seo: {
    title: "Lumpsum Calculator Online - Calculate One-time Investment Returns 2026",
    description:
      "Estimate the future value of one-time mutual fund and investment contributions with a lumpsum calculator.",
    keywords: [
      "lumpsum calculator",
      "one time investment calculator",
      "mutual fund lumpsum returns",
    ],
    canonicalPath: "/calculators/lumpsum",
  },
  relatedSlugs: ["sip", "compound-interest"],
  CalculatorComponent: LumpsumCalculator,
  ContentComponent: LumpsumCalculatorContent,
};
