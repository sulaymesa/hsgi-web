import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import BrandMark from './BrandMark.jsx';
import { navItems } from '../data/content.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/80 bg-white/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegación principal">
        <BrandMark />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-md text-sm font-semibold text-brand-ink transition hover:text-brand-greenDeep">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="focus-ring hidden rounded-md bg-brand-greenDeep px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-blueDeep md:inline-flex"
        >
          Contáctanos
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line text-brand-ink md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-line bg-white px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-mint"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 rounded-md bg-brand-greenDeep px-4 py-3 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
