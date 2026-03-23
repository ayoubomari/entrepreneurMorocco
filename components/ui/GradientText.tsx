import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component className={cn("gradient-text", className)}>{children}</Component>
  );
}
