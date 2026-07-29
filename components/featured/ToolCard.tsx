import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Tool } from "@/types/tool";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex h-full flex-col
          rounded-3xl
          border border-slate-100
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-orange-300
          hover:shadow-2xl
          hover:bg-white
          hover:ring-1
          hover:ring-orange-100
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <Image
            src={tool.logo}
            alt={`${tool.name} logo`}
            width={52}
            height={52}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
            <Star
              size={14}
              fill="currentColor"
            />
            {tool.rating}
          </div>
        </div>

        {/* Title */}
        <div className="mt-5">
          <h3 className="text-xl font-bold text-slate-900">
            {tool.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-orange-600">
            {tool.category}
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 flex-grow text-[15px] leading-7 text-slate-600">
          {tool.description}
        </p>

        {/* Divider */}
        <div className="mt-8 border-t border-slate-100 pt-5">
          <span className="flex items-center gap-2 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
            Learn More

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}