import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import type { CalculatorFAQItem, CalculatorRegistryItem } from "./types";

export function buildCalculatorMetadata(
  calculator: CalculatorRegistryItem
): Metadata {
  const canonicalUrl = `${siteConfig.url}${calculator.seo.canonicalPath}`;
  const ogImage = calculator.seo.ogImage ?? siteConfig.defaultOgImage;

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    keywords: calculator.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: calculator.seo.openGraphTitle ?? calculator.seo.title,
      description:
        calculator.seo.openGraphDescription ?? calculator.seo.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: calculator.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: calculator.seo.openGraphTitle ?? calculator.seo.title,
      description:
        calculator.seo.openGraphDescription ?? calculator.seo.description,
      images: [ogImage],
    },
  };
}

export function buildCalculatorJsonLd(calculator: CalculatorRegistryItem) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calculator.name,
    applicationCategory:
      calculator.schema?.applicationCategory ?? "FinanceApplication",
    operatingSystem: calculator.schema?.operatingSystem ?? "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: calculator.schema?.priceCurrency ?? "INR",
    },
    description: calculator.seo.description,
    url: `${siteConfig.url}${calculator.seo.canonicalPath}`,
  };
}

export function buildBreadcrumbJsonLd(calculator: CalculatorRegistryItem) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Calculators",
        item: `${siteConfig.url}/calculators`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: calculator.name,
        item: `${siteConfig.url}${calculator.seo.canonicalPath}`,
      },
    ],
  };
}

export function buildFAQJsonLd(faqs: CalculatorFAQItem[] = []) {
  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
