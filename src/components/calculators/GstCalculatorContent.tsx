import Link from "next/link";

export default function GstCalculatorContent() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          GST Calculation Formula
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
            <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">
              Add GST Formula
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              GST Amount = (Original Cost x GST Rate) / 100
              <br />
              Net Price = Original Cost + GST Amount
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
            <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">
              Reverse GST Formula
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Original Cost = Total Amount / (1 + GST Rate / 100)
              <br />
              GST Amount = Total Amount - Original Cost
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Types of GST
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              CGST
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Central Goods and Services Tax collected on intra-state sales.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              SGST
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              State Goods and Services Tax collected on intra-state sales.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              IGST
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Integrated GST collected on inter-state sales and imports.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Need to extract tax from an inclusive invoice? Use the <Link href="/calculators/remove-gst" className="font-semibold text-cyan-700 hover:underline dark:text-cyan-300">remove GST calculator</Link> or switch to the reverse tab above.
        </p>
      </div>
    </section>
  );
}
