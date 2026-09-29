import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ConversionCta} from '@/components/conversion-cta';
import {PlanCards} from '@/components/plan-cards';
import {Badge} from '@/components/ui/badge';
import {pageMetadata, routeSeo} from '@/lib/seo';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.precios.en : routeSeo.precios.es;
  return pageMetadata(locale, '/precios', copy);
}

export default async function PricingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{t('PricingPage.eyebrow')}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">{t('PricingPage.title')}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{t('PricingPage.description')}</p>
      </div>
      <div className="mt-10">
        <PlanCards locale={locale} linked />
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
        {locale === 'en'
          ? 'Prices are USD 250, USD 500 and USD 900 per month. There is no long contract. The free assessment decides which plan fits before you start.'
          : 'Los precios son USD 250, USD 500 y USD 900 por mes. No hay contrato largo. El diagnóstico gratuito define qué plan encaja antes de empezar.'}
      </p>
      <div className="mt-10">
        <ConversionCta locale={locale} />
      </div>
    </main>
  );
}
