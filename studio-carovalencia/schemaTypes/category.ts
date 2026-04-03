import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoría',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la categoría',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción (opcional)',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: `🏷️ ${title}`}
    },
  },
})
