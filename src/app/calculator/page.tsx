import GSTCalculator from "@/components/GSTCalculator";
import ReverseGSTCalculator from "@/components/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
    title: "GST Calculator Tool India (2025) | Add & Remove GST | IGST/CGST/SGST Breakdown",
    description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool with detailed breakdown. Supports 5%, 12%, 18%, 28% rates.",
    keywords: [
        "easy gst calculator",
        "gstcalc",
        "reverse gst calculator",
        "reverse gst",
        "easy reverse gst",
        "GST calculator tool India",
        "GST calculator India",
        "calculate GST online India",
        "reverse GST calculator India",
        "GST calculation tool",
        "GST rates calculator",
        "reverse GST calculation formula",
        "how to calculate reverse GST",
        "GST calculator 18 percent",
        "custom GST rate calculator",
        "GST inclusive calculator",
        "GST exclusive calculator",
        "GST calculation formula India",
        "free GST calculator tool",
        "online GST calculator India",
        "GST tax calculator",
    ],
    alternates: {
        canonical: "/calculator",
    },
    openGraph: {
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        url: "/calculator",
        siteName: "GST Calculator",
        images: [
            {
                url: "/logo.svg",
                width: 512,
                height: 512,
                alt: "GST Calculator Tool",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        images: ["/logo.svg"],
    },
};



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
