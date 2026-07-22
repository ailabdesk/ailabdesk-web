import { featuredTools } from "@/data/featuredTools";
import Container from "@/components/ui/Container";
import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";

export default function FeaturedTools() {
  return (
    <section className="py-24 bg-slate-50">

      <Container>

        <SectionHeader
          title="Featured AI Tools"
          subtitle="Hand-picked AI tools trusted by creators, developers, marketers and businesses."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {featuredTools.slice(0, 6).map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}