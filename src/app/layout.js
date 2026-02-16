import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import FloatingContactButton from "@/app/components/layout/FloatingContactButton";
import Footer from "@/app/components/layout/Footer";
import JsonLd from "@/app/components/JsonLd";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.prodigelec.fr"),
  title: {
    default: "PRODIGELEC - Électricien & Serrurier | Eure-et-Loir (28)",
    template: "%s | PRODIGELEC"
  },
  description: "PRODIGELEC à Broué (28). Dépannage électricité et serrurerie sur Dreux, Chartres, Évreux. Intervention rapide et soignée.",
  keywords: [
    "Électricien Broué", "Serrurier Broué", "Électricien Dreux", "Serrurier Dreux",
    "Électricien Chartres", "Serrurier Chartres", "Électricien Évreux", "Serrurier Évreux",
    "Dépannage électricité 28", "Dépannage électricité 27", "Installation électrique",
    "Serrure 3 points", "Réparation volet roulant", "PRODIGELEC"
  ],
  authors: [{ name: "PRODIGELEC", url: "https://www.prodigelec.fr" }],
  creator: "PRODIGELEC",
  publisher: "PRODIGELEC",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "PRODIGELEC - L'expertise artisanale 2.0",
    description: "Électricité et serrurerie. Un interlocuteur de confiance pour vos travaux et votre sécurité.",
    url: "https://www.prodigelec.fr",
    siteName: "PRODIGELEC",
    images: [{ url: "https://www.prodigelec.fr/prodigelec-logo.svg", width: 800, height: 600, alt: "Logo PRODIGELEC" }],
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
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/prodigelec-logo.svg" },
  verification: { google: "w5rAOBeW-q78ZcjmJWRltGvSvm92EYiSSSo5CfP6Zo0" },
  alternates: { canonical: "https://www.prodigelec.fr/" },
  other: {
    'link': [
      { rel: 'dns-prefetch', href: 'https://www.prodigelec.fr' },
      { rel: 'preconnect', href: 'https://www.prodigelec.fr' },
      {
        rel: 'preload',
        href: '/_next/image?url=%2Fimg_carousel_hero_home%2Fserrurerie.jpg&w=1536&q=45',
        as: 'image',
        fetchPriority: 'high'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          :root {
            --background: #0b1a2a;
            --foreground: #f4f4f5;
            --primary: #c9a227;
          }
          body { 
            background-color: #0b1a2a; 
            color: #f4f4f5;
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
        `}} />
      </head>
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
