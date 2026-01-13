"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Megaphone,
  Users,
  GraduationCap,
  Network,
  Crown,
  Zap,
} from "lucide-react";
import "./services.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServicesPageComponent(): React.ReactElement {
  const services: Service[] = [
    {
      id: 1,
      title: "Création d'entreprise",
      description: "Statuts, fiscalité, ouverture bancaire et domiciliation.",
      icon: <Building2 size={32} strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Étude de marché",
      description: "Analyse macro/micro, benchmark et stratégie go-to-market.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Marketing & Growth",
      description: "Acquisition clients, branding et tunnels de vente.",
      icon: <Megaphone size={32} strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Installation & RH",
      description: "Recherche de bureaux, coworking et recrutement local.",
      icon: <Users size={32} strokeWidth={1.5} />,
    },
    {
      id: 5,
      title: "Formations",
      description: "E-commerce, IA, et masterclass entrepreneuriales.",
      icon: <GraduationCap size={32} strokeWidth={1.5} />,
    },
    {
      id: 6,
      title: "Réseaux Business",
      description: "Mise en relation, clubs d'investisseurs et partenariats.",
      icon: <Network size={32} strokeWidth={1.5} />,
    },
    {
      id: 7,
      title: "Club Privilège",
      description: "Accès exclusif à des événements et deals privés au Maroc.",
      icon: <Crown size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <main className="services-page relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="services-wrap">
        <header className="services-header">
          <h1>Nos services pour entreprendre au Maroc</h1>
          <div className="services-intro">
            <p className="intro-text">
              Bénéficiez d'un accompagnement complet et sur mesure pour
              transformer votre vision en succès.
            </p>
          </div>
        </header>

        <section className="services-section">
          <h2>Expertise & Solutions</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon-container">
                  <div className="service-icon-inner">{service.icon}</div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="services-cta">
          <Link href="/devis" className="services-cta-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            Lancer mon projet maintenant
          </Link>
        </div>
      </div>
    </main>
  );
}
