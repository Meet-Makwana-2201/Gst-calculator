'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function HomeFAQ() {
  const faqs = [
    {
      question: "What is GST?",
      answer: "GST (Goods and Services Tax) is an indirect tax levied on the supply of goods and services in India. It replaced multiple indirect taxes like VAT, service tax, excise duty, etc., and unified them into a single tax system.",
    },
    {
      question: "What are the different types of GST?",
      answer: "In India, there are three types of GST: IGST (Integrated GST) for interstate transactions, CGST (Central GST) and SGST (State GST) for intrastate transactions. CGST and SGST are each half of the total GST rate.",
    },
    {
      question: "What are the GST rates in India?",
      answer: "The standard GST rates in India are: 0% (essential items), 5% (common household items), 12% (processed foods, some electronics), 18% (most goods and services - standard rate), and 28% (luxury items, sin goods).",
    },
    {
      question: "How do I calculate GST?",
      answer: "To calculate GST: GST Amount = (Base Amount × GST Rate) / 100. Then Total Amount = Base Amount + GST Amount. Our calculator does this automatically - just enter the amount and select the rate!",
    },
    {
      question: "Is the calculator free to use?",
      answer: "Yes, absolutely! Our GST calculator is 100% free to use. There are no hidden charges, no subscriptions, and no sign-up required. You can use it as many times as you need without any restrictions.",
    },
    {
      question: "Does the calculator store my data?",
      answer: "No, we don't store any of your calculation data. All calculations are performed locally in your browser. We only store your preferences (like selected currency and tax type) locally on your device for a better user experience.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Quick answers to common questions about GST and our calculator
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 border-gray-200 dark:border-gray-700 rounded-xl px-6 hover-lift"
          >
            <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-gray-100 hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6 leading-relaxed">
              <div className="whitespace-pre-line">
                {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-2 last:mb-0">
                    {paragraph.split('**').map((text, tIndex) =>
                      tIndex % 2 === 1 ? (
                        <strong key={tIndex} className="font-semibold text-gray-900 dark:text-gray-100">{text}</strong>
                      ) : (
                        <span key={tIndex}>{text}</span>
                      )
                    )}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
        >
          View all FAQs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

