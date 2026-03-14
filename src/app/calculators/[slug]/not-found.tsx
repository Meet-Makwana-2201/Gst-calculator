export default function CalculatorNotFound() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        Calculator not found
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        The calculator you requested does not exist or is not published in the
        active registry.
      </p>
    </main>
  );
}
