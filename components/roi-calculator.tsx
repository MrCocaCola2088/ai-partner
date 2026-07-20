'use client';

import {useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';
import {siteConfig, formatCurrency} from '@/lib/site';

export function RoiCalculator() {
  const t = useTranslations('RoiCalculator');
  const locale = useLocale();
  const [hours, setHours] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(18);
  const [automationGain, setAutomationGain] = useState(35);

  const monthlySavings = useMemo(
    () => (hours * hourlyCost * automationGain) / 100,
    [automationGain, hourlyCost, hours]
  );

  return (
    <Card>
      <CardContent className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-white">{t('title')}</h3>
            <p className="mt-2 text-sm text-slate-300">{t('description')}</p>
          </div>
          <label className="block text-sm text-slate-300">
            {t('hours')}: <span className="text-white">{hours}</span>
            <input
              className="mt-2 w-full accent-cyan-400"
              type="range"
              min="10"
              max="200"
              value={hours}
              onChange={(event) => setHours(Number(event.target.value))}
            />
          </label>
          <label className="block text-sm text-slate-300">
            {t('cost')}: <span className="text-white">{hourlyCost} USD</span>
            <input
              className="mt-2 w-full accent-cyan-400"
              type="range"
              min="5"
              max="60"
              value={hourlyCost}
              onChange={(event) => setHourlyCost(Number(event.target.value))}
            />
          </label>
          <label className="block text-sm text-slate-300">
            {t('gain')}: <span className="text-white">{automationGain}%</span>
            <input
              className="mt-2 w-full accent-cyan-400"
              type="range"
              min="10"
              max="80"
              value={automationGain}
              onChange={(event) => setAutomationGain(Number(event.target.value))}
            />
          </label>
        </div>
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t('result')}</p>
          <div className="mt-3 text-4xl font-semibold text-white">
            {formatCurrency(monthlySavings, 'USD', locale)}
          </div>
          <p className="mt-3 text-sm text-slate-300">
            {t('approx')} {formatCurrency(Math.round(monthlySavings * siteConfig.exchangeRate), 'BOB', locale)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
