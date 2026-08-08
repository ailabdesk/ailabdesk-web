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
    radius: 302,
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
    <div className="relative flex h-[650px] w-[650px] items-center justify-center">

   {/* Ambient Glow */}

<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    z-0
    h-[650px]
    w-[650px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    blur-[150px]
  "
  style={{
    background:
      "radial-gradient(circle, rgba(255,137,12,.06) 0%, rgba(255,176,64,.025) 45%, transparent 72%)",
  }}
/>

      {/* Orbit rings go here */}
{rings.map((ring, ringIndex) => (
  <motion.div
    key={ringIndex}
    className="absolute left-1/2 top-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
    style={{
      width: ring.radius * 2,
      height: ring.radius * 2,
      border:
       ringIndex === 0
    ? "1px solid rgba(255,137,12,0)"
    : "1px solid rgba(255,137,12,.018)",
    }}
    animate={{
      rotate: ring.reverse ? -360 : 360,
    }}
    transition={{
      rotate: {
        duration: ring.duration,
        repeat: Infinity,
        ease: "linear",
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

  /* INTRO ONLY — plays once */
  initial={{
    opacity: 0,
  }}

  animate={{
    opacity: 1,
  }}

  transition={{
    opacity: {
      duration: 0.7,
      delay: ringIndex * 0.2 + itemIndex * 0.08,
      ease: "easeOut",
    },
  }}

  /* Existing hover — unchanged */
  whileHover={{
    scale: 1.50,
    y: -4,
  }}
>

          
          {/* Orange Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-300/30 blur-xl opacity-0 transition-all duration-300 group-hover:opacity-100" />

 {/* Glass Icon Bubble */}
{/* Intro animated bubble */}
<motion.div
  initial={{
  opacity: 0,
  scale: 0.05,
  x: 0,
  y: 40,
  rotate: -25,
  filter: "blur(12px)",
}}

animate={{
  opacity: 1,
  scale: [0.05, 1.35, 0.92, 1],
  x: [0, 0, 0, 0],
  y: [40, -10, 3, 0],
  rotate: [-25, 10, -2, 0],
  filter: [
    "blur(12px)",
    "blur(4px)",
    "blur(0px)",
    "blur(0px)",
  ],
}}

transition={{
  duration: 1.0,
  delay:
    0.5 +
    ringIndex * 1.15 +
    itemIndex * 0.18,
  ease: [0.22, 1, 0.36, 1],
}}
>
  {/* Orange Glow */}
  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-orange-300/30
      blur-xl
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
    "
  />

  {/* Glass Icon Bubble */}
  <div
    className="
      relative
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      border
      border-white/80
      bg-white/08
      backdrop-blur-[3px]
      shadow-[0_8px_25px_rgba(30,40,60,.10)]
    "
  >
    {/* Glass Reflection */}
    <div
      className="
        pointer-events-none
        absolute
        inset-[1px]
        rounded-full
        bg-gradient-to-br
        from-white/90
        via-white/10
        to-transparent
      "
    />

    {/* Inner Giant Glow */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[350px]
        w-[350px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/20
        bg-white/[0.02]
        backdrop-blur-[1px]
        shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]
      "
    />

    {/* Icon */}
    <item.Icon
      className="relative z-20 h-6 w-6 text-[#FF890C]"
      strokeWidth={2}
    />
  </div>
</motion.div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            {item.label}
          </div>
        </motion.div>
      );
    })}
  </motion.div>
))}


{/* Subtle Center Ring */}
<motion.div
  className="
    absolute
    h-44
    w-44
    rounded-full
    border
    border-orange-200/[0.035]
    pointer-events-none
  "
  animate={{
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Center Card */}

<motion.div
  className="
    relative
    z-30
    flex
    h-50
    w-50
    flex-col
    items-center
    justify-center
    rounded-full
    border
    border-white/70
    bg-white/70
    backdrop-blur-md
    shadow-[0_20px_60px_rgba(0,0,0,.18)]
  "
initial={{
  opacity: 1,
  y: -220,
}}

animate={{
  y: [
    -220, // starts above
    0,    // hits its position
    -45,  // bounce up
    18,   // comes back down
    -12,  // smaller bounce
    5,    // tiny bounce
    0,    // settle
  ],
}}

transition={{
  duration: 2.8,
  delay: 0,
  times: [
    0,
    0.55,
    0.70,
    0.80,
    0.88,
    0.94,
    1,
  ],
  ease: "easeOut",
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


  

       </div>

     );
}