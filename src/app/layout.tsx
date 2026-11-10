import type { Metadata } from "next";
import { Tinos, Pinyon_Script } from "next/font/google";
import "./globals.css";

// Remplaçants en attendant AdageScriptJF / TeX Gyre Termes (voir next/font/local)
const corps = Tinos({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-corps" });
const titre = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-titre" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gardien-de-memoire-bretagne.fr"),

  title:
    "Nettoyage et entretien de sépultures à Gestel et Lorient",

  description:
    "Gardien de mémoire propose le nettoyage, l'entretien, le fleurissement et la rénovation de sépultures à Gestel, Lorient et dans les communes voisines du Morbihan.",

  keywords: [
    "nettoyage sépulture",
    "entretien tombe",
    "nettoyage tombe Lorient",
    "entretien sépulture Gestel",
    "nettoyage pierre tombale",
    "rénovation lettres gravées",
    "fleurissement sépulture",
    "entretien monument funéraire",
    "Morbihan",
  ],

  openGraph: {
    title: "Gardien de mémoire | Entretien de sépultures",
    description:
      "Nettoyage, entretien, fleurissement et rénovation de sépultures à Gestel et dans le secteur de Lorient.",
    url: "https://gardien-de-memoire-bretagne.fr",
    siteName: "Gardien de mémoire",
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${corps.variable} ${titre.variable}`}>
      <body>{children}</body>
    </html>
  );
}
