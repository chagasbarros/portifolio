import { htmlLang, type Locale } from "@/i18n";

export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={htmlLang[locale]}>
      <body>{children}</body>
    </html>
  );
}
