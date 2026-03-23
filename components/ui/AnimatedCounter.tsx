"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ value, className = "", style }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animateValue(value);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  function animateValue(target: string) {
    // Extract numeric part, prefix and suffix
    const match = target.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(target);
      return;
    }

    const prefix = match[1];
    const numericTarget = parseInt(match[2], 10);
    const suffix = match[3];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numericTarget / steps;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      setDisplayValue(`${prefix}${Math.round(current)}${suffix}`);
    }, stepDuration);
  }

  return (
    <span ref={ref} className={className} style={style}>
      {displayValue}
    </span>
  );
}
