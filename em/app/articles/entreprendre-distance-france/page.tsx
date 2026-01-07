"use client";

import React from "react";
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
} from "lucide-react";
import Link from "next/link";

const Article3Page: React.FC = () => {
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
            <span className="font-medium">Retour aux articles</span>
          </Link>
          <div className="text-sm text-gray-400">Article 3/4</div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="relative">
        {/* Hero Section */}
        <div className="pt-24 sm:pt-0 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm mb-6">
                <Target size={16} />
                ARTICLE 3 — Retour au pays
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Comment les <span className="text-red-500">MRE</span> et
                investisseurs bâtissent le Maroc de demain
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                MRE et investisseurs étrangers : découvrez comment Vision 2030,
                la CAN 2025 et la Coupe du Monde 2030 font du Maroc une terre
                d&apos;avenir.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>12 min de lecture</span>
                <span>•</span>
                <span>Guide MRE & Investisseurs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-red-500/5 border-y border-red-500/20 py-12 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">5,5M</div>
                <div className="text-gray-300">MRE dans le monde</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  11,4B$
                </div>
                <div className="text-gray-300">Transferts en 2023</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">8%</div>
                <div className="text-gray-300">Du PIB national</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Diaspora Power */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Une diaspora puissante au service du Maroc
                </h2>
              </div>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-8">
                  Le Maroc compte plus de 5,5 millions de Marocains Résidant à
                  l&apos;Étranger (MRE). Aujourd&apos;hui, leur impact dépasse
                  largement les simples transferts financiers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 text-center">
                    <Lightbulb
                      className="text-red-500 mx-auto mb-3"
                      size={24}
                    />
                    <h4 className="font-bold text-white mb-1">Expertise</h4>
                    <p className="text-sm text-gray-400">
                      Transfert de compétences
                    </p>
                  </div>
                  <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 text-center">
                    <Users className="text-red-500 mx-auto mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Réseaux</h4>
                    <p className="text-sm text-gray-400">
                      Connexions mondiales
                    </p>
                  </div>
                  <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800 text-center">
                    <Star className="text-red-500 mx-auto mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Innovation</h4>
                    <p className="text-sm text-gray-400">Startups & Tech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision 2030 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">Vision 2030</h2>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-xl hover:bg-gray-900/50 transition-colors">
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-white">
                    52% d&apos;énergie verte dans le mix énergétique.
                  </span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <Target
                    className="text-red-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-red-400">
                    Monnaie digitale nationale et digitalisation complète.
                  </span>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">Témoignages</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">
                      S
                    </div>
                    <div>
                      <div className="font-bold">Sarah</div>
                      <div className="text-xs text-gray-400">
                        France → Maroc
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm">
                    &quot;J&apos;ai lancé une EdTech IA à Casablanca.
                    Aujourd&apos;hui, je collabore avec toute
                    l&apos;Afrique.&quot;
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">
                      A
                    </div>
                    <div>
                      <div className="font-bold">Ahmed</div>
                      <div className="text-xs text-gray-400">
                        Belgique → Maroc
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm">
                    &quot;J&apos;ai monté un atelier de cosmétiques bio pour
                    l&apos;exportation.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA Box */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Le Maroc a changé.
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Il est stable, moderne et connecté. Ne restez pas spectateur.
                Devenez acteur du changement avec Entrepreneurs Morocco.
              </p>
              {/* UPDATED BUTTON: padding py-3 px-6 (like bottom button) and reversed colors */}
              <Link
                href="/devis"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2 group"
              >
                Démarrer mon projet
              </Link>
            </div>

            {/* Navigation to next article */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Article suivant</h3>
              <Link
                href="/articles/creer-entreprise-etapes"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors group"
              >
                Guide complet : créer son entreprise au Maroc
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

export default Article3Page;
