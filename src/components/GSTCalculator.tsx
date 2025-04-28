'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function GSTCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(18);
  const [gstAmount, setGstAmount] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const calculateGST = () => {
    const gst = (amount * rate) / 100;
    const total = amount + gst;
    setGstAmount(gst);
    setTotalAmount(total);
  };

  return (
    <Card className="p-6 space-y-6">
      <h2 className="text-xl font-bold">GST Calculator</h2>
      <div className="space-y-4">
        <Input
          type="number"
          placeholder="Enter amount"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Enter GST rate (e.g., 18)"
          defaultValue={18}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <Button onClick={calculateGST}>Calculate</Button>
      </div>

      {gstAmount !== null && totalAmount !== null && (
        <div className="mt-6 space-y-2">
          <p><strong>GST Amount:</strong> ₹{gstAmount.toFixed(2)}</p>
          <p><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>
        </div>
      )}
    </Card>
  );
}
