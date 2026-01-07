"use client";

import React from "react";
import {
  ArrowLeft,
  Globe,
  Target,
  Wifi,
  Sun,
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  HandHeart,
  Laptop,
  Building2,
  Users,
  Trophy,
  Plane,
  MapPin,
  Star,
  Coffee,
  Flag,
} from "lucide-react";
import Link from "next/link";

const Article4Page: React.FC = () => {
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
          <div className="text-sm text-gray-400">Article 4/4</div>
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
                ARTICLE 4 — Digital nomads et freelances
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Pourquoi choisir le <span className="text-red-500">Maroc</span>{" "}
                plutôt que Dubaï ?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Digital nomads : découvrez pourquoi le Maroc surpasse Dubaï avec
                Vision 2030, coût de vie réduit, fibre optique et événements
                mondiaux.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <span>8 min de lecture</span>
                <span>•</span>
                <span>Guide Digital Nomads</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Banner */}
        <div className="bg-red-500/5 border-y border-red-500/20 py-12 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
              <div className="group transition-transform">
                <div className="text-4xl mb-2">🇲🇦</div>
                <div className="text-2xl font-bold text-white">Maroc</div>
                <div className="text-red-500 font-medium">
                  -40% coût vs Dubaï
                </div>
              </div>
              <div className="text-gray-600 font-bold text-2xl">VS</div>
              <div className="group transition-transform opacity-50">
                <div className="text-4xl mb-2">🇦🇪</div>
                <div className="text-2xl font-bold text-white">Dubaï</div>
                <div className="text-gray-400">Coût de vie élevé</div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Wrapper */}
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Nomad Hub Advantages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Le nouveau hub africain
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <Sun className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold text-white">300 Jours de Soleil</h4>
                  <p className="text-sm text-gray-400">
                    Un climat parfait pour travailler en terrasse toute
                    l&apos;année.
                  </p>
                </div>
                <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <Clock className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold text-white">Fuseau GMT</h4>
                  <p className="text-sm text-gray-400">
                    À seulement 3h de l&apos;Europe. Idéal pour les calls
                    clients.
                  </p>
                </div>
                <div className="p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <Wifi className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold text-white">100% Fibre Optique</h4>
                  <p className="text-sm text-gray-400">
                    Ultra-rapide, coworking spaces modernes dans toutes les
                    grandes villes.
                  </p>
                </div>
                <div className="p-6 bg-red-500/10 rounded-xl border border-red-500/20">
                  <DollarSign className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold text-red-400">Budget Maîtrisé</h4>
                  <p className="text-sm text-red-300/70">
                    Une qualité de vie premium pour 40% moins cher qu&apos;à
                    Dubaï.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Maroc vs Dubaï : Le match
                </h2>
              </div>
              <div className="overflow-hidden border border-gray-800 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-900/50">
                      <th className="p-4 text-gray-400 font-medium">Critère</th>
                      <th className="p-4 text-red-500 font-bold">🇲🇦 Maroc</th>
                      <th className="p-4 text-gray-500 font-medium">
                        🇦🇪 Dubaï
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="p-4 text-sm">Coût de vie</td>
                      <td className="p-4 text-sm font-bold text-green-500">
                        800-1200€ / mois
                      </td>
                      <td className="p-4 text-sm text-gray-400">
                        2000-3000€ / mois
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm">Internet (Fibre)</td>
                      <td className="p-4 text-sm font-bold text-green-500">
                        ~25€ / mois
                      </td>
                      <td className="p-4 text-sm text-gray-400">~80€ / mois</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm">Proximité Europe</td>
                      <td className="p-4 text-sm font-bold text-green-500">
                        3h de vol
                      </td>
                      <td className="p-4 text-sm text-gray-400">7h de vol</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm">Culture</td>
                      <td className="p-4 text-sm font-bold text-green-500">
                        Patrimoine millénaire
                      </td>
                      <td className="p-4 text-sm text-gray-400">
                        Moderne récent
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cities Grid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Coffee className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Les meilleures villes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Casablanca</h4>
                  <div className="text-red-500 text-sm mb-4">
                    Hub économique
                  </div>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> 50+ coworkings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> Communauté tech active
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Marrakech</h4>
                  <div className="text-red-500 text-sm mb-4">
                    Lifestyle & Culture
                  </div>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> Cafés nomades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> Qualité de vie premium
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-colors">
                  <h4 className="text-xl font-bold mb-2">Rabat</h4>
                  <div className="text-red-500 text-sm mb-4">
                    Innovation & Calme
                  </div>
                  <ul className="text-xs text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> Startups Government
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} /> Ville verte & moderne
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Entrepreneurs Morocco CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Installation 360°
                </h2>
              </div>
              <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                  <Laptop className="text-red-500 shrink-0" size={48} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      De l&apos;arrivée à votre premier client
                    </h3>
                    <p className="text-gray-400">
                      Nous gérons les formalités administratives, le logement et
                      la mise en réseau.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={18} />
                    <span>Banking et installation locale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-yellow-500" size={18} />
                    <span>Optimisation fiscale pour freelances</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <Link
                    href="/devis"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowRight size={20} />
                    Installez-vous au Maroc
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="text-red-500" size={24} />
                <h2 className="text-2xl md:text-3xl font-bold">
                  Questions fréquentes
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-900/30 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-red-400">
                    Comment est la connexion internet ?
                  </h3>
                  <p className="text-gray-300">
                    Excellente. La fibre optique est disponible partout avec une
                    latence minimale vers l&apos;Europe.
                  </p>
                </div>
                <div className="bg-gray-900/30 rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-red-400">
                    Quel budget prévoir ?
                  </h3>
                  <p className="text-gray-300">
                    Entre 800€ et 1200€ pour un style de vie confortable (loyer,
                    nourriture, cowork).
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA Box */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à faire le grand saut ?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                300 jours de soleil, une fibre ultra-rapide et un coût réduit.
                Lancez votre aventure marocaine dès aujourd&apos;hui.
              </p>
              <Link
                href="/devis"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2 group"
              >
                <Globe size={20} />
                Démarrer mon projet
              </Link>
            </div>

            {/* Navigation back */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Découvrir tous nos guides
              </h3>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors group"
              >
                Retour à l&apos;accueil
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

export default Article4Page;
