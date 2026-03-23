"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/animations";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "rounded-2xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-sm p-6 md:p-8",
        hover &&
          "transition-all duration-500 hover:border-[var(--accent)]/20 hover:shadow-[0_0_40px_rgba(225,29,72,0.08)] hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
