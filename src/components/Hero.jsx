import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, metrics } from '../data/content.js';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-ink text-white">
      <img
        src="/hero-bim-fluidos.svg"
        alt="Visualización BIM de redes hidráulicas y de fluidos"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink via-brand-ink/88 to-brand-ink/35" />

      <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-md border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-green">
            Miembro del BIM Fórum Colombia
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {company.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            {company.description} Más de 12 años conectando calidad técnica, confianza y cumplimiento con la transformación digital de la construcción.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-4 text-base font-black text-brand-ink transition hover:bg-white"
            >
              Contáctanos
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/16 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-brand-green">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span className="text-2xl font-black text-white">{metric.value}</span>
                </div>
                <p className="mt-2 text-sm leading-5 text-white/75">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
