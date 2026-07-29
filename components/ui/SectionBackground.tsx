import { ReactNode } from "react";
import clsx from "clsx";

interface SectionBackgroundProps {
  children: ReactNode;
  variant?: "white" | "light" | "gradient" | "dark";
  glow?: boolean;
  grid?: boolean;
  className?: string;
}

export default function SectionBackground({
  children,
  variant = "white",
  glow = true,
  grid = true,
  className,
}: SectionBackgroundProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        {
          white: "bg-white",

          light: "bg-slate-50",

          gradient:
            "bg-gradient-to-b from-white via-slate-50 to-white",

          dark:
            "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white",
        }[variant],
        className
      )}
    >
      {/* Glow */}
      {glow && (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-200 blur-[160px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-200 blur-[180px]" />
        </div>
      )}

      {/* Grid */}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#0f172a 1px,transparent 1px),
              linear-gradient(to bottom,#0f172a 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}