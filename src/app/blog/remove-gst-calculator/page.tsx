import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata = {
    title: "Remove GST Calculator – Minus GST from Price Instantly | OneCalculator",
    description: "Use our free Remove GST Calculator to minus GST from price instantly. Learn the reverse GST calculation formula, see examples for 5%, 12%, 18%, 28% rates, and extract the base price in seconds.",
    keywords: [
        "remove gst from price",
        "minus gst calculator",
        "reverse gst calculation",
        "remove gst calculator",
        "gst removal tool",
        "subtract gst from amount",
        "gst exclusive calculator",
        "gst inclusive to exclusive",
        "reverse gst formula",
        "online gst removal tool",
    ],
    alternates: {
        canonical: "https://onecalculator.online/blog/remove-gst-calculator",
    },
    openGraph: {
        title: "Remove GST Calculator – Minus GST from Price Instantly",
        description: "Free online tool to remove GST from any price. Get the base price and GST amount instantly for all Indian GST slabs.",
        url: "/blog/remove-gst-calculator",
        siteName: "OneCalculator",
        images: [
            {
                url: "/blog-reverse-gst.png",
                width: 1200,
                height: 630,
                alt: "Remove GST Calculator",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remove GST Calculator – Minus GST from Price Instantly",
        description: "Free online tool to remove GST from any price. Get the base price and GST amount instantly for all Indian GST slabs.",
        images: ["/blog-reverse-gst.png"],
    },
};

const toc = [
    { id: 'what-is-remove-gst', title: 'What is Remove GST?', level: 2 as const },
    { id: 'formula-to-remove-gst', title: 'Formula to Remove GST from Price', level: 2 as const },
    { id: 'how-to-use-calculator', title: 'How to Use Our Minus GST Calculator', level: 2 as const },
    { id: 'examples', title: 'Examples', level: 2 as const },
    { id: 'why-use-online-tool', title: 'Why Use Online Remove GST Tool', level: 2 as const },
    { id: 'faqs', title: 'FAQs', level: 2 as const },
];

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Remove GST Calculator – Minus GST from Price Instantly",
        "description": "Use our free Remove GST Calculator to minus GST from price instantly. Learn the reverse GST calculation formula, see examples, and extract the base price in seconds.",
        "datePublished": "2026-02-11",
        "dateModified": "2026-02-11",
        "author": {
            "@type": "Organization",
            "name": "OneCalculator"
        },
        "publisher": {
            "@type": "Organization",
            "name": "OneCalculator",
            "url": "https://onecalculator.online"
        },
        "image": "https://onecalculator.online/blog-reverse-gst.png",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://onecalculator.online/blog/remove-gst-calculator"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does it mean to remove GST from a price?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Removing GST from a price means extracting the original base price (before tax) from a GST-inclusive amount. You divide the total price by (1 + GST Rate/100) to get the pre-tax value."
                }
            },
            {
                "@type": "Question",
                "name": "Can I simply subtract 18% from the total to remove GST?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Directly subtracting the percentage from the total gives an incorrect result. Since GST is calculated on the base price (not the total), you must divide the total by the appropriate factor (e.g., 1.18 for 18% GST) to get the correct base price."
                }
            },
            {
                "@type": "Question",
                "name": "How do I remove GST in Excel?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In Excel, if cell A1 contains the GST-inclusive price and the rate is 18%, use the formula =A1/1.18 to get the base price and =A1 - (A1/1.18) to get the GST amount."
                }
            },
            {
                "@type": "Question",
                "name": "Does the reverse GST formula work for all GST slabs in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The formula Base Price = Total / (1 + GST Rate/100) works universally for all Indian GST slabs — 5%, 12%, 18%, and 28%. Simply change the rate in the formula."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I use an online Remove GST Calculator instead of manual calculation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An online calculator eliminates rounding errors, handles decimal-heavy results accurately, and saves time — especially when processing multiple invoices or bills. It also splits the result into CGST and SGST automatically."
                }
            }
        ]
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <JsonLd data={faqJsonLd} />
            <BlogPostWrapper
                slug="remove-gst-calculator"
                title="Remove GST Calculator – Minus GST from Price Instantly"
                description="Use our free Remove GST Calculator to minus GST from price instantly. Learn the reverse GST calculation formula, see examples, and extract the base price in seconds."
                date="February 11, 2026"
                readTime="7 min read"
                category="GST Guide"
                image="/blog-reverse-gst.png"
                toc={toc}
            >
                <p>
                    Every bill you pay in India—whether it is a restaurant check, a software subscription, or a wholesale purchase—includes <strong>Goods and Services Tax (GST)</strong>. But what if you need to know the actual price before tax? That is where the concept of <strong>removing GST from price</strong> comes in.
                </p>
                <p>
                    Whether you are a business owner filing returns, a freelancer claiming Input Tax Credit (ITC), or a consumer who wants to verify an invoice, knowing how to <strong>minus GST from a price</strong> is a practical skill. This guide covers the exact formula, worked-out examples, and a free online tool that performs the <strong>reverse GST calculation</strong> for you instantly.
                </p>

                <h2 id="what-is-remove-gst">What is Remove GST?</h2>
                <p>
                    &quot;Remove GST&quot; refers to the process of extracting the <strong>original base price</strong> from a total amount that already includes GST. In accounting terms, this is called <strong>reverse GST calculation</strong> or finding the <strong>GST-exclusive value</strong> from a GST-inclusive price.
                </p>
                <p>
                    Under the Indian GST framework, most Maximum Retail Prices (MRPs) and service bills are quoted <strong>inclusive of tax</strong>. This means the price you see already has 5%, 12%, 18%, or 28% GST baked into it. To <strong>remove GST from price</strong>, you reverse-engineer the calculation to separate the tax component from the net cost of the goods or services.
                </p>
                <p>
                    This is critical for businesses because the GST portal requires you to report the <strong>taxable value</strong> and <strong>tax amount</strong> separately in returns like GSTR-1 and GSTR-3B.
                </p>

                <h2 id="formula-to-remove-gst">Formula to Remove GST from Price</h2>
                <p>
                    A common mistake is to calculate the GST percentage of the total amount and subtract it directly. That approach is <strong>mathematically incorrect</strong>. GST is always computed on the base price, not on the inclusive total.
                </p>
                <p>
                    The correct formula to <strong>minus GST from price</strong> is:
                </p>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 my-6">
                    <p className="text-center font-mono text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        Base Price = Total Price ÷ (1 + GST Rate / 100)
                    </p>
                </div>
                <p>
                    Once you have the base price, the GST amount is simply:
                </p>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 my-6">
                    <p className="text-center font-mono text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        GST Amount = Total Price − Base Price
                    </p>
                </div>
                <p>
                    <strong>Quick division factors for each GST slab:</strong>
                </p>
                <ul>
                    <li><strong>5% GST</strong> → Divide by <strong>1.05</strong></li>
                    <li><strong>12% GST</strong> → Divide by <strong>1.12</strong></li>
                    <li><strong>18% GST</strong> → Divide by <strong>1.18</strong></li>
                    <li><strong>28% GST</strong> → Divide by <strong>1.28</strong></li>
                </ul>

                <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800 my-8">
                    <p className="text-lg font-semibold text-center mb-2 italic">Important</p>
                    <p className="text-center">
                        Never subtract the GST percentage directly from the total. For example, 18% of ₹1,180 is ₹212.40 — but the actual GST component is only ₹180. The difference may seem small on one invoice, but it compounds significantly across hundreds of transactions.
                    </p>
                </div>

                <h2 id="how-to-use-calculator">How to Use Our Minus GST Calculator</h2>
                <p>
                    Our free <Link href="/calculators/gst" className="text-indigo-600 hover:underline">Minus GST Calculator</Link> at <strong>onecalculator.online</strong> makes the <strong>reverse GST calculation</strong> effortless. Follow these steps:
                </p>
                <ol>
                    <li><strong>Open the Calculator:</strong> Visit our <Link href="/calculators/gst" className="text-indigo-600 hover:underline">GST Calculator page</Link>.</li>
                    <li><strong>Enter the Total Amount:</strong> Type the GST-inclusive price you want to break down.</li>
                    <li><strong>Select the GST Rate:</strong> Choose the applicable slab — 5%, 12%, 18%, or 28%.</li>
                    <li><strong>Choose &quot;GST Inclusive&quot;:</strong> This tells the tool that you want to <strong>remove GST from price</strong>, not add it.</li>
                    <li><strong>View Results Instantly:</strong> The calculator displays the <strong>Base Price</strong>, <strong>CGST</strong>, <strong>SGST</strong> (or <strong>IGST</strong>), and the total <strong>GST Amount</strong> in real time.</li>
                </ol>
                <p>
                    No sign-up is required. The tool works on mobile, tablet, and desktop — so you can <strong>minus GST</strong> from any price even while on the go.
                </p>

                <h2 id="examples">Examples</h2>
                <p>
                    Let us walk through practical examples at different GST rates to see the formula in action.
                </p>

                <h3>Example 1 — Remove 5% GST</h3>
                <p>
                    A grocery bill totals <strong>₹525</strong> inclusive of 5% GST.
                </p>
                <ol>
                    <li>Base Price = 525 ÷ 1.05 = <strong>₹500</strong></li>
                    <li>GST Amount = 525 − 500 = <strong>₹25</strong></li>
                </ol>

                <h3>Example 2 — Remove 12% GST</h3>
                <p>
                    You purchase furniture for <strong>₹33,600</strong> with 12% GST included.
                </p>
                <ol>
                    <li>Base Price = 33,600 ÷ 1.12 = <strong>₹30,000</strong></li>
                    <li>GST Amount = 33,600 − 30,000 = <strong>₹3,600</strong></li>
                    <li>CGST (6%) = ₹1,800 | SGST (6%) = ₹1,800</li>
                </ol>

                <h3>Example 3 — Remove 18% GST</h3>
                <p>
                    A consultant invoice shows <strong>₹59,000</strong> inclusive of 18% GST.
                </p>
                <ol>
                    <li>Base Price = 59,000 ÷ 1.18 = <strong>₹50,000</strong></li>
                    <li>GST Amount = 59,000 − 50,000 = <strong>₹9,000</strong></li>
                    <li>CGST (9%) = ₹4,500 | SGST (9%) = ₹4,500</li>
                </ol>

                <h3>Example 4 — Remove 28% GST</h3>
                <p>
                    A luxury watch is priced at <strong>₹1,28,000</strong> including 28% GST.
                </p>
                <ol>
                    <li>Base Price = 1,28,000 ÷ 1.28 = <strong>₹1,00,000</strong></li>
                    <li>GST Amount = 1,28,000 − 1,00,000 = <strong>₹28,000</strong></li>
                </ol>

                <h2 id="why-use-online-tool">Why Use Online Remove GST Tool</h2>
                <p>
                    Manual division with decimals is error-prone — especially when you deal with odd amounts like ₹7,493 or ₹1,56,870. Here is why thousands of Indian businesses and professionals prefer an online <strong>remove GST calculator</strong>:
                </p>
                <ul>
                    <li><strong>100% Accuracy:</strong> The tool handles complex decimal calculations perfectly, ensuring your tax figures match the GST portal.</li>
                    <li><strong>CGST/SGST Split:</strong> It automatically divides the GST amount into CGST and SGST (or shows IGST for inter-state transactions), saving you an extra step.</li>
                    <li><strong>Time-Saving:</strong> Process invoices in seconds instead of minutes. Ideal for accountants, CA firms, and business owners handling bulk bills.</li>
                    <li><strong>Mobile-Friendly:</strong> Use it at a shop counter, in a client meeting, or while travelling — no app download needed.</li>
                    <li><strong>Completely Free:</strong> No registration, no hidden charges, and no limits on usage at <Link href="/calculators/gst" className="text-indigo-600 hover:underline">onecalculator.online</Link>.</li>
                </ul>
                <p>
                    Whether you need to verify a vendor invoice, prepare a <Link href="/blog/gst-invoice-format-for-freelancers" className="text-indigo-600 hover:underline">GST-compliant invoice</Link>, or simply understand how much tax you are paying on everyday purchases, a reliable <strong>minus GST calculator</strong> is an indispensable tool.
                </p>

                <h2 id="faqs">Frequently Asked Questions (FAQs)</h2>

                <h3>Q1: What does it mean to remove GST from a price?</h3>
                <p>
                    It means calculating the original base price (before tax) from a total amount that already includes GST. You use the formula <em>Base Price = Total ÷ (1 + GST Rate/100)</em> to extract the pre-tax value.
                </p>

                <h3>Q2: Can I simply subtract 18% from the total to remove GST?</h3>
                <p>
                    No. Directly subtracting 18% of the total gives an incorrect result. Since GST is applied on the base price (not the total), you must divide by <strong>1.18</strong> to get the accurate base price. For example, for ₹1,180 the base price is ₹1,000 — not ₹967.60.
                </p>

                <h3>Q3: How do I remove GST in Excel?</h3>
                <p>
                    If cell A1 contains the GST-inclusive price and the rate is 18%, use the formula <code>=A1/1.18</code> to get the base price. For the GST amount, use <code>=A1 - (A1/1.18)</code>.
                </p>

                <h3>Q4: Does the reverse GST formula work for all GST slabs?</h3>
                <p>
                    Yes. The formula <em>Base Price = Total ÷ (1 + Rate/100)</em> works universally for all Indian GST slabs — <strong>5%, 12%, 18%, and 28%</strong>. Simply change the rate in the formula or select the appropriate slab in our <Link href="/calculators/gst" className="text-indigo-600 hover:underline">calculator</Link>.
                </p>

                <h3>Q5: Why should I use an online Remove GST Calculator instead of manual calculation?</h3>
                <p>
                    An online calculator eliminates rounding errors, handles decimal-heavy results accurately, and saves significant time — especially when processing multiple invoices. It also automatically splits the result into CGST and SGST, which you need for <Link href="/blog/how-to-calculate-gst-backwards" className="text-indigo-600 hover:underline">GST return filing</Link>.
                </p>

                <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl text-white shadow-2xl my-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">Remove GST from Any Price — Free &amp; Instant</h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        Stop doing manual division. Use our professional Remove GST Calculator to get the base price, CGST, SGST, and total tax amount in one click.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/calculators/gst"
                            className="px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Use our free calculator at onecalculator.online →
                        </Link>
                    </div>
                </div>

            </BlogPostWrapper>
        </>
    );
}
