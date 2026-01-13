import React from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Globe,
  Target,
  Wifi,
  Sun,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  HandHeart,
  Laptop,
  Coffee,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Import du CSS commun
import "../_styles/article.css";
// Import de l'effet de fond
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Digital Nomad : Pourquoi choisir le Maroc plutôt que Dubaï ?",
  description:
    "Comparatif pour freelances et remote workers : Coût de vie (-40%), Fibre optique et Lifestyle. Le guide ultime pour s'installer au Maroc.",
  keywords: [
    "Digital Nomad Maroc",
    "Freelance Maroc",
    "Maroc vs Dubaï",
    "Expatriation",
  ],
};

const Article4Page: React.FC = () => {
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
          Article 4/4
        </div>
      </nav>

      {/* Main Wrapper */}
      <div className="article-wrap">
        {/* --- HERO SECTION --- */}
        <header className="article-hero">
          <div className="article-tag">
            <Target size={14} />
            Digital nomads et freelances
          </div>

          <h1 className="article-title">
            Pourquoi choisir le <span className="text-red-500">Maroc</span>{" "}
            plutôt que Dubaï ?
          </h1>

          <p className="article-lead">
            Moins cher, plus proche et plus authentique. Découvrez pourquoi les
            entrepreneurs du digital délaissent les gratte-ciels du Golfe pour
            les Riads connectés du Royaume.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <span>8 min de lecture</span>
            <span className="text-red-500">•</span>
            <span>Guide Digital Nomads</span>
          </div>
        </header>

        {/* --- STATS GRID --- */}
        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-value">-40%</span>
            <span className="stat-label">Coût de vie vs Dubaï</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">GMT</span>
            <span className="stat-label">Fuseau horaire Europe</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">300J</span>
            <span className="stat-label">Ensoleillement / An</span>
          </div>
        </section>

        {/* --- CONTENT CONTAINER --- */}
        <main className="content-container">
          {/* Section 1: Le Nouveau Hub */}
          <div className="section-block">
            <div className="section-header">
              <Globe className="text-red-500" size={32} />
              <h2 className="section-title">Le Nouveau Hub des Nomades</h2>
            </div>
            <div className="article-text">
              <p>
                Alors que Dubaï mise sur le gigantisme, le Maroc offre un
                équilibre parfait entre modernité technologique et qualité de
                vie. Avec le déploiement massif de la{" "}
                <strong>fibre optique</strong> et la multiplication des espaces
                de <strong>coworking</strong>, le pays attire une nouvelle
                génération de travailleurs distants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="glass-list-item">
                <Sun className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Climat Idéal</div>
                  <div className="text-sm text-gray-400">
                    Travaillez en terrasse 10 mois sur 12.
                  </div>
                </div>
              </div>
              <div className="glass-list-item">
                <Clock className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Zéro Jetlag</div>
                  <div className="text-sm text-gray-400">
                    Aligné sur le fuseau Londres/Paris.
                  </div>
                </div>
              </div>
              <div className="glass-list-item">
                <Wifi className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-white">Connectivité Fibre</div>
                  <div className="text-sm text-gray-400">
                    Infrastructure stable et ultra-rapide.
                  </div>
                </div>
              </div>
              <div className="glass-list-item border-red-500/30 bg-red-500/5">
                <DollarSign className="text-red-500 flex-shrink-0" size={20} />
                <div>
                  <div className="font-bold text-red-100">Budget Optimisé</div>
                  <div className="text-sm text-red-200/60">
                    Style de vie premium accessible.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Le Match Maroc vs Dubaï */}
          <div className="section-block">
            <div className="section-header">
              <TrendingUp className="text-red-500" size={32} />
              <h2 className="section-title">Maroc vs Dubaï : Le Comparatif</h2>
            </div>

            <div className="glass-box overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-gray-500 uppercase text-xs tracking-widest">
                      Critère
                    </th>
                    <th className="pb-4 text-red-500 font-black">🇲🇦 Maroc</th>
                    <th className="pb-4 text-gray-400 font-medium">🇦🇪 Dubaï</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-semibold text-gray-300">
                      Budget Mensuel
                    </td>
                    <td className="py-4 text-green-500 font-bold">
                      800 - 1500€
                    </td>
                    <td className="py-4 text-gray-400">2500 - 4000€</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-semibold text-gray-300">
                      Distance Europe
                    </td>
                    <td className="py-4 text-green-500 font-bold">
                      2h - 3h de vol
                    </td>
                    <td className="py-4 text-gray-400">7h de vol</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 font-semibold text-gray-300">
                      Culture & Vie
                    </td>
                    <td className="py-4 text-green-500 font-bold">
                      Authentique & Riche
                    </td>
                    <td className="py-4 text-gray-400">
                      Moderne & Artificielle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Villes Stratégiques */}
          <div className="section-block">
            <div className="section-header">
              <Coffee className="text-red-500" size={32} />
              <h2 className="section-title">Où s&apos;installer ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-box p-6 hover:border-red-500/50 transition-colors">
                <h4 className="text-red-500 font-black mb-2 tracking-tighter">
                  CASABLANCA
                </h4>
                <p className="text-xs text-gray-400 mb-4 uppercase font-bold">
                  Le Hub Économique
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Tech
                    ecosystem
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />{" "}
                    Networking massif
                  </li>
                </ul>
              </div>
              <div className="glass-box p-6 hover:border-red-500/50 transition-colors">
                <h4 className="text-red-500 font-black mb-2 tracking-tighter">
                  MARRAKECH
                </h4>
                <p className="text-xs text-gray-400 mb-4 uppercase font-bold">
                  Lifestyle & Nomadisme
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Cafés
                    branchés
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />{" "}
                    Communauté d&apos;expatriés
                  </li>
                </ul>
              </div>
              <div className="glass-box p-6 hover:border-red-500/50 transition-colors">
                <h4 className="text-red-500 font-black mb-2 tracking-tighter">
                  TAGHAZOUT
                </h4>
                <p className="text-xs text-gray-400 mb-4 uppercase font-bold">
                  Surf & Remote Work
                </p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Digital
                    Nomad Village
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Esprit
                    créatif
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Accompagnement */}
          <div className="section-block">
            <div className="section-header">
              <Laptop className="text-red-500" size={32} />
              <h2 className="section-title">Installation 360°</h2>
            </div>
            <div className="glass-box highlight">
              <p className="text-white font-bold m-0 text-lg">
                Nous ne nous contentons pas de vous conseiller : nous gérons
                votre création de structure, votre domiciliation et votre
                optimisation fiscale.
              </p>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden section-block">
            <HandHeart className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white uppercase mb-4">
              Prêt pour l&apos;aventure ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              300 jours de soleil, une fibre ultra-rapide et un coût de vie
              maîtrisé. Lancez votre installation au Maroc avec nos experts.
            </p>

            <Link href="/devis" className="poly-btn white group">
              <span>Démarrer mon projet</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* FAQ Accordion */}
          <div className="section-block">
            <div className="section-header">
              <HelpCircle className="text-red-500" size={32} />
              <h2 className="section-title">Questions Fréquentes</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white/5 border border-white/10 p-4 cursor-noneopen:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Quelle est la qualité réelle d&apos;internet ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  Le Maroc dispose de l&apos;un des meilleurs réseaux de fibre
                  optique en Afrique (jusqu&apos;à 1Gbps). La 4G/5G est
                  également très performante en zone urbaine.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 p-4 cursor-none open:bg-white/10 transition-colors">
                <summary className="flex items-center justify-between font-bold text-white list-none">
                  Faut-il un visa spécifique ?
                  <ArrowRight
                    size={16}
                    className="text-red-500 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  La plupart des Européens bénéficient de 90 jours sans visa.
                  Pour s&apos;installer durablement, nous vous accompagnons dans
                  la création d&apos;une société locale pour obtenir votre carte
                  de résident.
                </p>
              </details>
            </div>
          </div>

          {/* NEXT ARTICLE NAV */}
          <div className="flex justify-end pt-10 border-t border-gray-800">
            <Link href="/" className="cursor-none group text-right">
              <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">
                Fin du guide
              </span>
              <div className="flex items-center gap-3 text-white font-bold text-lg md:text-xl group-hover:text-red-500 transition-colors">
                Retourner à l&apos;accueil
                <ArrowLeft size={24} className="rotate-180" />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Article4Page;
