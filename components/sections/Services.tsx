"use client";

import Link from "next/link";
import { FileText, Globe, Calculator, Building2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  number: string;
  accent: string;
  iconBg: string;
}

const SERVICES: Service[] = [
  {
    icon: FileText,
    title: "Administratif & Juridique",
    desc: "Création d'entreprise, statut juridique, procédures officielles, titre de séjour et accompagnement légal complet.",
    number: "01",
    accent: "from-blue-500/20 via-blue-600/5 to-transparent",
    iconBg: "bg-blue-500/15 border-blue-500/20",
  },
  {
    icon: Globe,
    title: "Digital & Communication",
    desc: "Identité de marque, site web, stratégie de contenu et présence digitale pour lancer votre activité au Maroc.",
    number: "02",
    accent: "from-violet-500/20 via-violet-600/5 to-transparent",
    iconBg: "bg-violet-500/15 border-violet-500/20",
  },
  {
    icon: Calculator,
    title: "Fiscal & Comptable",
    desc: "Optimisation fiscale, comptabilité, déclarations, TVA et conseils pour maximiser votre rentabilité.",
    number: "03",
    accent: "from-emerald-500/20 via-emerald-600/5 to-transparent",
    iconBg: "bg-emerald-500/15 border-emerald-500/20",
  },
  {
    icon: Building2,
    title: "Immobilier & Installation",
    desc: "Recherche de locaux, négociation, installation personnelle et accompagnement pour votre déménagement au Maroc.",
    number: "04",
    accent: "from-amber-500/20 via-amber-600/5 to-transparent",
    iconBg: "bg-amber-500/15 border-amber-500/20",
  },
];

export default function Services() {
  return (
    <section className="v3-section relative bg-[var(--bg-primary)]" id="services">
      <div className="aurora-glow w-[800px] h-[500px] top-1/4 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header — left aligned with CTA right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-end mb-20 animate-[fadeUp_0.8s_ease-out_both]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="para-bars para-bars--sm">
                <div className="para-bar" />
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <span className="v3-section-eyebrow-text">Ce que nous faisons</span>
            </div>

            <h2 className="v3-section-title max-w-3xl" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>
              DES SERVICES <span className="gradient-text">SUR-MESURE</span> POUR CHAQUE BESOIN
            </h2>

            <p className="text-[var(--text-secondary)] text-base leading-[1.8] mt-5 max-w-lg">
              Ne payez que ce dont vous avez besoin. Chaque service est indépendant et adaptable à votre projet.
            </p>
          </div>

          <Link href="/devis" className="group relative inline-flex items-center gap-3 px-8 py-[15px] text-[11px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer">
            <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04]" />
            <span className="relative z-10">Demander un devis</span>
            <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services — 2x2 grid with unique colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative rounded-3xl border border-[var(--border)] bg-white/[0.02] overflow-hidden group animate-[fadeUp_0.8s_ease-out_both] hover:border-white/[0.1] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all duration-500"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Color gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent}`} />

                {/* Ambient color glow */}
                <div className={`absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-gradient-to-br ${service.accent} blur-[80px] opacity-60 pointer-events-none`} />

                {/* Watermark number */}
                <span className="absolute top-4 right-6 font-[family-name:var(--font-montserrat)] font-black select-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" style={{ fontSize: "8rem", lineHeight: 1 }}>
                  {service.number}
                </span>

                <div className="relative z-10 p-8 md:p-10">
                  {/* Icon with unique color */}
                  <div className={`w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={24} className="text-white/80" />
                  </div>

                  <div className="para-bars para-bars--sm mb-3"><div className="para-bar" /><div className="para-bar" /></div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-lg uppercase tracking-wide text-white">{service.title}</h3>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mt-3">{service.desc}</p>

                  {/* Hover CTA */}
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mt-8 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
                    <span>En savoir plus</span>
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
