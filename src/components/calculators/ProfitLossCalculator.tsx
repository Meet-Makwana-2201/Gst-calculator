'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function ProfitLossCalculator() {
    const [costPrice, setCostPrice] = useState<string>('');
    const [sellingPrice, setSellingPrice] = useState<string>('');
    const [result, setResult] = useState<{ amount: number; percentage: number; type: 'profit' | 'loss' | 'no-profit-no-loss' } | null>(null);

    const calculate = () => {
        const cp = parseFloat(unformatNumber(costPrice));
        const sp = parseFloat(unformatNumber(sellingPrice));

        if (!isNaN(cp) && !isNaN(sp)) {
            const diff = sp - cp;
            const percentage = (Math.abs(diff) / cp) * 100;

            let type: 'profit' | 'loss' | 'no-profit-no-loss' = 'no-profit-no-loss';
            if (diff > 0) type = 'profit';
            if (diff < 0) type = 'loss';

            setResult({ amount: Math.abs(diff), percentage, type });
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Profit & Loss Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Cost Price (CP)</label>
                            <Input
                                placeholder="e.g. 1000"
                                value={costPrice}
                                onChange={(e) => setCostPrice(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Selling Price (SP)</label>
                            <Input
                                placeholder="e.g. 1200"
                                value={sellingPrice}
                                onChange={(e) => setSellingPrice(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                        Calculate
                    </Button>
                </div>

                {result && (
                    <div className={`p-6 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4 ${result.type === 'profit' ? 'bg-green-50 dark:bg-green-900/20' :
                            result.type === 'loss' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-gray-50 dark:bg-gray-800'
                        }`}>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Result Type</span>
                                <span className={`text-xl font-bold uppercase ${result.type === 'profit' ? 'text-green-600' :
                                        result.type === 'loss' ? 'text-red-600' : 'text-gray-600'
                                    }`}>
                                    {result.type.replace(/-/g, ' ')}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Amount</span>
                                <span className="text-xl font-semibold">
                                    {result.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                                <span className="font-medium">Percentage</span>
                                <span className="text-2xl font-bold">
                                    {result.percentage.toLocaleString('en-IN', { maximumFractionDigits: 2 })}%
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`Profit & Loss Calculation:\nCost Price: ${costPrice}\nSelling Price: ${sellingPrice}\nResult: ${result.type.toUpperCase()}\nAmount: ${result.amount.toLocaleString('en-IN')}\nPercentage: ${result.percentage.toFixed(2)}%`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
