import type { Metadata } from "next";
import pt from "./pt";
import en from "./en";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const localePaths: Record<Locale, string> = { pt: "/", en: "/en" };

export const siteUrl = "https://chagasbarros.com.br";

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePaths[locale],
      languages: {
        "pt-BR": localePaths.pt,
        en: localePaths.en,
        "x-default": localePaths.pt,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
      url: localePaths[locale],
      type: "website",
    },
  };
}
