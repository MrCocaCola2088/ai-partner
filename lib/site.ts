const DEFAULT_BOB_EXCHANGE_RATE = 6.96;

export const siteConfig = {
  name: 'AI Partner',
  defaultLocale: 'es' as const,
  locales: ['es', 'en'] as const,
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ai-partner.website').replace(/\/$/, ''),
  email: 'eduardourzua2088@gmail.com',
  phone: '+59177056858',
  phoneDisplay: '+591 77056858',
  whatsappUrl: 'https://wa.me/59177056858',
  linkedinUrl: 'https://www.linkedin.com/in/eduardo-urzua/',
  instagramUrl: 'https://www.instagram.com/humanevolution2088/',
  founderName: 'Eduardo Urzúa',
  city: 'Santa Cruz de la Sierra, Bolivia',
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    'https://calclear.app/s/eduardourzua2088/llamada-de-descubrimiento',
  assessmentUrl:
    process.env.NEXT_PUBLIC_ASSESSMENT_URL ?? 'https://forms.office.com/r/WjYk0T7Kt5',
  exchangeRate: Number(process.env.NEXT_PUBLIC_BOB_EXCHANGE_RATE ?? DEFAULT_BOB_EXCHANGE_RATE),
  pricesUsd: [250, 500, 900] as const,
  ogImagePath: '/og-image.png',
};

export type AppLocale = (typeof siteConfig.locales)[number];

export function isDefaultLocale(locale: string) {
  return locale === siteConfig.defaultLocale;
}

/** Public path without locale prefix, always starting with `/` (`/` for home). */
export function absoluteUrl(locale: string, path: string) {
  const normalized = path === '/' || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (isDefaultLocale(locale)) {
    return normalized === '/' ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}${normalized}`;
  }
  return normalized === '/'
    ? `${siteConfig.siteUrl}/${locale}`
    : `${siteConfig.siteUrl}/${locale}${normalized}`;
}

export function getLocalizedPath(locale: string, path = '') {
  const normalized = path === '/' ? '' : path;
  if (isDefaultLocale(locale)) {
    return normalized || '/';
  }
  return `/${locale}${normalized}`;
}

export function formatCurrency(amount: number, currency: 'USD' | 'BOB', locale: string) {
  return new Intl.NumberFormat(locale === 'es' ? 'es-BO' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function convertUsdToBob(usd: number) {
  return Math.round(usd * siteConfig.exchangeRate);
}

export function formatLongDate(isoDate: string, locale: string) {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-BO' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
