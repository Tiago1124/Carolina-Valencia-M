import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Queries
export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset->{ url, metadata { dimensions } } },
    categories[]->{ title },
    readTime
  }
`;

export const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset->{ url, metadata { dimensions } } },
    body,
    categories[]->{ title },
    readTime,
    seo { metaTitle, metaDescription }
  }
`;

export const POSTS_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`;
