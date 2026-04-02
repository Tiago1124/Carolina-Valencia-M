import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f8f6f3] min-h-screen flex items-center justify-center pt-16">
          <div className="text-center px-6">
            <span className="font-display text-[8rem] font-bold text-[#87c1b6]/20 block leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              404
            </span>
            <h1 className="font-display text-[2rem] font-bold text-[#404e66] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Página no encontrada
            </h1>
            <p className="text-[0.92rem] text-[#6b6b6b] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              La página que buscas no existe o fue movida.
            </p>
            <Link href="/" className="btn-primary">← Volver al inicio</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
