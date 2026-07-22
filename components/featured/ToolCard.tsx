import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { Tool } from "@/types/tool";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl">

      {/* Logo */}

      <div className="flex justify-center">

        <Image
          src={tool.logo}
          alt={tool.name}
          width={72}
          height={72}
          className="h-[72px] w-[72px] object-contain"
        />

      </div>

      {/* Name */}

      <h3 className="mt-6 text-center text-xl font-bold">
        {tool.name}
      </h3>

      {/* Category */}

      <p className="mt-2 text-center text-sm text-slate-500">
        {tool.category}
      </p>

      {/* Rating + Pricing */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-1 text-orange-500">

          <Star size={16} fill="currentColor" />

          <span className="font-semibold">
            {tool.rating}
          </span>

        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
          {tool.pricing}
        </span>

      </div>

      {/* Button */}

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-orange-500">

        Learn More

        <ArrowUpRight size={18} />

      </button>

    </div>
  );
}