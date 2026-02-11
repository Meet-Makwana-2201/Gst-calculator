'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';
import { Coins, TrendingUp, PiggyBank, BarChart } from 'lucide-react';

export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [tenure, setTenure] = useState<string>('');
    const [result, setResult] = useState<{
        totalValue: number;
        investedAmount: number;
        estReturns: number;
    } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(monthlyInvestment));
        const r = parseFloat(unformatNumber(rate));
        const t = parseFloat(unformatNumber(tenure));

        if (!isNaN(p) && !isNaN(r) && !isNaN(t) && p > 0 && r > 0 && t > 0) {
            const monthlyRate = r / (12 * 100);
            const months = t * 12;

            // SIP Formula: FV = P × ({[1 + r]^n – 1} / r) × (1 + r)
            const totalValue = p * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            const investedAmount = p * months;
            const estReturns = totalValue - investedAmount;

            setResult({ totalValue, investedAmount, estReturns });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                        <Coins className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">SIP Calculator</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Forecast your wealth growth through systematic monthly investments
                </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Monthly Investment
                                <span className="text-purple-600 font-mono text-xs">(Amount)</span>
                            </label>
                            <Input
                                placeholder="e.g. 5,000"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Expected Return Rate (%)
                                <span className="text-purple-600 font-mono text-xs">(Annual)</span>
                            </label>
                            <Input
                                placeholder="e.g. 12"
                                value={rate}
                                onChange={(e) => setRate(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Time Period
                                <span className="text-purple-600 font-mono text-xs">(Years)</span>
                            </label>
                            <Input
                                placeholder="e.g. 10"
                                value={tenure}
                                onChange={(e) => setTenure(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <Button
                            onClick={calculate}
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-xl"
                        >
                            Calculate Wealth
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center">
                        {result ? (
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl border-2 border-purple-100 dark:border-purple-800 space-y-6 animate-in fade-in slide-in-from-right-4">
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Future Value</p>
                                    <p className="text-4xl font-black text-purple-600 dark:text-purple-400 mt-1">
                                        ₹{Math.round(result.totalValue).toLocaleString('en-IN')}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-purple-200 dark:border-purple-800">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Total Invested</span>
                                        <span className="font-bold text-gray-900 dark:text-gray-100">
                                            ₹{Math.round(result.investedAmount).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Wealth Gained</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">
                                            + ₹{Math.round(result.estReturns).toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <CopyResultButton text={`SIP Calculation Results:\nMonthly Investment: ₹${monthlyInvestment}\nExpected Rate: ${rate}%\nPeriod: ${tenure} Years\nInvested Amount: ₹${Math.round(result.investedAmount).toLocaleString('en-IN')}\nWealth Gained: ₹${Math.round(result.estReturns).toLocaleString('en-IN')}\nTotal Future Value: ₹${Math.round(result.totalValue).toLocaleString('en-IN')}`} />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl opacity-50">
                                <BarChart className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-500">Enter your investment details to see how your money compounds over time.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <div>
                            <p className="text-xs text-gray-500">Growth</p>
                            <p className="text-sm font-semibold">Exponential</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <PiggyBank className="w-5 h-5 text-purple-500" />
                        <div>
                            <p className="text-xs text-gray-500">Saving</p>
                            <p className="text-sm font-semibold">Disciplined</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Coins className="w-5 h-5 text-indigo-500" />
                        <div>
                            <p className="text-xs text-gray-500">Compounding</p>
                            <p className="text-sm font-semibold">Monthly</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
