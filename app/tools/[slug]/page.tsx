import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle2,
} from "lucide-react";

import { tools } from "@/data/tools";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const isAffiliateApproved =
  tool.affiliateStatus === "approved" &&
  Boolean(tool.affiliateUrl);

    const destinationUrl = isAffiliateApproved
    ? tool.affiliateUrl!
    : tool.website;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-orange-600"
          >
            <ArrowLeft size={16} />
            Back to AiLabDesk
          </Link>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start">

            {/* Logo */}
            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl"
              style={{
                backgroundColor: `${tool.color}15`,
              }}
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="h-14 w-14 object-contain"
              />
            </div>

            {/* Product information */}
            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  {tool.category}
                </span>

                {tool.badge && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {tool.badge}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                {tool.name}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">

                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />

                  <span className="font-semibold text-slate-900">
                    {tool.rating}
                  </span>

                  <span className="text-sm text-slate-500">
                    AiLabDesk rating
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-600">
                  {tool.pricing}
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Main review area */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-slate-900">
                About {tool.name}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-8 border-t border-slate-200 pt-8">

                <h3 className="text-xl font-bold text-slate-900">
                  Why consider {tool.name}?
                </h3>

                <div className="mt-5 space-y-4">

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <p className="text-slate-600">
                      A {tool.category.toLowerCase()} solution worth
                      exploring based on its current offering.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <p className="text-slate-600">
                      Currently listed and evaluated as part of the
                      AiLabDesk product directory.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <p className="text-slate-600">
                      Pricing and product availability should always be
                      confirmed on the provider's website.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* CTA */}
          <aside>

            <div className="sticky top-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                AiLabDesk Recommendation
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Explore {tool.name}
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Visit the provider's website to explore the product,
                features, pricing, and current availability.
              </p>

              <a
                href={destinationUrl}
                target="_blank"
                rel={
                isAffiliateApproved
                    ? "sponsored noopener noreferrer"
                    : "noopener noreferrer"
                }
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold !text-white transition-colors hover:bg-orange-500"
              >
                Visit {tool.name}
                <ExternalLink size={16} />
              </a>

              {isAffiliateApproved && ( 
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  AiLabDesk may earn a commission if you purchase through
                  this link. This does not affect our recommendation.
                </p>
              )}

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}