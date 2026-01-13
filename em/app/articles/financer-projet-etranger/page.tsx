import React from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Zap,
  Monitor,
  Ship,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  HandHeart,
  Leaf,
  Cpu,
  Truck,
  Trophy,
} from "lucide-react";
import Link from "next/link";

// Import du CSS commun
import "../_styles/article.css";
// Import de l'effet de fond
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Investir au Maroc : Les secteurs porteurs (2025-2030)",
  description:
    "Guide d'investissement : Énergies renouvelables, IA, Logistique et Tourisme. Découvrez les opportunités de la Vision 2030.",
};

const Article2Page: React.FC = () => {
  return (
    <div className="article-page">
      {/* Background Effect */}
      <CloudRedEffect1 />

      {/* Navigation */}
      <nav className="art-nav">
        <Link href="/" className="nav-back group">
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Retour Accueil</span>
        </Link>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-800 px-3 py-1 rounded-full">
          Article 2/4
        </div>
      </nav>

      {/* Main Wrapper */}
      <div className="article-wrap">
        {/* --- HERO SECTION --- */}
        <header className="article-hero">
          <div className="article-tag">
            <Target size={14} />
            Guide d&apos;investissement
          </div>

          <h1 className="article-title">
            Les secteurs <span className="text-red-500">porteurs</span> à saisir
            d&apos;ici 2030
          </h1>

          <p className="article-lead">
            Énergie verte, IA, logistique et tourisme premium. Découvrez où se
            situent les poches de croissance de la Vision 2030 du Royaume.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <span>10 min de lecture</span>
            <span className="text-red-500">•</span>
            <span>Stratégie & Opportunités</span>
          </div>
        </header>

        {/* --- STATS GRID --- */}
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">TOP 3</span>
            <span className="stat-label">En Afrique pour l&apos;IDE</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">3,5%</span>
            <span className="stat-label">Croissance prévue / an</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">52%</span>
            <span className="stat-label">Énergie verte visée 2030</span>
          </div>
        </section>

        {/* --- CONTENT CONTAINER --- */}
        <main className="content-container">
          {/* Block 1: Pourquoi investir ? */}
          <div className="section-block">
            <div className="section-header">
              <TrendingUp className="text-red-500" size={32} />
              <h2 className="section-title">Pourquoi investir maintenant ?</h2>
            </div>
            <div className="article-text">
              <p>
                Le Maroc est une économie en mouvement où l&apos;État investit
                massivement. Avec plus de 100 zones industrielles et une
                position stratégique unique entre l&apos;Afrique et
                l&apos;Europe, le Royaume s&apos;impose comme une destination
                incontournable.
              </p>
            </div>
            <div className="space-y-3 mt-6">
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm font-medium">
                  Top destination pour l&apos;investissement direct étranger
                  (IDE).
                </span>
              </div>
              <div className="glass-list-item border-red-500/30 bg-red-500/5">
                <Zap className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-sm font-bold text-red-100">
                  Vision 2030 : Transformation digitale et énergétique complète.
                </span>
              </div>
            </div>
          </div>

          {/* Block 2: Énergies */}
          <div className="section-block">
            <div className="section-header">
              <Leaf className="text-red-500" size={32} />
              <h2 className="section-title">Énergies & Hydrogène Vert</h2>
            </div>
            <div className="glass-box highlight mb-8">
              <p className="text-white font-bold m-0 text-lg">
                Le Maroc vise à devenir le leader mondial de l&apos;hydrogène
                vert pour l&apos;exportation vers l&apos;Europe.
              </p>
            </div>
            <div className="article-text">
              <p>
                Avec le complexe Noor Ouarzazate, le pays possède déjà
                l&apos;une des plus grandes installations solaires au monde.
                L&apos;objectif est clair : atteindre 52 % du mix énergétique en
                renouvelable d&apos;ici 2030.
              </p>
            </div>
          </div>

          {/* Block 3: Digital & IA */}
          <div className="section-block">
            <div className="section-header">
              <Cpu className="text-red-500" size={32} />
              <h2 className="section-title">
                Digital & Intelligence Artificielle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="glass-box">
                <Monitor className="text-red-500 mb-4" size={24} />
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">
                  Data Centers IA
                </h4>
                <p className="text-sm text-gray-400">
                  Développement de nouveaux hubs technologiques à Casablanca et
                  Rabat.
                </p>
              </div>
              <div className="glass-box">
                <Zap className="text-red-500 mb-4" size={24} />
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">
                  Fintech & MNBC
                </h4>
                <p className="text-sm text-gray-400">
                  Préparation d&apos;une monnaie digitale nationale et
                  digitalisation bancaire.
                </p>
              </div>
            </div>
          </div>

          {/* Block 4: Logistique & Industrie */}
          <div className="section-block">
            <div className="section-header">
              <Ship className="text-red-500" size={32} />
              <h2 className="section-title">Industrie & Logistique</h2>
            </div>
            <div className="quote-box mb-8">
              « Tanger Med est classé 1er port d&apos;Afrique et de
              Méditerranée, connecté à 180 destinations mondiales. »
            </div>
            <div className="space-y-3">
              <div className="glass-list-item">
                <Truck className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">
                  Automobile : n°1 des exportations (Renault & Stellantis).
                </span>
              </div>
              <div className="glass-list-item">
                <Zap className="text-green-500 flex-shrink-0" size={20} />
                <span className="text-sm font-medium">
                  TGV Al Boraq : Tanger-Casablanca en seulement 2h10.
                </span>
              </div>
            </div>
          </div>

          {/* Block 5: Tourisme & Sport */}
          <div className="section-block">
            <div className="section-header">
              <Trophy className="text-red-500" size={32} />
              <h2 className="section-title">Tourisme & Coupe du Monde 2030</h2>
            </div>
            <p className="article-text">
              Avec un objectif de 26 millions de touristes d&apos;ici 2030, le
              secteur de l&apos;hospitalité et des infrastructures sportives
              (CAN 2025) est un accélérateur économique majeur.
            </p>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden section-block">
            <HandHeart className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white uppercase mb-4">
              Accompagnement 360°
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Étude de marché, création juridique et mise en relation. Nous
              sommes votre levier pour réussir au Maroc.
            </p>

            <Link href="/devis" className="poly-btn white group">
              <span>Contactez nos experts</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* FAQ Accordion Style */}
          <div className="section-block">
            <div className="section-header">
              <HelpCircle className="text-red-500" size={32} />
              <h2 className="section-title">Questions Fréquentes</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Quels sont les secteurs les plus porteurs ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Les énergies renouvelables (hydrogène), la tech/offshoring,
                  l&apos;industrie automobile et le tourisme événementiel lié à
                  2030.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Quels sont les avantages fiscaux ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Le statut Casablanca Finance City (CFC) et les primes à
                  l&apos;investissement de la Nouvelle Charte de
                  l&apos;Investissement offrent des réductions d&apos;impôts
                  significatives.
                </p>
              </details>
            </div>
          </div>

          {/* NEXT ARTICLE NAV */}
          <div className="flex justify-end pt-10 border-t border-gray-800">
            <Link
              href="/articles/entreprendre-distance-france"
              className="cursor-none group text-right"
            >
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">
                Article Suivant
              </span>
              <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl group-hover:text-red-500 transition-colors">
                Entreprendre à distance
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Article2Page;
