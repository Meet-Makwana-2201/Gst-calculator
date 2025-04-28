import GSTCalculator from "@/components/GSTCalculator";
import ReverseGSTCalculator from "@/components/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CalculatorPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="flex-1 container mx-auto px-4 py-8">
                <Tabs defaultValue="gst" className="w-full">
                    <TabsList className="mb-6">
                        <TabsTrigger value="gst">GST Calculator</TabsTrigger>
                        <TabsTrigger value="reverse-gst">Reverse GST Calculator</TabsTrigger>
                    </TabsList>
                    <TabsContent value="gst">
                        <GSTCalculator />
                    </TabsContent>
                    <TabsContent value="reverse-gst">
                        <ReverseGSTCalculator />
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    );
}
