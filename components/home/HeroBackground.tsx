"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#F9FBFD]" />

      {/* Main Aurora */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 18% 30%, rgba(255,137,12,.28), transparent 38%),
            radial-gradient(circle at 82% 25%, rgba(8, 9, 10,.22), transparent 42%),
            radial-gradient(circle at 50% 95%, rgba(170,120,255,.12), transparent 45%)
          `,
          backgroundSize: "180% 180%",
          filter: "blur(70px)",
        }}
      />

      {/* Orange Ribbon */}
      <motion.div
        className="absolute -left-52 top-20 h-[650px] w-[650px] rounded-full"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,137,12,.22), transparent 70%)",
          filter: "blur(130px)",
        }}
      />

      {/* Blue Ribbon */}
      <motion.div
        className="absolute -right-56 top-0 h-[700px] w-[700px] rounded-full"
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(70,170,255,.18), transparent 70%)",
          filter: "blur(150px)",
        }}
      />

      {/* Purple Ribbon */}
      <motion.div
        className="absolute bottom-[-300px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.14), transparent 72%)",
          filter: "blur(170px)",
        }}
      />

      {/* Warm Spotlight behind hero */}
      <motion.div
        className="absolute left-[65%] top-[45%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,190,120,.22), transparent 70%)",
          filter: "blur(130px)",
        }}
      />

{/* Subtle Grid */}
<div
  className="absolute inset-0 opacity-[0.025]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(15,23,42,.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(15,23,42,.5) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
  }}
/>



    </div>
  );
}