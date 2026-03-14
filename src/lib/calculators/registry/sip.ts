import SIPCalculator from "@/components/calculators/SIPCalculator";
import SIPCalculatorContent from "@/components/calculators/SIPCalculatorContent";

import type { CalculatorRegistryItem } from "../types";

export const sipCalculator: CalculatorRegistryItem = {
  slug: "sip",
  name: "SIP Calculator",
  category: "investment",
  order: 11,
  isPublished: true,
  listing: {
    title: "SIP Calculator",
    shortDescription:
      "Estimate future value and returns from monthly SIP investments.",
  },
  hero: {
    title: "SIP Calculator",
    description:
      "See how recurring monthly investments can compound into long-term wealth.",
  },
  seo: {
    title: "SIP Calculator Online - Mutual Fund SIP Return Calculator 2026",
    description:
      "Estimate mutual fund SIP returns, future corpus, and compounding growth with our SIP calculator.",
    keywords: [
      "sip calculator",
      "mutual fund sip calculator",
      "sip return calculator",
    ],
    canonicalPath: "/calculators/sip",
  },
  relatedSlugs: ["lumpsum", "compound-interest"],
  CalculatorComponent: SIPCalculator,
  ContentComponent: SIPCalculatorContent,
};
