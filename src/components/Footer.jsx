import BrandMark from './BrandMark.jsx';
import { company, navItems } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-line bg-brand-ink px-5 py-10 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <BrandMark inverse />
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
            {company.shortName} diseña redes de fluidos con metodología BIM para proyectos de construcción que exigen precisión, confianza y cumplimiento.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-md text-sm font-semibold text-white/75 hover:text-brand-green">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/12 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {company.shortName}. Todos los derechos reservados.</p>
        <p>Prototipo MBA Universidad Santo Tomás, sede Tunja.</p>
      </div>
    </footer>
  );
}
