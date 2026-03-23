import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate - Encontre seu Imóvel Perfeito",
  description: "Plataforma moderna de busca e venda de imóveis. Encontre apartamentos, casas e propriedades comerciais.",
  viewport: "width=device-width, initial-scale=1",
};

export const viewport: Viewport = {
  themeColor: "#10B981",
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geist.className} ${geistMono.className} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
