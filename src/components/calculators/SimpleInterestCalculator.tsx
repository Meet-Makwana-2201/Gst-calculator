'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function SimpleInterestCalculator() {
    const [principal, setPrincipal] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [result, setResult] = useState<{ interest: number; total: number } | null>(null);

    const calculate = () => {
        const p = parseFloat(unformatNumber(principal));
        const r = parseFloat(unformatNumber(rate));
        const t = parseFloat(unformatNumber(time));

        if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
            const interest = (p * r * t) / 100;
            const total = p + interest;
            setResult({ interest, total });
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Simple Interest Calculator
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
                                placeholder="e.g. 2"
                                value={time}
                                onChange={(e) => setTime(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white">
                        Calculate Interest
                    </Button>
                </div>

                {result && (
                    <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                                <span className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                                    {result.interest.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-teal-200 dark:border-teal-800">
                                <span className="font-medium">Total Amount</span>
                                <span className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                                    {result.total.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`Simple Interest Calculation:\nPrincipal: ${principal}\nRate: ${rate}%\nTime: ${time} years\nInterest: ${result.interest.toLocaleString('en-IN')}\nTotal Amount: ${result.total.toLocaleString('en-IN')}`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
