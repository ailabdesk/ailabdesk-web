import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div className={`mb-16 flex max-w-3xl flex-col ${alignment}`}>
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}