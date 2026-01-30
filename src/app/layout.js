import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FloatingContactButton from "@/components/layout/FloatingContactButton";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    "Dépanna"
    "Dépannage électricité Eure",
    "Ouverture de porte 28",
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
        url: "/logo.png", // Idéalement une image OG de 1200x630
        width: 800,
        height: 600,
        alt: "Logo PRODIGELEC",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRODIGELEC - Services 28",
    description: "Électricien et Serrurier en Eure-et-Loir.",
    images: ["/logo.png"],
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
    icon: '/prodigelec-logo.svg',
    apple: '/prodigelec-logo.svg',
  },
  verification: {
    google: "C-dGhGfuNwqKlYfHp-ICPG43ZWYeHFpfyCsT8XF8lag",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PRODIGELEC",
              "image": "https://www.prodigelec.fr/prodigelec-logo.svg",
              "telephone": "0638194752",
              "url": "https://www.prodigelec.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Rue Georges Bréant",
                "addressLocality": "Broué",
                "postalCode": "28410",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.7492,
                "longitude": 1.5234
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              ],
              "priceRange": "$$",
              "areaServed": ["Broué", "Dreux", "Chartres", "Évreux", "Anet"],
              "sameAs": [
                "https://www.facebook.com/beaveraid", // Exemple
                "https://www.instagram.com/beaveraid"  // Exemple
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
