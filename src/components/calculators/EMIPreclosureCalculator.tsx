'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { formatNumberForInput, unformatNumber } from '@/lib/utils';
import CopyResultButton from '../CopyResultButton';
import { ShieldCheck, TrendingDown, Clock, Info } from 'lucide-react';

export default function EMIPreclosureCalculator() {
    const [amount, setAmount] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [tenure, setTenure] = useState<string>('');
    const [preclosure, setPreclosure] = useState<string>('');
    const [isRecurring, setIsRecurring] = useState<boolean>(false);
    const [result, setResult] = useState<{
        originalEMI: number;
        originalTotalInterest: number;
        newTotalInterest: number;
        interestSaved: number;
        monthsReduced: number;
        newTenureMonths: number;
    } | null>(null);

    const calculate = () => {
        const pInput = parseFloat(unformatNumber(amount));
        const rInput = parseFloat(unformatNumber(rate));
        const tYears = parseFloat(unformatNumber(tenure));
        const preAmnt = parseFloat(unformatNumber(preclosure)) || 0;

        if (!isNaN(pInput) && !isNaN(rInput) && !isNaN(tYears) && pInput > 0) {
            const rMonthly = rInput / (12 * 100);
            const nMonths = tYears * 12;

            // Original EMI
            const emi = (pInput * rMonthly * Math.pow(1 + rMonthly, nMonths)) / (Math.pow(1 + rMonthly, nMonths) - 1);
            const originalTotalPayment = emi * nMonths;
            const originalTotalInterest = originalTotalPayment - pInput;

            // Simulation for Preclosure
            let currentPrincipal = pInput;
            let totalInterestPaid = 0;
            let monthCount = 0;

            while (currentPrincipal > 0 && monthCount < 1000) { // Safety break at 1000 months
                monthCount++;
                const interestForMonth = currentPrincipal * rMonthly;
                totalInterestPaid += interestForMonth;

                let principalRepayment = emi - interestForMonth;

                // Add preclosure (assume it happens at the end of the first month or every month)
                if (isRecurring) {
                    principalRepayment += preAmnt;
                } else if (monthCount === 1) {
                    principalRepayment += preAmnt;
                }

                currentPrincipal -= principalRepayment;

                if (currentPrincipal < 0) {
                    // Adjust if overpaid in last month
                    // currentPrincipal is negative now, so subtracting it adds it back to the loop logic
                    currentPrincipal = 0;
                }
            }

            const interestSaved = originalTotalInterest - totalInterestPaid;
            const monthsReduced = nMonths - monthCount;

            setResult({
                originalEMI: emi,
                originalTotalInterest,
                newTotalInterest: totalInterestPaid,
                interestSaved,
                monthsReduced,
                newTenureMonths: monthCount
            });
        }
    };

    return (
        <Card className="w-full max-w-3xl mx-auto backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-teal-500/5" />
            <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Debt Eraser (Preclosure)</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    See how much interest you save by making extra payments towards your loan principal
                </p>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Loan Details</h3>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Outstanding Principal</label>
                                <Input
                                    placeholder="e.g. 25,00,000"
                                    value={amount}
                                    onChange={(e) => setAmount(formatNumberForInput(e.target.value))}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Rate (%)</label>
                                    <Input
                                        placeholder="8.5"
                                        value={rate}
                                        onChange={(e) => setRate(formatNumberForInput(e.target.value))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Tenure (Yrs)</label>
                                    <Input
                                        placeholder="20"
                                        value={tenure}
                                        onChange={(e) => setTenure(formatNumberForInput(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl space-y-4 border border-blue-100 dark:border-blue-900/30">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500">Preclosure Plan</h3>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Extra Payment Amount</label>
                                <Input
                                    placeholder="e.g. 5,000"
                                    value={preclosure}
                                    onChange={(e) => setPreclosure(formatNumberForInput(e.target.value))}
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsRecurring(false)}
                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${!isRecurring ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 border dark:border-gray-700'}`}
                                >
                                    One-time
                                </button>
                                <button
                                    onClick={() => setIsRecurring(true)}
                                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${isRecurring ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 border dark:border-gray-700'}`}
                                >
                                    Monthly Extra
                                </button>
                            </div>
                        </div>

                        <Button
                            onClick={calculate}
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white shadow-xl rounded-xl"
                        >
                            Calculate Savings
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center">
                        {result ? (
                            <div className="p-6 bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900/50 rounded-2xl space-y-6 shadow-lg animate-in fade-in zoom-in-95">
                                <div className="text-center space-y-1">
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter">Interest You Save</p>
                                    <p className="text-4xl font-black text-green-600 dark:text-green-400">
                                        ₹{Math.round(result.interestSaved).toLocaleString('en-IN')}
                                    </p>
                                    <p className="text-xs text-gray-500">That&apos;s money kept in your pocket!</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">Tenure Reduced</p>
                                        <p className="text-xl font-bold">{Math.floor(result.monthsReduced / 12)}y {result.monthsReduced % 12}m</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center">
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">New Tenure</p>
                                        <p className="text-xl font-bold">{Math.floor(result.newTenureMonths / 12)}y {result.newTenureMonths % 12}m</p>
                                    </div>
                                </div>

                                <div className="space-y-2 text-sm pt-4 border-t dark:border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400">Monthly EMI</span>
                                        <span className="font-bold">₹{Math.round(result.originalEMI).toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-blue-600 font-medium">
                                        <span>EMI remains the same, tenure reduces!</span>
                                    </div>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <CopyResultButton text={`EMI Preclosure Results:\nOriginal Interest: ₹${Math.round(result.originalTotalInterest).toLocaleString('en-IN')}\nNew Interest: ₹${Math.round(result.newTotalInterest).toLocaleString('en-IN')}\nTotal Interest Saved: ₹${Math.round(result.interestSaved).toLocaleString('en-IN')}\nTenure Reduced: ${Math.floor(result.monthsReduced / 12)}y ${result.monthsReduced % 12}m`} />
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl opacity-50 bg-gray-50/50 dark:bg-black/20">
                                <TrendingDown className="w-12 h-12 text-blue-400 mb-4" />
                                <p className="text-gray-500 text-sm">Find out how much sooner you can be debt-free by making small extra payments.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                    <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed italic">
                        <strong>Pro Tip:</strong> Banks usually charge no penalty for part-prepayment on floating rate home loans. Even a ₹5,000 monthly extra payment on a 25-year loan can save you lakhs in interest and reduce your tenure by several years.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
