import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CRM - Prodige Élec",
  description: "Système de gestion client - Prodige Élec",
};

export default function AuthLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased theme-private bg-background-dark min-h-screen flex items-center justify-center`}>
      {children}
    </div>
  );
}