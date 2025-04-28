"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

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
        <Card className="max-w-md w-full p-6 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-center mb-4 border-b pb-2">
                Quick Calculator
            </h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                    </label>
                    <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <div>
                    <label htmlFor="gstRate" className="block text-sm font-medium text-gray-700 mb-1">
                        GST Rate (%)
                    </label>
                    <select
                        id="gstRate"
                        className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        value={gstRate}
                        onChange={(e) => setGstRate(parseFloat(e.target.value))}
                    >
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>
                    </select>
                </div>
                <Button className="w-full mt-2" onClick={handleCalculate}>
                    Calculate
                </Button>

                {/* Result Section */}
                {gstAmount !== null && totalAmount !== null && (
                    <div className="mt-6 space-y-2 text-center">
                        <p className="text-gray-700">
                            <strong>GST Amount:</strong> ₹{gstAmount.toFixed(2)}
                        </p>
                        <p className="text-gray-700">
                            <strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}
                        </p>
                    </div>
                )}
            </div>
        </Card>
    );
}
