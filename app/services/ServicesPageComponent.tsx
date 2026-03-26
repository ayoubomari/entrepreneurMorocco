"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Megaphone,
  Users,
  GraduationCap,
  Network,
  Crown,
  Scale,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: boolean;
}

const SERVICES: Service[] = [
  {
    icon: Building2,
    title: "Création d'entreprise",
    description:
      "Statuts, fiscalité, ouverture bancaire et domiciliation. On gère tout le processus administratif.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Étude de marché",
    description:
      "Analyse macro/micro, benchmark concurrentiel et stratégie go-to-market adaptée au Maroc.",
  },
  {
    icon: Megaphone,
    title: "Marketing et Growth",
    description:
      "Acquisition clients, branding, tunnels de vente et stratégie digitale complète.",
  },
  {
    icon: Users,
    title: "Installation et RH",
    description:
      "Recherche de bureaux, coworking, recrutement local et accompagnement pour votre installation.",
  },
  {
    icon: GraduationCap,
    title: "Formations",
    description:
      "E-commerce, IA, immobilier et masterclass entrepreneuriales pour monter en compétences.",
    highlight: true,
  },
  {
    icon: Network,
    title: "Réseaux Business",
    description:
      "Mise en relation, clubs d'investisseurs, partenariats stratégiques et networking.",
  },
  {
    icon: Crown,
    title: "Club Privilège",
    description:
      "Accès exclusif à des événements privés, deals immobiliers et opportunités au Maroc.",
  },
  {
    icon: Scale,
    title: "Accompagnement juridique",
    description:
      "Contrats, propriété intellectuelle, conformité réglementaire et conseil juridique.",
  },
];

export default function ServicesPageComponent() {
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
            <span className="v3-section-eyebrow-text">Nos services</span>
          </div>

          <h1
            className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] max-w-5xl animate-[fadeUp_0.8s_ease-out_0.1s_both]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            UN ACCOMPAGNEMENT <span className="gradient-text">COMPLET</span> ET SUR MESURE
          </h1>

          <p className="font-[family-name:var(--font-playfair)] italic text-white/50 text-xl mt-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            &ldquo;Ne payez que ce dont vous avez besoin. Chaque service est indépendant et adaptable à votre projet.&rdquo;
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative pb-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative rounded-2xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-500 overflow-hidden ${
                    service.highlight
                      ? "bg-gradient-to-br from-[var(--accent)]/[0.08] to-transparent border border-[var(--accent)]/15 hover:border-[var(--accent)]/30"
                      : "border border-[var(--border)] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-500 ${
                        service.highlight
                          ? "bg-[var(--accent)]/15 border border-[var(--accent)]/25"
                          : "bg-white/[0.04] border border-[var(--border)] group-hover:border-[var(--accent)]/25 group-hover:bg-[var(--accent)]/10"
                      }`}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                        className={`transition-colors duration-500 ${
                          service.highlight
                            ? "text-[var(--accent-light)]"
                            : "text-[var(--text-muted)] group-hover:text-[var(--accent-light)]"
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[14px] text-[var(--text-primary)] leading-snug mt-4">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[13px] text-[var(--text-muted)] leading-[1.7] mt-2 flex-1">
                      {service.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex justify-center mt-16"
          >
            <Link
              href="/devis"
              className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
              <span className="relative z-10">Demander un devis</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
