import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {convertUsdToBob, formatCurrency, siteConfig} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'PricingPage'});

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `/${locale}/pricing`,
      languages: {
        es: '/es/pricing',
        en: '/en/pricing',
      },
    },
  };
}

export default async function PricingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const plans = [250, 500, 900];

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>{t('PricingPage.eyebrow')}</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">{t('PricingPage.title')}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{t('PricingPage.description')}</p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((price, index) => (
          <Card key={price} className={index === 1 ? 'border-cyan-400/30 bg-cyan-400/10' : ''}>
            <CardContent className="space-y-4">
              {index === 1 && <Badge className="bg-cyan-300 text-slate-950">{t('PricingPage.popular')}</Badge>}
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{t(`PricingPage.plans.${index}.name`)}</h2>
              <p className="text-4xl font-semibold text-slate-950 dark:text-white">{formatCurrency(price, 'USD', locale)}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t('PricingPage.approx')}{' '}
                {formatCurrency(convertUsdToBob(price), 'BOB', locale)}
              </p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`PricingPage.plans.${index}.description`)}</p>
              <Button asChild className="w-full">
                <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">
                  {t('PricingPage.cta')}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
