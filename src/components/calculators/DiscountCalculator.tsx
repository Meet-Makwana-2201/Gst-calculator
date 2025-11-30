'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function DiscountCalculator() {
    const [price, setPrice] = useState<string>('');
    const [discount, setDiscount] = useState<string>('');
    const [result, setResult] = useState<{ finalPrice: number; savings: number } | null>(null);

    const calculate = () => {
        const numPrice = parseFloat(unformatNumber(price));
        const numDiscount = parseFloat(unformatNumber(discount));

        if (!isNaN(numPrice) && !isNaN(numDiscount)) {
            const savings = (numPrice * numDiscount) / 100;
            const finalPrice = numPrice - savings;
            setResult({ finalPrice, savings });
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Discount Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Original Price</label>
                            <Input
                                placeholder="e.g. 5000"
                                value={price}
                                onChange={(e) => setPrice(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Discount (%)</label>
                            <Input
                                placeholder="e.g. 20"
                                value={discount}
                                onChange={(e) => setDiscount(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                        Calculate Discount
                    </Button>
                </div>

                {result && (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">You Save</span>
                                <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                                    {result.savings.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-green-200 dark:border-green-800">
                                <span className="font-medium">Final Price</span>
                                <span className="text-2xl font-bold text-green-700 dark:text-green-300">
                                    {result.finalPrice.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`Discount Calculation:\nOriginal Price: ${price}\nDiscount: ${discount}%\nFinal Price: ${result.finalPrice.toLocaleString('en-IN')}\nYou Save: ${result.savings.toLocaleString('en-IN')}`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
