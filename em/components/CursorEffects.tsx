"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqHover = window.matchMedia("(hover: hover)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqHover.matches || mqReduce.matches) return;

    /* ─────────────────────────────
       1) Ensure layers
       ───────────────────────────── */
    let blobLayer = document.getElementById(
      "blob-layer"
    ) as HTMLDivElement | null;
    if (!blobLayer) {
      blobLayer = document.createElement("div");
      blobLayer.id = "blob-layer";
      blobLayer.style.cssText =
        "position:fixed;inset:0;z-index:10;pointer-events:none;";
      document.body.appendChild(blobLayer);
    }
    if (!document.getElementById("site-bg")) {
      const siteBg = document.createElement("div");
      siteBg.id = "site-bg";
      siteBg.style.cssText =
        "position:fixed;inset:0;z-index:0;pointer-events:none;background:var(--background, #0a0a0a);";
      document.body.insertBefore(siteBg, document.body.firstChild);
    }

    /* ─────────────────────────────
       2) Create cursor
       ───────────────────────────── */
    let cursor = document.getElementById("cursor-el") as HTMLDivElement | null;
    if (!cursor) {
      cursor = document.createElement("div");
      cursor.id = "cursor-el";
      cursor.className = "cursor";
      document.body.appendChild(cursor);
    }

    /* ─────────────────────────────
       3) AKIRA-style trailing blobs
       ───────────────────────────── */
    const mount = blobLayer ?? document.body;
    const trailCount = 5;
    const trails: HTMLDivElement[] = [];

    // Create multiple trailing blobs
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement("div");
      trail.className = "blob-trail";
      const opacity = 0.3 - i * 0.05; // Fade out gradually
      const size = 400 - i * 30; // Get smaller as they trail

      trail.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(220, 38, 38, ${opacity}) 0%, rgba(239, 68, 68, ${
        opacity * 0.6
      }) 30%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        filter: blur(50px);
        opacity: ${1 - i * 0.15};
        transition: opacity 0.3s ease;
        mix-blend-mode: screen;
      `;
      mount.appendChild(trail);
      trails.push(trail);
    }

    // Track positions for smooth trailing
    const positions: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < trailCount; i++) {
      positions.push({ x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    /* ─────────────────────────────
       4) Mouse tracking
       ───────────────────────────── */
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor!.style.left = `${mouseX - 10}px`;
      cursor!.style.top = `${mouseY - 10}px`;
    };
    document.addEventListener("mousemove", handleMouseMove);

    /* ─────────────────────────────
       5) Animate trails with lag (AKIRA effect)
       ───────────────────────────── */
    const animateTrails = () => {
      // First blob follows mouse closely
      positions[0].x += (mouseX - positions[0].x) * 0.2;
      positions[0].y += (mouseY - positions[0].y) * 0.2;

      // Each subsequent blob follows the previous one with delay
      for (let i = 1; i < trailCount; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.15;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.15;
      }

      // Update blob positions
      trails.forEach((trail, i) => {
        trail.style.transform = `translate3d(calc(${positions[i].x}px - 50%), calc(${positions[i].y}px - 50%), 0)`;
      });

      requestAnimationFrame(animateTrails);
    };
    animateTrails();

    /* ─────────────────────────────
       6) Hover effects
       ───────────────────────────── */
    const bound = new Set<Element>();
    const handleEnter = () => cursor!.classList.add("hover");
    const handleLeave = () => cursor!.classList.remove("hover");

    const bindNewInteractive = () => {
      const interactive = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select'
      );
      interactive.forEach((el) => {
        if (bound.has(el)) return;
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
        bound.add(el);
      });
    };
    bindNewInteractive();

    const mo = new MutationObserver(bindNewInteractive);
    mo.observe(document.body, { childList: true, subtree: true });

    /* ─────────────────────────────
       7) Cursor visibility
       ───────────────────────────── */
    const handleDocLeave = () => {
      cursor!.style.opacity = "0";
      trails.forEach((t) => (t.style.opacity = "0"));
    };
    const handleDocEnter = () => {
      cursor!.style.opacity = "1";
      trails.forEach((t, i) => (t.style.opacity = String(1 - i * 0.15)));
    };
    document.addEventListener("mouseleave", handleDocLeave);
    document.addEventListener("mouseenter", handleDocEnter);

    /* ─────────────────────────────
       8) Click effect
       ───────────────────────────── */
    const handleDown = () => cursor!.classList.add("click");
    const handleUp = () => cursor!.classList.remove("click");
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    /* ─────────────────────────────
       9) Smooth anchor scrolling
       ───────────────────────────── */
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#") && href !== "#") {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 96;
          const elementPos = (targetEl as HTMLElement).getBoundingClientRect()
            .top;
          const offsetPos = elementPos + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPos, behavior: "smooth" });
        }
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleAnchorClick)
    );

    /* ─────────────────────────────
       10) Scroll progress bar
       ───────────────────────────── */
    const progressBar = document.createElement("div");
    progressBar.style.cssText =
      "position:fixed;top:0;left:0;width:0%;height:3px;background:linear-gradient(90deg,#dc2626,#ef4444);z-index:10000;transition:width 0.1s ease;";
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    };
    window.addEventListener("scroll", handleScroll);

    /* ─────────────────────────────
       11) Cleanup
       ───────────────────────────── */
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleDocLeave);
      document.removeEventListener("mouseenter", handleDocEnter);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      window.removeEventListener("scroll", handleScroll);

      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );

      bound.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      mo.disconnect();

      progressBar.remove();
      cursor?.remove();
      trails.forEach((t) => t.remove());
    };
  }, []);

  return null;
}
