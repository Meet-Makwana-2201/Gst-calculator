"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const rates = [5, 12, 18, 28];

export default function QuickCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState(18);
  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const value = Number.parseFloat(amount);

    if (!Number.isFinite(value) || value <= 0) {
      setError("Enter a valid amount above zero.");
      setGstAmount(null);
      setTotalAmount(null);
      return;
    }

    const gst = (value * gstRate) / 100;
    setError("");
    setGstAmount(gst);
    setTotalAmount(value + gst);
  };

  return (
    <Card className="relative overflow-hidden rounded-[2rem]">
      <div className="absolute inset-x-0 top-0 h-28 brand-gradient opacity-90" />
      <div className="absolute inset-x-6 top-24 h-px bg-white/50" />
      <CardContent className="relative z-10 p-0">
        <div className="px-7 pb-7 pt-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Quick estimate
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">GST in one clean view</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                Enter a base amount, choose the slab, and get tax plus final total instantly.
              </p>
            </div>
            <div className="animate-pulse-glow rounded-2xl bg-white/15 p-3 backdrop-blur-md">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-7 pb-7 pt-6">
          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Base amount
              </label>
              <Input
                id="amount"
                type="number"
                placeholder="Example: 10000"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleCalculate();
                  }
                }}
                className="h-14 text-lg"
              />
              {error ? <p className="text-sm font-medium text-rose-600 dark:text-rose-400">{error}</p> : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">GST slab</label>
              <div className="grid grid-cols-2 gap-2">
                {rates.map((rate) => {
                  const selected = rate === gstRate;

                  return (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setGstRate(rate)}
                      className={`rounded-2xl px-3 py-3 text-sm font-bold transition ${
                        selected
                          ? "brand-gradient text-white shadow-[0_18px_32px_-20px_rgba(8,145,178,0.65)]"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                      }`}
                    >
                      {rate}%
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <Button onClick={handleCalculate} size="lg" className="w-full">
            Calculate now
          </Button>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Rate
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                {gstRate}%
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                GST amount
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">
                {gstAmount !== null ? `INR ${gstAmount.toFixed(2)}` : "--"}
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-4 text-white dark:border-slate-700 dark:bg-teal-500 dark:text-slate-950">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65 dark:text-slate-900/65">
                Total
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight">
                {totalAmount !== null ? `INR ${totalAmount.toFixed(2)}` : "--"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
