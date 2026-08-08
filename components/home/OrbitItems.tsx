"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface OrbitItemProps {
  radius: number;
  angle: number;
  Icon: LucideIcon;
  label: string;
  size?: "sm" | "md" | "lg";
}

export default function OrbitItem({
  radius,
  angle,
  Icon,
  label,
  size = "md",
}: OrbitItemProps) {
  const dimensions = {
    sm: {
      wrapper: "h-10 w-10",
      icon: "h-5 w-5",
    },
    md: {
      wrapper: "h-12 w-12",
      icon: "h-6 w-6",
    },
    lg: {
      wrapper: "h-14 w-14",
      icon: "h-7 w-7",
    },
  };

  return (
    <motion.div
  initial={{
    opacity: 0,
    scale: 0,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -4, 0],
  }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: angle / 180 + 1.3,
    },

    scale: {
      duration: 0.6,
      delay: angle / 180 + 1.3,
      type: "spring",
      stiffness: 120,
    },

    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
    >
      {/* Orange Glow */}

      <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Bubble */}

      <div
        className={`
          ${dimensions[size].wrapper}
          relative
          flex
          items-center
          justify-center
          rounded-full
          overflow-hidden

          border
          border-white/70

          bg-white

          shadow-[0_12px_30px_rgba(255,137,12,.15)]

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:shadow-[0_20px_45px_rgba(255,137,12,.28)]
        `}
      >
        {/* Top Reflection */}

        <div className="absolute left-2 right-2 top-1 h-3 rounded-full bg-white/90 blur-md opacity-80" />

        {/* Soft Highlight */}

        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 via-transparent to-transparent" />

        {/* Icon */}

        <Icon
          className={`${dimensions[size].icon} relative z-10 text-[#FF890C]`}
          strokeWidth={2.2}
        />
      </div>

      {/* Tooltip */}

      <div className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        {label}
      </div>
    </motion.div>
  );
}