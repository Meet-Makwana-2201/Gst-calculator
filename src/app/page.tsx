import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Simple GST Calculations
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Calculate GST amounts instantly with our easy-to-use calculator. No sign-up required.
          </p>
          <Link href="/calculator">
            <Button variant="default" size="lg" className="mt-4">
              Get Started →
            </Button>
          </Link>
        </div>

        {/* Calculator Preview Card */}
        <Card className="max-w-md w-full p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-center mb-4 border-b pb-2">
            Quick Calculator
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            <div>
              <label htmlFor="gstRate" className="block text-sm font-medium text-gray-700 mb-1">
                GST Rate (%)
              </label>
              <select
                id="gstRate"
                className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="18"
              >
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
            <Button className="w-full mt-2">Calculate</Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
