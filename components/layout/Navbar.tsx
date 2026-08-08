"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-800/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/ailabdesk-logo-trans.png"
              alt="AiLabDesk"
              width={250}
              height={60}
              priority
            />
          </Link>
        </motion.div>

      
       {/* Navigation */}
<nav className="hidden items-center gap-12 lg:flex">
  {navItems.map((item, index) => (
    <motion.div
      key={item.name}
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: 0.20 + index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        y: -2,
        scale: 1.04,
      }}
    >
      <Link
        href={item.href}
        className="text-sm font-semibold"
      >
        <motion.span
          initial={{ color: "#FFFFFF" }}
          whileHover={{
            color: "#FF8A00",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {item.name}
        </motion.span>
      </Link>
    </motion.div>
  ))}
</nav>

        {/* Right Side */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.55,
            ease: "easeOut",
          }}
          className="flex items-center gap-4"
        >

          {/* Search */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-slate-700
              text-slate-200
              transition-colors
              duration-300
              hover:border-[#FF8A00]
              hover:text-[#FF8A00]
            "
          >
            <Search size={18} />
          </motion.button>

          {/* Sign In */}
          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              hidden
              text-[15px]
              font-medium
              text-slate-200
              transition-colors
              duration-300
              hover:text-[#FF8A00]
              md:block
            "
          >
            Sign In
          </motion.button>

          {/* Explore AI */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 12px 30px rgba(255,138,0,.25)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              rounded-full
              bg-[#FF8A00]
              px-6
              py-5
              text-sm
              font-semibold
              text-white
            "
          >
            Explore AI
          </motion.button>

        </motion.div>
      </div>
    </motion.header>
  );
}