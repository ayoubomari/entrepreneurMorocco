"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2, TrendingUp, Megaphone, Users,
  GraduationCap, Network, Crown, Scale, ArrowRight,
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
  { icon: Building2, title: "Création d'entreprise", description: "Statuts, fiscalité, ouverture bancaire et domiciliation. On gère tout le processus administratif.", highlight: true },
  { icon: TrendingUp, title: "Étude de marché", description: "Analyse macro/micro, benchmark concurrentiel et stratégie go-to-market adaptée au Maroc." },
  { icon: Megaphone, title: "Marketing et Growth", description: "Acquisition clients, branding, tunnels de vente et stratégie digitale complète." },
  { icon: Users, title: "Installation et RH", description: "Recherche de bureaux, coworking, recrutement local et accompagnement pour votre installation." },
  { icon: GraduationCap, title: "Formations", description: "E-commerce, IA, immobilier et masterclass entrepreneuriales pour monter en compétences.", highlight: true },
  { icon: Network, title: "Réseaux Business", description: "Mise en relation, clubs d'investisseurs, partenariats stratégiques et networking." },
  { icon: Crown, title: "Club Privilège", description: "Accès exclusif à des événements privés, deals immobiliers et opportunités au Maroc." },
  { icon: Scale, title: "Accompagnement juridique", description: "Contrats, propriété intellectuelle, conformité réglementaire et conseil juridique." },
];

export default function ServicesPageComponent() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-[var(--accent)]/[0.03] blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent)]/[0.06] mb-6"
            >
              Nos services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] font-extrabold tracking-tight text-[var(--text-primary)] max-w-4xl leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              Un accompagnement{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">
                complet
              </span>{" "}
              et sur mesure
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[var(--text-secondary)] text-[16px] leading-relaxed max-w-xl mt-6"
            >
              Ne payez que ce dont vous avez besoin. Chaque service est indépendant
              et adaptable à votre projet.
            </motion.p>
          </motion.div>
        </Container>
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
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-500 ${
                      service.highlight
                        ? "bg-[var(--accent)]/15 border border-[var(--accent)]/25"
                        : "bg-white/[0.04] border border-[var(--border)] group-hover:border-[var(--accent)]/25 group-hover:bg-[var(--accent)]/10"
                    }`}>
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

                    {/* Subtle arrow on hover */}
                    <div className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-[var(--accent-light)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      En savoir plus
                      <ArrowRight size={12} />
                    </div>
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
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/devis"
                className="inline-flex items-center gap-3 px-10 py-4 text-[14px] font-semibold text-white bg-[var(--accent)] rounded-xl hover:bg-[var(--accent-light)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.3)] transition-all duration-500 cursor-pointer group"
              >
                Demander un devis
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
