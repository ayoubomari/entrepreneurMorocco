"use client";

import React, { useState } from "react";
import "./formulaireprojet.css";


/**
 * Drop this file at: app/plan/page.tsx (Next.js App Router)
 * TailwindCSS required.
 */
export default function PlanPage() {
  const [form, setForm] = useState({
    profile: new Set<string>(),
    progress: new Set<string>(),
    help: new Set<string>(),
    email: "",
    phone: "",
  });

  const toggle = (group: "profile" | "progress" | "help", key: string) => {
    setForm((prev) => {
      const next = new Set(prev[group]);
      next.has(key) ? next.delete(key) : next.add(key);
      return { ...prev, [group]: next } as typeof prev;
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only – replace with your submission logic
    alert(
      JSON.stringify(
        {
          profile: Array.from(form.profile),
          progress: Array.from(form.progress),
          help: Array.from(form.help),
          email: form.email,
          phone: form.phone,
        },
        null,
        2
      )
    );
  };

  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
  }) => (
    <section className="space-y-5">
      <h3 className="text-white text-xl md:text-2xl font-semibold">{title}</h3>
      <div className="space-y-3 md:space-y-4">{children}</div>
    </section>
  );

  const Checkbox: React.FC<{
    checked: boolean;
    onChange: () => void;
    label: string;
  }> = ({ checked, onChange, label }) => (
    <label className="group flex items-center justify-between gap-6 text-base md:text-lg text-neutral-200">
      <span className="leading-tight">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 md:h-6 md:w-6 accent-white border border-neutral-400 rounded-sm bg-transparent"
      />
    </label>
  );

  return (
    <main className="min-h-[100dvh] bg-black text-neutral-200 flex items-start justify-center">
      <div className="w-full max-w-3xl px-5 md:px-8 py-10 md:py-16">
        <header className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            DITES-NOUS OÙ VOUS EN ÊTES
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-400 max-w-2xl">
            Répondez à 3 questions rapides pour recevoir votre plan d'action
            personnalisé par email.
          </p>
        </header>

        <form onSubmit={onSubmit} className="space-y-12 md:space-y-14">
          {/* 1. Profil */}
          <Section title="1. Quel est votre profil ?">
            <div className="space-y-3">
              {[
                "Marocain du monde",
                "Freelance",
                "Famille en retour",
                "Investisseur",
                "En reconversion",
              ].map((k) => (
                <Checkbox
                  key={k}
                  label={k}
                  checked={form.profile.has(k)}
                  onChange={() => toggle("profile", k)}
                />
              ))}
            </div>
          </Section>

          {/* 2. Avancement */}
          <Section title="2. Où en êtes-vous dans votre projet ?">
            <div className="space-y-3">
              {[
                "J'ai une idée",
                "Je prépare mon départ",
                "Je veux lancer mon activité",
                "J'ai déjà une structure",
              ].map((k) => (
                <Checkbox
                  key={k}
                  label={k}
                  checked={form.progress.has(k)}
                  onChange={() => toggle("progress", k)}
                />
              ))}
            </div>
          </Section>

          {/* 3. Besoins */}
          <Section title="3. Sur quoi souhaitez-vous être accompagné ?">
            <div className="space-y-3">
              {[
                "Création d'entreprise",
                "Fiscalité / Statut",
                "Séjour / logement",
                "Digitalisation",
                "Scolarité / santé",
              ].map((k) => (
                <Checkbox
                  key={k}
                  label={k}
                  checked={form.help.has(k)}
                  onChange={() => toggle("help", k)}
                />
              ))}
            </div>
          </Section>

          {/* Email + Phone */}
          <div className="space-y-5 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm tracking-wide text-neutral-400 mb-2">
                EMAIL (OBLIGATOIRE) :
              </label>
              <input
                type="email"
                required
                placeholder="votre@email.com"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full bg-transparent text-white placeholder:text-neutral-600 border border-neutral-500 rounded-md px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm tracking-wide text-neutral-400 mb-2">
                TÉLÉPHONE (OPTIONNEL) :
              </label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full bg-transparent text-white placeholder:text-neutral-600 border border-neutral-500 rounded-md px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
          </div>

          {/* Submit aligned bottom-right with slanted shape */}
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-6 md:px-7 py-3 md:py-3.5 bg-white text-black font-medium shadow-lg transition-transform active:scale-[0.99] skew-x-[-12deg] rounded-md"
            >
              <span className="skew-x-[12deg]">Recevoir mon plan personnalisé</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
