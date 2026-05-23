# HSGI Ingeniería SAS

Prototipo funcional de landing page corporativa para HSGI Ingeniería SAS, construido con React, Vite y Tailwind CSS. Está pensado para presentar el modelo de negocio digital, validar la propuesta de valor y publicarse en Vercel desde GitHub.

## Estructura

```text
hsgi-ingenieria-web/
├─ public/
│  ├─ hero-bim-fluidos.svg
│  └─ clientes-placeholder.svg
├─ src/
│  ├─ components/
│  │  ├─ BrandMark.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ SectionTitle.jsx
│  │  └─ Sections.jsx
│  ├─ data/
│  │  └─ content.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## Ejecutar en el computador

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor local:

```bash
npm run dev
```

3. Abre la URL que muestre la terminal, normalmente:

```text
http://localhost:5173
```

4. Genera la versión de producción:

```bash
npm run build
```

## Subir a GitHub

Si el repositorio todavía no existe:

```bash
git init
git add .
git commit -m "Crear landing page HSGI Ingenieria"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/hsgi-ingenieria-web.git
git push -u origin main
```

También puedes crear el repositorio desde GitHub:

1. Entra a GitHub y crea un repositorio llamado `hsgi-ingenieria-web`.
2. No agregues README, licencia ni `.gitignore` desde GitHub, porque este proyecto ya los incluye.
3. Ejecuta los comandos anteriores cambiando `TU_USUARIO`.

## Desplegar en Vercel

1. Entra a Vercel con tu cuenta.
2. Elige `Add New...` y luego `Project`.
3. Importa el repositorio `hsgi-ingenieria-web` desde GitHub.
4. Vercel detectará Vite automáticamente.
5. Configuración esperada:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Haz clic en `Deploy`.

## Personalización rápida

- Reemplaza `public/logo-hsgi.png` con el logo real de la empresa. El sitio usa un fallback de texto si el archivo no existe.
- Reemplaza `public/clientes.png` con la imagen real de clientes actuales. Si no existe, se muestra `clientes-placeholder.svg`.
- Edita textos, servicios, métricas y enlaces en `src/data/content.js`.
- Ajusta colores corporativos en `tailwind.config.js`.
- Para conectar el formulario a un CRM, reemplaza la lógica local de `src/components/Contact.jsx` por Formspree, HubSpot, Netlify Forms o una API propia.

## Supuestos del prototipo

- Se asumió que el logo real podrá guardarse como `public/logo-hsgi.png`.
- Se asumió que la imagen de clientes actuales podrá guardarse como `public/clientes.png`.
- Se propuso el correo comercial `contacto@hsgiingenieria.com` como texto editable.
- El formulario no envía datos a backend; muestra una confirmación para funcionar como prototipo.
