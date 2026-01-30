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
  title: "Beaver'Aid - Services Électricité, Serrurerie & Web | Eure-et-Loir (28)",
  description: "Artisan multiservices basé à Broué (28). Dépannage électricité et serrurerie rapide sur Dreux, Chartres, Évreux. Création de sites internet et assistance informatique.",
  keywords: ["Électricien Dreux", "Serrurier Chartres", "Dépannage 28", "Création site web Eure-et-Loir", "Beaver'Aid", "Broué", "Anet", "Nonancourt", "Évreux"],
  authors: [{ name: "Beaver'Aid" }],
  openGraph: {
    title: "Beaver'Aid - L'expertise artisanale 2.0",
    description: "Électricité, Serrurerie, Informatique. Un seul interlocuteur pour vos travaux et votre visibilité web.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
