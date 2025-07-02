import GSTCalculator from "@/components/GSTCalculator";
import ReverseGSTCalculator from "@/components/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
    title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
    description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
    keywords: ["GST Calculator Tool", "Reverse GST", "Calculate GST Online", "GST Rates", "reverse gst calculator", "reverse gst calculator india", "reverse gst calculation formula", "reverse calculation of gst", "gst reverse calculation formula", "how to calculate reverse gst", " cleartax reverse gst calculator", "gst calculator", "tax calculator", "gst tax calculator", "online gst calculator", "gst calculator online", "free gst calculator"],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    alternates: {
        canonical: "https://easy-gst-calculator.netlify.app/calculator",
    },
    openGraph: {
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        url: "https://yourdomain.com/calculator",
        siteName: "GST Calculator",
        images: [
            {
                url: "https://easy-gst-calculator.netlify.app/og-calculator.jpg",
                width: 1200,
                height: 630,
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
        images: ["https://yourdomain.com/og-calculator.jpg"],
        creator: "@your_twitter_username",
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
