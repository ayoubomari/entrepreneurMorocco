import type { Variants } from "framer-motion";

// Ease curves
export const ease = {
  smooth: [0.25, 0.4, 0.25, 1] as const,
  out: [0.0, 0.0, 0.2, 1] as const,
  in: [0.4, 0.0, 1, 1] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
};

// Container that staggers children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fade up (most used)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

// Fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: ease.smooth },
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth },
  },
};

// Scale up (for cards)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ease.smooth },
  },
};

// Word-by-word text reveal
export const wordReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

export const wordRevealChild: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: ease.smooth },
  },
};

// Letter reveal for hero
export const letterReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const letterRevealChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: ease.smooth },
  },
};
