import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'hpkdwpqq',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, excerpt, readTime,
    mainImage { asset->{ url }, alt },
    categories[]->{ title }
  }
`
export const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, excerpt, readTime,
    mainImage { asset->{ url }, alt },
    body, categories[]->{ title },
    seo { metaTitle, metaDescription }
  }
`
export const POSTS_SLUGS_QUERY = `*[_type == "post"] { "slug": slug.current }`

type Child = { text: string; marks?: string[] }
type MarkDef = { _key: string; _type: string; href?: string; blank?: boolean }
type Block = {
  _type: string; _key?: string; style?: string
  children?: Child[]; markDefs?: MarkDef[]
  asset?: { url: string }; alt?: string; caption?: string
}

export function portableTextToHtml(blocks: Block[]): string {
  if (!blocks) return ''
  return blocks.map((block) => {
    if (block._type === 'image' && block.asset?.url) {
      const cap = block.caption ? `<figcaption>${block.caption}</figcaption>` : ''
      return `<figure><img src="${block.asset.url}" alt="${block.alt ?? ''}" loading="lazy" />${cap}</figure>`
    }
    if (block._type !== 'block') return ''
    const defs = block.markDefs ?? []
    const inline = (block.children ?? []).map((child) => {
      let t = child.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      const m = child.marks ?? []
      if (m.includes('strong')) t = `<strong>${t}</strong>`
      if (m.includes('em'))     t = `<em>${t}</em>`
      if (m.includes('underline')) t = `<u>${t}</u>`
      const lk = m.find((x) => defs.some((d) => d._key === x && d._type === 'link'))
      if (lk) {
        const d = defs.find((x) => x._key === lk)
        const rel = d?.blank ? ' target="_blank" rel="noopener noreferrer"' : ''
        t = `<a href="${d?.href ?? '#'}"${rel}>${t}</a>`
      }
      return t
    }).join('')
    switch (block.style) {
      case 'h2':         return `<h2>${inline}</h2>`
      case 'h3':         return `<h3>${inline}</h3>`
      case 'blockquote': return `<blockquote>${inline}</blockquote>`
      default:           return inline ? `<p>${inline}</p>` : ''
    }
  }).join('\n')
}
