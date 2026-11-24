import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import ClientNavbar from "@/app/components/layout/Navbar/ClientNavbar";
import Footer from "@/app/components/layout/Footer";
import JsonLd from "@/app/components/JsonLd";
import { MotionProvider } from "@/app/components/MotionProvider";
import FloatingContactButtonLoader from "@/app/components/layout/FloatingContactButtonLoader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1a2a",
};

export const metadata = {
  metadataBase: new URL("https://www.prodigelec.fr"),
  title: {
    default: "PRODIGELEC - Électricien & Sécurité | Eure-et-Loir, Eure, Yvelines",
    template: "%s | PRODIGELEC"
  },
  description: "PRODIGELEC à Broué (28). Dépannage électricité et sécurité sur Dreux, Chartres, Évreux, Houdan, Plaisir, Montfort l'Amaury et alentours (28, 27, 78).",
  keywords: ["Électricien Broué", "Électricien Dreux", "Électricien Houdan", "Électricien Montfort l'Amaury", "Sécurité & Automatismes", "Dépannage électricité", "PRODIGELEC"],
  authors: [{ name: "PRODIGELEC", url: "https://www.prodigelec.fr" }],
  creator: "PRODIGELEC",
  publisher: "PRODIGELEC",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "PRODIGELEC — Électricien & Sécurité Électronique | 27, 28 & 78",
    description: "Artisan électricien & sécurité électronique, 23 ans d'expérience en Eure-et-Loir, Eure et Yvelines. Dépannage rapide, devis gratuit.",
    url: "https://www.prodigelec.fr",
    siteName: "PRODIGELEC",
    images: [{ url: "https://www.prodigelec.fr/opengraph-image", width: 1200, height: 630, alt: "PRODIGELEC - Électricien & Sécurité" }],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  verification: { google: "w5rAOBeW-q78ZcjmJWRltGvSvm92EYiSSSo5CfP6Zo0" },
  twitter: {
    card: "summary_large_image",
    title: "PRODIGELEC - Électricien & Sécurité | 27, 28 & 78",
    description: "PRODIGELEC à Broué (28). Dépannage électricité et sécurité sur Dreux, Chartres, Évreux, Houdan et alentours (28, 27, 78).",
    images: ["https://www.prodigelec.fr/opengraph-image"],
  },
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
          .skip-link { position: absolute; top: -40px; left: 0; background: #c9a227; color: #0b1a2a; padding: 8px; z-index: 10000; transition: top 0.3s; }
          .skip-link:focus { top: 0; }
        `}} />
      </head>
      <body className={`${outfit.variable} ${sora.variable} font-sans bg-background text-foreground antialiased`}>
        <a href="#main-content" className="skip-link font-bold">Passer au contenu principal</a>
        <MotionProvider>
          <JsonLd />
          <ClientNavbar />
          <div id="main-content">
            {children}
          </div>
          <Footer />
          <FloatingContactButtonLoader />
        </MotionProvider>
      </body>
    </html>
  );
}
