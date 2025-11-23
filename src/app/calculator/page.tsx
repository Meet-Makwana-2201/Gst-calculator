import GSTCalculator from "@/components/GSTCalculator";
import ReverseGSTCalculator from "@/components/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "GST Calculator Tool India (2025) | Add & Remove GST | IGST/CGST/SGST Breakdown",
    description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool with detailed breakdown. Supports 5%, 12%, 18%, 28% rates.",
    keywords: [
        "easy gst calculator",
        "gstcalc",
        "reverse gst calculator",
        "reverse gst",
        "easy reverse gst",
        "calculate GST amount online",
        "GST calculator",
        "GST calculation online India",
        "online GST calculator",
        "GST tax calculator",
        "free GST calculator",
        "GST calculator 18 percent",
        "GST amount calculator",
        "India GST calculator",
        "reverse GST calculator India",
        "GST calculation formula",
        "GST rate calculator",
        "GST inclusive calculator",
        "GST exclusive calculator",
        "how to calculate GST",
        "GST percentage calculator",
        "instant GST calculation",
        "GST calculator for business",
        "gst calculator india online",
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "GST Calculator Tool",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "featureList": "GST Calculation, Reverse GST, IGST/CGST/SGST Breakdown"
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <Tabs defaultValue="gst" className="w-full">
                    <TabsList className="mb-6 grid w-full grid-cols-2">
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
