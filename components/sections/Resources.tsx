"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    number: "01",
    title: "POURQUOI INVESTIR AU MAROC D'ICI 2030 ?",
    desc: "Vision 2030, Mondial et Tech — comprendre les grandes dynamiques qui font du Maroc l'un des marchés les plus attractifs d'Afrique.",
    link: "/articles/pourquoi-investir-au-maroc",
  },
  {
    number: "02",
    title: "OÙ INVESTIR AU MAROC : LES SECTEURS PORTEURS",
    desc: "Énergie verte, IA et Tourisme — les secteurs à fort potentiel pour les entrepreneurs et investisseurs.",
    link: "/articles/les-secteurs-porteurs",
  },
  {
    number: "03",
    title: "MRE : COMMENT BÂTIR LE MAROC DE DEMAIN",
    desc: "Au-delà des transferts, les Marocains du monde ont un rôle crucial à jouer dans la construction du nouveau Maroc.",
    link: "/articles/comment-batir-le-maroc",
  },
  {
    number: "04",
    title: "MAROC VS DUBAÏ : LE GUIDE DU DIGITAL NOMAD",
    desc: "Accessible, proche et authentique — pourquoi le Maroc s'impose comme l'alternative à Dubaï pour les nomades digitaux.",
    link: "/articles/maroc-vs-dubai",
  },
];

export default function Resources() {
  return (
    <section className="v3-section relative bg-[var(--bg-elevated)]" id="ressources">
      {/* Aurora glows */}
      <div className="aurora-glow w-[500px] h-[500px] top-0 right-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header row: title left, CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 animate-[fadeUp_0.8s_ease-out_both]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">Ressources & articles</span>
            </div>

            <h2
              className="v3-section-title max-w-2xl"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              LE SAVOIR POUR{" "}
              <span className="gradient-text">AGIR</span> MAINTENANT
            </h2>
          </div>

          <Link
            href="/articles"
            className="group relative inline-flex items-center gap-3 px-7 py-[13px] text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 cursor-pointer transition-colors hover:text-white"
          >
            <span className="absolute inset-0 border border-white/[0.1] skew-x-[-12deg] transition-all duration-500 group-hover:border-[var(--accent)]/30 group-hover:bg-white/[0.03]" />
            <span className="relative z-10">Tous les articles</span>
            <ArrowUpRight className="relative z-10 w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bento grid: featured first + 3 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
          {/* Featured article */}
          <Link
            href={ARTICLES[0].link}
            className="v3-glass p-8 md:p-10 group cursor-pointer relative overflow-hidden row-span-1 lg:row-span-2 flex flex-col justify-between"
            style={{ borderRadius: 20, minHeight: 360 }}
          >
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[var(--accent)]/20 via-transparent to-transparent" />

            {/* Large number */}
            <span
              className="font-[family-name:var(--font-montserrat)] font-black text-[6rem] leading-none gradient-text select-none opacity-30"
              style={{ letterSpacing: "-0.06em" }}
            >
              {ARTICLES[0].number}
            </span>

            <div className="mt-auto">
              <div className="para-bars para-bars--sm mb-4">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>

              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-lg md:text-xl uppercase tracking-wide text-white leading-tight group-hover:text-[var(--accent-light)] transition-colors duration-300">
                {ARTICLES[0].title}
              </h3>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-4 max-w-md">
                {ARTICLES[0].desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[var(--accent)] mt-6 group-hover:translate-x-2 transition-transform duration-300">
                <span>Lire l&apos;article</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </Link>

          {/* Smaller articles */}
          {ARTICLES.slice(1).map((article) => (
            <Link
              key={article.number}
              href={article.link}
              className="v3-glass flex gap-5 p-6 group cursor-pointer"
              style={{ borderRadius: 16 }}
            >
              {/* Number */}
              <span
                className="font-[family-name:var(--font-montserrat)] font-black text-3xl leading-none gradient-text select-none flex-shrink-0"
                style={{ letterSpacing: "-0.04em" }}
              >
                {article.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="para-bars para-bars--sm">
                  <div className="para-bar" />
                  <div className="para-bar" />
                </div>

                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white leading-tight group-hover:text-[var(--accent-light)] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                  {article.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 self-center">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--accent)]/10"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
