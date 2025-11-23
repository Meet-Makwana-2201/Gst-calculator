import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

export const metadata = {
    title: "GST on Electronics 2025: Mobile Phones, Laptops & Accessories Rates",
    description: "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones (12% vs 18%), laptops, computers, and accessories.",
    keywords: [
        "GST on mobile phones 2025",
        "GST on laptops India",
        "electronics GST rates",
        "mobile phone tax rate India",
        "GST on computer accessories",
        "input tax credit on electronics",
    ],
    alternates: {
        canonical: "/blog/gst-on-electronics-mobile-laptops-2025",
    },
    openGraph: {
        title: "GST on Electronics 2025: Mobile Phones, Laptops & Accessories Rates",
        description: "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones (12% vs 18%), laptops, computers, and accessories.",
        url: "/blog/gst-on-electronics-mobile-laptops-2025",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-gst-electronics.png",
                width: 1200,
                height: 630,
                alt: "GST on Electronics",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "GST on Electronics 2025: Mobile Phones, Laptops & Accessories Rates",
        description: "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones (12% vs 18%), laptops, computers, and accessories.",
        images: ["/blog-gst-electronics.png"],
    },
};

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "GST on Electronics 2025: Mobile Phones, Laptops & Accessories Rates",
        "description": "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones (12% vs 18%), laptops, computers, and accessories.",
        "datePublished": "2025-01-20",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://easy-gst-calculator.netlify.app/blog-gst-electronics.png"
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
            <article className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </Link>

                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        GST on Electronics 2025: Mobile Phones, Laptops & Accessories
                    </h1>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                        <span>January 20, 2025</span>
                        <span className="mx-2">•</span>
                        <span>Consumer Electronics</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src="/blog-gst-electronics.png"
                            alt="GST on Electronics"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        The Goods and Services Tax (GST) regime has significantly impacted the pricing of electronic goods in India. As we move into 2025, understanding the current GST rates for mobile phones, laptops, and accessories is crucial for both consumers and businesses.
                    </p>

                    <h2>GST Rates on Mobile Phones</h2>
                    <p>
                        Initially, the GST rate on mobile phones was 12%. However, to correct the inverted duty structure (where tax on inputs was higher than tax on output), the government increased the rate to <strong>18%</strong>.
                    </p>
                    <ul>
                        <li><strong>Standard Rate:</strong> 18% for all mobile phones and smartphones.</li>
                        <li><strong>Feature Phones:</strong> 18%</li>
                    </ul>
                    <p>
                        This uniform rate simplifies the tax structure but has led to a slight increase in the final price for consumers.
                    </p>

                    <h2>GST on Laptops and Computers</h2>
                    <p>
                        Laptops and desktops fall under the <strong>18% GST slab</strong>. This applies to:
                    </p>
                    <ul>
                        <li>Personal Laptops</li>
                        <li>Desktop Computers</li>
                        <li>Tablets</li>
                    </ul>
                    <p>
                        However, computer monitors exceeding 32 inches attract a higher GST rate of <strong>28%</strong>.
                    </p>

                    <h2>GST on Accessories and Peripherals</h2>
                    <p>
                        The tax rates for accessories vary:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full my-4 border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <th className="p-3 text-left">Item</th>
                                    <th className="p-3 text-left">GST Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">Printers & Scanners</td>
                                    <td className="p-3">18%</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">Monitors (up to 32 inches)</td>
                                    <td className="p-3">18%</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">Monitors (above 32 inches)</td>
                                    <td className="p-3">28%</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">Keyboards & Mice</td>
                                    <td className="p-3">18%</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">USB Cables & Chargers</td>
                                    <td className="p-3">18%</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3">Power Banks</td>
                                    <td className="p-3">18%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Input Tax Credit (ITC) for Businesses</h2>
                    <p>
                        Businesses purchasing electronics for official use can claim <strong>Input Tax Credit (ITC)</strong>. This means the GST paid on laptops, phones, and other office equipment can be set off against the GST liability on their sales.
                    </p>
                    <p>
                        <strong>Note:</strong> ITC is generally not available if the electronics are purchased for personal use or if the business is under the Composition Scheme.
                    </p>

                    <h2>Conclusion</h2>
                    <p>
                        While the 18% rate is standard for most electronics, it's essential to keep an eye on specific categories like large monitors which attract higher tax. For businesses, leveraging ITC can significantly reduce the effective cost of these assets.
                    </p>
                </div>

                <div className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Need to calculate the tax?</h3>
                    <p className="text-indigo-700 dark:text-indigo-300 mb-4">
                        Use our free GST calculator to find the exact tax amount and final price for any electronic item.
                    </p>
                    <Link href="/calculator">
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Open Calculator
                        </button>
                    </Link>
                </div>
            </article>
        </main>
    );
}
