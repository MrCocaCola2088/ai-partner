import {getTranslations} from 'next-intl/server';
import {Button} from '@/components/ui/button';
import {planWhatsappHref, subscriptionPlans, type PlanLang} from '@/lib/plans';

export async function PricingTable({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'Pricing'});
  const lang: PlanLang = locale === 'en' ? 'en' : 'es';

  const rows: Array<{label: string; cells: Array<string | boolean>}> = [
    {label: t('rows.agents'), cells: subscriptionPlans.map((plan) => plan.agents[lang])},
    {label: t('rows.whatsapp'), cells: subscriptionPlans.map((plan) => plan.whatsapp)},
    {label: t('rows.quotes'), cells: subscriptionPlans.map((plan) => plan.quotes)},
    {label: t('rows.report'), cells: subscriptionPlans.map((plan) => plan.report)},
    {label: t('rows.billing'), cells: subscriptionPlans.map((plan) => plan.billing)},
    {label: t('rows.integration'), cells: subscriptionPlans.map((plan) => plan.integration)},
    {label: t('rows.implementation'), cells: subscriptionPlans.map(() => t('included'))},
    {label: t('rows.support'), cells: subscriptionPlans.map((plan) => plan.support[lang])},
  ];

  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="p-4 font-medium text-slate-500 dark:text-slate-400" scope="col">
              {t('eyebrow')}
            </th>
            {subscriptionPlans.map((plan) => (
              <th key={plan.id} className="p-4 align-bottom" scope="col">
                <p className="text-lg font-semibold text-slate-950 dark:text-white">{plan.name[lang]}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  USD {plan.priceUsd}
                  <span className="text-base font-medium text-slate-500 dark:text-slate-300">{t('perMonth')}</span>
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/10">
              <th className="p-4 font-medium text-slate-700 dark:text-slate-200" scope="row">
                {row.label}
              </th>
              {row.cells.map((cell, index) => (
                <td key={`${row.label}-${subscriptionPlans[index].id}`} className="p-4 text-slate-700 dark:text-slate-200">
                  {typeof cell === 'boolean' ? (
                    <span aria-label={cell ? t('yes') : t('no')}>{cell ? '✔' : '—'}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th className="p-4" scope="row" />
            {subscriptionPlans.map((plan) => (
              <td key={plan.id} className="p-4">
                <Button asChild className="w-full">
                  <a href={planWhatsappHref(plan, lang)} target="_blank" rel="noreferrer">
                    {plan.cta[lang]}
                  </a>
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
