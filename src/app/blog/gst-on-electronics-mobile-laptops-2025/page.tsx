import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';

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
        canonical: "https://onecalculator.online/blog/gst-on-electronics-mobile-laptops-2025",
    },
    openGraph: {
        title: "GST on Electronics 2025: Mobile Phones, Laptops & Accessories Rates",
        description: "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones (12% vs 18%), laptops, computers, and accessories.",
        url: "/blog/gst-on-electronics-mobile-laptops-2025",
        siteName: "OneCalculator",
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

const toc = [
    { id: 'mobile-phones', title: 'GST Rates on Mobile Phones', level: 2 as const },
    { id: 'laptops-computers', title: 'GST on Laptops and Computers', level: 2 as const },
    { id: 'accessories', title: 'GST on Accessories', level: 2 as const },
    { id: 'itc', title: 'Input Tax Credit (ITC)', level: 2 as const },
    { id: 'conclusion', title: 'Conclusion', level: 2 as const },
];

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
        "image": "https://onecalculator.online/blog-gst-electronics.png"
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <BlogPostWrapper
                slug="gst-on-electronics-mobile-laptops-2025"
                title="GST on Electronics 2025: Mobile Phones, Laptops & Accessories"
                description="The Goods and Services Tax (GST) regime has significantly impacted the pricing of electronic goods in India. As we move into 2025, understanding the current GST rates for mobile phones, laptops, and accessories is crucial for both consumers and businesses."
                date="January 20, 2025"
                readTime="5 min read"
                category="Consumer Electronics"
                image="/blog-gst-electronics.png"
                toc={toc}
            >
                <p>
                    The Goods and Services Tax (GST) regime has significantly impacted the pricing of electronic goods in India. As we move into 2025, understanding the current GST rates for mobile phones, laptops, and accessories is crucial for both consumers and businesses.
                </p>

                <h2 id="mobile-phones">GST Rates on Mobile Phones</h2>
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

                <h2 id="laptops-computers">GST on Laptops and Computers</h2>
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

                <h2 id="accessories">GST on Accessories and Peripherals</h2>
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

                <h2 id="itc">Input Tax Credit (ITC) for Businesses</h2>
                <p>
                    Businesses purchasing electronics for official use can claim <strong>Input Tax Credit (ITC)</strong>. This means the GST paid on laptops, phones, and other office equipment can be set off against the GST liability on their sales.
                </p>

                <h2 id="conclusion">Conclusion</h2>
                <p>
                    While the 18% rate is standard for most electronics, it&apos;s essential to keep an eye on specific categories like large monitors which attract higher tax. For businesses, leveraging ITC can significantly reduce the effective cost of these assets.
                </p>
            </BlogPostWrapper >
        </>
    );
}
