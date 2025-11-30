'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function CompoundInterestCalculator() {
    const [principal, setPrincipal] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [frequency, setFrequency] = useState<string>('1'); // 1 = Annually
    const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(principal));
        const r = parseFloat(unformatNumber(rate));
        const t = parseFloat(unformatNumber(time));
        const n = parseInt(frequency);

        if (!isNaN(p) && !isNaN(r) && !isNaN(t) && !isNaN(n)) {
            const amount = p * Math.pow((1 + r / (100 * n)), n * t);
            const interest = amount - p;
            setResult({ interest, total: amount });
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Compound Interest Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Principal Amount</label>
                        <Input
                            placeholder="e.g. 10000"
                            value={principal}
                            onChange={(e) => setPrincipal(formatNumberForInput(e.target.value))}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Rate (% per year)</label>
                            <Input
                                placeholder="e.g. 5"
                                value={rate}
                                onChange={(e) => setRate(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Time (years)</label>
                            <Input
                                placeholder="e.g. 5"
                                value={time}
                                onChange={(e) => setTime(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Compounding Frequency</label>
                        <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option value="1">Annually (Once a year)</option>
                            <option value="2">Semi-Annually (Twice a year)</option>
                            <option value="4">Quarterly (4 times a year)</option>
                            <option value="12">Monthly (12 times a year)</option>
                        </select>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                        Calculate Compound Interest
                    </Button>
                </div>

                {result && (
                    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                                <span className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                                    {result.interest.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-purple-200 dark:border-purple-800">
                                <span className="font-medium">Total Amount</span>
                                <span className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                                    {result.total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`Compound Interest Calculation:\nPrincipal: ${principal}\nRate: ${rate}%\nTime: ${time} years\nFrequency: ${frequency === '1' ? 'Annually' : frequency === '2' ? 'Semi-Annually' : frequency === '4' ? 'Quarterly' : 'Monthly'}\nInterest: ${result.interest.toLocaleString('en-IN')}\nTotal Amount: ${result.total.toLocaleString('en-IN')}`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
