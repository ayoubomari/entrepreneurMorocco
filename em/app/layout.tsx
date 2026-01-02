// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import CursorEffects from "../components/CursorEffects";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Entrepreneurs Morocco",
  description:
    "Accompagnement humain & stratégique pour entreprendre au Maroc.",
  icons: {
    icon: "/favicon.ico",
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
          <main className="pt-[96px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
