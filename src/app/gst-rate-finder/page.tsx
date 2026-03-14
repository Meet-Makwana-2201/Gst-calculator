import Link from "next/link";

import GSTRateFinder from "@/components/GSTRateFinder";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "GST Rate Finder | Search HSN Codes, Categories and Rates",
  description:
    "Search GST rates for products and services in India by HSN code, product name, or category with a cleaner lookup experience.",
  alternates: {
    canonical: "https://onecalculator.online/gst-rate-finder",
  },
  openGraph: {
    title: "GST Rate Finder | LedgerKit India",
    description:
      "Search GST rates for products and services in India by HSN code, product name, or category.",
    url: "/gst-rate-finder",
    siteName: "LedgerKit India",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "GST Rate Finder" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Rate Finder | LedgerKit India",
    description:
      "Search GST rates for products and services in India by HSN code, product name, or category.",
    images: ["/logo.svg"],
  },
};

const slabs = [
  { rate: "0% and 5%", detail: "Essential items, staples, and some lower-tax categories" },
  { rate: "12%", detail: "Selected processed goods, devices, and mid-tier categories" },
  { rate: "18%", detail: "The standard slab for many goods and services" },
  { rate: "28%", detail: "Luxury and high-tax categories" },
];

export default function GSTRateFinderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LedgerKit India GST Rate Finder",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Search and find GST rates for products and services in India using HSN and category-based queries.",
  };

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <JsonLd data={jsonLd} />

      <section className="mx-auto max-w-7xl">
        <div className="surface-panel hero-grid relative overflow-hidden rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
                HSN and rate lookup
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
                Find the rate first, calculate second.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Search by HSN code, product name, or category. This page is designed to reduce the
                friction between lookup and calculation.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {slabs.map((slab) => (
                <div
                  key={slab.rate}
                  className="rounded-[1.7rem] border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/90"
                >
                  <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    {slab.rate}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {slab.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <GSTRateFinder />
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Reference context
          </p>
          <div className="prose prose-lg mt-4 max-w-none dark:prose-invert">
            <p>
              HSN is the Harmonized System of Nomenclature used to classify traded goods. Under the
              GST system in India, that classification is one of the key ways the applicable slab
              is determined.
            </p>
            <p>
              This finder is useful when you need to narrow your likely slab quickly before running
              an invoice or pricing calculation. It should still be treated as a decision aid, not
              the final authority for a sensitive filing scenario.
            </p>
          </div>
        </div>

        <div className="brand-gradient rounded-[2rem] p-6 text-white shadow-[0_24px_60px_-28px_rgba(8,145,178,0.72)] md:p-8">
          <h2 className="text-3xl font-black tracking-tight">Ready to apply the rate?</h2>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Once you find the likely slab, move directly into the calculator flow for inclusive,
            exclusive, CGST, SGST, or IGST calculations.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/calculators/gst">
              <Button size="lg" variant="secondary">
                Open GST calculator
              </Button>
            </Link>
            <Link href="/gst-rates">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/12 text-white hover:bg-white/20">
                Browse rate chart
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
