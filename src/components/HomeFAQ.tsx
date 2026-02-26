'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { homeFaqs } from "@/lib/home-faq-data";

export default function HomeFAQ() {
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
        {homeFaqs.map((faq, index) => (
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