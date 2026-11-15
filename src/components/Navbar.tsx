import type { Dictionary, Locale } from "@/i18n";
import { localePaths, htmlLang } from "@/i18n";

const locales: Locale[] = ["pt", "en"];

export default function Navbar({
  t,
  locale,
}: {
  t: Dictionary["nav"];
  locale: Locale;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-6 md:px-16 py-5 bg-[rgba(15,17,23,0.85)] backdrop-blur-[12px] border-b border-[rgba(90,107,58,0.2)]">
      <div className="font-mono-custom text-[0.85rem] text-olive-400 tracking-wide">
        <span className="text-copper-400">&lt;</span>
        chagasbarros
        <span className="text-copper-400">/&gt;</span>
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {t.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[0.8rem] font-medium tracking-wide2 uppercase text-text-secondary hover:text-olive-200 transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 md:gap-6">
        <div
          role="group"
          aria-label={t.switchLabel}
          className="flex items-center gap-1 font-mono-custom text-xs tracking-wide"
        >
          {locales.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-text-muted">|</span>}
              {l === locale ? (
                <span aria-current="true" className="text-copper-400">
                  {l.toUpperCase()}
                </span>
              ) : (
                <a
                  href={localePaths[l]}
                  hrefLang={htmlLang[l]}
                  lang={htmlLang[l]}
                  className="text-text-muted no-underline hover:text-olive-200 transition-colors duration-200"
                >
                  {l.toUpperCase()}
                </a>
              )}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="font-mono-custom text-xs tracking-wide text-copper-400 border border-copper-700 px-3 md:px-5 py-2 no-underline hover:bg-copper-700 hover:text-copper-100 transition-all duration-200"
        >
          {t.contact}
        </a>
      </div>
    </nav>
  );
}
