import React from "react";
import type { Metadata } from "next"; // Import Metadata type
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Zap,
  Monitor,
  Ship,
  Plane,
  GraduationCap,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  HandHeart,
  Leaf,
  Cpu,
  Truck,
  MapPin,
  Trophy,
} from "lucide-react";
import Link from "next/link";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Investir au Maroc : Les secteurs porteurs (2025-2030)",
  description:
    "Guide d'investissement : Énergies renouvelables, IA, Logistique et Tourisme. Découvrez les opportunités de la Vision 2030 et de la Coupe du Monde.",
  keywords: [
    "Investir au Maroc",
    "Secteurs porteurs Maroc",
    "Énergie verte Maroc",
    "Business Maroc 2030",
    "Opportunités investissement Afrique",
    "Tourisme Maroc investissement",
    "Logistique Tanger Med",
  ],
  openGraph: {
    type: "article",
    title: "Quels sont les secteurs d'avenir au Maroc ?",
    description:
      "Énergie, Tech, Logistique : Où investir au Maroc en 2025 ? Analyse complète des opportunités de croissance.",
    url: "https://www.entrepreneursmorocco.com/articles/investir-maroc-secteurs",
    images: [
      {
        url: "/logofooter.png",
        width: 1200,
        height: 630,
        alt: "Investir au Maroc - Secteurs Porteurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investir au Maroc : Les 4 piliers de la croissance",
    description:
      "Zoom sur les énergies vertes, la tech et le tourisme. Préparez votre projet.",
  },
};
// -----------------------------

const Article2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white article-page-wrapper">
      {/* Navigation */}
      <nav className="pt-[150px] w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:text-red-500 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Retour à la page d'accueil</span>
          </Link>
          <div className="text-sm text-gray-400">Article 2/4</div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="relative">
        {/* Hero Section */}
        <div className="pt-24 sm:pt-0 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 text-sm mb-6">
                <Target size={16} />
                ARTICLE 2 — Investir au Maroc
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Les secteurs <span className="text-red-500">porteurs</span> à
                saisir en 2025 et vers 2030
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Découvrez les secteurs d&apos;avenir au Maroc : énergie verte,
                IA, logistique, tourisme et éducation portés par la Vision 2030.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>10 min de lecture</span>
                <span>•</span>
                <span>Guide d&apos;investissement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-red-500/5 border-y border-red-500/20 py-12 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  Top 3
                </div>
                <div className="text-gray-300">En Afrique pour l&apos;IDE</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">3,5%</div>
                <div className="text-gray-300">Croissance prévue / an</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">52%</div>
                <div className="text-gray-300">Énergie verte visée 2030</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Why Invest Now */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Pourquoi investir maintenant ?
                </h2>
              </div>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-8">
                  Le Maroc est une économie en mouvement où l&apos;État investit
                  massivement. Avec plus de 100 zones industrielles et une
                  position stratégique unique, le royaume s&apos;impose comme
                  une destination incontournable.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-white">
                      Top 3 en Afrique pour l&apos;investissement direct
                      étranger.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                    <CheckCircle
                      className="text-green-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-white">
                      Croissance économique prévue : 3,5 % par an.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20">
                    <Zap
                      className="text-red-500 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-red-400 font-medium">
                      Vision 2030 : transformation digitale et énergétique
                      complète.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Renewable Energy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Énergies renouvelables et Hydrogène Vert
                </h2>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6 mb-8">
                <p className="text-white font-medium m-0">
                  Le complexe Noor Ouarzazate est l&apos;un des plus grands
                  complexes solaires au monde. Le Maroc vise désormais à devenir
                  le leader mondial de l&apos;hydrogène vert pour
                  l&apos;exportation vers l&apos;Europe.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Objectif 2030 : 52 % du mix énergétique en renouvelable.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Développement massif de l&apos;éolien et du solaire.
                  </span>
                </div>
              </div>
            </div>

            {/* Digital and AI */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Digital et Intelligence Artificielle
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Le secteur digital marocain connaît une croissance
                exceptionnelle (+20% par an pour l&apos;e-commerce) avec des
                projets structurants :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-900/30 border border-gray-800">
                  <Monitor className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold mb-1">Data Centers IA</h4>
                  <p className="text-sm text-gray-400">
                    Nouveaux hubs à Casablanca et Rabat.
                  </p>
                </div>
                <div className="p-4 bg-gray-900/30 border border-gray-800">
                  <Zap className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold mb-1">Monnaie Digitale</h4>
                  <p className="text-sm text-gray-400">
                    Préparation d&apos;une MNBC nationale.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-400 font-medium">
                <ArrowRight size={20} />
                <span>
                  Les startups tech trouvent ici un écosystème en pleine
                  ébullition.
                </span>
              </div>
            </div>

            {/* Industry and Logistics */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Ship className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Industrie et Logistique
                </h2>
              </div>
              <blockquote className="border-l-4 border-red-500 pl-6 py-4 mb-8 text-lg text-gray-200 bg-white/5-xl">
                « Tanger Med est classé 1er port d&apos;Afrique et de
                Méditerranée, connecté à 180 destinations mondiales. »
              </blockquote>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <Truck
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Automobile : n°1 des exportations (Ecosystème Renault &
                    Stellantis).
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    TGV Al Boraq : Tanger-Casablanca en 2h10.
                  </span>
                </div>
              </div>
            </div>

            {/* Tourism & Events */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Tourisme & Grands Événements
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Avec un objectif de 26 millions de touristes d&apos;ici 2030, le
                secteur de l&apos;hospitalité est en pleine mutation :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/20">
                  <MapPin className="text-red-500" size={32} />
                  <div>
                    <div className="font-bold text-white">CAN 2025</div>
                    <div className="text-sm text-gray-400">
                      Modernisation des stades
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-red-500/5 border border-red-500/20">
                  <Trophy className="text-red-500" size={32} />
                  <div>
                    <div className="font-bold text-white">
                      Coupe du Monde 2030
                    </div>
                    <div className="text-sm text-gray-400">
                      Accélérateur d&apos;infrastructures
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrepreneurs Morocco CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Entrepreneurs Morocco : votre levier
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nous vous accompagnons dans tous les secteurs porteurs du Maroc
                :
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Étude de marché :</strong> Analyse sectorielle
                    approfondie et opportunités.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-yellow-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Création :</strong> Formalités administratives et
                    accompagnement juridique.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Réseau :</strong> Mise en relation et optimisation
                    fiscale.
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/devis"
                  className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-4 px-8 transition-colors inline-flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Contactez-nous pour votre projet → Entrepreneurs Morocco
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-900/30 p-6 hover:bg-gray-900/50 transition-colors">
                  <h3 className="font-bold text-lg mb-3 text-red-400">
                    Quels sont les secteurs les plus porteurs au Maroc ?
                  </h3>
                  <p className="text-gray-300">
                    Les énergies renouvelables, l&apos;intelligence
                    artificielle, la logistique et le tourisme premium.
                  </p>
                </div>
                <div className="bg-gray-900/30 p-6 hover:bg-gray-900/50 transition-colors">
                  <h3 className="font-bold text-lg mb-3 text-red-400">
                    Quels avantages fiscaux pour les investisseurs ?
                  </h3>
                  <p className="text-gray-300">
                    Des exonérations via Casablanca Finance City et des primes à
                    l&apos;investissement via la Nouvelle Charte.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation to next article */}
            <div className="bg-gray-900/50 border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Article suivant</h3>
              <Link
                href="/articles/mre-investisseurs-maroc"
                className="bg-[#ef4444] hover:bg-[#dc2626] inline-flex items-center gap-2 text-white font-bold py-3 px-6 transition-colors group"
              >
                Comment les MRE bâtissent le Maroc de demain ?
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-16" />
      </main>
    </div>
  );
};

export default Article2Page;
