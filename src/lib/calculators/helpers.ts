import type {
  CalculatorCategory,
  CalculatorRegistry,
  CalculatorRegistryItem,
} from "./types";
import { calculatorCategories } from "./types";

export function getPublishedCalculators(
  registry: CalculatorRegistry
): CalculatorRegistryItem[] {
  return Object.values(registry)
    .filter((calculator) => calculator.isPublished)
    .sort((left, right) => left.order - right.order);
}

export function getCalculatorBySlug(
  registry: CalculatorRegistry,
  slug: string
): CalculatorRegistryItem | null {
  return registry[slug] ?? null;
}

export function getRelatedCalculators(
  registry: CalculatorRegistry,
  slugs: string[] = []
): CalculatorRegistryItem[] {
  return slugs
    .map((slug) => registry[slug])
    .filter((calculator): calculator is CalculatorRegistryItem =>
      Boolean(calculator?.isPublished)
    );
}

export function getCalculatorsByCategory(
  registry: CalculatorRegistry,
  category: CalculatorCategory
): CalculatorRegistryItem[] {
  return getPublishedCalculators(registry).filter(
    (calculator) => calculator.category === category
  );
}

export function isCalculatorCategory(
  value: string
): value is CalculatorCategory {
  return (calculatorCategories as readonly string[]).includes(value);
}

export function getCalculatorCategories(
  registry: CalculatorRegistry
): CalculatorCategory[] {
  return calculatorCategories.filter(
    (category) => getCalculatorsByCategory(registry, category).length > 0
  );
}

export function getCategoryLabel(category: CalculatorCategory): string {
  switch (category) {
    case "tax":
      return "Tax Calculators";
    case "loan":
      return "Loan Calculators";
    case "investment":
      return "Investment Calculators";
    case "interest":
      return "Interest Calculators";
    case "shopping":
      return "Shopping Calculators";
    case "math":
      return "Math Calculators";
    case "business":
      return "Business Calculators";
    default:
      return "Calculators";
  }
}
