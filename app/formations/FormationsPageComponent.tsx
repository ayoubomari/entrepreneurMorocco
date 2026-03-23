"use client";

import Link from "next/link";
import { Briefcase, ShoppingCart, Building2, Atom, ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Formation {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaUrl: string;
  badge: string;
}

const FORMATIONS: Formation[] = [
  {
    icon: Briefcase,
    title: "Entrepreneur 360°",
    subtitle: "Le programme complet pour lancer votre activité au Maroc.",
    bullets: [
      "Bilan de compétences",
      "Création société & fiscalité",
      "Stratégie marketing",
      "Mise en réseau investisseurs",
    ],
    ctaUrl: "/formations/list/programme-entrepreneur-360",
    badge: "Populaire",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Business Digital",
    subtitle: "Lancez votre boutique en ligne et maîtrisez la publicité digitale.",
    bullets: [
      "Créer sa boutique en ligne",
      "Stratégies TikTok & Meta Ads",
      "Logistique export",
    ],
    ctaUrl: "/formations/list/programme-ecommerce",
    badge: "Digital",
  },
  {
    icon: Building2,
    title: "Programme Conseil Immobilier",
    subtitle: "Investissez intelligemment dans l'immobilier marocain.",
    bullets: [
      "Analyse du marché immobilier",
      "Étude de rentabilité",
      "Stratégies d'investissement",
      "Jury final & opportunité pro",
    ],
    ctaUrl: "/formations/list/programme-immobilier/",
    badge: "Immobilier",
  },
  {
    icon: Atom,
    title: "Innovation & Tech",
    subtitle: "Explorez les technologies de demain pour votre business.",
    bullets: [
      "Blockchain & Web3",
      "GreenTech & Énergies",
      "Cybersécurité & Cloud",
      "IA & Automatisation",
    ],
    ctaUrl: "/formations/list/programme-innovation-tech",
    badge: "Tech",
  },
];

export default function FormationsPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Aurora glows */}
        <div className="aurora-glow w-[700px] h-[500px] top-0 left-1/4 opacity-60" />
        <div className="aurora-glow w-[500px] h-[400px] bottom-0 right-0 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.8s_ease-out_both]">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Nos formations</span>
          </div>

          {/* Title */}
          <h1
            className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-4xl animate-[fadeUp_0.8s_ease-out_0.1s_both]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            FORMATIONS POUR{" "}
            <span className="gradient-text">ENTREPRENDRE</span> ET INNOVER
          </h1>

          {/* Tagline */}
          <p className="font-[family-name:var(--font-playfair)] italic text-white/50 text-xl mt-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            &ldquo;4 programmes pratiques pour réussir votre projet au Maroc.&rdquo;
          </p>

          {/* Subtitle */}
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed max-w-xl mt-4 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            Nos programmes sont conçus pour accompagner les porteurs de projets
            et digital nomads — de l&apos;idée au lancement.
          </p>
        </div>
      </section>

      {/* Formations grid */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FORMATIONS.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="v3-glass p-8 md:p-10 relative overflow-hidden group flex flex-col animate-[fadeUp_0.8s_ease-out_both]"
                  style={{
                    borderRadius: 24,
                    animationDelay: `${0.2 + i * 0.1}s`,
                  }}
                >
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                  {/* Badge */}
                  <div
                    className="absolute top-6 right-6 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white"
                    style={{
                      background: "var(--accent)",
                      transform: "skewX(-12deg)",
                    }}
                  >
                    <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>
                      {f.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
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

                  {/* Title */}
                  <div className="para-bars para-bars--sm mb-3">
                    <div className="para-bar" />
                    <div className="para-bar" />
                  </div>
                  <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-lg uppercase tracking-wide text-white">
                    {f.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
                    {f.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 flex flex-col gap-3 flex-1">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      href={f.ctaUrl}
                      className="group/btn relative inline-flex items-center gap-3 px-7 py-[14px] text-[11px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover/btn:bg-[var(--accent-light)] group-hover/btn:scale-[1.04] group-hover/btn:shadow-[0_0_40px_rgba(220,38,38,0.3)]" />
                      <span className="relative z-10">Candidater</span>
                      <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
