'use client';

import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';

export default function TaxTypeSelector() {
  const { taxType, setTaxType } = useApp();

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        Tax Type
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTaxType('GST')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            taxType === 'GST'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
          }`}
        >
          GST (Unified)
        </button>
        <button
          onClick={() => setTaxType('IGST')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            taxType === 'IGST'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
          }`}
        >
          IGST (Interstate)
        </button>
        <button
          onClick={() => setTaxType('CGST_SGST')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            taxType === 'CGST_SGST'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
          }`}
        >
          CGST + SGST (Intrastate)
        </button>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {taxType === 'GST' && 'Unified GST - Single tax rate'}
        {taxType === 'IGST' && 'IGST - For interstate transactions'}
        {taxType === 'CGST_SGST' && 'CGST + SGST - For intrastate transactions (each half of GST rate)'}
      </p>
    </div>
  );
}

