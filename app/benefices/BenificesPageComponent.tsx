"use client";

import Link from "next/link";
import {
  TrendingUp,
  Users,
  Leaf,
  Ship,
  Rocket,
  Trophy,
  Laptop,
  GraduationCap,
  ArrowRight,
  Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface KPI {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface Opportunity {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const KPIS: KPI[] = [
  { icon: TrendingUp, value: "+4 %", label: "Croissance prévue en 2025" },
  { icon: Users, value: "5M", label: "Marocains du monde" },
  { icon: Leaf, value: "52 %", label: "D'énergie verte d'ici 2030" },
  { icon: Ship, value: "#1 Afrique", label: "Port Tanger Med" },
];

const OPPORTUNITIES: Opportunity[] = [
  {
    icon: Rocket,
    title: "Économie en essor",
    desc: "PIB doublé en 20 ans, inflation maîtrisée.",
  },
  {
    icon: Trophy,
    title: "Coupe du Monde 2030",
    desc: "Milliards investis en infrastructures.",
  },
  {
    icon: Laptop,
    title: "Écosystème Digital",
    desc: "E-commerce +20%/an, Hub technologique.",
  },
  {
    icon: GraduationCap,
    title: "Talents Qualifiés",
    desc: "100k diplômés/an en ingénierie & tech.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "En 6 mois, j'ai lancé ma startup EdTech au Maroc. L'écosystème est bouillant.",
    author: "Sarah",
    route: "Paris → Casablanca",
  },
  {
    quote:
      "Mes cosmétiques marocains exportent déjà en Europe grâce aux accords de libre-échange.",
    author: "Ahmed",
    route: "Bruxelles → Rabat",
  },
];

export default function BenificesPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="aurora-glow w-[800px] h-[600px] top-0 left-1/4 opacity-60" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.8s_ease-out_both]">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Pourquoi le Maroc</span>
          </div>

          <h1
            className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-5xl animate-[fadeUp_0.8s_ease-out_0.1s_both]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            POURQUOI <span className="gradient-text">INVESTIR</span> ET
            ENTREPRENDRE AU MAROC
          </h1>

          <p className="font-[family-name:var(--font-playfair)] italic text-white/50 text-xl mt-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            &ldquo;Croissance, diaspora mondiale, Vision 2030.&rdquo;
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {KPIS.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={kpi.label}
                  /* AJOUT: flex, flex-col et h-full pour équilibrer la hauteur des cartes */
                  className="v3-glass p-6 md:p-8 text-center flex flex-col h-full animate-[fadeUp_0.8s_ease-out_both]"
                  style={{
                    borderRadius: 20,
                    animationDelay: `${0.1 + i * 0.08}s`,
                  }}
                >
                  {/* Container de l'icône : shrink-0 pour l'empêcher de s'écraser */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shrink-0"
                    style={{
                      background: "var(--accent-glow)",
                      border: "1px solid rgba(220,38,38,0.15)",
                      transform: "skewX(-6deg)",
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-[var(--accent)]"
                      style={{ transform: "skewX(6deg)" }}
                    />
                  </div>

                  {/* Container de la valeur : flex-1 pousse le label vers le bas uniformément */}
                  <div className="flex-1 flex flex-col items-center justify-center w-full mb-3">
                    <p
                      /* AJOUT: leading-[1.1] et break-words pour contrôler l'espacement si "#1 Afrique" s'étend sur 2 lignes */
                      className="font-[family-name:var(--font-montserrat)] font-black gradient-text leading-[1.1] break-words"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}
                    >
                      {kpi.value}
                    </p>
                  </div>

                  {/* Container du label : hauteur fixe / minimum pour un alignement linéaire global */}
                  <div className="min-h-[2.5rem] flex items-center justify-center w-full shrink-0">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] m-0">
                      {kpi.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="relative pb-24 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-24">
          <div className="text-center mb-16 animate-[fadeUp_0.8s_ease-out_both]">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">Opportunités</span>
              <div className="para-bars para-bars--sm">
                <div className="para-bar" style={{ opacity: 0.3 }} />
                <div className="para-bar" style={{ opacity: 0.6 }} />
                <div className="para-bar" />
              </div>
            </div>
            <h2
              className="v3-section-title"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              DES OPPORTUNITÉS <span className="gradient-text">CONCRÈTES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OPPORTUNITIES.map((opp, i) => {
              const Icon = opp.icon;
              return (
                <div
                  key={opp.title}
                  /* AJOUT: h-full pour équilibrer également les hauteurs ici */
                  className="v3-glass p-7 flex items-start gap-5 h-full animate-[fadeUp_0.8s_ease-out_both]"
                  style={{
                    borderRadius: 20,
                    animationDelay: `${0.2 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--accent-glow)",
                      border: "1px solid rgba(220,38,38,0.15)",
                      transform: "skewX(-6deg)",
                    }}
                  >
                    <Icon
                      size={20}
                      className="text-[var(--accent)]"
                      style={{ transform: "skewX(6deg)" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                      {opp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24">
        <div className="aurora-glow w-[500px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.author}
                /* AJOUT: flex, flex-col, justify-between, h-full */
                className="v3-glass p-8 relative overflow-hidden flex flex-col justify-between h-full animate-[fadeUp_0.8s_ease-out_both]"
                style={{
                  borderRadius: 24,
                  animationDelay: `${0.2 + i * 0.15}s`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                <div>
                  <Quote
                    size={24}
                    className="text-[var(--accent)] mb-4 opacity-40"
                  />
                  <blockquote className="font-[family-name:var(--font-playfair)] italic text-white/80 text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 flex items-center gap-3 shrink-0">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "var(--accent-glow)",
                      border: "1px solid rgba(220,38,38,0.2)",
                      transform: "skewX(-6deg)",
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-montserrat)] font-bold text-sm text-[var(--accent)]"
                      style={{ transform: "skewX(6deg)" }}
                    >
                      {t.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-montserrat)] font-bold text-sm text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-[var(--accent)]">{t.route}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16 animate-[fadeUp_0.8s_ease-out_0.6s_both]">
            <Link
              href="/devis"
              className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Profiter des opportunités</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
