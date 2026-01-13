import React from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Globe,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Trophy,
  Leaf,
  Briefcase,
  HandHeart,
} from "lucide-react";
import Link from "next/link";

// Import your custom CSS
import "../_styles/article.css";
// Import the background effect used in other pages
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Entreprendre au Maroc : L'opportunité incontournable d'ici 2030",
  description:
    "Analyse stratégique : Vision 2030, Casablanca Finance City et croissance record.",
};

const Article1Page: React.FC = () => {
  return (
    <div className="article-page">
      {/* Background Effect */}
      <CloudRedEffect1 />

      {/* Navigation (Absolute top) */}
      <nav className="art-nav">
        <Link href="/" className="nav-back group">
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Retour Accueil</span>
        </Link>
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-800 px-3 py-1 rounded-full">
          Article 1/4
        </div>
      </nav>

      {/* Main Wrapper */}
      <div className="article-wrap">
        {/* --- HERO SECTION --- */}
        <header className="article-hero">
          <div className="article-tag">
            <Target size={14} />
            Guide Stratégique
          </div>

          <h1 className="article-title">
            L&apos;opportunité Incontournable en{" "}
            <span className="text-red-500">Afrique</span> d&apos;ici 2030
          </h1>

          <p className="article-lead">
            Hub stratégique, Vision 2030, Coupe du Monde et digitalisation.
            Découvrez pourquoi investir au Maroc est l'opportunité unique de la
            décennie.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <span>8 min de lecture</span>
            <span className="text-red-500">•</span>
            <span>Business & Investissement</span>
          </div>
        </header>

        {/* --- STATS GRID (Glass Cards) --- */}
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">140B$</span>
            <span className="stat-label">PIB doublé en 10 ans</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">TOP 3</span>
            <span className="stat-label">Investissement en Afrique</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">100+</span>
            <span className="stat-label">Zones industrielles</span>
          </div>
        </section>

        {/* --- CONTENT CONTAINER --- */}
        <main className="content-container">
          {/* Block 1: Transformation */}
          <div className="section-block">
            <div className="section-header">
              <TrendingUp className="text-red-500" size={32} />
              <h2 className="section-title">Une Économie en Transformation</h2>
            </div>
            <div className="article-text">
              <p>
                En dix ans, le Maroc a doublé son PIB, atteignant plus de 140
                milliards $, et s&apos;est hissé dans le Top 3 des pays
                africains pour l&apos;investissement. Avec plus de 100 zones
                industrielles, un TGV reliant Tanger à Casablanca en 2h, et le
                port Tanger Med classé 1er d&apos;Afrique, le pays est devenu
                une plateforme incontournable.
              </p>
            </div>
            <div className="glass-box highlight">
              <p className="text-white font-bold m-0 text-lg">
                OBJECTIF 2030 : Le Maroc vise une croissance annuelle de 3,5 %,
                en s&apos;appuyant sur la digitalisation complète et l'ouverture
                mondiale.
              </p>
            </div>
          </div>

          {/* Block 2: Vision 2030 */}
          <div className="section-block">
            <div className="section-header">
              <Leaf className="text-red-500" size={32} />
              <h2 className="section-title">Vision 2030 & Grands Projets</h2>
            </div>

            <div className="space-y-2 mb-8">
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm font-medium">
                  52 % d&apos;énergie renouvelable dans le mix national.
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm font-medium">
                  Digitalisation intégrale des services publics.
                </span>
              </div>
              <div className="glass-list-item">
                <CheckCircle
                  className="text-green-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm font-medium">
                  Data centers IA & hubs technologiques à Casa/Rabat.
                </span>
              </div>
              <div className="glass-list-item border-red-500/30 bg-red-500/5">
                <Trophy className="text-red-500 flex-shrink-0" size={20} />
                <span className="text-sm font-bold text-red-100">
                  Coupe du Monde 2030 : L'accélérateur économique majeur.
                </span>
              </div>
            </div>

            <p className="article-text">
              Ces événements transformeront les villes marocaines en hubs
              modernes pour le tourisme, le sport, l&apos;immobilier et le
              digital.
            </p>
          </div>

          {/* Block 3: CFC */}
          <div className="section-block">
            <div className="section-header">
              <Briefcase className="text-red-500" size={32} />
              <h2 className="section-title">Casablanca Finance City</h2>
            </div>
            <p className="article-text">
              Casablanca est désormais une place financière reconnue, agissant
              comme la véritable porte d'entrée vers l'Afrique pour les
              investisseurs internationaux.
            </p>
            <div className="glass-box">
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  <strong>Top 3</strong> des hubs africains selon GFCI.
                </li>
                <li>
                  <strong>Avantages fiscaux</strong> pour les entreprises
                  internationales (statut CFC).
                </li>
                <li>Accueil de multinationales Tech, Énergie et Finance.</li>
              </ul>
            </div>
          </div>

          {/* Block 4: Diaspora */}
          <div className="section-block">
            <div className="section-header">
              <Globe className="text-red-500" size={32} />
              <h2 className="section-title">Diaspora : La Force Motrice</h2>
            </div>

            <div className="quote-box mb-8">
              « Le Maroc est un arbre profondément enraciné en Afrique, qui
              respire par ses feuilles en Europe. »
              <div className="text-sm text-red-500 not-italic font-bold mt-2 uppercase">
                — Hassan II
              </div>
            </div>

            <p className="article-text">
              Les 5 millions de Marocains du monde (MRE) ne se contentent plus
              de transférer de l'argent. Ils investissent, créent des startups
              et apportent une expertise technologique cruciale pour l'avenir du
              Royaume.
            </p>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden section-block">
            <HandHeart className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white uppercase mb-4">
              Entrepreneurs Morocco
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Audit, création de société, réseau et croissance. Nous sommes
              votre partenaire de A à Z.
            </p>

            <Link href="/devis" className="poly-btn white group">
              <span>Lancer mon projet</span>
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
                  Pourquoi le Maroc plutôt que Dubaï ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Coût de la vie -40%, proximité immédiate avec l'Europe (2h de
                  vol), fuseau horaire aligné, et une culture authentique avec
                  un boom technologique.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Quels sont les secteurs les plus rentables ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Les énergies renouvelables, l'AgriTech, le Tourisme, et
                  surtout l'Offshoring digital (Dev, IA, Support).
                </p>
              </details>
            </div>
          </div>

          {/* NEXT ARTICLE NAV */}
          <div className="flex justify-end pt-10 border-t border-gray-800">
            <Link
              href="/articles/financer-projet-etranger"
              className="cursor-none group text-right"
            >
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">
                Article Suivant
              </span>
              <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl group-hover:text-red-500 transition-colors">
                Comment financer son projet ?
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Article1Page;
