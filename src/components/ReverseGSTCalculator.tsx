'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ReverseGSTCalculator() {
  const [total, setTotal] = useState<number>(0);
  const [rate, setRate] = useState<number>(18);
  const [originalAmount, setOriginalAmount] = useState<number | null>(null);
  const [gstAmount, setGstAmount] = useState<number | null>(null);

  const calculateReverseGST = () => {
    const base = total / (1 + rate / 100);
    const gst = total - base;
    setOriginalAmount(base);
    setGstAmount(gst);
  };

  return (
    <Card className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Reverse GST Calculator</h2>
      <div className="space-y-4">
        <Input
          type="number"
          placeholder="Enter total amount"
          onChange={(e) => setTotal(parseFloat(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Enter GST rate (e.g., 18)"
          defaultValue={18}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <Button onClick={calculateReverseGST}>Calculate</Button>
      </div>

      {originalAmount !== null && gstAmount !== null && (
        <div className="mt-6 space-y-2">
          <p><strong>Original Price:</strong> ₹{originalAmount.toFixed(2)}</p>
          <p><strong>GST Amount:</strong> ₹{gstAmount.toFixed(2)}</p>
        </div>
      )}
    </Card>
  );
}
