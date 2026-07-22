"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex h-16 w-full items-center rounded-full border border-[var(--color-border)] bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-md">

      <Search
        size={20}
        className="text-[var(--color-text-light)]"
      />

      <input
        type="text"
        placeholder="Search AI tools..."
        className="ml-4 flex-1 bg-transparent text-[15px] outline-none placeholder:text-[var(--color-text-light)]"
      />

      <button
        className="ml-4 rounded-full bg-[var(--color-accent)] p-3 text-white transition hover:scale-105"
      >
        <Search size={18} />
      </button>

    </div>
  );
}