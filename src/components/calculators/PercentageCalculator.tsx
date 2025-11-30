'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';

export default function PercentageCalculator() {
    const [value, setValue] = useState<string>('');
    const [percentage, setPercentage] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        const numValue = parseFloat(unformatNumber(value));
        const numPercentage = parseFloat(unformatNumber(percentage));

        if (!isNaN(numValue) && !isNaN(numPercentage)) {
            setResult((numValue * numPercentage) / 100);
        }
    };

    return (
        <Card className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Percentage Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Value</label>
                            <Input
                                placeholder="e.g. 1000"
                                value={value}
                                onChange={(e) => setValue(formatNumberForInput(e.target.value))}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Percentage (%)</label>
                            <Input
                                placeholder="e.g. 18"
                                value={percentage}
                                onChange={(e) => setPercentage(formatNumberForInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <Button onClick={calculate} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                        Calculate
                    </Button>
                </div>

                {result !== null && (
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 dark:text-gray-400">Result</span>
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                {result.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="flex justify-end">
                            <CopyResultButton text={`Percentage Calculation:\n${percentage}% of ${value} = ${result.toLocaleString('en-IN')}`} />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
