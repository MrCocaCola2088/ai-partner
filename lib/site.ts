const DEFAULT_BOB_EXCHANGE_RATE = 6.96;

export const siteConfig = {
  name: 'AI Partner',
  defaultLocale: 'es',
  locales: ['es', 'en'] as const,
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    'https://calclear.app/s/eduardourzua2088/llamada-de-descubrimiento',
  assessmentUrl:
    process.env.NEXT_PUBLIC_ASSESSMENT_URL ??
    'https://forms.office.com/r/WjYk0T7Kt5',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  city: 'Santa Cruz de la Sierra, Bolivia',
  exchangeRate: Number(process.env.NEXT_PUBLIC_BOB_EXCHANGE_RATE ?? DEFAULT_BOB_EXCHANGE_RATE),
};

export function getLocalizedPath(locale: string, path = '') {
  return `/${locale}${path}`;
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
