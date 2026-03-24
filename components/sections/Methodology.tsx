"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  staggerContainer,
  fadeUp,
  staggerContainerSlow,
} from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "DIAGNOSTIC & BILAN",
    desc: "Audit complet de votre situation personnelle, professionnelle et financière pour identifier les meilleures opportunités.",
  },
  {
    number: "02",
    title: "CADRAGE PROJET",
    desc: "Définition claire de vos objectifs, du secteur d'activité, de la structure juridique et du calendrier de lancement.",
  },
  {
    number: "03",
    title: "CRÉATION & COMMUNICATION",
    desc: "Création de l'entreprise, identité visuelle, site web et positionnement digital pour une présence forte dès le départ.",
  },
  {
    number: "04",
    title: "RÉSEAU & LANCEMENT",
    desc: "Mise en relation avec nos partenaires clés — banques, experts, immobilier — et accompagnement au lancement officiel.",
  },
  {
    number: "05",
    title: "SUIVI & AUTONOMIE",
    desc: "Accompagnement post-lancement, suivi trimestriel et formation pour que vous gériez votre activité en toute autonomie.",
  },
];

export default function Methodology() {
  return (
    <section
      className="v3-section relative bg-[var(--bg-elevated)]"
      id="methodologie"
    >
      {/* Aurora glow */}
      <div
        aria-hidden="true"
        className="aurora-glow w-[900px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      {/* Divider top */}
      <div className="v3-divider absolute top-0 left-0 right-0" />

      <Container size="wide">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Notre approche</span>
            <div className="para-bars para-bars--sm">
              <div className="para-bar" style={{ opacity: 0.3 }} />
              <div className="para-bar" style={{ opacity: 0.6 }} />
              <div className="para-bar" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="v3-section-title text-[clamp(1.75rem,4.5vw,3rem)]"
          >
            UNE MÉTHODE <span className="gradient-text">ÉPROUVÉE</span> EN 5
            ÉTAPES
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="v3-section-subtitle v3-section-subtitle--center mt-5"
          >
            De votre premier appel jusqu&apos;à votre autonomie complète — un
            parcours structuré, humain et orienté résultats.
          </motion.p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.4, 0.25, 1],
                delay: 0.3,
              }}
              className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent origin-left mx-16"
            />
          </div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-5 gap-4"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative flex flex-col"
              >
                {/* Step dot on the line */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
                  />
                </div>

                {/* Card */}
                <div className="v3-glass p-6 flex flex-col gap-4 flex-1 group hover:cursor-default">
                  {/* Step number */}
                  <span className="v3-step-number">{step.number}</span>

                  {/* Para bars accent */}
                  <div className="para-bars para-bars--sm">
                    <div className="para-bar" />
                    <div className="para-bar" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xs uppercase tracking-widest text-[var(--text-primary)] leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connector */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pt-16"
              >
                {/* Dot */}
                <div className="absolute left-[18px] top-8 w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] -translate-x-1/2" />

                {/* Card */}
                <div className="v3-glass p-6">
                  <div className="flex items-start gap-4">
                    <span className="v3-step-number flex-shrink-0">
                      {step.number}
                    </span>
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="para-bars para-bars--sm">
                        <div className="para-bar" />
                        <div className="para-bar" />
                      </div>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-sm uppercase tracking-wide text-[var(--text-primary)]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Divider bottom */}
      <div className="v3-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
