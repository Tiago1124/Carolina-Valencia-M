import { MetadataRoute } from 'next'
import { client, POSTS_SLUGS_QUERY } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://carolinavalencia.co'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                    lastModified: new Date(), changeFrequency: 'monthly',  priority: 1 },
    { url: `${baseUrl}/sobre-mi`,      lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/servicios`,     lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/metodologia`,   lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/diagnostico`,   lastModified: new Date(), changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/blog`,          lastModified: new Date(), changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contacto`,      lastModified: new Date(), changeFrequency: 'yearly',   priority: 0.7 },
  ]

  // Blog posts from Sanity
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const slugs: { slug: string }[] = await client.fetch(POSTS_SLUGS_QUERY)
    blogPages = slugs.map(({ slug }) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // Sanity not yet configured — skip blog pages
  }

  return [...staticPages, ...blogPages]
}
