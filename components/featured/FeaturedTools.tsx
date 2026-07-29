import SectionHeader from "@/components/ui/SectionHeader";
import SectionBackground from "@/components/ui/SectionBackground";
import ToolCard from "./ToolCard";
import { tools } from "@/data/tools";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedTools() {
  const featuredTools = tools.filter((tool) => tool.featured);

  return (
    <SectionBackground variant="light">
  <div className="mx-auto max-w-6xl px-6 py-14">

    {/* Section Header */}
    <SectionHeader
      badge="🔥 Featured"
      title="Featured AI Tools"
      description="Discover our curated selection of trusted AI tools for creators, developers, businesses, and professionals."
    />

    {/* Tool Grid */}
    <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {featuredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>

    {/* 👇 ADD IT HERE */}
    <div className="mt-14 flex justify-center">
      <Link
        href="/tools"
        className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:border-orange-300 hover:text-orange-600 hover:shadow-md"
      >
        View All AI Tools

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>

  </div>
</SectionBackground>
  );
}