"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const navItems = [
  { name: "AI Tools", href: "#" },
  { name: "Categories", href: "#" },
  { name: "Compare", href: "#" },
  { name: "Collections", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ailabdesk-logo.png"
            alt="AiLabDesk"
            width={190}
            height={50}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-slate-700 transition hover:text-[#FF8A00]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#FF8A00] hover:text-[#FF8A00]">
            <Search size={18} />
          </button>

          <button className="hidden text-[15px] font-medium text-slate-700 transition hover:text-[#FF8A00] md:block">
            Sign In
          </button>

          <button className="rounded-full bg-[#FF8A00] px-6 py-5 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg">
            Explore AI
          </button>

        </div>
      </div>
    </header>
  );
}