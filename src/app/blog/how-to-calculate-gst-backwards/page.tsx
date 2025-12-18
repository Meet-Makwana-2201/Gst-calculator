import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata = {
    title: "How to Calculate GST Backwards: Reverse Calculation Formula",
    description: "Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price and tax amount from the MRP.",
    keywords: [
        "reverse gst calculation formula",
        "how to calculate gst backwards",
        "calculate base amount from total",
        "reverse tax calculator India",
        "remove gst from total amount",
        "gst calculation on mrp",
    ],
    alternates: {
        canonical: "https://onecalculator.online/blog/how-to-calculate-gst-backwards",
    },
    openGraph: {
        title: "How to Calculate GST Backwards: Reverse Calculation Formula",
        description: "Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price and tax amount from the MRP.",
        url: "/blog/how-to-calculate-gst-backwards",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-reverse-gst.png",
                width: 1200,
                height: 630,
                alt: "Reverse GST Calculation",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Calculate GST Backwards: Reverse Calculation Formula",
        description: "Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price and tax amount from the MRP.",
        images: ["/blog-reverse-gst.png"],
    },
};

const toc = [
    { id: 'why-reverse', title: 'Why do you need Reverse Calculation?', level: 2 as const },
    { id: 'formula', title: 'The Formula', level: 2 as const },
    { id: 'example', title: 'Example Calculation', level: 2 as const },
    { id: 'calculator', title: 'Using Our Calculator', level: 2 as const },
];

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How to Calculate GST Backwards: Reverse Calculation Formula",
        "description": "Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price and tax amount from the MRP.",
        "datePublished": "2025-01-28",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://onecalculator.online/blog-reverse-gst.png"
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <BlogPostWrapper
                slug="how-to-calculate-gst-backwards"
                title="How to Calculate GST Backwards (Reverse Calculation)"
                description="Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price and tax amount from the MRP."
                date="January 28, 2025"
                readTime="4 min read"
                category="Guides"
                image="/blog-reverse-gst.png"
                toc={toc}
            >
                <p>
                    Have you ever looked at a bill with the final amount and wondered, &quot;What was the actual price before tax?&quot; or &quot;How much GST did I pay?&quot; This is where <strong>Reverse GST Calculation</strong> comes in handy.
                </p>

                <h2 id="why-reverse">Why do you need Reverse Calculation?</h2>
                <p>
                    Reverse calculation is useful when:
                </p>
                <ul>
                    <li>You have the MRP (Maximum Retail Price) which is inclusive of all taxes.</li>
                    <li>You need to create an invoice but only know the final agreed amount.</li>
                    <li>You want to verify if a vendor has charged the correct tax amount.</li>
                </ul>

                <h2 id="formula">The Formula</h2>
                <p>
                    The mathematical formula to remove GST from a total amount is:
                </p>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800 my-6">
                    <p className="text-lg font-mono text-center">
                        Base Amount = Total Amount / (1 + (GST Rate / 100))
                    </p>
                </div>
                <p>
                    Once you have the Base Amount, you can easily find the GST Amount:
                </p>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800 my-6">
                    <p className="text-lg font-mono text-center">
                        GST Amount = Total Amount - Base Amount
                    </p>
                </div>

                <h2 id="example">Example Calculation</h2>
                <p>
                    Let&apos;s say you bought a smartphone for <strong>₹11,800</strong> (inclusive of 18% GST).
                </p>
                <ol>
                    <li><strong>Identify Total Amount:</strong> ₹11,800</li>
                    <li><strong>Identify GST Rate:</strong> 18%</li>
                    <li><strong>Calculate Base Amount:</strong>
                        <br />
                        = 11,800 / (1 + (18 / 100))
                        <br />
                        = 11,800 / 1.18
                        <br />
                        = <strong>₹10,000</strong>
                    </li>
                    <li><strong>Calculate GST Amount:</strong>
                        <br />
                        = 11,800 - 10,000
                        <br />
                        = <strong>₹1,800</strong>
                    </li>
                </ol>
                <p>
                    So, the phone&apos;s actual price was ₹10,000, and you paid ₹1,800 as tax.
                </p>

                <h2 id="calculator">Using Our Calculator</h2>
                <p>
                    You don&apos;t need to do this math manually! Our <strong>Reverse GST Calculator</strong> does this instantly.
                </p>
                <ol>
                    <li>Go to the <Link href="/calculator" className="text-indigo-600 hover:underline">Calculator</Link> page.</li>
                    <li>Select the &quot;Reverse GST&quot; tab.</li>
                    <li>Enter the Total Amount.</li>
                    <li>Select the Tax Rate.</li>
                    <li>See the breakdown instantly!</li>
                </ol>
            </BlogPostWrapper>
        </>
    );
}
