import {getTranslations} from 'next-intl/server';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {convertUsdToBob, formatCurrency, siteConfig} from '@/lib/site';

export async function PlanCards({locale, linked = false}: {locale: string; linked?: boolean}) {
  const t = await getTranslations({locale});

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {siteConfig.pricesUsd.map((price, index) => (
        <Card key={price} className={index === 1 ? 'border-cyan-400/30 bg-cyan-400/10' : ''}>
          <CardContent className="space-y-4">
            {index === 1 && <Badge className="bg-cyan-300 text-slate-950">{t('PricingPage.popular')}</Badge>}
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{t(`PricingPage.plans.${index}.name`)}</h2>
            <p className="text-4xl font-semibold text-slate-950 dark:text-white">{formatCurrency(price, 'USD', locale)}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t('PricingPage.approx')} {formatCurrency(convertUsdToBob(price), 'BOB', locale)}
            </p>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`PricingPage.plans.${index}.description`)}</p>
            <Button asChild className="w-full">
              {linked ? (
                <Link href="/diagnostico">{t('PricingPage.cta')}</Link>
              ) : (
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
