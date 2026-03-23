"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Send,
  Heart,
} from "lucide-react";

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

const COL1_LINKS = [
  { href: "/services", label: "Nos services" },
  { href: "/setup", label: "Setup au Maroc" },
  { href: "/formations", label: "Formations" },
  { href: "/benefices", label: "Bénéfices" },
  { href: "/brochure", label: "Brochure" },
];

const COL2_LINKS = [
  { href: "/formations/list/programme-entrepreneur-360", label: "Entrepreneur 360°" },
  { href: "/formations/list/programme-ecommerce", label: "E-Commerce" },
  { href: "/formations/list/programme-innovation-tech", label: "Innovation & Tech" },
  { href: "/formations/list/programme-immobilier", label: "Immobilier" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative">
      {/* ═══════════════════════════════════════════
          CTA BANNER
         ═══════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-50 blur-[160px]"
            style={{ background: "radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)" }}
          />
        </div>

        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center relative"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase border border-[var(--accent)]/20 text-[var(--accent-light)] bg-[var(--accent)]/[0.06] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Lancez-vous
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] font-extrabold text-[var(--text-primary)] max-w-4xl mx-auto leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
            >
              Votre projet au Maroc{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)] bg-clip-text text-transparent">
                  commence ici
                </span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Rejoignez les{" "}
              <span className="text-[var(--text-primary)] font-medium">500+ entrepreneurs</span>{" "}
              qui nous ont fait confiance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/commencez-un-projet"
                  className="inline-flex items-center gap-3 px-10 py-4 text-[15px] font-semibold text-white bg-[var(--accent)] rounded-xl hover:shadow-[0_8px_40px_rgba(220,38,38,0.35)] transition-all duration-500 group cursor-pointer"
                >
                  Commencer mon projet
                  <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-quiz"
                  className="inline-flex items-center gap-3 px-10 py-4 text-[15px] font-medium text-[var(--text-secondary)] border border-[var(--border)] rounded-xl hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer"
                >
                  Parler à un conseiller
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER + CONTACT CARDS
         ═══════════════════════════════════════════ */}
      <div className="border-t border-[var(--border)]">
        <Container>
          <div className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Newsletter card */}
            <div className="rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 lg:p-10 flex flex-col justify-between hover:border-[var(--accent)]/15 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-5">
                  <Send size={20} className="text-[var(--accent-light)]" />
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg">
                  Restez informé
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2.5 leading-relaxed">
                  Recevez nos conseils pour entreprendre au Maroc, directement dans votre boîte mail.
                </p>
              </div>
              <form
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="mt-6 flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/[0.05] border border-[var(--border)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--accent)]/40 focus:bg-white/[0.07] transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-light)] hover:shadow-[0_4px_20px_rgba(220,38,38,0.3)] text-white transition-all duration-300 cursor-pointer shrink-0"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Phone card */}
            <a
              href="tel:+33644660252"
              className="group rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 lg:p-10 hover:border-[var(--accent)]/20 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-[var(--border)] group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/10 flex items-center justify-center mb-5 transition-all duration-500">
                <Phone size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent-light)] transition-colors duration-500" />
              </div>
              <h3 className="text-[var(--text-primary)] font-bold text-lg">
                Appelez-nous
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2.5 leading-relaxed">
                Du lundi au vendredi, 9h - 18h (heure de Casablanca)
              </p>
              <span className="mt-auto pt-6 text-[var(--text-primary)] text-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                +33 6 44 66 02 52
                <ArrowUpRight size={16} className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {/* Location card */}
            <a
              href="https://maps.google.com/?q=Immeuble+STAVROULA+Gueliz+Marrakech+Maroc"
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 lg:p-10 hover:border-[var(--accent)]/20 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-[var(--border)] group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/10 flex items-center justify-center mb-5 transition-all duration-500">
                <MapPin size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent-light)] transition-colors duration-500" />
              </div>
              <h3 className="text-[var(--text-primary)] font-bold text-lg">
                Rendez-nous visite
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2.5 leading-relaxed">
                Nos bureaux au cœur de Marrakech, quartier Gueliz.
              </p>
              <span className="mt-auto pt-6 text-[var(--text-primary)] text-sm font-medium leading-relaxed transition-colors duration-300 flex items-start gap-2">
                Immeuble STAVROULA, Gueliz, Marrakech 40000
                <ArrowUpRight size={14} className="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5" />
              </span>
            </a>
          </div>
        </Container>
      </div>

      {/* ═══════════════════════════════════════════
          MAIN FOOTER
         ═══════════════════════════════════════════ */}
      <div className="border-t border-[var(--border)]" style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, #020202 100%)" }}>
        <Container>
          <div className="py-14 md:py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-8">

            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-4 lg:pr-6">
              <Image
                src="/images/logofooter.webp"
                alt="Entrepreneurs Morocco"
                width={190}
                height={48}
                className="opacity-90"
                loading="lazy"
              />
              <p className="mt-5 text-[13px] text-[var(--text-secondary)] leading-[1.85] max-w-[280px]">
                Accompagnement humain & stratégique pour créer et développer votre entreprise au Maroc.
              </p>

              {/* Socials */}
              <div className="flex gap-2.5 mt-7">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="group w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:shadow-[0_4px_15px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-pointer"
                  >
                    <s.icon size={16} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 1 — Navigation */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] mb-5">
                Explorer
              </h4>
              <ul className="space-y-3">
                {COL1_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Formations */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] mb-5">
                Programmes
              </h4>
              <ul className="space-y-3">
                {COL2_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-4">
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] mb-5">
                Contact
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="mailto:salam@entrepreneursmorocco.com"
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200 cursor-pointer flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/8 flex items-center justify-center shrink-0">
                      <Mail size={14} strokeWidth={1.5} className="text-[var(--accent-light)]" />
                    </div>
                    salam@entrepreneursmorocco.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33644660252"
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200 cursor-pointer flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/8 flex items-center justify-center shrink-0">
                      <Phone size={14} strokeWidth={1.5} className="text-[var(--accent-light)]" />
                    </div>
                    +33 6 44 66 02 52
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} strokeWidth={1.5} className="text-[var(--accent-light)]" />
                  </div>
                  <span className="text-[13px] text-[var(--text-secondary)] leading-[1.7]">
                    Immeuble STAVROULA, Gueliz<br />
                    Marrakech 40000, Maroc
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar — improved visibility */}
          <div className="border-t border-white/[0.08] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-secondary)] font-medium">
              &copy; {new Date().getFullYear()} Entrepreneurs Morocco — Tous droits réservés
            </p>
            <div className="flex items-center gap-6">
              <Link href="/#faq" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors duration-200 cursor-pointer">FAQ</Link>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]/40" />
              <span className="text-sm text-[var(--text-secondary)] flex items-center gap-1.5">
                Fait avec <Heart size={13} className="text-[var(--accent)] fill-[var(--accent)]" /> depuis Marrakech
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
