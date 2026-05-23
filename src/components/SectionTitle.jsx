export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      <p className="mb-3 text-sm font-black uppercase tracking-normal text-brand-greenDeep">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-brand-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>}
    </div>
  );
}
