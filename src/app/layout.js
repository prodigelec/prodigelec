import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/app/components/layout/Navbar";
import FloatingContactButton from "@/app/components/layout/FloatingContactButton";
import Footer from "@/app/components/layout/Footer";
import ClientToaster from "@/components/ui/ClientToaster";
import ConditionalLayout from "@/app/components/layout/ConditionalLayout";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
    google: "C-dGhGfuNwqKlYfHp-ICPG43ZWYeHFpfyCsT8XF8lag",
  },
  alternates: {
    canonical: "https://www.prodigelec.fr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased theme-public`}>
        <ClientToaster />
        <ConditionalLayout>
          <Navbar data-public-navbar />
          {children}
          <Footer data-public-footer />
          <FloatingContactButton data-floating-button />
        </ConditionalLayout>
        <Script
          id="schema-org-local-business"
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
                "https://www.google.com/search?q=prodigelec",
                "https://www.google.com/maps/place/prodigelec/",
                "https://www.facebook.com/prodigelec/",
                "https://www.instagram.com/prodigelec/",
                "https://www.whatsapp.com/prodigelec/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
