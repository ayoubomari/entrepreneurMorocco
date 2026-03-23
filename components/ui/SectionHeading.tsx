"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-full border border-[var(--accent)]/30 text-[var(--accent-light)] bg-[var(--accent-glow)]"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-heading font-extrabold uppercase tracking-tight text-[var(--text-primary)]"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-4 text-lg text-[var(--text-secondary)] leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
