import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoraX — IA aplicada a resultado",
  description: "Agentes de IA sob medida, automações e inteligência de dados para transformar operação em vantagem competitiva. Sem firula, sem hype — só resultado mensurável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geist.variable} ${jbMono.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col">{children}</body>
    </html>
  );
}
