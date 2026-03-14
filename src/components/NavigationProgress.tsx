"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 520);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(255,253,248,0.72)] backdrop-blur-2xl dark:bg-[rgba(2,6,23,0.72)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.16),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(245,158,11,0.16),transparent_24%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="surface-panel relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-[2rem] animate-float">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <Image src="/logo.svg" alt="LedgerKit India" width={72} height={72} className="h-18 w-18" />
        </div>

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
            Loading next view
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            Preparing the workspace
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-10 rounded-full bg-slate-950 animate-pulse dark:bg-white" />
          <span className="h-2.5 w-16 rounded-full bg-teal-600 animate-pulse [animation-delay:120ms] dark:bg-teal-400" />
          <span className="h-2.5 w-8 rounded-full bg-amber-500 animate-pulse [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}
