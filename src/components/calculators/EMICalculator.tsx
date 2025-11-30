'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function EMICalculator() {
    const [amount, setAmount] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [tenure, setTenure] = useState<string>('');
    const [result, setResult] = useState<{ emi: number; totalInterest: number; totalPayment: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(amount));
        const r = parseFloat(unformatNumber(rate));
        const t = parseFloat(unformatNumber(tenure)); // Tenure in years

        if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
            const monthlyRate = r / (12 * 100);
            const months = t * 12;

            const emi = (p * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            const totalPayment = emi * months;
            const totalInterest = totalPayment - p;

            setResult({ emi, totalInterest, totalPayment });
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    EMI Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Loan Amount</label>
                        <Input
                            placeholder="e.g. 500000"
                            value={amount}
                            onChange={(e) => setAmount(formatNumberForInput(e.target.value))}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Interest Rate (%)</label>
                            <Input
                                placeholder="e.g. 8.5"
                                value={rate}
                                onChange={(e) => setRate(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Tenure (Years)</label>
                            <Input
                                placeholder="e.g. 5"
                                value={tenure}
                                onChange={(e) => setTenure(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white">
                        Calculate EMI
                    </Button>
                </div>

                {result && (
                    <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Monthly EMI</span>
                                <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                                    {result.emi.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-pink-200 dark:border-pink-800">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Total Interest</span>
                                <span className="font-semibold text-pink-700 dark:text-pink-300">
                                    {result.totalInterest.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Total Payment</span>
                                <span className="font-semibold text-pink-700 dark:text-pink-300">
                                    {result.totalPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`EMI Calculation:\nLoan Amount: ${amount}\nRate: ${rate}%\nTenure: ${tenure} years\nMonthly EMI: ${result.emi.toLocaleString('en-IN')}\nTotal Interest: ${result.totalInterest.toLocaleString('en-IN')}\nTotal Payment: ${result.totalPayment.toLocaleString('en-IN')}`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
