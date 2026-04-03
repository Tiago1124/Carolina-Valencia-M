import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { client, POST_QUERY, POSTS_SLUGS_QUERY } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(POSTS_SLUGS_QUERY);
    return slugs.map(({ slug }: { slug: string }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await client.fetch(POST_QUERY, { slug: params.slug });
    if (!post) return {};
    return {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
      },
    };
  } catch {
    return {};
  }
}

// Portable text renderer (basic)
function renderBody(body: any[]): string {
  if (!body) return '';
  return body
    .map((block) => {
      if (block._type === 'block') {
        const text = block.children?.map((child: any) => child.text).join('') || '';
        if (block.style === 'h2') return `<h2>${text}</h2>`;
        if (block.style === 'h3') return `<h3>${text}</h3>`;
        return `<p>${text}</p>`;
      }
      return '';
    })
    .join('');
}

export default async function BlogPostPage({ params }: Props) {
  let post: any = null;
  try {
    post = await client.fetch(POST_QUERY, { slug: params.slug });
  } catch {
    // Sanity not configured yet
  }

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#f8f6f3] pt-28 pb-10">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <Link href="/blog" className="text-[0.72rem] font-bold tracking-wide uppercase text-[#87c1b6] hover:text-[#404e66] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                ← Blog
              </Link>
              {post.categories?.map((cat: any) => (
                <span key={cat.title} className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-[#87c1b6] bg-[#87c1b6]/10 px-2 py-0.5 rounded-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {cat.title}
                </span>
              ))}
            </div>

            <h1
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#404e66] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-[1rem] text-[#6b6b6b] leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-3 pb-6 border-b border-[#e6e6e6]">
              <div className="w-9 h-9 rounded-full bg-[#404e66] flex items-center justify-center text-white text-[0.7rem] font-bold" style={{ fontFamily: 'var(--font-body)' }}>
                CV
              </div>
              <div>
                <p className="text-[0.78rem] font-bold text-[#404e66]" style={{ fontFamily: 'var(--font-body)' }}>Carolina Valencia M.</p>
                <p className="text-[0.68rem] text-[#6b6b6b]" style={{ fontFamily: 'var(--font-body)' }}>
                  {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                  {post.readTime ? ` · ${post.readTime} min de lectura` : ''}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured image */}
        {post.mainImage?.asset?.url && (
          <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-2 mb-8">
            <div className="w-full aspect-[16/7] relative rounded-md overflow-hidden">
              <Image src={post.mainImage.asset.url} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        )}

        {/* Body */}
        <article className="max-w-3xl mx-auto px-6 lg:px-8 pb-16">
          <div
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'var(--font-body)',
              color: '#404e66',
              lineHeight: '1.9',
              fontSize: '1rem',
            }}
            dangerouslySetInnerHTML={{ __html: renderBody(post.body) }}
          />
        </article>

        {/* CTA after post */}
        <section className="bg-[#404e66] section-base">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-display text-[1.8rem] font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Te fue útil este artículo?
            </h2>
            <p className="text-[0.92rem] text-white/65 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Recibe próximos artículos y diagnósticos en tu bandeja de entrada.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contacto" className="btn-cta">📅 Agenda una sesión gratuita</Link>
              <Link href="/diagnostico" className="btn-outline border-white/30 text-white hover:bg-white hover:text-[#404e66]">
                Hacer el diagnóstico
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
