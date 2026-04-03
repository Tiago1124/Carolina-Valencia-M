import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { client, POSTS_QUERY } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | Estrategia Comercial y Marca Personal',
  description:
    'Artículos sobre estrategia comercial, trade marketing, marca personal para ejecutivos y crecimiento rentable. Por Carolina Valencia M.',
};

// Revalidar cada hora
export const revalidate = 3600;

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { url: string } };
  categories?: { title: string }[];
  readTime?: number;
}

async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(POSTS_QUERY);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#f8f6f3] dot-grid pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="eyebrow justify-center mb-5">Blog</div>
            <h1
              className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-[#404e66] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Estrategia que se puede{' '}
              <em className="italic text-[#87c1b6]">leer y aplicar</em>
            </h1>
            <p
              className="text-[0.95rem] text-[#5a6578] leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Frameworks, casos reales y perspectivas sobre marketing, estrategia comercial y marca personal. Sin teoría vacía.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-white section-base">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {posts.length === 0 ? (
              /* Empty state — show when Sanity not yet connected */
              <div className="text-center py-20">
                <span className="text-5xl block mb-5">📝</span>
                <h2
                  className="font-display text-[1.8rem] font-bold text-[#404e66] mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Próximamente
                </h2>
                <p
                  className="text-[0.9rem] text-[#5a6578] max-w-md mx-auto leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Estamos configurando el blog. Muy pronto encontrarás aquí artículos sobre estrategia comercial, marca personal y crecimiento rentable.
                </p>
                <Link href="/diagnostico" className="btn-cta">
                  Mientras, haz el diagnóstico gratuito →
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {posts.map((post) => (
                  <article key={post._id} className="group flex flex-col card-hover">
                    <Link href={`/blog/${post.slug.current}`} className="block">
                      {/* Image */}
                      <div className="w-full aspect-[16/9] bg-[#87c1b6]/15 rounded-md overflow-hidden mb-4 relative">
                        {post.mainImage?.asset?.url ? (
                          <Image
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#87c1b6]/50">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 9 5 12L16 9l4.5 11"/>
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {post.categories?.map((cat) => (
                          <span
                            key={cat.title}
                            className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-[#87c1b6] bg-[#87c1b6]/10 px-2 py-0.5 rounded-sm"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            {cat.title}
                          </span>
                        ))}
                        <span className="text-[0.65rem] text-[#5a6578]" style={{ fontFamily: 'var(--font-body)' }}>
                          {new Date(post.publishedAt).toLocaleDateString('es-CO', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        {post.readTime && (
                          <span className="text-[0.65rem] text-[#5a6578]" style={{ fontFamily: 'var(--font-body)' }}>
                            · {post.readTime} min
                          </span>
                        )}
                      </div>

                      <h2
                        className="font-display text-[1.05rem] font-bold text-[#404e66] leading-snug mb-2 group-hover:text-[#87c1b6] transition-colors"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p
                          className="text-[0.8rem] text-[#5a6578] leading-relaxed line-clamp-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                    </Link>

                    <div className="mt-3 pt-3 border-t border-[#e6e6e6]">
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#87c1b6] hover:text-[#404e66] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Leer artículo →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
