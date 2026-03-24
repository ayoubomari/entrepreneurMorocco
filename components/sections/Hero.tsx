"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: "500+", label: "Entrepreneurs accompagnés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4", label: "Pays couverts" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force attributes at DOM level for Safari
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("x-webkit-airplay", "deny");
    video.removeAttribute("controls");

    const forcePlay = () => {
      if (video.paused) {
        const p = video.play();
        if (p) p.then(() => setVideoPlaying(true)).catch(() => {});
      }
    };

    // Try playing immediately
    forcePlay();

    // Retry on canplay
    video.addEventListener("canplay", forcePlay, { once: true });
    video.addEventListener("loadeddata", forcePlay, { once: true });
    video.addEventListener("playing", () => setVideoPlaying(true));

    // Safari workaround: play on first user interaction
    const interactionPlay = () => {
      forcePlay();
      document.removeEventListener("touchstart", interactionPlay);
      document.removeEventListener("scroll", interactionPlay);
      document.removeEventListener("click", interactionPlay);
      document.removeEventListener("mousemove", interactionPlay);
      document.removeEventListener("keydown", interactionPlay);
    };
    document.addEventListener("touchstart", interactionPlay, {
      once: true,
      passive: true,
    });
    document.addEventListener("scroll", interactionPlay, {
      once: true,
      passive: true,
    });
    document.addEventListener("click", interactionPlay, { once: true });
    document.addEventListener("mousemove", interactionPlay, {
      once: true,
      passive: true,
    });
    document.addEventListener("keydown", interactionPlay, { once: true });

    // Retry every 500ms for 5 seconds
    let attempts = 0;
    const interval = setInterval(() => {
      if (!video.paused || attempts >= 10) {
        clearInterval(interval);
        if (!video.paused) setVideoPlaying(true);
        return;
      }
      forcePlay();
      attempts++;
    }, 500);

    return () => {
      clearInterval(interval);
      document.removeEventListener("touchstart", interactionPlay);
      document.removeEventListener("scroll", interactionPlay);
      document.removeEventListener("click", interactionPlay);
      document.removeEventListener("mousemove", interactionPlay);
      document.removeEventListener("keydown", interactionPlay);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[750px] overflow-hidden bg-[#030303]"
    >
      {/* ── Full-screen background ── */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute -inset-[5%]"
      >
        {/* Poster image (CFC, visible until video plays) */}
        <Image
          src="/images/hero-cfc-poster.jpg"
          alt="Casablanca Finance City"
          fill
          priority
          fetchPriority="high"
          quality={45}
          className="object-cover"
          sizes="100vw"
        />
        {/* Video (hidden until playing, then fades in) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: videoPlaying ? 1 : 0 }}
          src="/videos/hero-cfc-web.mp4"
          aria-hidden="true"
        >
          <track kind="captions" />
        </video>
      </motion.div>

      {/* ── Cinematic overlays ── */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 via-[#030303]/30 to-transparent" />

      {/* ── Aurora glow accents ── */}
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-[#dc2626]/[0.07] rounded-full blur-[160px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[300px] bg-[#dc2626]/[0.04] rounded-full blur-[180px] pointer-events-none" />

      {/* ── Decorative vertical line ── */}
      <div className="hidden lg:block absolute right-[12%] top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[#dc2626]/20 to-transparent animate-[fadeUp_1.5s_ease-out_1.5s_both]" />

      {/* ── Main content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between gap-16">
            {/* Left — text content */}
            <div className="max-w-[700px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8 animate-[fadeUp_0.6s_ease-out_0.1s_both]">
                <div className="flex gap-[3px]">
                  <div className="w-[4px] h-6 bg-[#dc2626] skew-x-[-12deg] rounded-sm" />
                  <div className="w-[4px] h-6 bg-[#dc2626]/60 skew-x-[-12deg] rounded-sm" />
                  <div className="w-[4px] h-6 bg-[#dc2626]/30 skew-x-[-12deg] rounded-sm" />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/60">
                  Votre partenaire au Maroc
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-[family-name:var(--font-montserrat)] font-black uppercase leading-[0.9] tracking-[-0.04em] animate-[fadeUp_0.9s_ease-out_0.15s_both]">
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Entreprendre au
                </span>
                <span
                  className="block mt-2 hero-gradient-text"
                  style={{ fontSize: "clamp(4rem, 10vw, 8.5rem)" }}
                >
                  Maroc<span className="text-[#dc2626]">.</span>
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] font-normal italic text-white/70 leading-snug font-[family-name:var(--font-playfair)] animate-[fadeUp_0.8s_ease-out_0.4s_both]">
                On vous montre le chemin.
              </p>

              {/* Description */}
              <p className="mt-4 text-[15px] text-white/40 leading-[1.8] max-w-lg animate-[fadeUp_0.6s_ease-out_0.55s_both]">
                De l&apos;idée à la concrétisation — stratégie, juridique,
                installation. On accompagne les entrepreneurs à chaque étape.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fadeUp_0.6s_ease-out_0.7s_both]">
                <Link
                  href="/commencez-un-projet"
                  className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[#dc2626] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[#ef4444] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
                  <span className="relative z-10">Commencer mon projet</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="/mini-test"
                  className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-semibold tracking-[0.2em] uppercase text-white/70 cursor-pointer transition-colors duration-500 hover:text-white"
                >
                  <span className="absolute inset-0 border border-white/[0.1] skew-x-[-12deg] transition-all duration-500 group-hover:border-[#dc2626]/30 group-hover:bg-white/[0.03] group-hover:scale-[1.04]" />
                  <Sparkles className="relative z-10 w-3.5 h-3.5" />
                  <span className="relative z-10">Tester mon projet</span>
                </Link>
              </div>
            </div>

            {/* Right — Glassmorphism stat card (desktop only) */}
            <div className="hidden lg:flex flex-col items-center animate-[fadeUp_0.8s_ease-out_1s_both]">
              <div className="relative w-[280px]">
                <div className="relative backdrop-blur-xl bg-white/[0.05] border border-white/[0.08] rounded-2xl p-10 overflow-hidden">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#dc2626]/[0.08] rounded-full blur-[60px]" />

                  <div className="relative space-y-7">
                    {STATS.map((stat, i) => (
                      <div key={stat.label}>
                        {i > 0 && <div className="mb-7 h-px bg-white/[0.06]" />}
                        <AnimatedCounter
                          value={stat.value}
                          className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-white tracking-tight leading-none block"
                        />
                        <div className="text-[10px] text-white/30 font-semibold tracking-[0.2em] uppercase mt-2">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Parallelogram accent below card */}
                <div className="mt-4 flex justify-center gap-[4px]">
                  <div className="w-8 h-[2px] bg-[#dc2626]/30 skew-x-[-12deg]" />
                  <div className="w-5 h-[2px] bg-[#dc2626]/20 skew-x-[-12deg]" />
                  <div className="w-3 h-[2px] bg-[#dc2626]/10 skew-x-[-12deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom: scroll indicator ── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center animate-[fadeUp_0.6s_ease-out_1.5s_both]">
        <motion.button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/40 group-hover:text-[var(--accent-light)] transition-colors duration-300">
            Découvrir
          </span>
          <div className="w-8 h-8 rounded-full border border-white/15 group-hover:border-[var(--accent)]/40 flex items-center justify-center transition-all duration-300">
            <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-[var(--accent-light)] transition-colors duration-300" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
