'use client';

import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {siteConfig} from '@/lib/site';

const landingLabels: Record<string, {es: string; en: string}> = {
  'agente-ia-whatsapp': {es: 'Agente de IA para WhatsApp', en: 'WhatsApp AI agent'},
  'ia-para-clinicas': {es: 'IA para clínicas', en: 'AI for clinics'},
  'ia-para-inmobiliarias': {es: 'IA para inmobiliarias', en: 'AI for real estate'},
  'automatizacion-de-procesos': {es: 'Automatización de procesos', en: 'Process automation'},
  'capacitacion-ia-empresas': {es: 'Capacitación en IA', en: 'AI training'},
  'qa-testing-ia': {es: 'QA y testing de IA', en: 'AI QA and testing'},
};

export function SiteFooter() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const lang = locale === 'en' ? 'en' : 'es';
  const hashBase = locale === 'es' ? '' : '/en';

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AI Partner</p>
          <p className="mt-3 max-w-md leading-7">{t('description')}</p>
          <p className="mt-4 leading-7">
            <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <a className="hover:text-white" href={siteConfig.whatsappUrl}>{siteConfig.phoneDisplay}</a>
            <br />
            {siteConfig.city}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">{t('navigation')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/" className="hover:text-white">{t('home')}</Link>
            <Link href="/precios" className="hover:text-white">{t('pricing')}</Link>
            <Link href="/tecnologias" className="hover:text-white">{t('technologies')}</Link>
            <Link href="/blog" className="hover:text-white">{t('blog')}</Link>
            <Link href="/diagnostico" className="hover:text-white">{t('diagnosis')}</Link>
            <a href={`${hashBase}/#contact`} className="hover:text-white">{t('contact')}</a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{t('solutions')}</p>
          <div className="mt-3 flex flex-col gap-2">
            {Object.entries(landingLabels).map(([slug, label]) => (
              <Link key={slug} href={`/${slug}`} className="hover:text-white">
                {label[lang]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{t('ctaTitle')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/diagnostico" className="hover:text-white">{t('assessment')}</Link>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              {t('booking')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
