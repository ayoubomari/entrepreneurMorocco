"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  Play,
  X,
  Youtube,
  Instagram,
  ArrowRight,
  Clock,
  Headphones,
} from "lucide-react";

const EPISODES = [
  {
    image: "/images/podcast2-2.webp",
    title: "Le retour au Maroc : mythe ou réalité ?",
    guest: "Ep. 01",
    video: "/videos/reel-20.mp4",
    duration: "12 min",
    tag: "Expatriation",
  },
  {
    image: "/images/podcast1-2.webp",
    title: "Créer sa boîte à Casablanca en 30 jours",
    guest: "Ep. 02",
    video: "/videos/reel-1.mp4",
    duration: "15 min",
    tag: "Création",
  },
  {
    image: "/images/podcast4-2.webp",
    title: "MRE : comment investir intelligemment",
    guest: "Ep. 03",
    video: "/videos/reel-19.mp4",
    duration: "10 min",
    tag: "Investissement",
  },
  {
    image: "/images/podcast3-2.webp",
    title: "Freelance digital au Maroc : l'heure de vérité",
    guest: "Ep. 04",
    video: "/videos/reel-1.mp4",
    duration: "14 min",
    tag: "Digital",
  },
];

export default function Podcast() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      className="relative py-24 md:py-32 bg-[var(--bg-primary)] overflow-hidden"
      id="podcast"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/[0.03] blur-[150px] pointer-events-none" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ── Header row ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent)]/[0.06] mb-6"
              >
                <Headphones size={12} />
                Le podcast
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="font-[family-name:var(--font-montserrat)] font-extrabold text-[var(--text-primary)] leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Écouter, apprendre,{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">
                  agir.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-lg"
              >
                Des épisodes concrets sur l&apos;entrepreneuriat au Maroc, les
                opportunités et les histoires de ceux qui ont sauté le pas.
              </motion.p>
            </div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex gap-3 shrink-0">
              <Link
                href="https://www.youtube.com/@EntrepreneursMorocco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-white bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-light)] hover:shadow-[0_4px_20px_rgba(220,38,38,0.3)] transition-all duration-300 cursor-pointer"
              >
                <Youtube size={16} />
                YouTube
              </Link>
              <Link
                href="https://www.instagram.com/entrepreneursmorocco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-[var(--text-secondary)] border border-[var(--border)] rounded-xl hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all duration-300 cursor-pointer"
              >
                <Instagram size={16} />
                Instagram
              </Link>
            </motion.div>
          </div>

          {/* ── Episode grid — redesigned cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EPISODES.map((ep, i) => (
              <motion.div
                key={ep.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(ep.video)}
              >
                {/* Card container */}
                <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden hover:border-[var(--accent)]/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={ep.image}
                      alt={ep.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      draggable={false}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Tag badge — top left */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider uppercase text-white/90">
                        {ep.tag}
                      </span>
                    </div>

                    {/* Play button — centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all duration-500">
                        <Play
                          size={22}
                          className="text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>

                    {/* Episode info — bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent-light)]">
                          {ep.guest}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/60">
                          <Clock size={10} />
                          {ep.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title — below image with padding */}
                  <div className="p-4 pb-5">
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[14px] text-[var(--text-primary)] group-hover:text-[var(--accent-light)] transition-colors duration-300">
                      {ep.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── "Voir tous les épisodes" ── */}
          <motion.div variants={fadeUp} className="mt-14 text-center">
            <Link
              href="https://www.youtube.com/@EntrepreneursMorocco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-[var(--text-secondary)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 hover:text-[var(--text-primary)] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group"
            >
              Voir tous les épisodes
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                className="w-full rounded-2xl"
                controls
                autoPlay
                style={{ maxHeight: "80vh" }}
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all duration-200 hover:scale-110 bg-black/60 backdrop-blur-sm border border-white/10"
              >
                <X size={18} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
