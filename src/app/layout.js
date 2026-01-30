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
  metadataBase: new URL("https://beaveraid.fr"),
  title: {
    default: "Beaver'Aid - Électricien, Serrurier & Web | Eure-et-Loir (28)",
    template: "%s | Beaver'Aid"
  },
  description: "Artisan multiservices à Broué (28). Dépannage électricité et serrurerie 24/7 sur Dreux, Chartres, Évreux. Création de sites internet professionnels.",
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
    "Dépannage électricité Eure",
    "Ouverture de porte 28",
    "Ouverture de porte Eure",
    "Installation électrique",
    "Serrure 3 points",
    "Réparation volet roulant",
    "Déblocage volet roulant",
    
    // Web
    "Dépannage informatique",
    "Aide informatique",
    "Création site internet Eure-et-Loir", 
    "Webmaster 28",
    
    // Marque
    "Beaver'Aid", 
    "Artisan 28"
  ],
  authors: [{ name: "Beaver'Aid", url: "https://beaveraid.fr" }],
  creator: "Beaver'Aid",
  publisher: "Beaver'Aid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Beaver'Aid - L'expertise artisanale 2.0",
    description: "Électricité, Serrurerie, Informatique. Un seul interlocuteur de confiance pour vos travaux et votre visibilité web.",
    url: "https://beaveraid.fr",
    siteName: "Beaver'Aid",
    images: [
      {
        url: "/logo.png", // Idéalement une image OG de 1200x630
        width: 800,
        height: 600,
        alt: "Logo Beaver'Aid",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beaver'Aid - Services 28",
    description: "Électricien, Serrurier et Webmaster en Eure-et-Loir.",
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
    icon: '/logo.png',
    apple: '/logo.png',
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
              "name": "Beaver'Aid",
              "image": "https://beaveraid.fr/logo.png",
              "telephone": "0638194752",
              "url": "https://beaveraid.fr",
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
              "areaServed": ["Broué", "Dreux", "Chartres", "Évreux", "Anet", "Houdan"],
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
