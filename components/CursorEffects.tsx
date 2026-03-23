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
      const els = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
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
    const handleDocLeave = () => { if (cursor) cursor.style.opacity = "0"; };
    const handleDocEnter = () => { if (cursor) cursor.style.opacity = "1"; };
    document.addEventListener("mouseleave", handleDocLeave);
    document.addEventListener("mouseenter", handleDocEnter);

    /* ── Click effect ── */
    const handleDown = () => cursor!.classList.add("click");
    const handleUp = () => cursor!.classList.remove("click");
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    /* ── Scroll progress bar ── */
    const progressBar = document.createElement("div");
    progressBar.style.cssText =
      "position:fixed;top:0;left:0;width:0%;height:2px;background:linear-gradient(90deg,#dc2626,#ef4444);z-index:10000;pointer-events:none;";
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progressBar.style.width = height > 0 ? (winScroll / height) * 100 + "%" : "0%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(bindTimeout);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleDocLeave);
      document.removeEventListener("mouseenter", handleDocEnter);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      window.removeEventListener("scroll", handleScroll);
      mo.disconnect();
      progressBar.remove();
      cursor?.remove();
    };
  }, []);

  return null;
}
