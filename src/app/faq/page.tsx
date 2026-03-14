import Link from "next/link";

import JsonLd from "@/components/JsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "FAQ | GST, Calculator Use, Rates and Common Questions",
  description:
    "Answers to common questions about GST calculation, reverse GST, rates, calculator usage, and privacy on LedgerKit India.",
  alternates: {
    canonical: "https://onecalculator.online/faq",
  },
  openGraph: {
    title: "LedgerKit India FAQ",
    description:
      "Answers to common questions about GST calculation, reverse GST, rates, calculator usage, and privacy.",
    url: "/faq",
    siteName: "LedgerKit India",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "LedgerKit India FAQ" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerKit India FAQ",
    description:
      "Answers to common questions about GST calculation, reverse GST, rates, calculator usage, and privacy.",
    images: ["/logo.svg"],
  },
};

const faqs = [
  {
    question: "What is GST?",
    answer:
      "GST is the Goods and Services Tax used in India. It replaced multiple indirect taxes and applies at the point of consumption.",
  },
  {
    question: "When should I use IGST instead of CGST and SGST?",
    answer:
      "Use IGST for interstate transactions. Use CGST and SGST together for intrastate transactions where buyer and seller are in the same state.",
  },
  {
    question: "What are the common GST slabs?",
    answer:
      "The common slabs are 0%, 5%, 12%, 18%, and 28%, depending on the product or service category.",
  },
  {
    question: "How do I reverse-calculate GST from a total amount?",
    answer:
      "Use the inclusive formula: base amount = total amount / (1 + rate/100). The GST amount is then total minus base amount.",
  },
  {
    question: "Does the calculator store my numbers?",
    answer:
      "The product is designed so calculation inputs stay local in the browser whenever possible. Preferences may be stored locally for convenience.",
  },
  {
    question: "Can I use the site for official filing decisions?",
    answer:
      "Use it for fast working calculations, but verify critical filing or compliance decisions with a tax professional or official source.",
  },
  {
    question: "How do I find the correct GST rate for my item?",
    answer:
      "Check the HSN or SAC classification and confirm the rate against the official GST portal or a qualified advisor for your exact item or service.",
  },
  {
    question: "Is LedgerKit India free?",
    answer:
      "Yes. The calculators are currently free to use, with no sign-up needed for normal usage.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <JsonLd data={jsonLd} />

      <section className="mx-auto max-w-7xl">
        <div className="surface-panel hero-grid relative overflow-hidden rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
                Frequently asked
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
                Clear answers for the questions users ask most.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                This page covers the recurring issues around GST rates, inclusive vs exclusive
                pricing, tax types, calculator usage, and product privacy.
              </p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-950 p-6 text-white dark:bg-teal-500 dark:text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65 dark:text-slate-900/65">
                Quick paths
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/calculators/gst" className="text-base font-semibold underline-offset-4 hover:underline">
                  Open GST calculator
                </Link>
                <Link href="/gst-rates" className="text-base font-semibold underline-offset-4 hover:underline">
                  Browse GST rates
                </Link>
                <Link href="/contact" className="text-base font-semibold underline-offset-4 hover:underline">
                  Contact the team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-5xl">
        <div className="surface-panel rounded-[2rem] p-4 md:p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-[1.6rem] border border-slate-200 bg-white/90 px-5 dark:border-slate-800 dark:bg-slate-900/90"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-bold tracking-tight text-slate-950 hover:no-underline dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-5xl">
        <div className="brand-gradient rounded-[2.2rem] p-8 text-white shadow-[0_28px_70px_-34px_rgba(8,145,178,0.7)] md:p-10">
          <h2 className="text-3xl font-black tracking-tight">Still missing an answer?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
            If your scenario involves a specific category, invoice flow, or filing edge case, use
            the contact page and include the exact context.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact support
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/12 text-white hover:bg-white/20">
                Read the guides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
