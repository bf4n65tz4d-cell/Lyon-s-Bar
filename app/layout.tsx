import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Lyon's — Bar Afterwork & Étudiants · Lyon 8ème",
  description:
    "Le Lyon's, votre bar à Lyon 8ème. Bières pression, cocktails maison, vins sélectionnés et planches généreuses. Afterwork chaque jeudi, soirées étudiantes le vendredi. 46 Avenue Paul Santy.",
  keywords: "bar afterwork Lyon 8, bar étudiant Lyon, cocktail Lyon 8ème, bière Lyon, Le Lyon's",
  openGraph: {
    title: "Le Lyon's — Le repaire pour rugir entre amis",
    description: "Bar afterwork & étudiants à Lyon 8ème. Ouverture le 4 avril 2026.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <body style={{ fontFamily: "var(--font-barlow), sans-serif" }}>{children}</body>
    </html>
  );
}
