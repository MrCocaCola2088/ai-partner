'use client';

import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {siteConfig} from '@/lib/site';

const industryLinks = [
  {href: '/agente-ia-whatsapp', label: 'whatsapp'},
  {href: '/ia-para-clinicas', label: 'clinics'},
  {href: '/ia-para-inmobiliarias', label: 'realEstate'},
  {href: '/agente-para-ferreterias', label: 'hardware'},
] as const;

export function SiteFooter() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : '/en';

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AI Partner</p>
          <p className="mt-3 max-w-md leading-7">{t('description')}</p>
          <p className="mt-3 leading-7">Santa Cruz de la Sierra, Bolivia.</p>
          <p className="mt-4 leading-7">
            <a className="hover:text-white" href={siteConfig.whatsappUrl}>
              WhatsApp: {siteConfig.phoneDisplay}
            </a>
            <br />
            <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">{t('navigation')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/" className="hover:text-white">{t('home')}</Link>
            <a href={`${prefix}/#proceso`} className="hover:text-white">{t('process')}</a>
            <a href={`${prefix}/#agentes`} className="hover:text-white">{t('agents')}</a>
            <Link href="/precios" className="hover:text-white">{t('pricing')}</Link>
            <a href={`${prefix}/#preguntas`} className="hover:text-white">{t('faq')}</a>
            <a href={`${prefix}/#contacto`} className="hover:text-white">{t('contact')}</a>
            <Link href="/blog" className="hover:text-white">{t('blog')}</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{t('industries')}</p>
          <div className="mt-3 flex flex-col gap-2">
            {industryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {t(item.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:px-8">
          <p>{siteConfig.legalLine}</p>
          <p>{t('company')}</p>
          <p>
            {t('copyright')} 🇧🇴
          </p>
        </div>
      </div>
    </footer>
  );
}
