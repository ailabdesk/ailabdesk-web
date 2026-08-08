"use client";

import { motion } from "framer-motion";
import NetworkNode from "./NetworkNode";

import {
  Bot,
  Search,
  Code2,
  Image,
  Video,
  PenTool,
  Globe,
  Zap,
  Brain,
  Music4,
  BarChart3,
  Palette,
} from "lucide-react";

const orbitRings = [
  {
    radius: 110,
    duration: 18,
    reverse: false,
  },
  {
    radius: 170,
    duration: 28,
    reverse: true,
  },
  {
    radius: 235,
    duration: 38,
    reverse: false,
  },
];

const orbitItems = [
  { Icon: Bot, label: "AI Assistants", ring: 0 },
  { Icon: Search, label: "Search", ring: 0 },
  { Icon: Code2, label: "Coding", ring: 0 },
  { Icon: Image, label: "Image", ring: 0 },

  { Icon: Video, label: "Video", ring: 1 },
  { Icon: PenTool, label: "Writing", ring: 1 },
  { Icon: Globe, label: "Web", ring: 1 },
  { Icon: Zap, label: "Automation", ring: 1 },

  { Icon: Brain, label: "Models", ring: 2 },
  { Icon: Music4, label: "Audio", ring: 2 },
  { Icon: BarChart3, label: "Analytics", ring: 2 },
  { Icon: Palette, label: "Design", ring: 2 },
];

export default function HeroNetwork() {
  return (
    <div className="relative flex h-[560px] w-[560px] items-center justify-center">

      {/* Ambient Glow */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,137,12,.10), transparent 70%)",
        }}
      />

     
      {/* Outer Nodes */}
     
{orbitRings.map((ring, ringIndex) => (
  <motion.div
    key={ringIndex}
    className="absolute rounded-full border"
    style={{
      width: ring.radius * 2,
      height: ring.radius * 2,
      borderColor: "rgba(255,137,12,.08)",
    }}
    animate={{
      rotate: ring.reverse ? -360 : 360,
    }}
    transition={{
      duration: ring.duration,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {orbitItems
      .filter((item) => item.ring === ringIndex)
      .map((item, index, arr) => {
        const angle = (360 / arr.length) * index;

        return (
          <div
            key={item.label}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                rotate(${angle}deg)
                translate(${ring.radius}px)
                rotate(-${angle}deg)
              `,
            }}
          >
            <NetworkNode
              Icon={item.Icon}
              label={item.label}
              active={index === 0}
            />
          </div>
        );
      })}
  </motion.div>
))}

      {/* Center Ripple */}
      <motion.div
        className="absolute h-36 w-36 rounded-full border border-orange-300/20"
        animate={{
          scale: [1, 1.2],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Center */}
      <motion.div
        className="relative z-30 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-2xl"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="mb-3 h-4 w-4 rounded-full"
          style={{
            background: "#FF890C",
          }}
          animate={{
            scale: [1, 1.4, 1],
            boxShadow: [
              "0 0 0 rgba(255,137,12,0)",
              "0 0 18px rgba(255,137,12,.5)",
              "0 0 0 rgba(255,137,12,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <h3 className="text-xl font-bold text-[#0A0E1A]">
          AiLabDesk
        </h3>

        <p className="mt-1 text-[10px] tracking-[0.35em] uppercase text-slate-500">
          DISCOVERY HUB
        </p>
      </motion.div>
    </div>
  );
}