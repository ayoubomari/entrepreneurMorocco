// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import CursorEffects from "../components/CursorEffects";
import WhatsAppButton from "@/components/WhatsAppButton";
import BotpressChat from "@/components/BotpressChat";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entrepreneursmorocco.com"),
  title: {
    default: "Entrepreneurs Morocco | Accompagnement MRE & Investisseurs",
    template: "%s | Entrepreneurs Morocco",
  },
  description:
    "Le guichet unique pour réussir votre installation et business au Maroc. Accompagnement expert pour MRE : création d'entreprise, fiscalité, immobilier et stratégie.",
  keywords: [
    "Entreprendre au Maroc",
    "MRE Maroc retour",
    "Création société Maroc",
    "Investissement Maroc",
    "Installation Maroc",
    "Business Plan Maroc",
    "Fiscalité Maroc",
  ],
  authors: [
    { name: "Imad & Zakaria", url: "https://www.entrepreneursmorocco.com" },
  ],
  creator: "Entrepreneurs Morocco",
  publisher: "Entrepreneurs Morocco",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Optional if you have it
  },
  openGraph: {
    title: "Entrepreneurs Morocco | S'installer et Investir au Maroc",
    description:
      "Votre partenaire de confiance pour le retour au Maroc. Stratégie, juridique, et installation pour les entrepreneurs et la diaspora.",
    url: "https://www.entrepreneursmorocco.com",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/logofooter.png",
        width: 1200,
        height: 630,
        alt: "Entrepreneurs Morocco Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneurs Morocco | Le Guide pour MRE et Investisseurs",
    description: "Accompagnement complet pour lancer votre projet au Maroc.",
    images: ["/logofooter.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* bg-transparent ensures the site-bg layer is visible behind everything */}
      <body className={`${montserrat.variable} antialiased bg-transparent`}>
        {/* 1) Global background (unified on all pages) */}
        <div
          id="site-bg"
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0"
        />

        {/* 2) Blob layer (above bg, below content) */}
        <div
          id="blob-layer"
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-10"
        />

        {/* 3) App content (always above) */}
        <div id="app-content" className="relative z-20">
          <CursorEffects />
          <Header />
          <main>{children}</main>
        </div>

        <WhatsAppButton />
        <BotpressChat />
      </body>
    </html>
  );
}
