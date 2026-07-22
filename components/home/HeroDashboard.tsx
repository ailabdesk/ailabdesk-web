import Image from "next/image";
import { featuredTools } from "@/data/featuredTools";
import { ArrowRight } from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="hidden lg:block">

      <div className="w-[560px] rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,.08)]">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold text-orange-500">
              🔥 Trending AI
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              Most Popular Tools
            </h3>
          </div>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            Updated Daily
          </span>

        </div>

        <div className="mt-8 space-y-4">

          {featuredTools.slice(0, 6).map((tool, index) => (

            <div
              key={tool.id}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                  {index + 1}
                </div>

                <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-12 w-12 rounded-xl object-contain"
                    />

                <div>

                  <h4 className="font-semibold">
                    {tool.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {tool.category}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span className="font-semibold text-orange-500">
                  ★ {tool.rating}
                </span>

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}