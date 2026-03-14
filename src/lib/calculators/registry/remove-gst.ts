import RemoveGstContent from "@/components/calculators/RemoveGstContent";
import RemoveGSTCalculator from "@/components/gst/RemoveGSTCalculator";

import type { CalculatorRegistryItem } from "../types";

export const removeGstCalculator: CalculatorRegistryItem = {
  slug: "remove-gst",
  name: "Remove GST Calculator",
  category: "tax",
  order: 2,
  isPublished: true,
  listing: {
    title: "Remove GST Calculator",
    shortDescription:
      "Extract the base amount and tax component from GST-inclusive pricing.",
  },
  hero: {
    title: "Remove GST Calculator",
    description:
      "Remove GST from any inclusive price and get the base amount, tax amount, and split instantly.",
  },
  seo: {
    title: "Remove GST Calculator - Minus GST from Price Instantly",
    description:
      "Remove GST from any price and calculate the original base amount instantly for all major GST slabs.",
    keywords: [
      "remove gst calculator",
      "minus gst calculator",
      "reverse gst",
      "gst inclusive to exclusive calculator",
    ],
    canonicalPath: "/calculators/remove-gst",
  },
  relatedSlugs: ["gst", "percentage"],
  CalculatorComponent: RemoveGSTCalculator,
  ContentComponent: RemoveGstContent,
};
