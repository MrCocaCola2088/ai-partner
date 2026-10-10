import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {PricingTable} from '@/components/pricing-table';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {pageMetadata, routeSeo} from '@/lib/seo';
import {siteConfig, whatsappHref} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.precios.en : routeSeo.precios.es;
  return pageMetadata(locale, '/precios', copy);
}

export default async function PricingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});
  const lang = locale === 'en' ? 'en' : 'es';
  const message = lang === 'es' ? 'Hola, quiero mi agente de WhatsApp.' : 'Hi, I want my WhatsApp agent.';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{t('Pricing.eyebrow')}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">{t('Pricing.title')}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{t('Pricing.description')}</p>
      </div>
      <div className="mt-10">
        <PricingTable locale={locale} />
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t('Pricing.note')}</p>
      <Card className="mt-10 border-cyan-400/20 bg-cyan-400/10">
        <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">{t('FinalCta.title')}</h2>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{t('FinalCta.description')}</p>
          </div>
          <Button asChild>
            <a href={whatsappHref(message)} target="_blank" rel="noreferrer">
              {t('FinalCta.primaryCta')} → {siteConfig.phoneDisplay}
            </a>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
