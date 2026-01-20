import { useEffect, useState, useRef } from "react";

// 1. We create a storage for our observers outside the hook (Global scope)
// Key: JSON string of options -> Value: IntersectionObserver instance
const observers = new Map<string, IntersectionObserver>();

// 2. We create a map to link specific HTML elements to their React State setters
// Key: HTML Element -> Value: setIsVisible function
const listeners = new WeakMap<Element, (vis: boolean) => void>();

export function useIsVisible(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" },
  runOnce: boolean = true
) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // A unique key based on the options (so we can reuse observers with same settings)
    const optionsKey = JSON.stringify(options);

    // 1. Create the observer if it doesn't exist for these specific options
    if (!observers.has(optionsKey)) {
      const newObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Retrieve the specific state setter for this element
          const setVisible = listeners.get(entry.target);

          if (setVisible && entry.isIntersecting) {
            setVisible(true);

            // If runOnce is true, stop observing this specific element immediately
            if (runOnce) {
              const observer = observers.get(optionsKey);
              observer?.unobserve(entry.target);
              listeners.delete(entry.target);
            }
          } else if (setVisible && !runOnce && !entry.isIntersecting) {
            // Reset visibility if runOnce is false
            setVisible(false);
          }
        });
      }, options);

      observers.set(optionsKey, newObserver);
    }

    // 2. Register this element's listener (State Setter)
    listeners.set(element, setIsVisible);

    // 3. Start observing using the shared observer
    const observer = observers.get(optionsKey);
    observer?.observe(element);

    // Cleanup
    return () => {
      observer?.unobserve(element);
      listeners.delete(element);

      // Optional: Garbage collect the observer if no elements are left
      // (Usually not strictly necessary for a landing page, but good practice)
    };
  }, [options, runOnce]);

  return { elementRef, isVisible };
}
