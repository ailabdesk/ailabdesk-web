"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NetworkNodeProps {
  Icon: LucideIcon;
  label: string;
  active?: boolean;
}

export default function NetworkNode({
  Icon,
  label,
  active = false,
}: NetworkNodeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.12,
        y: -4,
      }}
      className="group relative"
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
          active
            ? "bg-orange-300/40 opacity-100"
            : "bg-orange-200/0 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Icon */}
      <div
        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 ${
          active
            ? "bg-orange-500 border-orange-500 text-white shadow-orange-300/40"
            : "bg-white border-orange-100 text-slate-600 group-hover:border-orange-300"
        }`}
      >
        <Icon size={18} />
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-[10px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        {label}
      </div>
    </motion.div>
  );
}