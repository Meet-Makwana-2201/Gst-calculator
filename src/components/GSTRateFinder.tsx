'use client';

import React, { useState, useEffect } from 'react';
import { searchHSNCode, type HSNResult } from '@/lib/gst-api';
import { Search, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GSTRateFinder() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<HSNResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Debounce search
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        if (query.length < 2) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            setLoading(true);
            setError('');
            try {
                const data = await searchHSNCode(query);
                setResults(data);
            } catch {
                setError('Failed to fetch GST rates. Please try again.');
                setResults([]);
            } finally {
                setLoading(false);
            }
        }, 300);

        setSearchTimeout(timeout);

        return () => {
            if (timeout) clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const getRateColor = (rate: number) => {
        if (rate === 0) return 'text-green-600 bg-green-50 border-green-200';
        if (rate <= 5) return 'text-blue-600 bg-blue-50 border-blue-200';
        if (rate <= 12) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
        if (rate <= 18) return 'text-orange-600 bg-orange-50 border-orange-200';
        return 'text-red-600 bg-red-50 border-red-200';
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Search by product name, HSN code, or category..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-12 pr-4 py-6 text-lg border-2 focus:border-indigo-500 rounded-xl"
                />
                {loading && (
                    <Loader2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 w-5 h-5 animate-spin" />
                )}
            </div>

            {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-red-800 font-medium">{error}</p>
                        <p className="text-red-600 text-sm mt-1">
                            You can also search manually on the{' '}
                            <a
                                href="https://www.cbic-gst.gov.in/gst-goods-services-rates.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline font-medium"
                            >
                                official GST portal
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {query.length > 0 && query.length < 2 && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                    Type at least 2 characters to search
                </p>
            )}

            {results.length > 0 && (
                <div className="mt-6 space-y-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Found {results.length} result{results.length !== 1 ? 's' : ''}
                    </p>
                    {results.map((result, index) => (
                        <div
                            key={`${result.hsnCode}-${index}`}
                            className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all group"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                                            HSN: {result.hsnCode}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-bold border ${getRateColor(
                                                result.gstRate
                                            )}`}
                                        >
                                            {result.gstRate}% GST
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                        {result.description}
                                    </h3>
                                    {result.category && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Category: {result.category}
                                        </p>
                                    )}
                                </div>
                                <Link href={`/calculator?rate=${result.gstRate}`}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        Calculate
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {query.length >= 2 && results.length === 0 && !loading && !error && (
                <div className="mt-8 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">No results found for &quot;{query}&quot;</p>
                    <p className="text-sm text-gray-500">
                        Try searching with different keywords or HSN code
                    </p>
                </div>
            )}

            {query.length === 0 && (
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                    <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Quick Tips</h3>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Search by product name (e.g., &quot;mobile phone&quot;)</li>
                            <li>• Search by HSN code (e.g., &quot;8517&quot;)</li>
                            <li>• Search by category (e.g., &quot;electronics&quot;)</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Popular Searches</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Mobile', 'Laptop', 'Furniture', 'Clothing', 'Food'].map((term) => (
                                <button
                                    key={term}
                                    onClick={() => setQuery(term)}
                                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-sm hover:border-indigo-500 transition-colors"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
