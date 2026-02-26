"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function QuickCalculator() {
    const [amount, setAmount] = useState("");
    const [gstRate, setGstRate] = useState(18);
    const [gstAmount, setGstAmount] = useState<number | null>(null);
    const [totalAmount, setTotalAmount] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const handleCalculate = () => {
        const amt = parseFloat(amount);

        if (isNaN(amt) || amt <= 0) {
            setError("Please enter a valid amount greater than zero.");
            setGstAmount(null);
            setTotalAmount(null);
            return;
        }

        setError("");

        const gst = (amt * gstRate) / 100;
        const total = amt + gst;
        setGstAmount(gst);
        setTotalAmount(total);
    };

    return (
        <Card className="w-full overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_24px_70px_-28px_rgba(8,47,73,0.55)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/85">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_60%)]" />
            <CardContent className="relative z-10 p-8">
                <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 p-2.5 shadow-lg shadow-cyan-500/25">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Quick GST Calculator</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Fast estimate in one step</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="amount" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Amount (INR)
                        </label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Enter amount (e.g., 10,000)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleCalculate()}
                            className="rounded-2xl border-slate-200 bg-white/90 py-6 text-lg focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-slate-950/60"
                        />
                        {error && (
                            <p className="mt-2 flex items-center gap-1 text-sm text-red-500">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="gstRate" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                            GST Rate (%)
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {[5, 12, 18, 28].map((rate) => (
                                <button
                                    key={rate}
                                    type="button"
                                    onClick={() => setGstRate(rate)}
                                    className={`rounded-xl px-4 py-3 font-semibold transition-all ${
                                        gstRate === rate
                                            ? "scale-105 bg-gradient-to-r from-cyan-600 to-teal-500 text-white shadow-lg shadow-cyan-700/30"
                                            : "border border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-cyan-600 dark:hover:bg-slate-700"
                                    }`}
                                >
                                    {rate}%
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button
                        onClick={handleCalculate}
                        className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-500 py-6 text-lg font-semibold text-white shadow-xl shadow-cyan-700/30 transition-all hover:from-cyan-700 hover:to-teal-600"
                    >
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Calculate GST
                    </Button>

                    {gstAmount !== null && totalAmount !== null && (
                        <div className="animate-fade-in-up mt-8 space-y-4 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-slate-50 p-6 dark:border-cyan-900/40 dark:from-cyan-950/20 dark:to-slate-900">
                            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-100">Calculation Results</h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
                                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">GST Amount</p>
                                    <p className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">INR {gstAmount.toFixed(2)}</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
                                    <p className="mb-1 text-sm text-slate-600 dark:text-slate-400">Total Amount</p>
                                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">INR {totalAmount.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Base Amount: <span className="font-semibold text-slate-900 dark:text-slate-100">INR {parseFloat(amount).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    GST Rate: <span className="font-semibold text-slate-900 dark:text-slate-100">{gstRate}%</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
