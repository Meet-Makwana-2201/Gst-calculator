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

        // Check if the amount is valid (non-empty and positive)
        if (isNaN(amt) || amt <= 0) {
            setError("Please enter a valid amount greater than zero.");
            setGstAmount(null);
            setTotalAmount(null);
            return;
        }

        setError(""); // Reset error message if valid amount is entered

        const gst = (amt * gstRate) / 100;
        const total = amt + gst;
        setGstAmount(gst);
        setTotalAmount(total);
    };

    return (
        <Card className="w-full backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-white/50 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden hover-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Calculator</h2>
                </div>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Amount (₹)
                        </label>
                        <Input
                            id="amount"
                            type="number"
                            placeholder="Enter amount (e.g., 10,000)"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                            className="text-lg py-6 border-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 rounded-xl transition-all"
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </p>
                        )}
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="gstRate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                            GST Rate (%)
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {[5, 12, 18, 28].map((rate) => (
                                <button
                                    key={rate}
                                    type="button"
                                    onClick={() => setGstRate(rate)}
                                    className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                                        gstRate === rate
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-700'
                                    }`}
                                >
                                    {rate}%
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <Button 
                        onClick={handleCalculate}
                        className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all hover-lift rounded-xl"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Calculate GST
                    </Button>

                    {/* Result Section */}
                    {gstAmount !== null && totalAmount !== null && (
                        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 animate-fade-in-up space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Calculation Results</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">GST Amount</p>
                                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                        ₹{gstAmount.toFixed(2)}
                                    </p>
                                </div>
                                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Amount</p>
                                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                        ₹{totalAmount.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-indigo-200 dark:border-indigo-800">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Base Amount: <span className="font-semibold text-gray-900 dark:text-gray-100">₹{parseFloat(amount).toFixed(2)}</span>
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    GST Rate: <span className="font-semibold text-gray-900 dark:text-gray-100">{gstRate}%</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
