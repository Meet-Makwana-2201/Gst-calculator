import Link from "next/link";

export default function RemoveGstContent() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
        How to Remove GST From Price
      </h2>
      <div className="prose prose-slate mt-6 max-w-none dark:prose-invert">
        <p>
          Removing GST from a final price requires reverse calculation. Divide the tax-inclusive amount by 1 plus the GST rate to recover the base amount.
        </p>
        <p>
          Original Price = Total Price / (1 + GST Rate / 100)
          <br />
          GST Amount = Total Price - Original Price
        </p>
        <p>
          Looking for the full GST suite? Visit the <Link href="/calculators/gst">GST calculator</Link> to switch between add-GST, reverse-GST, and remove-GST workflows.
        </p>
      </div>
    </section>
  );
}
