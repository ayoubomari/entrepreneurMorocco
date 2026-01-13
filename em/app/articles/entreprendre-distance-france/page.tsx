import React from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Globe,
  Target,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Lightbulb,
  HandHeart,
  HelpCircle, // Ajouté pour la FAQ
} from "lucide-react";
import Link from "next/link";

// Import du CSS commun
import "../_styles/article.css";

// Import de l'effet de fond
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "MRE et Investisseurs : Bâtissez le Maroc de demain (Vision 2030)",
  description:
    "MRE et investisseurs étrangers : Comment profiter de la Vision 2030 et des grands événements mondiaux ? Guide stratégique pour investir au Royaume.",
  keywords: [
    "MRE retour Maroc",
    "Investissement MRE",
    "Vision 2030 Maroc",
    "Diaspora marocaine",
  ],
};

const Article3Page: React.FC = () => {
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
          Article 3/4
        </div>
      </nav>

      {/* Main Wrapper */}
      <div className="article-wrap">
        {/* --- HERO SECTION --- */}
        <header className="article-hero">
          <div className="article-tag">
            <Users size={14} />
            Retour au pays & Investissement
          </div>
          <h1 className="article-title">
            Comment les <span className="text-red-500">MRE</span> bâtissent le
            Maroc de demain
          </h1>
          <p className="article-lead">
            Vision 2030, CAN 2025 et Coupe du Monde. Découvrez comment la
            diaspora marocaine et les investisseurs internationaux transforment
            le Royaume en terre d&apos;avenir.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <span>12 min de lecture</span>
            <span className="text-red-500">•</span>
            <span>Guide MRE & Investisseurs</span>
          </div>
        </header>

        {/* --- STATS GRID --- */}
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">5,5M</span>
            <span className="stat-label">MRE dans le monde</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">11,4B$</span>
            <span className="stat-label">Transferts en 2023</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">8%</span>
            <span className="stat-label">Part du PIB national</span>
          </div>
        </section>

        {/* --- CONTENT CONTAINER --- */}
        <main className="content-container">
          {/* Section 1: Diaspora Power */}
          <div className="section-block">
            <div className="section-header">
              <Globe className="text-red-500" size={32} />
              <h2 className="section-title">
                Une Diaspora au service du Royaume
              </h2>
            </div>
            <p className="article-text">
              Aujourd&apos;hui, l&apos;impact des Marocains Résidant à
              l&apos;Étranger (MRE) dépasse largement les simples transferts
              financiers. Ils apportent une expertise technologique, des réseaux
              mondiaux et une vision entrepreneuriale cruciale pour
              l&apos;accélération économique du pays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="glass-list-item">
                <Zap className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Expertise</div>
                  <div className="text-sm text-gray-400">
                    Transfert de compétences pointues.
                  </div>
                </div>
              </div>
              <div className="glass-list-item">
                <TrendingUp className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Réseaux</div>
                  <div className="text-sm text-gray-400">
                    Connexions avec les marchés mondiaux.
                  </div>
                </div>
              </div>
              <div className="glass-list-item">
                <Lightbulb className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Innovation</div>
                  <div className="text-sm text-gray-400">
                    Création de Startups & Hubs Tech.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Vision 2030 */}
          <div className="section-block">
            <div className="section-header">
              <Target className="text-red-500" size={32} />
              <h2 className="section-title">Vision 2030 : Les Piliers</h2>
            </div>
            <div className="glass-box highlight">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-red-500 mt-1" />
                  <span>
                    52% d&apos;énergie verte dans le mix énergétique national.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-red-500 mt-1" />
                  <span>
                    Digitalisation intégrale des services et monnaie digitale
                    nationale.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Success Stories */}
          <div className="section-block">
            <div className="section-header">
              <Star className="text-red-500" size={32} />
              <h2 className="section-title">Témoignages de Réussite</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-box">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center font-bold text-xl text-black">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-white">Sarah</div>
                    <div className="text-xs text-gray-500">
                      France → Casablanca
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-300">
                  &quot;J&apos;ai lancé une EdTech IA à Casablanca. Le dynamisme
                  actuel permet de collaborer avec toute l&apos;Afrique depuis
                  le Maroc.&quot;
                </p>
              </div>
              <div className="glass-box">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center font-bold text-xl text-black">
                    A
                  </div>
                  <div>
                    <div className="font-bold text-white">Ahmed</div>
                    <div className="text-xs text-gray-500">
                      Belgique → Agadir
                    </div>
                  </div>
                </div>
                <p className="text-sm italic text-gray-300">
                  &quot;De retour pour monter un atelier de cosmétiques bio.
                  L&apos;accompagnement à l&apos;exportation est un levier
                  incroyable.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden section-block">
            <HandHeart className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white uppercase mb-4">
              Le Maroc a changé.
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Il est stable, moderne et connecté. Ne restez pas spectateur de
              cette transformation. Devenez acteur avec Entrepreneurs Morocco.
            </p>
            <Link href="/contact" className="poly-btn red group">
              <span>Lancer mon projet</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* FAQ SECTION */}
          <div className="section-block">
            <div className="section-header">
              <HelpCircle className="text-red-500" size={32} />
              <h2 className="section-title">Questions Fréquentes</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Quels sont les avantages fiscaux pour les MRE ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Le Maroc offre des incitations spécifiques comme la garantie
                  de retransfert des fonds et des conventions de non-double
                  imposition avec de nombreux pays. Certaines zones
                  d&apos;accélération industrielle offrent aussi des
                  exonérations d&apos;IS.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Est-il facile d&apos;ouvrir un compte bancaire à distance ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Oui, la plupart des grandes banques marocaines disposent de
                  services dédiés aux MRE permettant d&apos;initier les
                  démarches depuis votre pays de résidence via leurs filiales ou
                  applications mobiles.
                </p>
              </details>
            </div>
          </div>

          {/* NEXT ARTICLE NAV */}
          <div className="flex justify-end pt-10 border-t border-gray-800">
            <Link href="/article4" className="cursor-none group text-right">
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">
                Article suivant
              </span>
              <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl group-hover:text-red-500 transition-colors">
                Maroc vs Dubaï : Le guide complet
                <ArrowLeft size={24} className="rotate-180" />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Article3Page;
