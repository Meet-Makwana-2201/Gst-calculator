export const metadata = {
    title: "About Us - GST Calculator Platform",
    description: "Learn more about our mission to provide simple and accurate GST calculations for everyone. Fast, reliable, and easy to use!",
    keywords: ["About GST Calculator", "Our Mission", "Who We Are", "GST Platform", "reverse gst calculator", "reverse gst calculator india", "reverse gst calculation formula", "reverse calculation of gst", "gst reverse calculation formula", "how to calculate reverse gst", " cleartax reverse gst calculator", "gst calculator", "tax calculator", "gst tax calculator", "online gst calculator", "gst calculator online", "free gst calculator"],
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
        canonical: "https://easy-gst-calculator.netlify.app/about",
    },
    openGraph: {
        title: "About Us - GST Calculator Platform",
        description: "Learn more about our mission to provide simple and accurate GST calculations for everyone. Fast, reliable, and easy to use!",
        url: "https://yourdomain.com/about",
        siteName: "GST Calculator",
        images: [
            {
                url: "https://yourdomain.com/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "About GST Calculator",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - GST Calculator Platform",
        description: "Learn more about our mission to provide simple and accurate GST calculations for everyone. Fast, reliable, and easy to use!",
        images: ["https://yourdomain.com/og-about.jpg"],
        creator: "@your_twitter_username",
    },
};



export default function About() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="flex-1 container mx-auto px-4 py-8 space-y-6">
                <h1 className="text-3xl font-bold">About GSTCalc</h1>
                <p>GSTCalc helps you quickly calculate GST and Reverse GST amounts based on customizable rates.</p>
                <p>This is a basic tool for quick calculation. Please verify final figures with official methods for critical uses.</p>
                <p>That is very helpful to people who need to calculate GST and Reverse GST amounts.</p>
            </section>
        </main>
    )
}
