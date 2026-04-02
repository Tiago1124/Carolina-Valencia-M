import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de carolinavalencia.co',
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#f8f6f3] pt-28 pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="font-display text-[2.5rem] font-bold text-[#404e66] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Política de Privacidad
            </h1>
            <div className="prose max-w-none text-[#6b6b6b] leading-relaxed space-y-4" style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem' }}>
              <p><strong className="text-[#404e66]">Última actualización:</strong> {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long' })}</p>
              <p>Carolina Valencia M. (en adelante "nosotros" o "el titular") se compromete a proteger la privacidad de los usuarios de carolinavalencia.co.</p>
              <h2 className="font-display text-[1.3rem] font-bold text-[#404e66] mt-6" style={{ fontFamily: 'var(--font-display)' }}>Datos que recopilamos</h2>
              <p>Cuando completas el formulario de diagnóstico o de contacto, recopilamos tu nombre y correo electrónico con el único propósito de brindarte el servicio solicitado.</p>
              <h2 className="font-display text-[1.3rem] font-bold text-[#404e66] mt-6" style={{ fontFamily: 'var(--font-display)' }}>Uso de los datos</h2>
              <p>Los datos recopilados se usan exclusivamente para responder tu consulta, enviarte el diagnóstico o comunicarnos sobre servicios. No vendemos ni compartimos tu información con terceros.</p>
              <h2 className="font-display text-[1.3rem] font-bold text-[#404e66] mt-6" style={{ fontFamily: 'var(--font-display)' }}>Tus derechos</h2>
              <p>Tienes derecho a acceder, rectificar o eliminar tus datos. Para hacerlo, escríbenos a <a href="mailto:carovalenciam@outlook.com" className="text-[#87c1b6] hover:underline">carovalenciam@outlook.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
