"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]",
    secondary:
      "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent-light)] bg-transparent",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-transparent",
  };

  const sizes = {
    default: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
