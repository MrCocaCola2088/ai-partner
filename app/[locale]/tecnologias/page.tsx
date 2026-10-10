import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {ConversionCta} from '@/components/conversion-cta';
import {Badge} from '@/components/ui/badge';
import {Link} from '@/i18n/navigation';
import {pageMetadata, routeSeo} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.tecnologias.en : routeSeo.tecnologias.es;
  return pageMetadata(locale, '/tecnologias', copy);
}

export default async function TechnologiesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const es = locale !== 'en';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{es ? 'WhatsApp Business' : 'WhatsApp Business'}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {es ? 'Funciona sobre WhatsApp Business' : 'Runs on WhatsApp Business'}
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          <p>
            {es
              ? 'Los agentes de AI Partner atienden en el WhatsApp que tus clientes ya usan. No hace falta que instalen otra aplicación ni que cambien de número.'
              : 'AI Partner agents answer on the WhatsApp your customers already use. They do not install another app or change numbers.'}
          </p>
          <p>
            {es
              ? 'En el plan Pro conectamos esos agentes con el sistema que ya usás: planillas, sistema de ventas o facturación. El plan Básico y el plan Crecimiento cubren la atención, las cotizaciones y el seguimiento sin esa conexión.'
              : 'On the Pro plan we connect those agents to the system you already use: spreadsheets, sales software or invoicing. Basic and Growth cover service, quotes and follow-up without that connection.'}
          </p>
          <p>
            {es ? (
              <>
                Los precios están en{' '}
                <Link className="text-cyan-200 underline" href="/precios">
                  planes
                </Link>
                . La implementación está incluida en la suscripción.
              </>
            ) : (
              <>
                Prices are on{' '}
                <Link className="text-cyan-200 underline" href="/precios">
                  plans
                </Link>
                . Implementation is included in the subscription.
              </>
            )}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <ConversionCta locale={locale} />
      </div>
    </main>
  );
}
