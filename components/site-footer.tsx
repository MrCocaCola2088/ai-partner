import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {siteConfig} from '@/lib/site';

export function SiteFooter() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">AI Partner</p>
          <p className="mt-3 max-w-md leading-7">{t('description')}</p>
        </div>
        <div>
          <p className="font-semibold text-white">{t('navigation')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/" className="hover:text-white">{t('home')}</Link>
            <Link href="/pricing" className="hover:text-white">{t('pricing')}</Link>
            <a href={`/${locale}/#contact`} className="hover:text-white">{t('contact')}</a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">{t('ctaTitle')}</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              {t('assessment')}
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
