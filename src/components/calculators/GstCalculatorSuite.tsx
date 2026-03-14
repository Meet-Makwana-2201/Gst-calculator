"use client";

import GSTCalculator from "@/components/gst/GSTCalculator";
import RemoveGSTCalculator from "@/components/gst/RemoveGSTCalculator";
import ReverseGSTCalculator from "@/components/gst/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GstCalculatorSuite() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      <Tabs defaultValue="gst" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="gst">GST Calculator</TabsTrigger>
          <TabsTrigger value="reverse-gst">Reverse GST</TabsTrigger>
          <TabsTrigger value="remove-gst">Remove GST</TabsTrigger>
        </TabsList>
        <TabsContent value="gst">
          <GSTCalculator />
        </TabsContent>
        <TabsContent value="reverse-gst">
          <ReverseGSTCalculator />
        </TabsContent>
        <TabsContent value="remove-gst">
          <RemoveGSTCalculator />
        </TabsContent>
      </Tabs>
    </section>
  );
}
