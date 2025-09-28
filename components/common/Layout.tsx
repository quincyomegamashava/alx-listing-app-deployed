import React from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold text-pink-600">
            alxbnb
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/properties" className="text-sm font-medium text-gray-700 hover:text-pink-600">Stays</Link>
            <Link href="/booking" className="text-sm font-medium text-gray-700 hover:text-pink-600">Trips</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="hidden sm:inline text-sm text-gray-700 hover:text-pink-600">Login</Link>
            <Link href="#" className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50">Sign up</Link>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-100 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Support</Link>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} ALX. Inspired by Airbnb.</p>
        </div>
      </footer>
    </div>
  );
}
