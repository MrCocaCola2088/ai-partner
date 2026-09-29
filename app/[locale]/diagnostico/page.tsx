import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {DiagnosisForm} from '@/components/diagnosis-form';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {pageMetadata, routeSeo} from '@/lib/seo';
import {siteConfig} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.diagnostico.en : routeSeo.diagnostico.es;
  return pageMetadata(locale, '/diagnostico', copy);
}

export default async function DiagnosisPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const es = locale !== 'en';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{es ? 'Sin costo' : 'No cost'}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {es ? 'Diagnóstico gratuito de IA para tu empresa' : 'Free AI assessment for your company'}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {es
            ? 'En unos veinte minutos vemos qué proceso se repite, qué herramienta ya usás y si el plan de USD 250, USD 500 o USD 900 al mes tiene sentido. No es una demo de producto ni un compromiso de contratar.'
            : 'In about twenty minutes we look at which process repeats, which tool you already use and whether the USD 250, USD 500 or USD 900 per month plan makes sense. It is not a product demo or an obligation to hire.'}
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardContent className="space-y-4">
            {[
              es
                ? 'Contanos qué vende la empresa y quién responde hoy WhatsApp, el correo o la planilla.'
                : 'Tell us what the company sells and who answers WhatsApp, email or the sheet today.',
              es
                ? 'Elegimos un solo proceso para la primera versión. No intentamos automatizar todo en la misma conversación.'
                : 'We pick a single process for the first version. We do not try to automate everything in the same conversation.',
              es
                ? 'Salís con una recomendación de plan y, si corresponde, el siguiente paso por WhatsApp o por una llamada.'
                : 'You leave with a plan recommendation and, if it fits, a next step on WhatsApp or a call.',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {es ? `Paso ${index + 1}` : `Step ${index + 1}`}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step}</p>
              </div>
            ))}
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              {es ? 'También podés escribir directo a ' : 'You can also write directly to '}
              <a className="text-cyan-200 underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{' '}
              {es ? 'o al' : 'or'}{' '}
              <a className="text-cyan-200 underline" href={siteConfig.whatsappUrl}>
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
            <Button variant="secondary" asChild>
              <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">
                {es ? 'Abrir el formulario extendido' : 'Open the longer form'}
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-cyan-400/20 bg-slate-950 text-white">
          <CardContent>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
              {es ? 'Escribinos por WhatsApp' : 'Message us on WhatsApp'}
            </p>
            <div className="mt-4">
              <DiagnosisForm locale={locale} />
            </div>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {es ? 'Los alcances y precios están en ' : 'Scope and prices are on '}
        <Link className="text-cyan-200 underline" href="/precios">
          {es ? 'la página de precios' : 'the pricing page'}
        </Link>
        .
      </p>
    </main>
  );
}
