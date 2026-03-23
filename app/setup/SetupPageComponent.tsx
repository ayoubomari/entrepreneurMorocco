"use client";

import Link from "next/link";
import { FileText, Building2, Layers, Star, ArrowRight, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  features: string[];
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: FileText,
    title: "Bilan de compétences & diagnostic",
    features: ["Analyse de vos forces", "Étude des secteurs porteurs", "Plan 30/60/90 jours"],
  },
  {
    number: "02",
    icon: Building2,
    title: "Création d'entreprise & fiscalité",
    features: ["Statuts juridiques", "Banque & fiscalité", "Enregistrement CNSS"],
  },
  {
    number: "03",
    icon: Layers,
    title: "Implantation & installation",
    features: ["Bureau, coworking, logement", "Recrutement & RH", "Mise en place logistique"],
  },
  {
    number: "04",
    icon: Star,
    title: "Lancement & premiers clients",
    features: ["Stratégie go-to-market", "Accès au réseau business", "Premiers contrats signés"],
  },
];

export default function SetupPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="aurora-glow w-[800px] h-[500px] top-0 left-1/3 opacity-60" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.8s_ease-out_both]">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Setup complet</span>
          </div>

          <h1
            className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-4xl animate-[fadeUp_0.8s_ease-out_0.1s_both]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            DE L&apos;IDÉE AU{" "}
            <span className="gradient-text">LANCEMENT</span> EN 4 ÉTAPES
          </h1>

          <p className="font-[family-name:var(--font-playfair)] italic text-white/50 text-xl mt-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            &ldquo;Notre méthodologie vous accompagne jusqu&apos;à vos premiers clients.&rdquo;
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Connector line */}
          <div className="hidden lg:block relative mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent mx-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="v3-glass p-8 flex flex-col relative overflow-hidden animate-[fadeUp_0.8s_ease-out_both]"
                  style={{ borderRadius: 24, animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  {/* Top gradient */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />

                  {/* Step number */}
                  <span className="v3-step-number mb-4">{step.number}</span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "var(--accent-glow)",
                      border: "1px solid rgba(220,38,38,0.15)",
                      transform: "skewX(-6deg)",
                    }}
                  >
                    <Icon size={20} className="text-[var(--accent)]" style={{ transform: "skewX(6deg)" }} />
                  </div>

                  <div className="para-bars para-bars--sm mb-3">
                    <div className="para-bar" />
                    <div className="para-bar" />
                  </div>

                  <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-white leading-tight">
                    {step.title}
                  </h2>

                  <ul className="mt-5 flex flex-col gap-3 flex-1">
                    {step.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-muted)] leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16 animate-[fadeUp_0.8s_ease-out_0.8s_both]">
            <Link
              href="/devis"
              className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Lancer mon projet</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
