# 📚 Guía Completa de Despliegue y Uso
## Carolina Valencia M. — Fabricando Ideas

---

## ÍNDICE

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Dónde van las fotos](#2-dónde-van-las-fotos)
3. [Dónde van los logos de marcas](#3-dónde-van-los-logos-de-marcas)
4. [Configurar Tally (formulario diagnóstico)](#4-configurar-tally)
5. [Configurar Calendly (agendamiento)](#5-configurar-calendly)
6. [Configurar Sanity CMS (blog)](#6-configurar-sanity-cms)
7. [Despliegue en Vercel](#7-despliegue-en-vercel)
8. [Cómo publicar un artículo en el blog](#8-cómo-publicar-artículos-sin-tocar-código)
9. [Cómo actualizar tus datos](#9-actualizar-datos-de-contacto-y-textos)
10. [Dominio personalizado en Vercel](#10-conectar-dominio-propio)

---

## 1. Estructura del proyecto

```
carolina-valencia/
├── src/
│   ├── app/                  ← Páginas del sitio
│   │   ├── page.tsx          ← Inicio (/)
│   │   ├── sobre-mi/         ← /sobre-mi
│   │   ├── servicios/        ← /servicios
│   │   ├── metodologia/      ← /metodologia
│   │   ├── diagnostico/      ← /diagnostico
│   │   ├── contacto/         ← /contacto
│   │   └── blog/             ← /blog
│   ├── components/           ← Piezas reutilizables
│   └── styles/               ← Colores, fuentes
├── public/
│   └── images/               ← ← AQUÍ VAN TUS FOTOS Y LOGOS
├── .env.example              ← Plantilla de variables de entorno
└── package.json
```

---

## 2. Dónde van las fotos

Guarda tus fotos en la carpeta **`public/images/`**.

### Fotos requeridas y medidas exactas:

| Archivo                              | Sección            | Medida recomendada | Formato    |
|--------------------------------------|--------------------|--------------------|------------|
| `public/images/carolina-hero.jpg`    | Hero (inicio)      | **560 × 680 px**   | JPG o WebP |
| `public/images/carolina-sobre-mi.jpg`| Sobre mí           | **520 × 600 px**   | JPG o WebP |
| `public/images/og-image.jpg`         | Compartir en redes | **1200 × 630 px**  | JPG        |

### Fotos opcionales (testimonios):
```
public/images/testimonials/chris.jpg      → 80 × 80 px, recortada en círculo
public/images/testimonials/anna.jpg       → 80 × 80 px
public/images/testimonials/thomas.jpg     → 80 × 80 px
public/images/testimonials/shadan.jpg     → 80 × 80 px
```

### Cómo activar cada foto en el código:
Busca en el archivo de la página el comentario que dice:
```
REEMPLAZA ESTE BLOQUE POR:
<Image src="/images/carolina-hero.jpg" .../>
```
Descomenta esa línea y borra el bloque gris de placeholder.

> 💡 **Tip**: Puedes comprimir las fotos gratis en **squoosh.app** antes de subirlas.

---

## 3. Dónde van los logos de marcas

Guarda los logos en **`public/images/logos/`**:

```
public/images/logos/colgate.svg       ← Colgate Palmolive
public/images/logos/kimberly.svg      ← Kimberly Clark
public/images/logos/casaluker.svg     ← Casa Luker
public/images/logos/locatel.svg       ← Locatel
public/images/logos/tostao.svg        ← Tostao
public/images/logos/totto.svg         ← Totto
public/images/logos/italcol.svg       ← Italcol
public/images/logos/laskin.svg        ← Laskin
```

**Formato recomendado:** SVG (vectorial) o PNG con fondo transparente.
**Tamaño:** máximo 160 × 60 px.

### Cómo activarlos en el código:
Abre `src/components/sections/BrandsSection.tsx` y busca el comentario:
```
── REEMPLAZA EL <span> POR EL SIGUIENTE BLOQUE cuando tengas el logo:
<Image src={`/images/logos/${b.file}`} .../>
```
Descomenta esa línea y borra el `<span>` de texto.

---

## 4. Configurar Tally

El formulario de diagnóstico ya está integrado con tu link `https://tally.so/r/XxYeEe`.

**Si necesitas cambiar el formulario:**
1. Ve a [tally.so](https://tally.so) → tu formulario
2. Haz clic en **Share** → **Embed**
3. Copia la URL del embed (termina en `/embed/...`)
4. Abre `src/app/diagnostico/page.tsx`
5. Busca `tally.so/embed/XxYeEe` y reemplázalo con tu nueva URL

**Para personalizar colores del formulario en Tally:**
En la URL del embed puedes agregar parámetros:
```
?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1
```

---

## 5. Configurar Calendly

### Paso a paso:

1. **Crea cuenta gratis** en [calendly.com](https://calendly.com)

2. **Crea un tipo de evento:**
   - Nombre: "Sesión Estratégica Gratuita"
   - Duración: 30 minutos
   - Pregunta de confirmación: "¿En qué puedo ayudarte?"

3. **Obtén tu URL de embed:**
   - Ve a tu evento → **Share** → **Add to website** → **Inline embed**
   - Copia la URL (será algo como `https://calendly.com/tu-usuario/sesion-estrategica`)

4. **Pégala en el código:**
   - Abre `src/app/contacto/page.tsx`
   - Busca el comentario `REEMPLAZA ESTE BLOQUE CON EL EMBED DE CALENDLY`
   - Reemplaza `TU_URL_CALENDLY` con tu URL real

### Resultado final en el código:
```jsx
<iframe
  src="https://calendly.com/carolina-valencia/sesion-estrategica?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8f6f3&text_color=404e66&primary_color=87c1b6"
  width="100%"
  height="700"
  frameBorder={0}
  title="Agenda una sesión estratégica"
/>
```

### Alternativa: Google Calendar Appointment Scheduling
1. Ve a [calendar.google.com](https://calendar.google.com)
2. Haz clic en **+ Create** → **Appointment schedule**
3. Configura disponibilidad y duración
4. Copia el link de reserva
5. Úsalo en el botón de la página de contacto

---

## 6. Configurar Sanity CMS

Sanity es el sistema de gestión de contenido para el blog. Carolina puede publicar artículos sin tocar código.

### Paso 1: Crear cuenta en Sanity

1. Ve a [sanity.io](https://sanity.io) y crea una cuenta gratis (con Google o GitHub)
2. Haz clic en **"Create new project"**
3. Nombre del proyecto: `carolina-valencia`
4. Dataset: `production`
5. Copia el **Project ID** (lo necesitas después)

### Paso 2: Instalar Sanity Studio (panel de administración)

En la terminal, dentro de la carpeta del proyecto:
```bash
npm create sanity@latest -- --project <TU_PROJECT_ID> --dataset production --template blog --output-path sanity-studio
```

Esto crea una carpeta `sanity-studio/` con tu panel de administración.

### Paso 3: Configurar el schema del blog

Dentro de `sanity-studio/schemas/`, crea el archivo `post.ts`:
```typescript
export default {
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Título',       type: 'string',   validation: (R: any) => R.required() },
    { name: 'slug',        title: 'URL (slug)',    type: 'slug',     options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'publishedAt', title: 'Fecha',         type: 'datetime', validation: (R: any) => R.required() },
    { name: 'excerpt',     title: 'Resumen',       type: 'text',     rows: 3 },
    { name: 'readTime',    title: 'Tiempo lectura (min)', type: 'number' },
    { name: 'mainImage',   title: 'Imagen portada', type: 'image', options: { hotspot: true } },
    { name: 'categories',  title: 'Categorías',    type: 'array',    of: [{ type: 'reference', to: { type: 'category' } }] },
    { name: 'body',        title: 'Contenido',     type: 'array',    of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
    { name: 'seo',         title: 'SEO',           type: 'object',
      fields: [
        { name: 'metaTitle',       title: 'Meta título',       type: 'string' },
        { name: 'metaDescription', title: 'Meta descripción',  type: 'text', rows: 2 },
      ]
    },
  ],
  preview: { select: { title: 'title', media: 'mainImage' } },
};
```

Y el archivo `category.ts`:
```typescript
export default {
  name: 'category',
  title: 'Categoría',
  type: 'document',
  fields: [
    { name: 'title', title: 'Nombre', type: 'string' },
  ],
};
```

### Paso 4: Conectar al proyecto Next.js

1. Copia el archivo `.env.example` y renómbralo `.env.local`
2. Abre `.env.local` y llena los datos:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_de_sanity
NEXT_PUBLIC_SANITY_DATASET=production
```

### Paso 5: Desplegar Sanity Studio

Dentro de la carpeta `sanity-studio/`:
```bash
npx sanity deploy
```
Elige un nombre como `carolina-valencia-studio`. Esto crea una URL tipo:
`https://carolina-valencia-studio.sanity.studio`

Ahí Carolina puede publicar artículos desde cualquier computador.

---

## 7. Despliegue en Vercel

### Paso 1: Subir a GitHub

1. Crea una cuenta en [github.com](https://github.com) si no tienes
2. Crea un repositorio nuevo (puede ser privado)
3. Sube el proyecto:
```bash
git init
git add .
git commit -m "sitio carolina valencia"
git remote add origin https://github.com/TU_USUARIO/carolina-valencia.git
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) y crea cuenta (con GitHub)
2. Haz clic en **"New Project"**
3. Selecciona tu repositorio `carolina-valencia`
4. Framework: **Next.js** (lo detecta automático)
5. **⚠️ IMPORTANTE — Variables de entorno:** Antes de hacer Deploy, haz clic en **"Environment Variables"** y agrega:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = tu project id
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
6. Haz clic en **Deploy**

Vercel te dará una URL como `https://carolina-valencia.vercel.app`. ✅

### Cada vez que actualices el código:
```bash
git add .
git commit -m "descripción del cambio"
git push
```
Vercel despliega automáticamente en segundos.

---

## 8. Cómo publicar artículos sin tocar código

Una vez configurado Sanity (paso 6), Carolina puede:

1. Ir a `https://carolina-valencia-studio.sanity.studio`
2. Iniciar sesión con su cuenta de Sanity
3. Hacer clic en **"Artículo" → "New"**
4. Llenar:
   - **Título**: el título del artículo
   - **URL (slug)**: haz clic en "Generate" para que se cree automático
   - **Fecha**: cuándo quieres que aparezca
   - **Tiempo lectura**: ej. 5
   - **Imagen portada**: arrastra una imagen o súbela
   - **Resumen**: 1-2 frases que aparecen en la lista
   - **Contenido**: escribe con el editor (como Word)
   - **SEO**: título y descripción para Google (opcional pero recomendado)
5. Hacer clic en **"Publish"**

El artículo aparece en el sitio automáticamente en pocos minutos. 🎉

---

## 9. Actualizar datos de contacto y textos

Los textos principales están en los archivos de cada página. Para cambiarlos:

| Qué cambiar              | Archivo                                    |
|--------------------------|---------------------------------------------|
| Email de contacto        | `src/components/layout/Footer.tsx` y `src/app/contacto/page.tsx` |
| LinkedIn URL             | `src/components/layout/Footer.tsx`         |
| Trayectoria profesional  | `src/app/sobre-mi/page.tsx` → variable `trajectory` |
| Textos de servicios      | `src/app/servicios/page.tsx` → variable `services` |
| Testimonios              | `src/components/sections/Testimonials.tsx` |

---

## 10. Conectar dominio propio

En Vercel, ve a tu proyecto → **Settings → Domains → Add Domain**:
1. Escribe tu dominio, ej: `carolinavalencia.co`
2. Vercel te mostrará los registros DNS que debes agregar en tu proveedor de dominio (GoDaddy, Namecheap, etc.)
3. Agrega los registros. En 24h el dominio apunta a tu sitio.

---

## 🆘 Contacto técnico

Si algo no funciona, los errores más comunes son:

**"Error: Cannot read properties of undefined"** en el blog
→ El Project ID de Sanity no está configurado en las variables de entorno de Vercel.
→ Solución: Ve a Vercel → Settings → Environment Variables → agrega `NEXT_PUBLIC_SANITY_PROJECT_ID`.

**El formulario de Tally no carga**
→ Puede ser bloqueador de anuncios. Prueba en una ventana privada del navegador.

**Las fotos no aparecen**
→ Verifica que el nombre del archivo sea exactamente igual al que está en el código (distingue mayúsculas).

---

*Documentación generada para el proyecto Carolina Valencia M. — Fabricando Ideas*
*Sitio desarrollado con Next.js 14, Tailwind CSS, Sanity CMS y desplegado en Vercel.*
