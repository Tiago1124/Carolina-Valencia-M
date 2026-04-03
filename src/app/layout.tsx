import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://carolinavalencia.co'),
  title: {
    default: 'Carolina Valencia M. | Estrategia Comercial & Marca Personal',
    template: '%s | Carolina Valencia M.',
  },
  description:
    'Consultoría de estrategia comercial y marketing para empresas que quieren crecer con rentabilidad. Construcción de marca personal para ejecutivos C-Level en Colombia.',
  keywords: [
    'estrategia comercial Colombia',
    'consultoría marketing FMCG',
    'marca personal ejecutivos',
    'trade marketing Colombia',
    'Fabricando Ideas',
    'Carolina Valencia',
    'consultora marketing Cali',
    'employee advocacy Colombia',
  ],
  authors: [{ name: 'Carolina Valencia M.' }],
  creator: 'Carolina Valencia M.',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://carolinavalencia.co',
    siteName: 'Carolina Valencia M. — Fabricando Ideas',
    title: 'Carolina Valencia M. | Estrategia que mueve el negocio',
    description:
      'Más de 20 años ayudando a empresas líderes a crecer con rentabilidad. Estrategia comercial, marca personal C-Level y EGC.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carolina Valencia M. — Fabricando Ideas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carolina Valencia M. | Fabricando Ideas',
    description: 'Consultoría de estrategia comercial y marca personal en Colombia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://carolinavalencia.co',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Carolina Valencia M.',
              jobTitle: 'Consultora de Estrategia Comercial y Marketing',
              description:
                'Más de 20 años de experiencia en marketing, FMCG, retail y marca personal.',
              url: 'https://carolinavalencia.co',
              sameAs: ['https://www.linkedin.com/in/gerentedemercadeo'],
              knowsAbout: [
                'Estrategia Comercial',
                'Trade Marketing',
                'FMCG',
                'Marca Personal',
                'Employee Advocacy',
                'P&L',
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
