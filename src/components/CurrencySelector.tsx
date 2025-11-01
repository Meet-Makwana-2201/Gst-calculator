'use client';

import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';

export default function CurrencySelector() {
  const { currency, setCurrency, currencySymbol } = useApp();

  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button
        onClick={() => setCurrency('INR')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          currency === 'INR'
            ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        ₹ INR
      </button>
      <button
        onClick={() => setCurrency('USD')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          currency === 'USD'
            ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
      >
        $ USD
      </button>
    </div>
  );
}

