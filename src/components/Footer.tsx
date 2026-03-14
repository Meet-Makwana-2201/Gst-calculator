import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { href: "/calculators", label: "All Calculators" },
      { href: "/calculators/gst", label: "GST Calculator" },
      { href: "/gst-rate-finder", label: "GST Rate Finder" },
      { href: "/gst-rates", label: "GST Rates" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Guides and Updates" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    title: "Popular Tools",
    links: [
      { href: "/calculators/emi", label: "EMI Calculator" },
      { href: "/calculators/discount", label: "Discount Calculator" },
      { href: "/calculators/profit-loss", label: "Profit and Loss" },
      { href: "/calculators/percentage", label: "Percentage Calculator" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-6 pt-16 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 text-white shadow-[0_30px_90px_-42px_rgba(15,23,42,0.8)]">
        <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.2fr_2fr] lg:gap-14 lg:py-14">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_14px_34px_-20px_rgba(255,255,255,0.4)]">
                <Image src="/logo.svg" alt="LedgerKit India logo" width={56} height={56} className="h-12 w-12" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">LedgerKit India</p>
                <p className="text-sm text-slate-300">Clean tools for tax, pricing, and finance</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              A redesigned calculator workspace for India. Faster scanning, clearer inputs, and
              decision-ready results across GST, EMI, pricing, interest, and business workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/calculators"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Explore tools
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Contact team
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-400">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-slate-200 transition hover:text-amber-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-4 text-sm text-slate-400 md:px-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>Copyright {new Date().getFullYear()} LedgerKit India. All rights reserved.</p>
            <p>Built for speed, clarity, and mobile-first finance workflows.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
