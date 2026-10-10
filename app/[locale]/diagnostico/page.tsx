import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {DiagnosisForm} from '@/components/diagnosis-form';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {pageMetadata, routeSeo} from '@/lib/seo';
import {siteConfig, whatsappHref} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.diagnostico.en : routeSeo.diagnostico.es;
  return pageMetadata(locale, '/diagnostico', copy);
}

export default async function StartPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const es = locale !== 'en';
  const message = es ? 'Hola, quiero mi agente de WhatsApp.' : 'Hi, I want my WhatsApp agent.';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{es ? 'Suscripción mensual' : 'Monthly subscription'}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {es ? 'Quiero mi agente de WhatsApp' : 'I want my WhatsApp agent'}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {es
            ? 'Escribinos y te mostramos cómo funcionaría en tu negocio, sin compromiso. La implementación está incluida en la suscripción.'
            : 'Message us and we will show you how it would work in your business, with no obligation. Implementation is included in the subscription.'}
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardContent className="space-y-4">
            {[
              es
                ? 'Contanos qué vende tu negocio y quién responde hoy el WhatsApp.'
                : 'Tell us what your business sells and who answers WhatsApp today.',
              es
                ? 'Elegís un plan: Básico (USD 250), Crecimiento (USD 500) o Pro (USD 900).'
                : 'You choose a plan: Basic (USD 250), Growth (USD 500) or Pro (USD 900).',
              es
                ? 'Nosotros cargamos tu información, conectamos el agente y lo probamos antes de que hable con clientes.'
                : 'We load your information, connect the agent and test it before it talks to customers.',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                  {es ? `Paso ${index + 1}` : `Step ${index + 1}`}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{step}</p>
              </div>
            ))}
            <Button asChild>
              <a href={whatsappHref(message)} target="_blank" rel="noreferrer">
                WhatsApp {siteConfig.phoneDisplay}
              </a>
            </Button>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              {es ? 'También podés escribir a ' : 'You can also write to '}
              <a className="text-cyan-200 underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              .
            </p>
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
        {es ? 'Los planes y precios están en ' : 'Plans and prices are on '}
        <Link className="text-cyan-200 underline" href="/precios">
          {es ? 'la página de planes' : 'the plans page'}
        </Link>
        .
      </p>
    </main>
  );
}
