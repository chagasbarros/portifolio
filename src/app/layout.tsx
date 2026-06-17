import type { Metadata } from "next";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "Chagas Barros — Fullstack Developer",
  description:
    "Portfólio de Chagas Barros, desenvolvedor fullstack especializado em sistemas que escalam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
