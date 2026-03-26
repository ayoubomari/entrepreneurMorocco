"use client";

import Link from "next/link";
import { ArrowRight, Download, User, Users, Rocket, CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const PACKS = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Solo / Indépendant",
    price: "2 999 €",
    icon: User,
    features: ["Bilan & audit projet", "Création d'entreprise", "Setup administratif"],
    popular: false,
  },
  {
    id: "family",
    name: "Family",
    subtitle: "MRE & Installation",
    price: "Sur devis",
    icon: Users,
    features: ["Accompagnement admin", "Logement & écoles", "Réseau business local"],
    popular: true,
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Startups / Business",
    price: "Sur devis",
    icon: Rocket,
    features: ["Go-to-market", "Recrutement & Bureaux", "Réseau investisseurs"],
    popular: false,
  },
];

export default function Accompagnements() {
  return (
    <section className="v3-section relative bg-[var(--bg-elevated)]" id="accompagnements">
      {/* Aurora glows */}
      <div aria-hidden="true" className="aurora-glow w-[600px] h-[600px] -top-40 -right-40 opacity-70" />
      <div aria-hidden="true" className="aurora-glow w-[400px] h-[400px] bottom-0 left-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header — left aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-end mb-16 animate-[fadeUp_0.8s_ease-out_both]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">Nos packs</span>
            </div>

            <h2
              className="v3-section-title max-w-3xl"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)" }}
            >
              DES ACCOMPAGNEMENTS{" "}
              <span className="gradient-text">ADAPTÉS</span> À CHAQUE PROFIL
            </h2>

            <p className="text-[var(--text-secondary)] text-base leading-[1.8] mt-5 max-w-xl">
              Choisissez le pack qui correspond à votre situation.
              Chaque parcours est unique — votre accompagnement devrait l&apos;être aussi.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contact-quiz"
              className="group relative inline-flex items-center gap-3 px-8 py-[15px] text-[11px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
              <span className="relative z-10">Choisir un pack</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/brochure"
              className="group relative inline-flex items-center gap-3 px-7 py-[15px] text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 cursor-pointer hover:text-white/80 transition-colors"
            >
              <span className="absolute inset-0 border border-white/[0.08] skew-x-[-12deg] transition-all duration-500 group-hover:border-[var(--accent)]/25 group-hover:bg-white/[0.02]" />
              <Download className="relative z-10 w-3.5 h-3.5" />
              <span className="relative z-10">Brochure</span>
            </Link>
          </div>
        </div>

        {/* Pack cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PACKS.map((pack, i) => {
            const Icon = pack.icon;
            return (
              <div
                key={pack.name}
                className={`v3-glass p-8 relative overflow-hidden flex flex-col animate-[fadeUp_0.8s_ease-out_both] ${
                  pack.popular ? "bg-white/[0.05]" : ""
                }`}
                style={{ borderRadius: 24, animationDelay: `${0.15 + i * 0.1}s` }}
              >
                {/* Top gradient for popular */}
                {pack.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
                )}

                {/* Popular badge */}
                {pack.popular && (
                  <div
                    className="absolute top-5 right-5 px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-white"
                    style={{ background: "var(--accent)", transform: "skewX(-12deg)" }}
                  >
                    <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>Populaire</span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "var(--accent-glow)", border: "1px solid rgba(220,38,38,0.15)", transform: "skewX(-6deg)" }}
                >
                  <Icon size={20} className="text-[var(--accent)]" style={{ transform: "skewX(6deg)" }} />
                </div>

                {/* Name + price */}
                <div className="para-bars para-bars--sm mb-3">
                  <div className="para-bar" />
                  <div className="para-bar" />
                </div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-black text-xl uppercase tracking-tight text-white">
                  {pack.name}
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] mt-1">
                  {pack.subtitle}
                </p>

                <p className="font-[family-name:var(--font-montserrat)] font-black text-3xl text-white mt-5">
                  {pack.price}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {pack.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-[var(--accent)] flex-shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href={`/contact-quiz?plan=${pack.id}`}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-7 py-[14px] text-[11px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
                  >
                    <span className={`absolute inset-0 ${pack.popular ? "bg-[var(--accent)]" : "border border-white/[0.1]"} skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent)] group-hover:scale-[1.03]`} />
                    <span className="relative z-10">En savoir plus</span>
                    <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-[fadeUp_0.8s_ease-out_0.6s_both]">
          {[
            { value: "3", label: "Packs disponibles" },
            { value: "100%", label: "Sur-mesure" },
            { value: "48h", label: "Premier contact" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <AnimatedCounter
                value={item.value}
                className="font-[family-name:var(--font-montserrat)] font-black gradient-text block"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              />
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
