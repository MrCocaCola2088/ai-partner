'use client';

import {Menu, X} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import {LocaleSwitcher} from '@/components/locale-switcher';
import {ThemeToggle} from '@/components/theme-toggle';
import {Button} from '@/components/ui/button';
import {Link} from '@/i18n/navigation';
import {cn} from '@/lib/utils';

const sectionIds = ['services', 'process', 'cases', 'about', 'contact'] as const;

export function Navbar() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all',
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-white uppercase">
          AI Partner
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <Link className="text-sm text-slate-300 transition hover:text-white" href="/">
            {t('home')}
          </Link>
          {sectionIds.map((id) => (
            <a
              key={id}
              className="text-sm text-slate-300 transition hover:text-white"
              href={`${locale === 'es' ? '' : '/en'}/#${id}`}
            >
              {t(id)}
            </a>
          ))}
          <Link href="/tecnologias" className="text-sm text-slate-300 transition hover:text-white">
            {t('technologies')}
          </Link>
          <Link href="/blog" className="text-sm text-slate-300 transition hover:text-white">
            {t('blog')}
          </Link>
          <Link href="/precios" className="text-sm text-slate-300 transition hover:text-white">
            {t('pricing')}
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button asChild>
            <Link href="/diagnostico">{t('cta')}</Link>
          </Button>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/6 p-2 text-slate-100 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={t('toggleMenu')}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm text-slate-200">
              {t('home')}
            </Link>
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`${locale === 'es' ? '' : '/en'}/#${id}`}
                className="text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {t(id)}
              </a>
            ))}
            <Link href="/tecnologias" className="text-sm text-slate-200" onClick={() => setOpen(false)}>
              {t('technologies')}
            </Link>
            <Link href="/blog" className="text-sm text-slate-200" onClick={() => setOpen(false)}>
              {t('blog')}
            </Link>
            <Link href="/precios" className="text-sm text-slate-200" onClick={() => setOpen(false)}>
              {t('pricing')}
            </Link>
            <div className="flex items-center justify-between pt-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
            <Button asChild>
              <Link href="/diagnostico" onClick={() => setOpen(false)}>
                {t('cta')}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
