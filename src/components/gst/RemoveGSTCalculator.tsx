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
import { Download, Minus } from 'lucide-react';

const GST_RATES = [5, 12, 18, 28];
const STORAGE_KEY_REMOVE = 'remove-gst-calculator-rate';

/**
 * Calculate original price from GST-inclusive price
 * Formula: Original Price = Final Price / (1 + GST Rate / 100)
 */
const calculateOriginalPrice = (finalPrice: number, gstRate: number): number => {
    return finalPrice / (1 + gstRate / 100);
};

/**
 * Calculate GST amount from final price
 */
const calculateGSTAmount = (finalPrice: number, originalPrice: number): number => {
    return finalPrice - originalPrice;
};

export default function RemoveGSTCalculator() {
    const { currency, currencySymbol, taxType } = useApp();
    const [finalPrice, setFinalPrice] = useState<string>('');
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
            const savedRate = localStorage.getItem(STORAGE_KEY_REMOVE);
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
            localStorage.setItem(STORAGE_KEY_REMOVE, rate.toString());
        }
    }, [rate]);

    const validateAmount = (value: string): string | undefined => {
        if (!value || value.trim() === '') {
            return 'Price including GST is required';
        }
        const numValue = parseFloat(unformatNumber(value));
        if (isNaN(numValue)) {
            return 'Please enter a valid number';
        }
        if (numValue < 0) {
            return 'Price cannot be negative';
        }
        if (numValue === 0) {
            return 'Price must be greater than zero';
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
            setFinalPrice('');
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
            setFinalPrice(formatted);

            // Validate on blur, not on every keystroke
            const error = validateAmount(formatted);
            if (error) {
                setErrors(prev => ({ ...prev, amount: error }));
            } else {
                setErrors(prev => ({ ...prev, amount: undefined }));
            }
        } else if (cleaned === '') {
            setFinalPrice('');
            setErrors(prev => ({ ...prev, amount: undefined }));
        }
    };

    const handleAmountBlur = () => {
        if (finalPrice) {
            const error = validateAmount(finalPrice);
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

    const calculateRemoveGST = () => {
        const amountError = validateAmount(finalPrice);
        const rateError = validateRate(rate);

        if (amountError || rateError) {
            setErrors({
                amount: amountError,
                rate: rateError,
            });
            setShowResults(false);
            return;
        }

        const numFinalPrice = parseFloat(unformatNumber(finalPrice));

        // Calculate original price using the formula
        const original = calculateOriginalPrice(numFinalPrice, rate);
        const totalTax = calculateGSTAmount(numFinalPrice, original);

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

        setOriginalAmount(original);
        setGstAmount(gst);
        setCgstAmount(cgst);
        setSgstAmount(sgst);
        setIgstAmount(igst);
        setShowResults(true);
        setErrors({});

        // Save to history
        saveCalculation({
            type: 'remove',
            amount: numFinalPrice,
            gstRate: rate,
            gstAmount: totalTax,
            totalAmount: original,
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            calculateRemoveGST();
        }
    };

    const handleRestoreCalculation = (record: CalculationRecord) => {
        setFinalPrice(formatNumberForInput(record.amount.toString()));
        setRate(record.gstRate);
        calculateRemoveGST();
    };

    const handleDownloadPDF = () => {
        if (originalAmount !== null && gstAmount !== null) {
            const totalTax = taxType === 'GST' ? gstAmount : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!);
            generateCalculationPDF({
                type: 'remove',
                amount: parseFloat(unformatNumber(finalPrice)),
                gstRate: rate,
                gstAmount: totalTax,
                totalAmount: originalAmount,
            });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 shadow-lg">
                        <Minus className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Remove GST</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Remove GST from final amount to get original price
                </p>
                <div className="mt-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 rounded-lg inline-block">
                    <p className="text-xs text-orange-700 dark:text-orange-300">
                        <strong>Formula:</strong> Original Price = Final Price ÷ (1 + GST Rate ÷ 100)
                    </p>
                </div>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <TaxTypeSelector />
                    <CurrencySelector />
                </div>
                <div className="space-y-4">
                    {/* Price Including GST Input */}
                    <div className="space-y-2">
                        <label
                            htmlFor="remove-gst-amount"
                            className="block text-sm font-medium text-foreground"
                        >
                            Price Including GST <span className="text-destructive">*</span>
                        </label>
                        <Input
                            id="remove-gst-amount"
                            type="text"
                            inputMode="decimal"
                            placeholder="Enter price with GST (e.g., 11,800)"
                            value={finalPrice}
                            onChange={handleAmountChange}
                            onBlur={handleAmountBlur}
                            onKeyPress={handleKeyPress}
                            aria-invalid={errors.amount ? 'true' : 'false'}
                            aria-describedby={errors.amount ? 'remove-amount-error' : undefined}
                            className="text-lg"
                        />
                        <p className="text-xs text-muted-foreground">
                            Enter the final price that already includes GST
                        </p>
                        {errors.amount && (
                            <p
                                id="remove-amount-error"
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
                            htmlFor="remove-gst-rate"
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
                                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-transparent hover:border-orange-300 dark:hover:border-orange-700'
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
                                id="remove-gst-rate"
                                type="number"
                                inputMode="decimal"
                                placeholder="Custom rate (e.g., 15.5)"
                                value={GST_RATES.includes(rate) ? '' : rate}
                                onChange={handleRateChange}
                                onKeyPress={handleKeyPress}
                                aria-label="Enter custom GST rate"
                                aria-invalid={errors.rate ? 'true' : 'false'}
                                aria-describedby={errors.rate ? 'remove-rate-error' : undefined}
                                min="0"
                                max="100"
                                step="0.01"
                                className="flex-1 max-w-[200px]"
                            />
                        </div>
                        {errors.rate && (
                            <p
                                id="remove-rate-error"
                                className="text-sm text-destructive flex items-center gap-1"
                                role="alert"
                            >
                                <span aria-hidden="true">⚠️</span>
                                {errors.rate}
                            </p>
                        )}
                    </div>

                    <Button
                        onClick={calculateRemoveGST}
                        className="w-full md:w-auto min-w-[160px] py-6 text-lg font-semibold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transition-all hover-lift rounded-xl"
                        size="lg"
                        aria-label="Remove GST from price"
                    >
                        <Minus className="w-5 h-5 mr-2" />
                        Remove GST
                    </Button>
                </div>

                {/* Results Section with Animation */}
                {showResults && originalAmount !== null && gstAmount !== null && (
                    <div
                        className="mt-8 p-8 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/30 dark:via-red-900/30 dark:to-pink-900/30 rounded-2xl border-2 border-orange-200 dark:border-orange-800 shadow-xl space-y-6 animate-slide-in backdrop-blur-sm transform transition-all duration-300"
                        role="region"
                        aria-live="polite"
                        aria-label="Calculation results"
                    >
                        <h3 className="text-lg font-semibold mb-4">Calculation Breakdown</h3>

                        {/* Main Result - Original Price */}
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-green-200 dark:border-green-800">
                            <p className="text-sm text-muted-foreground mb-1">Original Price (Without GST)</p>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                {currencySymbol}{formatCurrency(originalAmount!, currency)}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Price Including GST (Input)</p>
                                <p className="text-xl font-bold text-foreground">
                                    {currencySymbol}{formatCurrency(parseFloat(unformatNumber(finalPrice)), currency)}
                                </p>
                            </div>
                            {taxType === 'GST' && (
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">GST Removed ({rate}%)</p>
                                    <p className="text-xl font-bold text-orange-600 dark:text-orange-400">
                                        - {currencySymbol}{formatCurrency(gstAmount!, currency)}
                                    </p>
                                </div>
                            )}
                            {taxType === 'IGST' && (
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">IGST Removed ({rate}%)</p>
                                    <p className="text-xl font-bold text-orange-600 dark:text-orange-400">
                                        - {currencySymbol}{formatCurrency(igstAmount!, currency)}
                                    </p>
                                </div>
                            )}
                            {taxType === 'CGST_SGST' && (
                                <>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">CGST Removed ({rate / 2}%)</p>
                                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                            - {currencySymbol}{formatCurrency(cgstAmount!, currency)}
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">SGST Removed ({rate / 2}%)</p>
                                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                                            - {currencySymbol}{formatCurrency(sgstAmount!, currency)}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {taxType === 'CGST_SGST' && (
                            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <p className="text-xs text-blue-700 dark:text-blue-300">
                                    <strong>Note:</strong> CGST ({rate / 2}%) + SGST ({rate / 2}%) = Total GST ({rate}%)
                                </p>
                            </div>
                        )}

                        {/* Calculation Explanation */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">How it&apos;s calculated:</h4>
                            <p className="text-xs text-muted-foreground font-mono">
                                Original Price = {currencySymbol}{formatCurrency(parseFloat(unformatNumber(finalPrice)), currency)} ÷ (1 + {rate}/100)
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">
                                Original Price = {currencySymbol}{formatCurrency(parseFloat(unformatNumber(finalPrice)), currency)} ÷ {(1 + rate / 100).toFixed(2)}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">
                                Original Price = {currencySymbol}{formatCurrency(originalAmount!, currency)}
                            </p>
                        </div>

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
                                        text={`Remove GST Calculation:\nPrice (incl. GST): ${currencySymbol}${formatCurrency(parseFloat(unformatNumber(finalPrice)), currency)}\nOriginal Price (excl. GST): ${currencySymbol}${formatCurrency(originalAmount!, currency)}\n${taxType === 'GST' ? `GST Removed (${rate}%)` : taxType === 'IGST' ? `IGST Removed (${rate}%)` : `CGST (${rate / 2}%) + SGST (${rate / 2}%)`}: ${currencySymbol}${formatCurrency(taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!), currency)}`}
                                    />
                                    <PrintInvoiceButton
                                        amount={originalAmount!}
                                        taxAmount={taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!)}
                                        totalAmount={parseFloat(unformatNumber(finalPrice))}
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
                                    amount={originalAmount!}
                                    taxAmount={taxType === 'GST' ? gstAmount! : taxType === 'IGST' ? igstAmount! : (cgstAmount! + sgstAmount!)}
                                    totalAmount={parseFloat(unformatNumber(finalPrice))}
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
                                    url="https://onecalculator.online/calculators/gst"
                                    title={`Removed ${taxType} from ${currencySymbol}${formatCurrency(parseFloat(unformatNumber(finalPrice)), currency)}, Original: ${currencySymbol}${formatCurrency(originalAmount!, currency)}`}
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
