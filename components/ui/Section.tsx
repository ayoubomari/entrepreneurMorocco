"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { staggerContainer } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={cn("py-24 md:py-32 lg:py-40", className)}
    >
      {children}
    </motion.section>
  );
}
