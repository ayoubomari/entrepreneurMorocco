"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import GuideDownloadForm from "@/components/forms/GuideDownloadForm";
import ContactSection from "@/components/forms/ContactSection";
import Link from "next/link";
import Image from "next/image";
import "./audience-carousel.css";
import "./accompagnements.css";
import "./servicessection.css";
import "./metodology.css";
import "./testimonials.css";
import "./networkcaroussel.css";
import "./podcast.css";
import "./leadmagnet.css";
import "./resources.css";
import "./aboutus.css";
import "./contactsection.css";
import "./faqsection.css";
import "./footer.css";
import "./hero.css";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { useIsVisible } from "../hooks/useIsVisible";

/* =========================
   3D Audience Carousel (Optimized)
   ========================= */
const IMAGES = [1, 2, 3, 4, 5].map((n) => `/caroussel-3D-${n}.png`);
const CAPTIONS = [
  { title: "Étudiants", subtitle: "Installation, études, carte de séjour" },
  { title: "Marocains du monde", subtitle: "Revenir au pays sans stress" },
  {
    title: "Entrepreneurs en reconversion",
    subtitle: "Nouveau départ, nouveau projet",
  },
  { title: "Freelances", subtitle: "Lancer une activité digitale" },
  { title: "Investisseurs", subtitle: "Opportunités et fiscalité optimisées" },
];

