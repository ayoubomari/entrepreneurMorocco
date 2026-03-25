import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

import "./_styles/article.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

export const metadata: Metadata = {
  title: "Articles & Ressources — Entrepreneurs Maroc",
  description:
    "Guides stratégiques, analyses sectorielles et conseils pratiques pour entreprendre et investir au Maroc.",
};

const ARTICLES = [
  {
    number: "01",
    tag: "Guide Stratégique",
    title: "Pourquoi Investir au Maroc d'ici 2030 ?",
    desc: "Vision 2030, Mondial et Tech — comprendre les grandes dynamiques qui font du Maroc l'un des marchés les plus attractifs d'Afrique.",
    readTime: "8 min",
    category: "Business & Investissement",
    link: "/articles/pourquoi-investir-au-maroc",
    accent: "from-red-600/20 to-transparent",
  },
  {
    number: "02",
    tag: "Analyse Sectorielle",
    title: "Où Investir au Maroc : Les Secteurs Porteurs",
    desc: "Énergie verte, IA et Tourisme — les secteurs à fort potentiel pour les entrepreneurs et investisseurs qui veulent agir maintenant.",
    readTime: "10 min",
    category: "Secteurs & Opportunités",
    link: "/articles/les-secteurs-porteurs",
    accent: "from-orange-600/15 to-transparent",
  },
  {
    number: "03",
    tag: "MRE & Diaspora",
    title: "MRE : Comment Bâtir le Maroc de Demain",
    desc: "Au-delà des transferts, les Marocains du monde ont un rôle crucial à jouer dans la construction du nouveau Maroc économique.",
    readTime: "7 min",
    category: "Diaspora & Impact",
    link: "/articles/comment-batir-le-maroc",
    accent: "from-red-700/20 to-transparent",
  },
  {
    number: "04",
    tag: "Digital Nomad",
    title: "Maroc vs Dubaï : Le Guide du Digital Nomad",
    desc: "Accessible, proche et authentique — pourquoi le Maroc s'impose comme l'alternative à Dubaï pour les nomades digitaux.",
    readTime: "6 min",
    category: "Lifestyle & Business",
    link: "/articles/maroc-vs-dubai",
    accent: "from-rose-600/15 to-transparent",
  },
];

export default function ArticlesPage() {
  return (
    <div className="article-page">
      <CloudRedEffect1 />

      {/* Main Wrapper — pt-40 clears the fixed header (h-16/h-20) */}
      <div className="article-wrap" style={{ paddingTop: "clamp(7rem, 12vw, 10rem)" }}>
        {/* Hero */}
        <header className="article-hero" style={{ marginBottom: "3rem" }}>
          <div className="article-tag">
            <Tag size={14} />
            Ressources & Guides
          </div>
          <h1 className="article-title">
            Le Savoir pour{" "}
            <span className="text-red-500">Agir</span> Maintenant
          </h1>
          <p className="article-lead">
            Guides stratégiques, analyses sectorielles et décryptages pour
            entrepreneurs et investisseurs qui veulent saisir les opportunités
            du Maroc d&apos;aujourd&apos;hui.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <span>{ARTICLES.length} articles</span>
            <span className="text-red-500">•</span>
            <span>Mis à jour 2025</span>
          </div>
        </header>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
            marginBottom: "4rem",
          }}
        />

        {/* Articles Grid */}
        <div
          style={{
            maxWidth: "1028px",
            margin: "0 auto",
          }}
        >
          {/* Featured — Article 01 */}
          <Link
            href={ARTICLES[0].link}
            className="group"
            style={{
              display: "block",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              marginBottom: "1.5rem",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
              transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(to right, #dc2626, #ef4444, transparent)",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <div>
                {/* Tag row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 900,
                      fontSize: "clamp(3rem, 8vw, 5rem)",
                      lineHeight: 1,
                      background:
                        "linear-gradient(135deg, #dc2626, #ef4444, #f87171)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      opacity: 0.4,
                      letterSpacing: "-0.06em",
                      userSelect: "none",
                    }}
                  >
                    {ARTICLES[0].number}
                  </span>
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        color: "#ef4444",
                        padding: "4px 12px",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        borderRadius: "2px",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {ARTICLES[0].tag}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      <Clock size={12} />
                      <span>{ARTICLES[0].readTime} de lecture</span>
                      <span style={{ color: "#dc2626" }}>•</span>
                      <span>{ARTICLES[0].category}</span>
                    </div>
                  </div>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 800,
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "#fff",
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                    transition: "color 0.3s",
                  }}
                  className="group-hover:text-red-400"
                >
                  {ARTICLES[0].title}
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    maxWidth: "640px",
                    marginBottom: "1.5rem",
                  }}
                >
                  {ARTICLES[0].desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#dc2626",
                    transition: "transform 0.3s",
                  }}
                  className="group-hover:translate-x-2"
                >
                  <span>Lire l&apos;article</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Arrow indicator */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.3s, border-color 0.3s",
                  alignSelf: "flex-start",
                  marginTop: "0.25rem",
                }}
                className="group-hover:bg-red-600/10 group-hover:border-red-600/30"
              >
                <ArrowUpRight
                  size={18}
                  style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.3s" }}
                  className="group-hover:text-red-500"
                />
              </div>
            </div>
          </Link>

          {/* Remaining 3 articles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {ARTICLES.slice(1).map((article) => (
              <Link
                key={article.number}
                href={article.link}
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition:
                    "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  minHeight: "260px",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(to right, #dc2626/40, transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="group-hover:opacity-100"
                />

                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    background:
                      "linear-gradient(135deg, #dc2626, #ef4444, #f87171)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                >
                  {article.number}
                </span>

                {/* Tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "rgba(239,68,68,0.8)",
                    padding: "3px 10px",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: "2px",
                    marginBottom: "0.75rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {article.tag}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 800,
                    fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    transition: "color 0.3s",
                    flex: 1,
                  }}
                  className="group-hover:text-red-400"
                >
                  {article.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.desc}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <Clock size={11} />
                    <span>{article.readTime}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#dc2626",
                    }}
                  >
                    <span>Lire</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "6rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "1.5rem",
            }}
          >
            Prêt à passer à l&apos;action ?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            Lancez Votre Projet{" "}
            <span style={{ color: "#ef4444" }}>au Maroc</span>
          </h2>
          <Link
            href="/commencez-un-projet"
            className="poly-btn red"
            style={{ margin: "0 auto" }}
          >
            Commencer maintenant
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
