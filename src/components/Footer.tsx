export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-mono-custom text-[0.7rem] tracking-wide text-text-muted">
        © 2025 <span className="text-olive-400">Chagas Barros</span> —
        Fortaleza, CE
      </p>
      <a
        href="#hero"
        className="font-mono-custom text-[0.7rem] tracking-wide text-text-muted no-underline hover:text-copper-400 transition-colors duration-200"
      >
        ↑ voltar ao topo
      </a>
    </footer>
  );
}
