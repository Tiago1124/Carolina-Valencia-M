# Documentación del Proyecto
## Carolina Valencia M. — Sitio Web Oficial

**Stack:** Next.js 14 · Tailwind CSS · Sanity CMS · Vercel  
**URL producción:** https://carolinavalencia.co  
**Última actualización:** Abril 2026

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Paleta de colores y diseño](#2-paleta-de-colores-y-diseño)
3. [Fotos — medidas y ubicación](#3-fotos--medidas-y-ubicación)
4. [Logos de empresas — medidas y calidad](#4-logos-de-empresas--medidas-y-calidad)
5. [Formulario de diagnóstico (Tally)](#5-formulario-de-diagnóstico-tally)
6. [Agendamiento (Calendly)](#6-agendamiento-calendly)
7. [Blog (Sanity CMS)](#7-blog-sanity-cms)
8. [Despliegue en Vercel](#8-despliegue-en-vercel)
9. [Dominio personalizado](#9-dominio-personalizado)
10. [Cómo actualizar textos](#10-cómo-actualizar-textos)
11. [Favicon](#11-favicon)
12. [Errores comunes](#12-errores-comunes)

---

## 1. Estructura del proyecto

```
carolina-valencia/
├── src/
│   ├── app/                        ← Páginas (una carpeta = una URL)
│   │   ├── page.tsx                ← Inicio (/)
│   │   ├── layout.tsx              ← HTML base, favicon, fuentes, SEO global
│   │   ├── sobre-mi/page.tsx       ← /sobre-mi
│   │   ├── servicios/page.tsx      ← /servicios
│   │   ├── metodologia/page.tsx    ← /metodologia
│   │   ├── diagnostico/page.tsx    ← /diagnostico
│   │   ├── contacto/page.tsx       ← /contacto
│   │   ├── blog/page.tsx           ← /blog (lista de artículos)
│   │   ├── blog/[slug]/page.tsx    ← /blog/nombre-articulo
│   │   ├── not-found.tsx           ← Página 404
│   │   └── politica-privacidad/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          ← Menú de navegación fijo
│   │   │   └── Footer.tsx          ← Pie de página
│   │   └── sections/
│   │       ├── HeroSection.tsx     ← Sección principal con foto y CTA
│   │       ├── Strip.tsx           ← Banda animada keywords/roles
│   │       ├── BrandsSection.tsx   ← Logos de empresas
│   │       ├── ServicesPreview.tsx ← Acordeón de 3 servicios
│   │       ├── DiagnosticoCTA.tsx  ← Llamado al diagnóstico
│   │       └── BlogSubscribe.tsx   ← Suscripción al blog
│   │
│   ├── lib/sanity.ts               ← Conexión y queries a Sanity CMS
│   └── styles/globals.css          ← Variables CSS, fuentes, utilidades
│
├── public/
│   ├── images/                     ← FOTOS Y LOGOS VAN AQUÍ
│   │   └── logos/                  ← Logos de empresas
│   ├── favicon.ico
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon.svg
│   └── apple-touch-icon.png
│
├── studio-carovalencia/            ← Panel Sanity para el blog
├── tailwind.config.js              ← Tokens de diseño
├── .env.local                      ← Variables de entorno (NO subir a GitHub)
└── .env.example                    ← Plantilla de variables (SÍ subir)
```

---

## 2. Paleta de colores y diseño

### Colores del sistema

| Token | Hex | Uso |
|---|---|---|
| `navy` | `#253347` | Fondos oscuros, textos principales, navbar scrolled |
| `teal` | `#87c1b6` | Acentos, eyebrows, links hover |
| `peach` | `#f2aa79` | Botón CTA principal, acentos cálidos |
| `rose` | `#c45572` | Énfasis en titulares en itálica |
| `stone` | `#f8f5f0` | Fondo general de la web |
| `stone-2` | `#ede9e2` | Bordes suaves, divisores |
| `ink` | `#1a1f2e` | Texto muy oscuro |
| `muted` | `#6b7280` | Texto secundario, labels |

El color `navy` bajó de `#404e66` a `#253347` para mejorar el contraste WCAG (de 4.3:1 a 8.1:1 — pasa nivel AAA).

### Para cambiar un color en toda la web

Los colores están centralizados en **dos archivos**. Hay que cambiarlos en ambos:

**`tailwind.config.js`:**
```js
colors: {
  navy: '#253347',  // ← aquí
  teal: '#87c1b6',
  ...
}
```

**`src/styles/globals.css`:**
```css
:root {
  --c-navy: #253347;  /* ← y aquí */
  --c-teal: #87c1b6;
  ...
}
```

### Fuentes

| Fuente | Uso | Clase |
|---|---|---|
| Playfair Display | Titulares, citas | `font-serif` |
| DM Sans | Cuerpo, UI, botones | `font-sans` |

---

## 3. Fotos — medidas y ubicación

Carpeta: **`public/images/`**

| Archivo | Página | Medida recomendada |
|---|---|---|
| `3.webp` | Hero inicio | 560 × 700 px |
| `2.webp` | Sección "Sobre mí" en inicio | 520 × 585 px |
| `foto-personal.jpg` | Página /sobre-mi | 480 × 580 px |
| `og-image.jpg` | Vista previa en redes sociales | 1200 × 630 px |

**Formato:** WebP (mejor) o JPG. Comprime en [squoosh.app](https://squoosh.app) antes de subir.

---

## 4. Logos de empresas — medidas y calidad

### Por qué se pixelan

Las pantallas Retina/HiDPI necesitan el doble de píxeles del tamaño visible. El sitio muestra los logos a 56px de alto → el archivo debe tener **mínimo 112px de alto** (o ser SVG).

### Medidas a exportar

| Formato | Tamaño mínimo del archivo |
|---|---|
| PNG | 320px ancho × 112px alto (2x) |
| SVG | Cualquier tamaño (vectorial, escala infinita) |

### Instrucciones por herramienta

**Adobe Illustrator:**
- Archivo → Exportar para pantallas → SVG (mejor opción) o PNG escala 2x, fondo transparente

**Canva:**
- Descargar → PNG → activar "Fondo transparente" (requiere Canva Pro)
- Sin Pro: descarga PNG normal y quita el fondo con [remove.bg](https://remove.bg)

**Desde el sitio web de la empresa:**
- Clic derecho en su logo → Inspeccionar → busca la URL de la imagen `<img>`
- Los logos en los sitios web suelen ser de alta resolución o SVG

**Pedir a la empresa:**
- Solicitar exactamente: *"logo en SVG o PNG con fondo transparente, mínimo 400px de ancho"*

### Nombres de archivo esperados

```
public/images/logos/
├── laskin.png / laskin.svg
├── italcol.png / italcol.svg
├── tostao.png / tostao.svg
├── grupo-conboca.png
├── locatel.png
├── corona.png
├── via-baloto.png
├── casa-luker.png
├── kimberly-clark.png
├── colgate-palmolive.png
├── colombina.png
├── totto.png
├── ilumno.png
├── auros.png
├── villa-romana.png
├── epex.png
└── skin-solutions.png
```

Los logos están referenciados en `src/components/sections/BrandsSection.tsx`. Al subir el archivo con el nombre correcto, aparece automáticamente.

---

## 5. Formulario de diagnóstico (Tally)

Integrado en `/diagnostico`. ID actual: `XxYeEe`.

**Para cambiar el formulario:**
1. Tally → tu formulario → Share → Embed → copia el ID
2. Abre `src/app/diagnostico/page.tsx`
3. Busca `XxYeEe` y reemplaza con tu nuevo ID

**Parámetros de la URL embed:**
```
?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1
```

---

## 6. Agendamiento (Calendly)

**URL actual:** `https://calendly.com/carovalenciam/30min`  
Configurada en `src/app/contacto/page.tsx`.

### Mantener la agenda actualizada

Calendly lee tu calendario en tiempo real:
1. Calendly → **Calendar connections** → conecta Google Calendar o Outlook
2. Todo lo que bloquees en tu calendario personal se cierra automáticamente en Calendly
3. No necesitas entrar a Calendly — solo mantener actualizado tu calendario

### Colores personalizados del widget

Agrega a la URL del embed:
```
?hide_event_type_details=1&hide_gdpr_banner=1
&background_color=f8f5f0&text_color=253347&primary_color=87c1b6
```

---

## 7. Blog (Sanity CMS)

**Project ID:** `hpkdwpqq` | **Dataset:** `production`

### Cómo publicar un artículo

1. En terminal, dentro de `studio-carovalencia/`: `npm run dev`
2. Abre `http://localhost:3333`
3. **Post → New** y llena:
   - Title, Slug (Generate), Published at, Read time, Main image, Excerpt, Categories, Body, SEO
4. **Publish** → el artículo aparece en el sitio en máx. 1 hora

### Desplegar el Studio en la nube

```bash
cd studio-carovalencia
npx sanity deploy
# nombre sugerido: carovalencia-studio
# resultado: https://carovalencia-studio.sanity.studio
```

### Webhook para publicación inmediata (opcional)

1. Vercel → Settings → Git → **Deploy Hooks** → crear hook → copiar URL
2. manage.sanity.io → tu proyecto → API → **Webhooks** → pegar URL, trigger en `post`

---

## 8. Despliegue en Vercel

### Primera vez

```bash
git init
git add .
git commit -m "sitio carolina valencia"
git remote add origin https://github.com/TU_USUARIO/carolina-valencia.git
git push -u origin main
```

Luego en [vercel.com](https://vercel.com) → New Project → selecciona el repo → añade las variables de entorno:

| Variable | Valor |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `hpkdwpqq` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://carolinavalencia.co` |

### Actualizaciones posteriores

```bash
git add .
git commit -m "descripción del cambio"
git push
```

Vercel despliega automáticamente en ~60 segundos.

---

## 9. Dominio personalizado

Vercel → Settings → Domains → Add → `carolinavalencia.co`

Agrega en tu proveedor de dominio:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Propaga en 24-48 horas.

---

## 10. Cómo actualizar textos

| Qué cambiar | Archivo | Buscar |
|---|---|---|
| Titular del hero | `src/components/sections/HeroSection.tsx` | `<h1>` |
| Stats del hero | `src/components/sections/HeroSection.tsx` | `num:` |
| Servicios | `src/components/sections/ServicesPreview.tsx` | `const SERVICES` |
| Banda animada | `src/components/sections/Strip.tsx` | `const ITEMS` |
| Trayectoria ejecutiva | `src/app/sobre-mi/page.tsx` | `const EJECUTIVA` |
| Clientes consultora | `src/app/sobre-mi/page.tsx` | `const CONSULTORA` |
| Skills | `src/app/sobre-mi/page.tsx` | `const SKILLS` |
| Pasos metodología IGC | `src/app/metodologia/page.tsx` | `const steps` |
| Email | `src/app/contacto/page.tsx` + `Footer.tsx` | `carovalenciam@outlook.com` |
| LinkedIn | `src/components/layout/Footer.tsx` | `gerentedemercadeo` |
| SEO de cada página | Cada `page.tsx` | `export const metadata` |

**Cambiar el email en toda la web de una vez:**
```bash
find src -name "*.tsx" | xargs sed -i "s/carovalenciam@outlook.com/nuevo@email.com/g"
```

---

## 11. Favicon

**Diseño:** Fondo navy (`#253347`), letras CV en serif (C en stone, V en rosa), punto peach.

**Archivos:**
```
public/favicon.ico            ← Navegadores legacy (16/32/48px)
public/favicon-32.png         ← Pestañas Chrome
public/favicon-16.png         ← Pestañas pequeñas
public/favicon.svg            ← Navegadores modernos (escala perfecta)
public/apple-touch-icon.png   ← Guardar en iPhone/iPad (180px)
```

**Para reemplazarlo:** Usa [realfavicongenerator.net](https://realfavicongenerator.net), descarga el paquete y reemplaza los archivos en `/public/` con los mismos nombres.

---

## 12. Errores comunes

**Blog vacío en producción**  
→ `NEXT_PUBLIC_SANITY_PROJECT_ID` no está en las variables de entorno de Vercel.

**Formulario Tally no carga**  
→ Probar en ventana privada (bloqueador de anuncios). Si persiste, verificar el ID en `src/app/diagnostico/page.tsx`.

**Foto no aparece**  
→ El nombre del archivo distingue mayúsculas. `Carolina-Hero.jpg` ≠ `carolina-hero.jpg`.

**Logos pixelados**  
→ Ver sección 4. El archivo PNG debe tener mínimo 320px de ancho. La solución óptima es SVG.

**`npm run dev` falla con "Cannot find module"**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**El sitio no refleja cambios tras un push**  
→ Vercel → tu proyecto → Deployments → revisar si el build tiene error en rojo.

---

## URLs de referencia

| Recurso | URL |
|---|---|
| Sitio producción | https://carolinavalencia.co |
| Vercel dashboard | https://vercel.com/dashboard |
| Sanity Studio local | http://localhost:3333 |
| Sanity Studio nube | https://carovalencia-studio.sanity.studio |
| Sanity gestión | https://manage.sanity.io |
| Tally formulario | https://tally.so/r/XxYeEe |
| Calendly | https://calendly.com/carovalenciam/30min |

---

*Carolina Valencia M. — Stack: Next.js 14 · Tailwind CSS · Sanity CMS · Vercel*
