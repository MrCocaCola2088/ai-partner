import type {Metadata} from 'next';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Página no encontrada | AI Partner',
  robots: {index: false, follow: false},
};

export default function LocaleNotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">Página no encontrada</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
        No encontramos esa página. Revisá el enlace o volvé al inicio para ver servicios, precios y el diagnóstico gratuito.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/diagnostico">Diagnóstico gratuito</Link>
        </Button>
      </div>
    </main>
  );
}
