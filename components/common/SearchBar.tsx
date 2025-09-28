import React from "react";

import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const q = String(fd.get("where") || "");
    const checkIn = String(fd.get("checkIn") || "");
    const checkOut = String(fd.get("checkOut") || "");
    const guests = String(fd.get("guests") || "");
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (guests) params.set("guests", guests);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    router.push(`/properties${params.toString() ? `?${params.toString()}` : ""}`);
  }

  return (
    <form className="mx-auto w-full md:w-auto" onSubmit={onSubmit}>
      <div className="hidden md:flex items-center divide-x divide-gray-200 rounded-full shadow-sm border border-gray-200 overflow-hidden bg-white">
        <input name="where" type="text" placeholder="Where" className="px-4 py-2 text-sm outline-none w-40" />
        <input name="checkIn" type="text" placeholder="Check in" className="px-4 py-2 text-sm outline-none w-32" />
        <input name="checkOut" type="text" placeholder="Check out" className="px-4 py-2 text-sm outline-none w-32" />
        <input name="guests" type="text" placeholder="Who" className="px-4 py-2 text-sm outline-none w-32" />
        <button type="submit" className="px-3 py-2 text-white bg-pink-600 hover:bg-pink-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l3.817 3.817a1 1 0 01-1.414 1.414l-3.817-3.817A6 6 0 012 8z" clipRule="evenodd"/></svg>
        </button>
      </div>
      <div className="md:hidden">
        <div className="flex items-center gap-2 p-2 border rounded-full shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l3.817 3.817a1 1 0 01-1.414 1.414l-3.817-3.817A6 6 0 012 8z" clipRule="evenodd"/></svg>
          <input name="where" className="flex-1 text-sm outline-none" placeholder="Where to?" />
        </div>
      </div>
    </form>
  );
}
