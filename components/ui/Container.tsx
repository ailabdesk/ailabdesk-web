import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export default function Container({
  children,
  className,
  as = "div",
}: ContainerProps) {
  const Component = as;

  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-7xl px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}