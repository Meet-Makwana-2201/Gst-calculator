import Link from "next/link";

export const metadata = {
  title: "Privacy | LedgerKit India",
  description:
    "Read how LedgerKit India handles privacy, local preferences, analytics boundaries, and calculation data expectations.",
  alternates: {
    canonical: "https://onecalculator.online/privacy",
  },
  openGraph: {
    title: "Privacy | LedgerKit India",
    description:
      "Read how LedgerKit India handles privacy, local preferences, analytics boundaries, and calculation data expectations.",
    url: "/privacy",
    siteName: "LedgerKit India",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "LedgerKit India Privacy" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | LedgerKit India",
    description:
      "Read how LedgerKit India handles privacy, local preferences, analytics boundaries, and calculation data expectations.",
    images: ["/logo.svg"],
  },
};

const principles = [
  "Calculation inputs are intended to stay local in the browser for normal usage flows.",
  "Preference data such as selected options may be stored locally on the device for convenience.",
  "The product does not depend on account creation for basic calculator use.",
  "Analytics, where used, should remain aggregate and non-sensitive rather than tied to personal financial entries.",
];

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <section className="mx-auto max-w-6xl">
        <div className="surface-panel hero-grid relative overflow-hidden rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
                Privacy
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
                A cleaner product should also have a clearer privacy posture.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                This page explains the product’s current privacy expectations, what stays local,
                and the limits of what the site should do with calculator-related data.
              </p>
            </div>
            <div className="rounded-[1.8rem] bg-slate-950 p-6 text-white dark:bg-teal-500 dark:text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/65 dark:text-slate-900/65">
                Last updated
              </p>
              <p className="mt-3 text-2xl font-black tracking-tight">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
            Core principles
          </p>
          <div className="mt-5 grid gap-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/90"
              >
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>What we keep minimal</h2>
            <p>
              The product is designed around quick calculator usage without forcing unnecessary
              identity capture. That means no account requirement for normal calculator flows and no
              need to store sensitive calculation inputs remotely just to deliver a result.
            </p>
            <h2>Preferences and local storage</h2>
            <p>
              Some user preferences, such as currency or tax mode selection, may be stored locally
              in the browser to make repeat usage easier. This is device-level convenience data,
              not the same as storing financial records in a backend system.
            </p>
            <h2>Third-party services</h2>
            <p>
              Hosting, analytics, and operational tooling may involve third-party infrastructure.
              These integrations should be limited to operational needs and should not require
              transmitting detailed calculator entries as user profiles.
            </p>
            <h2>Important boundary</h2>
            <p>
              For official filings, sensitive commercial workflows, or regulated reporting, users
              should still rely on professional advice and official channels where required. This
              site is a product tool, not a substitute for regulated tax advice.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="brand-gradient rounded-[2.2rem] p-8 text-white shadow-[0_28px_70px_-34px_rgba(8,145,178,0.7)] md:p-10">
          <h2 className="text-3xl font-black tracking-tight">Questions about privacy or data handling?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
            Use the contact page if you need clarification about data handling, preferences, or a
            specific product interaction.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Contact the team
            </Link>
            <Link
              href="/calculators"
              className="inline-flex rounded-full border border-white/30 bg-white/12 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Back to calculators
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
