interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">

      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        Featured
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        {subtitle}
      </p>

    </div>
  );
}