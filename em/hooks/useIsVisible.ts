import { useEffect, useState, useRef, RefObject } from "react";

/**
 * Hook to detect when an element enters the viewport.
 * @param options - IntersectionObserver options (threshold, rootMargin, etc.)
 * @param runOnce - If true, the observer disconnects after the first trigger (default: true)
 */
export function useIsVisible(
  options?: IntersectionObserverInit,
  runOnce: boolean = true
) {
  // We use a generic RefObject to allow any HTML element type
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);

        // If we only want the animation to trigger once, we stop observing
        if (runOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      } else if (!runOnce) {
        // If runOnce is false, we reset visibility when it leaves screen
        // (Useful if you want the animation to play every time you scroll back)
        setIsVisible(false);
      }
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options, runOnce]);

  return { elementRef, isVisible };
}
