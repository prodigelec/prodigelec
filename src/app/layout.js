import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import FloatingContactButton from "@/app/components/layout/FloatingContactButton";
import Footer from "@/app/components/layout/Footer";
import JsonLd from "@/app/components/JsonLd";
import { MotionProvider } from "@/app/components/MotionProvider";

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
  description: "PRODIGELEC à Broué (28). Dépannage électricité et serrurerie sur Dreux, Chartres, Évreux.",
  keywords: ["Électricien Broué", "Serrurier Broué", "Installation électrique", "Serrure 3 points", "PRODIGELEC"],
  authors: [{ name: "PRODIGELEC", url: "https://www.prodigelec.fr" }],
  creator: "PRODIGELEC",
  publisher: "PRODIGELEC",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "PRODIGELEC - L'expertise artisanale 2.0",
    description: "Électricité et serrurerie en Eure-et-Loir.",
    url: "https://www.prodigelec.fr",
    siteName: "PRODIGELEC",
    images: [{ url: "https://www.prodigelec.fr/prodigelec-logo.svg", width: 800, height: 600, alt: "Logo PRODIGELEC" }],
    locale: "fr_FR",
    type: "website",
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], apple: "/prodigelec-logo.svg" },
  verification: { google: "w5rAOBeW-q78ZcjmJWRltGvSvm92EYiSSSo5CfP6Zo0" },
  alternates: { canonical: "https://www.prodigelec.fr/" },
  other: {
    'link': [
      { rel: 'dns-prefetch', href: 'https://www.prodigelec.fr' },
      { rel: 'preconnect', href: 'https://www.prodigelec.fr', crossorigin: 'anonymous' },
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
        {/* Style critique inliné pour briser la chaîne de requêtes et supprimer le FCP blocker */}
        <style dangerouslySetInnerHTML={{
          __html: `
          :root { --background:#0b1a2a; --foreground:#f4f4f5; --primary:#c9a227; }
          body { background-color:#0b1a2a; color:#f4f4f5; margin:0; padding:0; font-family:sans-serif; -webkit-font-smoothing:antialiased; }
          @keyframes shine { to { background-position:200% center; } }
          [data-motion] { will-change: transform, opacity; }
          main, section, article { contain: layout style paint; }
        `}} />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans bg-background text-foreground antialiased`}>
        <MotionProvider>
          <JsonLd />
          <Navbar />
          {children}
          <Footer />
          <FloatingContactButton />
        </MotionProvider>
      </body>
    </html>
  );
}
