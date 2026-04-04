import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://carolinavalencia.co'),
  title: {
    default: 'Carolina Valencia M. | Estrategia Comercial & Marca Personal',
    template: '%s | Carolina Valencia M.',
  },
  description: 'Consultoría de estrategia comercial y marketing para empresas FMCG y retail que quieren crecer con rentabilidad. Construcción de marca personal para ejecutivos C-Level. +20 años de experiencia en Colombia.',
  keywords: ['estrategia comercial Colombia', 'consultoría marketing FMCG', 'marca personal ejecutivos', 'trade marketing Colombia', 'Fabricando Ideas', 'Carolina Valencia', 'consultora marketing'],
  authors: [{ name: 'Carolina Valencia M.' }],
  openGraph: {
    type: 'website', locale: 'es_CO',
    url: 'https://carolinavalencia.co',
    siteName: 'Carolina Valencia M. — Fabricando Ideas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Carolina Valencia M.' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Carolina Valencia M.',
          jobTitle: 'Consultora de Estrategia Comercial y Marketing',
          description: 'Más de 20 años de experiencia en marketing, FMCG, retail y marca personal.',
          url: 'https://carolinavalencia.co',
          sameAs: ['https://www.linkedin.com/in/gerentedemercadeo'],
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
