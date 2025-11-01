'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import { formatCurrency } from '@/lib/utils';

interface CalculationHistory {
  id: string;
  timestamp: number;
  amount: number;
  rate: number;
  taxType: string;
  taxAmount: number;
  totalAmount: number;
  currency: 'INR' | 'USD';
}

const STORAGE_KEY = 'gst-calculator-history';
const MAX_HISTORY = 50;

export default function BillingHistory({ currency, formatCurrencyFn }: { currency: 'INR' | 'USD'; formatCurrencyFn: (value: number, currency?: 'INR' | 'USD') => string }) {
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setHistory(parsed.slice(0, MAX_HISTORY));
        } catch (e) {
          console.error('Failed to load history:', e);
        }
      }
    }
  }, []);

  // const addToHistory = (calc: Omit<CalculationHistory, 'id' | 'timestamp'>) => {
  //   const newEntry: CalculationHistory = {
  //     ...calc,
  //     id: Date.now().toString(),
  //     timestamp: Date.now(),
  //   };

  //   setHistory(prev => {
  //     const updated = [newEntry, ...prev].slice(0, MAX_HISTORY);
  //     if (typeof window !== 'undefined') {
  //       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  //     }
  //     return updated;
  //   });
  // };

  const clearHistory = () => {
    setHistory([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const deleteEntry = (id: string) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  };

  if (!isOpen && history.length === 0) return null;

  return (
    <div className="space-y-2">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="w-full"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Billing History ({history.length})
      </Button>

      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Recent Calculations</h3>
            {history.length > 0 && (
              <Button onClick={clearHistory} variant="ghost" size="sm">
                Clear All
              </Button>
            )}
          </div>

          {history.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              No calculation history yet
            </p>
          ) : (
            <div className="space-y-2">
              {history.map((entry) => (
                <div
                  key={entry.id}
                  className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(entry.timestamp).toLocaleString()}
                      </div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {entry.taxType === 'GST' ? `GST ${entry.rate}%` : 
                         entry.taxType === 'IGST' ? `IGST ${entry.rate}%` : 
                         `CGST ${entry.rate/2}% + SGST ${entry.rate/2}%`}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Base: {entry.currency === 'INR' ? '₹' : '$'}{formatCurrencyFn(entry.amount, entry.currency)} | 
                        Tax: {entry.currency === 'INR' ? '₹' : '$'}{formatCurrencyFn(entry.taxAmount, entry.currency)} | 
                        Total: {entry.currency === 'INR' ? '₹' : '$'}{formatCurrencyFn(entry.totalAmount, entry.currency)}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="ml-2 text-gray-400 hover:text-red-600 transition-colors"
                      aria-label="Delete entry"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { type CalculationHistory };

