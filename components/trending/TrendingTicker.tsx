"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { tools } from "@/data/tools";

export default function TrendingTicker() {
  const trending = [...tools, ...tools];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-5">
      <div className="ticker flex gap-8 whitespace-nowrap">

        {trending.map((tool, index) => (
          <div
            key={`${tool.id}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={28}
              height={28}
            />

            <span className="font-semibold">
              {tool.name}
            </span>

            <div className="flex items-center gap-1 text-orange-500">
              <Star
                size={14}
                fill="currentColor"
              />

              {tool.rating}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}