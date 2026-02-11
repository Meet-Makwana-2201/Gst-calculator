'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';
import { Percent, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

export default function MarginCalculator() {
    const [cost, setCost] = useState<string>('');
    const [margin, setMargin] = useState<string>('');
    const [result, setResult] = useState<{
        sellingPrice: number;
        profit: number;
        markup: number;
    } | null>(null);

    const calculate = () => {
        const c = parseFloat(unformatNumber(cost));
        const m = parseFloat(unformatNumber(margin));

        if (!isNaN(c) && !isNaN(m) && m < 100) {
            // Margin = (Profit / Selling Price) * 100
            // m/100 = (SP - c) / SP
            // m*SP / 100 = SP - c
            // c = SP - (m*SP / 100)
            // c = SP * (1 - m/100)
            // SP = c / (1 - m/100)

            const sp = c / (1 - m / 100);
            const profit = sp - c;
            const markup = (profit / c) * 100;

            setResult({ sellingPrice: sp, profit, markup });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg">
                        <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Margin Calculator</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Calculate selling price and profit based on your desired margin
                </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Cost Price
                                <span className="text-emerald-600 font-mono text-xs">(How much you paid)</span>
                            </label>
                            <Input
                                placeholder="e.g. 500"
                                value={cost}
                                onChange={(e) => setCost(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Desired Margin (%)
                                <span className="text-emerald-600 font-mono text-xs">(On Selling Price)</span>
                            </label>
                            <Input
                                placeholder="e.g. 25"
                                value={margin}
                                onChange={(e) => setMargin(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <Button
                            onClick={calculate}
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-xl"
                        >
                            Calculate Price
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center">
                        {result ? (
                            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border-2 border-emerald-100 dark:border-emerald-800 space-y-6 animate-in fade-in slide-in-from-right-4">
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Selling Price</p>
                                    <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                                        ₹{result.sellingPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-emerald-200 dark:border-emerald-800">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Gross Profit</span>
                                        <span className="font-bold text-gray-900 dark:text-gray-100">
                                            ₹{result.profit.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Markup Percentage</span>
                                        <span className="font-bold text-teal-600 dark:text-teal-400">
                                            {result.markup.toFixed(2)}%
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <CopyResultButton text={`Margin Calculation:\nCost Price: ₹${cost}\nMargin: ${margin}%\nSelling Price: ₹${result.sellingPrice.toFixed(2)}\nGross Profit: ₹${result.profit.toFixed(2)}\nMarkup: ${result.markup.toFixed(2)}%`} />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl opacity-50">
                                <TrendingUp className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-500">Enter cost and margin to see your ideal selling price and profit breakdown.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Percent className="w-5 h-5 text-emerald-500" />
                        <div>
                            <p className="text-xs text-gray-500">Margin</p>
                            <p className="text-sm font-semibold">On Revenue</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-teal-500" />
                        <div>
                            <p className="text-xs text-gray-500">Markup</p>
                            <p className="text-sm font-semibold">On Cost</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-cyan-500" />
                        <div>
                            <p className="text-xs text-gray-500">Profit</p>
                            <p className="text-sm font-semibold">Net Gain</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
