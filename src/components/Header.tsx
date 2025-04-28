'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          GSTCalc
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link href="/calculator" className="text-gray-700 hover:text-indigo-600">Calculator</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
        </nav>
      </div>
    </header>
  );
}
