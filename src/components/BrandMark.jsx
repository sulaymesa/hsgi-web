import { useState } from 'react';
import { company } from '../data/content.js';

export default function BrandMark({ compact = false, inverse = false }) {
  const [logoError, setLogoError] = useState(false);
  const titleColor = inverse ? 'text-white' : 'text-brand-ink';
  const subtitleColor = inverse ? 'text-brand-green' : 'text-brand-blueDeep';

  return (
    <a href="#inicio" className="focus-ring flex items-center gap-3 rounded-md">
      {!logoError && (
        <img
          src="/logo-hsgi.png"
          alt="Logo HSGI Ingeniería SAS"
          className="h-10 w-10 object-contain"
          onError={() => setLogoError(true)}
        />
      )}
      {logoError && (
        <span className="grid h-10 w-10 place-items-center rounded-md border border-brand-line bg-brand-mint text-sm font-black text-brand-greenDeep">
          H
        </span>
      )}
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-sm font-bold uppercase tracking-normal ${titleColor}`}>
            {company.shortName}
          </span>
          <span className={`block text-xs font-medium ${subtitleColor}`}>
            Diseño BIM de redes
          </span>
        </span>
      )}
    </a>
  );
}