const AudienceCarousel: React.FC = () => {
  // --- HOOK FOR ANIMATION TRIGGER ---
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.1 });

  const [active, setActive] = useState(2);
  const [visibleCards, setVisibleCards] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragThreshold = 50;

  useEffect(() => {
    if (isPaused || isMobile) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) setVisibleCards(3);
      else if (width < 1024) setVisibleCards(4);
      else setVisibleCards(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setIsPaused(true);
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    if (diff > dragThreshold) prev();
    else if (diff < -dragThreshold) next();
    setIsDragging(false);
    setIsPaused(false);
  };

  const getCardStyle = (index: number) => {
    const diff = index - active;
    const totalCards = Math.min(IMAGES.length, visibleCards);
    const centerIndex = Math.floor(totalCards / 2);

    let position = diff;
    if (position > centerIndex) position -= IMAGES.length;
    if (position < -centerIndex) position += IMAGES.length;

    if (Math.abs(position) > centerIndex) return { display: "none" };

    const distanceFromCenter = Math.abs(position);
    const scale = 1 - distanceFromCenter * 0.08;
    const yOffset = -distanceFromCenter * 73;

    let opacity, brightness;
    if (distanceFromCenter === 0) {
      opacity = 1;
      brightness = 1;
    } else if (distanceFromCenter === 1) {
      opacity = 0.95;
      brightness = 0.95;
    } else {
      opacity = 1 - distanceFromCenter * 0.25;
      brightness = 0.65 + 0.15 * (1 - distanceFromCenter / centerIndex);
    }

    return {
      transform: `translateX(${
        position * 120
      }%) translateY(${yOffset}px) scale(${scale})`,
      opacity: opacity,
      filter: `brightness(${brightness})`,
      zIndex: 100 - distanceFromCenter,
      cursor: distanceFromCenter === 0 ? "default" : "pointer",
    };
  };

  return (
    <section ref={elementRef} className={`wc-s ${isVisible ? "v" : ""}`}>
      <div className="wc-h">
        <h2 className="wc-t">
          POUR CEUX QUI VEULENT S'INSTALLER, ENTREPRENDRE OU CHANGER DE VIE
        </h2>
      </div>

      <div
        className={`wc-ct ${isDragging ? "grb" : ""}`}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onMouseLeave={() => {
          if (isDragging) {
            setIsDragging(false);
            setIsPaused(false);
          }
        }}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        onMouseEnter={() => setIsPaused(true)}
      >
        <button
          className="c-a c-a-l"
          aria-label="Previous Slide"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          className="c-a c-a-r"
          aria-label="Next Slide"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <div className="wc-m">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className={`wc-c ${i === active ? "wc-c-a" : ""}`}
              style={getCardStyle(i)}
              onClick={() => !isDragging && setActive(i)}
            >
              <div className="wc-iw">
                <Image
                  src={src}
                  alt={CAPTIONS[i].title}
                  width={765}
                  height={966}
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <div className="wc-cp">
                <div className="wc-cp-t">{CAPTIONS[i].title}</div>
                {CAPTIONS[i].subtitle && (
                  <div className="wc-cp-s">{CAPTIONS[i].subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================
   Hero
   ========================= */
const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Enhanced loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`h ${loaded ? "h--ld" : ""}`}>
      {/* Enhanced Background with Multiple Layers */}
      <div className="h_bg_c">
        <div
          className="h_bg h_bg_m"
          style={{
            transform: `translate3d(${mousePosition.x * 5}px, ${
              mousePosition.y * 5
            }px, 0) translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className="h_bg h_bg_s"
          style={{
            transform: `translate3d(${mousePosition.x * 3}px, ${
              mousePosition.y * 3
            }px, 0) translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="h_ov" />
        <div className="h_gr" />
      </div>

      {/* Animated Particles */}
      <div className="h_pts">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`h_pt h_pt--${i + 1}`}
            style={{
              animationDelay: `${i * 0.5}s`,
              transform: `translate3d(${mousePosition.x * (i + 1)}px, ${
                mousePosition.y * (i + 1)
              }px, 0)`,
            }}
          />
        ))}
      </div>

      {/* Content with Enhanced Animations */}
      <div className="hs">
        {/* FIRST HERO CONTENT (Original) */}
        <div className="h_ct">
          <div className="h_in">
            {/* Combined Big Title */}
            <h1 className="h_t">
              {[
                "ENTREPRENDRE",
                "AU",
                "MAROC.",
                "\n",
                "ON",
                "VOUS",
                "MONTRE",
                "LE",
                "CHEMIN.",
              ].map((word, index, arr) => {
                if (word === "\n") {
                  return <br key={index} className="h_t_br" />;
                }

                return (
                  <span
                    key={word + index}
                    className="h_t_w"
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className="h_t_l"
                        style={{
                          animationDelay: `${
                            0.2 + index * 0.08 + letterIndex * 0.015
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}

                    {index < arr.length - 1 && arr[index + 1] !== "\n" && (
                      <span className="h_t_sp"> </span>
                    )}
                  </span>
                );
              })}
            </h1>

            {/* Animated Text */}
            <p className="h_tx">
              <span className="h_tx_c">
                De l&apos;idée à la concrétisation, on vous accompagne à chaque
                étape
              </span>
            </p>

            {/* Enhanced Button */}
            <div className="h_b_c">
              <Link href="/commencez-un-projet" className="h_b">
                <span className="h_b_t">Je commence mon projet</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SECOND HERO CONTENT */}
        <div className="h_ct h_ct_s">
          <div className="h_in h_in_s">
            <h2 className="h_t h_t_s">
              {[
                "ÊTES-VOUS",
                "PRÊT",
                "À",
                "ENTREPRENDRE",
                "AU",
                "MAROC",
                "?",
              ].map((word, index, arr) => {
                if (word === "\n") {
                  return <br key={index} className="h_t_br" />;
                }

                return (
                  <span
                    key={word + index}
                    className="h_t_w"
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className="h_t_l"
                        style={{
                          animationDelay: `${
                            0.2 + index * 0.08 + letterIndex * 0.015
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}

                    {index < arr.length - 1 && arr[index + 1] !== "\n" && (
                      <span className="h_t_sp"> </span>
                    )}
                  </span>
                );
              })}
            </h2>

            {/* Blockone Text */}
            <p className="h_tx">
              <span className="h_tx_c">
                Faites le test en 1 minute et découvrez si c&apos;est le bon
                moment pour vous lancer !
              </span>
            </p>

            {/* Blockone Button */}
            <div className="h_b_c">
              <Link href="/mini-test" className="h_b h_b_s">
                <span className="h_b_t">Je commence le test</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="h_fe">
        <div className="h_fs h_fs--1"></div>
        <div className="h_fs h_fs--2"></div>
        <div className="h_fs h_fs--3"></div>
        <div className="h_fs h_fs--4"></div>
      </div>
    </div>
  );
};

/* =========================
   Accompagnements
   ========================= */
const AccompagnementsSection = () => {
  // Use the hook (Trigger when 20% of element is visible)
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  return (
    <section className="bg-black py-12 md:py-16 acc-section">
      {/* Attach ref here and toggle the class */}
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-6 acc-wrap ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-white font-extrabold uppercase tracking-wide leading-tight">
          DES ACCOMPAGNEMENTS ADAPTÉS À CHAQUE PROFIL
        </h2>

        <p className="text-white/85 font-light">
          Choisissez le pack qui correspond à votre situation : MRE, solo,
          famille ou croissance rapide.
        </p>

        <div className="flex flex-col sm:flex-row items-center acc-cta">
          <Link href="/contact-quiz" className="acc-btn acc-btn--primary">
            Choisir ce plan
          </Link>
          <Link href="/brochure" className="acc-btn acc-btn--ghost">
            Télécharger la brochure
          </Link>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Services
   ========================= */
const ServicesSection = () => {
  // Use the hook (Trigger when 20% of element is visible)
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  return (
    <section className="bg-black py-12 md:py-16 srv-section">
      {/* Attach ref here and toggle the visible class */}
      <div
        ref={elementRef}
        className={`max-w-7xl mx-auto px-6 srv-wrap ${
          isVisible ? "visible" : ""
        }`}
      >
        <h2 className="text-white font-extrabold uppercase tracking-wide leading-tight">
          DES SERVICES SUR-MESURE POUR CHAQUE BESOIN
        </h2>

        <div className="srv-content">
          <p className="text-white/85 font-light">
            Choisissez uniquement ce dont vous avez besoin : administratif,
            digital, fiscal, immobilier, communication...
          </p>
          <p className="text-white/85 font-light">
            Payez ce qui vous sert vraiment, quand vous en avez besoin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center srv-cta">
          <Link href="/devis" className="srv-btn srv-btn--primary">
            Demander un devis personnalisé
          </Link>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Methodology
   ========================= */
const MethodologySection = () => {
  return (
    <section className="bg-black py-12 md:py-16 meth-section">
      <div className="max-w-7xl mx-auto px-6 meth-wrap">
        <h2 className="text-white font-extrabold uppercase tracking-wide leading-tight">
          UNE MÉTHODE CLAIRE. DES RÉSULTATS DURABLES.
        </h2>
      </div>

      <div className="methRail">
        <div className="methLine" />
        {[
          { number: "1", title: "DIAGNOSTIC & BILAN" },
          { number: "2", title: "CADRAGE PROJET" },
          { number: "3", title: "CRÉATION & COMMUNICATION" },
          { number: "4", title: "RÉSEAU & LANCEMENT" },
          { number: "5", title: "SUIVI & AUTONOMIE" },
        ].map((s, i) => (
          <div key={i} className="methItem">
            <div className="methLabel">
              {s.title.split("\n").map((line, k) => (
                <div key={k} className="methLabel-text">
                  {line}
                </div>
              ))}
            </div>
            <div className="methBox">
              <span className="methNum">{s.number}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* =========================
   Testimonials
   ========================= */
const StarRating = ({ rating }: { rating: number }) => (
  <div className="ts-stars">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`ts-star ${index < rating ? "ts-star-filled" : "ts-star-empty"}`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="12,2 14.5,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9.5,9" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.1 });

  const testimonials = [
    {
      name: "Sarah B., Lyon → Rabat",
      subtitle: "Coach business, installée depuis janvier 2024",
      content:
        "Je vivais à Lyon depuis 12 ans, avec l'envie de revenir au Maroc mais sans savoir par où commencer.\nEn 6 semaines, j'avais ma société, ma carte de séjour, et mes premiers clients.",
      rating: 5,
    },
    {
      name: "Youssef E., Bruxelles → Casablanca",
      subtitle: "Consultant digital, installé depuis avril 2024",
      content:
        "Je voulais quitter le salariat, mais j'avais besoin d'un cadre pour me lancer. J'ai pu tout gérer à distance : structuration du projet et création de la société. En moins de 2 mois, j'étais opérationnel à Casablanca.",
      rating: 5,
    },
    {
      name: "Nadia & Karim, Paris → Marrakech",
      subtitle: "Couple franco-marocain, installés depuis sept. 2023",
      content:
        "Le retour avec notre fille nous angoissait, surtout pour l'école et les papiers. Finalement, tout a été pris en charge : logement, inscription scolaire et cartes de séjour. Une installation clé en main, sans aucun stress.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`ts-section ${isVisible ? "is-ts-visible" : ""}`}
    >
      <div className="ts-container max-w-7xl mx-auto px-6">
        <div className="ts-header">
          <h2 className="ts-title">ILS L&apos;ONT FAIT AVEC NOUS</h2>
          <p className="ts-description">
            Découvrez comment nos clients ont concrétisé leur projet au Maroc,
            <br />
            en quelques semaines, grâce à notre accompagnement sur mesure.
          </p>
        </div>

        <div className="ts-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="ts-wrapper">
              <div className="ts-profile-icon">
                <div className="ts-profile-circle">
                  <svg
                    className="ts-profile-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <line x1="4" y1="21" x2="20" y2="21"></line>
                  </svg>
                </div>
              </div>

              <div className="ts-card">
                <div className="ts-card-inner">
                  <h3 className="ts-name">
                    {testimonial.name.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="ts-subtitle">{testimonial.subtitle}</p>
                  <blockquote className="ts-quote">
                    "{testimonial.content}"
                  </blockquote>
                  {/* Using the stable component here */}
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================
   Network – Infinite Auto Carousel
   ========================= */

const NetworkSection = () => {
  // --- NEW: Visibility Hook ---
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.1 });

  const partners = [
    {
      src: "/bank.svg",
      alt: "Banques partenaires",
      title: "BANQUES\nPARTENAIRES",
    },
    {
      src: "/comptable.svg",
      alt: "Experts comptables",
      title: "EXPERTS\nCOMPTABLES",
    },
    { src: "/avocat.svg", alt: "Avocats", title: "AVOCATS" },
    {
      src: "/immobilier.svg",
      alt: "Agents immobiliers",
      title: "AGENTS\nIMMOBILIERS",
    },
    {
      src: "/institu.svg",
      alt: "Institutions officielles",
      title: "INSTITUTIONS\nOFFICIELLES",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-24 network-section">
      {/* Header Wrapper with visibility trigger */}
      <div
        ref={elementRef}
        className={`net-wrap max-w-7xl mx-auto ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-white font-extrabold uppercase tracking-wide leading-tight">
          NOTRE RÉSEAU DE CONFIANCE
        </h2>

        <div className="net-content">
          <p className="text-white/85 font-light">
            Nous collaborons avec un écosystème d&apos;experts fiables pour
            accélérer votre projet et garantir une installation sans stress au
            Maroc.
          </p>
        </div>
      </div>

      {/* Carousel Wrapper with visibility trigger (slight delay via CSS) */}
      <div className={`net-bleed ${isVisible ? "visible" : ""}`}>
        <div className="net-auto" style={{ minHeight: 96 }}>
          <div className="net-track">
            {[...partners, ...partners].map((p, i) => (
              <div className="net-item" key={`${p.src}-${i}`}>
                <div className="net-icon">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
                <h3 className="net-title">
                  {p.title.split("\n").map((line, k) => (
                    <span key={k} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Podcast
   ========================= */
const PodcastSection = () => {
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.2 });

  // 2. Data
  const base = useMemo(
    () => [
      {
        id: 1,
        image: "/podcast2-1.png",
        video: "/videos/reel-20.mp4",
      },
      {
        id: 2,
        image: "/podcast1-1.png",
        video: "/videos/reel-1.mp4",
      },
      {
        id: 3,
        image: "/podcast2-1.png",
        video: "/videos/reel-19.mp4",
      },
      {
        id: 4,
        image: "/podcast1-1.png",
        video: "/videos/reel-1.mp4",
      },
    ],
    [],
  );

  const COPIES = 1;
  const items = useMemo(
    () => Array.from({ length: COPIES }).flatMap(() => base),
    [base],
  );

  const trackRef = useRef<HTMLDivElement>(null);

  // State
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Refs for Drag Logic
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const getOneSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / COPIES;
  }, [COPIES]);

  // --- Core: Move the Scrollbar to center a specific card ---
  const centerCardByIndex = useCallback((index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll(".pod-card"));
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    const targetCard = cards[index];
    if (!targetCard) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();

    const currentCardCenter = cardRect.left + cardRect.width / 2;
    const currentTrackCenter = trackRect.left + trackRect.width / 2;
    const offset = currentCardCenter - currentTrackCenter;

    const targetScrollLeft = track.scrollLeft + offset;

    const currentIsDesktop = window.innerWidth >= 1024;

    if (currentIsDesktop) {
      const nextCard = cards[index + 1];
      if (nextCard && index % 2 === 0) {
        // Assuming even start
        const nextRect = nextCard.getBoundingClientRect();
        const pairCenter = (cardRect.left + nextRect.right) / 2;
        const pairOffset = pairCenter - currentTrackCenter;
        const pairTarget = track.scrollLeft + pairOffset;

        track.scrollTo({
          left: pairTarget,
          behavior: smooth ? "smooth" : "auto",
        });
        return;
      }
    }

    track.scrollTo({
      left: targetScrollLeft,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  // --- Initial Position Setup ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const initialPosition = () => {
      const oneSetWidth = getOneSetWidth();
      if (oneSetWidth > 0) {
        track.scrollLeft = oneSetWidth * 2;
        setTimeout(() => {
          const startIndex = base.length * 2;
          const safeIndex = startIndex < items.length ? startIndex : 0;
          centerCardByIndex(safeIndex, false);
          setActive(safeIndex);
        }, 100);
      }
    };

    const images = track.querySelectorAll("img");
    if (images.length === 0) {
      initialPosition();
    } else {
      let loadedCount = 0;
      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) initialPosition();
      };
      images.forEach((img) => {
        if (img.complete) onImageLoad();
        else {
          img.addEventListener("load", onImageLoad);
          img.addEventListener("error", onImageLoad);
        }
      });
    }
  }, [base.length, items.length, getOneSetWidth, centerCardByIndex]);

  // =========================================================
  //  UNIFIED DRAG LOGIC (MOUSE & TOUCH)
  // =========================================================
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleStart = (clientX: number) => {
      isDownRef.current = true;
      isDraggingRef.current = false;
      startXRef.current = clientX;
      startScrollLeftRef.current = track.scrollLeft;

      track.style.cursor = "none";
      track.style.scrollBehavior = "auto";
    };

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      handleStart(e.pageX);
    };

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleStart(touch.pageX);
    };

    const handleMove = (clientX: number) => {
      if (!isDownRef.current) return;

      const x = clientX;
      const dist = x - startXRef.current;

      if (Math.abs(dist) > 5) {
        isDraggingRef.current = true;
      }

      track.scrollLeft = startScrollLeftRef.current - dist;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDownRef.current) return;
      e.preventDefault();
      handleMove(e.pageX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDownRef.current) return;
      const touch = e.touches[0];
      handleMove(touch.pageX);
    };

    const handleEnd = (clientX: number) => {
      if (!isDownRef.current) return;

      isDownRef.current = false;
      track.style.cursor = "none";
      track.style.scrollBehavior = "smooth";

      if (!isDraggingRef.current) return;

      const dist = clientX - startXRef.current;
      let targetIndex = active;
      const SWIPE_THRESHOLD = 30;

      if (Math.abs(dist) > SWIPE_THRESHOLD) {
        const moveAmount = isDesktop ? 2 : 1;

        if (dist < 0) {
          targetIndex = active + moveAmount;
        } else {
          targetIndex = active - moveAmount;
        }
      } else {
        targetIndex = active;
      }

      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= items.length) {
        targetIndex = items.length - 1;
        if (isDesktop && targetIndex % 2 !== 0) targetIndex -= 1;
      }

      setActive(targetIndex);
      centerCardByIndex(targetIndex, true);

      setTimeout(() => {
        isDraggingRef.current = false;
      }, 0);
    };

    const onMouseUp = (e: MouseEvent) => {
      handleEnd(e.pageX);
    };

    const onMouseLeave = () => {
      if (isDownRef.current) {
        isDownRef.current = false;
        track.style.cursor = "none";
        track.style.scrollBehavior = "smooth";
        centerCardByIndex(active, true);
        isDraggingRef.current = false;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      handleEnd(touch.pageX);
    };

    track.addEventListener("mousedown", onMouseDown);
    track.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: false });
    track.addEventListener("touchend", onTouchEnd);

    return () => {
      track.removeEventListener("mousedown", onMouseDown);
      track.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, isDesktop, items.length, centerCardByIndex]);

  const handlePlayClick = (e: React.MouseEvent, videoSrc: string) => {
    e.stopPropagation();
    if (isDraggingRef.current) return;
    setSelectedVideo(videoSrc);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) return;
    if ((e.target as HTMLElement).closest(".pod-media")) return;

    const cardElement = e.currentTarget;
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(".pod-card"));
    let clickedIndex = cards.indexOf(cardElement);

    if (clickedIndex !== -1) {
      if (isDesktop && clickedIndex % 2 !== 0) {
        clickedIndex = clickedIndex - 1;
      }
      setActive(clickedIndex);
      centerCardByIndex(clickedIndex, true);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      className={`pod-section ${isVisible ? "visible" : ""}`}
      ref={elementRef}
    >
      <div className="pod-container">
        <h2 className="pod-title">LE PODCAST : ENTREPRENDRE LE MAROC</h2>
        <div className="pod-content">
          <p className="pod-sub">
            Découvrez les coulisses de l'entrepreneuriat au Maroc à travers des
            échanges inspirants avec des experts, entrepreneurs,
            <br className="pod-desktop-br" />
            et MRE qui ont franchi le pas.
          </p>
        </div>
      </div>

      <div className="pod-bleed">
        <div className="pod-track" ref={trackRef}>
          {items.map((podcast, index) => {
            const isActive = isDesktop
              ? index === active || index === active + 1
              : index === active;

            return (
              <div
                key={`${podcast.id}-${index}`}
                className={`pod-card ${isActive ? "is-active" : ""}`}
                onClick={handleCardClick}
              >
                <div
                  className="pod-media"
                  onClick={(e) => handlePlayClick(e, podcast.video)}
                >
                  <div
                    className={`pod-thumb ${
                      index % 2 === 0
                        ? "pod-thumb-to-down-l" // Swapped from R to L
                        : "pod-thumb-to-down-r" // Swapped from L to R
                    }`}
                  >
                    <Image
                      width={400}
                      height={600}
                      src={podcast.image}
                      alt="Podcast"
                      className="pod-thumb-img"
                    />
                  </div>

                  <div className="pod-play">
                    <Image
                      src="/video-play-botton.webp"
                      alt="Play Video"
                      width={88}
                      height={88}
                    />
                  </div>
                </div>

                <div className="pod-actions">
                  <a
                    href="https://www.youtube.com/@EntrepreneursMorocco"
                    className="pod-btn pod-btn--solid"
                    onClick={(e) => isDraggingRef.current && e.preventDefault()}
                  >
                    ÉCOUTER SUR YOUTUBE
                  </a>
                  <a
                    href="https://www.instagram.com/entrepreneursmorocco?igsh=b2JucjcwNjcxZHB6"
                    className="pod-btn pod-btn--outline"
                    onClick={(e) => isDraggingRef.current && e.preventDefault()}
                  >
                    ÉCOUTER SUR INSTAGRAM
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedVideo && (
        <div className="pod-modal-overlay" onClick={closeModal}>
          <div
            className="pod-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pod-close-btn" onClick={closeModal}>
              &times;
            </button>
            <video
              src={selectedVideo}
              className="pod-video-player"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

/* =========================
   Resources Section
   ========================= */
const ResourcesSection = () => {
  // Trigger animation when 15% of the element is visible
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.15 });

  const articles = [
    {
      id: 1,
      title: "POURQUOI INVESTIR AU MAROC D'ICI 2030 ?",
      description:
        "Vision 2030, Mondial et Tech : saisissez l'opportunité économique unique de la décennie.",
      link: "/articles/pourquoi-investir-au-maroc",
    },
    {
      id: 2,
      title: "OÙ INVESTIR AU MAROC : LES SECTEURS PORTEURS",
      description:
        "Énergie verte, IA et Tourisme : identifiez les véritables piliers de croissance du Royaume.",
      link: "/articles/les-secteurs-porteurs",
    },
    {
      id: 3,
      title: "MRE : COMMENT BÂTIR LE MAROC DE DEMAIN",
      description:
        "Au-delà des transferts : transformez votre expertise et votre réseau en succès entrepreneurial.",
      link: "/articles/comment-batir-le-maroc",
    },
    {
      id: 4,
      title: "MAROC VS DUBAÏ : LE GUIDE DU DIGITAL NOMAD",
      description:
        "Accessible, proche et authentique : pourquoi les entrepreneurs préfèrent désormais le Maroc.",
      link: "/articles/maroc-vs-dubai",
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`res-sec ${isVisible ? "visible" : ""}`}
    >
      <div className={"res-wrap"}>
        <header className="res-head">
          <h2 className="res-title">RESSOURCES & ARTICLES UTILES</h2>
          <div className="res-intro">
            <p>
              Des conseils pratiques pour bien entreprendre au Maroc, même à
              distance.
            </p>
            <p>
              Découvrez nos contenus pour éviter les erreurs et faire les bons
              choix.
            </p>
          </div>
        </header>

        <div className="res-grid">
          {articles.map((a, idx) => (
            <article key={a.id}>
              <Link href={a.link} className="res-item">
                <div className="res-title-container">
                  <span className="res-num">{idx + 1}. </span>
                  <span className="res-h3">{a.title}</span>
                </div>

                <p className="res-desc">{a.description}</p>

                <div className="res-btn">LIRE L'ARTICLE</div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================
   About Us Section
   ========================= */
const AboutUsSection = () => {
  return (
    <section className="bg-black py-10 md:py-20 md:py-24">
      {/* 
        Attached ref={elementRef} 
        Added logic to toggle "visible" class 
      */}
      <div className="max-w-7xl mx-auto px-6 aus-wrap">
        {/* Header Section */}
        <div className="aus-lead">
          <h2 className="aus-title">
            DEUX ANCIENS PROFS DEVENUS ENTREPRENEURS.
          </h2>
        </div>

        {/* Main Grid */}
        <div className="aus-grid">
          {/* Left Column: Photos */}
          <div className="aus-photoCol">
            <div className="aus-duo-container">
              <div className="aus-internal-blob"></div>

              {/* Zakaria's Photo */}
              <div className="aus-img-card">
                <Image
                  width={700}
                  height={1400}
                  className="aus-photo aus-photo-zakaria"
                  src="/zakaria.png"
                  alt="Zakaria"
                  title="Zakaria"
                  loading="lazy"
                />
              </div>

              {/* Imad's Photo */}
              <div className="aus-img-card">
                <Image
                  width={700}
                  height={1400}
                  className="aus-photo aus-photo-imad"
                  src="/imad.png"
                  alt="Imad"
                  title="Imad"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="aus-content">
            <p className="aus-p">
              Nous sommes Imad et Zakaria, deux anciens enseignants qui ont
              décidé de changer de vie pour aider les autres à faire de même.
            </p>

            <p className="aus-p">
              Après des années passées en France, nous avons vécu toutes les
              étapes du retour au Maroc : projet, création d'entreprise,
              logement, famille, fiscalité...
            </p>

            <p className="aus-p">
              Aujourd'hui, avec Entrepreneurs Morocco, notre mission est claire
              :
              <br />
              Simplifier l'installation professionnelle au Maroc
              <br />
              Offrir un accompagnement humain et structuré
              <br />
              Mettre notre réseau au service des MRE, familles et porteurs de
              projets
            </p>

            <p className="aus-p">
              Pas de blabla. Juste des solutions concrètes, testées, et
              personnalisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   FAQ Section
   ========================= */

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "EST-CE FINANÇABLE ?",
    answer:
      "Oui, absolument ! Nous proposons plusieurs solutions de financement adaptées à votre situation (CPF si éligible, partenariats bancaires, paiement échelonné, aides publiques…).",
  },
  {
    question: "DOIS-JE AVOIR UN PROJET PRÉCIS ?",
    answer:
      "Pas nécessairement. Nous vous aidons à clarifier votre projet (diagnostic, choix du secteur, étude de marché, business model).",
  },
  {
    question: "EST-CE QUE VOUS AIDEZ AUSSI POUR LA FAMILLE ?",
    answer:
      "Oui. Avec le Pack Family : logement, écoles, démarches pour la famille, carte de séjour, couverture médicale, accueil VIP…",
  },
  {
    question: "EST-CE QUE JE PEUX VOUS PARLER EN DIRECT ?",
    answer:
      "Bien sûr. Par téléphone, rendez-vous, bureaux (Rabat, Paris, Dubaï) ou webinaires réguliers. Le contact humain est central.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Trigger animation when 15% of the section is visible
  const { elementRef, isVisible } = useIsVisible({ threshold: 0.15 });

  return (
    <section id="faq" className="faq-sec">
      {/* 
         Ref attached here. 
         Added conditional 'visible' class based on hook state.
      */}
      <div
        ref={elementRef}
        className={`faq-wrap ${isVisible ? "visible" : ""}`}
      >
        <header className="faq-lead">
          <h2 className="faq-title">QUESTIONS FRÉQUENTES</h2>
          <p className="faq-sub">
            Voici les réponses aux questions que nos clients nous posent
            souvent.
          </p>

          <p className="faq-sub">
            Vous ne trouvez pas ce que vous cherchez ? Contactez-nous
            directement.
          </p>
        </header>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div className="fq-item" key={i}>
                <div className="fq-card">
                  <button
                    className="fq-btn"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`fq-panel-${i}`}
                  >
                    <span className="fq-q">{f.question}</span>
                    <span
                      className={`fq-plus ${open ? "is-open" : ""}`}
                      aria-hidden
                    >
                      {/* Plus icon CSS */}
                    </span>
                  </button>

                  <div
                    id={`fq-panel-${i}`}
                    className={`fq-panel ${open ? "is-open" : ""}`}
                  >
                    <div className="fq-panel-inner">
                      <p className="fq-a">{f.answer}</p>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <div className="fq-sep" aria-hidden />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =========================
   Footer
   ========================= */
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/entrepreneurs-morocco/about/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/entrepreneursmorocco?igsh=b2JucjcwNjcxZHB6",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@EntrepreneursMorocco",
    icon: Youtube,
  },
];

const Footer = () => {
  return (
    <footer className="ft-section">
      <div className="ft-divider" />

      <div className="ft-container">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <Image
              src="/logofooter.svg"
              alt="Entrepreneurs Morocco"
              width={340}
              height={70}
              className="ft-logo"
              loading="lazy"
            />
            <p className="ft-tagline">
              Accompagnement humain & stratégique pour entreprendre au Maroc.
            </p>
          </div>

          {/* Menu */}
          <nav className="ft-col">
            <h3 className="ft-heading">MENU</h3>
            <ul className="ft-list">
              <li>
                <Link href="/" className="ft-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="ft-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="ft-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#homecontact" className="ft-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Rapide */}
          <div className="ft-col ft-contact-rapid-card">
            <h3 className="ft-heading">CONTACT RAPIDE</h3>
            <ul className="ft-contact">
              <li className="ft-contactLine">
                Camp militaire, Immeuble STAVROULA , Gueliz route de, Av. 4ème
                D.M.M., Marrakesh 40000, Maroc, deuxième étage porte 16
              </li>
              <li className="ft-contactLine">
                <a className="ft-q-link" href="tel:+33644660252">
                  +33 6 44 66 02 52
                </a>
              </li>
              {/* <li className="ft-contactLine">
                <a className="ft-q-link" href="tel:+212776868163">
                  +212 7 76 86 81 63
                </a>
              </li> */}
              <li className="ft-contactLine">
                <a className="ft-q-link" href="mailto:contact@em.com">
                  salam@entrepreneursmorocco.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="ft-col ft-social-card">
            <h3 className="ft-heading ft-heading-normal">Réseaux sociaux</h3>
            <ul className="ft-socialList">
              {SOCIALS.map((s) => (
                <li key={s.label} className="ft-socialItem">
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ft-socialLink"
                    aria-label={`${s.label}`}
                  >
                    <span className="ft-iconWrap">
                      {/* 3. Render the Icon Component directly */}
                      <s.icon size={30} strokeWidth={1.5} className="ft-icon" />
                    </span>
                    <span>{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        <p>©{new Date().getFullYear()} Tous les droits réservés</p>
      </div>
    </footer>
  );
};

/* =========================
   Main Page
   ========================= */
const HomePageClient = () => {
  return (
    <>
      <div className="min-h-screen bg-black">
        <HeroSection />
        <AudienceCarousel />
        <AccompagnementsSection />
        <ServicesSection />
        <MethodologySection />
        <TestimonialsSection />
        <NetworkSection />
        <PodcastSection />
        <GuideDownloadForm />
        <ResourcesSection />
        <AboutUsSection />
        <ContactSection />
        <FAQSection />

        <Footer />
      </div>
    </>
  );
};

export default HomePageClient;
