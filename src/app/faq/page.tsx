import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "FAQ - GST Calculator India | Help & Support",
  description: "Frequently asked questions about GST calculation, GST rates, IGST, CGST, SGST, and how to use our GST calculator. Get help with all your GST-related queries.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST FAQ",
    "GST questions",
    "GST help",
    "how to use GST calculator",
    "GST calculator support",
    "common GST questions",
    "GST calculator help",
    "GST questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - GST Calculator India | Help & Support",
    description: "Frequently asked questions about GST calculation, GST rates, IGST, CGST, SGST, and how to use our GST calculator. Get help with all your GST-related queries.",
    url: "/faq",
    siteName: "GST Calculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "GST Calculator FAQ",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - GST Calculator India | Help & Support",
    description: "Frequently asked questions about GST calculation, GST rates, IGST, CGST, SGST, and how to use our GST calculator. Get help with all your GST-related queries.",
    images: ["/logo.svg"],
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "What is GST?",
      answer: "GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, service tax, excise duty, etc., and unified them into a single tax system. GST is a destination-based tax, meaning it is levied at the point of consumption.",
    },
    {
      question: "What are the different types of GST?",
      answer: "In India, there are three types of GST:\n\n1. **IGST (Integrated GST)**: Applicable on interstate (between different states) transactions. The entire GST amount is collected as IGST.\n\n2. **CGST (Central GST)**: Applicable on intrastate (within the same state) transactions. Collected by the Central Government.\n\n3. **SGST (State GST)**: Applicable on intrastate transactions. Collected by the State Government. CGST and SGST are each half of the total GST rate.\n\nFor example, if the GST rate is 18%, on an intrastate transaction: CGST = 9% and SGST = 9%.",
    },
    {
      question: "When do I use IGST vs CGST+SGST?",
      answer: "**IGST (Interstate)**: Use when goods/services are supplied between two different states in India. Example: A supplier in Maharashtra sells to a buyer in Karnataka.\n\n**CGST + SGST (Intrastate)**: Use when both the supplier and buyer are in the same state. Example: A supplier in Maharashtra sells to a buyer also in Maharashtra.\n\nOur calculator automatically handles both scenarios when you select the appropriate tax type.",
    },
    {
      question: "What are the GST rates in India?",
      answer: "The standard GST rates in India are:\n\n- **0%**: Essential items like food grains, fresh vegetables, etc.\n- **5%**: Common household items, essential drugs\n- **12%**: Processed foods, computers, mobile phones (some)\n- **18%**: Most goods and services (standard rate)\n- **28%**: Luxury items, sin goods (cigarettes, alcohol), high-end cars\n\nThere are also special rates and exemptions for certain categories.",
    },
    {
      question: "How do I calculate GST?",
      answer: "To calculate GST:\n\n1. **GST Amount** = (Base Amount × GST Rate) / 100\n2. **Total Amount** = Base Amount + GST Amount\n\nExample: If base amount is ₹10,000 and GST rate is 18%:\n- GST = (10,000 × 18) / 100 = ₹1,800\n- Total = ₹10,000 + ₹1,800 = ₹11,800\n\nOur calculator does this automatically - just enter the amount and select the rate!",
    },
    {
      question: "How do I calculate Reverse GST?",
      answer: "Reverse GST calculation is used when you know the total amount (including GST) and need to find the base amount and GST separately.\n\n**Formula**: Base Amount = Total Amount / (1 + GST Rate / 100)\n\nExample: If total is ₹11,800 and GST rate is 18%:\n- Base Amount = 11,800 / (1 + 18/100) = 11,800 / 1.18 = ₹10,000\n- GST Amount = ₹11,800 - ₹10,000 = ₹1,800\n\nUse our Reverse GST Calculator for instant calculations!",
    },
    {
      question: "Which GST rate applies to my product/service?",
      answer: "GST rates depend on the HSN (Harmonized System of Nomenclature) code for goods or SAC (Services Accounting Code) for services. The rate can vary based on:\n\n- Type of product/service\n- Industry classification\n- Government notifications\n- Special categories (luxury, essential, etc.)\n\n**Best practice**: Check the official GST portal or consult with a tax professional for the exact rate applicable to your specific product or service.",
    },
    {
      question: "Is this calculator accurate for tax filing?",
      answer: "Our calculator provides accurate calculations based on standard GST formulas. However, for official tax filing and critical business decisions, we recommend:\n\n1. Verifying calculations with a certified tax professional\n2. Using official government calculators for filing\n3. Consulting your accountant for complex scenarios\n4. Checking the latest GST notifications and updates\n\nOur tool is designed for quick calculations and reference purposes.",
    },
    {
      question: "Can I use this calculator for different currencies?",
      answer: "Yes! Our calculator supports both Indian Rupees (₹ INR) and US Dollars ($ USD). Select your preferred currency using the currency selector in the calculator. Note that GST is an Indian tax system, so GST rates apply to INR. For USD, the calculator helps with equivalent tax calculations.",
    },
    {
      question: "How do I embed this calculator on my website?",
      answer: "We offer an embeddable widget version of our GST calculator! Visit our widget/embed page or contact us for integration instructions. The widget can be easily embedded using a simple script tag or iframe, allowing your website visitors to calculate GST directly on your site.",
    },
    {
      question: "Is the calculator free to use?",
      answer: "Yes, absolutely! Our GST calculator is 100% free to use. There are no hidden charges, no subscriptions, and no sign-up required. You can use it as many times as you need without any restrictions.",
    },
    {
      question: "Does the calculator store my data?",
      answer: "No, we don't store any of your calculation data. All calculations are performed locally in your browser. We only store your preferences (like selected currency and tax type) locally on your device for a better user experience. Your privacy is our priority!",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <JsonLd data={jsonLd} />
      <section className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about GST calculation, tax rates, and how to use our tool.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 dark:text-gray-300 mb-4 last:mb-0 whitespace-pre-line">
                      {paragraph.split('\n').map((line, lIndex) => {
                        if (line.match(/^\*\*/) && line.match(/\*\*$/)) {
                          const boldText = line.replace(/\*\*/g, '');
                          return <strong key={lIndex} className="font-semibold">{boldText}</strong>;
                        }
                        return <span key={lIndex}>{line}{lIndex < paragraph.split('\n').length - 1 && <br />}</span>;
                      })}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Still have questions?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Can&apos;t find the answer you&apos;re looking for? Please reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover-lift shadow-lg"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
