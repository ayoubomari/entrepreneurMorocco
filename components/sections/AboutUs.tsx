"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: "200+", label: "Familles accompagnées" },
  { value: "3 ans", label: "D'expérience" },
  { value: "4", label: "Pays couverts" },
];

export default function AboutUs() {
  return (
    <section className="relative bg-[var(--bg-primary)]" id="a-propos">
      {/* Full-width cinematic photo section */}
      <div className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
        {/* Background team photo */}
        <Image
          src="/images/nous2.webp"
          alt="Imad et Zakaria — Fondateurs Entrepreneurs Morocco"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/90 via-[var(--bg-primary)]/40 to-transparent" />

        {/* Aurora accent */}
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[300px] bg-[var(--accent)]/[0.06] rounded-full blur-[120px] pointer-events-none" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full py-24 lg:py-32">
            <div className="max-w-xl mb-12 sm:mb-0">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.8s_ease-out_both]">
                <div className="para-bars para-bars--sm">
                  <div className="para-bar" />
                  <div className="para-bar" />
                  <div className="para-bar" />
                </div>
                <span className="v3-section-eyebrow-text">Qui sommes-nous</span>
              </div>

              {/* Title */}
              <h2
                className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[-0.03em] text-white leading-[0.95] animate-[fadeUp_0.8s_ease-out_0.1s_both]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                DEUX ANCIENS PROFS{" "}
                <span className="gradient-text">DEVENUS ENTREPRENEURS.</span>
              </h2>

              {/* Tagline */}
              <p className="font-[family-name:var(--font-playfair)] italic text-white/70 text-lg mt-6 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                &ldquo;Nous avons vécu exactement ce que vous vivez
                aujourd&apos;hui.&rdquo;
              </p>

              {/* Short story */}
              <p className="text-[15px] text-white/50 leading-[1.8] mt-6 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
                Imad et Zakaria ont quitté leurs postes stables pour créer leurs
                propres activités au Maroc. Forts de cette expérience, ils ont
                fondé{" "}
                <span className="text-white font-medium">
                  Entrepreneurs Morocco
                </span>{" "}
                — pour que personne d&apos;autre n&apos;ait à naviguer seul.
              </p>

              {/* CTA */}
              <div className="mt-10 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
                <Link
                  href="/commencez-un-projet"
                  className="group relative inline-flex items-center gap-3 px-9 py-[17px] text-[12px] font-bold tracking-[0.2em] uppercase text-white cursor-pointer"
                >
                  <span className="absolute inset-0 bg-[var(--accent)] skew-x-[-12deg] transition-all duration-500 group-hover:bg-[var(--accent-light)] group-hover:scale-[1.04] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.35)]" />
                  <span className="relative z-10">
                    Découvrir notre histoire
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Founder name tags — bottom right */}
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-16 z-10 flex gap-4 animate-[fadeUp_0.8s_ease-out_0.5s_both]">
          {["Zakaria", "Imad"].map((name) => (
            <div
              key={name}
              className="backdrop-blur-xl bg-white/[0.08] border border-white/[0.1] rounded-xl px-5 py-3"
            >
              <div className="para-bars para-bars--sm mb-1.5">
                <div className="para-bar" />
                <div className="para-bar" />
              </div>
              <p className="font-[family-name:var(--font-montserrat)] font-bold text-sm text-white uppercase tracking-wide">
                {name}
              </p>
              <p className="text-[10px] text-white/40 font-medium tracking-widest uppercase mt-0.5">
                Co-fondateur
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip below photo */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-[fadeUp_0.8s_ease-out_0.5s_both]">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter
                value={s.value}
                className="font-[family-name:var(--font-montserrat)] font-black gradient-text block"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              />
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
