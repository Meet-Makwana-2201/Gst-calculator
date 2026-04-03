import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata = {
    title: "CTC vs In-Hand Salary: Calculate Your Take-Home Pay | OneCalculator",
    description: "Learn the difference between CTC and in-hand salary in India 2026. See sample salary slip and use our salary calculator for accurate take-home pay estimates.",
    keywords: [
        "ctc vs in hand salary",
        "in hand salary calculator",
        "take home salary calculation",
        "salary slip breakdown india",
        "ctc meaning in salary",
        "how to calculate in hand salary",
        "pf tax professional tax salary",
        "new tax regime 2026 salary",
        "salary deductions india",
        "take home pay india",
    ],
    alternates: {
        canonical: "https://onecalculator.online/blog/ctc-vs-in-hand-salary",
    },
    openGraph: {
        title: "CTC vs In-Hand Salary: Calculate Your Take-Home Pay",
        description: "Understand CTC, PF, TDS, professional tax, and new tax regime rules with a sample salary slip for India 2026.",
        url: "/blog/ctc-vs-in-hand-salary",
        siteName: "OneCalculator",
        images: [
            {
                url: "/blog-percentage-shopping-salary.png",
                width: 1200,
                height: 630,
                alt: "Sample salary slip breakdown showing CTC components",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "CTC vs In-Hand Salary: Calculate Your Take-Home Pay",
        description: "Understand CTC, PF, TDS, professional tax, and new tax regime rules with a sample salary slip for India 2026.",
        images: ["/blog-percentage-shopping-salary.png"],
    },
};

const toc = [
    { id: 'what-is-ctc', title: 'What is CTC?', level: 2 as const },
    { id: 'key-components', title: 'Key Components (PF, taxes)', level: 2 as const },
    { id: 'tax-regime', title: 'Tax Regime and Deductions', level: 2 as const },
    { id: 'sample-calculation', title: 'Sample Calculation', level: 2 as const },
    { id: 'using-salary-calculator', title: 'Using Our Salary Calculator', level: 2 as const },
    { id: 'faqs', title: 'FAQs', level: 2 as const },
];

export default function BlogPost() {
    const blogJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "CTC vs In-Hand Salary: Calculate Your Take-Home Pay",
        "description": "Learn the difference between CTC and in-hand salary in India 2026. See sample salary slip and understand PF, TDS, and professional tax deductions.",
        "datePublished": "2026-04-03",
        "dateModified": "2026-04-03",
        "author": {
            "@type": "Organization",
            "name": "OneCalculator"
        },
        "publisher": {
            "@type": "Organization",
            "name": "OneCalculator",
            "url": "https://onecalculator.online"
        },
        "image": "https://onecalculator.online/blog-percentage-shopping-salary.png",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://onecalculator.online/blog/ctc-vs-in-hand-salary"
        }
    };

    const howToJsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to calculate in-hand salary from CTC",
        "description": "Step-by-step method to convert annual CTC into monthly take-home salary in India.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Start with annual CTC",
                "text": "List all salary components included in the offer, including basic pay, HRA, special allowance, employer PF, gratuity, bonus, and insurance benefits."
            },
            {
                "@type": "HowToStep",
                "name": "Separate employer cost from employee earnings",
                "text": "Remove employer PF, gratuity, and other employer-only costs to arrive at monthly gross earnings."
            },
            {
                "@type": "HowToStep",
                "name": "Subtract employee deductions",
                "text": "Deduct employee PF, professional tax where applicable, and any recurring payroll deductions."
            },
            {
                "@type": "HowToStep",
                "name": "Estimate income-tax withholding",
                "text": "Choose the correct tax regime, apply the current slabs, and divide annual tax liability by the number of salary months for monthly TDS."
            },
            {
                "@type": "HowToStep",
                "name": "Arrive at take-home pay",
                "text": "The final credited amount is monthly gross earnings minus employee deductions and monthly TDS."
            }
        ]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is my in-hand salary lower than my CTC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "CTC includes employer-side costs such as employer PF contribution, gratuity, insurance, bonuses, and benefits. In-hand salary is the amount left after employee deductions and tax withholding."
                }
            },
            {
                "@type": "Question",
                "name": "Is employer PF part of in-hand salary?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Employer PF is part of your cost-to-company but it is not paid out as monthly cash in your bank account."
                }
            },
            {
                "@type": "Question",
                "name": "Does professional tax apply to every employee in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Professional tax is state-specific, so the deduction depends on the state where you are employed and the slab applicable there."
                }
            },
            {
                "@type": "Question",
                "name": "What changed in the new tax regime for FY 2026-27?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For AY 2026-27, the new regime remains the default. The official slabs start at nil up to 4 lakh rupees, and resident individuals can get rebate-based nil tax up to 12 lakh rupees. Salaried taxpayers also get a 75,000 rupee standard deduction, which can make salary income up to 12.75 lakh rupees effectively tax-free under the new regime, subject to eligibility."
                }
            },
            {
                "@type": "Question",
                "name": "Can freelancers use the same CTC vs in-hand method?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Freelancers do not usually receive a salary slip or CTC structure, but they can still estimate take-home income by subtracting GST, taxes, platform fees, and business expenses from gross receipts."
                }
            }
        ]
    };

    return (
        <>
            <JsonLd data={blogJsonLd} />
            <JsonLd data={howToJsonLd} />
            <JsonLd data={faqJsonLd} />
            <BlogPostWrapper
                slug="ctc-vs-in-hand-salary"
                title="CTC vs In-Hand Salary: Calculate Your Take-Home Pay"
                description="Your offer letter may say one number, but your bank account shows another. Here is how to decode CTC, deductions, and real monthly take-home salary in India."
                date="April 3, 2026"
                readTime="9 min read"
                category="Finance"
                image="/blog-percentage-shopping-salary.png"
                toc={toc}
            >
                <p>
                    If you have ever compared your offer letter with your first payslip and felt that the numbers do not match, you are not alone. In India, the biggest source of confusion is the difference between <strong>CTC</strong> and <strong>in-hand salary</strong>. Your recruiter may quote a strong annual package, but that does not mean the same amount lands in your bank account every month.
                </p>
                <p>
                    The short answer is simple: <strong>CTC is the company&apos;s total annual cost for employing you</strong>, while <strong>in-hand salary is the monthly amount credited after deductions</strong>. The gap comes from components like employer PF, gratuity, tax deduction at source, and professional tax. Once you understand those pieces, you can estimate take-home pay with confidence and verify each deduction using our <Link href="/calculators/percentage" className="text-cyan-700 hover:underline">Percentage Calculator</Link>.
                </p>

                <h2 id="what-is-ctc">What is CTC?</h2>
                <p>
                    <strong>CTC stands for Cost to Company.</strong> It is the full annual value of your compensation package from the employer&apos;s point of view. That includes fixed cash salary, allowances, retirement contributions, and in many cases benefits that you never receive as direct monthly cash.
                </p>
                <p>
                    This is why a `₹12 lakh CTC` does not mean `₹1 lakh in-hand per month`. A part of that CTC may consist of employer provident fund contribution, gratuity accrual, annual bonus, insurance premium, or reimbursements. These improve your total package, but they are not all part of your monthly take-home pay.
                </p>
                <p>
                    A practical way to read CTC is this:
                </p>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 my-6">
                    <p className="text-center font-mono text-lg md:text-xl font-bold text-cyan-700 dark:text-cyan-400">
                        CTC = Gross Earnings + Employer Contributions + Annual Benefits
                    </p>
                </div>
                <p>
                    Your actual monthly take-home starts only after you remove employer-only costs and then subtract employee deductions from the remaining salary.
                </p>

                <h2 id="key-components">Key Components (PF, taxes)</h2>
                <p>
                    Most salary structures in India break down into a few recurring components. The exact labels vary by employer, but the logic is usually the same.
                </p>
                <ul>
                    <li><strong>Basic salary:</strong> The fixed core component. PF is usually calculated from this figure.</li>
                    <li><strong>HRA:</strong> House Rent Allowance, which may influence tax planning under the old regime.</li>
                    <li><strong>Special allowance or other allowance:</strong> Flexible part used to complete the package.</li>
                    <li><strong>Employer PF:</strong> Part of CTC, but not monthly cash in hand.</li>
                    <li><strong>Employee PF:</strong> Deducted from your salary and reduces take-home pay.</li>
                    <li><strong>Professional tax:</strong> State-specific deduction where applicable.</li>
                    <li><strong>TDS on salary:</strong> Income-tax withholding based on your estimated annual taxable income and selected regime.</li>
                    <li><strong>Gratuity:</strong> Often included in CTC as a future benefit, not immediate cash.</li>
                </ul>
                <p>
                    This is the most important rule to remember: <strong>employer PF and gratuity increase CTC, but employee PF and TDS reduce in-hand salary.</strong>
                </p>

                <h2 id="tax-regime">Tax Regime and Deductions</h2>
                <p>
                    For India tax year <strong>2026-27</strong>, the <strong>new tax regime remains the default regime</strong>. According to the official Budget 2026 FAQs, the current slabs in the new regime start at nil up to `₹4 lakh`, then `5%` from `₹4,00,001` to `₹8 lakh`, `10%` up to `₹12 lakh`, `15%` up to `₹16 lakh`, `20%` up to `₹20 lakh`, `25%` up to `₹24 lakh`, and `30%` above that. The same official FAQ also states that resident individuals can have <strong>nil tax up to `₹12 lakh` because of rebate</strong>.
                </p>
                <p>
                    Salaried employees get another important relief: the official FAQ confirms a <strong>`₹75,000` standard deduction in the new regime</strong>. That means a salaried taxpayer with income up to <strong>`₹12.75 lakh` before standard deduction</strong> may still end up with nil tax liability under the new regime, subject to eligibility and excluding income taxed at special rates.
                </p>
                <p>
                    In real payroll, your monthly deductions may include:
                </p>
                <ul>
                    <li><strong>Employee PF:</strong> Commonly `12%` of basic salary for eligible employees.</li>
                    <li><strong>Professional tax:</strong> Often a small monthly amount, but it varies by state.</li>
                    <li><strong>TDS:</strong> Spread across the year based on estimated annual tax liability.</li>
                    <li><strong>Other deductions:</strong> Meal card recovery, company transport, insurance top-up, or loan recovery where applicable.</li>
                </ul>
                <p>
                    If you are a freelancer, do not confuse <strong>salary tax</strong> with <strong>GST on invoices</strong>. GST is an indirect tax on your business billing, not a salary-slip deduction. If you need to estimate GST separately, use our <Link href="/calculators/gst" className="text-cyan-700 hover:underline">GST Calculator</Link>.
                </p>

                <h2 id="sample-calculation">Sample Calculation</h2>
                <p>
                    Let us use a realistic monthly salary slip example for an employee with an annual CTC of about <strong>`₹12.6 lakh`</strong>.
                </p>

                <div className="space-y-4 my-6">
                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <p className="font-bold mb-2">Monthly CTC Structure</p>
                        <ul className="text-sm space-y-1">
                            <li>Basic Salary: <strong>₹50,000</strong></li>
                            <li>HRA: <strong>₹25,000</strong></li>
                            <li>Special Allowance: <strong>₹18,000</strong></li>
                            <li>Other Allowance: <strong>₹3,500</strong></li>
                            <li>Employer PF: <strong>₹6,000</strong></li>
                            <li>Gratuity: <strong>₹2,405</strong></li>
                            <li>Total Monthly CTC: <strong>₹1,04,905</strong></li>
                        </ul>
                    </div>

                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <p className="font-bold mb-2">Monthly Earnings Before Deductions</p>
                        <ul className="text-sm space-y-1">
                            <li>Basic + HRA + Allowances = <strong>₹96,500</strong></li>
                            <li>This is your <strong>monthly gross earnings</strong>, not your in-hand salary.</li>
                        </ul>
                    </div>

                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <p className="font-bold mb-2">Monthly Deductions</p>
                        <ul className="text-sm space-y-1">
                            <li>Employee PF: <strong>₹6,000</strong></li>
                            <li>Professional Tax: <strong>₹200</strong></li>
                            <li>Estimated TDS: <strong>₹4,025</strong></li>
                            <li>Total Deductions: <strong>₹10,225</strong></li>
                        </ul>
                    </div>
                </div>

                <p>
                    Now apply the final formula:
                </p>
                <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800 my-6">
                    <p className="text-center font-mono text-lg md:text-xl font-bold text-cyan-700 dark:text-cyan-400">
                        In-Hand Salary = Monthly Gross Earnings - Employee Deductions - TDS
                    </p>
                    <p className="text-center mt-3">
                        <strong>₹96,500 - ₹10,225 = ₹86,275 per month</strong>
                    </p>
                </div>
                <p>
                    That means the employee&apos;s package looks like `₹1.04 lakh` per month on paper, but the actual bank credit is closer to <strong>`₹86,275`</strong>. The difference is not necessarily a mistake. It is simply the gap between <strong>company cost</strong> and <strong>cash received</strong>.
                </p>
                <p>
                    To make this interactive, you can verify the deduction burden using our <Link href="/calculators/percentage" className="text-cyan-700 hover:underline">Percentage Calculator</Link>. In this example, total deductions of `₹10,225` on gross earnings of `₹96,500` are roughly <strong>10.6%</strong>. That quick percentage view is useful when you compare job offers or evaluate a salary revision.
                </p>
                <p>
                    If your company shares a detailed salary slip, a good visual aid for this article is an infographic labeled <strong>&quot;Sample salary slip breakdown showing CTC components&quot;</strong> plus a second chart labeled <strong>&quot;Take-home vs deductions in salary&quot;</strong>. Those visuals work well for search and social previews because they simplify the entire pay structure at a glance.
                </p>

                <h2 id="using-salary-calculator">Using Our Salary Calculator</h2>
                <p>
                    A salary calculator is the easiest way to compare offers, monthly credits, and tax impact without rebuilding the same spreadsheet every time. A strong workflow looks like this:
                </p>
                <ol>
                    <li>Enter annual CTC.</li>
                    <li>Split out basic pay, HRA, allowances, employer PF, and gratuity.</li>
                    <li>Choose the correct tax regime.</li>
                    <li>Add recurring deductions like employee PF and professional tax.</li>
                    <li>Review monthly gross salary, monthly TDS, and final take-home pay.</li>
                </ol>
                <p>
                    Our dedicated salary calculator is <strong>upcoming</strong>. Until it is live, use the <Link href="/calculators/percentage" className="text-cyan-700 hover:underline">Percentage Calculator</Link> to test deduction rates and estimate take-home impact, then cross-check any GST-related business billing separately with our <Link href="/calculators/gst" className="text-cyan-700 hover:underline">GST Calculator</Link>.
                </p>

                <h2 id="faqs">Frequently Asked Questions</h2>
                <div className="space-y-4 my-8">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold mb-2">Is gross salary the same as in-hand salary?</h3>
                        <p className="text-sm">No. Gross salary is before deductions. In-hand salary is what remains after employee PF, TDS, professional tax, and any other payroll deductions.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold mb-2">Why do two employees with similar CTC get different take-home pay?</h3>
                        <p className="text-sm">Because the structure may differ. One package may include a larger employer PF, bonus, retention pay, or taxable allowances. Regime selection and declarations also affect TDS.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold mb-2">Can I lower TDS just because I want a higher in-hand salary?</h3>
                        <p className="text-sm">Not arbitrarily. TDS is based on projected taxable income and valid declarations. Lower withholding without basis can create a larger tax payable later.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold mb-2">Does the new regime always give a better in-hand salary?</h3>
                        <p className="text-sm">Not always. It often improves take-home by lowering tax outflow, but employees with large old-regime deductions and exemptions may still need a case-by-case comparison.</p>
                    </div>
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-cyan-700 to-teal-600 rounded-3xl text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Check Your Deductions Before You Accept an Offer</h2>
                    <p className="mb-6">
                        Use our Percentage Calculator to verify any deduction, test salary slip examples, and compare what your package means in real monthly cash terms. Keep an eye out for our upcoming salary calculator for faster paycheck insights.
                    </p>
                    <Link href="/calculators/percentage" className="inline-block px-8 py-3 bg-white text-cyan-700 rounded-xl font-bold hover:bg-cyan-50 transition-all">
                        Try the Percentage Calculator
                    </Link>
                </div>
            </BlogPostWrapper>
        </>
    );
}
