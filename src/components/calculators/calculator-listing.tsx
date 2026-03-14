import type { CalculatorListItem } from "@/lib/calculators/types";

import { CalculatorListCard } from "./calculator-list-card";

interface CalculatorListingProps {
  calculators: CalculatorListItem[];
}

export function CalculatorListing({ calculators }: CalculatorListingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {calculators.map((calculator) => (
        <CalculatorListCard key={calculator.slug} calculator={calculator} />
      ))}
    </div>
  );
}
