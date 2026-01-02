'use client';

import { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mqHover = window.matchMedia('(hover: hover)');
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mqHover.matches || mqReduce.matches) return;

    /* ─────────────────────────────
       1) Ensure layers (optional safety)
       ───────────────────────────── */
    let blobLayer = document.getElementById('blob-layer') as HTMLDivElement | null;
    if (!blobLayer) {
      blobLayer = document.createElement('div');
      blobLayer.id = 'blob-layer';
      blobLayer.style.cssText = 'position:fixed;inset:0;z-index:10;pointer-events:none;';
      document.body.appendChild(blobLayer);
    }
    if (!document.getElementById('site-bg')) {
      const siteBg = document.createElement('div');
      siteBg.id = 'site-bg';
      siteBg.style.cssText =
        'position:fixed;inset:0;z-index:0;pointer-events:none;background:var(--background, #0a0a0a);';
      document.body.insertBefore(siteBg, document.body.firstChild);
    }

    /* ─────────────────────────────
       2) Create cursor + blob
       ───────────────────────────── */
    let cursor = document.getElementById('cursor-el') as HTMLDivElement | null;
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'cursor-el';
      cursor.className = 'cursor';
      document.body.appendChild(cursor);
    }

    const mount = blobLayer ?? document.body;
    let blob = mount.querySelector('.blob') as HTMLDivElement | null;
    if (!blob) {
      blob = document.createElement('div');
      blob.className = 'blob';
      mount.appendChild(blob);
    }

    /* ─────────────────────────────
       3) Cursor + blob follow mouse
       ───────────────────────────── */
    const handleMouseMove = (e: MouseEvent) => {
      cursor!.style.left = `${e.clientX - 10}px`;
      cursor!.style.top = `${e.clientY - 10}px`;
      blob!.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };
    document.addEventListener('mousemove', handleMouseMove);

    /* ─────────────────────────────
       4) Hover effects (no duplicates)
       ───────────────────────────── */
    const bound = new Set<Element>();
    const handleEnter = () => cursor!.classList.add('hover');
    const handleLeave = () => cursor!.classList.remove('hover');

    const bindNewInteractive = () => {
      const interactive = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select'
      );
      interactive.forEach((el) => {
        if (bound.has(el)) return;
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
        bound.add(el);
      });
    };
    bindNewInteractive();

    const mo = new MutationObserver(bindNewInteractive);
    mo.observe(document.body, { childList: true, subtree: true });

    /* ─────────────────────────────
       5) Cursor visibility on window enter/leave
       ───────────────────────────── */
    const handleDocLeave = () => {
      cursor!.style.opacity = '0';
      blob!.style.opacity = '0';
    };
    const handleDocEnter = () => {
      cursor!.style.opacity = '1';
      blob!.style.opacity = '1';
    };
    document.addEventListener('mouseleave', handleDocLeave);
    document.addEventListener('mouseenter', handleDocEnter);

    /* ─────────────────────────────
       6) Click effect
       ───────────────────────────── */
    const handleDown = () => cursor!.classList.add('click');
    const handleUp = () => cursor!.classList.remove('click');
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    /* ─────────────────────────────
       7) Smooth anchor scrolling
       ───────────────────────────── */
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#') && href !== '#') {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 96;
          const elementPos = (targetEl as HTMLElement).getBoundingClientRect().top;
          const offsetPos = elementPos + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPos, behavior: 'smooth' });
        }
      }
    };
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

    /* ─────────────────────────────
       8) Scroll progress bar
       ───────────────────────────── */
    const progressBar = document.createElement('div');
    progressBar.style.cssText =
      'position:fixed;top:0;left:0;width:0%;height:3px;background:linear-gradient(90deg,#dc2626,#ef4444);z-index:10000;transition:width 0.1s ease;';
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', handleScroll);

    /* ─────────────────────────────
       9) Cleanup
       ───────────────────────────── */
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleDocLeave);
      document.removeEventListener('mouseenter', handleDocEnter);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
      window.removeEventListener('scroll', handleScroll);

      anchorLinks.forEach((link) =>
        link.removeEventListener('click', handleAnchorClick)
      );

      bound.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
      mo.disconnect();

      progressBar.remove();
      // Remove the elements we created, but keep shared layers
      cursor?.remove();
      blob?.remove();
    };
  }, []);

  return null;
}