import type { ComponentType } from "react";

export const calculatorCategories = [
  "tax",
  "loan",
  "investment",
  "interest",
  "shopping",
  "math",
  "business",
] as const;

export type CalculatorCategory = (typeof calculatorCategories)[number];

export interface CalculatorFAQItem {
  question: string;
  answer: string;
}

export interface CalculatorSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  ogImage?: string;
}

export interface CalculatorListing {
  title: string;
  shortDescription: string;
  badge?: string;
}

export interface CalculatorSchemaConfig {
  applicationCategory?: string;
  operatingSystem?: string;
  priceCurrency?: string;
}

export interface CalculatorRegistryItem {
  slug: string;
  name: string;
  category: CalculatorCategory;
  order: number;
  isPublished: boolean;
  listing: CalculatorListing;
  hero: {
    title: string;
    description: string;
  };
  seo: CalculatorSEO;
  schema?: CalculatorSchemaConfig;
  faqs?: CalculatorFAQItem[];
  relatedSlugs?: string[];
  CalculatorComponent: ComponentType;
  ContentComponent?: ComponentType;
}

export type CalculatorRegistry = Record<string, CalculatorRegistryItem>;

export type CalculatorListItem = Pick<
  CalculatorRegistryItem,
  "slug" | "name" | "category" | "listing" | "hero"
>;

export interface CalculatorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export interface CalculatorCategoryPageProps {
  params: Promise<{
    category: CalculatorCategory;
  }>;
}

export interface CalculatorPageShellProps {
  calculator: CalculatorRegistryItem;
  relatedCalculators: CalculatorRegistryItem[];
}
