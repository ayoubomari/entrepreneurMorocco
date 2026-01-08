"use client";

import React from "react";
import Link from "next/link";
import "./services.css";
import { CloudRedEffect1 } from "@/components/CloudRedEffect";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function ServicesPageComponent(): React.ReactElement {
  const services: Service[] = [
    {
      id: 1,
      title: "Création d'entreprise au Maroc",
      description: "Statuts, fiscalité, ouverture bancaire.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/building-2.svg"
          alt="Building icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 2,
      title: "Étude de marché & stratégie",
      description: "Analyse macro/micro, benchmark, go-to-market.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/trending-up.svg"
          alt="Trending up icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 3,
      title: "Marketing digital & growth",
      description: "Acquisition clients, branding, tunnels de vente.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/megaphone.svg"
          alt="Megaphone icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 4,
      title: "Recrutement & installation",
      description: "Bureaux, coworkings, RH.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/users.svg"
          alt="Users icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 5,
      title: "Formations entrepreneuriales",
      description: "E-commerce, IA, entrepreneuriat.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/graduation-cap.svg"
          alt="Graduation cap icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 6,
      title: "Réseaux business",
      description: "Clubs, investisseurs, partenariats.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/network.svg"
          alt="Network icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
    {
      id: 7,
      title: "Club Privilège",
      description: "Événements exclusifs, mentorat, deals privés.",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/crown.svg"
          alt="Crown icon"
          width="32"
          height="32"
          style={{
            filter:
              "invert(34%) sepia(97%) saturate(3034%) hue-rotate(340deg) brightness(94%) contrast(91%)",
          }}
        />
      ),
    },
  ];

  return (
    <main className="services-page relative overflow-hidden">
      <CloudRedEffect1 />

      <div className="services-wrap">
        <header className="services-header">
          <h1>Nos services pour entreprendre au Maroc et réussir</h1>
          <p className="intro-text">
            Avec Entrepreneurs Morocco, vous bénéficiez d'un accompagnement
            complet et sur mesure.
          </p>
        </header>

        <section className="services-section">
          <h2>Nos 7 services principaux</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-number">
                  <span>{service.id}</span>
                </div>

                <div className="service-icon">{service.icon}</div>

                <h3 className="service-title">{service.title}</h3>

                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="services-cta">
          <Link href="/devis" className="cta-btn">
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
            Découvrir tous nos services pour entreprendre au Maroc
          </Link>
        </div>
      </div>
    </main>
  );
}
