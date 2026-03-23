"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3";
}

export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const Component = motion.create(as);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
