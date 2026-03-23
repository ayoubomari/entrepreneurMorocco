// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorEffects from "../components/CursorEffects";
import BotpressChat from "@/components/BotpressChat";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
  },
  openGraph: {
    title: "Entrepreneurs Morocco | S'installer et Investir au Maroc",
    description:
      "Votre partenaire de confiance pour le retour au Maroc. Stratégie, juridique, et installation pour les entrepreneurs et la diaspora.",
    url: "https://www.entrepreneursmorocco.com",
    siteName: "Entrepreneurs Morocco",
    images: [
      {
        url: "/images/hero-cfc-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Entrepreneurs Morocco - Casablanca Finance City",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneurs Morocco | Le Guide pour MRE et Investisseurs",
    description: "Accompagnement complet pour lancer votre projet au Maroc.",
    images: ["/images/hero-cfc-poster.jpg"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Entrepreneurs Morocco",
              url: "https://www.entrepreneursmorocco.com",
              logo: "https://www.entrepreneursmorocco.com/images/logo-icon.png",
              description: "Accompagnement expert pour MRE et investisseurs au Maroc",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Immeuble STAVROULA, Gueliz",
                addressLocality: "Marrakech",
                postalCode: "40000",
                addressCountry: "MA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33644660252",
                contactType: "customer service",
                availableLanguage: ["French", "Arabic"],
              },
              sameAs: [
                "https://www.linkedin.com/company/entrepreneurs-morocco/",
                "https://www.instagram.com/entrepreneursmorocco",
                "https://www.youtube.com/@EntrepreneursMorocco",
              ],
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        {/* Blob ambient layer */}
        <div
          id="blob-layer"
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[1]"
        />

        {/* App content */}
        <div id="app-content" className="relative z-10">
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
