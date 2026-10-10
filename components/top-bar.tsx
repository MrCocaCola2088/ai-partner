'use client';

import {useLocale, useTranslations} from 'next-intl';
import {whatsappHref} from '@/lib/site';

const demoMessage = {
  es: 'Hola, quiero ver cómo responde un agente de IA en WhatsApp.',
  en: 'Hi, I want to see how an AI agent replies on WhatsApp.',
};

export function TopBar() {
  const t = useTranslations('TopBar');
  const locale = useLocale();
  const lang = locale === 'en' ? 'en' : 'es';

  return (
    <div className="border-b border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-3 text-sm text-slate-200 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>{t('text')}</p>
        <a className="font-medium text-cyan-200 hover:text-white" href={whatsappHref(demoMessage[lang])} target="_blank" rel="noreferrer">
          {t('cta')}
        </a>
      </div>
    </div>
  );
}
