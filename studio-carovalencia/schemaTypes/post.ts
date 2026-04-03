import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Artículo',
  type: 'document',
  icon: () => '✍️',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del artículo',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100).error('El título es obligatorio (10–100 caracteres)'),
    }),
    defineField({
      name: 'slug',
      title: 'URL del artículo (slug)',
      type: 'slug',
      description: 'Haz clic en "Generate" para crearlo automáticamente desde el título',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required().error('La URL es obligatoria — haz clic en Generate'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tiempo de lectura (minutos)',
      type: 'number',
      description: 'Ej: 5 para un artículo de lectura media',
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen / descripción corta',
      type: 'text',
      rows: 3,
      description: '1–2 frases que aparecen en la lista del blog y en Google (máx 160 caracteres)',
      validation: (Rule) => Rule.max(160).warning('Idealmente menos de 160 caracteres para SEO'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      description: 'Recomendado: 1200 × 628 px, formato JPG o WebP',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo (describe la imagen)',
          description: 'Importante para SEO y accesibilidad',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Contenido del artículo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Título H2', value: 'h2'},
            {title: 'Título H3', value: 'h3'},
            {title: 'Cita destacada', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Negrita', value: 'strong'},
              {title: 'Cursiva', value: 'em'},
              {title: 'Subrayado', value: 'underline'},
            ],
            annotations: [
              {
                title: 'Enlace',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL del enlace',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir en nueva pestaña',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', type: 'string', title: 'Descripción de la imagen'},
            {name: 'caption', type: 'string', title: 'Pie de foto (opcional)'},
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: '🔍 SEO (Google)',
      type: 'object',
      description: 'Opcional pero recomendado para aparecer bien en Google',
      fields: [
        {
          name: 'metaTitle',
          title: 'Título para Google (meta title)',
          type: 'string',
          description: 'Si lo dejas vacío se usa el título del artículo. Máx 60 caracteres.',
          validation: (Rule: any) => Rule.max(60).warning('Máximo 60 caracteres recomendado'),
        },
        {
          name: 'metaDescription',
          title: 'Descripción para Google (meta description)',
          type: 'text',
          rows: 2,
          description: 'Si lo dejas vacío se usa el resumen. Máx 160 caracteres.',
          validation: (Rule: any) => Rule.max(160).warning('Máximo 160 caracteres recomendado'),
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('es-CO', {year: 'numeric', month: 'short', day: 'numeric'}) : 'Sin fecha',
        media,
      }
    },
  },
})
