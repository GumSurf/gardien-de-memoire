import type { Metadata } from "next";
import { Tinos, Pinyon_Script } from "next/font/google";
import "./globals.css";

// Remplaçants en attendant AdageScriptJF / TeX Gyre Termes (voir next/font/local)
const corps = Tinos({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-corps" });
const titre = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-titre" });

export const metadata: Metadata = {
  title: "Gardien de mémoire - Céline Six, entretien de tombes autour de Gestel",
  description: "Nettoyage, entretien et fleurissement de tombes dans un rayon de 30 km autour de Gestel (Morbihan).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${corps.variable} ${titre.variable}`}>
      <body>{children}</body>
    </html>
  );
}
