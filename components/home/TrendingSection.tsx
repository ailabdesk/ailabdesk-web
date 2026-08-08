"use client";


import Container from "../ui/Container";
import TrendingCard from "../trending/TrendingCard";

const tools = [
  {
    name: "ChatGPT",
    logo: "/logos/chatgpt.svg",
    category: "AI Assistant",
    pricing: "Freemium",
    rating: "4.9",
  },
  {
    name: "Claude",
    logo: "/logos/claude.svg",
    category: "AI Assistant",
    pricing: "Freemium",
    rating: "4.9",
  },
  {
    name: "Gemini",
    logo: "/logos/gemini.svg",
    category: "AI Assistant",
    pricing: "Free",
    rating: "4.8",
  },
  {
    name: "Cursor",
    logo: "/logos/cursor.svg",
    category: "Coding",
    pricing: "Pro",
    rating: "4.9",
  },
];

export default function TrendingSection() {
  return (
    <section className="py-28">
      <Container>

        <div className="mb-14">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🔥 Trending
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Trending AI Tools
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Discover the most popular AI tools being used by creators,
            developers and businesses today.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {tools.map((tool) => (
            <TrendingCard
              key={tool.name}
              {...tool}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}