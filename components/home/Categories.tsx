import Link from "next/link";
import {
  Bot,
  Code2,
  PenTool,
  Image,
  Video,
  Mic2,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    title: "AI Assistants",
    icon: Bot,
    count: "12 Tools",
    href: "/categories/ai-assistants",
  },
  {
    title: "Coding",
    icon: Code2,
    count: "8 Tools",
    href: "/categories/coding",
  },
  {
    title: "Writing",
    icon: PenTool,
    count: "14 Tools",
    href: "/categories/writing",
  },
  {
    title: "Image Generation",
    icon: Image,
    count: "9 Tools",
    href: "/categories/image-generation",
  },
  {
    title: "Video",
    icon: Video,
    count: "7 Tools",
    href: "/categories/video",
  },
  {
    title: "Voice",
    icon: Mic2,
    count: "6 Tools",
    href: "/categories/voice",
  },
  {
    title: "Business",
    icon: Briefcase,
    count: "11 Tools",
    href: "/categories/business",
  },
  {
    title: "Education",
    icon: GraduationCap,
    count: "5 Tools",
    href: "/categories/education",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Browse by Category
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Explore AI Categories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Discover AI tools organized by category to quickly find
            the right solution for your workflow.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {

            const Icon = category.icon;

            return (

              <Link
                key={category.title}
                href={category.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-500">

                  <Icon
                    size={28}
                    className="text-orange-600 transition-colors duration-300 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {category.count}
                </p>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}