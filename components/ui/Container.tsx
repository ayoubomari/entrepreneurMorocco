import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8 lg:px-12",
        size === "narrow" && "max-w-5xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[90rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
