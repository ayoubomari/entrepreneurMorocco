"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [1, 2, 3, 4, 5].map((n) => `/images/caroussel-3D-${n}.png`);
const CAPTIONS = [
  { title: "Étudiants", subtitle: "Installation, études, carte de séjour" },
  { title: "Marocains du monde", subtitle: "Revenir au pays sans stress" },
  { title: "Entrepreneurs en reconversion", subtitle: "Nouveau départ, nouveau projet" },
  { title: "Freelances", subtitle: "Lancer une activité digitale" },
  { title: "Investisseurs", subtitle: "Opportunités et fiscalité optimisées" },
];

const TOTAL = CAPTIONS.length;
const ROTATION_STEP = 360 / TOTAL;

export default function Audience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);

  const rotateToIndex = useCallback((index: number) => {
    setActiveIndex(((index % TOTAL) + TOTAL) % TOTAL);
  }, []);

  const goPrev = useCallback(() => rotateToIndex(activeIndex - 1), [activeIndex, rotateToIndex]);
  const goNext = useCallback(() => rotateToIndex(activeIndex + 1), [activeIndex, rotateToIndex]);

  // Auto-play every 5s
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL);
    }, 5000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartIndex.current = activeIndex;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = dragStartX.current - currentX;
    const indexDelta = Math.round(delta / 100);
    rotateToIndex(dragStartIndex.current + indexDelta);
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <section className="v3-section relative bg-[var(--bg-primary)]" id="audience">
      {/* Aurora glow */}
      <div aria-hidden="true" className="aurora-glow w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container size="wide">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Nos profils</span>
            <div className="para-bars para-bars--sm">
              <div className="para-bar" style={{ opacity: 0.3 }} />
              <div className="para-bar" style={{ opacity: 0.6 }} />
              <div className="para-bar" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="v3-section-title max-w-5xl mx-auto"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.2rem)" }}
          >
            POUR CEUX QUI VEULENT{" "}
            <span className="gradient-text">S&apos;INSTALLER,</span> ENTREPRENDRE
            OU CHANGER DE VIE
          </motion.h2>
          <motion.p variants={fadeUp} className="v3-section-subtitle v3-section-subtitle--center mt-5">
            Que vous soyez étudiant, expatrié, entrepreneur ou investisseur —
            nous avons un parcours taillé pour vous.
          </motion.p>
        </motion.div>

        {/* 3D Carousel */}
        <div
          className="relative flex flex-col items-center select-none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* 3D stage */}
          <div
            className="relative w-full"
            style={{ maxWidth: 1100, height: 580, perspective: "1400px" }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {CAPTIONS.map((caption, i) => {
                const angle = (i - activeIndex) * ROTATION_STEP;
                const radians = (angle * Math.PI) / 180;
                const radius = 420;
                const x = Math.sin(radians) * radius;
                const z = Math.cos(radians) * radius - radius;
                const isActive = i === activeIndex;
                const opacity = isActive ? 1 : Math.max(0.2, 1 - Math.abs(angle) / 150);
                const scale = isActive ? 1 : Math.max(0.6, 1 - Math.abs(angle) / 280);

                return (
                  <div
                    key={i}
                    onClick={() => rotateToIndex(i)}
                    className="absolute"
                    aria-hidden={!isActive}
                    style={mounted ? {
                      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                      opacity,
                      transition: isDragging ? "none" : "all 0.6s cubic-bezier(0.25,0.4,0.25,1)",
                      zIndex: isActive ? 10 : 1,
                      cursor: isActive ? "default" : "pointer",
                      width: 320,
                    } : {
                      opacity: i === 0 ? 1 : 0,
                      width: 320,
                    }}
                  >
                    <div
                      className="v3-glass overflow-hidden"
                      style={{
                        borderRadius: 24,
                        boxShadow: isActive
                          ? "0 40px 100px rgba(220,38,38,0.15), 0 0 0 1px rgba(220,38,38,0.12)"
                          : "0 15px 50px rgba(0,0,0,0.5)",
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden bg-[var(--bg-elevated)]">
                        <Image
                          src={IMAGES[i]}
                          alt={caption.title}
                          fill
                          className="object-cover"
                          sizes="320px"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      </div>

                      {/* Caption */}
                      <div className="p-6" style={{ background: 'var(--bg-elevated)' }}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="para-bars para-bars--sm">
                            <div className="para-bar" />
                            <div className="para-bar" />
                          </div>
                        </div>
                        <p className="font-[family-name:var(--font-montserrat)] font-bold uppercase text-base tracking-wide text-[var(--text-primary)]">
                          {caption.title}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-snug">
                          {caption.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow buttons — positioned on sides of stage */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/[0.08]"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Précédent"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/[0.08]"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Suivant"
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {/* Dot navigation + arrows row */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/[0.06]"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              aria-label="Précédent"
            >
              <ChevronLeft size={16} className="text-[var(--text-secondary)]" />
            </button>

            <div className="flex gap-3">
              {CAPTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); rotateToIndex(i); }}
                  className="cursor-pointer transition-all duration-300"
                  aria-label={`Aller à ${CAPTIONS[i].title}`}
                >
                  <span
                    className="block rounded-sm"
                    style={{
                      width: i === activeIndex ? 32 : 10,
                      height: 5,
                      background: i === activeIndex ? "var(--accent)" : "rgba(255,255,255,0.15)",
                      transform: "skewX(-12deg)",
                      transition: "all 0.4s ease",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/[0.06]"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              aria-label="Suivant"
            >
              <ChevronRight size={16} className="text-[var(--text-secondary)]" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
