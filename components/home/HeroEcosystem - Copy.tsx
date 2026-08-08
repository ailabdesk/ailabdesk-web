"use client";

import { motion } from "framer-motion";

import {
  Bot,
  Brain,
  Search,
  Zap,
  PenTool,
  Image,
  Video,
  Music4,
  Code2,
  Palette,
  Globe,
  BarChart3,
  LucideIcon,
} from "lucide-react";

interface OrbitItem {
  Icon: LucideIcon;
  label: string;
}

const rings = [
  {
    radius: 155,
    duration: 22,
    reverse: false,
    items: [
      { Icon: Bot, label: "AI" },
      { Icon: Brain, label: "Models" },
      { Icon: Search, label: "Search" },
      { Icon: Zap, label: "Automation" },
    ],
  },
  {
    radius: 230,
    duration: 36,
    reverse: true,
    items: [
      { Icon: PenTool, label: "Writing" },
      { Icon: Image, label: "Image" },
      { Icon: Video, label: "Video" },
      { Icon: Music4, label: "Audio" },
      { Icon: Globe, label: "Web" },
      { Icon: Code2, label: "Coding" },
    ],
  },
  {
    radius: 305,
    duration: 54,
    reverse: false,
    items: [
      { Icon: Palette, label: "Design" },
      { Icon: BarChart3, label: "Analytics" },
      { Icon: Bot, label: "Agents" },
      { Icon: Search, label: "Research" },
      { Icon: Brain, label: "LLMs" },
      { Icon: Zap, label: "Workflow" },
      { Icon: Globe, label: "Cloud" },
      { Icon: Code2, label: "Developer" },
    ],
  },
];

export default function HeroEcosystem() {
  return (
    <div className="relative flex h-[720px] w-[720px] items-center justify-center">

      {/* Ambient Glow */}

      <div
  className="absolute h-[650px] w-[650px] rounded-full blur-[150px]"
  style={{
    background:
      "radial-gradient(circle, rgba(255,137,12,.14) 0%, rgba(255,176,64,.08) 45%, transparent 72%)",
  }}
/>

      {/* Orbit rings go here */}
{rings.map((ring, ringIndex) => (
  <motion.div
    key={ringIndex}
    className="absolute rounded-full"
    style={{
      width: ring.radius * 2,
      height: ring.radius * 2,
      border: "1px solid rgba(255,137,12,.08)",
    }}
    animate={{
      rotate: ring.reverse ? -360 : 360,
      borderColor: [
        "rgba(255,137,12,.05)",
        "rgba(255,137,12,.18)",
        "rgba(255,137,12,.05)",
      ],
    }}
    transition={{
      rotate: {
        duration: ring.duration,
        repeat: Infinity,
        ease: "linear",
      },
      borderColor: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
  >
    {ring.items.map((item, itemIndex) => {
      const angle = (360 / ring.items.length) * itemIndex;

      return (
        <motion.div
          key={item.label}
          className="absolute left-1/2 top-1/2 group"
          style={{
            transform: `
              rotate(${angle}deg)
              translate(${ring.radius}px)
              rotate(-${angle}deg)
            `,
          }}
          whileHover={{
            scale: 1.12,
            y: -4,
          }}
        >
          {/* Orange Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-xl opacity-0 transition-all duration-300 group-hover:opacity-100" />

          {/* Icon Bubble */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-white shadow-xl transition-all duration-300 group-hover:border-orange-300">
            <item.Icon
              className="h-6 w-6 text-[#FF890C]"
              strokeWidth={2}
            />
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            {item.label}
          </div>
        </motion.div>
      );
    })}
  </motion.div>
))}

{/* Center Pulse */}
<motion.div
  className="absolute h-44 w-44 rounded-full border"
  style={{
    borderColor: "rgba(255,137,12,.15)",
  }}
  animate={{
    scale: [1, 1.18],
    opacity: [0.45, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
/>

{/* Center Card */}
<motion.div
  className="
    relative
    z-20
    flex
    h-50
    w-50
    flex-col
    items-center
    justify-center
    rounded-full
    border
    border-orange-100
    bg-white/90
    backdrop-blur-xl
    shadow-[0_20px_60px_rgba(0,0,0,.18)]
  "
  animate={{
    scale: [1, 1.02, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <motion.div
    className="mb-4 h-6 w-6 rounded-full bg-[#FF890C]"
    animate={{
      scale: [1, 1.35, 1],
      boxShadow: [
        "0 0 0 rgba(255,137,12,0)",
        "0 0 30px rgba(255,137,12,.6)",
        "0 0 0 rgba(255,137,12,0)",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
  />

  <h3 className="text-2xl font-bold text-[#0A0E1A]">
    AiLabDesk
  </h3>

  <p className="mt-3 flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.28em] text-slate-500">
    <span>Tools</span>

    <span className="h-1 w-1 rounded-full bg-[#FF890C]" />

    <span>Tech</span>

    <span className="h-1 w-1 rounded-full bg-[#FF890C]" />

    <span>Create</span>
  </p>
</motion.div>


      {/* Center card goes here */}




    </div>
  );
}