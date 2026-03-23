"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/animations";

const PARTNERS = [
  { label: "Banques", image: "/icons/bank.svg" },
  { label: "Experts Comptables", image: "/icons/comptable.svg" },
  { label: "Avocats", image: "/icons/avocat.svg" },
  { label: "Agents Immobiliers", image: "/icons/immobilier.svg" },
  { label: "Institutions Officielles", image: "/icons/institu.svg" },
];

// Duplicate for seamless loop
const TRACK = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function Network() {
  return (
    <section className="v3-section relative bg-[var(--bg-elevated)]" id="reseau">
      {/* Aurora glow */}
      <div aria-hidden="true" className="aurora-glow w-[700px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

      {/* Divider top */}
      <div className="v3-divider absolute top-0 left-0 right-0" />

      <Container>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Notre réseau</span>
            <div className="para-bars para-bars--sm">
              <div className="para-bar" style={{ opacity: 0.3 }} />
              <div className="para-bar" style={{ opacity: 0.6 }} />
              <div className="para-bar" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="v3-section-title text-[clamp(1.75rem,4.5vw,3rem)] max-w-3xl mx-auto"
          >
            UN RÉSEAU DE{" "}
            <span className="gradient-text">PARTENAIRES</span> DE CONFIANCE
          </motion.h2>

          <motion.p variants={fadeUp} className="v3-section-subtitle v3-section-subtitle--center mt-5">
            Banques, experts, avocats, agents immobiliers et institutions officielles —
            nos partenaires sont sélectionnés pour leur expertise et leur fiabilité.
          </motion.p>
        </motion.div>
      </Container>

      {/* Marquee container — full bleed */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg-elevated), transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--bg-elevated), transparent)" }} />

        {/* Track */}
        <div
          className="flex gap-6 w-max pl-6"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {TRACK.map((partner, i) => (
            <div
              key={i}
              className="v3-glass flex-shrink-0 flex flex-col items-center gap-4 px-10 py-8 cursor-default"
              style={{ minWidth: 200 }}
            >
              <div className="relative w-16 h-16">
                <Image
                  src={partner.image}
                  alt={partner.label}
                  fill
                  className="object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
                  sizes="64px"
                />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] text-center whitespace-nowrap">
                {partner.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stat */}
      <Container className="mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-12"
        >
          {[
            { value: "50+", label: "Partenaires actifs" },
            { value: "5", label: "Domaines d'expertise" },
            { value: "100%", label: "Sélectionnés" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <AnimatedCounter
                value={item.value}
                className="v3-metric gradient-text block"
                style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)" }}
              />
              <p className="v3-metric-label">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Divider bottom */}
      <div className="v3-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
