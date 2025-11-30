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
import ExportButtons from '../ExportButtons';
import CalculationHistory from '../CalculationHistory';
import { saveCalculation, type CalculationRecord } from '@/lib/calculation-history';
import { generateCalculationPDF } from '@/lib/pdf-generator';
import { Download } from 'lucide-react';

const GST_RATES = [5, 12, 18, 28];
const STORAGE_KEY = 'gst-calculator-rate';

export default function GSTCalculator() {
  const { currency, currencySymbol, taxType } = useApp();
  const [amount, setAmount] = useState<string>('');
  const [rate, setRate] = useState<number>(18);
  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [cgstAmount, setCgstAmount] = useState<number | null>(null);
  const [sgstAmount, setSgstAmount] = useState<number | null>(null);
  const [igstAmount, setIgstAmount] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ amount?: string; rate?: string }>({});
  const [showResults, setShowResults] = useState(false);

  // Load saved rate from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedRate = localStorage.getItem(STORAGE_KEY);
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
      localStorage.setItem(STORAGE_KEY, rate.toString());
    }
  }, [rate]);

  const validateAmount = (value: string): string | undefined => {
    if (!value || value.trim() === '') {
      return 'Amount is required';
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
      setAmount('');
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
      setAmount(formatted);

      // Validate on blur, not on every keystroke
      const error = validateAmount(formatted);
      if (error) {
        setErrors(prev => ({ ...prev, amount: error }));
      } else {
        setErrors(prev => ({ ...prev, amount: undefined }));
      }
    } else if (cleaned === '') {
      setAmount('');
      setErrors(prev => ({ ...prev, amount: undefined }));
    }
  };

  const handleAmountBlur = () => {
    if (amount) {
      const error = validateAmount(amount);
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

  const calculateGST = () => {
    const amountError = validateAmount(amount);
    const rateError = validateRate(rate);

    if (amountError || rateError) {
      setErrors({
        amount: amountError,
        rate: rateError,
      });
      setShowResults(false);
      return;
    }

    const numAmount = parseFloat(unformatNumber(amount));

    let totalTax = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;
    let gst = 0;

    if (taxType === 'GST') {
      gst = (numAmount * rate) / 100;
      totalTax = gst;
    } else if (taxType === 'IGST') {
      igst = (numAmount * rate) / 100;
      totalTax = igst;
    } else if (taxType === 'CGST_SGST') {
      // CGST and SGST are each half of the GST rate
      cgst = (numAmount * rate) / 200; // Half of rate
      sgst = (numAmount * rate) / 200; // Half of rate
      totalTax = cgst + sgst;
    }

    const total = numAmount + totalTax;

    setGstAmount(gst);
    setCgstAmount(cgst);
    setSgstAmount(sgst);
    setIgstAmount(igst);
    setTotalAmount(total);
    setShowResults(true);
    setErrors({});

    // Save to history
    saveCalculation({
      type: 'add',
      amount: numAmount,
      gstRate: rate,
      gstAmount: totalTax,
      totalAmount: total,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateGST();
    }
  };

  const handleRestoreCalculation = (record: CalculationRecord) => {
    setAmount(formatNumberForInput(record.amount.toString()));
    setRate(record.gstRate);
    calculateGST();
  };

  const handleDownloadPDF = () => {
    if (gstAmount !== null && totalAmount !== null) {
      const totalTax = taxType === 'GST' ? gstAmount : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!);
      generateCalculationPDF({
        type: 'add',
        amount: parseFloat(unformatNumber(amount)),
        gstRate: rate,
        gstAmount: totalTax,
        totalAmount: totalAmount,
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
      <CardHeader className="relative z-10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">GST Calculator</CardTitle>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Calculate GST amount from base price</p>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
          <TaxTypeSelector />
          <CurrencySelector />
        </div>
        <div className="space-y-4">
          {/* Amount Input */}
          <div className="space-y-2">
            <label
              htmlFor="gst-amount"
              className="block text-sm font-medium text-foreground"
            >
              Amount (excluding GST) <span className="text-destructive">*</span>
            </label>
            <Input
              id="gst-amount"
              type="text"
              inputMode="decimal"
              placeholder="Enter amount (e.g., 10,000)"
              value={amount}
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
              htmlFor="gst-rate"
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
                id="gst-rate"
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
            onClick={calculateGST}
            className="w-full md:w-auto min-w-[160px] py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all hover-lift rounded-xl"
            size="lg"
            aria-label="Calculate GST"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate GST
          </Button>
        </div>

        {/* Results Section with Animation */}
        {showResults && gstAmount !== null && totalAmount !== null && (
          <div
            className="mt-8 p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 shadow-xl space-y-6 animate-slide-in backdrop-blur-sm transform transition-all duration-300"
            role="region"
            aria-live="polite"
            aria-label="Calculation results"
          >
            <h3 className="text-lg font-semibold mb-4">Calculation Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Amount (excluding tax)</p>
                <p className="text-xl font-bold text-foreground">
                  {currencySymbol}{formatCurrency(parseFloat(unformatNumber(amount)), currency)}
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
                  {currencySymbol}{formatCurrency(totalAmount!, currency)}
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

              {/* Action Buttons */}
              <div className="space-y-3 pt-3">
                <div className="flex flex-wrap gap-3">
                  <CopyResultButton
                    text={`GST Calculation:\nAmount (excl. tax): ${currencySymbol}${formatCurrency(parseFloat(unformatNumber(amount)), currency)}\n${taxType === 'GST' ? `GST (${rate}%)` : taxType === 'IGST' ? `IGST (${rate}%)` : `CGST (${rate / 2}%) + SGST (${rate / 2}%)`}: ${currencySymbol}${formatCurrency(taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!), currency)}\nTotal (incl. tax): ${currencySymbol}${formatCurrency(totalAmount!, currency)}`}
                  />
                  <PrintInvoiceButton
                    amount={parseFloat(unformatNumber(amount))}
                    taxAmount={taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!)}
                    totalAmount={totalAmount!}
                    rate={rate}
                    taxType={taxType === 'GST' ? `GST ${rate}%` : taxType === 'IGST' ? `IGST ${rate}%` : `CGST ${rate / 2}% + SGST ${rate / 2}%`}
                    currencySymbol={currencySymbol}
                    formatCurrency={formatCurrency}
                    currency={currency}
                  />
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
                <ExportButtons
                  amount={parseFloat(unformatNumber(amount))}
                  taxAmount={taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!)}
                  totalAmount={totalAmount!}
                  rate={rate}
                  taxType={taxType}
                  currencySymbol={currencySymbol}
                  formatCurrency={formatCurrency}
                  currency={currency}
                />
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-2">Found this helpful? Share it!</p>
                <ShareButtons
                  url="https://easy-gst-calculator.netlify.app/calculator"
                  title={`I just calculated ${taxType}: ${currencySymbol}${formatCurrency(totalAmount!, currency)} total`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Calculation History */}
        <CalculationHistory onRestore={handleRestoreCalculation} />
      </CardContent>
    </Card>
  );
}