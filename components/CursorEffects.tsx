"use client";

import { useEffect, useRef } from "react";

export default function CursorEffects() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqHover = window.matchMedia("(hover: hover)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqHover.matches || mqReduce.matches) return;

    /* ── Site background ── */
    if (!document.getElementById("site-bg")) {
      const siteBg = document.createElement("div");
      siteBg.id = "site-bg";
      siteBg.style.cssText =
        "position:fixed;inset:0;z-index:0;pointer-events:none;background:var(--bg-primary, #050505);";
      document.body.insertBefore(siteBg, document.body.firstChild);
    }

    /* ── Custom cursor dot ── */
    let cursor = document.getElementById("cursor-el") as HTMLDivElement | null;
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.id = "cursor-el";
      cursor.className = "cursor";
      document.body.appendChild(cursor);
    }

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    /* ── Smooth cursor follow with rAF ── */
    let cursorX = -100;
    let cursorY = -100;

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX - 8}px, ${cursorY - 8}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    /* ── Hover effects (debounced binding) ── */
    const bound = new WeakSet<Element>();
    const handleEnter = () => cursor!.classList.add("hover");
    const handleLeave = () => cursor!.classList.remove("hover");

    const bindInteractive = () => {
      const els = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select',
      );
      els.forEach((el) => {
        if (bound.has(el)) return;
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
        bound.add(el);
      });
    };
    bindInteractive();

    // Re-bind on DOM changes, but throttled
    let bindTimeout: ReturnType<typeof setTimeout>;
    const mo = new MutationObserver(() => {
      clearTimeout(bindTimeout);
      bindTimeout = setTimeout(bindInteractive, 300);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    /* ── Cursor visibility ── */
    const handleDocLeave = () => {
      if (cursor) cursor.style.opacity = "0";
    };
    const handleDocEnter = () => {
      if (cursor) cursor.style.opacity = "1";
    };
    document.addEventListener("mouseleave", handleDocLeave);
    document.addEventListener("mouseenter", handleDocEnter);

    /* ── Click effect ── */
    const handleDown = () => cursor!.classList.add("click");
    const handleUp = () => cursor!.classList.remove("click");
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    /* ── Scroll progress bar (FIXED) ── */
    const progressBar = document.createElement("div");
    // CHANGED: Fixed width to 100%, and added transform properties to bypass reflow
    progressBar.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,#dc2626,#ef4444);z-index:10000;pointer-events:none;transform-origin:left center;transform:scaleX(0);will-change:transform;";
    document.body.appendChild(progressBar);

    let scrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const onResize = () => {
      scrollableHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      handleScroll(); // Trigger update on resize too
    };
    window.addEventListener("resize", onResize, { passive: true });

    // CHANGED: Added ticking state and requestAnimationFrame batching
    let scrollRafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        scrollRafId = requestAnimationFrame(() => {
          // Calculate the scroll ratio (0 to 1)
          const ratio =
            scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

          // Apply scaleX instead of updating the width property
          progressBar.style.transform = `scaleX(${ratio})`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(scrollRafId); // Ensure scroll RAF is cancelled on unmount
      clearTimeout(bindTimeout);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleDocLeave);
      document.removeEventListener("mouseenter", handleDocEnter);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      mo.disconnect();
      progressBar.remove();
      cursor?.remove();
    };
  }, []);

  return null;
}
