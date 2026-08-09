import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bot,
  Code2,
  Search,
  Image,
  Mic2,
} from "lucide-react";

import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

const iconMap = {
  "AI Assistant": Bot,
  "AI Coding": Code2,
  "AI Search": Search,
  "Image Generation": Image,
  "Voice AI": Mic2,
} as const;

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const categoryTools = tools.filter(
    (tool) => tool.category === category.toolCategory
  );

  const Icon =
    iconMap[
      category.toolCategory as keyof typeof iconMap
    ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-orange-600"
          >
            <ArrowLeft size={16} />
            Back to AiLabDesk
          </Link>

          <div className="flex items-start gap-5">

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100">
              {Icon && (
                <Icon
                  size={30}
                  className="text-orange-600"
                />
              )}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                AI Category
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {category.title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {category.description}
              </p>

              <p className="mt-4 text-sm font-medium text-slate-500">
                {categoryTools.length}{" "}
                {categoryTools.length === 1
                  ? "Product"
                  : "Products"}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        {categoryTools.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              No products yet
            </h2>

            <p className="mt-3 text-slate-600">
              We're currently building this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {categoryTools.map((tool) => (
              <article
                key={tool.id}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >

                <div className="flex items-start justify-between gap-4">

                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${tool.color}15`,
                    }}
                  >
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {tool.badge && (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {tool.badge}
                    </span>
                  )}

                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-900">
                  {tool.name}
                </h2>

                <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                  {tool.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-slate-900">
                      ★ {tool.rating}
                    </span>

                    <span className="ml-3 text-sm text-slate-500">
                      {tool.pricing}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/tools/${tool.slug}`}
                  className="mt-6 flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-orange-500"
                >
                  View Product
                </Link>

              </article>
            ))}

          </div>
        )}

      </section>
    </main>
  );
}