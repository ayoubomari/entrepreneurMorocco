"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah B.",
    route: "Lyon → Rabat",
    subtitle: "Coach business, installée depuis janvier 2024",
    content:
      "Je vivais à Lyon depuis 12 ans et je n'osais pas faire le saut. L'équipe m'a guidée étape par étape, de la création de mon auto-entreprise jusqu'à la recherche de mon appartement à Rabat. Aujourd'hui mon activité tourne et je n'ai jamais été aussi épanouie.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Youssef E.",
    route: "Bruxelles → Casablanca",
    subtitle: "Consultant digital, installé depuis avril 2024",
    content:
      "Je voulais quitter le salariat et rentrer au Maroc mais la paperasse me bloquait. En 3 mois, j'avais mon entreprise créée, mes premiers clients signés et un bureau à Casa. Un accompagnement vraiment professionnel et humain.",
    rating: 5,
    initial: "Y",
  },
  {
    name: "Nadia & Karim",
    route: "Paris → Marrakech",
    subtitle: "Couple franco-marocain, installés depuis sept. 2023",
    content:
      "Le retour avec notre fille était complexe entre les écoles, le logement et nos deux activités à lancer. Ils ont tout coordonné pour nous. Une équipe qui comprend vraiment les défis des familles MRE.",
    rating: 5,
    initial: "N",
  },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "text-[var(--accent)] fill-[var(--accent)]" : "text-[var(--text-muted)]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="v3-section relative bg-[var(--bg-primary)]" id="temoignages">
      {/* Aurora glows */}
      <div aria-hidden="true" className="aurora-glow w-[600px] h-[600px] top-0 left-1/4" />
      <div aria-hidden="true" className="aurora-glow w-[400px] h-[400px] bottom-0 right-1/4 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 animate-[fadeUp_0.8s_ease-out_both]">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="para-bars para-bars--sm">
              <div className="para-bar" />
              <div className="para-bar" />
              <div className="para-bar" />
            </div>
            <span className="v3-section-eyebrow-text">Ils nous ont fait confiance</span>
            <div className="para-bars para-bars--sm">
              <div className="para-bar" style={{ opacity: 0.3 }} />
              <div className="para-bar" style={{ opacity: 0.6 }} />
              <div className="para-bar" />
            </div>
          </div>

          <h2 className="v3-section-title text-[clamp(1.75rem,4.5vw,3rem)] max-w-3xl mx-auto">
            ILS ONT CHANGÉ DE VIE.{" "}
            <span className="gradient-text">VOUS POUVEZ AUSSI.</span>
          </h2>
        </div>

        {/* Asymmetric layout: featured quote left + navigation right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8 lg:gap-12 items-start">
          {/* LEFT — Featured large testimonial */}
          <div
            className="v3-glass p-10 md:p-14 relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.2s_both]"
            style={{ borderRadius: 24 }}
          >
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

            {/* Large decorative quote */}
            <div className="absolute top-8 right-8 opacity-[0.04]">
              <Quote size={180} className="text-[var(--accent)]" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <StarRating rating={active.rating} size={18} />

              {/* Quote text */}
              <blockquote className="mt-8 text-[clamp(1.1rem,2.5vw,1.5rem)] font-[family-name:var(--font-playfair)] italic text-white/90 leading-relaxed">
                &ldquo;{active.content}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="mt-10 flex items-center gap-5">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--accent-glow)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    transform: "skewX(-8deg)",
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-montserrat)] font-black text-xl text-[var(--accent)]"
                    style={{ transform: "skewX(8deg)" }}
                  >
                    {active.initial}
                  </span>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-montserrat)] font-bold text-white text-base">
                    {active.name}
                  </p>
                  <p className="text-sm text-[var(--accent-light)] font-semibold mt-0.5">
                    {active.route}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{active.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Thumbnail cards + navigation */}
          <div className="flex flex-col gap-4 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
            {/* Mini testimonial cards */}
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveIndex(i)}
                className={`v3-glass p-5 text-left cursor-pointer transition-all duration-400 ${
                  i === activeIndex
                    ? "border-[var(--accent)]/30 bg-white/[0.06]"
                    : "opacity-50 hover:opacity-80"
                }`}
                style={{ borderRadius: 16 }}
              >
                <div className="flex items-center gap-4">
                  {/* Mini avatar */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: i === activeIndex ? "var(--accent-glow)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${i === activeIndex ? "rgba(220,38,38,0.2)" : "rgba(255,255,255,0.06)"}`,
                      transform: "skewX(-6deg)",
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-montserrat)] font-bold text-sm"
                      style={{
                        color: i === activeIndex ? "var(--accent)" : "var(--text-secondary)",
                        transform: "skewX(6deg)",
                      }}
                    >
                      {t.initial}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-montserrat)] font-bold text-sm text-white truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{t.route}</p>
                  </div>

                  {/* Active indicator */}
                  {i === activeIndex && (
                    <div className="flex gap-[3px]">
                      <div className="w-[3px] h-4 bg-[var(--accent)] rounded-sm" style={{ transform: "skewX(-12deg)" }} />
                      <div className="w-[3px] h-4 bg-[var(--accent)]/50 rounded-sm" style={{ transform: "skewX(-12deg)" }} />
                    </div>
                  )}
                </div>
              </button>
            ))}

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/[0.06]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  aria-label="Précédent"
                >
                  <ChevronLeft size={18} className="text-[var(--text-secondary)]" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/[0.06]"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  aria-label="Suivant"
                >
                  <ChevronRight size={18} className="text-[var(--text-secondary)]" />
                </button>
              </div>

              {/* Aggregate */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-[var(--accent)] fill-[var(--accent)]" />
                  ))}
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  <span className="text-white font-bold">200+</span> familles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
