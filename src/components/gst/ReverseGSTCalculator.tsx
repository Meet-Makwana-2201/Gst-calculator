'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatNumberForInput, unformatNumber } from '@/lib/utils';
import ShareButtons from '@/components/ShareButtons';
import { useApp } from '@/contexts/AppContext';
import TaxTypeSelector from '../TaxTypeSelector';
import CurrencySelector from '../CurrencySelector';
import CopyResultButton from '../CopyResultButton';
import PrintInvoiceButton from '../PrintInvoiceButton';
// import ExportButtons from '../ExportButtons';

const GST_RATES = [5, 12, 18, 28];
const STORAGE_KEY_REVERSE = 'reverse-gst-calculator-rate';

export default function ReverseGSTCalculator() {
  const { currency, currencySymbol, taxType } = useApp();
  const [totalAmount, setTotalAmount] = useState<string>('');
  const [rate, setRate] = useState<number>(18);
  const [originalAmount, setOriginalAmount] = useState<number | null>(null);
  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [cgstAmount, setCgstAmount] = useState<number | null>(null);
  const [sgstAmount, setSgstAmount] = useState<number | null>(null);
  const [igstAmount, setIgstAmount] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ amount?: string; rate?: string }>({});
  const [showResults, setShowResults] = useState(false);

  // Load saved rate from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedRate = localStorage.getItem(STORAGE_KEY_REVERSE);
      if (savedRate) {
        const parsedRate = parseFloat(savedRate);
        if (!isNaN(parsedRate) && parsedRate > 0) {
          setRate(parsedRate);
        }
      }
    }
  }, []);

  // Save rate to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_REVERSE, rate.toString());
    }
  }, [rate]);

  const validateAmount = (value: string): string | undefined => {
    if (!value || value.trim() === '') {
      return 'Total amount is required';
    }
    const numValue = parseFloat(unformatNumber(value));
    if (isNaN(numValue)) {
      return 'Please enter a valid number';
    }
    if (numValue < 0) {
      return 'Amount cannot be negative';
    }
    if (numValue === 0) {
      return 'Amount must be greater than zero';
    }
    return undefined;
  };

  const validateRate = (value: number): string | undefined => {
    if (isNaN(value) || value <= 0) {
      return 'GST rate must be greater than zero';
    }
    if (value > 100) {
      return 'GST rate cannot exceed 100%';
    }
    return undefined;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow empty input
    if (inputValue === '') {
      setTotalAmount('');
      setErrors(prev => ({ ...prev, amount: undefined }));
      setShowResults(false);
      return;
    }

    // Remove all non-numeric characters except decimal point
    const cleaned = inputValue.replace(/[^0-9.]/g, '');

    // Allow only one decimal point
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      return; // Invalid input, don't update
    }

    // Limit decimal places to 2
    if (parts[1] && parts[1].length > 2) {
      return; // Don't allow more than 2 decimal places
    }

    // Format with thousands separator
    const numValue = parseFloat(cleaned);
    if (!isNaN(numValue)) {
      const formatted = formatNumberForInput(cleaned);
      setTotalAmount(formatted);

      // Validate on blur, not on every keystroke
      const error = validateAmount(formatted);
      if (error) {
        setErrors(prev => ({ ...prev, amount: error }));
      } else {
        setErrors(prev => ({ ...prev, amount: undefined }));
      }
    } else if (cleaned === '') {
      setTotalAmount('');
      setErrors(prev => ({ ...prev, amount: undefined }));
    }
  };

  const handleAmountBlur = () => {
    if (totalAmount) {
      const error = validateAmount(totalAmount);
      setErrors(prev => ({ ...prev, amount: error }));
    }
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setRate(18);
      return;
    }

    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setRate(numValue);
      const error = validateRate(numValue);
      setErrors(prev => ({ ...prev, rate: error }));
    }
  };

  // const handleRateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedRate = parseFloat(e.target.value);
  //   setRate(selectedRate);
  //   setErrors(prev => ({ ...prev, rate: undefined }));
  // };

  const calculateReverseGST = () => {
    const amountError = validateAmount(totalAmount);
    const rateError = validateRate(rate);

    if (amountError || rateError) {
      setErrors({
        amount: amountError,
        rate: rateError,
      });
      setShowResults(false);
      return;
    }

    const numTotal = parseFloat(unformatNumber(totalAmount));
    const base = numTotal / (1 + rate / 100);
    const totalTax = numTotal - base;

    let gst = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;

    if (taxType === 'GST') {
      gst = totalTax;
    } else if (taxType === 'IGST') {
      igst = totalTax;
    } else if (taxType === 'CGST_SGST') {
      // Split equally between CGST and SGST
      cgst = totalTax / 2;
      sgst = totalTax / 2;
    }

    setOriginalAmount(base);
    setGstAmount(gst);
    setCgstAmount(cgst);
    setSgstAmount(sgst);
    setIgstAmount(igst);
    setShowResults(true);
    setErrors({});
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateReverseGST();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10" />
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Reverse GST Calculator</CardTitle>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Calculate the original amount and GST from the total amount (including GST)
        </p>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
          <TaxTypeSelector />
          <CurrencySelector />
        </div>
        <div className="space-y-4">
          {/* Total Amount Input */}
          <div className="space-y-2">
            <label
              htmlFor="reverse-total-amount"
              className="block text-sm font-medium text-foreground"
            >
              Total Amount (including GST) <span className="text-destructive">*</span>
            </label>
            <Input
              id="reverse-total-amount"
              type="text"
              inputMode="decimal"
              placeholder="Enter total amount (e.g., 11,800)"
              value={totalAmount}
              onChange={handleAmountChange}
              onBlur={handleAmountBlur}
              onKeyPress={handleKeyPress}
              aria-invalid={errors.amount ? 'true' : 'false'}
              aria-describedby={errors.amount ? 'amount-error' : undefined}
              className="text-lg"
            />
            {errors.amount && (
              <p
                id="amount-error"
                className="text-sm text-destructive flex items-center gap-1"
                role="alert"
              >
                <span aria-hidden="true">⚠️</span>
                {errors.amount}
              </p>
            )}
          </div>

          {/* GST Rate Input */}
          <div className="space-y-2">
            <label
              htmlFor="reverse-gst-rate"
              className="block text-sm font-medium text-foreground"
            >
              GST Rate (%) <span className="text-destructive">*</span>
            </label>

            {/* Quick Rate Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {GST_RATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRate(r);
                    setErrors(prev => ({ ...prev, rate: undefined }));
                  }}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${rate === r
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-700'
                    }`}
                  aria-label={`Select ${r}% GST rate`}
                >
                  {r}%
                </button>
              ))}
            </div>

            {/* Custom Rate Input */}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="text-sm text-muted-foreground">Or enter custom rate:</span>
              <Input
                id="reverse-gst-rate"
                type="number"
                inputMode="decimal"
                placeholder="Custom rate (e.g., 15.5)"
                value={GST_RATES.includes(rate) ? '' : rate}
                onChange={handleRateChange}
                onKeyPress={handleKeyPress}
                aria-label="Enter custom GST rate"
                aria-invalid={errors.rate ? 'true' : 'false'}
                aria-describedby={errors.rate ? 'rate-error' : undefined}
                min="0"
                max="100"
                step="0.01"
                className="flex-1 max-w-[200px]"
              />
            </div>
            {errors.rate && (
              <p
                id="rate-error"
                className="text-sm text-destructive flex items-center gap-1"
                role="alert"
              >
                <span aria-hidden="true">⚠️</span>
                {errors.rate}
              </p>
            )}
          </div>

          <Button
            onClick={calculateReverseGST}
            className="w-full md:w-auto min-w-[160px] py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all hover-lift rounded-xl"
            size="lg"
            aria-label="Calculate reverse GST"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Calculate Reverse GST
          </Button>
        </div>

        {/* Results Section with Animation */}
        {showResults && originalAmount !== null && gstAmount !== null && (
          <div
            className="mt-8 p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-indigo-900/30 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-xl space-y-6 animate-slide-in backdrop-blur-sm transform transition-all duration-300"
            role="region"
            aria-live="polite"
            aria-label="Calculation results"
          >
            <h3 className="text-lg font-semibold mb-4">Calculation Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Amount (excluding tax)</p>
                <p className="text-xl font-bold text-foreground">
                  {currencySymbol}{formatCurrency(originalAmount!, currency)}
                </p>
              </div>
              {taxType === 'GST' && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">GST Amount ({rate}%)</p>
                  <p className="text-xl font-bold text-primary">
                    {currencySymbol}{formatCurrency(gstAmount!, currency)}
                  </p>
                </div>
              )}
              {taxType === 'IGST' && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">IGST Amount ({rate}%)</p>
                  <p className="text-xl font-bold text-primary">
                    {currencySymbol}{formatCurrency(igstAmount!, currency)}
                  </p>
                </div>
              )}
              {taxType === 'CGST_SGST' && (
                <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">CGST ({rate / 2}%)</p>
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {currencySymbol}{formatCurrency(cgstAmount!, currency)}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">SGST ({rate / 2}%)</p>
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {currencySymbol}{formatCurrency(sgstAmount!, currency)}
                    </p>
                  </div>
                </>
              )}
              <div className="space-y-1 md:col-span-1">
                <p className="text-sm text-muted-foreground">Total (including tax)</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {currencySymbol}{formatCurrency(parseFloat(unformatNumber(totalAmount)), currency)}
                </p>
              </div>
            </div>
            {taxType === 'CGST_SGST' && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  <strong>Note:</strong> CGST ({rate / 2}%) + SGST ({rate / 2}%) = Total GST ({rate}%)
                </p>
              </div>
            )}
            <div className="pt-4 border-t border-border space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax Type:</span>
                <span className="font-medium">
                  {taxType === 'GST' && `GST ${rate}%`}
                  {taxType === 'IGST' && `IGST ${rate}%`}
                  {taxType === 'CGST_SGST' && `CGST ${rate / 2}% + SGST ${rate / 2}%`}
                </span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                <p>Formula: Original Amount = Total ÷ (1 + GST Rate ÷ 100)</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <CopyResultButton
                  text={`Reverse GST Calculation:\nTotal (incl. tax): ${currencySymbol}${formatCurrency(parseFloat(unformatNumber(totalAmount)), currency)}\nAmount (excl. tax): ${currencySymbol}${formatCurrency(originalAmount!, currency)}\n${taxType === 'GST' ? `GST (${rate}%)` : taxType === 'IGST' ? `IGST (${rate}%)` : `CGST (${rate / 2}%) + SGST (${rate / 2}%)`}: ${currencySymbol}${formatCurrency(taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!), currency)}`}
                />
                <PrintInvoiceButton
                  amount={originalAmount!}
                  taxAmount={taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!)}
                  totalAmount={parseFloat(unformatNumber(totalAmount))}
                  rate={rate}
                  taxType={taxType === 'GST' ? `GST ${rate}%` : taxType === 'IGST' ? `IGST ${rate}%` : `CGST ${rate / 2}% + SGST ${rate / 2}%`}
                  currencySymbol={currencySymbol}
                  formatCurrency={formatCurrency}
                  currency={currency}
                />
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2">Found this helpful? Share it!</p>
                <ShareButtons
                  url="https://easy-gst-calculator.netlify.app/calculator"
                  title={`Reverse GST Calculation: Original ${currencySymbol}${formatCurrency(originalAmount!, currency)}, Tax ${currencySymbol}${formatCurrency(taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!), currency)}`}
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}