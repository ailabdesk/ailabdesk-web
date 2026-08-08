"use client";

import { motion } from "framer-motion";

interface ConnectionLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  active?: boolean;
  delay?: number;
}

export default function ConnectionLine({
  from,
  to,
  active = false,
  delay = 0,
}: ConnectionLineProps) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
    >
      {/* Base connection */}
      <line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke="rgba(44,74,99,0.18)"
        strokeWidth="1.5"
      />

      {/* Discovery pulse */}
      {active && (
        <motion.circle
          r="4"
          fill="#FF890C"
          initial={{
            cx: `${from.x}%`,
            cy: `${from.y}%`,
            opacity: 0,
          }}
          animate={{
            cx: `${to.x}%`,
            cy: `${to.y}%`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
        />
      )}
    </svg>
  );
}