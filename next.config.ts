import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  typedRoutes: true,
  async redirects() {
    return [
      {source: '/pricing', destination: '/precios', permanent: true},
      {source: '/es/pricing', destination: '/precios', permanent: true},
      {source: '/en/pricing', destination: '/en/precios', permanent: true},
    ];
  },
};

export default withNextIntl(nextConfig);
