'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';
import { Calculator, Calendar, PieChart, TrendingUp } from 'lucide-react';

export default function LoanCalculator() {
    const [amount, setAmount] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [tenure, setTenure] = useState<string>('');
    const [result, setResult] = useState<{
        emi: number;
        totalInterest: number;
        totalPayment: number;
        interestPercentage: number;
        principalPercentage: number;
    } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(amount));
        const r = parseFloat(unformatNumber(rate));
        const t = parseFloat(unformatNumber(tenure));

        if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p > 0 && r > 0 && t > 0) {
            const monthlyRate = r / (12 * 100);
            const months = t * 12;

            const emi = (p * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            const totalPayment = emi * months;
            const totalInterest = totalPayment - p;

            const interestPercentage = (totalInterest / totalPayment) * 100;
            const principalPercentage = (p / totalPayment) * 100;

            setResult({ emi, totalInterest, totalPayment, interestPercentage, principalPercentage });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-purple-500/5" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Loan Calculator</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Calculate monthly repayments and total interest for any loan
                </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Loan Amount
                                <span className="text-blue-600 font-mono text-xs">(Principal)</span>
                            </label>
                            <Input
                                placeholder="e.g. 10,00,000"
                                value={amount}
                                onChange={(e) => setAmount(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Interest Rate (%)
                                <span className="text-blue-600 font-mono text-xs">(Annual)</span>
                            </label>
                            <Input
                                placeholder="e.g. 9.5"
                                value={rate}
                                onChange={(e) => setRate(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Loan Tenure
                                <span className="text-blue-600 font-mono text-xs">(Years)</span>
                            </label>
                            <Input
                                placeholder="e.g. 20"
                                value={tenure}
                                onChange={(e) => setTenure(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <Button
                            onClick={calculate}
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-xl"
                        >
                            Calculate Payoff
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center">
                        {result ? (
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border-2 border-blue-100 dark:border-blue-800 space-y-6 animate-in fade-in slide-in-from-right-4">
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Monthly EMI</p>
                                    <p className="text-4xl font-black text-blue-600 dark:text-blue-400 mt-1">
                                        ₹{Math.round(result.emi).toLocaleString('en-IN')}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-blue-200 dark:border-blue-800">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                                        <span className="font-bold text-gray-900 dark:text-gray-100">
                                            ₹{Math.round(result.totalInterest).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Total Payment</span>
                                        <span className="font-bold text-gray-900 dark:text-gray-100">
                                            ₹{Math.round(result.totalPayment).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="flex h-3 w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                        <div
                                            className="bg-blue-600 h-full"
                                            style={{ width: `${result.principalPercentage}%` }}
                                            title={`Principal: ${result.principalPercentage.toFixed(1)}%`}
                                        />
                                        <div
                                            className="bg-orange-500 h-full"
                                            style={{ width: `${result.interestPercentage}%` }}
                                            title={`Interest: ${result.interestPercentage.toFixed(1)}%`}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-tighter">
                                        <span className="text-blue-600">Principal ({result.principalPercentage.toFixed(0)}%)</span>
                                        <span className="text-orange-500">Interest ({result.interestPercentage.toFixed(0)}%)</span>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <CopyResultButton text={`Loan Calculator Results:\nLoan Amount: ₹${amount}\nInterest Rate: ${rate}%\nTenure: ${tenure} Years\nMonthly EMI: ₹${Math.round(result.emi).toLocaleString('en-IN')}\nTotal Interest: ₹${Math.round(result.totalInterest).toLocaleString('en-IN')}\nTotal Payment: ₹${Math.round(result.totalPayment).toLocaleString('en-IN')}`} />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl opacity-50">
                                <PieChart className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-500">Enter loan details to see your monthly EMI and total interest breakdown.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-indigo-500" />
                        <div>
                            <p className="text-xs text-gray-500">Schedule</p>
                            <p className="text-sm font-semibold">Pre-calculated</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <div>
                            <p className="text-xs text-gray-500">Interest</p>
                            <p className="text-sm font-semibold">Compounded</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Calculator className="w-5 h-5 text-orange-500" />
                        <div>
                            <p className="text-xs text-gray-500">EMI Type</p>
                            <p className="text-sm font-semibold">Standard</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
