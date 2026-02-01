import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientToaster from "@/components/ui/ClientToaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ClientToaster />
      </body>
    </html>
  );
}
