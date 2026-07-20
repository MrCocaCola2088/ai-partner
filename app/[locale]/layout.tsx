import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {BackToTop} from '@/components/back-to-top';
import {CookieBanner} from '@/components/cookie-banner';
import {LiveChatPlaceholder} from '@/components/live-chat-placeholder';
import {Navbar} from '@/components/navbar';
import {ThemeProvider} from '@/components/providers/theme-provider';
import {SiteFooter} from '@/components/site-footer';
import {routing} from '@/i18n/routing';
import {siteConfig} from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const canonical = locale === 'es' ? `/${locale}` : `/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map((item) => item.trim()),
    alternates: {
      canonical,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${siteConfig.siteUrl}/${locale}`,
      siteName: siteConfig.name,
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_30%)]" />
          <div className="relative">
            <Navbar />
            {children}
            <SiteFooter />
            <BackToTop />
            <LiveChatPlaceholder />
            <CookieBanner />
          </div>
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
