import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <section className="mx-auto max-w-4xl">
        <div className="surface-panel rounded-[2.2rem] px-6 py-12 text-center md:px-10 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            404
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Article not found
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            This blog URL does not match a published article in the content registry.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/blog">
              <Button size="lg">Back to blog</Button>
            </Link>
            <Link href="/calculators">
              <Button size="lg" variant="outline">
                Open calculators
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
