import type {Metadata} from 'next';
import {Button} from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Página no encontrada | AI Partner',
  description: 'La página que buscás no existe o fue movida.',
  robots: {index: false, follow: false},
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-24 text-center text-slate-200">
      <div className="max-w-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Página no encontrada</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Esa dirección no existe en AI Partner. Podés volver al inicio, ver los planes o pedir un diagnóstico gratuito.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            {/* Public URLs are rewritten to the locale segment; they are not typed App Router paths. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Volver al inicio</a>
          </Button>
          <Button variant="secondary" asChild>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/diagnostico">Diagnóstico gratuito</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
