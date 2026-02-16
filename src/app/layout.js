import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import { preconnect } from "react-dom";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import FloatingContactButton from "@/app/components/layout/FloatingContactButton";
import Footer from "@/app/components/layout/Footer";
import JsonLd from "@/app/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.prodigelec.fr"),
  title: {
    default: "PRODIGELEC - Électricien & Serrurier | Eure-et-Loir (28)",
    template: "%s | PRODIGELEC"
  },
  description: "PRODIGELEC à Broué (28). Dépannage électricité et serrurerie sur Dreux, Chartres, Évreux. Intervention rapide et soignée.",
  keywords: [
    // Villes principales
    "Électricien Broué",
    "Serrurier Broué",
    "Électricien Dreux",
    "Serrurier Dreux",
    "Électricien Chartres",
    "Serrurier Chartres",
    "Électricien Évreux",
    "Serrurier Évreux",
    "Électricien Anet",
    "Serrurier Anet",
    "Électricien Nonancourt",
    "Serrurier Nonancourt",

    // Services spécifiques
    "Dépannage électricité 28",
    "Dépannage électricité 27",
    "Dépannage électrique 28",
    "Dépannage électrique 27",
    "Dépannage électricité Eure",
    "Ouverture de porte 28",
    "Ouverture de porte 27",
    "Ouverture de porte Eure",
    "Installation électrique",
    "Serrure 3 points",
    "Réparation volet roulant",
    "Déblocage volet roulant",
    "Mise aux normes électrique",
    "Remplacement tableau électrique",

    // Marque et Qualificatifs
    "PRODIGELEC",
    "Artisan 28",
    "Électricien agréé",
    "Devis gratuit électricité",
    "Urgence serrurier 28"
  ],
  authors: [{ name: "PRODIGELEC", url: "https://www.prodigelec.fr" }],
  creator: "PRODIGELEC",
  publisher: "PRODIGELEC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PRODIGELEC - L'expertise artisanale 2.0",
    description: "Électricité et serrurerie. Un interlocuteur de confiance pour vos travaux et votre sécurité.",
    url: "https://www.prodigelec.fr",
    siteName: "PRODIGELEC",
    images: [
      {
        url: "https://www.prodigelec.fr/prodigelec-logo.svg", // Idéalement une image OG de 1200x630
        width: 800,
        height: 600,
        alt: "Logo PRODIGELEC - Électricien & Serrurier",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRODIGELEC - Services 28",
    description: "Électricien et Serrurier en Eure-et-Loir.",
    images: ["https://www.prodigelec.fr/prodigelec-logo.svg"],
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/prodigelec-logo.svg",
  },

  verification: {
    google: "w5rAOBeW-q78ZcjmJWRltGvSvm92EYiSSSo5CfP6Zo0",
  },
  alternates: {
    canonical: "https://www.prodigelec.fr/",
  },
};

export default function RootLayout({ children }) {
  preconnect("https://tile.openstreetmap.org");
  preconnect("https://nominatim.openstreetmap.org");
  preconnect("https://unpkg.com");

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
