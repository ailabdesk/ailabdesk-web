import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Ai<span className="text-orange-500">Lab</span>Desk
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            AI Tools
          </Link>

          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Categories
          </Link>

          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Guides
          </Link>

          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </Link>
        </nav>

        <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
          Explore
        </button>
      </div>
    </header>
  );
}