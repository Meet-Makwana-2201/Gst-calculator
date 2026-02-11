'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';
import { ShoppingCart, Package, Truck, Percent, TrendingUp } from 'lucide-react';

export default function AmazonProfitCalculator() {
    const [price, setPrice] = useState<string>('');
    const [cost, setCost] = useState<string>('');
    const [referral, setReferral] = useState<string>('');
    const [shipping, setShipping] = useState<string>('');
    const [others, setOthers] = useState<string>('');
    const [result, setResult] = useState<{
        totalFees: number;
        profit: number;
        margin: number;
    } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(price));
        const c = parseFloat(unformatNumber(cost));
        const r = parseFloat(unformatNumber(referral));
        const s = parseFloat(unformatNumber(shipping)) || 0;
        const o = parseFloat(unformatNumber(others)) || 0;

        if (!isNaN(p) && !isNaN(c) && !isNaN(r)) {
            const referralFee = (r / 100) * p;
            const totalFees = referralFee + s + o;
            const profit = p - c - totalFees;
            const margin = (profit / p) * 100;

            setResult({ totalFees, profit, margin });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-red-500/5" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 shadow-lg">
                        <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Amazon Seller Profit</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Estimate your net profit after Amazon referral and fulfillment fees
                </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Selling Price
                                <span className="text-orange-600 font-mono text-xs">(On Amazon)</span>
                            </label>
                            <Input
                                placeholder="e.g. 1999"
                                value={price}
                                onChange={(e) => setPrice(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Product Cost
                                <span className="text-orange-600 font-mono text-xs">(Landing Cost)</span>
                            </label>
                            <Input
                                placeholder="e.g. 800"
                                value={cost}
                                onChange={(e) => setCost(formatNumberForInput(e.target.value))}
                                className="text-lg"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Referral Fee (%)</label>
                                <Input
                                    placeholder="e.g. 15"
                                    value={referral}
                                    onChange={(e) => setReferral(formatNumberForInput(e.target.value))}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Shipping Fee</label>
                                <Input
                                    placeholder="e.g. 60"
                                    value={shipping}
                                    onChange={(e) => setShipping(formatNumberForInput(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Other Expenses (Ads, Packaging)</label>
                            <Input
                                placeholder="e.g. 100"
                                value={others}
                                onChange={(e) => setOthers(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <Button
                            onClick={calculate}
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 rounded-xl"
                        >
                            Analyze Profit
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center">
                        {result ? (
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border-2 border-orange-100 dark:border-orange-800 space-y-6 animate-in fade-in slide-in-from-right-4">
                                <div className="text-center">
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Net Profit per Unit</p>
                                    <p className="text-4xl font-black text-orange-600 dark:text-orange-400 mt-1">
                                        ₹{result.profit.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-orange-200 dark:border-orange-800">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Total Amazon Fees</span>
                                        <span className="font-bold text-red-600 dark:text-red-400">
                                            ₹{result.totalFees.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Net Margin (%)</span>
                                        <span className={`font-bold ${result.margin > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {result.margin.toFixed(2)}%
                                        </span>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <CopyResultButton text={`Amazon Seller Profit Results:\nPrice: ₹${price}\nLanding Cost: ₹${cost}\nTotal Fees: ₹${result.totalFees.toFixed(2)}\nNet Profit: ₹${result.profit.toFixed(2)}\nNet Margin: ${result.margin.toFixed(2)}%`} />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl opacity-50">
                                <TrendingUp className="w-12 h-12 text-gray-400 mb-4" />
                                <p className="text-gray-500">Calculate your marketplace profitability by factoring in all seller fees and landing costs.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Package className="w-5 h-5 text-orange-500" />
                        <div>
                            <p className="text-xs text-gray-500">Fees</p>
                            <p className="text-sm font-semibold">Referral Incl.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Truck className="w-5 h-5 text-red-500" />
                        <div>
                            <p className="text-xs text-gray-500">Shipping</p>
                            <p className="text-sm font-semibold">FBA/Self</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center gap-3">
                        <Percent className="w-5 h-5 text-yellow-500" />
                        <div>
                            <p className="text-xs text-gray-500">Growth</p>
                            <p className="text-sm font-semibold">Margin Focus</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
