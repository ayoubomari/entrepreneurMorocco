import React from "react";
import type { Metadata } from "next"; // Import Metadata type
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

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Entreprendre au Maroc : L'opportunité incontournable d'ici 2030",
  description:
    "Analyse stratégique : Vision 2030, Casablanca Finance City et croissance record. Découvrez pourquoi investir au Maroc est l'opportunité unique de la décennie.",
  keywords: [
    "Investir au Maroc 2030",
    "Entreprendre au Maroc",
    "Casablanca Finance City",
    "Croissance économique Maroc",
    "Vision 2030 Maroc",
    "Opportunités business Afrique",
  ],
  openGraph: {
    type: "article",
    title: "Pourquoi le Maroc est l'opportunité business de la décennie ?",
    description:
      "PIB doublé, Hub africain et Coupe du Monde 2030. Guide complet pour les investisseurs et la diaspora.",
    url: "https://www.entrepreneursmorocco.com/articles/entreprendre-maroc-2030", // Adjust slug if necessary
    images: [
      {
        url: "/logofooter.png", // Or a specific article cover image if you have one
        width: 1200,
        height: 630,
        alt: "Entreprendre au Maroc - Vision 2030",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maroc 2030 : Le nouvel eldorado des entrepreneurs",
    description:
      "Découvrez les chiffres clés et les secteurs porteurs pour votre projet.",
  },
};
// -----------------------------

const Article1Page: React.FC = () => {
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
          <div className="text-sm text-gray-400">Article 1/4</div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="relative">
        {/* Hero Section */}
        <div className="pt-24 sm:pt-0 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2  text-sm mb-6">
                <Target size={16} />
                ARTICLE 1 — Entreprendre au Maroc
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                L&apos;opportunité incontournable en{" "}
                <span className="text-red-500">Afrique</span> d&apos;ici 2030
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Hub stratégique, Vision 2030, Coupe du Monde et digitalisation.
                Découvrez pourquoi investir au Maroc est une opportunité unique.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>8 min de lecture</span>
                <span>•</span>
                <span>Guide stratégique</span>
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
                  140B$
                </div>
                <div className="text-gray-300">PIB doublé en 10 ans</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  Top 3
                </div>
                <div className="text-gray-300">Investissement en Afrique</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
                <div className="text-gray-300">Zones industrielles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Inner Content Constrainer */}
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Economic Transformation */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Le Maroc, une économie en transformation
                </h2>
              </div>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  En dix ans, le Maroc a doublé son PIB, atteignant plus de 140
                  milliards $, et s&apos;est hissé dans le Top 3 des pays
                  africains pour l&apos;investissement. Avec plus de 100 zones
                  industrielles, un TGV reliant Tanger à Casablanca en 2h, et le
                  port Tanger Med classé 1er d&apos;Afrique, le pays est devenu
                  une plateforme incontournable.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 p-6 mb-6">
                  <p className="text-white font-medium m-0">
                    En 2030, le Maroc vise une croissance annuelle de 3,5 %, en
                    s&apos;appuyant sur la Vision 2030 : digitalisation
                    complète, énergie verte et ouverture mondiale.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision 2030 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Vision 2030 et grands événements
                </h2>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    52 % d&apos;énergie renouvelable dans le mix national.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Digitalisation intégrale des services publics.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Data centers IA et infrastructures numériques à Casablanca
                    et Rabat.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Lancement d&apos;une monnaie digitale nationale.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 ">
                  <Trophy
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-red-400">
                    Coupe du Monde 2030 et CAN 2025 comme accélérateurs
                    économiques.
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ces événements transformeront les villes marocaines en hubs
                modernes pour le tourisme, le sport, l&apos;immobilier et le
                digital.
              </p>
            </div>

            {/* Casablanca Finance City */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Casablanca Finance City : un hub africain
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Casablanca est désormais une place financière reconnue :
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Top 3 des hubs africains selon GFCI.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Avantages fiscaux pour les entreprises internationales.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    Accueil de multinationales dans la tech, l&apos;énergie, la
                    banque et l&apos;assurance.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-400 font-medium">
                <ArrowRight size={20} />
                <span>
                  CFC, c&apos;est la porte d&apos;entrée vers l&apos;Afrique.
                </span>
              </div>
            </div>

            {/* Diaspora */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Diaspora marocaine : 5 millions de talents
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Les 5 millions de Marocains du monde (MRE) transfèrent plus de
                11 milliards $ par an, mais vont plus loin : ils créent des
                startups, investissent dans l&apos;industrie, l&apos;éducation
                et le digital.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Comme le disait Sa Majesté Hassan II :
              </p>
              <blockquote className="border-l-4 border-red-500 pl-6 py-4 mb-6 italic text-lg text-gray-200 bg-white/5 rounded-r-xl">
                « Le Maroc est un arbre profondément enraciné en Afrique, qui
                respire par ses feuilles en Europe. »
              </blockquote>
              <div className="flex items-center gap-2 text-red-400 font-medium">
                <ArrowRight size={20} />
                <span>
                  Le Maroc compte sur ses enfants du monde entier pour bâtir son
                  avenir.
                </span>
              </div>
            </div>

            {/* Entrepreneurs Morocco CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Entrepreneurs Morocco : votre partenaire de A à Z
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nous vous aidons avant, pendant et après :
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Avant :</strong> audit, bilan de compétences, étude
                    macro/micro marché.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-yellow-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Pendant :</strong> création, fiscalité, réseau,
                    bureaux.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-900/30  hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    <strong>Après :</strong> suivi, accompagnement et croissance
                    durable.
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Link
                  href="/devis"
                  className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-4 px-8  transition-colors inline-flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Lancez votre projet dès aujourd&apos;hui → Entrepreneurs
                  Morocco
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
                    Pourquoi entreprendre au Maroc ?
                  </h3>
                  <p className="text-gray-300">
                    Une économie stable, des infrastructures modernes, une
                    ouverture mondiale.
                  </p>
                </div>
                <div className="bg-gray-900/30 p-6 hover:bg-gray-900/50 transition-colors">
                  <h3 className="font-bold text-lg mb-3 text-red-400">
                    Quels sont les secteurs porteurs ?
                  </h3>
                  <p className="text-gray-300">
                    Énergies renouvelables, digital/IA, logistique, tourisme et
                    éducation.
                  </p>
                </div>
                <div className="bg-gray-900/30 p-6 hover:bg-gray-900/50 transition-colors">
                  <h3 className="font-bold text-lg mb-3 text-red-400">
                    Le Maroc est-il plus attractif que Dubaï ?
                  </h3>
                  <p className="text-gray-300">
                    Oui : coût de vie -40 %, proximité Europe, et hub vers
                    l&apos;Afrique.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation to next article */}
            <div className="bg-gray-900/50 border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Article suivant</h3>
              <Link
                href="/articles/financer-projet-etranger"
                className="bg-[#ef4444] hover:bg-[#dc2626] inline-flex items-center gap-2 text-white font-bold py-3 px-6  transition-colors group"
              >
                Comment financer son projet depuis l&apos;étranger ?
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="pb-16" />
      </main>
    </div>
  );
};

export default Article1Page;
