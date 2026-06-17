"use client";

import { navLinks } from "@/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 bg-[rgba(15,17,23,0.85)] backdrop-blur-[12px] border-b border-[rgba(90,107,58,0.2)]">
      <div className="font-mono-custom text-[0.85rem] text-olive-400 tracking-wide">
        <span className="text-copper-400">&lt;</span>
        chagasbarros
        <span className="text-copper-400">/&gt;</span>
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
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

      <a
        href="#contact"
        className="font-mono-custom text-xs tracking-wide text-copper-400 border border-copper-700 px-5 py-2 no-underline hover:bg-copper-700 hover:text-copper-100 transition-all duration-200"
      >
        Contato
      </a>
    </nav>
  );
}
