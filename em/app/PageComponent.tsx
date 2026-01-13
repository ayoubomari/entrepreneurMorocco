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
import "./blockone.css";
import { Linkedin, Instagram, Youtube } from "lucide-react";

/* =========================
   3D Audience Carousel
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
  const [active, setActive] = useState(2);
  const [visibleCards, setVisibleCards] = useState(5);
  const [isPaused, setIsPaused] = useState(false); // Pause auto-play on hover

  // --- NEW: Track Mobile State ---
  const [isMobile, setIsMobile] = useState(false);

  // Dragging State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragThreshold = 50; // Minimum distance to trigger slide

  // --- Auto-play Logic (Updated) ---
  useEffect(() => {
    // Stop auto-play if paused OR if we are on mobile
    if (isPaused || isMobile) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isMobile]); // Added isMobile dependency

  // --- Responsive Card Count & Mobile Detection (Updated) ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Update Mobile State (Threshold: 768px)
      setIsMobile(width < 768);

      // Update Visible Cards Count
      if (width < 640) setVisibleCards(3);
      else if (width < 1024) setVisibleCards(4);
      else setVisibleCards(5);
    };

    // Run once on mount to set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Navigation Logic ---
  const prev = useCallback(() => {
    setActive((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % IMAGES.length);
  }, []);

  // --- Keyboard Nav ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // --- Drag / Swipe Handlers ---
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setIsPaused(true); // Pause rotation while dragging
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return;

    const diff = clientX - startX;

    if (diff > dragThreshold) {
      prev();
    } else if (diff < -dragThreshold) {
      next();
    }

    setIsDragging(false);
    // Only resume if not on mobile (on mobile isPaused stays false, but isMobile stops the loop)
    setIsPaused(false);
  };

  // Mouse Events
  const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const onMouseUp = (e: React.MouseEvent) => handleDragEnd(e.clientX);
  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  // Touch Events
  const onTouchStart = (e: React.TouchEvent) =>
    handleDragStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) =>
    handleDragEnd(e.changedTouches[0].clientX);

  // --- Card Styling ---
  const getCardStyle = (index: number) => {
    const diff = index - active;
    const totalCards = Math.min(IMAGES.length, visibleCards);
    const centerIndex = Math.floor(totalCards / 2);

    let position = diff;
    if (position > centerIndex) position -= IMAGES.length;
    if (position < -centerIndex) position += IMAGES.length;

    if (Math.abs(position) > centerIndex) {
      return { display: "none" };
    }

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

  // Prevent click triggering when dragging
  const handleCardClick = (index: number) => {
    if (!isDragging) {
      setActive(index);
    }
  };

  return (
    <section className="wave-carousel-section">
      <div className="wave-carousel__header">
        <h2 className="wave-carousel__title">
          POUR CEUX QUI VEULENT S'INSTALLER, ENTREPRENDRE OU CHANGER DE VIE
        </h2>
      </div>

      <div
        className={`wave-carousel-container ${isDragging ? "grabbing" : ""}`}
        // Add mouse/touch listeners to container
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        // Pause/Resume on hover (Only affects Desktop effectively due to isMobile check)
        onMouseEnter={() => setIsPaused(true)}
      >
        {/* --- NAVIGATION ARROWS (Large Screen Only) --- */}
        <button
          className="carousel-arrow carousel-arrow--left"
          aria-label="Previous Slide"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
          className="carousel-arrow carousel-arrow--right"
          aria-label="Next Slide"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
        {/* ------------------------------------------- */}

        <div className="wave-carousel">
          {IMAGES.map((src, i) => {
            const cap = CAPTIONS[i];
            const isActive = i === active;

            return (
              <div
                key={i}
                className={`wave-card ${isActive ? "wave-card--active" : ""}`}
                style={getCardStyle(i)}
                onClick={() => handleCardClick(i)}
              >
                <div className="wave-img-wrapper">
                  <Image
                    src={src}
                    alt={cap.title}
                    width={765}
                    height={966}
                    draggable={false}
                    loading="lazy"
                  />
                </div>

                <div className="wave-caption">
                  <div className="wave-caption__title">{cap.title}</div>
                  {cap.subtitle && (
                    <div className="wave-caption__subtitle">{cap.subtitle}</div>
                  )}
                </div>
              </div>
            );
          })}
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
    <section className={`hero ${loaded ? "hero--loaded" : ""}`}>
      {/* Enhanced Background with Multiple Layers */}
      <div className="hero__bg-container">
        <div
          className="hero__bg hero__bg--main"
          style={{
            transform: `translate3d(${mousePosition.x * 5}px, ${
              mousePosition.y * 5
            }px, 0) translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className="hero__bg hero__bg--secondary"
          style={{
            transform: `translate3d(${mousePosition.x * 3}px, ${
              mousePosition.y * 3
            }px, 0) translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="hero__overlay" />
        <div className="hero__gradient" />
      </div>

      {/* Animated Particles */}
      <div className="hero__particles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`hero__particle hero__particle--${i + 1}`}
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
      <div className="heros">
        {/* FIRST HERO CONTENT (Original) */}
        <div className="hero__content">
          <div className="hero__inner">
            {/* Combined Big Title */}
            <h1 className="hero__title">
              {[
                "ENTREPRENDRE",
                "AU",
                "MAROC.",
                "\n", // The line break item
                "ON",
                "VOUS",
                "MONTRE",
                "LE",
                "CHEMIN.",
              ].map((word, index, arr) => {
                // 1. Check if the current item is the new line character
                if (word === "\n") {
                  return <br key={index} className="hero__title-break" />;
                }

                // 2. Otherwise, render the word and letters
                return (
                  <span
                    key={word + index}
                    className="hero__title-word"
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className="hero__title-letter"
                        style={{
                          animationDelay: `${
                            0.2 + index * 0.08 + letterIndex * 0.015
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}

                    {/* Only add a space if it's not the last word AND the next word isn't a line break */}
                    {index < arr.length - 1 && arr[index + 1] !== "\n" && (
                      <span className="hero__title-space"> </span>
                    )}
                  </span>
                );
              })}
            </h1>

            {/* Animated Text */}
            <p className="hero__text">
              <span className="hero__text-content">
                De l&apos;idée à la concrétisation, on vous accompagne à chaque
                étape
              </span>
            </p>

            {/* Enhanced Button */}
            <div className="hero__btn-container">
              <Link href="/commencez-un-projet" className="hero__btn">
                <span className="hero__btn-text">Je commence mon projet</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SECOND HERO CONTENT (Now Blockone Content with Hero Style) */}
        <div className="hero__content hero__content-secondary">
          <div className="hero__inner hero__inner-secondary">
            {/* Title with Blockone content but Hero styling/classes */}
            <h2 className="hero__title hero__title-secondary">
              {[
                "ÊTES-VOUS",
                "PRÊT",
                "À",
                "ENTREPRENDRE",
                "AU",
                "MAROC",
                "?",
              ].map((word, index, arr) => {
                // 1. Check if the current item is the new line character
                if (word === "\n") {
                  return <br key={index} className="hero__title-break" />;
                }

                // 2. Otherwise, render the word and letters
                return (
                  <span
                    key={word + index}
                    className="hero__title-word"
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className="hero__title-letter"
                        style={{
                          animationDelay: `${
                            0.2 + index * 0.08 + letterIndex * 0.015
                          }s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}

                    {/* Only add a space if it's not the last word AND the next word isn't a line break */}
                    {index < arr.length - 1 && arr[index + 1] !== "\n" && (
                      <span className="hero__title-space"> </span>
                    )}
                  </span>
                );
              })}
            </h2>

            {/* Blockone Text with Hero styling/classes */}
            <p className="hero__text">
              <span className="hero__text-content">
                Faites le test en 1 minute et découvrez si c&apos;est le bon
                moment pour vous lancer !
              </span>
            </p>

            {/* Blockone Button with Hero styling/classes */}
            <div className="hero__btn-container">
              <Link href="/mini-test" className="hero__btn hero__btn-secondary">
                <span className="hero__btn-text">Je commence le test</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="hero__floating-elements">
        <div className="hero__floating-shape hero__floating-shape--1"></div>
        <div className="hero__floating-shape hero__floating-shape--2"></div>
        <div className="hero__floating-shape hero__floating-shape--3"></div>
        <div className="hero__floating-shape hero__floating-shape--4"></div>
      </div>
    </section>
  );
};

/* =========================
   Accompagnements
   ========================= */
const AccompagnementsSection = () => {
  return (
    <section className="bg-black py-12 md:py-16 acc-section">
      <div className="max-w-7xl mx-auto px-6 acc-wrap">
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
  return (
    <section className="bg-black py-12 md:py-16 srv-section">
      <div className="max-w-7xl mx-auto px-6 srv-wrap">
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
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah B., Lyon → Rabat",
      subtitle: "Coach business, installée depuis janvier 2024",
      content:
        "Je vivais à Lyon depuis 12 ans, avec l'envie de revenir au Maroc mais sans savoir par où commencer.\nEn 6 semaines, j'avais ma société, ma carte de séjour, et mes premiers clients.",
      rating: 3,
    },
    {
      name: "Youssef El Amrani, Consultant digital",
      subtitle: "Bruxelles → Casablanca | Installé depuis avril 2024",
      content:
        "J'étais salarié à Bruxelles dans un domaine qui ne me passionnait plus.\nGrâce à l'accompagnement d'Entrepreneurs Morocco, j'ai pu structurer un vrai projet, créer mon entreprise à distance, et m'installer à Casablanca en moins de 2 mois.\nAujourd'hui, je vis de mon activité et je me sens enfin à ma place.",
      rating: 4,
    },
    {
      // UPDATED HERE: Added \n
      name: "Nadia & Karim B., Couple\nfranco-marocain",
      subtitle: "Paris → Marrakech | Installés depuis septembre 2023",
      content:
        "On voulait revenir vivre au Maroc avec notre fille, mais on avait peur des démarches et de la scolarisation.\nGrâce au Pack Family, tout a été pris en charge : logement, école AEFE, démarches pour la carte de séjour...\nOn a même eu un accueil VIP à l'aéroport.\nRien à redire !",
      rating: 5,
    },
  ];

  const StarRating = ({
    rating,
    total = 5,
  }: {
    rating: number;
    total?: number;
  }) => (
    <div className="star-rating">
      {Array.from({ length: total }).map((_, index) => {
        const isFilled = index < Math.floor(rating);
        const isHalf = index < rating && index >= Math.floor(rating);

        return (
          <svg
            key={index}
            className={`star ${
              isFilled ? "star-filled" : isHalf ? "star-half" : "star-empty"
            }`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isFilled || isHalf ? (
              <polygon points="12,2 14.5,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9.5,9" />
            ) : (
              <polygon
                points="12,2 14.5,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9.5,9"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
              />
            )}
          </svg>
        );
      })}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-container max-w-7xl mx-auto px-6">
        <div className="testimonials-header">
          <h2 className="testimonials-title">ILS L&apos;ONT FAIT AVEC NOUS</h2>
          <div className="testimonials-content-wrapper">
            <p className="testimonials-description">
              Découvrez comment nos clients ont concrétisé leur projet au Maroc,
              <br />
              en quelques semaines, grâce à notre accompagnement sur mesure.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-wrapper">
              {/* 1. PROFILE ICON */}
              <div className="profile-icon">
                <div className="profile-circle">
                  <svg
                    className="profile-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <line x1="4" y1="21" x2="20" y2="21"></line>
                  </svg>
                </div>
              </div>

              {/* 2. CARD */}
              <div className="testimonial-card">
                {/* 3. INNER */}
                <div className="testimonial-card-inner">
                  {/* UPDATED HERE: Split logic added for Name */}
                  <h3 className="testimonial-name">
                    {testimonial.name.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>

                  <p className="testimonial-subtitle">{testimonial.subtitle}</p>

                  <blockquote className="testimonial-quote">
                    "
                    {testimonial.content.split("\n").map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br className="quote-break" />}
                      </span>
                    ))}
                    "
                  </blockquote>
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
      {/* This structure now mirrors the srv-wrap from the Services Section */}
      <div className="net-wrap max-w-7xl mx-auto">
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

      <div className="net-bleed">
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
  // 1. Data
  const base = useMemo(
    () => [
      {
        id: 1,
        image: "/podcast1.png",
        video: "/videos/reel-1.mp4",
      },
      {
        id: 2,
        image: "/podcast2.png",
        video: "/videos/reel-19.mp4",
      },
      {
        id: 3,
        image: "/podcast1.png",
        video: "/videos/reel-1.mp4",
      },
      // duplicate
      {
        id: 4,
        image: "/podcast2.png",
        video: "/videos/reel-20.mp4",
      },
    ],
    []
  );

  const COPIES = 1;
  const items = useMemo(
    () => Array.from({ length: COPIES }).flatMap(() => base),
    [base]
  );

  const trackRef = useRef<HTMLDivElement>(null);

  // State
  const [active, setActive] = useState(0); // Initialize at 0, will be fixed in useEffect
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
    // Bound check
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    const targetCard = cards[index];
    if (!targetCard) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();

    // Calculate new scroll position relative to current
    // We want: CardCenter = TrackCenter
    // Current CardCenter = cardRect.left + width/2
    // Offset needed = (CardCenter) - (TrackCenter)
    // Target ScrollLeft = Current ScrollLeft + Offset

    const currentCardCenter = cardRect.left + cardRect.width / 2;
    const currentTrackCenter = trackRect.left + trackRect.width / 2;
    const offset = currentCardCenter - currentTrackCenter;

    const targetScrollLeft = track.scrollLeft + offset;

    // Desktop adjustment: If we are in pair mode, we might want to center the PAIR
    const currentIsDesktop = window.innerWidth >= 1024;

    if (currentIsDesktop) {
      // Just center the target card normally, the CSS flex/gap handles the pair visual.
      // Or if you want the pair centered:
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
        // Start roughly in middle set logic or just 0
        track.scrollLeft = oneSetWidth * 2;

        // Wait for layout paint then snap to correct card
        setTimeout(() => {
          const startIndex = base.length * 2; // Middle copy
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
      isDraggingRef.current = false; // Will set to true on first move
      startXRef.current = clientX;
      startScrollLeftRef.current = track.scrollLeft;

      track.style.cursor = "none"; // grabbing
      // We stop any ongoing smooth scroll by force-setting current position
      track.style.scrollBehavior = "auto";
    };

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault(); // Prevent text selection
      handleStart(e.pageX);
    };

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleStart(touch.pageX);
    };

    // 2. MOVE
    const handleMove = (clientX: number) => {
      if (!isDownRef.current) return;

      const x = clientX;
      const dist = x - startXRef.current;

      // Threshold to consider it a drag and not a click
      if (Math.abs(dist) > 5) {
        isDraggingRef.current = true;
      }

      // Move visually 1:1 with finger
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

    // 3. END
    const handleEnd = (clientX: number) => {
      if (!isDownRef.current) return;

      isDownRef.current = false;
      track.style.cursor = "none";
      track.style.scrollBehavior = "smooth";

      if (!isDraggingRef.current) return; // Was a click

      const dist = clientX - startXRef.current;

      // MOBILE: Always move exactly 1 card regardless of swipe force
      // DESKTOP: Move 2 cards (pair)
      let targetIndex = active;

      // Threshold much lower - any meaningful swipe triggers movement
      const SWIPE_THRESHOLD = 30;

      if (Math.abs(dist) > SWIPE_THRESHOLD) {
        const moveAmount = isDesktop ? 2 : 1; // Always 1 for mobile, 2 for desktop

        if (dist < 0) {
          // Swiped left -> next
          targetIndex = active + moveAmount;
        } else {
          // Swiped right -> prev
          targetIndex = active - moveAmount;
        }
      } else {
        // Snap back to current if swipe too small
        targetIndex = active;
      }

      // Boundary Checks
      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= items.length) {
        targetIndex = items.length - 1;
        if (isDesktop && targetIndex % 2 !== 0) targetIndex -= 1;
      }

      // Execute Snap
      setActive(targetIndex);
      centerCardByIndex(targetIndex, true);

      // Reset drag ref
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

    // Attach Events
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

  // --- Click Handlers ---

  const handlePlayClick = (e: React.MouseEvent, videoSrc: string) => {
    e.stopPropagation();
    if (isDraggingRef.current) return; // Don't play if we just dragged
    setSelectedVideo(videoSrc);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) return; // Don't act if dragging
    if ((e.target as HTMLElement).closest(".pod-media")) return;

    const cardElement = e.currentTarget;
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(".pod-card"));
    let clickedIndex = cards.indexOf(cardElement);

    if (clickedIndex !== -1) {
      if (isDesktop && clickedIndex % 2 !== 0) {
        clickedIndex = clickedIndex - 1; // Align pair
      }
      setActive(clickedIndex);
      centerCardByIndex(clickedIndex, true);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="pod-section">
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
                  <div className="pod-thumb">
                    <Image
                      width={400}
                      height={600}
                      src={podcast.image}
                      alt="Podcast"
                      loading="lazy"
                    />
                  </div>

                  {/* --- PLAY BUTTON IMAGE ADDED HERE --- */}
                  <div className="pod-play">
                    <Image
                      src="/video-play-botton.webp"
                      alt="Play Video"
                      width={88}
                      height={88}
                      loading="lazy"
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
  const articles = [
    {
      id: 1,
      title: "COMMENT BIEN CHOISIR SA VILLE AU MAROC ?",
      description:
        "Un guide pour trouver la ville idéale selon votre projet et votre profil.",
      link: "/articles/choisir-ville-maroc",
    },
    {
      id: 2,
      title: "COMMENT FINANCER SON PROJET DEPUIS L’ÉTRANGER ?",
      description:
        "Découvrez les solutions de financement accessibles aux MRE: CPF, banques partenaires, aides publiques...",
      link: "/articles/financer-projet-etranger",
    },
    {
      id: 3,
      title: "ENTREPRENDRE À DISTANCE DEPUIS LA FRANCE",
      description: "Nos conseils pour lancer sans être sur place.",
      link: "/articles/entreprendre-distance-france",
    },
    {
      id: 4,
      title: "CRÉER SON ENTREPRISE: ÉTAPES CLÉS",
      description: "De l’idée à l’immatriculation, tout ce qu’il faut savoir.",
      link: "/articles/creer-entreprise-etapes",
    },
  ];

  return (
    <section className="res-sec">
      <div className="res-wrap">
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

                {/* This is now a div styled like a button to avoid nested <a> tags */}
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
              {/* === NEW BLOB INSERTED HERE === */}
              <div className="aus-internal-blob"></div>
              {/* ============================== */}

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
  return (
    <section id="faq" className="faq-sec">
      <div className="faq-wrap">
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
                      {/* “plus” drawn with CSS ::before/::after */}
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

                {/* single thick black separator – auto, except after last */}
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
              <li className="ft-contactLine">Adresse Maroc : Rabat, Maroc</li>
              <li className="ft-contactLine">Adresse France : Paris, France</li>
              <li className="ft-contactLine">
                Adresse EAU : Dubaï, Émirats arabes unis
              </li>
              <li className="ft-contactLine">
                <a className="ft-q-link" href="tel:+33651024018">
                  +33 6 51 02 40 18
                </a>
              </li>
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
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ft-socialLink"
                  >
                    <span className="ft-iconWrap">
                      {/* 3. Render the Icon Component directly */}
                      <s.icon size={30} strokeWidth={1.5} className="ft-icon" />
                    </span>
                    <span>{s.label}</span>
                  </a>
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
