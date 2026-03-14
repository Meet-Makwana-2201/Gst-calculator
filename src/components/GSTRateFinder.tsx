'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowRight, Loader2, Search } from 'lucide-react';

import { searchHSNCode, type HSNResult } from '@/lib/gst-api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const popularSearches = ['Mobile', 'Laptop', 'Furniture', 'Clothing', 'Food'];

export default function GSTRateFinder() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<HSNResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setError('');
      return;
    }

    const timeout = window.setTimeout(async () => {
      setLoading(true);
      setError('');

      try {
        const data = await searchHSNCode(query.trim());
        setResults(data);
      } catch {
        setError('Unable to fetch GST rates right now. Try again in a moment.');
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 260);

    return () => window.clearTimeout(timeout);
  }, [query]);

  const getRateClasses = (rate: number) => {
    if (rate === 0) return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-300 dark:text-slate-950';
    if (rate <= 5) return 'bg-sky-100 text-sky-900 dark:bg-sky-300 dark:text-slate-950';
    if (rate <= 12) return 'bg-amber-100 text-amber-900 dark:bg-amber-300 dark:text-slate-950';
    if (rate <= 18) return 'bg-orange-100 text-orange-900 dark:bg-orange-300 dark:text-slate-950';
    return 'bg-rose-100 text-rose-900 dark:bg-rose-300 dark:text-slate-950';
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Search GST reference
        </p>
        <div className="relative mt-4">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by product name, HSN code, or category"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-14 pl-12 pr-12 text-base"
          />
          {loading ? (
            <Loader2 className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-teal-700 dark:text-teal-300" />
          ) : null}
        </div>
      </div>

      {error ? (
        <div className="rounded-[1.7rem] border border-rose-200 bg-rose-50 p-5 dark:border-rose-900 dark:bg-rose-950/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 text-rose-600 dark:text-rose-400" />
            <div>
              <p className="text-sm font-semibold text-rose-800 dark:text-rose-300">{error}</p>
              <p className="mt-2 text-sm text-rose-700 dark:text-rose-400">
                You can also verify classification on the official GST portal if needed.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {query.length > 0 && query.length < 2 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Type at least 2 characters to start the lookup.
        </p>
      ) : null}

      {results.length > 0 ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Found {results.length} result{results.length !== 1 ? 's' : ''}
          </p>

          {results.map((result, index) => (
            <article
              key={`${result.hsnCode}-${index}`}
              className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-5 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-slate-700"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      HSN {result.hsnCode}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${getRateClasses(result.gstRate)}`}>
                      {result.gstRate}% GST
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {result.description}
                  </h3>
                  {result.category ? (
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Category: {result.category}
                    </p>
                  ) : null}
                </div>

                <Link href={`/calculators/gst`} className="lg:shrink-0">
                  <Button variant="outline">
                    Use this rate
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {query.length >= 2 && results.length === 0 && !loading && !error ? (
        <div className="rounded-[1.8rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/60">
          <p className="text-lg font-bold text-slate-950 dark:text-white">No results found</p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Try a broader keyword, a shorter category term, or the HSN digits directly.
          </p>
        </div>
      ) : null}

      {query.length === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/90">
            <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
              Search tips
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>Search by product name such as mobile phone or restaurant service.</li>
              <li>Search by HSN digits if you already have the classification.</li>
              <li>Use broader category terms if the exact product name returns nothing.</li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/90">
            <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
              Popular searches
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
