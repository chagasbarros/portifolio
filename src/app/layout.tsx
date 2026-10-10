import type { Metadata } from "next";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";

export const metadata: Metadata = {
  title: "Chagas Barros — Desenvolvedor Fullstack",
  description:
    "Portfólio de Chagas Barros, desenvolvedor fullstack em formação em Fortaleza, em busca de estágio.",
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
