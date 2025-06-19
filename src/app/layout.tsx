import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeloRunFestival - Événements cyclistes et courses",
  description:
    "Découvrez les événements cyclistes et courses organisés par VeloRunFestival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Hero />
          <Footer />
        </div>
      </body>
    </html>
  );
}
