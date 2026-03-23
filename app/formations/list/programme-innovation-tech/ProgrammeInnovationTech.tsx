"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, ChevronDown, Atom,
  MapPin, Calendar, Lock, Rocket,
  Cpu, Shield, Leaf, BrainCircuit,
} from "lucide-react";

const MODULES = [
  {
    title: "Blockchain & Web3",
    bullets: [
      "Comprendre la blockchain et ses applications business",
      "Smart contracts et tokenisation",
      "DeFi et opportunités d'investissement",
      "Cas d'usage au Maroc et en Afrique",
    ],
  },
  {
    title: "Intelligence Artificielle & Automatisation",
    bullets: [
      "Fondamentaux de l'IA pour entrepreneurs",
      "Outils no-code d'automatisation (Make, Zapier, n8n)",
      "ChatGPT et IA générative pour le business",
      "Créer un produit IA sans coder",
    ],
  },
  {
    title: "GreenTech & Énergies Renouvelables",
    bullets: [
      "Marché des énergies vertes au Maroc",
      "Opportunités solaire et éolien",
      "Réglementation et subventions disponibles",
      "Business models GreenTech rentables",
    ],
  },
  {
    title: "Cybersécurité & Cloud",
    bullets: [
      "Fondamentaux de la cybersécurité",
      "Infrastructure cloud pour startups",
      "Protection des données et conformité RGPD",
      "Opportunités de consulting cybersécurité au Maroc",
    ],
  },
];

const FAQS = [
  {
    q: "Faut-il un background technique ?",
    a: "Non. Le programme est conçu pour des entrepreneurs, pas des développeurs. Nous vulgarisons les concepts techniques et nous concentrons sur les applications business et les opportunités de marché.",
  },
  {
    q: "Quelles opportunités concrètes au Maroc ?",
    a: "Le Maroc investit massivement dans le digital (stratégie Maroc Digital 2030), les énergies renouvelables (objectif 52% d'énergie verte), et la cybersécurité. Les opportunités sont énormes pour les entrepreneurs tech.",
  },
  {
    q: "Est-ce que je peux lancer un business tech sans coder ?",
    a: "Absolument. Nous vous formons sur les outils no-code et low-code qui permettent de créer des produits tech sans écrire une ligne de code. Beaucoup de nos alumni ont lancé des SaaS et des produits IA de cette manière.",
  },
  {
    q: "Quel suivi après la formation ?",
    a: "2 mois de mentorat inclus avec des experts tech, accès au réseau d'entrepreneurs tech Entrepreneurs Morocco, et possibilité d'intégrer notre programme d'incubation.",
  },
];

