import type { Dictionary } from "@/i18n";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-mono-custom text-[0.7rem] tracking-wide text-text-muted">
        © 2026 <span className="text-olive-400">Chagas Barros</span> —{" "}
        {t.location}
      </p>
      <a
        href="#hero"
        className="font-mono-custom text-[0.7rem] tracking-wide text-text-muted no-underline hover:text-copper-400 transition-colors duration-200"
      >
        {t.backToTop}
      </a>
    </footer>
  );
}
