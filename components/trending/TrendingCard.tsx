"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TrendingCardProps {
  name: string;
  logo: string;
  category: string;
  pricing: string;
  rating: string;
}

export default function TrendingCard({
  name,
  logo,
  category,
  pricing,
  rating,
}: TrendingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-7
      shadow-sm
      hover:shadow-2xl
      transition-all
      duration-300
    "
    >
      {/* Gradient */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        bg-gradient-to-br
        from-orange-100/40
        via-transparent
        to-sky-100/40
      "
      />

      {/* Logo */}

      <div className="relative z-10 flex items-center justify-between">

        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-slate-50
          shadow-inner
        "
        >
          <Image
            src={logo}
            alt={name}
            width={42}
            height={42}
          />
        </div>

        <span
          className="
          rounded-full
          bg-orange-100
          px-3
          py-1
          text-xs
          font-semibold
          text-orange-600
        "
        >
          {pricing}
        </span>

      </div>

      {/* Content */}

      <div className="relative z-10 mt-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-slate-500">
          {category}
        </p>

      </div>

      {/* Footer */}

      <div
        className="
        relative
        z-10
        mt-10
        flex
        items-center
        justify-between
      "
      >
        <span
          className="
          rounded-full
          bg-slate-100
          px-3
          py-1
          text-sm
          font-medium
        "
        >
          ⭐ {rating}
        </span>

        <button
          className="
          rounded-xl
          bg-orange-500
          px-5
          py-2
          font-semibold
          text-white
          transition
          hover:bg-orange-600
        "
        >
          View
        </button>

      </div>

    </motion.div>
  );
}