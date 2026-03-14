import GstCalculatorContent from "@/components/calculators/GstCalculatorContent";
import GstCalculatorSuite from "@/components/calculators/GstCalculatorSuite";

import type { CalculatorRegistryItem } from "../types";

export const gstCalculator: CalculatorRegistryItem = {
  slug: "gst",
  name: "GST Calculator",
  category: "tax",
  order: 1,
  isPublished: true,
  listing: {
    title: "GST Calculator",
    shortDescription:
      "Add GST, reverse GST, and remove GST from a single calculator suite.",
    badge: "Popular",
  },
  hero: {
    title: "GST Calculator India",
    description:
      "Calculate GST, IGST, CGST, and SGST instantly with add, reverse, and removal flows in one place.",
  },
  seo: {
    title: "Free GST Calculator India 2026 - IGST, CGST and SGST Instant",
    description:
      "Calculate GST instantly with IGST, CGST, and SGST breakdowns. Free online GST calculator with reverse GST and remove GST support.",
    keywords: [
      "gst calculator india",
      "calculate gst",
      "reverse gst calculator",
      "remove gst",
    ],
    canonicalPath: "/calculators/gst",
    openGraphTitle: "Free GST Calculator India 2026",
  },
  faqs: [
    {
      question: "What is the GST formula?",
      answer:
        "GST Amount = Base Amount x GST Rate / 100. Total Amount = Base Amount + GST Amount.",
    },
    {
      question: "How do I calculate GST backwards?",
      answer:
        "Divide the total inclusive amount by 1 plus the GST rate, then subtract the result from the total amount to get the tax component.",
    },
  ],
  relatedSlugs: ["remove-gst", "percentage", "discount"],
  CalculatorComponent: GstCalculatorSuite,
  ContentComponent: GstCalculatorContent,
};
