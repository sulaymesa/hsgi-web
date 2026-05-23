import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { company } from '../data/content.js';

const fields = [
  { id: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo' },
  { id: 'correo', label: 'Correo', type: 'email', placeholder: 'nombre@empresa.com' },
  { id: 'compania', label: 'Compañía', type: 'text', placeholder: 'Nombre de la empresa' },
  { id: 'telefono', label: 'Teléfono', type: 'tel', placeholder: '+57 300 000 0000' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contacto" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Contacto"
            title="Conversemos sobre el siguiente proyecto."
            description="Agenda una conversación para revisar alcance, disciplina técnica, estándar BIM requerido y tiempos de coordinación."
          />
          <div className="mt-8 grid gap-4">
            <a href={`mailto:${company.email}`} className="focus-ring flex items-center gap-3 rounded-lg border border-brand-line p-4 text-sm font-semibold text-brand-ink hover:bg-brand-mint">
              <Mail size={20} className="text-brand-greenDeep" aria-hidden="true" />
              {company.email}
            </a>
            <a href="tel:+570000000000" className="focus-ring flex items-center gap-3 rounded-lg border border-brand-line p-4 text-sm font-semibold text-brand-ink hover:bg-brand-mint">
              <Phone size={20} className="text-brand-greenDeep" aria-hidden="true" />
              Teléfono comercial editable
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-brand-line bg-brand-mint p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-bold text-brand-ink">
                {field.label}
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="focus-ring min-h-12 rounded-md border border-brand-line bg-white px-4 py-3 text-base font-medium text-brand-ink outline-none placeholder:text-slate-400"
                />
              </label>
            ))}
          </div>
          <label htmlFor="mensaje" className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Mensaje
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Cuéntanos qué tipo de proyecto necesitas coordinar."
              className="focus-ring resize-y rounded-md border border-brand-line bg-white px-4 py-3 text-base font-medium text-brand-ink outline-none placeholder:text-slate-400"
            />
          </label>
          <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-greenDeep px-6 py-4 text-base font-black text-white transition hover:bg-brand-blueDeep sm:w-auto">
            Enviar solicitud
            <Send size={19} aria-hidden="true" />
          </button>
          {sent && (
            <p className="mt-4 rounded-md border border-brand-green bg-white px-4 py-3 text-sm font-semibold text-brand-greenDeep">
              Solicitud registrada en el prototipo. Para producción, conecta este formulario a un CRM o servicio de formularios.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
