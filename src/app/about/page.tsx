import Link from "next/link";

import ShareButtons from "@/components/ShareButtons";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About LedgerKit India | Mission, Product Direction and Trust",
  description:
    "Learn how LedgerKit India is building clearer GST, finance, and business calculators for India with a cleaner product experience.",
  keywords: [
    "about LedgerKit India",
    "GST calculator mission",
    "finance tools India",
    "calculator product story",
  ],
  alternates: {
    canonical: "https://onecalculator.online/about",
  },
  openGraph: {
    title: "About LedgerKit India",
    description:
      "Learn how LedgerKit India is building clearer GST, finance, and business calculators for India.",
    url: "/about",
    siteName: "LedgerKit India",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "LedgerKit India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LedgerKit India",
    description:
      "Learn how LedgerKit India is building clearer GST, finance, and business calculators for India.",
    images: ["/logo.svg"],
  },
};

const principles = [
  {
    title: "Clarity over clutter",
    description:
      "We strip away template noise so users can understand inputs, outputs, and next steps faster.",
  },
  {
    title: "Privacy by default",
    description:
      "Calculations are designed to stay local whenever possible, with minimal friction and no account walls.",
  },
  {
    title: "Built for action",
    description:
      "Guides, calculators, and references are connected so users can move from reading to decision-making quickly.",
  },
  {
    title: "Scalable publishing",
    description:
      "The content system now supports a larger SEO program without duplicating routing and metadata logic.",
  },
];

export default function About() {
  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <section className="mx-auto max-w-7xl">
        <div className="surface-panel hero-grid relative overflow-hidden rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
                About the product
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
                LedgerKit India is building finance tools that feel intentional.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                The product started as a GST utility and is being rebuilt into a cleaner decision
                workspace for tax, lending, pricing, and business math in India.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/calculators">
                  <Button size="lg">Explore calculators</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact the team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.8rem] bg-slate-950 p-6 text-white dark:bg-teal-500 dark:text-slate-950">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65 dark:text-slate-900/65">
                  Mission
                </p>
                <p className="mt-3 text-lg leading-8">
                  Make complex GST and finance workflows easier to understand, faster to complete,
                  and cleaner to trust.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/90">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-200">
                  GST, EMI, pricing, interest, and the supporting content architecture needed for a
                  serious SEO-led product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <article key={principle.title} className="surface-panel rounded-[1.9rem] p-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {principle.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Why this exists
          </p>
          <div className="prose prose-lg mt-4 max-w-none dark:prose-invert">
            <p>
              Many finance tools on the web are still built like ad-heavy utilities: hard to scan,
              visually inconsistent, and disconnected from the content users need to understand the
              result. LedgerKit India is being rebuilt to solve that product gap.
            </p>
            <p>
              The goal is not only accurate calculation, but better decision support. That means
              clearer inputs, calmer layouts, stronger page hierarchy, and a content system that
              can support a few hundred search-targeted articles without duplicating page logic.
            </p>
            <p>
              We also take a conservative approach to privacy and product complexity. The tool
              should be immediately useful without forcing users into registration or unnecessary
              data sharing.
            </p>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
            Feedback directly shapes the product.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            If you have a bug report, a content gap, or a high-value calculator idea, use the
            contact page. That is the fastest path for corrections and roadmap suggestions.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button>Open contact page</Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">Read the guides</Button>
            </Link>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
            <p className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Share LedgerKit India
            </p>
            <ShareButtons
              url="https://onecalculator.online"
              title="LedgerKit India - Modern GST and finance calculators"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
