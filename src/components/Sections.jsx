import { Building2, CloudCog, Flame, Handshake, Layers3, ShieldCheck, Target, Waves } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { model, problem, processSteps, services, solution, targetClients, valueProps } from '../data/content.js';

const serviceIcons = [Layers3, Waves, Flame, ShieldCheck, CloudCog, Building2];

export function ProblemSolution() {
  return (
    <section id="solucion" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionTitle
          eyebrow="El reto"
          title="La digitalización de la construcción exige ingeniería más coordinada."
          description="HSGI responde a una brecha concreta del mercado: integrar redes de fluidos complejas con precisión BIM, trazabilidad y colaboración remota."
        />
        <div className="grid gap-5">
          <article className="rounded-lg border border-brand-line bg-brand-mint p-7">
            <p className="text-sm font-black uppercase tracking-normal text-brand-blueDeep">Problema del mercado</p>
            <p className="mt-4 text-base leading-8 text-slate-700">{problem}</p>
          </article>
          <article className="rounded-lg border border-brand-line bg-white p-7 shadow-soft">
            <p className="text-sm font-black uppercase tracking-normal text-brand-greenDeep">Solución HSGI</p>
            <p className="mt-4 text-base leading-8 text-slate-700">{solution}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ValueProposition() {
  return (
    <section className="surface-grid bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Propuesta de valor"
          title="Especialización BIM para proyectos que no pueden improvisar."
          description="La empresa combina experiencia técnica, estándares internacionales y una operación digital pensada para clientes B2B en Latinoamérica."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {valueProps.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-brand-line bg-white p-7 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-blue text-sm font-black text-brand-ink">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-black text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Servicios"
          title="Diseños hidrosanitarios, gas, incendio, acueducto y alcantarillado bajo metodología BIM."
          description="Cada servicio se entrega con enfoque de coordinación, reducción de interferencias y documentación lista para soportar decisiones de diseño y construcción."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Layers3;
            return (
              <article key={service} className="group rounded-lg border border-brand-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-mint text-brand-greenDeep transition group-hover:bg-brand-green">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-black leading-7 text-brand-ink">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Desarrollo técnico con estándares internacionales, gestión digital y enfoque en proyectos de vivienda, institucionales, industriales y comerciales.
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BusinessModel() {
  return (
    <section id="modelo" className="bg-brand-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-normal text-brand-green">Modelo de negocio</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">B2B digital, especializado y escalable.</h2>
          <p className="mt-5 text-base leading-8 text-white/78">{model}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-white/16 bg-white/8 p-6">
              <span className="text-sm font-black text-brand-green">Paso {index + 1}</span>
              <p className="mt-3 text-lg font-bold leading-7 text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TargetMarket() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionTitle
          eyebrow="Cliente objetivo"
          title="Construcción, consultoría e inversión con necesidad de coordinación técnica confiable."
          description="El enfoque comercial se concentra en organizaciones que buscan reducir riesgos de diseño y acelerar la coordinación de proyectos."
        />
        <div className="grid gap-4">
          {targetClients.map((client) => (
            <article key={client} className="flex gap-4 rounded-lg border border-brand-line bg-white p-6 shadow-soft">
              <Target className="mt-1 shrink-0 text-brand-greenDeep" size={22} aria-hidden="true" />
              <p className="text-base leading-7 text-slate-700">{client}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Validation() {
  return (
    <section id="validacion" className="bg-brand-mint px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Validación"
            title="Más de 500.000 m² construidos diseñados bajo metodología BIM en Colombia."
            description="La experiencia acumulada demuestra capacidad técnica, cumplimiento y adaptación a proyectos reales en diferentes regiones del territorio nacional."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="focus-ring inline-flex justify-center rounded-md bg-brand-greenDeep px-6 py-4 text-base font-black text-white transition hover:bg-brand-blueDeep">
              Solicitar una reunión
            </a>
            <a href="https://www.linkedin.com/" className="focus-ring inline-flex justify-center rounded-md border border-brand-greenDeep px-6 py-4 text-base font-bold text-brand-greenDeep transition hover:bg-white">
              Ver LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-brand-line bg-white p-6 shadow-soft">
          <p className="text-sm font-black uppercase tracking-normal text-brand-blueDeep">Nuestros clientes</p>
          <img
            src="/clientes.png"
            alt="Clientes actuales de HSGI Ingeniería"
            className="mt-5 w-full rounded-md border border-brand-line bg-white object-contain"
            onError={(event) => {
              event.currentTarget.src = '/clientes-placeholder.svg';
            }}
          />
          <div className="mt-6 flex items-center gap-3 rounded-md bg-brand-mint p-4">
            <Handshake className="shrink-0 text-brand-greenDeep" aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">
              Venta directa y alianzas estratégicas para atender proyectos de construcción en Latinoamérica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