export default function ProgrammeInnovationTech() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="aurora-glow w-[900px] h-[700px] top-0 left-1/3 opacity-70" />
        <div className="aurora-glow w-[500px] h-[400px] bottom-0 right-0 opacity-50" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-8 animate-[fadeUp_0.8s_ease-out_both]" style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}>
            <Atom size={14} style={{ transform: "skewX(12deg)" }} />
            <span style={{ transform: "skewX(12deg)" }}>Formation tech</span>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-4xl animate-[fadeUp_0.8s_ease-out_0.1s_both]" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            INNOVATION &amp; <span className="gradient-text">TECH</span>
          </h1>

          <p className="text-white/50 text-lg max-w-xl mt-6 leading-relaxed animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            Blockchain, IA, GreenTech, Cybersécurité — explorez les technologies
            de demain pour créer un business innovant au Maroc.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            {[
              { icon: MapPin, text: "Casablanca / En ligne" },
              { icon: Calendar, text: "3 semaines" },
              { icon: Lock, text: "10 places max" },
            ].map((p) => (
              <div key={p.text} className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white/80 backdrop-blur-xl bg-white/[0.06] border border-white/[0.1] rounded-lg">
                <p.icon size={14} />
                {p.text}
              </div>
            ))}
          </div>

          <div className="mt-10 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
            <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Rejoindre la formation</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="v3-section relative">
        <div className="aurora-glow w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="para-bars para-bars--sm"><div className="para-bar" /><div className="para-bar" /><div className="para-bar" /></div>
              <span className="v3-section-eyebrow-text">4 domaines d&apos;expertise</span>
              <div className="para-bars para-bars--sm"><div className="para-bar" style={{ opacity: 0.3 }} /><div className="para-bar" style={{ opacity: 0.6 }} /><div className="para-bar" /></div>
            </div>
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              LES TECHNOLOGIES <span className="gradient-text">DE DEMAIN</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BrainCircuit,
                label: "IA & Automatisation",
                desc: "Maîtrisez les outils d'intelligence artificielle et d'automatisation no-code pour créer des produits innovants sans écrire une seule ligne de code.",
                tags: ["ChatGPT", "Make", "n8n", "No-code"],
              },
              {
                icon: Cpu,
                label: "Blockchain & Web3",
                desc: "Comprenez la blockchain, les smart contracts et la DeFi pour identifier les opportunités d'investissement et de business dans le Web3.",
                tags: ["Smart Contracts", "DeFi", "NFT", "Tokenisation"],
              },
              {
                icon: Leaf,
                label: "GreenTech & Énergies",
                desc: "Le Maroc vise 52% d'énergie verte d'ici 2030. Explorez les business models rentables dans le solaire, l'éolien et l'économie circulaire.",
                tags: ["Solaire", "Éolien", "Subventions", "ESG"],
              },
              {
                icon: Shield,
                label: "Cybersécurité & Cloud",
                desc: "La demande en cybersécurité explose au Maroc. Apprenez les fondamentaux pour lancer un business de consulting ou protéger vos actifs digitaux.",
                tags: ["RGPD", "Cloud", "Audit", "Consulting"],
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="v3-glass p-8 relative overflow-hidden group animate-[fadeUp_0.8s_ease-out_both]"
                style={{ borderRadius: 24, animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.15)", transform: "skewX(-6deg)" }}
                  >
                    <item.icon size={26} className="text-[var(--accent)]" style={{ transform: "skewX(6deg)" }} />
                  </div>

                  <div className="flex-1">
                    <div className="para-bars para-bars--sm mb-2"><div className="para-bar" /><div className="para-bar" /></div>
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base uppercase tracking-wide text-white">
                      {item.label}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-3">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-[var(--accent)] rounded-md"
                          style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.1)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
              4 MODULES <span className="gradient-text">TECH</span>
            </h2>
          </div>
          <div className="space-y-6">
            {MODULES.map((mod, i) => (
              <div key={mod.title} className="v3-glass p-8 relative overflow-hidden" style={{ borderRadius: 20 }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
                <div className="flex items-start gap-6">
                  <span className="v3-step-number flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base uppercase tracking-wide text-white">{mod.title}</h3>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mod.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="v3-section relative">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="v3-glass p-10 md:p-14 relative overflow-hidden text-center" style={{ borderRadius: 28 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
            <div className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8" style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}>
              <span style={{ transform: "skewX(12deg)" }}>Places limitées</span>
            </div>
            <p className="text-[var(--text-muted)] text-xs font-semibold tracking-[0.2em] uppercase">Investissement formation</p>
            <p className="font-[family-name:var(--font-montserrat)] font-black text-white mt-2" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>
              2 799 <span className="text-[var(--accent)] text-2xl">€</span>
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2">Paiement en 3x sans frais possible</p>
            <div className="h-px bg-[var(--border)] my-8" />
            <div className="text-left max-w-md mx-auto space-y-3">
              {["3 semaines de formation intensive", "4 modules tech complets", "Projets pratiques et cas réels", "Accès outils no-code premium", "2 mois de mentorat tech", "Réseau entrepreneurs tech Morocco"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
                <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
                <span className="relative z-10">Candidater maintenant</span>
                <ArrowRight className="relative z-10 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="v3-section relative bg-[var(--bg-elevated)]">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="v3-section-title text-center mb-12" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}>
            QUESTIONS <span className="gradient-text">FRÉQUENTES</span>
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`v3-glass overflow-hidden cursor-pointer transition-all duration-300 ${openFaq === i ? "bg-white/[0.06]" : ""}`} style={{ borderRadius: 16 }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between gap-4 p-5 md:p-6">
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white">{faq.q}</h3>
                  <ChevronDown size={16} className={`text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </div>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="h-px bg-[var(--border)] mb-4" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="v3-section relative">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <Rocket size={48} className="text-[var(--accent)] mx-auto mb-6 opacity-60" />
          <h2 className="v3-section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            INNOVEZ AU <span className="gradient-text">MAROC</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-4 max-w-md mx-auto">
            Rejoignez la prochaine session et lancez votre projet tech au Maroc.
          </p>
          <div className="mt-10">
            <Link href="/contact-quiz" className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
              <span className="relative z-10">Candidater à la prochaine session</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
