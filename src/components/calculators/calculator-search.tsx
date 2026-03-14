"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import type { CalculatorListItem } from "@/lib/calculators/types";

import { CalculatorListing } from "./calculator-listing";

interface CalculatorSearchProps {
  calculators: CalculatorListItem[];
}

function matchesSearch(calculator: CalculatorListItem, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [
    calculator.name,
    calculator.listing.title,
    calculator.listing.shortDescription,
    calculator.hero.title,
    calculator.hero.description,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export function CalculatorSearch({ calculators }: CalculatorSearchProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 180);

    return () => window.clearTimeout(timer);
  }, [query]);

  const filteredCalculators = calculators.filter((calculator) =>
    matchesSearch(calculator, debouncedQuery)
  );

  return (
    <div className="space-y-8">
      <div className="surface-panel rounded-[2rem] p-5 md:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search calculators by title or description"
            className="h-14 pl-11 text-base"
            aria-label="Search calculators"
          />
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>
            {filteredCalculators.length} of {calculators.length} calculators
          </span>
          {debouncedQuery ? <span>{`Searching for "${debouncedQuery}"`}</span> : null}
        </div>
      </div>

      {filteredCalculators.length ? (
        <CalculatorListing calculators={filteredCalculators} />
      ) : (
        <div className="surface-panel rounded-[2rem] border-dashed p-10 text-center">
          <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            No calculators found
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Try a different keyword like GST, EMI, SIP, margin, or percentage.
          </p>
        </div>
      )}
    </div>
  );
}
