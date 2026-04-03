import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'carolina-valencia-studio',
  title: 'Carolina Valencia M. — Fabricando Ideas',

  projectId: 'hpkdwpqq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('✍️  Artículos del Blog')
              .child(S.documentTypeList('post').title('Artículos')),
            S.listItem()
              .title('🏷️  Categorías')
              .child(S.documentTypeList('category').title('Categorías')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
